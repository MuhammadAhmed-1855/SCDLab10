const task03 =  require('./task03');

test("test case 01", () => {
    expect(task03.power(3,3)).toBe(27);
});

test("test case 02", () => {
    expect(task03.power(3,0)).toBe(1);
});

test("test case 03", () => {
    expect(task03.power(3,-1)).toBe(0.3333333333333333);
});

test("test case 04", () => {
    expect(task03.round(5.3)).toBe(5);
});

test("test case 05", () => {
    expect(task03.round(5.0)).toBe(5);
});

test("test case 06", () => {
    expect(task03.ceiling(3.3)).toBe(4);
});

test("test case 07", () => {
    expect(task03.ceiling(3.0)).toBe(3);
});