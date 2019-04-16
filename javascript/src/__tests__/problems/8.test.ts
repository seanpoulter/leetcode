import { myAtoi } from '../../problems/8';
import { TestTemplate, executeTestsUsingTemplate } from '../../common/test-template';

const testData: TestTemplate<string, number> = {
  functionToTest: myAtoi,
  matcher: 'toBe',
  problemNumber: 8,
  testSuites: [
    {
      description: 'Example',
      testCases: [
        {
          argArray: ['42'],
          expected: 42,
        },
        {
          argArray: ['   -42'],
          expected: -42,
        },
        {
          argArray: ['4193 with words'],
          expected: 4193,
        },
        {
          argArray: ['words and 987'],
          expected: 0,
        },
        {
          argArray: ['-91283472332'],
          expected: -2147483648,
        },
      ],
    },
    {
      description: 'My Test Case',
      testCases: [
        {
          argArray: [''],
          expected: 0,
        },
        {
          argArray: ['  '],
          expected: 0,
        },
        {
          argArray: ['+1'],
          expected: 1,
        },
        {
          argArray: ['-1'],
          expected: -1,
        },
        {
          argArray: ['    -a'],
          expected: 0,
        },
      ]
    }
  ],
}

executeTestsUsingTemplate(testData);
