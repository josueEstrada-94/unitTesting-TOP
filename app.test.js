import { calculator,
     capitalize,
     reverseString,
     caesarCipher,
     analyzeArray 
    } 
from "./app";

// Calculator tests.
test('Must add two numbers correctly', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('Must add negative numbers correctly', () => {
    expect(calculator.add(-1, 2)).toBe(1);
});

test('Must subtract numbers correctly', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test('Works with negative numbers correctly', () => {
    expect(calculator.subtract(1, 4)).toBe(-3);
});

test('Multiply two numbers correctly', () => {
    expect(calculator.multiply(4, 4)).toBe(16);
});

test('Multiply by cero returns cero', () => {
    expect(calculator.multiply(100, 0)).toBe(0);
});

test('Divide two numbers correctly', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('Divide by cero returns an error', () => {
    expect(() => {
        calculator.divide(20, 0);
    }).toThrowError('You cannot divide by cero.');
});

// Capitalize test
test('The word is capitalized', () => {
    expect(capitalize('Capitan')).toMatch(/^[A-Z][a-z]*$/)
});

// Reverse String test
test('The sting has been reversed', () => {
    expect(reverseString('capitan')).toMatch('natipac')
});

test('Caesar Cipher works', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('Caesar Cipher works backwards', () => {
    expect(caesarCipher('khoor', -3)).toBe('hello');
});

test('Array contains avg, min, max and length', () => {
    expect(analyzeArray([4, 9, 2, 7, 5, 1, 8, 6, 3])).toStrictEqual(
        {average: 5,
        min: 1,
        max: 9,
        length: 9
        })     
});

test("Return an 'undefined' values in the object", () => {
    expect(analyzeArray([])).toStrictEqual(
        {average: undefined,
        min: undefined,
        max: undefined,
        length: 0
        })     
});




