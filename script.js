let homeScore = 0;
let guestScore = 0;

function add1ToHome() {
    homeScore++;
    document.getElementById("home-score").textContent = homeScore;
}

function add2ToHome() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore;
}

function add3ToHome() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore;
}

function add1ToGuest() {
    guestScore++;
    document.getElementById("guest-score").textContent = guestScore;
}

function add2ToGuest() {
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore;
}

function add3ToGuest() {
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore;
}

function resetHome() {
    document.getElementById("home-score").textContent = 0;
    homeScore = 0;
}

function resetGuest() {
    document.getElementById("guest-score").textContent = 0;
    guestScore = 0;
}