const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const lines = document.querySelectorAll('.line')
let currentStep = 0

nextButton.addEventListener('click', () => {
    circles[currentStep].classList.add('circleSelect');
    lines[currentStep].classList.add('lineSelect');
    currentStep++;
})

previousButton.addEventListener('click', (event) => {
    if (currentStep > 0) {
        currentStep--;
        circles[currentStep].classList.remove('circleSelect');
        lines[currentStep].classList.remove('lineSelect');
    }
});