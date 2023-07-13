//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
// Assignment code here

var numbers = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()-_+";
var password = "";
var options = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// var password = generatePassword();



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
// Write password to the #password input
function generatePassword() {
  var passwordLength = prompt("How many characters do you want in your password? 8-128");
  if (passwordLength >128 || passwordLength <8 ) {
  alert ("Password must be between 8-128")
  return;
}
  var includeUppercaseLetters = confirm("Do you want to include uppercase letters?");
var includeLowercaseLetters = confirm("Do you want to include lower case letters?");
var includeNumber = confirm("Do you want to include numbers?");
var includeSpecial = confirm("Do you want to include special characters?");

if(includeLowercaseLetters === false && includeUppercaseLetters === false && includeSpecial === false && includeNumber === false) {
  alert ("Make sure to pick at least one character set.")
  return;
}
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
  
  for (var i = 0; i <passwordLength; i++) {
    var randomChar = Math.floor(Math.random()* options.length)
    console.log(options.charAt(randomChar))
    password += options.charAt(randomChar)
   }
   return password;
}



function passwordLength() {
  
    
}




//writePassword();

//function generatePassword()
 

//  generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);