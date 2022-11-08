const sumCheck = require('./task02');

test("test case 01", () => {
    expect(sumCheck(3,5,10)).toBe(23);
});

test("test case 02", () => {
    expect(sumCheck(3,5,0)).toBe("Below z are not any natural numbers.");
});