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

function exponent1(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  
  return exponent(base, exp - 1) * base;
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  
  if (exp % 2 === 0) {
    return exponent2(base, (exp / 2)) ** 2;
  }
  else {
    return base * exponent2(base, (exp - 1) / 2) ** 2;
  }
}


function fibonacci(n) {
  if ( n < 3 ) {
    return [0, 1].slice(0, n);
  }
  
  let fibs = fibonacci(n - 1);
  fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
  
  return fibs;
}