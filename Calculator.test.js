const calculator = require("./Calculator.js");

describe('calculator', () => {

    test('addition of numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(20, 40)).toBe(60);
    });

    test('subtraction of numbers', () => {
        expect(calculator.sub( 2, 1)).toBe(1);
        expect(calculator.sub(7, 2)).toBe(5);
        expect(calculator.sub(8, 6)).toBe(2);
      });

    test('multiplication of numbers; ', () => {
        expect(calculator.mul(7, 2)).toBe(14);
        expect(calculator.mul(3, 2)).toBe(6);
        expect(calculator.mul(15, 3)).toBe(45);
      });
      
    test('division of numbers', () => {
        expect(calculator.div(10, 2)).toBe(5);
        expect(calculator.div(36, 6)).toBe(6);
        expect(calculator.div(2, 2)).toBe(1);
      });
  });

