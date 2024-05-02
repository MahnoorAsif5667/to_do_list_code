function addtoDo(){
    var input = document.getElementById("inputtoDo");
console.log(input.value)
var list = document.getElementById("list");
list.innerHTML += `<li class="innerList">${input.value}<button class = "editBut" onclick ="editItem(this)"><i class="fa-regular fa-pen-to-square"></i></button> 
<button onclick ="deleteItem(this)" class = "delBut"><i class="fa-solid fa-delete-left"></i></button> </li>`;
}
function deleteAll(){
    var list = document.getElementById("list");
    list.innerHTML =" " 
}
function deleteItem(e){
    e.parentNode.remove();
}
function editItem(e){
    var update = prompt("Update your task");
    e.parentNode.firstChild.nodeValue = update
}