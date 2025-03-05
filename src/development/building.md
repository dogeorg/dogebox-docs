# Building Dogebox

Building images for Dogebox requires the Dogebox repository, and a Linux OS with nix tooling installed.

[https://github.com/dogeorg/dogebox/](https://github.com/dogeorg/dogebox/)

For help building images be sure to join [Developer Discord Server](https://discord.gg/VEUMWpThg9)

## Installer image for the NanoPC T6

### Building

<div class="warning">
Please note: This will take a while on first build, as the T6 image needs to compile the linux kernel initially.
</div>

To build an image for the T6, open a shell in the root of this repository and then run the following.

```
nix-shell
make t6
```

The resulting image will end up as `result/dogebox-*-t6.img`.

### Copying to MicroSD Card

<details>
  <summary>MacOS</summary>

If building the image from within an Orb VM, you need to copy this image out to your host first:

1. `cp result/*.img /private/tmp`.

This will move the image file to the `/tmp` directory.

On your host:

1. `brew install pv` to get tooling for progress.
2. Run `sudo diskutil list` and find the `/dev/` device for your MicroSD card.
3. Unmount the MicroSD card with `sudo diskutil umountDisk /dev/disk100000` (replace with proper disk number)
4. Run `sudo dd if=/tmp/dogebox-*-t6.img | sudo pv | sudo dd of=/dev/rdisk10000 bs=16m` (note: `rdisk` here, not `disk`, and replace with proper disk number)

</details>

<details>
  <summary>Linux</summary>

1. Install PV using your fav/os package manager.
2. Determine disk device.
3. `sudo dd if=/path/to/dogebox-t6.img | sudo pv | sudo dd of=/dev/disk10000 bs=16m` (replace with proper disk number)

</details>

<details>
  <summary>Windows</summary>

TODO

</details>

## Other image types.

Available types:

- `iso-aarch64`
- `iso-x86_64`
- `qemu-aarch64`
- `qemu-x86_64`
- `vbox-x86_64`
- `vm-x86_64`

Build the resulting image with: `make <type>`.
