let input = document.getElementById("userinput");
let enter = document.getElementById("enter");
let todo = document.getElementById("todo");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var list = document.createElement("li");
	var doneButton = document.createElement("button");
	var deleteButton = document.createElement("button");
	list.appendChild(document.createTextNode(input.value));
	todo.appendChild(list);
	doneButton.appendChild(document.createTextNode("done"));
	deleteButton.appendChild(document.createTextNode("delete"));
	list.appendChild(doneButton);
	list.appendChild(deleteButton);
	input.value = "";
	doneButton.addEventListener("click", () => {
		list.classList.toggle("done");
	});
	deleteButton.addEventListener("click", () => {
		let el = document.querySelector("li");
		el.remove();
	});
}

//memasukkan value input kedalam list
enter.addEventListener("click", () => {
	if (inputLength() > 0) {
		createListElement();
	}
});
