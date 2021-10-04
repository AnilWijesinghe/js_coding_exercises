const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
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

describe("getScreentimeAlertList", () => {
    test("throws an error if not pass parameters", () => {
        expect(()=>{
            getScreentimeAlertList();
        }).toThrow('users is required');
    });

    test("throws an error if not pass parameter date", () => {
        expect(()=>{
            getScreentimeAlertList([
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                    ]
                },
            ]);
        }).toThrow('date is required');
    });

    test("throws an error if the array of user objects is empty", () => {
        expect(()=>{
            getScreentimeAlertList([], '2019-05-04');
        }).toThrow('users is empty');
    });

    test("return an array of usernames of users who have used more than 100 minutes of screen time for a given date", () => {
        expect(getScreentimeAlertList([
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                ]
            },
        ],'2019-05-04')).toStrictEqual(["beth_1234"]);
    });

});

describe("hexToRGB", () => {
    test("throws an error if not pass parameters", () => {
        expect(()=>{
            hexToRGB();
        }).toThrow('hexStr is required');
    });

    test("throws an error if parameter is in invalid format", () => {
        expect(()=>{
            hexToRGB('#F1122');
        }).toThrow('Invalid input');
    });

    test("returns RGB code of hex code ", () => {
        expect(hexToRGB('#FF1133')).toStrictEqual('rgb(255,17,51)');
    });

});

describe("findWinner", () => {
    test("throws an error if not pass parameters", () => {
        expect(()=>{
            findWinner();
        }).toThrow('board is required');
    });

    test("Check row winner ", () => {
        expect(findWinner([
            ["X", "X", "X"],
            [null, null, "0"],
            ["0", null, "0"]
        ])).toStrictEqual('X');
    });

    test("Check column winner ", () => {
        expect(findWinner([
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ])).toStrictEqual('X');
    });

    test("Check diagonal winner ", () => {
        expect(findWinner([
            ["X", "X", "0"],
            ["X", "0", null],
            ["0", null, null]
        ])).toStrictEqual('0');
    });

    test("Check no winner ", () => {
        expect(findWinner([
            ["X", "X", "0"],
            ["X", null, null],
            ["0", null, null]
        ])).toStrictEqual(null);
    });
});



