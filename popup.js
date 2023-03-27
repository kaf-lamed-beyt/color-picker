// chrome.runtime.onInstalled.addListener(() => {
//   console.log("Background script is running omo ope");
// });

// getColorsScript = (tab) => {
//   const { id, url } = tab;

//   chrome.scripting.executeScript({
//     target: { tabId: id, allFrames: true },
//     files: ["index.js"],
//   });

//   console.log(`loading: ${url}`);
// };

// getCurrentTab = async () => {
//   let queryOptions = { active: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// };

// getCurrentTab().then((tab) => {
//   getColorsScript(tab);
// });

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["index.js"],
  });
});
