const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let nextNum = null;
  for(let i=0;i<nums.length;i++){
    if(nums[i]===n && i!==nums.length-1)
      return nextNum = nums[i+1];
  }
  return nextNum;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const countArray = {"0":0,"1":0};
  for(let i=0;i<str.length;i++){
    if(countArray[str[i]] != undefined)
      countArray[str[i]]+=1;
  }
  return countArray
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat(n.toString()
      .split('')
      .reverse()
      .join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  for(let array of arrs){
    const sumOfArray = array.reduce((a, b) => a + b, 0);
    sum += sumOfArray;
  }
  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if(arr.length>1) [arr[0], arr[arr.length-1]] = [arr[arr.length-1], arr[0]];
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
