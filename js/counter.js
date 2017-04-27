var count_Btn = document.getElementsByClassName("beard-options")[0].getElementsByTagName("button");
var count;

function count_BeardsSize(btn, inputVal) {
	count = Number(inputVal);
	if (btn.classList.contains("count-minus")) {		
		count--;
	} else if (btn.classList.contains("count-plus")) {
		count++;		
	} else { return };
	return count;
}

function length_or_width(btn){	
	if (btn.parentNode.classList.contains("beard_length-block")) {
		var inputVal = document.getElementById("beard_length").value;
		count_BeardsSize(btn, inputVal);
		document.getElementById("beard_length").value = count;		
	} else if (btn.parentNode.classList.contains("beard_width-block")) {
		var inputVal = document.getElementById("beard_width").value;
		count_BeardsSize(btn, inputVal);
		document.getElementById("beard_width").value = count;
	} else { return };
}

for (var i = 0; i < count_Btn.length; i++) {
	count_Btn[i].addEventListener('click', function () {
		event.preventDefault();
		length_or_width(this);
	});
};