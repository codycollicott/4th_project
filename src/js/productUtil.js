export default class productUtil{
	constructor (){
		
	};
	
	addToCart (sku, price){

		let product={price, quantity:1};

		if (sessionStorage.getItem(sku) == undefined){
			sessionStorage.setItem(sku,JSON.stringify(product));
		}

		else {
			let oldValue=JSON.parse(sessionStorage.getItem(sku)); 
			let newValue = oldValue.quantity + 1;
			product.quantity = newValue;
			sessionStorage.setItem(sku,JSON.stringify(product));
		}

		this.cartList(sku,product);
		this.getcartItems();

	};

	cartList(sku, product){
		let cartItem = $('<div class="itemRows"></div>');
		cartItem.html('<div>'+'SKU'+'</div>'+'<div>'+sku+'</div>'+
			'<div>'+'QUANTITY'+'</div>'+'<input type="number" value="'+product.quantity+'">'+
			'<div>'+'TOTAL'+'</div>'+'<div>'+'</div>'+
			'<button type="button">'+'UPDATE'+'</button>'+'<button type="button">'+'REMOVE'+'</button>');
		$('#listItems').append(cartItem);
		
	}

	getcartItems(){
		let totalPrice = 0;
		let totalQny = 0;
		for (let key in sessionStorage) {
			let x = JSON.parse(sessionStorage[key]);
			totalQny = totalQny + x.quantity;
			document.getElementById('cartnum').innerHTML= totalQny;
			totalPrice += x.price * x.quantity;
			document.getElementById('price').innerHTML= totalPrice;
			}
		};

}


	
