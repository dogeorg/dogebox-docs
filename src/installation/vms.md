# Virtual Machines

## Download images

Head over to [https://github.com/dogeorg/dogebox/releases](https://github.com/dogeorg/dogebox/releases) and download
the appropriate image for your VM platform.

## Other Virtual Machines

Any virtual machine that supports x86_64 OVA or ISO images should work.

Please consider the following:

- Network Bridged Mode is required, so you can visit the Dogebox DPanel in your web browser. When you create your new virtual machine, configure this in the settings (or command-line options). See screenshots above for an example.
- Your virtual machine must support a display, so you can log in and find out its IP address. Again, see screenshots above for an example.

### QEMU

Instructions for QEMU can be found at the bottom of [this page](https://github.com/dogeorg/dogebox).

#### First run

Click the Play button to start your Virtual Machine. Follow steps 5 though 7 described above for VirtualBox:

5. Start your VM and wait for it to boot,
6. Login and find out your IP address,
7. In a web browser, visit the DogeBox Setup page, as described above.

#### Restart your Dogebox

When the DogeBox Setup page asks you to Restart your Dogebox:

- Go back to the Virtual Machine login window and enter command `sudo shutdown -h now` to shut down cleanly.
- Wait for the window to clear - it becomes a big play button
- Switch back to the main UTM window
- At the bottom of the Virtual Machine's info page, find the CD/DVD drop-down (you might need to scroll down)
- Click on it and choose `Clear` so it becomes `(empty)` - this removes the installer image.
- Then, click the Play button to launch the VM again.

#### Shut Down your Dogebox

If you want to stop your DogeBox Virtual Machine:

- Go back to the Virtual Machine login window.
- Log in if necessary with username: `shibe` and password: `suchpass`
- Enter command `sudo shutdown -h now` to shut down cleanly.

It's a good idea to do this every time you want to shut down the DogeBox, otherwise stopping it with the Stop button risks corrupting the virtual disk image, and you would have to delete the virtual machine and start over.
