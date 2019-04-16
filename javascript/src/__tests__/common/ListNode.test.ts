import { ListNode } from '../../common/ListNode';

describe('ListNode', () => {
  describe('constructor()', () => {
    it('should create an instance', () => {
      expect(new ListNode(1)).toBeInstanceOf(ListNode);
    });

    it('should set the node value', () => {
      const val = {};
      expect(new ListNode(val).val).toBe(val);
    });

    it('should set the next node', () => {
      expect(new ListNode(0).next).toBeNull();
    });
  });

  describe('toString(node: ListNode)', () => {
    it('should return the value if the next node is null', () => {
      const val = { prop: 'val' };
      expect(new ListNode(val).toString()).toBe(JSON.stringify(val));
    });

    it('should return the nodes joined by "-"', () => {
      const head = ListNode.fromArray([1,2,3,4]);

      expect(head.toString()).toBe('1 -> 2 -> 3 -> 4');
    });
  });

  describe('static fromArray(values: any[])', () => {
    it('returns null when the array is not provided', () => {
      // @ts-ignore: An argument is expected
      expect(ListNode.fromArray()).toBeNull();
    });

    it('returns null when the array is not empty', () => {
      expect(ListNode.fromArray([])).toBeNull();
    });

    it('returns the head of a list with connected nodes', () => {
      const values = [1, 2, 3, 4];
      let node = ListNode.fromArray(values);
      let i = 0;
      for (let i = 0, length = values.length; i < length; i += 1) {
        expect(node.val).toBe(values[i]);

        if ((i + 1) === length) {
          expect(node.next).toBeNull();
        } else {
          expect(node.next).toBeInstanceOf(ListNode);
        }
        node = node.next;
      }
    });
  });
});
