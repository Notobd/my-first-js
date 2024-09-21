"use strict";
const firstNumber = document.querySelector(".first");
const secNumber = document.querySelector(".second");
const multiply = document.querySelector(".operation");
const addition = document.querySelector(".operations");
const sum = document.querySelector(".total");
let multadd, addMult;
const operate = function () {
  const addMult = Number(firstNumber.value);
  const multAdd = Number(secNumber.value);
  const multiply = addMult * multAdd;
  document.body.style.backgroundColor = "green";
  document.querySelector(".final").textContent = multiply;
};
document.querySelector(".operation").addEventListener("click", operate);
const operate1 = () => {
  const addPlus = Number(firstNumber.value);
  const plusAdd = Number(secNumber.value);
  const addition = addPlus + plusAdd;
  document.querySelector("body").style.backgroundColor = "purple";
  document.querySelector(".final").textContent = addition;
};
addition.addEventListener("click", operate1);
