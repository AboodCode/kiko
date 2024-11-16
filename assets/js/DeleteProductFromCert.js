document.querySelectorAll('.fa-trash').forEach(button => {
    button.addEventListener('click', function(event) {
        const nameofproduct = this.closest('tr').querySelector('h2');
        const priceofproduct = this.closest('tr').querySelector('.priceproduct');
        
        let found = false; // متغير لتتبع ما إذا تم العثور على القيمة
        const valueToFind = nameofproduct.textContent; // القيمة التي نبحث عنها



// القيمة التي تبحث عنها
const targetValue = valueToFind; // على سبيل المثال، السعر

// متغير لتخزين المفاتيح المطابقة
let matchingKeys = [];

// استرجاع جميع المفاتيح من localStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    // تحويل القيمة من JSON إلى كائن
    const jsonObject = JSON.parse(value);
    
    // تحقق من وجود القيمة المطلوبة في الكائن
    if (jsonObject.name === targetValue) {
        matchingKeys.push(key); // إضافة المفتاح إلى القائمة
    }
}


// حلقة لحذف كل اسم من المصفوفة
matchingKeys.forEach(key => {
    localStorage.removeItem(key);
    alert("تم حذف الصنف من السلة");
    location.reload();
});
      
    });
});

// *****






