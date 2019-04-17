/**
 * @param {string} J  Distinct set of jewels
 * @param {string} S  Collection of "stones"
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let result = 0;

  for (let i = 0, length = S.length; i < length; i += 1) {
    if (J.includes(S[i])) {
      result += 1;
    }
  }

  return result;
};

module.exports = { numJewelsInStones };
