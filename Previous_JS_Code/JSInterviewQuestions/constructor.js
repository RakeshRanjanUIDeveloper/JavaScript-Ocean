// Constructor - a special type of function that creates and initilize an 
// object intances of class

function counter() {
    var count = 0;
    this.increament = function () {
        count++;
        console.log(count);
    }
    this.decreament = function () {
        count--;
        console.log(count);
    }
}

var counter1 = new counter();

counter1.increament();
counter1.increament();
counter1.decreament();