/*

// function declaration


const tmp = calculate(10, 20);

console.log("result is", tmp);

function calculate(x, y) {

    const result = x + y;

    return result;

}


*/

/*
// function expression

const calc = function (x, y) {
    return x + y;
}

console.log(calc(4, 5));

*/


// Arrow function


const res = (x, y) => {
    const t1 = x + y;
    const t2 = x - y;
    return t1 + t2;
}
console.log("output is", res(4, 5));