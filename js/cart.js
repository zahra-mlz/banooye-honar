//==========================
// سبد خرید
//==========================

let cartContainer = document.getElementById("cartContainer");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

showCart();

function showCart(){

    if(cart.length === 0){

        cartContainer.innerHTML = `

        <div class="empty-cart">

            <h3>سبد خرید شما خالی است.</h3>

        </div>

        `;

        return;

    }

    let total = 0;

    cartContainer.innerHTML = "";

    for(let i=0;i<cart.length;i++){

        let price = parseInt(cart[i].price);

        total += price;

        cartContainer.innerHTML += `

        <div class="card">

            <img src="${cart[i].image}" alt="${cart[i].title}">

            <div class="card-body">

                <h3>${cart[i].title}</h3>

                <p class="price">

                    ${cart[i].price}

                </p>

                <a href="#"

                class="buy"

                onclick="removeItem(${cart[i].id})">

                حذف محصول

                </a>

            </div>

        </div>

        `;

    }

    cartContainer.innerHTML += `

    <div class="cart-total">

        <h2>

        تعداد محصولات : ${cart.length}

        </h2>

        <h2>

        مبلغ تقریبی :

        ${total} هزار تومان

        </h2>

    </div>

    `;

}

//==========================
// حذف محصول
//==========================

function removeItem(id){

    cart = cart.filter(function(item){

        return item.id != id;

    });

    localStorage.setItem("cart",JSON.stringify(cart));

    showCart();

}