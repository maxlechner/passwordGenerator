// Assignment Code

// generate password function takes in the user input and uses program logic to create a random password
function generatePassword() {
  // user input to indicate the length of the passsword output
  var totalCharacters = prompt("Indicate length of desired password between 8 to 128 characters.");
  
  // set password values in a set of arrays
  var upperChar = ["A","B","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowerChar = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var specialChar = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=",";",":","?","<",">"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  
  // create empty array to pass values into 
  var charSet = [];

  // set empty string for password to append values in
  var password = "";

  // define password follow to ensure that at least of each character is included
  var pwdFollow = [];

  // validate the input is a number between 8 and 128, exit with an error message if it is not.
  if ( !(totalCharacters >= 8 || totalCharacters <= 128 || totalCharacters === NaN)) {
    alert("please use a numeric value between 8 and 128.");
    return;
  }

  console.log(totalCharacters);

  // user input prompts to ingest the desired password parameters
  alert("The next series of prompts will determine the types of characters that should included in the password.");
  
  var upperRequired = confirm("Include upper case letters?");
    // ensure that upper characters are included in the character set variable
    if (upperRequired === true) {
      charSet.push(...upperChar);
      let upperAdd = upperChar[Math.floor(Math.random() *upperChar.length)];
      pwdFollow.push(upperAdd);
    }

    console.log(pwdFollow);
    console.log(charSet);
  
  var lowerRequired = confirm("Include lower case letters?");
    // ensure that lower characters are included in the character set variable
    if (lowerRequired === true) {
      charSet.push(...lowerChar);
      let lowerAdd = lowerChar[Math.floor(Math.random() *lowerChar.length)];
      pwdFollow.push(lowerAdd);
    }
    
    console.log(pwdFollow);
    console.log(charSet);

  var specialRequired = confirm("Include special characters (i.e !@#$% etc.)?");
    // ensure that speical characters are included in the character set variable
    if (specialRequired === true) {
      charSet.push(...specialChar);
      let specialAdd = specialChar[Math.floor(Math.random() *specialChar.length)];
      pwdFollow.push(specialAdd);
    }

    console.log(pwdFollow);
    console.log(charSet);

  var numbersRequired = confirm("Include numbers?");
    // ensure that numbers are included in the character set variable
    if (numbersRequired === true) {
      charSet.push(...numbers);
      let numbersAdd = numbers[Math.floor(Math.random() *numbers.length)];
      pwdFollow.push(numbersAdd);
    }

    console.log(pwdFollow);
    console.log(charSet);
    console.log(charSet.length);

    if (charSet.length === 0) {
      alert("You did not define any valid characters.");
      return;
    }

    // add in values for required set
    while( password.length < pwdFollow.length) {
      let pwdFollowSet = pwdFollow[Math.floor(Math.random() *pwdFollow.length)];
      password += pwdFollowSet;
      console.log(password)
    }
    
    // iterative loop to cycle through the character set into a password variable.
    while( password.length < totalCharacters) {
      
      // select random character from charset
      let randomChar = charSet[Math.floor(Math.random() *charSet.length)];

      // append randomchar to password
      password += randomChar;
      console.log(password)

    }

    console.log(password)

    // returns the password defined in the while loop
    return password;
}

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

