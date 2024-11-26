// script.js


// 모든 탭 버튼과 메뉴를 가져오기
const tabButtons = document.querySelectorAll('.tab-button'); // 탭 버튼들
const menus = document.querySelectorAll('.menu'); // 메뉴들

// 탭 클릭 이벤트
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab'); // 클릭된 탭의 data-tab 속성 값

        // 모든 탭 버튼에서 active 클래스 제거
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // 클릭된 탭 버튼에 active 클래스 추가
        button.classList.add('active');

        // 모든 메뉴를 숨기고 클릭된 탭에 해당하는 메뉴만 표시
        menus.forEach(menu => {
            if (menu.getAttribute('data-tab-content') === tab) {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        });
    });
});

// 메뉴의 "추가" 버튼 클릭 시
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
    const menuItem = e.target.parentElement;
    const name = menuItem.getAttribute('data-name');
    const price = menuItem.getAttribute('data-price');

    // 이미 장바구니에 있는지 확인
    const existingItem = cartItems.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name, price, quantity: 1 });
    }

    renderCart();
    });
});

// 장바구니 렌더링
function renderCart() {
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
    cart.style.display = 'none';
    } else {
    cart.style.display = 'block';

    cartItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <p>${item.name} (${item.price}원) x ${item.quantity}</p>
        <button class="increase">+</button>
        <button class="decrease">-</button>
        <button class="remove">x</button>
        `;

      // + 버튼
        div.querySelector('.increase').addEventListener('click', () => {
        item.quantity++;
        renderCart();
        });

      // - 버튼
        div.querySelector('.decrease').addEventListener('click', () => {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
          cartItems.splice(index, 1); // 수량이 0이면 삭제
        }
        renderCart();
        });

      // x 버튼
        div.querySelector('.remove').addEventListener('click', () => {
        cartItems.splice(index, 1);
        renderCart();
        });

        cartItemsContainer.appendChild(div);
    });
    }
}

// 장바구니 초기화
clearCartButton.addEventListener('click', () => {
    cartItems = [];
    renderCart();
});
