let index = 0;
let volume_up = document.getElementById('incr_volume');
let volume_down = document.getElementById('decr_volume');
let prev_song_Index;
let play = document.getElementById('play');
let runner = document.getElementsByClassName('runner');

let myProgressBar = document.getElementById("ProgressBar");
let songs = [{ songImage: './images/Har_Shambhu.webp', songName: 'Har Har Shambhu', songLocation: './songs/Har_Shambhu.mp3' },
{ songImage: './images/o_antava.jpeg', songName: 'Oo Bolega Sala', songLocation: './songs/Oo Bolega.mp3' },
{ songImage: './images/Mera_Bhola.jpg', songName: 'Mera Bhola Hai Bhandari', songLocation: './songs/Mera Bhola Hai.mp3' },
{ songImage: './images/Namo.jpg', songName: 'Namo Namo Shankara', songLocation: './songs/Namo Namo  Shankara.mp3' },
{ songImage: './images/sami_sami.jpeg', songName: 'Saami Saami', songLocation: './songs/Pushpa.mp3' },
{ songImage: './images/shiv.jpeg', songName: 'Shiv Tandav', songLocation: './songs/Shiv Tandav Stotram.mp3' },
{ songImage: './images/NARAYANA.jpg', songName: 'Narayan mil jayega', songLocation: './songs/pata nhi kis roop mai.mp3' },
{ songImage: './images/rona.jpeg', songName: 'Rona Ser Ma', songLocation: './songs/Rona Ser Ma.mp3' },
{ songImage: './images/Pyar_Bata.jpg', songName: 'Pyar Bata Hai', songLocation: './songs/Pyar Bata Hai.mp3' },
{ songImage: './images/BadaMahan.jpg', songName: 'Manushya Tu bada Mahan hai', songLocation: './songs/Manushya.mp3' },
{ songImage: './images/Naacho.jpg', songName: 'Nacho Nacho', songLocation: './songs/Naacho Naacho.mp3' },
{ songImage: './images/Kesariya.jpg', songName: 'Kesariya tera Isqa', songLocation: './songs/kesariya.mp3' }]
let SongImage = document.getElementsByClassName('SongImage');
let Name = document.getElementsByClassName('Name');
let Play = document.getElementsByClassName('Play');
let songName = document.getElementById('songName');
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let tensec_back = document.getElementById('10s_back');
let tensec_forward = document.getElementById('10s_forward');
let audio = new Audio(`${songs[index].songLocation}`);
volume_down.addEventListener('click', () => {
    audio.volume = 0;
    runner[0].style.width = '0%';
})

volume_up.addEventListener('click', () => {
    audio.volume = 1;
    runner[0].style.width = '100%'
})
let SongImg = document.getElementById('SongImg');

let timeupdate = () => {
    audio.addEventListener('timeupdate', () => {
        let progress = (audio.currentTime / audio.duration) * 100;
        if (audio.currentTime == audio.duration) {
            audio.pause();
            play.innerHTML = '<img src="./images/play.png" alt="Play">'
            Play[index].innerHTML = '<i class="fa-sharp fa-solid fa-circle-play fa-3x" style="color:#30ea30; ">'

        }
        myProgressBar.style.width = `${progress}%`;
    })
}
for (let i = 0; i < songs.length; i++) {
    SongImage[i].innerHTML = `<img src=${songs[i].songImage} alt="Image">`
    Name[i].innerText = `${songs[i].songName}`;
}

for (let i = 0; i < songs.length; i++) {
    Play[i].addEventListener('click', () => {
        if (audio.paused) {
            audio = new Audio(`${songs[i].songLocation}`);
            audio.play();
            timeupdate();
            SongImg.innerHTML = `<img src=${songs[i].songImage} alt="Image">`
            songName.innerText = `${songs[i].songName}`;
            Play[i].innerHTML = '<i class=" fa-solid fa-circle-pause fa-3x" style="color:#30ea30; ">'
            play.innerHTML = '<img src="./images/Pause.png" alt="pause">'
            prev_song_Index = i;
            index = i;
        }
        else {
            if(index==i)
            {
                audio.pause();
                Play[index].innerHTML = '<i class="fa-solid fa-circle-play fa-3x" style="color:#30ea30;">'
                play.innerHTML = '<img src="./images/play.png" alt="pause">'
            }
            else
            {
                audio.pause();
                  Play[index].innerHTML = '<i class="fa-solid fa-circle-play fa-3x" style="color:#30ea30;">'
            audio = new Audio(`${songs[i].songLocation}`);
            audio.play();
            timeupdate();
            SongImg.innerHTML = `<img src=${songs[i].songImage} alt="Image">`
            songName.innerText = `${songs[i].songName}`;
            Play[i].innerHTML = '<i class="fa-solid fa-circle-pause fa-3x" style="color:#30ea30; ">'
            play.innerHTML = '<img src="./images/Pause.png" alt="pause">'
            if (prev_song_Index == i) {
                audio.pause();
                Play[i].innerHTML = '<i class="fa-solid fa-circle-play fa-3x" style="color:#30ea30; ">'
                play.innerHTML = '<img src="./images/Play.png" alt="pause">'
            }
            prev_song_Index = i;
            index = i;
            }
          
        }
    })
}

forward.addEventListener('click', () => {
    if (audio.paused) {
        if (index == songs.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        audio = new Audio(`${songs[index].songLocation}`);
        songName.innerText = `${songs[index].songName}`;
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
    }
    else {
        audio.pause();
        if (index == songs.length - 1) {
            index = 0;
        }
        else {
            index++;
        }
        audio = new Audio(`${songs[index].songLocation}`);
        audio.play();
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        if (index == 0) {
            Play[songs.length - 1].innerHTML = '<i class="fa-sharp fa-solid fa-circle-play fa-3x" style="color:#30ea30; ">'
        }
        else {
            Play[index - 1].innerHTML = '<i class="fa-sharp fa-solid fa-circle-play fa-3x" style="color:#30ea30;">'
        }
        Play[index].innerHTML = '<i class=" fa-solid fa-circle-pause fa-3x" style="color:#30ea30; ">'
        play.innerHTML = '<img src="./images/Pause.png" alt="pause">'
        songName.innerText = `${songs[index].songName}`;
        myProgressBar.style.width = "0%";
        timeupdate();
    }
});
backward.addEventListener('click', () => {
    if (audio.paused) {
        if (index == 0) {
            index = songs.length - 1;
        }
        else {
            index--;
        }
        audio = new Audio(`${songs[index].songLocation}`);
        songName.innerText = `${songs[index].songName}`;
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
    }
    else {
        audio.pause();
        if (index == 0) {
            index = songs.length - 1;
        }
        else {
            index--;
        }
        audio = new Audio(`${songs[index].songLocation}`);
        audio.play();
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        if (index == songs.length - 1) {
            Play[0].innerHTML = '<i class="fa-sharp fa-solid fa-circle-play fa-3x" style="color:#30ea30;">'
        }
        else {
            Play[index + 1].innerHTML = '<i class="fa-sharp fa-solid fa-circle-play fa-3x" style="color:#30ea30;">'
        }
        Play[index].innerHTML = '<i class=" fa-solid fa-circle-pause fa-3x" style="color:#30ea30; ">'
        play.innerHTML = '<img src="./images/Pause.png" alt="pause">'
        songName.innerText = `${songs[index].songName}`;
        myProgressBar.style.width = "0%";
        timeupdate();
    }
});


play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        myProgressBar.style.width = "0%";
        audio.addEventListener('timeupdate', () => {
            let progress = (audio.currentTime / audio.duration) * 100;
            if (audio.currentTime == audio.duration) {
                audio.pause();
                play.innerHTML = '<img src="./images/play.png" alt="Play">'
                Play[index].innerHTML = '<i class="fa-sharp fa-solid fa-circle-play fa-3x" style="color:#30ea30; ">'

            }
            myProgressBar.style.width = `${progress}%`;
        })

        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        play.innerHTML = '<img src="./images/Pause.png" alt="pause"> '
        Play[index].innerHTML = '<i class=" fa-solid fa-circle-pause fa-3x" style="color:#30ea30; ">'
    }
    else {
        audio.pause();
        SongImg.innerHTML = `<img src=${songs[index].songImage} alt="Image">`
        play.innerHTML = '<img src="./images/play.png" alt="Play">'
        Play[index].innerHTML = '<i class="fa-sharp fa-solid fa-circle-play fa-3x" style="color:#30ea30; ">'
    }
});

tensec_back.addEventListener('click', () => {
    audio.currentTime = audio.currentTime - 10;
})

tensec_forward.addEventListener('click', () => {
    audio.currentTime = audio.currentTime + 10;
})