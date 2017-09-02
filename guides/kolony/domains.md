# Domains
## List
To list the domains you have attached to a kolony app, use `domains:list`.
```
$ kolony domains:list my-app

domains
----------
my-app.com

```
## Add
You can add domains to kolony applications which will set up nginx to proxy requests to your apps.
```
$ kolony domains:add my-app my-app.com

--> looking for application
    found my-app

    found port 4997

--> checking to see if domain is already in use
    domain is not in use

--> adding my-app.com to nginx
    generated nginx config file
    linked to nginx

--> saving application information

--> reloading nginx
    nginx reloaded

```
After adding a new domain, it is up to you to update your domain's DNS to point to the server.
## Remove
If you accidentally added the wrong domain or simply would like to remove a domain, use `domains:remove`.
```
$ kolony domains:remove my-app my-app.com

--> looking for application
    found my-app

--> verifying domain is added to this project
    found domain

--> updating nginx
    removed config file
    updated nginx

--> saving application information

--> reloading nginx
    nginx reloaded

```
