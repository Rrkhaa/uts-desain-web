const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const produk = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "hitam",
        img: "./img/air.png",
      },
      {
        code: "biru tua",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "abu-abu muda",
        img: "./img/jordan.png",
      },
      {
        code: "hijau",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "abu-abu muda",
        img: "./img/blazer.png",
      },
      {
        code: "hijau",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "hitam",
        img: "./img/crater.png",
      },
      {
        code: "abu-abu muda",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "abu-abu",
        img: "./img/hippie.png",
      },
      {
        code: "hitam",
        img: "./img/hippie2.png",
      },
    ],
  },
];
let produkTerpilih = produk[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    produkTerpilih = produk[index];
    currentProductTitle.textContent = produkTerpilih.title;
    currentProductPrice.textContent = "$" + produkTerpilih.price;
    currentProductImg.src = produkTerpilih.colors[0].img;
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = produkTerpilih.colors[index].code;
    });
  });
});
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = produkTerpilih.colors[index].img;
  });
});
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});
close.addEventListener("click", () => {
  payment.style.display = "none";
});