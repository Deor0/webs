const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sliderVal = document.getElementById('myRange')
const value = document.getElementById('val')

const color = document.getElementById('color')

let width = canvas.width = 500
let height = canvas.height = 500

let size = 30;
let fillColor = 'black';

color.addEventListener('change', (e) => {
    fillColor = e.target.value
})

sliderVal.addEventListener('change', (e) => {
    size = e.target.value

    value.innerText = e.target.value
})

let isPressed = false

canvas.addEventListener('mousedown', () => { isPressed = true })
canvas.addEventListener('mouseup', () => { isPressed = false })


canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x = e.offsetX;
        const y = e.offsetY;

        drawCircle(x, y)
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fill()

    ctx.fillStyle = fillColor;
}
