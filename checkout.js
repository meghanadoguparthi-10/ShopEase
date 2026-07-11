document.getElementById("checkoutForm").addEventListener("submit", function(e){

    e.preventDefault();

    localStorage.removeItem("cart");

    window.location.href="success.html";

});