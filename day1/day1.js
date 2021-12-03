const fs = require('fs');
const input = fs.readFileSync('day1/input.txt', 'utf8');

var lines = input.split('\n').map((item) => parseInt(item, 10))
//console.log(lines.length)

var increaseCount = 0
for (let i = 1; i < lines.length; i++) {
    //console.log(typeof(lines[i]))
    //console.log(typeof(lines[i - 1]))
    if (lines[i] > lines[i - 1]) increaseCount++
}

answer1 = increaseCount

var increaseRange = 0
for (let i = 3; i < lines.length; i++) {
    var range1 = lines[i - 3] + lines[i - 2] + lines[i - 1]
    var range2 = lines[i - 2] + lines[i - 1] + lines[i]
    if (range2 > range1) increaseRange++
}
answer2 = increaseRange

module.exports = {
    answer1,
    answer2
}