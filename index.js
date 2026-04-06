  const openBtn = document.querySelector('.btn__menu');
  const closeBtn = document.querySelector('.btn__menu--close');
  const backdrop = document.querySelector('.menu__backdrop');
  const overlay = document.querySelector('.menu__overlay');

  function openMenu() {
    backdrop.classList.add('menu__backdrop--open');
    overlay.classList.add('menu__overlay--open');
  }

  function closeMenu() {
    backdrop.classList.remove('menu__backdrop--open');
    overlay.classList.remove('menu__overlay--open');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);


