document.querySelector('.neon-text');

function changeColor() {
    const colors = ['#ff00de', '#00ffff', '#ff9900', '#66ff33']; 
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
    neonText.style.color = randomColor; 
}

setInterval(changeColor, 500);