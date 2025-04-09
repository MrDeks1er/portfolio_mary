document.addEventListener('DOMContentLoaded', function() {
  // ==================== Бургер-меню ====================
  const burgerBtn = document.querySelector('.burger-btn');
  const navigation = document.querySelector('.navigation');
  
  if (burgerBtn && navigation) {
    burgerBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      navigation.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    // Закрытие при клике на пункт меню
    document.querySelectorAll('.nav-item a').forEach(item => {
      item.addEventListener('click', function() {
        burgerBtn.classList.remove('active');
        navigation.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.burger-menu') && 
          !e.target.closest('.navigation') && 
          navigation.classList.contains('active')) {
        burgerBtn.classList.remove('active');
        navigation.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // ==================== Модальное окно для изображений ====================
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('expandedImage');
  const closeBtn = document.querySelector('.close-modal');

  if (modal && modalImg && closeBtn) {
    // Открытие модального окна
    document.querySelectorAll('.images img, .first img').forEach(img => {
      img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        document.body.classList.add('no-scroll');
        
        // Адаптация размера изображения
        const imgRatio = this.naturalWidth / this.naturalHeight;
        const windowRatio = window.innerWidth / window.innerHeight;
        
        if (imgRatio > windowRatio) {
          modalImg.style.width = '90%';
          modalImg.style.height = 'auto';
        } else {
          modalImg.style.height = '90%';
          modalImg.style.width = 'auto';
        }
      });
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.classList.remove('no-scroll');
    });

    // Закрытие по клику вне изображения
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
      }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // ==================== Плавная прокрутка ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // ==================== Фикс для мобильного viewport ====================
  function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  setViewportHeight();
  window.addEventListener('resize', setViewportHeight);
});



document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight * 0.1) { 
      header.classList.add('scrolled');
      header.classList.remove('transparent');
    } else {
      header.classList.remove('scrolled');
      header.classList.add('transparent');
    }
  });
  
  // Инициализация при загрузке
  if (window.scrollY === 0) {
    header.classList.add('transparent');
  }
});