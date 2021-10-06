function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city=='Manchester'
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let value = Math.floor(people/40);
  if(people%40==0) return value;
  else return value+1;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(x => x === 'sheep').length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if(!person.address.postCode.startsWith('M')) return false;
  else return !(person.address.postCode.startsWith('M') && person.address.city != 'Manchester');
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
