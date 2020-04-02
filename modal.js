var modal = document.querySelector("#covid-19-modal");
var modalOverlay = document.querySelector("#covid-19-modal-overlay");
var closeButton = document.querySelector("#close-button");

var fusionHeader = document.querySelector(".fusion-header-wrapper");

var lastFocus;

closeButton.addEventListener('click', () => {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
  document.body.style.position = '';

  fusionHeader.style.setProperty('z-index', '10010');

  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);

});

function displayPopup() {
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");

  fusionHeader.style.setProperty('z-index', '10');

  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;

}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

setTimeout(function(){
    lastFocus = document.activeElement;
    displayPopup();
}, 2000);