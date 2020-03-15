
exports.min = function min (array) {
  if (!(Array.isArray(array))){
    return 0;
  }
  if (array.length === 0){
    return 0;
  }
  let minimal = array[0];
  array.map( (s) => {minimal = s<minimal ?s:minimal;  })
  return minimal;

}

exports.max = function max (array) {
  if (!(Array.isArray(array))){
    return 0;
  }
  if (array.length === 0){
    return 0;
  }
  let maximal = array[0];
  array.map( (s) => {maximal = s>maximal ?s:maximal;  })
  return maximal;
  
}

exports.avg = function avg (array) {
  if (!(Array.isArray(array))){
    return 0;
  }
  if (array.length === 0){
    return 0;
  }
  let summ = 0;
  array.map( (s) => {summ+=s;  })
  return summ/array.length;
}
