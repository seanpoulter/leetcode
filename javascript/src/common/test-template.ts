export interface TestTemplate<TestCaseInput, TestCaseOutput, FunctionInput = TestCaseInput, FunctionOutput = TestCaseOutput> {
  problemNumber: number
  functionToTest: (...args: FunctionInput[]) => FunctionOutput,
  matcher: 'toBe' | 'toEqual'
  testSuites: TestSuiteData<TestCaseInput,TestCaseOutput>[],
  mapper?: (testCase: TestCase<TestCaseInput,TestCaseOutput>) => TestCase<FunctionInput,FunctionOutput>
}

interface TestSuiteData<TestCaseInput, TestCaseOutput> {
  description: string
  testCases: TestCase<TestCaseInput, TestCaseOutput>[]
}

export interface TestCase<TestCaseInput, TestCaseOutput> {
  argArray: TestCaseInput[]
  expected: TestCaseOutput
}

export function executeTestsUsingTemplate<TestCaseInput, TestCaseOutput, FunctionInput = TestCaseInput, FunctionOutput = TestCaseOutput>({ functionToTest, matcher, mapper, problemNumber, testSuites }: TestTemplate<TestCaseInput, TestCaseOutput, FunctionInput, FunctionOutput>) {
  describe(`Problem ${problemNumber} - `, () => {
    testSuites.forEach(({ description, testCases: tests }) => {
      describe(description, () => {
        tests.forEach((testCase, idx) => {
          let argArray: FunctionInput[] | TestCaseInput[];
          let expected: FunctionOutput | TestCaseOutput;
          if (mapper) {
            ({ argArray, expected } = mapper(testCase));
          } else {
            ({ argArray, expected } = testCase);
          }

          it(`${idx + 1}: ${argArray}`, () => {
            const actual = functionToTest.apply(null, argArray);
            expect(actual)[matcher](expected);
          });
        });
      });
    })
  });
}
