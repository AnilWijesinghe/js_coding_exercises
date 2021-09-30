function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if(person.city=='Manchester'){
    return true;
  }else{
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let value = Math.floor(people/40);
  let remainder = people%40;
  if(remainder==0){
    return value;
  }else{
    return value+1;
  }
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(x => x === 'sheep').length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if(!person.address.postCode.startsWith('M')){
    return false;
  }else if(person.address.postCode.startsWith('M') && person.address.city!='Manchester'){
    return false;
  }else{
    return true;
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
