// Object implemenation with Dot(.) and string [''] notation 

const Details = {

    firstName: 'Divyam',
    lastName: 'Gupta',
    city: 'Bulandshahr',
    age: '25',
    education: ['10th', '12th', 'BBA', 'BCA', 'MCA']

}


const tox = Details.education.unshift('6th');

const dom = prompt('Hello please enter your detail');


console.log(Details[dom]);

console.log(Details.dom)



const namekey = "Name";

console.log(Details["first" + namekey]);
console.log(Details["last" + namekey]);

