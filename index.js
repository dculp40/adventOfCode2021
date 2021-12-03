const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');

var lines = input.split('\n').map((item) => parseInt(item, 10))
//console.log(lines.length)

var increaseCount = 0
for (let i = 1; i < lines.length; i++) {
    //console.log(typeof(lines[i]))
    //console.log(typeof(lines[i - 1]))
    if (lines[i] > lines[i - 1]) increaseCount++
}

console.log(increaseCount)

