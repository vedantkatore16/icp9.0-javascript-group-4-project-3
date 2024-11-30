const products = [
    {
        "category": "",
        "items": [
            { "name": "Helmet", "price": "From ₹699", "image": "../images/fashion-page/sadi1.png" },
            { "name": "Trendy Kurtas", "price": "Under ₹499", "image": "../images/fashion-page/sadi1.png" }

        ]
    }
];
displayProducts()
function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(category => {
        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category.category;
        productList.appendChild(categoryTitle);

        category.items.forEach(item => {
            const product = document.createElement("div");
            product.classList.add("product");

            product.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h2>${item.name}</h2>
                <p>${item.price}</p>
            `;

            productList.appendChild(product);
        });
    });
}