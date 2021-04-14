// Quiz-4 (Array, function, loops)

const calcTip = function (bill) {

    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}

const bills = [22, 295, 176, 440, 37, 185, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i < bills.length; i++) {

    const tip = calcTip(bills[i]);

    tips.push(tip);

    totals.push(tip + bills[i]);

}

console.log(bills, tips, totals);


// Quiz (array passing in function and loop)




const calcAvg = function (arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

    }

    return sum / arr.length;


}

const total = [60, 25, 43, 52, 78];

console.log(calcAvg(totals));