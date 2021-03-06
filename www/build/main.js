webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, data, toast, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.data = data;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.completeOrders = [];
        this.incompleteOrders = [];
    }
    OrdersPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        this.data.getCompletedOrders().subscribe(function (comp) {
            _this.completeOrders = comp;
            _this.data.getIncompleteOrders().subscribe(function (incomp) {
                _this.incompleteOrders = incomp;
            });
        }, function (error) {
            var popupAlert = _this.alertCtrl.create({
                title: 'Failed!',
                message: 'Retrying',
                buttons: ['OK'],
                enableBackdropDismiss: true
            });
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    OrdersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function () {
            _this.data.getIncompleteOrders().subscribe(function (data) {
                _this.incompleteOrders = data;
                _this.data.getCompletedOrders().subscribe(function (comp) {
                    _this.completeOrders = comp;
                });
                loading.dismiss();
            }, function (error) {
                var popupAlert = _this.alertCtrl.create({
                    title: 'Failed!',
                    message: 'Retrying',
                    buttons: ['OK'],
                    enableBackdropDismiss: true
                });
                popupAlert.present();
                loading.dismiss();
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            });
        });
    };
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage.prototype.processOrder = function (id) {
        var toast = this.toast.create({
            message: 'Order completed',
            duration: 700,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        this.data.completeOrder(id).then(function () {
            toast.present();
        });
    };
    OrdersPage.prototype.openMenuPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\orders\orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Orders</ion-title>\n    <ion-buttons end>\n      <button outline ion-button (click)="openMenuPage()">\n        Menu\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <div class="wrapper">\n    <section *ngFor="let order of incompleteOrders;" class="blue" (click)="processOrder(order._id)">\n      <h2>Order #{{order.groupID}}</h2>\n      <p>{{order.description}}</p>\n      <p>Quantity: {{order.orderedQuantity}}</p>\n      <p>Total: R{{order.totalCost}}</p>\n      <p>Ordered by: {{order.orderedBy}}</p>\n      <br/>\n      <p>Tap to complete order.</p>\n    </section>\n\n    <section class="red" *ngFor="let order of completeOrders;">\n      <h2>Order #{{order.groupID}}</h2>\n      <p>{{order.description}}</p>\n      <p>Quantity: {{order.orderedQuantity}}</p>\n      <p>Total: R{{order.totalCost}}</p>\n      <p>Ordered by: {{order.orderedBy}}</p>\n    </section>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_modal_order_modal__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orders_orders__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_modal_login_modal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quantity_modal_quantity_modal__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(app, data, modalCtrl, toast, loadingCtrl, alertCtrl, navCtrl) {
        this.app = app;
        this.data = data;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.menuItems = [];
        this.orderedItems = new Set();
        this.globalId = this.makeid();
    }
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present().then(function () {
            _this.data.getMenuItems().subscribe(function (data) {
                _this.menuItems = data;
                loading.dismiss();
            }, function (error) {
                var popupAlert = _this.alertCtrl.create({
                    title: 'Failed!',
                    message: 'Retrying',
                    buttons: ['OK'],
                    enableBackdropDismiss: true
                });
                popupAlert.present();
                loading.dismiss();
                _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
            });
        });
    };
    HomePage.prototype.openBasket = function () {
        var _this = this;
        if (this.orderedItems.size === 0) {
            this.showToast('Cart is empty');
            return;
        }
        var orderModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__order_modal_order_modal__["a" /* OrderModal */], { orders: this.orderedItems });
        orderModal.onDidDismiss(function (data) {
            if (data == true) {
                _this.orderedItems = new Set();
                _this.globalId = _this.makeid();
                _this.showToast('Order completed');
            }
        });
        orderModal.present();
    };
    HomePage.prototype.addOrder = function (order) {
        var _this = this;
        var quantityModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__quantity_modal_quantity_modal__["a" /* QuantityModal */], { item: order });
        quantityModal.onDidDismiss(function (data) {
            if (data) {
                order._id = _this.makeIndId();
                order.groupID = _this.globalId;
                order.orderedQuantity = data;
                order.totalCost = (data * order.price);
                order.status = "incomplete";
                _this.orderedItems.add(order);
                _this.showToast('Item added');
            }
        });
        quantityModal.present();
    };
    HomePage.prototype.makeid = function () {
        var text = "";
        var possible = "0123456789";
        for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    HomePage.prototype.makeIndId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMONPQRSTUVWZX0123456789";
        for (var i = 0; i < 6; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    HomePage.prototype.showToast = function (msg) {
        var toast = this.toast.create({
            message: msg,
            duration: 700,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage.prototype.openLoginModal = function () {
        var _this = this;
        var loginModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__login_modal_login_modal__["a" /* LoginModal */]);
        loginModal.onDidDismiss(function (data) {
            if (data === true) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__orders_orders__["a" /* OrdersPage */]);
            }
        });
        loginModal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-buttons start>\n      <button ion-button (click)="openBasket()">\n        <ion-icon name="basket" right></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button outline ion-button (click)="openLoginModal()">\n        Admin\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid responsive-sm>\n    <ion-row>\n      <ion-col *ngFor="let order of menuItems" col-auto (click)="addOrder(order)">{{order.description}}<br/>R{{order.price}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginModal = /** @class */ (function () {
    function LoginModal(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.status = false;
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required)
        });
    }
    LoginModal.prototype.closeModal = function () {
        this.viewCtrl.dismiss(false);
    };
    LoginModal.prototype.logon = function () {
        var password = this.formGroup.get('password').value;
        if (password === '5432' || password === '9999') {
            this.status = true;
        }
        if (this.status == true) {
            this.viewCtrl.dismiss(true);
        }
        else {
            this.formGroup.patchValue({
                password: ''
            });
        }
    };
    LoginModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'login-modal',template:/*ion-inline-start:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\login-modal\login-modal.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Login\n    </ion-title>\n    <ion-buttons end icon-only>\n      <button outline ion-button (click)="closeModal()">\n        <ion-icon name="close" right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (submit)="logon()" [formGroup]="formGroup" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-input formControlName="password" type="text" autocapitalize="off"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-row responsive-sm>\n          <ion-col>\n            <button type="submit" ion-button block color="danger">Login</button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\login-modal\login-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */]])
    ], LoginModal);
    return LoginModal;
}());

//# sourceMappingURL=login-modal.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_orders__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_modal_login_modal__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(app, modalCtrl, navCtrl) {
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.orders = [];
    }
    SplashPage.prototype.presentLoginModal = function () {
        var _this = this;
        var loginModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__login_modal_login_modal__["a" /* LoginModal */]);
        loginModal.onDidDismiss(function (data) {
            if (data === true) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__orders_orders__["a" /* OrdersPage */]);
            }
        });
        loginModal.present();
    };
    SplashPage.prototype.goToMenu = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'splash-page',template:/*ion-inline-start:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\splash-page\splash-page.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button color="primary" ion-button block (click)="presentLoginModal()">Admin Login</button>\n      </ion-col>\n      <ion-col>\n        <button color="danger" ion-button block (click)="goToMenu()">Menu</button>\n      </ion-col>\n    </ion-row>\n    <!--<ion-row><img src="assets/imgs/Capture.png"></ion-row>-->\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\splash-page\splash-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash-page.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderModal = /** @class */ (function () {
    function OrderModal(viewCtrl, data, navParams) {
        this.viewCtrl = viewCtrl;
        this.data = data;
        this.navParams = navParams;
        this.paymentM = 'Cash';
        this.totalCost = 0;
        this.arrayLength = 0;
        this.ordersSet = new Set();
        this.ordersSet = this.navParams.get('orders');
        this.orders = Array.from(this.ordersSet);
        this.arrayLength = this.orders.length;
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormGroup */]({
            grandTotal: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
            paymentMethod: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required),
            orderedBy: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["g" /* Validators */].required)
        });
        for (var _i = 0, _a = this.orders; _i < _a.length; _i++) {
            var obj = _a[_i];
            this.totalCost += obj.totalCost;
        }
    }
    OrderModal.prototype.placeOrder = function () {
        var _this = this;
        var orderer = this.formGroup.get('orderedBy').value;
        var data = { "$set": { "orderedBy": orderer } };
        this.data.placeOrder(this.orders).then(function () {
            for (var _i = 0, _a = _this.orders; _i < _a.length; _i++) {
                var order = _a[_i];
                _this.data.addOrderer(order._id, data).then(function () {
                });
            }
            _this.viewCtrl.dismiss(true);
        });
    };
    OrderModal.prototype.closeModal = function () {
        this.viewCtrl.dismiss(false);
    };
    OrderModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'order-modal',template:/*ion-inline-start:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\home\order-modal\order-modal.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Place Order\n    </ion-title>\n    <ion-buttons end icon-only>\n      <button outline ion-button (click)="closeModal()">\n        <ion-icon name="close" right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row *ngFor="let order of orders; let i = index">\n      <ion-col>{{order.description}}</ion-col>\n      <ion-col text-right>R{{order.totalCost}}</ion-col>\n    </ion-row>\n  </ion-grid>\n  <div *ngIf="arrayLength > 0">\n    <form [formGroup]="formGroup">\n      <ion-list>\n<!--        <ion-item>\n          <ion-label>Payment Method</ion-label>\n          <ion-select [(ngModel)]="paymentM" formControlName="paymentMethod">\n            <ion-option>Cash</ion-option>\n            <ion-option>Card</ion-option>\n          </ion-select>\n        </ion-item>-->\n        <ion-item>\n          <ion-label><strong>Total Cost</strong></ion-label>\n          <ion-input type="text" value="R {{totalCost}}" readonly></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Ordered by:</ion-label>\n          <ion-input formControlName="orderedBy" type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-row responsive-sm>\n            <ion-col>\n              <button color="danger" ion-button block (click)="placeOrder()">Order</button>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\home\order-modal\order-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], OrderModal);
    return OrderModal;
}());

//# sourceMappingURL=order-modal.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantityModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuantityModal = /** @class */ (function () {
    function QuantityModal(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.order = this.navParams.get('item');
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            quantityValue: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
    }
    QuantityModal.prototype.placeOrder = function () {
        var qv = this.formGroup.get('quantityValue').value;
        this.viewCtrl.dismiss(qv);
    };
    QuantityModal.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    QuantityModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'quantity-modal',template:/*ion-inline-start:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\home\quantity-modal\quantity-modal.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Place Order\n    </ion-title>\n    <ion-buttons end icon-only>\n      <button outline ion-button (click)="closeModal()">\n        <ion-icon name="close" right></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (submit)="placeOrder()">\n    <ion-grid>\n      <ion-row>\n        <ion-col>{{order.description}} R{{order.price}}<br/></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Quantity: <input id="number" formControlName="quantityValue" type="number" min="1" max="10">\n        </ion-col>\n      </ion-row>\n      <ion-row responsive-sm>\n        <ion-col>\n          <button type="submit" color="danger" ion-button block>Order</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\pages\home\quantity-modal\quantity-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuantityModal);
    return QuantityModal;
}());

//# sourceMappingURL=quantity-modal.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_orders_orders__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_order_modal_order_modal__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_splash_page_splash_page__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_modal_login_modal__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_quantity_modal_quantity_modal__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_modal_login_modal__["a" /* LoginModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_order_modal_order_modal__["a" /* OrderModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_splash_page_splash_page__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_quantity_modal_quantity_modal__["a" /* QuantityModal */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__pages_splash_page_splash_page__["a" /* SplashPage */],
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_modal_login_modal__["a" /* LoginModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_order_modal_order_modal__["a" /* OrderModal */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_quantity_modal_quantity_modal__["a" /* QuantityModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_data__["a" /* DataProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_splash_page_splash_page__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_splash_page_splash_page__["a" /* SplashPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Mahobala\Documents\GitHub\braai-gurus\braai-guru\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(httpClient) {
        this.httpClient = httpClient;
        this.apiKey = "WsMYOMf01Ph70C8m61dJukoZ5WIU8uzA";
        console.log('Hello DataProvider Provider');
    }
    DataProvider.prototype.getOrders = function () {
        return this.httpClient.get("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders?apiKey=" + this.apiKey);
    };
    DataProvider.prototype.placeOrder = function (order) {
        console.log('place order');
        return this.httpClient.post("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders?apiKey=" + this.apiKey, order).toPromise();
    };
    DataProvider.prototype.getMenuItems = function () {
        return this.httpClient.get("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/menu-items?apiKey=" + this.apiKey);
    };
    DataProvider.prototype.completeOrder = function (order) {
        return null;
    };
    DataProvider.prototype.addOrderer = function (id, orderer) {
        return this.httpClient.put("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders/" + id + "?apiKey=" + this.apiKey, orderer).toPromise();
    };
    DataProvider.prototype.getCompletedOrders = function () {
        var stat = JSON.stringify({ "status": "complete" });
        return this.httpClient.get("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders?q=" + stat + "&apiKey=" + this.apiKey);
    };
    DataProvider.prototype.getIncompleteOrders = function () {
        var stat = JSON.stringify({ "status": "incomplete" });
        return this.httpClient.get("https://api.mlab.com/api/1/databases/heroku_7dkkjm9t/collections/orders?q=" + stat + "&apiKey=" + this.apiKey);
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map