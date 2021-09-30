function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const squareArray = [];
  for(let i=0;i<nums.length;i++){
    squareArray[i] = Math.pow(nums[i],2);
  }
  return squareArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let word = '';
  for(let i=0;i<words.length;i++){
    if(i!=0){
      word = word.concat(words[i].charAt(0).toUpperCase(),words[i].slice(1));
    }else{
      word = words[0];
    }
  }
  return word;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjectCount = 0;
  for (let i=0;i<people.length;i++){
    subjectCount = subjectCount+people[i].subjects.length;
  }
  return subjectCount;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let status = false;
  for (let i=0; i<menu.length;i++){
    status = menu[i].ingredients.includes(ingredient);
    if(status){
      break;
    }
  }
  return status;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let duplicateArray = [];
  for(let i=0;i<arr1.length;i++){
    if(arr2.includes(arr1[i]) && !duplicateArray.includes(arr1[i])){
      duplicateArray.push(arr1[i]);
    }
  }
  return duplicateArray.sort(function(a, b){return a-b});
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
