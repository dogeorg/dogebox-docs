# Generic VM

Any VM software capable of booting from an ISO image should suffice.

We currently release `x86_64` and `aarch64` (`ARM64`) images, other architectures may work if you manually build your own bootable ISO image.

A few things to note:

- The ISO images currently only support UEFI boot.
- We recommend `>4GB` of ram, but as low as `1GB` should suffice.
- A couple of cores should be the minimum, especially if you plan to install a Core node.
- A way to directly hit your VM on specific ports is necessary.
  - Bridged mode is the easiest, but some VM software let you forward specific ports. If you do this, `8080` and `3000` are necessary for the Web UI to work, along with other ports specified in [Forwarding Ports](../../howto/ports.md).
