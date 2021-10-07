let addButton = document.getElementById("button-addon2") // button to add names
let inputName = document.getElementById("inputName")
let teamList = [];
let listGroup = document.querySelectorAll("ul .list-group")
let input = inputName.value

function addNameToTheList(input) {
    let div = document.getElementById("divListName")
    let ul = document.querySelectorAll("ul .list-group")
    for (i = 0; i < teamList.length; i++) {
        let newElement = document.createElement("li")
        let name = teamList[i];
        let listname = newElement.innerHTML = name;
        /* let textInput = document.createTextNode(input)
        newElement.classList.add("list-group-item"); */

        console.log(listname)
    }
    /* name.appendChild(newElement);
    div.appendChild(ul)
    console.log(newElement) */

}


// grab the input value of element of the list then set to empty this value 
addButton.addEventListener("click", function(e) {
    teamList.push(inputName.value)
    inputName.value = "";
    addNameToTheList();
})