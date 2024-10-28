# UTM

<div class="warning">
UTM can only be used on Apple Silicon Macs (M1, M2, M3 models). If you have a different machine, please see the compatibility table in <a href="../vms.md">Virtual Machines</a>
</div>

## Downloading

Visit the [Dogebox releases page](https://github.com/dogeorg/dogebox/releases), and downloaded the latest asset ISO image for the `aarch64` architecture.

## Installing

#### Create new Machine

![](./images/utm_1.png)

#### Select Virtualise

![](./images/utm_2.png)

#### Select "Other" operating system

![](./images/utm_3.png)

#### Select the downloaded aarch64 ISO file

![](./images/utm_4.png)

#### Set the amount of ram you want

The default of `4096mb` is typically fine.

![](./images/utm_5.png)

#### Set the amount of storage you want

UTM uses sparse disk files, so a 500GB disk will not actually take up 500GB on your hard drive.

If you wish to sync the blockchain in this VM image, ensure you set this to over `300GB`.

![](./images/utm_6.png)

#### Skip any shared directory configuration

![](./images/utm_7.png)

#### Name your VM image and open settings

![](./images/utm_8.png)

### Configure Bridged networking

- Select `Network` on the lefthand side.
- Change `Network Mode` to `Bridged (Advanced)`

![](./images/utm_9.png)

### Save & Launch

![](./images/utm_9.png)

## Setup

Please see [Initial Setup](../setup.md)
