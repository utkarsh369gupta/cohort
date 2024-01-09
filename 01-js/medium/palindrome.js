/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let newstr = str.split("");
  let revstr = newstr.slice().reverse();

  // console.log(newstr);
  // console.log(revstr);
  
  if(newstr.join("") === revstr.join("")){
    return true;
  }
  return false;
}

console.log(isPalindrome("naman"));

module.exports = isPalindrome;
