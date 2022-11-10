const strCounter = require('./StringCounter.js');

test ('enter malik to output 5', () => {
    let word = "malik";
    let wordLength = 5;
   expect (strCounter(word)).toBeLessThanOrEqual(10);
   expect (strCounter(word)).toBeGreaterThanOrEqual(1);
    expect (strCounter(word)).toBe(wordLength);
});

