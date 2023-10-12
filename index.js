// const smallNavOptions = 0; // hidden
const smallNav = document.querySelector('.menu-btn');
const smallNavOptions = document.querySelector('.small-nav-options');
smallNavOptions.style.display = 'none';

smallNav.addEventListener('click', () => {
  smallNavOptions.style.display = 'block';
});

smallNav.addEventListener('blur', () => {
  smallNavOptions.style.display = 'none';
});

// radio button checking
const radioButtons = document.querySelectorAll('.form-check-inline');
const radioImage = document.querySelector('.form-check-img');

radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    const allRadioInputs = document.querySelectorAll('.form-check-input');
    const allRadioImages = document.querySelectorAll('.form-check-img');
    allRadioInputs.forEach(input => input.style.opacity = 1);
    allRadioImages.forEach(input => input.style.opacity = 0);

    button.children[0].style.opacity = 0;
    button.children[1].style.opacity = 1;
  });
});
  
