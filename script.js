function mostrarAba(abaNumero) {
  const abas = document.querySelectorAll('.tab');
  abas.forEach((aba) => {
    aba.classList.remove('active-tab');
  });

  const abaSelecionada = document.getElementById(`aba${abaNumero}`);
  abaSelecionada.classList.add('active-tab');
}

mostrarAba(1);

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function initAnimaçaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        }
      });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

initAnimaçaoScroll();

document.addEventListener('DOMContentLoaded', function () {
  var icons = document.querySelectorAll('.dados i');

  icons.forEach(function (icon) {
    icon.addEventListener('click', function () {
      var link;
      if (this.classList.contains('fa-whatsapp')) {
        link = 'https://wa.me/5521996286420';
      } else if (this.classList.contains('fa-envelope')) {
        link = 'mailto:renanpublionascimento@gmail.com';
      } else if (this.classList.contains('fa-github')) {
        link = 'https://github.com/Renan-Publio';
      }

      if (link) {
        window.open(link, '_blank');
      }
    });
  });
});
