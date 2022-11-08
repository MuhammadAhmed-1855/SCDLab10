const find = require('./task05');

test("test case 01", () => {
    expect(find(19)).toBe("Element is present.");
});

test("test case 02", () => {
    expect(find(9)).toBe("Element is not present.");
});