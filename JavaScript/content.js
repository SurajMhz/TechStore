function idElement(idData) {
  const container = document.getElementById(idData);
  if (!container) {
    console.warn(`Container with id "${idData}" not found.`);
    return; // Stop if container doesn't exist
  }

  // Clear previous content to avoid duplicate cards on multiple calls
  container.innerHTML = "";

  // Filter products by category matching idData
  const filteredProducts = products.filter(product => product.category.includes(idData));
  let count = 0;

  filteredProducts.forEach(product => {
    // Show all products if page is 'all'
    // If on main page, show max 3 products per category
    if (page === "all" || (page === "main" && count < 3)) {
      const card = document.createElement("div");
      card.className = "grid-item";
      // let displaytext;
      // if (!localStorage.getItem("loggedInUser")) {
      //   displaytext = "LOG In First"
      // }
      // else {
      //   displaytext = "Add to Cart"
      // }

      card.innerHTML = `
        <a href="dertail.html" onclick="Setdetail(${product.id});"><img src="${product.image}" alt="${product.name}" class="product-img" /></a>
        <h3>${product.name}</h3>
        <div class="card-footer">
          <p class="text-container">Price: $${product.price}</p>

          <button class="addToCart " onclick="
          addCart(${product.id});
          ">Add To Cart</button>

        </div>
      `;
      if (!localStorage.getItem("loggedInUser")) {
        const btn = card.querySelector(".addToCart");
        btn.style.display = "none";
        // btn.classList.remove("addToCart");
        // btn.classList.add("removeItem");
        // btn.disabled = true; // optional to prevent clicking
      }

      container.appendChild(card);
      count++;
    }
  });
}
function Setdetail(id) {
  localStorage.setItem("DetailId", id);
  console.log(products.id)
}
