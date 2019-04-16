const { ListNode } = require('../common/ListNode');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
function addTwoNumbers(l1, l2) {
  let digits1 = [];
  let digits2 = [];
  let node = l1;
  while (node) {
    digits1.push(node.val);
    node = node.next;
  }
  node = l2;
  while (node) {
    digits2.push(node.val);
    node = node.next;
  }

  let len1 = digits1.length;
  let len2 = digits2.length;
  let carry = 0;
  let next;
  for (let i = 1; i <= len1 || i <= len2; i += 1) {
    let val = carry;
    if (i <= len1) {
      val += digits1[len1 - i];
    }
    if (i <= len2) {
      val += digits2[len2 - i];
    }

    if (val >= 10) {
      val -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    node = new ListNode(val);
    if (next) {
      node.next = next;
    }
    next = node;
  }

  if (carry) {
    node = new ListNode(carry);
    node.next = next;
    return node;    
  }

  return next;
}

module.exports = {
  addTwoNumbers,
};
