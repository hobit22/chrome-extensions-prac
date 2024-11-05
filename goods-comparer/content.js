function addCompareButton() {
    const button = document.createElement('button');
    button.textContent = '비교 목록에 추가';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';
    
    button.addEventListener('click', () => {
      // todo product 가져오는 로직 수정
      const product = {
        name: document.querySelector('h1').textContent,
        price: document.querySelector('.price').textContent,
        image: document.querySelector('.product-image').src,
        url: window.location.href
      };
      
      chrome.runtime.sendMessage({action: "addProduct", product: product});
    });
    
    document.body.appendChild(button);
  }
  
  addCompareButton();