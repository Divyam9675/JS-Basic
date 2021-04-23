// Map data= structure


const x = new Map();

const a1 = [20, 40];

const b1 = { x: "Mobile", y: "laptop" };

x
    .set(1, "Hello")
    .set(2, "World")
    .set("Ramesh", "How Are You")
    .set(a1, ["Only have", "you want more"])
    .set(b1, "Ramesh")
    .set(true, "open to work")
    .set(false, "close to work")
    .set("open", 11)
    .set("close", 25)


const age = 26;


console.log(x.get(a1));

console.log(x.get(b1));

//console.log(x.get(age > x.get("open") && age < x.get("close")));


//console.log(x);


//console.log(x.has("Ramesh"));

//console.log(x.delete(false));

//console.log();