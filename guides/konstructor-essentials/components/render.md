# Render
# Introduction
The render component will import your application template from `/app/application/index.marko`, and render content inside the current file into the `<include(input.main) />` tag in your application template.

# Usage
```
<render(input)> <!-- you must pass input into the render tag -->
  <h1>hello world</h1>
</render>
```

You must also add the include tag in your application template.
```
<include(input.main) />
```
