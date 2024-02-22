
const lowerChars = "qwertyuiopasdfghjklzxcvbnm";
const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
const specialChars = "~!@#$%^&*()_-+=><.,;:";
const numChars = "0123456789";

const password_text = document.getElementById("password");
let password = " ";
function generate(){
    let allowedChars = "";
    password = " ";
    let length = document.getElementById("password-length").value;
    const containNumber = document.getElementById("contain-numbers");
    const containSpecial = document.getElementById("contain-special");
    const containUpper = document.getElementById("contain-upper");
    const containLower = document.getElementById("contain-lower");

    length = Number(length);
    if(isNaN(length)){
        alert("Enter a Number");
        document.getElementById("password-length").value = "";
        return;
    }
    if(length < 4 || length > 32){
        alert("Enter Length between 4 and 32");
        return;
    }

    if(containLower.checked){
        allowedChars += lowerChars;
    }
    if(containUpper.checked){
        allowedChars += upperChars; 
    }
    if(containSpecial.checked){
        allowedChars += specialChars;
    }
    if(containNumber.checked){
        allowedChars += numChars;
    }
    let n = allowedChars.length;
    if(allowedChars.length > 0){
    for(let i = 0; i < length; i++){
        let n = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[n];
        }   
    }else{
        alert ("Select atleast one of the check boxes!");
    }
    
    password_text.innerHTML = " " + password;
}

function copy(){
    navigator.clipboard.writeText(document.getElementById("password").innerHTML);
}