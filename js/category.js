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
