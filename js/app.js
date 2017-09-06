var count = 0;
var message = 'You clicked the cat {0} times.';
var style = 'font-size: {0}px;';

function update() {
	var counter = $('#counter')
	var newText = message.replace('{0}', count.toString());

	counter.text(newText);
	counter.css("font-size", "+=0.5");
}

$(document).ready(function() {
	update();

	$('img').click(function(e) {
		count++;
		update();
	});
});