let picture = document.getElementById(('picture'));

let inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('change',updateValue));
inputs.forEach(input => input.addEventListener("mousemove",updateValue));

function updateValue(){
    let suffix, name;

    if(this.name == 'color'){
        suffix='';
        name = 'border-color';
    }
    else if (this.name == 'blur') {
        suffix='px';
        name = 'blur-value';
    }
    else if (this.name == 'width') {
        suffix='px';
        name = 'border-width';
    }
    document.documentElement.style.setProperty(`--${name}`,this.value + suffix);
}


// function updateValue(){

//     let value = this.value;

//     if(this.name == 'color')
//         setColor(value);
//     else if (this.name == 'blur')
//         setBlurValue(value);
//     else if (this.name == 'width')
//         setBorderWidth(value);
// }

// function setColor(color){
//     picture.style.borderColor = color;
//     boldtag.style.color = color;
// }

// function setBorderWidth(width){
//     picture.style.borderWidth = `${width}px`;
// }

// function setBlurValue(blur_value){
//     picture.style.filter = `blur(${blur_value}px)`;
// }