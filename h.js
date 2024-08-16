let images = document.querySelectorAll('.image');
let timeoutId = null;
let currentIndex = 0;

function swapImages() {
    let nextIndex = (currentIndex + 1) % images.length;
    
    images.forEach((image, index) => {
        let targetClass = `top-${nextIndex === 0 ? 'left' : nextIndex === 1 ? 'right' : 'center'}`;
        image.className = `image ${targetClass}`;
    });
    
    currentIndex = nextIndex;
}

function startSwap() {
    timeoutId = setTimeout(swapImages, 500); // Delay of 500ms
}

function cancelSwap() {
    clearTimeout(timeoutId);
}

images.forEach(image => {
    image.addEventListener('mouseover', startSwap);
    image.addEventListener('mouseout', cancelSwap);
});
