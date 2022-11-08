const calc = require('./calculator');

test("test case 01", () => {
    expect(calc.sum(-1,6)).toBe(5);
});

test("test case 02", () => {
    expect(calc.sum(1,6)).toBe(7);
});

test("test case 03", () => {
    expect(calc.sub(1,2)).toBe(-1);
});

test("test case 04", () => {
    expect(calc.sub(-1,2)).toBe(-3);
});

test("test case 05", () => {
    expect(calc.mul(-1,6)).toBe(-6);
});

test("test case 06", () => {
    expect(calc.mul(0,6)).toBe(0);
});

test("test case 07", () => {
    expect(calc.div(-12,6)).toBe(-2);
});

test("test case 08", () => {
    expect(calc.div(-12,0)).toBe("undefined");
});

test("test case 09", () => {
    expect(calc.div(0,2)).toBe(0);
});