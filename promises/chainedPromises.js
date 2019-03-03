const waitFor = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },time);
    });
};


// waitFor(1000)
// .then(() => {
//     console.log("line 12");
// })
// .then(waitFor(1000))
// .then(() => {
//     console.log("line 16");
// })
// .then(waitFor(1000))
// .then(() => {
//     console.log("line 20");
// })









// waitFor(1000)
// .then(() => {
//     console.log("line 33");
// })
// .then(() => {return waitFor(1000);})
// .then(() => {
//     console.log("line 37");
// })
// .then(() => {return waitFor(1000)})
// .then(() => {
//     console.log("line 41");
// })

