// Generate 1200 products dynamically
function generateProducts(count) {
  const products = [];
  const categories = ["Electronics", "Books", "Clothing", "Home", "Toys"];
  for (let i = 1; i <= count; i++) {
    const category = categories[i % categories.length];
    products.push({
      id: i,
      name: `${category} Product #${i}`,
      price: (Math.random() * 500 + 10).toFixed(2),
      description: `This is a description for ${category} Product #${i}. High quality and reliable.`,
      image: `https://picsum.photos/seed/${i}/200/150`,
    });
  }
  return products;
}

const products = generateProducts(1200);

const productListEl = document.getElementById("product-list");
const cartCountEl = document.getElementById("cart-count");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const checkoutPage = document.getElementById("checkout-page");
const checkoutBtn = document.getElementById("checkout-btn");
const closeCheckoutBtn = document.getElementById("close-checkout");
const placeOrderBtn = document.getElementById("place-order");
const loginArea = document.getElementById("login-area");

const productModal = document.getElementById("product-modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalDescription = document.getElementById("modal-description");
const modalPrice = document.getElementById("modal-price");
const modalAddCartBtn = document.getElementById("modal-add-cart");

let cart = [];
let filteredProducts = [...products];
let loggedInUser = localStorage.getItem("loggedInUser") || null;
let selectedProduct = null;

const PRODUCTS_PER_PAGE = 20;
let currentPage = 1;

function renderProductsPage(page = 1) {
  productListEl.innerHTML = "";
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const productsToRender = filteredProducts.slice(start, end);

  productsToRender.forEach((product) => {
    const productEl = document.createElement("div");
    productEl.classList.add("product");
    productEl.setAttribute("data-id", product.id);
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${Number(product.price).toFixed(2)}</p>
      <button class="add-cart-btn">Add to Cart</button>
    `;
    productListEl.appendChild(productEl);

    productEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("add-cart-btn")) return;
      openProductModal(product.id);
    });

    productEl.querySelector(".add-cart-btn").addEventListener("click", () => {
      addToCart(product.id);
    });
  });

  renderPaginationControls();
}

function renderPaginationControls() {
  const paginationContainerId = "pagination";
  const paginationContainer = document.getElementById(paginationContainerId);
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) {
      btn.disabled = true;
      btn.style.fontWeight = "bold";
    }
    btn.addEventListener("click", () => {
      currentPage = i;
      renderProductsPage(currentPage);
      window.scrollTo(0, 0); // scroll top on page change
    });
    paginationContainer.appendChild(btn);
  }
}

function addToCart(productId) {
  if (!loggedInUser) {
    alert("Please login first!");
    return;
  }
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartItemsEl.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity}`;
    const priceSpan = document.createElement("span");
    priceSpan.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
    li.appendChild(priceSpan);
    cartItemsEl.appendChild(li);
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalEl.textContent = total.toFixed(2);
}

function openProductModal(productId) {
  selectedProduct = products.find((p) => p.id === productId);
  modalImage.src = selectedProduct.image;
  modalImage.alt = selectedProduct.name;
  modalName.textContent = selectedProduct.name;
  modalDescription.textContent = selectedProduct.description;
  modalPrice.textContent = Number(selectedProduct.price).toFixed(2);
  productModal.classList.remove("hidden");
}

function closeProductModal() {
  productModal.classList.add("hidden");
  selectedProduct = null;
}

function searchProducts() {
  const query = searchInput.value.trim().toLowerCase();
  filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query)
  );
  currentPage = 1;
  applySort();
}

function applySort() {
  const sortValue = sortSelect.value;
  if (sortValue === "price-asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  renderProductsPage(currentPage);
}

function showCheckoutPage() {
  if (!loggedInUser) {
    alert("Please login first!");
    return;
  }
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  checkoutPage.classList.remove("hidden");
}

function closeCheckoutPage() {
  checkoutPage.classList.add("hidden");
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Order placed! Thank you for shopping.");
  cart = [];
  updateCartUI();
  closeCheckoutPage();
}

function updateLoginArea() {
  if (loggedInUser) {
    loginArea.innerHTML = `
      <span>Welcome, ${loggedInUser}</span>
      <button id="logout-btn">Logout</button>
    `;
    document.getElementById("logout-btn").addEventListener("click", () => {
      loggedInUser = null;
      localStorage.removeItem("loggedInUser");
      updateLoginArea();
    });
  } else {
    loginArea.innerHTML = `<button id="login-btn">Login</button>`;
    document.getElementById("login-btn").addEventListener("click", showLoginPrompt);
  }
}

function showLoginPrompt() {
  const username = prompt("Enter your username to login:");
  if (username && username.trim().length > 0) {
    loggedInUser = username.trim();
    localStorage.setItem("loggedInUser", loggedInUser);
    updateLoginArea();
    alert(`Logged in as ${loggedInUser}`);
  } else {
    alert("Invalid username!");
  }
}

modalAddCartBtn.addEventListener("click", () => {
  if (selectedProduct) {
    addToCart(selectedProduct.id);
    closeProductModal();
  }
});

modalCloseBtn.addEventListener("click", closeProductModal);

checkoutBtn.addEventListener("click", showCheckoutPage);
closeCheckoutBtn.addEventListener("click", closeCheckoutPage);
placeOrderBtn.addEventListener("click", placeOrder);

searchInput.addEventListener("input", searchProducts);
sortSelect.addEventListener("change", applySort);

// Initial render
updateLoginArea();
applySort();
updateCartUI();
