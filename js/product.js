// ===========================
// دریافت شناسه محصول
// ===========================

let url = new URLSearchParams(window.location.search);

let productId = Number(url.get("id"));

let selectedProduct = null;

// ===========================
// نمایش اطلاعات محصول
// ===========================

if (productId) {

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === productId) {

            selectedProduct = products[i];

            document.getElementById("productImage").src = selectedProduct.image;

            document.getElementById("productTitle").innerHTML = selectedProduct.title;

            document.getElementById("productPrice").innerHTML = selectedProduct.price;

            document.getElementById("productDescription").innerHTML =
                selectedProduct.description;

            break;

        }

    }

}

// ===========================
// افزودن به سبد خرید
// ===========================

let addBtn = document.getElementById("addToCart");

if(addBtn){

    addBtn.addEventListener("click",addToCart);

}

function addToCart(event){

    event.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let exist = false;

    for(let i=0;i<cart.length;i++){

        if(cart[i].id === selectedProduct.id){

            exist = true;

        }

    }

    if(!exist){

        cart.push(selectedProduct);

        localStorage.setItem("cart",JSON.stringify(cart));

        alert("✅ محصول با موفقیت به سبد خرید اضافه شد.");

    }

    else{

        alert("این محصول قبلاً به سبد خرید اضافه شده است.");

    }

}