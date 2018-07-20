Array.prototype.uniq = function(){
  result = [];
  for ( let i = 0; i < this.length; i++ ){
    if (result.includes(this[i])) {
      continue;
    }
    result.push(this[i]);
  }
  return result; 
};

Array.prototype.twoSum = function(){
  result = [];
  for ( let i=0; i<this.length; i++ ){
    for( let j=i+1; j<this.length; j++ ){
      if ( this[i] + this[j] === 0 ){
        result.push([i,j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  x = this.length;
  y = this[0].length;
  
  result = new Array(x);
  
  for (let k = 0; k < result.length; k++) {
    result[k] = new Array(y);
  }
  
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      result[j][i] = this[i][j];
    }
  }
  
  return result;
};