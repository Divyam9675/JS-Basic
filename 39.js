//  Quiz 

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// create an array "event" of different game event that happen (no duplicates)

// 1  So firstly we want to create an array without using dulicate values

// so for removing duplicate values we use Set

// now we need to convert set in to array

// so firstly we need to unpack Set using spread operator and store them in to array   

const events = [...new Set(gameEvents.values())];

console.log(events);


// Delete an event 64

console.log(gameEvents.delete(64));

// 3. 


// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)



console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:[FIRST HALF]17: ⚽️ GOAL

for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}


