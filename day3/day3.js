const fs = require('fs');
const input = fs.readFileSync('day2/input.txt', 'utf8');

var lines = input.split(/\n/)
console.log(lines)

var horiz = 0
var depth = 0

for (const line of lines) {
    parsed = line.split(' ')
    if (parsed[0] == 'forward') horiz += parseInt(parsed[1])
    else if (parsed[0] == 'down') depth += parseInt(parsed[1])
    else depth -= parseInt(parsed[1])
}

answer1 = horiz * depth

var horiz = 0
var depth = 0
var aim = 0

for (const line of lines) {
    parsed = line.split(' ')
    if (parsed[0] == 'forward') {
        horiz += parseInt(parsed[1])
        depth += aim * parseInt(parsed[1])
    } else if (parsed[0] == 'down') aim += parseInt(parsed[1])
    else aim -= parseInt(parsed[1])
}
answer2 = horiz * depth

module.exports = {
    answer1,
    answer2
}