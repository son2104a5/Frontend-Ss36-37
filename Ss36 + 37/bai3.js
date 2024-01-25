let add = document.getElementById("add");
let div = document.getElementById("div");

//Cách 1:
// add.onkeydown = function(){
//     div.innerHTML = add.value;
// }

// Cách 2:
add.onkeyup = function(){
    div.innerHTML = add.value;
}