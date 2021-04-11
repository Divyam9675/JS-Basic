const hightMark = 1.69;
const massMark = 78;

const hightJohn = 1.95;
const massJohn = 92;

const BMIMark = massMark / hightMark ** 2;
const BMIJohn = massJohn / (hightJohn * hightJohn);

if (BMIMark > BMIJohn) {

    console.log(`Mark BMI ${BMIMark} is higher then John ${BMIJohn}`);

} else {

    console.log(`John BMI ${BMIJohn} is higher then Mark ${BMIMark}`);

}

//console.log("Mark BMI is greater", maxBMI);

console.log(BMIMark, BMIJohn);

