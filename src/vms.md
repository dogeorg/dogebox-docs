# Virtual Machines


## Download images
Head over to [https://github.com/dogeorg/dogebox/releases](https://github.com/dogeorg/dogebox/releases) and download 
the appropriate image for your VM platform.

## Steps to run on VirtualBox
1. Download [Virtualbox](https://virtualbox.org), or another OVA compatible VM launcher.

2. Import the OVA image by selecting the file you downloaded from the latest release.
<p><img src="images/vb1.PNG" alt="import OVA" width="70%" style="margin-left: 15%;"/></p>


3. Ensure the VM has sufficient RAM for the software you plan to run on the Dogebox.
<p><img src="images/vb2.PNG" alt="Set RAM" width="70%" style="margin-left: 15%;"/></p>

4. Once imported, click 'Settings' and configure your network to use 'bridged mode'.

<p><img src="images/vb3.PNG" alt="import OVA" width="70%" style="margin-left: 15%;"/></p>

5. Launch the VM. This may take up to 10 minutes depending on your internet connection, to configure itself initially, grab a cuppa.

<p><img src="images/vb4.PNG" alt="import OVA" width="70%" style="margin-left: 15%;"/></p>

6. Login with username: `shibe` and password: `suchpass`, then run `ip addr`, it may look different to this but skip the first loopback interface 'lo' and look for the highlighted IP, in this example: `192.168.1.5`

<p><img src="images/vb5.PNG" alt="import OVA" width="70%" style="margin-left: 15%;"/></p>

7. Open your browser and visit http://&lt;ip&gt;:8080 to visit the setup experience and configure your dogebox.


