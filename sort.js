let products = {
    data: [
      {
        productName: "Test Product Phone1",
        category: ["phones", "bestseller"],
        price: "30",
        image: "product.png",
        link: "product-page.html",
      },
      {
        productName: "Test Product Computer1",
        category: ["computer", "onsale"],
        price: "49",
        image: "product.png",
        link: "product-page.html",
      },
      {
        productName: "Test Product Wearable1",
        category: ["wearables", "onsale"],
        price: "99",
        image: "product.png",
        link: "product-page.html",
      },
      {
        productName: "Test Product Camera1",
        category: ["camera", "bestseller"],
        price: "29",
        image: "product.png",
        link: "product-page.html",
      },
      {
        productName: "Test Product Phone2",
        category: ["phone", "bestseller"],
        price: "129",
        image: "product.png",
        link: "product-page.html",
      },
      {
        productName: "Test Product Audio&Video1",
        category: ["audiovideo", "onsale"],
        price: "89",
        image: "product.png",
        link: "product-page.html",
      },
      {
        productName: "Test Product Phone3",
        category: ["phone", "onsale"],
        price: "189",
        image: "product.png",
        link: "product-page.html",
      },
      {
        productName: "Test Product computer2",
        category: ["computer", "bestseller"],
        price: "49",
        image: "product.png",
        link: "product-page.html",
      },
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
      //Add an event listener to the card
     card.addEventListener("click", function() {
    //Add your desired action here, such as redirecting to the product's detail page
        window.location.href = i.link;
    });
    //Card should have category and should stay hidden initially
    card.classList.add("card", ...i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        let categories = value.split(",");
        let containsAllCategories = true;
        categories.forEach((category) => {
          if (!element.classList.contains(category)) {
            containsAllCategories = false;
          }
        });
        if (containsAllCategories) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  

  