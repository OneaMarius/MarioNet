const elements = document.querySelectorAll('.BP');
// leg.style.transform = 'rotate(-45deg)';
elements.forEach(elem => {
    elem.addEventListener('click',rotateFn)
});

function rotateFn() {
    this.style.transform = this.style.transform + 'rotate(45deg)';
}