//138.1 Многомерные массивы в JavaScript
// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0]);

//138.2
// let arr = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6],
// ];

// let res =
// 	+arr[0][0] + +arr[0][1] + +arr[1][0] + +arr[1][1] + +arr[2][0] + arr[2][1];
// console.log(res);

//138.3 Трехмерный массив
// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];

// let sum = 0;

// arr = arr.flat(Infinity);

// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }
// console.log(sum);

// let res =
// 	+arr[0][0][0] +
// 	+arr[0][0][1] +
// 	+arr[0][1][0] +
// 	+arr[0][1][1] +
// 	+arr[1][0][0] +
// 	+arr[1][0][1] +
// 	+arr[1][1][0] +
// 	+arr[1][1][1];

// console.log(res);

//138.4 Произвольные массивы

// let arr = [
// 	[1, 2, 3, [4, 5, [6, 7]]],
// 	[8, [9, 10]],
// ];

// let res =
// 	+arr[0][0] +
// 	+arr[0][1] +
// 	+arr[0][2] +
// 	+arr[0][3][0] +
// 	+arr[0][3][1] +
// 	+arr[0][3][2][0] +
// 	+arr[0][3][2][1] +
// 	+arr[1][0] +
// 	+arr[1][1][0] +
// 	+arr[1][1][1];

// console.log(res);

//139.1 Перебор многомерных массивов в JavaScript
// let arr = [[1, 2, 3], [4, 5], [6]];

// let sum = 0;

// for (let oneArr of arr) {
// 	for (let elem of oneArr) {
// 		sum += elem;
// 	}
// }
// console.log(sum);

//139.2
// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];

// arr = arr.flat(Infinity);

// let sum = 0;

// for (let elem of arr) {
// 	sum += elem;
// }
// console.log(sum);

//139.3 Перебор через обычный for Не решено
// let arr = [[1, 2, 3], [4, 5], [6]];

// 1;
// let sum = 0;
// arr = arr.flat();

// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }
// console.log(sum);

// 2
//let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];

// var sum = 0;
// arr = arr.flat(Infinity);

// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }

// console.log(sum);

//140.1 Заполнение многомерных массивов JavaScript
// let arr = [];

// for (let i = 0; i < 5; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 5; j++) {
// 		arr[i].push(j + 1);
// 	}
// }
// console.log(arr);

//140.2
// let arr = [];

// for (let i = 0; i < 4; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 4; j++) {
// 		arr[i].push('x');
// 	}
// }
// console.log(arr);

//140.3 Не решено
// let arr = [];

// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]
// let c = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		for (let k = 0; k < 5; k++) {
// 			arr[i][j] = k + c;
// 		}
// 	}
// }

// console.log(arr);

//141.1 Проблемы при заполнении многомерных массивов в JavaScript
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

//141.2
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j + 1);
// 	}
// }

// console.log(arr);

//141.3
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j + 1);
// 	}
// }

// console.log(arr);

//141.4
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j + 1);
// 	}
// }

// console.log(arr);

//141.5
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j + 1);
// 	}
// }

// console.log(arr);

//141.6
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j + 1);
// 	}
// }

// console.log(arr);

//142.1 Заполнение многомерных массивов по порядку в JavaScript
// let arr = [];

// for (let i = 0, k = 1; i < 4; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 2; j++) {
// 		arr[i].push(k++);
// 	}
// }
// console.log(arr);

//142.2
// [
// 	[2, 4, 6],
// 	[8, 10, 12],
// 	[14, 16, 18],
// 	[20, 22, 24],
// ];

// let arr = [];

// for (let i = 0, k = 1; i < 4; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++ * 2);
// 	}
// }
// console.log(arr);

//142.3 Не решено
// [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];

// let arr = [];

// for (let i = 0, k = 1; i < 2; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 2; j++) {
// 		arr[i].push(k++);
// 		let newArr = [];
// 		for (let x = 0; x < 4; x++) {
// 			newArr.push(i + j + x);
// 		}
// 	}
// }
// console.log(arr);

//142.4
// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);

//142.5
// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++);
// 	}
// }

// console.log(arr);

//142.6
// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);

//142.7
// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);

//142.8
// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);

//142.9
// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0, k = 1; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }

// console.log(arr);

//142.10
// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);

//142.11
// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }

// console.log(arr);

//142.12
// let arr = [];
// let k = 1;

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++;
// 	}
// }

// console.log(arr);

//142.13
// let arr = [];

// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k++;
// 	}
// }

// console.log(arr);

//143.1 Многомерные объекты в JavaScript
// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// };

// let sum = 0;

// for (let key in obj) {
// 	let innerObj = obj[key];
// 	for (let innerKey in innerObj) {
// 		sum += innerObj[innerKey];
// 	}
// }

// console.log(sum);

//143.2
// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// };
// console.log(obj[2][2], obj[3][1]);

//143.3

// let obj = {
// 	key1: {
// 		a: 1,
// 		b: 2,
// 		c: {
// 			d: 3,
// 			e: 4,
// 		},
// 		f: 5,
// 	},
// 	key2: {
// 		g: 6,
// 		h: 7,
// 	},
// };

// let res =
// 	obj['key1']['a'] +
// 	obj['key1']['b'] +
// 	obj['key1']['c']['d'] +
// 	obj['key1']['c']['e'] +
// 	obj['key1']['f'] +
// 	obj['key2']['g'] +
// 	obj['key2']['h'];
// console.log(res);

//144.1 Перебор многомерных объектов в JavaScript
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// };

// let sum = 0;

// for (let key in obj) {
// 	let subObj = obj[key];

// 	for (let subKey in subObj) {
// 		sum += subObj[subKey];
// 	}
// }
// console.log(sum);

//144.2
// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// };

// let sum = 0;

// for (let key in obj) {
// 	let subObj = obj[key];

// 	for (let subKey in subObj) {
// 		let innerRes = subObj[subKey];
// 		for (let resObj in innerRes) {
// 			sum += innerRes[resObj];
// 		}
// 	}
// }
// console.log(sum);

//145.1 Многомерные структуры в JavaScript
// let students = {
// 	group1: ['name11', 'name12', 'name13'],
// 	group2: ['name21', 'name22', 'name23'],
// 	group3: ['name31', 'name32', 'name33'],
// };
// console.log(students['group3'][0]);

//146.1 Перебор многомерных структур JavaScript
// let data = {
// 	1: ['data11', 'data12', 'data13'],
// 	2: ['data21', 'data22', 'data23'],
// 	3: ['data31', 'data32', 'data33'],
// 	4: ['data41', 'data42', 'data43'],
// };

// for (let dataInf in data) {
// 	for (let inf of data[dataInf]) {
// 		console.log(inf);
// 	}
// }

//146.2
// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];

// for (let i = 0; i < data.length; i++) {
// 	let newKey = data[i];
// 	for (let key in newKey) {
// 		console.log(newKey[key]);
// 	}
// }

//146.3
// let data = [
// 	{
// 		1: ['data111', 'data112', 'data113'],
// 		2: ['data121', 'data122', 'data123'],
// 	},
// 	{
// 		1: ['data211', 'data212', 'data213'],
// 		2: ['data221', 'data222', 'data223'],
// 	},
// 	{
// 		1: ['data411', 'data412', 'data413'],
// 		2: ['data421', 'data422', 'data423'],
// 	},
// ];

// for (let i = 0; i < data.length; i++) {
// 	let newKey = data[i];
// 	for (let key in newKey) {
// 		console.log(newKey[key]);
// 	}
// }

//147.1 Массив объектов в JavaScript
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// for (let name of employees) {
// 	console.log(name.name + ' ' + name.salary);
// }

//147.2
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// let sum = 0;

// for (let elem of employees) {
// 	sum += elem.salary;
// }
// console.log(sum);

//147,3
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];

// let sum = 0;

// for (let elem of employees) {
// 	if (elem.age == 30 || elem.age > 30) {
// 		sum += elem.salary;
// 		let name = elem.salary;
// 	}
// }
// console.log(
// 	'Зарплата всеx работников, возраст которых больше или равен 30: ' + sum
// );

//148,1 Ключи из переменных в многомерных структурах JavaScript
// let months = {
// 	ru: [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	en: [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };

// let lang = 'ru'; // может быть или 'ru' или 'en'
// let month = 5; // число от 0 до 11

// console.log(months[lang][month]);

//148.2
// let affairs = {
// 	2018: {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	2019: {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		},
// 	},
// };
// let year = 2019;
// let month = 12;
// let day = 31;

// console.log(affairs[year][month][day][0]);

//148.3
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// };

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);

//148.4
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// };

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);

//148.5
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// };

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1]['key4']);

//148.6
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// };

// let key1 = 'key2';
// console.log(obj[key1]['key4']);

//149.1 Добавление элементов в многомерные массивы JavaScript
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// ];
// employees.push({
// 	name: 'Temirlan',
// 	salary: 5000,
// 	age: 19,
// });
// console.log(employees);

//150.1 Добавление элементов в многомерные объекты JavaScript
// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// };
// console.log(affairs);

//150.2
// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// };
// affairs['2019-12-29'].push('NewDataForExample');

// console.log(affairs);

//150.3
// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// };
// affairs['2019-12-31'] = [];
// affairs['2019-12-31'].push('NewDataForExample', 'TwiceDataForExample');

// console.log(affairs);

//150.4
// let students = {
// 	group1: {
// 		subgroup11: ['student111', 'student112', 'student113'],
// 		subgroup12: ['student121', 'student122', 'student123'],
// 	},
// 	group2: {
// 		subgroup21: ['student211', 'student212', 'student213'],
// 		subgroup22: ['student221', 'student222', 'student223'],
// 	},
// 	group3: {
// 		subgroup31: ['student311', 'student312', 'student313'],
// 		subgroup32: ['student321', 'student322', 'student323'],
// 	},
// };

//150.5
// let students = {
// 	group1: {
// 		subgroup11: ['student111', 'student112', 'student113'],
// 		subgroup12: ['student121', 'student122', 'student123'],
// 	},
// 	group2: {
// 		subgroup21: ['student211', 'student212', 'student213'],
// 		subgroup22: ['student221', 'student222', 'student223'],
// 	},
// 	group3: {
// 		subgroup31: ['student311', 'student312', 'student313'],
// 		subgroup32: ['student321', 'student322', 'student323'],
// 	},
// };

// students.group1.subgroup11.push('Temirlan');

// console.log(students);

//150.6
// let students = {
// 	group1: {
// 		subgroup11: ['student111', 'student112', 'student113'],
// 		subgroup12: ['student121', 'student122', 'student123'],
// 	},
// 	group2: {
// 		subgroup21: ['student211', 'student212', 'student213'],
// 		subgroup22: ['student221', 'student222', 'student223'],
// 	},
// 	group3: {
// 		subgroup31: ['student311', 'student312', 'student313'],
// 		subgroup32: ['student321', 'student322', 'student323'],
// 	},
// };

// students.group1.subgroup13 = [];
// students.group1.subgroup13.push('NewStudent1', 'NewStudent2');

// console.log(students);

//150.7
// let students = {
// 	group1: {
// 		subgroup11: ['student111', 'student112', 'student113'],
// 		subgroup12: ['student121', 'student122', 'student123'],
// 	},
// 	group2: {
// 		subgroup21: ['student211', 'student212', 'student213'],
// 		subgroup22: ['student221', 'student222', 'student223'],
// 	},
// 	group3: {
// 		subgroup31: ['student311', 'student312', 'student313'],
// 		subgroup32: ['student321', 'student322', 'student323'],
// 	},
// };

// students.group4 = [];
// students.group4.subgroupBest = [];

// students.group4.subgroupBest.push('NewStudent1', 'NewStudent2');

// console.log(students);
