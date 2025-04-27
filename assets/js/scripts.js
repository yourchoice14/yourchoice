// --------------------------------------------------
//                סקריפטים לאתר הבחירה שלך
// --------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {

  /* --- גלילה חלקה בין קישורים --- */
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* --- שינוי צבע הרקע של הניווט בגלילה --- */
  const header = document.getElementById('header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#ffffff';
      header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.boxShadow = 'none';
    }
  });

  /* --- כפתור חזור למעלה --- */
  const backToTopButton = document.createElement('div');
  backToTopButton.innerHTML = '⬆️';
  backToTopButton.id = 'back-to-top';
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});

/* --- עיצוב לכפתור חזור למעלה --- */
const style = document.createElement('style');
style.innerHTML = `
  #back-to-top {
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: 50px;
    height: 50px;
    background: #f6a623;
    color: white;
    font-size: 24px;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    z-index: 9999;
    transition: background 0.3s ease;
  }
  #back-to-top:hover {
    background: #e6951c;
  }
`;
document.head.appendChild(style);