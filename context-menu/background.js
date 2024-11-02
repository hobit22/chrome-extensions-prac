// 확장 프로그램이 설치되었을 때 우클릭 메뉴 생성
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "copyImageUrl",
      title: "이미지 URL 복사",
      contexts: ["image"]
    });
  });
  
  // 사용자가 메뉴 항목을 클릭했을 때의 동작 정의
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "copyImageUrl" && info.srcUrl) {
      // 이미지의 URL을 클립보드에 복사
      navigator.clipboard.writeText(info.srcUrl).then(() => {
        console.log("Image URL copied to clipboard:", info.srcUrl);
      }).catch((err) => {
        console.error("Failed to copy image URL:", err);
      });
    }
  });