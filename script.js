var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	toggleDone(li);
	createButton (li, listLength()-1);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress() {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function listLength () {
	li = document.querySelectorAll("li");
	return li.length;
}

function doneArray () {
	for (let i  = 0; i < listLength(); i++) {
		toggleDone(li[i]);
	}
}

function toggleDone(li) {
	li.addEventListener("click", function(){
		li.classList.toggle ("done");
	})
}

function initialCreateButton () {
	for (let i = 0; i < listLength(); i++) {
		createButton(li[i], i);
	}
}

function createButton(li, i) {
	var btn = document.createElement("Button");
	btn.innerHTML = "Delete";
	li.appendChild (btn);
	btn.addEventListener("click", function(){
		deleteItem(i);
	})
	btn.id = i;
}

function deleteItem (i) {
	var delLi = document.getElementById(i).parentNode;
	ul.removeChild(delLi);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

doneArray();
initialCreateButton();