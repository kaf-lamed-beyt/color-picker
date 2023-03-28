const modal = document.createElement("div");
modal.classList.add("color-modal");

const closeButton = document.createElement("button");
closeButton.classList.add("close");
closeButton.innerText = "X";

function renderColors(colors) {
  colors.forEach((item, index) => {
    const colorElement = document.createElement("div");
    colorElement.classList.add("color-element");
    colorElement.setAttribute("key", index);

    const tokenElement = document.createElement("span");
    tokenElement.classList.add("token");
    tokenElement.style.setProperty("--bg", item);
    colorElement.appendChild(tokenElement);

    const codeElement = document.createElement("p");
    codeElement.classList.add("color-code");
    codeElement.textContent = item;
    colorElement.appendChild(codeElement);

    modal.appendChild(colorElement);
  });

  document.body.insertAdjacentElement("beforeend", modal);
  document.body.insertAdjacentElement("beforeend", closeButton);
}

function getColors() {
  const elements = document.getElementsByTagName("*");
  const colorArray = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const computedStyle = window.getComputedStyle(element);

    const color =
      computedStyle.getPropertyValue("color") &&
      computedStyle.getPropertyValue("background") &&
      computedStyle.getPropertyValue("background-color");

    if (colorArray.includes(color)) continue;
    colorArray.push(color);
  }

  return colorArray;
}

closeButton.addEventListener("click", function () {
  document.body.removeChild(modal);
  document.body.removeChild(closeButton);
});

const colors = getColors();
renderColors(colors);
