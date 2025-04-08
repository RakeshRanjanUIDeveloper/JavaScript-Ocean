



const cart = ['pant', 'shirt', 'tie'];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })



function createOrder(cart) {
    const pr = new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            const err = new Error('cart not valid !');
            reject(err);
        }
        const orderId = '99999';
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
            }, 3000);

        }
    });
    return pr;
}


function proceedToPayment() {
    return new Promise((resolve, reject) => {
        resolve("Payment Successfully");
    })
}


function validateCart() {
    return false;
}