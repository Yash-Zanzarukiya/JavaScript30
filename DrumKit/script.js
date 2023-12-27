function playAudio(keycode){

    let key = document.querySelector(`p[data-key="${keycode}"]`);
    let audio = document.querySelector(`audio[data-key="${keycode}"]`);

    if(audio==null){return;}

    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(obj){
    if (obj.propertyName !=='transform')
        return;
    this.classList.remove('playing');
}

let keys = Array.from(document.querySelectorAll('.key'))

keys.forEach( key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown',function(eventObj){
    playAudio(eventObj.keyCode);
})