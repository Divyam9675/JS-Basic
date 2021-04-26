// String Operation

const t = "Hello i am a hero";

console.log(t.length);
console.log(t.indexOf(" "));
console.log(t.lastIndexOf(" "));

console.log(t.slice(t.lastIndexOf(" ") + 1));



// NOTE : - As we know String is primite type then how can be methods of primitive value like array, map, in objects

// Answer- behind the string will converted in to String Objects and then it will multiple methods but the value return by each
//         String method is always a Primitive means string type thats why its not viible to us.




console.log(t.toUpperCase());
console.log(t.toLowerCase());

// How to customize lower and upper case

//step-1 convert them in to a small case

const y = t.toLowerCase();

console.log(y);

console.log(y[0].toLocaleUpperCase() + y.slice(1));



// How to trim a string to reduce unwainted space

console.log(t.toLowerCase().trim());



const z = "Kasi Tabiyat h Bhaiya Tabiyat";

// To replace all content we use replaceAll


console.log(z.replaceAll("Tabiyat", "halat"));


// Boolean check lile value is present or not

const m = "Good Day";

console.log(m.includes('Go'));

console.log(m.startsWith('Goo'));

console.log(m.endsWith('e'));




if (m.startsWith('Goo') && m.endsWith('y')) {

    console.log("value changable");
}


// Split and join function


const g = "Divyam Gupta ki Life jhund Ho rkhi h";

const [x1] = g.split(" ");

const f = g.replace("Divyam", "Heena");

//console.log(f.split(" "));

const [x2] = f.split(" ");


console.log([x1, x2].join(" "));


















// Padding in the string means adding more data in the exisiting string


const r = "Hello World";

console.log(r.padStart(50, " +=").padEnd(60, " +="));














