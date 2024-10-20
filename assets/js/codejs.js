// ----------------------------------------------
//   تغيير لون الليبول  لما ارفق الصورة الاولى
// ----------------------------------------------
const inputFileOne = document.getElementById('imgone');
const labelImgOne = document.querySelector('.labelimgone');

      inputFileOne.addEventListener('change', function() {
      if (inputFileOne.files.length > 0) {
        labelImgOne.classList.add('hasphoto'); // إضافة الفصل النشط
      } else {
        labelImgOne.classList.remove('hasphoto'); // إزالة الفصل النشط إذا لم يتم اختيار أي صورة
        }
});

// ----------------------------------------------
//   تغيير لون الليبول  لما ارفق الصورة الثانية
// ----------------------------------------------
const inputFileTwo = document.getElementById('imgtwo');
const labelImgTwo = document.querySelector('.labelimgtwo');

inputFileTwo.addEventListener('change', function() {
      if (inputFileTwo.files.length > 0) {
          labelImgTwo.classList.add('hasphoto'); // إضافة الفصل النشط
      } else {
          labelImgTwo.classList.remove('hasphoto'); // إزالة الفصل النشط إذا لم يتم اختيار أي صورة
        }
});

// ----------------------------------------------
//   تغيير لون الليبول  لما ارفق الصورة الثالثة
// ----------------------------------------------
const inputFileThree = document.getElementById('imgthree');
const labelImgThree = document.querySelector('.labelimgthree');

inputFileThree.addEventListener('change', function() {
      if (inputFileThree.files.length > 0) {
        labelImgThree.classList.add('hasphoto'); // إضافة الفصل النشط
      } else {
        labelImgThree.classList.remove('hasphoto'); // إزالة الفصل النشط إذا لم يتم اختيار أي صورة
        }
});

// -------------------------

