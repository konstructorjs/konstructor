# Apps
# List
You can list all applications in kolony through `app:list`.
```
$ kolony apps:list

id     name         port  environment  domains
-----  -----------  ----  -----------  -------
cygpT  konstructor  9637  production   konstructor.ludicrous.xyz
                                       konstructor.js.org
       my-app                          none
       test                            none

```
This will list all of your applications, and if they are deployed, the id, port, environment, and domains.
# Create
You can create a new application in kolony by running the `apps:create` command. It must contain only lowercase letters and hyphens.
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
This will set up a new git repository you can push to, and a pm2 config.
# Destroy
If you would like to get rid of and existing application, you can use `apps:destroy`.
```
$ kolony apps:destroy my-app

--> looking for application
    found application

--> removing application process
    application not running

--> removing project build directory
    build directory does not exist

--> removing links
    unlinked files

--> removing git directory
    git directory removed

--> removing ecosystem config
    removed ecosystem config

```
This will remove the git repository, any system links, pm2 configs, and the build directory if it exists.
