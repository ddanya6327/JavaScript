'use strict';

import PopUp from './popup.js';
import GameBuilder from './game.js';

const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
    .gameDuration(5)
    .carrotCount(3)
    .bugCount(3)
    .build();

game.setGameStopListener((reason) => {
    let message;
    switch(reason) {
        case 'cancel':
            message = 'Replay?';
            break;
        case 'win':
            message = 'YOU WON?';
            break;
        case 'lose':
            message = 'YOU LOST';
            break;
        default:
            throw new Error('not valid reason');
    }

    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
    game.start();
});