# Stages
# Initialize
Before the installation, kolony will look for an old build. If that build exists, by default kolony will copy over the `node_modules` directory (but not the `package-lock.json`) to help speed up the builds.

### Configuration
Option to disable using old `node_modules` coming soon.

# Node
kolony will then work to install node and npm via `nvm`. By default it will install the latest stable version of node, and the npm version that comes along with it.

### Configuration
To set your own custom node version, use the [`engines`](https://docs.npmjs.com/files/package.json#engines) field in your package.json. **Do not use greater than, equal, less than, tilde, or any other symbols in the engines section.**
```json
{
  ...
  "engines": {
    "node": "8.3.0",
    "npm": "5.3.0"
  }
  ...
}
```

# Environment
Next, the environment variables will be injected into both the current build process and the final production pm2 process.

### Configuration
You can configure the environment variables through the [config command](https://konstructor.js.org/guides/kolony/commands/config).

# Pre Install
kolony will then run a `pre-install` script if it is defined.

### Configuration
You can define a `pre-install` script in your `package.json`.
```json
{
  ...
  "kolony": {
    "pre-install": "echo 'pre-install'"
  }
  ...
}
```

# Install
kolony will then run an install script. If you do not define an install script, it will automatically do `npm install`. If you would like to skip this step, you can set the script to an empty string.

### Configuration
You can define a `install` script in your `package.json`.
```json
{
  ...
  "kolony": {
    "install": "echo 'install'"
  }
  ...
}
```

# Post Install
kolony will then run a `post-install` script if it is defined.

### Configuration
You can define a `post-install` script in your `package.json`.
```json
{
  ...
  "kolony": {
    "post-install": "echo 'post-install'",
  }
  ...
}
```

# Pre Build
kolony will then run a `pre-build` script if it is defined.

### Configuration
You can define a `pre-build` script in your `package.json`.
```json
{
  ...
  "kolony": {
    "pre-build": "echo 'pre-build'"
  }
  ...
}
```

# Build
kolony will then run your build script. If you do not define a build script, it will automatically do `npm run build`. If you would like to skip this step, you can set the script to an empty string.

### Configuration
You can define a `build` script in your `package.json`.
```json
{
  ...
  "kolony": {
    "build": "echo 'build'"
  }
  ...
}
```

# Post Build
kolony will then run a `post-build` script if it is defined.

### Configuration
You can define a `post-build` script in your `package.json`.
```json
{
  ...
  "kolony": {
    "post-build": "echo 'post-build'",
  }
  ...
}
```

# Start
This stage will start up a new pm2 process. It will inject your environment variables, then run `npm start`. Make sure your application runs on the port specified by the `PORT` environment variable.

### Configuration
To configure this stage, modify the `start` script in your `package.json`.

# Cleanup
This final stage will clean up the old process. It will shutdown, then delete the old process if the deploy of the new process is successful. Then it will remove the old build directory. If there is any problem with these steps, it will **not** fail the build since the new process is already running. In case of failure, please manually stop the old process and delete the old folder.

### Configuration
None.
