// =======================
// تصاویر اسلایدر
// =======================

let sliderImages = [

    "images/slider1.jpg",
    "images/slider2.jpg",
    "images/slider3.jpg"

];

// =======================
// عنوان ها
// =======================

let sliderTitles = [

    "آموزش تخصصی عروسک سازی",

    "دوره های آنلاین بانوی هنر",

    "فروش عروسک های دست ساز"

];

// =======================
// شماره تصویر
// =======================

let currentSlide = 0;

// گرفتن عناصر صفحه

let sliderImage = document.getElementById("sliderImage");

let sliderTitle = document.getElementById("sliderTitle");

// اگر اسلایدر وجود داشت

if(sliderImage){

    setInterval(changeSlide,3000);

}

// تابع تغییر اسلاید

function changeSlide(){

    currentSlide++;

    if(currentSlide == sliderImages.length){

        currentSlide = 0;

    }

    sliderImage.src = sliderImages[currentSlide];

    sliderTitle.innerHTML = sliderTitles[currentSlide];

}