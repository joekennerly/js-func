// should take an array containing the words of a sentence and output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = [
  "The",
  "walrus",
  "danced",
  "through",
  "the",
  "trees",
  "in",
  "the",
  "light",
  "of",
  "the",
  "moon"
];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
const addExcitement = (theWordArray, punc, num) => {
  // Each time the for loop executes, you're going to add one more word to this string
  let buildMeUp = "";
  let punctuation = "";

  for (let i = 0; i < num; i++) {
    punctuation += punc
  }

  for (let i = 0; i < theWordArray.length; i++) {
    // Concatenate the new word onto buildMeUp
    buildMeUp += `${theWordArray[i]} `
    
    // Print buildMeUp to the console
    
    if ((i+1) % 3 === 0) {
      console.log(buildMeUp + punctuation)
    } else {
      console.log(buildMeUp)
    }

  }
}

// Invoke the function and pass in the array
addExcitement(sentence, '?', 5);
