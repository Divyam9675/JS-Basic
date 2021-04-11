// while loop practise


let x = Math.trunc(Math.random() * 6) + 1;


while (x !== 6) {

    console.log(`dice got this no. ${x}`);

    x = Math.trunc(Math.random() * 6) + 1;

    if (x === 6) console.log(`We got maximum value ${x}`);

}
