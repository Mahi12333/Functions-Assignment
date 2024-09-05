//Currying function that add two numbers
function add(num1){
    return function(num2){
        return num1+num2;
    }
}

console.log(add(10)(20));

console.log(add(5)(12));

console.log(add(8)(2));

console.log(add(100)(200));
