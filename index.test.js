const calculPoints = require('./index');

describe('calculPoints', () => {
    it("should return 28 when given Brelan", () => {
        expect(calculPoints(2, 5, 2, 2, 1)).toBe(28);
    });
});

describe('calculPoints', () => {
    it("should return 35 when given Carrée", () => {
        expect(calculPoints(2, 5, 2, 2, 2)).toBe(35);
    });
});
