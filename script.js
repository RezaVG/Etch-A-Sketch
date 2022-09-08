const defaultColor = "gray";
const defaultSize = 16;
let size = defaultSize;
const container = document.querySelector(".container");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  let inputSize = parseInt(prompt("choose between 1 to 100:", "16"));
  if (inputSize > 0 && inputSize < 101) {
    size = inputSize;
    container.textContent = "";
    for (let i = 0; i < size ** 2; i++) {
      const div = document.createElement("div");
      div.classList.add(`${i}`);
      div.style.width = `calc( 30rem / ${size})`;
      div.style.backgroundColor = "red";
      div.style.aspectRatio = "1";
      div.style.display = "inline-block";
      container.appendChild(div);
      div.addEventListener("mouseover", changeColor);
      div.addEventListener("mousedown", changeColor);
    }
  }
  console.log(size);
});

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

for (let i = 0; i < size ** 2; i++) {
  const div = document.createElement("div");
  div.classList.add(`${i}`);
  div.style.width = `calc( 30rem / ${size})`;
  div.style.backgroundColor = "red";
  div.style.aspectRatio = "1";
  div.style.display = "inline-block";
  container.appendChild(div);
  div.addEventListener("mouseover", changeColor);
  div.addEventListener("mousedown", changeColor);
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  e.target.style.backgroundColor = "blue";
  console.log(e);
}
