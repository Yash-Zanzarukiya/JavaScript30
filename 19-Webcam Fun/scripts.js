const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

let pixels,rgb = false,red = false,clear = false;

function getVideo() {
  navigator.mediaDevices.getUserMedia({video: { width: 1280, height: 720 },audio:false})
  .then((localMediaStream)=>{
    console.log(localMediaStream);
    video.srcObject = localMediaStream;
    video.play();
  })
  .catch((err)=>(console.log(`Oh No!!! : ${err}`)));
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.height =height;
  canvas.width= width;


  return setInterval(() => {
    ctx.drawImage(video,0,0,width,height);
    pixels = ctx.getImageData(0,0,width,height);

    if (rgb) {
      rgbSplit();
    } else if (red) {
      redEffect();
    }

    ctx.putImageData(pixels,0,0);
  }, 16);
}

function clearEffect(){
  rgb = false;red = false;
}

function redEffect() {
  red = true; rgb= false;
  for (let index = 0; index < pixels.data.length; index+=4) {
    pixels.data[index+0] += 100;
    pixels.data[index+1] -= 20;
    pixels.data[index+2] -= 10;
  }
}
function rgbSplit() {
  rgb = true; red = false;
  for (let index = 0; index < pixels.data.length; index+=4) {
    pixels.data[index-450] = pixels.data[index+0];
    pixels.data[index+400] = pixels.data[index+1];
    pixels.data[index-450] = pixels.data[index+2];
  }
}

function takePhoto(){
  snap.currentTime = 0;
  snap.play();

  let data = canvas.toDataURL('image/jpeg');
  let link = document.createElement('a');
  link.href = data;
  link.setAttribute('download','Hacker_No_1');
  link.innerHTML = `<img src=${data}></img>`;

  strip.insertBefore(link,strip.firstChild);
}

getVideo();
video.addEventListener('canplay', paintToCanvas);