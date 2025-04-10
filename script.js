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

  document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('expandedImage');
  const modalTitle = document.querySelector('.image-title');
  const modalDesc = document.querySelector('.image-description');
  const closeBtn = document.querySelector('.close-modal');

  // Проверка элементов
  if (!modal || !modalImg || !closeBtn) {
      console.error('Modal elements not found');
      return;
  }

  function openModal(img) {
      // Устанавливаем контент
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalTitle.textContent = img.dataset.title || img.alt;
      modalDesc.textContent = img.dataset.description || 'Описание отсутствует';
      
      // Активируем модалку
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Адаптация размера
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

  // Функция закрытия
  function closeModal() {
    modal.classList.add('closing');
    document.body.style.overflow = '';
    
    setTimeout(() => {
        modal.classList.remove('active', 'closing');
    }, 0); // Должно соответствовать самой длинной анимации
}

  // Назначение обработчиков
  document.querySelectorAll('.images img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => openModal(img));
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => e.target === modal && closeModal());
  document.addEventListener('keydown', (e) => e.key === 'Escape' && modal.classList.contains('active') && closeModal());
});

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
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('expandedImage');
  const modalTitle = document.querySelector('.image-title');
  const modalDesc = document.querySelector('.image-description');
  const closeBtn = document.querySelector('.close-modal');

  // Проверка элементов
  if (!modal || !modalImg || !closeBtn) {
      console.error('Modal elements not found');
      return;
  }

  function openModal(img) {
      // Устанавливаем контент
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalTitle.textContent = img.dataset.title || img.alt;
      modalDesc.textContent = img.dataset.description || 'Описание отсутствует';
      
      // Активируем модалку
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Адаптация размера
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

  // Функция закрытия
  function closeModal() {
    modal.classList.add('closing');
    document.body.style.overflow = '';
    
    setTimeout(() => {
        modal.classList.remove('active', 'closing');
    }, 0); // Должно соответствовать самой длинной анимации
}

  // Назначение обработчиков
  document.querySelectorAll('.images img').forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => openModal(img));
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => e.target === modal && closeModal());
  document.addEventListener('keydown', (e) => e.key === 'Escape' && modal.classList.contains('active') && closeModal());
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

document.addEventListener('DOMContentLoaded', function() {
  const scrollBtn = document.querySelector('.scroll-top-btn');
  const scrollTrigger = window.innerHeight * 1.0; // Появляется после прокрутки 1.5 экранов
  
  if (scrollBtn) {
    // Прокрутка вверх
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Показ/скрытие кнопки
    window.addEventListener('scroll', function() {
      if (window.scrollY > scrollTrigger) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    
    // Проверка при загрузке
    if (window.scrollY > scrollTrigger) {
      scrollBtn.classList.add('visible');
    }
  }
});