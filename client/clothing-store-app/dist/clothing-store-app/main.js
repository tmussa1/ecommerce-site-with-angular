(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-image: url('background.jpg');\r\n    background-position: center center;\r\n\tbackground-repeat:  no-repeat;\r\n\tbackground-attachment: fixed;\r\n\tbackground-size:  cover;\r\n    background-color: rgb(42, 168, 63);\r\n    border-radius: 25%;\r\n}\r\n\r\n.container-2{\r\n    background-color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVDQUEyRDtJQUMzRCxrQ0FBa0M7Q0FDckMsNkJBQTZCO0NBQzdCLDRCQUE0QjtDQUM1Qix1QkFBdUI7SUFDcEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiAgbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiAgY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDE2OCwgNjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLTJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead  text-center\">\n    <div class=\"container\">\n      <img class=\"img-fluid mt-3 mb-4 d-block\" style=\"border-radius: 25%;\" src=\"../../assets/images/profile.jpg\" >\n    <div class=\"container-2\">\n        <h4 style=\"color:red; opacity: 1;\"><strong>CTO/Serial Enterprenuer</strong></h4>\n        <hr class=\"star-light\">\n        <h4 class=\"font-weight-dark mb-5\" style=\"color:green; opacity: 1;\"><strong>Tofik Mussa </strong><a href=\"mailto:#\">tofahub@gmail.com</a></h4>\n        <h4 class=\"font-weight-dark mb-5\" style=\"color:red; opacity: 1;\"><strong>Software Developer - POJO</strong></h4>\n    </div>\n    </div>\n</header>\n\n\n      \n  "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/products-list/products-list.component.ts");
/* harmony import */ var _app_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _app_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _app_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _app_empty_cart_empty_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/empty-cart/empty-cart.component */ "./src/app/empty-cart/empty-cart.component.ts");
/* harmony import */ var _app_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/confirmation/confirmation.component */ "./src/app/confirmation/confirmation.component.ts");
/* harmony import */ var _app_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/notification/notification.component */ "./src/app/notification/notification.component.ts");











var routes = [{ path: '', component: _app_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'products/list', component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListComponent"] },
    { path: 'about', component: _app_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'subscribe', component: _app_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_7__["SubscribeComponent"] },
    { path: 'products/:id', component: _app_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"] },
    { path: 'cart', component: _app_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"] },
    { path: 'empty', component: _app_empty_cart_empty_cart_component__WEBPACK_IMPORTED_MODULE_8__["EmptyCartComponent"] },
    { path: 'confirmation', component: _app_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmationComponent"] },
    { path: 'notification', component: _app_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["NotificationComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 56px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgcGFkZGluZy10b3A6IDU2cHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">SAMI</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"/\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"/about\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"/products/list\">Products</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"/subscribe\"> <img src=\"../assets/images/notification.jpg\" width=\"25px\" height=\"25px\"> Subscribe</a>\n          </li>\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"/cart\"><img src='../assets/images/cart.jpg' width=\"25px\" height=\"25px\">My Cart</a>\n            </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n<footer class=\"py-5 bg-dark\">\n    <div class=\"container\">\n      <p class=\"m-0 text-center text-white\">Copyright &copy; SAMI Online Store 2019</p>\n    </div>\n  </footer>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'clothing-store-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/products-list/products-list.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _empty_cart_empty_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./empty-cart/empty-cart.component */ "./src/app/empty-cart/empty-cart.component.ts");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "./src/app/confirmation/confirmation.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductsListComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_11__["SubscribeComponent"],
                _empty_cart_empty_cart_component__WEBPACK_IMPORTED_MODULE_12__["EmptyCartComponent"],
                _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_14__["NotificationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirmation/confirmation.component.css":
/*!*********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/confirmation/confirmation.component.html":
/*!**********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 150px;\">\n  <div class=\"jumbotron\">\n          <h1 class=\"display-4\">Thanks for shopping with us</h1>\n          <p class=\"lead\">The following items in your order will be shipped to you. <strong>CONFIRMATION NUMBER GHTRS85747TTSTTST&65433</strong></p>\n          <hr class=\"my-4\">\n          <ul *ngFor=\"let item of itemsInCart\"><li><strong>{{item.name}}</strong></li></ul>\n          <a class=\"btn btn-primary btn-lg\" href=\"/products/list\" role=\"button\">Contniue shopping</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/confirmation/confirmation.component.ts":
/*!********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.ts ***!
  \********************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-service.service */ "./src/app/product-service.service.ts");



var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent(productService) {
        this.productService = productService;
        this.itemsInCart = [];
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getItemsInCart().subscribe(function (cartItems) {
            _this.itemsInCart = cartItems;
            console.log(_this.itemsInCart);
        });
    };
    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirmation',
            template: __webpack_require__(/*! ./confirmation.component.html */ "./src/app/confirmation/confirmation.component.html"),
            styles: [__webpack_require__(/*! ./confirmation.component.css */ "./src/app/confirmation/confirmation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/empty-cart/empty-cart.component.css":
/*!*****************************************************!*\
  !*** ./src/app/empty-cart/empty-cart.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcHR5LWNhcnQvZW1wdHktY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/empty-cart/empty-cart.component.html":
/*!******************************************************!*\
  !*** ./src/app/empty-cart/empty-cart.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 150px;\">\n    <div class=\"jumbotron\">\n            <h1 class=\"display-4\">You have no items in your cart</h1>\n            <p class=\"lead\">We are the number 1 online shop for Women's dresses</p>\n            <hr class=\"my-4\">\n            <p>We ship products all over the world at your convenience</p>\n            <a class=\"btn btn-primary btn-lg\" href=\"/products/list\" role=\"button\">Show me products</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/empty-cart/empty-cart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/empty-cart/empty-cart.component.ts ***!
  \****************************************************/
/*! exports provided: EmptyCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCartComponent", function() { return EmptyCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmptyCartComponent = /** @class */ (function () {
    function EmptyCartComponent() {
    }
    EmptyCartComponent.prototype.ngOnInit = function () {
    };
    EmptyCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-empty-cart',
            template: __webpack_require__(/*! ./empty-cart.component.html */ "./src/app/empty-cart/empty-cart.component.html"),
            styles: [__webpack_require__(/*! ./empty-cart.component.css */ "./src/app/empty-cart/empty-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmptyCartComponent);
    return EmptyCartComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"bg-success py-5 mb-5\">\n    <div class=\"container h-100\">\n      <div class=\"row h-100 align-items-center\">\n        <div class=\"col-lg-12\">\n          <h1 class=\"display-4 text-white mt-5 mb-2\">SAMI online shopping center</h1>\n          <p class=\"lead mb-5 text-white-50\">We are based in the US and Australia. Check us out for your perfect shopping experience</p>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-8 mb-5\">\n        <h2>What We Do</h2>\n        <hr>\n        <p>Ever wondered why there are not many providers of clothes Muslim women around you.</p>\n        <p>You don't need that trip to Dubai to shop what suites your needs. We operate all over the Americas and the Pacific. We guarantee your satisfaction without hurting your wallet</p>\n        <a class=\"btn btn-success btn-lg\" href=\"/products/list\">Browse our store &raquo;</a>\n      </div>\n      <div class=\"col-md-4 mb-5\">\n        <h2>Contact Us</h2>\n        <hr>\n        <address>\n          <strong>For your inquiries</strong>\n          <br>4225 East Broad St \n          <br>Columbus, OH 43213\n          <br>\n        </address>\n        <address>\n          <abbr title=\"Phone\">Phone:</abbr>\n          (202) 840-4694\n          <br>\n          <abbr title=\"Email\">Email:</abbr>\n          <a href=\"mailto:#\">tofahub@gmail.com</a>\n        </address>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-4 mb-5\">\n        <div class=\"card h-100\">\n          <img class=\"card-img-top\" src=\"../../assets/images/kaftan.jpg\" alt=\"\" width=\"200px\" height=\"350px\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Kaftan</h4>\n            <p class=\"card-text\">In this capsule collection designed specifically for the Middle East,\n               Dolce & Gabbana present signature glamorous clothing and accessories glad in a white geranium \n               print.</p>\n          </div>\n          <div class=\"card-footer\">\n            <a href=\"/products/list\" class=\"btn btn-success\">Show me More!</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 mb-5\">\n        <div class=\"card h-100\">\n          <img class=\"card-img-top\" src=\"../../assets/images/kameez.jpg\" alt=\"\" width=\"200px\" height=\"350px\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Kameez</h4>\n            <p class=\"card-text\">Shalwar kameez, is a traditional dress worn by women, and also by men, in South Asia, as well as Central Asia. Shalwars are loose pajama-like trousers. </p>\n          </div>\n          <div class=\"card-footer\">\n            <a href=\"/products/list\" class=\"btn btn-success\">Show me More!</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 mb-5\">\n        <div class=\"card h-100\">\n          <img class=\"card-img-top\" src=\"../../assets/images/eveningDress.jpg\" alt=\"\" width=\"200px\" height=\"350px\">\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Evening Dress</h4>\n            <p class=\"card-text\">The product is used unlined. Long sleeve product. The Zero collar is preferred for all types of clothing. Suitable for 4 seasons</p>\n          </div>\n          <div class=\"card-footer\">\n            <a href=\"/products/list\" class=\"btn btn-success\">Show me More!</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/notification/notification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/notification/notification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top: 150px;\">\n    <div class=\"jumbotron\">\n            <h1 class=\"display-4\">Thanks for subscribing to our channel</h1>\n            <p class=\"lead\">We will keep you posted</p>\n            <hr class=\"my-4\">\n            <p>Sami Online Shopping Center</p>\n            <a class=\"btn btn-primary btn-lg\" href=\"/products/list\" role=\"button\">Keep Purchasing</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(router) {
        this.router = router;
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/notification/notification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"updateQuantity()\">\r\n<div class=\"container\" style=\"margin-top: 150px; margin-bottom: 150px;\">\r\n\t<table id=\"cart\" class=\"table table-hover table-condensed\">\r\n    \t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th style=\"width:50%\">Product Name</th>\r\n\t\t\t\t\t\t\t<th style=\"width:10%\">Price</th>\r\n\t\t\t\t\t\t\t<th style=\"width:8%\">Quantity</th>\r\n\t\t\t\t\t\t\t<th style=\"width:22%\" class=\"text-center\">Subtotal</th>\r\n\t\t\t\t\t\t\t<th style=\"width:10%\"></th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr *ngFor=\"let cart of cartArray; let i=index\">\r\n\t\t\t\t\t\t\t<td data-th=\"Product\" >\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2 hidden-xs\"><img [src]=\"'http://198.211.113.201:8080' + cart.imageUrl\" width=\"75px\" height=\"75px\" class=\"img-responsive\"/></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t\t\t<h4 class=\"nomargin\">{{cart.name}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t<p>{{cart.description}}</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td data-th=\"Price\">{{cart.price}}</td>\r\n\t\t\t\t\t\t\t<td data-th=\"Quantity\">\r\n\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control text-center\" [(ngModel)]=\"cart.quantity\" name=\"quantity\" >\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td data-th=\"Subtotal\" class=\"text-center\">{{cart.subtotal}}</td>\r\n\t\t\t\t\t\t\t<td class=\"actions\" data-th=\"\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-info btn-sm\"><i class=\"fa fa-refresh\"></i></button>\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash-o\"></i></button>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t<tr class=\"visible-xs\">\r\n\t\t\t\t\t\t\t<td class=\"text-center\"><strong>Total {{totalPrice}}</strong></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td><a href=\"/products/list\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\r\n\t\t\t\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\r\n\t\t\t\t\t\t\t<td class=\"hidden-xs text-center\"><strong>Total {{totalPrice}}</strong></td>\r\n\t\t\t\t\t\t\t<td><button type=\"submit\" class=\"btn btn-success btn-block\">Checkout <i class=\"fa fa-angle-right\"></i></button></td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tfoot>\r\n\t\t\t\t</table>\r\n</div>\r\n</form>\r\n<form #bform=\"ngForm\" (ngSubmit)=\"removeItems()\">\r\n\t<button type=\"submit\" class=\"btn btn-danger\" style=\"margin-bottom:300px; margin-left: 965px;\">Empty my cart</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_product_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/product-service.service */ "./src/app/product-service.service.ts");




var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(activatedRoute, router, productService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.product = {};
        this.newItem = {};
        this.cartArray = [];
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.productService.getAProduct(this.id).subscribe(function (incomingProduct) {
            _this.product = incomingProduct;
            _this.newItem = { name: incomingProduct["name"],
                price: incomingProduct["price"],
                description: incomingProduct["description"],
                quantity: 1,
                imageUrl: incomingProduct['imageUrl'],
                subtotal: incomingProduct["price"]
            };
            _this.saveItemToCart(_this.newItem);
            _this.calculateTotal();
        });
        this.fetchItemsInCart();
    };
    ProductDetailsComponent.prototype.updateQuantity = function (aform) {
        this.calculateTotal();
        this.router.navigate(['/confirmation']);
    };
    ProductDetailsComponent.prototype.saveItemToCart = function (item) {
        var _this = this;
        var found = false;
        for (var i = 0; i < this.cartArray.length; i++) {
            if (this.cartArray[i].name == item.name) {
                found = true;
            }
        }
        if (!found) {
            this.productService.addItemToCart(item).subscribe(function (item) {
                _this.fetchItemsInCart();
                return item;
            });
        }
    };
    ProductDetailsComponent.prototype.removeItems = function () {
        var _this = this;
        this.productService.removeAllItemsFromCart().subscribe(function (items) {
            _this.fetchItemsInCart();
            _this.router.navigate(['/empty']);
        });
    };
    ProductDetailsComponent.prototype.calculateTotal = function () {
        var total = 0;
        for (var i = 0; i < this.cartArray.length; i++) {
            this.cartArray[i].subtotal = this.cartArray[i].quantity * this.cartArray[i].price;
            total += this.cartArray[i].quantity * this.cartArray[i].price;
        }
        this.totalPrice = total;
    };
    ProductDetailsComponent.prototype.fetchItemsInCart = function () {
        var _this = this;
        return this.productService.getItemsInCart().subscribe(function (cartItems) {
            _this.cartArray = cartItems;
        });
    };
    ProductDetailsComponent.prototype.navigateToEmptyCart = function () {
        if (this.cartArray == undefined && this.cartArray.length == 0) {
            this.router.navigate(['/empty']);
        }
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_product_service_service__WEBPACK_IMPORTED_MODULE_3__["ProductServiceService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/product-service.service.ts ***!
  \********************************************/
/*! exports provided: ProductServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductServiceService", function() { return ProductServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var ProductServiceService = /** @class */ (function () {
    function ProductServiceService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    ProductServiceService.prototype.getProducts = function () {
        return this.http.get(this.baseUrl + "products");
    };
    ProductServiceService.prototype.getAProduct = function (id) {
        return this.http.get(this.baseUrl + "products/" + id);
    };
    ProductServiceService.prototype.removeAllItemsFromCart = function () {
        return this.http.delete("http://localhost:3000/cart/");
    };
    ProductServiceService.prototype.addItemToCart = function (item) {
        var options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post("http://localhost:3000/cart/addToCart", item);
    };
    ProductServiceService.prototype.getItemsInCart = function () {
        return this.http.get("http://localhost:3000/cart/");
    };
    ProductServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductServiceService);
    return ProductServiceService;
}());



/***/ }),

/***/ "./src/app/products-list/products-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/products-list/products-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    white-space: pre;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/products-list/products-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/products-list/products-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-3\">\n        <h1>MIAS</h1>\n        <div class=\"list-group\">\n          <a href=\"/products/list\" class=\"list-group-item\">Evening Dresses</a>\n          <a href=\"/products/list\" class=\"list-group-item\">Kaftan</a>\n          <a href=\"/products/list\" class=\"list-group-item\">Kameez</a>\n        </div>\n\n      </div>\n\n      <div class=\"col-lg-9\">\n\n        <div id=\"carouselExampleIndicators\" class=\"carousel slide my-4\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner mt-4\" role=\"listbox\">\n            <div class=\"carousel-item active\">\n              <img class=\"d-block\" src=\"../../assets/images/verona.jpg\" height=\"500px\" width=\"500px\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block\" src=\"../../assets/images/verona2.jpg\" height=\"500px\" width=\"500px\">\n            </div>\n            <div class=\"carousel-item\">\n              <img class=\"d-block\" src=\"../../assets/images/verona7.jpg\" height=\"500px\" width=\"500px\">\n            </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n\n        <div class=\"row\" >\n            <div class=\"col-md-4 mb-5\" *ngFor=\"let product of productList\">\n              <div class=\"card h-100\" >\n                <img class=\"card-img-top\" [src]=\"'http://198.211.113.201:8080' +product.imageUrl\" alt=\"\" width=\"200px\" height=\"200px\">\n                <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{product.name}}</h4>\n                  <p class=\"card-text\"><strong>{{product.price}}</strong></p>\n                </div>\n                <div class=\"card-footer\">\n                  <a [routerLink]=\"['/products/' + product._id]\" class=\"btn btn-success\">Add To Cart</a>\n                </div>\n              </div>\n            </div>\n      </div>\n      </div>\n    </div>\n</div>\n\n\n\n "

/***/ }),

/***/ "./src/app/products-list/products-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/products-list/products-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-service.service */ "./src/app/product-service.service.ts");



var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(productService) {
        this.productService = productService;
        this.productList = [];
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (products) {
            _this.productList = products;
        });
    };
    ProductsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! ./products-list.component.html */ "./src/app/products-list/products-list.component.html"),
            providers: [_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]],
            styles: [__webpack_require__(/*! ./products-list.component.css */ "./src/app/products-list/products-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_product_service_service__WEBPACK_IMPORTED_MODULE_2__["ProductServiceService"]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/app/subscribe/subscribe.component.css":
/*!***************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnNjcmliZS9zdWJzY3JpYmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.html":
/*!****************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Subscribe for promotions and updates</h1>\n<h4 style=\"color:grey\">Don't miss out on opportunities to save</h4>\n<form #myform=\"ngForm\" (ngSubmit)=\"saveNotification(myform)\" class=\"mt-5 mb-5\">\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6 mb-3\">\n      <label >Email</label>\n      <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\" \n      [(ngModel)]=\"emailStr\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n    </div>\n    <div *ngIf=\"!email.valid\" class=\"alert alert-danger\">\n      <div *ngIf=\"email.errors && email.errors.pattern\">\n        Please enter a valid email address.\n      </div>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label>How did you hear about us? </label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Google search\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label >Address</label>\n    <input type=\"text\" class=\"form-control\"  placeholder=\"1234 Main St\" name=\"address\"\n     #address=\"ngModel\" [(ngModel)]=\"addressStr\" required>\n  </div>\n  <div *ngIf=\"address.touched && address.errors?.required\" class=\"alert alert-danger\">\n    Address is a required field.\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputAddress2\">Address 2</label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Apartment, studio, or floor\">\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label >City</label>\n      <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group col-md-4\">\n        <label >State</label>\n        <input type=\"text\" class=\"form-control\">\n    </div>\n    <div class=\"form-group col-md-2\">\n      <label for=\"inputZip\">Zip</label>\n      <input type=\"text\" class=\"form-control\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n      <label class=\"form-check-label\" for=\"gridCheck\">\n       Send me promotional emails\n      </label>\n    </div>\n  </div>\n  <h4 style=\"color:grey\">We appreciate your business</h4>\n  <button type=\"submit\" class=\"btn btn-danger\">Notify Me!</button>\n</form>\n\n \n\n\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent(router) {
        this.router = router;
        this.emailStr = "";
        this.addressStr = " ";
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent.prototype.saveNotification = function (form) {
        this.emailStr = form.value.email;
        this.addressStr = form.value.address;
        if (this.addressStr.length != 0 && this.emailStr.length != 0) {
            this.router.navigate(['/notification']);
        }
    };
    SubscribeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/subscribe/subscribe.component.html"),
            styles: [__webpack_require__(/*! ./subscribe.component.css */ "./src/app/subscribe/subscribe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: "http://198.211.113.201:8080/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tofik Mussa\Desktop\MS in CS\CSCI E-31\E31-Projects\assignment-7\client\clothing-store-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map