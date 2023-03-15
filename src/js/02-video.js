import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function (data) {
    console.log(data)
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data))
}, 1000));

goSeveSecond();

function goSeveSecond() {
    const seconArray = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    if (seconArray) {
        player.setCurrentTime(seconArray.seconds);
    }
}