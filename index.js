const button = document.querySelector("#get-colors");
const modal = document.querySelector(".color-modal");
const closeButton = document.querySelector("#close");

function createColorModal() {
  const modal = `
    <div class="color-modal">
      <div class="color-modal-content"></div>
      <button id="close">Close</button>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modal);
}

function getColors() {
  const elements = document.getElementsByTagName("*");
  const colorArray = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const computedStyle = window.getComputedStyle(element);

    const color =
      computedStyle.getPropertyValue("background-color") +
      "," +
      computedStyle.getPropertyValue("color") +
      "," +
      computedStyle.getPropertyValue("background");

    if (!color || colorArray.includes(color)) continue;
    colorArray.push(color);
  }

  return colorArray;
}

function renderColors(colors) {
  const modalContent = document.querySelector(".color-modal-content");

  colors.forEach((item, index) => {
    console.log(item);

    return (modalContent.innerHTML += `
      <div class="color-element" key=${index}>
        <span class="token" style="--bg: ${item}"></span>
        <p class="color-code">${item}</p>
      </div>
      `);
  });
}

createColorModal();

button.addEventListener("click", function () {
  const colors = getColor();
  renderColors(colors);

  modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
