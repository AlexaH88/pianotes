// virtual piano
// This code was taken from YouTuber Web Dev Simplified and adapted - see details in the README

// define black and white keys on computer keyboard
let WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'a', 's', 'd', 'f', 'g', 'h', 'j'];
let BLACK_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];

// select all piano keys and attribute to variable
let pianoKeys = document.querySelectorAll('.key');
let whiteKeys = document.querySelectorAll('.key.white');
let blackKeys = document.querySelectorAll('.key.black');

// click event listener for piano keys
pianoKeys.forEach(function (pianoKey) {
        pianoKey.addEventListener('click', function() {
                return playNote(pianoKey);
            });
    });

// keydown event for piano keys
document.addEventListener('keydown', function(event) {
    if (event.repeat) return;
    let pianoKey = event.key;
    let whiteKeyIndex = WHITE_KEYS.indexOf(pianoKey);
    let blackKeyIndex = BLACK_KEYS.indexOf(pianoKey);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
    });

// play audio and define interaction with piano keys
function playNote(pianoKey) {
    let noteAudio = document.getElementById(pianoKey.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    pianoKey.classList.add('active');
    noteAudio.addEventListener('ended', function() {
        pianoKey.classList.remove('active');
    });
};

// virtual piano challenge game
// this code was predominantly taken from the YouTube channel freeCodeCamp.org and adapted - see details in the README

// order in which the keys light up
let order = [];

// order in which the player presses the keys
let playerOrder = [];

// integer for number of times the keys light up
let keyLights;

// variable to count the number of points scored
let gamePoints;

// boolean defining whether player has hit the right notes or not
let correct;

// boolean defining whether it's the player's or computer's turn
let computerTurn;

// variable to identify the interval between notes being played
let intervalId;

// boolean defining the piano note audio on or off
let sound = true;

// boolean defining if the player has won or not
let win;

// assign player and computer game point counter to variables
let gamePointsCounter = document.getElementById('game-points');

// assign freestyle and challenge buttons to variables
let freestyleButton = document.getElementById('freestyle-button');
let challengeButton = document.getElementById('challenge-button');

// assign individual piano keys to variables
let c1 = document.getElementById('key-c1');
let db1 = document.getElementById('key-db1');
let d1 = document.getElementById('key-d1');
let eb1 = document.getElementById('key-eb1');
let e1 = document.getElementById('key-e1');
let f1 = document.getElementById('key-f1');
let gb1 = document.getElementById('key-gb1');
let g1 = document.getElementById('key-g1');
let ab1 = document.getElementById('key-ab1');
let a1 = document.getElementById('key-a1');
let bb1 = document.getElementById('key-bb1');
let b1 = document.getElementById('key-b1');
let c2 = document.getElementById('key-c2');
let db2 = document.getElementById('key-db2');
let d2 = document.getElementById('key-d2');
let eb2 = document.getElementById('key-eb2');
let e2 = document.getElementById('key-e2');
let f2 = document.getElementById('key-f2');
let gb2 = document.getElementById('key-gb2');
let g2 = document.getElementById('key-g2');
let ab2 = document.getElementById('key-ab2');
let a2 = document.getElementById('key-a2');
let bb2 = document.getElementById('key-bb2');
let b2 = document.getElementById('key-b2');

// event listener for clicking on challenge button
challengeButton.addEventListener('click', function(event) {
    if (challengeButton.checked == true) {
        playChallenge()
        gamePointsCounter.innerHTML = "-";
    } else { 
        playFreestyle()
        gamePointsCounter.innerHTML = "";
        clearKeyLights();
        clearInterval(intervalId);
    }
});

// play challenge function
function playChallenge() {
    win = false;
    order = [];
    playerOrder = [];
    keyLights = 0;
    intervalId = 0;
    gamePoints = 1;
    gamePointsCounter.innerHTML = 1;
    correct = true;
    for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 24) + 1);
    }
    computerTurn = true;
    intervalId = setInterval(gameTurn, 800);
};

// function defining who's turn it is
function gameTurn() {
    if (keyLights == gamePoints) {
        clearInterval(intervalId);
        computerTurn = false;
        clearKeyLights();
    }

    if (computerTurn) {
        clearKeyLights();
        setTimeout( function() {
            if (order[keyLights] == 1) one();
            if (order[keyLights] == 2) two();
            if (order[keyLights] == 3) three();
            if (order[keyLights] == 4) four();
            if (order[keyLights] == 5) five();
            if (order[keyLights] == 6) six();
            if (order[keyLights] == 7) seven();
            if (order[keyLights] == 8) eight();
            if (order[keyLights] == 9) nine();
            if (order[keyLights] == 10) ten();
            if (order[keyLights] == 11) eleven();
            if (order[keyLights] == 12) twelve();
            if (order[keyLights] == 13) thirteen();
            if (order[keyLights] == 14) fourteen();
            if (order[keyLights] == 15) fifteen();
            if (order[keyLights] == 16) sixteen();
            if (order[keyLights] == 17) seventeen();
            if (order[keyLights] == 18) eighteen();
            if (order[keyLights] == 19) nineteen();
            if (order[keyLights] == 20) twenty();
            if (order[keyLights] == 21) twentyOne();
            if (order[keyLights] == 22) twentyTwo();
            if (order[keyLights] == 23) twentyThree();
            if (order[keyLights] == 24) twentyFour();
            keyLights++;
        }, 200);
    }
};

// define all keys audio functions
// define c1 key audio function
function one() {
    if (sound) {
        let audio = document.getElementById('C1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define db1 key audio function
function two() {
    if (sound) {
        let audio = document.getElementById('Db1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define d1 key audio function
function three() {
    if (sound) {
        let audio = document.getElementById('D1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define eb1 key audio function
function four() {
    if (sound) {
        let audio = document.getElementById('Eb1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define e1 key audio function
function five() {
    if (sound) {
        let audio = document.getElementById('E1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define f1 key audio function
function six() {
    if (sound) {
        let audio = document.getElementById('F1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define gb1 key audio function
function seven() {
    if (sound) {
        let audio = document.getElementById('Gb1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define g1 key audio function
function eight() {
    if (sound) {
        let audio = document.getElementById('G1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define ab1 key audio function
function nine() {
    if (sound) {
        let audio = document.getElementById('Ab1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define a1 key audio function
function ten() {
    if (sound) {
        let audio = document.getElementById('A1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define bb1 key audio function
function eleven() {
    if (sound) {
        let audio = document.getElementById('Bb1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define b1 key audio function
function twelve() {
    if (sound) {
        let audio = document.getElementById('B1');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define c2 key audio function
function thirteen() {
    if (sound) {
        let audio = document.getElementById('C2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define db2 key audio function
function fourteen() {
    if (sound) {
        let audio = document.getElementById('Db2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define d2 key audio function
function fifteen() {
    if (sound) {
        let audio = document.getElementById('D2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define eb2 key audio function
function sixteen() {
    if (sound) {
        let audio = document.getElementById('Eb2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define e2 key audio function
function seventeen() {
    if (sound) {
        let audio = document.getElementById('E2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define f2 key audio function
function eighteen() {
    if (sound) {
        let audio = document.getElementById('F2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define gb2 key audio function
function nineteen() {
    if (sound) {
        let audio = document.getElementById('Gb2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define g2 key audio function
function twenty() {
    if (sound) {
        let audio = document.getElementById('G2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define ab2 key audio function
function twentyOne() {
    if (sound) {
        let audio = document.getElementById('Ab2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define a2 key audio function
function twentyTwo() {
    if (sound) {
        let audio = document.getElementById('A2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define bb2 key audio function
function twentyThree() {
    if (sound) {
        let audio = document.getElementById('Bb2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// define b2 key audio function
function twentyFour() {
    if (sound) {
        let audio = document.getElementById('B2');
        audio.play();
    }
    sound = true;
    c1.style.backgroundColor = "#5e17eb";
};

// clear lit up keys 
function clearKeyLights() {
    c1.style.backgroundColor = "#FFFFFF";
    db1.style.backgroundColor = "#000000";
    d1.style.backgroundColor = "#FFFFFF";
    eb1.style.backgroundColor = "#000000";
    e1.style.backgroundColor = "#FFFFFF";
    f1.style.backgroundColor = "#FFFFFF";
    gb1.style.backgroundColor = "#000000";
    g1.style.backgroundColor = "#FFFFFF";
    ab1.style.backgroundColor = "#000000";
    a1.style.backgroundColor = "#FFFFFF";
    bb1.style.backgroundColor = "#000000";
    b1.style.backgroundColor = "#FFFFFF";
    c2.style.backgroundColor = "#FFFFFF";
    db2.style.backgroundColor = "#000000";
    d2.style.backgroundColor = "#FFFFFF";
    eb2.style.backgroundColor = "#000000";
    e2.style.backgroundColor = "#FFFFFF";
    f2.style.backgroundColor = "#FFFFFF";
    gb2.style.backgroundColor = "#000000";
    g2.style.backgroundColor = "#FFFFFF";
    ab2.style.backgroundColor = "#000000";
    a2.style.backgroundColor = "#FFFFFF";
    bb2.style.backgroundColor = "#000000";
    b2.style.backgroundColor = "#FFFFFF";
};

function flashKeyLights() {
    c1.style.backgroundColor = "#5e17eb";
    db1.style.backgroundColor = "#5e17eb";
    d1.style.backgroundColor = "#5e17eb";
    eb1.style.backgroundColor = "#5e17eb";
    e1.style.backgroundColor = "#5e17eb";
    f1.style.backgroundColor = "#5e17eb";
    gb1.style.backgroundColor = "#5e17eb";
    g1.style.backgroundColor = "#5e17eb";
    ab1.style.backgroundColor = "#5e17eb";
    a1.style.backgroundColor = "#5e17eb";
    bb1.style.backgroundColor = "#5e17eb";
    b1.style.backgroundColor = "#5e17eb";
    c2.style.backgroundColor = "#5e17eb";
    db2.style.backgroundColor = "#5e17eb";
    d2.style.backgroundColor = "#5e17eb";
    eb2.style.backgroundColor = "#5e17eb";
    e2.style.backgroundColor = "#5e17eb";
    f2.style.backgroundColor = "#5e17eb";
    gb2.style.backgroundColor = "#5e17eb";
    g2.style.backgroundColor = "#5e17eb";
    ab2.style.backgroundColor = "#5e17eb";
    a2.style.backgroundColor = "#5e17eb";
    bb2.style.backgroundColor = "#5e17eb";
    b2.style.backgroundColor = "#5e17eb";
};