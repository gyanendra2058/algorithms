var Solution = require('../../../../misc_problems/leet_code/longest_substring/Solution');

describe('Longest substring', () => {
    xit('scenario 1', () => {
        let solution = new Solution();
        expect(solution.lengthOfLongestSubstring('pwwkew')).toEqual(3);
        expect(solution.lengthOfLongestSubstring('bbbbb')).toEqual(1);
        expect(solution.lengthOfLongestSubstring('abcabcbb')).toEqual(3);
        expect(solution.lengthOfLongestSubstring('dvdf')).toEqual(3);
    });
})