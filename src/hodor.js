'use strict';

document.onbeforeunload = function(e) {
	alert(window.location.href);
}

function hodor() {
	this.init();
	this.storedHash = window.location.hash;
	var obj = this;
	window.setInterval(function() {
		obj.routeController(window.location.hash);
	}, 100);
}

hodor.prototype = {
	init: function() {
		this.dictionary = {};
		window.location.href = '#';
	},
	use: function(path, page) {
		var obj = this;
		$.get(page, function(data) {
			obj.dictionary[path] = data;
			$('a[cr-href="' + path + '"]').click(function() {
				e.preventDefault();
				$('#hodor').html(data);
			});
			var urlPath = path;
			var currentPath = obj.getPath();
			if (urlPath == currentPath)
				obj.setContent(currentPath);
		});
	},
	routeController: function(hash) {
		if (this.storedHash != hash) {
			this.storedHash = hash;
			var path = this.getPath();
			this.setContent(path);
		}
	},
	setContent: function(path) {
		var content = "";
		if (this.dictionary.hasOwnProperty(path))
			content = this.dictionary[path];
		else
			if (this.dictionary.hasOwnProperty('/'))
				content = this.dictionary['/'];
		$('div[data-hodor').html(content);
	},
	getPath: function() {
		var url = window.location.href;
		var splitter = url.split('#');
		if (splitter.length > 0) {
			var path = splitter[1];
			return '/' + path;
		}
		return '/';
	}
}