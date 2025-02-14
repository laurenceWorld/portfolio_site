'use strict';

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤 시 홈 섹션 절반부터 Arrow up 보임
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (homeHeight / 2 < window.scrollY) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navar 토글버튼 클릭 처리
const navbarToggle = document.querySelector('.header__toggle');
const navbarMenu = document.querySelector('.header__menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Navar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
