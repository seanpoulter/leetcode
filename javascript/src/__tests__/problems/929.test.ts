import { TestTemplate, executeTestsUsingTemplate } from '../../common/test-template';
import { numUniqueEmails } from '../../problems/929';

const testData: TestTemplate<string[], number> = {
  functionToTest: numUniqueEmails,
  matcher: 'toBe',
  problemNumber: 929,
  testSuites: [
    {
      description: 'Example',
      testCases: [
        {
          argArray: [
            [
              "test.email+alex@leetcode.com",
              "test.e.mail+bob.cathy@leetcode.com",
              "testemail+david@lee.tcode.com"
            ]
          ],
          expected: 2,
        },
      ],
    }
  ]
}

executeTestsUsingTemplate(testData);
