let addButton = document.getElementById("button-addon2") // button to add names
let inputName = document.getElementById("inputName")
let teamList = [];
let listGroup = document.querySelectorAll("ul .list-group")
let input = inputName.value

function addNameToTheList(input) {
    let div = document.getElementById("divListName")
    let ul = document.querySelector("ul.list-group")
    ul.innerHTML = ""
    for (i = 0; i < input.length; i++) {
        let newElement = document.createElement("li")
        newElement.innerText = input[i];
        ul.appendChild(newElement)
    }
}


// grab the input value of element of the list then set to empty this value 
addButton.addEventListener("click", function(e) {
    teamList.push(inputName.value)
    inputName.value = "";
    addNameToTheList(teamList);
})