function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (number) {
    if (number < 1)
      return true;
  });
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(function (name){
    if(name.startsWith(char))
      return true;
  });
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(function (word) {
    if(word.toLowerCase().startsWith('to '))
      return true;
  })
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(function (number){
    if((number - Math.floor(number)) === 0)
      return true;
  })
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(function(user) {
    return user.data.city.displayName;
  });
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(function (number) {
    return parseFloat(Math.sqrt(number).toFixed(2));
  })
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(function (sentence) {
    if(sentence.toLowerCase().includes(str.toLowerCase()))
      return true
  })
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.map(function(degree) {
    return Math.max(...degree);
  });
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
