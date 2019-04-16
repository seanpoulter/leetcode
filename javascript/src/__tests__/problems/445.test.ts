import { TestTemplate, executeTestsUsingTemplate, TestCase } from '../../common/test-template';
import { addTwoNumbers } from '../../problems/445';
import { ListNode } from '../../common/ListNode';

const testData: TestTemplate<number[], number[], ListNode, ListNode> = {
  functionToTest: addTwoNumbers,
  mapper: ({ argArray, expected }: TestCase<number[], number[]>): TestCase<ListNode, ListNode> => ({
    argArray: argArray.map(ListNode.fromArray),
    expected: ListNode.fromArray(expected),
  }),
  matcher: 'toEqual',
  problemNumber: 445,
  testSuites: [
    {
      description: 'Example',
      testCases: [
        {
          argArray: [[7,2,4,3], [5,6,4]],
          expected: [7,8,0,7],
        },
      ]
    },
    {
      description: 'My Test Case',
      testCases: [
        {
          argArray: [[0],[0]],
          expected: [0],
        },
        {
          argArray: [[0],[1]],
          expected: [1],
        },
        {
          argArray: [[1], [0]],
          expected: [1],
        },
        {
          argArray: [[1, 1],[1]],
          expected: [1, 2],
        },
        {
          argArray: [[1],[1, 1]],
          expected: [1, 2],
        },
        {
          argArray: [[1], [9]],
          expected: [1, 0],

        }
      ]
    },
    {
      description: 'Failed on Submission',
      testCases: [
        {
          argArray: [
            [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9],
            [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9],
          ],
          expected: [8,0,7,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,6,4,8,7,2,4,3,8],
        }
      ]
    }
  ]
}

executeTestsUsingTemplate(testData);
