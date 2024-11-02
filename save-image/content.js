// 사이드바가 이미 열려 있는지 확인
if (!document.getElementById("mySidebar")) {
    const sidebar = document.createElement("div");
    sidebar.id = "mySidebar";
  
    // 사이드바 HTML 설정
    sidebar.innerHTML = `
      <div class="sidebar-header">
        <h2>Saved Images</h2>
        <button id="closeSidebar">Close</button>
      </div>
      <div id="imageList"></div>
    `;
  
    // 사이드바 스타일 설정
    sidebar.classList.add("sidebar");
  
    // 닫기 버튼 기능
    sidebar.querySelector("#closeSidebar").addEventListener("click", () => {
      document.body.removeChild(sidebar);
    });
  
    // 페이지에 사이드바 추가
    document.body.appendChild(sidebar);
  
    // 저장된 이미지 URL 불러오기
    chrome.storage.local.get({ images: [] }, (result) => {
      const imageList = document.getElementById("imageList");
      result.images.forEach((url, index) => {
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("image-item");
  
        const img = document.createElement("img");
        img.src = url;
        img.classList.add("sidebar-image");
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
          // 이미지 URL 삭제
          chrome.storage.local.get({ images: [] }, (result) => {
            const images = result.images;
            images.splice(index, 1);
            chrome.storage.local.set({ images: images }, () => {
              imgContainer.remove();
            });
          });
        });
  
        imgContainer.appendChild(img);
        imgContainer.appendChild(deleteButton);
        imageList.appendChild(imgContainer);
      });
    });
  }
  