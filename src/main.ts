const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mainNav = document.querySelector<HTMLElement>('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav?.classList.toggle('is-open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const filterButtons = document.querySelectorAll<HTMLButtonElement>('.filter-button');
const tipRows = document.querySelectorAll<HTMLElement>('.tip-row');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter ?? 'all';

    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    tipRows.forEach((tip) => {
      const shouldShow = filter === 'all' || tip.dataset.category === filter;
      tip.hidden = !shouldShow;
    });
  });
});

const year = document.querySelector<HTMLElement>('#year');
if (year) year.textContent = String(new Date().getFullYear());
