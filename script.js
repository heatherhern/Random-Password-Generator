// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of available characters to select
let characterArray = []
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "="];

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Here is the empty character array for all of the characters that can be randomized in your password, as well as all of the alerts to select what you want in your password. 
function generatePassword() {
  characterArray = [];
  var passwordLength = parseInt(prompt('How many characters do you want in your password?'));
  var lowercaseConfirm = confirm('Do you want lowercase letters in your password?');
  var uppercaseConfirm = confirm('Do you want uppercase letters in your password?');
  var numbersConfirm = confirm('Do you want numbers in your password?');
  var specialConfirm = confirm('Do you want special characters in your password?');

// Here are the if statements for the confirms to add the character types into the emtpy array of character possibilities. 
  if(lowercaseConfirm) {
  characterArray = (characterArray.concat(lowercase));

  }

  if(uppercaseConfirm) {
  characterArray = (characterArray.concat(uppercase));
  
  }

  if(numbersConfirm) {
  characterArray = (characterArray.concat(numbers));
    
  }

  if(specialConfirm) {
  characterArray = (characterArray.concat(special));
      
  }

// the for statement that loops through the array of character options times as many times as you want characters in your password. 
  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characterArray[Math.floor(Math.random()*characterArray.length)];
  }

  return password;    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);