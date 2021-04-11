// Object with methods


const Details = {

    firstName: 'Divyam',
    lastName: 'Gupta',
    city: 'Bulandshahr',
    age: '25',
    education: ['10th', '12th', 'BBA', 'BCA', 'MCA'],
    DateOfBirth: 1996,
    job: true,

    calcAge: function () {
        const res = 2021 - this.DateOfBirth;
        return res;
    },

    getSummary: function () {

        return `${this.firstName} is ${this.calcAge()} years old and now he is ${this.job ? 'struggling to get job' : 'not eligible'} `

    }

}


console.log(Details.calcAge());
console.log(Details.getSummary());
