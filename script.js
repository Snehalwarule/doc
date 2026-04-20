// ============================================================
//  Nidhi Elites — script.js
//  Handles: FAQ toggle, smooth scroll, scroll reveal
// ============================================================

// ── COLLECTIONS DROPDOWN (click for mobile) ────────────────
const dropdownLi = document.querySelector('.dropdown');
if (dropdownLi) {
  const toggle = dropdownLi.querySelector('.dropdown-toggle');
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownLi.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!dropdownLi.contains(e.target)) {
      dropdownLi.classList.remove('open');
    }
  });
}

// ── FAQ ACCORDION ──────────────────────────────────────────
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-icon').textContent = '+';
    });

    // Open clicked if it was closed
    if (!isActive) {
      item.classList.add('active');
      item.querySelector('.faq-icon').textContent = '✕';
    }
  });
});

// ── SMOOTH SCROLL ──────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── SCROLL REVEAL ──────────────────────────────────────────
const revealElements = document.querySelectorAll(
  '.hero-text, .hero-image, .product-card, .matter-card, ' +
  '.bristles-text, .bristles-image, .pbt-text, .pbt-image, ' +
  '.faq-item, .essentials-banner > div'
);

revealElements.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));

// ── NAVBAR SHADOW ON SCROLL ────────────────────────────────
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
 const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Shop feature coming soon 🛒");
    });
  }

  function openWhatsApp() {
  const phoneNumber = "917841990321"; // Include country code, no "+" or "-"
  const message = encodeURIComponent("Hello, I have a question!");
  const url = `https://wa.me{phoneNumber}?text=${message}`;
  
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Automatically update the Copyright Year
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scroll for Footer Links
    // This makes the 'About Us' or 'Contact' links slide nicely
    const footerLinks = document.querySelectorAll('.footer-column a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Simple Interaction Logger (Optional)
    // Logs when someone clicks the email to track engagement
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener('click', () => {
            console.log("User is attempting to contact Nidhi Elites via email.");
        });
    }
});

