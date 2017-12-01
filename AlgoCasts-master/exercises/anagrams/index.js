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
  return sortedString(stringA) === sortedString(stringB);
}

function sortedString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join();
}

module.exports = anagrams;

// --------------------------
// Alternate solution
// function anagrams(stringA, stringB) {
//   const stringA1 = stringA.replace(/[^\w]/g, "").toLowerCase();
//   const stringB1 = stringB.replace(/[^\w]/g, "").toLowerCase();
//
//   const objA = {};
//   const objB = {};
//   for(let char of stringA1) {
//     if(!objA[char]) objA[char] = 1;
//     else objA[char]++;
//   }
//   for(let char of stringB1) {
//     if(!objB[char]) objB[char] = 1;
//     else objB[char]++;
//   }
//   if(Object.keys(objA).length !== Object.keys(objB).length) {
//     return false;
//   }
//   for(let char in objA) {
//     if(objA[char] !== objB[char]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }



// ------------------------------
// Alternate solution
// function anagrams(stringA, stringB) {
//   const myObjA = myMapObj(stringA);
//   const myObjB = myMapObj(stringB);
//
//   if(Object.keys(myObjA).length !== Object.keys(myObjB).length) return false;
//
//   for(let char in myObjA) {
//     if(myObjA[char] !== myObjB[char]) return false;
//   }
//   return true;
// }
//
// function myMapObj(string) {
//   let myObj = {};
//   for(let char of string.replace(/[^\w]/g, "").toLowerCase()) {
//     myObj[char] = myObj[char] + 1 || 1;
//   }
//   return myObj
// }
