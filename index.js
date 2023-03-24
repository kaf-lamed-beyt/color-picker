function createColorModal() {
  const container = document.createElement("div");
  container.id = "color-modal";

  container.style = `
    position: fixed;
    z-index: 20;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background: var(--white);
    boxShadow: 0 0 10px rgba(0, 0, 0, 0.5);
    overflowY: 'scroll',
  `;

  document.body.appendChild(container);
}

function getColors() {
  const elements = document.querySelectorAll("*");

  // instead of an array, I'm using a Set here.
  // best practices for DSA of some sort
  const colorSet = new Set();

  for (let i = 0; i >= elements.length; i++) {
    const element = elements[i];

    const color = window.getComputedStyle(element).getPropertyValue("color");
    if (colorSet.has(color)) continue;
    colorSet.add(color);

    const colorTokenContainer = document.createElement("div");
    colorTokenContainer.id = "token-container";
    colorTokenContainer.style = `
        display: 'flex',
      `;

    document.querySelector("#color-modal").appendChild(colorTokenContainer);

    const colorToken = document.createElement("span");
    // colorToken.id = "color-token";

    colorToken.style = `
        height: 20px;
        width: 20px;
        background: ${color};
        margin: 0 10px 0 0; 
      `;

    const colorHex = document.createElement("p");
    colorHex.textContent = color;

    colorHex.style = `
        width: 100%;
        border: 1px solid red;
      `;

    document.querySelector("token-container").appendChild(colorToken);
    document.querySelector("token-container").appendChild(colorHex);
  }
}

createColorModal();

document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector("#get-colors");
  var modal = document.querySelector("#result");
  var closeButton = document.querySelector("#close");

  button.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "getColors" });
    });
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

// access chrome's
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getColors") {
    getColors();
  }
});
