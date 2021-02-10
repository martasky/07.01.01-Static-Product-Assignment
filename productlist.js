const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");

const url = "https://kea-alt-del.dk/t7/api/products/" + cat;
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}
function showProduct(product) {
  console.log(product);
  const template = document.querySelector("#smallProductTemplate").content;
  const clone = template.cloneNode(true);
  clone.querySelector(
    ".subtle"
  ).textContent = `${product.brandname} | ${product.usagetype}`;
  clone.querySelector("h4").textContent = product.productdisplayname;
  clone.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  clone.querySelector("a").href = `product.html?id=${product.id}`;
  clone.querySelector(".price").textContent = ` ${product.price} DKK`;

  if (product.soldout) {
    clone.querySelector("article").classList.add("soldOut");
    clone.querySelector("div.sold").classList.add("soldOutText");
    clone.querySelector("div.sold").textContent = `Sold out`;
  }

  if (product.discount) {
    clone.querySelector("article").classList.add("discounted");
    clone.querySelector("div.dis").classList.add("disText");
    clone.querySelector("div.dis").textContent = `${product.discount}%`;
    clone.querySelector(".price").classList.add("priceDis");
    clone
      .querySelector(".showPrice p:nth-child(2)")
      .classList.add("discountedPrice");
    clone.querySelector(
      ".showPrice p:nth-child(2)"
    ).textContent = `${Math.round(
      (100 / (100 - product.discount)) * product.price
    )} DKK`;
  }

  const parent = document.querySelector(".productlist");

  parent.appendChild(clone);
}
