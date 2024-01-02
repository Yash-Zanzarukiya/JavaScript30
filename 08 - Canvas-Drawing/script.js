let canvas = document.getElementById('canva');

let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineCap = 'round'
context.lineJoin = 'round'

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let l_width = 5;
let direction = true;

function drawOnCanvas(eventObj) {
    console.log(eventObj);

    if (!isDrawing) return;

    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(eventObj.offsetX, eventObj.offsetY);
    context.strokeStyle = `hsl(${hue},100%,50%)`;
    context.lineWidth = l_width;
    context.stroke();

    [lastX, lastY] = [eventObj.offsetX, eventObj.offsetY];
    
    hue = (hue + 1) % 360;

    if (l_width>100 || l_width<5) 
        direction = !direction;

    if (direction)
        l_width++;
    else
        l_width--;
}

canvas.addEventListener('mousedown', (eventObj) => {
    isDrawing = true;
    [lastX, lastY] = [eventObj.offsetX, eventObj.offsetY];
});
canvas.addEventListener('mousemove', drawOnCanvas);
canvas.addEventListener('mouseup', (eventObj) => isDrawing = false);
canvas.addEventListener('mouseout', (eventObj) => isDrawing = false);
