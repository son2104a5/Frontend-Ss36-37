let qt = document.getElementById("qt");

let btn = document.getElementById("btn");

btn.onclick = function(){
    if(qt.value.length>10){
        alert("Không lợp lệ");
        qt.value = "";
    }else{
        alert("Thành công");
        qt.value = "";
    }
}