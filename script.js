// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const calc = document.querySelector("#calc");
// const reset = document.querySelector("#reset");
// const output = document.querySelector("#output");

// calc.addEventListener("click", function () {

//   let h = parseFloat(height.value);
//   let w = parseFloat(weight.value);

//   // validation
//   if (!h || !w || h <= 0 || w <= 0) {
//     output.innerText = "Please enter valid values";
//     return;
//   }

//   // cm → meter
//   let hm = h / 100;

//   // bmi
//   let bmi = (w / (hm * hm)).toFixed(2);

//   let category;

//   if (bmi < 18.5) {
//     category = "Underweight";
//   } else if (bmi <= 24.9) {
//     category = "Normal weight";
//   } else if (bmi <= 29.9) {
//     category = "Overweight";
//   } else {
//     category = "Obese";
//   }

//   output.innerText = `BMI: ${bmi} (${category})`;
// });

// // reset
// reset.addEventListener("click", function () {
//   height.value = "";
//   weight.value = "";
//   output.innerText = "";
// });

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calc = document.getElementById("calc");
const reset = document.getElementById("reset");
const output = document.getElementById("output");

// calculate button
calc.onclick = function () {

  let h = height.value;
  let w = weight.value;

  // check empty
  if (h === "" || w === "") {
    output.innerText = "Enter values";
    return;
  }

  // convert height to meter
  let hm = h / 100;

  // calculate bmi

  let bmi = w / (hm * hm);

  let category = "";

  if (bmi < 18.5) {
    category = "Under-weight";
  } else if (bmi <= 24.9) {
    category = "Normal";
  } else if (bmi <= 29.9) {
    category = "Over-weight";
  } else {
    category = "Obese";
  }

//   console.log(category);
  

  output.innerText = "BMI: " + bmi.toFixed(2) + " (" + category + ")";
};

// reset button
reset.onclick = function () {
  height.value = "";
  weight.value = "";
  output.innerText = "";
};