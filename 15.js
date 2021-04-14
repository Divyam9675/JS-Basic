// Quiz (array passing in function and loop)




const calcAvg = function (arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

    }

    return sum / arr.length;


}

const totals = [60, 25, 43, 52, 78];

console.log(calcAvg(totals));