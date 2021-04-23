// Object creation by exisiting object


const customer = {

    id: 101,
    Name: "DIvyam",
    Age: 25,

    op: function () {

        return `${this.Age}`;

    }

}

const ganesh = Object.assign({}, customer);

ganesh.Age = 102;

ganesh.Name = "Ganesh";

console.log(ganesh.op());

















