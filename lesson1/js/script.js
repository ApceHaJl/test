let money = prompt("Ваш Бюджет?");
let name = prompt("Название вашего магазина?");


let mainList = {
		budget: money,
		shopname: name,
		shopgoods: [],
		employers: {},
		open: false
}

alert("Ваш бюджет на сегодняшний день составляет " + money / 30 + " Грн.")


for (let i = 0; i < 3; i++) {
		let a = prompt("Какой тип товаров будем продавать?");		
		if ((typeof(a)) === "string" && (typeof(a)) === null && a != "" && a.length < 50);
		mainList.shopgoods[i] = a;
}

// let i = 0;

// while (i < 3) {
// 		let a =  prompt("Какой тип товаров будем продавать?");
// 		if ((typeof(a) === "string") && a != "" && a.leight < 50);
// 		mainList.shopgoods[i] = a;
// 		i++;
// }

// let i = 0;

// do {
// 		let a = prompt("Какой тип товаров будем продавать?");
// 		if ((typeof(a) == "string") && a != "" && a.leight < 50);
// 		mainList.shopgoods[i] = a;
// 		i++;
// } while (i < 3);

// console.log(mainList.budget)
// console.log(mainList.name)
console.log(mainList.shopgoods)
// console.log(mainList.employers)