const colors = [ '#FF5733', '#33FFA8', '#339CFF', '#FF33E4'];
let currentColorIndex = 0;

function changeBackgroundColor() {
    let overlays = document.querySelectorAll('.overlay');
    let currentColor = colors[currentColorIndex];

    overlays.forEach((overlay, index) => {
        setTimeout(() => {
            overlay.style.backgroundColor = currentColor;
            overlay.style.opacity = "1"

            setTimeout(() => {
                overlay.style.opacity = "0"
            }, 1000);
        }, index * 1500);
    });

    currentColorIndex = (currentColorIndex + 1) % colors.length; 
}

document.getElementById('changeColorBtn').addEventListener('click', () => {
    setInterval(changeBackgroundColor, 1500);
});
