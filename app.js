let fobNumber = [];
let input = document.querySelector("#getInput");
let btnEnter = document.querySelector("#enterInput");
let result = document.querySelector(".outputDiv");

btnEnter.addEventListener("click", () => {
  event.preventDefault();
  result.innerText = convertFob();
});

function convertFob() {
  let string = input.value;
  fobNumber = string.split("");
  return (
    fobNumber[6] +
    fobNumber[7] +
    fobNumber[4] +
    fobNumber[5] +
    fobNumber[2] +
    fobNumber[3] +
    fobNumber[0] +
    fobNumber[1]
  );
}
