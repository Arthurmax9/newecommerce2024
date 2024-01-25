document.addEventListener("DOMContentLoaded", function () {
    // Array de produtos (substitua pelos dados do seu banco de dados)
    const products = [
        {
            id: 1,
            image: "https://cdn.awsli.com.br/2500x2500/804/804293/produto/182078271/2180237753.jpg",
            description: "skate",
            price: 19.99
        },
        {
            id: 2,
            image: "https://www.futureskateboards.com.br/cdn/shop/files/Shape-Marfim-Future-Infinity-Vermelho-8.1.jpg?v=1695407174&width=1024",
            description: "Product 2 Description",
            price: 29.99
        },
        {
            id: 3,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKmwVOvQkh2YHrAv1A8AaHoX_JIrUCPTpoA&usqp=CAU",
            description: "Product 2 Description",
            price: 29.99
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgvIiIEGw5_3ya2zu3Q__TZ7aad_7QL-WOOYeHjo3dve-E4hYgi5IPhI3cLFYhCzo7Pg&usqp=CAU",
            description: "Product 2 Description",
            price: 29.99
        },
        {
            id: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_bcGg9T1mFspOwCR2Fvel9ZRF8X2btaZLr95MWg_9vFAhQIHJii9lQ7nBU6n58SRKCM&usqp=CAU",
            description: "skate santa cruz",
            price: 29.99
        },
        {
            id: 6,
            image: "https://scamskate.com/cdn/shop/products/Santa-Cruz-Obscure-Dot-Mini-Complete-7-75-green_1200x1200.jpg?v=1642544779",
            description: "Skate santa cruz",
            price: 29.99
        },
        {
            id: 6,
            image: "https://scamskate.com/cdn/shop/products/Santa-Cruz-Obscure-Dot-Mini-Complete-7-75-green_1200x1200.jpg?v=1642544779",
            description: "Skate santa cruz",
            price: 29.99
        },
        {
            id: 6,
            image: "https://scamskate.com/cdn/shop/products/Santa-Cruz-Obscure-Dot-Mini-Complete-7-75-green_1200x1200.jpg?v=1642544779",
            description: "Skate santa cruz",
            price: 29.99
        },
        // Adicione mais produtos conforme necessário
    ];
    const cartPanel = document.getElementById("cartPanel");
    const cartItemsContainer = document.getElementById("cartItems");
    let cartCount = 0;
    
    function toggleCarPanel() {
        var carPanel = document.getElementById('carPanel');
        if (carPanel.style.width === '250px') {
          carPanel.style.width = '0';
        } else {
          carPanel.style.width = '250px';
        }
      }
    
    function addToCart(product) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `<p>${product.description} - $${product.price.toFixed(2)}</p>`;
        cartItemsContainer.appendChild(cartItem);
    
        cartCount++;
        document.getElementById("cartCount").textContent = cartCount;
    }
    
    function renderProducts() {
        const productSection = document.getElementById("productSection");
    
        productSection.innerHTML = "";
    
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.id = `product_${product.id}`;
    
            const imageElement = document.createElement("img");
            imageElement.src = product.image;
            productDiv.appendChild(imageElement);
    
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = product.description;
            productDiv.appendChild(descriptionElement);
    
            const priceElement = document.createElement("p");
            priceElement.textContent = `$${product.price.toFixed(2)}`;
            productDiv.appendChild(priceElement);
    
            const addToCartButton = document.createElement("button");
            addToCartButton.textContent = "Adicionar ao Carrinho";
            addToCartButton.addEventListener("click", () => {
                alert(`Produto "${product.description}" adicionado ao carrinho.`);
                addToCart(product);
            });
            productDiv.appendChild(addToCartButton);
    
            productSection.appendChild(productDiv);
        });
    }
    
    renderProducts();
});