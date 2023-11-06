const calculPoints = require('./index');

describe('calculPoints', () => {
    it("should return 28 when given Brelan", () => {
        expect(calculPoints(2, 5, 2, 2, 1)).toBe(28);
    });
});

describe('calculPoints', () => {
    it("should return 35 when given Carré", () => {
        expect(calculPoints(2, 5, 2, 2, 2)).toBe(35);
    });
});

describe('calculPoints', () => {
    it("should return 30 when given Full", () => {
        expect(calculPoints(2, 5, 5, 2, 2)).toBe(30);
    });
});
