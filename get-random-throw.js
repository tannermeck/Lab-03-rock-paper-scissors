export function getRandomThrow(Number){
    if (Number === 1){
        return 'rock';
    } else if (Number === 2){
        return 'paper';
    } else if (Number === 3){
        return 'scissors';
    }
}

export function didUserWin(userChoice, computerChoice){
    if (userChoice === 'rock' && computerChoice === 'scissors'){
        return true;
    } else if (userChoice === 'scissors' && computerChoice === 'paper'){
        return true;
    } else if (userChoice === 'paper' && computerChoice === 'rock'){
        return true;
    } else if (userChoice === computerChoice){
        return 'draw';
    }
    return false;
}
