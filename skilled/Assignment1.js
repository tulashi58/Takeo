const titles = [
    "duel",
    "dule",
    "speed",
    "spede",
    "deul",
    "cars",
    "racs",
    "shape",
    "shepa"
];

const strs = "cars";

function groupTitles(strs) {
    const responseObject = {};

    for (const title of titles) {
        const countArray = new Array(26).fill(0);

        for (const letter of title) {
            const index = letter.charCodeAt(0) - "a".charCodeAt(0);
            countArray[index] == 1;
        }

        const key = countArray;

        if (key in responseObject) {
            responseObject[key].push(title);
        } else {
            responseObject[key] = [title];
        }
    }
}
console.log(title);