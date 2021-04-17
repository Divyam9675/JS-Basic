// Spread vs Rest for function

// Spread is ued where we need to pass array of paramenter to a function so we use Spread but it will return individual values

// Rest if want to use array of variable from a function and recieve them in to array we use Rest but it will return array in case of array amd in case of object it will return object



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

    },

    orderPasta: function (f1, f2, f3) {
        console.log(
            `Here is your declicious pasta with price ${f1}, ${f2} and ${f3}`
        )
    },

    orderPizza: function (ingr1, ...otherIngre) {

        console.log(ingr1, otherIngre);

        //console.log(`Other ingrident ${ingr1} and ${otherIngre}`);
    }
};




const g = ['Hello', 2554, 254];

restaurant.orderPizza(...g);


restaurant.order({

    oid: '2207',
    avilability: true,
    Money: '2000',
    contents: ["salid", "spices"]

});

const t1 = ['Hello', 40, 46];

restaurant.orderPasta(...t1);

console.log(...t1);
// Note. Spread operator never return array it return values only


