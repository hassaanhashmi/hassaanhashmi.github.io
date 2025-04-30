// encom-grid.js

const canvas = document.getElementById('background-grid');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;  
}
window.addEventListener('resize', resize);
resize();

function drawGrid() {
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = '#00ffff';
  ctx.lineWidth = 0.5;

  const spacing = 50;
  for (let x = 0; x < width; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}

function animate() {
  drawGrid();
  requestAnimationFrame(animate);
}
animate();
