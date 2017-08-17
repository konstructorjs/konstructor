---
title: Getting Started
---

# Getting Started

## Introduction
This guide will help you get started with konstructor. It assumes that you have Node.js installed, as well as NPM. You can verify you have them installed by opening terminal or command prompt and running the following commands.
```
$ node -v
v8.4.0 # Your version may be different
$ npm -v
5.3.0 # Your version may be different
```
You must have a Node.js version above `v6.7.0`, and an NPM version above `4.0.0`. Please update your Node.js installation if you do not meed the requirement.

## Installing Konstructor CLI
Konstructor has a CLI to work alongside of it. It is useful for generating your project, and will include everything you need, like webpack and the default templates. Install `konstructor-cli` with NPM to create your first new app.
```
$ npm install -g konstructor-cli
```

## Creating Your Project
Once you have `konstructor-cli` installed, you can easily generate the project.
```
$ konstructor-cli new blog
generating project
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
getting started
	[run] cd blog
	[run] npm install
	[run] npm run dev
	[visit] http://localhost:3000
```

## Install the Dependencies
`CD` into your folder and install the dependencies.
```
$ cd blog
$ npm install
```
This may take several minutes and may consume a lot of internet.

## Run The Server
Once you are done installing dependencies, you may run the server.
```
$ npm run dev
```
