/*import Cart from "./cart";*/
import request from "./bestbuy";
import {carousel} from "./carousel";
import productUtil from "./productUtil";


// $(".button").on("click", function(){
// 	var selected = $(".button").val();

// (condition=new&(categoryPath.id=abcat0502000)) laptops
// (condition=new&(categoryPath.id=pcmcat209400050001)) cell phones
// (condition=new&(categoryPath.id=abcat0204000)) headphones
// (condition=new&(categoryPath.id=abcat0101000)) TVs

export default class App{
	constructor(){
		this.cat_clicked = "((categoryPath.id=abcat0502000))";
		this.initBBCall();
		this.catListeners();

	}

	
	initBBCall () {
		request({url: "https://api.bestbuy.com/v1/products"+this.cat_clicked ,api : "8ccddf4rtjz5k5btqam84qak"})
		.then(data => {
			carousel(data);
			this.atcListeners();

	
			/*  carosel with products */

		})
		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
		});
	}

	
	atcListeners () {

		let test = document.getElementsByClassName('atc');
		for (var i = 0; i < test.length; i++){
			test[i].addEventListener("click", (e) =>  {
    			let sku = e.target.getAttribute("data-sku");
    			let price = e.target.getAttribute("data-price");
    			new productUtil().addToCart(sku,price);
 
			})
		}
    }

    catListeners () {
    	let test_two = document.getElementsByClassName('categories');
    	for (var i = 0; i < test_two.length; i++){
    	test_two[i].addEventListener('click', (e) => {
    		this.cat_clicked = e.target.value;
    		console.log(this.cat_clicked);
    		this.initBBCall();

    	})


    	};

    }
	
};

let x = new App;














