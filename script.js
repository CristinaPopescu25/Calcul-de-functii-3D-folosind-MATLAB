function zoomImage(element) {
    // Create modal if it doesn't exist
    let modal = document.querySelector('.modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img class="modal-image" src="" alt="Zoomed image">
            </div>
        `;
        document.body.appendChild(modal);
    }

    // Get the image source from the clicked element
    const img = element.querySelector('.gallery-image');
    const modalImg = modal.querySelector('.modal-image');
    modalImg.src = img.src;

    // Show modal
    modal.classList.add('active');

    // Close modal when clicking the close button
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = function() {
        modal.classList.remove('active');
    }

    // Close modal when clicking outside the image
    modal.onclick = function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
} 