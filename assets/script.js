// Assignment Code

// set password values in a set of arrays
var availableChars = {
  upperChar: ["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerChar: ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  specialChar: ["!","@","#","$","%","^","&","*","(",")","_","-","+","=",";",":","?","<",">"],
  numbers: [0,1,2,3,4,5,6,7,8,9]
}

// generate password function takes in the user input and uses program logic to create a random password
function generatePassword() {
  // user input to indicate the length of the passsword output
  var totalCharacters = prompt("Indicate length of desired password between 8 to 128 characters.");
  var charSet = [];
  // validate the input is a number between 8 and 128, exit with an error message if it is not.
  if ( !(totalCharacters >= 8 || totalCharacters <= 128 || totalCharacters === NaN)) {
    alert("please use a numeric value between 8 and 128.");
    return;
  }
  // user input prompts to ingest the desired password parameters
  alert("the next series of prompts will determine the types of characters that should included in the password");
  var upperRequired = confirm("Include upper case letters?");
  // ensure that upper characters are included in the character set variable
    if (upperRequired === true) {
      charSet.push(...upperChar);
    };
  var lowerRequired = confirm("Include lower case letters?");
    // ensure that lower characters are included in the character set variable
    if (lowerRequired === true) {
      charSet.push(...lowerChar);
    };
  var specialRequired = confirm("Include special characters (i.e !@#$% etc.)?");
    // ensure that speical characters are included in the character set variable
    if (specialRequired === true) {
      charSet.push(...specialChar);
    };
  var numbersRequired = confirm("Include numbers?");
    // ensure that numbers are included in the character set variable
    if (numbersRequired === true) {
      charSet.push(...numbers);
    };
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
