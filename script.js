document.addEventListener("DOMContentLoaded", function () {
  // Get all project containers
  const projectContainers = document.querySelectorAll(".project");

  // Function to change the displayed image in a project
  function changeImage(projectContainer) {
    const images = projectContainer.querySelectorAll("img");
    let currentImageIndex = 0;

    function showNextImage() {
      images[currentImageIndex].style.display = "none";
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.display = "block";
    }

    // Show the first image and set an interval to change images
    images[currentImageIndex].style.display = "block";
    setInterval(showNextImage, 3000); // Change image every 3 seconds
  }

  // Apply the image slideshow to each project container
  projectContainers.forEach((container) => {
    changeImage(container);
  });
});
