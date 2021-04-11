const averageDolphins = (97 + 112 + 81) / 3;

const averageKoalas = (109 + 95 + 86) / 3;

console.log(averageDolphins, averageKoalas);

if (averageDolphins > averageKoalas && averageDolphins >= 100) {

    console.log("Dolphine team is real winner")

} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {

    console.log("Kolas is good scorer")

} else if (averageDolphins === averageKoalas && averageDolphins >= 100 && averageKoalas >= 100) {

    console.log("Both ae good scorer");
} else {
    console.log("NO condition formed");
}