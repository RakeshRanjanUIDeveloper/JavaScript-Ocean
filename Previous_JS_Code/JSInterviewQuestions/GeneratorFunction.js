function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunction();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
//1
//2
//3