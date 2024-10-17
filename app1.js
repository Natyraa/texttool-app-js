const textInput = document.querySelector('#textarea');
const upCaseButton = document.querySelector('#uppercase-button');
const loCaseButton = document.querySelector('#lowercase-button');
const capButton = document.querySelector('#capitalize-button');
const revWordsButton = document.querySelector('#reverse-words-button')
const words1 = document.querySelector('#words');
const chars1 = document.querySelector('#chars');
const longestWord = document.querySelector('#longest-word');
const numbers = document.querySelector('#numbers');
const color = document.querySelector('#color')
const oldWords = document.querySelector('#old-words-input');
const newWords = document.querySelector('#new-words-input')
const replaceButton = document.querySelector('#replace-button')
const textArea = document.querySelector('#textarea')
const bgColor = document.querySelector('#bg-color')
const container = document.querySelector('.container')
const mostFrequentCharacter = document.querySelector('#most-frequent-char')
const getInformation = () => {
  let text = textInput.value;
  const words = text.trim().split(' ');
  const chars = text.trim().split('');
  const longWord = words.reduce((longest , current) => 
   current.length > longest.length ? current : longest
  )
  const mostFrequentChar = () => {
    let mostFrqChar = "";
    let maxFrequency = 0;
    for (i = 0 ;i < text.length ; i++) {
      let count = 0;
      for (let j = 0  ; j < text.length ; j++) {
        if (text[i] === text[j]) {
          count++
        }
      }
      if (count > maxFrequency) {
        maxFrequency = count ;
        mostFrqChar = text[i];
       }
    }
    return mostFrqChar;
  }
  const countWord  = words.length;
  const countChars = chars.length;
  const countNumbers = words.filter((c) => 
  !isNaN(parseInt(c))).length;
  words1.innerHTML = `Words: ${countWord}`;
 chars1.innerHTML = `Chars : ${countChars}`;
  longestWord.innerHTML = `Longest Word : ${longWord}`;
  numbers.innerHTML = `Numbers :${countNumbers}`
  mostFrequentCharacter.innerHTML = `Most Frequent Char: ${mostFrequentChar()}`
}


upCaseButton.addEventListener('click' , () => {
  let text = textInput.value;
  const words = text.split(' ');
  const toUpperCase = words.map((c) => 
     c.toUpperCase()).join(' ');
     textInput.value = toUpperCase;

})

loCaseButton.addEventListener('click',  () => {
  let text = textInput.value;
  let words = text.split(' ');
  const toLowerCase = words.map((c) => 
  c.toLowerCase()).join(' ')
  textInput.value = toLowerCase;
 
})
capButton.addEventListener('click' , ()=> {
  let text = textInput.value;
  let words = text.split(' ');
  const capitalize = words.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(' ');
  textInput.value = capitalize;
 
})
revWordsButton.addEventListener('click' , () => {
  const text = textInput.value;
  const words = text.split(' ');
  const reverseWords = words.map((c) => 
  c.split('').reverse().join('')).join(' ')
  textInput.value = reverseWords;
 
})
color.addEventListener('input' , function() {
  const colorValue =  this.value;
  textInput.style.color = colorValue;
})
bgColor.addEventListener('input' , function() {
  const bgColorValue = this.value;
  textInput.style.background = bgColorValue
})
replaceButton.addEventListener('click' , () => {
  const text = textInput.value;
  const newW = newWords.value;
  const oldW = oldWords.value;
  const words = text.split(' ');
  if (!oldW) {
    alert('Please enter the old word')
  } 
  const newText = words.map(word => word === oldW ? newW : word).join(' ')
 textInput.value = newText

})

textArea.addEventListener('input' , getInformation)