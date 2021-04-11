const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));


const scoreDolpin = calcAverage(46, 22, 71);
const scoreKoalas = calcAverage(65, 54, 49);


console.log(scoreDolpin, scoreKoalas);




const checkWinner = function (avgDolphin, avgKolas) {

    if (avgDolphin > 2 * avgKolas) {

        console.log(`Dolpin win✌ (${avgDolphin} vs ${avgKolas})`);

    } else if (avgKolas > 2 * avgDolphin) {

        console.log(`Kolas win ✌ (${avgDolphin} vs ${avgKolas})`)
    } else {
        console.log(`No one is winner`);
    }

}


checkWinner(scoreDolpin, scoreKoalas);

checkWinner(576, 111);
