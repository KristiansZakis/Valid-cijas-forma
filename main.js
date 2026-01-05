document.getElementById("dati").addEventListener("submit", function(event) {
event.preventDefault();

const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;

let message = "";

if (!email.includes("@")) {
message = "Nav norādīts koretks epasts";
document.getElementById("result").innerHTML = message;
return;
}

const hasUpper = /[A-Z]/.test(password);
const hasDigit = /[0-9]/.test(password);
const hasSymbol = '/[!@#$%^&*()_\-+='


const longEnough = password.length >= 8;

if (!(hasUpper && hasDigit && hasSymbol && longEnough)) {
message = "Parole neatbilst nosacījumiem";
document.getElementById("result").innerHTML = message;
return;
}

});