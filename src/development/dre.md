# DRE Development Environment

The Dogebox exclusively runs on NixOS as its linux-base.

### Install NixOS in a VM

There are multiple ways of accomplishing this. The easiest way by far is to use [Orbstack](https://orbstack.dev/) which supports NixOS VMs natively, and provides useful filesystem and host-network sharing.

The rest of this guide will assume you are using Orbstack, or a VM solution that lets you bind to your hosts network interfaces.

### Clone required repositories

There are 3 repositories that provide the foundational building blocks for Dogebox. Please `git clone` all of these.

- [Dogeboxd](https://github.com/dogeorg/dogeboxd) - `https://github.com/dogeorg/dogeboxd.git`
- [DPanel](https://github.com/dogeorg/dpanel) - `https://github.com/dogeorg/dpanel.git`
- [DKM](https://github.com/dogeorg/dkm) - `https://github.com/dogeorg/dkm.git`

Please note: `dogeboxd` & `dpanel` must be cloned into the same parent directory. You can clone `DKM` anywhere.

### Configure your Nix environment

As we're running a development environment, some things must be configured manually.

#### Import `dogebox.nix`

Edit `/etc/nixos/configuration.nix`. Towards the top of the file there should be an `imports` section.

Please modify it to conditionally include the `dogebox.nix` file that will live in `$HOME/data/nix/dogebox.nix`

For example, if your existing imports block looks like:

```nix
  imports =
    [
      "${modulesPath}/virtualisation/lxc-container.nix"
      ./lxd.nix
    ];
```

Please change it to:

```nix
  imports =
    [
      "${modulesPath}/virtualisation/lxc-container.nix"
      ./lxd.nix
    ] ++ lib.optionals (builtins.pathExists "/home/$USER/data/nix/dogebox.nix") [
      /home/$USER/data/nix/dogebox.nix
    ];
```

Where `$USER` is the user you have inside your NixOS VM.

#### Add required packages

Edit `/etc/nixos/configuration.nix`. Inside the main `{ ... }` block, please add:

```nix
environment.systemPackages = [ pkgs.git pkgs.vim ];
```

nb. Vim is not required, but lots of people get annoying that it is not available :)

#### Add required security wrappers

Edit `/etc/nixos/configuration.nix`. Inside the main `{ ... }` block, please add:

```nix
security.wrappers.dbx = {
  source = "/home/$USER/dogeboxd/build/dbx";
  owner = "$USER";
  group = "users";
};

security.wrappers.dogeboxd = {
  source = "/home/$USER/dogeboxd/build/dogeboxd";
  capabilities = "cap_net_bind_service=+ep";
  owner = "$USER";
  group = "users";
};

security.wrappers._dbxroot = {
  source = "/home/$USER/dogeboxd/build/_dbxroot";
  owner = "root";
  group = "root";
  setuid = true;
};
```

**Please note:** Please fix these paths, they assume you have cloned `dogeboxd` into the users home directory. If you cloned them elsewhere, update the paths.
**Please note:** There are multiple instances of `$USER` that need replacing, please update all of them.

#### Rebuild

Once you've added the above, you can rebuild your VM to ensure it's in a proper state to execute everything.

Please run: `sudo nixos-rebuild switch`. Assuming this succeeds, you're ready to rock and roll.

### Starting Services

You need to be running `dogeboxd` and `dkm` at the same time to have things working. `dpanel` is served via `dogeboxd` automatically, assuming they've been cloned into the same parent directory.

Both services contain a `shell.nix` which provides all the necessary dependencies for executing the service.

Both services also contain a `Makefile` that provides a `dev` command that run things in a "default" development mode.

##### Starting `dogeboxd`

```bash
cd dogeboxd
nix-shell
make dev
```

##### Starting `dkm`

```bash
cd dkm
nix-shell
make dev
```

`dogeboxd` should now be listening on [http://127.0.0.1:3000](http://127.0.0.1:3000) and should be ready in setup mode.

After initial setup has completed, you will need to re-run `make dev` for `dogeboxd` to launch it again in normal-mode. Please see below for more details.

### Things to note

- In development mode, any time the service would trigger a `shutdown` or `restart`, the dogeboxd process will `exit` instead.
- In development mode your dogeboxd/dpanel sessions will persist across service restarts. This will not happen in non-development mode.
- You can run `make recovery` to force dogeboxd into recovery mode.
- All data for both `dogeboxd` and `DKM` is written to `~/data`. Deleting this directory will reset your state.
