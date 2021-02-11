const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .productCategory").textContent =
    product.category;
  document.querySelector(".breadcrumbs .productSubcategory").textContent =
    product.subcategory;
  document.querySelector(".breadcrumbs .productBrand").textContent =
    product.brandname;
  document.querySelector(".purchaseBox .productName").textContent =
    product.variantname;
  document.querySelector(
    ".purchaseBox .showPrice .price"
  ).textContent = `${product.price} DKK`;

  document.querySelector(
    "img.productImage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  document.querySelector("img.productImage").alt = product.productdisplayname;

  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector(".purchaseBox .gender").textContent = product.gender;
  document.querySelector(".info .season").textContent = product.season;
  document.querySelector(".info .usage").textContent = product.usagetype;
  document.querySelector(".info .productionYear").textContent =
    product.productionyear;

  document.querySelector(".info .inventoryNumber").textContent = product.id;

  if (product.soldout) {
    document.querySelector("figure").classList.add("soldOutProduct");
    document.querySelector("figure p").classList.add("productSoldout");
    document.querySelector("p.productSoldout").textContent = `Sold out`;
  }

  if (product.discount) {
    document.querySelector("figure .hide").classList.remove("hide");
    document.querySelector("figure").classList.add("productpageDiscount");
    document.querySelector(
      ".productpageDiscount p:last-child"
    ).textContent = `${product.discount}%`;
    document.querySelector(".price").classList.add("priceDis");
    document
      .querySelector(".showPrice p:nth-child(2)")
      .classList.add("discountedPrice");
    document.querySelector(
      ".showPrice p:nth-child(2)"
    ).textContent = `${Math.round(
      (100 / (100 - product.discount)) * product.price
    )} DKK`;
  }
}
