function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  const lowerCaseWord = word.toLowerCase();
  return lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) +"."+ lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let priceWithVAT;
  if(vatRate>0){
    let vat = vatRate/100;
    priceWithVAT = originalPrice + (originalPrice*vat);
  }else{
    priceWithVAT = originalPrice;
  }
  let price = (priceWithVAT - Math.floor(priceWithVAT)) !== 0;

  if(price){
    priceWithVAT = priceWithVAT.toFixed(2);
  }
  return parseFloat(priceWithVAT);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let salePrice;

  if(reduction>0){
    let reductionPrice = reduction/100;
    salePrice = originalPrice - (originalPrice*reductionPrice);
  }else{
    salePrice = originalPrice;
  }

  return getValueFromTwoDecimalPlaces(salePrice);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let strCount = str.length;
  let strCountDivide = str.length/2;
  if(parseInt(strCount)%2!=0){
    return str.charAt(strCountDivide);
  }else{
    return str.substring(strCountDivide-1,strCountDivide+1);
  }
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
  let sumOfScores = 0;
  let noOfScores = scores.length;
  for(let i=0;i<scores.length;i++){
    sumOfScores = sumOfScores + scores[i];
  }
  let meanScore = sumOfScores/noOfScores;
  return getValueFromTwoDecimalPlaces(meanScore);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n%3==0 && n%5==0){
    return 'fizzbuzz';
  }else if(n%3==0){
    return 'fizz';
  }else if(n%5==0){
    return 'buzz';
  }else{
    return n;
  }
}

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
