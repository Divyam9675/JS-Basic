// Iterating over array and perfor some operation on array and assign the values in to new array



const x = [1900, 1996, 1998, 2000, 2006];

const y = [];

for (let i = 0; i < x.length; i++) {

    y.push(2021 - x[i]);

}


console.log(y);