# Import Javascripts
# Introduction
The `import-javascripts` tag simply loops over all js files you provide and import them.

# Usage
With konstructor, simply add the `import-javascripts` tag to your template while passing an object with a `js` key that is an array of files.
```
<import-javascripts js=input.assets.js() />
```
