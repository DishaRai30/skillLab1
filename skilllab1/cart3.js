const products = [
  {
    id: 1,
    name: 'Product 1',
    category: 'Electronics',
    image: 'product1.jpg',
    price: 20.99,
    rating: 4.5,
  },
  // Add more products as needed
];

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');

function renderProducts() {
  productList.innerHTML = '';
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  products.forEach((product) => {
    if (
      (product.name.toLowerCase().includes(searchTerm) || searchTerm === '') &&
      (selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory)
    ) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_751_ANC.jpg?v=1698909797" alt="$HeadPhone">
        <div class="product-info">
          <h3>HeadPhone</h3>
          <p>999</p>
          <div class="rating">Rating: 4.8</div>
        </div>
        <div class="actions">
          <button onclick="addToCart($12345)">Add to Cart</button>
        </div>
      `;
      productList.appendChild(productCard);
    }
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);

  const cartItem = document.createElement('li');
  cartItem.textContent = HeadPhone ;
  cartItems.appendChild(cartItem);
};

searchInput.addEventListener('input', renderProducts);
categoryFilter.addEventListener('change', renderProducts);

renderProducts();