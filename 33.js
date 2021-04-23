// optional chaining 




`use strict`;

const tox = ["Jan", "feb", "march", "april"];

const pot = {

    [tox[0]]: {

        open: "9 AM",
        close: "10 PM"

    },

    [tox[1]]: {

        open: "10 AM",
        close: "9 PM"

    }

};

const restorant = {

    pot,

    printom(x) {

        return x + 10;

        // console.log("hello World");

    }

};


const month = ["Jan", "feb", "march"]

for (const x of month) {

    // ?? this is called nullish collaison operator 

    const op = restorant.pot[x]?.open ?? "closed !";

    console.log(`on ${x} we open at ${op} `);

}

// With method optional chaining

console.log(restorant.printom?.(10) ?? "Not present");



// with Array optional chaining


//const arr1 = [{ Name: "Divyam" }];

const arr1 = [];

console.log(arr1[0]?.Name ?? "Not Exist");

// or

if (arr1.length > 0) console.log(arr1[0].Name);
else console.log("Not exist");



