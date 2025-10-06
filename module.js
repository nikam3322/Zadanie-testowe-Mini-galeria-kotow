
const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");
const refreshBtn = document.getElementById("refresh");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

async function loadCats() {
    loader.classList.remove("hidden");
    gallery.innerHTML = "";

    const cats = await getCats();
    console.log("cats:", cats);

    cats.forEach(cat => {
    const img = document.createElement("img");
    img.src = cat.url;
    img.alt = "cat";
    img.addEventListener("click", () => openModal(cat.url));
    gallery.appendChild(img);
    });

    loader.classList.add("hidden");
}

function openModal(url) {
    modalImg.src = url;
    modal.classList.remove("hidden");
}

modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

refreshBtn.addEventListener("click", loadCats);

loadCats();
