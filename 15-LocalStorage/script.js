let plate_list = document.querySelector(".plate_list");
let form = document.querySelector("form");
let add_plate = document.querySelector(".add_plates");
let submit = document.querySelector("#submit");
let clear = document.querySelector("#clear");
let check_all = document.querySelector("#check");
let uncheck_all = document.querySelector("#uncheck");

let local_storage = JSON.parse(localStorage.getItem("plates"));

let plates = local_storage || [];

function addPlates(eventObj) {
  let dish_name = add_plate.value;
  let dish = {
    dish_name,
    isServed: false,
  };
  plates.push(dish);
  propogateList(plates, plate_list);
}

function propogateList(plates = [], plate_list) {
  plate_list.innerHTML = plates
    .map((dish, i) => {
      return `<li>
                  <input type="checkbox" id="dish${i}" data-index=${i}" ${dish.isServed ? "checked" : ""
        }>
                  <label for="dish${i}">${dish.dish_name}</label>
              </li>`;
    })
    .join("");

  if (plates.length == 0) {
    plate_list.innerHTML = "<li>Take Yummy Prasadam😋</li>";
    document.querySelector(".buttons").style.visibility = "hidden";
  } else if (plates.length >= 1) {
    document.querySelector(".buttons").style.visibility = "visible";
  }

  localStorage.setItem("plates", JSON.stringify(plates));
}

function toggleStatus(eventObj) {
  if (!eventObj.target.matches("input")) return;
  let index = parseInt(eventObj.target.dataset.index);
  plates[index].isServed = !plates[index].isServed;
  propogateList(plates, plate_list);
}

function toggleAll(status) {
  console.log(status);
  plates.forEach((dish) => {
    dish.isServed = status;
  });
  propogateList(plates, plate_list);
}

plate_list.addEventListener("click", toggleStatus);

clear.addEventListener("click", (eventObj) => {
  localStorage.clear();
  plates = [];
  propogateList(plates, plate_list);
});

check_all.addEventListener("click", () => {
  toggleAll(true);
});

uncheck_all.addEventListener("click", () => {
  toggleAll(false);
});

form.addEventListener("submit", (eventObj) => {
  eventObj.preventDefault();
  addPlates(eventObj);
  add_plate.value = "";
});

propogateList(plates, plate_list);
