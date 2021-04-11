// Break and continue 


const john = [

    "john smith",
    25,
    "USA",
    10000

]


console.log("String is allowed");


for (let i = 0; i < john.length; i++) {


    //if (typeof john[i] !== "string") continue;


    if (typeof john[i] === "number") break;


    console.log(john[i], typeof john[i]);

}


