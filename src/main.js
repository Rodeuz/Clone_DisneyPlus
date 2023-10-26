document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (button) {
      const tabTarget = button.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
      hideTabs();
      tab.classList.add("shows__list--is-active");
      removeactivatedbutton();
      button.target.classList.add("shows__tabs__button--is-active");
    });
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", toggleAnswer);
  }
});

function toggleAnswer(element) {
  const Class = "faq__questions__item--is-open";
  const newElement = element.target.parentNode;

  newElement.classList.toggle(Class);
}

function removeactivatedbutton() {
  const buttons = document.querySelectorAll(`[data-tab-button]`);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove(`shows__tabs__button--is-active`);
  }
}

function hideTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}
