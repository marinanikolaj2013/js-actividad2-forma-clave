var form = document.getElementById('form');
var text = document.getElementById('text');
var password = document.getElementById('password');
var RePassword = document.getElementById('RePassword')
var submit = document.getElementById('submit');
var para = document.getElementById("error-descr");

form.onsubmit = function (e) {
    if (!text.value.includes("@")) {
        e.preventDefault();
        para.textContent = 'Falta el arroba en el usuario!';
    }
    if (text.value == "" || password.value == "") {
        e.preventDefault();
        para.textContent = 'Completa ambos datos!';
    }

}
