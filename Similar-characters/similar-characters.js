const arr = [
"duel",
"dule",
"speed",
"spede",
"deul",
"cars",
"racs",
"shape",
"shpea",
]

function getSimilar (arr, similarKey) {
    const map = {}

for(let title of arr) {
    let newKey = new Array(26).fill(0);
        for(let c of title) {
            const index =  c.charCodeAt(0) - 'a' .charCodeAt(0);
            newKey[index] +=1;
        }

    if (!map[newKey]) {
        map[newKey] = [];
    }

    map[newKey].push(title);
}

let searchKey = new Array(26).fill(0);
for (let c of similarKey) {
    const index =  c.charCodeAt(0) - 'a' .charCodeAt(0);
    searchKey[index] += 1;
}
   return map[searchKey];
}

const result = getSimilar(arr, "duel");
const result2 = getSimilar(arr, "speed");
const result3 = getSimilar(arr, "cars");
const result4 = getSimilar(arr, "shpea");

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
