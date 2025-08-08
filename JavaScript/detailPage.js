let prodID = localStorage.getItem("DetailId");
let DetailShow = document.querySelector(".detailContent");
let SelectedProducts = products.filter(product => product.id == prodID);
let SelectedProduct = SelectedProducts[0];
let SelectedDetail = productDetails.find(e => e.id == prodID);
DetailShow.innerHTML = `
  <img src="${SelectedProduct.image}" class="product-img" />
        <h3>${SelectedProduct.name}</h3>
        <div class="card-footer">
            <p class="text-container">Price: ${SelectedProduct.price}</p>
            
          <button class="addToCart" onclick="addCart(${SelectedProduct.id});">Add to cart</button>
            


            </div>
            <h1>Details</h1>
            <div class="Detail" style="padding-top: 20px;">
                
             <p>
${SelectedDetail.detail}
</p>

`;
if (!localStorage.getItem("loggedInUser")) {
        const btn = document.querySelector(".addToCart");
        btn.style.display = "none";
      }
