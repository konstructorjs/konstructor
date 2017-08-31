# Organization

konstructor follows a "pods" like structure with its directories, where everything you need to handle an endpoint should be in the same folder.



## App

The app directory contains everything for the actual server. Here you will find the `routes.js` file, a folder for `models`, and a folder for each endpoint in your server.

## Assets

The assets directory contains all assets you need to serve. By default there is a `css` folder that contains your scss, a `js` folder for your javascripts and a `static` folder for static assets like images.



By default assets are compiled with [laravel-mix](https://github.com/JeffreyWay/laravel-mix), a simple wrapper around webpack to make configuration simple. The configuration is located in a file called `webpack.mix.js` in the project root directory.

## Config

The config directory contains all the configuration for your project. By default there are 3 files for database, development, and production configs. The database file contains information for knex on how to connect to your database. The development and production configs contain information on how to start the server and compile the assets in their respective environments.



You can also add your own custom config keys (like API keys) in the development and production configs and access them in your code by importing the config.

```javascript
const config = require('konstructor').config;
```

## DB

The database folder contains a `migrations` folder and a `seeds` folder which are used by knex. If you do not plan to use knex, you may remove this folder, as well as the `config/database.js` and `knexfile.js` files.