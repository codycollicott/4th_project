/*import Cart from "./cart";*/

import request from "./bestbuy";
import carousel from "./carousel";

console.log(request)
console.log(carousel)

export default class App{
	constructor(){
		this.initBBCall;
	}
	
	initBBCall () {
		request({url: "https://api.bestbuy.com/v1/products",api : "8ccddf4rtjz5k5btqam84qak"})
		.then(data => {
			/* fill carosel with products */
		})
		.catch(error => {
			console.log("warning Christopher Robins... Error");
			console.log(error);
		});
	}
}
let x = new App;