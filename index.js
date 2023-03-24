function createColorModal() {
  const container = document.createElement("div");
  container.id = "color-modal";

  container.style = `
      position: fixed;
      z-index: 20;
      top: 10px;
      right: 20px;
      width: 300px;
      height: 300px;
      border-radius: 4px;
      background: #161b22;
      boxShadow: 0 0 10px rgba(0, 0, 0, 0.5);
      overflow-y: hidden;
      padding: 20px 0px;
    `;

  document.body.appendChild(container);
}

function getColors() {
  const elements = document.getElementsByTagName("*");
  const colorArray = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    const color =
      window.getComputedStyle(element).getPropertyValue("color") &&
      window.getComputedStyle(element).getPropertyValue("background") &&
      window.getComputedStyle(element).getPropertyValue("background-color");
    if (colorArray.includes(color)) continue;
    colorArray.push(color);
  }

  return colorArray;
}

createColorModal();
const colors = getColors();

colors.map((item, index) => {
  const colorElement = document.createElement("div");
  colorElement.id = "color-element";
  colorElement.style = `
      display: flex;
    `;

  const colorCode = document.createElement("p");
  colorCode.id = "color-code";
  colorCode.textContent = item;

  colorCode.style = `
    width: 200px;
    margin-left: 25px;
    border: 1px solid blue;
  `;

  const colorToken = document.createElement("span");
  colorToken.style = `
      height: 18px;
      width: 18px;
      margin: 0 0 0 15px;
      background: ${item};
    `;

  return document
    .querySelector("#color-modal")
    .appendChild(colorElement)
    .appendChild(colorToken)
    .appendChild(colorCode);
});

var button = document.getElementById("get-colors");
var modal = document.getElementById("color-modal");
var closeButton = document.getElementById("close");

button.addEventListener("click", function () {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
