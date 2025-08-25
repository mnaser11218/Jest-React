const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 3 does not equal 6', () => {
    expect(sum(2, 3)).not.toBe(6);
});

test.skip('adds 2 + 3 does equal 6', () => {
    expect(sum(2, 3)).toBe(6);
});