// Select color input
const heightInput = $('#inputHeight');
const widthInput = $('#inputWeight');

// Select size input
const colorInput = $('#colorPicker');

// When size is submitted by the user, call makeGrid()
form = $('#sizePicker');
form.submit(function (event) {
	event.preventDefault();
	makeGrid();
})

function makeGrid() {

// Your code goes here!
	let heightValue = heightInput.val();
	let widthValue = widthInput.val();

	//clear previous grid
	let pixelCanvas = $('#pixelCanvas');
	pixelCanvas.children().remove();

	//create new grid
	for(let h=0; h<heightValue; h++){
		pixelCanvas.append('<tr></tr>');
	}

	for(let w=0; w<widthValue; w++){
		$('tr').append('<td></td>');
	}
}

$('table').on('mouseover', 'td', function () {
	$(this).css('backgroundColor', colorInput.val());
});
