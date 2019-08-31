const countries = require('./countries');

test('1. empty string => empty array control', () => {
	const emptyStr = countries.find('');
	const expected = [];
	expect(emptyStr).toEqual(expected);
});

test('2. No more then 4 result control', () => {
	const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

	for( let i = 0 ; i < arr.length; i++){
		expect(countries.find(arr[i]).length).not.toBeGreaterThan(4);
	}
});

test('3. Case insensitive control', () => {
	const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	const arr2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	for( let i = 0 ; i < arr1.length; i++){
		expect(countries.find(arr1[i]) == countries.find(arr2[i])).toEqual(true);
	}
});
