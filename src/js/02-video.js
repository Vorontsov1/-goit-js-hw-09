import Player from '@vimeo/player';

import { throttle } from 'lodash';
  const timeKey = 'videoplayer-current-time';
  const iframe = document.querySelector('#vimeo-player');
  const player = new Vimeo.Player(iframe);

  player.on('play', function () {
    console.log('played the video!');
  });

  player.getVideoTitle().then(function (title) {
    console.log('title:', title);
  });