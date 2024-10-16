// استعراض جميع العناصر في localStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // الحصول على المفتاح
    const value = localStorage.getItem(key); // الحصول على القيمة
    const productData = JSON.parse(value); // تحويل السلسلة النصية إلى كائن

    // إنشاء عنصر كارد لعرض المعلومات
    const productContainer = document.createElement('tr');
    // productContainer.classList.add('product-item');

    productContainer.innerHTML = `

        
                    <td class="product-thumbnail df-wh">
                      <img src="${productData.image}" alt="${productData.name}" class="img-fluid">
                    </td>
                    <td class="product-name">
                      <h2 class="h5 text-black">${productData.name}</h2>
                    </td>
                    <td>${productData.price} <span>ر.ي</span></td>
                    <td>
                      <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                        
                        <div class="input-group-append">
                          <button class="btn btn-outline-black increase" type="button">&plus;</button>
                        </div>

                        <input type="text" class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">  

                        <div class="input-group-prepend">
                          <button class="btn btn-outline-black decrease" type="button">&minus;</button>
                        </div>
                      </div>
  
                    </td>
                    <td>${productData.price}</td>
                    <td><a href="#" class="btn btn-black btn-sm"><i class="fa-solid fa-trash"></i></a></td>
                  
        
    `;

    // إضافة الكارد إلى الصفحة
    document.getElementById('body-table').appendChild(productContainer);
}

// ------------ افراغ السلة
let clearBtn = document.querySelector(".clear-cert");

// تحقق من وجود الزر قبل إضافة الحدث
if (clearBtn) {
    clearBtn.onclick = function () {
        localStorage.clear();

        // رسالة تأكيد (اختياري)
        alert(" تم إفراغ  السلة بالكامل ^_^");
        
        // تحديث المحتوى المعروض (اختياري)
        document.getElementById('body-table').innerHTML = ''; // إفراغ محتوى الكاردات المعروضة
      location.reload();
      }
} else {
    console.log("الزر غير موجود في الصفحة.");
}

// ------ النهاية
// ,,,,,,,,,,,,,,,


// ---------------السلة فارغة!!
// تحديد عنصر table
let table = document.querySelector('table');

// التأكد من وجود الجدول
if (localStorage.length == 0) {
    // إضافة العنصر بعد الجدول
    table.insertAdjacentHTML('afterend', `
        <div class="patern-empty">
            <div class="all">
                <div class="img-ptrn"><img src="assets/img/img-svg/Add-to-Cart-amico.svg" alt=""></div>
                <p>اوبس!! السلة فارغة</p>
                <div class="btnback"><a href="products.html">تسوق الان</a></div>
            </div>
        </div>
    `);
}

// ----------------




