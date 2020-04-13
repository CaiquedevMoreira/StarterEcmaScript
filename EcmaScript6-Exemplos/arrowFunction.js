var array = [1, 4, 5, 9, 30];

console.log(array);

var newArray = array.map(function(item){
    return item * 2
})

console.log(newArray);

var arrowArray = array.map(item => item * 2)

console.log(arrowArray)

var teste = () => [1, 2, 3]
console.log(teste())