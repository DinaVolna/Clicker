const btn = document.querySelector('#btn');

const table = document.querySelector('.table');

const rob = document.querySelector('#rob');
const tabr = document.querySelector('.tabr');



console.log(table);

// document.querySelector('#btn').innerHTML = ;
// document.querySelector('.table').innerHTML = clicks;
// document.querySelector('#rob').innerHTML = 'Buy the robot ' + buycl + ' cl/sec for ' + price + ' cl';
// document.querySelector('.tabr').innerHTML = robs;
let clicks = 0;

let price = 50;

let robs = 0;

//let l = 2;

let buycl = 2;

if (localStorage.getItem('buycl') !== null){
  buycl = Number(localStorage.getItem('buycl'))
}

if (localStorage.getItem('price') !== null){
	price = Number(localStorage.getItem('price'))
}

if (localStorage.getItem('robs') !== null){
	robs = Number(localStorage.getItem('robs'))
}

if (localStorage.getItem('clicks') !== null){
	clicks = Number(localStorage.getItem('clicks'))
}

document.querySelector('.table').innerHTML = 'Your clicks: ' + clicks;
document.querySelector('#rob').innerHTML = 'Buy the robot ' + buycl + ' cl/sec for ' + price + ' cl';
document.querySelector('.tabr').innerHTML = 'Robot: 0 b/sec ' + robs;



// const infoClicks = {
//   'robs1': robs,
//   'price': price
// };

console.log(btn);


btn.addEventListener('click', function(){
  clicks+=1
  table.innerHTML = 'Your clicks: ' + clicks + ' cl'
})


rob.addEventListener('click',
function(){
  if(clicks>=price){ 
  robs += buycl
  clicks -= price
  price += 50

		 
		//	vkpm
			localStorage.setItem('buycl', buycl);
			localStorage.setItem('robs', robs);
			localStorage.setItem('price', price);
			localStorage.setItem('clicks', clicks);


			let buyclLS = localStorage.getItem('buycl')
			console.log(buyclLS)

			let priceLS = localStorage.getItem('price')

		 let robsLS = localStorage.getItem('robs')

			let clicksLS = localStorage.getItem('clicks')


  rob.innerHTML = 'Buy the robot ' + buyclLS + ' cl/sec' + ' for ' + priceLS + ' cl'
  tabr.innerHTML = 'Robot: ' + robsLS + ' b/sec'
  table.innerHTML = 'Your clicks: ' + clicksLS + ' cl'

  


}
})

function robotcl(){
  clicks += robs
 // m += 17
  console.log('55');

//localStorage.clear();
		//	vkpm
		
			localStorage.setItem('buycl', buycl);
			localStorage.setItem('robs', robs);
			localStorage.setItem('price', price);
			localStorage.setItem('clicks', clicks);

			let buyclLS = localStorage.getItem('buycl')
			console.log(buyclLS)

			let priceLS = localStorage.getItem('price')

		 let robsLS = localStorage.getItem('robs')

			let clicksLS = localStorage.getItem('clicks')

  //rob.innerHTML = 'Buy the robot ' + k + ' cl/sec' + ' for ' + m + ' cl'
  table.innerHTML = 'Your clicks: ' + clicksLS + ' cl'
  tabr.innerHTML = 'Robot: ' + robsLS + ' b/sec'

};
setInterval(robotcl, 1000);










// // addListenersCard(cardDom, cardObj) {
// // 	const id = cardObj.id;
// // 	// const btnDanger = cardDom.querySelector('.btn.btn-danger');

// 	btnDanger.addEventListener('click', (event) => {
// 		const findCardIndex = this.findIndexCardLocalStorage('cards', cardObj.id);
// 		if (findCardIndex !== -1) {
// 			this.deleteCard('cards', findCardIndex, cardDom);
// 		}
// 	});
// }

// findIndexCardLocalStorage(keyLocaleStorage, id) {
// 	if (localStorage.getItem(keyLocaleStorage)) {
// 		const arrCards = JSON.parse(localStorage.getItem(keyLocaleStorage));
// 		const findCardIndex = arrCards.findIndex(item => item.id === id);
// 		return findCardIndex;
// 	}
// }

// deleteCard(keyLocaleStorage, indexLocaleStorage, cardDom) {
// 	if (localStorage.getItem(keyLocaleStorage)) {
// 		const arrCards = JSON.parse(localStorage.getItem(keyLocaleStorage));
// 		arrCards.splice(indexLocaleStorage, 1);
// 		localStorage.setItem(keyLocaleStorage, JSON.stringify(arrCards));
// 		console.log(cardDom);
// 		cardDom.remove();
// 	}
// }

// getDomElement() {
// 	return this._card;
// }
// }

// initLocaleStorage();

// function initLocaleStorage() {
// if (localStorage.getItem('cards')) {
// 	const cardsGetLocalStorage = JSON.parse(localStorage.getItem('cards'));
// 	if (Array.isArray(cardsGetLocalStorage)) {
// 		cardsStorage.push(...cardsGetLocalStorage);

// 		for (let i = 0; i < cardsStorage.length; i++) { // проходимся по массиву из объектов карточек и вставляем их в дерево
// 			const item = cardsStorage[i];
// 			const card = new Card(item).getDomElement();
// 			cardContainer.append(card);
// 		}
// 	}
// }
// }


// cardForm.addEventListener('submit', eventCardForm);


// function eventCardForm(event) {
// event.preventDefault();

// const targetForm = event.target;
// const titleDOM = targetForm.title;
// const descriptionDOM = targetForm.description;
// const priceDOM = targetForm.price;

// const maxId = getMaxIdCard(cardsStorage); // получить максимальный id карточек

// const cardObj = {
// 	title: titleDOM.value,
// 	description: descriptionDOM.value,
// 	price: priceDOM.value,
// 	id: maxId + 1
// };

// const card = new Card(cardObj).getDomElement(); // создать dom элемент карточки
// cardContainer.append(card); // вставить в html карточку
// cardsStorage.push(cardObj); // добавить в массив карточку
// localStorage.setItem('cards', JSON.stringify(cardsStorage)); // записать в локальное хранилище массив с карточками

// cardForm.reset(); // очистить форму

// console.log(cardsStorage);

// }


// function getMaxIdCard(cardArr) {
// let maxId = -1;

// for (let i = 0; i < cardArr.length; i++) {
// 	const item = cardArr[i];
// 	console.log(item);
// 	if (item.id > maxId) {
// 		maxId = item.id;
// 	}
// }

// return maxId;
// }
