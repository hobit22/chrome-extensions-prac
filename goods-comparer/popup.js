document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const compareButton = document.getElementById('compareButton');
    const comparison = document.getElementById('comparison');
  
    function displayProducts() {
      chrome.storage.sync.get({products: []}, (data) => {
        productList.innerHTML = '';
        data.products.forEach((product, index) => {
          const productElement = document.createElement('div');
          productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="50">
            <span>${product.name}</span>
            <span>${product.price}</span>
            <button class="removeButton" data-index="${index}">삭제</button>
          `;
          productList.appendChild(productElement);
        });
      });
    }
  
    displayProducts();
  
    productList.addEventListener('click', (e) => {
      if (e.target.classList.contains('removeButton')) {
        const index = parseInt(e.target.getAttribute('data-index'));
        chrome.storage.sync.get({products: []}, (data) => {
          data.products.splice(index, 1);
          chrome.storage.sync.set({products: data.products}, displayProducts);
        });
      }
    });
  
    compareButton.addEventListener('click', () => {
      chrome.storage.sync.get({products: []}, (data) => {
        if (data.products.length < 2) {
          comparison.textContent = '비교할 상품이 충분하지 않습니다.';
          return;
        }
  
        let comparisonHTML = '<table><tr><th>상품명</th><th>가격</th></tr>';
        data.products.forEach(product => {
          comparisonHTML += `<tr><td>${product.name}</td><td>${product.price}</td></tr>`;
        });
        comparisonHTML += '</table>';
        comparison.innerHTML = comparisonHTML;
      });
    });
  });