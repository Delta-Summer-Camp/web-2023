let menuShowed = false;

function iii() {
	document.getElementById("olk").onclick = showmenu;
}

function showmenu() {
	if (menuShowed) {
		document.getElementById("hiddenTab").style.display = "none";
		menuShowed = false;
	} else {
		document.getElementById("hiddenTab").style.display = "block";
		menuShowed = true;
	}
	
}