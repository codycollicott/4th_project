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

		this.cartList();
		this.getcartItems();

	};

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
		}

	cartList(){
		let cartItem = $('<div class="itemRows"></div');
		cartItem.html('<p>'+'SKU'+'</p>'+'<div>'+'</div>'+
			'<p>'+'QUANTITY'+'</p>'+'<input type="text" value="0">'+
			'<p>'+'TOTAL'+'</p>'+'<div>'+'</div>'+
			'<button type="button">'+'UPDATE'+'</button>'+'<button type="button">'+'REMOVE'+'</button>');
		$('#listItems').append(cartItem);
	}
}


	
