let input = document.getElementById("input");
let value = input.value;
let btn = document.getElementById("btn");
let div = document.getElementById("list");
let btnDel = document.getElementById("btnDel");
let ul = document.createElement("ul");


let createList = function() {
    let value = input.value;
    ul.innerHTML = "";

    let li = document.createElement("li");
    div.appendChild(ul);
    li.innerText = value;
    ul.appendChild(li);
    input.value = "";
};
btn.addEventListener("click", createList);

let del = function() {
    let listDel = document.querySelector("ul.listOfElement")
    console.log(listDel)
    listDel.innerText = '';
}
btnDel.addEventListener("click", del)