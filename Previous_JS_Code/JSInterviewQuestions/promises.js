// Validate Cart
// Order Id
// proceed to Payment

const cart = ['shirt', 'pant', 'shoes'];


createOrder(cart) 
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch(function (err) {
        console.log(err.message)
    })




function createOrder(cart) {

    const pr = new Promise((resolve, reject) => {
        // validatecard
        // proceed to payment
        // order summary

        if (!validateCart(cart)) {
            const err = new Error('cart is not valid');
            reject(err);
        }

        orderId = '12345'
        if (orderId) {
            resolve(orderId);
        }

    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment Successful !!!")
    })
}

function validateCart() {
    return true;
}
