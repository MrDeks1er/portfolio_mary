document.addEventListener('DOMContentLoaded', function () {
  // ==================== Бургер-меню ====================
  const burgerBtn = document.querySelector('.burger-btn');
  const navigation = document.querySelector('.navigation');

  if (burgerBtn && navigation) {
    burgerBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      navigation.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
    });

    // Закрытие при клике на пункт меню
    document.querySelectorAll('.nav-item a').forEach(item => {
      item.addEventListener('click', function () {
        burgerBtn.classList.remove('active');
        navigation.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.burger-btn') &&
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
  if (modal) {
    const modalImg = document.getElementById('expandedImage');
    const modalTitle = document.querySelector('.image-title');
    const modalDesc = document.querySelector('.image-description');
    const closeBtn = document.querySelector('.close-modal');

    function openModal(img) {
      if (!modalImg || !closeBtn) return;

      modalImg.src = img.src;
      modalImg.alt = img.alt;
      if (modalTitle) modalTitle.textContent = img.dataset.title || img.alt;
      if (modalDesc) modalDesc.textContent = img.dataset.description || 'Описание отсутствует';

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const imgRatio = img.naturalWidth / img.naturalHeight;
      const windowRatio = window.innerWidth / window.innerHeight;

      if (imgRatio > windowRatio) {
        modalImg.style.width = '90%';
        modalImg.style.height = 'auto';
      } else {
        modalImg.style.height = '80vh';
        modalImg.style.width = 'auto';
      }
    }

    function closeModal() {
      modal.classList.add('closing');
      document.body.style.overflow = '';

      setTimeout(() => {
        modal.classList.remove('active', 'closing');
      }, 400);
    }

    document.querySelectorAll('.images img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => openModal(img));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => e.target === modal && closeModal());
    document.addEventListener('keydown', (e) => e.key === 'Escape' && modal.classList.contains('active') && closeModal());
  }

  // ==================== Плавная прокрутка ====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

  // ==================== Изменение хедера при скролле ====================
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > window.innerHeight * 0.1) {
        header.classList.add('scrolled');
        header.classList.remove('transparent');
      } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
      }
    });

    if (window.scrollY === 0) {
      header.classList.add('transparent');
    }
  }

  // ==================== Кнопка прокрутки вверх ====================
  const scrollBtn = document.querySelector('.scroll-top-btn');
  if (scrollBtn) {
    const scrollTrigger = window.innerHeight;

    scrollBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > scrollTrigger) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    if (window.scrollY > scrollTrigger) {
      scrollBtn.classList.add('visible');
    }
  }
});