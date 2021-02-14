const url = "https://kea-alt-del.dk/t7/api/categories";
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleCategories(data);
  });

function handleCategories(data) {
  console.log(data);
  data.forEach(showCategory);
}
function showCategory(category) {
  console.log(category);

  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("li a").textContent = category.category;
  clone.querySelector(
    "li a"
  ).href = `productlist.html?category=${category.category}`;
  const parent = document.querySelector(".categories ul");
  parent.appendChild(clone);
}

// document.querySelector("ul .brand").addEventListener("click", handleBrands);

// const urlBrands = "https://kea-alt-del.dk/t7/api/brands";
// fetch(urlBrands)
//   .then(function (res2) {
//     return res2.json();
//   })
//   .then(function (branddata) {
//     handleBrands(branddata);
//   });
// function handleBrands(branddata) {
//   console.log(branddata);
//   branddata.forEach(showBrand);
// }
// function showBrand(brand) {
//   console.log(brand);

//   const template = document.querySelector("#brands").content;
//   const copy = template.cloneNode(true);
//   copy.querySelector("li a").textContent = brand.brandname;
//   copy.querySelector(
//     "li a"
//   ).href = `productlist.html?brandname=${brand.brandname}`;
//   const parent = document.querySelector("section");
//   parent.appendChild(copy);
// }

// const urlParams = new URLSearchParams(window.location.search);
// const brand = urlParams.get("brand");
// if (brand === "yes") {
//   document.querySelector(".categories").remove();
// } else {
//   showCategory(category);
// }
