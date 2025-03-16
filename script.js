document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");

    const artworks = [
        { image: "images/art1.jpg", file: "downloads/art1.zip" },
        { image: "images/art2.jpg", file: "downloads/art2.zip" },
        { image: "images/art3.jpg", file: "downloads/art3.zip" }
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
