let scoreHome = document.getElementById("score-home");
console.log(scoreHome)

let scoreAway = document.getElementById("score-away");
console.log(scoreAway)

let count = 0;

function point1home() {
    count += 1;
    scoreHome.textContent = count;
}

function point2home() {
    count += 2;
    scoreHome.textContent = count;
}

function point3home() {
    count += 3;
    scoreHome.textContent = count;
}

function point1away() {
    count += 1;
    scoreAway.textContent = count;
}

function point2away() {
    count += 2;
    scoreAway.textContent = count;
}

function point3away() {
    count += 3;
    scoreAway.textContent = count;
}

function scoreReset() {
    count = 0;
    scoreHome.textContent = count;
    scoreAway.textContent = count;
}
