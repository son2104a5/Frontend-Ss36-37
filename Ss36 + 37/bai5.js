let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
let input = document.getElementById("add");
btn.onclick = function(){
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";
    if(input.value.length===0){
        input.style.backgroundColor = "yellow";
    }
}

input.onkeyup = function(){
    if(input.value.length>0){
        input.style.backgroundColor = "white";
    }
}
