// To select all gallery images and set up lightbox functionality
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

let currentIndex = 0;
const galleryImages = Array.from(images);

// To open lightbox on image click
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    currentIndex = index;
    showImage(currentIndex);
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightboxImg) {
    lightbox.style.display = "none";
  }
});

function showImage(index) {
  currentIndex = (index + galleryImages.length) % galleryImages.length;
  lightboxImg.src = galleryImages[currentIndex].src;
}

document.getElementById("prevBtn").addEventListener("click", () => {
  showImage(currentIndex - 1);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  showImage(currentIndex + 1);
});
