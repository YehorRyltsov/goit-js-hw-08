import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function timeStoredg(data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data));
}
player.on('timeupdate', throttle(timeStoredg, 1000));

let time_stop = localStorage.getItem(CURRENT_TIME);
if (time_stop) {
  time_stop = JSON.parse(time_stop);
  player
    .setCurrentTime(time_stop['seconds'])
    .then(function (seconds) {})
    .catch(function (error) {
      console.log(error);
      switch (error.name) {
        case 'RangeError':
          break;

        default:
          break;
      }
    });
}
