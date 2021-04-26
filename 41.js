// converting whole string first letter with capital letter



const x = function (name) {

    // conver the string space " " in to a seperate values of array
    const y = name.split(" ");
    //console.log(y);

    // empty array where we push all the string values 
    const d = [];

    // Iterating of array
    for (const t of y) {


        // t[0] is the first value of each value of array first element like- h b k h
        // t.slice(1) leaving first element of the array values

        d.push(t[0].toUpperCase() + t.slice(1));

    }

    console.log(d.join(" "));


}


x("hello babu kase ho");

x("naraj ho kya");