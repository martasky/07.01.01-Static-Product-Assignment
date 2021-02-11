const url = "https://kea-alt-del.dk/t7/api/products/";
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
function showCategory(product) {
  console.log(product);

  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("li").textContent = product.category;

  const parent = document.querySelector(".categories ul");
  parent.appendChild(clone);
}
