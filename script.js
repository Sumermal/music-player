const songs = [

    {
        title: "Ganga Ke Kinare",
        artist: "Bunny and Sagar",
        src: "songs/Ganga.mp3",
        cover: "images/Ganga.jpg"
    },

    {
        title: "Matkar Maya Ko Ahankar",
        artist: "Kabir",
        src: "songs/Matkar.mp3",
        cover: "images/Maya.jpg"
    },

    {
        title: "Paan Ki Dukaan",
        artist: "Sukhwinder Singh",
        src: "songs/ORomeo.mp3",
        cover: "images/Romeo.jpg"
    }

];



const audio = document.querySelector(".audio");

const playBtn = document.querySelector(".play");

const progress = document.querySelector(".progress");

const cover = document.querySelector(".cover");

const title = document.querySelector(".song-title");

const artist = document.querySelector(".artist");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");



let isPlaying = false;

let currentSong = 0;



function loadSong(song){

    title.innerHTML = song.title;

    artist.innerHTML = song.artist;

    audio.src = song.src;

    cover.src = song.cover;
}



loadSong(songs[currentSong]);



playBtn.addEventListener("click", ()=>{

    if(isPlaying){

        audio.pause();
        cover.style.animationPlayState = "paused";

        playBtn.innerHTML =
        `<i class="fas fa-play"></i>`;

        isPlaying = false;
    }

    else{

        audio.play();
        cover.style.animationPlayState = "running";

        playBtn.innerHTML =
        `<i class="fas fa-pause"></i>`;

        isPlaying = true;
    }

});



audio.addEventListener("timeupdate", ()=>{

    progress.value =
    (audio.currentTime / audio.duration) * 100;

});



progress.addEventListener("input", ()=>{

    audio.currentTime =
    (progress.value / 100) * audio.duration;

});



nextBtn.addEventListener("click", ()=>{

    currentSong++;

    if(currentSong >= songs.length){

        currentSong = 0;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playBtn.innerHTML =
    `<i class="fas fa-pause"></i>`;

    isPlaying = true;

});



prevBtn.addEventListener("click", ()=>{

    currentSong--;

    if(currentSong < 0){

        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playBtn.innerHTML =
    `<i class="fas fa-pause"></i>`;

    isPlaying = true;

});

audio.addEventListener("ended", ()=>{

    currentSong++;

    if(currentSong >= songs.length){

        currentSong = 0;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playBtn.innerHTML =
    `<i class="fas fa-pause"></i>`;

    isPlaying = true;

});