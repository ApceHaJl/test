let money = prompt("Ваш Бюджет?");
let name = prompt("Название вашего магазина?");


let mainList = {
		budget: money,
		shopname: name,
		shopgoods: [],
		employers: [],
		open: false
}

alert("Ваш бюджет на сегодняшний день составляет " + money / 30 + " Грн.")

// console.log(mainList.budget)
// console.log(mainList.name)
// console.log(mainList.shopgoods[1])
// console.log(mainList.employers)