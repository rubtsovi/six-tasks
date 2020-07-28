const canvas: HTMLCanvasElement = document.querySelector("#square-canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.body.clientWidth;

const maxLeft = canvas.width - 100;
const minW = 50;
const maxW = 100;

let x = 0;
let colorInterval = 0;
let direction = 1;

let last: number = performance.now();

const getRandom = (max: number, min: number = 0): number => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomColor = (): string => {
  const r = getRandom(255);
  const g = getRandom(255);
  const b = getRandom(255);
  return `rgb(${r}, ${g}, ${b})`;
};

const calcWidth = (): number => {
  return (x * (maxW - minW)) / maxLeft + minW;
};

const roundXRatio = (precision = 2): number => {
  return Math.round((x / maxLeft + Number.EPSILON) * 10 ** precision) / 10 ** precision;
};

const draw = (timestamp: number) => {
  requestAnimationFrame(draw);
  const dx = (timestamp - last) / 5;

  if (roundXRatio(1) === 1) {
    direction = -1;
  } else if (roundXRatio(1) === 0) {
    direction = 1;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  const w = roundXRatio() === 0 ? minW : calcWidth();
  ctx.rect(x, 0, w, w);

  colorInterval += dx;
  if (colorInterval >= 20) {
    ctx.fillStyle = randomColor();
    colorInterval = 0;
  }
  ctx.fill();

  x += dx * direction;
  last = timestamp;
};

requestAnimationFrame(draw);
