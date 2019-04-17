import { TestTemplate, executeTestsUsingTemplate, TestCase } from '../../common/test-template';
import { numJewelsInStones } from '../../problems/771';

const testData: TestTemplate<string, number>= {
  functionToTest: numJewelsInStones,
  matcher: 'toBe',
  problemNumber: 771,
  testSuites: [
    {
      description: 'Example',
      testCases: [
        {
          argArray: ['aA', 'aAAbbbb'],
          expected: 3,
        },
        {
          argArray: ['z', 'ZZ'],
          expected: 0,
        }
      ]
    }
  ]
}

executeTestsUsingTemplate(testData);
