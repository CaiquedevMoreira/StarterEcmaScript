function soma(a = 2, b = 7){
    return a + b;
}

console.log(soma(1))
console.log(soma())

var soma2 = (a = 2, b = 3) => a + b;

console.log(soma2(1));
console.log(soma2());