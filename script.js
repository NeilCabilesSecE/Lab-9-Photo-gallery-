// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all the images on the gallery
    const images = document.querySelectorAll(".gallery-item img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    // The style for the lightbox through JavaScript
    lightbox.style.position = "fixed";
    lightbox.style.top = "0";
    lightbox.style.left = "0";
    lightbox.style.width = "99%";
    lightbox.style.height = "99%";
    lightbox.style.background = "rgba(0, 0, 0, 0.9)";
    lightbox.style.display = "flex";
    lightbox.style.alignItems = "center";
    lightbox.style.justifyContent = "center";
    lightbox.style.opacity = "0";
    lightbox.style.visibility = "hidden";
    lightbox.style.transition = "opacity 0.4s, visibility 0.6s";

    // Click the event for each image to open them up in the lightbox
    images.forEach(image => {
        image.addEventListener("click", () => {
            lightbox.style.visibility = "visible";
            lightbox.style.opacity = "1";
            const img = document.createElement("img");
            img.src = image.src;
            img.style.maxWidth = "88%";
            img.style.maxHeight = "88%";
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    // Click event on lightbox to close the image when done
    lightbox.addEventListener("click", () => {
        lightbox.style.opacity = "0";
        lightbox.style.visibility = "hidden";
    });
})