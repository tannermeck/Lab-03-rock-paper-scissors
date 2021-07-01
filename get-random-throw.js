//export function getRandomThrow(computer){
//   let number = Math.ceil(Math.random() * 3);
//    if (number === 1){
//        return 'rock';
//    }
//    if (number === 2){
//       return 'paper';
//   }
  //  if (number === 3){
    //    return 'scissors';
  ////  }
//}

export function didUserWin(userChoice, computerChoice){
    if (userChoice === 'rock' && computerChoice === 'scissors'){
        return true;
    } else if (userChoice === 'scissors' && computerChoice === 'paper'){
        return true;
    } else if (userChoice === 'paper' && computerChoice === 'rock'){
        return true;
    }
    return false;
}
