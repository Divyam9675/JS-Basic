// Object is not iterable only array and string is iteratable so how can i iterate object for loop


// We can notdirectly iterate on object we need to firstly transform object in to array then we can iterate easily



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


const t1 = Object.entries(openingHours)

console.log(t1);

for (const [key, { open, close }] of t1) console.log(`So key ${key} and  value is ${open} and ${close}`);