const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
let value = document.getElementById("value");
let minValue = document.getElementById("minValue");
let maxValue = document.getElementById("maxValue");
const setBtn = document.getElementById("setMinMaxValueBtn");
const container = document.getElementById("container");

let ses = JSON.parse(sessionStorage.getItem("minMaxValue")) || {min: 0, max: 10};

value.innerText = ses.min;

console.log(ses.min)
console.log(ses.max)

incrementBtn.addEventListener("click", () => {
  let ses = JSON.parse(sessionStorage.getItem("minMaxValue")) || {min: 0, max: 10};
  if (parseInt(value.innerText) < ses.max) {
    console.log(ses.max)
    let currentValue = parseInt(value.innerText);
    currentValue++;
    value.innerText = currentValue;
    points(currentValue,1000);
    console.log(ses.max);
  }
});

decrementBtn.addEventListener("click", () => {
  let ses = JSON.parse(sessionStorage.getItem("minMaxValue")) || {min: 0, max: 10};
  if (parseInt(value.innerText) > ses.min) {
    let currentValue = parseInt(value.innerText);
    currentValue--;
    value.innerText = currentValue;
    points(currentValue,1000)
    console.log(ses.min);  
  }
});

setBtn.addEventListener("click", () => {
  const min = parseInt(minValue.value);
  const max = parseInt(maxValue.value);

  console.log(`min: ${min} max: ${max}`);

  if (!isNaN(min) && !isNaN(max) && min <= max) {
    const text = `min: ${minValue.value} max: ${maxValue.value}`
    sessionStorage.setItem("minMaxValue", JSON.stringify({ min, max }));
    minValue.value = "";
    maxValue.value = "";
    value.innerText = min;
    points(text,3000)
  } else {
    alert(
      "Please enter valid numbers. Min should be less than or equal to max."
    );
  }
});


function points(value,timer) {
    const btn = document.createElement("button");
    btn.setAttribute("id","pointsBtn");
    btn.innerText = value;
    container.appendChild(btn)

    setTimeout(() => {
        container.removeChild(btn);
    },timer)
}



