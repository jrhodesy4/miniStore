webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customers_customers_component__ = __webpack_require__("../../../../../src/app/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: 'customers', component: __WEBPACK_IMPORTED_MODULE_4__customers_customers_component__["a" /* CustomersComponent */] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_2__orders_orders_component__["a" /* OrdersComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_3__products_products_component__["a" /* ProductsComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='navbar'>\n  <a [routerLink]=\"['/products']\">Products</a>\n  <a [routerLink]=\"['/orders']\">Orders</a>\n  <a [routerLink]=\"['/customers']\">Customers</a>\n  <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customers_customers_component__ = __webpack_require__("../../../../../src/app/customers/customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_new_new_component__ = __webpack_require__("../../../../../src/app/products/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_list_list_component__ = __webpack_require__("../../../../../src/app/products/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__customers_new_new_component__ = __webpack_require__("../../../../../src/app/customers/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customers_list_list_component__ = __webpack_require__("../../../../../src/app/customers/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__orders_new_new_component__ = __webpack_require__("../../../../../src/app/orders/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__orders_list_list_component__ = __webpack_require__("../../../../../src/app/orders/list/list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__customers_customers_component__["a" /* CustomersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__products_new_new_component__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__products_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__customers_new_new_component__["a" /* NewCustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_14__customers_list_list_component__["a" /* ListCustomerComponent */],
            __WEBPACK_IMPORTED_MODULE_15__orders_new_new_component__["a" /* NewOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__orders_list_list_component__["a" /* ListOrderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/customers/customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customers/customers.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Customers</h3>\n\n<app-customer-new (newCustomerEvent)='addCustomer($event)'></app-customer-new>\n<app-customer-list [customers]='customers' (deleteCustomerEvent)='deleteCustomer($event)'></app-customer-list>\n"

/***/ }),

/***/ "../../../../../src/app/customers/customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersComponent = (function () {
    function CustomersComponent(_productsService) {
        this._productsService = _productsService;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomersComponent.prototype.getCustomers = function () {
        var _this = this;
        this._productsService.getCustomers()
            .then(function (customers) { return _this.customers = customers; })
            .catch(function (response) { return console.log(response); });
    };
    CustomersComponent.prototype.addCustomer = function (customer) {
        var _this = this;
        this._productsService.addCustomer(customer)
            .then(function (res) {
            _this.getCustomers();
        })
            .catch(function (res) { return console.log(res); });
    };
    CustomersComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        this._productsService.deleteCustomer(id)
            .then(function (res) {
            _this.getCustomers();
        })
            .catch(function () {
            console.log('Something went Wrong');
        });
    };
    return CustomersComponent;
}());
CustomersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-customers',
        template: __webpack_require__("../../../../../src/app/customers/customers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customers/customers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], CustomersComponent);

var _a;
//# sourceMappingURL=customers.component.js.map

/***/ }),

/***/ "../../../../../src/app/customers/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  padding:10px;\n}\ntd{\n  padding: 10px;\n}\nth{\n  padding: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customers/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>All Customers</h3>\n\n<!-- Filter: <input type=\"text\" name=\"filter\" [(NgModule)]=\"customerFilter\"> -->\n\n<table class='table table striped table bordered' border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Customer Since</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor='let customer of customers'>\n    <td>{{customer.name}}</td>\n    <td>{{customer.createdAt | date: 'medium'}}</td>\n    <td><button (click)='deleteCustomer(customer._id)' type=\"button\">Delete</button></td>\n\n  </tr>\n\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/customers/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListCustomerComponent = (function () {
    function ListCustomerComponent() {
        this.deleteCustomerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    ListCustomerComponent.prototype.ngOnInit = function () {
    };
    ListCustomerComponent.prototype.deleteCustomer = function (id) {
        this.deleteCustomerEvent.emit(id);
    };
    return ListCustomerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ListCustomerComponent.prototype, "customers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], ListCustomerComponent.prototype, "deleteCustomerEvent", void 0);
ListCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-customer-list',
        template: __webpack_require__("../../../../../src/app/customers/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customers/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListCustomerComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/customers/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/customers/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)='createCustomer()'>\n  <label for=\"\">Name:</label>\n  <input type=\"text\" name=\"name\" value=\"\" [(ngModel)]='customer.name' #name='ngModel'>\n  <input type=\"submit\" name=\"\" value=\"Add Customer\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/customers/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCustomerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewCustomerComponent = (function () {
    function NewCustomerComponent(_productsService) {
        this._productsService = _productsService;
        this.newCustomerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.customer = { name: '' };
    }
    NewCustomerComponent.prototype.ngOnInit = function () {
    };
    NewCustomerComponent.prototype.createCustomer = function () {
        this.newCustomerEvent.emit(this.customer);
        this.customer = { name: '' };
    };
    return NewCustomerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], NewCustomerComponent.prototype, "newCustomerEvent", void 0);
NewCustomerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-customer-new',
        template: __webpack_require__("../../../../../src/app/customers/new/new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/customers/new/new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], NewCustomerComponent);

var _a;
//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  padding:10px;\n}\ntd{\n  padding: 10px;\n}\nth{\n  padding: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Products</h3>\n<table class='table table-striped table-bordered' border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Description</th>\n    <th>Quantity Left</th>\n  </tr>\n  <tr *ngFor='let product of products'>\n    <td>{{product.name}}</td>\n    <td>{{product.description}}</td>\n    <td>{{product.quantity}}</td>\n  </tr>\n</table>\n<a [routerLink]=\"['/products']\">See more...</a>\n<h3>Customers</h3>\n<table class='table table-striped table-bordered' border=\"1\">\n  <tr>\n    <th>Name</th>\n    <th>Customer Since</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor='let customer of customers'>\n    <td>{{customer.name}}</td>\n    <td>{{customer.createdAt | date: 'medium'}}</td>\n    <td><button type=\"button\" (click)='deleteCustomer(customer._id)'>Delete</button></td>\n  </tr>\n</table>\n<a [routerLink]=\"['/customers']\">See more...</a>\n<h3>Orders</h3>\n<table class='table table-striped table-bordered' border=\"1\">\n  <tr>\n    <th>Customer Name</th>\n    <th>Product</th>\n    <th>Quantity</th>\n    <th>Date</th>\n  </tr>\n  <tr *ngFor='let order of orders'>\n    <td>{{order.customer.name}}</td>\n    <td>{{order.product.name}}</td>\n    <td>{{order.quantity}}</td>\n    <td>{{order.createdAt | date: 'medium'}}</td>\n\n  </tr>\n\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_productsService) {
        this._productsService = _productsService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getCustomers();
        this.getProducts();
        this.getOrders();
    };
    DashboardComponent.prototype.getCustomers = function () {
        var _this = this;
        this._productsService.getCustomers()
            .then(function (customers) {
            _this.customers = customers;
        })
            .catch(function (response) {
            console.log(response);
        });
    };
    DashboardComponent.prototype.getProducts = function () {
        var _this = this;
        this._productsService.getProducts()
            .then(function (products) {
            _this.products = products;
        })
            .catch(function (response) {
            console.log(response);
        });
    };
    DashboardComponent.prototype.getOrders = function () {
        var _this = this;
        this._productsService.getOrders()
            .then(function (orders) {
            _this.orders = orders;
        })
            .catch(function (response) {
            console.log(response);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  padding:10px;\n}\ntd{\n  padding: 10px;\n}\nth{\n  padding: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>All Orders</h3>\n\n<table class=\"table table-striped table-bordered\" border=\"1\">\n  <tr>\n    <th>Customer:</th>\n    <th>Product:</th>\n    <th>Quantity:</th>\n    <th>Date:</th>\n  </tr>\n  <tr *ngFor='let order of orders'>\n    <td>{{order.customer.name}}</td>\n    <td>{{order.product.name}}</td>\n    <td>{{order.quantity}}</td>\n    <td>{{order.createdAt | date: 'medium'}}</td>\n\n  </tr>\n\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/orders/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListOrderComponent = (function () {
    function ListOrderComponent() {
    }
    ListOrderComponent.prototype.ngOnInit = function () {
    };
    return ListOrderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ListOrderComponent.prototype, "orders", void 0);
ListOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-order-list',
        template: __webpack_require__("../../../../../src/app/orders/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/orders/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListOrderComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Create an Order</h4>\n\n<form (submit)='createOrder()'>\n  <label for=\"\">Customer:</label>\n  <select class=\"\" name=\"customer\" [(ngModel)]='order.customer'>\n    <option *ngFor='let customer of customers' [value]=customer._id>{{customer.name}}</option>\n  </select>\n\n  <label for=\"\">Product:</label>\n  <select class=\"\" name=\"product\" [(ngModel)]='order.product'>\n    <option *ngFor='let product of products' [value]=product._id>{{product.name}}</option>\n  </select>\n  \n  <label for=\"\">Quantity:</label>\n  <input type=\"number\" name=\"quantity\" [(ngModel)]='order.quantity'>\n  <input type=\"submit\" name=\"\" value=\"Create Order\">\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/orders/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewOrderComponent = (function () {
    function NewOrderComponent() {
        this.newOrderEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.order = { customer: '', quantity: '', product: '' };
    }
    NewOrderComponent.prototype.ngOnInit = function () {
    };
    NewOrderComponent.prototype.createOrder = function () {
        this.newOrderEvent.emit(this.order);
    };
    return NewOrderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], NewOrderComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], NewOrderComponent.prototype, "customers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], NewOrderComponent.prototype, "newOrderEvent", void 0);
NewOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-order-new',
        template: __webpack_require__("../../../../../src/app/orders/new/new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/orders/new/new.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewOrderComponent);

//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Orders</h3>\n\n<app-order-new [products]='products' [customers]='customers' (newOrderEvent)='createOrder($event)'></app-order-new>\n<app-order-list [orders]='orders'></app-order-list>\n"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersComponent = (function () {
    function OrdersComponent(_productsService) {
        this._productsService = _productsService;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getCustomers();
        this.getProducts();
        this.getOrders();
    };
    OrdersComponent.prototype.getCustomers = function () {
        var _this = this;
        this._productsService.getCustomers()
            .then(function (customers) {
            _this.customers = customers;
        })
            .catch(function (response) {
            console.log(response);
        });
    };
    OrdersComponent.prototype.getProducts = function () {
        var _this = this;
        this._productsService.getProducts()
            .then(function (products) {
            _this.products = products;
        })
            .catch(function (response) {
            alert(response);
        });
    };
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this._productsService.getOrders()
            .then(function (orders) {
            _this.orders = orders;
        })
            .catch(function () {
            alert('There was a problem retrieving the orders');
        });
    };
    OrdersComponent.prototype.createOrder = function (order) {
        var _this = this;
        this._productsService.createOrder(order)
            .then(function () {
            _this.getOrders();
        })
            .catch(function (err) { return console.log(err); });
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../src/app/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/orders/orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], OrdersComponent);

var _a;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.createProduct = function (product) {
        return this._http.post('/api/products', product).map(function (response) { return response.json(); }).toPromise();
    };
    ProductService.prototype.getProducts = function () {
        return this._http.get('/api/products').map(function (products) { return products.json(); }).toPromise();
    };
    ProductService.prototype.getCustomers = function () {
        return this._http.get('/api/customers').map(function (response) { return response.json(); }).toPromise();
    };
    ProductService.prototype.addCustomer = function (customer) {
        return this._http.post('/api/customers', customer).map(function (response) { return response.json(); }).toPromise();
    };
    ProductService.prototype.deleteCustomer = function (id) {
        return this._http.delete('/api/customers/' + id).map(function (response) { return response.json(); }).toPromise();
    };
    ProductService.prototype.createOrder = function (order) {
        return this._http.post('/api/orders', order).map(function (response) { return response.json(); }).toPromise();
    };
    ProductService.prototype.getOrders = function () {
        return this._http.get('/api/orders').map(function (orders) { return orders.json(); }).toPromise();
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/products/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  padding:10px;\n}\ntd{\n  padding: 10px;\n}\nth{\n  padding: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>All Products</h3>\n\n<table class=\"table table-striped table-bordered\" border=\"1\">\n  <tr>\n    <th>Name:</th>\n    <th>Description:</th>\n    <th>Quantity Left:</th>\n  </tr>\n  <tr *ngFor='let product of products'>\n    <td>{{product.name}}</td>\n    <td>{{product.description}}</td>\n    <td>{{product.quantity}}</td>\n\n  </tr>\n\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/products/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    return ListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "products", void 0);
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/products/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)='createProduct()'>\n  <label for=\"\">Name:</label>\n  <input type=\"text\" name=\"name\" value=\"\" [(ngModel)]='product.name' #name='ngModel'>\n  <label for=\"\">Description:</label>\n  <input type=\"text\" name=\"description\" value=\"\" [(ngModel)]='product.description' #description='ngModel'>\n  <label for=\"\">Quantity:</label>\n  <input type=\"text\" name=\"quantity\" value=\"\" [(ngModel)]='product.quantity' #quantity='ngModel'>\n  <input type=\"submit\" name=\"\" value=\"Add Product\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/products/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewComponent = (function () {
    function NewComponent(_productsService) {
        this._productsService = _productsService;
        this.newProductEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.product = { name: '', description: '', quantity: '' };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.createProduct = function () {
        this.newProductEvent.emit(this.product);
        this.product = { name: '', description: '', quantity: '' };
    };
    return NewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], NewComponent.prototype, "newProductEvent", void 0);
NewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-new',
        template: __webpack_require__("../../../../../src/app/products/new/new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/new/new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], NewComponent);

var _a;
//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n  font-weight: bold;\n  color: red; \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Products Page</h4>\n<p class='error' *ngFor='let error of errors'>{{error}}</p>\n<app-list [products]='products'></app-list>\n<app-new (newProductEvent)='createProduct($event)' ></app-new>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(_productsService) {
        this._productsService = _productsService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.createProduct = function (product) {
        var _this = this;
        this._productsService.createProduct(product)
            .then(function () {
            _this.getProducts();
        })
            .catch(function (err) { return _this.errors = err._body.split(","); });
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this._productsService.getProducts()
            .then(function (products) { return _this.products = products; })
            .catch(function (response) { return console.log(response); });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ProductsComponent);

var _a;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map