function range(start, end) {
  
  if ( end === start ) {
    return [start];
  }
  
  return range(start, end - 1).concat([end]);
}

function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  
  return sumRec(arr.slice(0, -1)) + arr[arr.length - 1];
}