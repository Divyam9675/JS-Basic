//1) a new datastructure which is very similar to array the basic difference is there is not indexing of elements and 

// 2) and set has no repetation of elements

// 3) It works with all iterator ex- string, array




const x = new Set(["Hello", "Hii", "How", "Do", "You", "Do"]);

console.log(x.size);


for (const y of x) console.log(y.size);


// set methods
console.log(x.add("Ramesh"));

console.log(x.delete("Hii"));

console.log(x.has("Ramesh"));

console.log(x.entries("Ramesh", "how"));

