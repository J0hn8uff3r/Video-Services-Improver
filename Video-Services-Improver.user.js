// ==UserScript==
// @name         Video Services Improver
// @namespace    https://github.com/J0hn8uff3r
// @version      1.3
// @description  Skips ads, intros and wait time on Amazon Prime Video and improves other video sites
// @author       J0hn8uff3r
// @match        https://www.primevideo.com/*
// @match        https://southpark.cc.com/full-episodes/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @downloadURL  https://gist.github.com/J0hn8uff3r/499350cc4db92478d0e32a22e0e56a33/raw/a6fb1907ee2144851771d097729ebc78ff7a7cce/Amazon-Skipper.user.js
// @updateURL    https://gist.github.com/J0hn8uff3r/499350cc4db92478d0e32a22e0e56a33/raw/a6fb1907ee2144851771d097729ebc78ff7a7cce/Amazon-Skipper.user.js
// @grant        none
// ==/UserScript==

$(document).ready(function () {
    $(document).dblclick(function () {

        if (window.location.href.indexOf("southpark.cc.com/full-episodes/") != -1) {
            $(".edge-gui-fullscreen-button").click();
        }

        if (window.location.href.indexOf("primevideo.com/detail/") != -1) {
            $(".fullscreenButton").click();
        }

    });

    $(".video").click(function () {
        // this.paused ? this.play() : this.pause();
        video = document.querySelector('video');
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

});

if (window.location.href.indexOf("primevideo.com/detail/") != -1) {
    setInterval(function () {
        if ($('.adSkipButton').length) {
            $('.adSkipButton').trigger('click');
            console.log("Add skipped.");
        }

        if ($('.skipElement').length) {
            $('.skipElement').trigger('click');
            console.log("Recap sequence skipped.");
        }

        if ($('.playIconWrapper').length) {
            $('.playIconWrapper').trigger('click');
            console.log("Wait time until next episode skipped.");
        }

    }, 10);
}

document.addEventListener("wheel", function (e) {
    var direction = Math.sign(e.deltaY);

    if (window.location.href.indexOf("southpark.cc.com/full-episodes/") != -1) {
        volume_element = document.querySelector('video');
        console.log("SOUTH PARK")
    }

    if (window.location.href.indexOf("primevideo.com/detail/") != -1) {
        volume_element = document.querySelector('video[width="100%"]');
        console.log("PRIMEVIDEO")
    }

    if (direction == "-1") {
        console.log("UP")
        if (volume_element.volume + 0.05 > 1.0) {
            volume_element.volume = 1.0;
        } else {
            volume_element.muted = false;
            volume_element.volume += 0.05;
        }
    } else if (volume_element.volume != 0) {
        console.log("DOWN")
        if (volume_element - 0.05 < 0) {
            volume_element.volume = 0;
        } else {
            volume_element.volume -= 0.05;
        }
    }
});
