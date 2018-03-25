
let winningDoorNumber
let doorNumberMontyOpens
let one = 0
let two = 0
let three = 0
let gamesWonBySticking = 0
let gamesWonBySwitching = 0

for (let i = 0; i < 1000; i++)
{
    let initialChoice = Math.floor((Math.random()*3) + 1)
    let switchedChoice
    console.log('choice is', initialChoice)

    winningDoorNumber = Math.floor((Math.random()*3) + 1)
    switch (winningDoorNumber){
        case 1:
            one++                            
            break
        case 2:
            two++
            break
        case 3:
            three++
            break
    }

    doorNumberMontyOpens = getDoorNumberMontyOpens(initialChoice,winningDoorNumber)
    switchedChoice = getSwitchedChoice(initialChoice,doorNumberMontyOpens)

    console.log('the car is behind door ', winningDoorNumber)
    console.log('Monty opens door number ', doorNumberMontyOpens)

    if (winningDoorNumber === initialChoice){
        console.log('WIN FOR STICKING!!!!!')
        gamesWonBySticking++
    }
    else{
        console.log('LOSE FOR STICKING!!!!')
    }
  
    if (winningDoorNumber === switchedChoice){
        console.log('WIN FOR SWITCHINTG!!!!!')
        gamesWonBySwitching++
    }
    else{
        console.log('LOSE FOR SWITCHING!!!!')
    }

    
}





console.log('number of ones: ', one)
console.log('number of twos: ', two)
console.log('number of threes: ', three)
console.log('games won by sticking: ',gamesWonBySticking)
console.log('games won by switching: ',gamesWonBySwitching)

function getDoorNumberMontyOpens(initialChoice,winningDoorNumber){
    if (initialChoice != winningDoorNumber){
        for (let j = 1; j <= 3; j++ ){
            if (initialChoice != j && winningDoorNumber != j){
                return j
            }
        }
    }
    else {
        let doorNumbersMontyCanOpen = []
        for (let j = 1; j <= 3; j++ ){
            if (initialChoice != j && winningDoorNumber != j){
                doorNumbersMontyCanOpen.push(j)
            }            
        }    
        let montysChoice = Math.floor(Math.random() * 2)    
        return doorNumbersMontyCanOpen[montysChoice]
    }
}

function getSwitchedChoice(initialChoice,doorNumberMontyOpens){
    for (let j = 1; j <= 3; j++){
        if (j != initialChoice && j != doorNumberMontyOpens){
            return j
        }
    }

}