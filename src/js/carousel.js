export const carousel = (data) => {
			for (var i=0; i < data.products.length; i++){
				console.log(i);
				
				if (data.products[i].categoryPath[1].name.length){
					let image = data.products[i].largeImage;
					let manu = data.products[i].manufacturer;
					// let category = data.products[i].categoryPath[1].name;
					let price = data.products[i].regularPrice;
					let description = data.products[i].name;
					console.log(description);
					let div = $('<div></div>');	
   					div.html('<div>'+manu+
   						'</div>'+'<div>'+description+'</div>'+
   						'<img src='+image+'>'+'<div>'+price+'</div>'+'<button>'+"ADD TO CART"+'</div>');
					$(".here").append(div);
				}

				else {
					break;
				};
	};
};