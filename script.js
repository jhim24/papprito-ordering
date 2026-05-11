let cart = [];

function addToCart(name,price){

    cart.push({
        name:name,
        price:price
    });

    updateCart();

}

function updateCart(){

    let cartItems =
    document.getElementById("cartItems");

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(item=>{

        total += item.price;

        cartItems.innerHTML += `

        <div style="
        display:flex;
        justify-content:space-between;
        margin:10px 0;
        ">

        <span>${item.name}</span>

        <span>₱${item.price}</span>

        </div>

        `;

    });

    document.getElementById("total")
    .innerHTML = `Total: ₱${total}`;

    document.getElementById("cartCount")
    .innerHTML = cart.length;

}

function openCart(){

    document.getElementById("cartModal")
    .style.display = "flex";

}

window.onclick = function(e){

    let modal =
    document.getElementById("cartModal");

    if(e.target == modal){

        modal.style.display = "none";

    }

}
