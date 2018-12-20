let getX = function (obj) {
    return obj.x;
}

console.time("getXDiffShape");
for (let i = 0; i < 1000000; i++) {
    getX({ x: 1, a: 3 })
    getX({ x: 2, b: 3 })
    getX({ x: 3, c: 3 })
    getX({ x: 4, d: 3 })
    getX({ x: 5, e: 3 })
}
console.timeEnd('getXDiffShape');

