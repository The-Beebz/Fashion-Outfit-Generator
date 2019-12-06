

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
  document.getElementById("topImage").innerHTML = "<img src=\"" + x + "\">";
}

function neckDisplay() {
  var x = document.getElementById("neckStyle").value;
  document.getElementById("neckImage").innerHTML = "<img src=\"" + x + "\">";
}

function sleeveDisplay() {
  var x = document.getElementById("sleeveStyle").value;
  document.getElementById("sleeveImage").innerHTML = "<img src=\"" + x + "\">";
  document.getElementById("sleeveImage2").innerHTML = "<img src=\"" + x + "\">";
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

