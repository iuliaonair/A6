(function() {
    "use strict";

    window.addEventListener("load", init);
  
    function init() {
      // Encrypt button functionality 
      var encryptButton = document.getElementById("encrypt-it");
      encryptButton.addEventListener("click", handleClick);

      // Reset button functionality 
      var resetButton = document.getElementById("reset");
      resetButton.addEventListener("click", reset);
    }
  
    /**
    * Handles the click event of the "Encrypt It!" button.
    */
    function handleClick() {
        var inputTextArea = document.getElementById("input-text");
        var outputParagraph = document.getElementById("result");
        var cipherType = document.getElementById("cipher-type").value;
        var fontSize = document.querySelector('input[name="text-size"]:checked').value;
        var allCaps = document.getElementById("all-caps").checked;
    
        var text = inputTextArea.value;
    
        // Apply cipher
        var encryptedText = shiftCipher(text);
    
        // Apply uppercase
        if (allCaps) {
          encryptedText = encryptedText.toUpperCase();
        }
        // Apply font size
        outputParagraph.style.fontSize = fontSize;
    
        // Set the encrypted text as the result
        outputParagraph.textContent = encryptedText;
    }

    /**
   * Resets the input textarea and the result paragraph to their initial state.
   */
    function reset() {
        var inputTextArea = document.getElementById("input-text");
        var outputParagraph = document.getElementById("result");
    
        inputTextArea.value = "";
        outputParagraph.textContent = "";
    }


    /**
    * Returns an encrypted version of the given text, where
    * each letter is shifted alphabetically ahead by 1 letter,
    * and 'z' is shifted to 'a' (creating an alphabetical cycle).
    */
    function shiftCipher(text) {
        text = text.toLowerCase();
        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] < 'a' || text[i] > 'z') {
            result += text[i];
          } else if (text[i] == 'z') {
            result += 'a';
          } else {
            let letter = text.charCodeAt(i);
            let resultLetter = String.fromCharCode(letter + 1);
            result += resultLetter;
          }
        }
        return result;
    }

  
  })();