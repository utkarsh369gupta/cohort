/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let st = str.toLowerCase();
  let newstr = st.split("");
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(newstr[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("utkarsh"));
// module.exports = countVowels;