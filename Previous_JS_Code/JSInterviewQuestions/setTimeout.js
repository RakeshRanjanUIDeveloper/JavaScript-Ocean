
function timer() {
    for (var a = 0; a <= 5; a++) {
        function closure(x) {
            setTimeout(() => {
                console.log("value is ..", x);
            }, x * 1000);
        }
        closure(a);
    }
}
timer();