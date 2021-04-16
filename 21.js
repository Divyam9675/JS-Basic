// Object.assign() function uses


function printData(obj) {

    const obj1 = {

        firstName: "Deepu",
        lastName: "Gupta"

    };

    obj = Object.assign(obj, obj1);

    console.log(` So the first name is ${obj.firstName} and last name is ${obj.lastName}`);

}


printData({

    firstName: "Divyam"

});
