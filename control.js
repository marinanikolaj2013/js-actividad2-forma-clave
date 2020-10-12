
var form = document.getElementById('form');
var email = document.getElementById('email');
var password = document.getElementById('password');
var RePassword = document.getElementById('RePassword')
var submit = document.getElementById('submit');
var para = document.getElementById("error-descr");

form.onsubmit = function (e) {
    if (email.value == "" || password.value == "") {
        e.preventDefault();
        para.textContent = 'Completa ambos datos!';
    }
}
