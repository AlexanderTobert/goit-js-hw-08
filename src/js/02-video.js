import throttle from 'lodash.throttle';
import player from "@vimeo/player";

const vimeoPlayerRef = document.querySelector('#vimeo-player');
const playerRef = new player (vimeoPlayerRef);
// console.log(vimeoPlayerRef);
// console.log(playerRef);


const onPlay = function({ seconds }) {
    // data is an object containing properties specific to that event
    
    localStorage.setItem('videoplayer-current-time', seconds)
    // console.log(data);
    console.log(seconds);
};

playerRef.on('timeupdate', throttle(onPlay, 1000));

playerRef.setCurrentTime(localStorage.getItem('videoplayer-current-time'))

