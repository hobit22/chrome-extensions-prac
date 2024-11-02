// 확장 프로그램 설치 시 컨텍스트 메뉴 생성
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "saveImageUrl",
      title: "이미지 URL 저장",
      contexts: ["image"]
    });
  });
  
  // 컨텍스트 메뉴 클릭 시 URL 저장
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "saveImageUrl" && info.srcUrl) {
      chrome.storage.local.get({ images: [] }, (result) => {
        const images = result.images;
        images.push(info.srcUrl);
        chrome.storage.local.set({ images: images }, () => {
          console.log("Image URL saved:", info.srcUrl);
        });
      });
    }
  });
  
  // 확장 프로그램 아이콘 클릭 시 사이드바 표시를 위한 content script 실행
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  });
  