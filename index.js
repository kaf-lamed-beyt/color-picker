const button = document.querySelector("#get-colors");
const modal = document.querySelector(".color-modal");
const closeButton = document.querySelector("#close");

function getColors() {
  const elements = document.getElementsByTagName("*");
  const colorArray = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const computedStyle = window.getComputedStyle(element);

    const color =
      computedStyle.getPropertyValue("background-color") ||
      computedStyle.getPropertyValue("background") ||
      computedStyle.getPropertyValue("color");

    if (colorArray.includes(color)) continue;
    colorArray.push(color);
  }

  return colorArray;
}

function renderColors(colors) {
  const modalContent = document.querySelector(".color-modal");

  colors.forEach((item, index) => {
    return (modalContent.innerHTML += `
      <div class="color-element" key=${index}>
        <span class="token" style="--bg: ${item}"></span>
        <p class="color-code">${item}</p>
      </div>
      `);
  });
}

const colors = getColors();
renderColors(colors);

if (modal) {
  document.body.removeChild(button);
}

button.addEventListener("click", function () {
  document.body.appendChild(modal);
  document.body.removeChild(button);
  document.body.appendChild(closeButton);
});

closeButton.addEventListener("click", function () {
  document.body.removeChild(modal);
  document.body.removeChild(closeButton);
  document.body.appendChild(button);
});
