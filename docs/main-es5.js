(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/root/root.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/root/root.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading-bar></app-loading-bar>\r\n\r\n<app-quickview></app-quickview>\r\n\r\n<!-- mobilemenu -->\r\n<app-mobile-menu></app-mobile-menu>\r\n<!-- mobilemenu / end -->\r\n\r\n<!-- site -->\r\n<div class=\"site\">\r\n    <!-- mobile site__header -->\r\n    <header class=\"site__header d-lg-none\">\r\n        <app-mobile-header></app-mobile-header>\r\n    </header>\r\n    <!-- mobile site__header / end -->\r\n\r\n    <!-- desktop site__header -->\r\n    <header *ngIf=\"headerLayout\" class=\"site__header d-lg-block d-none\">\r\n        <app-header [layout]=\"headerLayout\"></app-header>\r\n    </header>\r\n    <!-- desktop site__header / end -->\r\n\r\n    <!-- site__body -->\r\n    <div class=\"site__body\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <!-- site__body / end -->\r\n\r\n    <!-- site__footer -->\r\n    <footer class=\"site__footer\">\r\n        <app-footer></app-footer>\r\n    </footer>\r\n    <!-- site__footer / end -->\r\n</div>\r\n<!-- site / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-banner/block-banner.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-banner/block-banner.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .block-banner -->\r\n<div class=\"block block-banner\">\r\n    <div class=\"container\">\r\n        <a href=\"\" class=\"block-banner__body\">\r\n            <div class=\"block-banner__image block-banner__image--desktop\" style=\"background-image: url('assets/images/banners/banner-1.jpg')\"></div>\r\n            <div class=\"block-banner__image block-banner__image--mobile\" style=\"background-image: url('assets/images/banners/banner-1-mobile.jpg')\"></div>\r\n            <div class=\"block-banner__title\">Hundreds <br class=\"block-banner__mobile-br\"> Hand Tools</div>\r\n            <div class=\"block-banner__text\">Hammers, Chisels, Universal Pliers, Nippers, Jigsaws, Saws</div>\r\n            <div class=\"block-banner__button\">\r\n                <span class=\"btn btn-sm btn-primary\">Shop Now</span>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</div>\r\n<!-- .block-banner / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-brands/block-brands.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-brands/block-brands.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .block-brands -->\r\n<div class=\"block block-brands\">\r\n    <div class=\"container\">\r\n        <div class=\"block-brands__slider\">\r\n            <owl-carousel-o [options]=\"carouselOptions\" appOwlPreventClick>\r\n                <ng-container *ngFor=\"let brand of brands\">\r\n                    <ng-template carouselSlide>\r\n                        <div class=\"block-brands__item\">\r\n                            <a href=\"\"><img [src]=\"brand.image\" alt=\"\"></a>\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </owl-carousel-o>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-brands / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-categories/block-categories.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-categories/block-categories.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .block-categories -->\r\n<div class=\"block block--highlighted block-categories block-categories--layout--{{ layout }}\">\r\n    <div class=\"container\">\r\n        <app-block-header [header]=\"header\"></app-block-header>\r\n\r\n        <div class=\"block-categories__list\">\r\n            <div *ngFor=\"let category of categories\" class=\"block-categories__item category-card category-card--layout--{{ layout }}\">\r\n                <div class=\"category-card__body\">\r\n                    <div class=\"category-card__image\">\r\n                        <a [routerLink]=\"category.url\"><img [src]=\"category.image\" alt=\"\"></a>\r\n                    </div>\r\n                    <div class=\"category-card__content\">\r\n                        <div class=\"category-card__name\">\r\n                            <a [routerLink]=\"category.url\">{{ category.title }}</a>\r\n                        </div>\r\n                        <ul class=\"category-card__links\">\r\n                            <li *ngFor=\"let category of category.subcategories\"><a [routerLink]=\"category.url\">{{ category.title }}</a></li>\r\n                        </ul>\r\n                        <div class=\"category-card__all\">\r\n                            <a [routerLink]=\"category.url\">Show All</a>\r\n                        </div>\r\n                        <div class=\"category-card__products\">\r\n                            {{ category.products }} Products\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-categories / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-features/block-features.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-features/block-features.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .block-features -->\r\n<div class=\"block block-features block-features--layout--{{ layout }}\">\r\n    <div class=\"container\">\r\n        <div class=\"block-features__list\">\r\n            <div class=\"block-features__item\">\r\n                <div class=\"block-features__icon\">\r\n                    <app-icon name=\"fi-free-delivery-48\" size=\"48\"></app-icon>\r\n                </div>\r\n                <div class=\"block-features__content\">\r\n                    <div class=\"block-features__title\">Free Shipping</div>\r\n                    <div class=\"block-features__subtitle\">For orders from $50</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"block-features__divider\"></div>\r\n            <div class=\"block-features__item\">\r\n                <div class=\"block-features__icon\">\r\n                    <app-icon name=\"fi-24-hours-48\" size=\"48\"></app-icon>\r\n                </div>\r\n                <div class=\"block-features__content\">\r\n                    <div class=\"block-features__title\">Support 24/7</div>\r\n                    <div class=\"block-features__subtitle\">Call us anytime</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"block-features__divider\"></div>\r\n            <div class=\"block-features__item\">\r\n                <div class=\"block-features__icon\">\r\n                    <app-icon name=\"fi-payment-security-48\" size=\"48\"></app-icon>\r\n                </div>\r\n                <div class=\"block-features__content\">\r\n                    <div class=\"block-features__title\">100% Safety</div>\r\n                    <div class=\"block-features__subtitle\">Only secure payments</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"block-features__divider\"></div>\r\n            <div class=\"block-features__item\">\r\n                <div class=\"block-features__icon\">\r\n                    <app-icon name=\"fi-tag-48\" size=\"48\"></app-icon>\r\n                </div>\r\n                <div class=\"block-features__content\">\r\n                    <div class=\"block-features__title\">Hot Offers</div>\r\n                    <div class=\"block-features__subtitle\">Discounts up to 90%</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-features / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-map/block-map.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-map/block-map.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-map block\">\r\n    <div class=\"block-map__body\">\r\n        <iframe src='https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'\r\n                frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-posts/block-posts.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-posts/block-posts.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .block-posts -->\r\n<div class=\"block block-posts block-posts--layout--{{ layout }}\" [attr.data-layout]=\"layout\">\r\n    <div class=\"container\">\r\n        <app-block-header [header]=\"header\" [arrows]=\"true\" (prev)=\"carousel.prev()\" (next)=\"carousel.next()\"></app-block-header>\r\n\r\n        <div class=\"block-posts__slider\">\r\n            <owl-carousel-o [options]=\"carouselOptions\" appOwlPreventClick #carousel>\r\n                <ng-container *ngFor=\"let post of posts\">\r\n                    <ng-template carouselSlide>\r\n                        <app-post-card [post]=\"post\"></app-post-card>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </owl-carousel-o>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-posts / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-product-columns/block-product-columns.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-product-columns/block-product-columns.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .block-product-columns -->\r\n<div class=\"block block-product-columns d-lg-block d-none\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let column of columns\" class=\"col\">\r\n                <app-block-header [header]=\"column.header\"></app-block-header>\r\n\r\n                <div class=\"block-product-columns__column\">\r\n                    <div *ngFor=\"let product of column.products\" class=\"block-product-columns__item\">\r\n                        <app-product-card [product]=\"product\" layout=\"horizontal\"></app-product-card>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-product-columns / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .block-products-carousel -->\r\n<div class=\"block block-products-carousel\" [ngClass]=\"{'block-products-carousel--loading': loading}\" [attr.data-layout]=\"layout\">\r\n    <div  [ngClass]=\"{'container': !withSidebar}\">\r\n        <app-block-header [header]=\"header\" [groups]=\"groups\" [arrows]=\"true\" (next)=\"carousel.next()\" (prev)=\"carousel.prev()\" (groupChange)=\"groupChange.emit($event)\"></app-block-header>\r\n\r\n        <div class=\"block-products-carousel__slider books\">\r\n            <div class=\"block-products-carousel__preloader\"></div>\r\n\r\n            <owl-carousel-o [options]=\"carouselOptions\" appOwlPreventClick #carousel>\r\n                <ng-container *ngFor=\"let column of columns\">\r\n                    <ng-template carouselSlide>\r\n                        <div class=\"block-products-carousel__column\">\r\n                            <div *ngFor=\"let product of column\" class=\"block-products-carousel__cell\">\r\n                                <app-product-card [product]=\"product\"></app-product-card>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </owl-carousel-o>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-products-carousel / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-products/block-products.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-products/block-products.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .block-products -->\r\n<div class=\"block block-products block-products--layout--{{ layout }}\">\r\n    <div class=\"container\">\r\n        <app-block-header [header]=\"header\"></app-block-header>\r\n\r\n        <div class=\"block-products__body\">\r\n            <ng-template #largeTemplate>\r\n                <ng-container *ngIf=\"large !== null\">\r\n                    <div class=\"block-products__featured\">\r\n                        <div class=\"block-products__featured-item\">\r\n                            <app-product-card [product]=\"large\"></app-product-card>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-template>\r\n            <ng-template #smallsTemplate>\r\n                <div class=\"books\">\r\n                    <div *ngIf=\"smalls.length > 0\" class=\"block-products__list\">\r\n                        <div *ngFor=\"let product of smalls\" class=\"block-products__list-item\">\r\n                            <app-product-card [product]=\"product\"></app-product-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n\r\n            <ng-container *ngIf=\"layout === 'large-last'\" [ngTemplateOutlet]=\"smallsTemplate\"></ng-container>\r\n            <ng-container [ngTemplateOutlet]=\"largeTemplate\"></ng-container>\r\n            <ng-container *ngIf=\"layout === 'large-first'\" [ngTemplateOutlet]=\"smallsTemplate\"></ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-products / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-slideshow/block-slideshow.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/block-slideshow/block-slideshow.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .block-slideshow -->\r\n<div class=\"block-slideshow block\" [ngClass]=\"{'block-slideshow--layout--full': !withDepartments, 'block-slideshow--layout--with-departments': withDepartments}\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <!-- <div *ngIf=\"withDepartments\" class=\"col-3 d-lg-block d-none\" appDepartmentsArea></div> -->\r\n            <div class=\"col-12\" [ngClass]=\"{'col-lg-12': !withDepartments, 'col-lg-12': withDepartments}\">\r\n                <div class=\"mt-4\">\r\n                    <owl-carousel-o [options]=\"options\" appOwlPreventClick>\r\n                        <ng-container *ngFor=\"let slide of slides\">\r\n                            <ng-template carouselSlide>\r\n                                <a class=\"block-slideshow__slide\" href=\"\" appClick>\r\n                                    <div class=\"block-slideshow__slide-image block-slideshow__slide-image--desktop\" [ngStyle]=\"{'background-image': 'url('+(withDepartments ? slide.image_full : slide.image_classic )+')'}\"></div>\r\n                                    <div class=\"block-slideshow__slide-image block-slideshow__slide-image--mobile\" [ngStyle]=\"{'background-image': 'url('+slide.image_mobile+')'}\"></div>\r\n                                    <!-- <div class=\"block-slideshow__slide-content\">\r\n                                        <div class=\"block-slideshow__slide-title\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(slide.title)\"></div>\r\n                                        <div class=\"block-slideshow__slide-text\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(slide.text)\"></div>\r\n                                        <div class=\"block-slideshow__slide-button\">\r\n                                            <span class=\"btn btn-primary btn-lg\">Shop Now</span>\r\n                                        </div>\r\n                                    </div> -->\r\n                                </a>\r\n                            </ng-template>\r\n                        </ng-container>\r\n                    </owl-carousel-o>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .block-slideshow / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/components/block-header/block-header.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/blocks/components/block-header/block-header.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\r\n    <h3 class=\"block-header__title\">{{ header }}</h3>\r\n    <div class=\"block-header__divider\"></div>\r\n\r\n    <ul *ngIf=\"groups?.length\" class=\"block-header__groups-list\">\r\n        <li *ngFor=\"let group of groups\">\r\n            <button type=\"button\" class=\"block-header__group\" [ngClass]=\"{'block-header__group--active': group.current}\" (click)=\"setGroup(group)\">{{ group.name }}</button>\r\n        </li>\r\n    </ul>\r\n\r\n    <div *ngIf=\"arrows\" class=\"block-header__arrows-list\">\r\n        <button class=\"block-header__arrow block-header__arrow--left\" type=\"button\" (click)=\"prev.emit()\">\r\n            <app-icon name=\"arrow-rounded-left-7x11\" size=\"7x11\"></app-icon>\r\n        </button>\r\n        <button class=\"block-header__arrow block-header__arrow--right\" type=\"button\" (click)=\"next.emit()\">\r\n            <app-icon name=\"arrow-rounded-right-7x11\" size=\"7x11\"></app-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/footer/components/contacts/contacts.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/footer/components/contacts/contacts.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-footer__widget footer-contacts\">\r\n    <h5 class=\"footer-contacts__title\">Contact Us</h5>\r\n\r\n    <div class=\"footer-contacts__text\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. Pellentque ac placerat tellus.\r\n    </div>\r\n\r\n    <ul class=\"footer-contacts__contacts\">\r\n        <li><i class=\"footer-contacts__icon fas fa-globe-americas\"></i> {{ store.address }}</li>\r\n        <li><i class=\"footer-contacts__icon far fa-envelope\"></i> {{ store.email }}</li>\r\n        <li><i class=\"footer-contacts__icon fas fa-mobile-alt\"></i> {{ store.phone.join(', ') }}</li>\r\n        <li><i class=\"footer-contacts__icon far fa-clock\"></i> {{ store.hours }}</li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/footer/components/links/links.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/footer/components/links/links.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-footer__widget footer-links\">\r\n    <h5 class=\"footer-links__title\">{{ header }}</h5>\r\n    <ul class=\"footer-links__list\">\r\n        <li *ngFor=\"let link of links\" class=\"footer-links__item\"><a [routerLink]=\"link.url\" class=\"footer-links__link\">{{ link.label }}</a></li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/footer/components/newsletter/newsletter.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/footer/components/newsletter/newsletter.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-newsletter\">\r\n    <h5 class=\"footer-newsletter__title\">Newsletter</h5>\r\n    <div class=\"footer-newsletter__text\">\r\n        Praesent pellentesque volutpat ex, vitae auctor lorem pulvinar mollis felis at lacinia.\r\n    </div>\r\n\r\n    <form action=\"\" class=\"footer-newsletter__form\">\r\n        <label class=\"sr-only\" for=\"footer-newsletter-address\">Email Address</label>\r\n        <input type=\"text\" class=\"footer-newsletter__form-input form-control\" id=\"footer-newsletter-address\" placeholder=\"Email Address...\">\r\n\r\n        <button class=\"footer-newsletter__form-button btn btn-primary\">Subscribe</button>\r\n    </form>\r\n\r\n    <div class=\"footer-newsletter__text footer-newsletter__text--social\">\r\n        Follow us on social networks\r\n    </div>\r\n\r\n    <ul class=\"footer-newsletter__social-links\">\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--facebook\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--twitter\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></li>\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--youtube\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fab fa-youtube\"></i></a></li>\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--instagram\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></li>\r\n        <li class=\"footer-newsletter__social-link footer-newsletter__social-link--rss\"><a [href]=\"theme.author.profile_url\" target=\"_blank\"><i class=\"fas fa-rss\"></i></a></li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/footer/footer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/footer/footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-footer\">\r\n    <div class=\"container\">\r\n        <div class=\"site-footer__widgets\">\r\n            <div class=\"row\">\r\n                <div class=\"col-12 col-md-6 col-lg-4\">\r\n                    <app-footer-contacts></app-footer-contacts>\r\n                </div>\r\n                <div class=\"col-6 col-md-3 col-lg-2\">\r\n                    <app-footer-links header=\"Information\" [links]=\"[\r\n                        {label: 'About Us',             url: './site/about-us'},\r\n                        {label: 'Delivery Information', url: './site/terms'},\r\n                        {label: 'Privacy Policy',       url: './site/terms'},\r\n                        {label: 'Brands',               url: ''},\r\n                        {label: 'Contact Us',           url: './site/contact-us'},\r\n                        {label: 'Returns',              url: ''},\r\n                        {label: 'Site Map',             url: ''}\r\n                    ]\"></app-footer-links>\r\n                </div>\r\n                <div class=\"col-6 col-md-3 col-lg-2\">\r\n                    <app-footer-links header=\"My Account\" [links]=\"[\r\n                        {label: 'Store Location', url: ''},\r\n                        {label: 'Order History',  url: ''},\r\n                        {label: 'Wish List',      url: './shop/wishlist'},\r\n                        {label: 'Newsletter',     url: ''},\r\n                        {label: 'Specials',       url: ''},\r\n                        {label: 'Gift Cards',     url: ''},\r\n                        {label: 'Affiliate',      url: ''}\r\n                    ]\"></app-footer-links>\r\n                </div>\r\n                <div class=\"col-12 col-md-12 col-lg-4\">\r\n                    <app-footer-newsletter class=\"site-footer__widget\"></app-footer-newsletter>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"site-footer__bottom\">\r\n            <div class=\"site-footer__copyright\">\r\n                Powered by <a href=\"https://angular.io/\" target=\"_blank\">Cloud Next Gen. Ltd.</a>\r\n            </div>\r\n            <div class=\"site-footer__payments\">\r\n                <img src=\"assets/images/payments.png\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/departments/departments.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/header/components/departments/departments.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .departments -->\r\n<div class=\"departments\">\r\n    <div class=\"departments__body\">\r\n        <div class=\"departments__links-wrapper\">\r\n            <div class=\"departments__padding\"></div>\r\n            <ul class=\"departments__links\">\r\n                <li *ngFor=\"let item of items\" class=\"departments__item\" [ngClass]=\"{'departments__item--menu': item.menu && item.menu.type == 'menu'}\">\r\n\r\n                    <ng-template #link>\r\n                        {{ item.label }}\r\n                        <app-icon *ngIf=\"item.menu\" class=\"departments__link-arrow\" name=\"arrow-rounded-right-6x9\" size=\"6x9\"></app-icon>\r\n                    </ng-template>\r\n\r\n                    <a *ngIf=\"!item.external\" [routerLink]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n                    <a *ngIf=\"item.external\" [href]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n\r\n                    <div *ngIf=\"item.menu && item.menu.type == 'megamenu'\" class=\"departments__megamenu departments__megamenu--{{ item.menu.size }}\">\r\n                        <app-header-megamenu [menu]=\"item.menu\" [departments]=\"true\"></app-header-megamenu>\r\n                    </div>\r\n                    <div *ngIf=\"item.menu && item.menu.type == 'menu'\" class=\"departments__menu\">\r\n                        <app-header-menu [items]=\"item.menu.items\"></app-header-menu>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n\r\n    <button class=\"departments__button\" (click)=\"toggle()\">\r\n        <app-icon class=\"departments__button-icon\" name=\"menu-18x14\" size=\"18x14\"></app-icon>\r\n        Shop By Category\r\n        <app-icon class=\"departments__button-arrow\" name=\"arrow-rounded-down-9x6\" size=\"9x6\"></app-icon>\r\n    </button>\r\n</div>\r\n<!-- .departments / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/dropcart/dropcart.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/header/components/dropcart/dropcart.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .dropcart -->\r\n<div class=\"dropcart\">\r\n    <div class=\"dropcart__empty\" *ngIf=\"!(cart.items$|async).length\">\r\n        Your shopping cart is empty!\r\n    </div>\r\n    <ng-container *ngIf=\"(cart.items$|async).length\">\r\n        <div class=\"dropcart__products-list\">\r\n            <div *ngFor=\"let item of cart.items$|async\" class=\"dropcart__product\">\r\n                <div class=\"dropcart__product-image\">\r\n                    <a [routerLink]=\"root.product(item.product.id)\" *ngIf=\"item.product.images?.length\"><img [src]=\"item.product.images[0]\" alt=\"\"></a>\r\n                </div>\r\n                <div class=\"dropcart__product-info\">\r\n                    <div class=\"dropcart__product-name\"><a [routerLink]=\"root.product(item.product.id)\">{{ item.product.name }}</a></div>\r\n\r\n                    <ul *ngIf=\"item.options.length\" class=\"dropcart__product-options\">\r\n                        <li *ngFor=\"let option of item.options\">{{ option.name }}: {{ option.value }}</li>\r\n                    </ul>\r\n                    <div class=\"dropcart__product-meta\">\r\n                        <span class=\"dropcart__product-quantity\">{{ item.quantity }}</span> ×\r\n                        <span class=\"dropcart__product-price\">{{ item.product.price|currencyFormat }}</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <button type=\"button\" class=\"dropcart__product-remove btn btn-light btn-sm btn-svg-icon\" (click)=\"remove(item)\" [ngClass]=\"{'btn-loading': removedItems.includes(item)}\">\r\n                    <app-icon name=\"cross-10\" size=\"10\"></app-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"dropcart__totals\">\r\n            <table>\r\n                <tr *ngIf=\"(cart.totals$|async).length\">\r\n                    <th>Subtotal</th>\r\n                    <td>{{ cart.subtotal$|async|currencyFormat }}</td>\r\n                </tr>\r\n                <tr *ngFor=\"let total of cart.totals$|async\">\r\n                    <th>{{ total.title }}</th>\r\n                    <td>{{ total.price|currencyFormat  }}</td>\r\n                </tr>\r\n                <tr>\r\n                    <th>Total</th>\r\n                    <td>{{ cart.total$|async|currencyFormat }}</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n\r\n        <div class=\"dropcart__buttons\">\r\n            <a class=\"btn btn-secondary\" routerLink=\"./shop/cart\">View Cart</a>\r\n            <a class=\"btn btn-primary\" routerLink=\"./shop/checkout\">Checkout</a>\r\n        </div>\r\n    </ng-container>\r\n</div>\r\n<!-- .dropcart / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/links/links.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/header/components/links/links.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav-links__list\">\r\n    <li *ngFor=\"let item of items\" class=\"nav-links__item\" [ngClass]=\"{'nav-links__item--with-submenu': item.menu}\" (mouseenter)=\"mouseenter($event)\">\r\n\r\n        <ng-template #link>\r\n            <span>\r\n                {{ item.label }}\r\n                <app-icon *ngIf=\"item.menu\" class=\"nav-links__arrow\" name=\"arrow-rounded-down-9x6\" size=\"9x6\"></app-icon>\r\n            </span>\r\n        </ng-template>\r\n\r\n        <a *ngIf=\"!item.external\" [routerLink]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n        <a *ngIf=\"item.external\" [href]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n\r\n        <div *ngIf=\"item.menu && item.menu.type == 'menu'\" class=\"nav-links__menu\">\r\n            <app-header-menu [items]=\"item.menu.items\"></app-header-menu>\r\n        </div>\r\n        <div *ngIf=\"item.menu && item.menu.type == 'megamenu'\" class=\"nav-links__megamenu nav-links__megamenu--size--{{ item.menu.size }}\">\r\n            <app-header-megamenu [menu]=\"item.menu\"></app-header-megamenu>\r\n        </div>\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/megamenu/megamenu.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/header/components/megamenu/megamenu.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .megamenu -->\r\n<div class=\"megamenu\" [ngClass]=\"{'megamenu--departments': departments}\" [style.background-image]=\"menu.image ? 'url('+menu.image+')' : ''\">\r\n    <div class=\"row\">\r\n        <div *ngFor=\"let column of menu.columns\" class=\"col-{{ column.size }}\">\r\n            <ul class=\"megamenu__links megamenu__links--level--0\">\r\n                <li *ngFor=\"let item of column.items\" class=\"megamenu__item\" [ngClass]=\"{'megamenu__item--with-submenu': item.items}\">\r\n\r\n                    <a *ngIf=\"!item.external\" [routerLink]=\"item.url\" [target]=\"item.target\">{{ item.label }}</a>\r\n                    <a *ngIf=\"item.external\" [href]=\"item.url\" [target]=\"item.target\">{{ item.label }}</a>\r\n\r\n                    <ul *ngIf=\"item.items\" class=\"megamenu__links megamenu__links--level--1\">\r\n                        <li *ngFor=\"let subItem of item.items\" class=\"megamenu__item\">\r\n\r\n                            <a *ngIf=\"!subItem.external\" [routerLink]=\"subItem.url\" [target]=\"subItem.target\">{{ subItem.label }}</a>\r\n                            <a *ngIf=\"subItem.external\" [href]=\"subItem.url\" [target]=\"subItem.target\">{{ subItem.label }}</a>\r\n\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .megamenu / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/menu/menu.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/header/components/menu/menu.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .menu -->\r\n<ul class=\"menu\" [ngClass]=\"{'menu--layout--classic': layout === 'classic', 'menu--layout--topbar': layout === 'topbar'}\">\r\n    <li *ngFor=\"let item of items\">\r\n\r\n        <ng-template #link>\r\n            {{ item.label }}\r\n            <app-icon *ngIf=\"item.items\" class=\"menu__arrow\" name=\"arrow-rounded-right-6x9\" size=\"6x9\"></app-icon>\r\n        </ng-template>\r\n\r\n        <a *ngIf=\"!item.external\" [routerLink]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n        <a *ngIf=\"item.external\" [href]=\"item.url\" [target]=\"item.target\"><ng-container [ngTemplateOutlet]=\"link\"></ng-container></a>\r\n\r\n        <div *ngIf=\"item.items\" class=\"menu__submenu\">\r\n            <app-header-menu [items]=\"item.items\"></app-header-menu>\r\n        </div>\r\n    </li>\r\n</ul>\r\n<!-- .menu / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/nav/nav.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/header/components/nav/nav.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-panel\">\r\n    <div class=\"nav-panel__container container\">\r\n        <div class=\"nav-panel__row\">\r\n            <div *ngIf=\"logo\" class=\"nav-panel__logo\">\r\n                <a [routerLink]=\"root.url('/home')\">\r\n                    <img src=\"assets/images/logo.png\" alt=\"\">\r\n                </a>\r\n            </div>\r\n\r\n            <!-- <div *ngIf=\"departments\" class=\"nav-panel__departments\">\r\n                <app-header-departments></app-header-departments>\r\n            </div> -->\r\n\r\n            <!-- .nav-links -->\r\n            <app-header-links class=\"nav-panel__nav-links nav-links\"></app-header-links>\r\n            <!-- .nav-links / end -->\r\n\r\n            <div class=\"nav-panel__indicators\">\r\n                <div *ngIf=\"search\" class=\"indicator indicator--trigger--click\" appDropdown=\"indicator--opened\" #search=\"appDropdown\">\r\n                    <button type=\"button\" class=\"indicator__button\" (click)=\"$event.preventDefault(); search.toggle(); search.isOpen ? searchField.focus() : '';\">\r\n                        <span class=\"indicator__area\">\r\n                            <app-icon class=\"indicator__icon\" name=\"search-20\" size=\"20\"></app-icon>\r\n                            <app-icon class=\"indicator__icon indicator__icon--open\" name=\"cross-20\" size=\"20\"></app-icon>\r\n                        </span>\r\n                    </button>\r\n\r\n                    <div class=\"indicator__dropdown\">\r\n                        <div class=\"drop-search\">\r\n                            <form action=\"\" class=\"drop-search__form\">\r\n                                <input class=\"drop-search__input\" name=\"search\" (keydown.escape)=\"search.close()\" placeholder=\"Search over 10,000 products\" aria-label=\"Site search\" type=\"text\" autocomplete=\"off\" #searchField>\r\n                                <button class=\"drop-search__button drop-search__button--submit\" type=\"submit\">\r\n                                    <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n                                </button>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"indicator\">\r\n                    <a [routerLink]=\"root.url('/shop/compare')\" class=\"indicator__button\">\r\n                        <span class=\"indicator__area\">\r\n                            <app-icon name=\"compare-16\" size=\"20\"></app-icon>\r\n                            <!-- <span class=\"indicator__value\">{{ compare.count$|async }}</span> -->\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"indicator\">\r\n                    <a [routerLink]=\"root.url('/shop/wishlist')\" class=\"indicator__button\">\r\n                        <span class=\"indicator__area\">\r\n                            <app-icon name=\"heart-20\" size=\"20\"></app-icon>\r\n                            <span class=\"indicator__value\">{{ wishlist.count$|async }}</span>\r\n                        </span>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"indicator indicator--trigger--click\" appDropdown=\"indicator--opened\" #cartDropdown=\"appDropdown\">\r\n                    <a [href]=\"root.url('/shop/cart')\" class=\"indicator__button\" (click)=\"$event.preventDefault(); cartDropdown.toggle()\">\r\n                        <span class=\"indicator__area\">\r\n                            <app-icon name=\"cart-20\" size=\"20\"></app-icon>\r\n                            <span class=\"indicator__value\">{{ cart.quantity$|async }}</span>\r\n                        </span>\r\n                    </a>\r\n\r\n                    <div class=\"indicator__dropdown\">\r\n                        <app-header-dropcart></app-header-dropcart>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/search/search.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/header/components/search/search.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\r\n    <form class=\"search__form\" action=\"\">\r\n        <input class=\"search__input\" name=\"search\" placeholder=\"Search over 10,000 books\" aria-label=\"Site search\" type=\"text\" autocomplete=\"off\">\r\n        <button class=\"search__button\" type=\"submit\">\r\n            <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n        </button>\r\n        <div class=\"search__border\"></div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/topbar/topbar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/header/components/topbar/topbar.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- .topbar -->\r\n<div class=\"site-header__topbar topbar\">\r\n    <div class=\"topbar__container container\">\r\n        <div class=\"topbar__row\">\r\n            <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"./site/about-us\">About Us</a>\r\n            </div>\r\n            <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"./site/contact-us\">Contacts</a>\r\n            </div>\r\n            <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"\">Institutional Order</a>\r\n            </div>\r\n            <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"./shop/track-order\">Track Order</a>\r\n            </div>\r\n            <div class=\"topbar__item topbar__item--link\">\r\n                <a class=\"topbar-link\" routerLink=\"./blog\">Blog</a>\r\n            </div>\r\n            <div class=\"topbar__spring\"></div>\r\n            <div class=\"topbar__item\">\r\n                <div class=\"topbar-dropdown\" appDropdown=\"topbar-dropdown--opened\" #accountDropdown=\"appDropdown\">\r\n                    <button class=\"topbar-dropdown__btn\" type=\"button\" (click)=\"accountDropdown.toggle()\">\r\n                        My Account\r\n                        <app-icon name=\"arrow-rounded-down-7x5\" size=\"7x5\"></app-icon>\r\n                    </button>\r\n\r\n                    <div class=\"topbar-dropdown__body\">\r\n                        <app-header-menu layout=\"topbar\" [items]=\"[\r\n                            {label: 'Dashboard',     url: './account/dashboard'},\r\n                            {label: 'Edit Profile',  url: './account/profile'},\r\n                            {label: 'Order History', url: './account/orders'},\r\n                            {label: 'Addresses',     url: './account/addresses'},\r\n                            {label: 'Password',      url: './account/password'},\r\n                            {label: 'Logout',        url: './account/login'}\r\n                        ]\"></app-header-menu>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"topbar__item\">\r\n                <div class=\"topbar-dropdown\" appDropdown=\"topbar-dropdown--opened\" #currencyDropdown=\"appDropdown\">\r\n                    <button class=\"topbar-dropdown__btn\" type=\"button\" (click)=\"currencyDropdown.toggle()\">\r\n                        Currency: <span class=\"topbar__item-value\">{{ currencyService.options.code }}</span>\r\n                        <app-icon name=\"arrow-rounded-down-7x5\" size=\"7x5\"></app-icon>\r\n                    </button>\r\n\r\n                    <div class=\"topbar-dropdown__body\">\r\n                        <ul class=\"menu menu--layout--topbar\">\r\n                            <li *ngFor=\"let currency of currencies\">\r\n                                <button type=\"button\" (click)=\"setCurrency(currency); currencyDropdown.close();\">\r\n                                    {{ currency.name }}\r\n                                </button>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"topbar__item\">\r\n                <div class=\"topbar-dropdown\" appDropdown=\"topbar-dropdown--opened\" #languageDropdown=\"appDropdown\">\r\n                    <button class=\"topbar-dropdown__btn\" type=\"button\" (click)=\"languageDropdown.toggle()\">\r\n                        Language: <span class=\"topbar__item-value\">EN</span>\r\n                        <app-icon name=\"arrow-rounded-down-7x5\" size=\"7x5\"></app-icon>\r\n                    </button>\r\n\r\n                    <div class=\"topbar-dropdown__body\">\r\n                        <ul class=\"menu menu--layout--topbar menu--with-icons\">\r\n                            <li *ngFor=\"let language of languages\">\r\n                                <button type=\"button\">\r\n                                    <span class=\"menu__icon\">\r\n                                        <img [src]=\"'assets/images/languages/'+language.image+'.png'\"\r\n                                             [srcset]=\"'assets/images/languages/'+language.image+'.png 1x,' +\r\n                                                       'assets/images/languages/'+language.image+'@2x.png 2x'\" alt=\"\">\r\n                                    </span>\r\n                                    {{ language.name }}\r\n                                </button>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- .topbar / end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/header/header.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/header/header.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-header\">\r\n    <app-header-topbar></app-header-topbar>\r\n\r\n    <div *ngIf=\"layout === 'classic'\" class=\"site-header__middle container\">\r\n        <div class=\"site-header__logo\">\r\n            <a routerLink=\"./\">\r\n                <img src=\"assets/images/logo.png\" alt=\"\">\r\n                <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"196px\" height=\"26px\">\r\n                    <path d=\"M194.797,18 L184,18 C184,18.552 183.552,19 183,19 L182,19 C181.448,19 181,18.552 181,18 L181,16 L178.377,16 C177.708,16 177.119,15.556 176.935,14.912 L173.246,2 L168,2 L168,4 L168.500,4 C169.328,4 170,4.672 170,5.500 L170,24.500 C170,25.328 169.328,26 168.500,26 L165.500,26 C164.672,26 164,25.328 164,24.500 L164,5.500 C164,4.672 164.672,4 165.500,4 L166,4 L166,1.500 C166,0.672 166.672,0 167.500,0 L173.622,0 C174.292,0 174.881,0.444 175.065,1.088 L178.754,14 L181,14 L181,13 C181,12.448 181.448,12 182,12 L183,12 C183.552,12 184,12.448 184,13 L194.797,13 C195.461,13 196,13.539 196,14.203 L196,16.797 C196,17.461 195.461,18 194.797,18 ZM156.783,26 L154.483,26 C153.767,26 153.129,25.552 152.884,24.878 L150.437,18.135 C150.407,18.054 150.331,18 150.245,18 L142.768,18 C142.682,18 142.606,18.054 142.576,18.135 L140.129,24.878 C139.884,25.552 139.245,26 138.530,26 L136.230,26 C135.395,26 134.815,25.169 135.100,24.383 L143.445,1.122 C143.690,0.448 144.328,0 145.044,0 L147.969,0 C148.685,0 149.323,0.448 149.568,1.122 L157.913,24.383 C158.198,25.169 157.618,26 156.783,26 ZM148.472,12.725 L146.698,7.848 C146.633,7.668 146.380,7.668 146.315,7.848 L144.541,12.725 C144.492,12.859 144.591,13 144.733,13 L148.280,13 C148.422,13 148.521,12.859 148.472,12.725 ZM130.493,26 L128.090,26 C127.555,26 127.060,25.714 126.792,25.250 L122.610,18 L120.003,22.520 L120.003,24.500 C120.003,25.328 119.333,26 118.505,26 L116.507,26 C115.680,26 115.009,25.328 115.009,24.500 L115.009,1.500 C115.009,0.672 115.680,0 116.507,0 L118.505,0 C119.333,0 120.003,0.672 120.003,1.500 L120.003,12.520 L126.792,0.750 C127.060,0.286 127.555,0 128.090,0 L130.493,0 C131.646,0 132.367,1.250 131.791,2.250 L125.487,13 L131.791,23.750 C132.367,24.750 131.646,26 130.493,26 ZM103.987,15.775 L103.987,24.500 C103.987,25.328 103.315,26 102.486,26 L100.485,26 C99.656,26 98.984,25.328 98.984,24.500 L98.984,15.775 L98.594,15.100 L91.180,2.250 C90.610,1.250 91.330,0 92.481,0 L94.792,0 C95.322,0 95.823,0.290 96.093,0.750 L101.486,10.090 L106.879,0.750 C107.149,0.290 107.649,0 108.179,0 L110.491,0 C111.641,0 112.362,1.250 111.791,2.250 L103.987,15.775 ZM79,26 C71.821,26 66,20.179 66,13 C66,5.820 71.821,-0.001 79,-0.001 C86.180,-0.001 92.001,5.820 92.001,13 C92.001,20.179 86.180,26 79,26 ZM79,5 C74.582,5 71,8.582 71,13 C71,17.418 74.582,21 79,21 C83.418,21 87,17.418 87,13 C87,8.582 83.418,5 79,5 ZM62.793,23.750 C63.362,24.750 62.643,26 61.494,26 L59.186,26 C58.656,26 58.157,25.710 57.887,25.250 L53.711,18 L49.005,18 L49.005,24.500 C49.005,25.330 48.335,26 47.506,26 L45.508,26 C44.679,26 44.009,25.330 44.009,24.500 L44.009,1.500 C44.009,0.670 44.679,0 45.508,0 L54,0 C58.966,0 62.992,4.030 62.992,9 C62.992,12.240 61.274,15.090 58.706,16.670 L62.793,23.750 ZM54,5 L50.004,5 C49.454,5 49.005,5.450 49.005,6 L49.005,12 C49.005,12.550 49.454,13 50.004,13 L54,13 C56.208,13 57.997,11.210 57.997,9 C57.997,6.790 56.208,5 54,5 ZM39.500,5 L33,5 L33,24.500 C33,25.328 32.328,26 31.500,26 L29.500,26 C28.672,26 28,25.328 28,24.500 L28,5 L21.500,5 C20.672,5 20,4.328 20,3.500 L20,1.500 C20,0.672 20.672,0 21.500,0 L39.500,0 C40.328,0 41,0.672 41,1.500 L41,3.500 C41,4.328 40.328,5 39.500,5 ZM16.487,8 L14.181,8 C13.565,8 13.040,7.611 12.790,7.048 C12.261,5.856 10.765,5 9,5 C6.793,5 5.005,6.340 5.005,8 C5.005,8.940 5.575,9.780 6.483,10.320 C6.706,10.455 6.948,10.574 7.206,10.673 C8.059,11 8.412,12.020 7.955,12.812 L6.948,14.558 C6.573,15.208 5.768,15.499 5.080,15.201 C3.872,14.679 2.815,13.924 1.989,13 C0.751,11.630 0.012,9.890 0.012,8 C0.012,3.580 4.037,0 9,0 C13.254,0 17.017,2.629 17.950,6.163 C18.196,7.095 17.450,8 16.487,8 ZM1.513,18 L3.820,18 C4.435,18 4.960,18.389 5.210,18.952 C5.739,20.144 7.236,21 9,21 C11.207,21 12.995,19.660 12.995,18 C12.995,17.060 12.426,16.220 11.517,15.680 C11.294,15.544 11.052,15.426 10.794,15.327 C9.941,14.999 9.588,13.980 10.045,13.188 L11.053,11.442 C11.427,10.792 12.233,10.501 12.920,10.799 C14.128,11.320 15.185,12.075 16.011,13 C17.249,14.370 17.988,16.110 17.988,18 C17.988,22.420 13.964,26 9,26 C4.747,26 0.983,23.371 0.050,19.837 C-0.196,18.905 0.550,18 1.513,18 Z\"></path>\r\n                </svg> -->\r\n            </a>\r\n        </div>\r\n        <div class=\"site-header__search\">\r\n            <app-header-search></app-header-search>\r\n        </div>\r\n        <div class=\"site-header__phone\">\r\n            <div class=\"site-header__phone-title\">Customer Service</div>\r\n            <div class=\"site-header__phone-number\">{{ store.primaryPhone }}</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"site-header__nav-panel\">\r\n        <app-header-nav [departments]=\"layout === 'classic'\" [logo]=\"layout === 'compact'\" [search]=\"layout === 'compact'\"></app-header-nav>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/mobile/components/mobile-header/mobile-header.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/mobile/components/mobile-header/mobile-header.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile-header\">\r\n    <div class=\"mobile-header__panel\">\r\n        <div class=\"container\">\r\n            <div class=\"mobile-header__body\">\r\n                <button class=\"mobile-header__menu-button\" (click)=\"menu.open()\">\r\n                    <app-icon name=\"menu-18x14\" size=\"18x14\"></app-icon>\r\n                </button>\r\n                <a class=\"mobile-header__logo\" routerLink=\"./home\">\r\n                    <img src=\"assets/images/logo.png\" alt=\"\">\r\n                </a>\r\n                <div class=\"mobile-header__search\" appDropdown=\"mobile-header__search--opened\" #search=\"appDropdown\">\r\n                    <form class=\"mobile-header__search-form\" action=\"\">\r\n                        <input class=\"mobile-header__search-input\" name=\"search\" placeholder=\"Search over 10,000 products\" aria-label=\"Site search\" type=\"text\" autocomplete=\"off\" (keydown.escape)=\"search.close()\" #searchInput>\r\n                        <button class=\"mobile-header__search-button mobile-header__search-button--submit\" type=\"submit\">\r\n                            <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n                        </button>\r\n                        <button class=\"mobile-header__search-button mobile-header__search-button--close\" type=\"button\" (click)=\"search.close()\">\r\n                            <app-icon name=\"cross-20\" size=\"20\"></app-icon>\r\n                        </button>\r\n                        <div class=\"mobile-header__search-body\"></div>\r\n                    </form>\r\n                </div>\r\n\r\n                <div class=\"mobile-header__indicators\">\r\n                    <div class=\"indicator indicator--mobile-search indicator--mobile d-sm-none\">\r\n                        <button class=\"indicator__button\" (click)=\"search.open(); searchInput.focus()\">\r\n                            <span class=\"indicator__area\">\r\n                                <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n                            </span>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"indicator indicator--mobile d-sm-flex d-none\">\r\n                        <a routerLink=\"./shop/wishlist\" class=\"indicator__button\">\r\n                            <span class=\"indicator__area\">\r\n                                <app-icon name=\"heart-20\" size=\"20\"></app-icon>\r\n                                <span class=\"indicator__value\">{{ wishlist.count$|async }}</span>\r\n                            </span>\r\n                        </a>\r\n                    </div>\r\n\r\n                    <div class=\"indicator indicator--mobile\">\r\n                        <a routerLink=\"./shop/cart\" class=\"indicator__button\">\r\n                            <span class=\"indicator__area\">\r\n                                <app-icon name=\"cart-20\" size=\"20\"></app-icon>\r\n                                <span class=\"indicator__value\">{{ cart.quantity$|async }}</span>\r\n                            </span>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/mobile/components/mobile-links/mobile-links.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/mobile/components/mobile-links/mobile-links.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"mobile-links mobile-links--level--{{ level }}\" appCollapse>\r\n    <li *ngFor=\"let link of links\">\r\n        <div *ngIf=\"['link', 'button'].includes(link.type)\" class=\"mobile-links__item\" appCollapseItem=\"mobile-links__item--open\" #item=\"appCollapseItem\">\r\n            <div class=\"mobile-links__item-title\">\r\n                <a *ngIf=\"link.type === 'link'\" class=\"mobile-links__item-link\" (click)=\"onItemClick(link)\" [routerLink]=\"link.url\">{{ link.label }}</a>\r\n                <a *ngIf=\"link.type !== 'link'\" class=\"mobile-links__item-link\" (click)=\"onItemClick(link)\">{{ link.label }}</a>\r\n                <button *ngIf=\"link.children?.length\" class=\"mobile-links__item-toggle\" type=\"button\" (click)=\"item.toggle()\">\r\n                    <app-icon class=\"mobile-links__item-arrow\" name=\"arrow-rounded-down-12x7\" size=\"12x7\"></app-icon>\r\n                </button>\r\n            </div>\r\n            <div *ngIf=\"link.children?.length\" class=\"mobile-links__item-sub-links\" appCollapseContent>\r\n                <app-mobile-links [links]=\"link.children\" [level]=\"level + 1\" (itemClick)=\"itemClick.emit($event)\"></app-mobile-links>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"link.type === 'divider'\" class=\"mobile-links__divider\"></div>\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mobilemenu\" [ngClass]=\"{'mobilemenu--open': isOpen}\">\r\n    <div class=\"mobilemenu__backdrop\" (click)=\"mobilemenu.close()\"></div>\r\n    <div class=\"mobilemenu__body\">\r\n        <div class=\"mobilemenu__header\">\r\n            <div class=\"mobilemenu__title\">Menu</div>\r\n            <button type=\"button\" class=\"mobilemenu__close\" (click)=\"mobilemenu.close()\">\r\n                <app-icon name=\"cross-20\" size=\"20\"></app-icon>\r\n            </button>\r\n        </div>\r\n        <div class=\"mobilemenu__content\">\r\n            <app-mobile-links [links]=\"links\" (itemClick)=\"onItemClick($event)\"></app-mobile-links>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-aboutus widget\">\r\n    <h4 class=\"widget__title\">About Blog</h4>\r\n    <div class=\"widget-aboutus__text\">\r\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, erat in malesuada aliquam, est erat faucibus purus,\r\n        eget viverra nulla sem vitae neque. Quisque id sodales libero.\r\n    </div>\r\n    <div class=\"widget-aboutus__socials\">\r\n        <ul>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--rss\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-social__icon fas fa-rss\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--youtube\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-aboutus__icon fab fa-youtube\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--facebook\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-aboutus__icon fab fa-facebook-f\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--twitter\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-aboutus__icon fab fa-twitter\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"widget-aboutus__link widget-aboutus__link--instagram\" [href]=\"theme.author.profile_url\" target=\"_blank\">\r\n                    <i class=\"widget-aboutus__icon fab fa-instagram\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-categories/widget-categories.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/widgets/widget-categories/widget-categories.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-categories widget-categories--location--{{ location }} widget\">\r\n    <h4 class=\"widget__title\">Categories</h4>\r\n    <ul class=\"widget-categories__list\" appCollapse>\r\n        <li *ngFor=\"let category of categories\" class=\"widget-categories__item\" appCollapseItem=\"widget-categories__item--open\" #collapse=\"appCollapseItem\">\r\n            <div class=\"widget-categories__row\">\r\n                <a [routerLink]=\"category.url\">\r\n                    <app-icon class=\"widget-categories__arrow\" name=\"arrow-rounded-right-6x9\" size=\"6x9\"></app-icon>\r\n                    {{ category.name }}\r\n                </a>\r\n                <button *ngIf=\"category.children?.length\" class=\"widget-categories__expander\" type=\"button\" (click)=\"collapse.toggle()\"></button>\r\n            </div>\r\n            <div *ngIf=\"category.children?.length\" class=\"widget-categories__subs\" appCollapseContent>\r\n                <ul>\r\n                    <li *ngFor=\"let sub of category.children\"><a [routerLink]=\"sub.url\">{{ sub.name }}</a></li>\r\n                </ul>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-comments/widget-comments.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/widgets/widget-comments/widget-comments.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-comments widget\">\r\n    <h4 class=\"widget__title\">Latest Comments</h4>\r\n    <ul class=\"widget-comments__list\">\r\n        <li *ngFor=\"let comment of comments\" class=\"widget-comments__item\">\r\n            <div class=\"widget-comments__author\"><a routerLink=\"./\">{{ comment.author }}</a></div>\r\n            <div class=\"widget-comments__content\">{{ comment.text }}</div>\r\n            <div class=\"widget-comments__meta\">\r\n                <div class=\"widget-comments__date\">{{ comment.date }}</div>\r\n                <div class=\"widget-comments__name\">On <a routerLink=\"./\" title=\"{{ comment.postTitle }}\">{{ comment.postTitle }}</a></div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-filters/widget-filters.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/widgets/widget-filters/widget-filters.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-filters widget\" [ngClass]=\"{\r\n    'widget-filters--offcanvas--always': offcanvas === 'always',\r\n    'widget-filters--offcanvas--mobile': offcanvas === 'mobile'\r\n}\" appCollapse>\r\n    <h4 class=\"widget-filters__title widget__title\">Filters</h4>\r\n\r\n    <div class=\"widget-filters__list\">\r\n        <div *ngFor=\"let filter of filters\" class=\"widget-filters__item\">\r\n\r\n            <div class=\"filter filter--opened\" appCollapseItem=\"filter--opened\" #collapse=\"appCollapseItem\">\r\n                <button type=\"button\" class=\"filter__title\" (click)=\"collapse.toggle()\">\r\n                    {{ filter.name }}\r\n                    <app-icon class=\"filter__arrow\" name=\"arrow-rounded-down-12x7\" size=\"12x7\"></app-icon>\r\n                </button>\r\n                <div class=\"filter__body\" appCollapseContent>\r\n                    <div class=\"filter__container\">\r\n\r\n                        <div *ngIf=\"filter.type === 'categories'\" class=\"filter-categories\">\r\n                            <ul class=\"filter-categories__list\">\r\n                                <li *ngFor=\"let item of filter.options.items\" class=\"filter-categories__item filter-categories__item--{{ item.type }}\">\r\n                                    <app-icon *ngIf=\"item.type == 'parent'\" class=\"filter-categories__arrow\"  name=\"arrow-rounded-left-6x9\" size=\"6x9\"></app-icon>\r\n                                    <a routerLink=\"./\">{{ item.name }}</a>\r\n                                    <div class=\"filter-categories__counter\">{{ item.count }}</div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"['checkbox', 'radio'].includes(filter.type)\" class=\"filter-list\">\r\n                            <div class=\"filter-list__list\">\r\n                                <label *ngFor=\"let item of filter.options.items\" class=\"filter-list__item\" [ngClass]=\"{'filter-list__item--disabled': item.disabled}\">\r\n\r\n                                    <span *ngIf=\"filter.type === 'checkbox'\" class=\"filter-list__input input-check\">\r\n                                        <span class=\"input-check__body\">\r\n                                            <input class=\"input-check__input\" type=\"checkbox\" [checked]=\"item.checked\" [disabled]=\"item.disabled\">\r\n                                            <span class=\"input-check__box\"></span>\r\n                                            <app-icon class=\"input-check__icon\" name=\"check-9x7\" size=\"9x7\"></app-icon>\r\n                                        </span>\r\n                                    </span>\r\n\r\n                                    <span *ngIf=\"filter.type === 'radio'\" class=\"filter-list__input input-radio\">\r\n                                        <span class=\"input-radio__body\">\r\n                                            <input class=\"input-radio__input\" [name]=\"filter.options.name\" type=\"radio\" [checked]=\"item.checked\" [disabled]=\"item.disabled\">\r\n                                            <span class=\"input-radio__circle\"></span>\r\n                                        </span>\r\n                                    </span>\r\n\r\n                                    <span class=\"filter-list__title\">{{ item.label }}</span>\r\n                                    <span *ngIf=\"item.count\" class=\"filter-list__counter\">{{ item.count }}</span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"filter.type === 'color'\" class=\"filter-color\">\r\n                            <div class=\"filter-color__list\">\r\n                                <label *ngFor=\"let item of filter.options.items\" class=\"filter-color__item\">\r\n                                    <span class=\"filter-color__check input-check-color\" [ngClass]=\"{\r\n                                        'input-check-color--white': item.white,\r\n                                        'input-check-color--light': item.light\r\n                                    }\" [style.color]=\"item.color\">\r\n                                        <label class=\"input-check-color__body\">\r\n                                            <input class=\"input-check-color__input\" type=\"checkbox\" [checked]=\"item.checked\" [disabled]=\"item.disabled\">\r\n                                            <span class=\"input-check-color__box\"></span>\r\n                                            <app-icon class=\"input-check-color__icon\" name=\"check-12x9\" size=\"12x9\"></app-icon>\r\n                                            <span class=\"input-check-color__stick\"></span>\r\n                                        </label>\r\n                                    </span>\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"filter.type === 'price' && isPlatformBrowser\" class=\"filter-price\">\r\n                            <div class=\"filter-price__slider\">\r\n                                <div class=\"ng5-slider-custom\">\r\n                                    <ng5-slider [value]=\"filter.options.from\" [highValue]=\"filter.options.to\" [options]=\"{animate: false, mouseEventsInterval: 10, rightToLeft: rightToLeft, floor: filter.options.min, ceil: filter.options.max, step: 1}\" #slider></ng5-slider>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"filter-price__title\">\r\n                                Price:\r\n                                <span class=\"filter-price__min-value\">{{ (rightToLeft ? slider.highValue : slider.value)|currencyFormat }}</span> –\r\n                                <span class=\"filter-price__max-value\">{{ (rightToLeft ? slider.value : slider.highValue)|currencyFormat }}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"widget-filters__actions d-flex\">\r\n        <button class=\"btn btn-primary btn-sm\">Filter</button>\r\n        <button class=\"btn btn-secondary btn-sm ml-2\">Reset</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-newsletter widget\">\r\n    <h4 class=\"widget-newsletter__title\">Our Newsletter</h4>\r\n    <div class=\"widget-newsletter__text\">\r\n        Phasellus eleifend sapien felis, at sollicitudin arcu semper mattis. Mauris quis mi quis ipsum tristique lobortis. Nulla vitae est blandit rutrum.\r\n    </div>\r\n    <form class=\"widget-newsletter__form\" action=\"\">\r\n        <label for=\"widget-newsletter-email\" class=\"sr-only\">Email Address</label>\r\n        <input id=\"widget-newsletter-email\" type=\"text\" class=\"form-control\" placeholder=\"Email Address\">\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary mt-3\">Subscribe</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-posts/widget-posts.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/widgets/widget-posts/widget-posts.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-posts widget\">\r\n    <h4 class=\"widget__title\">Latest Posts</h4>\r\n    <div class=\"widget-posts__list\">\r\n        <div *ngFor=\"let post of posts\" class=\"widget-posts__item\">\r\n            <div class=\"widget-posts__image\">\r\n                <a [routerLink]=\"root.post()\">\r\n                    <img [src]=\"postImage(post)\" alt=\"\">\r\n                </a>\r\n            </div>\r\n            <div class=\"widget-posts__info\">\r\n                <div class=\"widget-posts__name\">\r\n                    <a [routerLink]=\"root.post()\">{{ post.title }}</a>\r\n                </div>\r\n                <div class=\"widget-posts__date\">{{ post.date }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-products/widget-products.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/widgets/widget-products/widget-products.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-products widget\">\r\n    <h4 class=\"widget__title\">{{ header }}</h4>\r\n    <div class=\"widget-products__list\">\r\n        <div *ngFor=\"let product of products|slice:0:5\" class=\"widget-products__item\">\r\n            <div class=\"widget-products__image\">\r\n                <a [routerLink]=\"root.product(product.id)\" *ngIf=\"product.images?.length\"><img [src]=\"product.images[0]\" alt=\"\"></a>\r\n            </div>\r\n            <div class=\"widget-products__info\">\r\n                <div class=\"widget-products__name\">\r\n                    <a [routerLink]=\"root.product(product.id)\">{{ product.name }}</a>\r\n                </div>\r\n                <div class=\"widget-products__prices\">\r\n                    <ng-container *ngIf=\"product.compareAtPrice\">\r\n                        <span class=\"widget-products__new-price\">{{ product.price|currencyFormat }}</span>{{ ' ' }}\r\n                        <span class=\"widget-products__old-price\">{{ product.compareAtPrice|currencyFormat }}</span>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!product.compareAtPrice\">\r\n                        {{ product.price|currencyFormat }}\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-search/widget-search.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/widgets/widget-search/widget-search.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-search\">\r\n    <form class=\"widget-search__body\">\r\n        <input class=\"widget-search__input\" placeholder=\"Blog search...\" type=\"text\" autocomplete=\"off\" spellcheck=\"false\">\r\n        <button class=\"widget-search__button\" type=\"submit\">\r\n            <app-icon name=\"search-20\" size=\"20\"></app-icon>\r\n        </button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-tags/widget-tags.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/widgets/widget-tags/widget-tags.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-tags widget\">\r\n    <h4 class=\"widget__title\">Tags Cloud</h4>\r\n    <div class=\"tags tags--lg\">\r\n        <div class=\"tags__list\">\r\n            <a routerLink=\"./\">Promotion</a>\r\n            <a routerLink=\"./\">Power Tool</a>\r\n            <a routerLink=\"./\">New Arrivals</a>\r\n            <a routerLink=\"./\">Screwdriver</a>\r\n            <a routerLink=\"./\">Wrench</a>\r\n            <a routerLink=\"./\">Mounts</a>\r\n            <a routerLink=\"./\">Electrodes</a>\r\n            <a routerLink=\"./\">Chainsaws</a>\r\n            <a routerLink=\"./\">Manometers</a>\r\n            <a routerLink=\"./\">Nails</a>\r\n            <a routerLink=\"./\">Air Guns</a>\r\n            <a routerLink=\"./\">Cutting Discs</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/page-home-one/page-home-one.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/page-home-one/page-home-one.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-block-slideshow [withDepartments]=\"true\"></app-block-slideshow>\r\n\r\n<app-block-features></app-block-features>\r\n\r\n<app-block-products-carousel header=\"Featured Books\" layout=\"grid-4\"\r\n                             [loading]=\"featuredProducts.loading\"\r\n                             [products]=\"featuredProducts.products\"\r\n                             [groups]=\"featuredProducts.groups\"\r\n                             (groupChange)=\"featuredProducts.groupChange($event)\"></app-block-products-carousel>\r\n\r\n<!-- <app-block-banner></app-block-banner> -->\r\n\r\n<app-block-products header=\"Bestseller Books\" layout=\"large-first\" [products]=\"products\"></app-block-products>\r\n\r\n<!-- <app-block-categories header=\"Popular Books Categories\" layout=\"classic\" [categories]=\"categories\"></app-block-categories> -->\r\n\r\n<!-- <app-block-products-carousel header=\"New Arrivals\" layout=\"horizontal\" [rows]=\"2\"\r\n                             [loading]=\"newArrivals.loading\"\r\n                             [products]=\"newArrivals.products\"\r\n                             [groups]=\"newArrivals.groups\"\r\n                             (groupChange)=\"newArrivals.groupChange($event)\"></app-block-products-carousel> -->\r\n\r\n<!-- <app-block-posts header=\"Latest News\" layout=\"list-sm\" [posts]=\"posts\"></app-block-posts>\r\n\r\n<app-block-brands [brands]=\"brands\"></app-block-brands> -->\r\n\r\n<app-block-product-columns [columns]=\"columns\"></app-block-product-columns>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/page-home-two/page-home-two.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/page-home-two/page-home-two.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-block-slideshow></app-block-slideshow>\r\n\r\n<app-block-features layout=\"boxed\"></app-block-features>\r\n\r\n<app-block-products-carousel header=\"Featured Products\" layout=\"grid-5\" [rows]=\"2\"\r\n                             [loading]=\"featuredProducts.loading\"\r\n                             [products]=\"featuredProducts.products\"\r\n                             [groups]=\"featuredProducts.groups\"\r\n                             (groupChange)=\"featuredProducts.groupChange($event)\"></app-block-products-carousel>\r\n\r\n<app-block-banner></app-block-banner>\r\n\r\n<app-block-products header=\"Bestsellers\" layout=\"large-last\" [products]=\"products\"></app-block-products>\r\n\r\n<app-block-categories header=\"Popular Categories\" layout=\"compact\" [categories]=\"categories\"></app-block-categories>\r\n\r\n<app-block-products-carousel header=\"New Arrivals\" layout=\"grid-5\" [rows]=\"1\"\r\n                             [loading]=\"newArrivals.loading\"\r\n                             [products]=\"newArrivals.products\"\r\n                             [groups]=\"newArrivals.groups\"\r\n                             (groupChange)=\"newArrivals.groupChange($event)\"></app-block-products-carousel>\r\n\r\n<app-block-posts header=\"Latest News\" layout=\"grid-nl\" [posts]=\"posts\"></app-block-posts>\r\n\r\n<app-block-brands [brands]=\"brands\"></app-block-brands>\r\n\r\n<app-block-product-columns [columns]=\"columns\"></app-block-product-columns>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/page-not-found/page-not-found.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block\">\r\n    <div class=\"container\">\r\n        <div class=\"not-found\">\r\n            <div class=\"not-found__404\">\r\n                Oops! Error 404\r\n            </div>\r\n\r\n            <div class=\"not-found__content\">\r\n                <h1 class=\"not-found__title\">Page Not Found</h1>\r\n\r\n                <p class=\"not-found__text\">\r\n                    We can't seem to find the page you're looking for.<br>\r\n                    Try to use the search.\r\n                </p>\r\n\r\n                <form class=\"not-found__search\">\r\n                    <input type=\"text\" class=\"not-found__search-input form-control\" placeholder=\"Search Query...\">\r\n                    <button type=\"submit\" class=\"not-found__search-button btn btn-primary\">Search</button>\r\n                </form>\r\n\r\n                <p class=\"not-found__text\">\r\n                    Or go to the home page to start over.\r\n                </p>\r\n\r\n                <a class=\"btn btn-secondary btn-sm\" href=\"index.html\">Go To Home Page</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/alert/alert.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/alert/alert.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n<button *ngIf=\"dismissible\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"onClose()\">\r\n    <app-icon name=\"cross-12\" size=\"12\"></app-icon>\r\n</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/icon/icon.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/icon/icon.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg [attr.width]=\"width\" [attr.height]=\"height\"><use [attr.xlink:href]=\"'assets/images/sprite.svg#' + id\"></use></svg>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/input-number/input-number.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/input-number/input-number.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input class=\"form-control input-number__input\" type=\"number\"\r\n       [ngClass]=\"{'form-control-sm': size === 'sm', 'form-control-lg': size === 'lg'}\"\r\n       [min]=\"options.min\"\r\n       [max]=\"options.max\"\r\n       [value]=\"value\"\r\n       [disabled]=\"options.disabled\"\r\n       [readOnly]=\"options.readonly\"\r\n       (input)=\"input()\"\r\n       (blur)=\"onTouched()\" #inputElement>\r\n\r\n<div class=\"input-number__add\" (mousedown)=\"add()\"></div>\r\n<div class=\"input-number__sub\" (mousedown)=\"sub()\"></div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/loading-bar/loading-bar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/loading-bar/loading-bar.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-bar\" #bar>\r\n    <div class=\"loading-bar__inner\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-header/page-header.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/page-header/page-header.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\r\n    <div class=\"page-header__container container\">\r\n        <div class=\"page-header__breadcrumb\">\r\n            <nav aria-label=\"breadcrumb\">\r\n                <ol class=\"breadcrumb\">\r\n                    <ng-container *ngFor=\"let breadcrumb of breadcrumbs; last as last\">\r\n                        <li *ngIf=\"!last\" class=\"breadcrumb-item\">\r\n                            <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\r\n                            <app-icon class=\"breadcrumb-arrow\" name=\"arrow-rounded-right-6x9\" size=\"6x9\"></app-icon>\r\n                        </li>\r\n                        <li *ngIf=\"last\" class=\"breadcrumb-item active\" aria-current=\"page\">{{ breadcrumb.label }}</li>\r\n                    </ng-container>\r\n                </ol>\r\n            </nav>\r\n        </div>\r\n        <div *ngIf=\"header\" class=\"page-header__title\">\r\n            <h1>{{ header }}</h1>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/pagination/pagination.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/pagination/pagination.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination justify-content-center\">\r\n    <li class=\"page-item\" [class.disabled]=\"current <= 1\">\r\n        <a class=\"page-link page-link--with-arrow\" aria-label=\"Previous\" (click)=\"setPage(current - 1)\">\r\n            <app-icon class=\"page-link__arrow page-link__arrow--left\" aria-hidden=\"true\" name=\"arrow-rounded-left-8x13\" size=\"8x13\"></app-icon>\r\n        </a>\r\n    </li>\r\n    <li *ngFor=\"let page of pages; trackBy: trackByFn\" class=\"page-item\" [class.active]=\"page === current\">\r\n        <a class=\"page-link\" (click)=\"setPage(page)\">\r\n            {{ page }}\r\n            <span *ngIf=\"page === current\" class=\"sr-only\">(current)</span>\r\n        </a>\r\n    </li>\r\n    <li class=\"page-item\" [class.disabled]=\"current >= total\">\r\n        <a class=\"page-link page-link--with-arrow\" aria-label=\"Next\" (click)=\"setPage(current + 1)\">\r\n            <app-icon class=\"page-link__arrow page-link__arrow--right\" aria-hidden=\"true\" name=\"arrow-rounded-right-8x13\" size=\"8x13\"></app-icon>\r\n        </a>\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/post-card/post-card.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/post-card/post-card.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-card\" [ngClass]=\"{\r\n    'post-card--layout--grid': ['grid-nl', 'grid-lg'].includes(layout),\r\n    'post-card--layout--list': ['list-nl', 'list-sm'].includes(layout),\r\n\r\n    'post-card--size--nl': ['grid-nl', 'list-nl'].includes(layout),\r\n    'post-card--size--lg': layout === 'grid-lg',\r\n    'post-card--size--sm': layout === 'list-sm'\r\n}\">\r\n    <div class=\"post-card__image\">\r\n        <a appClick [routerLink]=\"root.post()\">\r\n            <img [src]=\"post.image\" alt=\"\">\r\n        </a>\r\n    </div>\r\n    <div class=\"post-card__info\">\r\n        <div class=\"post-card__category\">\r\n            <a appClick [routerLink]=\"root.post()\" *ngFor=\"let category of post.categories\">{{ category }}</a>\r\n        </div>\r\n        <div class=\"post-card__name\">\r\n            <a appClick [routerLink]=\"root.post()\">{{ post.title }}</a>\r\n        </div>\r\n        <div class=\"post-card__date\">{{ post.date }}</div>\r\n        <div class=\"post-card__content\">\r\n            In one general sense, philosophy is associated with wisdom,\r\n            intellectual culture and a search for knowledge.\r\n            In that sense, all cultures...\r\n        </div>\r\n        <div class=\"post-card__read-more\">\r\n            <a appClick [routerLink]=\"root.post()\" class=\"btn btn-secondary btn-sm\">Read More</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/product-card/product-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/product-card/product-card.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-card\" [ngClass]=\"{\r\n    'product-card--layout--grid product-card--size--sm': layout === 'grid-sm',\r\n    'product-card--layout--grid product-card--size--nl': layout === 'grid-nl',\r\n    'product-card--layout--grid product-card--size--lg': layout === 'grid-lg',\r\n    'product-card--layout--list':                        layout === 'list',\r\n    'product-card--layout--horizontal':                  layout === 'horizontal'\r\n}\">\r\n    <button class=\"product-card__quickview\" type=\"button\" appClick (click)=\"showQuickview()\" [ngClass]=\"{'product-card__quickview--preload': showingQuickview}\">\r\n        <app-icon name=\"quickview-16\" size=\"16\"></app-icon>\r\n        <span class=\"fake-svg-icon\"></span>\r\n    </button>\r\n\r\n    <div *ngIf=\"product.badges.length\" class=\"product-card__badges-list\">\r\n        <div *ngIf=\"product.badges.includes('sale')\" class=\"product-card__badge product-card__badge--sale\">Sale</div>\r\n        <div *ngIf=\"product.badges.includes('hot')\" class=\"product-card__badge product-card__badge--hot\">Hot</div>\r\n        <div *ngIf=\"product.badges.includes('new')\" class=\"product-card__badge product-card__badge--new\">New</div>\r\n    </div>\r\n\r\n    <div class=\"product-card__image\">\r\n        <a appClick [routerLink]=\"root.product(product.id)\" *ngIf=\"product.images?.length\"><img [src]=\"product.images[0]\" alt=\"\"></a>\r\n    </div>\r\n    <div class=\"product-card__info\">\r\n        <div class=\"product-card__name\">\r\n            <a appClick [routerLink]=\"root.product(product.id)\">{{ product.name }}</a>\r\n        </div>\r\n        <div class=\"product-card__rating\">\r\n            <app-rating [value]=\"product.rating\"></app-rating>\r\n            <div class=\"product-card__rating-legend\">{{ product.reviews }} Reviews</div>\r\n        </div>\r\n        <ul *ngIf=\"product.features.length\" class=\"product-card__features-list\">\r\n            <li *ngFor=\"let feature of product.features\">{{ feature.name }}: {{ feature.value }}</li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"product-card__actions\">\r\n        <div class=\"product-card__availability\">\r\n            Availability:\r\n            <span *ngIf=\"product.availability === 'in-stock'\" class=\"text-success\">In Stock</span>\r\n        </div>\r\n        <div class=\"product-card__prices\">\r\n            <ng-container *ngIf=\"product.compareAtPrice\">\r\n                <span class=\"product-card__new-price\">{{ product.price|currencyFormat }}</span>{{ ' ' }}\r\n                <span class=\"product-card__old-price\">{{ product.compareAtPrice|currencyFormat }}</span>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!product.compareAtPrice\">\r\n                {{ product.price|currencyFormat }}\r\n            </ng-container>\r\n        </div>\r\n        <div class=\"product-card__buttons\">\r\n            <button class=\"btn btn-primary product-card__addtocart\" type=\"button\" appClick (click)=\"addToCart()\" [ngClass]=\"{'btn-loading': addingToCart}\">Add To Cart</button>\r\n            <button class=\"btn btn-secondary product-card__addtocart product-card__addtocart--list\" type=\"button\" appClick (click)=\"addToCart()\" [ngClass]=\"{'btn-loading': addingToCart}\">Add To Cart</button>\r\n            <button class=\"btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist\" type=\"button\" appClick (click)=\"addToWishlist()\" [ngClass]=\"{'btn-loading': addingToWishlist}\">\r\n                <app-icon name=\"wishlist-16\" size=\"16\"></app-icon>\r\n                <span class=\"fake-svg-icon fake-svg-icon--wishlist-16\"></span>\r\n            </button>\r\n            <button class=\"btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare\" type=\"button\" appClick (click)=\"addToCompare()\" [ngClass]=\"{'btn-loading': addingToCompare}\">\r\n                <app-icon name=\"compare-16\" size=\"16\"></app-icon>\r\n                <span class=\"fake-svg-icon fake-svg-icon--compare-16\"></span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/product/product.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/product/product.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product product--layout--{{ layout }}\" *ngIf=\"product\">\r\n    <div class=\"product__content\">\r\n        <!-- .product__gallery -->\r\n        <div class=\"product__gallery\">\r\n            <div class=\"product-gallery\" *ngIf=\"showGallery\">\r\n                <div class=\"product-gallery__featured\">\r\n                    \r\n                    <owl-carousel-o [options]=\"carouselOptions\" (changed)=\"featuredCarouselTranslated($event)\" appOwlPreventClick #featuredCarousel>\r\n                        <ng-container *ngFor=\"let image of images\">\r\n                            <ng-template carouselSlide [id]=\"image.id\">\r\n                                <a (click)=\"openModal(template)\">\r\n                                    <span class=\"bg\">\r\n                                        <img [src]=\"image.url\" alt=\"\" #imageElement>\r\n                                    </span>\r\n                                </a>\r\n                            </ng-template>\r\n                        </ng-container>\r\n                    </owl-carousel-o>\r\n                </div>\r\n                <!-- <div class=\"product-gallery__carousel\">\r\n                    <owl-carousel-o [options]=\"thumbnailsCarouselOptions\" [appFakeSlides]=\"images.length\" #fakeSlides=\"appFakeSlides\" appOwlPreventClick #thumbnailsCarousel>\r\n                        <ng-container *ngFor=\"let image of images\">\r\n                            <ng-template carouselSlide [id]=\"image.id\">\r\n                                <span class=\"product-gallery__carousel-item\"\r\n                                   [ngClass]=\"{'product-gallery__carousel-item--active': image.active}\"\r\n                                   appClick (click)=\"featuredCarousel.to(image.id); setActiveImage(image)\">\r\n                                    <img class=\"product-gallery__carousel-image\" [src]=\"image.url\" alt=\"\">\r\n                                </span>\r\n                            </ng-template>\r\n                        </ng-container>\r\n                        <ng-container *ngFor=\"let i of fakeSlides.slides\">\r\n                            <ng-template carouselSlide [id]=\"'fake-slide-'+i\"></ng-template>\r\n                        </ng-container>\r\n                    </owl-carousel-o>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n        <!-- .product__gallery / end -->\r\n        <!-- .product__info -->\r\n        <div class=\"product__info\">\r\n            <div class=\"product__wishlist-compare\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-svg-icon\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Wishlist\"\r\n                        appClick (click)=\"addToWishlist()\"\r\n                        [ngClass]=\"{'btn-loading': addingToWishlist}\">\r\n                    <app-icon name=\"wishlist-16\" size=\"16\"></app-icon>\r\n                </button>\r\n                <button type=\"button\" class=\"btn btn-sm btn-light btn-svg-icon\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Compare\"\r\n                        appClick (click)=\"addToCompare()\"\r\n                        [ngClass]=\"{'btn-loading': addingToCompare}\">\r\n                    <app-icon name=\"compare-16\" size=\"16\"></app-icon>\r\n                </button>\r\n            </div>\r\n            <h1 class=\"product__name\">{{ product.name }}</h1>\r\n            <div class=\"product__rating\">\r\n                <div class=\"product__rating-stars\">\r\n                    <app-rating [value]=\"product.rating\"></app-rating>\r\n                </div>\r\n                <div class=\"product__rating-legend\">\r\n                    <a href=\"\" appClick>{{ product.reviews }} Reviews</a><span>/</span><a href=\"\" appClick>Write A Review</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"product__description\">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh\r\n                lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.\r\n            </div>\r\n            <ul class=\"product__features\">\r\n                <li>Pages: 750</li>\r\n                <li>Power Source: Cordless-Electric</li>\r\n                <li>Battery Cell Type: Lithium</li>\r\n                <li>Voltage: 20 Volts</li>\r\n                <li>Battery Capacity: 2 Ah</li>\r\n            </ul>\r\n            <ul class=\"product__meta\">\r\n                <li class=\"product__meta-availability\">Availability: <span class=\"text-success\">In Stock</span></li>\r\n                <li>Author: <a href=\"\" appClick>Wakita</a></li>\r\n                <li>SKU: 83690/32</li>\r\n            </ul>\r\n        </div>\r\n        <!-- .product__info / end -->\r\n        <!-- .product__sidebar -->\r\n        <div class=\"product__sidebar\">\r\n            <div class=\"product__availability\">\r\n                Availability: <span class=\"text-success\">In Stock</span>\r\n            </div>\r\n\r\n            <div class=\"product__prices\">\r\n                <ng-container *ngIf=\"product.compareAtPrice\">\r\n                    <span class=\"product__new-price\">{{ product.price|currencyFormat }}</span>{{ ' ' }}\r\n                    <span class=\"product__old-price\">{{ product.compareAtPrice|currencyFormat }}</span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!product.compareAtPrice\">\r\n                    {{ product.price|currencyFormat }}\r\n                </ng-container>\r\n            </div>\r\n            <!-- .product__options -->\r\n            <form class=\"product__options\">\r\n                <!-- <div class=\"form-group product__option\">\r\n                    <label class=\"product__option-label\">Color</label>\r\n                    <div class=\"input-radio-color\">\r\n                        <div class=\"input-radio-color__list\">\r\n                            <label class=\"input-radio-color__item input-radio-color__item--white\" style=\"color: #fff;\" data-toggle=\"tooltip\" title=\"White\">\r\n                                <input type=\"radio\" name=\"color\">\r\n                                <span></span>\r\n                            </label>\r\n                            <label class=\"input-radio-color__item\" style=\"color: #ffd333;\" data-toggle=\"tooltip\" title=\"Yellow\">\r\n                                <input type=\"radio\" name=\"color\">\r\n                                <span></span>\r\n                            </label>\r\n                            <label class=\"input-radio-color__item\" style=\"color: #ff4040;\" data-toggle=\"tooltip\" title=\"Red\">\r\n                                <input type=\"radio\" name=\"color\">\r\n                                <span></span>\r\n                            </label>\r\n                            <label class=\"input-radio-color__item input-radio-color__item--disabled\" style=\"color: #4080ff;\" data-toggle=\"tooltip\" title=\"Blue\">\r\n                                <input type=\"radio\" name=\"color\" disabled>\r\n                                <span></span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group product__option\">\r\n                    <label class=\"product__option-label\">Material</label>\r\n                    <div class=\"input-radio-label\">\r\n                        <div class=\"input-radio-label__list\">\r\n                            <label>\r\n                                <input type=\"radio\" name=\"material\">\r\n                                <span>Metal</span>\r\n                            </label>\r\n                            <label>\r\n                                <input type=\"radio\" name=\"material\">\r\n                                <span>Wood</span>\r\n                            </label>\r\n                            <label>\r\n                                <input type=\"radio\" name=\"material\" disabled>\r\n                                <span>Plastic</span>\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"form-group product__option\">\r\n                    <label class=\"product__option-label\">Quantity</label>\r\n                    <div class=\"product__actions\">\r\n                        <div class=\"product__actions-item\">\r\n                            <app-input-number aria-label=\"Quantity\" class=\"product__quantity\" size=\"lg\" [min]=\"1\" [formControl]=\"quantity\"></app-input-number>\r\n                        </div>\r\n                        <div class=\"product__actions-item product__actions-item--addtocart\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-lg\"\r\n                                    [ngClass]=\"{'btn-loading': addingToCart}\"\r\n                                    appClick (click)=\"addToCart()\">Add to cart</button>\r\n                        </div>\r\n                        <div class=\"product__actions-item product__actions-item--wishlist\">\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-svg-icon btn-lg\" data-toggle=\"tooltip\" title=\"Wishlist\"\r\n                                    [ngClass]=\"{'btn-loading': addingToWishlist}\"\r\n                                    appClick (click)=\"addToWishlist()\">\r\n                                <app-icon name=\"wishlist-16\" size=\"16\"></app-icon>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"product__actions-item product__actions-item--compare\">\r\n                            <button type=\"button\" class=\"btn btn-secondary btn-svg-icon btn-lg\" data-toggle=\"tooltip\" title=\"Compare\"\r\n                                    [ngClass]=\"{'btn-loading': addingToCompare}\"\r\n                                    appClick (click)=\"addToCompare()\">\r\n                                <app-icon name=\"compare-16\" size=\"16\"></app-icon>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <!-- .product__options / end -->\r\n        </div>\r\n        <!-- .product__end -->\r\n        <div class=\"product__footer\">\r\n            <button class=\"btn btn-secondary\" (click)=\"openModal(template)\">Read some page</button>\r\n            \r\n            <ng-template #template>\r\n                <div class=\"modal-header\">\r\n                    <h4 class=\"modal-title pull-left\">{{ product.name }}</h4>\r\n                    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <iframe src=\"https://cdn.s3waas.gov.in/master/uploads/2016/09/document_1481208108.pdf\" frameborder=\"0\" height=\"600\" width=\"100%\"></iframe>\r\n                </div>\r\n            </ng-template>\r\n\r\n            <!-- <div class=\"product__tags tags\">\r\n                <div class=\"tags__list\">\r\n                    <a href=\"\" appClick>Mounts</a>\r\n                    <a href=\"\" appClick>Electrodes</a>\r\n                    <a href=\"\" appClick>Chainsaws</a>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/quickview/quickview.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/quickview/quickview.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #modal>\r\n    <div class=\"quickview\">\r\n        <button class=\"quickview__close\" type=\"button\" appClick (click)=\"modalRef.hide()\">\r\n            <app-icon name=\"cross-20\" size=\"20\"></app-icon>\r\n        </button>\r\n\r\n        <app-product [product]=\"product\" layout=\"quickview\"></app-product>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/rating/rating.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/rating/rating.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rating\">\r\n    <div class=\"rating__body\">\r\n        <ng-container *ngFor=\"let i of [1, 2, 3, 4, 5]\">\r\n            <svg class=\"rating__star\" [ngClass]=\"{'rating__star--active': value >= i}\" width=\"13px\" height=\"12px\">\r\n                <g class=\"rating__fill\"><use xlink:href=\"assets/images/sprite.svg#star-normal\"></use></g>\r\n                <g class=\"rating__stroke\"><use xlink:href=\"assets/images/sprite.svg#star-normal-stroke\"></use></g>\r\n            </svg>\r\n\r\n            <div class=\"rating__star rating__star--only-edge\" [ngClass]=\"{'rating__star--active': value >= i}\">\r\n                <div class=\"rating__fill\"><div class=\"fake-svg-icon\"></div></div>\r\n                <div class=\"rating__stroke\"><div class=\"fake-svg-icon\"></div></div>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n</div>\r\n"

/***/ }),

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
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-home-one/page-home-one.component */ "./src/app/pages/page-home-one/page-home-one.component.ts");
/* harmony import */ var _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-home-two/page-home-two.component */ "./src/app/pages/page-home-two/page-home-two.component.ts");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/root/root.component */ "./src/app/components/root/root.component.ts");







var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'classic'
    },
    {
        path: 'classic',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_6__["RootComponent"],
        data: {
            headerLayout: 'classic'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_4__["PageHomeOneComponent"]
            },
            {
                path: 'blog',
                loadChildren: function () { return __webpack_require__.e(/*! import() | modules-blog-blog-module */ "modules-blog-blog-module").then(__webpack_require__.bind(null, /*! ./modules/blog/blog.module */ "./src/app/modules/blog/blog.module.ts")).then(function (m) { return m.BlogModule; }); }
            },
            {
                path: 'shop',
                loadChildren: function () { return __webpack_require__.e(/*! import() | modules-shop-shop-module */ "modules-shop-shop-module").then(__webpack_require__.bind(null, /*! ./modules/shop/shop.module */ "./src/app/modules/shop/shop.module.ts")).then(function (m) { return m.ShopModule; }); }
            },
            {
                path: 'account',
                loadChildren: function () { return __webpack_require__.e(/*! import() | modules-account-account-module */ "modules-account-account-module").then(__webpack_require__.bind(null, /*! ./modules/account/account.module */ "./src/app/modules/account/account.module.ts")).then(function (m) { return m.AccountModule; }); }
            },
            {
                path: 'site',
                loadChildren: function () { return __webpack_require__.e(/*! import() | modules-site-site-module */ "modules-site-site-module").then(__webpack_require__.bind(null, /*! ./modules/site/site.module */ "./src/app/modules/site/site.module.ts")).then(function (m) { return m.SiteModule; }); }
            },
            {
                path: '**',
                component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
            }
        ],
    },
    {
        path: 'compact',
        component: _components_root_root_component__WEBPACK_IMPORTED_MODULE_6__["RootComponent"],
        data: {
            headerLayout: 'compact'
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_5__["PageHomeTwoComponent"]
            },
            {
                path: 'blog',
                loadChildren: function () { return __webpack_require__.e(/*! import() | modules-blog-blog-module */ "modules-blog-blog-module").then(__webpack_require__.bind(null, /*! ./modules/blog/blog.module */ "./src/app/modules/blog/blog.module.ts")).then(function (m) { return m.BlogModule; }); }
            },
            {
                path: 'shop',
                loadChildren: function () { return __webpack_require__.e(/*! import() | modules-shop-shop-module */ "modules-shop-shop-module").then(__webpack_require__.bind(null, /*! ./modules/shop/shop.module */ "./src/app/modules/shop/shop.module.ts")).then(function (m) { return m.ShopModule; }); }
            },
            {
                path: 'account',
                loadChildren: function () { return __webpack_require__.e(/*! import() | modules-account-account-module */ "modules-account-account-module").then(__webpack_require__.bind(null, /*! ./modules/account/account.module */ "./src/app/modules/account/account.module.ts")).then(function (m) { return m.AccountModule; }); }
            },
            {
                path: 'site',
                loadChildren: function () { return __webpack_require__.e(/*! import() | modules-site-site-module */ "modules-site-site-module").then(__webpack_require__.bind(null, /*! ./modules/site/site.module */ "./src/app/modules/site/site.module.ts")).then(function (m) { return m.SiteModule; }); }
            },
            {
                path: '**',
                component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
            }
        ],
    },
    {
        path: '**',
        redirectTo: 'classic'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled'
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/compare.service */ "./src/app/shared/services/compare.service.ts");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/currency.service */ "./src/app/shared/services/currency.service.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent(platformId, router, toastr, cart, compare, wishlist, zone, scroller, currency) {
        this.platformId = platformId;
        this.router = router;
        this.toastr = toastr;
        this.cart = cart;
        this.compare = compare;
        this.wishlist = wishlist;
        this.zone = zone;
        this.scroller = scroller;
        this.currency = currency;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // properties of the CurrencyFormatOptions interface fully complies
        // with the arguments of the built-in pipe "currency"
        // https://angular.io/api/common/CurrencyPipe
        this.currency.options = {
            code: 'USD',
        };
        this.router.events.subscribe(function (event) {
            if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"])) {
                _this.scroller.scrollToPosition([0, 0]);
            }
        });
        this.cart.onAdding$.subscribe(function (product) {
            _this.toastr.success("Product \"" + product.name + "\" added to cart!");
        });
        this.compare.onAdding$.subscribe(function (product) {
            _this.toastr.success("Product \"" + product.name + "\" added to compare!");
        });
        this.wishlist.onAdding$.subscribe(function (product) {
            _this.toastr.success("Product \"" + product.name + "\" added to wish list!");
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    var preloader = document.querySelector('.site-preloader');
                    preloader.addEventListener('transitionend', function (event) {
                        if (event.propertyName === 'opacity') {
                            preloader.remove();
                        }
                    });
                    preloader.classList.add('site-preloader__fade');
                }, 300);
            });
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"] },
        { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"] },
        { type: _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _shared_services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"],
            _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"],
            _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_8__["CurrencyService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/blocks/blocks.module */ "./src/app/modules/blocks/blocks.module.ts");
/* harmony import */ var _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/footer/footer.module */ "./src/app/modules/footer/footer.module.ts");
/* harmony import */ var _modules_header_header_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/header/header.module */ "./src/app/modules/header/header.module.ts");
/* harmony import */ var _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/mobile/mobile.module */ "./src/app/modules/mobile/mobile.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/widgets/widgets.module */ "./src/app/modules/widgets/widgets.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_root_root_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/root/root.component */ "./src/app/components/root/root.component.ts");
/* harmony import */ var _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-home-one/page-home-one.component */ "./src/app/pages/page-home-one/page-home-one.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/page-home-two/page-home-two.component */ "./src/app/pages/page-home-two/page-home-two.component.ts");


// import { registerLocaleData } from '@angular/common';
// import localeIt from '@angular/common/locales/it';
//
// registerLocaleData(localeIt, 'it');
// modules (angular)



// modules (third-party)


// modules







// components


// pages



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // components
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_root_root_component__WEBPACK_IMPORTED_MODULE_15__["RootComponent"],
                // pages
                _pages_page_home_one_page_home_one_component__WEBPACK_IMPORTED_MODULE_16__["PageHomeOneComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
                _pages_page_home_two_page_home_two_component__WEBPACK_IMPORTED_MODULE_18__["PageHomeTwoComponent"]
            ],
            imports: [
                // modules (angular)
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                // modules (third-party)
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                // modules
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _modules_blocks_blocks_module__WEBPACK_IMPORTED_MODULE_8__["BlocksModule"],
                _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
                _modules_header_header_module__WEBPACK_IMPORTED_MODULE_10__["HeaderModule"],
                _modules_mobile_mobile_module__WEBPACK_IMPORTED_MODULE_11__["MobileModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _modules_widgets_widgets_module__WEBPACK_IMPORTED_MODULE_13__["WidgetsModule"]
            ],
            providers: [
            // { provide: LOCALE_ID, useValue: 'it' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/root/root.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/root/root.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/root/root.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/root/root.component.ts ***!
  \***************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");




var RootComponent = /** @class */ (function () {
    function RootComponent(root, router, route) {
        var _this = this;
        this.root = root;
        this.router = router;
        this.route = route;
        this.route.data.subscribe(function (data) { return _this.headerLayout = data.headerLayout; });
        this.root.path = this.router.createUrlTree(['./'], { relativeTo: route }).toString();
    }
    RootComponent.ctorParameters = function () { return [
        { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    RootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./root.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.scss */ "./src/app/components/root/root.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-banner/block-banner.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/blocks/block-banner/block-banner.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLWJhbm5lci9ibG9jay1iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/blocks/block-banner/block-banner.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-banner/block-banner.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlockBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBannerComponent", function() { return BlockBannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockBannerComponent = /** @class */ (function () {
    function BlockBannerComponent() {
    }
    BlockBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-banner',
            template: __webpack_require__(/*! raw-loader!./block-banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-banner/block-banner.component.html"),
            styles: [__webpack_require__(/*! ./block-banner.component.scss */ "./src/app/modules/blocks/block-banner/block-banner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockBannerComponent);
    return BlockBannerComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-brands/block-brands.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/blocks/block-brands/block-brands.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLWJyYW5kcy9ibG9jay1icmFuZHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/blocks/block-brands/block-brands.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-brands/block-brands.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlockBrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBrandsComponent", function() { return BlockBrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");



var BlockBrandsComponent = /** @class */ (function () {
    function BlockBrandsComponent(direction) {
        this.direction = direction;
        this.brands = [];
        this.carouselOptions = {
            items: 6,
            nav: false,
            dots: false,
            loop: true,
            responsive: {
                1100: { items: 6 },
                920: { items: 5 },
                680: { items: 4 },
                500: { items: 3 },
                0: { items: 2 }
            },
            rtl: this.direction.isRTL()
        };
    }
    BlockBrandsComponent.ctorParameters = function () { return [
        { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BlockBrandsComponent.prototype, "brands", void 0);
    BlockBrandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-brands',
            template: __webpack_require__(/*! raw-loader!./block-brands.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-brands/block-brands.component.html"),
            styles: [__webpack_require__(/*! ./block-brands.component.scss */ "./src/app/modules/blocks/block-brands/block-brands.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"]])
    ], BlockBrandsComponent);
    return BlockBrandsComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-categories/block-categories.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/blocks/block-categories/block-categories.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLWNhdGVnb3JpZXMvYmxvY2stY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/blocks/block-categories/block-categories.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/blocks/block-categories/block-categories.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BlockCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCategoriesComponent", function() { return BlockCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockCategoriesComponent = /** @class */ (function () {
    function BlockCategoriesComponent() {
        this.header = '';
        this.layout = 'classic';
        this.categories = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockCategoriesComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlockCategoriesComponent.prototype, "layout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BlockCategoriesComponent.prototype, "categories", void 0);
    BlockCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-categories',
            template: __webpack_require__(/*! raw-loader!./block-categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-categories/block-categories.component.html"),
            styles: [__webpack_require__(/*! ./block-categories.component.scss */ "./src/app/modules/blocks/block-categories/block-categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockCategoriesComponent);
    return BlockCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-features/block-features.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blocks/block-features/block-features.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLWZlYXR1cmVzL2Jsb2NrLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/blocks/block-features/block-features.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/blocks/block-features/block-features.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlockFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFeaturesComponent", function() { return BlockFeaturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockFeaturesComponent = /** @class */ (function () {
    function BlockFeaturesComponent() {
        this.layout = 'classic';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlockFeaturesComponent.prototype, "layout", void 0);
    BlockFeaturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-features',
            template: __webpack_require__(/*! raw-loader!./block-features.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-features/block-features.component.html"),
            styles: [__webpack_require__(/*! ./block-features.component.scss */ "./src/app/modules/blocks/block-features/block-features.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockFeaturesComponent);
    return BlockFeaturesComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-map/block-map.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/blocks/block-map/block-map.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLW1hcC9ibG9jay1tYXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/blocks/block-map/block-map.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/blocks/block-map/block-map.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlockMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockMapComponent", function() { return BlockMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockMapComponent = /** @class */ (function () {
    function BlockMapComponent() {
    }
    BlockMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-map',
            template: __webpack_require__(/*! raw-loader!./block-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-map/block-map.component.html"),
            styles: [__webpack_require__(/*! ./block-map.component.scss */ "./src/app/modules/blocks/block-map/block-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockMapComponent);
    return BlockMapComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-posts/block-posts.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/blocks/block-posts/block-posts.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXBvc3RzL2Jsb2NrLXBvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/blocks/block-posts/block-posts.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/blocks/block-posts/block-posts.component.ts ***!
  \*********************************************************************/
/*! exports provided: BlockPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPostsComponent", function() { return BlockPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");



var BlockPostsComponent = /** @class */ (function () {
    function BlockPostsComponent(direction) {
        this.direction = direction;
        this.header = '';
        this.layout = 'list-sm';
        this.posts = [];
        this.carouselDefaultOptions = {
            margin: 30,
            nav: false,
            dots: false,
            loop: true,
            rtl: this.direction.isRTL()
        };
        this.carouselOptionsByLayout = {
            'grid-nl': {
                responsive: {
                    930: { items: 3 },
                    690: { items: 2 },
                    0: { items: 1 }
                }
            },
            'list-sm': {
                responsive: {
                    930: { items: 2 },
                    0: { items: 1 }
                }
            }
        };
    }
    Object.defineProperty(BlockPostsComponent.prototype, "carouselOptions", {
        get: function () {
            return Object.assign({}, this.carouselDefaultOptions, this.carouselOptionsByLayout[this.layout]);
        },
        enumerable: true,
        configurable: true
    });
    BlockPostsComponent.ctorParameters = function () { return [
        { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockPostsComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlockPostsComponent.prototype, "layout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BlockPostsComponent.prototype, "posts", void 0);
    BlockPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-posts',
            template: __webpack_require__(/*! raw-loader!./block-posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-posts/block-posts.component.html"),
            styles: [__webpack_require__(/*! ./block-posts.component.scss */ "./src/app/modules/blocks/block-posts/block-posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"]])
    ], BlockPostsComponent);
    return BlockPostsComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-product-columns/block-product-columns.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXByb2R1Y3QtY29sdW1ucy9ibG9jay1wcm9kdWN0LWNvbHVtbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/blocks/block-product-columns/block-product-columns.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-product-columns/block-product-columns.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: BlockProductColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductColumnsComponent", function() { return BlockProductColumnsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockProductColumnsComponent = /** @class */ (function () {
    function BlockProductColumnsComponent() {
        this.columns = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BlockProductColumnsComponent.prototype, "columns", void 0);
    BlockProductColumnsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-product-columns',
            template: __webpack_require__(/*! raw-loader!./block-product-columns.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-product-columns/block-product-columns.component.html"),
            styles: [__webpack_require__(/*! ./block-product-columns.component.scss */ "./src/app/modules/blocks/block-product-columns/block-product-columns.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockProductColumnsComponent);
    return BlockProductColumnsComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXByb2R1Y3RzLWNhcm91c2VsL2Jsb2NrLXByb2R1Y3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BlockProductsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductsCarouselComponent", function() { return BlockProductsCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");



var BlockProductsCarouselComponent = /** @class */ (function () {
    function BlockProductsCarouselComponent(direction) {
        this.direction = direction;
        this.layout = 'grid-4';
        this.rows = 1;
        this.products = [];
        this.groups = [];
        this.withSidebar = false;
        this.loading = false;
        this.groupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columns = [];
        this.carouselDefaultOptions = {
            items: 4,
            margin: 14,
            nav: false,
            dots: false,
            loop: true,
            stagePadding: 1,
            rtl: this.direction.isRTL()
        };
        this.carouselOptionsByLayout = {
            'grid-4': {
                responsive: {
                    1110: { items: 4, margin: 14 },
                    930: { items: 4, margin: 10 },
                    690: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            'grid-4-sm': {
                responsive: {
                    820: { items: 4, margin: 14 },
                    640: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            'grid-5': {
                responsive: {
                    1110: { items: 5, margin: 12 },
                    930: { items: 4, margin: 10 },
                    690: { items: 3, margin: 10 },
                    400: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            },
            horizontal: {
                items: 3,
                responsive: {
                    1110: { items: 3, margin: 14 },
                    930: { items: 3, margin: 10 },
                    690: { items: 2, margin: 10 },
                    0: { items: 1 }
                }
            }
        };
    }
    Object.defineProperty(BlockProductsCarouselComponent.prototype, "carouselOptions", {
        get: function () {
            return Object.assign({}, this.carouselDefaultOptions, this.carouselOptionsByLayout[this.layout]);
        },
        enumerable: true,
        configurable: true
    });
    BlockProductsCarouselComponent.prototype.ngOnChanges = function (changes) {
        var properties = Object.keys(changes);
        if (properties.includes('products') || properties.includes('row')) {
            this.columns = [];
            if (this.rows > 0) {
                var products = this.products.slice();
                while (products.length > 0) {
                    this.columns.push(products.splice(0, this.rows));
                }
            }
        }
    };
    BlockProductsCarouselComponent.ctorParameters = function () { return [
        { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlockProductsCarouselComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlockProductsCarouselComponent.prototype, "layout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockProductsCarouselComponent.prototype, "rows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BlockProductsCarouselComponent.prototype, "products", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BlockProductsCarouselComponent.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockProductsCarouselComponent.prototype, "withSidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockProductsCarouselComponent.prototype, "loading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BlockProductsCarouselComponent.prototype, "groupChange", void 0);
    BlockProductsCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-products-carousel',
            template: __webpack_require__(/*! raw-loader!./block-products-carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.html"),
            styles: [__webpack_require__(/*! ./block-products-carousel.component.scss */ "./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_2__["DirectionService"]])
    ], BlockProductsCarouselComponent);
    return BlockProductsCarouselComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-products/block-products.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products/block-products.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXByb2R1Y3RzL2Jsb2NrLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/blocks/block-products/block-products.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/blocks/block-products/block-products.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlockProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductsComponent", function() { return BlockProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockProductsComponent = /** @class */ (function () {
    function BlockProductsComponent() {
        this.layout = 'large-first';
        this.products = [];
    }
    Object.defineProperty(BlockProductsComponent.prototype, "large", {
        get: function () {
            if (this.layout === 'large-first' && this.products.length > 0) {
                return this.products[0];
            }
            else if (this.layout === 'large-last' && this.products.length > 6) {
                return this.products[6];
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockProductsComponent.prototype, "smalls", {
        get: function () {
            if (this.layout === 'large-first') {
                return this.products.slice(1, 7);
            }
            else {
                return this.products.slice(0, 6);
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlockProductsComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlockProductsComponent.prototype, "layout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BlockProductsComponent.prototype, "products", void 0);
    BlockProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-products',
            template: __webpack_require__(/*! raw-loader!./block-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-products/block-products.component.html"),
            styles: [__webpack_require__(/*! ./block-products.component.scss */ "./src/app/modules/blocks/block-products/block-products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockProductsComponent);
    return BlockProductsComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/block-slideshow/block-slideshow.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/blocks/block-slideshow/block-slideshow.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2Jsb2NrLXNsaWRlc2hvdy9ibG9jay1zbGlkZXNob3cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/blocks/block-slideshow/block-slideshow.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/blocks/block-slideshow/block-slideshow.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BlockSlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSlideshowComponent", function() { return BlockSlideshowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");




var BlockSlideshowComponent = /** @class */ (function () {
    function BlockSlideshowComponent(sanitizer, direction) {
        this.sanitizer = sanitizer;
        this.direction = direction;
        this.withDepartments = false;
        this.options = {
            nav: false,
            dots: true,
            loop: true,
            responsive: {
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
        this.slides = [
            {
                title: 'Screwdrivers<br>Professional Tools',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                image_classic: 'assets/images/slides/cover5.jpg',
                image_full: 'assets/images/slides/cover5.jpg',
                image_mobile: 'assets/images/slides/slide-2-mobile.jpg'
            },
            {
                title: 'One more<br>Unique header',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                image_classic: 'assets/images/slides/cover6.jpg',
                image_full: 'assets/images/slides/cover6.jpg',
                image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
            },
            {
                title: 'One more<br>Unique header',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                image_classic: 'assets/images/slides/cover7.jpg',
                image_full: 'assets/images/slides/cover7.jpg',
                image_mobile: 'assets/images/slides/slide-3-mobile.jpg'
            },
            {
                title: 'Big choice of<br>Plumbing products',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                image_classic: 'assets/images/slides/cover3.jpg',
                image_full: 'assets/images/slides/cover3.jpg',
                image_mobile: 'assets/images/slides/slide-1-mobile.jpg'
            }
        ];
    }
    BlockSlideshowComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockSlideshowComponent.prototype, "withDepartments", void 0);
    BlockSlideshowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-slideshow',
            template: __webpack_require__(/*! raw-loader!./block-slideshow.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/block-slideshow/block-slideshow.component.html"),
            styles: [__webpack_require__(/*! ./block-slideshow.component.scss */ "./src/app/modules/blocks/block-slideshow/block-slideshow.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"]])
    ], BlockSlideshowComponent);
    return BlockSlideshowComponent;
}());



/***/ }),

/***/ "./src/app/modules/blocks/blocks.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/blocks/blocks.module.ts ***!
  \*************************************************/
/*! exports provided: BlocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksModule", function() { return BlocksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block-banner/block-banner.component */ "./src/app/modules/blocks/block-banner/block-banner.component.ts");
/* harmony import */ var _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-brands/block-brands.component */ "./src/app/modules/blocks/block-brands/block-brands.component.ts");
/* harmony import */ var _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-categories/block-categories.component */ "./src/app/modules/blocks/block-categories/block-categories.component.ts");
/* harmony import */ var _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block-features/block-features.component */ "./src/app/modules/blocks/block-features/block-features.component.ts");
/* harmony import */ var _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-map/block-map.component */ "./src/app/modules/blocks/block-map/block-map.component.ts");
/* harmony import */ var _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block-posts/block-posts.component */ "./src/app/modules/blocks/block-posts/block-posts.component.ts");
/* harmony import */ var _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-product-columns/block-product-columns.component */ "./src/app/modules/blocks/block-product-columns/block-product-columns.component.ts");
/* harmony import */ var _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./block-products-carousel/block-products-carousel.component */ "./src/app/modules/blocks/block-products-carousel/block-products-carousel.component.ts");
/* harmony import */ var _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./block-products/block-products.component */ "./src/app/modules/blocks/block-products/block-products.component.ts");
/* harmony import */ var _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./block-slideshow/block-slideshow.component */ "./src/app/modules/blocks/block-slideshow/block-slideshow.component.ts");
/* harmony import */ var _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/block-header/block-header.component */ "./src/app/modules/blocks/components/block-header/block-header.component.ts");


// modules (angular)


// modules (third-party)

// modules

// blocks










// components

var BlocksModule = /** @class */ (function () {
    function BlocksModule() {
    }
    BlocksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // blocks
                _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_6__["BlockBannerComponent"],
                _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_7__["BlockBrandsComponent"],
                _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_8__["BlockCategoriesComponent"],
                _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_9__["BlockFeaturesComponent"],
                _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_10__["BlockMapComponent"],
                _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_11__["BlockPostsComponent"],
                _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_12__["BlockProductColumnsComponent"],
                _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductsCarouselComponent"],
                _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_14__["BlockProductsComponent"],
                _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_15__["BlockSlideshowComponent"],
                // components
                _components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_16__["BlockHeaderComponent"]
            ],
            imports: [
                // modules (angular)
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                // modules (third-party)
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                // modules
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            exports: [
                // blocks
                _block_banner_block_banner_component__WEBPACK_IMPORTED_MODULE_6__["BlockBannerComponent"],
                _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_7__["BlockBrandsComponent"],
                _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_8__["BlockCategoriesComponent"],
                _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_9__["BlockFeaturesComponent"],
                _block_map_block_map_component__WEBPACK_IMPORTED_MODULE_10__["BlockMapComponent"],
                _block_posts_block_posts_component__WEBPACK_IMPORTED_MODULE_11__["BlockPostsComponent"],
                _block_product_columns_block_product_columns_component__WEBPACK_IMPORTED_MODULE_12__["BlockProductColumnsComponent"],
                _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductsCarouselComponent"],
                _block_products_block_products_component__WEBPACK_IMPORTED_MODULE_14__["BlockProductsComponent"],
                _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_15__["BlockSlideshowComponent"]
            ]
        })
    ], BlocksModule);
    return BlocksModule;
}());



/***/ }),

/***/ "./src/app/modules/blocks/components/block-header/block-header.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/blocks/components/block-header/block-header.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmxvY2tzL2NvbXBvbmVudHMvYmxvY2staGVhZGVyL2Jsb2NrLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/blocks/components/block-header/block-header.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/blocks/components/block-header/block-header.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BlockHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockHeaderComponent", function() { return BlockHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlockHeaderComponent = /** @class */ (function () {
    function BlockHeaderComponent() {
        this.arrows = false;
        this.groups = [];
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.prev = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.groupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BlockHeaderComponent.prototype.setGroup = function (group) {
        this.groups.forEach(function (g) { return g.current = g === group; });
        this.groupChange.emit(group);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlockHeaderComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockHeaderComponent.prototype, "arrows", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], BlockHeaderComponent.prototype, "groups", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BlockHeaderComponent.prototype, "next", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BlockHeaderComponent.prototype, "prev", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], BlockHeaderComponent.prototype, "groupChange", void 0);
    BlockHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-header',
            template: __webpack_require__(/*! raw-loader!./block-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/blocks/components/block-header/block-header.component.html"),
            styles: [__webpack_require__(/*! ./block-header.component.scss */ "./src/app/modules/blocks/components/block-header/block-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlockHeaderComponent);
    return BlockHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/footer/components/contacts/contacts.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/footer/components/contacts/contacts.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/footer/components/contacts/contacts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/footer/components/contacts/contacts.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/store.service */ "./src/app/shared/services/store.service.ts");



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(store) {
        this.store = store;
    }
    ContactsComponent.ctorParameters = function () { return [
        { type: _shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
    ]; };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/footer/components/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/modules/footer/components/contacts/contacts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/modules/footer/components/links/links.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/footer/components/links/links.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2NvbXBvbmVudHMvbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/footer/components/links/links.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/footer/components/links/links.component.ts ***!
  \********************************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinksComponent = /** @class */ (function () {
    function LinksComponent() {
        this.links = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LinksComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LinksComponent.prototype, "links", void 0);
    LinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-links',
            template: __webpack_require__(/*! raw-loader!./links.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/footer/components/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.scss */ "./src/app/modules/footer/components/links/links.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/modules/footer/components/newsletter/newsletter.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/footer/components/newsletter/newsletter.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2NvbXBvbmVudHMvbmV3c2xldHRlci9uZXdzbGV0dGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/footer/components/newsletter/newsletter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/footer/components/newsletter/newsletter.component.ts ***!
  \******************************************************************************/
/*! exports provided: NewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterComponent", function() { return NewsletterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/theme */ "./src/data/theme.ts");



var NewsletterComponent = /** @class */ (function () {
    function NewsletterComponent() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_2__["theme"];
    }
    NewsletterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-newsletter',
            template: __webpack_require__(/*! raw-loader!./newsletter.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/footer/components/newsletter/newsletter.component.html"),
            styles: [__webpack_require__(/*! ./newsletter.component.scss */ "./src/app/modules/footer/components/newsletter/newsletter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsletterComponent);
    return NewsletterComponent;
}());



/***/ }),

/***/ "./src/app/modules/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/theme */ "./src/data/theme.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_2__["theme"];
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/footer/footer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/footer/footer.module.ts ***!
  \*************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/modules/footer/components/contacts/contacts.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.component */ "./src/app/modules/footer/footer.component.ts");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/links/links.component */ "./src/app/modules/footer/components/links/links.component.ts");
/* harmony import */ var _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/newsletter/newsletter.component */ "./src/app/modules/footer/components/newsletter/newsletter.component.ts");


// modules (angular)


// modules

// components




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"],
                _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_links_links_component__WEBPACK_IMPORTED_MODULE_7__["LinksComponent"],
                _components_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_8__["NewsletterComponent"]
            ],
            imports: [
                // modules (angular)
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                // modules
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            exports: [
                _footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/modules/header/components/departments/departments.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/header/components/departments/departments.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/header/components/departments/departments.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/header/components/departments/departments.component.ts ***!
  \********************************************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_header_departments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../data/header-departments */ "./src/data/header-departments.ts");
/* harmony import */ var _shared_services_departments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/departments.service */ "./src/app/shared/services/departments.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var DepartmentsComponent = /** @class */ (function () {
    function DepartmentsComponent(platformId, renderer, el, service) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.el = el;
        this.service = service;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items = _data_header_departments__WEBPACK_IMPORTED_MODULE_4__["departments"];
        this.isOpen = false;
        this.fixed = false;
    }
    Object.defineProperty(DepartmentsComponent.prototype, "element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    DepartmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var root = this.element.querySelector('.departments');
        var content = this.element.querySelector('.departments__links-wrapper');
        this.service.areaElement$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (areaElement) {
            if (areaElement) {
                _this.fixed = true;
                _this.isOpen = true;
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(_this.platformId)) {
                    var areaRect = areaElement.getBoundingClientRect();
                    var areaBottom = areaRect.top + areaRect.height + window.scrollY;
                    root.classList.remove('departments--transition');
                    root.classList.add('departments--fixed', 'departments--opened');
                    var height = areaBottom - (content.getBoundingClientRect().top + window.scrollY);
                    content.style.height = height + "px";
                    content.getBoundingClientRect(); // force reflow
                }
                else {
                    _this.renderer.addClass(root, 'departments--fixed');
                    _this.renderer.addClass(root, 'departments--opened');
                }
            }
            else {
                _this.fixed = false;
                _this.isOpen = false;
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(_this.platformId)) {
                    root.classList.remove('departments--opened', 'departments--fixed');
                    content.style.height = '';
                }
                else {
                    _this.renderer.removeClass(root, 'departments--fixed');
                    _this.renderer.removeClass(root, 'departments--opened');
                }
            }
        });
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (event) {
                if (event.target instanceof HTMLElement && !_this.element.contains(event.target)) {
                    _this.close();
                }
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(content, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(function (event) {
                if (event.propertyName === 'height') {
                    root.classList.remove('departments--transition');
                }
            });
        }
    };
    DepartmentsComponent.prototype.toggle = function () {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DepartmentsComponent.prototype.open = function () {
        this.isOpen = true;
        var root = this.element.querySelector('.departments');
        var content = root.querySelector('.departments__links-wrapper');
        var startHeight = content.getBoundingClientRect().height;
        root.classList.add('departments--transition', 'departments--opened');
        var endHeight = content.getBoundingClientRect().height;
        content.style.height = startHeight + 'px';
        content.getBoundingClientRect(); // force reflow
        content.style.height = endHeight + 'px';
    };
    DepartmentsComponent.prototype.close = function () {
        if (this.fixed || !this.isOpen) {
            return;
        }
        this.isOpen = false;
        var root = this.element.querySelector('.departments');
        var content = root.querySelector('.departments__links-wrapper');
        var startHeight = content.getBoundingClientRect().height;
        content.style.height = startHeight + 'px';
        root.classList.add('departments--transition');
        root.classList.remove('departments--opened');
        content.getBoundingClientRect(); // force reflow
        content.style.height = '';
    };
    DepartmentsComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _shared_services_departments_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentsService"] }
    ]; };
    DepartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-departments',
            template: __webpack_require__(/*! raw-loader!./departments.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/departments/departments.component.html"),
            styles: [__webpack_require__(/*! ./departments.component.scss */ "./src/app/modules/header/components/departments/departments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _shared_services_departments_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentsService"]])
    ], DepartmentsComponent);
    return DepartmentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/components/dropcart/dropcart.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/header/components/dropcart/dropcart.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvZHJvcGNhcnQvZHJvcGNhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/header/components/dropcart/dropcart.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/header/components/dropcart/dropcart.component.ts ***!
  \**************************************************************************/
/*! exports provided: DropcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropcartComponent", function() { return DropcartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");




var DropcartComponent = /** @class */ (function () {
    function DropcartComponent(cart, root) {
        this.cart = cart;
        this.root = root;
        this.removedItems = [];
    }
    DropcartComponent.prototype.remove = function (item) {
        var _this = this;
        if (this.removedItems.includes(item)) {
            return;
        }
        this.removedItems.push(item);
        this.cart.remove(item).subscribe({ complete: function () { return _this.removedItems = _this.removedItems.filter(function (eachItem) { return eachItem !== item; }); } });
    };
    DropcartComponent.ctorParameters = function () { return [
        { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
        { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"] }
    ]; };
    DropcartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-dropcart',
            template: __webpack_require__(/*! raw-loader!./dropcart.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/dropcart/dropcart.component.html"),
            styles: [__webpack_require__(/*! ./dropcart.component.scss */ "./src/app/modules/header/components/dropcart/dropcart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _shared_services_root_service__WEBPACK_IMPORTED_MODULE_3__["RootService"]])
    ], DropcartComponent);
    return DropcartComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/components/links/links.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/header/components/links/links.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/header/components/links/links.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/header/components/links/links.component.ts ***!
  \********************************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_header_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../data/header-navigation */ "./src/data/header-navigation.ts");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");




var LinksComponent = /** @class */ (function () {
    function LinksComponent(direction) {
        this.direction = direction;
        this.items = _data_header_navigation__WEBPACK_IMPORTED_MODULE_2__["navigation"];
    }
    LinksComponent.prototype.mouseenter = function (event) {
        if (!(event.target instanceof HTMLElement)) {
            return;
        }
        var element = event.target;
        var megamenu = element.querySelector('.nav-links__megamenu');
        if (!megamenu) {
            return;
        }
        var container = megamenu.offsetParent;
        var containerWidth = container.getBoundingClientRect().width;
        var megamenuWidth = megamenu.getBoundingClientRect().width;
        if (this.direction.isRTL()) {
            var itemPosition = containerWidth - (element.offsetLeft + element.offsetWidth);
            var megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));
            megamenu.style.right = megamenuPosition + 'px';
        }
        else {
            var itemPosition = element.offsetLeft;
            var megamenuPosition = Math.round(Math.min(itemPosition, containerWidth - megamenuWidth));
            megamenu.style.left = megamenuPosition + 'px';
        }
    };
    LinksComponent.ctorParameters = function () { return [
        { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"] }
    ]; };
    LinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-links',
            template: __webpack_require__(/*! raw-loader!./links.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.scss */ "./src/app/modules/header/components/links/links.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"]])
    ], LinksComponent);
    return LinksComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/components/megamenu/megamenu.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/header/components/megamenu/megamenu.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvbWVnYW1lbnUvbWVnYW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/header/components/megamenu/megamenu.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/header/components/megamenu/megamenu.component.ts ***!
  \**************************************************************************/
/*! exports provided: MegamenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MegamenuComponent", function() { return MegamenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MegamenuComponent = /** @class */ (function () {
    function MegamenuComponent() {
        this.departments = false;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MegamenuComponent.prototype, "menu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MegamenuComponent.prototype, "departments", void 0);
    MegamenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-megamenu',
            template: __webpack_require__(/*! raw-loader!./megamenu.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/megamenu/megamenu.component.html"),
            styles: [__webpack_require__(/*! ./megamenu.component.scss */ "./src/app/modules/header/components/megamenu/megamenu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MegamenuComponent);
    return MegamenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/components/menu/menu.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/header/components/menu/menu.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/header/components/menu/menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/header/components/menu/menu.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.layout = 'classic';
        this.items = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuComponent.prototype, "layout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MenuComponent.prototype, "items", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/modules/header/components/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/components/nav/nav.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/header/components/nav/nav.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9oZWFkZXIvY29tcG9uZW50cy9uYXYvRTpcXGFuZ3VsYXJcXGVuaWxraGV0L3NyY1xcYXBwXFxtb2R1bGVzXFxoZWFkZXJcXGNvbXBvbmVudHNcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hlYWRlci9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hlYWRlci9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/header/components/nav/nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/header/components/nav/nav.component.ts ***!
  \****************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");





var NavComponent = /** @class */ (function () {
    function NavComponent(root, cart, wishlist) {
        this.root = root;
        this.cart = cart;
        this.wishlist = wishlist;
        this.departments = true;
        this.logo = false;
        this.search = false;
    }
    NavComponent.ctorParameters = function () { return [
        { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"] },
        { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
        { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavComponent.prototype, "departments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavComponent.prototype, "logo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavComponent.prototype, "search", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/modules/header/components/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_4__["RootService"],
            _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/components/search/search.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/header/components/search/search.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/header/components/search/search.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/header/components/search/search.component.ts ***!
  \**********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/modules/header/components/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/components/topbar/topbar.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/header/components/topbar/topbar.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/header/components/topbar/topbar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/header/components/topbar/topbar.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/currency.service */ "./src/app/shared/services/currency.service.ts");



var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(currencyService) {
        this.currencyService = currencyService;
        // languages = [
        //     {name: 'English', image: 'language-1'},
        //     {name: 'French',  image: 'language-2'},
        //     {name: 'German',  image: 'language-3'},
        //     {name: 'Russian', image: 'language-4'},
        //     {name: 'Italian', image: 'language-5'}
        // ];
        this.languages = [
            { name: 'Bangali', image: 'language-1' },
            { name: 'English', image: 'language-2' }
        ];
        // currencies = [
        //     {name: '€ Euro',           url: '', code: 'EUR', symbol: '€'},
        //     {name: '£ Pound Sterling', url: '', code: 'GBP', symbol: '£'},
        //     {name: '$ US Dollar',      url: '', code: 'USD', symbol: '$'},
        //     {name: '₽ Russian Ruble',  url: '', code: 'RUB', symbol: '₽'}
        // ];
        this.currencies = [
            { name: '৳ BD Taka', url: '', code: 'BDT', symbol: '৳' },
            { name: '$ US Dollar', url: '', code: 'USD', symbol: '$' }
        ];
    }
    TopbarComponent.prototype.setCurrency = function (currency) {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    };
    TopbarComponent.ctorParameters = function () { return [
        { type: _shared_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"] }
    ]; };
    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-topbar',
            template: __webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/header/components/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/modules/header/components/topbar/topbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_currency_service__WEBPACK_IMPORTED_MODULE_2__["CurrencyService"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/header/header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/store.service */ "./src/app/shared/services/store.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store) {
        this.store = store;
        this.layout = 'classic';
    }
    HeaderComponent.ctorParameters = function () { return [
        { type: _shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "layout", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/header.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/departments/departments.component */ "./src/app/modules/header/components/departments/departments.component.ts");
/* harmony import */ var _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dropcart/dropcart.component */ "./src/app/modules/header/components/dropcart/dropcart.component.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.component */ "./src/app/modules/header/header.component.ts");
/* harmony import */ var _components_links_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/links/links.component */ "./src/app/modules/header/components/links/links.component.ts");
/* harmony import */ var _components_megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/megamenu/megamenu.component */ "./src/app/modules/header/components/megamenu/megamenu.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/modules/header/components/menu/menu.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/modules/header/components/nav/nav.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/modules/header/components/search/search.component.ts");
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/topbar/topbar.component */ "./src/app/modules/header/components/topbar/topbar.component.ts");


// modules (angular)


// modules

// components









var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // components
                _components_departments_departments_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentsComponent"],
                _components_dropcart_dropcart_component__WEBPACK_IMPORTED_MODULE_6__["DropcartComponent"],
                _header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_links_links_component__WEBPACK_IMPORTED_MODULE_8__["LinksComponent"],
                _components_megamenu_megamenu_component__WEBPACK_IMPORTED_MODULE_9__["MegamenuComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_13__["TopbarComponent"],
            ],
            imports: [
                // modules (angular)
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                // modules
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            exports: [
                // components
                _header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-header/mobile-header.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-header/mobile-header.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW9iaWxlL2NvbXBvbmVudHMvbW9iaWxlLWhlYWRlci9tb2JpbGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-header/mobile-header.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-header/mobile-header.component.ts ***!
  \************************************************************************************/
/*! exports provided: MobileHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileHeaderComponent", function() { return MobileHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/mobile-menu.service */ "./src/app/shared/services/mobile-menu.service.ts");
/* harmony import */ var _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");





var MobileHeaderComponent = /** @class */ (function () {
    function MobileHeaderComponent(menu, wishlist, cart) {
        this.menu = menu;
        this.wishlist = wishlist;
        this.cart = cart;
    }
    MobileHeaderComponent.ctorParameters = function () { return [
        { type: _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_2__["MobileMenuService"] },
        { type: _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] },
        { type: _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
    ]; };
    MobileHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-header',
            template: __webpack_require__(/*! raw-loader!./mobile-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/mobile/components/mobile-header/mobile-header.component.html"),
            styles: [__webpack_require__(/*! ./mobile-header.component.scss */ "./src/app/modules/mobile/components/mobile-header/mobile-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_2__["MobileMenuService"],
            _shared_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"],
            _shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], MobileHeaderComponent);
    return MobileHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-links/mobile-links.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-links/mobile-links.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW9iaWxlL2NvbXBvbmVudHMvbW9iaWxlLWxpbmtzL21vYmlsZS1saW5rcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-links/mobile-links.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-links/mobile-links.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MobileLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileLinksComponent", function() { return MobileLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobileLinksComponent = /** @class */ (function () {
    function MobileLinksComponent() {
        this.links = [];
        this.level = 0;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MobileLinksComponent.prototype.onItemClick = function (item) {
        this.itemClick.emit(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MobileLinksComponent.prototype, "links", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MobileLinksComponent.prototype, "level", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MobileLinksComponent.prototype, "itemClick", void 0);
    MobileLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-links',
            template: __webpack_require__(/*! raw-loader!./mobile-links.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/mobile/components/mobile-links/mobile-links.component.html"),
            styles: [__webpack_require__(/*! ./mobile-links.component.scss */ "./src/app/modules/mobile/components/mobile-links/mobile-links.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileLinksComponent);
    return MobileLinksComponent;
}());



/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW9iaWxlL2NvbXBvbmVudHMvbW9iaWxlLW1lbnUvbW9iaWxlLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/mobile-menu.service */ "./src/app/shared/services/mobile-menu.service.ts");
/* harmony import */ var _data_mobile_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../data/mobile-menu */ "./src/data/mobile-menu.ts");






var MobileMenuComponent = /** @class */ (function () {
    function MobileMenuComponent(mobilemenu) {
        this.mobilemenu = mobilemenu;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isOpen = false;
        this.links = _data_mobile_menu__WEBPACK_IMPORTED_MODULE_5__["mobileMenu"];
    }
    MobileMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mobilemenu.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(function (isOpen) { return _this.isOpen = isOpen; });
    };
    MobileMenuComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    MobileMenuComponent.prototype.onItemClick = function (event) {
        if (event.type === 'link') {
            this.mobilemenu.close();
        }
        // if (event.data && event.data.language) {
        //     console.log(event.data.language); // change language
        // }
    };
    MobileMenuComponent.ctorParameters = function () { return [
        { type: _shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_4__["MobileMenuService"] }
    ]; };
    MobileMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-menu',
            template: __webpack_require__(/*! raw-loader!./mobile-menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.html"),
            styles: [__webpack_require__(/*! ./mobile-menu.component.scss */ "./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_mobile_menu_service__WEBPACK_IMPORTED_MODULE_4__["MobileMenuService"]])
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/mobile/mobile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/mobile/mobile.module.ts ***!
  \*************************************************/
/*! exports provided: MobileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileModule", function() { return MobileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mobile-header/mobile-header.component */ "./src/app/modules/mobile/components/mobile-header/mobile-header.component.ts");
/* harmony import */ var _components_mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mobile-links/mobile-links.component */ "./src/app/modules/mobile/components/mobile-links/mobile-links.component.ts");
/* harmony import */ var _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.component */ "./src/app/modules/mobile/components/mobile-menu/mobile-menu.component.ts");


// modules (angular)


// modules

// components



var MobileModule = /** @class */ (function () {
    function MobileModule() {
    }
    MobileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // components
                _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderComponent"],
                _components_mobile_links_mobile_links_component__WEBPACK_IMPORTED_MODULE_6__["MobileLinksComponent"],
                _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__["MobileMenuComponent"]
            ],
            imports: [
                // modules (angular)
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                // modules
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            exports: [
                // components
                _components_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_5__["MobileHeaderComponent"],
                _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__["MobileMenuComponent"]
            ]
        })
    ], MobileModule);
    return MobileModule;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtYWJvdXR1cy93aWRnZXQtYWJvdXR1cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.ts ***!
  \****************************************************************************/
/*! exports provided: WidgetAboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetAboutusComponent", function() { return WidgetAboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../data/theme */ "./src/data/theme.ts");



var WidgetAboutusComponent = /** @class */ (function () {
    function WidgetAboutusComponent() {
        this.theme = _data_theme__WEBPACK_IMPORTED_MODULE_2__["theme"];
    }
    WidgetAboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-aboutus',
            template: __webpack_require__(/*! raw-loader!./widget-aboutus.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.html"),
            styles: [__webpack_require__(/*! ./widget-aboutus.component.scss */ "./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetAboutusComponent);
    return WidgetAboutusComponent;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widget-categories/widget-categories.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-categories/widget-categories.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtY2F0ZWdvcmllcy93aWRnZXQtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/widgets/widget-categories/widget-categories.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-categories/widget-categories.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WidgetCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetCategoriesComponent", function() { return WidgetCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetCategoriesComponent = /** @class */ (function () {
    function WidgetCategoriesComponent() {
        this.location = 'blog';
        this.categories = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetCategoriesComponent.prototype, "location", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WidgetCategoriesComponent.prototype, "categories", void 0);
    WidgetCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-categories',
            template: __webpack_require__(/*! raw-loader!./widget-categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-categories/widget-categories.component.html"),
            styles: [__webpack_require__(/*! ./widget-categories.component.scss */ "./src/app/modules/widgets/widget-categories/widget-categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetCategoriesComponent);
    return WidgetCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widget-comments/widget-comments.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-comments/widget-comments.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtY29tbWVudHMvd2lkZ2V0LWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/widgets/widget-comments/widget-comments.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-comments/widget-comments.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetCommentsComponent", function() { return WidgetCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetCommentsComponent = /** @class */ (function () {
    function WidgetCommentsComponent() {
        this.comments = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WidgetCommentsComponent.prototype, "comments", void 0);
    WidgetCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-comments',
            template: __webpack_require__(/*! raw-loader!./widget-comments.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-comments/widget-comments.component.html"),
            styles: [__webpack_require__(/*! ./widget-comments.component.scss */ "./src/app/modules/widgets/widget-comments/widget-comments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetCommentsComponent);
    return WidgetCommentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widget-filters/widget-filters.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-filters/widget-filters.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtZmlsdGVycy93aWRnZXQtZmlsdGVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/widgets/widget-filters/widget-filters.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-filters/widget-filters.component.ts ***!
  \****************************************************************************/
/*! exports provided: WidgetFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetFiltersComponent", function() { return WidgetFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/direction.service */ "./src/app/shared/services/direction.service.ts");




var WidgetFiltersComponent = /** @class */ (function () {
    function WidgetFiltersComponent(platformId, direction) {
        this.platformId = platformId;
        this.direction = direction;
        this.filters = [];
        this.offcanvas = 'mobile';
        this.isPlatformBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId);
        this.rightToLeft = false;
        this.rightToLeft = this.direction.isRTL();
    }
    WidgetFiltersComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WidgetFiltersComponent.prototype, "filters", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WidgetFiltersComponent.prototype, "offcanvas", void 0);
    WidgetFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-filters',
            template: __webpack_require__(/*! raw-loader!./widget-filters.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-filters/widget-filters.component.html"),
            styles: [__webpack_require__(/*! ./widget-filters.component.scss */ "./src/app/modules/widgets/widget-filters/widget-filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _shared_services_direction_service__WEBPACK_IMPORTED_MODULE_3__["DirectionService"]])
    ], WidgetFiltersComponent);
    return WidgetFiltersComponent;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtbmV3c2xldHRlci93aWRnZXQtbmV3c2xldHRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WidgetNewsletterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetNewsletterComponent", function() { return WidgetNewsletterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetNewsletterComponent = /** @class */ (function () {
    function WidgetNewsletterComponent() {
    }
    WidgetNewsletterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-newsletter',
            template: __webpack_require__(/*! raw-loader!./widget-newsletter.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.html"),
            styles: [__webpack_require__(/*! ./widget-newsletter.component.scss */ "./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetNewsletterComponent);
    return WidgetNewsletterComponent;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widget-posts/widget-posts.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-posts/widget-posts.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtcG9zdHMvd2lkZ2V0LXBvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/widgets/widget-posts/widget-posts.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-posts/widget-posts.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetPostsComponent", function() { return WidgetPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");



var WidgetPostsComponent = /** @class */ (function () {
    function WidgetPostsComponent(root) {
        this.root = root;
        this.posts = [];
    }
    WidgetPostsComponent.prototype.postImage = function (post) {
        return post.image.replace(/^\.jpg$/, '-thumbnail.jpg');
    };
    WidgetPostsComponent.ctorParameters = function () { return [
        { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WidgetPostsComponent.prototype, "posts", void 0);
    WidgetPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-posts',
            template: __webpack_require__(/*! raw-loader!./widget-posts.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-posts/widget-posts.component.html"),
            styles: [__webpack_require__(/*! ./widget-posts.component.scss */ "./src/app/modules/widgets/widget-posts/widget-posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
    ], WidgetPostsComponent);
    return WidgetPostsComponent;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widget-products/widget-products.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-products/widget-products.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtcHJvZHVjdHMvd2lkZ2V0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/widgets/widget-products/widget-products.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-products/widget-products.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetProductsComponent", function() { return WidgetProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/root.service */ "./src/app/shared/services/root.service.ts");



var WidgetProductsComponent = /** @class */ (function () {
    function WidgetProductsComponent(root) {
        this.root = root;
        this.header = '';
        this.products = [];
    }
    WidgetProductsComponent.ctorParameters = function () { return [
        { type: _shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WidgetProductsComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WidgetProductsComponent.prototype, "products", void 0);
    WidgetProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-products',
            template: __webpack_require__(/*! raw-loader!./widget-products.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-products/widget-products.component.html"),
            styles: [__webpack_require__(/*! ./widget-products.component.scss */ "./src/app/modules/widgets/widget-products/widget-products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
    ], WidgetProductsComponent);
    return WidgetProductsComponent;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widget-search/widget-search.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-search/widget-search.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtc2VhcmNoL3dpZGdldC1zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/widgets/widget-search/widget-search.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-search/widget-search.component.ts ***!
  \**************************************************************************/
/*! exports provided: WidgetSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetSearchComponent", function() { return WidgetSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetSearchComponent = /** @class */ (function () {
    function WidgetSearchComponent() {
    }
    WidgetSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-search',
            template: __webpack_require__(/*! raw-loader!./widget-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-search/widget-search.component.html"),
            styles: [__webpack_require__(/*! ./widget-search.component.scss */ "./src/app/modules/widgets/widget-search/widget-search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetSearchComponent);
    return WidgetSearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widget-tags/widget-tags.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/widgets/widget-tags/widget-tags.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2lkZ2V0cy93aWRnZXQtdGFncy93aWRnZXQtdGFncy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/widgets/widget-tags/widget-tags.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/widgets/widget-tags/widget-tags.component.ts ***!
  \**********************************************************************/
/*! exports provided: WidgetTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTagsComponent", function() { return WidgetTagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetTagsComponent = /** @class */ (function () {
    function WidgetTagsComponent() {
    }
    WidgetTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-tags',
            template: __webpack_require__(/*! raw-loader!./widget-tags.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/widgets/widget-tags/widget-tags.component.html"),
            styles: [__webpack_require__(/*! ./widget-tags.component.scss */ "./src/app/modules/widgets/widget-tags/widget-tags.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetTagsComponent);
    return WidgetTagsComponent;
}());



/***/ }),

/***/ "./src/app/modules/widgets/widgets.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/widgets/widgets.module.ts ***!
  \***************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget-aboutus/widget-aboutus.component */ "./src/app/modules/widgets/widget-aboutus/widget-aboutus.component.ts");
/* harmony import */ var _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget-categories/widget-categories.component */ "./src/app/modules/widgets/widget-categories/widget-categories.component.ts");
/* harmony import */ var _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget-comments/widget-comments.component */ "./src/app/modules/widgets/widget-comments/widget-comments.component.ts");
/* harmony import */ var _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget-filters/widget-filters.component */ "./src/app/modules/widgets/widget-filters/widget-filters.component.ts");
/* harmony import */ var _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget-newsletter/widget-newsletter.component */ "./src/app/modules/widgets/widget-newsletter/widget-newsletter.component.ts");
/* harmony import */ var _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widget-posts/widget-posts.component */ "./src/app/modules/widgets/widget-posts/widget-posts.component.ts");
/* harmony import */ var _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget-products/widget-products.component */ "./src/app/modules/widgets/widget-products/widget-products.component.ts");
/* harmony import */ var _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget-search/widget-search.component */ "./src/app/modules/widgets/widget-search/widget-search.component.ts");
/* harmony import */ var _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widget-tags/widget-tags.component */ "./src/app/modules/widgets/widget-tags/widget-tags.component.ts");


// modules (angular)


// modules (third-party)

// modules

// widgets









var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // widgets
                _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_6__["WidgetAboutusComponent"],
                _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_7__["WidgetCategoriesComponent"],
                _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_8__["WidgetCommentsComponent"],
                _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_9__["WidgetFiltersComponent"],
                _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_10__["WidgetNewsletterComponent"],
                _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_11__["WidgetPostsComponent"],
                _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_12__["WidgetProductsComponent"],
                _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_13__["WidgetSearchComponent"],
                _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_14__["WidgetTagsComponent"]
            ],
            imports: [
                // modules (angular)
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                // modules (third-party)
                ng5_slider__WEBPACK_IMPORTED_MODULE_4__["Ng5SliderModule"],
                // modules
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            exports: [
                // widgets
                _widget_aboutus_widget_aboutus_component__WEBPACK_IMPORTED_MODULE_6__["WidgetAboutusComponent"],
                _widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_7__["WidgetCategoriesComponent"],
                _widget_comments_widget_comments_component__WEBPACK_IMPORTED_MODULE_8__["WidgetCommentsComponent"],
                _widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_9__["WidgetFiltersComponent"],
                _widget_newsletter_widget_newsletter_component__WEBPACK_IMPORTED_MODULE_10__["WidgetNewsletterComponent"],
                _widget_posts_widget_posts_component__WEBPACK_IMPORTED_MODULE_11__["WidgetPostsComponent"],
                _widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_12__["WidgetProductsComponent"],
                _widget_search_widget_search_component__WEBPACK_IMPORTED_MODULE_13__["WidgetSearchComponent"],
                _widget_tags_widget_tags_component__WEBPACK_IMPORTED_MODULE_14__["WidgetTagsComponent"]
            ]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());



/***/ }),

/***/ "./src/app/pages/page-home-one/page-home-one.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-home-one/page-home-one.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtaG9tZS1vbmUvcGFnZS1ob21lLW9uZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/page-home-one/page-home-one.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-home-one/page-home-one.component.ts ***!
  \****************************************************************/
/*! exports provided: PageHomeOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeOneComponent", function() { return PageHomeOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/blog-posts */ "./src/data/blog-posts.ts");
/* harmony import */ var _data_shop_brands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/shop-brands */ "./src/data/shop-brands.ts");
/* harmony import */ var _data_shop_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/shop-products */ "./src/data/shop-products.ts");
/* harmony import */ var _data_shop_block_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/shop-block-categories */ "./src/data/shop-block-categories.ts");






var PageHomeOneComponent = /** @class */ (function () {
    function PageHomeOneComponent() {
        var _this = this;
        this.products = _data_shop_products__WEBPACK_IMPORTED_MODULE_4__["products"];
        this.categories = _data_shop_block_categories__WEBPACK_IMPORTED_MODULE_5__["categories"];
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_2__["posts"];
        this.brands = _data_shop_brands__WEBPACK_IMPORTED_MODULE_3__["brands"];
        this.columns = [
            {
                header: 'Top Rated Books',
                products: _data_shop_products__WEBPACK_IMPORTED_MODULE_4__["products"].slice(0, 3)
            },
            {
                header: 'Special Offers',
                products: _data_shop_products__WEBPACK_IMPORTED_MODULE_4__["products"].slice(3, 6)
            },
            {
                header: 'Bestsellers',
                products: _data_shop_products__WEBPACK_IMPORTED_MODULE_4__["products"].slice(6, 9)
            }
        ];
        this.featuredProducts = {
            loading: false,
            products: _data_shop_products__WEBPACK_IMPORTED_MODULE_4__["products"].slice(),
            groups: [
                { name: 'All', current: true },
                { name: 'Best seller', current: false },
                { name: 'Best rated', current: false },
                { name: 'Best deal', current: false }
            ],
            timeout: null,
            groupChange: function (group) {
                // only for demo
                _this.featuredProducts.loading = true;
                clearTimeout(_this.featuredProducts.timeout);
                _this.featuredProducts.timeout = setTimeout(function () {
                    var itemsArray = _this.featuredProducts.products;
                    var newItemsArray = [];
                    while (itemsArray.length > 0) {
                        var randomIndex = Math.floor(Math.random() * itemsArray.length);
                        var randomItem = itemsArray.splice(randomIndex, 1)[0];
                        newItemsArray.push(randomItem);
                    }
                    _this.featuredProducts.products = newItemsArray;
                    _this.featuredProducts.loading = false;
                }, 1000);
            }
        };
        this.newArrivals = {
            loading: false,
            products: _data_shop_products__WEBPACK_IMPORTED_MODULE_4__["products"].slice(),
            groups: [
                { name: 'All', current: true },
                { name: 'Power Tools', current: false },
                { name: 'Hand Tools', current: false },
                { name: 'Plumbing', current: false }
            ],
            timeout: null,
            groupChange: function (group) {
                // only for demo
                _this.newArrivals.loading = true;
                clearTimeout(_this.newArrivals.timeout);
                _this.newArrivals.timeout = setTimeout(function () {
                    var itemsArray = _this.newArrivals.products;
                    var newItemsArray = [];
                    while (itemsArray.length > 0) {
                        var randomIndex = Math.floor(Math.random() * itemsArray.length);
                        var randomItem = itemsArray.splice(randomIndex, 1)[0];
                        newItemsArray.push(randomItem);
                    }
                    _this.newArrivals.products = newItemsArray;
                    _this.newArrivals.loading = false;
                }, 1000);
            }
        };
    }
    PageHomeOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./page-home-one.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/page-home-one/page-home-one.component.html"),
            styles: [__webpack_require__(/*! ./page-home-one.component.scss */ "./src/app/pages/page-home-one/page-home-one.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHomeOneComponent);
    return PageHomeOneComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-home-two/page-home-two.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-home-two/page-home-two.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtaG9tZS10d28vcGFnZS1ob21lLXR3by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/page-home-two/page-home-two.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-home-two/page-home-two.component.ts ***!
  \****************************************************************/
/*! exports provided: PageHomeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeTwoComponent", function() { return PageHomeTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_shop_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/shop-products */ "./src/data/shop-products.ts");
/* harmony import */ var _data_shop_block_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/shop-block-categories */ "./src/data/shop-block-categories.ts");
/* harmony import */ var _data_blog_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/blog-posts */ "./src/data/blog-posts.ts");
/* harmony import */ var _data_shop_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/shop-brands */ "./src/data/shop-brands.ts");






var PageHomeTwoComponent = /** @class */ (function () {
    function PageHomeTwoComponent() {
        var _this = this;
        this.products = _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"];
        this.categories = _data_shop_block_categories__WEBPACK_IMPORTED_MODULE_3__["categories"];
        this.posts = _data_blog_posts__WEBPACK_IMPORTED_MODULE_4__["posts"];
        this.brands = _data_shop_brands__WEBPACK_IMPORTED_MODULE_5__["brands"];
        this.columns = [
            {
                header: 'Top Rated Products',
                products: _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"].slice(0, 3)
            },
            {
                header: 'Special Offers',
                products: _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"].slice(3, 6)
            },
            {
                header: 'Bestsellers',
                products: _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"].slice(6, 9)
            }
        ];
        this.featuredProducts = {
            loading: false,
            products: _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"].slice(),
            groups: [
                { name: 'All', current: true },
                { name: 'Power Tools', current: false },
                { name: 'Hand Tools', current: false },
                { name: 'Plumbing', current: false }
            ],
            timeout: null,
            groupChange: function (group) {
                // only for demo
                _this.featuredProducts.loading = true;
                clearTimeout(_this.featuredProducts.timeout);
                _this.featuredProducts.timeout = setTimeout(function () {
                    var itemsArray = _this.featuredProducts.products;
                    var newItemsArray = [];
                    while (itemsArray.length > 0) {
                        var randomIndex = Math.floor(Math.random() * itemsArray.length);
                        var randomItem = itemsArray.splice(randomIndex, 1)[0];
                        newItemsArray.push(randomItem);
                    }
                    _this.featuredProducts.products = newItemsArray;
                    _this.featuredProducts.loading = false;
                }, 1000);
            }
        };
        this.newArrivals = {
            loading: false,
            products: _data_shop_products__WEBPACK_IMPORTED_MODULE_2__["products"].slice(),
            groups: [
                { name: 'All', current: true },
                { name: 'Power Tools', current: false },
                { name: 'Hand Tools', current: false },
                { name: 'Plumbing', current: false }
            ],
            timeout: null,
            groupChange: function (group) {
                // only for demo
                _this.newArrivals.loading = true;
                clearTimeout(_this.newArrivals.timeout);
                _this.newArrivals.timeout = setTimeout(function () {
                    var itemsArray = _this.newArrivals.products;
                    var newItemsArray = [];
                    while (itemsArray.length > 0) {
                        var randomIndex = Math.floor(Math.random() * itemsArray.length);
                        var randomItem = itemsArray.splice(randomIndex, 1)[0];
                        newItemsArray.push(randomItem);
                    }
                    _this.newArrivals.products = newItemsArray;
                    _this.newArrivals.loading = false;
                }, 1000);
            }
        };
    }
    PageHomeTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-home-two',
            template: __webpack_require__(/*! raw-loader!./page-home-two.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/page-home-two/page-home-two.component.html"),
            styles: [__webpack_require__(/*! ./page-home-two.component.scss */ "./src/app/pages/page-home-two/page-home-two.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHomeTwoComponent);
    return PageHomeTwoComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/pages/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvRTpcXGFuZ3VsYXJcXGVuaWxraGV0L3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGFsZXJ0XFxhbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.size = null;
        this.dismissible = false;
        this.type = 'info';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classAlert = true;
    }
    Object.defineProperty(AlertComponent.prototype, "classAlertLg", {
        get: function () { return this.size === 'lg'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "classAlertDismissible", {
        get: function () { return this.dismissible; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "classAlertInfo", {
        get: function () { return this.type === 'info'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "classAlertPrimary", {
        get: function () { return this.type === 'primary'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "classAlertSecondary", {
        get: function () { return this.type === 'secondary'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "classAlertSuccess", {
        get: function () { return this.type === 'success'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "classAlertDanger", {
        get: function () { return this.type === 'danger'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertComponent.prototype, "classAlertWarning", {
        get: function () { return this.type === 'warning'; },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.onClose = function () {
        this.close.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AlertComponent.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlertComponent.prototype, "classAlert", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-lg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent.prototype, "classAlertLg", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-dismissible'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent.prototype, "classAlertDismissible", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-info'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent.prototype, "classAlertInfo", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-primary'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent.prototype, "classAlertPrimary", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-secondary'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent.prototype, "classAlertSecondary", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-success'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent.prototype, "classAlertSuccess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-danger'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent.prototype, "classAlertDanger", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.alert-warning'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent.prototype, "classAlertWarning", null);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/shared/components/alert/alert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/icon/icon.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9FOlxcYW5ndWxhclxcZW5pbGtoZXQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaWNvblxcaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/icon/icon.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/icon/icon.component.ts ***!
  \**********************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconComponent = /** @class */ (function () {
    function IconComponent() {
    }
    Object.defineProperty(IconComponent.prototype, "name", {
        set: function (value) {
            this.id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "size", {
        set: function (value) {
            var result = /^([0-9]+)(?:x([0-9]+))?$/.exec(value);
            if (result) {
                if (result[2]) {
                    this.width = result[1] + 'px';
                    this.height = result[2] + 'px';
                }
                else {
                    this.width = this.height = result[1] + 'px';
                }
            }
            else {
                this.width = this.height = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], IconComponent.prototype, "name", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], IconComponent.prototype, "size", null);
    IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icon',
            template: __webpack_require__(/*! raw-loader!./icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/icon/icon.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./icon.component.scss */ "./src/app/shared/components/icon/icon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/input-number/input-number.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/input-number/input-number.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0LW51bWJlci9pbnB1dC1udW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/input-number/input-number.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/input-number/input-number.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function() { return InputNumberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



function parseNumber(value, def) {
    if (typeof value === 'string') {
        value = parseFloat(value);
    }
    else if (typeof value !== 'number') {
        value = def;
    }
    return isNaN(value) ? def : value;
}
var InputNumberComponent = /** @class */ (function () {
    function InputNumberComponent() {
        this.options = {
            step: 1,
            min: null,
            max: null,
            disabled: false,
            readonly: false
        };
        this.class = true;
        this.size = null;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    InputNumberComponent_1 = InputNumberComponent;
    Object.defineProperty(InputNumberComponent.prototype, "step", {
        set: function (value) {
            this.options.step = parseNumber(value, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputNumberComponent.prototype, "min", {
        set: function (value) {
            this.options.min = parseNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputNumberComponent.prototype, "max", {
        set: function (value) {
            this.options.max = parseNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputNumberComponent.prototype, "disabled", {
        set: function (value) {
            this.options.disabled = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputNumberComponent.prototype, "readonly", {
        set: function (value) {
            this.options.readonly = !!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputNumberComponent.prototype, "inputElement", {
        get: function () {
            return this.inputElementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputNumberComponent.prototype, "value", {
        get: function () {
            return this.inputElement.value === '' ? '' : parseFloat(this.inputElement.value);
        },
        set: function (value) {
            this.writeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    InputNumberComponent.prototype.add = function () {
        this.change(1);
        this.changeByTimer(1);
    };
    InputNumberComponent.prototype.sub = function () {
        this.change(-1);
        this.changeByTimer(-1);
    };
    InputNumberComponent.prototype.input = function () {
        this.onChange(this.value);
    };
    InputNumberComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    InputNumberComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    InputNumberComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    InputNumberComponent.prototype.writeValue = function (obj) {
        if (typeof obj === 'number') {
            this.inputElement.value = obj.toString();
        }
        else {
            this.inputElement.value = '';
        }
    };
    /**
     * @param direction - one of [-1, 1]
     */
    InputNumberComponent.prototype.change = function (direction) {
        var value = (this.value === '' || isNaN(this.value) ? 0 : this.value) + this.options.step * direction;
        if (this.options.max !== null) {
            value = Math.min(this.options.max, value);
        }
        if (this.options.min !== null) {
            value = Math.max(this.options.min, value);
        }
        if (value !== this.value) {
            this.onChange(value);
            this.value = value;
        }
    };
    /**
     * @param direction - one of [-1, 1]
     */
    InputNumberComponent.prototype.changeByTimer = function (direction) {
        var _this = this;
        var interval;
        var timer = setTimeout(function () {
            interval = setInterval(function () { return _this.change(direction); }, 50);
        }, 300);
        var documentMouseUp = function () {
            clearTimeout(timer);
            clearInterval(interval);
            document.removeEventListener('mouseup', documentMouseUp, false);
        };
        document.addEventListener('mouseup', documentMouseUp, false);
    };
    var InputNumberComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.input-number'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputNumberComponent.prototype, "class", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InputNumberComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], InputNumberComponent.prototype, "step", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], InputNumberComponent.prototype, "min", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], InputNumberComponent.prototype, "max", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], InputNumberComponent.prototype, "disabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], InputNumberComponent.prototype, "readonly", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputElement', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InputNumberComponent.prototype, "inputElementRef", void 0);
    InputNumberComponent = InputNumberComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-number',
            template: __webpack_require__(/*! raw-loader!./input-number.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/input-number/input-number.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return InputNumberComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./input-number.component.scss */ "./src/app/shared/components/input-number/input-number.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputNumberComponent);
    return InputNumberComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loading-bar/loading-bar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/loading-bar/loading-bar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmctYmFyL2xvYWRpbmctYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/loading-bar/loading-bar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/loading-bar/loading-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: LoadingBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingBarComponent", function() { return LoadingBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var LoadingBarComponent = /** @class */ (function () {
    function LoadingBarComponent(router, zone) {
        this.router = router;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(LoadingBarComponent.prototype, "element", {
        get: function () {
            return this.bar.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    LoadingBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.destroy$)).subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                    _this.element.classList.remove('loading-bar--start', 'loading-bar--complete', 'loading-bar--reset');
                    _this.element.getBoundingClientRect(); // force reflow
                    _this.element.classList.add('loading-bar--start');
                }
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                    if (_this.element.classList.contains('loading-bar--start')) {
                        _this.element.classList.remove('loading-bar--start');
                        _this.element.classList.add('loading-bar--complete');
                    }
                }
            });
        });
    };
    LoadingBarComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    LoadingBarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoadingBarComponent.prototype, "bar", void 0);
    LoadingBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading-bar',
            template: __webpack_require__(/*! raw-loader!./loading-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/loading-bar/loading-bar.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./loading-bar.component.scss */ "./src/app/shared/components/loading-bar/loading-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], LoadingBarComponent);
    return LoadingBarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
        this.breadcrumbs = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageHeaderComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PageHeaderComponent.prototype, "breadcrumbs", void 0);
    PageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! raw-loader!./page-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/components/page-header/page-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/pagination/pagination.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/pagination/pagination.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.siblings = 1;
        this.current = 1;
        this.total = 1;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pages = [];
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.calc();
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        this.calc();
    };
    PaginationComponent.prototype.setPage = function (value) {
        if (value < 1 || value > this.total || value === this.current) {
            return;
        }
        this.current = value;
        this.pageChange.emit(this.current);
        this.calc();
    };
    PaginationComponent.prototype.trackByFn = function (index) {
        return index;
    };
    PaginationComponent.prototype.calc = function () {
        var min = Math.max(1, this.current - this.siblings - Math.max(0, this.siblings - this.total + this.current));
        var max = Math.min(this.total, min + this.siblings * 2);
        this.pages = [];
        for (var i = min; i <= max; i++) {
            this.pages.push(i);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "siblings", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "current", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PaginationComponent.prototype, "total", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PaginationComponent.prototype, "pageChange", void 0);
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.scss */ "./src/app/shared/components/pagination/pagination.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/post-card/post-card.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/post-card/post-card.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvc3QtY2FyZC9wb3N0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/post-card/post-card.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/post-card/post-card.component.ts ***!
  \********************************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/root.service */ "./src/app/shared/services/root.service.ts");



var PostCardComponent = /** @class */ (function () {
    function PostCardComponent(root) {
        this.root = root;
        this.layout = null;
    }
    PostCardComponent.ctorParameters = function () { return [
        { type: _services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostCardComponent.prototype, "post", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PostCardComponent.prototype, "layout", void 0);
    PostCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-card',
            template: __webpack_require__(/*! raw-loader!./post-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/post-card/post-card.component.html"),
            styles: [__webpack_require__(/*! ./post-card.component.scss */ "./src/app/shared/components/post-card/post-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_root_service__WEBPACK_IMPORTED_MODULE_2__["RootService"]])
    ], PostCardComponent);
    return PostCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _services_compare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/compare.service */ "./src/app/shared/services/compare.service.ts");
/* harmony import */ var _services_quickview_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/quickview.service */ "./src/app/shared/services/quickview.service.ts");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/root.service */ "./src/app/shared/services/root.service.ts");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/currency.service */ "./src/app/shared/services/currency.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");










var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cd, root, cart, wishlist, compare, quickview, currency) {
        this.cd = cd;
        this.root = root;
        this.cart = cart;
        this.wishlist = wishlist;
        this.compare = compare;
        this.quickview = quickview;
        this.currency = currency;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.layout = null;
        this.addingToCart = false;
        this.addingToWishlist = false;
        this.addingToCompare = false;
        this.showingQuickview = false;
    }
    ProductCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currency.changes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$)).subscribe(function () {
            _this.cd.markForCheck();
        });
    };
    ProductCardComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    ProductCardComponent.prototype.addToCart = function () {
        var _this = this;
        if (this.addingToCart) {
            return;
        }
        this.addingToCart = true;
        this.cart.add(this.product, 1).subscribe({
            complete: function () {
                _this.addingToCart = false;
                _this.cd.markForCheck();
            }
        });
    };
    ProductCardComponent.prototype.addToWishlist = function () {
        var _this = this;
        if (this.addingToWishlist) {
            return;
        }
        this.addingToWishlist = true;
        this.wishlist.add(this.product).subscribe({
            complete: function () {
                _this.addingToWishlist = false;
                _this.cd.markForCheck();
            }
        });
    };
    ProductCardComponent.prototype.addToCompare = function () {
        var _this = this;
        if (this.addingToCompare) {
            return;
        }
        this.addingToCompare = true;
        this.compare.add(this.product).subscribe({
            complete: function () {
                _this.addingToCompare = false;
                _this.cd.markForCheck();
            }
        });
    };
    ProductCardComponent.prototype.showQuickview = function () {
        var _this = this;
        if (this.showingQuickview) {
            return;
        }
        this.showingQuickview = true;
        this.quickview.show(this.product).subscribe({
            complete: function () {
                _this.showingQuickview = false;
                _this.cd.markForCheck();
            }
        });
    };
    ProductCardComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
        { type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"] },
        { type: _services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"] },
        { type: _services_quickview_service__WEBPACK_IMPORTED_MODULE_5__["QuickviewService"] },
        { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_7__["CurrencyService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProductCardComponent.prototype, "layout", void 0);
    ProductCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/product-card/product-card.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./product-card.component.scss */ "./src/app/shared/components/product-card/product-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_root_service__WEBPACK_IMPORTED_MODULE_6__["RootService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"],
            _services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"],
            _services_quickview_service__WEBPACK_IMPORTED_MODULE_5__["QuickviewService"],
            _services_currency_service__WEBPACK_IMPORTED_MODULE_7__["CurrencyService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product/product.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/product/product.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/product/product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/product/product.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/wishlist.service */ "./src/app/shared/services/wishlist.service.ts");
/* harmony import */ var _services_compare_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/compare.service */ "./src/app/shared/services/compare.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/photo-swipe.service */ "./src/app/shared/services/photo-swipe.service.ts");
/* harmony import */ var _services_direction_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/direction.service */ "./src/app/shared/services/direction.service.ts");











var ProductComponent = /** @class */ (function () {
    function ProductComponent(platformId, cart, wishlist, compare, photoSwipe, direction, modalService) {
        this.platformId = platformId;
        this.cart = cart;
        this.wishlist = wishlist;
        this.compare = compare;
        this.photoSwipe = photoSwipe;
        this.direction = direction;
        this.modalService = modalService;
        this.dataLayout = 'standard';
        this.showGallery = true;
        this.images = [];
        this.carouselOptions = {
            dots: false,
            autoplay: false,
            responsive: {
                0: { items: 1 }
            },
            rtl: this.direction.isRTL()
        };
        this.thumbnailsCarouselOptions = {
            dots: false,
            autoplay: false,
            margin: 10,
            items: 5,
            responsive: {
                480: { items: 5 },
                380: { items: 4 },
                0: { items: 3 }
            },
            rtl: this.direction.isRTL()
        };
        this.quantity = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](1);
        this.addingToCart = false;
        this.addingToWishlist = false;
        this.addingToCompare = false;
    }
    // openModal(template: TemplateRef<any>) {
    //     this.modalRef = this.modalService.show(template);
    // }
    ProductComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
    };
    Object.defineProperty(ProductComponent.prototype, "layout", {
        get: function () {
            return this.dataLayout;
        },
        set: function (value) {
            var _this = this;
            this.dataLayout = value;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
                // this dirty hack is needed to re-initialize the gallery after changing the layout
                clearTimeout(this.showGalleryTimeout);
                this.showGallery = false;
                this.showGalleryTimeout = window.setTimeout(function () {
                    _this.showGallery = true;
                }, 0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductComponent.prototype, "product", {
        get: function () {
            return this.dataProduct;
        },
        set: function (value) {
            this.dataProduct = value;
            this.images = value ? this.dataProduct.images.map(function (url, index) {
                return {
                    id: index.toString(),
                    url: url,
                    active: index === 0
                };
            }) : [];
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent.prototype.ngOnInit = function () {
        if (this.layout !== 'quickview' && Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(this.platformId)) {
            this.photoSwipe.load().subscribe();
        }
    };
    ProductComponent.prototype.setActiveImage = function (image) {
        this.images.forEach(function (eachImage) { return eachImage.active = eachImage === image; });
    };
    ProductComponent.prototype.featuredCarouselTranslated = function (event) {
        if (event.slides.length) {
            var activeImageId_1 = event.slides[0].id;
            this.images.forEach(function (eachImage) { return eachImage.active = eachImage.id === activeImageId_1; });
            if (!this.thumbnailsCarousel.slidesData.find(function (slide) { return slide.id === event.slides[0].id && slide.isActive; })) {
                this.thumbnailsCarousel.to(event.slides[0].id);
            }
        }
    };
    ProductComponent.prototype.addToCart = function () {
        var _this = this;
        if (!this.addingToCart && this.product && this.quantity.value > 0) {
            this.addingToCart = true;
            this.cart.add(this.product, this.quantity.value).subscribe({ complete: function () { return _this.addingToCart = false; } });
        }
    };
    ProductComponent.prototype.addToWishlist = function () {
        var _this = this;
        if (!this.addingToWishlist && this.product) {
            this.addingToWishlist = true;
            this.wishlist.add(this.product).subscribe({ complete: function () { return _this.addingToWishlist = false; } });
        }
    };
    ProductComponent.prototype.addToCompare = function () {
        var _this = this;
        if (!this.addingToCompare && this.product) {
            this.addingToCompare = true;
            this.compare.add(this.product).subscribe({ complete: function () { return _this.addingToCompare = false; } });
        }
    };
    ProductComponent.prototype.openPhotoSwipe = function (event, image) {
        var _this = this;
        if (this.layout !== 'quickview') {
            event.preventDefault();
            var images = this.images.map(function (eachImage) {
                return {
                    src: eachImage.url,
                    msrc: eachImage.url,
                    w: 700,
                    h: 700
                };
            });
            var options = {
                getThumbBoundsFn: function (index) {
                    var imageElement = _this.imageElements.toArray()[index].nativeElement;
                    var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                    var rect = imageElement.getBoundingClientRect();
                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                },
                index: this.images.indexOf(image),
                bgOpacity: .9,
                history: false
            };
            this.photoSwipe.open(images, options).subscribe(function (galleryRef) {
                galleryRef.listen('beforeChange', function () {
                    _this.featuredCarousel.to(_this.images[galleryRef.getCurrentIndex()].id);
                });
            });
        }
    };
    ProductComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
        { type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"] },
        { type: _services_compare_service__WEBPACK_IMPORTED_MODULE_6__["CompareService"] },
        { type: _services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_9__["PhotoSwipeService"] },
        { type: _services_direction_service__WEBPACK_IMPORTED_MODULE_10__["DirectionService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('featuredCarousel', { read: ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
    ], ProductComponent.prototype, "featuredCarousel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('thumbnailsCarousel', { read: ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"])
    ], ProductComponent.prototype, "thumbnailsCarousel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('imageElement', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ProductComponent.prototype, "imageElements", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ProductComponent.prototype, "layout", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProductComponent.prototype, "product", null);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/shared/components/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"],
            _services_compare_service__WEBPACK_IMPORTED_MODULE_6__["CompareService"],
            _services_photo_swipe_service__WEBPACK_IMPORTED_MODULE_9__["PhotoSwipeService"],
            _services_direction_service__WEBPACK_IMPORTED_MODULE_10__["DirectionService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/quickview/quickview.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/quickview/quickview.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3F1aWNrdmlldy9xdWlja3ZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/quickview/quickview.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/quickview/quickview.component.ts ***!
  \********************************************************************/
/*! exports provided: QuickviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewComponent", function() { return QuickviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_quickview_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quickview.service */ "./src/app/shared/services/quickview.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var QuickviewComponent = /** @class */ (function () {
    function QuickviewComponent(quickview, modalService) {
        this.quickview = quickview;
        this.modalService = modalService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    QuickviewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.quickview.show$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(function (product) {
            if (_this.modalRef) {
                _this.modalRef.hide();
            }
            _this.product = product;
            _this.modalRef = _this.modalService.show(_this.template, { class: 'modal-dialog-centered modal-xl' });
        });
    };
    QuickviewComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    QuickviewComponent.ctorParameters = function () { return [
        { type: _services_quickview_service__WEBPACK_IMPORTED_MODULE_2__["QuickviewService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], QuickviewComponent.prototype, "template", void 0);
    QuickviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quickview',
            template: __webpack_require__(/*! raw-loader!./quickview.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/quickview/quickview.component.html"),
            styles: [__webpack_require__(/*! ./quickview.component.scss */ "./src/app/shared/components/quickview/quickview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_quickview_service__WEBPACK_IMPORTED_MODULE_2__["QuickviewService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], QuickviewComponent);
    return QuickviewComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/rating/rating.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/rating/rating.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/rating/rating.component.ts ***!
  \**************************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.value = 0;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RatingComponent.prototype, "value", void 0);
    RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/shared/components/rating/rating.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/click.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/directives/click.directive.ts ***!
  \******************************************************/
/*! exports provided: ClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickDirective", function() { return ClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * This directive helps to solve issue related to "iOS hover emulation" when first click
 */
var ClickDirective = /** @class */ (function () {
    function ClickDirective(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(ClickDirective.prototype, "element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        var clicked = false;
        var identifier = null;
        var x = null;
        var y = null;
        this.zone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.element, 'touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this.destroy$)).subscribe(function (event) {
                if (event.touches.length !== 1) {
                    return;
                }
                var touch = event.changedTouches[0];
                clicked = true;
                identifier = touch.identifier;
                x = touch.clientX;
                y = touch.clientY;
                setTimeout(function () {
                    clicked = false;
                    identifier = x = y = null;
                }, 300);
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.element, 'touchend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this.destroy$)).subscribe(function (event) {
                if (clicked && event.changedTouches.length === 1 && event.changedTouches[0].identifier === identifier) {
                    var touch = event.changedTouches[0];
                    var distance = Math.abs(Math.sqrt(Math.pow(x - touch.clientX, 2) +
                        Math.pow(y - touch.clientY, 2)));
                    if (distance < 15) {
                        event.preventDefault();
                        _this.element.click();
                    }
                }
                clicked = false;
                identifier = x = y = null;
            });
        });
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    ClickDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appClick]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ClickDirective);
    return ClickDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/collapse.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/collapse.directive.ts ***!
  \*********************************************************/
/*! exports provided: CollapseContentDirective, CollapseItemDirective, CollapseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseContentDirective", function() { return CollapseContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseItemDirective", function() { return CollapseItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CollapseContentDirective = /** @class */ (function () {
    function CollapseContentDirective(el, zone) {
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(CollapseContentDirective.prototype, "element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CollapseContentDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.element, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this.destroy$)).subscribe(function (event) {
                if (event.propertyName === 'height') {
                    _this.element.style.height = '';
                }
            });
        });
    };
    CollapseContentDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CollapseContentDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CollapseContentDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCollapseContent]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CollapseContentDirective);
    return CollapseContentDirective;
}());

var CollapseItemDirective = /** @class */ (function () {
    function CollapseItemDirective(el) {
        this.el = el;
    }
    Object.defineProperty(CollapseItemDirective.prototype, "class", {
        get: function () {
            return this.appCollapseItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapseItemDirective.prototype, "isOpen", {
        get: function () {
            return this.element.classList.contains(this.class);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapseItemDirective.prototype, "element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CollapseItemDirective.prototype.toggle = function () {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    CollapseItemDirective.prototype.open = function () {
        if (this.content) {
            var startHeight = this.content.element.getBoundingClientRect().height;
            this.element.classList.add(this.class);
            var endHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = startHeight + "px";
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = endHeight + "px";
        }
        else {
            this.element.classList.add(this.class);
        }
    };
    CollapseItemDirective.prototype.close = function () {
        if (this.content) {
            var startHeight = this.content.element.getBoundingClientRect().height;
            this.content.element.style.height = startHeight + "px";
            this.element.classList.remove(this.class);
            this.element.getBoundingClientRect(); // force reflow
            this.content.element.style.height = '';
        }
        else {
            this.element.classList.remove(this.class);
        }
    };
    CollapseItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CollapseItemDirective.prototype, "appCollapseItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(CollapseContentDirective, { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", CollapseContentDirective)
    ], CollapseItemDirective.prototype, "content", void 0);
    CollapseItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCollapseItem]',
            exportAs: 'appCollapseItem'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], CollapseItemDirective);
    return CollapseItemDirective;
}());

var CollapseDirective = /** @class */ (function () {
    function CollapseDirective() {
    }
    CollapseDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCollapse]'
        })
    ], CollapseDirective);
    return CollapseDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/departments-area.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/departments-area.directive.ts ***!
  \*****************************************************************/
/*! exports provided: DepartmentsAreaDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsAreaDirective", function() { return DepartmentsAreaDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_departments_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/departments.service */ "./src/app/shared/services/departments.service.ts");



var DepartmentsAreaDirective = /** @class */ (function () {
    function DepartmentsAreaDirective(el, service) {
        this.el = el;
        this.service = service;
    }
    Object.defineProperty(DepartmentsAreaDirective.prototype, "element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    DepartmentsAreaDirective.prototype.ngOnInit = function () {
        this.service.setAreaElement(this.element);
    };
    DepartmentsAreaDirective.prototype.ngOnDestroy = function () {
        this.service.setAreaElement(null);
    };
    DepartmentsAreaDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _services_departments_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentsService"] }
    ]; };
    DepartmentsAreaDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDepartmentsArea]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_departments_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentsService"]])
    ], DepartmentsAreaDirective);
    return DepartmentsAreaDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropdown.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DropdownDirective = /** @class */ (function () {
    function DropdownDirective(platformId, el, zone) {
        var _this = this;
        this.platformId = platformId;
        this.el = el;
        this.zone = zone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.appDropdown = '';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(function () {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.destroy$)).subscribe(function (event) {
                    if (!el.nativeElement.contains(event.target)) {
                        _this.close();
                    }
                });
            });
        }
    }
    Object.defineProperty(DropdownDirective.prototype, "isOpen", {
        get: function () {
            return this.element.classList.contains(this.appDropdown);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownDirective.prototype, "element", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.toggle = function (force) {
        this.element.classList.toggle(this.appDropdown, force);
    };
    DropdownDirective.prototype.close = function () {
        this.toggle(false);
    };
    DropdownDirective.prototype.open = function () {
        this.toggle(true);
    };
    DropdownDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    DropdownDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropdownDirective.prototype, "appDropdown", void 0);
    DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDropdown]',
            exportAs: 'appDropdown'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/fake-slides.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/fake-slides.directive.ts ***!
  \************************************************************/
/*! exports provided: FakeSlidesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeSlidesDirective", function() { return FakeSlidesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var FakeSlidesDirective = /** @class */ (function () {
    function FakeSlidesDirective(eventManager, el) {
        this.eventManager = eventManager;
        this.el = el;
        this.appFakeSlides = 0;
        this.slides = [];
        this.slidesCount = 0;
    }
    FakeSlidesDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.resizeHandler = this.eventManager.addGlobalEventListener('window', 'resize', function () { return _this.calc(); });
        this.calc();
    };
    FakeSlidesDirective.prototype.calc = function () {
        var newFakeSlidesCount = 0;
        if (this.options) {
            var match = -1;
            var viewport = this.el.nativeElement.querySelector('.owl-carousel').clientWidth;
            var overwrites = this.options.responsive;
            if (overwrites) {
                for (var key in overwrites) {
                    if (overwrites.hasOwnProperty(key)) {
                        if (+key <= viewport && +key > match) {
                            match = Number(key);
                        }
                    }
                }
            }
            if (match >= 0) {
                var items = overwrites[match].items;
                newFakeSlidesCount = Math.max(0, items - this.appFakeSlides);
            }
            else if (this.options.items) {
                newFakeSlidesCount = Math.max(0, this.options.items - this.appFakeSlides);
            }
        }
        if (this.slidesCount !== newFakeSlidesCount) {
            this.slides = [];
            this.slidesCount = newFakeSlidesCount;
            for (var i = 0; i < newFakeSlidesCount; i++) {
                this.slides.push(i);
            }
        }
    };
    FakeSlidesDirective.prototype.ngOnChanges = function (changes) {
        this.calc();
    };
    FakeSlidesDirective.prototype.ngOnDestroy = function () {
        if (this.resizeHandler) {
            this.resizeHandler();
        }
    };
    FakeSlidesDirective.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FakeSlidesDirective.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FakeSlidesDirective.prototype, "appFakeSlides", void 0);
    FakeSlidesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appFakeSlides]',
            exportAs: 'appFakeSlides'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["EventManager"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FakeSlidesDirective);
    return FakeSlidesDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/owl-prevent-click.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/owl-prevent-click.directive.ts ***!
  \******************************************************************/
/*! exports provided: OwlPreventClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwlPreventClickDirective", function() { return OwlPreventClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





/**
 * This directive adds the "owl-prevent-click" class to the .owl-carousel element when dragging.
 * When the class "owl-prevent-click" is applied to an element, a pseudo-element is created and
 * a mouseup event occurs on it, which prevents clicking.
 */
var OwlPreventClickDirective = /** @class */ (function () {
    function OwlPreventClickDirective(platformId, elementRef, zone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.zone = zone;
    }
    Object.defineProperty(OwlPreventClickDirective.prototype, "element", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    OwlPreventClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.zone.runOutsideAngular(function () {
                var children = [].slice.call(_this.element.children);
                var owlCarouseElement = children.find(function (element) { return element.classList.contains('owl-carousel'); });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(owlCarouseElement, 'mousedown').subscribe(function (mouseDownEvent) {
                    var timeout = setTimeout(function () {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    }, 250);
                    var mouseUpEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(mouseUpEvent$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (mouseMoveEvent) { return Math.abs(Math.sqrt(Math.pow(mouseDownEvent.clientX - mouseMoveEvent.clientX, 2) +
                        Math.pow(mouseDownEvent.clientY - mouseMoveEvent.clientY, 2))); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (distance) { return distance > 15; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function () {
                        owlCarouseElement.classList.add('owl-prevent-click');
                    });
                    mouseUpEvent$.subscribe(function () {
                        owlCarouseElement.classList.remove('owl-prevent-click');
                        clearTimeout(timeout);
                    });
                });
            });
        }
    };
    OwlPreventClickDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    OwlPreventClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appOwlPreventClick]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], OwlPreventClickDirective);
    return OwlPreventClickDirective;
}());



/***/ }),

/***/ "./src/app/shared/pipes/currency-format.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/pipes/currency-format.pipe.ts ***!
  \******************************************************/
/*! exports provided: CurrencyFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyFormatPipe", function() { return CurrencyFormatPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/currency.service */ "./src/app/shared/services/currency.service.ts");




var CurrencyFormatPipe = /** @class */ (function () {
    function CurrencyFormatPipe(locale, service) {
        this.locale = locale;
        this.service = service;
        this.currencyPipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"](this.locale);
    }
    CurrencyFormatPipe.prototype.transform = function (value, currencyCode, display, digitsInfo, locale) {
        currencyCode = currencyCode || this.service.options.code;
        display = display || this.service.options.display;
        digitsInfo = digitsInfo || this.service.options.digitsInfo;
        locale = locale || this.service.options.locale;
        return this.currencyPipe.transform(value, currencyCode, display, digitsInfo, locale);
    };
    CurrencyFormatPipe.ctorParameters = function () { return [
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
        { type: _services_currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"] }
    ]; };
    CurrencyFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'currencyFormat',
            pure: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _services_currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"]])
    ], CurrencyFormatPipe);
    return CurrencyFormatPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var CartService = /** @class */ (function () {
    function CartService(platformId) {
        this.platformId = platformId;
        this.data = {
            items: [],
            quantity: 0,
            subtotal: 0,
            totals: [],
            total: 0
        };
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.items);
        this.quantitySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.quantity);
        this.subtotalSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.subtotal);
        this.totalsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.totals);
        this.totalSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.data.total);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items$ = this.itemsSubject$.asObservable();
        this.quantity$ = this.quantitySubject$.asObservable();
        this.subtotal$ = this.subtotalSubject$.asObservable();
        this.totals$ = this.totalsSubject$.asObservable();
        this.total$ = this.totalSubject$.asObservable();
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.load();
            this.calc();
        }
    }
    Object.defineProperty(CartService.prototype, "items", {
        get: function () {
            return this.data.items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartService.prototype, "quantity", {
        get: function () {
            return this.data.quantity;
        },
        enumerable: true,
        configurable: true
    });
    CartService.prototype.add = function (product, quantity, options) {
        var _this = this;
        if (options === void 0) { options = []; }
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            _this.onAddingSubject$.next(product);
            var item = _this.items.find(function (eachItem) {
                if (eachItem.product.id !== product.id || eachItem.options.length !== options.length) {
                    return false;
                }
                if (eachItem.options.length) {
                    var _loop_1 = function (option) {
                        if (!eachItem.options.find(function (itemOption) { return itemOption.name === option.name && itemOption.value === option.value; })) {
                            return { value: false };
                        }
                    };
                    for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                        var option = options_1[_i];
                        var state_1 = _loop_1(option);
                        if (typeof state_1 === "object")
                            return state_1.value;
                    }
                }
                return true;
            });
            if (item) {
                item.quantity += quantity;
            }
            else {
                item = { product: product, quantity: quantity, options: options };
                _this.data.items.push(item);
            }
            _this.save();
            _this.calc();
            return item;
        }));
    };
    CartService.prototype.update = function (updates) {
        var _this = this;
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            updates.forEach(function (update) {
                var item = _this.items.find(function (eachItem) { return eachItem === update.item; });
                if (item) {
                    item.quantity = update.quantity;
                }
            });
            _this.save();
            _this.calc();
        }));
    };
    CartService.prototype.remove = function (item) {
        var _this = this;
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            _this.data.items = _this.data.items.filter(function (eachItem) { return eachItem !== item; });
            _this.save();
            _this.calc();
        }));
    };
    CartService.prototype.calc = function () {
        var quantity = 0;
        var subtotal = 0;
        this.data.items.forEach(function (item) {
            quantity += item.quantity;
            subtotal += item.product.price * item.quantity;
        });
        var totals = [];
        totals.push({
            title: 'Shipping',
            price: 25,
            type: 'shipping'
        });
        totals.push({
            title: 'Tax',
            price: subtotal * 0.20,
            type: 'tax'
        });
        var total = subtotal + totals.reduce(function (acc, eachTotal) { return acc + eachTotal.price; }, 0);
        this.data.quantity = quantity;
        this.data.subtotal = subtotal;
        this.data.totals = totals;
        this.data.total = total;
        this.itemsSubject$.next(this.data.items);
        this.quantitySubject$.next(this.data.quantity);
        this.subtotalSubject$.next(this.data.subtotal);
        this.totalsSubject$.next(this.data.totals);
        this.totalSubject$.next(this.data.total);
    };
    CartService.prototype.save = function () {
        localStorage.setItem('cartItems', JSON.stringify(this.data.items));
    };
    CartService.prototype.load = function () {
        var items = localStorage.getItem('cartItems');
        if (items) {
            this.data.items = JSON.parse(items);
        }
    };
    CartService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/shared/services/compare.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/compare.service.ts ***!
  \****************************************************/
/*! exports provided: CompareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareService", function() { return CompareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var CompareService = /** @class */ (function () {
    function CompareService(platformId) {
        this.platformId = platformId;
        this.data = {
            items: []
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items$ = this.itemsSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$));
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.load();
        }
    }
    CompareService.prototype.add = function (product) {
        var _this = this;
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            _this.onAddingSubject$.next(product);
            var index = _this.data.items.findIndex(function (item) { return item.id === product.id; });
            if (index === -1) {
                _this.data.items.push(product);
                _this.save();
            }
        }));
    };
    CompareService.prototype.remove = function (product) {
        var _this = this;
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            var index = _this.data.items.findIndex(function (item) { return item.id === product.id; });
            if (index !== -1) {
                _this.data.items.splice(index, 1);
                _this.save();
            }
        }));
    };
    CompareService.prototype.save = function () {
        localStorage.setItem('compareItems', JSON.stringify(this.data.items));
        this.itemsSubject$.next(this.data.items);
    };
    CompareService.prototype.load = function () {
        var items = localStorage.getItem('compareItems');
        if (items) {
            this.data.items = JSON.parse(items);
            this.itemsSubject$.next(this.data.items);
        }
    };
    CompareService.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    CompareService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    CompareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CompareService);
    return CompareService;
}());



/***/ }),

/***/ "./src/app/shared/services/currency.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/currency.service.ts ***!
  \*****************************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CurrencyService = /** @class */ (function () {
    function CurrencyService() {
        this.data = {
            options: {}
        };
        this.changesSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changes$ = this.changesSubject$.asObservable();
    }
    Object.defineProperty(CurrencyService.prototype, "options", {
        get: function () {
            return this.data.options;
        },
        set: function (value) {
            this.data.options = value;
            this.changesSubject$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    CurrencyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ }),

/***/ "./src/app/shared/services/departments.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/departments.service.ts ***!
  \********************************************************/
/*! exports provided: DepartmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return DepartmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DepartmentsService = /** @class */ (function () {
    function DepartmentsService() {
        this.areaElementSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.areaElement$ = this.areaElementSubject$.asObservable();
    }
    DepartmentsService.prototype.setAreaElement = function (value) {
        this.areaElementSubject$.next(value);
    };
    DepartmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DepartmentsService);
    return DepartmentsService;
}());



/***/ }),

/***/ "./src/app/shared/services/direction.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/direction.service.ts ***!
  \******************************************************/
/*! exports provided: DirectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionService", function() { return DirectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var DirectionService = /** @class */ (function () {
    function DirectionService(platformId) {
        this.platformId = platformId;
        this.direction = 'ltr';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.direction = getComputedStyle(document.body).direction;
        }
    }
    Object.defineProperty(DirectionService.prototype, "value", {
        get: function () {
            return this.direction;
        },
        set: function (value) {
            this.direction = value;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
                document.dir = this.direction;
            }
        },
        enumerable: true,
        configurable: true
    });
    DirectionService.prototype.isLTR = function () {
        return this.value === 'ltr';
    };
    DirectionService.prototype.isRTL = function () {
        return this.value === 'rtl';
    };
    DirectionService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    DirectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], DirectionService);
    return DirectionService;
}());



/***/ }),

/***/ "./src/app/shared/services/mobile-menu.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/mobile-menu.service.ts ***!
  \********************************************************/
/*! exports provided: MobileMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuService", function() { return MobileMenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var MobileMenuService = /** @class */ (function () {
    function MobileMenuService(platformId) {
        this.platformId = platformId;
        this.openSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isOpen$ = this.openSubject$.asObservable();
    }
    MobileMenuService.prototype.open = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            var bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
            this.openSubject$.next(true);
        }
    };
    MobileMenuService.prototype.close = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
            this.openSubject$.next(false);
        }
    };
    MobileMenuService.prototype.toggle = function () {
        this.openSubject$.next(!this.openSubject$.value);
    };
    MobileMenuService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    MobileMenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], MobileMenuService);
    return MobileMenuService;
}());



/***/ }),

/***/ "./src/app/shared/services/photo-swipe.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/photo-swipe.service.ts ***!
  \********************************************************/
/*! exports provided: PhotoSwipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoSwipeService", function() { return PhotoSwipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.service */ "./src/app/shared/services/resources.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_4__);





var template = "\n<div class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"pswp__bg\"></div>\n    <div class=\"pswp__scroll-wrap\">\n        <div class=\"pswp__container\">\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n            <div class=\"pswp__item\"></div>\n        </div>\n        <div class=\"pswp__ui pswp__ui--hidden\">\n            <div class=\"pswp__top-bar\">\n                <div class=\"pswp__counter\"></div>\n                <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n                <!--<button class=\"pswp__button pswp__button&#45;&#45;share\" title=\"Share\"></button>-->\n                <button class=\"pswp__button pswp__button--fs\" title=\"Toggle fullscreen\"></button>\n                <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n                <div class=\"pswp__preloader\">\n                    <div class=\"pswp__preloader__icn\">\n                      <div class=\"pswp__preloader__cut\">\n                        <div class=\"pswp__preloader__donut\"></div>\n                      </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"pswp__share-modal pswp__share-modal--hidden pswp__single-tap\">\n                <div class=\"pswp__share-tooltip\"></div>\n            </div>\n            <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\"></button>\n            <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\"></button>\n            <div class=\"pswp__caption\">\n                <div class=\"pswp__caption__center\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n";
var PhotoSwipeService = /** @class */ (function () {
    function PhotoSwipeService(zone, resources) {
        this.zone = zone;
        this.resources = resources;
        this.initialized = false;
    }
    PhotoSwipeService.prototype.load = function () {
        return Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_4__["from"])(this.loadLibrary());
    };
    PhotoSwipeService.prototype.open = function (items, options) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.zone.runOutsideAngular(function () {
                _this.loadLibrary().then(function () {
                    if (observer.closed) {
                        return;
                    }
                    if (!_this.initialized) {
                        _this.init();
                    }
                    _this.createGallery(observer, items, options);
                });
            });
        });
    };
    PhotoSwipeService.prototype.ngOnDestroy = function () {
        if (this.initialized) {
            this.element.parentElement.removeChild(this.element);
        }
    };
    PhotoSwipeService.prototype.createGallery = function (observer, items, options) {
        var _this = this;
        var gallery = null;
        gallery = new PhotoSwipe(this.element, PhotoSwipeUI_Default, items, options);
        gallery.listen('destroy', function () { return _this.zone.run(function () {
            gallery = null;
            _this.zone.run(function () { return observer.complete(); });
        }); });
        gallery.init();
        var modelRef = {
            close: function () { return gallery.close(); },
            listen: function (eventName, callbackFn) { return gallery.listen(eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                _this.zone.run(function () { return callbackFn.apply(void 0, args); });
            }); },
            getCurrentIndex: function () { return gallery.getCurrentIndex(); }
        };
        observer.add(function () {
            if (gallery) {
                gallery.destroy();
            }
        });
        this.zone.run(function () { return observer.next(modelRef); });
    };
    PhotoSwipeService.prototype.loadLibrary = function () {
        return this.resources.loadLibrary('photoSwipe');
    };
    PhotoSwipeService.prototype.init = function () {
        this.initialized = true;
        var div = document.createElement('div');
        div.innerHTML = template;
        this.element = div.firstElementChild;
        document.body.appendChild(this.element);
    };
    PhotoSwipeService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"] }
    ]; };
    PhotoSwipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"]])
    ], PhotoSwipeService);
    return PhotoSwipeService;
}());



/***/ }),

/***/ "./src/app/shared/services/quickview.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/quickview.service.ts ***!
  \******************************************************/
/*! exports provided: QuickviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickviewService", function() { return QuickviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var QuickviewService = /** @class */ (function () {
    function QuickviewService() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.show$ = this.showSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$));
    }
    QuickviewService.prototype.show = function (product) {
        var _this = this;
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            _this.showSubject$.next(product);
        }));
    };
    QuickviewService.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    QuickviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuickviewService);
    return QuickviewService;
}());



/***/ }),

/***/ "./src/app/shared/services/resources.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/resources.service.ts ***!
  \******************************************************/
/*! exports provided: ResourcesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesService", function() { return ResourcesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResourcesService = /** @class */ (function () {
    function ResourcesService() {
        this.loaded = {};
        this.libraries = {
            photoSwipe: ResourcesService_1.parallel(this.styleTask('assets/vendor/photoswipe/photoswipe.css'), this.styleTask('assets/vendor/photoswipe/default-skin/default-skin.css'), this.scriptTask('assets/vendor/photoswipe/photoswipe.min.js'), this.scriptTask('assets/vendor/photoswipe/photoswipe-ui-default.min.js'))
        };
    }
    ResourcesService_1 = ResourcesService;
    ResourcesService.series = function () {
        var tasks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tasks[_i] = arguments[_i];
        }
        if (!tasks.length) {
            return function () { return Promise.resolve(); };
        }
        return function () { return tasks.shift()().then(ResourcesService_1.series.apply(ResourcesService_1, tasks)); };
    };
    ResourcesService.parallel = function () {
        var tasks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tasks[_i] = arguments[_i];
        }
        if (!tasks.length) {
            return function () { return Promise.resolve(); };
        }
        return function () { return Promise.all(tasks.map(function (task) { return task(); })).then(function () { }); };
    };
    ResourcesService.prototype.loadScript = function (url) {
        return this.scriptTask(url)();
    };
    ResourcesService.prototype.loadStyle = function (url) {
        return this.styleTask(url)();
    };
    ResourcesService.prototype.loadLibrary = function (library) {
        return this.libraries[library]();
    };
    ResourcesService.prototype.scriptTask = function (url) {
        var _this = this;
        return function () {
            if (!_this.loaded.hasOwnProperty(url)) {
                _this.loaded[url] = new Promise(function (resolve, reject) {
                    var script = document.createElement('script');
                    script.onload = function () { return resolve(); };
                    script.onerror = function () { return reject(new Error('Loading error: ' + url)); };
                    script.src = url;
                    document.head.appendChild(script);
                });
            }
            return _this.loaded[url];
        };
    };
    ResourcesService.prototype.styleTask = function (url) {
        var _this = this;
        return function () {
            if (!_this.loaded.hasOwnProperty(url)) {
                _this.loaded[url] = new Promise(function (resolve, reject) {
                    var link = document.createElement('link');
                    link.onload = function () { return resolve(); };
                    link.onerror = function () { return reject(new Error('Loading error: ' + url)); };
                    link.type = 'text/css';
                    link.rel = 'stylesheet';
                    link.href = url;
                    document.head.appendChild(link);
                });
            }
            return _this.loaded[url];
        };
    };
    var ResourcesService_1;
    ResourcesService = ResourcesService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResourcesService);
    return ResourcesService;
}());



/***/ }),

/***/ "./src/app/shared/services/root.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/root.service.ts ***!
  \*************************************************/
/*! exports provided: RootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootService", function() { return RootService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RootService = /** @class */ (function () {
    function RootService() {
        this.path = '';
    }
    RootService.prototype.product = function (id) {
        return this.path + "/shop/product/" + id;
    };
    RootService.prototype.post = function () {
        return this.path + "/blog/post-classic";
    };
    RootService.prototype.url = function (url) {
        return this.path + url;
    };
    RootService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RootService);
    return RootService;
}());



/***/ }),

/***/ "./src/app/shared/services/store.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/store.service.ts ***!
  \**************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoreService = /** @class */ (function () {
    function StoreService() {
        this.address = '97 Bashir uddin road, Kalabagan, Dhaka-1200.';
        this.email = 'info@example.com';
        this.phone = ['(800) 060-0730', '(800) 060-0730'];
        this.hours = 'Mon-Sat 10:00pm - 7:00pm';
    }
    Object.defineProperty(StoreService.prototype, "primaryPhone", {
        get: function () {
            return this.phone.length > 0 ? this.phone[0] : null;
        },
        enumerable: true,
        configurable: true
    });
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/shared/services/wishlist.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/wishlist.service.ts ***!
  \*****************************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var WishlistService = /** @class */ (function () {
    function WishlistService(platformId) {
        this.platformId = platformId;
        this.data = {
            items: []
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.itemsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onAddingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items$ = this.itemsSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$));
        this.count$ = this.itemsSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (items) { return items.length; }));
        this.onAdding$ = this.onAddingSubject$.asObservable();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.load();
        }
    }
    WishlistService.prototype.add = function (product) {
        var _this = this;
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            _this.onAddingSubject$.next(product);
            var index = _this.data.items.findIndex(function (item) { return item.id === product.id; });
            if (index === -1) {
                _this.data.items.push(product);
                _this.save();
            }
        }));
    };
    WishlistService.prototype.remove = function (product) {
        var _this = this;
        // timer only for demo
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            var index = _this.data.items.findIndex(function (item) { return item.id === product.id; });
            if (index !== -1) {
                _this.data.items.splice(index, 1);
                _this.save();
            }
        }));
    };
    WishlistService.prototype.save = function () {
        localStorage.setItem('wishlistItems', JSON.stringify(this.data.items));
        this.itemsSubject$.next(this.data.items);
    };
    WishlistService.prototype.load = function () {
        var items = localStorage.getItem('wishlistItems');
        if (items) {
            this.data.items = JSON.parse(items);
            this.itemsSubject$.next(this.data.items);
        }
    };
    WishlistService.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    WishlistService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    WishlistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], WishlistService);
    return WishlistService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _directives_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/click.directive */ "./src/app/shared/directives/click.directive.ts");
/* harmony import */ var _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/collapse.directive */ "./src/app/shared/directives/collapse.directive.ts");
/* harmony import */ var _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/departments-area.directive */ "./src/app/shared/directives/departments-area.directive.ts");
/* harmony import */ var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/fake-slides.directive */ "./src/app/shared/directives/fake-slides.directive.ts");
/* harmony import */ var _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/owl-prevent-click.directive */ "./src/app/shared/directives/owl-prevent-click.directive.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/input-number/input-number.component */ "./src/app/shared/components/input-number/input-number.component.ts");
/* harmony import */ var _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/loading-bar/loading-bar.component */ "./src/app/shared/components/loading-bar/loading-bar.component.ts");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "./src/app/shared/components/page-header/page-header.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/app/shared/components/pagination/pagination.component.ts");
/* harmony import */ var _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/post-card/post-card.component */ "./src/app/shared/components/post-card/post-card.component.ts");
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/product-card/product-card.component */ "./src/app/shared/components/product-card/product-card.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/shared/components/product/product.component.ts");
/* harmony import */ var _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/quickview/quickview.component */ "./src/app/shared/components/quickview/quickview.component.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/app/shared/components/rating/rating.component.ts");
/* harmony import */ var _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/currency-format.pipe */ "./src/app/shared/pipes/currency-format.pipe.ts");


// modules (angular)



// modules (third-party)


// directives






// components











// pipes

var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // directives
                _directives_click_directive__WEBPACK_IMPORTED_MODULE_7__["ClickDirective"],
                _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseContentDirective"],
                _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseDirective"],
                _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseItemDirective"],
                _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_9__["DepartmentsAreaDirective"],
                _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__["DropdownDirective"],
                _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_11__["FakeSlidesDirective"],
                _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_12__["OwlPreventClickDirective"],
                // components
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"],
                _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"],
                _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_15__["InputNumberComponent"],
                _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_16__["LoadingBarComponent"],
                _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_17__["PageHeaderComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__["PaginationComponent"],
                _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_19__["PostCardComponent"],
                _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_20__["ProductCardComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_21__["ProductComponent"],
                _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_22__["QuickviewComponent"],
                _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_23__["RatingComponent"],
                // pipes
                _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_24__["CurrencyFormatPipe"]
            ],
            imports: [
                // modules (angular)
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // modules (third-party)
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot()
            ],
            exports: [
                // directives
                _directives_click_directive__WEBPACK_IMPORTED_MODULE_7__["ClickDirective"],
                _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseContentDirective"],
                _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseDirective"],
                _directives_collapse_directive__WEBPACK_IMPORTED_MODULE_8__["CollapseItemDirective"],
                _directives_departments_area_directive__WEBPACK_IMPORTED_MODULE_9__["DepartmentsAreaDirective"],
                _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__["DropdownDirective"],
                _directives_fake_slides_directive__WEBPACK_IMPORTED_MODULE_11__["FakeSlidesDirective"],
                _directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_12__["OwlPreventClickDirective"],
                // components
                _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"],
                _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"],
                _components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_15__["InputNumberComponent"],
                _components_loading_bar_loading_bar_component__WEBPACK_IMPORTED_MODULE_16__["LoadingBarComponent"],
                _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_17__["PageHeaderComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_18__["PaginationComponent"],
                _components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_19__["PostCardComponent"],
                _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_20__["ProductCardComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_21__["ProductComponent"],
                _components_quickview_quickview_component__WEBPACK_IMPORTED_MODULE_22__["QuickviewComponent"],
                _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_23__["RatingComponent"],
                // pipes
                _pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_24__["CurrencyFormatPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/data/blog-posts.ts":
/*!********************************!*\
  !*** ./src/data/blog-posts.ts ***!
  \********************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
var posts = [
    {
        title: 'Philosophy That Addresses Topics Such As Goodness',
        image: 'assets/images/posts/post-1.jpg',
        categories: ['Special Offers'],
        date: 'October 19, 2019'
    },
    {
        title: 'Logic Is The Study Of Reasoning And Argument Part 2',
        image: 'assets/images/posts/post-2.jpg',
        categories: ['Latest News'],
        date: 'September 5, 2019'
    },
    {
        title: 'Some Philosophers Specialize In One Or More Historical Periods',
        image: 'assets/images/posts/post-3.jpg',
        categories: ['New Arrivals'],
        date: 'August 12, 2019'
    },
    {
        title: 'A Variety Of Other Academic And Non-Academic Approaches Have Been Explored',
        image: 'assets/images/posts/post-4.jpg',
        categories: ['Special Offers'],
        date: 'Jule 30, 2019'
    },
    {
        title: 'Germany Was The First Country To Professionalize Philosophy',
        image: 'assets/images/posts/post-5.jpg',
        categories: ['New Arrivals'],
        date: 'June 12, 2019'
    },
    {
        title: 'Logic Is The Study Of Reasoning And Argument Part 1',
        image: 'assets/images/posts/post-6.jpg',
        categories: ['Special Offers'],
        date: 'May 21, 2019'
    },
    {
        title: 'Many Inquiries Outside Of Academia Are Philosophical In The Broad Sense',
        image: 'assets/images/posts/post-7.jpg',
        categories: ['Special Offers'],
        date: 'April 3, 2019'
    },
    {
        title: 'An Advantage Of Digital Circuits When Compared To Analog Circuits',
        image: 'assets/images/posts/post-8.jpg',
        categories: ['Latest News'],
        date: 'Mart 29, 2019'
    },
    {
        title: 'A Digital Circuit Is Typically Constructed From Small Electronic Circuits',
        image: 'assets/images/posts/post-9.jpg',
        categories: ['New Arrivals'],
        date: 'February 10, 2019'
    },
    {
        title: 'Engineers Use Many Methods To Minimize Logic Functions',
        image: 'assets/images/posts/post-10.jpg',
        categories: ['Special Offers'],
        date: 'January 1, 2019'
    }
];


/***/ }),

/***/ "./src/data/header-departments.ts":
/*!****************************************!*\
  !*** ./src/data/header-departments.ts ***!
  \****************************************/
/*! exports provided: departments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "departments", function() { return departments; });
var departments = [
    { label: 'Power Tools', url: './shop', menu: {
            type: 'megamenu',
            size: 'xl',
            image: 'assets/images/megamenu/megamenu-1.jpg',
            columns: [
                { size: 3, items: [
                        { label: 'Power Tools', url: './shop', items: [
                                { label: 'Engravers', url: './shop' },
                                { label: 'Drills', url: './shop' },
                                { label: 'Wrenches', url: './shop' },
                                { label: 'Plumbing', url: './shop' },
                                { label: 'Wall Chaser', url: './shop' },
                                { label: 'Pneumatic Tools', url: './shop' },
                                { label: 'Milling Cutters', url: './shop' }
                            ] },
                        { label: 'Workbenches', url: './shop' },
                        { label: 'Presses', url: './shop' },
                        { label: 'Spray Guns', url: './shop' },
                        { label: 'Riveters', url: './shop' }
                    ] },
                { size: 3, items: [
                        { label: 'Hand Tools', url: './shop', items: [
                                { label: 'Screwdrivers', url: './shop' },
                                { label: 'Handsaws', url: './shop' },
                                { label: 'Knives', url: './shop' },
                                { label: 'Axes', url: './shop' },
                                { label: 'Multitools', url: './shop' },
                                { label: 'Paint Tools', url: './shop' }
                            ] },
                        { label: 'Garden Equipment', url: './shop', items: [
                                { label: 'Motor Pumps', url: './shop' },
                                { label: 'Chainsaws', url: './shop' },
                                { label: 'Electric Saws', url: './shop' },
                                { label: 'Brush Cutters', url: './shop' }
                            ] }
                    ] },
                { size: 3, items: [
                        { label: 'Machine Tools', url: './shop', items: [
                                { label: 'Thread Cutting', url: './shop' },
                                { label: 'Chip Blowers', url: './shop' },
                                { label: 'Sharpening Machines', url: './shop' },
                                { label: 'Pipe Cutters', url: './shop' },
                                { label: 'Slotting machines', url: './shop' },
                                { label: 'Lathes', url: './shop' }
                            ] }
                    ] },
                { size: 3, items: [
                        { label: 'Instruments', url: './shop', items: [
                                { label: 'Welding Equipment', url: './shop' },
                                { label: 'Power Tools', url: './shop' },
                                { label: 'Hand Tools', url: './shop' },
                                { label: 'Measuring Tool', url: './shop' }
                            ] }
                    ] }
            ]
        } },
    { label: 'Hand Tools', url: './shop', menu: {
            type: 'megamenu',
            size: 'lg',
            image: 'assets/images/megamenu/megamenu-2.jpg',
            columns: [
                { size: 4, items: [
                        { label: 'Hand Tools', url: './shop', items: [
                                { label: 'Screwdrivers', url: './shop' },
                                { label: 'Handsaws', url: './shop' },
                                { label: 'Knives', url: './shop' },
                                { label: 'Axes', url: './shop' },
                                { label: 'Multitools', url: './shop' },
                                { label: 'Paint Tools', url: './shop' }
                            ] },
                        { label: 'Garden Equipment', url: './shop', items: [
                                { label: 'Motor Pumps', url: './shop' },
                                { label: 'Chainsaws', url: './shop' },
                                { label: 'Electric Saws', url: './shop' },
                                { label: 'Brush Cutters', url: './shop' }
                            ] }
                    ] },
                { size: 4, items: [
                        { label: 'Machine Tools', url: './shop', items: [
                                { label: 'Thread Cutting', url: './shop' },
                                { label: 'Chip Blowers', url: './shop' },
                                { label: 'Sharpening Machines', url: './shop' },
                                { label: 'Pipe Cutters', url: './shop' },
                                { label: 'Slotting machines', url: './shop' },
                                { label: 'Lathes', url: './shop' }
                            ] }
                    ] },
                { size: 4, items: [
                        { label: 'Instruments', url: './shop', items: [
                                { label: 'Welding Equipment', url: './shop' },
                                { label: 'Power Tools', url: './shop' },
                                { label: 'Hand Tools', url: './shop' },
                                { label: 'Measuring Tool', url: './shop' }
                            ] }
                    ] }
            ]
        } },
    { label: 'Machine Tools', url: './shop', menu: {
            type: 'megamenu',
            size: 'nl',
            image: 'assets/images/megamenu/megamenu-3.jpg',
            columns: [
                { size: 6, items: [
                        { label: 'Hand Tools', url: './shop', items: [
                                { label: 'Screwdrivers', url: './shop' },
                                { label: 'Handsaws', url: './shop' },
                                { label: 'Knives', url: './shop' },
                                { label: 'Axes', url: './shop' },
                                { label: 'Multitools', url: './shop' },
                                { label: 'Paint Tools', url: './shop' }
                            ] },
                        { label: 'Garden Equipment', url: './shop', items: [
                                { label: 'Motor Pumps', url: './shop' },
                                { label: 'Chainsaws', url: './shop' },
                                { label: 'Electric Saws', url: './shop' },
                                { label: 'Brush Cutters', url: './shop' }
                            ] }
                    ] },
                { size: 6, items: [
                        { label: 'Instruments', url: './shop', items: [
                                { label: 'Welding Equipment', url: './shop' },
                                { label: 'Power Tools', url: './shop' },
                                { label: 'Hand Tools', url: './shop' },
                                { label: 'Measuring Tool', url: './shop' }
                            ] }
                    ] }
            ]
        } },
    { label: 'Building Supplies', url: './shop', menu: {
            type: 'megamenu',
            size: 'sm',
            columns: [
                { size: 12, items: [
                        { label: 'Hand Tools', url: './shop', items: [
                                { label: 'Screwdrivers', url: './shop' },
                                { label: 'Handsaws', url: './shop' },
                                { label: 'Knives', url: './shop' },
                                { label: 'Axes', url: './shop' },
                                { label: 'Multitools', url: './shop' },
                                { label: 'Paint Tools', url: './shop' }
                            ] },
                        { label: 'Garden Equipment', url: './shop', items: [
                                { label: 'Motor Pumps', url: './shop' },
                                { label: 'Chainsaws', url: './shop' },
                                { label: 'Electric Saws', url: './shop' },
                                { label: 'Brush Cutters', url: './shop' }
                            ] }
                    ] }
            ]
        } },
    { label: 'Electrical', url: './shop', menu: {
            type: 'menu',
            items: [
                { label: 'Soldering Equipment', url: './shop', items: [
                        { label: 'Soldering Station', url: './shop' },
                        { label: 'Soldering Dryers', url: './shop' },
                        { label: 'Gas Soldering Iron', url: './shop' },
                        { label: 'Electric Soldering Iron', url: './shop' }
                    ] },
                { label: 'Light Bulbs', url: './shop' },
                { label: 'Batteries', url: './shop' },
                { label: 'Light Fixtures', url: './shop' },
                { label: 'Warm Floor', url: './shop' },
                { label: 'Generators', url: './shop' },
                { label: 'UPS', url: './shop' }
            ]
        } },
    { label: 'Power Machinery', url: './shop' },
    { label: 'Measurement', url: './shop' },
    { label: 'Clothes & PPE', url: './shop' },
    { label: 'Plumbing', url: './shop' },
    { label: 'Storage & Organization', url: './shop' },
    { label: 'Welding & Soldering', url: './shop' }
];


/***/ }),

/***/ "./src/data/header-navigation.ts":
/*!***************************************!*\
  !*** ./src/data/header-navigation.ts ***!
  \***************************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
var navigation = [
    // {label: 'Home', url: './'},
    { label: 'Subject', url: './shop', menu: {
            type: 'megamenu',
            size: 'xl',
            columns: [
                { size: 3, items: [{ label: 'প্যাকেজ', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ইংরেজি ভাষার বই', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'অনুবাদ', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'গণিত', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'জীবনী, স্মৃতিচারণ ও সাক্ষাৎকার', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'শিশু-কিশোর বই', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ইসলামি', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'রাজনীতি', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'আত্ম-উন্নয়ন ও মেডিটেশন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'মুক্তিযুদ্ধ', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ভর্তি, নিয়োগ ও প্রস্তুতি পরীক্ষা', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'উপন্যাস', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'রহস্য, থ্রিলার ও অ্যাডভেঞ্চার', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ইঞ্জিনিয়ারিং', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ইতিহাস ও ঐতিহ্য', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'পশ্চিমবঙ্গের বই', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'পুরস্কারপ্রাপ্ত বই', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'স্কুল ও কলেজ বই', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ব্যবসা, বিনিয়োগ ও অর্থনীতি', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সায়েন্স ফিকশন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'আইন ও বিচার', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'কমিকস, নকশা ও ছবির গল্প', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ভ্রমণ ও প্রবাস', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ইউনিভার্সিটি', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ভাষা ও অভিধান', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ডিজাইন ও ফটোগ্রাফি', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'রকমারি নির্বাচিত বই', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'স্বাস্থ্য, পরিচর্যা ও রোগ নিরাময়', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'মেডিকেল', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'প্রফেশনাল, জার্নাল ও রেফারেন্স', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'কৃষি ও কৃষক', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'view all', url: './shop/category-grid-5-columns-full' }] }
            ]
        } },
    { label: 'Publications', url: './shop', menu: {
            type: 'megamenu',
            size: 'xl',
            columns: [
                { size: 3, items: [{ label: 'সেবা প্রকাশনী', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'প্রথমা প্রকাশন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'বাংলা একাডেমি', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ঐতিহ্য', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ইসলামিক ফাউন্ডেশন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'বাতিঘর প্রকাশনী', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'বিশ্বসাহিত্য কেন্দ্র', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'অন্যপ্রকাশ', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'আনন্দ পাবলিশার্স', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'আদর্শ', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'দি ইউ পি এল', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'দে’জ পাবলিশিং', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'পাঞ্জেরী পাবলিকেশন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সময় প্রকাশন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'তাম্রলিপি', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'জ্ঞানকোষ প্রকাশনী', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'আগামী প্রকাশনী', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'পাঠক সমাবেশ', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'বিসিএস প্রকাশন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'তাওহীদ পাবলিকেশন্স', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'মিত্র ও ঘোষ পাবলিশার্স', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'মাকতাবাতুল আযহার', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'অনন্যা', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সিসটেক পাবলিকেশন্স', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সন্দেশ', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ঢাকা কমিক্স', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'হারপারকলিন্স পাবলিশার্স', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'বিজ্ঞান একাডেমী', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'এমদাদিয়া লাইব্রেরী', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'পিয়ারসন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'লেকচার', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'view all', url: './shop/category-grid-5-columns-full' }] }
            ]
        } },
    { label: 'Writer', url: './shop', menu: {
            type: 'megamenu',
            size: 'xl',
            columns: [
                { size: 3, items: [{ label: 'হুমায়ূন আহমেদ', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'মুহম্মদ জাফর ইকবাল', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সমরেশ মজুমদার', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'রবীন্দ্রনাথ ঠাকুর', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সুনীল গঙ্গোপাধ্যায়', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'আনিসুল হক', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'শীর্ষেন্দু মুখোপাধ্যায়', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সত্যজিৎ রায়', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'আহমদ ছফা', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'বিভূতিভূষণ বন্দ্যোপাধ্যায়', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সৈয়দ শামসুল হক', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সাদাত হোসাইন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'তামিম শাহরিয়ার সুবিন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'কাজী নজরুল ইসলাম', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'হুমায়ুন আজাদ', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'জহির রায়হান', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ড্যান ব্রাউন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'চেতন ভগত', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'রকিব হাসান', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সৈয়দ মুজতবা আলী', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'মানিক বন্দ্যোপাধ্যায়', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'আখতারুজ্জামান ইলিয়াস', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'ইমদাদুল হক মিলন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সেলিনা হোসেন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'স্টিফেন কিং', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'জে. কে. রাওলিং', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'কাজী আনোয়ার হোসেন', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'সুমন্ত আসলাম', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'পাওলো কোয়েলহো', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'শওকত ওসমান', url: './shop/category-grid-5-columns-full' }] },
                { size: 3, items: [{ label: 'view all', url: './shop/category-grid-5-columns-full' }] }
            ]
        } },
    { label: 'Editorial Equipment', url: './shop' },
    { label: 'Printing/Press', url: './shop' },
    { label: 'Art', url: './shop' },
    { label: 'Old Books', url: './shop' },
    { label: 'Stationary', url: './shop' }
    // {label: 'Shop', url: './shop/category-grid-5-columns-full', menu: {
    //     type: 'menu',
    //     items: [
    //         {label: 'Shop Grid', url: './shop/category-grid-5-columns-full', items: [
    //             {label: '3 Columns Sidebar', url: './shop/category-grid-5-columns-full/category-grid-3-columns-sidebar'},
    //             {label: '4 Columns Full',    url: './shop/category-grid-5-columns-full/category-grid-4-columns-full'},
    //             {label: '5 Columns Full',    url: './shop'}
    //         ]},
    //         {label: 'Shop List', url: './shop/category-grid-5-columns-full/category-list'},
    //         {label: 'Shop Right Sidebar', url: './shop/category-grid-5-columns-full/category-right-sidebar'},
    //         {label: 'Product', url: './shop/category-grid-5-columns-full/product', items: [
    //             {label: 'Product', url: './shop/category-grid-5-columns-full/product'},
    //             {label: 'Product Alt', url: './shop/category-grid-5-columns-full/product-columnar'},
    //             {label: 'Product Sidebar', url: './shop/category-grid-5-columns-full/product-sidebar'}
    //         ]},
    //         {label: 'Cart', url: './shop/category-grid-5-columns-full/cart'},
    //         {label: 'Checkout', url: './shop/category-grid-5-columns-full/checkout'},
    //         {label: 'Wishlist', url: './shop/category-grid-5-columns-full/wishlist'},
    //         {label: 'Compare', url: './shop/category-grid-5-columns-full/compare'},
    //         {label: 'Track Order', url: './shop/category-grid-5-columns-full/track-order'},
    //     ]
    // }},
    // {label: 'Account', url: './account', menu: {
    //     type: 'menu',
    //     items: [
    //         {label: 'Login',           url: './account/login'},
    //         {label: 'Dashboard',       url: './account/dashboard'},
    //         {label: 'Edit Profile',    url: './account/profile'},
    //         {label: 'Order History',   url: './account/orders'},
    //         {label: 'Address Book',    url: './account/addresses'},
    //         {label: 'Change Password', url: './account/password'}
    //     ]
    // }},
    // {label: 'Blog', url: './blog', menu: {
    //     type: 'menu',
    //     items: [
    //         {label: 'Blog Classic',         url: './blog/category-classic'},
    //         {label: 'Blog Grid',            url: './blog/category-grid'},
    //         {label: 'Blog List',            url: './blog/category-list'},
    //         {label: 'Blog Left Sidebar',    url: './blog/category-left-sidebar'},
    //         {label: 'Post Page',            url: './blog/post-classic'},
    //         {label: 'Post Without Sidebar', url: './blog/post-full'}
    //     ]
    // }},
    // {label: 'Pages', url: './site', menu: {
    //     type: 'menu',
    //     items: [
    //         {label: 'About Us',             url: './site/about-us'},
    //         {label: 'Contact Us',           url: './site/contact-us'},
    //         {label: 'Contact Us Alt',       url: './site/contact-us-alt'},
    //         {label: '404',                  url: './site/not-found'},
    //         {label: 'Terms And Conditions', url: './site/terms'},
    //         {label: 'FAQ',                  url: './site/faq'},
    //         {label: 'Components',           url: './site/components'},
    //         {label: 'Typography',           url: './site/typography'}
    //     ]
    // }}
    // ,
    // {label: 'Buy Theme', url: 'https://themeforest.net/item/stroyka-tools-store-angular-7-template/23523630', external: true}
];


/***/ }),

/***/ "./src/data/mobile-menu.ts":
/*!*********************************!*\
  !*** ./src/data/mobile-menu.ts ***!
  \*********************************/
/*! exports provided: mobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenu", function() { return mobileMenu; });
var mobileMenu = [
    { type: 'link', label: 'Home', url: './' },
    { type: 'link', label: 'Subject', url: './shop',
        children: [
            { type: 'link', label: 'প্যাকেজ', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ইংরেজি ভাষার বই', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'অনুবাদ', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'গণিত', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'জীবনী, স্মৃতিচারণ ও সাক্ষাৎকার', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'শিশু-কিশোর বই', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ইসলামি', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'রাজনীতি', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'আত্ম-উন্নয়ন ও মেডিটেশন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'মুক্তিযুদ্ধ', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ভর্তি, নিয়োগ ও প্রস্তুতি পরীক্ষা', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'উপন্যাস', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'রহস্য, থ্রিলার ও অ্যাডভেঞ্চার', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ইঞ্জিনিয়ারিং', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ইতিহাস ও ঐতিহ্য', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'পশ্চিমবঙ্গের বই', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'পুরস্কারপ্রাপ্ত বই', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'স্কুল ও কলেজ বই', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ব্যবসা, বিনিয়োগ ও অর্থনীতি', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সায়েন্স ফিকশন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'আইন ও বিচার', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'কমিকস, নকশা ও ছবির গল্প', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ভ্রমণ ও প্রবাস', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ইউনিভার্সিটি', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ভাষা ও অভিধান', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ডিজাইন ও ফটোগ্রাফি', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'রকমারি নির্বাচিত বই', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'স্বাস্থ্য, পরিচর্যা ও রোগ নিরাময়', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'মেডিকেল', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'প্রফেশনাল, জার্নাল ও রেফারেন্স', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'কৃষি ও কৃষক', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'view all', url: './shop/category-grid-5-columns-full' }
        ]
    },
    { type: 'link', label: 'Publications', url: './shop',
        children: [
            { type: 'link', label: 'সেবা প্রকাশনী', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'প্রথমা প্রকাশন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'বাংলা একাডেমি', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ঐতিহ্য', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ইসলামিক ফাউন্ডেশন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'বাতিঘর প্রকাশনী', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'বিশ্বসাহিত্য কেন্দ্র', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'অন্যপ্রকাশ', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'আনন্দ পাবলিশার্স', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'আদর্শ', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'দি ইউ পি এল', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'দে’জ পাবলিশিং', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'পাঞ্জেরী পাবলিকেশন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সময় প্রকাশন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'তাম্রলিপি', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'জ্ঞানকোষ প্রকাশনী', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'আগামী প্রকাশনী', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'পাঠক সমাবেশ', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'বিসিএস প্রকাশন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'তাওহীদ পাবলিকেশন্স', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'মিত্র ও ঘোষ পাবলিশার্স', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'মাকতাবাতুল আযহার', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'অনন্যা', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সিসটেক পাবলিকেশন্স', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সন্দেশ', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ঢাকা কমিক্স', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'হারপারকলিন্স পাবলিশার্স', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'বিজ্ঞান একাডেমী', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'এমদাদিয়া লাইব্রেরী', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'পিয়ারসন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'লেকচার', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'view all', url: './shop/category-grid-5-columns-full' }
        ]
    },
    { type: 'link', label: 'Writer', url: './shop',
        children: [
            { type: 'link', label: 'হুমায়ূন আহমেদ', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'মুহম্মদ জাফর ইকবাল', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সমরেশ মজুমদার', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'রবীন্দ্রনাথ ঠাকুর', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সুনীল গঙ্গোপাধ্যায়', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'আনিসুল হক', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'শীর্ষেন্দু মুখোপাধ্যায়', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সত্যজিৎ রায়', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'আহমদ ছফা', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'বিভূতিভূষণ বন্দ্যোপাধ্যায়', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সৈয়দ শামসুল হক', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সাদাত হোসাইন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'তামিম শাহরিয়ার সুবিন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'কাজী নজরুল ইসলাম', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'হুমায়ুন আজাদ', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'জহির রায়হান', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ড্যান ব্রাউন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'চেতন ভগত', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'রকিব হাসান', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সৈয়দ মুজতবা আলী', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'মানিক বন্দ্যোপাধ্যায়', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'আখতারুজ্জামান ইলিয়াস', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'ইমদাদুল হক মিলন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সেলিনা হোসেন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'স্টিফেন কিং', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'জে. কে. রাওলিং', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'কাজী আনোয়ার হোসেন', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'সুমন্ত আসলাম', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'পাওলো কোয়েলহো', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'শওকত ওসমান', url: './shop/category-grid-5-columns-full' },
            { type: 'link', label: 'view all', url: './shop/category-grid-5-columns-full' }
        ]
    },
    { type: 'link', label: 'Editorial Equipment', url: './shop' },
    { type: 'link', label: 'Printing/Press', url: './shop' },
    { type: 'link', label: 'Art', url: './shop' },
    { type: 'link', label: 'Old Books', url: './shop' },
    { type: 'link', label: 'Stationary', url: './shop' },
];


/***/ }),

/***/ "./src/data/shop-block-categories.ts":
/*!*******************************************!*\
  !*** ./src/data/shop-block-categories.ts ***!
  \*******************************************/
/*! exports provided: categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
var categories = [
    { title: 'Power Tools', url: '../shop', products: 572, image: 'assets/images/categories/category-1.jpg', subcategories: [
            { title: 'Screwdrivers', url: '../shop' },
            { title: 'Milling Cutters', url: '../shop' },
            { title: 'Sanding Machines', url: '../shop' },
            { title: 'Wrenches', url: '../shop' },
            { title: 'Drills', url: '../shop' }
        ] },
    { title: 'Hand Tools', url: '../shop', products: 134, image: 'assets/images/categories/category-2.jpg', subcategories: [
            { title: 'Screwdrivers', url: '../shop' },
            { title: 'Hammers', url: '../shop' },
            { title: 'Spanners', url: '../shop' },
            { title: 'Handsaws', url: '../shop' },
            { title: 'Paint Tools', url: '../shop' }
        ] },
    { title: 'Machine Tools', url: '../shop', products: 301, image: 'assets/images/categories/category-4.jpg', subcategories: [
            { title: 'Lathes', url: '../shop' },
            { title: 'Milling Machines', url: '../shop' },
            { title: 'Grinding Machines', url: '../shop' },
            { title: 'CNC Machines', url: '../shop' },
            { title: 'Sharpening Machines', url: '../shop' }
        ] },
    { title: 'Power Machinery', url: '../shop', products: 79, image: 'assets/images/categories/category-3.jpg', subcategories: [
            { title: 'Generators', url: '../shop' },
            { title: 'Compressors', url: '../shop' },
            { title: 'Winches', url: '../shop' },
            { title: 'Plasma Cutting', url: '../shop' },
            { title: 'Electric Motors', url: '../shop' }
        ] },
    { title: 'Measurement', url: '../shop', products: 366, image: 'assets/images/categories/category-5.jpg', subcategories: [
            { title: 'Tape Measure', url: '../shop' },
            { title: 'Theodolites', url: '../shop' },
            { title: 'Thermal Imagers', url: '../shop' },
            { title: 'Calipers', url: '../shop' },
            { title: 'Levels', url: '../shop' }
        ] },
    { title: 'Clothes and PPE', url: '../shop', products: 81, image: 'assets/images/categories/category-6.jpg', subcategories: [
            { title: 'Winter Workwear', url: '../shop' },
            { title: 'Summer Workwear', url: '../shop' },
            { title: 'Helmets', url: '../shop' },
            { title: 'Belts and Bags', url: '../shop' },
            { title: 'Work Shoes', url: '../shop' }
        ] }
];


/***/ }),

/***/ "./src/data/shop-brands.ts":
/*!*********************************!*\
  !*** ./src/data/shop-brands.ts ***!
  \*********************************/
/*! exports provided: brands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brands", function() { return brands; });
var brands = [
    { image: 'assets/images/logos/logo-1.png' },
    { image: 'assets/images/logos/logo-2.png' },
    { image: 'assets/images/logos/logo-3.png' },
    { image: 'assets/images/logos/logo-4.png' },
    { image: 'assets/images/logos/logo-5.png' },
    { image: 'assets/images/logos/logo-6.png' },
    { image: 'assets/images/logos/logo-7.png' }
];


/***/ }),

/***/ "./src/data/shop-products.ts":
/*!***********************************!*\
  !*** ./src/data/shop-products.ts ***!
  \***********************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
var products = [
    {
        id: 1,
        name: 'Padama Nadir majhi',
        price: 749,
        compareAtPrice: null,
        images: ['assets/images/products/product-1.jpg'],
        badges: ['new'],
        rating: 4,
        reviews: 12,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 2,
        name: 'Mamar biyer borjatri',
        price: 1019,
        compareAtPrice: null,
        images: ['assets/images/products/product-2.jpg'],
        badges: ['hot'],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 3,
        name: 'Eka',
        price: 850,
        compareAtPrice: null,
        images: ['assets/images/products/product-3.jpg'],
        badges: [],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 4,
        name: 'Jownota',
        price: 949,
        compareAtPrice: 1189,
        images: ['assets/images/products/product-4.jpg'],
        badges: ['sale'],
        rating: 3,
        reviews: 15,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 5,
        name: 'Bangla ovidhan',
        price: 1700,
        compareAtPrice: null,
        images: ['assets/images/products/product-5.jpg'],
        badges: [],
        rating: 4,
        reviews: 2,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 6,
        name: 'Karl Marks',
        price: 3199,
        compareAtPrice: null,
        images: ['assets/images/products/product-6.jpg'],
        badges: [],
        rating: 3,
        reviews: 21,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 7,
        name: 'Ami Mrinalini noi',
        price: 24,
        compareAtPrice: null,
        images: ['assets/images/products/product-7.jpg'],
        badges: [],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 8,
        name: 'Ar ami hobo shonshotara',
        price: 15,
        compareAtPrice: null,
        images: ['assets/images/products/product-8.jpg'],
        badges: [],
        rating: 2,
        reviews: 5,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 9,
        name: 'Harry potter',
        price: 19,
        compareAtPrice: null,
        images: ['assets/images/products/product-9.jpg'],
        badges: [],
        rating: 4,
        reviews: 34,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 10,
        name: 'The canterbary',
        price: 15,
        compareAtPrice: null,
        images: ['assets/images/products/product-10.jpg'],
        badges: [],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 11,
        name: 'Adorsho namkosh',
        price: 149,
        compareAtPrice: null,
        images: ['assets/images/products/product-11.jpg'],
        badges: [],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 12,
        name: 'Aroj alir shomipe',
        price: 666.99,
        compareAtPrice: null,
        images: ['assets/images/products/product-12.jpg'],
        badges: [],
        rating: 5,
        reviews: 17,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 13,
        name: 'Bangla moulud sharif',
        price: 649,
        compareAtPrice: null,
        images: ['assets/images/products/product-13.jpg'],
        badges: [],
        rating: 2,
        reviews: 8,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 14,
        name: 'Chithi',
        price: 1800,
        compareAtPrice: null,
        images: ['assets/images/products/product-14.jpg'],
        badges: [],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 15,
        name: 'Rupashi Bangla',
        price: 290,
        compareAtPrice: null,
        images: ['assets/images/products/product-15.jpg'],
        badges: [],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    },
    {
        id: 16,
        name: 'Padma nadir majhi',
        price: 1499,
        compareAtPrice: null,
        images: [
            'assets/images/products/product-16.jpg'
        ],
        badges: [],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        features: [
            { name: 'Author', value: 'Author Name' },
            { name: 'Editor', value: 'Editor Name' },
            { name: 'Number of Pages', value: '750' },
            { name: 'Publisher', value: 'Publisher name' },
            { name: 'ISBN', value: '9789849436096' },
            { name: 'Country', value: 'Bangladesh' },
            { name: 'Language', value: 'Bangla' }
        ],
        options: []
    }
];


/***/ }),

/***/ "./src/data/theme.ts":
/*!***************************!*\
  !*** ./src/data/theme.ts ***!
  \***************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
var theme = {
    name: 'Stroyka',
    author: {
        name: 'Kos',
        profile_url: 'https://themeforest.net/user/kos9'
    }
};


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
    production: false
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
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\enilkhet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map