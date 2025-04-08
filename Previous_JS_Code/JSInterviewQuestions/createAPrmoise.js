const cart = ["shirts", "trousers", "shoes"];


// Consumer
createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId
    })
    .then((orderId) => {
        return proceedToPayment(orderId);
    })
    .then((paymentInfo) => {
        console.log(paymentInfo);
    })
    .then(() => {
        return showOrderSummary();
    })
    .then((orderStatus) => {
        console.log(orderStatus);
    })
    .then(() => {
        return updateWallet();
    })
    .then((walletBal) => {
        console.log(walletBal);
    })
    .catch((err) => {
        console.log(err.message);
    })



function createOrder(cart) {
    // Producer
    const pr = new Promise(function (resolve, reject) {

        // createOrder
        // validateCart
        // orderId
        if (!isValidateCart(cart)) {
            const err = new Error("Cart is not Valid");
            reject(err);
        }

        // logic for createOrder
        const orderId = "12345";
        setTimeout(() => {
            resolve(orderId)
        }, 5000);
    });

    return pr;
};

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Payment Successful');
        }, 3000);
    })
}

function showOrderSummary() {
    const msg = "Shirts ordered successfully"
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(msg);
        }, 2000)
    })

}

function updateWallet() {
    const walletbalance = "₹ 100"
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(walletbalance);
        }, 2000);
    })
}


function isValidateCart(cart) {
    return true;
}