let checkboxes = document.querySelectorAll('.container input[type="checkbox"]');

let lastCheckbox = null;
let inBetween = false;

checkboxes.forEach(
    (item) => {
        item.addEventListener('click', checkMarks);
    }
)

function checkMarks(eventObj) {
    
    if (eventObj.shiftKey && this.checked) {

        checkboxes.forEach((item)=>{
            if (item == lastCheckbox || item == this) {
                inBetween = !inBetween;
            }
            if (inBetween)
                item.checked = true;
        })
    }
    lastCheckbox = this;
}