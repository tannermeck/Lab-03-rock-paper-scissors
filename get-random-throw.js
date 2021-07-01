export function getRandomThrow(computer){
    let number = Math.ceil(Math.random() * 3);
    if (number === 1){
        return 'rock';
    }
    if (number === 2){
        return 'paper';
    }
    if (number === 3){
        return 'scissors';
    }
}

export function didUserWin(player, computer){
    
}
