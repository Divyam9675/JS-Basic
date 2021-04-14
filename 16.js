var firstName = "dash";

const deepu = {

    firstName: "divyam",
    year: 1991,
    calcAvg: function () {
        //  console.log(this);
        //  console.log(2027 - this.year);
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    }

}

deepu.greet();
