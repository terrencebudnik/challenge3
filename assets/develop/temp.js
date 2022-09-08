// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener('click', writePassword)

function generatePassword() {
  var wantsUppercase;
  var wantsLowerCase;
  var wantsNumbers;
  var wantsSpecialcharacters;
  var completedPassword;
  var alphaOptionsupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphaOptionslower = alphaOptionsupper.toLowerCase();
  var randomNumber = "123456789";
  var specialCharacters = "!'()*+#$%&,-./:;<=>?@[\]^_`{|}~"
  var completedPassword = [];
  var inclusive = "";


  var passwordLength = prompt("Please choose length of desired password; must be between 8 and 128 characters");



  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    wantsUppercase = confirm("Do you want to include UPPERCASE characters?");
    if (wantsUppercase = "True") {
      inclusive += alphaOptionsupper;
    }
    wantsLowerCase = confirm("Do you want to include lowercase characters?");
    if (wantsLowerCase = "True") {
      inclusive += alphaOptionslower
    }

    wantsNumbers = confirm("Do you want to include numbers?");
    if (wantsNumbers = "True") {
      inclusive += randomNumber
    }

    wantsSpecialcharacters = confirm("Do you want to include special characters?");
    if (wantsSpecialcharacters = "True") {
      inclusive += specialCharacters
    }




    for (var i = 0; i < parseInt(passwordLength); i++) {
      var randomIndex = Math.floor(Math.random() * parseInt(inclusive.length));
      var randomAll = inclusive[randomIndex];
      completedPassword += randomAll;





    }

  } else {
    alert("Password needs to be between 8 and 128 characters long.");
    generatePassword();
  }
  return completedPassword;

}



