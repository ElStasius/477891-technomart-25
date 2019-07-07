if (document.querySelector(".banner-slider")) {
  var allSliders = document.querySelectorAll(".banner-slider");
  var btnSwitchLeft = document.querySelector(".slider-switch-left");
  var btnSwitchRight = document.querySelector(".slider-switch-right");
  var btnSliderPointers = document.querySelectorAll(".banner-slider-pointer");

  function hideSliders(a) {
    allSliders[a].classList.remove("slider-shows");
    btnSliderPointers[a].classList.remove("slider-pointer-active");
  };

  function switchSliders(b) {
    allSliders[b].classList.add("slider-shows");
    btnSliderPointers[b].classList.add("slider-pointer-active");
  };

  btnSwitchRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    restartSliderR:
    for (var i = 0; i < allSliders.length; i++) {
      if (allSliders[i].classList.contains("slider-shows")) {
        hideSliders(i);

        if (i === allSliders.length - 1) {
          switchSliders(0);
          continue restartSliderR;
        } else {
          switchSliders(i + 1);
          break;
        }
      }
    }
  });

  btnSwitchLeft.addEventListener("click", function(evt) {
    evt.preventDefault();
    restartSliderL:
    for (var i = allSliders.length - 1; i >= 0; i--) {
      if (allSliders[i].classList.contains("slider-shows")) {
        hideSliders(i);

        if (i === 0) {
          switchSliders(allSliders.length - 1);
          continue restartSliderL;
        } else {
          switchSliders(i - 1);
          break;
        }
      }
    }
  });
}

if (document.querySelector(".service-slider")) {
  var linkServices = document.querySelectorAll(".service-item-btn");
  var sliderServices = document.querySelectorAll(".service-slider");

  function hideSliderServices() {
    for (var i = 0; i < sliderServices.length; i ++) {
      if (sliderServices[i].classList.contains("service-slider-active")) {
        sliderServices[i].classList.remove("service-slider-active");
        linkServices[i].classList.remove("service-item-btn-active");
      }
    }
  };

  function showSlidersServices(n) {
    hideSliderServices();
    sliderServices[n].classList.add("service-slider-active");
    linkServices[n].classList.add("service-item-btn-active");
  };

  for (var i = 0; i < linkServices.length; i ++) {
    const button = linkServices[i];
    button.onclick = function(evt) {
      evt.preventDefault();
      for (var y = 0; y < linkServices.length; y ++) {
        if (button == linkServices[y]) {
          showSlidersServices(y);
        }
      }
    }
  };
}

if (document.querySelector(".modal-map")) {
  var linkBigMap = document.querySelector(".contact-map");
  var popupBigMap = document.querySelector(".modal-map");
  var closeBigMap = popupBigMap.querySelector(".close-btn");

  linkBigMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBigMap.classList.add("modal-shows");
  });

  closeBigMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBigMap.classList.remove("modal-shows");
  });
}

if (document.querySelector(".write-us-btn")) {
  var linkWriteUs = document.querySelector(".write-us-btn");
  var popupWriteUs = document.querySelector(".modal-write-us");
  var closeWriteUs = popupWriteUs.querySelector(".close-btn");

  linkWriteUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupWriteUs.classList.add("modal-shows");
  });

  closeWriteUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-shows");
  });
}

if (document.querySelector(".add-to-cart-btn")) {
  var linksAddToCart = document.querySelectorAll(".add-to-cart-btn");
  var popupAddToCart = document.querySelector(".modal-add-to-cart");
  var closeAddToCart = popupAddToCart.querySelector(".continue-btn");

  for (var y = 0; y < linksAddToCart.length; y ++) {
    linksAddToCart[y].addEventListener("click", function(evt) {
      evt.preventDefault();
      popupAddToCart.classList.add("modal-shows");
    });
  }

  closeAddToCart.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupAddToCart.classList.remove("modal-shows");
  });
}
