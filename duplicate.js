let duplicates = [{state: 'NY', line: '010'}, {state: 'NY', line: '010'}, {state: 'NY', line: '011'}]
console.log('duplicates: ', duplicates)

nonDuplicates =  duplicates.filter(function (element,index,array) {
    return array.findIndex(function(findElement){
        return findElement.line === element.line && findElement.state === element.state
    }) === index
})

console.log('non duplicates: ', nonDuplicates)

nonDuplicates2 =  duplicates.filter(toRemoveDuplicates)


function toRemoveDuplicates (element,index,array) {
    return array.findIndex(ofFirstElementThatMatchesCurrent) === index

    function ofFirstElementThatMatchesCurrent(findElement){
        return findElement.line === element.line && findElement.state === element.state
    }
}

nonDuplicates3 =  duplicates.filter(toRemoveDuplicates())

function toRemoveDuplicates() {
    return function(element,index,array){
        return array.findIndex(ofFirstElementThatMatchesCurrent()) === index        
    }
}

function ofFirstElementThatMatchesCurrent(){
    return function(findElement){
        return findElement.line === element.line && findElement.state === element.state
    }
}


//change 
console.log('non duplicates3: ', nonDuplicates3)