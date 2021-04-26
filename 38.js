// Another way of creating map

const x = new Map([

    ["Hello", "Ramesh"],
    ["How are you", "Tell me"],
    [1, "Java"],
    [2, "Javascript"],
    [3, "Golang"]
]);

console.log(x);

// So what i am getting here MAP => array of array

// so lets do one trick

// here is an object

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

// Lets se we want to iterate over (opening hours) object so we need to firstly convert them in to array

console.log(openingHours);


// Here we get an array
console.log(Object.entries(openingHours));

// But now lets convert object in to map

// we know map is array of array

const tom = new Map(Object.entries(openingHours));

console.log(tom);



// Printout only those no. whose value is language

for (const [key, value] of x) if (typeof key === 'number') console.log(`No. is ${key} and value is : ${value}`);


// converting map to an object using spread


console.log([...x]);



