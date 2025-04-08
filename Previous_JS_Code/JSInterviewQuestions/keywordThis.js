// 'use strict';

//console.log('global', this);

function x() {
    console.log('function', this);
}

//x();


//window.x();


const student1 = {
    name: "John Wick",
    printName: function () {
        console.log(this.name);
    }
}

//student1.printName();



const student2 =
{
    name: "Alex Moore",
}

//student1.printName.call(student2);



function userDetails1(userName) {
    this.userName = userName;
}

function userDetails2() {
    //debugger;
    //this.userName = userName;
    userDetails1.call(this);
    /* this.emailId = emailId;
    this.password = password; */
}

const user = new userDetails2('johnwick', 'johnwick@email.com', 'John@123');
//console.log(user);

const obj2 = {
    y: 2,
    r: function () {
        const q = () => {
            console.log(this);
        }
    }

}

const obj3 = {
    y: 2,
    q: () => {
        console.log(this);
    }
}



const obj4 = {
    yy: 22,
    q: function () {
        console.log(this);
    }
}


// obj4.q();


let user1 = {
    name: 'Alex',
    age: 24,
    childObj: {
        innerName: "Moore",
        getDetails() {
            console.log(this.innerName + ' and ' + this.name);
        }
    }
}
//user1.childObj.getDetails();



const newUser1 = {
    name: 'John Wick',
    getDetails() {
        const name = 'John Wick !!';
        return this.name;
    }
}

// console.log(newUser1.getDetails());

function makeUser() {
    return {
        name: 'John',
        ref() {
            return this;
        }
    }
}

let userMaker = makeUser();

// console.log(userMaker.ref().name);


const userTest1 = {
    name: 'Johner',
    logMessage() {
        console.log(this.name);
    }
}

//setTimeout(userTest1.logMessage(), 1000);


const userTest2 = {
    name: "William Jack",
    greet() {
        return `Hello ${this.name} !`
    },
    farewell: () => {
        return `goodbye, ${this.name}`
    },
}


// console.log(userTest2.greet());
// console.log(userTest2.farewell());


let calculator = {
    read() {
        a = +prompt('Enter the value of a', 0);
        b = +prompt('Enter the value of b', 0);
    },
    sum() {
        return this.a + this.b
    },
    multiply() {
        return this.a * this.b;
    }
}

//calculator.read();
//console.log(calculator.sum());
//console.log(calculator.multiply());


var length = 4;
function asking() {
    console.log(this.length);
}

const category = {
    length: 5,
    detail() {
        arguments[0]();
    }
}

//category.detail(asking, 2, 3);

const calc = {
    total: 0,
    add(a) {
        this.total = this.total + a;
        return this;
    },
    subtract(b) {
        this.total = this.total - b;
        return this;
    },
    multiply(c) {
        this.total = this.total * c;
        return this;
    },
    div(d) {
        this.total = this.total / d;
        return this;
    },
}



const result = calc.add(10).multiply(5).subtract(30).add(10).add(10);

console.log(result.total)