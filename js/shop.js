//=========================
// جستجوی محصولات
//=========================

let searchInput = document.getElementById("searchProduct");

if(searchInput){

    searchInput.addEventListener("keyup",searchProduct);

}

function searchProduct(){

    let text = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll("#productContainer .card");

    for(let i=0;i<products.length;i++){

        if(products[i].title.toLowerCase().includes(text)){

            cards[i].style.display="block";

        }

        else{

            cards[i].style.display="none";

        }

    }

}