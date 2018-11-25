function successor(i){
    return i + 1;
}

function add(a,b){
    let sum = a;
    let counter = 0;
    while (counter !== b){
        sum = successor(sum);
        counter = successor(counter)
    }
    return sum;
}

console.log(add(5,6))