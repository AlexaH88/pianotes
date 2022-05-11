// hamburger menu
// This code was taken from W3 Schools and adapted - see details in the README
function hamburgerButton() {
    let navLinks = document.getElementById('nav-links');
    let mainPageContainer = document.getElementById('main-page-container');

    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
        mainPageContainer.style.marginTop = "150px";
    } else {
        navLinks.style.display = "block";
        mainPageContainer.style.marginTop = "400px";
    }
};

// virtual piano freestyle mode
// This code was taken from YouTuber Web Dev Simplified and adapted - see details in the README

// define black and white keys on computer keyboard
let WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'a', 's', 'd', 'f', 'g', 'h', 'j'];
let BLACK_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];

// select all piano keys and attribute to variable
let pianoKeys = document.querySelectorAll('.key');
let whiteKeys = document.querySelectorAll('.key.white');
let blackKeys = document.querySelectorAll('.key.black');

// freestyle mode function
function playFreestyle() {

    // reset all counters
    winScore = 0;
    winCounter.innerHTML = winScore;
    loseScore = 0;
    loseCounter.innerHTML = loseScore;
    round = 0;
    roundCounter.innerHTML = round;
    resultMessage.innerHTML = "N/A";

    // click event listener for piano keys
    pianoKeys.forEach(function (key) {
        key.addEventListener('click', function () {
            return playNote(key);
        });
    });

    // keydown event for piano keys
    document.addEventListener('keydown', function (event) {
        if (event.repeat) return;
        let pianoKey = event.key;
        let whiteKeyIndex = WHITE_KEYS.indexOf(pianoKey);
        let blackKeyIndex = BLACK_KEYS.indexOf(pianoKey);

        if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
        if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
    });

    // play audio and define interaction with piano keys
    function playNote(key) {
        let noteAudio = document.getElementById(key.dataset.note);
        noteAudio.currentTime = 0;
        noteAudio.play();
        key.classList.add('active');
        noteAudio.addEventListener('ended', function () {
            key.classList.remove('active');
        });
    }
}


// virtual piano challenge mode
// this code was predominantly taken from the YouTube channel freeCodeCamp.org and adapted - see details in the README

// order in which the keys light up
let order = [];

// order in which the player presses the keys
let playerOrder = [];

// integer for number of times the keys light up
let keyLights;

// variable to count the number of rounds
let round;

// variable to count the win score
let winScore = 0;

// variable to count the lose score
let loseScore = 0;

// boolean defining whether player has hit the right notes or not
let correct;

// boolean defining whether it's the player's or computer's turn
let computerTurn;

// variable to identify the interval between notes being played
let intervalId;

// boolean defining the piano note audio on or off
let sound = true;

// variable defining whether the challenge mode is on or off 
let challengeOn = false;

// boolean defining if the player has won or not
let win;

// assign various counters to variables
let roundCounter = document.getElementById('round');
let winCounter = document.getElementById('win-score');
let loseCounter = document.getElementById('lose-score');

// assign variable to win lose message
let resultMessage = document.getElementById('result-message');

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
challengeButton.addEventListener('click', function (event) {
    challengeButton.style.color = "#5e17eb";
    challengeButton.style.border = "solid 5px #000000";
    freestyleButton.style.color = "#000000";
    freestyleButton.style.border = "solid 5px #5e17eb";
    challengeOn = true;
    playChallenge();
});

// event listener for clicking on freestyle button
freestyleButton.addEventListener('click', function (event) {
    freestyleButton.style.color = "#5e17eb";
    freestyleButton.style.border = "solid 5px #000000";
    challengeButton.style.color = "#000000";
    challengeButton.style.border = "solid 5px #5e17eb";
    challengeOn = false;
    playFreestyle();
});

// play challenge function
function playChallenge() {
    win = false;
    order = [];
    playerOrder = [];
    keyLights = 0;
    intervalId = 0;
    round = 1;
    roundCounter.innerHTML = 1;
    correct = true;
    for (let i = 0; i < 5; i++) {
        order.push(Math.floor(Math.random() * 24) + 1);
    }
    computerTurn = true;
    intervalId = setInterval(gameTurn, 1000);
}

// function defining who's turn it is
function gameTurn() {
    challengeOn = false;

    if (keyLights == round) {
        clearInterval(intervalId);
        computerTurn = false;
        challengeOn = true;
    }

    if (computerTurn) {
        setTimeout(function () {
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
}

// define all keys audio functions
// define c1 key audio function
function one() {
    let noteAudio = document.getElementById('C1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    c1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        c1.classList.remove('active');
    });
}

// define db1 key audio function
function two() {
    let noteAudio = document.getElementById('Db1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    db1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        db1.classList.remove('active');
    });
}

// define d1 key audio function
function three() {
    let noteAudio = document.getElementById('D1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    d1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        d1.classList.remove('active');
    });
}

// define eb1 key audio function
function four() {
    let noteAudio = document.getElementById('Eb1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    eb1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        eb1.classList.remove('active');
    });
}

// define e1 key audio function
function five() {
    let noteAudio = document.getElementById('E1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    e1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        e1.classList.remove('active');
    });
}

// define f1 key audio function
function six() {
    let noteAudio = document.getElementById('F1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    f1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        f1.classList.remove('active');
    });
}

// define gb1 key audio function
function seven() {
    let noteAudio = document.getElementById('Gb1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    gb1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        gb1.classList.remove('active');
    });
}

// define g1 key audio function
function eight() {
    let noteAudio = document.getElementById('G1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    g1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        g1.classList.remove('active');
    });
}

// define ab1 key audio function
function nine() {
    let noteAudio = document.getElementById('Ab1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    ab1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        ab1.classList.remove('active');
    });
}

// define a1 key audio function
function ten() {
    let noteAudio = document.getElementById('A1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    a1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        a1.classList.remove('active');
    });
}

// define bb1 key audio function
function eleven() {
    let noteAudio = document.getElementById('Bb1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    bb1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        bb1.classList.remove('active');
    });
}

// define b1 key audio function
function twelve() {
    let noteAudio = document.getElementById('B1');
    noteAudio.currentTime = 0;
    noteAudio.play();
    b1.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        b1.classList.remove('active');
    });
}

// define c2 key audio function
function thirteen() {
    let noteAudio = document.getElementById('C2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    c2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        c2.classList.remove('active');
    });
}

// define db2 key audio function
function fourteen() {
    let noteAudio = document.getElementById('Db2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    db2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        db2.classList.remove('active');
    });
}

// define d2 key audio function
function fifteen() {
    let noteAudio = document.getElementById('D2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    d2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        d2.classList.remove('active');
    });
}

// define eb2 key audio function
function sixteen() {
    let noteAudio = document.getElementById('Eb2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    eb2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        eb2.classList.remove('active');
    });
}

// define e2 key audio function
function seventeen() {
    let noteAudio = document.getElementById('E2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    e2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        e2.classList.remove('active');
    });
}

// define f2 key audio function
function eighteen() {
    let noteAudio = document.getElementById('F2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    f2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        f2.classList.remove('active');
    });
}

// define gb2 key audio function
function nineteen() {
    let noteAudio = document.getElementById('Gb2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    gb2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        gb2.classList.remove('active');
    });
}

// define g2 key audio function
function twenty() {
    let noteAudio = document.getElementById('G2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    g2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        g2.classList.remove('active');
    });
}

// define ab2 key audio function
function twentyOne() {
    let noteAudio = document.getElementById('Ab2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    ab2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        ab2.classList.remove('active');
    });
}

// define a2 key audio function
function twentyTwo() {
    let noteAudio = document.getElementById('A2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    a2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        a2.classList.remove('active');
    });
}

// define bb2 key audio function
function twentyThree() {
    let noteAudio = document.getElementById('Bb2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    bb2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        bb2.classList.remove('active');
    });
}

// define b2 key audio function
function twentyFour() {
    let noteAudio = document.getElementById('B2');
    noteAudio.currentTime = 0;
    noteAudio.play();
    b2.classList.add('active');
    noteAudio.addEventListener('ended', function () {
        b2.classList.remove('active');
    });
}

// event listeners for clicking on each piano key
// event listener for c1 piano key click
c1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(1);
        check();
        one();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for db1 piano key click
db1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(2);
        check();
        two();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for d1 piano key click
d1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(3);
        check();
        three();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for eb1 piano key click
eb1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(4);
        check();
        four();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for e1 piano key click
e1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(5);
        check();
        five();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for f1 piano key click
f1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(6);
        check();
        six();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for gb1 piano key click
gb1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(7);
        check();
        seven();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for g1 piano key click
g1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(8);
        check();
        eight();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for ab1 piano key click
ab1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(9);
        check();
        nine();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for a1 piano key click
a1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(10);
        check();
        ten();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for bb1 piano key click
bb1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(11);
        check();
        eleven();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for b1 piano key click
b1.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(12);
        check();
        twelve();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for c2 piano key click
c2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(13);
        check();
        thirteen();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for db2 piano key click
db2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(14);
        check();
        fourteen();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for d2 piano key click
d2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(15);
        check();
        fifteen();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for eb2 piano key click
eb2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(16);
        check();
        sixteen();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for e2 piano key click
e2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(17);
        check();
        seventeen();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for f2 piano key click
f2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(18);
        check();
        eighteen();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for gb2 piano key click
gb2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(19);
        check();
        nineteen();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for g2 piano key click
g2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(20);
        check();
        twenty();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for ab2 piano key click
ab2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(21);
        check();
        twentyOne();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for a2 piano key click
a2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(22);
        check();
        twentyTwo();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for bb2 piano key click
bb2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(23);
        check();
        twentyThree();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// event listener for b2 piano key click
b2.addEventListener('click', function (event) {
    if (challengeOn) {
        playerOrder.push(24);
        check();
        twentyFour();
        if (!win) {
            setTimeout(function () {}, 300);
        }
    }
});

// check correct key press function
function check() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
        correct = false;

    if (playerOrder.length == 5 && correct) {
        winGame();
        playChallenge();
    }

    if (correct == false) {
        sound = false;
        loseGame();
        playChallenge();
    }

    if (round == playerOrder.length && correct && !win) {
        round++;
        playerOrder = [];
        computerTurn = true;
        keyLights = 0;
        roundCounter.innerHTML = round;
        intervalId = setInterval(gameTurn, 800);
    }
}

// player wins function
function winGame() {
    win = true;
    winScore++;
    winCounter.innerHTML = winScore;
    resultMessage.innerHTML = "Win!";
}

// player loses function
function loseGame() {
    win = false;
    loseScore++;
    loseCounter.innerHTML = loseScore;
    resultMessage.innerHTML = "Lose!";
}

// media queries

// 1000px and down
const mediaQuery = window.matchMedia('(max-width: 1000px)');

if (mediaQuery.matches) {
    function playChallenge() {
        win = false;
        order = [];
        playerOrder = [];
        keyLights = 0;
        intervalId = 0;
        round = 1;
        roundCounter.innerHTML = 1;
        correct = true;
        for (let i = 0; i < 5; i++) {
            order.push(Math.floor(Math.random() * 12) + 1);
        }
        computerTurn = true;
        intervalId = setInterval(gameTurn, 1000);
    }
};