// object distructor concept

const x = {

    Name: "x Gupta",
    Age: 25,
    Hobbies: ["Khelna", "Puja Krna", "Pdna"],
    Skills: ["Javascript", "Golang"],
    Interest: {
        "food": "Maa k hath ka khana",
        "education": ["JS Course Specialization", "Golang Basic Idea"],
        "time": "2 months"
    },

}

const { Skills: sk, Interest: In, education: ed = ["MCA", "BCA"] } = x;

console.log(sk, In, ed);







// Mutating or replacing variable using 

let a = 100, b = 150;

const obj = {
    a: 10,
    b: 15
};

({ a, b } = obj);

console.log(a, b);