const products = [
    {
        "category": "",
        "items": [
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/fashion-page/sadi5.png" },
            { "name": "Beyond the Match: A Neon Floral Georgette Saree", "price": "Under ₹499", "image": "./images/fashion-page/sadi5.png" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/fashion-page/sadi5.png" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/fashion-page/sadi5.png" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/fashion-page/sadi5.png" },


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