const music = new Audio('song2.mp3');
const songs=[
    {
        id:1,
        songName:`On My Way <br />
        <div class="subtitle">Alan Walker</div>`,
        poster:'1.jpg'
    },

    {
        id:2,
        songName:`Alan Walker-Fade <br />
        <div class="subtitle">Alan Walker</div>`,
        poster:'2.jpg'
    },

    {
        id:3,
        songName:`Ava Max One <br />
        <div class="subtitle">Alan Walker</div>`,
        poster:'3.jpg'
    },

    {
        id:4,
        songName:`Childeren of The sun <br />
        <div class="subtitle">Alan Walker</div>`,
        poster:'4.jpg'
    },

    {
        id:5,
        songName:`Flow Rida When I Grow Up <br />
        <div class="subtitle">Alan Walker</div>`,
        poster:'5.jpg'
    },

    {
        id:6,
        songName:`Alan Music <br />
        <div class="subtitle">Alan Walker</div>`,
        poster:'6.jpg'
    },

    {
        id:7,
        songName:`Matargasti <br />
        <div class="subtitle">Tamasha</div>`,
        poster:'7.jpg'
    },

    {
        id:8,
        songName:`Suna hai <br />
        <div class="subtitle">Sanak</div>`,
        poster:'8.jpg'
    },

    {
        id:9,
        songName:`Dilbar <br />
        <div class="subtitle">Satyameva Jayata</div>`,
        poster:'9.jpg'
    },

    {
        id:10,
        songName:`Duniya <br />
        <div class="subtitle">Luka Chuppi</div>`,
        poster:'10.jpg'
    },

    {
        id:11,
        songName:`Lagdi Lahore Di <br />
        <div class="subtitle">Steet Dancer 3</div>`,
        poster:'11.jpg'
    },

    {
        id:12,
        songName:`Putt Jatt <br />
        <div class="subtitle">Diljeet</div>`,
        poster:'12.jpg'
    },

    {
        id:13,
        songName:`Pehli Dafa <br />
        <div class="subtitle">Atif Aslam</div>`,
        poster:'13.jpg'
    },

    
    {
        id:14,
        songName:`Vaaste <br />
        <div class="subtitle">Dhanvi Bhanushali</div>`,
        poster:'14.jpg'
    },

    
    {
        id:15,
        songName:`Lut Gaya <br />
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:'15.jpg'
    },

    
    {
        id:16,
        songName:`Meri Zindagi Hai Tu  <br />
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster:'16.jpg'
    },

]

//__________________________________________________________________________________

let songItem=document.querySelectorAll('.songItem');
const eachSong=Array.from(songItem);
eachSong.forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;// we had taken img[0] because here the first img inside each list of songItem is selected 
})

//_____________________________________________________________________________________

// To play the songs
let masterPlay=document.querySelector('#masterPlay');
let wave=document.getElementById("wave");
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        wave.classList.add("active1");
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove("active1");
        masterPlay.classList.add('bi-play-fill');
    }    
}
); 

// ______________________________________________________________________________________________________
// This is used for scrolling the each songs inside the popular songs to left and right
let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=350;
})

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=350;
})

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let Aritists_bx=document.getElementsByClassName('Aritists_bx')[0];

pop_art_right.addEventListener('click',()=>{
    Aritists_bx.scrollLeft +=250;
})

pop_art_left.addEventListener('click',()=>{
    Aritists_bx.scrollLeft -=250;
})
// _______________________________________________________________________________________________
let makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
};

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,.0)';
    });
};

// To play different music
let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let title=document.getElementById('title');
Array.from(document.querySelectorAll(".playlistPlay")).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        music.src=`song${index}.mp3`;
        poster_master_play.src=`${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        // It returns the id of selected songs
        let songTitles =songs.filter((el)=>{
            return el.id == index;
        });

        songTitles.forEach((elss)=>{
            let songName=elss.songName;
            title.innerHTML=songName;
        });
        // for background of menusong       
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';

        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });

});
let currentStart=document.getElementById("currentStart");
let currentEnd=document.getElementById("currentEnd");
let seek=document.getElementById("seek");
let bar2=document.getElementById("bar2");
let dot=document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min1=Math.floor(music_dur / 60);
    let sec1=Math.floor(music_dur % 60);
    if(sec1 <10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr/60);
    let sec2=Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;

    let progressBar=parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;

});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
});

let vol_icon=document.getElementById("vol_icon");
let vol=document.getElementById("vol");
let vol_bar=document.getElementsByClassName("vol_bar")[0];
let vol_dot=document.getElementById("vol_dot");

vol.addEventListener("change",()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-vol//ume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>70){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});

let back=document.getElementById("back");
let next=document.getElementById("next");
back.addEventListener("click",()=>{
    index -= 1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`song${index}.mp3`;
        poster_master_play.src=`${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        // It returns the id of selected songs
        let songTitles =songs.filter((el)=>{
            return el.id == index;
        });

        songTitles.forEach(elss=>{
            // let {songName}=elss; this is distructive method
            let songName=elss.songName;
            title.innerHTML=songName;
        });
        // for background of menusong
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';

        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener("click",()=>{
    index ++;

    if(index >Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src=`song${index}.mp3`;
        poster_master_play.src=`${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        // It returns the id of selected songs
        let songTitles =songs.filter((el)=>{
            return el.id == index;
        });

        songTitles.forEach(elss=>{
            let songName=elss.songName;
            title.innerHTML=songName;
        });
        // for background of menusong
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';

        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});

