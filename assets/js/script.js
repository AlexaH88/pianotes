let pianoKeys = document.querySelectorAll(".key");

pianoKeys.forEach(function (pianoKey) {
        pianoKey.addEventListener('click', function () {
                return playNote(pianoKey);
            });
    });

function playNote(pianoKey) {
    let noteAudio = document.getElementById(pianoKey.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    pianoKey.classList.add('active');
    noteAudio.addEventListener('ended', function() {
        pianoKey.classList.remove('active')
    })
};