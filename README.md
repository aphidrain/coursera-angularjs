# coursera-angularjs
## Coursera: Single Page Web Applications with AngularJS

### development environment set-up

#### nodejs
download nodejs package installer from https://nodejs.org.
```sh
# after nodejs installation make sure usr/local/bin is in path
$ echo $PATH

$ node --version
$ npm --version
```
#### browser-sync
```sh
# install browser sync (-g is global)
$ sudo npm install -g browser-sync
$ browser-sync --version

# browser sync to serve contents of a directory
$ browser-sync start --server --directory --files "**/*"
```
#### angularjs
download angularjs from https://code.angularjs.org/<latest version 1.x>/angular.min.js.
```html
<!-- index.html - div is part of view -->
<!doctype html>
<html ng-app="myApp">
  <head>
    <meta charset="utf-8">
    <script src="angular.min.js"></script>
    <script src="app.js"></script>
    <link rel="stylesheet" href="styles/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>angularjs</title>
  </head>
  <body>
     <div ng-controller="MyController"></div>
  </body>
  ...
```
```javascript
// app.js
(function () {
  'use strict';

  // module name and dependencies
  angular.module('myApp', [])
    .controller('MyController', function() {
    
    });

})();
```
```ruby
end.
```
