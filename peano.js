function successor(i){
    return i + 1;
}

function add(a,b){
    
    if (b === 0){
        return a;
    }
    else {
        return successor(add(a,b-1));
    }
    
    
    
    
}

console.log(add(5,6))