document.addEventListener("DOMContentLoaded", () => {
    const images = [
        {
            src: 'images/thumb1.jpg',
            title: 'Fennec <br> Fox',
            location: 'India'
        },
        {
            src: 'images/thumb2.jpg',
            title: 'Humpback <br> Whale',
            location: 'South Africa'
        },
        {
            src: 'images/thumb3.jpg',
            title: 'Common Brown Baboon',
            location: 'South Africa'
        },
        {
            src: 'images/thumb4.jpg',
            title: 'Spotted <br> Deer',
            location: 'Amazon'
        }
    ];

    function createGallery() {
        const gallery = document.querySelector('.gallery');

        images.forEach(image => {
            const item = document.createElement("div");
            item.className = "gallery-item";

            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.title;

            const overlay = document.createElement("div");
            overlay.className = "overlay";

            const text = document.createElement("div");
            text.className = "text";

            const title = document.createElement("h3");
            title.innerHTML = image.title;

            const location = document.createElement("p");
            location.textContent = image.location;

            const link = document.createElement("span");
            link.textContent = "Know more →";
            link.className = "text-link";

            text.appendChild(title);
            text.appendChild(location);
            item.appendChild(link);

            item.appendChild(text);
            item.appendChild(img);
            item.appendChild(overlay);

            gallery.appendChild(item);
        });
    }

    createGallery();
});
