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



// Week: III, Assignment: III and Task: 1
console.log("Output of Week: III, Assignment: III and Task: 1 :");

for (let Counter = 0; Counter < game.scored.length; Counter++) {
    console.log(`Goal ${Counter + 1}: ${game.scored[Counter]}`);
}


// Week: III, Assignment: III and Task: 2
console.log("Output of Week: III, Assignment: III and Task: 2 :");

const oddValue = Object.values(game.odds);
sum = 0;
for (let Counter1 = 0; Counter1 < game.scored.length-1; Counter1++) {
	sum = sum + oddValue[Counter1];
}

console.log("Average of Odd is: " + sum / oddValue.length);


// Week: III, Assignment: III and Task: 3
console.log("Output of Week: III, Assignment: III and Task: 3 :");

for (const k in game.odds) {
    if (game[k]) {
        console.log(`Odd of victory ${game[k]}: ${game.odds[k]}`);
    }
    else {
        console.log(`Odd of draw: ${game.odds[k]}`);
    }
}


// Week: III, Assignment: III and Task: 4
console.log("Output of Week: III, Assignment: III and Task: 4 :");

const oddValues = Object.values(game.odds);

function findKey(obj, val) {
    for (const kv in obj) {
        if (obj[kv] == val) {
            return kv;
        }
    }
}

function printGoals(goalscorers) {
    const result = {};
    for (let i = 0; i < goalscorers.length; i++) {
        if (result[goalscorers[i]]) {
            result[goalscorers[i]]++;
        }
        else {
            result[goalscorers[i]] = 1;
        }
    }
    return result;
}

for (const ke in game.odds) {
    if (game[ke]) {
        // console.log(game[k], game.odds[k]);
    }
    else {
        // console.log("draw", game.odds[k]);
    }
}

const kv = Object.entries(printGoals(game.scored)).sort();
// console.log(Object.entries(printGoals(game.scored)).sort());
for(const goalers in kv){
    console.log(kv[goalers])
}