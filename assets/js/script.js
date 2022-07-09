var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArr= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["~", "`", "!", "@", "#", "$","%","^", "&", "*", "(", ")", "-", "_", "+", "=", ";", ":", "'", '"', "<", ",", ".", ">", "?", "/", "[", "{", "]", "}"];



function createPassword() {

  // password length
  var promptLength = window.prompt("Please enter desired password length. Choose a number between 7 - 129.");
  promptLength = parseInt(promptLength);
  if (promptLength < 8 || promptLength > 128 || isNaN(promptLength)){
    window.alert("Invalid option. Please enter a number between 7 and 129.");
    return createPassword();
  }
  return promptLength;
};


// create separate functions??

function userCriteria() {
  var promptLength = createPassword();
  var inputArr = [];

  // lowercase letters
  var promptLower = confirm("Do you want your password to contain lowercase letters?");
  if (promptLower) {
     // if true, include lowercase letters
  };


  // uppercase letters
  var promptUpper = window.confirm("Do you want your password to contain uppercase letters?");
  if (promptUpper) {
    // if true, include uppercase letters
  };


  // numbers
  var promptNumber = window.confirm("Do you want your password to contain numbers?");
  if (promptNumber) {
    // if true, include numbers
  };


  // special characters
  var promptSpecial = window.confirm("Do you want your password to contain special characters?");
  if (promptSpecial) {
    // if true, include symbols
  };
};


// v  FROM INITIAL FILES  v //

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