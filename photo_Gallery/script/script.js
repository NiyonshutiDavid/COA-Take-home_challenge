/**
 * This script adds a photo gallery to the webpage when the DOMContentLoaded event is fired.
 * The gallery is populated with images from an array of objects, each containing the image source,
 * title, and location.
 */
document.addEventListener("DOMContentLoaded", () => {
    /**
     * Array of objects representing the gallery images.
     * @type {Array}
     */
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

    /**
     * Function that creates the gallery by appending individual gallery items to the gallery element.
     * Each gallery item contains an image, overlay, and text elements.
     */
    function createGallery() {
        const gallery = document.querySelector('.gallery');

        images.forEach(image => {
            // Create gallery item
            const item = document.createElement("div");
            item.className = "gallery-item";

            // Create image element
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.title;

            // Create overlay element
            const overlay = document.createElement("div");
            overlay.className = "overlay";

            // Create text element
            const text = document.createElement("div");
            text.className = "text";

            // Create title element
            const title = document.createElement("h3");
            title.innerHTML = image.title;

            // Create location element
            const location = document.createElement("p");
            location.textContent = image.location;

            // Create link element
            const link = document.createElement("span");
            link.textContent = "Know more →";
            link.className = "text-link";

            // Append child elements to gallery item
            text.appendChild(title);
            text.appendChild(location);
            item.appendChild(link);
            item.appendChild(text);
            item.appendChild(img);
            item.appendChild(overlay);

            // Append gallery item to gallery
            gallery.appendChild(item);
        });
    }

    // Call the createGallery function to populate the gallery with images in the index.html
    createGallery();
});

