'use strict';

$(document).ready(function () {
    document.getElementById('social-icons').addEventListener('click', function (event) {
        switch (event.target.id) {
            case 'youtube':
                window.open('https://www.youtube.com/channel/UClLOYQAHm6pBNdjxuvLUadw');
                break;
            case 'facebook':
                window.open('https://www.facebook.com/versionextendida/');
                break;
            case 'spotify':
                window.open('https://open.spotify.com/artist/5zfGpBrzndP4czcJTxZgKt?si=0MzwmnXMSvCxLOte0vPcbQ');
                break;
            case 'twitter':
                window.open('https://twitter.com/LaVersionExt');
                break;
            case 'instagram':
                window.open('https://www.instagram.com/laversionextendida/');
                break;
            default:
                alert('Other clicked');
                break;
        }
    });
})