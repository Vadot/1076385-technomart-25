  var link = document.querySelector(".output__button-write");

  var popup = document.querySelector(".write-us");
  var close = popup.querySelector(".modal__exit");

  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=name]");
  var mail = popup.querySelector("[name=e-mail]");
  var text = popup.querySelector("[name=letter]");

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(evt) {
    if (!login.value || !mail.value || !text.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });


  var delivery = document.querySelector("[for=delivery]");
  var slide_delivery = document.querySelector(".services__slide--delivery");
  var warranty = document.querySelector("[for=warranty]");
  var slide_warranty = document.querySelector(".services__slide--warranty");
  var credit = document.querySelector("[for=credit]");
  var slide_credit = document.querySelector(".services__slide--credit");


  delivery.addEventListener("click", function(evt) {
    slide_delivery.classList.add("services__slide--block");
    slide_warranty.classList.remove("services__slide--block");
    slide_credit.classList.remove("services__slide--block");
  });

  warranty.addEventListener("click", function(evt) {
    slide_delivery.classList.remove("services__slide--block");
    slide_warranty.classList.add("services__slide--block");
    slide_credit.classList.remove("services__slide--block");
  });

  credit.addEventListener("click", function(evt) {
    slide_delivery.classList.remove("services__slide--block");
    slide_warranty.classList.remove("services__slide--block");
    slide_credit.classList.add("services__slide--block");
  });

  var mapLink = document.querySelector(".output__image");
  var mapPopup = document.querySelector(".big-map");
  var mapClose = mapPopup.querySelector(".big-map__exit");

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("map-show");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("map-show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("map-show")) {
        mapPopup.classList.remove("map-show");
      }
    }
  });






  var link_c = document.querySelector(".catalog__buy");
  var modal_c = document.querySelector(".info-block");
  var close_c = modal_c.querySelector(".modal__exit");
  var exit_c = modal_c.querySelector(".info-block__button--continue");


  link_c.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_c.classList.add("modal-show--catalog");
  });

  close_c.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_c.classList.remove("modal-show--catalog");
  });

  exit_c.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_c.classList.remove("modal-show--catalog");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal_c.classList.contains("modal-show--catalog")) {
        modal_c.classList.remove("modal-show--catalog");
      }
    }
  });