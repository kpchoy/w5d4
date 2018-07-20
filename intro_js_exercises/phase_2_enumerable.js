Array.prototype.myEach = function(callback) {
  for ( let i=0; i<this.length; i++ ){
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  result = [];
  for (let i=0; i<this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

Array.prototype.myReduce = function(callback, initialValue){
  let arr = this.slice();

  if (!initialValue) {
    initialValue = arr.shift();
  }

  for (let i=0; i < arr.length; i++) {
    initialValue = callback(initialValue, arr[i]);
  }

  return initialValue;
};

funct2 = function(total, el) {
  return total + el;
};