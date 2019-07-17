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
    expect(solution.all([1, 2, 6], cbFn)).toBe(true);
    expect(solution.all([1, 2, 9], cbFn)).toBe(false);
  });

  it('should test productOfArray', () => {
    expect(solution.productOfArray([1, 2, 3, 10])).toBe(60);
  });

  it('should test totalIntegers', () => {
    expect(solution.totalIntegers([[[5], 3], 0, 2, ['foo'],[],[4, [5, 6]]])).toBe(7)
  });

  it('should test nested object', () => {
    var nestedObject = {
      data: {
        info: {
          stuff: {
            thing: {
              moreStuff: {
                magicNumber: 44
              }
            }
          }
        }
      }
    };
    expect(solution.contains(nestedObject, 44)).toBe(true);
    expect(solution.contains(nestedObject, "foo")).toBe(false);
  });

  it('should test sum of sqaures of a mix elements in a mdarray', () => {
    expect(solution.sumSquares([1,2,3])).toBe(14);
    expect(solution.sumSquares([[1,2],3])).toBe(14);
    expect(solution.sumSquares([[[[[[[[[1]]]]]]]]])).toBe(1);
    expect(solution.sumSquares([10,[[10],10],[10]])).toBe(400);
  });

  it('should replicate the number given times', () => {
    expect(solution.replicate(3,5)).toEqual([5, 5, 5]);
    expect(solution.replicate(1,69)).toEqual([69]);
    expect(solution.replicate(-2,6)).toEqual([]);
  })

  it('should flatten a nested array', () => {
    expect(solution.flattenArray([1, [2, 3], 4, [5, 6, [7, 8], 9]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(solution.flattenArray([0, 1, [2, [3, 4]]])).toEqual([0, 1, 2, 3, 4]);
    expect(solution.flattenArray([[[[]]]])).toEqual([]);
    expect(solution.flattenArray([[[[[1]]]]])).toEqual([1]);
  });

  it('should test palindrome', () => {
    expect(solution.palindrome('abcd')).toBe(false);
    expect(solution.palindrome('abba')).toBe(true);
    expect(solution.palindrome('abcba')).toBe(true);
    expect(solution.palindrome('plokaolp')).toBe(false);

  });

  it('should find modulo without % operator', () => {
    expect(solution.modulo(5,2)).toEqual(1);
    expect(solution.modulo(17,5)).toEqual(2);
    expect(solution.modulo(22,6)).toEqual(4);
    expect(solution.modulo(24,6)).toEqual(0);
  });

  it('should reverse an array', () => {
    expect(solution.reverseArray([1,2,3,4])).toEqual([4,3,2,1]);
  });

  it('should stringifyNumbers', () => {
    expect(solution.stringifyNumbers({
      num: 1,
      test: [],
      data: {
          val: 4,
          info: {
              isRight: true,
              random: 66
          }
      }
  })).toEqual({
      num: "1",
      test: [],
      data: {
          val: "4",
          info: {
              isRight: true,
              random: "66"
          }
      }
  });
  })

  it('should build list', () => {
    expect(solution.buildList(0,5)).toEqual([0,0,0,0,0]);
    expect(solution.buildList(7,3)).toEqual([7,7,7]);
  })

  it('shpuld test fizbuzz', () => {
    expect(solution.fizzBuzz(5)).toEqual(['1','2','Fizz','4','Buzz']);
  })

});