const {
    sumDigits,
    createRange
} = require("../challenges/exercise007");


describe("sumDigits", () => {
    test("throws an error if not pass a number", () => {
        expect(()=>{
            sumDigits();
        }).toThrow('n is required');
    });

    test("throws an error if pass a String", () => {
        expect(()=>{
            sumDigits('5');
        }).toThrow('Positive number is required');
    });

    test("throws an error if pass a negative number", () => {
        expect(()=>{
            sumDigits(-5);
        }).toThrow('Positive number is required');
    });

    test("throws an error if pass decimal value", () => {
        expect(()=>{
            sumDigits(5.2);
        }).toThrow('Positive number is required');
    });

    test("return sum", () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(456)).toBe(15);
    });

});

describe("createRange", () => {
    test("throws an error if not pass parameters", () => {
        expect(()=>{
            createRange();
        }).toThrow('start is required');
    });

    test("throws an error if not pass end", () => {
        expect(()=>{
            createRange(3);
        }).toThrow('end is required');
    });

    test("throws an error if pass negative number as step", () => {
        expect(()=>{
            createRange(3,11,-6);
        }).toThrow('if step passing, it is required and should be positive integer');
    });

    test("return array between start and end numbers when step is undefined ", () => {
        expect(createRange(3,11)).toStrictEqual([3,4,5,6,7,8,9,10,11]);
    });

    test("return array between start and end integers ", () => {
        expect(createRange(3,11,2)).toStrictEqual([3,5,7,9,11]);
    });

});



