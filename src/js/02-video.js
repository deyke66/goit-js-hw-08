import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TRACKERTIME_KEY = "videoplayer-current-time";

const onPlay = function(data) {
    let timeValue = JSON.stringify(data.seconds)

    localStorage.setItem(TRACKERTIME_KEY, timeValue)

};

player.on('timeupdate', throttle(onPlay, 1000));

player.on('pause', onPlay);

const currentTimeValue = JSON.parse(localStorage.getItem(TRACKERTIME_KEY)) || 0;

player.setCurrentTime(currentTimeValue).then(function (seconds) {
    seconds = currentTimeValue;
});
