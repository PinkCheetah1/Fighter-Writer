chrome.tabs.onUpdate.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("docs.google.com/document")) {
        const queryParameters = tab.url.split("/d/")[1]; // This gets me the individual id for the doc?
        const urlParameters = new URLSearchParams(queryParameters);
    }
})