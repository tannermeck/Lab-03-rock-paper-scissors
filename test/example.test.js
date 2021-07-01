// IMPORT MODULES under test here:
import { didUserWin , getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('time to test get-random-throw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
