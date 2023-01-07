const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputEl = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  if (sides[0].value <= 0 && sides[1].value <= 0){
    outputEl.innerText = "The Values should be greater then 0"
  }
  else{
  const sumOfSquares = calculateSumOfSquare(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  outputEl.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }
}

calculateBtn.addEventListener("click", calculateHypotenuse);
