setTimeout(() => {
    console.log("hello from callback hell!!!");
    setTimeout(() => {
        console.log("hello from deeper in callback hell!!!");
        setTimeout(() => {
            console.log("help I'm totally confused now!!!!!")
        }, 1000)
    }, 1000);
},1000)