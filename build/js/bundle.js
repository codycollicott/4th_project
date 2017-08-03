(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (obj) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url + '?apiKey=' + obj.api + '&format=json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.statusText);
            }
        };
        xhr.onerror = function () {
            return reject(xhr.statusText);
        };
        xhr.send(obj.body);
    });
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var carousel = exports.carousel = function carousel(data) {

	document.getElementById("here").innerHTML = "";

	for (var i = 0; i < data.products.length; i++) {

		if (data.products[i].largeImage.length) {
			var image = data.products[i].largeImage;
			var manu = data.products[i].manufacturer;
			// let category = data.products[i].categoryPath[1].name;
			var price = data.products[i].regularPrice;
			var description = data.products[i].name;
			var sku = data.products[i].sku;
			var div = $('<div></div>');
			div.html('<div>' + manu + '</div>' + '<div>' + description + '</div>' + '<img src=' + image + '>' + '<div>' + price + '</div>' + '<button class="atc" data-sku="' + sku + '" data-price="' + price + '">' + "ADD TO CART" + '</div>');
			$("#here").append(div);
		} else {
			break;
		};
	};
};

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*import Cart from "./cart";*/


var _bestbuy = require("./bestbuy");

var _bestbuy2 = _interopRequireDefault(_bestbuy);

var _carousel = require("./carousel");

var _productUtil = require("./productUtil");

var _productUtil2 = _interopRequireDefault(_productUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.cat_clicked = "((categoryPath.id=abcat0502000))";
		this.initBBCall();
		this.catListeners();
	}

	_createClass(App, [{
		key: "initBBCall",
		value: function initBBCall() {
			var _this = this;

			(0, _bestbuy2.default)({ url: "https://api.bestbuy.com/v1/products" + this.cat_clicked, api: "8ccddf4rtjz5k5btqam84qak" }).then(function (data) {
				(0, _carousel.carousel)(data);
				_this.atcListeners();

				/*  carosel with products */
			}).catch(function (error) {
				console.log("warning Christopher Robins... Error");
				console.log(error);
			});
		}
	}, {
		key: "atcListeners",
		value: function atcListeners() {

			var test = document.getElementsByClassName('atc');
			for (var i = 0; i < test.length; i++) {
				test[i].addEventListener("click", function (e) {
					var sku = e.target.getAttribute("data-sku");
					var price = e.target.getAttribute("data-price");
					new _productUtil2.default().addToCart(sku, price);
				});
			}
		}
	}, {
		key: "catListeners",
		value: function catListeners() {
			var _this2 = this;

			var test_two = document.getElementsByClassName('categories');
			for (var i = 0; i < test_two.length; i++) {
				test_two[i].addEventListener('click', function (e) {
					_this2.cat_clicked = e.target.value;
					console.log(_this2.cat_clicked);
					_this2.initBBCall();
				});
			};
		}
	}]);

	return App;
}();

exports.default = App;
;

var x = new App();

},{"./bestbuy":1,"./carousel":2,"./productUtil":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var productUtil = function () {
	function productUtil() {
		_classCallCheck(this, productUtil);
	}

	_createClass(productUtil, [{
		key: "addToCart",
		value: function addToCart(price, sku) {
			console.log(price, sku);
		}
	}]);

	return productUtil;
}();

exports.default = productUtil;
;

},{}]},{},[3]);
