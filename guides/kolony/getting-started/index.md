# Getting Started

# Introduction
kolony is a new self hosted deployment tool for Node.js apps. It is similar to software like [Dokku](https://github.com/dokku/dokku) or [Flynn](https://flynn.io/), however it is based off of [PM2](http://pm2.keymetrics.io/) instead of [Docker](https://www.docker.com/) which means it can run on cheap OpenVZ servers like [VPSDime](https://vpsdime.com/aff.php?aff=1576) (affiliate link), as well as more expensive KVM servers like [DigitalOcean](https://m.do.co/c/4bfd9876d75a) (affiliate link). It will work out of the box for [konstructor](https://github.com/konstructorjs/konstructor) applications, but can also be configured to work with any Node.js app.

# Quick Start

## Requirements
- [git](https://git-scm.com/)
- [nginx](https://www.nginx.com/resources/wiki/)
- [nvm](https://github.com/creationix/nvm)
- [pm2](http://pm2.keymetrics.io/)
- `node >= 6.0.0`
- `npm >= 4`

Install kolony through npm.
```
npm install -g kolony
```

Then run the setup. If there are any problems, make sure you fix them before continuing.
```
$ kolony setup

--> checking to see if git is installed
    git is installed

--> checking to see if nginx is installed
    nginx is installed

--> checking to see if nvm is installed
    nvm is installed

--> checking to see if pm2 is installed
    pm2 is installed

--> looking for kolony dir
    created folder

--> looking for git dir
    created folder

--> looking for builds dir
    created folder

--> looking for domains dir
    created folder

--> looking for ecosystems dir
    created folder

```

Then create a new app in kolony with your desired name. It must contain only lowercase letters and hyphens.
```
$ kolony apps:create my-app

--> creating git repository
    created project directory
    initialized git repository

--> setting up repository
    linked files
    set up hooks

--> setting up pm2
    created ecosystem config

```

For this guide, we are going to deploy a [konstructor](https://github.com/konstructorjs/konstructor) application so no configuration is needed. If you are deploying a non-konstructor application, look at the configuration sections of the [builds](https://konstructor.js.org/guides/kolony/builds/stages) guide for more information on how to properly set up your deployment stages.

Inside of your konstructor application, add your kolony application as a remote and push.
```
$ git remote add deploy root@$SERVER_IP:my-app
$ git push deploy master
Counting objects: 27, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (24/24), done.
Writing objects: 100% (27/27), 4.98 KiB | 0 bytes/s, done.
Total 27 (delta 1), reused 0 (delta 0)
remote: 
remote: --> building application 6sPoqL
remote:
remote: --> cloning application
remote: 
remote: --> looking for existing build
remote:     couldnt not find existing build
remote: 
remote:     could not find existing port
remote:     generated new port 8159
remote: 
remote: --> looking for package.json
remote:     found package.json
remote: 
remote: --> looking for node and npm versions
remote:     installing node stable
remote: 
remote: --> configuring environment variables
remote: 
remote: --> running pre-install script
remote:     no pre-install script defined
remote: 
remote: --> running install script
remote:
remote:   added 1440 packages in 30.127s
remote:
remote: --> running post-install script
remote:     no post-install script defined
remote:
remote: --> running pre-build script
remote:
remote:   > my-app@0.0.0 clean
remote:   > konstructor clean
remote:
remote:   removed compiled assets
remote:
remote: --> running build script
remote:
remote:   > my-app@0.0.0 build
remote:   > konstructor build
remote:   
remote:    DONE  Compiled successfully in 1635ms13:10:54
remote:   
remote:             Asset       Size  Chunks             Chunk Names
remote:        /js/app.js  564 bytes       0  [emitted]  /js/app
remote:       css/app.css  403 bytes       0  [emitted]  /js/app
remote:    /js/app.js.map  702 bytes       0  [emitted]  /js/app
remote:   css/app.css.map   77 bytes       0  [emitted]  /js/app
remote: 
remote: --> running post-build script
remote:   
remote:   > my-app@0.0.0 digest
remote:   > konstructor digest
remote:   
remote:   moving app.js to app-64d8c0058e270ebed1f6365e7b822785.js
remote:   moving app.css to app-1a82143fcd53a7b2b55d00523c5f09b7.css
remote: 
remote: --> starting server
remote:     started server on port 8159
remote: 
remote: --> application successfully deployed
remote: 
To $SERVER_IP:my-app
 * [new branch]      master -> master
```

Once you successfully deploy your app, it is almost ready to go. You can view your deployed app at `$SERVER_IP:$PORT`. You can find the port by looking deploy logs (above) or running `apps:list`.
```
$ kolony apps:list

id      name         port  environment  domains
------  -----------  ----  -----------  -------
cygpT   konstructor  9637  production   konstructor.ludicrous.xyz
                                        konstructor.js.org
6fSRwX  my-app       8159  production   none

```

However, an address like `127.0.0.1:8159` is ugly, hard to find, and not user friendly. To get around this, you can add a custom domain through kolony which will set up nginx as a proxy.
```
$ kolony domains:add my-app my-app.com

--> looking for application
    found my-app

    found port 8159

--> checking to see if domain is already in use
    domain is not in use

--> adding my-app.com to nginx
    generated nginx config file
    linked to nginx

--> saving application information

--> reloading nginx
    nginx reloaded

```

Now all you have to do is set an DNS A record that points to your IP address, and visit the URL. Thats it!
