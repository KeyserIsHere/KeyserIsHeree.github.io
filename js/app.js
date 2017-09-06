var count = 0;

function update() {
	var counter = $('#counter')

	counter.text(`You clicked the cat ${count} times.`);
	counter.css("font-size", "+=0.5");
}

$(document).ready(function() {
	update();

	$('img').click(function() {
		count++;
		update();
	});
});
