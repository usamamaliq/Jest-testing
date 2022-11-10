const reverseString = require('./ReverseString.js');

test ('Enter malik to output kilam', () => {
    let words = "malik";
    let reverseWord = "kilam";
    expect (reverseString(words)).toBe(reverseWord);
});