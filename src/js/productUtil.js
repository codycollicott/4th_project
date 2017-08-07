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
		/* The problem is this line 
		this.cartList(sku,product);
		the way you have cartList written says that every time
		the add to cart button is clicked you should append that 
		sku and product to the cart div
		What you should be doing is re-looping through your session
		to build a fresh instance of the cart every time.
		See line 33...
		*/
		// you should run this.cartReBuild() here
		this.getcartItems(); 

	};
	rebuildCart () {
		/* this is where you should be looping through the session
		and rebuilding the cart HTML based on the session  
		1. loop through session
		2. run your cartlist method on each of the session items.
		*/
	}
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


	
