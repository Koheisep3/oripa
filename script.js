document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('playButton');
    const myVideo = document.getElementById('myVideo');
    const myImage = document.getElementById('myImage');

    playButton.addEventListener('touchstart', function () {
        playButton.style.display = 'none';
        myVideo.style.display = 'block';
        myVideo.play();

        myVideo.addEventListener('ended', function () {
            myVideo.style.display = 'none';
            myImage.style.display = 'block';
        });
    });
});
