function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.toLowerCase().charAt(0).toUpperCase() + word.toLowerCase().slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let priceWithVAT;
  if (vatRate > 0) priceWithVAT = originalPrice + (originalPrice * (vatRate / 100));
  else priceWithVAT = originalPrice;
  return getValueFromTwoDecimalPlaces(priceWithVAT);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let salePrice;
  if (reduction > 0) salePrice = originalPrice - (originalPrice * (reduction / 100));
  else salePrice = originalPrice;
  return getValueFromTwoDecimalPlaces(salePrice);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let strCount = str.length;
  let strCountDivide = str.length/2;
  if(parseInt(strCount)%2!=0) return str.charAt(strCountDivide);
  else return str.substring(strCountDivide-1,strCountDivide+1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let reverseWord = '';
  for(let i=word.length-1;i>=0;i--){
    reverseWord = reverseWord.concat(word.charAt(i));
  }
  return reverseWord;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const reverseWords = new Array(words.length);
  for(let i=0;i<words.length;i++){
    reverseWords[i] = reverseWord(words[i].toString());
  }
  return reverseWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  for(let i=0;i<users.length;i++){
    if(String(users[i].type)=='Linux'){
      count++;
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return getValueFromTwoDecimalPlaces((scores.reduce((a, b) => a + b, 0))/scores.length);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n%3==0 && n%5==0) return 'fizzbuzz';
  else if(n%3==0) return 'fizz';
  else if(n%5==0) return 'buzz';
  else return n;
}

/**
 * helping method for get value from two decimal places
 * @param value
 * @returns {number}
 */
function getValueFromTwoDecimalPlaces(value){
  let status = (value - Math.floor(value)) !== 0;
  if(status){
    const strValue = String(value);
    const decimalPlacesCount = strValue.split('.')[1].length
    if(decimalPlacesCount>2){
      value = value.toFixed(2);
    }
  }
  return parseFloat(value);
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
