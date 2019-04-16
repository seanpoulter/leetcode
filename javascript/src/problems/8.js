const MIN_INT = 2147483648;
const MAX_INT = 2147483647;

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  if (!str) {
    return 0;
  }

  let left = 0, length = str.length, isNegative;

  // Trim
  while (left < length && str[left] === ' ') {
    left += 1;
  }
  if (left === length) {
    return 0;
  }

  // Remove sign
  if (str[left] === '+') {
    left += 1;    
  }
  else if (isNegative = str[left] === '-') {
    left += 1;
  }

  let right = left;
  let result;
  while (right < length && str[right] >= '0' && str[right] <= '9') {
    const val = Number(str[right]);

    // Overflow
    if (isNegative && ((MIN_INT - val) / 10) < result) {
      return -1 * MIN_INT;
    }
    else if (!isNegative && ((MAX_INT - val) / 10) < result) {
      return MAX_INT;
    }

    // Multiply base and add
    if (result) {
      result = 10 * result + val;
    } else {
      result = val;
    }
    right += 1;
  }

  // No digits after sign
  if (left === right) {
    return 0;
  }

  return isNegative ? -1 * result : result;
}

module.exports = { myAtoi };
