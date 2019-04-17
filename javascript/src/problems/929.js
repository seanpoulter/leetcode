/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let result = 0;
  const found = {};

  for (let i = 0, listLen = emails.length; i < listLen; i += 1) {
    let email = '';
    for (let j = 0, strLen = emails[i].length, localAddress = true, tag = false; j < strLen; j += 1) {
      if (localAddress) {
        if (emails[i][j] === '@') {
          localAddress = false;
          tag = false;
        }
        else if (emails[i][j] === '.' || tag) {
          continue;
        }
        else if (emails[i][j] === '+') {
          tag = true;
          continue;
        }

        email += emails[i][j];
      }
      else {
        email += emails[i].substring(j);
        break;
      }
    }

    if (!found[email]) {
      found[email] = true;
      result += 1;
    }
  }

  return result;
};


module.exports = {
  numUniqueEmails,
};
