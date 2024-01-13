let video = document.querySelector('#videoFrame')
let pause_btn = document.querySelector('#pause');
let back_skip_btn = document.querySelector('#backward-skip');
let for_skip_btn = document.querySelector('#forward-skip');
let volume = document.querySelector('#volume');
let speed = document.querySelector('#speed');
let seek = document.querySelector('#seek');
let progress = document.querySelector('#curr_progress');

function controlVolume(eventObj) {
    let value = eventObj.target.value;
    video.volume = value;
}

function controlSpeed(eventObj) {
    let value = eventObj.target.value;
    video.playbackRate = value;
}

function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function skipVideo(eventObj) {
    video.currentTime += parseInt(eventObj.target.dataset.key);
}

function seekVideo() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    let scrubTime = (e.offsetX / seek.offsetWidth) * 100;
    video.currentTime = (video.duration * scrubTime) / 100;
}

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', seekVideo);
pause_btn.addEventListener('click', togglePlay);
for_skip_btn.addEventListener('click', skipVideo);
back_skip_btn.addEventListener('click', skipVideo);
volume.addEventListener('change', controlVolume);
speed.addEventListener('change', controlSpeed);

let isMouseDown = false;
seek.addEventListener('click', scrub);
seek.addEventListener('mousedown', () => isMouseDown = true);
seek.addEventListener('mouseup', () => isMouseDown = false);
seek.addEventListener('mousemove', (eventObj) => isMouseDown && scrub(eventObj));