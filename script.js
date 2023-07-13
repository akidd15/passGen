
// Assignment code here

var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()-_+"
var password = ""
var options = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// var password = generatePassword();
var passwordText = document.querySelector("#password");
var passwordLength = prompt("How many characters do you want in your password? 8-128");
var includeUppercaseLetters = confirm("Do you want to include uppercase letters?");
var includeLowercaseLetters = confirm("Do you want to include lower case letters?");
var includeNumber = confirm("Do you want to include numbers?");
var includeSpecial = confirm("Do you want to include special characters?");

// Write password to the #password input
function writePassword() {
  if (includeNumber) {
    options = options+numbers
    console.log(options);
  }

  if (includeLowercaseLetters) {
    options = options+lowerCase
    console.log(options);
  }

  if (includeUppercaseLetters) {
    options = options+upperCase
    console.log(options);
  }

  if (includeSpecial) {
    options = options+special
    console.log(options);
  }
  passwordText.value = password;
}

function passwordLength() {
  if (passwordLength < 128 && passwordLength > 8)
    console.log(true, "");
  else (passwordLength)
  console.log(false);
  console.log(passwordLength);
  alert("Password length must be between 8-128 characters.")
}

for (var i = 0; i <passwordLength; i++) {
  console.log(passwordLength.length)
}
writePassword();

// function generatePassword() {
  // getRandom.Math(password);
  // console.log(random);
  // return;
// }
//  generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
