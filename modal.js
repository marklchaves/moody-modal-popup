let modal = document.querySelector("#moodymodal-modal");
let modalOverlay = document.querySelector("#moodymodal-modal-overlay");
let closeButton = document.querySelector("#close-button");

// Avada specific.
let fusionHeader = document.querySelector(".fusion-header-wrapper");

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

  // Remember that we showed the modal in this session.
  sessionStorage.setItem('modalDisplayed', true);

}

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

let modalDisplayed = sessionStorage.getItem('modalDisplayed');

setTimeout(function(){
  if (!modalDisplayed) {
    displayPopup();
  }
}, 2000);