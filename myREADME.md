# Challenge3




# Complicated attempts

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  var wantsUppercase;
  var wantsLowerCase;
  var wantsNumbers;
  var wantsSpecialcharacters;
  var completedPassword;
  var alphaOptionsupper;
  var randomLetterupper ;
  var alphaOptionslower;
  var randomLetterlower;
  var randomNumber;
  var specialCharacters;
  var randomSpecialcharacter;
  var inclusive;
  var randomInclusive;


function generatePassword() {


  
  function generateRandom() {
    alphaOptionsupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    randomLetterupper = [alphaOptionsupper[Math.floor(Math.random() * 26)]];
    alphaOptionslower = alphaOptionsupper.toLowerCase();
    randomLetterlower = [alphaOptionslower[Math.floor(Math.random() * 26)]];
    randomNumber = Math.floor(Math.random() * 9);
    specialCharacters = "!'()*+#$%&,-./:;<=>?@[\]^_`{|}~"
    randomSpecialcharacter = [specialCharacters[Math.floor(Math.random() * 32)]];
    inclusive = [randomLetterupper, randomLetterlower, randomNumber, randomSpecialcharacter];
    randomInclusive = [inclusive[Math.floor(Math.random() * 4)]];

  
    var randomInclusive = [inclusive[Math.floor(Math.random() * 4)]];
    return randomInclusive;

  }
  

  
  var passwordLength = prompt("Please choose length of desired password; must be between 8 and 128 characters");
  
  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    wantsUppercase = confirm("Do you want to include UPPERCASE characters?");
    wantsLowerCase = confirm("Do you want to include lowercase characters?");
    wantsNumbers = confirm("Do you want to include numbers?");
    wantsSpecialcharacters = confirm("Do you want to include special characters?");
  
 
  
    if (wantsUppercase = "False") {
      inclusive = [randomLetterlower, randomNumber, randomSpecialcharacter];
      randomInclusive = [inclusive[Math.floor(Math.random() * 3)]];
    }

    else if (wantsLowerCase = "False") {
      inclusive = [randomLetterupper, randomNumber, randomSpecialcharacter];
      randomInclusive = [inclusive[Math.floor(Math.random() * 3)]];
    }
    else if (wantsNumbers = "False") {
      inclusive = [wantsUppercase, wantsLowerCase, wantsSpecialcharacters];
      randomInclusive = [inclusive[Math.floor(Math.random() * 3)]];
    }
    else if (wantsSpecialcharacters = "False") {
      inclusive = [wantsSpecialcharacters, wantsLowerCase, wantsNumbers];
      randomInclusive = [inclusive[Math.floor(Math.random() * 3)]];
    }  

 
    for (var i = 0; i < parseInt(passwordLength); i++) {
      completedPassword += generateRandom().toString();
      generatePassword;
 
      
    }
  
    return completedPassword;
  
  }else {
    alert("Password needs to be between 8 and 128 characters long.");
    generatePassword();  
  }
  return completedPassword;

}  


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  var wantsUppercase;
  var wantsLowerCase;
  var wantsNumbers;
  var wantsSpecialcharacters;
  var completedPassword;
  var alphaOptionsupper;
  var randomLetterupper ;
  var alphaOptionslower;
  var randomLetterlower;
  var randomNumber;
  var specialCharacters;
  var randomSpecialcharacter;
  var inclusive;
  var randomInclusive;



function generatePassword() {


  
  function generateRandom() {
    alphaOptionsupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    randomLetterupper = [alphaOptionsupper[Math.floor(Math.random() * 26)]];
    alphaOptionslower = alphaOptionsupper.toLowerCase();
    randomLetterlower = [alphaOptionslower[Math.floor(Math.random() * 26)]];
    randomNumber = Math.floor(Math.random() * 9);
    specialCharacters = "!'()*+#$%&,-./:;<=>?@[\]^_`{|}~"
    randomSpecialcharacter = [specialCharacters[Math.floor(Math.random() * 32)]];
    inclusive = [randomLetterupper, randomLetterlower, randomNumber, randomSpecialcharacter];
    randomInclusive = [inclusive[Math.floor(Math.random() * parseInt(inclusive.length))]];
    return randomInclusive;

  }
  
  
  var passwordLength = prompt("Please choose length of desired password; must be between 8 and 128 characters");
  
  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    wantsUppercase = confirm("Do you want to include UPPERCASE characters?");
    if (wantsUppercase ="False"){
      inclusive = inclusive.splice(0,1);
    }
    wantsLowerCase = confirm("Do you want to include lowercase characters?");
    if (wantsLowerCase="False"){
      inclusive.splice(1,1);
    }
    wantsNumbers = confirm("Do you want to include numbers?");
    if (wantsNumbers="False"){
      inclusive.splice(2,1);
    }
    wantsSpecialcharacters = confirm("Do you want to include special characters?");
    if (wantsNumbers="False"){
      inclusive.splice(3,1);
    }
  
    for (var i = 0; i < parseInt(passwordLength); i++) {
      completedPassword += generateRandom().toString();
      generatePassword;
 
    }
  
  }
  
  else{
    alert("Password needs to be between 8 and 128 characters long.");
    generatePassword();  
  }

  return completedPassword;