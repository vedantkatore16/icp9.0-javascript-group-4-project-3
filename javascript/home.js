const products = [
    {
        "category": " Women Ethnic Wear",
        "items": [
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/fashion-page/sadi1.png" },
            { "name": "Beyond the Match: A Neon Floral Georgette Saree", "price": "Under ₹499", "image": "./images/fashion-page/sadi2.png" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/fashion-page/sadi3.png" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/fashion-page/sadi4.png" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/fashion-page/sadi5.png" },
     ]
    },
    {
    "category": " furniture",
        "items": [
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/furniture/table5.jpg" },
            { "name": "Beyond the Match: A Neon Floral Georgette Saree", "price": "Under ₹499", "image": "./images/furniture/studyTable.jpg" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/furniture/chair2.jpg" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/furniture/bed3.jpg" },
            { "name": "Self Design Bollywood Net Saree", "price": "From ₹699", "image": "./images/furniture/temple1.jpg" },
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