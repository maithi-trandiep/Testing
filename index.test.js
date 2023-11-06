const calculPoints = require('./index');

describe('calculPoints', () => {
    it("should return 28 when given Brelan", () => {
        expect(calculPoints(2, 5, 2, 2, 1)).toBe(28);
    });
});
