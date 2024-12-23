// ==UserScript==
// @name         Amazon Skipper
// @namespace    https://gist.github.com/J0hn8uff3r
// @version      1.2
// @description  Skips ads, intros and wait time in Amazon Prime Video
// @author       J0hn8uff3r
// @match        https://www.primevideo.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL  https://gist.github.com/J0hn8uff3r/499350cc4db92478d0e32a22e0e56a33/raw/a703ca4b134051cf2f44577a8ca35c526def2283/Amazon-Skipper.user.js
// @updateURL    https://gist.github.com/J0hn8uff3r/499350cc4db92478d0e32a22e0e56a33/raw/a703ca4b134051cf2f44577a8ca35c526def2283/Amazon-Skipper.user.js
// @grant        none
// ==/UserScript==

$(document).ready(function () {
    $(document).dblclick(function () {
        $(".fullscreenButton").click();
    });
});

setInterval(function () {
    if ($('.adSkipButton').length) {
        $('.adSkipButton').trigger('click');
        console.log("Anuncio saltado.");
    }

    if ($('.skipElement').length) {
        $('.skipElement').trigger('click');
        console.log("Resumen del capítulo anterior saltado.");
    }

    if ($('.playIconWrapper').length) {
        $('.playIconWrapper').trigger('click');
        console.log("Espera para siguiente episodio saltada.");
    }

}, 10);


document.addEventListener("wheel", function (e) {
    volume = document.querySelector('video[width="100%"]').volume;
    var direction = Math.sign(e.deltaY);
    if (direction == "-1") {
        console.log("UP")
        if (volume + 0.05 > 1.0) {
            document.querySelector('video[width="100%"]').volume = 1.0;
        } else {
            document.querySelector('video[width="100%"]').muted = false;
            document.querySelector('video[width="100%"]').volume += 0.05;
        }
    } else if (volume != 0) {
        console.log("DOWN")
        if (volume - 0.05 < 0) {
            document.querySelector('video[width="100%"]').volume = 0;
        } else {
            document.querySelector('video[width="100%"]').volume -= 0.05;
        }
    }
});

// class="adSkipButton skippable"

// document.querySelector('video[width="100%"]').crossOrigin = 3.0;

// ?autoplay=1




// // select the target node
// var target = document.querySelector('.skipElement');

// // create an observer instance
// var observer = new MutationObserver(function (mutations) {
//     mutations.forEach(function (mutation) {
//         console.log(mutation.type);
//         console.log("HOLA");
//         target.trigger('click');
//     });
// });

// // configuration of the observer:
// var config = { attributes: true, childList: true, characterData: true }

// // pass in the target node, as well as the observer options
// observer.observe(target, config);




// // target element that we will observe
// const target = document.querySelector('.skipElement');

// // config object
// const config = {
//     attributes: true,
//     attributeOldValue: true,
//     characterData: true,
//     characterDataOldValue: true
// };

// // subscriber function
// function subscriber(mutations) {
//     mutations.forEach((mutation) => {
//         // handle mutations here
//         console.log(mutation);
//     });
// }

// // instantiating observer
// const observer = new MutationObserver(subscriber);

// // observing target
// observer.observe(target, config);


document.addEventListener('keydown', function (event) {
    // console.log(event.which);
});

var up = new KeyboardEvent('keydown', { 'keyCode': 40, 'which': 40 });
var down = new KeyboardEvent('keydown', { 'keyCode': 40, 'which': 40 });
var right = new KeyboardEvent('keydown', { 'keyCode': 40, 'which': 40 });
var left = new KeyboardEvent('keydown', { 'keyCode': 40, 'which': 40 });



var values = [new KeyboardEvent('keydown', { 'keyCode': 37, 'which': 37 }), new KeyboardEvent('keydown', { 'keyCode': 38, 'which': 38 }), new KeyboardEvent('keydown', { 'keyCode': 39, 'which': 39 }), new KeyboardEvent('keydown', { 'keyCode': 40, 'which': 40 })]

movement = values[Math.floor(Math.random() * values.length)];

while (true) {
    document.dispatchEvent(movement);
}

//*****************************

// document.addEventListener('keydown', function (event) {
//     //console.log(event.which);
// });


















var values = [
    new KeyboardEvent('keydown', { 'keyCode': 37, 'which': 37 }),
    new KeyboardEvent('keydown', { 'keyCode': 38, 'which': 38 }),
    new KeyboardEvent('keydown', { 'keyCode': 39, 'which': 39 }),
    new KeyboardEvent('keydown', { 'keyCode': 40, 'which': 40 })
]

function start() {

    setTimeout(function () {
        movement = values[Math.floor(Math.random() * values.length)];
        document.dispatchEvent(movement);
        start();
    }, 1);
}

start();

var close = document.querySelector('#modal');
var retry = document.querySelector('#page');

var close_observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        $("#close").click();
    });
});

var retry_observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        $(".smart-lab-result__btns").find("button").click();
    });
});

var config = { attributes: true, childList: true, characterData: true }

close_observer.observe(close, config);
retry_observer.observe(retry, config);