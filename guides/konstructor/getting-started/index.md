# Getting Started
# Introduction
This guide will help you quickly get up and running with konstructor. The entire guide will be in terms of a simple blog application.

# Philosophy
konstructor follows many different philosophies, and takes from many different frameworks. For example, the actual structure of the app and the MVC comes out of Rails, but the asset pipeline comes out of Laravel through Laravel Mix. The flexibility of allowing you to change exactly how the assets are compiled are inspired by the Phoenix Framework. konstructor also follows some of node's philosophies as well. You are able to configure most of the entire inner workings of the framework through config files. The entire framework is mostly just a bunch of very popular packages like koa, knex, objection.js, etc. strung together with a little bit of magic.

konstructors goal is to give you what you know and love about node and koa, without all of the set up involved so you can get started really quickly. Don't like or want knex? No problem. Don't import it.

# Quick Start
Install konstructor-cli.
```
npm install -g konstructor-cli
```

Then generate a new application.
```
$ konstructor-cli new my-app

--> generating project

    [create] .gitignore
    [create] .gitkeep
    [create] app/.gitkeep
    [create] app/application/.gitkeep
    [create] app/application/error.marko
    [create] app/application/index.marko
    [create] app/hello/.gitkeep
    [create] app/hello/index/.gitkeep
    [create] app/hello/index/index.js
    [create] app/hello/index/index.marko
    [create] app/models/.gitkeep
    [create] app/routes.js
    [create] assets/.gitkeep
    [create] assets/css/.gitkeep
    [create] assets/css/app.scss
    [create] assets/js/.gitkeep
    [create] assets/js/app.js
    [create] assets/static/.gitkeep
    [create] config/.gitkeep
    [create] config/database.js
    [create] config/development.js
    [create] config/production.js
    [create] db/.gitkeep
    [create] db/migrations/.gitkeep
    [create] db/seeds/.gitkeep
    [create] knexfile.js
    [create] package.json
    [create] public/.gitkeep
    [create] webpack.mix.js

--> getting started
    [run] cd my-app
    [run] npm install
    [run] npm run dev
    [visit] http://localhost:3000

```

Then cd into your app.
```
cd my-app
```

Install all of the dependencies.
```
npm install
```

Finally run the server.
```
npm run dev
```

You can visit your new website at [http://localhost:3000](http://localhost:3000).
