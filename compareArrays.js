// let array1 = [10,20,30,50,60,120]
// let array2 = [20,40,50,60,70,80, 90,100,110,120,130,140]

let array1 = [10,20,30,50,60,120]
let array2 = [20,130,40,50,60,70,80,90,100,110,120,140]

// let array1 = ['bob','terry','colm','brian']
// let array2 = ['william','mary','terry','bob']

array1.sort()
array2.sort()

let notInArray1 = []
let notInArray2 = []

let largerArray
let smallerArray

let notInLargerArray
let notInSmallerArray

if (array1.length >= array2.length){
     largerArray = array1
     smallerArray = array2
     notInLargerArray = notInArray1
     notInSmallerArray = notInArray2
    }
    else{
        largerArray = array2
        smallerArray = array1
        notInLargerArray = notInArray2
        notInSmallerArray = notInArray1
}

let indexOfLarger = 0
let indexOfSmaller = 0

while (indexOfLarger < largerArray.length && indexOfSmaller < smallerArray.length){
    if (largerArray[indexOfLarger].toString() < smallerArray[indexOfSmaller].toString() ){
        notInSmallerArray.push(largerArray[indexOfLarger])
        indexOfLarger++
    }
    else if (largerArray[indexOfLarger].toString() > smallerArray[indexOfSmaller].toString()){
        notInLargerArray.push(smallerArray[indexOfSmaller])
        indexOfSmaller++
    }
    else {
        indexOfLarger++
        indexOfSmaller++
    }
}


if (indexOfLarger !== largerArray.length){
    for (let i = indexOfLarger; i < largerArray.length; i++){
        notInSmallerArray.push(largerArray[i])
    }
}
else if (indexOfSmaller !== smallerArray.length){
    for (let i = indexOfSmaller; i < smallerArray.length; i++){
        notInLargerArray.push(smallerArray[i])
    }
}

console.log('larger array: ', largerArray)
console.log('array 1: ', array1)
console.log('array 2: ', array2)
console.log('not in array 1: ', notInArray1)
console.log('not in array 2: ', notInArray2)
