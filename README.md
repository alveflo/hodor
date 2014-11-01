Hodor!
======

Minimalistic, simple and easy to use client routing provider that relies on jQuery.

#### Usage
```html
<script src="https://cdn.rawgit.com/victorzki/hodor/master/dist/hodor-min-0.0.1.js"></script>
```
#### API
The only available function is `hodor.use(path, file)` and is used to map a path against a file (see example below)
Views are generated into a div with attribute `data-hodor`.

#### Dependencies
* [jQuery](http://jquery.com/)

#### Example setup
```javascript
  var app = new hodor();
  app.use('/', 'main.htm');
  app.use('/about', 'about.htm');
  app.use('/contact', 'contact.htm');
```

#### Full example
```html
<html>
	<head>
		<script src="../jquery.js"></script>
		<script src="../hodor.js"></script>
	</head>
	<body>
		<a href="#">Home</a>
		<a href="#about">About</a>
		<a href="#contact">Contact</a>
		<a href="#something">Elsewhere</a>
		<div data-hodor></div>

		<script>
			var app = new hodor();
			app.use('/', 'main.htm');
			app.use('/about', 'about.htm');
			app.use('/contact', 'contact.htm');
		</script>
	</body>
</html>
```

#### Licence
The MIT License (MIT)

Copyright (c) 2014 Victor Alveflo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
