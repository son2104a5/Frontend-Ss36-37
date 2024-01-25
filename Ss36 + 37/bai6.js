let btn = document.getElementById("btn");
let name = document.getElementById("name");
let age = document.getElementById("age");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let id = document.getElementById("id");
let ul = document.getElementById("ul");

let static = ['ID: ', 'Họ và tên: ', 'Tuổi: ', 'Sđt: ', 'Email: '];
let i = 0;

btn.onclick = function(){
    let liElement  = document.createElement("li");
    liElement.innerHTML = `Id: ${id.value}`

    ul.appendChild(liElement);
    liElement  = document.createElement("li");
    liElement.innerHTML = `Họ và tên: ${name.value}`

    ul.appendChild(liElement);
    liElement  = document.createElement("li");
    liElement.innerHTML = `Tuổi: ${age.value}`

    ul.appendChild(liElement);
    liElement  = document.createElement("li");
    liElement.innerHTML = `Sđt: ${phone.value}`

    ul.appendChild(liElement);
    liElement  = document.createElement("li");
    liElement.innerHTML = `Email: ${email.value}`

    ul.appendChild(liElement);
}