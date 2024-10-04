# Inbound Ports: 22556 (core), 42069 (Dogenet)

Depending on what Pups you install you will likely want to forward 
inbound connections. Installing Dogecoin Core Pup requires port 22556 
and for Dogenet 42069, other Pups may also require inbound connection 
forwarding, depending on what they do. 

# Home routers
In most homes, computers connect to the Internet through a modem or a router, 
which is configured to block incoming connections to most ports. To forward 
ports, you will need to follow the following steps. 

Please refer to your router’s manual for specific instructions.


1. Access your router’s control panel using your internet browser. Usually, most 
   routers have a control panel accessible at https://192.168.0.1 or at
   https://192.168.1.1. Sometimes, a sticker is placed on the bottom or the side 
   of the router listing the IP.

2. Login into the control panel of the router. You will need to use the username 
   and password provided by the router manufacturer. Sometimes, a sticker is placed 
   on the bottom or the side of the router revealing the admin password. 

3. In the router’s control panel, assign a static IP to your Dogebox. This is normally 
   done in the Dynamic Host Configuration Protocol (DHCP) page.

4. In the router’s control panel, configure port forwarding: forward all inbound 
   traffic from 22556 (core) and 42069 (Dogenet) to the same ports at the static IP 
   you assigned to your Dogebox.
