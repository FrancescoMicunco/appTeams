let addButton = document.getElementById("button-addon2"); // button to add names
let inputName = document.getElementById("inputName");
let teamList = [];
let teamTableArray = [];
let listGroup = document.querySelectorAll("ul.list-group");
let input = inputName.value;
let createTableBtn = document.getElementById("button-addon3");
let createTeamInput = document.getElementById("numOfTeam");
let numberOfTeam = createTeamInput.value;
let assign = document.getElementById("assignBtn");
let deleteAll = document.getElementById("deleteAll")

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
    let ulList = document.querySelector("ul.listGroup")
    ulList.classList.add("divListName")
    ulList.innerHTML = ""
    for (i = 0; i < input.length; i++) {
        let newElement = document.createElement("li")
        newElement.innerText = input[i];
        ulList.appendChild(newElement)
    }
}

// =========  generate the team table
// =====================================

let generateTable = function() {
    let numberOfTeam = createTeamInput.value; // take the value from input of num of teams
    for (let i = 0; i < numberOfTeam; i++) {
        let tableTeam = document.querySelector("div#tableTeam");
        let divTeam = document.createElement("div"); //create div container
        divTeam.classList.add(`team${i+1}`); //create div container
        divTeam.innerHTML = ""; //create div container
        let ulTable = document.createElement("ul");
        ulTable.classList.add("list-group")
        ulTable.innerHTML = "";
        let title = document.createElement("h3");
        title.innerText = `TEAM n. ${i + 1}`;
        divTeam.appendChild(title);
        tableTeam.appendChild(divTeam);
        teamTableArray.push(i)
        console.log(teamTableArray)
    }
    return numberOfTeam
};

let createTableTeam = function() {
    let divOfTable = document.querySelector("div.team");
    let ulListGroup = document.querySelector("ul.list-group");
    ulListGroup.innerHTML = ""
    for (let i = 0; i < teamList.length; i++) {
        let randomElement = Math.floor(Math.random() * (teamList.length) + 1);
        let newElement = document.createElement("li")
        for (let x = 0; x < teamTableArray.length; x++) {
            newElement.innerText = teamList[randomElement];
            teamList.splice([randomElement - 1], 1);
            ulListGroup.appendChild(newElement)
            divOfTable.appendChild(ulListGroup)
        }
    }

}

createTableBtn.onclick = generateTable;
assign.onclick = createTableTeam;
//deleteAll.addEventListener("click", del(listGroup))
/* } else {
    console.log("inserire un numero di team")
} * /

};







// ========= grab name from the list
// =====================================

/* // associalo all'elemento dell'array corrispondente al numero generato. OK
let tableTeam = document.querySelector("div#tableTeam");
let tableTeamDiv = document.querySelector("div.team") // seleziono la table contenitore
tableTeamDiv.innerHTML = "";
 */

/* //re-write a title
let title = document.createElement("h3");
title.innerText = "TEAM n. " + (i + 1);
tableTeamDiv.appendChild(title);
tableTeam.appendChild(tableTeamDiv); */


// =============add element 

/* let ulOfTeam = document.createElement("ul") // create a "ul"
ulOfTeam = "" //reset "ul"
let liOfTeam = document.createElement("li") // create a "li"
liOfTeam.innerText = teamList[i] // add content to "li"
ulOfTeam.appendChild(liOfTeam) // add "li" to "ul"
tableTeamDiv.appendChild(ulOfTeam) // add "ul" to "tableTeamDiv"
tableTeam.appendChild(tableTeamDiv) //   add "tableTeamDiv" a "tableTeam"
addNameToTheList(teamList) // erase and re-write list of element using new array */