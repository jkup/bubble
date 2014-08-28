var elements = [];
var color, count = 0;

$('*').on('click', function(e) {
	$this = $(this);

	color = '#' + Math.floor(Math.random()*16777215).toString(16);
	count++;

	(function(el) {
		setTimeout(function() {
			$(el).css('outlineColor', color);
		}, count * 150);
	})($this.context);

	if ($this.context.localName === 'html') {
		count = 0;
	}

});