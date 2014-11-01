Hodor!
======

Minimalistic, simple and easy to use client side routing provider.

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
