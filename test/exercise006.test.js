const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("throws an error if not pass an array", () => {
        expect(()=>{
            sumMultiples();
        }).toThrow('An array is required');

        expect(()=>{
            sumMultiples('five');
        }).toThrow('An array is required');

        expect(()=>{
            sumMultiples(5);
        }).toThrow('An array is required');
    });

    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([2, 3, 12, 1, 32, 10])).toBe(25);
    });

    test("if the number is not found in the array, returns 0", () => {
        expect(sumMultiples([2, 1, 7, 38, 23, 91])).toBe(0);
    });

    test("if the number is found more than once don't get for calculation", () => {
        expect(sumMultiples([2, 3, 12, 3, 32, 10])).toBe(25);
    });

});

describe("isValidDNA", () => {
    test("throws an error if not pass a String", () => {
        expect(()=>{
            isValidDNA();
        }).toThrow('String is required');
    });

    test("return true, string may contain valid DNA characters", () => {
        expect(isValidDNA('ACTG')).toBe(true);
    });

    test("return false, string may contain valid DNA characters", () => {
        expect(isValidDNA('COGRIT')).toBe(false);
    });

    test("return true, string ignores case sensitive", () => {
        expect(isValidDNA('AcTg')).toBe(true);
    });
});


describe("getComplementaryDNA", () => {
    test("throws an error if not pass a parameter", () => {
        expect(()=>{
            getComplementaryDNA();
        }).toThrow('str is required');

        expect(()=>{
            getComplementaryDNA(5);
        }).toThrow('str is required');

    });

    test("return complementary DNA", () => {
        expect(getComplementaryDNA('ACTG')).toBe('TGAC');
    });

    test("return complementary DNA ignore case", () => {
        expect(()=>{
            getComplementaryDNA('COGRIT');
        }).toThrow('Not a valid DNA String');
    });

    test("return true, string ignores case sensitive", () => {
        expect(getComplementaryDNA('AcTg')).toBe('TGAC');
    });
});

describe("isItPrime", () => {
    test("throws an error if not pass a Integer", () => {
        expect(()=>{
            isItPrime();
        }).toThrow('n is required');
    });

    test("throws an error if pass a String", () => {
        expect(()=>{
            isItPrime('5');
        }).toThrow('Positive Integer is required');
    });

    test("throws an error if pass a negative Integer", () => {
        expect(()=>{
            isItPrime(-5);
        }).toThrow('Positive Integer is required');
    });

    test("throws an error if pass decimal value", () => {
        expect(()=>{
            isItPrime(5.2);
        }).toThrow('Positive Integer is required');
    });

    test("return true, is n a prime number", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(11)).toBe(true);
        expect(isItPrime(23)).toBe(true);
    });

    test("return false, is not n a prime number", () => {
        expect(isItPrime(10)).toBe(false);
        expect(isItPrime(12)).toBe(false);
        expect(isItPrime(72)).toBe(false);
    });

});

describe("createMatrix", () => {
    test("throws an error if not pass parameters", () => {
        expect(()=>{
            createMatrix();
        }).toThrow('n and fill are required');
    });

    test("throws an error if not pass n", () => {
        expect(()=>{
            createMatrix('foo');
        }).toThrow('n and fill are required');
    });

    test("throws an error if not pass n positive Integer and not a decimal ", () => {
        expect(()=>{
            createMatrix('3','foo');
        }).toThrow('n should be Positive Integer');
        expect(()=>{
            createMatrix(-3,'foo');
        }).toThrow('n should be Positive Integer');
        expect(()=>{
            createMatrix(3.5,'foo');
        }).toThrow('n should be Positive Integer');
    });

    test("create matrix given number and filling word", () => {
        expect(createMatrix(3,'foo')).toStrictEqual([["foo", "foo", "foo"],["foo", "foo", "foo"],["foo", "foo", "foo"]]);
    });

});

