;(function() {
	var blur = function(evt) {
		var elements = document.getElementsByClassName('focused');
		for (var i = 0; i < elements.length; i++) {
			elements[i].className = elements[i].className.replace(/ focused /, ' ').replace(/(^focused | focused$|^focused$)/, '');
		}
	};

	var focus = function(evt) {
		if (evt.stopPropagation) evt.stopPropagation();
		if (evt.cancelBubble!=null) evt.cancelBubble = true;

		if (this.className.match(/(^| )focused( |$)/)) {
			blur(evt);
		} else {
			blur(evt);
			this.className += ' focused';
		}
	};

	window.addEventListener('load', function() {
		var elements = document.getElementsByClassName('focusable');
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', focus, true);
		}
	});

	document.addEventListener('click', blur);
})();
