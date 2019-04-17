export function ListNode<T>(val: T) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.toString = function() {
  let str = JSON.stringify(this.val);
  let node = this.next;
  while (node) {
    str += '->' + JSON.stringify(node.val);
    node = node.next;
  }
  return str;
}

ListNode.fromArray = function<T>(values: T[]) {
  if (!values || values.length === 0) {
    return null;
  }

  let head, prev;
  for (const val of values) {
    const node = new ListNode(val);
    if (head) {
      prev.next = node;
    } else {
      head = node;
    }
    prev = node;
  }

  return head;
}
