const image = document.getElementById('moveImage');

function startFloating() {
    let moveUp = true;
    setInterval(() => {
        image.style.transform = `translateY(${moveUp ? '-10px' : '10px'})`;
        moveUp = !moveUp;
    }, 2000); // Change position every 2 seconds
}

window.onload = startFloating; // Start floating effect when the page loads
