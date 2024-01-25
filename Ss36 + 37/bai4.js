let a = document.getElementById("n1");
let b = document.getElementById("n2");
let sum = document.getElementById("sum");
let btn = document.getElementById("btn");

btn.onclick = function(){
    sum.value = Number(a.value) + Number(b.value);
}
