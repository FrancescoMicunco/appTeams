let addButton = document.getElementById("button-addon2") // button to add names
let inputName = document.getElementById("inputName")

let teamList = [];

addButton.addEventListener("click", function(e) {
    teamList.push(inputName.value)
    inputName.value = "";


    console.log(teamList)
})