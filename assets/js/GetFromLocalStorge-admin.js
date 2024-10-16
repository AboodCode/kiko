// استعراض جميع العناصر في localStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // الحصول على المفتاح
    const value = localStorage.getItem(key); // الحصول على القيمة
    const productData = JSON.parse(value); // تحويل السلسلة النصية إلى كائن

    // إنشاء عنصر كارد لعرض المعلومات
    const productContainer = document.createElement('tr');
    // productContainer.classList.add('product-item');

    productContainer.innerHTML = `

        
                    <tr>
                    <td class="product-thumbnail df-wh">
                      <img src="${productData.image}" alt="Image" class="img-fluid">
                    </td>
                    <td class="product-name">
                      <h2 class="h5 text-black">${productData.name}</h2>
                    </td>
                    <td>${productData.price} <span>ر.ي</span></td>
                    <td>2</td>
                    <td>${productData.price} <span>ر.ي</span></td>
                    <td><a href="done-order-admin.html" class="btn btn-black btn-sm"><i class="fa-solid fa-money-bill-wave-alt"></i></a></td>
                    <td><a href="details-order-admin.html" class="btn btn-black btn-sm"><i class="fa-solid fa-info-circle"></i></a></td>
                    <td><a href="delete-order-admin.html" class="btn btn-black btn-sm"><i class="fa-solid fa-trash"></i></a></td>
                  </tr>
                  
        
    `;

    // إضافة الكارد إلى الصفحة
    document.getElementById('body-table').appendChild(productContainer);
}


