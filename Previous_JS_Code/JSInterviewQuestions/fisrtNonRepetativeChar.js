const str = 'stress';

function firstNonDuplicateChar(str) {
  // Step 1: Create an object to store character counts
  const charCount = {};

  // Step 2: Populate character counts
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Step 3: Find the first non-duplicate character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-duplicate character is found
}

console.log(firstNonDuplicateChar(str)); // Output: "t"