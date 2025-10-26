// Function to open the modal and show the clicked image
function openModal(image) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    
    modal.style.display = "flex";
    modalImg.src = image.src;
}

// Function to close the modal when clicking anywhere on the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
