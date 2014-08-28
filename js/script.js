var elements = [];

$('*').on('click mousedown mouseup focus blur keydown change', function(e) {
	$this = $(this);

	elements.push($this.context);

	if ($this.context.localName === 'html') {
		addBorders(elements);
	}

});

function addBorders(elements) {
	$.each(elements, function(i) {
            setTimeout(function() {
		$(elements[i]).addClass('border');
            }, i * 250);
        });
}
