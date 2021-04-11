// excercise-2 array


const calcTip = function (x) {

    if (x > 50 && x <= 300) {
        return x * 0.15;
    } else {
        return x * 0.2;
    }

}

bills = [125, 555, 44];

console.log(bills.includes(125));

console.log(bills.indexOf(125));

console.log(bills.unshift(95), bills.push(189));

console.log(bills.pop(), bills.shift())

console.log(bills);

//console.log(t);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

//console.log(bills, tips);


const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

//console.log(bills, tips, total);
