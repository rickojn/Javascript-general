const waitFor = (time) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
        },time);
    });
};

waitFor(1000).then(() => {
    console.log("line 10");
});

console.log("line 13");