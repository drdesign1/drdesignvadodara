

document.querySelectorAll('.policy-title').forEach(item => {

item.addEventListener('click', () => {

const box = item.parentElement;

box.classList.toggle('active');

});

});
