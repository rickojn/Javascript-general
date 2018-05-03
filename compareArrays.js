// let array1 = [10,20,30,50,60,120]
// let array2 = [20,40,50,60,70,80, 90,100,110,120,130,140]

// let array1 = [10,20,30,50,60,120]
// let array2 = [20,130,40,50,60,70,80,90,100,110,120,140]

let array1 = ['bob','terry','colm','brian']
let array2 = ['william','mary','terry','bob']

array1.sort()
array2.sort()

let notInArray1 = []
let notInArray2 = []



let currentIndexOfArray1 = 0
let currentIndexOfArray2 = 0

while (currentIndexOfArray1 < array1.length && currentIndexOfArray2 < array2.length){
    if (array1[currentIndexOfArray1].toString() < array2[currentIndexOfArray2].toString() ){
        notInArray2.push(array1[currentIndexOfArray1])
        currentIndexOfArray1++
    }
    else if (array1[currentIndexOfArray1].toString() > array2[currentIndexOfArray2].toString()){
        notInArray1.push(array2[currentIndexOfArray2])
        currentIndexOfArray2++
    }
    else {
        currentIndexOfArray1++
        currentIndexOfArray2++
    }
}


if (currentIndexOfArray1 !== array1.length){
    for (let i = currentIndexOfArray1; i < array1.length; i++){
        notInArray2.push(array1[i])
    }
}
else if (currentIndexOfArray2 !== array2.length){
    for (let i = currentIndexOfArray2; i < array2.length; i++){
        notInArray1.push(array2[i])
    }
}

console.log('array 1: ', array1)
console.log('array 2: ', array2)
console.log('not in array 1: ', notInArray1)
console.log('not in array 2: ', notInArray2)
