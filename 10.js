//  challange-2 related to bjects and methods

const mark = {

    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {

        const cal = this.mass / this.height ** 2;

        return cal;

    }


}

const john = {

    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {

        const tes = this.mass / (this.height * this.height);

        return tes;

    }
}

console.log(john.calcBMI());

console.log(mark.calcBMI());

if (john.calcBMI() > mark.calcBMI()) {

    console.log(`${john.fullName} has higher BMI ${john.calcBMI()} as compare to ${mark.fullName} BMI rate ${mark.calcBMI()}`);

} else {

    console.log(`${mark.fullName} has higher BMI ${mark.calcBMI()} as compare to ${john.fullName} BMI rate ${john.calcBMI()}`);
}