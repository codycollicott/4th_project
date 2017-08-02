export default class productUtil{
	constructor (){
		this.addToCart();
	}
	
	addToCart (){
		let price = $(this).data('price');
		let data = $(this).data('sku');
		console.log(price, data);
	}

};

