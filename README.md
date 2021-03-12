# Home Assistant Configuration

Configuration for my [home-assistant](https://www.home-assistant.io) setup running on
[Home Assistant OS](https://github.com/home-assistant/operating-system) on a
[Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/).

[![Static version](https://img.shields.io/badge/version-2021.3.3-blue.svg)](https://github.com/benct/home-assistant-config/blob/master/.HA_VERSION)
![Maintained](https://img.shields.io/maintenance/yes/2021.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/benct/home-assistant-config.svg)
![GitHub code size](https://img.shields.io/github/languages/code-size/benct/home-assistant-config.svg)
[![GitHub licence](https://img.shields.io/github/license/benct/home-assistant-config.svg)](https://github.com/benct/home-assistant-config/blob/master/LICENCE)

## Hardware

- [Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)
- [Telldus Tellstick ZNet Lite v2](https://home-assistant.io/integrations/tellduslive/)
- [Netatmo Weather Station](https://home-assistant.io/integrations/netatmo/)
- [Google Nest Mini / Hub](https://www.home-assistant.io/integrations/google_assistant/)
- [Phillips Hue Hub](https://www.home-assistant.io/integrations/hue/)
- [Xiaomi Roborock Vacuum](https://www.home-assistant.io/integrations/xiaomi_miio/)

#### Devices:
- [Telldus Thermometer/hygrometer](http://telldus.com/produkt/inneute-termohygro-sensor-433mhz/)
- [Nexa MYCR-3 Plug](https://www.clasohlson.com/no/Nexa-MYCR-3,-3-pack-fjernstr%C3%B8mbrytere--/36-6902)
- [Nexa WMR-1000 Receiver](https://www.clasohlson.com/no/Nexa-WMR-1000-innbyggingsmottaker-p%C3%A5-av-/36-5940)
- [Luxorparts Outdoor Plug](https://www.kjell.com/no/produkter/elektro-og-verktoy/smarte-hjem/433mhz/fjernstrombryter/utenpaliggende-bryter/luxorparts-mini-fjernstrombryter-for-utendorsbruk-3000-w-p50990)
- [Fibaro Wall Plug](https://products.z-wavealliance.org/products/1653)
- [Fibaro Motion Sensor](https://products.z-wavealliance.org/products/2762)
- [Fibaro Smoke Sensor 2](https://products.z-wavealliance.org/products/1273)
- [Fibaro Flood Sensor](https://products.z-wavealliance.org/products/2791)
- [Fibaro Door/Window Sensor 2](https://products.z-wavealliance.org/products/2181)
- [Phillips Hue Lights](https://www.home-assistant.io/integrations/hue/)
- [Raspberry Pi Camera V2](https://www.home-assistant.io/integrations/rpi_camera/)

#### Media:
- [Samsung Smart TV](https://home-assistant.io/integrations/samsungtv/)
- [Onkyo Receiver](https://www.home-assistant.io/integrations/onkyo/)
- [Google ChromeCast](https://www.home-assistant.io/integrations/cast/)
- [Spotify](https://www.home-assistant.io/integrations/spotify/)

#### Weather:
- [Met.no](https://www.home-assistant.io/integrations/met/)

## Frontend

The frontend is using the new Lovelace UI, with a customized configuration and several custom cards.

[Home Assistant Community Store](https://github.com/hacs) (HACS) is used to install and update most of the custom cards/plugins.

### Theme

[Midnight theme](https://github.com/home-assistant-community-themes/midnight) from the HA Community (by marcelhoffs).

### My Lovelace Cards
I've created and currently maintain a few plugins (cards) for Home Assistant's Lovelace UI:

- [xiaomi-vacuum-card](https://github.com/benct/lovelace-xiaomi-vacuum-card)
- [multiple-entity-row](https://github.com/benct/lovelace-multiple-entity-row)
- [github-entity-row](https://github.com/benct/lovelace-github-entity-row)
- [battery-entity-row](https://github.com/benct/lovelace-battery-entity-row)

[![BMC](https://www.buymeacoffee.com/assets/img/custom_images/white_img.png)](https://www.buymeacoff.ee/benct)

## HassOS Maintenance

```bash
ssh root@192.168.0.XX
```

### SSH to host

- https://gist.github.com/enegaard/a57af286205914bd912270c89650fb1b
- https://developers.home-assistant.io/docs/operating-system/debugging/#ssh-access-to-the-host

```bash
ssh root@homeassistant -p 22222
```

## Hassbian Maintenance (deprecated)
```bash
cd /home/homeassistant/.homeassistant/

sudo systemctl start home-assistant@homeassistant.service
sudo systemctl stop home-assistant@homeassistant.service
sudo systemctl restart home-assistant@homeassistant.service
```

### Virtual Environment
```bash
sudo -u homeassistant -H -s
source /srv/homeassistant/bin/activate
```

### Upgrading
```bash
sudo apt-get update
sudo apt-get upgrade
```

Stop the home-assistant service before running the following:
```bash
sudo -u homeassistant -H -s
source /srv/homeassistant/bin/activate
pip3 install --upgrade homeassistant
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
