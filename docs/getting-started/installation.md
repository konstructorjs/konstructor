## Installation
The easiest way to get started with konstructor is to use konstructor-cli. Install konstructor-cli through npm, and use it to create the application.
```
npm install -g konstructor-cli
konstructor-cli new blog
cd blog
npm install
npm run dev
```

The generated project comes with everything you need to get started. The main codebase for the application is under the `app` directory, while the assets are under the `assets` directory. The `app` folder is processed and run by konstructor, and the `assets` directory is compiled through laravel-mix which is a library that provied a simple wrapper over webpack.
