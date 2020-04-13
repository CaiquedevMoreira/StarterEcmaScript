var array = [1, 2, 7, 9, 5, 4];

console.log(array)

var newArray = array.map(function(item, index) {
    return item + index;
});

console.log(newArray);

var soma = array.reduce(function(total, next){
    return total + next;
})

console.log(soma);

var filter = array.filter(function(item){
    return item % 2 === 0;
})

console.log(filter);

var find = array.find(function(item){
    return item === 2;
})

console.log(find);

