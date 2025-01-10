// matrix-rain.js

// Global variables for matrix rain
let matrixCanvas;
let ctx;
let frameCount = 0;
let rainDrops = [];
let fontSize = 16;
let refreshRate = 5;
let speed = 0.3;

const katakana =
  "アカサタナハマヤラワンアイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロ";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const chars = katakana + latin + numbers;

/**
 * Resizes canvas to current window size
 */
function resizeCanvas() {
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;
}

/**
 * Initializes rainDrops array based on canvas width
 */
function initRainDrops() {
  const columns = Math.floor(matrixCanvas.width / fontSize);
  rainDrops = [];
  for (let x = 0; x < columns; x++) {
    rainDrops[x] = Math.random() * matrixCanvas.height;
  }
}

/**
 * Draw the matrix effect
 */
function drawMatrix() {
  // Fade effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

  // Font settings
  ctx.fillStyle = "rgba(83, 241, 20, 0.4)";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    const x = i * fontSize;
    const y = rainDrops[i] * fontSize;

    ctx.fillText(text, x, y);

    if (y > matrixCanvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i] += speed;
  }
}

/**
 * Animation loop
 */
function animateMatrix() {
  frameCount++;
  if (frameCount % refreshRate === 0) {
    drawMatrix();
  }
  requestAnimationFrame(animateMatrix);
}

/**
 * Public function to start matrix rain on a page
 */
export function startMatrixRain() {
  matrixCanvas = document.getElementById("matrixCanvas");
  if (!matrixCanvas) {
    console.error('No canvas with id="matrixCanvas" found.');
    return;
  }
  ctx = matrixCanvas.getContext("2d");

  // On window resize
  window.addEventListener("resize", () => {
    resizeCanvas();
    initRainDrops();
  });

  // Initial setup
  resizeCanvas();
  initRainDrops();
  animateMatrix();
}
