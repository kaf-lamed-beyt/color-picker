chrome.runtime.onInstalled.addListener(() => {
  console.log("Background script is running omo ope");
});

// getColorsScript = (tab) => {
//   const { id, url } = tab;

//   chrome.scripting.executeScript({
//     target: { tabId: id, allFrames: true },
//     files: ["index.js"],
//   });

//   console.log(`loading: ${url}`);
// };

getColorsScript = async (tab) => {
  const { id, url } = tab;
  const [tab_] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab_.id, allFrames: true },
      func: () => {
        const elements = document.getElementsByTagName("*");
        const colorArray = [];

        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          const computedStyle = window.getComputedStyle(element);

          const color =
            computedStyle.getPropertyValue("color") ||
            computedStyle.getPropertyValue("background") ||
            computedStyle.getPropertyValue("background-color");

          if (!color || colorArray.includes(color)) continue;
          colorArray.push(color);
        }

        return colorArray;
      },
    },
    (result) => {
      console.log(result);
    }
  );
};

getCurrentTab = async () => {
  let queryOptions = { active: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
};

getCurrentTab().then((tab) => {
  getColorsScript(tab);
});
