const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

const fontSize = 16;
const chars = '.,:;-=+!*#$%@&?/\\|<>(){}[]~^';

let columns, drops, speeds;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array.from({ length: columns }, () => Math.random() * -50);
  speeds = Array.from({ length: columns }, () => 0.5 + Math.random() * 1.0);
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + 'px monospace';
  ctx.fillStyle = '#d0d0d0';

  for (let i = 0; i < columns; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
      speeds[i] = 0.5 + Math.random() * 1.0;
    }
    drops[i] += speeds[i];
  }
}

resize();
window.addEventListener('resize', resize);
setInterval(draw, 50);