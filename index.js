function containsVowel(str){
  let vowel = 0
  let con = 0  
  for(let i=0; i<str.length; i++ ){
    "aeiou".includes(str[i].toLowerCase()) ? vowel++ : con++
  }
  str==='' ? console.log(`Please enter a word to be evaluated`) : vowel===con ? console.log(`${str} has an equal number of vowels and consonants`) : vowel>con ? console.log(`There are more vowels in ${str} than consonants`) : console.log(`There are more consonants in ${str} than vowels`)
};

containsVowel('')