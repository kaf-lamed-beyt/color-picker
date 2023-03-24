// Listen for the extension to be installed or updated
chrome.runtime.onInstalled.addListener(function () {
  console.log("Extension installed or updated");
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message == "hello") {
    console.log("Hello from the content script!");
  }
});

// Execute some code on browser startup
chrome.runtime.onStartup.addListener(function () {
  console.log("Browser started");
});
