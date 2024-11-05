chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "addProduct") {
      chrome.storage.sync.get({products: []}, (data) => {
        const products = data.products;
        products.push(request.product);
        chrome.storage.sync.set({products: products}, () => {
          console.log("Product added to compare list");
        });
      });
    }
  });