let pianoKeys = document.querySelectorAll(".key");

pianoKeys.forEach(function (pianoKey) {
        pianoKey.addEventListener("click", function () {
                return playNote(pianoKey);
            });
    });

function playNote(pianoKey) {
    let noteAudio = document.getElementById(pianoKey.dataset.note)
    noteAudio.play()
};