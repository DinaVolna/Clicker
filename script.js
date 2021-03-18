const btn = document.querySelector('#btn');

const table = document.querySelector('.table');

const rob = document.querySelector('#rob');
const tabr = document.querySelector('.tabr');

const del = document.querySelector('#del');


let clicks = 0;

let price = 50;

let robs = 0;

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
 
  console.log('55');


		
			localStorage.setItem('buycl', buycl);
			localStorage.setItem('robs', robs);
			localStorage.setItem('price', price);
			localStorage.setItem('clicks', clicks);

			let buyclLS = localStorage.getItem('buycl')
			console.log(buyclLS)

			let priceLS = localStorage.getItem('price')

		 let robsLS = localStorage.getItem('robs')

			let clicksLS = localStorage.getItem('clicks')

  
  table.innerHTML = 'Your clicks: ' + clicksLS + ' cl'
  tabr.innerHTML = 'Robot: ' + robsLS + ' b/sec'

};
setInterval(robotcl, 1000);

del.addEventListener('click', function(){
	localStorage.clear()
	clicks = 0;

	price = 50;

	robs = 0;


	buycl = 2;
})
