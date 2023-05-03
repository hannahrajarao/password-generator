// Assignment code here
function generatePassword() {
  var passwordLength = window.prompt("Please enter a number for password length (8-128 characters)");
  // add input validation for password length
  while(!isNumber(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("That is not a valid number. Please enter a number for password length (8-128 characters)");
  }
  const lowercase = window.confirm("Include lower case characters?");
  const uppercase = window.confirm("Include upper case characters?");
  const numbers = window.confirm("Include numbers?");
  const special = window.confirm("Include special characters?");
  if(!(lowercase || uppercase || numbers || special)) {
    window.alert("I can't make a password like that. Try again");
    return "";
  }


  return password
}

function isNumber(n) {
  return !isNaN(n.trim());
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
