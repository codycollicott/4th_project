export default class productUtil{
	constructor (){
		
		
	}
	
	addToCart (sku, price){
		let product={price, quantity:1};
		

		function store(sku, product) {
			if (sessionStorage.getItem(sku) == undefined){
				sessionStorage.setItem(sku,JSON.stringify(product));
				}

			else {
				let oldValue=JSON.parse(sessionStorage.getItem(sku));
				oldValue.quantity += product.quantity;
				sessionStorage.setItem(sku,JSON.stringify(oldValue));
			}

		}

		store(sku,product);

	}


};

