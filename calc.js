"use strict";
const firstNumber = document.querySelector(".first");
const secNumber = document.querySelector(".second");
const multiply = document.querySelector(".operation");
const addition = document.querySelector(".operations");
const sum = document.querySelector(".total");
let multadd, addMult;
const operate = function () {
  const addMult = Number(document.querySelector(".first").value);
  const multAdd = Number(document.querySelector(".second").value);
  const multiply = addMult * multAdd;
  document.body.style.backgroundColor = "green";
  document.querySelector(".final").textContent = multiply;
};
document.querySelector(".operation").addEventListener("click", operate);
const operate1 = () => {
  const addPlus = Number(document.querySelector(".first").value);
  const plusAdd = Number(document.querySelector(".second").value);
  const addition = addPlus + plusAdd;
  document.querySelector("body").style.backgroundColor = "purple";
  document.querySelector(".final").textContent = addition;
};
addition.addEventListener("click", operate1);
