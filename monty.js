
let winningDoorNumber
let doorNumberMontyOpens
let one = 0
let two = 0
let three = 0
let gamesWonBySticking = 0
let gamesWonBySwitching = 0

for (let i = 0; i < 900; i++)
{
    let choice = 1
    let choiceSwitch
    console.log('choice is', choice)

    winningDoorNumber = Math.floor((Math.random()*3) + 1)
    switch (winningDoorNumber){
        case 1:
            one++
            doorNumberMontyOpens = Math.floor((Math.random()*2) + 2)
            if (doorNumberMontyOpens === 2){
                choiceSwitch = 3
            }
            else{
                choiceSwitch = 2
            }
            break
        case 2:
            two++
            doorNumberMontyOpens = Math.floor((Math.random()*2) + 2)
            if (doorNumberMontyOpens === 2){
                choiceSwitch = 3
            }
            else{
                choiceSwitch = 2
            }
            break
        case 3:
            three++
            doorNumberMontyOpens = Math.floor((Math.random()*2) + 2)
            if (doorNumberMontyOpens === 2){
                choiceSwitch = 3
            }
            else{
                choiceSwitch = 2
            }
            break
    }
    console.log('the car is behind door ', winningDoorNumber)
    console.log('Monty opens door number ', doorNumberMontyOpens)

    if (winningDoorNumber === choice){
        console.log('WIN FOR STICKING!!!!!')
        gamesWonBySticking++
    }
    else{
        console.log('LOSE FOR STICKING!!!!')
    }
  
    if (winningDoorNumber === choiceSwitch){
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