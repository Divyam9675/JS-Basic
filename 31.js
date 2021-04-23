// Optional Chaining Latest featurw of ES6
const y = {

    call() {

        console.log("hello");

    }

};


const ob = {

    x: 5,

    y


};

// option chaining for condition checking like the property is present or not
if (ob.y?.call?.dom) {

    console.log("exist");

}