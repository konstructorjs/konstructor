# Config
## Get
You can list out the environment variables for an app throught `config:get`.
```
$ kolony config:get my-app

key                    value                                   
---------------------  ----------------------------------------
PORT                   4997
NODE_ENV               production
NPM_CONFIG_LOGLEVEL    error
NPM_CONFIG_PRODUCTION  false
NODE_VERBOSE           false

```
## Set
If you want to add an environment variable, you can do it through `config:set`.
```
$ kolony config:set my-app SECRET_KEY_BASE="1234567890" API_KEY="1234567890"

--> looking for application
    found application my-app

--> processing environment variables
    adding 2 environment variables
    added environment variables

--> restarting application
    app restarted successfully

--> successfully added the following environment variables
    SECRET_KEY_BASE=1234567890
    API_KEY=1234567890

```
This will add the environment variables and if the application is already deployed, the process will be restarted with the new environment variables.
## Unset
If you want to remove any environment variables, you can do it by using `config:unset` followed by the keys you would like to remove.
```
$ kolony config:unset my-app SECRET_KEY_BASE API_KEY

--> looking for application
    found application my-app

--> processing environment variables
    removing 2 environment variables
    removed environment variables

--> restarting application
    app restarted successfully

--> successfully removed the following environment variables
    SECRET_KEY_BASE
    API_KEY

```
