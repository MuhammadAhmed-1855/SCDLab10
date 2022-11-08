//Muhammad Ahmed, 20I-11855, SE-P

const reverseString = require('./task04');

test("test case 01", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("test case 02", () => {
    expect(reverseString("lol")).toBe("lol");
});

test("test case 03", () => {
    expect(reverseString("lol wow")).toBe("wow lol");
});

test("test case 04", () => {
    expect(reverseString("lol wow.")).toBe(".wow lol");
});