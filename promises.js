const waitFor = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("in timeout cb");
            // console.timeEnd("promise2")
            resolve();
        // },time)
        },2000)
    });
};

// waitFor(2000).then(() => {
//     console.log('hello');
// });

// setTimeout(() => {
//     console.log("hello");
// }, 2000);
// console.time("promise");
// setTimeout(() => {
//     console.log("hello from callback hell!!!");
//     setTimeout(() => {
//         console.log("hello from deeper in callback hell!!!");
//         setTimeout(() => {
//             console.log("help I'm totally confused now!!!!!")
//             console.timeEnd("promise")
//         }, 1000)
//     }, 1000);
// },1000)

// console.time("promise");
// waitFor(1000)
// .then(() =>{
//     console.log("hello!");
// })
// .then(waitFor(1000))
// .then( () => {
//     console.log("hello again!");
// })


console.time("promise");
// console.time("promise2");
waitFor(2000)
.then(() =>{
    console.log("hello!");
})
// .then(() => {return waitFor(2000)})
.then(waitFor)
.then( () => {
    console.log("hello again!");
    console.timeEnd("promise");   
})
// .then(waitFor(5000)).then(() => {
//     console.log("good bye!!!");
//     console.timeEnd("promise")
// });