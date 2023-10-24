//your JS code here. If required.
function removeSelectedColor{
	const colorSelect = document.getElementById('colorSelect');
	const selectedOption = colorSelect.options(colorSelect.selectedIndex);

	if(selectedOption){
		colorSelect.removechild(selectedOption);
	}
}
