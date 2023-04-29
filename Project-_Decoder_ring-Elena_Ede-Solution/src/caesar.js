const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    // check for invalid shift values
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    
    // define the alphabet and convert input to lowercase
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputStr = input.toLowerCase();
    
    let result = "";
    
    // loop through each character in the input string
    for (let i = 0; i < inputStr.length; i++) {
      const char = inputStr[i];
      
      // handle non-alphabetic characters
      if (!alphabet.includes(char)) {
        result += char;
        continue;
      }
      
      // get the index of the current character in the alphabet
      const index = alphabet.indexOf(char);
      
      // apply the shift value (negative if decoding)
      const shiftedIndex = encode ? (index + shift) % 26 : (index - shift) % 26;
      
      // handle wrapping around the alphabet
      const newIndex = shiftedIndex < 0 ? shiftedIndex + 26 : shiftedIndex;
      
      // add the shifted character to the result string
      result += alphabet[newIndex];
    }
    
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
