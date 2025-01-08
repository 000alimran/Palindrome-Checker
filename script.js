document.getElementById("check-button").addEventListener("click", function () {
    const inputText = document.getElementById("input-text").value;
  
    // Function to check if a string is a palindrome
    function isPalindrome(text) {
      // Remove spaces, punctuation, and convert to lowercase
      const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
      return cleanedText === cleanedText.split("").reverse().join("");
    }
  
    // Check if the input text is a palindrome
    const result = isPalindrome(inputText);
  
    // Display the result
    const resultElement = document.getElementById("result");
    if (result) {
      resultElement.textContent = `"${inputText}" is a palindrome! 🎉`;
      resultElement.style.color = "lightgreen";
    } else {
      resultElement.textContent = `"${inputText}" is not a palindrome. ❌`;
      resultElement.style.color = "red";
    }
  });
  