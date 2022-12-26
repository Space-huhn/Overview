const closeButton = document.querySelector(".configuration__close-button");
const openButton = document.querySelector(".overview-header__configurator");
const configPopup = document.querySelector(".configuration");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");

const onOpenPopup = () => {
  setTimeout(() => {
    wrapper.classList.add("disable");
    body.classList.add("disable");
    configPopup.classList.add("active");
  },0);
}

const onClosePopup = () => {
  wrapper.classList.remove("disable");
  body.classList.remove("disable");
  configPopup.classList.remove("active");
}

const closePopup = (event) => {
  if (!configPopup.classList.contains("active")) {
    return;
  }

  if (!event.target.closest(".configuration")) {
    onClosePopup();
  }
}

closeButton.addEventListener("click", onClosePopup);
openButton.addEventListener("click", onOpenPopup);
document.addEventListener("click", closePopup);

export {closePopup}
export {onClosePopup}