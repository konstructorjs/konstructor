# Import Stylesheets
# Introduction
The `import-stylesheets` tag simply loops over all css files you provide and import them.

# Usage
With konstructor, simply add the `import-stylesheets` tag to your template while passing an object with a `css` key that is an array of files.
```
<import-stylesheets css=input.assets.css() />
```
