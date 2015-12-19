# Angular File
Angular File is an Angularjs component that can upload files via XMLHttpRequest, provides drag & drop support.

- [Demo](http://modulr.io/components/angular-file/)
- Backend and Frontend [examples](https://github.com/Modulr/angular-file/tree/master/examples)

![](http://modulr.io/img/preview/angular-file.png)

##Features

- Uses the native Angularjs scope for data binding
- Drag & Drop
- Multiple or single files uploads
- Image preview
- Update progress
- Large files support


##Requirements

- [Angularjs](https://angularjs.org/)
- [Bootstrap 3.](http://getbootstrap.com/)

##Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/Modulr/angular-file/archive/master.zip)
- Clone the repo: `git clone https://github.com/Modulr/angular-file.git`.
- Install with [Bower](http://bower.io/): `bower install mdr-angular-file`.
- Install with [npm](https://www.npmjs.com): `npm install mdr-angular-file`.

##What's included

```
angular-file/
  dist/
    ├── mdr-file.css
    ├── mdr-file.min.css
    ├── mdr-file.js
    └── mdr-file.min.js
```

##Documentation

####Usage

######Load CSS

```html
<link href="angular-file/dist/mdr-file.min.css">
```

######Load JS

```html
<script href="angular-file/dist/mdr-file.min.js"></script>
```

######Code

```js
angular.module('MyApp', ['mdr.file'])
```

######HTML View or Templates

> Basic Directive

```html
<mdr-file url="upload.php"></mdr-file>
```

> Complete Directive (All attributes)

```html
<mdr-file url="upload.php" model="model" data="{hola:'mundo'}" headers="{token:'shhh'}" size="5" limit="10" formats="'jpg,png,gif'" disabled="true" multiple="true" text="Arrastra o haz clic aquí"></mdr-file>
```

####API

######Attributes

Attribute | Type | Description
--- | --- | ---
url | `string` | *Is the path on the server where the file will be uploaded.* **Note:** *The parameter received on the server is* `file`
model | `object` | *It is the scope model where uploaded files will be saved.*
data | `object` | *Data to be sent to the server.*
headers | `object` | *Send headers to the server.*
size | `number` | *Max size in MB to file.*
limit | `number` | *Max number files to upload.*
formats | `string,array` | *Extensions permitted to the file.*
multiple | `boolean` | *If required to upload a multiple file is marked as true.*
disabled | `boolean` | *If required disable the component is marked as true.*
text | `string` | *Text into area drag and drop.*

##How to contribute

All contributions are very welcome, We love it. There are several ways to help out:

- Create an [issue](https://github.com/Modulr/angular-file/issues) on GitHub, if you have found a bug
- Write test cases for open bug issues
- Write patches for open bug/feature issues, preferably with test cases included
- Contribute to the documentation

There are a few guidelines that we need contributors to follow so that we have a chance of keeping on top of things.

If you want to making changes Better avoid working directly on the `master` branch, to avoid conflicts if you pull in updates from origin, so, if make your contribution under the branch [`dev`](https://github.com/Modulr/angular-file/tree/dev), into folder `src/`.

##Community

- Implementation help may be found at Stack Overflow (tagged [`mdr-file`](http://stackoverflow.com/questions/tagged/mdr-file)).

##Creators

[@AlfredoBarronC](https://twitter.com/AlfredoBarronC)

## Copyright and license

Code and documentation (c) Copyright 2015 Modulr. Code published under [license MIT](https://github.com/Modulr/angular-file/blob/dev/LICENSE)
