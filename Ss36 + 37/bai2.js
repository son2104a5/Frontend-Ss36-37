let btn = document.getElementById("btn");
let status = ["ON", "OFF"];
let i = 0;
btn.onclick = function(){
    btn.innerText = status[i];
    i++;
    if(i>1){
        i = 0;
    }
}