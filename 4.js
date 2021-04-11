//calling another function inside of function

function fruitQuantity(x1) {
    return 5 * x1;
}

function fruitShake(x, y) {

    const t1 = fruitQuantity(x);
    const t2 = fruitQuantity(y);

    const juice = `Juice with ${t1} and ${t2} quantity fruits`;

    return juice;

}

console.log(fruitShake(4, 5));