let picture = document.getElementById(('picture'));

let blur = document.querySelector('#blur');
let width = document.querySelector('#width');
let color = document.querySelector('#color');

let inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('change',updateValue))

function updateValue(){
    
}

function setColor(color){
    picture.style.borderColor = color;
}

function setBorderWidth(width){
    picture.style.borderWidth = `${width}px`;
}

function setBlurValue(blur_value){
    picture.style.filter = `blur(${blur_value}px)`;
}