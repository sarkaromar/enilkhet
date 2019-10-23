(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-shop-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/product-tabs/product-tabs.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/components/product-tabs/product-tabs.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-tabs\" [ngClass]=\"{'product-tabs--layout--sidebar': withSidebar}\">\r\n    <div class=\"product-tabs__list\">\r\n        <a href=\"#tab-specification\" class=\"product-tabs__item\"\r\n           [ngClass]=\"{'product-tabs__item--active': tab === 'specification'}\"\r\n           (click)=\"$event.preventDefault(); tab = 'specification'\">Specification</a>\r\n\r\n        <a href=\"#tab-description\" class=\"product-tabs__item\"\r\n           [ngClass]=\"{'product-tabs__item--active': tab === 'description'}\"\r\n           (click)=\"$event.preventDefault(); tab = 'description'\">Author</a>\r\n\r\n        <a href=\"#tab-reviews\" class=\"product-tabs__item\"\r\n           [ngClass]=\"{'product-tabs__item--active': tab === 'reviews'}\"\r\n           (click)=\"$event.preventDefault(); tab = 'reviews'\">Reviews</a>\r\n    </div>\r\n    <div class=\"product-tabs__content\">\r\n\r\n        <div class=\"product-tabs__pane\" id=\"tab-description\" [ngClass]=\"{'product-tabs__pane--active': tab === 'description'}\">\r\n            <div class=\"typography\">\r\n                <h3>Author</h3>\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus,\r\n                    ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed\r\n                    fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque\r\n                    ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie\r\n                    urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et\r\n                    finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget\r\n                    lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris\r\n                    vitae tellus.\r\n                </p>\r\n                <h3>Etiam lacus lacus mollis in mattis</h3>\r\n                <p>\r\n                    Praesent mattis eget augue ac elementum. Maecenas vel ante ut enim mollis accumsan. Vestibulum vel\r\n                    eros at mi suscipit feugiat. Sed tortor purus, vulputate et eros a, rhoncus laoreet orci. Proin sapien\r\n                    neque, commodo at porta in, vehicula eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et\r\n                    ultrices posuere cubilia Curae; Curabitur porta vulputate augue, at sollicitudin nisl molestie eget.\r\n                </p>\r\n                <p>\r\n                    Nunc sollicitudin, nunc id accumsan semper, libero nunc aliquet nulla, nec pretium ipsum risus ac\r\n                    neque. Morbi eu facilisis purus. Quisque mi tortor, cursus in nulla ut, laoreet commodo quam.\r\n                    Pellentesque et ornare sapien. In ac est tempus urna tincidunt finibus. Integer erat ipsum, tristique\r\n                    ac lobortis sit amet, dapibus sit amet purus. Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis,\r\n                    sit amet fringilla odio scelerisque non.\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"product-tabs__pane\" id=\"tab-specification\" [ngClass]=\"{'product-tabs__pane--active': tab === 'specification'}\">\r\n            <div class=\"spec\">\r\n                <h3 class=\"spec__header\">Specification</h3>\r\n                <div *ngFor=\"let section of specification\" class=\"spec__section\">\r\n                    <h4 class=\"spec__section-title\">{{ section.name }}</h4>\r\n                    <div *ngFor=\"let feature of section.features\" class=\"spec__row\">\r\n                        <div class=\"spec__name\">{{ feature.name }}</div><div class=\"spec__value\">{{ feature.value }}</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"spec__disclaimer\">\r\n                    Information on technical characteristics, the delivery set, the country of manufacture and the appearance\r\n                    of the goods is for reference only and is based on the latest information available at the time of publication.\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"product-tabs__pane\" id=\"tab-reviews\" [ngClass]=\"{'product-tabs__pane--active': tab === 'reviews'}\">\r\n            <div class=\"reviews-view\">\r\n                <div class=\"reviews-view__list\">\r\n                    <h3 class=\"reviews-view__header\">Customer Reviews</h3>\r\n\r\n                    <div class=\"reviews-list\">\r\n                        <ol class=\"reviews-list__content\">\r\n                            <li *ngFor=\"let review of reviews\" class=\"reviews-list__item\">\r\n                                <div class=\"review\">\r\n                                    <div class=\"review__avatar\"><img [src]=\"review.avatar\" alt=\"\"></div>\r\n                                    <div class=\"review__content\">\r\n                                        <div class=\"review__author\">{{ review.author }}</div>\r\n                                        <div class=\"review__rating\">\r\n                                            <app-rating [value]=\"review.rating\"></app-rating>\r\n                                        </div>\r\n                                        <div class=\"review__text\">{{ review.text }}</div>\r\n                                        <div class=\"review__date\">{{ review.date }}</div>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ol>\r\n                        <div class=\"reviews-list__pagination\">\r\n                            <app-pagination [current]=\"1\" [siblings]=\"2\" [total]=\"10\"></app-pagination>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <form class=\"reviews-view__form\">\r\n                    <h3 class=\"reviews-view__header\">Write A Review</h3>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-12 col-lg-9 col-xl-8\">\r\n                            <div class=\"form-row\">\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"review-stars\">Review Stars</label>\r\n                                    <select id=\"review-stars\" class=\"form-control\">\r\n                                        <option>5 Stars Rating</option>\r\n                                        <option>4 Stars Rating</option>\r\n                                        <option>3 Stars Rating</option>\r\n                                        <option>2 Stars Rating</option>\r\n                                        <option>1 Stars Rating</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"review-author\">Your Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"review-author\" placeholder=\"Your Name\">\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label for=\"review-email\">Email Address</label>\r\n                                    <input type=\"text\" class=\"form-control\" id=\"review-email\" placeholder=\"Email Address\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"review-text\">Your Review</label>\r\n                                <textarea class=\"form-control\" id=\"review-text\" rows=\"6\"></textarea>\r\n                            </div>\r\n                            <div class=\"form-group mb-0\">\r\n                                <button type=\"submit\" class=\"btn btn-primary btn-lg\">Post Your Review</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/products-view/products-view.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/components/products-view/products-view.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"products-view\">\r\n    <div class=\"products-view__options\">\r\n        <div class=\"view-options\" [ngClass]=\"{\r\n            'view-options--offcanvas--always': offcanvas === 'always',\r\n            'view-options--offcanvas--mobile': offcanvas === 'mobile'\r\n        }\">\r\n            <div class=\"view-options__filters-button\">\r\n                <button type=\"button\" class=\"filters-button\" (click)=\"sidebar.open()\">\r\n                    <app-icon class=\"filters-button__icon\" name=\"filters-16\" size=\"16\"></app-icon>\r\n                    <span class=\"filters-button__title\">Filters</span>\r\n                    <span class=\"filters-button__counter\">3</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"view-options__layout\">\r\n                <div class=\"layout-switcher\">\r\n                    <div class=\"layout-switcher__list\">\r\n                        <button title=\"Grid\" type=\"button\" class=\"layout-switcher__button\"\r\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'grid'}\" (click)=\"setLayout('grid')\">\r\n\r\n                            <app-icon name=\"layout-grid-16x16\" size=\"16\"></app-icon>\r\n                        </button>\r\n                        <button title=\"Grid With Features\" type=\"button\" class=\"layout-switcher__button\"\r\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'grid-with-features'}\" (click)=\"setLayout('grid-with-features')\">\r\n\r\n                            <app-icon name=\"layout-grid-with-details-16x16\" size=\"16\"></app-icon>\r\n                        </button>\r\n                        <button title=\"List\" type=\"button\" class=\"layout-switcher__button\"\r\n                                [ngClass]=\"{'layout-switcher__button--active': layout === 'list'}\" (click)=\"setLayout('list')\">\r\n\r\n                            <app-icon name=\"layout-list-16x16\" size=\"16\"></app-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"view-options__legend\">Showing 6 of 98 products</div>\r\n            <div class=\"view-options__divider\"></div>\r\n            <div class=\"view-options__control\">\r\n                <label for=\"view-options-sort\">Sort By</label>\r\n                <div>\r\n                    <select class=\"form-control form-control-sm\" name=\"\" id=\"view-options-sort\">\r\n                        <option value=\"\">Default</option>\r\n                        <option value=\"\">Name (A-Z)</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"view-options__control\">\r\n                <label for=\"view-options-limit\">Show</label>\r\n                <div>\r\n                    <select class=\"form-control form-control-sm\" name=\"\" id=\"view-options-limit\">\r\n                        <option value=\"\">12</option>\r\n                        <option value=\"\">24</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"products-view__list products-list\" [attr.data-layout]=\"layout != 'list' ? grid : layout\" [attr.data-with-features]=\"layout == 'grid-with-features' ? 'true' : 'false'\">\r\n        <div class=\"products-list__body books\">\r\n            <div *ngFor=\"let product of products\" class=\"products-list__item\">\r\n                <app-product-card [product]=\"product\"></app-product-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"products-view__pagination\">\r\n        <app-pagination [current]=\"1\" [siblings]=\"2\" [total]=\"10\" (pageChange)=\"onPageChange($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block block-sidebar\" [ngClass]=\"{\r\n    'block-sidebar--offcanvas--always': offcanvas === 'always',\r\n    'block-sidebar--offcanvas--mobile': offcanvas === 'mobile',\r\n    'block-sidebar--open': isOpen\r\n}\">\r\n    <div class=\"block-sidebar__backdrop\" (click)=\"sidebar.close()\"></div>\r\n    <div class=\"block-sidebar__body\">\r\n        <div class=\"block-sidebar__header\">\r\n            <div class=\"block-sidebar__title\">Filters</div>\r\n            <button class=\"block-sidebar__close\" type=\"button\" (click)=\"sidebar.close()\">\r\n                <app-icon name=\"cross-20\" size=\"20\"></app-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"block-sidebar__item\">\r\n            <app-widget-filters [filters]=\"filters\" [offcanvas]=\"offcanvas\"></app-widget-filters>\r\n        </div>\r\n        <div class=\"block-sidebar__item d-none d-lg-block\" *ngIf=\"offcanvas === 'mobile'\">\r\n            <app-widget-products header=\"Latest Products\" [products]=\"products\"></app-widget-products>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-cart/page-cart.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-cart/page-cart.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'Shopping Cart'\" [breadcrumbs]=\"[\r\n    {label: 'Home',          url: '../../'},\r\n    {label: 'Shopping Cart', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block block-empty\" *ngIf=\"!items.length\">\r\n    <div class=\"container\">\r\n        <div class=\"block-empty__body\">\r\n            <div class=\"block-empty__message\">Your shopping cart is empty!</div>\r\n            <div class=\"block-empty__actions\">\r\n                <a routerLink=\"../../\" class=\"btn btn-primary btn-sm\">Continue</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"cart block\" *ngIf=\"items.length\">\r\n    <div class=\"container\">\r\n        <table class=\"cart__table cart-table\">\r\n            <thead class=\"cart-table__head\">\r\n            <tr class=\"cart-table__row\">\r\n                <th class=\"cart-table__column cart-table__column--image\">Image</th>\r\n                <th class=\"cart-table__column cart-table__column--product\">Product</th>\r\n                <th class=\"cart-table__column cart-table__column--price\">Price</th>\r\n                <th class=\"cart-table__column cart-table__column--quantity\">Quantity</th>\r\n                <th class=\"cart-table__column cart-table__column--total\">Total</th>\r\n                <th class=\"cart-table__column cart-table__column--remove\"></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody class=\"cart-table__body\">\r\n            <tr *ngFor=\"let item of items\" class=\"cart-table__row\">\r\n                <td class=\"cart-table__column cart-table__column--image\">\r\n                    <a [routerLink]=\"root.product(item.cartItem.product.id)\" *ngIf=\"item.cartItem.product.images?.length\"><img [src]=\"item.cartItem.product.images[0]\" alt=\"\"></a>\r\n                </td>\r\n                <td class=\"cart-table__column cart-table__column--product\">\r\n                    <a [routerLink]=\"root.product(item.cartItem.product.id)\" class=\"cart-table__product-name\">{{ item.cartItem.product.name }}</a>\r\n                    <ul *ngIf=\"item.cartItem.options.length\" class=\"cart-table__options\">\r\n                        <li *ngFor=\"let option of item.cartItem.options\">{{ option.name }}: {{ option.value }}</li>\r\n                    </ul>\r\n                </td>\r\n                <td class=\"cart-table__column cart-table__column--price\" data-title=\"Price\">{{ item.cartItem.product.price|currencyFormat }}</td>\r\n                <td class=\"cart-table__column cart-table__column--quantity\" data-title=\"Quantity\">\r\n                    <app-input-number [formControl]=\"item.quantityControl\" [min]=\"1\"></app-input-number>\r\n                </td>\r\n                <td class=\"cart-table__column cart-table__column--total\" data-title=\"Total\">{{ item.cartItem.product.price * item.quantity|currencyFormat }}</td>\r\n                <td class=\"cart-table__column cart-table__column--remove\">\r\n                    <button type=\"button\" class=\"btn btn-light btn-sm btn-svg-icon\" (click)=\"remove(item.cartItem)\" [ngClass]=\"{'btn-loading': removedItems.includes(item.cartItem)}\">\r\n                        <app-icon name=\"cross-12\" size=\"12\"></app-icon>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n        <div class=\"cart__actions\">\r\n            <form class=\"cart__coupon-form\">\r\n                <label for=\"input-coupon-code\" class=\"sr-only\">Password</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"input-coupon-code\" placeholder=\"Coupon Code\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Apply Coupon</button>\r\n            </form>\r\n            <div class=\"cart__buttons\">\r\n                <a routerLink=\"../\" class=\"btn btn-light\">Continue Shopping</a>\r\n                <button type=\"button\" class=\"btn btn-primary cart__update-button\" (click)=\"update()\" [ngClass]=\"{'btn-loading': updating}\" [disabled]=\"!needUpdate()\">Update Cart</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row justify-content-end pt-5\">\r\n            <div class=\"col-12 col-md-7 col-lg-6 col-xl-5\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">Cart Totals</h3>\r\n\r\n                        <table class=\"cart__totals\">\r\n                            <thead *ngIf=\"(cart.totals$|async).length\" class=\"cart__totals-header\">\r\n                            <tr>\r\n                                <th>Subtotal</th>\r\n                                <td>{{ cart.subtotal$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody *ngIf=\"(cart.totals$|async).length\" class=\"cart__totals-body\">\r\n                            <tr *ngFor=\"let total of cart.totals$|async\">\r\n                                <th>{{ total.title }}</th>\r\n                                <td>\r\n                                    {{ total.price|currencyFormat }}\r\n                                    <div *ngIf=\"total.type === 'shipping'\" class=\"cart__calc-shipping\"><a href=\"\" (click)=\"$event.preventDefault()\">Calculate Shipping</a></div>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tfoot class=\"cart__totals-footer\">\r\n                            <tr>\r\n                                <th>Total</th>\r\n                                <td>{{ cart.total$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <a class=\"btn btn-primary btn-xl btn-block cart__checkout-button\" routerLink=\"../checkout\">Proceed to checkout</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-category/page-category.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-category/page-category.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'Books'\" [breadcrumbs]=\"[\r\n    {label: 'Home',         url: '../../'},\r\n    {label: 'Books', url: ''}\r\n]\"></app-page-header>\r\n\r\n<ng-container *ngIf=\"columns === 3\">\r\n    <div class=\"container\">\r\n        <div class=\"shop-layout shop-layout--sidebar--{{ sidebarPosition }}\">\r\n            <div class=\"shop-layout__sidebar\" *ngIf=\"sidebarPosition === 'start'\">\r\n                <app-shop-sidebar [filters]=\"filters\" offcanvas=\"mobile\"></app-shop-sidebar>\r\n            </div>\r\n            <div class=\"shop-layout__content\">\r\n                <div class=\"block\">\r\n                    <app-products-view [products]=\"products\" [layout]=\"viewMode\" grid=\"grid-3-sidebar\" [limit]=\"15\" offcanvas=\"mobile\"></app-products-view>\r\n                </div>\r\n            </div>\r\n            <div class=\"shop-layout__sidebar\" *ngIf=\"sidebarPosition === 'end'\">\r\n                <app-shop-sidebar [filters]=\"filters\" offcanvas=\"mobile\"></app-shop-sidebar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"columns > 3\">\r\n    <div class=\"container\">\r\n        <div class=\"block\">\r\n            <app-products-view [products]=\"products\" [layout]=\"viewMode\" [grid]=\"'grid-'+columns+'-full'\" [limit]=\"15\" offcanvas=\"always\"></app-products-view>\r\n        </div>\r\n        <app-shop-sidebar [filters]=\"filters\" offcanvas=\"always\"></app-shop-sidebar>\r\n    </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-checkout/page-checkout.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-checkout/page-checkout.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'Checkout'\" [breadcrumbs]=\"[\r\n    {label: 'Home',          url: '../../'},\r\n    {label: 'Shopping Cart', url: '../cart'},\r\n    {label: 'Checkout',      url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"checkout block\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 mb-3\">\r\n                <app-alert type=\"primary\" size=\"lg\">Returning customer? <a href=\"\">Click here to login</a></app-alert>\r\n            </div>\r\n\r\n            <div class=\"col-12 col-lg-6 col-xl-7\">\r\n                <div class=\"card mb-lg-0\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">Billing details</h3>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"checkout-first-name\">First Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-first-name\" placeholder=\"First Name\">\r\n                            </div>\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"checkout-last-name\">Last Name</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-last-name\" placeholder=\"Last Name\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-company-name\">Company Name <span class=\"text-muted\">(Optional)</span></label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-company-name\" placeholder=\"Company Name\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-country\">Country</label>\r\n                            <select id=\"checkout-country\" class=\"form-control\">\r\n                                <option>Select a country...</option>\r\n                                <option>United States</option>\r\n                                <option>Russia</option>\r\n                                <option>Italy</option>\r\n                                <option>France</option>\r\n                                <option>Ukraine</option>\r\n                                <option>Germany</option>\r\n                                <option>Australia</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-street-address\">Street Address</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-street-address\" placeholder=\"Street Address\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-address\">Apartment, suite, unit etc. <span class=\"text-muted\">(Optional)</span></label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-address\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-city\">Town / City</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-city\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-state\">State / County</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-state\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-postcode\">Postcode / ZIP</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"checkout-postcode\">\r\n                        </div>\r\n\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"checkout-email\">Email address</label>\r\n                                <input type=\"email\" class=\"form-control\" id=\"checkout-email\" placeholder=\"Email address\">\r\n                            </div>\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label for=\"checkout-phone\">Phone</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"checkout-phone\" placeholder=\"Phone\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-check\">\r\n                                    <span class=\"form-check-input input-check\">\r\n                                        <span class=\"input-check__body\">\r\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"checkout-create-account\">\r\n                                            <span class=\"input-check__box\"></span>\r\n                                            <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\"><use xlink:href=\"assets/images/sprite.svg#check-9x7\"></use></svg>\r\n                                        </span>\r\n                                    </span>\r\n                                <label class=\"form-check-label\" for=\"checkout-create-account\">Create an account?</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-divider\"></div>\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">Shipping Details</h3>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"form-check\">\r\n                                    <span class=\"form-check-input input-check\">\r\n                                        <span class=\"input-check__body\">\r\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"checkout-different-address\">\r\n                                            <span class=\"input-check__box\"></span>\r\n                                            <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\"><use xlink:href=\"assets/images/sprite.svg#check-9x7\"></use></svg>\r\n                                        </span>\r\n                                    </span>\r\n                                <label class=\"form-check-label\" for=\"checkout-different-address\">Ship to a different address?</label>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"checkout-comment\">Order notes <span class=\"text-muted\">(Optional)</span></label>\r\n                            <textarea id=\"checkout-comment\" class=\"form-control\" rows=\"4\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 col-lg-6 col-xl-5 mt-4 mt-lg-0\">\r\n                <div class=\"card mb-0\">\r\n                    <div class=\"card-body\">\r\n                        <h3 class=\"card-title\">Your Order</h3>\r\n\r\n                        <table class=\"checkout__totals\">\r\n                            <thead class=\"checkout__totals-header\">\r\n                            <tr>\r\n                                <th>Product</th>\r\n                                <th>Total</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody class=\"checkout__totals-products\">\r\n                            <tr *ngFor=\"let item of cart.items$|async\">\r\n                                <td>{{ item.product.name }} × {{ item.quantity }}</td>\r\n                                <td>{{ item.product.price * item.quantity|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tbody *ngIf=\"(cart.totals$|async).length\" class=\"checkout__totals-subtotals\">\r\n                            <tr>\r\n                                <th>Subtotal</th>\r\n                                <td>{{ cart.subtotal$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            <tr *ngFor=\"let total of cart.totals$|async\">\r\n                                <th>{{ total.title }}</th>\r\n                                <td>{{ total.price|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                            <tfoot class=\"checkout__totals-footer\">\r\n                            <tr>\r\n                                <th>Total</th>\r\n                                <td>{{ cart.total$|async|currencyFormat }}</td>\r\n                            </tr>\r\n                            </tfoot>\r\n                        </table>\r\n\r\n                        <div class=\"payment-methods\">\r\n                            <ul class=\"payment-methods__list\">\r\n                                <li class=\"payment-methods__item payment-methods__item--active\">\r\n                                    <label class=\"payment-methods__item-header\">\r\n                                            <span class=\"payment-methods__item-radio input-radio\">\r\n                                                <span class=\"input-radio__body\">\r\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\" checked>\r\n                                                    <span class=\"input-radio__circle\"></span>\r\n                                                </span>\r\n                                            </span>\r\n                                        <span class=\"payment-methods__item-title\">Direct bank transfer</span>\r\n                                    </label>\r\n                                    <div class=\"payment-methods__item-container\">\r\n                                        <div class=\"payment-methods__item-description text-muted\">\r\n                                            Make your payment directly into our bank account. Please use your Order ID as the payment\r\n                                            reference. Your order will not be shipped until the funds have cleared in our account.\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"payment-methods__item\">\r\n                                    <label class=\"payment-methods__item-header\">\r\n                                            <span class=\"payment-methods__item-radio input-radio\">\r\n                                                <span class=\"input-radio__body\">\r\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\">\r\n                                                    <span class=\"input-radio__circle\"></span>\r\n                                                </span>\r\n                                            </span>\r\n                                        <span class=\"payment-methods__item-title\">Check payments</span>\r\n                                    </label>\r\n                                    <div class=\"payment-methods__item-container\">\r\n                                        <div class=\"payment-methods__item-description text-muted\">\r\n                                            Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"payment-methods__item\">\r\n                                    <label class=\"payment-methods__item-header\">\r\n                                            <span class=\"payment-methods__item-radio input-radio\">\r\n                                                <span class=\"input-radio__body\">\r\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\">\r\n                                                    <span class=\"input-radio__circle\"></span>\r\n                                                </span>\r\n                                            </span>\r\n                                        <span class=\"payment-methods__item-title\">Cash on delivery</span>\r\n                                    </label>\r\n                                    <div class=\"payment-methods__item-container\">\r\n                                        <div class=\"payment-methods__item-description text-muted\">\r\n                                            Pay with cash upon delivery.\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                                <li class=\"payment-methods__item\">\r\n                                    <label class=\"payment-methods__item-header\">\r\n                                            <span class=\"payment-methods__item-radio input-radio\">\r\n                                                <span class=\"input-radio__body\">\r\n                                                    <input class=\"input-radio__input\" name=\"checkout_payment_method\" type=\"radio\">\r\n                                                    <span class=\"input-radio__circle\"></span>\r\n                                                </span>\r\n                                            </span>\r\n                                        <span class=\"payment-methods__item-title\">PayPal</span>\r\n                                    </label>\r\n                                    <div class=\"payment-methods__item-container\">\r\n                                        <div class=\"payment-methods__item-description text-muted\">\r\n                                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"checkout__agree form-group\">\r\n                            <div class=\"form-check\">\r\n                                    <span class=\"form-check-input input-check\">\r\n                                        <span class=\"input-check__body\">\r\n                                            <input class=\"input-check__input\" type=\"checkbox\" id=\"checkout-terms\">\r\n                                            <span class=\"input-check__box\"></span>\r\n                                            <svg class=\"input-check__icon\" width=\"9px\" height=\"7px\"><use xlink:href=\"assets/images/sprite.svg#check-9x7\"></use></svg>\r\n                                        </span>\r\n                                    </span>\r\n                                <label class=\"form-check-label\" for=\"checkout-terms\">\r\n                                    I have read and agree to the website <a target=\"_blank\" href=\"terms-and-conditions.html\">terms and conditions</a>*\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-xl btn-block\">Place Order</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-compare/page-compare.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-compare/page-compare.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'Comparison'\" [breadcrumbs]=\"[\r\n    {label: 'Home',       url: '../../'},\r\n    {label: 'Comparison', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block block-empty\" *ngIf=\"!products.length\">\r\n    <div class=\"container\">\r\n        <div class=\"block-empty__body\">\r\n            <div class=\"block-empty__message\">You have not chosen any products to compare!</div>\r\n            <div class=\"block-empty__actions\">\r\n                <a routerLink=\"../../\" class=\"btn btn-primary btn-sm\">Continue</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"block\" *ngIf=\"products.length\">\r\n    <div class=\"container\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"compare-table\">\r\n                <tbody>\r\n                <tr>\r\n                    <th>Product</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <a [routerLink]=\"root.product(product.id)\" class=\"compare-table__product-link\">\r\n                            <div class=\"compare-table__product-image\">\r\n                                <img *ngIf=\"product.images?.length\" [src]=\"product.images[0]\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"compare-table__product-name\">{{ product.name }}</div>\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Rating</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <div class=\"compare-table__product-rating\">\r\n                            <app-rating [value]=\"product.rating\"></app-rating>\r\n                        </div>\r\n                        <div class=\"compare-table__product-rating-legend\">\r\n                            {{ product.reviews }} Reviews\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Availability</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <span *ngIf=\"product.availability === 'in-stock'\" class=\"compare-table__product-badge badge badge-success\">In Stock</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Price</th>\r\n                    <td *ngFor=\"let product of products\">{{ product.price|currencyFormat }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Add To Cart</th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <button class=\"btn btn-primary\" (click)=\"addToCart(product)\" [ngClass]=\"{'btn-loading': addedToCartProducts.includes(product)}\">Add To Cart</button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngFor=\"let feature of features\">\r\n                    <th>{{ feature.name }}</th>\r\n                    <td *ngFor=\"let product of products\">{{ feature.values[product.id] }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th></th>\r\n                    <td *ngFor=\"let product of products\">\r\n                        <button class=\"btn btn-secondary btn-sm\" (click)=\"remove(product)\" [ngClass]=\"{'btn-loading': removedProducts.includes(product)}\">Remove</button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-product/page-product.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-product/page-product.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [breadcrumbs]=\"[\r\n    {label: 'Home',         url: '../../../'},\r\n    {label: 'Books',   url: '../../'},\r\n    {label: product?.name, url: ''}\r\n]\"></app-page-header>\r\n\r\n<ng-container *ngIf=\"layout !== 'sidebar'\">\r\n    <div class=\"block\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-9\">\r\n                    <app-product [product]=\"product\" [layout]=\"layout\"></app-product>\r\n\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                    <div class=\"card payment-card\">\r\n                        <div class=\"card-header\">\r\n                            Delivery Options\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <select name=\"address-select\" class=\"form-control\" id=\"\">\r\n                                <option value=\"#\">Dhaka</option>\r\n                                <option value=\"#\">Barishal</option>\r\n                                <option value=\"#\">Khulna</option>\r\n                                <option value=\"#\">Comilla</option>\r\n                            </select>\r\n                            <p>Home Delivery - 2 - 5 days - ৳ 60</p>\r\n                            <p>Cash on Delivery Available</p>\r\n                            <p>Return - 7 Days Happy Returns</p>\r\n                            <p>Change of mind is not applicable <br>\r\n                                Warranty not available</p>\r\n                                <br>\r\n                            <div class=\"product__share-links share-links\">\r\n                                <ul class=\"share-links__list\">\r\n                                    <li class=\"share-links__item share-links__item--type--like\"><a href=\"\" appClick>Like</a></li>\r\n                                    <li class=\"share-links__item share-links__item--type--tweet\"><a href=\"\" appClick>Tweet</a></li>\r\n                                    <li class=\"share-links__item share-links__item--type--pin\"><a href=\"\" appClick>Pin It</a></li>\r\n                                    <li class=\"share-links__item share-links__item--type--counter\"><a href=\"\" appClick>4K</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <app-product-tabs></app-product-tabs>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- <app-compare></app-compare> -->\r\n\r\n    <app-block-products-carousel header=\"Related Books\" [products]=\"products\" [rows]=\"1\" layout=\"grid-5\"></app-block-products-carousel>\r\n    \r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"layout === 'sidebar'\">\r\n    <ng-template #sidebar>\r\n        <div class=\"shop-layout__sidebar\">\r\n            <div class=\"block block-sidebar\">\r\n                <div class=\"block-sidebar__item\">\r\n                    <app-widget-categories [categories]=\"categories\" location=\"shop\"></app-widget-categories>\r\n                </div>\r\n                <div class=\"block-sidebar__item\">\r\n                    <app-widget-products header=\"Latest Products\" [products]=\"products\"></app-widget-products>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <div class=\"container\">\r\n        <div class=\"shop-layout shop-layout--sidebar--{{ sidebarPosition }}\">\r\n            <ng-container *ngIf=\"sidebarPosition === 'start'\" [ngTemplateOutlet]=\"sidebar\"></ng-container>\r\n            <div class=\"shop-layout__content\">\r\n                <div class=\"block\">\r\n                    <app-product [product]=\"product\" [layout]=\"layout\"></app-product>\r\n\r\n                    <app-product-tabs [withSidebar]=\"true\"></app-product-tabs>\r\n                </div>\r\n\r\n                <app-block-products-carousel header=\"Related Products\" [products]=\"products\" [rows]=\"1\" [withSidebar]=\"true\" layout=\"grid-4-sm\"></app-block-products-carousel>\r\n            </div>\r\n            <ng-container *ngIf=\"sidebarPosition === 'end'\" [ngTemplateOutlet]=\"sidebar\"></ng-container>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-track-order/page-track-order.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-track-order/page-track-order.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [breadcrumbs]=\"[\r\n    {label: 'Home',        url: '../../'},\r\n    {label: 'Track Order', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-xl-5 col-lg-6 col-md-8\">\r\n                <div class=\"card flex-grow-1 mb-0 mt-5\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-title text-center\"><h1>Track Order</h1></div>\r\n                        <p class=\"mb-4 pt-2\">\r\n                            Vestibulum sem odio, ullamcorper a imperdiet tincidunt sed magna felis, consequat a erat ut,\r\n                            rutrum finibus odio.\r\n                        </p>\r\n                        <form>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"track-order-id\">Order ID</label>\r\n                                <input id=\"track-order-id\" type=\"text\" class=\"form-control\" placeholder=\"Order ID\">\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label for=\"track-email\">Email address</label>\r\n                                <input id=\"track-email\" type=\"email\" class=\"form-control\" placeholder=\"Email address\">\r\n                            </div>\r\n                            <div class=\"pt-3\">\r\n                                <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Track</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-header [header]=\"'Wish List'\" [breadcrumbs]=\"[\r\n    {label: 'Home',      url: '../../'},\r\n    {label: 'Wish List', url: ''}\r\n]\"></app-page-header>\r\n\r\n<div class=\"block block-empty\" *ngIf=\"!(wishlist.items$|async).length\">\r\n    <div class=\"container\">\r\n        <div class=\"block-empty__body\">\r\n            <div class=\"block-empty__message\">Your wish list is empty!</div>\r\n            <div class=\"block-empty__actions\">\r\n                <a routerLink=\"../../\" class=\"btn btn-primary btn-sm\">Continue</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"block\" *ngIf=\"(wishlist.items$|async).length\">\r\n    <div class=\"container\">\r\n        <table class=\"wishlist\">\r\n            <thead class=\"wishlist__head\">\r\n            <tr class=\"wishlist__row\">\r\n                <th class=\"wishlist__column wishlist__column--image\">Image</th>\r\n                <th class=\"wishlist__column wishlist__column--product\">Product</th>\r\n                <th class=\"wishlist__column wishlist__column--stock\">Stock Status</th>\r\n                <th class=\"wishlist__column wishlist__column--price\">Price</th>\r\n                <th class=\"wishlist__column wishlist__column--tocart\"></th>\r\n                <th class=\"wishlist__column wishlist__column--remove\"></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody class=\"wishlist__body\">\r\n            <tr *ngFor=\"let product of wishlist.items$|async\" class=\"wishlist__row\">\r\n                <td class=\"wishlist__column wishlist__column--image\">\r\n                    <a [routerLink]=\"root.product(product.id)\" *ngIf=\"product.images?.length\"><img [src]=\"product.images[0]\" alt=\"\"></a>\r\n                </td>\r\n                <td class=\"wishlist__column wishlist__column--product\">\r\n                    <a [routerLink]=\"root.product(product.id)\" class=\"wishlist__product-name\">{{ product.name }}</a>\r\n                    <div class=\"wishlist__product-rating\">\r\n                        <app-rating [value]=\"product.rating\"></app-rating>\r\n                        <div class=\"wishlist__product-rating-legend\">{{ product.reviews }} Reviews</div>\r\n                    </div>\r\n                </td>\r\n                <td class=\"wishlist__column wishlist__column--stock\">\r\n                    <div class=\"badge badge-success\">In Stock</div>\r\n                </td>\r\n                <td class=\"wishlist__column wishlist__column--price\">{{ product.price|currencyFormat }}</td>\r\n                <td class=\"wishlist__column wishlist__column--tocart\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addToCart(product)\" [ngClass]=\"{'btn-loading': addedToCartProducts.includes(product)}\">Add To Cart</button>\r\n                </td>\r\n                <td class=\"wishlist__column wishlist__column--remove\">\r\n                    <button type=\"button\" class=\"btn btn-light btn-sm btn-svg-icon\" (click)=\"remove(product)\" [ngClass]=\"{'btn-loading': removedProducts.includes(product)}\">\r\n                        <app-icon name=\"cross-12\" size=\"12\"></app-icon>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/shop/components/product-tabs/product-tabs.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-tabs/product-tabs.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Byb2R1Y3QtdGFicy9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/components/product-tabs/product-tabs.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/product-tabs/product-tabs.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTabsComponent", function() { return ProductTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/shop-product-spec */ "./src/data/shop-product-spec.ts");
/* harmony import */ var _data_shop_product_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/shop-product-reviews */ "./src/data/shop-product-reviews.ts");




var ProductTabsComponent = /** @class */ (function () {
    function ProductTabsComponent() {
        this.withSidebar = false;
        this.tab = 'specification';
        this.specification = _data_shop_product_spec__WEBPACK_IMPORTED_MODULE_2__["specification"];
        this.reviews = _data_shop_product_reviews__WEBPACK_IMPORTED_MODULE_3__["reviews"];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductTabsComponent.prototype, "withSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductTabsComponent.prototype, "tab", void 0);
    ProductTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-tabs',
            template: __webpack_require__(/*! raw-loader!./product-tabs.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/product-tabs/product-tabs.component.html"),
            styles: [__webpack_require__(/*! ./product-tabs.component.scss */ "./src/app/modules/shop/components/product-tabs/product-tabs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductTabsComponent);
    return ProductTabsComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/components/products-view/products-view.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shop/components/products-view/products-view.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Byb2R1Y3RzLXZpZXcvcHJvZHVjdHMtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/shop/components/products-view/products-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/products-view/products-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsViewComponent", function() { return ProductsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");



var ProductsViewComponent = /** @class */ (function () {
    function ProductsViewComponent(sidebar) {
        this.sidebar = sidebar;
        this.products = [];
        this.layout = 'grid';
        this.grid = 'grid-5-full';
        this.limit = 12;
        this.offcanvas = 'mobile';
    }
    ProductsViewComponent.prototype.setLayout = function (value) {
        this.layout = value;
    };
    ProductsViewComponent.prototype.onPageChange = function (page) {
        // console.log(page);
    };
    ProductsViewComponent.ctorParameters = function () { return [
        { type: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ProductsViewComponent.prototype, "products", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductsViewComponent.prototype, "layout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductsViewComponent.prototype, "grid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductsViewComponent.prototype, "limit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductsViewComponent.prototype, "offcanvas", void 0);
    ProductsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products-view',
            template: __webpack_require__(/*! raw-loader!./products-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/products-view/products-view.component.html"),
            styles: [__webpack_require__(/*! ./products-view.component.scss */ "./src/app/modules/shop/components/products-view/products-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["ShopSidebarService"]])
    ], ProductsViewComponent);
    return ProductsViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.sass":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.sass ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9jb21wb25lbnRzL3Nob3Atc2lkZWJhci9zaG9wLXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShopSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarComponent", function() { return ShopSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_shop_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/shop-products */ "./src/data/shop-products.ts");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/functions/rxjs/fromMatchMedia */ "./src/app/shared/functions/rxjs/fromMatchMedia.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var ShopSidebarComponent = /** @class */ (function () {
    function ShopSidebarComponent(sidebar, platformId) {
        this.sidebar = sidebar;
        this.platformId = platformId;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.filters = [];
        this.offcanvas = 'mobile';
        this.products = _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"];
        this.isOpen = false;
    }
    ShopSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sidebar.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (isOpen) {
            if (isOpen) {
                _this.open();
            }
            else {
                _this.close();
            }
        });
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
            Object(_shared_functions_rxjs_fromMatchMedia__WEBPACK_IMPORTED_MODULE_6__["fromMatchMedia"])('(max-width: 991px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (media) {
                if (_this.offcanvas === 'mobile' && _this.isOpen && !media.matches) {
                    _this.close();
                }
            });
        }
    };
    ShopSidebarComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    ShopSidebarComponent.prototype.open = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
            var bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
        }
        this.isOpen = true;
    };
    ShopSidebarComponent.prototype.close = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
        }
        this.isOpen = false;
    };
    ShopSidebarComponent.ctorParameters = function () { return [
        { type: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["ShopSidebarService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ShopSidebarComponent.prototype, "filters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ShopSidebarComponent.prototype, "offcanvas", void 0);
    ShopSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-sidebar',
            template: __webpack_require__(/*! raw-loader!./shop-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./shop-sidebar.component.sass */ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_3__["ShopSidebarService"], Object])
    ], ShopSidebarComponent);
    return ShopSidebarComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/guards/checkout.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/shop/guards/checkout.guard.ts ***!
  \*******************************************************/
/*! exports provided: CheckoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutGuard", function() { return CheckoutGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    CheckoutGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.cart.quantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (quantity) {
            if (quantity) {
                return true;
            }
            var parentUrl = state.url.slice(0, state.url.indexOf(route.url[route.url.length - 1].path));
            _this.router.navigate([parentUrl, 'cart']).then();
            return false;
        }));
    };
    CheckoutGuard.ctorParameters = function () { return [
        { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CheckoutGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckoutGuard);
    return CheckoutGuard;
}());



/***/ }),

/***/ "./src/app/modules/shop/pages/page-cart/page-cart.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-cart/page-cart.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNhcnQvcGFnZS1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-cart/page-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-cart/page-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCartComponent", function() { return PageCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");







var PageCartComponent = /** @class */ (function () {
    function PageCartComponent(root, cart) {
        this.root = root;
        this.cart = cart;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.removedItems = [];
        this.items = [];
        this.updating = false;
    }
    PageCartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (cartItems) { return cartItems.map(function (cartItem) {
            return {
                cartItem: cartItem,
                quantity: cartItem.quantity,
                quantityControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](cartItem.quantity, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
            };
        }); })).subscribe(function (items) { return _this.items = items; });
    };
    PageCartComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    PageCartComponent.prototype.remove = function (item) {
        var _this = this;
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        this.cart.remove(item).subscribe({ complete: function () { return _this.removedItems = _this.removedItems.filter(function (eachItem) { return eachItem !== item; }); } });
    };
    PageCartComponent.prototype.update = function () {
        var _this = this;
        this.updating = true;
        this.cart.update(this.items
            .filter(function (item) { return item.quantityControl.value !== item.quantity; })
            .map(function (item) { return ({
            item: item.cartItem,
            quantity: item.quantityControl.value
        }); })).subscribe({ complete: function () { return _this.updating = false; } });
    };
    PageCartComponent.prototype.needUpdate = function () {
        var needUpdate = false;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.quantityControl.valid) {
                return false;
            }
            if (item.quantityControl.value !== item.quantity) {
                needUpdate = true;
            }
        }
        return needUpdate;
    };
    PageCartComponent.ctorParameters = function () { return [
        { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
        { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
    ]; };
    PageCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./page-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-cart/page-cart.component.html"),
            styles: [__webpack_require__(/*! ./page-cart.component.scss */ "./src/app/modules/shop/pages/page-cart/page-cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
            _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], PageCartComponent);
    return PageCartComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/pages/page-category/page-category.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-category/page-category.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNhdGVnb3J5L3BhZ2UtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-category/page-category.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-category/page-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCategoryComponent", function() { return PageCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_shop_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/shop-filters */ "./src/data/shop-filters.ts");
/* harmony import */ var _data_shop_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../data/shop-products */ "./src/data/shop-products.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "./src/app/modules/shop/services/shop-sidebar.service.ts");






var PageCategoryComponent = /** @class */ (function () {
    function PageCategoryComponent(route) {
        var _this = this;
        this.route = route;
        this.products = _data_shop_products__WEBPACK_IMPORTED_MODULE_3__["products"];
        this.filters = _data_shop_filters__WEBPACK_IMPORTED_MODULE_2__["filters"];
        this.columns = 3;
        this.viewMode = 'grid';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
        this.route.data.subscribe(function (data) {
            _this.columns = 'columns' in data ? data.columns : _this.columns;
            _this.viewMode = 'viewMode' in data ? data.viewMode : _this.viewMode;
            _this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : _this.sidebarPosition;
        });
    }
    PageCategoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    PageCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! raw-loader!./page-category.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-category/page-category.component.html"),
            providers: [
                { provide: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["ShopSidebarService"], useClass: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_5__["ShopSidebarService"] }
            ],
            styles: [__webpack_require__(/*! ./page-category.component.scss */ "./src/app/modules/shop/pages/page-category/page-category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PageCategoryComponent);
    return PageCategoryComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-checkout/page-checkout.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNoZWNrb3V0L3BhZ2UtY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCheckoutComponent", function() { return PageCheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var PageCheckoutComponent = /** @class */ (function () {
    function PageCheckoutComponent(cart, route, router) {
        this.cart = cart;
        this.route = route;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    PageCheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cart.quantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (quantity) {
            if (!quantity) {
                _this.router.navigate(['../cart'], { relativeTo: _this.route }).then();
            }
        });
    };
    PageCheckoutComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    PageCheckoutComponent.ctorParameters = function () { return [
        { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    PageCheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! raw-loader!./page-checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-checkout/page-checkout.component.html"),
            styles: [__webpack_require__(/*! ./page-checkout.component.scss */ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PageCheckoutComponent);
    return PageCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/pages/page-compare/page-compare.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-compare/page-compare.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLWNvbXBhcmUvcGFnZS1jb21wYXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-compare/page-compare.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-compare/page-compare.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageCompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCompareComponent", function() { return PageCompareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/compare.service */ "./src/app/shared/services/compare.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");







var PageCompareComponent = /** @class */ (function () {
    function PageCompareComponent(root, compare, cart) {
        this.root = root;
        this.compare = compare;
        this.cart = cart;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.products = [];
        this.features = [];
        this.addedToCartProducts = [];
        this.removedProducts = [];
    }
    PageCompareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.compare.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (products) {
            var features = [];
            products.forEach(function (product) { return product.features.forEach(function (productFeature) {
                var feature = features.find(function (eachFeature) { return eachFeature.name === productFeature.name; });
                if (!feature) {
                    feature = {
                        name: productFeature.name,
                        values: {}
                    };
                    features.push(feature);
                }
                feature.values[product.id] = productFeature.value;
            }); });
            _this.products = products;
            _this.features = features;
        });
    };
    PageCompareComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    PageCompareComponent.prototype.addToCart = function (product) {
        var _this = this;
        if (this.addedToCartProducts.includes(product)) {
            return;
        }
        this.addedToCartProducts.push(product);
        this.cart.add(product, 1).subscribe({
            complete: function () {
                _this.addedToCartProducts = _this.addedToCartProducts.filter(function (eachProduct) { return eachProduct !== product; });
            }
        });
    };
    PageCompareComponent.prototype.remove = function (product) {
        var _this = this;
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        this.compare.remove(product).subscribe({
            complete: function () {
                _this.removedProducts = _this.removedProducts.filter(function (eachProduct) { return eachProduct !== product; });
            }
        });
    };
    PageCompareComponent.ctorParameters = function () { return [
        { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
        { type: _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_2__["CompareService"] },
        { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
    ]; };
    PageCompareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! raw-loader!./page-compare.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-compare/page-compare.component.html"),
            styles: [__webpack_require__(/*! ./page-compare.component.scss */ "./src/app/modules/shop/pages/page-compare/page-compare.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
            _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_2__["CompareService"],
            _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], PageCompareComponent);
    return PageCompareComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/pages/page-product/page-product.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-product/page-product.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".payment-card {\n  padding: 0;\n}\n.payment-card .card-header {\n  padding: 15px;\n}\n.payment-card .card-body {\n  padding: 15px;\n  padding-top: 0px;\n}\n.payment-card .card-body p {\n  font-size: 13px;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaG9wL3BhZ2VzL3BhZ2UtcHJvZHVjdC9FOlxcYW5ndWxhclxcZW5pbGtoZXQvc3JjXFxhcHBcXG1vZHVsZXNcXHNob3BcXHBhZ2VzXFxwYWdlLXByb2R1Y3RcXHBhZ2UtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaG9wL3BhZ2VzL3BhZ2UtcHJvZHVjdC9wYWdlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7QUNFUjtBREFJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Nob3AvcGFnZXMvcGFnZS1wcm9kdWN0L3BhZ2UtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LWNhcmR7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLmNhcmQtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5wYXltZW50LWNhcmQge1xuICBwYWRkaW5nOiAwO1xufVxuLnBheW1lbnQtY2FyZCAuY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnBheW1lbnQtY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5wYXltZW50LWNhcmQgLmNhcmQtYm9keSBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDEwcHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-product/page-product.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-product/page-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProductComponent", function() { return PageProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_shop_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/shop-products */ "./src/data/shop-products.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_shop_widget_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/shop-widget-categories */ "./src/data/shop-widget-categories.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PageProductComponent = /** @class */ (function () {
    function PageProductComponent(route) {
        var _this = this;
        this.route = route;
        this.categories = _data_shop_widget_categories__WEBPACK_IMPORTED_MODULE_4__["categories"];
        this.products = _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"];
        this.layout = 'standard';
        this.sidebarPosition = 'start'; // For LTR scripts "start" is "left" and "end" is "right"
        this.route.data.subscribe(function (data) {
            _this.layout = 'layout' in data ? data.layout : _this.layout;
            _this.sidebarPosition = 'sidebarPosition' in data ? data.sidebarPosition : _this.sidebarPosition;
        });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (params) {
            if (params.hasOwnProperty('id')) {
                var product = _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"].find(function (eachProduct) { return eachProduct.id === parseFloat(params.id); });
                if (product) {
                    return product;
                }
            }
            return _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"][_data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"].length - 1];
        })).subscribe(function (product) { return _this.product = product; });
    }
    PageProductComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    PageProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-product',
            template: __webpack_require__(/*! raw-loader!./page-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-product/page-product.component.html"),
            styles: [__webpack_require__(/*! ./page-product.component.scss */ "./src/app/modules/shop/pages/page-product/page-product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageProductComponent);
    return PageProductComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-track-order/page-track-order.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLXRyYWNrLW9yZGVyL3BhZ2UtdHJhY2stb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PageTrackOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTrackOrderComponent", function() { return PageTrackOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageTrackOrderComponent = /** @class */ (function () {
    function PageTrackOrderComponent() {
    }
    PageTrackOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-track-order',
            template: __webpack_require__(/*! raw-loader!./page-track-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-track-order/page-track-order.component.html"),
            styles: [__webpack_require__(/*! ./page-track-order.component.scss */ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageTrackOrderComponent);
    return PageTrackOrderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hvcC9wYWdlcy9wYWdlLXdpc2hsaXN0L3BhZ2Utd2lzaGxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PageWishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWishlistComponent", function() { return PageWishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");





var PageWishlistComponent = /** @class */ (function () {
    function PageWishlistComponent(root, wishlist, cart) {
        this.root = root;
        this.wishlist = wishlist;
        this.cart = cart;
        this.addedToCartProducts = [];
        this.removedProducts = [];
    }
    PageWishlistComponent.prototype.addToCart = function (product) {
        var _this = this;
        if (this.addedToCartProducts.includes(product)) {
            return;
        }
        this.addedToCartProducts.push(product);
        this.cart.add(product, 1).subscribe({
            complete: function () {
                _this.addedToCartProducts = _this.addedToCartProducts.filter(function (eachProduct) { return eachProduct !== product; });
            }
        });
    };
    PageWishlistComponent.prototype.remove = function (product) {
        var _this = this;
        if (this.removedProducts.includes(product)) {
            return;
        }
        this.removedProducts.push(product);
        this.wishlist.remove(product).subscribe({
            complete: function () {
                _this.removedProducts = _this.removedProducts.filter(function (eachProduct) { return eachProduct !== product; });
            }
        });
    };
    PageWishlistComponent.ctorParameters = function () { return [
        { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"] },
        { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"] },
        { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] }
    ]; };
    PageWishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! raw-loader!./page-wishlist.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.html"),
            styles: [__webpack_require__(/*! ./page-wishlist.component.scss */ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"],
            _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"],
            _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], PageWishlistComponent);
    return PageWishlistComponent;
}());



/***/ }),

/***/ "./src/app/modules/shop/services/shop-sidebar.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shop/services/shop-sidebar.service.ts ***!
  \***************************************************************/
/*! exports provided: ShopSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarService", function() { return ShopSidebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ShopSidebarService = /** @class */ (function () {
    function ShopSidebarService() {
        this.isOpenSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isOpen$ = this.isOpenSubject$.asObservable();
    }
    ShopSidebarService.prototype.open = function () {
        this.isOpenSubject$.next(true);
    };
    ShopSidebarService.prototype.close = function () {
        this.isOpenSubject$.next(false);
    };
    ShopSidebarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopSidebarService);
    return ShopSidebarService;
}());



/***/ }),

/***/ "./src/app/modules/shop/shop-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/shop/shop-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "./src/app/modules/shop/pages/page-category/page-category.component.ts");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "./src/app/modules/shop/pages/page-cart/page-cart.component.ts");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "./src/app/modules/shop/pages/page-compare/page-compare.component.ts");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts");
/* harmony import */ var _guards_checkout_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/checkout.guard */ "./src/app/modules/shop/guards/checkout.guard.ts");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "./src/app/modules/shop/pages/page-product/page-product.component.ts");











var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category-grid-3-columns-sidebar'
    },
    {
        path: 'category-grid-3-columns-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'category-grid-4-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 4,
            viewMode: 'grid'
        }
    },
    {
        path: 'category-grid-5-columns-full',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 5,
            viewMode: 'grid'
        }
    },
    {
        path: 'category-list',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'list',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'category-right-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            columns: 3,
            viewMode: 'grid',
            sidebarPosition: 'end'
        }
    },
    {
        path: 'product',
        pathMatch: 'full',
        redirectTo: 'product/1'
    },
    {
        path: 'product/:id',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_10__["PageProductComponent"],
        data: {
            layout: 'standard'
        }
    },
    {
        path: 'product-columnar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_10__["PageProductComponent"],
        data: {
            layout: 'columnar'
        }
    },
    {
        path: 'product-sidebar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_10__["PageProductComponent"],
        data: {
            layout: 'sidebar',
            sidebarPosition: 'start'
        }
    },
    {
        path: 'cart',
        component: _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_4__["PageCartComponent"]
    },
    {
        path: 'checkout',
        component: _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_6__["PageCheckoutComponent"],
        canActivate: [_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_9__["CheckoutGuard"]],
    },
    {
        path: 'wishlist',
        component: _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_5__["PageWishlistComponent"]
    },
    {
        path: 'compare',
        component: _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_7__["PageCompareComponent"]
    },
    {
        path: 'track-order',
        component: _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_8__["PageTrackOrderComponent"]
    }
];
var ShopRoutingModule = /** @class */ (function () {
    function ShopRoutingModule() {
    }
    ShopRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ShopRoutingModule);
    return ShopRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/shop/shop.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/shop/shop.module.ts ***!
  \*********************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/blocks.module */ "./src/app/modules/blocks/blocks.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shop-routing.module */ "./src/app/modules/shop/shop-routing.module.ts");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/widgets.module */ "./src/app/modules/widgets/widgets.module.ts");
/* harmony import */ var _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/products-view/products-view.component */ "./src/app/modules/shop/components/products-view/products-view.component.ts");
/* harmony import */ var _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product-tabs/product-tabs.component */ "./src/app/modules/shop/components/product-tabs/product-tabs.component.ts");
/* harmony import */ var _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shop-sidebar/shop-sidebar.component */ "./src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "./src/app/modules/shop/pages/page-cart/page-cart.component.ts");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "./src/app/modules/shop/pages/page-category/page-category.component.ts");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "./src/app/modules/shop/pages/page-checkout/page-checkout.component.ts");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "./src/app/modules/shop/pages/page-compare/page-compare.component.ts");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "./src/app/modules/shop/pages/page-product/page-product.component.ts");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "./src/app/modules/shop/pages/page-track-order/page-track-order.component.ts");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "./src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts");


// modules (angular)


// modules (third-party)

// modules




// components



// pages







var ShopModule = /** @class */ (function () {
    function ShopModule() {
    }
    ShopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // components
                _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_9__["ProductsViewComponent"],
                _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_10__["ProductTabsComponent"],
                _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["ShopSidebarComponent"],
                // pages
                _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_12__["PageCartComponent"],
                _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_13__["PageCategoryComponent"],
                _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_14__["PageCheckoutComponent"],
                _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_15__["PageCompareComponent"],
                _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_16__["PageProductComponent"],
                _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_17__["PageTrackOrderComponent"],
                _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_18__["PageWishlistComponent"]
            ],
            imports: [
                // modules (angular)
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // modules (third-party)
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                // modules
                _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_5__["BlocksModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _shop_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShopRoutingModule"],
                _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_8__["WidgetsModule"]
            ]
        })
    ], ShopModule);
    return ShopModule;
}());



/***/ }),

/***/ "./src/app/shared/functions/rxjs/fromMatchMedia.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/functions/rxjs/fromMatchMedia.ts ***!
  \*********************************************************/
/*! exports provided: fromMatchMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMatchMedia", function() { return fromMatchMedia; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

function fromMatchMedia(query) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var mediaQueryList = matchMedia(query);
        var onChange = function () { return observer.next(mediaQueryList); };
        if (mediaQueryList.addEventListener) {
            mediaQueryList.addEventListener('change', onChange);
            return function () { return mediaQueryList.removeEventListener('change', onChange); };
        }
        else {
            mediaQueryList.addListener(onChange);
            return function () { return mediaQueryList.removeListener(onChange); };
        }
    });
}


/***/ }),

/***/ "./src/data/shop-filters.ts":
/*!**********************************!*\
  !*** ./src/data/shop-filters.ts ***!
  \**********************************/
/*! exports provided: filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
var filters = [
    {
        name: 'Categories',
        type: 'categories',
        options: {
            items: [
                { type: 'parent', count: 254, name: 'Construction & Repair' },
                { type: 'parent', count: 75, name: 'Instruments' },
                { type: 'current', count: 21, name: 'Power Tools' },
                { type: 'child', count: 15, name: 'Drills & Mixers' },
                { type: 'child', count: 2, name: 'Cordless Screwdrivers' },
                { type: 'child', count: 30, name: 'Screwdrivers' },
                { type: 'child', count: 7, name: 'Wrenches' },
                { type: 'child', count: 5, name: 'Grinding Machines' },
                { type: 'child', count: 2, name: 'Milling Cutters' },
                { type: 'child', count: 9, name: 'Electric Spray Guns' },
                { type: 'child', count: 4, name: 'Jigsaws' },
                { type: 'child', count: 0, name: 'Jackhammers' },
                { type: 'child', count: 12, name: 'Planers' },
                { type: 'child', count: 7, name: 'Glue Guns' }
            ]
        }
    },
    {
        name: 'Price',
        type: 'price',
        options: {
            min: 500,
            max: 1500,
            from: 590,
            to: 1130
        }
    },
    {
        name: 'Brand',
        type: 'checkbox',
        options: {
            items: [
                { label: 'Wakita', count: 7, checked: false, disabled: false },
                { label: 'Zosch', count: 42, checked: true, disabled: false },
                { label: 'WeVALT', count: 0, checked: true, disabled: true },
                { label: 'Hammer', count: 0, checked: false, disabled: true },
                { label: 'Mitasia', count: 1, checked: false, disabled: false },
                { label: 'Metaggo', count: 25, checked: false, disabled: false }
            ]
        }
    },
    {
        name: 'Brand',
        type: 'radio',
        options: {
            name: 'filter_radio',
            items: [
                { label: 'Wakita', count: 7, checked: false, disabled: false },
                { label: 'Zosch', count: 42, checked: false, disabled: false },
                { label: 'WeVALT', count: 0, checked: true, disabled: true },
                { label: 'Hammer', count: 0, checked: false, disabled: true },
                { label: 'Mitasia', count: 1, checked: false, disabled: false },
                { label: 'Metaggo', count: 25, checked: false, disabled: false }
            ]
        }
    },
    {
        name: 'Color',
        type: 'color',
        options: {
            items: [
                { label: 'Color 1', count: 7, color: '#fff', checked: false, disabled: false, white: true, light: false },
                { label: 'Color 2', count: 7, color: '#d9d9d9', checked: false, disabled: false, white: false, light: true },
                { label: 'Color 3', count: 7, color: '#b3b3b3', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 4', count: 7, color: '#808080', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 5', count: 7, color: '#666', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 6', count: 7, color: '#4d4d4d', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 7', count: 7, color: '#262626', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 8', count: 7, color: '#ff4040', checked: true, disabled: false, white: false, light: false },
                { label: 'Color 9', count: 7, color: '#ff8126', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 10', count: 7, color: '#ffd440', checked: false, disabled: false, white: false, light: true },
                { label: 'Color 11', count: 7, color: '#becc1f', checked: false, disabled: false, white: false, light: true },
                { label: 'Color 12', count: 7, color: '#8fcc14', checked: true, disabled: false, white: false, light: false },
                { label: 'Color 13', count: 7, color: '#47cc5e', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 14', count: 7, color: '#47cca0', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 15', count: 7, color: '#47cccc', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 16', count: 7, color: '#40bfff', checked: false, disabled: true, white: false, light: false },
                { label: 'Color 17', count: 7, color: '#3d6dcc', checked: true, disabled: false, white: false, light: false },
                { label: 'Color 18', count: 7, color: '#7766cc', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 19', count: 7, color: '#b852cc', checked: false, disabled: false, white: false, light: false },
                { label: 'Color 20', count: 7, color: '#e53981', checked: false, disabled: false, white: false, light: false }
            ]
        }
    }
];


/***/ }),

/***/ "./src/data/shop-product-reviews.ts":
/*!******************************************!*\
  !*** ./src/data/shop-product-reviews.ts ***!
  \******************************************/
/*! exports provided: reviews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviews", function() { return reviews; });
var reviews = [
    {
        avatar: 'assets/images/avatars/avatar-1.jpg',
        author: 'Samantha Smith',
        rating: 4,
        date: '27 May, 2018',
        text: 'Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo ' +
            'scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.'
    },
    {
        avatar: 'assets/images/avatars/avatar-2.jpg',
        author: 'Adam Taylor',
        rating: 3,
        date: '12 April, 2018',
        text: 'Aenean non lorem nisl. Duis tempor sollicitudin orci, eget tincidunt ex semper sit amet. Nullam neque justo, ' +
            'sodales congue feugiat ac, facilisis a augue. Donec tempor sapien et fringilla facilisis. Nam maximus consectetur ' +
            'diam. Nulla ut ex mollis, volutpat tellus vitae, accumsan ligula.'
    },
    {
        avatar: 'assets/images/avatars/avatar-3.jpg',
        author: 'Helena Garcia',
        rating: 5,
        date: '2 January, 2018',
        text: 'Duis ac lectus scelerisque quam blandit egestas. Pellentesque hendrerit eros laoreet suscipit ultrices.'
    }
];


/***/ }),

/***/ "./src/data/shop-product-spec.ts":
/*!***************************************!*\
  !*** ./src/data/shop-product-spec.ts ***!
  \***************************************/
/*! exports provided: specification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specification", function() { return specification; });
var specification = [
    { name: 'General', features: [
            { name: 'Title', value: 'Book Name is here' },
            { name: 'Author', value: 'Author Name' },
            { name: 'Translator', value: 'Translator Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Publisher', value: 'Publisher Name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Edition', value: '1st Published, 2019' },
            { name: 'Number of Pages', value: '250' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ] }
    // ,
    // {name: 'Dimensions', features: [
    //     {name: 'Length', value: '99 mm'},
    //     {name: 'Width', value: '207 mm'},
    //     {name: 'Height', value: '208 mm'}
    // ]}
];


/***/ }),

/***/ "./src/data/shop-widget-categories.ts":
/*!********************************************!*\
  !*** ./src/data/shop-widget-categories.ts ***!
  \********************************************/
/*! exports provided: categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
var categories = [
    { name: 'Power Tools', url: '../', children: [
            { name: 'Engravers', url: '../' },
            { name: 'Drills', url: '../' },
            { name: 'Wrenches', url: '../' },
            { name: 'Plumbing', url: '../' },
            { name: 'Wall Chaser', url: '../' },
            { name: 'Pneumatic Tools', url: '../' },
            { name: 'Milling Cutters', url: '../' }
        ] },
    { name: 'Hand Tools', url: '../', children: [
            { name: 'Screwdrivers', url: '../' },
            { name: 'Handsaws', url: '../' },
            { name: 'Knives', url: '../' },
            { name: 'Axes', url: '../' },
            { name: 'Multitools', url: '../' },
            { name: 'Paint Tools', url: '../' }
        ] },
    { name: 'Garden Equipment', url: '../', children: [
            { name: 'Motor Pumps', url: '../' },
            { name: 'Chainsaws', url: '../' },
            { name: 'Electric Saws', url: '../' },
            { name: 'Brush Cutters', url: '../' }
        ] },
    { name: 'Machine Tools', url: '../', children: [
            { name: 'Thread Cutting', url: '../' },
            { name: 'Chip Blowers', url: '../' },
            { name: 'Sharpening Machines', url: '../' },
            { name: 'Pipe Cutters', url: '../' },
            { name: 'Slotting machines', url: '../' },
            { name: 'Lathes', url: '../' }
        ] },
    { name: 'Instruments', url: '../', children: [
            { name: 'Welding Equipment', url: '../' },
            { name: 'Power Tools', url: '../' },
            { name: 'Hand Tools', url: '../' },
            { name: 'Measuring Tool', url: '../' }
        ] },
    { name: 'Workbenches', url: '../' },
    { name: 'Presses', url: '../' },
    { name: 'Spray Guns', url: '../' },
    { name: 'Riveters', url: '../' }
];


/***/ })

}]);
//# sourceMappingURL=modules-shop-shop-module-es5.js.map