// 사이드바가 이미 열려 있는지 확인
if (!document.getElementById("mySidebar")) {
    // 사이드바를 위한 div 요소 생성
    const sidebar = document.createElement("div");
    sidebar.id = "mySidebar";
    
    // 사이드바 콘텐츠 추가
    sidebar.innerHTML = `
      <h2>Sidebar Content</h2>
      <p>This is a custom sidebar</p>
      <button id="closeSidebar">Close</button>
    `;
    
    // 사이드바 스타일 설정 (CSS 파일과 함께 사용 가능)
    sidebar.style.position = "fixed";
    sidebar.style.top = "0";
    sidebar.style.right = "0";
    sidebar.style.width = "300px";
    sidebar.style.height = "100%";
    sidebar.style.backgroundColor = "#f1f1f1";
    sidebar.style.boxShadow = "-2px 0 5px rgba(0,0,0,0.5)";
    sidebar.style.zIndex = "10000";
    sidebar.style.padding = "20px";
    
    // 닫기 버튼 동작 설정
    sidebar.querySelector("#closeSidebar").addEventListener("click", () => {
      document.body.removeChild(sidebar);
    });
    
    // 페이지에 사이드바 추가
    document.body.appendChild(sidebar);
  }
  