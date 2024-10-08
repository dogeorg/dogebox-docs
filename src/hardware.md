
# FriendlyElec T6 ARM Hardware installer

An alpha release of the Dogebox OS built specifically for the FriendlyElec NanoPC-T6.

**IMGs HERE >>** [https://github.com/dogeorg/dogebox/releases/tag/v0.1.1-beta-t6.1](https://github.com/dogeorg/dogebox/releases/tag/v0.1.1-beta-t6.1)

<p><img src="images/t6-diy.jpg" alt="Dogebox" width="70%" style="margin-left: 15%;"/></p>

## Things to note / What does not work

These things will all be fixed in a following release. This release is for tinkerers that are happy to re-flash a couple of times before a stable T6 release.

- The T6 bootloader only supports booting from MicroSD cards that are 32GB and smaller (SDHC, not SDXC) 
- There is no storage selector. You must manually install NixOS to the internal EMMC (or NVME drive, if you have one installed) if you want to install anything that requires more disk space (eg. Dogecoin Core)
- WiFi configuration during initial setup is currently not supported. The box must be connected to ethernet when you first boot Dogebox OS.

## How to flash MicroSD

 - Download the .img.gz file attached to the release.
 - Uncompress the image so you get the raw .img file.
 - On Linux & MacOS, use dd if= to write the file to the raw MicroSD device.
 - On Windows, use a raw image disk writer UI. There are multiple available.

## How to Setup

 - Ensure you have an ethernet cable plugged into your T6 box.
 - Insert the MicroSD card
 - Make sure the HDMI cable is plugged into HDMI1
 - Plug power in.
 - Wait until the box finishes booting, this could take anywhere from 2 to 10 minutes.
 - Once finished, login with the username shibe and the password suchpass
 - Run ip addr and take note of the address.
 - Visit http://ip:8080 to start configuring your dogebox.

# x86 Hardware Installer 
> x86 images are coming soon, please try our [VM images](./vms.md) for now. 
