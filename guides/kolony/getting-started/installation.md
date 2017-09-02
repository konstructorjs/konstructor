# Installation

# Requirements
- [git](https://git-scm.com/)
- [nginx](https://www.nginx.com/resources/wiki/)
- [nvm](https://github.com/creationix/nvm)
- [pm2](http://pm2.keymetrics.io/)
- `node >= 6.0.0`
- `npm >= 4`

The easiest way to install kolony is through npm.
```
npm install -g kolony
```

Once it's installed, run the setup to verify everything is working, and to generate the required folders and files.

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

Once you've set up kolony, you can create an app using [`apps:create`](https://konstructor.js.org/guides/kolony/apps#create).
