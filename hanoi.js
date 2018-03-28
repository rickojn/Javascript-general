let stackA = [1, 2, 3, 4, 5, 6, 7, 8]
let stackB = []
let stackC = []

let stacks = [stackA,stackB,stackC]

let lastItemMoved
let indexOfLastStackedPopped

function move(stack1, stack2) {
    if ( ((stack2.length > 0) && (stack1[stack1.length - 1] < stack2[stack2.length - 1]))
    || (stack1[stack1.length -1] === lastItemMoved)
    || (stack1.length === 0)
) {
        return false;
    }
    else {
        lastItemMoved = stack1.pop()
        indexOfLastStackedPopped = stacks.indexOf(stack1)
        stack2.push(lastItemMoved)
        return true
    }
}

console.log('stackA', stackA)
console.log('stackB', stackB)
console.log('stackC', stackC)

for (let i = 0; i < 10000; i++) {
    // if (!move(stackA, stackB)){
    //     if (!move(stackB,))
    // }
    if (!move(stackA,stackB)){
        if (!move(stackA,stackC)){
            if (!move(stackB,stackC)){
                if (!move(stackB,stackA)){
                    if (!move(stackC,stackB)){
                        move(stackC,stackA)
                    }
                }
            }
        }
    }
    console.log('after move ...\r\n')
    console.log('stackA', stackA,'\r\n')
    console.log('stackB', stackB,'\r\n')
    console.log('stackC', stackC,'\r\n')
    if (stackC.length === 8){
        console.log('number of moves: ', i+1)
        break
    }
}