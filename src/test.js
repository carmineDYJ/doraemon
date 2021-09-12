import string from './css.js';
let id;

const player = {
    id: undefined,
    playSpeed: 10,
    n: 0,
    ui: {
        demo: document.querySelector("#demo"),
        demo2: document.querySelector("#demo2"),
    },
    events: {
        "#btnPause": 'pause',
        "#btnPlay": 'play',
        "#btnSlow": 'slow',
        "#btnNormal": 'normal',
        "#btnFast": 'fast',
    },
    init: () => {
        player.ui.demo.innerHTML = string.substr(0, player.n);
        player.ui.demo2.innerText = string.substr(0, player.n);
        player.bindEvents();
        player.play();
    },
    bindEvents: () => {
        for (let key in player.events) if (player.events.hasOwnProperty(key)) {
            document.querySelector(key).onclick = player[player.events[key]];
        }
    },
    renderFn: () => {
        player.n += 1;
        if (player.n > string.length) {
            clearInterval(player.id);
            return;
        }
        player.ui.demo.innerHTML = string.substr(0, player.n);
        player.ui.demo2.innerText = string.substr(0, player.n);
        player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight;
    },
    play: () => {
        player.id = setInterval(player.renderFn, player.playSpeed);
    },
    pause: () => {
        clearInterval(player.id);
    },
    slow: () => {
        player.pause();
        player.playSpeed = 30;
        player.play();
    },
    normal: () => {
        player.pause();
        player.playSpeed = 10;
        player.play();
    },
    fast: () => {
        player.pause();
        player.playSpeed = 1;
        player.play();
    },
};

player.init();