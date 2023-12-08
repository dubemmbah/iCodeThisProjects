"use strict";

const PRODUCTS = [
  {
    id: 1,
    productName: "Christmas Tree Decoration",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/6280/6280402.png?ga=GA1.1.1877106984.1699472407&semt=ais",
    isNew: true,
    discount: 0,
    price: 19.99,
    categories: ["ornaments", "new", "accessories"],
    colors: ["green"],
    sizes: ["small"],
  },
  {
    id: 2,
    productName: "Gift Box",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/2374/2374820.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: false,
    discount: 26,
    price: 9.99,
    categories: ["discount", "accessories"],
    colors: ["green", "red", "white", "brown"],
    sizes: ["small", "medium", "large"],
  },
  {
    id: 3,
    productName: "Gingerbread Man Cookie",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/977/977710.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: false,
    discount: 0,
    price: 12.99,
    categories: ["cookies", "candies"],
    colors: ["brown", "white"],
    sizes: ["small", "medium"],
  },
  {
    id: 4,
    productName: "Snowflake Decoration",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/6083/6083588.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: true,
    discount: 0,
    price: 4.99,
    categories: ["new", "ornaments"],
    colors: ["white"],
    sizes: ["small", "medium"],
  },
  {
    id: 5,
    productName: "Star-shaped cookie",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/2977/2977314.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: false,
    discount: 0,
    price: 12.99,
    categories: ["cookies", "candies"],
    colors: ["brown", "white"],
    sizes: ["large", "medium"],
  },
  {
    id: 6,
    productName: "Santa's hat",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/6235/6235085.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: false,
    discount: 0,
    price: 39.99,
    categories: ["accessories", "discount"],
    colors: ["red", "white"],
    sizes: ["large", "small"],
  },
  {
    id: 7,
    productName: "Candy cane",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/9028/9028306.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: true,
    discount: 0,
    price: 8.99,
    categories: ["candies", "new"],
    colors: ["red", "white"],
    sizes: ["medium", "small"],
  },
  {
    id: 8,
    productName: "Snowman decoration",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/1395/1395001.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: false,
    discount: 50,
    price: 39.99,
    categories: ["ornaments", "discount"],
    colors: ["white"],
    sizes: ["large", "small"],
  },
  {
    id: 9,
    productName: "Christmas Ball",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/9115/9115091.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: false,
    discount: 0,
    price: 4.99,
    categories: ["ornaments", "discount"],
    colors: ["white", "red", "green", "brown"],
    sizes: ["medium", "small"],
  },
  {
    id: 10,
    productName: "Christmas Red Socks",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/9082/9082103.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: false,
    discount: 0,
    price: 29.99,
    categories: ["ornaments"],
    colors: ["white", "red"],
    sizes: ["medium", "large"],
  },
  {
    id: 11,
    productName: "Red Ribbon",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/2913/2913186.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: false,
    discount: 0,
    price: 3.99,
    categories: ["ornaments"],
    colors: ["red"],
    sizes: ["medium"],
  },
  {
    id: 12,
    productName: "Christmas Tree Cookie",
    productIllustrationURL:
      "https://cdn-icons-png.flaticon.com/128/9093/9093540.png?ga=GA1.1.107811200.1701925464&semt=ais",
    isNew: false,
    discount: 0,
    price: 13.99,
    categories: ["cookies", "candies"],
    colors: ["brown"],
    sizes: ["medium", "small", "large"],
  },
];

const productsList = document.querySelector(".products_list");
const filtersDiv = document.querySelector(".filters");
const filterCheckBoxes = document.querySelectorAll(
  '.filters_div input[type="checkbox"]'
);
const btnClearFilters = document.querySelector(".btn_clear-filters");

const renderProducts = function () {
  productsList.forEach((product) => {
    const {
      id,
      productName,
      productIllustrationURL,
      price,
      isNew,
      discount,
      categories,
      colors,
      sizes,
    } = product;

    const productItemEl = document.createElement("div");
    productItemEl.setAttribute("data-product-id", id);
    productItemEl.classList.add("item");

    if (isNew) productItemEl.classList.add("new");
    if (discount !== 0) {
      productItemEl.classList.add("discount");
      productItemEl.setAttribute("data-discount", `-${discount}%`);
    }

    const productImgBox = document.createElement("div");
    productImgBox.classList.add("img-box");

    const productImg = document.createElement("img");
    productImg.src = productIllustrationURL;
    productImg.alt = productName;

    productImgBox.appendChild(productImg);

    const btnAddCart = document.createElement("div");
    btnAddCart.classList.add("cart-message");
    btnAddCart.innerHTML = ` Add to cart
  <ion-icon class="icon-cart" name="cart-outline"></ion-icon>`;
    productImgBox.appendChild(btnAddCart);

    const productItemName = document.createElement("p");
    productName.classList.add("item-name");
    productItemName.textContent = productName;

    const productItemPrice = document.createElement("p");
    productItemPrice.classList.add("item-price");
    productItemPrice.textContent = price;

    productItemEl.appendChild(productImgBox, productItemName, productItemPrice);
  });
};
