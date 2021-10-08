let addButton = document.getElementById("button-addon2") // button to add names
let inputName = document.getElementById("inputName")
let teamList = [];
let listGroup = document.querySelectorAll("ul .list-group")
let input = inputName.value
let createTableBtn = document.getElementById("button-addon3")
let createTeamInput = document.getElementById("numOfTeam")
let numberOfTeam = createTeamInput.value

// ==== grab the input value by the user for the list name and then set to "empty" this field. 
// ==== Callback to the function that use teamList array
addButton.addEventListener("click", function(e) {
        teamList.push(inputName.value)
        inputName.value = "";
        addNameToTheList(teamList);
    })
    // ======= create a list of name
    // ============================
function addNameToTheList(input) {
    let div = document.querySelector("div#ListName")
    let ul = document.querySelector("ul.list-group")
    ul.classList.add("divListName")
    ul.innerHTML = ""
    for (i = 0; i < input.length; i++) {
        let newElement = document.createElement("li")
        newElement.innerText = input[i];
        ul.appendChild(newElement)
    }
}

// =========  generate the team table
// =====================================
createTableBtn.addEventListener("click", function(e) {
    let numberOfTeam = createTeamInput.value; // take the value from input of num of teams
    for (let i = 0; i < numberOfTeam; i++) {
        let tableTeam = document.querySelector("div#tableTeam");
        let divTeam = document.createElement("div"); //create div container
        divTeam.classList.add(`team`); //create div container
        divTeam.innerHTML = ""; //create div container
        let title = document.createElement("h3");

        title.innerText = "TEAM n. " + (i + 1);
        divTeam.appendChild(title);
        tableTeam.appendChild(divTeam)
    }
})