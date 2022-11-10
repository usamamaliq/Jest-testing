const capitalizeString = require ('./CapitalizeString.js');

test('Enter malik to output Malik', () => {
    expect(capitalizeString("malik")).toBe("Malik");
} );