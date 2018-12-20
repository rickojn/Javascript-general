let getX = function (obj) {
    return obj.x;
}


console.time("getXSameShape");
for (let i = 0; i < 1000000; i++) {
    getX({ x: 1, a: 3, b: undefined, c: undefined, d: undefined, e: undefined })
    getX({ x: 1, a: undefined, b: 3, c: undefined, d: undefined, e: undefined })
    getX({ x: 1, a: undefined, b: undefined, c: 3, d: undefined, e: undefined })
    getX({ x: 1, a: undefined, b: undefined, c: undefined, d: 3, e: undefined })
    getX({ x: 1, a: undefined, b: undefined, c: undefined, d: undefined, e: 3 })
}
console.timeEnd('getXSameShape');