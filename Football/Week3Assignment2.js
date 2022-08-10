// We're building a football betting app
// Suppose we get data from a web service about a certain game ('game' variable).
// In this challenge we're going to work with that data.

console.log("Week: III and Assignment: II");

const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        ['Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lwandowski',
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
    score:'4.0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date:'Nov 9th, 2037',
    odds:{
        team1 :1.33,
        draw: 3.25,
        team2: 6.5,
    },
};

// Task 1. Create one player array for each team (variables 'players1' and 'players2')
console.log("Output of Week: III, Assignment: II and Task: 1 :");

const [player1, player2] = game.players;

console.log('Players 1: ' + player1);
console.log('Players 2: ' + player2);
console.log("")


// Task 2. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array
//  ('fieldPlayers') with all the remaining 10 field players

console.log("Output of Week: III, Assignment: II and Task: 2 :");

const [gk1, ...fieldPlayers1] = player1;
const [gk2, ...fieldPlayers2] = player2;

console.log('GoalKeeper: ' + gk1 + ' and field players are : ' + fieldPlayers1);
console.log('GoalKeeper: ' + gk2 + ' and field players are : ' + fieldPlayers2);
console.log("")


// Task 3. Create an array 'allPlayers' containing all players of both teams (22 players)

console.log("Output of Week: III, Assignment: II and Task: 3 :");

console.log('List of all players: ' + player1.concat(player2));
console.log("")


// Task 4. During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final') containing all the original team1
// players plus 'Thiago', 'Coutinho' and 'Perisic'

console.log("Output of Week: III, Assignment: II and Task: 4 :");

const [finalPlayer] = game.players;
const substitutes = ['Thiago', 'Coutinho', 'Perisic'];
finalPlayer.push(...substitutes)

console.log('List of all players including subtitutes: ' + finalPlayer);
console.log("")


// Task 5. Based on the game.odds object, create one variable for
// each odd (called 'team1', 'draw' and 'team2')

console.log("Output of Week: III, Assignment: II and Task: 5 :");

console.log(Object.keys(game.odds));
console.log("")


// Task 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

console.log("Output of Week: III, Assignment: II and Task: 6 :");

const goaler = game.scored;

function printGoals(goaler){
 let counts = {}
 let goals = 0;
 for(let i =0; i < goaler.length; i++){
    goals++
     if (counts[goaler[i]]){

     counts[goaler[i]] += 1
     } else {
     counts[goaler[i]] = 1
     }
    }

    for (let prop in counts){
        if (counts[prop] >= 1){
            console.log(prop + " hit: " + counts[prop] + " goal(s).")
        }
    }
  console.log('Total goals hit: ' + goals)
}

printGoals(goaler)
console.log("")


// Task 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

console.log("Output of Week: III, Assignment: II and Task: 7 :");

let entries = Object.values(game.odds);
let likelytoWin = (Math.min(...entries));

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

const winner = getKeyByValue(game.odds,likelytoWin);

console.log(`Possible Winner is: ${winner}`)


// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored