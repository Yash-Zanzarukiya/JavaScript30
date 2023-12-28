let hour_hand = document.getElementById('hour');
let minute_hand = document.getElementById('minute');
let second_hand = document.getElementById('second');

let curr_time,hour,minute,second;

let clock = setInterval(function(){
    curr_time = new Date();

    hour = curr_time.getHours();
    minute = curr_time.getMinutes();
    second = curr_time.getSeconds();

    console.log(`${(hour % 12)}:${minute}:${second}`);

    second_hand.style.transform = `rotate(${ ( second / 60 * 360 ) - 90 }deg)`;
    minute_hand.style.transform = `rotate(${ ( (minute / 60 * 360) ) + 270 }deg)`;
    hour_hand.style.transform = `rotate(${ ( (hour % 12) / 12 * 360 ) + 270 }deg)`;
},1000)
