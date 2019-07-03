var Solution = require('../../../cracking_coding_interview_problems/recursion/misc/Solution');

describe('misc test suite', () => {

  var solution;
  beforeEach(() => {
    solution = new Solution();
  })

  it('should compute an exponent of a value', () => {
    expect(solution.exponent(2, 8)).toBe(64);
  });

  it('should compute sum range', () => {
    expect(solution.sumRange(3)).toBe(6);
  });

  it('should test all function', () => {
    let cbFn = num => num < 7;
    expect(solution.all([1,2,6], cbFn)).toBe(true);
    expect(solution.all([1,2,9], cbFn)).toBe(false);
  });

  it('should test productOfArray', () => {
    expect(solution.productOfArray([1,2,3,10])).toBe(60);
  });

  xit('should test totalIntegers', () => {
    expect(solution.totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])).toBe(7)
  })
});