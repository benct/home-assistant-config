# Home Assistant Configuration

Configuration for my [home-assistant](https://www.home-assistant.io) setup running on
[Hassbian](https://www.home-assistant.io/docs/installation/hassbian/installation/) on a
[Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/).

[![Static version](https://img.shields.io/badge/version-0.105.3-blue.svg)](https://github.com/benct/home-assistant-config/blob/master/.HA_VERSION)
![Maintained](https://img.shields.io/maintenance/yes/2020.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/benct/home-assistant-config.svg)
![GitHub code size](https://img.shields.io/github/languages/code-size/benct/home-assistant-config.svg)
[![GitHub licence](https://img.shields.io/github/license/benct/home-assistant-config.svg)](https://github.com/benct/home-assistant-config/blob/master/LICENCE)

## Hardware

- [Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)
- [Telldus Tellstick ZNet Lite v2](https://home-assistant.io/components/tellduslive/)
- [Netatmo Weather Station](https://home-assistant.io/components/netatmo/)
- [Google Nest Mini / Hub](https://www.home-assistant.io/components/google_assistant/)
- [Phillips Hue Hub](https://www.home-assistant.io/components/hue/)
- [Xiaomi Roborock Vacuum](https://www.home-assistant.io/components/vacuum.xiaomi_miio/)

#### Devices:
- [Telldus Thermometer/hygrometer](http://telldus.com/produkt/inneute-termohygro-sensor-433mhz/)
- [Nexa MYCR-3 Plug](https://www.clasohlson.com/no/Nexa-MYCR-3,-3-pack-fjernstr%C3%B8mbrytere--/36-6902)
- [Nexa LWST-605 Switch](https://www.clasohlson.com/no/Nexa-LWST-605-trådløs-veggstrømbryter-/36-4614)
- [Nexa WMR-1000 Receiver](https://www.clasohlson.com/no/Nexa-WMR-1000-innbyggingsmottaker-p%C3%A5-av-/36-5940)
- [Luxorparts Outdoor Plug](https://www.kjell.com/no/produkter/elektro-og-verktoy/smarte-hjem/433mhz/fjernstrombryter/utenpaliggende-bryter/luxorparts-mini-fjernstrombryter-for-utendorsbruk-3000-w-p50990)
- [Fibaro Wall Plug](https://products.z-wavealliance.org/products/1653)
- [Fibaro Motion Sensor](https://products.z-wavealliance.org/products/2762)
- [Fibaro Smoke Sensor 2](https://products.z-wavealliance.org/products/1273)
- [Fibaro Flood Sensor](https://products.z-wavealliance.org/products/2791)
- [Fibaro Door/Window Sensor 2](https://products.z-wavealliance.org/products/2181)
- [Phillips Hue Lights](https://www.home-assistant.io/components/light.hue/)
- [Raspberry Pi Camera V2](https://www.home-assistant.io/components/camera.rpi_camera/)

#### Media:
- [Samsung Smart TV](https://home-assistant.io/components/media_player.samsungtv/)
- [Onkyo Receiver](https://www.home-assistant.io/components/media_player.onkyo/)
- [Google ChromeCast](https://www.home-assistant.io/components/media_player.cast/)
- [Spotify](https://www.home-assistant.io/components/media_player.spotify/)

#### Weather:
- [YR.no](https://www.home-assistant.io/components/sensor.yr/)
- [Met.no](https://www.home-assistant.io/components/weather.met/)

## Lovelace UI

Frontend is using the new Lovelace UI, with a customized configuration and several custom cards.

See [ui-lovelace.yaml](https://github.com/benct/home-assistant-config/blob/master/ui-lovelace.yaml) for more details.

### Theme

[Midnight theme](https://community.home-assistant.io/t/midnight-theme/28598) from the HA Community (by marcelhoffs).

### My Lovelace Cards
I've created and currently maintain a few plugins (cards) for Home Assistant's Lovelace UI:

- [xiaomi-vacuum-card](https://github.com/benct/lovelace-xiaomi-vacuum-card)
- [multiple-entity-row](https://github.com/benct/lovelace-multiple-entity-row)
- [github-entity-row](https://github.com/benct/lovelace-github-entity-row)
- [~~attribute-entity-row~~](https://github.com/benct/lovelace-attribute-entity-row)

[![BMC](https://www.buymeacoffee.com/assets/img/custom_images/white_img.png)](https://www.buymeacoff.ee/benct)

## Maintenance

```bash
ssh user@192.168.0.XX
cd /home/homeassistant/.homeassistant/
```

### Service
````bash
sudo systemctl start home-assistant@homeassistant.service
sudo systemctl stop home-assistant@homeassistant.service
sudo systemctl restart home-assistant@homeassistant.service

sudo su -s /bin/bash homeassistant
````

### Updating
```bash
sudo hassbian-config upgrade hassbian
sudo hassbian-config upgrade homeassistant
```

### Certificate

For initial setup see home-assistants [Let's Encrypt](https://www.home-assistant.io/docs/ecosystem/certificates/lets_encrypt/) guide.

```bash
sudo apt-get install certbot
sudo certbot certonly --standalone --preferred-challenges http-01 --email <email> -d <hostname>
chmod 755 /etc/letsencrypt/live/your.site/
chmod 755 /etc/letsencrypt/archive/your.site/

sudo certbot renew
```

### Nmap Tracker
```bash
sudo apt-get install net-tools nmap
sudo setcap cap_net_raw,cap_net_admin,cap_net_bind_service+eip /usr/bin/nmap
```

## Screenshots

![Home Tab](https://raw.githubusercontent.com/benct/home-assistant-config/master/screenshots/ha-main.png)

![Livingroom Tab](https://raw.githubusercontent.com/benct/home-assistant-config/master/screenshots/ha-livingroom.png)

![Bedroom Tab](https://raw.githubusercontent.com/benct/home-assistant-config/master/screenshots/ha-bedroom.png)

![System Tab](https://raw.githubusercontent.com/benct/home-assistant-config/master/screenshots/ha-system.png)
