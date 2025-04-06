function reverseString(str) {
    // Initialize an empty string to hold the reversed string
    let reversed = '';
  
    // Loop through the string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
      // Append each character to the reversed string
      reversed += str[i];
    }
  
    // Return the reversed string
    return reversed;
  }
  
  // Example usage
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  console.log(reversedString); // Output: "olleh"
  

//   const val='Jaya Shukla';
// let newVal='';
// for (let i=val.length-1; i>=0;i--){
// 	newVal= newVal+ val[i];
// }
// console.log(newVal);
//OUTPUT==>>>"alkuhS ayaJ"