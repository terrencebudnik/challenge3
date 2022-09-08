// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  var alphaOptionsupper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var alphaOptionslower = alphaOptionsupper.toLowerCase();
  var randomNumber = "123456789";
  var specialCharacters = "!'()*+#$%&,-./:;<=>?@[\]^_`{|}~";
  


  var passwordLength = prompt("Please choose length of desired password; must be between 8 and 128 characters");



  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    var wantsUppercase = true;
    wantsUppercase = confirm("Do you want to include UPPERCASE characters?");
   
    var wantsLowerCase = true;
    wantsLowerCase = confirm("Do you want to include lowercase characters?");
    
    var wantsNumbers = true;
    wantsNumbers = confirm("Do you want to include numbers?");
    
    var wantsSpecialcharacters = true;
    wantsSpecialcharacters = confirm("Do you want to include special characters?");
  }
  else {
    alert("Password needs to be between 8 and 128 characters long.");
    generatePassword();
  }

  var tempPassword = "";

  if (wantsUppercase) {
    tempPassword +=alphaOptionsupper; 
  }

  if (wantsLowerCase) {
    tempPassword +=alphaOptionslower; 
  }   

  if (wantsNumbers) {
    tempPassword += randomNumber;
  }

  if (wantsSpecialcharacters) {
    tempPassword += specialCharacters;
  }

    var completedPassword = ""; 
    for (var i = 0; i < parseInt(passwordLength); i++) {
      var randomValue = Math.floor(Math.random() * (tempPassword.length));
      completedPassword += tempPassword[randomValue]; 
      
    }


    return completedPassword;
 
  }

  generateBtn.addEventListener('click', writePassword)





