"use strict";function hodor(){this.init();this.storedHash=window.location.hash;var e=this;window.setInterval(function(){e.routeController(window.location.hash)},100)}document.onbeforeunload=function(e){alert(window.location.href)};hodor.prototype={init:function(){this.dictionary={};window.location.href="#"},use:function(t,n){var r=this;$.get(n,function(n){r.dictionary[t]=n;$('a[cr-href="'+t+'"]').click(function(){e.preventDefault();$("#hodor").html(n)});var i=t;var s=r.getPath();if(i==s)r.setContent(s)})},routeController:function(e){if(this.storedHash!=e){this.storedHash=e;var t=this.getPath();this.setContent(t)}},setContent:function(e){var t="";if(this.dictionary.hasOwnProperty(e))t=this.dictionary[e];else if(this.dictionary.hasOwnProperty("/"))t=this.dictionary["/"];$("div[data-hodor").html(t)},getPath:function(){var e=window.location.href;var t=e.split("#");if(t.length>0){var n=t[1];return"/"+n}return"/"}}