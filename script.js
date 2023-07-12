
// Assignment code here

var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()-_+"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("How many characters do you want in your password? 8-128");
var includeUppercaseLetters = confirm("Do you want to include uppercase letters?");
var includeLowercaseLetters = confirm("Do you want to include lower case letters?");
var includeNumber = confirm("Do you want to include numbers?");
var includeSpecial = confirm("Do you want to include special characters?");
var password = generatePassword();
var passwordText = document.querySelector("#password");


// Write password to the #password input
  function writePassword() {
    if (includeLowercaseLetters === "abcdefghijklmnopqrstuvwxyz")
    console.log(lowerCase);
   
  passwordText.value = password;
}

function passwordLength() {
  if (passwordLength <128 && passwordLength >8) 
  console.log(true, "");
  else (passwordLength)
  console.log(false);
  alert("Password length must be between 8-128 characters.")
}

function password() {
  if(special === "!@#$%^&*()-_+")
  console.log();
}


writePassword();
generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
