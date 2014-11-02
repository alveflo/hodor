hodor.js
======

Minimalistic, simple and easy to use client side routing provider.

#### Usage
```html
<script src="https://cdn.rawgit.com/victorzki/hodor/master/dist/hodor-min-0.0.1.js"></script>
```
###### Note
This library utilizes ajax to load referred html pages. So in order to run this library you'll need to be backed up with a web server.
#### API
* `hodor.use(templateEngine)` specify a template engine.
* `hodor.use(path, file)` maps a path against a file
* `hodor.use(path, file, settings)` maps a path against a file and injects settings (used when templating)
* A div with attribute `data-hodor` is needed. This is where the views are injected!

#### Dependencies
* [jQuery](http://jquery.com/)

#### Example setup
```javascript
  var app = new hodor();
  app.use('/', 'main.htm');
  app.use('/about', 'about.htm');
  app.use('/contact', 'contact.htm');
```

#### Setup with templating engine
hodor is supporting templating using [{{Mustache}}](https://github.com/janl/mustache.js) as template engine.
```javascript
  var settings = {
    Foo: 'Foo',
    Bar: 'Bar',
  };

  var app = new hodor();
  app.use(Mustache);
  app.use('/', 'main.html', settings);
  app.use('/about', 'about.html', settings);
  app.use('/contact', 'contact.html');
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
		
		<!-- Div with data-hodor attribute. This is where the views gets injected -->
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
