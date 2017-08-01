/*import Cart from "./cart";*/
import Wallop from 'Wallop';
import request from "./bestbuy";
import {carousel} from "./carousel";

console.log(carousel);

export default class App{
	constructor(){
		this.initBBCall();
	}
	
	initBBCall () {
		request({url: "https://api.bestbuy.com/v1/products(condition=new&(categoryPath.id=abcat0502000))",api : "8ccddf4rtjz5k5btqam84qak"})
		.then(data => {
			carousel(data);

				
			/*  carosel with products */

		})
		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
		});
	}
};

let x = new App;
