// Rest vs Spread



// function implementation


const t = function (...no) {


    let sum = 0;

    for (let i = 0; i < no.length; i++) {


        sum += no[i];

        console.log(`sum is ${sum}`);
    }




    console.log("hello world");

}


const x = [10, 20, 30, 40];

t(...x);




// Rest for Array



// 1. Rest always comes left side in case of array, object 

const [x1, ...x2] = [10, 20, 30, 40];

console.log(x1, x2);




// Rest for Object  


const p = { Name: "Ram", Age: "Suresh", Roll: 25 };

const { Name, ...other } = p;

console.log(Name, other);






