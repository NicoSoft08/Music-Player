//  DOM
var play = document.querySelector('.fa-play');
var pause = document.querySelector('.fa-pause');
let backward = document.querySelector('.fa-backward');
let forward = document.querySelector('.fa-forward');
let imgSong = document.querySelector('.song_img');

//  Make them working
pause.style.display = "none";


//  When typing on Play Button, Music starts
play.addEventListener('click', () => {
    if(getComputedStyle(pause).display != "none") {
        pause.style.display = "none";
    } else {
        pause.style.display = "block";
        play.style.display = "none";
    }
})

//  When typing on Pause Button, Music stops
pause.addEventListener('click', () => {
    if(getComputedStyle(play).display != "none") {
        play.style.display = "none";
    } else {
        play.style.display = "block";
        pause.style.display = "none";
    }
})


let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let ctrlIcon = document.querySelector('#ctrlIcon');

imgSong.style.animationPlayState = "paused";

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if(ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        imgSong.style.animationPlayState = "paused";
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        imgSong.style.animationPlayState = 'running';    
    }
}

if(song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

let myContent = document.querySelector('.myThreeBars');
let bars = document.querySelector('.fa-bars');

bars.onclick = () => {
    myContent.classList.add("active");
}

bars.onclick = () => {
    myContent.classList.remove("active");
}
