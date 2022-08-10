console.log("Week: III and Assignment: IV");
-***
const gameEvents = new Map([
    [17, "⚽️ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽️ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🔶 Yellow card"],
    [69, "🔴 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽️ GOAL"],
    [80, "⚽️ GOAL"],
    [92, "🔶 Yellow card"]
  ]);


// Task 1. Create an array 'events' of the different game events that happened (no duplicates)
console.log("Output of Week: III, Assignment: IV and Task: 1");

const events= [...new Set(gameEvents.values())];
console.log(events);


// Task 2. After the game has finished, it was found that the yellow card from
// minute 64 was unfair. So remove this event from the game events log.
console.log("Output of Week: III, Assignment: IV and Task: 2");

gameEvents.delete(64);
console.log(gameEvents);


// Task 3. Compute and log the following string to the console:
// "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log("Output of Week: III, Assignment: IV and Task: 3");

const gameDuration = 90;
console.log(`An event happened, on average, every ${gameDuration / gameEvents.size} minutes`);



// Task 4. Loop over 'gameEvents' and log each element to the console,
// marking whether it's in the first half or second half (after 45 min) of the game
console.log("Output of Week: III, Assignment: IV and Task: 4");

for(const[min, value] of gameEvents ){
    console.log(`[${min < 45 ? "First " : "Second"} Half] ${min} : ${value}`);
}