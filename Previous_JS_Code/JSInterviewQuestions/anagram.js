function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Helper function to sort the characters of a string
    const sortString = (str) => str.split('').sort().join('');
  
    return sortString(str1) === sortString(str2);
  }
  
  const val1 = 'abcdy';
  const val2 = 'yncda';
  
  const result = areAnagrams(val1, val2);
  console.log(result); // false
  