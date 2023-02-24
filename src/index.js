module.exports = function toReadable(number) {

	let stringed = number.toString();
	let units = [
		'',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'];
	let dozens = [
		'',
		'',
		'twenty',
		'thirty',
		'forty',
		'fifty',
		'sixty',
		'seventy',
		'eighty',
		'ninety'];


	//edges
	if (number === 0) {
		return 'zero';
	}
	if (number < 0) {
		return 'number is too small, enter number from 0 to 999';
	}
	if (stringed.length > 3) {
		return 'number is too big, enter number from 0 to 999';
	}

	//dozens
	if (number < 20) {
		return units[number]
	} else if (stringed.length === 2) {
		if (number % 10 === 0) {
			return dozens[(number / 10)]
		} else {
			return `${dozens[stringed[0]]} ${units[stringed[1]]}`
		}
	}
	//hundreds
	else if (stringed.length === 3) {
		if (stringed[1] === '0' && stringed[2] === '0') {
			return `${units[stringed[0]]} hundred`
		} else if (stringed[1] === '0') {
			return `${units[stringed[0]]} hundred ${units[stringed[2]]}`
		} else if (stringed[1] === '1') {
			return `${units[stringed[0]]} hundred ${units[stringed[1] + stringed[2]]}`
		} else if (stringed[2] === '0') {
			return `${units[stringed[0]]} hundred ${dozens[stringed[1]]}`
		} else {
			return `${units[stringed[0]]} hundred ${dozens[stringed[1]]} ${units[stringed[2]]}`
		}
	} return `smth went wrong`
}