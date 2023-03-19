const tabsItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabsItem.forEach(element => {
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabsItem.forEach(item => {
    item.classList.remove('tabs__btn-item_active');
  });

  tabTarget.classList.add('tabs__btn-item_active');

  tabContent.forEach(item => {
    item.classList.remove('tabs__content-item_active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item_active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle("menu__list_active");
});

const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    effect: "fade",
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });