

function randomTop() {
    var select = document.getElementById('topStyle');
    var items = select.getElementsByTagName('option');
    var index = Math.floor(Math.random() * items.length);

    select.selectedIndex = index;
	topDisplay();
}

function randomNeck() {
    var select = document.getElementById('neckStyle');
    var items = select.getElementsByTagName('option');
    var index = Math.floor(Math.random() * items.length);

    select.selectedIndex = index;
	neckDisplay();
}

function randomSleeve() {
    var select = document.getElementById('sleeveStyle');
    var items = select.getElementsByTagName('option');
    var index = Math.floor(Math.random() * items.length);

	select.selectedIndex = index;
    sleeveDisplay();
}

function randomBottom() {
    var select = document.getElementById('bottomStyle');
    var items = select.getElementsByTagName('option');
    var index = Math.floor(Math.random() * items.length);

	select.selectedIndex = index;
    bottomDisplay();
}

function randomShoe() {
    var select = document.getElementById('shoeStyle');
    var items = select.getElementsByTagName('option');
    var index = Math.floor(Math.random() * items.length);

	select.selectedIndex = index;
    shoeDisplay();
}


function topDisplay() {
  var x = document.getElementById("topStyle").value;
  document.getElementById("top").innerHTML = "<img src=\"" + x + "\">";
}

function neckDisplay() {
  var x = document.getElementById("neckStyle").value;
  document.getElementById("neckline").innerHTML = "<img src=\"" + x + "\">";
}

function sleeveDisplay() {
  var x = document.getElementById("sleeveStyle").value;
  document.getElementById("sleeves").innerHTML = "<img src=\"" + x + "\">";
}

function bottomDisplay() {
  var x = document.getElementById("bottomStyle").value;
  document.getElementById("bottomImage").innerHTML = "<img src=\"" + x + "\">";
}

function shoeDisplay() {
  var x = document.getElementById("shoeStyle").value;
  document.getElementById("shoeImage").innerHTML = "<img src=\"" + x + "\">";
  document.getElementById("shoeImage2").innerHTML = "<img src=\"" + x + "\">";
}


function randomAll(){
	randomNeck();
	randomTop();
	randomSleeve();
	randomBottom();
	randomShoe();
}

function yellow() {
	document.getElementById("top").style.filter = "sepia(200%) saturate(100%) hue-rotate(0deg)";
	document.getElementById("neckline").style.filter = "sepia(200%) saturate(100%) hue-rotate(0deg)";
	document.getElementById("sleeves").style.filter = "sepia(200%) saturate(100%) hue-rotate(0deg)";
}

function green() {
	document.getElementById("top").style.filter = "sepia(200%) saturate(100%) hue-rotate(40deg)";
	document.getElementById("neckline").style.filter = "sepia(200%) saturate(100%) hue-rotate(40deg)";
	document.getElementById("sleeves").style.filter = "sepia(200%) saturate(100%) hue-rotate(40deg)";
}

function cyan() {
	document.getElementById("top").style.filter = "sepia(200%) saturate(100%) hue-rotate(100deg)";
	document.getElementById("neckline").style.filter = "sepia(200%) saturate(100%) hue-rotate(100deg)";
	document.getElementById("sleeves").style.filter = "sepia(200%) saturate(100%) hue-rotate(100deg)";
}

function blue() {
	document.getElementById("top").style.filter = "sepia(200%) saturate(160%) hue-rotate(160deg) brightness(80%) contrast(90%)";
	document.getElementById("neckline").style.filter = "sepia(200%) saturate(160%) hue-rotate(160deg) brightness(80%) contrast(90%)";
	document.getElementById("sleeves").style.filter = "sepia(200%) saturate(160%) hue-rotate(160deg) brightness(80%) contrast(90%)";
}

function purple() {
	document.getElementById("top").style.filter = "sepia(200%) saturate(100%) hue-rotate(230deg) brightness(80%) contrast(90%)";
	document.getElementById("neckline").style.filter = "sepia(200%) saturate(100%) hue-rotate(230deg) brightness(80%) contrast(90%)";
	document.getElementById("sleeves").style.filter = "sepia(200%) saturate(100%) hue-rotate(230deg) brightness(80%) contrast(90%)";
}

function red() {
	document.getElementById("top").style.filter = "sepia(180%) saturate(200%) hue-rotate(300deg)";
	document.getElementById("neckline").style.filter = "sepia(180%) saturate(200%) hue-rotate(300deg)";
	document.getElementById("sleeves").style.filter = "sepia(180%) saturate(200%) hue-rotate(300deg)";
}

function orange() {
	document.getElementById("top").style.filter = "sepia(200%) saturate(180%) hue-rotate(330deg)";
	document.getElementById("neckline").style.filter = "sepia(200%) saturate(180%) hue-rotate(330deg)";
	document.getElementById("sleeves").style.filter = "sepia(200%) saturate(180%) hue-rotate(330deg)";
}

function gray() {
	document.getElementById("top").style.filter = "";
	document.getElementById("neckline").style.filter = "";
	document.getElementById("sleeves").style.filter = "";
}