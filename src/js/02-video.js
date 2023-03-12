import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
import player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const newPlayer = new Player('vimeo-player');

newPlayer.on(
    'timeupdate',
    throttle(function(data){
    
    localStorage.setItem('videoplayer-current-time', data.seconds);},1000
    ));


newPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0)
