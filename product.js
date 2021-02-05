const url = "https://kea-alt-del.dk/t7/api/products/2801";

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
  document.querySelector(".purchaseBox .productPrice").textContent =
    product.price;

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
}
