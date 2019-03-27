class AttributeEntityRow extends Polymer.Element {

    static get template() {
        return Polymer.html`
          <style>
            .main {
              display: flex;
              align-items: center;
              height: 40px;
            }
            .flex {
              margin-left: 16px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              min-width: 0;
              flex: 1 1 0;
            }
            .info, .info > * {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .info {
              flex: 1 0 60px;
            }
            .secondary, ha-relative-time {
              display: block;
              color: var(--secondary-text-color);
            }
            .attribute {
              color: var(--secondary-text-color);
              margin-right: 16px;
              font-size: 10px;
            }
            .state {
              min-width: 45px;
              text-align: end;
              text-transform: capitalize;
            }
            .toggle {
              margin-left: 8px;
            }
          </style>
          <div class="main">
            <state-badge state-obj="[[stateObj]]" hass="[[_hass]]"></state-badge>
            <div class="flex">
              <div class="info">
                [[name]]
                <div class="secondary">
                  [[attributeString(stateObj, primary)]]
                </div>
              </div>
            </div>
            <div class="attribute">
              [[attributeString(stateObj, secondary)]]
            </div>
            <template is="dom-if" if="{{displayValue}}">
              <span class="state">
                [[stateString(stateObj)]]
              </span>
            </template>
            <template is="dom-if" if="{{displayToggle}}">
              <span class="toggle">
                <ha-entity-toggle state-obj="[[stateObj]]" hass="[[_hass]]"></ha-entity-toggle>
              </span>
            </template>
          </div>
        `;
    }

    setConfig(config) {
        if (!config.entity) throw new Error('Please define an entity.');
        if (config.primary && !config.primary.key) throw new Error('Please define a primary attribute key.');
        if (config.secondary && !config.secondary.key) throw new Error('Please define a secondary attribute key.');

        const controllers = {
            light: {
                string: (stateObj, i18n) => {
                    if (stateObj.state === 'off') return i18n['state.default.off'];
                    return `${stateObj.state === 'on' ? Math.ceil(stateObj.attributes.brightness * 100.0 / 255) : 0} %`;
                },
                toggle: true,
            },
            media_player: {
                string: stateObj => {
                    if (stateObj.attributes.is_volume_muted) return '-';
                    return `${stateObj.attributes.is_volume_muted ? 0 : Math.ceil(stateObj.attributes.volume_level * 100.0)} %`;
                },
                toggle: false,
            },
            switch: {
                string: stateObj => stateObj.state,
                toggle: true,
            },
            default: {
                string: stateObj =>
                    stateObj.state + (stateObj.attributes.unit_of_measurement ? ` ${stateObj.attributes.unit_of_measurement}` : ''),
                toggle: false,
            }
        };

        this._config = config;
        this.stateObj = null;
        const domain = config.entity.split('.')[0];
        this.controller = controllers[domain] || controllers.default;

        this.displayToggle = config.toggle && this.controller.toggle;
        this.displayValue = !this.displayToggle && !config.hide_state;
    }

    stateString(stateObj) {
        let i18n = this._hass.resources[this._hass.language];
        if (!stateObj) return i18n['state.default.unavailable'];
        return this.controller.string(stateObj, i18n);
    }

    attributeString(stateObj, attribute) {
        if (!stateObj || !attribute || !attribute.key) return null;
        if (attribute.entity) {
            stateObj = attribute.entity in this._hass.states ? this._hass.states[attribute.entity] : null;
            if (!stateObj) return null;
        }
        let i18n = this._hass.resources[this._hass.language];
        const value = stateObj.attributes[attribute.key] || i18n['state.default.unavailable'];
        return (attribute.name ? `${attribute.name} ` : '') + value + (attribute.unit ? ` ${attribute.unit}` : '');
    }

    set hass(hass) {
        this._hass = hass;

        if (hass && this._config) {
            this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;
            if (this.stateObj) {
                this.name = this._config.name || this.stateObj.attributes.friendly_name;
                this.primary = this._config.primary;
                this.secondary = this._config.secondary;
            }
        }
    }
}

customElements.define('attribute-entity-row', AttributeEntityRow);
