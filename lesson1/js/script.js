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
		console.log("Все верно!");
		mainList.shopgoods[i] = a;

}



// console.log(mainList.budget)
// console.log(mainList.name)
console.log(mainList.shopgoods)
// console.log(mainList.employers)