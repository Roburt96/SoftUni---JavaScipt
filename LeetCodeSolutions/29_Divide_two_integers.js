/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = -Math.pow(2, 31);
  
  if (divisor === 0) {
    return MAX_INT;
  }
  
  if (dividend === MIN_INT && divisor === -1) {
    return MAX_INT;
  }
  
  let quotient = 0;
  let dvd = Math.abs(dividend);
  let dvs = Math.abs(divisor);
  
  while (dvd >= dvs) {
    let temp = dvs;
    let multiple = 1;
    while (dvd >= (temp << 1)) {
      temp <<= 1;
      multiple <<= 1;
    }
    dvd -= temp;
    quotient += multiple;
  }
  
  if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
    quotient = -quotient;
  }
  
  if (quotient > MAX_INT) {
    return MAX_INT;
  } else if (quotient < MIN_INT) {
    return MIN_INT;
  } else {
    return quotient;
  }

};

console.log(divide(10, 3));