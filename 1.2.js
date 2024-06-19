// Advent of Code: 2015, Day 1
/*
--- Part Two ---

Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

For example:

    ) causes him to enter the basement at character position 1.
    ()()) causes him to enter the basement at character position 5.

What is the position of the character that causes Santa to first enter the basement?
*/

let fs = require('fs');
const { exit } = require('process');

fs.readFile(__dirname + '/inputs/1.2.txt', {
	encoding: 'utf8'
}, (err, data) => {
	if (err) throw err;
	let floor = 0;
	data.split('').forEach((char, idx) => {
		switch (char) {
			case '(':
				floor++;
				break;
			case ')':
				floor--;
				if (floor === -1) {
					console.log('Basement entered at:', idx + 1);
					exit();
				}
				break;
		};

	}
	);
});
