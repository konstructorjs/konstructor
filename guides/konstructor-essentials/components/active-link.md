# Active Link
# Introduction
Active link should be used for menu bars that require an `active` or `is-active` class. It supports defining a custom active class such as `is-active` or `currently-active` isntead of `active` as well as glob patterns for deeper match.

# Usage
Simply use the tag anywhere in your templates, usually in the navbar.
```
<active-link(input) href="/guides" match="/guides/**/*" active-class="is-active" class="navbar-item">guides</active-link>
```
You must pass the input from the template which contains the `route` key which is the current route.
- `href` - the path the link should go to.
- `match` - a glob pattern if you would like to match more than just the href link. For example, on this website, the guides tab is active on `/guides`, as well as `/guides/konstructor-essentials/active-link`. **if you pass a glob pattern, both the href and the glob pattern will be checked for a match**.
- `active-class` - the class you would like to add if the link is active. Defaults to `active`.
- `class` - any classes you would like pass additionally.
