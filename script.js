const observedElId = document.getElementById('about-me');


const onPointerOverHandler = event => {
  if (event.target.closest('span')) {
    switchColorForElement('add', event, 'attention');

    event.target.addEventListener('pointerdown', onPointerDown)
    event.target.addEventListener('pointerleave', onPointerLeave)
  };
};


const onPointerDown = event => {
  switchColorForElement('add', event, 'transparent');

  event.target.addEventListener('pointerup', onPointerUp)
};


const onPointerUp = event => {
  switchColorForElement('remove', event, 'transparent');
};


const onPointerLeave = event => {
  switchColorForElement('remove', event, 'attention');
  switchColorForElement('remove', event, 'transparent');
};


const switchColorForElement = (operation, elFromEvent, modificator) => {
    const modifiableEl = elFromEvent.target.parentElement;

    modifiableEl.classList[operation](
      `${modifiableEl.classList[0]}_${modificator}-color`);
};


const onKeyDownHandler = event => {
  if (event.code === 'Space') {
    const elemsForRemove = observedElId.querySelectorAll('p');

    if (elemsForRemove.length > 0) {
      elemsForRemove.forEach(element => element.remove());
    }

    document.removeEventListener('keydown', onKeyDownHandler)
  }
};


observedElId.addEventListener(
  'pointerover', onPointerOverHandler);

document.addEventListener('keydown', onKeyDownHandler)
