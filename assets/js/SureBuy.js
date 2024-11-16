let totTag = document.querySelector(".totele");
let countTag = document.querySelector(".countofcert");

let sum = 0;
let valueprice;

// استرجاع جميع المفاتيح من localStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    // تحويل القيمة من JSON إلى كائن
    const jsonObject = JSON.parse(value);

    // التأكد من أن الخاصية price موجودة
    if (jsonObject && jsonObject.price !== undefined) {
        valueprice = Number(jsonObject.price); // تحويل القيمة إلى رقم

        if (!isNaN(valueprice)) { // التأكد من أن القيمة صالحة كعدد
            sum += valueprice;
        } else {
            console.warn(`القيمة غير صالحة: ${jsonObject.price}`);
        }
    }
}

// الاسناد  
totTag.innerHTML = sum;
countTag.innerHTML = localStorage.length;

