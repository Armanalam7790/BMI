const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calc = document.getElementById("calc");
const reset = document.getElementById("reset");
const output = document.getElementById("output");


let savedBMI = localStorage.getItem("bmiResult");
if (savedBMI) {
  output.innerText = savedBMI;
}

calc.onclick = function () {

  let h = height.value;
  let w = weight.value;

  if (h === "" || w === "") {
    output.innerText = "Enter values";
    return;
  }

  let hm = h / 100;

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

  let result = "BMI: " + bmi.toFixed(2) + " (" + category + ")";

  output.innerText = result;

 
  localStorage.setItem("bmiResult", result);
};

// reset button
reset.onclick = function () {
  height.value = "";
  weight.value = "";
  output.innerText = "";

  localStorage.removeItem("bmiResult");
};