
const findLongestWord = function (string) {
   let stringTwo = string.split(' ');
   let maxWord = stringTwo[0];
   for (let str of stringTwo) {
    if (maxWord.length < str.length){
        maxWord = str;
    }
   }
   return maxWord
  };

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  
console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
