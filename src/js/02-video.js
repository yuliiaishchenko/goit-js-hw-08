import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const newPlayer = new Player('vimeo-player');
const PLAYER_KEY = 'videoplayer-current-time';
newPlayer.on(
    'timeupdate',
    throttle(function(data){
    
    localStorage.setItem(PLAYER_KEY, data.seconds);},1000
    ));


newPlayer.setCurrentTime(localStorage.getItem(PLAYER_KEY) || 0)
