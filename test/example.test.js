// IMPORT MODULES under test here:
import { didUserWin , getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('time to test didUserWIn', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const win1 = didUserWin('rock', 'scissors');
    const win2 = didUserWin('scissors', 'paper');
    const win3 = didUserWin('paper', 'rock');
    const loss1 = didUserWin('scissors', 'rock');
    const loss2 = didUserWin('paper', 'scissors');
    const loss3 = didUserWin('rock', 'paper');
    const draw1 = didUserWin('rock', 'rock');
    const draw2 = didUserWin('paper', 'paper');
    const draw3 = didUserWin('scissors', 'scissors');

    expect.equal(win1, true);
    expect.equal(win2, true);
    expect.equal(win3, true);
    expect.equal(loss1, false);
    expect.equal(loss2, false);
    expect.equal(loss3, false);
    expect.equal(draw1, 'draw');
    expect.equal(draw2, 'draw');
    expect.equal(draw3, 'draw');
});
test('time to test getRandomThrow', (expect) => {
    const number1 = getRandomThrow(1);
    const number2 = getRandomThrow(2);
    const number3 = getRandomThrow(3);
    
    expect.equal(number1, 'rock');
    expect.equal(number2, 'paper');
    expect.equal(number3, 'scissors');
});