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



let IndexOfArray1Counter = 0
let IndexOfArray2Counter = 0

while (IndexOfArray1Counter < array1.length && IndexOfArray2Counter < array2.length){
    if (array1[IndexOfArray1Counter].toString() < array2[IndexOfArray2Counter].toString() ){
        notInArray2.push(array1[IndexOfArray1Counter])
        IndexOfArray1Counter++
    }
    else if (array1[IndexOfArray1Counter].toString() > array2[IndexOfArray2Counter].toString()){
        notInArray1.push(array2[IndexOfArray2Counter])
        IndexOfArray2Counter++
    }
    else {
        IndexOfArray1Counter++
        IndexOfArray2Counter++
    }
}


if (IndexOfArray1Counter !== array1.length){
    for (let i = IndexOfArray1Counter; i < array1.length; i++){
        notInArray2.push(array1[i])
    }
}
else if (IndexOfArray2Counter !== array2.length){
    for (let i = IndexOfArray2Counter; i < array2.length; i++){
        notInArray1.push(array2[i])
    }
}

console.log('array 1: ', array1)
console.log('array 2: ', array2)
console.log('not in array 1: ', notInArray1)
console.log('not in array 2: ', notInArray2)
