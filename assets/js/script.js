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
// define variables needed for the game
let order = [];
let playerOrder = [];
let light;
let turn;
let correct;
let compTurn;
let intervalId;
let sound = true;
let win;