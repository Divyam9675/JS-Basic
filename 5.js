// function practise


const calcSum = function (x) {

    return x + 15;

}

const d = function (x, y) {

    const z = calcSum(x);

    const t = z - 15;

    if (t < 50) {
        return `very small value ${t}`
    } else {
        return `sufficient value to perform task ${t}`
    }
}

console.log(d(10, 20));
console.log(d(30, 40));