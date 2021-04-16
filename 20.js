// Now we have a big task ---

//1  Run time object creation with and passing that object as function call

//2 Recieve the object as an function argument 

//3 Destructor that  objects value and use that 


'use strict';


// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function ({ oid, avilability, Money, contents }) {

        console.log(`so the day id friday ${this.openingHours.fri.open} and details is ${oid}, ${avilability}, ${Money}, ${contents}`);

    }
};



restaurant.order({

    oid: '2207',
    avilability: true,
    Money: '2000',
    contents: ["salid", "spices"]

});