# Home Assistant Configuration

Configuration for my [home-assistant](https://www.home-assistant.io) setup running on
[Hassbian](https://www.home-assistant.io/docs/installation/hassbian/installation/) on a
[Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/).

[![Static version](https://img.shields.io/badge/version-0.90.2-blue.svg)](https://github.com/benct/home-assistant-config/blob/master/.HA_VERSION)
![Maintained](https://img.shields.io/maintenance/yes/2019.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/benct/home-assistant-config.svg)
![GitHub code size](https://img.shields.io/github/languages/code-size/benct/home-assistant-config.svg)
[![GitHub licence](https://img.shields.io/github/license/benct/home-assistant-config.svg)](https://github.com/benct/home-assistant-config/blob/master/LICENCE)

[March 19] Updated with Lovelace UI configuration.

[![BMC](https://www.buymeacoffee.com/assets/img/custom_images/white_img.png)](https://www.buymeacoff.ee/benct)

## Hardware

- [Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)
- [Telldus Tellstick ZNet Lite v2](https://home-assistant.io/components/tellduslive/)
- [Netatmo Weather Station](https://home-assistant.io/components/netatmo/)
- [Google Home Mini](https://www.home-assistant.io/components/google_assistant/)
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
- [Raspberry Pie Camera V2](https://www.home-assistant.io/components/camera.rpi_camera/)

#### Media:
- [Samsung Smart TV](https://home-assistant.io/components/media_player.samsungtv/)
- [Onkyo Receiver](https://www.home-assistant.io/components/media_player.onkyo/)
- [Google ChromeCast](https://www.home-assistant.io/components/media_player.cast/)
- [Spotify](https://www.home-assistant.io/components/media_player.spotify/)

#### Weather:
- [YR.no](https://www.home-assistant.io/components/sensor.yr/)
- [Met.no](https://www.home-assistant.io/components/weather.met/)

## Theme
Frontend using new Lovelace UI configuration and components. See [ui-lovelace.yaml](https://github.com/benct/home-assistant-config/blob/master/ui-lovelace.yaml).

[Midnight theme](https://community.home-assistant.io/t/midnight-theme/28598) from the HA Community.

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
sudo certbot renew
cp /etc/letsencrypt/live/your.site/your-keys.pem /ha-ssl-folder
```

## Screenshots

![Home Tab](https://raw.githubusercontent.com/benct/home-assistant-config/master/screenshots/ha-main.png)

![Livingroom Tab](https://raw.githubusercontent.com/benct/home-assistant-config/master/screenshots/ha-livingroom.png)

![Bedroom Tab](https://raw.githubusercontent.com/benct/home-assistant-config/master/screenshots/ha-bedroom.png)

![System Tab](https://raw.githubusercontent.com/benct/home-assistant-config/master/screenshots/ha-system.png)
