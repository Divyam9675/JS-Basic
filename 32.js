// Dot vs Bracket Notation

const doc = {


    firstName: 'Divyam',
    lastName: 'Gupta',
    city: 'Bulandshahr',
    age: '25',
    education: ['10th', '12th', 'BBA', 'BCA', 'MCA'],
    DateOfBirth: 1996,
    job: true,

};


const text = prompt("Any updates regarding object");

// This condition goes false every time because there is no property "text" inside object

if (doc.text) {

    //  But here comes interesting part [] notation will check dyanimally input by user not from inside of object if dynamic value match with property then condion check

    //if (doc[text]) {

    console.log("Present");
} else {

    console.log("Not Present");
}

