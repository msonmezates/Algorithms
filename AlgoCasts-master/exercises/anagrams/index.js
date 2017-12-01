// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const stringA1 = stringA.replace(/[^\w]/g, "").toLowerCase();
  const stringB1 = stringB.replace(/[^\w]/g, "").toLowerCase();

  const objA = {};
  const objB = {};
  for(let char of stringA1) {
    if(!objA[char]) objA[char] = 1;
    else objA[char]++;
  }
  for(let char of stringB1) {
    if(!objB[char]) objB[char] = 1;
    else objB[char]++;
  }
  if(Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }
  for(let char in objA) {
    if(objA[char] !== objB[char]) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = anagrams;
