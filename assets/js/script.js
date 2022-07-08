// when user clicks on button, prompts are presented for password criteria:
// prompt 1: how long does user want password to be. at least 8, not more than 128
// prompt 2: asks user if they want lowercase letters to be included
// prompt 3: asks user if they want uppercase letters to be included
// prompt 4: asks user if they want numbers to be included
// prompt 5: asks user if they want special characters to be included
// at least one character from each desired character type should be included in generated password
// once generated, password should be displayed in an alert or on page


// prompts
window.prompt("Select how long you wish your password to be. Must be between 7 - 127 characters.");
window.confirm("Do you want your password to contain lowercase letters?");
window.confirm("Do you want your password to contain uppercase letters?");
window.confirm("Do you want your password to contain numbers?");
window.confirm("Do you want your password to contain special characters?");



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
