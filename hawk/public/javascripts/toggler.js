/**
 * Toggler module allows you toggle element display property by trigger element
 * Add name 'js-toggle' and data-button attribute that consist id of trigger element
 * After click on trigger element it will hide
 *
 * @example
 * <button id="myButton">Show label</button>
 * <label name="js-toggle" data-button="myButton">This is label</button>
 *
 * @type {{init, toggle}}
 */
module.exports = function () {
  const NAME = 'js-toggle';
  const HIDE_CLASS = 'hide';

  let elements = {};

  /**
   * Get all elements with 'js-toggle' name and prepare them
   */
  let init = function () {
    let elems = document.getElementsByName(NAME);

    for (let i = 0; i < elems.length; i++) {
      prepareElem(elems[i]);
    }
  };

  /**
   * Get toggle buttons and save them and add click listeners
   *
   * @param elem
   */
  let prepareElem = function (elem) {
    let buttonId = elem.dataset.button,
        button = document.getElementById(buttonId);

    elem.classList.add(HIDE_CLASS);
    elements[buttonId] = elem;

    button.addEventListener('click', buttonClicked);
  };

  /**
   * Toggle button click handler
   */
  let buttonClicked = function () {
    let button = this,
        buttonId = button.id;

    button.classList.add(HIDE_CLASS);
    elements[buttonId].classList.remove(HIDE_CLASS);
  };

  /**
   * Toggle element display property
   *
   * @param elem
   * @param elem.dataset.button — id of trigger element
   */
  let toggle = function (elem) {
    let buttonId = elem.dataset.button,
        button = document.getElementById(buttonId);

    button.classList.toggle(HIDE_CLASS);

    if (button.classList.contains(HIDE_CLASS)) {
      elem.classList.remove(HIDE_CLASS);
    } else {
      elem.classList.add(HIDE_CLASS);
    }
  };

  return {
    init: init,
    toggle: toggle
  };
}();