document.addEventListener('DOMContentLoaded', () => {
  /* dom manipulation to create modal elements (mdn web docs, 2024) */
  // goal: create the modal html structure dynamically so it doesn't need to be hardcoded in every page.
  // this improves maintainability and keeps the html clean.
  
  // create modal elements dynamically
  const modal = document.createElement('div');
  modal.id = 'image-modal';

  modal.className = 'modal-overlay';
  
  const modalImg = document.createElement('img');
  modalImg.className = 'modal-content';
  
  const closeBtn = document.createElement('span');
  closeBtn.className = 'modal-close';
  closeBtn.innerHTML = '&times;';
  
  modal.appendChild(closeBtn);
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  // target all images inside the main content area
  // excluding leaflet map images if any match 'main img' (usually they are inside leaflet-pane)
  // problem solved: automatic gallery creation for any image added to content.
  const images = document.querySelectorAll('main img');
  
  /* event listeners for image interaction (mdn web docs, 2024) */
  images.forEach(img => {
    img.style.cursor = 'zoom-in'; 
    img.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });

  // close functionality
  const closeModal = () => {
    modal.style.display = 'none';
  };

  closeBtn.onclick = closeModal;

  // close when clicking outside the image
  // improves user experience by allowing easy dismissal.
  modal.onclick = function(event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  // close with escape key
  // accessibility feature: allows keyboard users to close the modal easily.
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      closeModal();
    }
  });
});
