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
// Select elements
const inputText = document.getElementById("input-text");
const checkButton = document.getElementById("check-button");
const clearButton = document.getElementById("clear-button"); // New Clear Button
const resultElement = document.getElementById("result");
const historyList = document.getElementById("history-list"); // History List

// Function to check if a text is a palindrome
function isPalindrome(text) {
  const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedText === cleanedText.split("").reverse().join("");
}

// Add event listener for "Check Palindrome" button
checkButton.addEventListener("click", function () {
  const text = inputText.value.trim();

  // Validate input
  if (text === "") {
    resultElement.textContent = "Please enter a valid text.";
    resultElement.style.color = "red";
    return;
  }

  // Check if the input is a palindrome
  const result = isPalindrome(text);
  const length = text.length;
  if (result) {
    resultElement.textContent = `"${text}" is a palindrome! Length: ${length}`;
    resultElement.style.color = "lightgreen";
  } else {
    resultElement.textContent = `"${text}" is not a palindrome. Length: ${length}`;
    resultElement.style.color = "red";
  }

  // Add result to history
  const historyItem = document.createElement("li");
  historyItem.textContent = resultElement.textContent;
  historyList.appendChild(historyItem);

  // Clear input field
  inputText.value = "";
});

// Add event listener for "Clear" button
clearButton.addEventListener("click", function () {
  inputText.value = "";
  resultElement.textContent = "";
  historyList.innerHTML = ""; // Clear history
});
  