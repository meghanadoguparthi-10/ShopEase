const products = [
{
id:1,
name:"Running Shoes",
price:2999,
rating:"★★★★☆",
category:"Fashion",
discount:"20% OFF",
image: "images/shoes.jpg"
},
{
id:2,
name:"Smart Watch",
price:4999,
rating:"★★★★★",
category:"Electronics",
discount:"15% OFF",
image:"images/watch.png"
},
{
id:3,
name:"Headphones",
price:1999,
rating:"★★★★☆",
category:"Electronics",
discount:"30% OFF",
image:"images/headphones.png"
},
{
id:4,
name:"T-Shirt",
price:999,
rating:"★★★★☆",
category:"Fashion",
discount:"10% OFF",
image:"images/T-Shirt.png"
},
{
id:5,
name:"Backpack",
price:1499,
rating:"★★★★★",
category:"Accessories",
discount:"25% OFF",
image:"images/backpack.png"
},
{
id:6,
name:"Laptop",
price:55999,
rating:"★★★★★",
category:"Electronics",
discount:"18% OFF",
image:"images/laptop.png"
}
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productContainer=document.getElementById("products");
const cartItems=document.getElementById("cartItems");
const total=document.getElementById("total");
const count=document.getElementById("count");

function displayProducts(){

productContainer.innerHTML="";

products.forEach(product=>{

productContainer.innerHTML+=`

<div class="card">

<span class="badge">${product.discount}</span>

<img src="${product.image}">

<div class="card-content">

<h3>${product.name}</h3>

<span class="wishlist" onclick="toggleWishlist(this)">🤍</span>

</div>

<p class="rating">${product.rating}</p>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>
<button onclick="buyNow(${product.id})">
Buy Now
</button>
</div>

`;

});

}

function addToCart(id){

const product=products.find(item=>item.id===id);

cart.push(product);

updateCart();

}


function updateCart(){

cartItems.innerHTML="";

let totalPrice=0;

cart.forEach((item,index)=>{

totalPrice+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<p>${item.name}</p>

<p>₹${item.price}</p>

<button onclick="removeFromCart(${index})" class="remove-btn">❌</button>

</div>

`;

});

total.innerText=totalPrice;

count.innerText=cart.length;

localStorage.setItem("cart", JSON.stringify(cart));

}

displayProducts();
updateCart();
function searchProducts(){

const value=document.getElementById("search").value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const name=card.querySelector("h3").innerText.toLowerCase();

if(name.includes(value))
card.style.display="block";
else
card.style.display="none";

});

}
function toggleWishlist(element){

if(element.innerHTML==="🤍"){
    element.innerHTML="❤️";
}
else{
    element.innerHTML="🤍";
}

}
function removeFromCart(index){

cart.splice(index,1);

updateCart();

}
function filterProducts(category){

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

if(category==="All"){
    card.style.display="block";
}
else if(products[index].category===category){
    card.style.display="block";
}
else{
    card.style.display="none";
}

});

}
function buyNow(id){

window.location.href="checkout.html";

}