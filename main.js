var people = [
	{
		firstName:"Amanda",
		lastName:"Harris",
		age: 42,
		gender: "F",
		children: [
			{
				name: "Ben",
				childAge: 18,
				childGender: "M"
			},
			{
				name: "Lisa",
				childAge: 15,
				childGender: "F"
			}
		]
	},
	{
		firstName:"Brian",
		lastName:"Hall",
		age: 36,
		gender: "M",
		children: [
			{
				name: "Erica",
				childAge: 11,
				childGender: "F"
			},
			{
				name: "Jenny",
				childAge: 8,
				childGender: "F"
			}
		]
	},
	{
		firstName:"Terrence",
		lastName:"Smith",
		age: 49,
		gender: "M",
		children: [
			{
				name: "David",
				childAge: 17,
				childGender: "M"
			},
			{
				name: "Alex",
				childAge: 23,
				childGender: "F"
			},
			{
				name: "Jose",
				childAge: 25,
				childGender: "M"
			}
		]
	},
	{
		firstName:"Alyssa",
		lastName:"Ingram",
		age:28,
		gender:"F",
		children: [
			{
				name: "Jamie",
				childAge: 3,
				childGender: "F"
			},
			{
				name: "Lori",
				childAge: 2,
				childGender: "F"
			}
		]
	}
];


// Exercise 1:

// people[0].children.push({
// 	name: "Joe",
// 	childAge: 24
// });

// people[0].children[people[0].children.length] = {

// };

// people[1].children.push({
// 	name: "Alex",
// 	childAge: 18
// });

// people[2].children.push({
// 	name: "Dillon",
// 	childAge: 22
// });

// people[3].children.push({
// 	name: "Bobby",
// 	childAge: 23
// });


// console.log(people)

// Exercise 2:

// for (var i = 0; i < people.length; i++) {
// 	if (people[i].gender === "M") {
// 	people[i].age += 5;
// 	}
// }

// console.log(people)

// Exercise 3:

// var sum = 0;
// var i = 0;

// while (i < people.length) {
// 	sum += people[i].age;
// 	i++; 
// }

// var avg = sum / people.length;

// console.log(avg)


// Exercise 4;

// for (var i = 0; i < people.length; i++) {
// 	for (var j = 0; j < people[i].children.length; j++) {
// 		console.log(people[i].children[j].name + " (" + people[i].children[j].childAge + ", " + people[i].children[j].childGender + ")");
// 	}
// }

// Exercise 5;

var maleSum = 0;
var femaleSum = 0;

var maleCount = 0;
var femaleCount = 0;

for (var i = 0; i < people.length; i++) {
	for (var j = 0; j < people[i].children.length; j++) {
		if (people[i].children[j].childGender === "M"){
			maleSum += people[i].children[j].childAge;
			// increment maleCount so you can get the avg
			maleCount++;
		} else if (people[i].children[j].childAge < 12) {
			femaleSum += people[i].children[j].childAge;
			// increment femaleCount so you can get the avg
			femaleCount++;
		}
	}
}
maleAvg = maleSum / maleCount;
femaleAvg = femaleSum / femaleCount;

console.log(maleAvg);
console.log(femaleAvg);










	






