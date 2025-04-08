// function to check if a given string is a palindrome


const pallim = "hello";

function pallim1(pallim) {
    let reverse = String(pallim.split('').reverse()).replace(/,/g, '')
    if (pallim == reverse) {
        console.log("Pallimdrom...")
    }
    else {
        console.log("Not a Pallimdrom...")
    }

}

// pallim1(pallim)


function pallimCheck(pallim) {
    if (pallim === pallim.split('').reverse().join('')) {
        console.log("Pallimdrom...")
    }
    else {
        console.log("Not a Pallimdrom...")
    }

}

pallimCheck(pallim)

