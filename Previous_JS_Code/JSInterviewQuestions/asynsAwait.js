// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise resolved !');
//     }, 5000);
// })



// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise resolved !');
//     }, 10000);
// })

// async function promiseHandler() {
//     console.log('Namaste JS 1');
//     const val = await p;
//     console.log('Namaste JS 2');
//     console.log(val);

//     const val2 = await p2;
//     console.log('Namaste JS 3');
//     console.log(val2);

// }

// promiseHandler();

// function getData() {
//     p.then(res => {
//         console.log(res);
//     });
//     console.log('Namaste JS');
// }
// getData();


const API_URL = 'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json'

async function dataHandler() {

    try {
        const data = await fetch(API_URL);
        const jsondata = await data.json();
        console.log(jsondata);
    }
    catch (err) {
        console.log(err);
    }
}

dataHandler();

