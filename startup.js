// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "jquery.js"});
    chrome.tabs.executeScript(null, {file: "bubble.js"});
});
