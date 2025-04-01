const products =[
    {
      "id": 1,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-men.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
      "quantity": 3
    },
    {
      "id": 2,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-polo-women.png",
      "name": "Blue Polo",
      "type": "Polo",
      "price": 350,
      "currency": "INR",
      "color": "Blue",
      "gender": "Women",
      "quantity": 3
    },
    {
      "id": 3,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/pink-polo-women.png",
      "name": "Pink Polo",
      "type": "Polo",
      "price": 350,
      "currency": "INR",
      "color": "Pink",
      "gender": "Women",
      "quantity": 6
    },
    {
      "id": 4,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-hoodie-men.png",
      "name": "Black Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
      "quantity": 2
    },
    {
      "id": 5,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/green-polo-men.png",
      "name": "Green Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Green",
      "gender": "Men",
      "quantity": 1
    },
    {
      "id": 6,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/green-polo-women.png",
      "name": "Green Polo",
      "type": "Polo",
      "price": 350,
      "currency": "INR",
      "color": "Green",
      "gender": "Women",
      "quantity": 1
    },
    {
      "id": 7,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-hoodie-women.png",
      "name": "Blue Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Blue",
      "gender": "Women",
      "quantity": 2
    },
    {
      "id": 8,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-hoodie-women.png",
      "name": "Black Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Black",
      "gender": "Women",
      "quantity": 5
    },
    {
      "id": 9,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-round-men.png",
      "name": "Blue Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "Blue",
      "gender": "Men",
      "quantity": 2
    },
    {
      "id": 10,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/red-round-women.png",
      "name": "Red Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "Red",
      "gender": "Women",
      "quantity": 2
    },
    {
      "id": 11,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-round-men.png",
      "name": "Grey Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "Grey",
      "gender": "Men",
      "quantity": 1
    },
    {
      "id": 12,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/purple-hoodie-women.png",
      "name": "Purple Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Purple",
      "gender": "Women",
      "quantity": 3
    },
    {
      "id": 13,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-round-women.png",
      "name": "Grey Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "Grey",
      "gender": "Women",
      "quantity": 1
    },
    {
      "id": 14,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-round-women.png",
      "name": "White Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "White",
      "gender": "Women",
      "quantity": 0
    },
    {
      "id": 15,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-round-men.png",
      "name": "Black Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "Black",
      "gender": "Men",
      "quantity": 7
    },
    {
      "id": 16,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/purple-round-men.png",
      "name": "Purple Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "Purple",
      "gender": "Men",
      "quantity": 1
    },
    {
      "id": 17,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-round-men.png",
      "name": "White Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "White",
      "gender": "Men",
      "quantity": 2
    },
    {
      "id": 18,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-round-women.png",
      "name": "Blue Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "Blue",
      "gender": "Women",
      "quantity": 3
    },
    {
      "id": 19,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/yellow-hoodie-women.png",
      "name": "Yellow Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Yellow",
      "gender": "Women",
      "quantity": 1
    },
    {
      "id": 20,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-polo-women.png",
      "name": "White Polo",
      "type": "Polo",
      "price": 350,
      "currency": "INR",
      "color": "White",
      "gender": "Women",
      "quantity": 4
    },
    {
      "id": 21,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/red-polo-men.png",
      "name": "Red Polo",
      "type": "Polo",
      "price": 250,
      "currency": "INR",
      "color": "Red",
      "gender": "Men",
      "quantity": 2
    },
    {
      "id": 22,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/blue-hoodie-men.png",
      "name": "Blue Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Blue",
      "gender": "Men",
      "quantity": 0
    },
    {
      "id": 23,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-hoodie-men.png",
      "name": "Grey Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "Grey",
      "gender": "Men",
      "quantity": 2
    },
    {
      "id": 24,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-polo-men.png",
      "name": "Grey Polo",
      "type": "Polo",
      "price": 300,
      "currency": "INR",
      "color": "Grey",
      "gender": "Men",
      "quantity": 3
    },
    {
      "id": 25,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/red-hoodie-men.png",
      "name": "Red Hoodie",
      "type": "Hoodie",
      "price": 300,
      "currency": "INR",
      "color": "Red",
      "gender": "Men",
      "quantity": 0
    },
    {
      "id": 26,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-polo-men.png",
      "name": "White Polo",
      "type": "Polo",
      "price": 300,
      "currency": "INR",
      "color": "White",
      "gender": "Men",
      "quantity": 1
    },
    {
      "id": 27,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/white-hoodie-women.png",
      "name": "White Hoodie",
      "type": "Hoodie",
      "price": 500,
      "currency": "INR",
      "color": "White",
      "gender": "Women",
      "quantity": 3
    },
    {
      "id": 28,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/grey-round-men.png",
      "name": "Grey Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "Grey",
      "gender": "Men",
      "quantity": 0
    },
    {
      "id": 29,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-round-women.png",
      "name": "Black Round",
      "type": "Basic",
      "price": 300,
      "currency": "INR",
      "color": "Black",
      "gender": "Women",
      "quantity": 0
    },
    {
      "id": 30,
      "imageURL": "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/black-polo-women.png",
      "name": "Black Polo",
      "type": "Polo",
      "price": 300,
      "currency": "INR",
      "color": "Black",
      "gender": "Women",
      "quantity": 4
    }
  ]
  // Sample product data from JSON
 

// Helper function to get selected filter values
function getSelectedValues(name) {
  const selectedValues = [];
  document.querySelectorAll(`input[name="${name}"]:checked`).forEach(checkbox => {
      selectedValues.push(checkbox.value);
  });
  return selectedValues;
}

// Render product cards based on the filtered data
function renderCatalogue(filteredData) {
  const container = document.getElementById('productContainer');
  container.innerHTML = '';

  filteredData.forEach(item => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
          <img src="${item.imageURL}" alt="${item.name}" />
          <h5>${item.name}</h5>
          <p>₹${item.price}</p>
          <p>Stock: ${item.quantity}</p>
      `;

      container.appendChild(productCard);
  });
}

// Apply filters based on selected options
function applyFilters() {
  const selectedColors = getSelectedValues('color');
  const selectedGenders = getSelectedValues('gender');
  const selectedPrices = getSelectedValues('price');
  const selectedTypes = getSelectedValues('type');

  const filteredData = products.filter(item => {
      const isColorMatch = selectedColors.length === 0 || selectedColors.includes(item.color);
      const isGenderMatch = selectedGenders.length === 0 || selectedGenders.includes(item.gender);
      const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some(price => {
          if (price === '0-250') return item.price <= 250;
          if (price === '251-400') return item.price > 250 && item.price <= 400;
          if (price === '401-500') return item.price > 400 && item.price <= 500;
          if (price === '500+') return item.price > 500;
          return false;
      });
      const isTypeMatch = selectedTypes.length === 0 || selectedTypes.includes(item.type);

      return isColorMatch && isGenderMatch && isPriceMatch && isTypeMatch;
  });

  renderCatalogue(filteredData);
}

// Add event listeners to filter checkboxes
function setupFilterListeners() {
  const filterElements = document.querySelectorAll('input[type="checkbox"]');
  filterElements.forEach(element => {
      element.addEventListener('change', applyFilters);
  });
}

// Initial setup when the page loads
function init() {
  renderCatalogue(products);  // Show all products initially
  setupFilterListeners();      // Set up filter listeners
}

// Initialize on page load
window.onload = init;
