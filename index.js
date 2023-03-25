const button = document.querySelector("#get-colors");
const modal = document.querySelector(".color-modal");
const closeButton = document.querySelector("#close");

function createColorModal() {
  const container = document.querySelector(".color-modal");

  document.body.appendChild(container);
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

createColorModal();
const colors = getColors();

colors.map((item, index) => {
  console.log(item);
  const modal = document.querySelector(".color-modal");

  return (modal.innerHTML += `
    <div class="color-element" key=${index}>
      <span class="token" style="--bg: ${item}"></span>
      <p class="color-code">${item}</p>
    </div>
    `);
});

if (modal) {
  document.body.appendChild(closeButton);
  document.body.removeChild(button);
} else {
  document.body.removeChild(closeButton);
  document.body.appendChild(button);
}

button.addEventListener("click", function () {
  document.body.appendChild(modal);
  document.body.appendChild(closeButton);
  document.body.removeChild(button);
});

closeButton.addEventListener("click", function () {
  document.body.removeChild(modal);
  document.body.removeChild(closeButton);
  document.body.appendChild(button);
});
