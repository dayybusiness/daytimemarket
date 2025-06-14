/* 
  SellDrop 
  ------------ 
  Version 0.1.25 
*/ 

// Early connection optimization for Billgang domains
(function() {
  // Add preconnect for faster domain connection
  const domains = ['www.daytimemarket.xyz'];
  
  domains.forEach(domain => {
    // Add preconnect
    let preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://' + domain;
    document.head.appendChild(preconnect);
    
    // Add DNS-prefetch as fallback for browsers that don't support preconnect
    let dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = 'https://' + domain;
    document.head.appendChild(dnsPrefetch);
  });
})();

// Navigation functions
function navbar() { 
  let element = document.getElementById("navbarNav"); 
  element.classList.toggle("navbar__links--active"); 
} 

$(document).ready(function () {
  $('.shop__category').click(function () {
    if (!$(this).hasClass('active')) {
      // Switch active tab
      $('.shop__category').removeClass('active');
      $(this).addClass('active');

      // Hide all categories
      $('.shop__cards').hide();

      // Show selected category
      var index = $(this).data('category-index');
      $('#category-' + index).fadeIn();
    }
  });
});

// Accordion functionality
const items = document.querySelectorAll(".accordion button"); 

function toggleAccordion() { 
  const itemToggle = this.getAttribute('aria-expanded'); 
  items.forEach(item => item.setAttribute('aria-expanded', 'false')); 
  if (itemToggle === 'false') { 
    this.setAttribute('aria-expanded', 'true'); 
  } 
} 

items.forEach(item => item.addEventListener('click', toggleAccordion)); 

// Billgang integration - optimized for speed
document.addEventListener("DOMContentLoaded", function () {
  // Create container for modals once, not on every click
  var billgangContainer = document.createElement('div');
  billgangContainer.id = 'billgang-container';
  document.body.appendChild(billgangContainer);
  
  // Pre-create modal template for faster instantiation later
  const modalTemplate = document.createElement('div');
  Object.assign(modalTemplate.style, {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '9998',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    overflow: 'hidden',
    backdropFilter: 'blur(5px)'
  });
  
  // Prefetch common product URLs when user hovers over products
  document.addEventListener('mouseover', (event) => {
    const target = event.target.closest('a[data-billgang-product-path]');
    if (target && !target.dataset.prefetched) {
      const productPath = target.getAttribute('data-billgang-product-path');
      let domain = target.getAttribute('data-billgang-domain');
      if (!domain.startsWith('https://')) domain = 'https://' + domain;
      
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = domain + '/embed/' + productPath;
      document.head.appendChild(prefetchLink);
      
      target.dataset.prefetched = 'true';
    }
  }, { passive: true });

  // Handle product clicks with optimized modal creation
  document.addEventListener('click', (event) => {
    let target = event.target.closest('a[data-billgang-product-path]');
     
    if (target) {
      event.preventDefault();
      document.body.style.overflow = 'hidden';
       
      const productPath = target.getAttribute('data-billgang-product-path');
      let domain = target.getAttribute('data-billgang-domain');
      if (!domain.startsWith('https://')) domain = 'https://' + domain;

      // Clone the template for this specific modal instance
      const modal = modalTemplate.cloneNode(false);
      modal.id = 'billgang-embed-' + productPath;

      const modalContent = document.createElement('div');
      Object.assign(modalContent.style, {
        position: 'relative',
        width: '100%',
        backgroundColor: 'transparent',
        overflow: 'hidden'
      });

      const iframe = document.createElement('iframe');
      iframe.src = domain + '/embed/' + productPath;
      iframe.importance = 'high';
      iframe.loading = 'eager'; // Prioritize loading this iframe
      Object.assign(iframe.style, {
        width: '100%',
        height: '500px',
        border: 'none',
        overflow: 'hidden'
      });
      
      // Add loading indicator
      const loader = document.createElement('div');
      Object.assign(loader.style, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #B28FE8',
        animation: 'spin 1s linear infinite'
      });
      
      // Add loading animation
      const style = document.createElement('style');
      style.textContent = '@keyframes spin { 0% { transform: translate(-50%, -50%) rotate(0deg); } 100% { transform: translate(-50%, -50%) rotate(360deg); } }';
      document.head.appendChild(style);
      
      modalContent.appendChild(loader);
      modalContent.appendChild(iframe);

      // Remove loader when iframe loads
      iframe.onload = function() {
        modalContent.removeChild(loader);
      };

      const closeButton = document.createElement('button');
      Object.assign(closeButton.style, {
        position: 'absolute',
        top: '5px',
        right: '15px',
        width: '36px',
        height: '36px',
        background: 'white',
        border: '1px solid #ddd',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '0',
        zIndex: '9999'
      });
      closeButton.innerHTML = '&times;';
      
      modalContent.appendChild(closeButton);
      modal.appendChild(modalContent);
      billgangContainer.appendChild(modal);

      closeButton.addEventListener('click', () => {
        document.body.style.overflow = 'auto';
        billgangContainer.removeChild(modal);
      });
    }
  }, { passive: false });
});
