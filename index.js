function containsVowel(str){
  let vowel = 0
  let con = 0  
  for(let i=0; i<str.length; i++ ){
    if("aeiou".indexOf(str[i].toLowerCase()) != -1) {
      vowel++
    } else {
      con++
    }
  }
  if(str==='') {
    console.log(`Please enter a word to be evaluated`)
  } else if(vowel===con) {
    console.log(`${str} has an equal number of vowels and consonants`)
  } else if(vowel>con) {
    console.log(`There are more vowels in ${str} than consonants`)
  } else {
    console.log(`There are more consonants in ${str} than vowels`)
  }
};

containsVowel('beAnoUt')