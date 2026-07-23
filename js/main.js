// ==========================
// نمایش دوره ها
// ==========================

let courseContainer = document.getElementById("courseContainer");

if (courseContainer) {

    let count = courses.length;

    if (window.location.pathname.includes("index.html") || window.location.pathname == "/") {

        count = 3;

    }

    for (let i = 0; i < count; i++) {

        courseContainer.innerHTML += `

        <div class="card">

            <img src="${courses[i].image}" alt="${courses[i].title}">

            <div class="card-body">

                <h3>${courses[i].title}</h3>

                <p>مدرس: ${courses[i].teacher}</p>

                <p class="price">${courses[i].price}</p>

                <a href="courses.html" class="buy">

                    مشاهده دوره

                </a>

            </div>

        </div>

        `;

    }

}

// ==========================
// نمایش محصولات
// ==========================

let productContainer = document.getElementById("productContainer");

if (productContainer) {

    for (let i = 0; i < products.length; i++) {

        productContainer.innerHTML += `

        <div class="card">

            <img src="${products[i].image}" alt="${products[i].title}">

            <div class="card-body">

                <h3>${products[i].title}</h3>

                <p class="price">

${products[i].price} هزار تومان

</p>

                <a href="product.html?id=${products[i].id}" class="buy">

                    مشاهده محصول

                </a>

            </div>

        </div>

        `;

    }

}