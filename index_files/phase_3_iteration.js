Array.prototype.bubbleSort = function () {
  let arr = this;
  
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < this.length; i++) {      
      if (i + 1 === this.length) {
        break;
      }
      if(arr[i] > arr[i + 1]) {
        sorted = false;
        big = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = big;
      }
    }
  }
  return arr;
};

String.prototype.substrings = function () {
  let result = [];
  // console.log("got here");
  
  for (let i = 0; i < this.length; i++) {
    if (i + 1 == this.length) {
      break;
    }
    
    for (let j = i + 1; j < this.length; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
};




funct = function(num){
  return num * 2;
};