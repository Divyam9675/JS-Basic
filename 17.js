// Destructor with normal Array


const x = [10, 20, 30];

let [x1, , z1] = x;

[z1, x1] = [x1, z1];

console.log(x1, z1);




// Destructor with object inside array


const dox = {

    arr1: ["hello", "how are you"],
    arr2: ["Dinesh", "Suresh"],

    fon: function (tox, poc) {

        return [this.arr1[tox], this.arr2[poc]];

    }

}


//console.log(dox.fon(1, 0));


// Return two recive value from a function through destructor

const [y1, y2] = dox.fon(0, 1);

console.log(y1, y2);



// nested distructuring concept


const sop = [10, 20, [30, 40]];


const [i, , [j, k]] = sop;

console.log(i, j, k);




// Default value setup for not getting undefines error


const pos = [10, 20, 30];

const [n, l, m, t = 10] = pos;

console.log(n, l, m, t);