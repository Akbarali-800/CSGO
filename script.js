let currentSet = 0;

// Rasm to'plamlari
const imageSets = [
  ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg'],
  ['./images/image4.jpg', './images/image5.jpg', './images/image6.jpg'],
  ['./images/image2.jpg', './images/image4.jpg', './images/image6.jpg']
];

function updateImages() {
  const imageContainer = document.querySelector('.image_container');
  imageContainer.innerHTML = ''; // Ichini tozalash
  imageSets[currentSet].forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    imageContainer.appendChild(img);
  });
}

function nextImages() {
  currentSet = (currentSet + 1) % imageSets.length; // Keyingi to'plamga o'tish
  updateImages();
}

function prevImages() {
  currentSet = (currentSet - 1 + imageSets.length) % imageSets.length; // Oldingi to'plamga o'tish
  updateImages();
}

// Boshlang'ich rasmlarni yuklash
updateImages();
