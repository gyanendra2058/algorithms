var Solution = require('../../misc_problems/square_root/Solution');

describe('Square root', () => {
    it('negative scenarios', () => {
        expect(() => {
            new Solution(-1, 0).sqrt()
        }).toThrowError('Invalid input');

        expect(() => {
            new Solution("blah blah", 0).sqrt()
        }).toThrowError('Invalid input');
    });

    it('perfect integer square scenario', () => {
        expect(new Solution(49).sqrt()).toBe(7);
        expect(new Solution(100).sqrt()).toBe(10);

    });

    it('perfect fractional square scenario', () => {
        expect(new Solution(30.25, 2).sqrt()).toBe(5.5);
        expect(new Solution(39.69, 2).sqrt()).toBe(6.3);

    });

    it('irrational number scenario', () => {
        expect(new Solution(87, 4).sqrt()).toBe(9.3273);
    })
})