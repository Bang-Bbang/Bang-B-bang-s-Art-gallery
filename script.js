document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");

    const artworks = [
        { image: "images/BBB 01.png", file: "downloads/BBB 01.png" },
        { image: "images/BBB 02.png", file: "downloads/BBB 02.png" },
        { image: "images/Art 03.png", file: "downloads/Art 03.png" },
    ];

    artworks.forEach((art) => {
        let artDiv = document.createElement("div");
        artDiv.classList.add("art-item");

        artDiv.innerHTML = `
            <img src="${art.image}" alt="Artwork">
            <a href="${art.file}" download class="download-btn">Download</a>
        `;

        gallery.appendChild(artDiv);
    });
});
