# Stages
## Initialize
Before the installation, kolony will look for an old build. If that build exists, by default kolony will copy over the `node_modules` directory (but not the `package-lock.json`) to help speed up the builds.

### Configuration
Option to disable using old `node_modules` coming soon.

## Node
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

## Environment
Next, the environment variables will be injected into both the current build process and the final production pm2 process.

### Configuration
You can configure the environment variables through the [config command](https://konstructor.js.org/guides/kolony/config).

## Install
kolony will then run `npm install` using the node version you specified.

### Configuration
Option to configure `npm install` will come soon.

## Clean
This stage is to clean up any assets you have. kolony will run `npm run clean` using the node version you specified.

### Configuration
Option to configure this stage will come soon. For now, just set the `clean` script to an empty string if you do not need to clean your assets.

## Build
This stage is to build your assets. kolony will run `npm run build` using the node version you specified.

### Configuration
Option to configure this stage will come soon. For now, just set the `build` script to an empty string if you do not need to clean your assets.

## Digest
This stage is to digest your assets. In konstructor, it will fingerprint the assets so that the cache will clear. It is recommended that you should do this, but it not required. kolony will run `npm run digest` using the node version you specified.

### Configuration
Option to configure this stage will come soon. For now, just set the `digest` script to an empty string if you do not need to clean your assets.

## Start
This stage will start up a new pm2 process. It will inject your environment variables, then run `npm start`. Make sure your application runs on the port specified by the `PORT` environment variable.

### Configuration
To configure this stage, modify the `start` script in your `package.json`.

## Cleanup
This final stage will clean up the old process. It will shutdown, then delete the old process if the deploy of the new process is successful. Then it will remove the old build directory. If there is any problem with these steps, it will **not** fail the build since the new process is already running. In case of failure, please manually stop the old process and delete the old folder.

### Configuration
None.
