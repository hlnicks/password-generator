var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArr= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = ["~", "`", "!", "@", "#", "$","%","^", "&", "*", "(", ")", "-", "_", "+", "=", ";", ":", "'", '"', "<", ",", ".", ">", "?", "/", "[", "{", "]", "}"];


function createPassword() {
  // password length
  var promptLength = window.prompt("How long do you want your password to be? Choose a number between 7 - 129.");
  promptLength = parseInt(promptLength);
  if (promptLength < 8 || promptLength > 128 || isNaN(promptLength)){
    window.alert("Invalid option. Please enter a number between 7 and 129.");
    return createPassword();
  }
  return promptLength;
};


function passwordCriteria() {
  var promptLength = createPassword();
  var userInputArr = [];

  // lowercase letters
  var promptLower = window.confirm("Do you want your password to contain lowercase letters?");
  if (promptLower) {
    userInputArr = userInputArr.concat(lowerArr);
  };


  // uppercase letters
  var promptUpper = window.confirm("Do you want your password to contain uppercase letters?");
  if (promptUpper) {
    userInputArr = userInputArr.concat(upperArr);
  };

  // numbers
  var promptNumber = window.confirm("Do you want your password to contain numbers?");
  if (promptNumber) {
    userInputArr = userInputArr.concat(numbersArr);
  };


  // special characters
  var promptSpecial = window.confirm("Do you want your password to contain special characters?");
  if (promptSpecial) {
    userInputArr = userInputArr.concat(specialArr);
  };


  // if user didn't select any password criteria
  if (userInputArr.length === 0) {
    window.alert("You need to select at least one option. Please try again.")
    return;
  }
  var finalOutcome = {promptLength, userInputArr}
  return finalOutcome;
};


// generates password based on user selected criteria
function generatePassword() {
  var finalPassword = [];
  var userInput = passwordCriteria();
  if (userInput === null) {
    return;
  }
  for (var i = 0; i < userInput.promptLength; i++) {
    var indexEachCharacter = Math.floor(Math.random()*userInput.userInputArr.length);
    var passwordCharacters = userInput.userInputArr[indexEachCharacter];
    finalPassword.push(passwordCharacters);
  }
  return finalPassword = finalPassword.join("");
};


// gets references to the #generate element
var generateBtn = document.querySelector("#generate");


// writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


// adds event listener to generate button
generateBtn.addEventListener("click", writePassword);