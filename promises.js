const waitFor = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },time)
    });
};

waitFor(2000).then(() => {
    console.log('hello');
});

// setTimeout(() => {
//     console.log("hello");
// }, 2000);

setTimeout()