var elements = [];
var colors = ["red", "orange", "pink", "blue", "green", "purple"];
var color, count = 0;

$('*').on('click', function(e) {
	$this = $(this);

	color = colors[Math.floor((Math.random() * 6))];
	count++;

	(function(el) {
		setTimeout(function() {
			$(el).css('outlineColor', color);
		}, count * 250);
	})($this.context);

	if ($this.context.localName === 'html') {
		count = 0;
	}

});