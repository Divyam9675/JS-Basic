// Practise challange-2


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1.  Firstly we destruct to array in to 2 separate variable 
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.  we have an array what we want to do,  expension of array element in two separate variables and array  
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// 3. let we want a combined array individdually in to a new array we use spread 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Now we want to add new data in to a new array using spread oprator 
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];



// 5.
const {
    odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
// 6.
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);
// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');



//const ar1 = Object.entries(game.scored);

for (const [key, value] of game.scored.entries())

    console.log(`Player Name is ${value} and he scored goal ${key}`);


let av = 0;

const ar1 = Object.entries(game.odds);


for (const [, v1] of ar1) {

    av += v1;

}

const sum = av / ar1.length;

console.log(`average is ${sum}`);


const t2 = Object.entries(game.odds);

for (const [key, val] of t2) {

    const x = key === 'x' ?
        'draw' : `victory : ${game[key]}`;

    console.log(`Odd of ${x} ${val}`);

}