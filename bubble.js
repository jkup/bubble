var animationQueue = {};
var color, count = 0;

$('*').on('blur change click dblclick focus focusin focusout hover keydown keypress keyup mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll submit', function(event) {
	event.preventDefault();

	$this = $(this);

	event.eventId = event.timeStamp;
	if (typeof animationQueue[event.eventId] === 'undefined') {
		animationQueue[event.eventId] = [];
	}

	animationQueue[event.eventId].push($this.context);

	if ($this.context.localName === 'html') {
		$.when( animate(event.eventId) ).then(function() {
			var elements = animationQueue[event.eventId];

			$.each(elements, function(i) {
				$(elements[i]).css('outline', 'none');
		    });

			delete animationQueue[event.eventId];
		});
	}
});

function animate(eventId) {
	var deferred = new $.Deferred();

	var elements = animationQueue[eventId];

	// Generate a random color
	color = '#' + Math.floor(Math.random()*16777215).toString(16);

	$.each(elements, function(i) {
        setTimeout(function() {
			$(elements[i]).css('outline', '2px solid ' + color);
			if (i == elements.length - 1) { deferred.resolve(); }
        }, i * 250);
    });

    return deferred.promise();
}