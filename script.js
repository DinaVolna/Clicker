const btn = document.querySelector('#btn');

const table = document.querySelector('.table');

const rob = document.querySelector('#rob');
const tabr = document.querySelector('.tabr');



console.log(table);



let clicks = 0;

let price = 50;

let robs = 0;

let l = 2;

let buycl = 2;

const infoClicks = {
  'robs1': robs,
  'price': price
};

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

		 localStorage.clear()
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

localStorage.clear();
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