// select ui controls

const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('play');

// check if music is playing
let isMusicPlaying = false;

// play

function playSong(){
  isMusicPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause')
  music.play();
}

// pause 

function pauseSong(){
  isMusicPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play')
  music.pause();
}


playBtn.addEventListener('click', (e) => {
  isMusicPlaying ? pauseSong() : playSong();
});

 