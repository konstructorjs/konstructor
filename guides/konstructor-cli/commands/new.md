# New
# Introduction
The new command will generate a new project that has all of the files required to run konstructor. It also comes with [laravel-mix](https://github.com/JeffreyWay/laravel-mix) to help you easily compile your assets.

# Usage
Simply call the `new` command with the name of your application. The application name must be all lowercase letters and hyphens.
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
