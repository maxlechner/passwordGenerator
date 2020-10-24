// Assignment Code
var generateBtn = document.querySelector("#generate");

// set password values in a set of arrays
var availableChars = {
  upperChar: ["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerChar: ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  specialChar: ["!","@","#","$","%","^","&","*","(",")","_","-","+","=",";",":","?","<",">"],
  numbers: [0,1,2,3,4,5,6,7,8,9]
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generate password function takes in the user input and uses program logic to create a random password
function generatePassword() {
  // user input to indicate the length of the passsword output
  var totalCharacters = prompt("Indicate length of desired password between 8 to 128 characters.");
  
  // validate the input is a number between 8 and 128, exit with an error message if it is not.
  if ( !(totalCharacters >= 8 || totalCharacters <= 128)) {
    alert("please use a numeric value between 8 and 128.");
    return;
  }
  // user input prompts to ingest the desired password parameters
  alert("the next series of prompts will determine the types of characters that should included in the password");
  var upperRequired = confirm("Include upper case letters?");
  var lowerRequired = confirm("Include lower case letters?");
  var specialRequired = confirm("Include special characters (i.e !@#$% etc.)?");
  var numbersRequired = confirm("Include numbers?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
