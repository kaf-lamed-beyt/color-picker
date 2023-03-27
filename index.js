const modal = document.querySelector(".color-modal");
const closeButton = document.querySelector("#close");

function renderColors(colors) {
  colors.forEach((item, index) => {
    return (modal.innerHTML += `
      <div class="color-element" key=${index}>
        <span class="token" style="--bg: ${item}"></span>
        <p class="color-code">${item}</p>
      </div>
      `);
  });
}

function getColors() {
  const elements = document.getElementsByTagName("*");
  const colorArray = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const computedStyle = window.getComputedStyle(element);

    const color = computedStyle.getPropertyValue("background");

    if (colorArray.includes(color)) continue;
    colorArray.push(color);
  }

  return colorArray;
}

modal.style.color = "#fff";

const colors = getColors();

modal.textContent = colors;

renderColors(colors);

closeButton.addEventListener("click", function () {
  document.body.removeChild(modal);
  document.body.removeChild(closeButton);
});

document.body.style.backgroundColor = "orange";
