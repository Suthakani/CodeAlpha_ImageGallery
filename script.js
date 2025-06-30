const images = [
  'images/img1.jpg',
  'images/img2.jpg',
  'images/img3.jpg',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg'
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById('lightbox-img').src = images[currentIndex];
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex];
}

// Filter by category
function filterGallery(category) {
  const allImages = document.querySelectorAll('.gallery img');
  allImages.forEach(img => {
    if (category === 'all' || img.dataset.category === category) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeLightbox();
  }
});
      
