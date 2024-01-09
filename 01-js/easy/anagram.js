/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let l1 = str1.split("");
  let l2 = str2.split("");
  if (l1.length != l2.length) {
    return false;
  }
  for (let i = 0; i < l2.length; i++) {
    let check = 0;
    for (let j = 0; j < l1.length; j++) {
      if (l2[i] == l1[j]) {
        check = 1;
        break;
      }
      if (check == 0 && j == l1.length - 1) {
        return false;
      }
    }
  }
  return true;
}


function isAnagramshort(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  const s1 = str1.split("").sort().join("");
  const s2 = str2.split("").sort().join("");
  return (s1 === s2);
}

console.log(isAnagramshort("hello", "elloh"));
// isAnagramshort("hello", "boss")
// console.log(isAnagramshort("hello", "bhoe"))
// module.exports = isAnagram();
