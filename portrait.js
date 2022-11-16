// source: https://whackd.in/generating-github-like-identicons/
const { createCanvas } = require('canvas');
const fs = require('fs');

const SIZE = 350;
const matrix = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0]];
const canvas = createCanvas(SIZE, SIZE);

const ctx = canvas.getContext('2d');
ctx.fillStyle = '#D3D3D3';
ctx.fillRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
            ctx.fillStyle = '#32CD32';
            ctx.fillRect((j + 1) * 50, (i + 1) * 50, 50, 50);
        }
    }
}

fs.writeFileSync('marvin.png', canvas.toBuffer());
