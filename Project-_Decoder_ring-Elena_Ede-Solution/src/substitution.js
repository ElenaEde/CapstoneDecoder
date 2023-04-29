// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (() => {
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    for (let i = 0; i < input.length; i++) {
      if (alphabet.indexOf(input[i]) !== alphabet.lastIndexOf(input[i])) {
        return false;
      }
    }

    return encode ? subEncode(input, alphabet) : subDecode(input, alphabet);
  }

  function subEncode(input, alphabet) {
    input = input.toLowerCase();

    return input
      .split("")
      .map(char => {
        const codeIndex = realAlphabet.indexOf(char);
        return codeIndex >= 0 ? alphabet[codeIndex] : char;
      })
      .join("");
  }

  function subDecode(input, alphabet) {
    return input
      .split("")
      .map(char => {
        const decodeIndex = alphabet.indexOf(char);
        return decodeIndex >= 0 ? realAlphabet[decodeIndex] : char;
      })
      .join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
