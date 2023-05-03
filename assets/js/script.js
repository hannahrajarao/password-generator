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
    window.alert("Please select at least at least one of the character types");
    return "";
  }


  const lowerCharacters = "qwertyuiopasdfghjklzxcvbnm";
  const upperCharacters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const numberCharacters = "1234567890";
  const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var characterString = "";
  var passwordPossibilities = {
    lowercase: [lowercase, lowerCharacters],
    uppercase: [uppercase, upperCharacters],
    numbers  : [numbers, numberCharacters],
    special  : [special, specialCharacters]
  }
  for (const [key, value] of Object.entries(passwordPossibilities)) {
    const includeChar = value[0];
    if(includeChar) {
      characterString += value[1];
    }
  }

  return createPassword(characterString, passwordLength);
}

function isNumber(n) {
  return !isNaN(n.trim());
}

function createPassword(characterString, passwordLength) {
  var password = "";
  for(var i=0; i < passwordLength; i++) {
    var index = Math.floor(Math.random()*characterString.length);
    password += characterString[index];
  }
  return password;
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
