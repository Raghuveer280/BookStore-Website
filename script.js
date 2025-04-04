// Sample book data
const books = [
    { title: 'Book Title 1', price: 20 },
    { title: 'Book Title 2', price: 25 },
];

// Cart array to hold selected books
let cart = [];

// Add to cart function
function addToCart(bookIndex) {
    const book = books[bookIndex];
    cart.push(book);
    alert(`${book.title} added to cart!`);
    updateCart();
}

// Remove from cart function
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Update cart display
function updateCart() {
    const cartTableBody = document.querySelector('#cart-body');
    const totalPriceElement = document.querySelector('#total-price');
    
    // Clear previous content
    cartTableBody.innerHTML = '';
    let total = 0;
    
    // Populate with new cart items
    cart.forEach((item, index) => {
        total += item.price;
        cartTableBody.innerHTML += `
            <tr>
                <td>${item.title}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><button onclick="removeFromCart(${index})">Remove</button></td>
            </tr>
        `;
    });
    
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}
