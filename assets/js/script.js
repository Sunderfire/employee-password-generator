var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();

  function generatePassword() {
    var passwordLength = prompt("Enter a password length between 8 and 128 characters");
    var characterTypes = prompt("Enter what types of characters you want: lowercase, uppercase, numeric and/or special");

    //Return if input criteria not met
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length, please try again");
      return
    }

    if (!characterTypes) {
      alert("Invalid, please enter a valid character type");
      return
    }

    //Character sets for all the possible choices
    var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericSet = "0123456789";
    var symbolSet = "~`!@#$%^&*()-+=[]{}<>?";
    var characterSets = "";

    //If statements to select special cahracter sets
    if (characterTypes.includes("lowercase")) {
      characterSets += lowercaseSet;
    }
    if (characterTypes.includes("uppercase")) {
      characterSets += uppercaseSet;
    }
    if (characterTypes.includes("numeric")) {
      characterSets += numericSet;
    }
    if (characterTypes.includes("special")) {
      characterSets += symbolSet;
    }

    //Random password generator loop
    var randomPassword = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterSets.length)
      randomPassword += characterSets[randomIndex];
    }
    return randomPassword;
  }

  //Display password to user
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Button event listener
generateBtn.addEventListener("click", writePassword);
