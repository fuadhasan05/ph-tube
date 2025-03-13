function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categories) {
    const categoryContainer = document.getElementById("catagory-container");

    for (let cat of categories) {
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML=`
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        categoryContainer.append(categoryDiv);
    }
}

loadCategories();
