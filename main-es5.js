function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _forside_forside_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./forside/forside.component */
    "./src/app/forside/forside.component.ts");
    /* harmony import */


    var _search_resualt_search_resualt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-resualt/search-resualt.component */
    "./src/app/search-resualt/search-resualt.component.ts");
    /* harmony import */


    var _destinationer_destinationer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./destinationer/destinationer.component */
    "./src/app/destinationer/destinationer.component.ts");
    /* harmony import */


    var _byer_byer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./byer/byer.component */
    "./src/app/byer/byer.component.ts");
    /* harmony import */


    var _hoteller_hoteller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hoteller/hoteller.component */
    "./src/app/hoteller/hoteller.component.ts");
    /* harmony import */


    var _hotel_hotel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hotel/hotel.component */
    "./src/app/hotel/hotel.component.ts");
    /* harmony import */


    var _vaerelse_vaerelse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./vaerelse/vaerelse.component */
    "./src/app/vaerelse/vaerelse.component.ts");
    /* harmony import */


    var _vaerelser_vaerelser_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./vaerelser/vaerelser.component */
    "./src/app/vaerelser/vaerelser.component.ts");
    /* harmony import */


    var _vaerelse_type_vaerelse_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./vaerelse-type/vaerelse-type.component */
    "./src/app/vaerelse-type/vaerelse-type.component.ts");
    /* harmony import */


    var _book_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./book/book.component */
    "./src/app/book/book.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _reservationer_reservationer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./reservationer/reservationer.component */
    "./src/app/reservationer/reservationer.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _newsside_newsside_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./newsside/newsside.component */
    "./src/app/newsside/newsside.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'forside',
      pathMatch: 'full'
    }, {
      path: 'forside',
      component: _forside_forside_component__WEBPACK_IMPORTED_MODULE_2__["ForsideComponent"],
      pathMatch: 'full'
    }, {
      path: 'search/:id/:num',
      component: _search_resualt_search_resualt_component__WEBPACK_IMPORTED_MODULE_3__["SearchResualtComponent"]
    }, {
      path: 'distinationer/:id',
      component: _destinationer_destinationer_component__WEBPACK_IMPORTED_MODULE_4__["DestinationerComponent"],
      pathMatch: 'full'
    }, {
      path: 'byer/:id/:countryid',
      component: _byer_byer_component__WEBPACK_IMPORTED_MODULE_5__["ByerComponent"],
      pathMatch: 'full'
    }, {
      path: 'hoteller/:id',
      component: _hoteller_hoteller_component__WEBPACK_IMPORTED_MODULE_6__["HotellerComponent"],
      pathMatch: 'full'
    }, {
      path: 'hotel/:hotelid/:countryid',
      component: _hotel_hotel_component__WEBPACK_IMPORTED_MODULE_7__["HotelComponent"],
      pathMatch: 'full'
    }, {
      path: 'vaerelse/:id/:hotelid/:countryid/:cityname',
      component: _vaerelse_vaerelse_component__WEBPACK_IMPORTED_MODULE_8__["VaerelseComponent"],
      pathMatch: 'full'
    }, {
      path: 'vaerelser',
      component: _vaerelser_vaerelser_component__WEBPACK_IMPORTED_MODULE_9__["VaerelserComponent"],
      pathMatch: 'full'
    }, {
      path: 'vaerelsetype/:id',
      component: _vaerelse_type_vaerelse_type_component__WEBPACK_IMPORTED_MODULE_10__["VaerelseTypeComponent"],
      pathMatch: 'full'
    }, {
      path: 'book/:roomid/:hotelid',
      component: _book_book_component__WEBPACK_IMPORTED_MODULE_11__["BookComponent"],
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
      pathMatch: 'full'
    }, {
      path: 'reservationer',
      component: _reservationer_reservationer_component__WEBPACK_IMPORTED_MODULE_13__["ReservationerComponent"],
      pathMatch: 'full'
    }, {
      path: 'newsside/:id',
      component: _newsside_newsside_component__WEBPACK_IMPORTED_MODULE_15__["NewssideComponent"],
      pathMatch: 'full'
    }, {
      path: 'news',
      component: _news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"],
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Overlook';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 47,
      vars: 0,
      consts: [[1, "mobile-menu"], ["for", "show-menu", 1, "show-menu"], ["version", "1.1", "id", "Hotel_Overlook", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 525 200", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 525 200"], ["type", "text/css"], ["transform", "matrix(1 0 0 1 12.561 114.2925)", 1, "st0", "st1", "st4"], ["points", "267.71,159.84 278.38,153.32 289.05,159.84 286.14,147.68 295.64,139.54 283.18,138.55 278.38,127\n      273.58,138.55 261.11,139.54 270.61,147.68 ", 1, "st2"], ["points", "306.4,159.84 317.07,153.32 327.74,159.84 324.83,147.68 334.34,139.54 321.87,138.55 317.07,127\n      312.27,138.55 299.81,139.54 309.31,147.68 ", 1, "st2"], ["points", "345.09,159.84 355.77,153.32 366.44,159.84 363.53,147.68 373.03,139.54 360.56,138.55 355.77,127\n      350.97,138.55 338.5,139.54 348,147.68 ", 1, "st2"], ["points", "383.79,159.84 394.46,153.32 405.13,159.84 402.22,147.68 411.72,139.54 399.26,138.55 394.46,127\n      389.66,138.55 377.19,139.54 386.7,147.68 ", 1, "st2"], ["points", "229.01,159.84 239.68,153.32 250.35,159.84 247.45,147.68 256.95,139.54 244.48,138.55 239.68,127\n      234.89,138.55 222.42,139.54 231.92,147.68 ", 1, "st2"], ["x1", "519", "y1", "39.5", "x2", "175.5", "y2", "39.5", 1, "st3"], ["x1", "222.5", "y1", "144.5", "x2", "175.5", "y2", "144.5", 1, "st3"], ["x1", "518.5", "y1", "144.5", "x2", "411.5", "y2", "144.5", 1, "st3"], [1, "lines"], ["type", "checkbox", "id", "show-menu"], ["transform", "matrix(1 0 0 1 12.561 114.2925)", 1, "st1", "st4"], ["points", "267.71,159.84 278.38,153.32 289.05,159.84 286.14,147.68 295.64,139.54 283.18,138.55 278.38,127\n   273.58,138.55 261.11,139.54 270.61,147.68 ", 1, "st2"], ["points", "306.4,159.84 317.07,153.32 327.74,159.84 324.83,147.68 334.34,139.54 321.87,138.55 317.07,127\n   312.27,138.55 299.81,139.54 309.31,147.68 ", 1, "st2"], ["points", "345.09,159.84 355.77,153.32 366.44,159.84 363.53,147.68 373.03,139.54 360.56,138.55 355.77,127\n   350.97,138.55 338.5,139.54 348,147.68 ", 1, "st2"], ["points", "383.79,159.84 394.46,153.32 405.13,159.84 402.22,147.68 411.72,139.54 399.26,138.55 394.46,127\n   389.66,138.55 377.19,139.54 386.7,147.68 ", 1, "st2"], ["points", "229.01,159.84 239.68,153.32 250.35,159.84 247.45,147.68 256.95,139.54 244.48,138.55 239.68,127\n   234.89,138.55 222.42,139.54 231.92,147.68 ", 1, "st2"], ["id", "menu"], ["routerLink", "/forside"], ["routerLink", "/distinationer/1"], ["routerLink", "/vaerelser"], ["routerLink", "/reservationer"], ["routerLink", "/login"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "style", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " .st0{font-family:'OpenSans-Light';} .st1{font-size:60px;} .st2{fill:#FF0000;} .st3{fill:none;stroke:#AAAAAA;stroke-miterlimit:10;} .st4{fill:#ffffff;} ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "text", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "HOTEL OVERLOOK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "polygon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "polygon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "polygon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "polygon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "polygon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "line", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "line", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "line", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "style", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " .st1{font-size:60px;} .st2{fill:#FF0000;} .st3{fill:none;stroke:#AAAAAA;stroke-miterlimit:10;} .st4{fill:#ffffff;} ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "text", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HOTEL OVERLOOK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polygon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "polygon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "polygon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "polygon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "polygon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "line", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "line", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Forside |");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Hoteller og destinationer |");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "V\xE6relser |");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Mine reservationer |");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["@font-face {\n  font-family: \"Open Sans Light\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTRa1RVmPjeKy21_GQJaLlJI.woff) format(\"woff\");\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  line-height: 1.6em;\n  font-family: \"Open Sans Light\";\n  font-weight: 300;\n  font-size: calc(12px + 3 * ((100vw - 320px) / 680));\n  position: relative;\n  margin: 0 auto;\n  background-color: black;\n  height: 120px;\n}\n.mobile-menu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 250px;\n  height: auto;\n  overflow: visible;\n  margin-left: calc(80px + 100 * ((100vw - 320px) / 680));\n  margin-top: 10px;\n  font-family: \"Open Sans Light\";\n}\n\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0 auto;\n  text-align: right;\n  position: absolute;\n  top: 0;\n  left: 40%;\n}\n\n.mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 25px auto;\n}\n\n.mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  padding: 10px 5px;\n  position: relative;\n  z-index: 0;\n  cursor: pointer;\n  color: white;\n  transition: 0.5s ease-in-out;\n}\n.mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FF0000;\n  transition: 0.5s ease-in-out;\n}\n\n.mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  float: none;\n}\n\n.mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: auto;\n  min-width: 100px;\n  padding: 0 20px;\n}\n\n.mobile-menu[_ngcontent-%COMP%]   .show-menu[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #668A93;\n  background: transparent;\n  text-align: center;\n  padding: 10px 15px;\n  display: none;\n  cursor: pointer;\n  text-transform: uppercase;\n}\n.mobile-menu[_ngcontent-%COMP%]   .show-menu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 250px;\n  height: auto;\n  overflow: visible;\n  margin-left: 100px;\n}\n\n.mobile-menu[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mobile-menu[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ #menu[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media screen and (max-width: 800px) {\n  .mobile-menu[_ngcontent-%COMP%]   .lines[_ngcontent-%COMP%] {\n    border-bottom: 15px double #668A93;\n    border-top: 5px solid #668A93;\n    content: \"\";\n    height: 5px;\n    width: 20px;\n    padding-right: 15px;\n    float: right;\n  }\n\n  \n  .mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    position: static;\n    display: none;\n    background-color: black;\n    margin-top: -20px;\n  }\n\n  .mobile-menu[_ngcontent-%COMP%]   .show-menu[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  \n  .mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 1px;\n  }\n\n  \n  .mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .mobile-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px 0;\n  }\n\n  \n  .mobile-menu[_ngcontent-%COMP%]   .show-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxicnV0YVxcRGVza3RvcFxcSGplbW1lc2lkZXJcXE92ZXJsb29rXFxvdmVybG9vay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrSEFBQTtBQ0NGO0FEQ0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDRixrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtREFBQTtFQUNDLGtCQUFBO0VBQ0MsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdURBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDRUY7QURBQSwyQ0FBQTtBQUNBO0VBQ0MscUJBQUE7RUFDQyxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDR0Y7QURBQSx3Q0FBQTtBQUNBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ0dGO0FEQUEsdUJBQUE7QUFDQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0MsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDR0Y7QUREQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtBQ0lGO0FEREEsNENBQUE7QUFDQTtFQUNDLGFBQUE7QUNJRDtBRERBLCtCQUFBO0FBQ0E7RUFDQyxjQUFBO0VBQ0EsV0FBQTtBQ0lEO0FEREEsd0JBQUE7QUFDQTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNJRDtBREFBLHdEQUFBO0FBQ0E7RUFDQyxxQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0MsZUFBQTtFQUNBLHlCQUFBO0FDR0Y7QURBQTtFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0dIO0FEQUEsZ0JBQUE7QUFDQTtFQUNJLGFBQUE7QUNHSjtBREFBLCtDQUFBO0FBQ0E7RUFDSSxjQUFBO0FDR0o7QURBQSxvQkFBQTtBQUVBO0VBQ0U7SUFDRSxrQ0FBQTtJQUNBLDZCQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDRixZQUFBO0VDRUE7O0VEQUQsb0NBQUE7RUFDQTtJQUNDLGdCQUFBO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsaUJBQUE7RUNHRjs7RUREQTtJQUNGLGFBQUE7RUNJRTs7RURGRCwwQkFBQTtFQUNBO0lBQ0Msa0JBQUE7RUNLQTs7RURIRCxpQ0FBQTtFQUNBO0lBQ0csV0FBQTtJQUNBLGVBQUE7RUNNRjs7RURKRCwyQkFBQTtFQUNBO0lBQ0MsY0FBQTtFQ09BO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucyBMaWdodCc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgc3JjOnVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvb3BlbnNhbnMvdjEzL0RYSTFPUkhDcHNRbTNWcDZtWG9hVFJhMVJWbVBqZUt5MjFfR1FKYUxsSkkud29mZikgZm9ybWF0KCd3b2ZmJyk7XHJcbn1cclxuLm1vYmlsZS1tZW51IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6MTAwJTtcclxubGluZS1oZWlnaHQ6IDEuNmVtO1xyXG5mb250LWZhbWlseTogJ09wZW4gU2FucyBMaWdodCc7XHJcbmZvbnQtd2VpZ2h0OiAzMDA7XHJcbmZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMyAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG4ubW9iaWxlLW1lbnUgc3Zne1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoODBweCArIDEwMCAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgTGlnaHQnO1xyXG59XHJcbi8qU3RyaXAgdGhlIHVsIG9mIHBhZGRpbmcgYW5kIGxpc3Qgc3R5bGluZyovXHJcbi5tb2JpbGUtbWVudSB1bCB7XHJcblx0bGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjpyaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDQwJTtcclxufVxyXG5cclxuLypDcmVhdGUgYSBob3Jpem9udGFsIGxpc3Qgd2l0aCBzcGFjaW5nKi9cclxuLm1vYmlsZS1tZW51IGxpIHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDI1cHggYXV0bztcclxufVxyXG5cclxuLypTdHlsZSBmb3IgbWVudSBsaW5rcyovXHJcbi5tb2JpbGUtbWVudSBsaSBhIHtcclxuXHRkaXNwbGF5OmJsb2NrO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5tb2JpbGUtbWVudSBsaSBhOmhvdmVye1xyXG4gIGNvbG9yOiAjRkYwMDAwO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qSGlkZSBkcm9wZG93biBsaW5rcyB1bnRpbCB0aGV5IGFyZSBuZWVkZWQqL1xyXG4ubW9iaWxlLW1lbnUgbGkgdWwge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qTWFrZSBkcm9wZG93biBsaW5rcyB2ZXJ0aWNhbCovXHJcbi5tb2JpbGUtbWVudSBsaSB1bCBsaSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0ZmxvYXQ6IG5vbmU7XHJcbn1cclxuXHJcbi8qUHJldmVudCB0ZXh0IHdyYXBwaW5nKi9cclxuLm1vYmlsZS1tZW51IGxpIHVsIGxpIGEge1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdG1pbi13aWR0aDogMTAwcHg7XHJcblx0cGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG5cclxuLypTdHlsZSAnc2hvdyBtZW51JyBsYWJlbCBidXR0b24gYW5kIGhpZGUgaXQgYnkgZGVmYXVsdCovXHJcbi5tb2JpbGUtbWVudSAuc2hvdy1tZW51IHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICM2NjhBOTM7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHRkaXNwbGF5OiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubW9iaWxlLW1lbnUgLnNob3ctbWVudSBzdmd7XHJcbiAgIHdpZHRoOiAyNTBweDtcclxuICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG4vKkhpZGUgY2hlY2tib3gqL1xyXG4ubW9iaWxlLW1lbnUgaW5wdXRbdHlwZT1jaGVja2JveF17XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKlNob3cgbWVudSB3aGVuIGludmlzaWJsZSBjaGVja2JveCBpcyBjaGVja2VkKi9cclxuLm1vYmlsZS1tZW51IGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgfiAjbWVudXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKlJlc3BvbnNpdmUgU3R5bGVzKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA4MDBweCl7XHJcbiAgLm1vYmlsZS1tZW51IC5saW5lcyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IGRvdWJsZSAjNjY4QTkzO1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICM2NjhBOTM7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHdpZHRoOjIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblx0LypNYWtlIGRyb3Bkb3duIGxpbmtzIGFwcGVhciBpbmxpbmUqL1xyXG5cdC5tb2JpbGUtbWVudSB1bCB7XHJcblx0XHRwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgfVxyXG4gIC5tb2JpbGUtbWVudSAuc2hvdy1tZW51IHN2Z3tcclxuZGlzcGxheTogbm9uZTtcclxuICB9XHJcblx0LypDcmVhdGUgdmVydGljYWwgc3BhY2luZyovXHJcblx0Lm1vYmlsZS1tZW51IGxpIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDFweDtcclxuXHR9XHJcblx0LypNYWtlIGFsbCBtZW51IGxpbmtzIGZ1bGwgd2lkdGgqL1xyXG5cdC5tb2JpbGUtbWVudSB1bCBsaSwgLm1vYmlsZS1tZW51IGxpIGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblx0fVxyXG5cdC8qRGlzcGxheSAnc2hvdyBtZW51JyBsaW5rKi9cclxuXHQubW9iaWxlLW1lbnUgLnNob3ctbWVudSB7XHJcblx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdH1cclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIExpZ2h0XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgc3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL29wZW5zYW5zL3YxMy9EWEkxT1JIQ3BzUW0zVnA2bVhvYVRSYTFSVm1QamVLeTIxX0dRSmFMbEpJLndvZmYpIGZvcm1hdChcIndvZmZcIik7XG59XG4ubW9iaWxlLW1lbnUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBMaWdodFwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IGNhbGMoMTJweCArIDMgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4ubW9iaWxlLW1lbnUgc3ZnIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXJnaW4tbGVmdDogY2FsYyg4MHB4ICsgMTAwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgTGlnaHRcIjtcbn1cblxuLypTdHJpcCB0aGUgdWwgb2YgcGFkZGluZyBhbmQgbGlzdCBzdHlsaW5nKi9cbi5tb2JpbGUtbWVudSB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNDAlO1xufVxuXG4vKkNyZWF0ZSBhIGhvcml6b250YWwgbGlzdCB3aXRoIHNwYWNpbmcqL1xuLm1vYmlsZS1tZW51IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDI1cHggYXV0bztcbn1cblxuLypTdHlsZSBmb3IgbWVudSBsaW5rcyovXG4ubW9iaWxlLW1lbnUgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tb2JpbGUtbWVudSBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNGRjAwMDA7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qSGlkZSBkcm9wZG93biBsaW5rcyB1bnRpbCB0aGV5IGFyZSBuZWVkZWQqL1xuLm1vYmlsZS1tZW51IGxpIHVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLypNYWtlIGRyb3Bkb3duIGxpbmtzIHZlcnRpY2FsKi9cbi5tb2JpbGUtbWVudSBsaSB1bCBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLypQcmV2ZW50IHRleHQgd3JhcHBpbmcqL1xuLm1vYmlsZS1tZW51IGxpIHVsIGxpIGEge1xuICB3aWR0aDogYXV0bztcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4vKlN0eWxlICdzaG93IG1lbnUnIGxhYmVsIGJ1dHRvbiBhbmQgaGlkZSBpdCBieSBkZWZhdWx0Ki9cbi5tb2JpbGUtbWVudSAuc2hvdy1tZW51IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY2OEE5MztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2JpbGUtbWVudSAuc2hvdy1tZW51IHN2ZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4vKkhpZGUgY2hlY2tib3gqL1xuLm1vYmlsZS1tZW51IGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLypTaG93IG1lbnUgd2hlbiBpbnZpc2libGUgY2hlY2tib3ggaXMgY2hlY2tlZCovXG4ubW9iaWxlLW1lbnUgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB+ICNtZW51IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qUmVzcG9uc2l2ZSBTdHlsZXMqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1vYmlsZS1tZW51IC5saW5lcyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBkb3VibGUgIzY2OEE5MztcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzY2OEE5MztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLypNYWtlIGRyb3Bkb3duIGxpbmtzIGFwcGVhciBpbmxpbmUqL1xuICAubW9iaWxlLW1lbnUgdWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuXG4gIC5tb2JpbGUtbWVudSAuc2hvdy1tZW51IHN2ZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qQ3JlYXRlIHZlcnRpY2FsIHNwYWNpbmcqL1xuICAubW9iaWxlLW1lbnUgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgfVxuXG4gIC8qTWFrZSBhbGwgbWVudSBsaW5rcyBmdWxsIHdpZHRoKi9cbiAgLm1vYmlsZS1tZW51IHVsIGxpLCAubW9iaWxlLW1lbnUgbGkgYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG5cbiAgLypEaXNwbGF5ICdzaG93IG1lbnUnIGxpbmsqL1xuICAubW9iaWxlLW1lbnUgLnNob3ctbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _forside_forside_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forside/forside.component */
    "./src/app/forside/forside.component.ts");
    /* harmony import */


    var _search_resualt_search_resualt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search-resualt/search-resualt.component */
    "./src/app/search-resualt/search-resualt.component.ts");
    /* harmony import */


    var _destinationer_destinationer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./destinationer/destinationer.component */
    "./src/app/destinationer/destinationer.component.ts");
    /* harmony import */


    var _byer_byer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./byer/byer.component */
    "./src/app/byer/byer.component.ts");
    /* harmony import */


    var _hoteller_hoteller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./hoteller/hoteller.component */
    "./src/app/hoteller/hoteller.component.ts");
    /* harmony import */


    var _hotel_hotel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./hotel/hotel.component */
    "./src/app/hotel/hotel.component.ts");
    /* harmony import */


    var _vaerelse_vaerelse_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./vaerelse/vaerelse.component */
    "./src/app/vaerelse/vaerelse.component.ts");
    /* harmony import */


    var _vaerelser_vaerelser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./vaerelser/vaerelser.component */
    "./src/app/vaerelser/vaerelser.component.ts");
    /* harmony import */


    var _vaerelse_type_vaerelse_type_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./vaerelse-type/vaerelse-type.component */
    "./src/app/vaerelse-type/vaerelse-type.component.ts");
    /* harmony import */


    var _book_book_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./book/book.component */
    "./src/app/book/book.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _reservationer_reservationer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./reservationer/reservationer.component */
    "./src/app/reservationer/reservationer.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _newsside_newsside_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./newsside/newsside.component */
    "./src/app/newsside/newsside.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _forside_forside_component__WEBPACK_IMPORTED_MODULE_7__["ForsideComponent"], _search_resualt_search_resualt_component__WEBPACK_IMPORTED_MODULE_8__["SearchResualtComponent"], _destinationer_destinationer_component__WEBPACK_IMPORTED_MODULE_9__["DestinationerComponent"], _byer_byer_component__WEBPACK_IMPORTED_MODULE_10__["ByerComponent"], _hoteller_hoteller_component__WEBPACK_IMPORTED_MODULE_11__["HotellerComponent"], _hotel_hotel_component__WEBPACK_IMPORTED_MODULE_12__["HotelComponent"], _vaerelse_vaerelse_component__WEBPACK_IMPORTED_MODULE_13__["VaerelseComponent"], _vaerelser_vaerelser_component__WEBPACK_IMPORTED_MODULE_14__["VaerelserComponent"], _vaerelse_type_vaerelse_type_component__WEBPACK_IMPORTED_MODULE_15__["VaerelseTypeComponent"], _book_book_component__WEBPACK_IMPORTED_MODULE_16__["BookComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _reservationer_reservationer_component__WEBPACK_IMPORTED_MODULE_18__["ReservationerComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_19__["NewsComponent"], _newsside_newsside_component__WEBPACK_IMPORTED_MODULE_20__["NewssideComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _forside_forside_component__WEBPACK_IMPORTED_MODULE_7__["ForsideComponent"], _search_resualt_search_resualt_component__WEBPACK_IMPORTED_MODULE_8__["SearchResualtComponent"], _destinationer_destinationer_component__WEBPACK_IMPORTED_MODULE_9__["DestinationerComponent"], _byer_byer_component__WEBPACK_IMPORTED_MODULE_10__["ByerComponent"], _hoteller_hoteller_component__WEBPACK_IMPORTED_MODULE_11__["HotellerComponent"], _hotel_hotel_component__WEBPACK_IMPORTED_MODULE_12__["HotelComponent"], _vaerelse_vaerelse_component__WEBPACK_IMPORTED_MODULE_13__["VaerelseComponent"], _vaerelser_vaerelser_component__WEBPACK_IMPORTED_MODULE_14__["VaerelserComponent"], _vaerelse_type_vaerelse_type_component__WEBPACK_IMPORTED_MODULE_15__["VaerelseTypeComponent"], _book_book_component__WEBPACK_IMPORTED_MODULE_16__["BookComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _reservationer_reservationer_component__WEBPACK_IMPORTED_MODULE_18__["ReservationerComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_19__["NewsComponent"], _newsside_newsside_component__WEBPACK_IMPORTED_MODULE_20__["NewssideComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/book/book.component.ts":
  /*!****************************************!*\
    !*** ./src/app/book/book.component.ts ***!
    \****************************************/

  /*! exports provided: BookComponent */

  /***/
  function srcAppBookBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookComponent", function () {
      return BookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BookComponent = /*#__PURE__*/function () {
      function BookComponent(route, router, fb, http) {
        _classCallCheck(this, BookComponent);

        this.route = route;
        this.router = router;
        this.fb = fb;
        this.http = http;
        this.number = 1;
        this.ticketId = this.route.snapshot.paramMap.get('id');
        this.koebForm = this.fb.group({
          hotelId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          værelsestype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          flex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          antalperson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          checkin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          checkout: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.token = this.getCookie('token');
        this.userid = this.getCookie('user_id');
      }

      _createClass(BookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var roomId = this.route.snapshot.paramMap.get('roomid');
          var hotelId = this.route.snapshot.paramMap.get('hotelid');
          this.http.get("https://api.mediehuset.net/overlook/rooms/".concat(roomId)).subscribe(function (data) {
            _this.room = data;
            _this.roomid = _this.room.item.id;
            console.log(_this.roomid);
          });
          this.http.get("https://api.mediehuset.net/overlook/hotels/".concat(hotelId)).subscribe(function (data) {
            _this.hotel = data;
            _this.hotelid = _this.hotel.item.id;
          });
        }
      }, {
        key: "getCookie",
        value: function getCookie(name) {
          var nameLenPlus = name.length + 1;
          return document.cookie.split(';').map(function (c) {
            return c.trim();
          }).filter(function (cookie) {
            return cookie.substring(0, nameLenPlus) === "".concat(name, "=");
          }).map(function (cookie) {
            return decodeURIComponent(cookie.substring(nameLenPlus));
          })[0] || null;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var formData = new FormData();
          formData.append('user_id', this.userid);
          formData.append('hotel_id', this.hotelid);
          formData.append('room_id', this.roomid);
          formData.append('is_flex', this.koebForm.get('flex').value);
          formData.append('num_persons', this.koebForm.get('antalperson').value);
          formData.append('checkin', parseInt((new Date(this.koebForm.get('checkin').value).getTime() / 1000).toFixed(0)));
          formData.append('checkout', parseInt((new Date(this.koebForm.get('checkout').value).getTime() / 1000).toFixed(0)));
          this.data = parseInt((new Date(this.koebForm.get('checkout').value).getTime() / 1000).toFixed(0));
          console.log(this.data);
          formData.append('firstname', this.koebForm.get('username').value);
          formData.append('lastname', this.koebForm.get('lastName').value);
          formData.append('email', this.koebForm.get('email').value);
          formData.append('phone', this.koebForm.get('phone').value);
          formData.append('comment', this.koebForm.get('comment').value);
          console.log(formData);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(this.getCookie('token')));
          this.http.post("https://api.mediehuset.net/overlook/reservations", formData, {
            headers: headers
          }).subscribe(function (res) {
            console.log(res);

            if (res.status === true) {
              window.alert('Tak for købet');
            }
          });
        }
      }, {
        key: "focus",
        value: function focus() {
          var errMessage = document.getElementsByClassName('error')[0].remove();
        }
      }]);

      return BookComponent;
    }();

    BookComponent.ɵfac = function BookComponent_Factory(t) {
      return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookComponent,
      selectors: [["app-book"]],
      decls: 173,
      vars: 3,
      consts: [[1, "search"], [1, "searchitem", "first"], [1, "searchitem"], ["value", "", "disabled", "", "selected", ""], ["type", "date", "id", "birthday", "name", "birthday"], ["src", "../../assets/overlook-seurahuone.jpg", "alt", "countryimage", 1, "heroimage"], [1, "header"], [1, "pagegrid"], [1, "form"], [1, "header2"], [1, "desc"], [1, "login-form", 3, "formGroup", "ngSubmit"], [1, "container"], ["formControlName", "v\xE6relsestype"], ["value", "1"], ["formControlName", "antalperson"], ["value", "0"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["for", "noflex"], ["type", "radio", "name", "flex", "checked", "checked", "id", "noflex", "value", "0", "formControlName", "flex"], ["type", "radio", "name", "flex", "id", "flex", "value", "1", "formControlName", "flex"], ["type", "date", "id", "checkin", "formControlName", "checkin"], ["type", "date", "id", "Check-out", "formControlName", "checkout"], ["for", "username", 1, "username-label"], [1, "red"], ["type", "text", "name", "username", "id", "username", "formControlName", "username", "placeholder", "Indtast dit fornavn", 3, "focus"], ["for", "password", 1, "password-label"], ["type", "text", "name", "password", "id", "password", "formControlName", "lastName", "placeholder", "Indtast din efternavn", 3, "focus"], ["type", "text", "name", "password", "id", "email", "formControlName", "email", "placeholder", "Indtast din email", 3, "focus"], ["type", "text", "name", "password", "id", "pass", "formControlName", "password", "placeholder", "adgangskode", 3, "focus"], ["type", "text", "name", "password", "id", "passw", "formControlName", "password", "placeholder", "adgangskode", 3, "focus"], ["type", "text", "name", "password", "id", "phone", "formControlName", "phone", "placeholder", "telefon", 3, "focus"], ["type", "text", "name", "password", "id", "password", "formControlName", "comment", "placeholder", "besked", 3, "focus"], ["type", "checkbox", "checked", "checked"], [1, "checkmark"], ["type", "login"], ["type", "login", 1, "button2"], [1, "error"], [1, "meeen"]],
      template: function BookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find dit v\xE6relse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hvor vil du hen og hvorn\xE5r vil du det?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Destination: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "V\xE6lg destination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Danmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sverige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Norge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Island");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Finland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tyskland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Polen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Check-in: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Check-out: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Antal personer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "S\xF8g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "RESERVATIONER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Hotel Overlook > Reservation > Reserver dit foretrukne v\xE6relse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Reserver dit foretrukne v\xE6relse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Her kan du v\xE6lge destination, hotel og v\xE6relsestype og gennemf\xF8re din Overlook booking.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BookComponent_Template_form_ngSubmit_71_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " v\xE6relse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "personer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Noflex\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "flex\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Check-in: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Check-out: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Fornavn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function BookComponent_Template_input_focus_118_listener() {
            return ctx.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Efternavn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function BookComponent_Template_input_focus_123_listener() {
            return ctx.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function BookComponent_Template_input_focus_128_listener() {
            return ctx.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function BookComponent_Template_input_focus_133_listener() {
            return ctx.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function BookComponent_Template_input_focus_138_listener() {
            return ctx.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Telefon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function BookComponent_Template_input_focus_143_listener() {
            return ctx.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "comment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function BookComponent_Template_input_focus_148_listener() {
            return ctx.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "accepter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Send reservation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Annuler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "p", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Betingelser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Reduceret pris - spar op til 25%.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Kan kun bookes online via Overlook website app.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Bestil helt op til og med ankomstdagen.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Bookinger tilbagebetales ikke og kan ikke \xE6ndres eller annulleres.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Bel\xF8bet debiteres kreditkort p\xE5 reservationstidspunktet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Morgenmad er inkluderet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.koebForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hotel.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.room.item.title);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]],
      styles: ["\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap\");\n@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\");\n@charset \"UTF-8\";\n.search {\n  width: 70%;\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: repeat(auto-fill, minmax(calc(100px + 30 * ((100vw - 320px) / 680)), 1fr));\n  grid-auto-rows: auto;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  position: absolute;\n  top: 100px;\n  left: 15%;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  box-shadow: 0px 0px 8px 2px #000000;\n  background-color: white;\n  z-index: 2;\n}\n.search .searchitem {\n  display: grid;\n  text-align: left;\n  padding: 15px 5%;\n  height: calc(100px - 15 * ((100vw - 320px) / 680));\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n}\n.search .searchitem strong {\n  font-size: 16px;\n  font-weight: 600;\n}\n.search .searchitem button {\n  color: white;\n  background-color: red;\n  height: 50%;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-top: 22%;\n}\n.search .first {\n  background-color: rgba(131, 131, 131, 0.363);\n  border-right: 1px solid gray;\n}\n.heroimage {\n  width: 100%;\n  height: 70vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 60%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  z-index: 2;\n  letter-spacing: 2px;\n  font-weight: 300;\n  border-radius: 0px 0px 100px 0px;\n  background: #000b28;\n  background: linear-gradient(90deg, #000b28 0%, rgba(0, 12, 38, 0.7402311266) 50%);\n}\n.header h2 {\n  font-weight: 300;\n  padding-left: 10px;\n}\n.pagegrid {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-row: auto;\n  width: 80%;\n  margin: auto;\n  margin-top: 7vh;\n}\n.pagegrid .meeen {\n  font-family: \"Open Sans\", sans-serif;\n  padding-left: 10%;\n  color: #494949;\n}\n.pagegrid .meeen p {\n  font-size: 15px;\n}\n.pagegrid .meeen p:before {\n  content: \" \";\n  color: green;\n  font-family: \"FontAwesome\";\n  content: \"\uF00C\";\n}\n.pagegrid .form {\n  border-right: 3px solid gray;\n  position: relative;\n  z-index: 1;\n  margin-left: 10%;\n  margin-top: 5vh;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n}\n.pagegrid .form h4 {\n  font-family: \"Open Sans\", sans-serif;\n  padding-left: 10%;\n  color: #494949;\n  margin: 0;\n  margin-bottom: 2vh;\n}\n.pagegrid .form .header2 {\n  width: 80%;\n  text-align: left;\n  font-family: \"Open Sans\", sans-serif;\n  margin: auto;\n  color: #636363;\n  font-weight: 600;\n  font-size: 30px;\n}\n.pagegrid .form .desc {\n  width: 80%;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  border-bottom: 5px dashed gray;\n}\n.pagegrid .form .desc p {\n  width: 80%;\n}\n.pagegrid .form label {\n  display: inline-block;\n  margin-bottom: 5px;\n}\n.pagegrid .form .red {\n  color: red;\n}\n.pagegrid .form input, .pagegrid .form select {\n  font-family: \"Open Sans\", sans-serif;\n  outline: 0;\n  background: #ffffff;\n  width: 100%;\n  border: 0;\n  margin: 0 0 25px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n  border-radius: 5px;\n}\n.pagegrid .form button {\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: red;\n  width: 25%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: 0.3s;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.pagegrid .form button:hover {\n  background: rgba(255, 0, 0, 0.562);\n  transition: 0.3s;\n  transform: scale(1.05);\n}\n.pagegrid .form button:active {\n  transform: scale(0.9);\n}\n.pagegrid .form .button2 {\n  margin-left: 20px;\n}\n@media only screen and (max-width: 600px) {\n  .pagegrid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay9DOlxcVXNlcnNcXGJydXRhXFxEZXNrdG9wXFxIamVtbWVzaWRlclxcT3Zlcmxvb2tcXG92ZXJsb29rL3NyY1xcYXBwXFxib29rXFxib29rLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib29rL2Jvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFRLDJGQUFBO0FBQ0Esb0ZBQUE7QUNEUixnQkFBZ0I7QURFaEI7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpR0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0YsdUJBQUE7RUFDQSwwQkFBQTtFQUdBLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDRUE7QUREQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dGO0FERkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNJSjtBREZFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUo7QUREQTtFQUNFLDRDQUFBO0VBQ0EsNEJBQUE7QUNHRjtBREFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDR0Y7QUREQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUZBQUE7QUNJRjtBREhFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0tKO0FESEM7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTUY7QURMRTtFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDT0o7QUROSTtFQUNFLGVBQUE7QUNRTjtBRE5JO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNRTjtBRExFO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUNPSjtBRE5JO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNRTjtBRE5JO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1FOO0FETkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDUU47QURQTTtFQUNFLFVBQUE7QUNTUjtBRE5JO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ1FOO0FETkk7RUFDRSxVQUFBO0FDUU47QUROSTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1FOO0FETkk7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUU47QUROSTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1FOO0FETkk7RUFDRSxxQkFBQTtBQ1FOO0FETkk7RUFDRSxpQkFBQTtBQ1FOO0FESEE7RUFDRTtJQUNFLDBCQUFBO0VDTUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuLnNlYXJjaHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDA7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoY2FsYygxMDBweCArIDMwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpLCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICBtYXJnaW46YXV0bztcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgbGVmdDogMTUlO1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4tbW96LWJvcmRlci1yYWRpdXM6NXB4O1xyXG4td2Via2l0LWJvcmRlci1yYWRpdXM6NXB4O1xyXG4td2Via2l0LWJveC1zaGFkb3c6MHB4IDBweCA4cHggMnB4ICMwMDAwMDAgO1xyXG4tbW96LWJveC1zaGFkb3c6MHB4IDBweCA4cHggMnB4ICMwMDAwMDAgO1xyXG5ib3gtc2hhZG93OjBweCAwcHggOHB4IDJweCAjMDAwMDAwIDtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnotaW5kZXg6IDI7XHJcbi5zZWFyY2hpdGVte1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHBhZGRpbmc6IDE1cHggNSU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHB4IC0gMTUgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHN0cm9uZ3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMiU7XHJcbiAgfVxyXG59XHJcbi5maXJzdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMzYzKTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbn1cclxufVxyXG4uaGVyb2ltYWdle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAxNSU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMjtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwxMSw0MCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMTEsNDAsMSkgMCUsIHJnYmEoMCwxMiwzOCwwLjc0MDIzMTEyNjYzMDMzOTYpIDUwJSk7XHJcbiAgaDJ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufS5wYWdlZ3JpZHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcclxuICBncmlkLXJvdzogYXV0bztcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgLm1lZWVue1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBjb2xvcjogcmdiKDczLCA3MywgNzMpO1xyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgcDpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3Jte1xyXG4gICAgYm9yZGVyLXJpZ2h0OjNweCBzb2xpZCByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgICBoNHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgICAgY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAydmg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyMntcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC5kZXNje1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTo1cHggZGFzaGVkIHJnYigxMjgsIDEyOCwgMTI4KTtcclxuICAgICAgcHtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAucmVke1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgaW5wdXQsIHNlbGVjdCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgbWFyZ2luOiAwIDAgMjVweDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjU2Mik7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcbiAgICBidXR0b246YWN0aXZle1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMntcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnBhZ2VncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcIi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcbi5zZWFyY2gge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoY2FsYygxMDBweCArIDMwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpLCAxZnIpKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogMTUlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggIzAwMDAwMDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xufVxuLnNlYXJjaCAuc2VhcmNoaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDE1cHggNSU7XG4gIGhlaWdodDogY2FsYygxMDBweCAtIDE1ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zZWFyY2ggLnNlYXJjaGl0ZW0gc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnNlYXJjaCAuc2VhcmNoaXRlbSBidXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIyJTtcbn1cbi5zZWFyY2ggLmZpcnN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjM2Myk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5oZXJvaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHZoO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDE1JTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMDBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDBiMjg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMGIyOCAwJSwgcmdiYSgwLCAxMiwgMzgsIDAuNzQwMjMxMTI2NikgNTAlKTtcbn1cbi5oZWFkZXIgaDIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5wYWdlZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcbiAgZ3JpZC1yb3c6IGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogN3ZoO1xufVxuLnBhZ2VncmlkIC5tZWVlbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgY29sb3I6ICM0OTQ5NDk7XG59XG4ucGFnZWdyaWQgLm1lZWVuIHAge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucGFnZWdyaWQgLm1lZWVuIHA6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCLvgIxcIjtcbn1cbi5wYWdlZ3JpZCAuZm9ybSB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2MzYzNjM7XG59XG4ucGFnZWdyaWQgLmZvcm0gaDQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIGNvbG9yOiAjNDk0OTQ5O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cbi5wYWdlZ3JpZCAuZm9ybSAuaGVhZGVyMiB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ucGFnZWdyaWQgLmZvcm0gLmRlc2Mge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzYzNjM2MztcbiAgYm9yZGVyLWJvdHRvbTogNXB4IGRhc2hlZCBncmF5O1xufVxuLnBhZ2VncmlkIC5mb3JtIC5kZXNjIHAge1xuICB3aWR0aDogODAlO1xufVxuLnBhZ2VncmlkIC5mb3JtIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucGFnZWdyaWQgLmZvcm0gLnJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG4ucGFnZWdyaWQgLmZvcm0gaW5wdXQsIC5wYWdlZ3JpZCAuZm9ybSBzZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGFnZWdyaWQgLmZvcm0gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdlZ3JpZCAuZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC41NjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuLnBhZ2VncmlkIC5mb3JtIGJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG4ucGFnZWdyaWQgLmZvcm0gLmJ1dHRvbjIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucGFnZWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-book',
          templateUrl: './book.component.html',
          styleUrls: ['./book.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/byer/byer.component.ts":
  /*!****************************************!*\
    !*** ./src/app/byer/byer.component.ts ***!
    \****************************************/

  /*! exports provided: ByerComponent */

  /***/
  function srcAppByerByerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ByerComponent", function () {
      return ByerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ByerComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/distinationer/", country_r3.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r3.name);
      }
    }

    function ByerComponent_div_81_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ByerComponent_div_81_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ByerComponent_div_81_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var hotel_r6 = ctx.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.goToHotelPage(hotel_r6.id, ctx_r11.hotels.item.country_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ByerComponent_div_81_div_1_div_6_Template, 2, 0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hotel_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", hotel_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r6.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", " ".repeat(hotel_r6.num_stars).split(""));
      }
    }

    function ByerComponent_div_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ByerComponent_div_81_div_1_Template, 7, 3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.hotels.item.hotels.items);
      }
    }

    function ByerComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ByerComponent_div_85_Template_p_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var city_r13 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.refreshCities(city_r13.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r13.name);
      }
    }

    var ByerComponent = /*#__PURE__*/function () {
      function ByerComponent(route, router, http) {
        _classCallCheck(this, ByerComponent);

        this.route = route;
        this.router = router;
        this.http = http;
      }

      _createClass(ByerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var cityId = this.route.snapshot.paramMap.get('id');
          var countryId = this.route.snapshot.paramMap.get('countryid');
          this.http.get("https://api.mediehuset.net/overlook/cities/".concat(cityId)).subscribe(function (data) {
            _this2.hotels = data;
          });
          this.http.get("https://api.mediehuset.net/overlook/countries").subscribe(function (data) {
            _this2.countries = data;
          });
          this.http.get("https://api.mediehuset.net/overlook/countries/".concat(countryId)).subscribe(function (data) {
            _this2.country = data;
          });
        }
      }, {
        key: "goToHotelPage",
        value: function goToHotelPage(hotelId, countryId) {
          this.router.navigate(['/hotel', hotelId, countryId]);
        }
      }, {
        key: "refreshCities",
        value: function refreshCities(cityId) {
          var _this3 = this;

          this.http.get("https://api.mediehuset.net/overlook/cities/".concat(cityId)).subscribe(function (data) {
            _this3.hotels = data;
            console.log(_this3.hotels);
          });
        }
      }]);

      return ByerComponent;
    }();

    ByerComponent.ɵfac = function ByerComponent_Factory(t) {
      return new (t || ByerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ByerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ByerComponent,
      selectors: [["app-byer"]],
      decls: 86,
      vars: 9,
      consts: [[1, "search"], [1, "searchitem", "first"], [1, "searchitem"], ["value", "", "disabled", "", "selected", ""], ["type", "date", "id", "birthday", "name", "birthday"], ["alt", "countryimage", 1, "heroimage", 3, "src"], [1, "header"], [1, "countrynav"], [4, "ngFor", "ngForOf"], [1, "pagegrid"], [1, "pagecontent"], ["routerLink", "/forside"], ["routerLink", "/distinationer/1"], [3, "routerLink"], [1, "header2"], [1, "desc"], ["class", "citygrid", 4, "ngIf"], [1, "cities"], [1, "country", 3, "routerLink"], [1, "citygrid"], [1, "city", 3, "click"], ["alt", "City image", 3, "src"], [1, "title"], [1, "stars"], ["class", "stars", 4, "ngFor", "ngForOf"], ["src", "../../assets/star-images-9454.png", "alt", ""]],
      template: function ByerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find dit v\xE6relse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hvor vil du hen og hvorn\xE5r vil du det?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Destination: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "V\xE6lg destination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Danmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sverige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Norge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Island");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Finland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tyskland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Polen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Check-in: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Check-out: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Antal personer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "S\xF8g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "HOTELLER OG DESTINATIONER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ByerComponent_div_61_Template, 3, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Hotel Overlook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Hoteller og Destinationer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, ByerComponent_div_81_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Se andre byer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ByerComponent_div_85_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.hotels.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/distinationer/", ctx.hotels.item.country_id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hotels.item.country_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" > ", ctx.hotels.item.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vores hoteller i ", ctx.hotels.item.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hotels.item.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hotels);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country.item.cities.items);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap\")[_ngcontent-%COMP%];\n.search[_ngcontent-%COMP%] {\n  width: 70%;\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: repeat(auto-fill, minmax(calc(100px + 30 * ((100vw - 320px) / 680)), 1fr));\n  grid-auto-rows: auto;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  position: absolute;\n  top: 100px;\n  left: 15%;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  box-shadow: 0px 0px 8px 2px #000000;\n  background-color: white;\n  z-index: 2;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: left;\n  padding: 15px 5%;\n  height: calc(100px - 15 * ((100vw - 320px) / 680));\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: red;\n  height: 50%;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-top: 22%;\n}\n.search[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  background-color: rgba(131, 131, 131, 0.363);\n  border-right: 1px solid gray;\n}\n.heroimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 60%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  z-index: 2;\n  letter-spacing: 2px;\n  font-weight: 300;\n  border-radius: 0px 0px 100px 0px;\n  background: #000b28;\n  background: linear-gradient(90deg, #000b28 0%, rgba(0, 12, 38, 0.7402311266) 50%);\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n  padding-left: 10px;\n}\n.pagegrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-row: auto;\n  width: 90%;\n  margin: auto;\n  margin-top: 7vh;\n}\n.pagegrid[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  padding-left: 5%;\n  margin-top: 10vh;\n  color: #494949;\n  cursor: pointer;\n}\n.pagegrid[_ngcontent-%COMP%]   .header2[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n  font-family: \"Open Sans\", sans-serif;\n  margin: auto;\n  margin-top: 2vh;\n  color: #636363;\n  font-weight: 600;\n  font-size: 30px;\n}\n.pagegrid[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  border-bottom: 5px dashed gray;\n}\n.pagegrid[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%] {\n  padding-left: 5%;\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  cursor: pointer;\n}\n.countrynav[_ngcontent-%COMP%] {\n  text-align: center;\n  width: calc(400px + 200 * ((100vw - 320px) / 680));\n  color: #838383;\n  display: grid;\n  margin: 2vh auto 2vh auto;\n  padding-bottom: 2vh;\n  font-family: \"Open Sans\", sans-serif;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  box-shadow: 0 4px 2px -2px gray;\n  cursor: pointer;\n}\n.citygrid[_ngcontent-%COMP%] {\n  width: 90%;\n  display: grid;\n  grid-gap: 5%;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-rows: auto;\n  margin: 5vh auto 15vh auto;\n  font-family: \"Open Sans\", sans-serif;\n  position: relative;\n  color: gray;\n  padding-bottom: calc(200px - 100 * ((100vw - 320px) / 680));\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: center;\n  height: 300px;\n  position: relative;\n  overflow: hidden;\n  font-family: \"Gothic A1\", sans-serif;\n  font-weight: 300;\n  transition: 1s;\n  text-align: left;\n  cursor: pointer;\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 5px;\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 25px;\n  margin: 0;\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  width: 50%;\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: auto;\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnllci9DOlxcVXNlcnNcXGJydXRhXFxEZXNrdG9wXFxIamVtbWVzaWRlclxcT3Zlcmxvb2tcXG92ZXJsb29rL3NyY1xcYXBwXFxieWVyXFxieWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ieWVyL2J5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkZBQUE7QUFDUjtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlHQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDRix1QkFBQTtFQUNBLDBCQUFBO0VBR0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNDQTtBREFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUY7QURERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0dKO0FEREU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHSjtBREFBO0VBQ0UsNENBQUE7RUFDQSw0QkFBQTtBQ0VGO0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFRjtBREFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpRkFBQTtBQ0dGO0FERkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7QUREQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNJRjtBREhBO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNLRjtBREhBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNLRjtBREhBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQ0tGO0FESkU7RUFDRSxVQUFBO0FDTUo7QURIRTtFQUNFLGdCQUFBO0FDS0o7QURKTTtFQUNGLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ01KO0FERkE7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrREFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0tGO0FESEE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0REFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJEQUFBO0FDTUY7QURMQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNPRjtBRE5JO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDUU47QUROSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNRTjtBRE5HO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsVUFBQTtBQ1FMO0FEUEs7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ1NOO0FETEU7RUFDRSxxQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvYnllci9ieWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuLnNlYXJjaHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDA7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoY2FsYygxMDBweCArIDMwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpLCAxZnIpKTtcclxuICBncmlkLWF1dG8tcm93czogYXV0bztcclxuICBtYXJnaW46YXV0bztcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwcHg7XHJcbiAgbGVmdDogMTUlO1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4tbW96LWJvcmRlci1yYWRpdXM6NXB4O1xyXG4td2Via2l0LWJvcmRlci1yYWRpdXM6NXB4O1xyXG4td2Via2l0LWJveC1zaGFkb3c6MHB4IDBweCA4cHggMnB4ICMwMDAwMDAgO1xyXG4tbW96LWJveC1zaGFkb3c6MHB4IDBweCA4cHggMnB4ICMwMDAwMDAgO1xyXG5ib3gtc2hhZG93OjBweCAwcHggOHB4IDJweCAjMDAwMDAwIDtcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbnotaW5kZXg6IDI7XHJcbi5zZWFyY2hpdGVte1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHBhZGRpbmc6IDE1cHggNSU7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHB4IC0gMTUgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHN0cm9uZ3tcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMiU7XHJcbiAgfVxyXG59XHJcbi5maXJzdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMzYzKTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbn1cclxufVxyXG4uaGVyb2ltYWdle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzB2aDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAxNSU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMjtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwxMSw0MCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMTEsNDAsMSkgMCUsIHJnYmEoMCwxMiwzOCwwLjc0MDIzMTEyNjYzMDMzOTYpIDUwJSk7XHJcbiAgaDJ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4ucGFnZWdyaWR7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XHJcbiAgZ3JpZC1yb3c6IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogN3ZoO1xyXG5oNHtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIGNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5oZWFkZXIye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5kZXNje1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gIGJvcmRlci1ib3R0b206NXB4IGRhc2hlZCByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgcHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIH1cclxuICAuY2l0aWVze1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgcHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG59XHJcbi5jb3VudHJ5bmF2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogY2FsYyg0MDBweCArIDIwMCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcclxuICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWFyZ2luOiAydmggYXV0byAydmggYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2l0eWdyaWR7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiA1JTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgbWFyZ2luOiA1dmggYXV0byAxNXZoIGF1dG87XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDIwMHB4IC0gMTAwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xyXG4uY2l0eXtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1mYW1pbHk6ICdHb3RoaWMgQTEnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgIC5zdGFyc3tcclxuICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICAgICB3aWR0aDogNTAlO1xyXG4gICAgIGltZ3tcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICB9XHJcbiAgIH1cclxuICB9XHJcbiAgLmNpdHk6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbi5zZWFyY2gge1xuICB3aWR0aDogNzAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoY2FsYygxMDBweCArIDMwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpLCAxZnIpKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogMTUlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggIzAwMDAwMDtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggIzAwMDAwMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4ICMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xufVxuLnNlYXJjaCAuc2VhcmNoaXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDE1cHggNSU7XG4gIGhlaWdodDogY2FsYygxMDBweCAtIDE1ICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zZWFyY2ggLnNlYXJjaGl0ZW0gc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnNlYXJjaCAuc2VhcmNoaXRlbSBidXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgaGVpZ2h0OiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDIyJTtcbn1cbi5zZWFyY2ggLmZpcnN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjM2Myk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5oZXJvaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHZoO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDE1JTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMDBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDBiMjg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMGIyOCAwJSwgcmdiYSgwLCAxMiwgMzgsIDAuNzQwMjMxMTI2NikgNTAlKTtcbn1cbi5oZWFkZXIgaDIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5wYWdlZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcbiAgZ3JpZC1yb3c6IGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogN3ZoO1xufVxuLnBhZ2VncmlkIGg0IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIGNvbG9yOiAjNDk0OTQ5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFnZWdyaWQgLmhlYWRlcjIge1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ucGFnZWdyaWQgLmRlc2Mge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzYzNjM2MztcbiAgYm9yZGVyLWJvdHRvbTogNXB4IGRhc2hlZCBncmF5O1xufVxuLnBhZ2VncmlkIC5kZXNjIHAge1xuICB3aWR0aDogOTAlO1xufVxuLnBhZ2VncmlkIC5jaXRpZXMge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuLnBhZ2VncmlkIC5jaXRpZXMgcCB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzYzNjM2MztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY291bnRyeW5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoNDAwcHggKyAyMDAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XG4gIGNvbG9yOiAjODM4MzgzO1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW46IDJ2aCBhdXRvIDJ2aCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNpdHlncmlkIHtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDUlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBtYXJnaW46IDV2aCBhdXRvIDE1dmggYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDIwMHB4IC0gMTAwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xufVxuLmNpdHlncmlkIC5jaXR5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpYyBBMVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNpdHlncmlkIC5jaXR5IGltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jaXR5Z3JpZCAuY2l0eSAudGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5jaXR5Z3JpZCAuY2l0eSAuc3RhcnMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIHdpZHRoOiA1MCU7XG59XG4uY2l0eWdyaWQgLmNpdHkgLnN0YXJzIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY2l0eWdyaWQgLmNpdHk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ByerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-byer',
          templateUrl: './byer.component.html',
          styleUrls: ['./byer.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/destinationer/destinationer.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/destinationer/destinationer.component.ts ***!
    \**********************************************************/

  /*! exports provided: DestinationerComponent */

  /***/
  function srcAppDestinationerDestinationerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DestinationerComponent", function () {
      return DestinationerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DestinationerComponent_div_61_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DestinationerComponent_div_61_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var country_r2 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.refreshCities(country_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r2.name);
      }
    }

    function DestinationerComponent_div_76_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DestinationerComponent_div_76_div_1_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var city_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.goToCityPage(city_r7.id, ctx_r10.citys.item.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", city_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r7.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r7.description);
      }
    }

    function DestinationerComponent_div_76_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationerComponent_div_76_div_1_div_1_Template, 6, 3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r8 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 < 3);
      }
    }

    function DestinationerComponent_div_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DestinationerComponent_div_76_div_1_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.citys.item.cities.items);
      }
    }

    var DestinationerComponent = /*#__PURE__*/function () {
      function DestinationerComponent(route, router, http) {
        _classCallCheck(this, DestinationerComponent);

        this.route = route;
        this.router = router;
        this.http = http;
      }

      _createClass(DestinationerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var cityId = this.route.snapshot.paramMap.get('id');
          this.http.get("https://api.mediehuset.net/overlook/countries/".concat(cityId)).subscribe(function (data) {
            _this4.citys = data;
            console.log(_this4.citys);
          });
          this.http.get("https://api.mediehuset.net/overlook/countries").subscribe(function (data) {
            _this4.countries = data;
          });
        }
      }, {
        key: "goToCityPage",
        value: function goToCityPage(cityId, countryid) {
          this.router.navigate(['/byer', cityId, countryid]);
        }
      }, {
        key: "refreshCities",
        value: function refreshCities(cityId) {
          var _this5 = this;

          this.http.get("https://api.mediehuset.net/overlook/countries/".concat(cityId)).subscribe(function (data) {
            _this5.citys = data;
            console.log(_this5.citys);
          });
        }
      }]);

      return DestinationerComponent;
    }();

    DestinationerComponent.ɵfac = function DestinationerComponent_Factory(t) {
      return new (t || DestinationerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DestinationerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DestinationerComponent,
      selectors: [["app-destinationer"]],
      decls: 77,
      vars: 6,
      consts: [[1, "search"], [1, "searchitem", "first"], [1, "searchitem"], ["value", "", "disabled", "", "selected", ""], ["type", "date", "id", "birthday", "name", "birthday"], ["alt", "countryimage", 1, "heroimage", 3, "src"], [1, "header"], [1, "countrynav"], [4, "ngFor", "ngForOf"], ["routerLink", "/forside"], ["routerLink", "/distinationer/1"], [1, "header2"], [1, "desc"], ["class", "citygrid", 4, "ngIf"], [1, "country", 3, "click"], [1, "citygrid"], ["class", "city", 3, "click", 4, "ngIf"], [1, "city", 3, "click"], ["alt", "City image", 3, "src"], [1, "title"], [1, "teaser"]],
      template: function DestinationerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find dit v\xE6relse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hvor vil du hen og hvorn\xE5r vil du det?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Destination: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "V\xE6lg destination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Danmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sverige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Norge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Island");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Finland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tyskland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Polen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Check-in: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Check-out: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Antal personer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "S\xF8g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "HOTELLER OG DESTINATIONER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DestinationerComponent_div_61_Template, 3, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Hotel Overlook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " > ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Hoteller og Destinationer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, DestinationerComponent_div_76_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.citys.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" > ", ctx.citys.item.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vores hoteller i ", ctx.citys.item.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.citys.item.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.citys);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap\")[_ngcontent-%COMP%];\n.search[_ngcontent-%COMP%] {\n  width: 70%;\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: repeat(auto-fill, minmax(calc(100px + 30 * ((100vw - 320px) / 680)), 1fr));\n  grid-auto-rows: auto;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  position: absolute;\n  top: 100px;\n  left: 15%;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  box-shadow: 0px 0px 8px 2px #000000;\n  background-color: white;\n  z-index: 2;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: left;\n  padding: 15px 5%;\n  height: calc(100px - 15 * ((100vw - 320px) / 680));\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: red;\n  height: 50%;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-top: 22%;\n}\n.search[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  background-color: rgba(131, 131, 131, 0.363);\n  border-right: 1px solid gray;\n}\n.heroimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 60%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  z-index: 2;\n  letter-spacing: 2px;\n  font-weight: 300;\n  border-radius: 0px 0px 100px 0px;\n  background: #000b28;\n  background: linear-gradient(90deg, #000b28 0%, rgba(0, 12, 38, 0.7402311266) 50%);\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n  padding-left: 10px;\n}\nh4[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  padding-left: 10%;\n  margin-top: 10vh;\n  color: #494949;\n  cursor: pointer;\n}\n.header2[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: left;\n  font-family: \"Open Sans\", sans-serif;\n  margin: auto;\n  margin-top: 2vh;\n  color: #636363;\n  font-weight: 600;\n  font-size: 30px;\n}\n.desc[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  border-bottom: 5px dashed gray;\n}\n.desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.countrynav[_ngcontent-%COMP%] {\n  text-align: center;\n  width: calc(400px + 200 * ((100vw - 320px) / 680));\n  color: #838383;\n  display: grid;\n  margin: 2vh auto 2vh auto;\n  padding-bottom: 2vh;\n  font-family: \"Open Sans\", sans-serif;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  box-shadow: 0 4px 2px -2px gray;\n  cursor: pointer;\n}\n.citygrid[_ngcontent-%COMP%] {\n  width: 80%;\n  display: grid;\n  grid-gap: 5%;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-rows: auto;\n  margin: 5vh auto 15vh auto;\n  font-family: \"Open Sans\", sans-serif;\n  position: relative;\n  color: gray;\n  padding-bottom: calc(200px - 100 * ((100vw - 320px) / 680));\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: center;\n  height: 365px;\n  position: relative;\n  overflow: hidden;\n  font-family: \"Gothic A1\", sans-serif;\n  font-weight: 300;\n  transition: 1s;\n  text-align: left;\n  cursor: pointer;\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 5px;\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 25px;\n  margin: 0;\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   .teaser[_ngcontent-%COMP%] {\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 7;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.citygrid[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzdGluYXRpb25lci9DOlxcVXNlcnNcXGJydXRhXFxEZXNrdG9wXFxIamVtbWVzaWRlclxcT3Zlcmxvb2tcXG92ZXJsb29rL3NyY1xcYXBwXFxkZXN0aW5hdGlvbmVyXFxkZXN0aW5hdGlvbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZXN0aW5hdGlvbmVyL2Rlc3RpbmF0aW9uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkZBQUE7QUFDUjtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlHQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDRix1QkFBQTtFQUNBLDBCQUFBO0VBR0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNDQTtBREFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUY7QURERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0dKO0FEREU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHSjtBREFBO0VBQ0UsNENBQUE7RUFDQSw0QkFBQTtBQ0VGO0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFRjtBREFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpRkFBQTtBQ0dGO0FERkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7QUREQTtFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSUY7QURGQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDS0Y7QURIQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUNNRjtBRExFO0VBQ0UsVUFBQTtBQ09KO0FESkE7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrREFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ09GO0FETEE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0REFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJEQUFBO0FDUUY7QURQQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNTRjtBRFJJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVU47QURSSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNVTjtBRFJJO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDVU47QURQRTtFQUNFLHFCQUFBO0FDU0oiLCJmaWxlIjoic3JjL2FwcC9kZXN0aW5hdGlvbmVyL2Rlc3RpbmF0aW9uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG4uc2VhcmNoe1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heChjYWxjKDEwMHB4ICsgMzAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSksIDFmcikpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBsZWZ0OiAxNSU7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbi1tb3otYm9yZGVyLXJhZGl1czo1cHg7XHJcbi13ZWJraXQtYm9yZGVyLXJhZGl1czo1cHg7XHJcbi13ZWJraXQtYm94LXNoYWRvdzowcHggMHB4IDhweCAycHggIzAwMDAwMCA7XHJcbi1tb3otYm94LXNoYWRvdzowcHggMHB4IDhweCAycHggIzAwMDAwMCA7XHJcbmJveC1zaGFkb3c6MHB4IDBweCA4cHggMnB4ICMwMDAwMDAgO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuei1pbmRleDogMjtcclxuLnNlYXJjaGl0ZW17XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgcGFkZGluZzogMTVweCA1JTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwcHggLSAxNSAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgc3Ryb25ne1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDIyJTtcclxuICB9XHJcbn1cclxuLmZpcnN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4zNjMpO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4KTtcclxufVxyXG59XHJcbi5oZXJvaW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDE1JTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLDExLDQwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwxMSw0MCwxKSAwJSwgcmdiYSgwLDEyLDM4LDAuNzQwMjMxMTI2NjMwMzM5NikgNTAlKTtcclxuICBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbmg0e1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIGNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5oZWFkZXIye1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5kZXNje1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gIGJvcmRlci1ib3R0b206NXB4IGRhc2hlZCByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgcHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbi5jb3VudHJ5bmF2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogY2FsYyg0MDBweCArIDIwMCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcclxuICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWFyZ2luOiAydmggYXV0byAydmggYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2l0eWdyaWR7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiA1JTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgbWFyZ2luOiA1dmggYXV0byAxNXZoIGF1dG87XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDIwMHB4IC0gMTAwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xyXG4uY2l0eXtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGhlaWdodDogMzY1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZm9udC1mYW1pbHk6ICdHb3RoaWMgQTEnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAudGVhc2Vye1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDc7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaXR5OmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG4uc2VhcmNoIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDA7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KGNhbGMoMTAwcHggKyAzMCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKSwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4ICMwMDAwMDA7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMjtcbn1cbi5zZWFyY2ggLnNlYXJjaGl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxNXB4IDUlO1xuICBoZWlnaHQ6IGNhbGMoMTAwcHggLSAxNSAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2VhcmNoIC5zZWFyY2hpdGVtIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zZWFyY2ggLnNlYXJjaGl0ZW0gYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMiU7XG59XG4uc2VhcmNoIC5maXJzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4zNjMpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xufVxuXG4uaGVyb2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzB2aDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAxNSU7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDI7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMDBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwYjI4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDBiMjggMCUsIHJnYmEoMCwgMTIsIDM4LCAwLjc0MDIzMTEyNjYpIDUwJSk7XG59XG4uaGVhZGVyIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5oNCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXRvcDogMTB2aDtcbiAgY29sb3I6ICM0OTQ5NDk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlcjIge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5kZXNjIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGJvcmRlci1ib3R0b206IDVweCBkYXNoZWQgZ3JheTtcbn1cbi5kZXNjIHAge1xuICB3aWR0aDogODAlO1xufVxuXG4uY291bnRyeW5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoNDAwcHggKyAyMDAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XG4gIGNvbG9yOiAjODM4MzgzO1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW46IDJ2aCBhdXRvIDJ2aCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNpdHlncmlkIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDUlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBtYXJnaW46IDV2aCBhdXRvIDE1dmggYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDIwMHB4IC0gMTAwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xufVxuLmNpdHlncmlkIC5jaXR5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDM2NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIkdvdGhpYyBBMVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNpdHlncmlkIC5jaXR5IGltZyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jaXR5Z3JpZCAuY2l0eSAudGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5jaXR5Z3JpZCAuY2l0eSAudGVhc2VyIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiA3O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNpdHlncmlkIC5jaXR5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestinationerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-destinationer',
          templateUrl: './destinationer.component.html',
          styleUrls: ['./destinationer.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/forside/forside.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/forside/forside.component.ts ***!
    \**********************************************/

  /*! exports provided: ForsideComponent */

  /***/
  function srcAppForsideForsideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForsideComponent", function () {
      return ForsideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForsideComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var city_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r11.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r11.name, "");
      }
    }

    function ForsideComponent_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var city_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r12.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r12.name, "");
      }
    }

    function ForsideComponent_ng_container_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var city_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r13.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r13.name, "");
      }
    }

    function ForsideComponent_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var city_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r14.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r14.name, "");
      }
    }

    function ForsideComponent_ng_container_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var city_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r15.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r15.name, "");
      }
    }

    function ForsideComponent_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var city_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r16.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r16.name, "");
      }
    }

    function ForsideComponent_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var city_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", city_r17.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r17.name, "");
      }
    }

    function ForsideComponent_div_59_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForsideComponent_div_59_div_1_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var news_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.goToNewsPage(news_r19.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var news_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", news_r19.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r19.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r19.teaser);
      }
    }

    function ForsideComponent_div_59_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForsideComponent_div_59_div_1_div_1_Template, 6, 3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r20 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r20 < 3);
      }
    }

    function ForsideComponent_div_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForsideComponent_div_59_div_1_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.news.items);
      }
    }

    function ForsideComponent_div_63_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForsideComponent_div_63_div_1_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var room_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r30.goToRoomPage(room_r27.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var room_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", room_r27.images[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](room_r27.room_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](room_r27.description);
      }
    }

    function ForsideComponent_div_63_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForsideComponent_div_63_div_1_div_1_Template, 6, 3, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r28 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r28 < 3);
      }
    }

    function ForsideComponent_div_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ForsideComponent_div_63_div_1_Template, 2, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.rooms.items);
      }
    }

    var ForsideComponent = /*#__PURE__*/function () {
      function ForsideComponent(router, http) {
        _classCallCheck(this, ForsideComponent);

        this.router = router;
        this.http = http;
      }

      _createClass(ForsideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.http.get("https://api.mediehuset.net/overlook/news").subscribe(function (data) {
            _this6.news = data;
            console.log(_this6.news);
          });
          this.http.get("https://api.mediehuset.net/overlook/rooms/by_hotel/1").subscribe(function (data) {
            _this6.rooms = data;
            console.log(_this6.rooms);
          });
          this.http.get("https://api.mediehuset.net/overlook/cities/by_country/1").subscribe(function (data) {
            _this6.country1 = data;
            console.log(_this6.country1);
          });
          this.http.get("https://api.mediehuset.net/overlook/cities/by_country/2").subscribe(function (data) {
            _this6.country2 = data;
            console.log(_this6.country2);
          });
          this.http.get("https://api.mediehuset.net/overlook/cities/by_country/3").subscribe(function (data) {
            _this6.country3 = data;
            console.log(_this6.country3);
          });
          this.http.get("https://api.mediehuset.net/overlook/cities/by_country/4").subscribe(function (data) {
            _this6.country4 = data;
            console.log(_this6.country4);
          });
          this.http.get("https://api.mediehuset.net/overlook/cities/by_country/5").subscribe(function (data) {
            _this6.country5 = data;
            console.log(_this6.country5);
          });
          this.http.get("https://api.mediehuset.net/overlook/cities/by_country/6").subscribe(function (data) {
            _this6.country6 = data;
            console.log(_this6.country6);
          });
          this.http.get("https://api.mediehuset.net/overlook/cities/by_country/7").subscribe(function (data) {
            _this6.country7 = data;
            console.log(_this6.country7);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          showSlides();
        }
      }, {
        key: "goToNewsPage",
        value: function goToNewsPage(NewsId) {
          this.router.navigate(['/newsside', NewsId]);
        }
      }, {
        key: "goToRoomPage",
        value: function goToRoomPage(VaerelseId) {
          this.router.navigate(['/vaerelse', VaerelseId]);
        }
      }, {
        key: "goToSearchPage",
        value: function goToSearchPage(cityId, num) {
          console.log(num);
          this.router.navigate(['search/', cityId, num]);
        }
      }]);

      return ForsideComponent;
    }();

    ForsideComponent.ɵfac = function ForsideComponent_Factory(t) {
      return new (t || ForsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ForsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForsideComponent,
      selectors: [["app-forside"]],
      decls: 80,
      vars: 9,
      consts: [[1, "search"], [1, "searchitem", "first"], [1, "searchitem", "city"], ["city", ""], ["value", "", "disabled", "", "selected", ""], [4, "ngFor", "ngForOf"], [1, "searchitem"], ["type", "date", "id", "birthday", "name", "birthday"], ["num", ""], ["value", "1"], ["value", "2"], ["value", "3"], [3, "click"], [1, "slideshow-container"], [1, "mySlides", "fade"], ["src", "../../assets/slide1.jpg"], ["src", "../../assets/slide2.jpg"], ["src", "../../assets/slide3.jpg"], ["onclick", "plusSlides(-1)", 1, "prev"], ["onclick", "plusSlides(1)", 1, "next"], [1, "header"], [1, "header2"], ["class", "newsgrid", 4, "ngIf"], ["class", "roomgrid", 4, "ngIf"], [1, "footergrid"], [1, "copy"], ["id", "social"], ["href", "#", 1, "facebookBtn", "smGlobalBtn"], ["href", "#", 1, "twitterBtn", "smGlobalBtn"], [1, "links"], [3, "value"], [1, "newsgrid"], ["class", "news", 3, "click", 4, "ngIf"], [1, "news", 3, "click"], ["alt", "News image", 3, "src"], [1, "title"], [1, "teaser"], [1, "roomgrid"], ["class", "rooms", 3, "click", 4, "ngIf"], [1, "rooms", 3, "click"], ["alt", "Room image", 3, "src"]],
      template: function ForsideComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find dit v\xE6relse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hvor vil du hen og hvorn\xE5r vil du det?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Destination: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "V\xE6lg destination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ForsideComponent_ng_container_12_Template, 3, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ForsideComponent_ng_container_13_Template, 3, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ForsideComponent_ng_container_14_Template, 3, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ForsideComponent_ng_container_15_Template, 3, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ForsideComponent_ng_container_16_Template, 3, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ForsideComponent_ng_container_17_Template, 3, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForsideComponent_ng_container_18_Template, 3, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Check-in: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Check-out: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Antal personer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForsideComponent_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx.goToSearchPage(_r0.value, _r8.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "S\xF8g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u276E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u276F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "VELKOMMEN TIL HOTEL OVERLOOK ONLINE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Se vores nyheder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ForsideComponent_div_59_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Udvalgte v\xE6relser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ForsideComponent_div_63_Template, 2, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\xA9 2020 Hotel Overlook. Alle Rettigheder forbeholdt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Hoteller og Destinationer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " V\xE6relser ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Reservation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Om Overlook ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country1.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country2.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country3.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country4.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country5.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country6.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country7.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.news);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rooms);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap\")[_ngcontent-%COMP%];\n@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\");\n@charset \"UTF-8\";\n.search[_ngcontent-%COMP%] {\n  width: 70%;\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: repeat(auto-fill, minmax(calc(100px + 30 * ((100vw - 320px) / 680)), 1fr));\n  grid-auto-rows: auto;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  position: absolute;\n  top: 100px;\n  left: 15%;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  box-shadow: 0px 0px 8px 2px #000000;\n  background-color: white;\n  z-index: 2;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: left;\n  padding: 15px 5%;\n  height: calc(125px - 15 * ((100vw - 320px) / 680));\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: red;\n  height: 50%;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-top: 22%;\n}\n.search[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  background-color: rgba(131, 131, 131, 0.363);\n  border-right: 1px solid gray;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.mySlides[_ngcontent-%COMP%] {\n  display: none;\n}\n.mySlides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  width: 100%;\n  height: 80vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.slideshow-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  margin: auto;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n  position: absolute;\n  top: 50%;\n  padding: 11px 20px;\n  color: #7e7e7e;\n  font-weight: 600;\n  font-size: 22px;\n  transition: 0.6s ease;\n  border-radius: 50%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: white;\n  box-shadow: 1px 3px 8px 0px #474747;\n  transition: 0.5s ease-in-out;\n}\n\n.next[_ngcontent-%COMP%] {\n  right: 10px;\n}\n.prev[_ngcontent-%COMP%] {\n  padding: 11px 18px;\n  left: 10px;\n}\n\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 3px 9px 0px #000000;\n  color: #303030;\n  transition: 0.5s ease-in-out;\n}\n\n.fade[_ngcontent-%COMP%] {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@media only screen and (max-width: 300px) {\n  .prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%], .text[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 60%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  z-index: 2;\n  letter-spacing: 2px;\n  font-weight: 300;\n  border-radius: 0px 0px 100px 0px;\n  background: #000b28;\n  background: linear-gradient(90deg, #000b28 0%, rgba(0, 12, 38, 0.7402311266) 50%);\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n  padding-left: 10px;\n}\n.header2[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: left;\n  font-family: \"Open Sans\", sans-serif;\n  margin: auto;\n  margin-top: 5vh;\n  color: #636363;\n  font-weight: 600;\n  font-size: 30px;\n}\n.newsgrid[_ngcontent-%COMP%], .roomgrid[_ngcontent-%COMP%] {\n  width: 80%;\n  display: grid;\n  grid-gap: 5%;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-rows: auto;\n  margin: 5vh auto 15vh auto;\n  font-family: \"Open Sans\", sans-serif;\n  position: relative;\n  color: gray;\n  border-bottom: 5px dashed gray;\n  padding-bottom: calc(200px - 100 * ((100vw - 320px) / 680));\n}\n.newsgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], .newsgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%], .roomgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%], .roomgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: center;\n  height: 360px;\n  position: relative;\n  overflow: hidden;\n  font-family: \"Gothic A1\", sans-serif;\n  font-weight: 300;\n  transition: 1s;\n  text-align: left;\n}\n.newsgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .newsgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .roomgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .roomgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  border-radius: 5px;\n}\n.newsgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .newsgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .roomgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .roomgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 25px;\n  margin: 0;\n}\n.newsgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .teaser[_ngcontent-%COMP%], .newsgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .teaser[_ngcontent-%COMP%], .roomgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]   .teaser[_ngcontent-%COMP%], .roomgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .teaser[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.newsgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]:hover, .newsgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]:hover, .roomgrid[_ngcontent-%COMP%]   .news[_ngcontent-%COMP%]:hover, .roomgrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  color: #3d3d3d;\n}\n.roomgrid[_ngcontent-%COMP%] {\n  border: none;\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: white;\n  border-top: 1px solid #7c7c7c;\n}\n.footergrid[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  text-align: center;\n  color: #888888;\n  font-size: 13px;\n}\n.footergrid[_ngcontent-%COMP%]   .copy[_ngcontent-%COMP%] {\n  padding-top: 10%;\n}\n.footergrid[_ngcontent-%COMP%]   #social[_ngcontent-%COMP%] {\n  margin: 20px 10px;\n  text-align: center;\n}\n.footergrid[_ngcontent-%COMP%]   #social[_ngcontent-%COMP%]   .smGlobalBtn[_ngcontent-%COMP%] {\n  \n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  margin: 0 5px;\n  text-decoration: none;\n  text-align: center;\n  color: #fff;\n  font-size: 20px;\n  font-weight: normal;\n  line-height: 2em;\n  border-radius: 27px;\n  -moz-border-radius: 27px;\n  -webkit-border-radius: 27px;\n}\n.footergrid[_ngcontent-%COMP%]   #social[_ngcontent-%COMP%]   .facebookBtn[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  background: #888888;\n}\n.footergrid[_ngcontent-%COMP%]   #social[_ngcontent-%COMP%]   .facebookBtn[_ngcontent-%COMP%]:before {\n  font-family: \"FontAwesome\";\n  content: \"\uF09A\";\n}\n.footergrid[_ngcontent-%COMP%]   #social[_ngcontent-%COMP%]   .facebookBtn[_ngcontent-%COMP%]:hover {\n  color: #888888;\n  background: #fff;\n}\n.footergrid[_ngcontent-%COMP%]   #social[_ngcontent-%COMP%]   .twitterBtn[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  background: #888888;\n}\n.footergrid[_ngcontent-%COMP%]   #social[_ngcontent-%COMP%]   .twitterBtn[_ngcontent-%COMP%]:before {\n  font-family: \"FontAwesome\";\n  content: \"\uF099\";\n}\n.footergrid[_ngcontent-%COMP%]   #social[_ngcontent-%COMP%]   .twitterBtn[_ngcontent-%COMP%]:hover {\n  color: #888888;\n  background: #fff;\n}\n@media only screen and (max-width: 480px) {\n  .footergrid[_ngcontent-%COMP%]   #social[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.footergrid[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  padding-top: 10%;\n}\n.footergrid[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yc2lkZS9DOlxcVXNlcnNcXGJydXRhXFxEZXNrdG9wXFxIamVtbWVzaWRlclxcT3Zlcmxvb2tcXG92ZXJsb29rL3NyY1xcYXBwXFxmb3JzaWRlXFxmb3JzaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb3JzaWRlL2ZvcnNpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFRLDJGQUFBO0FBME1BLG9GQUFBO0FDMU1SLGdCQUFnQjtBRENoQjtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlHQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDRix1QkFBQTtFQUNBLDBCQUFBO0VBR0EsbUNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUNHQTtBREZBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSUY7QURIRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0tKO0FESEU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNLSjtBREZBO0VBQ0UsNENBQUE7RUFDQSw0QkFBQTtBQ0lGO0FEREE7RUFBRyxzQkFBQTtBQ0tIO0FESkE7RUFDRSxhQUFBO0FDT0Y7QURORTtFQUFLLHNCQUFBO0VBQ0gsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDU0o7QURMQSx3QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1FGO0FETEEsNEJBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VBR0EsbUNBQUE7RUFDQSw0QkFBQTtBQ1FGO0FETEEsNENBQUE7QUFDQTtFQUNFLFdBQUE7QUNRRjtBRE5BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDU0Y7QUROQSx5RUFBQTtBQUNBO0VBR0UsbUNBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNTRjtBRFBBLHFCQUFBO0FBQ0E7RUFDRSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtBQ1VGO0FEUEE7RUFDRTtJQUFNLFlBQUE7RUNXTjtFRFZBO0lBQUksVUFBQTtFQ2FKO0FBQ0Y7QURYQTtFQUNFO0lBQU0sWUFBQTtFQ2NOO0VEYkE7SUFBSSxVQUFBO0VDZ0JKO0FBQ0Y7QURkQSwyQ0FBQTtBQUNBO0VBQ0U7SUFBb0IsZUFBQTtFQ2lCcEI7QUFDRjtBRGhCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUZBQUE7QUNrQkY7QURqQkU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDbUJKO0FEaEJBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNtQkY7QURqQkE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0REFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsMkRBQUE7QUNvQkY7QURuQkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNxQkY7QURwQkk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNzQk47QURwQkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDc0JOO0FEcEJJO0VBQ0UsU0FBQTtBQ3NCTjtBRG5CRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ3FCSjtBRGxCQTtFQUNFLFlBQUE7QUNxQkY7QURqQkE7RUFDRSx1QkFBQTtFQUNBLDZCQUFBO0FDb0JGO0FEbEJBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDcUJGO0FEcEJFO0VBQ0UsZ0JBQUE7QUNzQko7QURwQkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDc0JKO0FEckJJO0VBQWUsd0JBQUE7RUFDYixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDd0JOO0FEdEJFO0VBQ0UsZ0JBQUE7RUFDRSxtQkFBQTtBQ3dCTjtBRHRCRTtFQUNJLDBCQUFBO0VBQ0EsWUFBQTtBQ3dCTjtBRHRCRTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ3dCTjtBRHRCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUN3Qko7QUR0QkU7RUFDTSwwQkFBQTtFQUNBLFlBQUE7QUN3QlI7QUR0QkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUN3Qko7QUR0QkU7RUFDRTtJQUFVLFdBQUE7RUN5Qlo7QUFDRjtBRHZCRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3lCSjtBRHhCSTtFQUNFLGVBQUE7QUMwQk4iLCJmaWxlIjoic3JjL2FwcC9mb3JzaWRlL2ZvcnNpZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG4uc2VhcmNoe1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heChjYWxjKDEwMHB4ICsgMzAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSksIDFmcikpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBsZWZ0OiAxNSU7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbi1tb3otYm9yZGVyLXJhZGl1czo1cHg7XHJcbi13ZWJraXQtYm9yZGVyLXJhZGl1czo1cHg7XHJcbi13ZWJraXQtYm94LXNoYWRvdzowcHggMHB4IDhweCAycHggIzAwMDAwMCA7XHJcbi1tb3otYm94LXNoYWRvdzowcHggMHB4IDhweCAycHggIzAwMDAwMCA7XHJcbmJveC1zaGFkb3c6MHB4IDBweCA4cHggMnB4ICMwMDAwMDAgO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuei1pbmRleDogMjtcclxuLnNlYXJjaGl0ZW17XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgcGFkZGluZzogMTVweCA1JTtcclxuICBoZWlnaHQ6IGNhbGMoMTI1cHggLSAxNSAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgc3Ryb25ne1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDIyJTtcclxuICB9XHJcbn1cclxuLmZpcnN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4zNjMpO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4KTtcclxufVxyXG59XHJcbioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcbi5teVNsaWRlcyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBpbWcge3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuLyogU2xpZGVzaG93IGNvbnRhaW5lciAqL1xyXG4uc2xpZGVzaG93LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cclxuLnByZXYsIC5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBwYWRkaW5nOiAxMXB4IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMjYsIDEyNiwgMTI2KTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzoxcHggM3B4IDhweCAwcHggIzQ3NDc0NyA7XHJcbiAgLW1vei1ib3gtc2hhZG93OjFweCAzcHggOHB4IDBweCAjNDc0NzQ3IDtcclxuICBib3gtc2hhZG93OjFweCAzcHggOHB4IDBweCAjNDc0NzQ3IDtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgXCJuZXh0IGJ1dHRvblwiIHRvIHRoZSByaWdodCAqL1xyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnByZXZ7XHJcbiAgcGFkZGluZzogMTFweCAxOHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXHJcbi5wcmV2OmhvdmVyLCAubmV4dDpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OjFweCAzcHggOXB4IDBweCAjMDAwMDAwIDtcclxuICAtbW96LWJveC1zaGFkb3c6MXB4IDNweCA5cHggMHB4ICMwMDAwMDAgO1xyXG4gIGJveC1zaGFkb3c6MXB4IDNweCA5cHggMHB4ICMwMDAwMDAgO1xyXG4gIGNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4vKiBGYWRpbmcgYW5pbWF0aW9uICovXHJcbi5mYWRlIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xyXG4gIGZyb20ge29wYWNpdHk6IC40fVxyXG4gIHRvIHtvcGFjaXR5OiAxfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gIGZyb20ge29wYWNpdHk6IC40fVxyXG4gIHRvIHtvcGFjaXR5OiAxfVxyXG59XHJcblxyXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIGRlY3JlYXNlIHRleHQgc2l6ZSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgLnByZXYsIC5uZXh0LC50ZXh0IHtmb250LXNpemU6IDExcHh9XHJcbn1cclxuLmhlYWRlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogMTUlO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMDBweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMDBweCAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsMTEsNDApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDExLDQwLDEpIDAlLCByZ2JhKDAsMTIsMzgsMC43NDAyMzExMjY2MzAzMzk2KSA1MCUpO1xyXG4gIGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuLmhlYWRlcjJ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLm5ld3NncmlkLCAucm9vbWdyaWR7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiA1JTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgbWFyZ2luOiA1dmggYXV0byAxNXZoIGF1dG87XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgpO1xyXG4gIGJvcmRlci1ib3R0b206NXB4IGRhc2hlZCByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMjAwcHggLSAxMDAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XHJcbi5uZXdzLCAucm9vbXN7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBoZWlnaHQ6IDM2MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtZmFtaWx5OiAnR290aGljIEExJywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBpbWd7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAudGVhc2Vye1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uZXdzOmhvdmVyLCAucm9vbXM6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICBjb2xvcjogcmdiKDYxLCA2MSwgNjEpO1xyXG4gIH1cclxufVxyXG4ucm9vbWdyaWR7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbkBpbXBvcnQgdXJsKCcvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuLy9mb290ZXJcclxuZm9vdGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDEyNCwgMTI0LCAxMjQpO1xyXG59XHJcbi5mb290ZXJncmlke1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxMzYsIDEzNiwgMTM2KTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLmNvcHl7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIH1cclxuICAjc29jaWFsIHtcclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnNtR2xvYmFsQnRuIHsgLyogZ2xvYmFsIGJ1dHRvbiBjbGFzcyAqL1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyN3B4O1xyXG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6MjdweDtcclxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjI3cHg7XHJcbiAgfVxyXG4gIC5mYWNlYm9va0J0bntcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDEzNiwgMTM2LCAxMzYpO1xyXG4gIH1cclxuICAuZmFjZWJvb2tCdG46YmVmb3Jle1xyXG4gICAgICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG4gICAgICBjb250ZW50OiBcIlxcZjA5YVwiO1xyXG4gIH1cclxuICAuZmFjZWJvb2tCdG46aG92ZXJ7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gIC50d2l0dGVyQnRue1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDEzNiwgMTM2LCAxMzYpO1xyXG4gIH1cclxuICAudHdpdHRlckJ0bjpiZWZvcmV7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcclxuICAgICAgICBjb250ZW50OiBcIlxcZjA5OVwiO1xyXG4gIH1cclxuICAudHdpdHRlckJ0bjpob3ZlcntcclxuICAgIGNvbG9yOiByZ2IoMTM2LCAxMzYsIDEzNik7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuc2VjdGlvbnsgd2lkdGg6IDEwMCU7IH1cclxuICB9XHJcbiAgfVxyXG4gIC5saW5rc3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICBwe1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCIvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XG4uc2VhcmNoIHtcbiAgd2lkdGg6IDcwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDA7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KGNhbGMoMTAwcHggKyAzMCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKSwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4ICMwMDAwMDA7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMjtcbn1cbi5zZWFyY2ggLnNlYXJjaGl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxNXB4IDUlO1xuICBoZWlnaHQ6IGNhbGMoMTI1cHggLSAxNSAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2VhcmNoIC5zZWFyY2hpdGVtIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5zZWFyY2ggLnNlYXJjaGl0ZW0gYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGhlaWdodDogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAyMiU7XG59XG4uc2VhcmNoIC5maXJzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4zNjMpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5O1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm15U2xpZGVzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5teVNsaWRlcyBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLyogU2xpZGVzaG93IGNvbnRhaW5lciAqL1xuLnNsaWRlc2hvdy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXG4ucHJldiwgLm5leHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHBhZGRpbmc6IDExcHggMjBweDtcbiAgY29sb3I6ICM3ZTdlN2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggM3B4IDhweCAwcHggIzQ3NDc0NztcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDhweCAwcHggIzQ3NDc0NztcbiAgYm94LXNoYWRvdzogMXB4IDNweCA4cHggMHB4ICM0NzQ3NDc7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBcIm5leHQgYnV0dG9uXCIgdG8gdGhlIHJpZ2h0ICovXG4ubmV4dCB7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ucHJldiB7XG4gIHBhZGRpbmc6IDExcHggMThweDtcbiAgbGVmdDogMTBweDtcbn1cblxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cbi5wcmV2OmhvdmVyLCAubmV4dDpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDNweCA5cHggMHB4ICMwMDAwMDA7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDNweCA5cHggMHB4ICMwMDAwMDA7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggOXB4IDBweCAjMDAwMDAwO1xuICBjb2xvcjogIzMwMzAzMDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbn1cblxuLyogRmFkaW5nIGFuaW1hdGlvbiAqL1xuLmZhZGUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogT24gc21hbGxlciBzY3JlZW5zLCBkZWNyZWFzZSB0ZXh0IHNpemUgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcbiAgLnByZXYsIC5uZXh0LCAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG59XG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTUlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcbiAgYmFja2dyb3VuZDogIzAwMGIyODtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwYjI4IDAlLCByZ2JhKDAsIDEyLCAzOCwgMC43NDAyMzExMjY2KSA1MCUpO1xufVxuLmhlYWRlciBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmhlYWRlcjIge1xuICB3aWR0aDogODAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5uZXdzZ3JpZCwgLnJvb21ncmlkIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDUlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICBtYXJnaW46IDV2aCBhdXRvIDE1dmggYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGdyYXk7XG4gIGJvcmRlci1ib3R0b206IDVweCBkYXNoZWQgZ3JheTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMjAwcHggLSAxMDAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XG59XG4ubmV3c2dyaWQgLm5ld3MsIC5uZXdzZ3JpZCAucm9vbXMsIC5yb29tZ3JpZCAubmV3cywgLnJvb21ncmlkIC5yb29tcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogXCJHb3RoaWMgQTFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubmV3c2dyaWQgLm5ld3MgaW1nLCAubmV3c2dyaWQgLnJvb21zIGltZywgLnJvb21ncmlkIC5uZXdzIGltZywgLnJvb21ncmlkIC5yb29tcyBpbWcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubmV3c2dyaWQgLm5ld3MgLnRpdGxlLCAubmV3c2dyaWQgLnJvb21zIC50aXRsZSwgLnJvb21ncmlkIC5uZXdzIC50aXRsZSwgLnJvb21ncmlkIC5yb29tcyAudGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5uZXdzZ3JpZCAubmV3cyAudGVhc2VyLCAubmV3c2dyaWQgLnJvb21zIC50ZWFzZXIsIC5yb29tZ3JpZCAubmV3cyAudGVhc2VyLCAucm9vbWdyaWQgLnJvb21zIC50ZWFzZXIge1xuICBtYXJnaW46IDA7XG59XG4ubmV3c2dyaWQgLm5ld3M6aG92ZXIsIC5uZXdzZ3JpZCAucm9vbXM6aG92ZXIsIC5yb29tZ3JpZCAubmV3czpob3ZlciwgLnJvb21ncmlkIC5yb29tczpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgY29sb3I6ICMzZDNkM2Q7XG59XG5cbi5yb29tZ3JpZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjN2M3YzdjO1xufVxuXG4uZm9vdGVyZ3JpZCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzg4ODg4ODtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmZvb3RlcmdyaWQgLmNvcHkge1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuLmZvb3RlcmdyaWQgI3NvY2lhbCB7XG4gIG1hcmdpbjogMjBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyZ3JpZCAjc29jaWFsIC5zbUdsb2JhbEJ0biB7XG4gIC8qIGdsb2JhbCBidXR0b24gY2xhc3MgKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMjdweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyN3B4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI3cHg7XG59XG4uZm9vdGVyZ3JpZCAjc29jaWFsIC5mYWNlYm9va0J0biB7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJhY2tncm91bmQ6ICM4ODg4ODg7XG59XG4uZm9vdGVyZ3JpZCAjc29jaWFsIC5mYWNlYm9va0J0bjpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIu+CmlwiO1xufVxuLmZvb3RlcmdyaWQgI3NvY2lhbCAuZmFjZWJvb2tCdG46aG92ZXIge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5mb290ZXJncmlkICNzb2NpYWwgLnR3aXR0ZXJCdG4ge1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBiYWNrZ3JvdW5kOiAjODg4ODg4O1xufVxuLmZvb3RlcmdyaWQgI3NvY2lhbCAudHdpdHRlckJ0bjpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIu+CmVwiO1xufVxuLmZvb3RlcmdyaWQgI3NvY2lhbCAudHdpdHRlckJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZm9vdGVyZ3JpZCAjc29jaWFsIC5zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmZvb3RlcmdyaWQgLmxpbmtzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG4uZm9vdGVyZ3JpZCAubGlua3MgcCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forside',
          templateUrl: './forside.component.html',
          styleUrls: ['./forside.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hotel/hotel.component.ts":
  /*!******************************************!*\
    !*** ./src/app/hotel/hotel.component.ts ***!
    \******************************************/

  /*! exports provided: HotelComponent */

  /***/
  function srcAppHotelHotelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotelComponent", function () {
      return HotelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HotelComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/distinationer/", country_r4.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r4.name);
      }
    }

    function HotelComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HotelComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var room_r8 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate4"]("routerLink", "/vaerelse/", room_r8.id, "/", ctx_r2.hotel.item.id, "/", ctx_r2.country.item.id, "/", ctx_r2.hotel.item.city_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", room_r8.images[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](room_r8.room_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", room_r8.area, ". Plads til ", room_r8.num_persons, " personer.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](room_r8.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fra ", room_r8.day_price_normal, " DKK");
      }
    }

    function HotelComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r10.title);
      }
    }

    var HotelComponent = /*#__PURE__*/function () {
      function HotelComponent(route, router, http) {
        _classCallCheck(this, HotelComponent);

        this.route = route;
        this.router = router;
        this.http = http;
      }

      _createClass(HotelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          var hotelId = this.route.snapshot.paramMap.get('hotelid');
          var countryId = this.route.snapshot.paramMap.get('countryid');
          this.http.get("https://api.mediehuset.net/overlook/hotels/".concat(hotelId)).subscribe(function (data) {
            _this7.hotel = data;
          });
          this.http.get("https://api.mediehuset.net/overlook/rooms/by_hotel/".concat(hotelId)).subscribe(function (data) {
            _this7.rooms = data;
          });
          this.http.get("https://api.mediehuset.net/overlook/countries").subscribe(function (data) {
            _this7.countries = data;
          });
          this.http.get("https://api.mediehuset.net/overlook/countries/".concat(countryId)).subscribe(function (data) {
            _this7.country = data;
          });
          this.http.get("https://api.mediehuset.net/overlook/cities/".concat(countryId)).subscribe(function (data) {
            _this7.hotels = data;
          });
        }
      }]);

      return HotelComponent;
    }();

    HotelComponent.ɵfac = function HotelComponent_Factory(t) {
      return new (t || HotelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    HotelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HotelComponent,
      selectors: [["app-hotel"]],
      decls: 32,
      vars: 13,
      consts: [["alt", "countryimage", 1, "heroimage", 3, "src"], [1, "header"], [1, "countrynav"], [4, "ngFor", "ngForOf"], [1, "pagegrid"], [1, "rooms"], [1, "header2"], [1, "stars"], ["class", "stars", 4, "ngFor", "ngForOf"], [1, "desc"], [1, "cities"], [1, "adress"], [1, "phone"], [1, "country", 3, "routerLink"], ["src", "../../assets/star-images-9454.png", "alt", ""], [1, "room", 3, "routerLink"], ["alt", "roomimage", 3, "src"], [1, "text"], [1, "price"], [1, "city"]],
      template: function HotelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HOTELLER OG DESTINATIONER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HotelComponent_div_5_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HotelComponent_div_15_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vores v\xE6relser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HotelComponent_div_21_Template, 14, 10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hotel Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Faciliteter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HotelComponent_div_31_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.hotel.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("Hotel Overlook > Hoteller og Destinationer > ", ctx.country.item.name, " > ", ctx.hotel.item.city_name, " > ", ctx.hotel.item.title, " ", ctx.hotel.item.city_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hotel.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", " ".repeat(ctx.hotel.item.num_stars).split(""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hotel.item.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rooms.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hotel.item.address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hotel.item.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotel.item.facilities);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap\")[_ngcontent-%COMP%];\n@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\");\n@charset \"UTF-8\";\n.heroimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 60%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  z-index: 2;\n  letter-spacing: 2px;\n  font-weight: 300;\n  border-radius: 0px 0px 100px 0px;\n  background: #000b28;\n  background: linear-gradient(90deg, #000b28 0%, rgba(0, 12, 38, 0.7402311266) 50%);\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n  padding-left: 10px;\n}\n.pagegrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-row: auto;\n  width: 90%;\n  margin: auto;\n  margin-top: 7vh;\n}\n.pagegrid[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  width: 50%;\n  margin: 5px 0;\n}\n.pagegrid[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: auto;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  padding-left: 5%;\n  margin-top: 10vh;\n  color: #494949;\n  cursor: pointer;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .header2[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n  font-family: \"Open Sans\", sans-serif;\n  margin: auto;\n  margin-top: 2vh;\n  color: #636363;\n  font-weight: 600;\n  font-size: 30px;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  border-bottom: 5px dashed gray;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .room[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 70%;\n  grid-row: auto;\n  width: 90%;\n  margin: auto;\n  background-color: white;\n  margin-bottom: 3vh;\n  padding: 20px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .room[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .room[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .room[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 20px;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .room[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: 0.5s;\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%] {\n  padding-left: 10%;\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  cursor: pointer;\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]:before {\n  content: \" \";\n  font-family: \"FontAwesome\";\n  content: \"\uF08D\";\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]:before {\n  content: \" \";\n  font-family: \"FontAwesome\";\n  content: \"\uF0E0\";\n}\n.countrynav[_ngcontent-%COMP%] {\n  text-align: center;\n  width: calc(400px + 200 * ((100vw - 320px) / 680));\n  color: #838383;\n  display: grid;\n  margin: 2vh auto 2vh auto;\n  padding-bottom: 2vh;\n  font-family: \"Open Sans\", sans-serif;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  box-shadow: 0 4px 2px -2px gray;\n  cursor: pointer;\n}\n@media only screen and (max-width: 600px) {\n  .pagegrid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG90ZWwvQzpcXFVzZXJzXFxicnV0YVxcRGVza3RvcFxcSGplbW1lc2lkZXJcXE92ZXJsb29rXFxvdmVybG9vay9zcmNcXGFwcFxcaG90ZWxcXGhvdGVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob3RlbC9ob3RlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQVEsMkZBQUE7QUFDQSxvRkFBQTtBQ0RSLGdCQUFnQjtBREVoQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0VGO0FEQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlGQUFBO0FDR0Y7QURGRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBRERBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0lGO0FESEU7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0tKO0FESkk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ01MO0FERkk7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lOO0FERkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0lOO0FERkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDSU47QURGTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSVI7QURIUTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDS1Y7QURIUTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FDS1Y7QURKVTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNNWjtBREZNO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQ0lSO0FEREE7RUFDRSxpQkFBQTtBQ0dGO0FERkU7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUNJSjtBREZJO0VBQ0YsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSUY7QURGQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNJRjtBREZBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQ0lGO0FEQUE7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrREFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0dGO0FEREE7RUFDRTtJQUNFLDBCQUFBO0VDSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsL2hvdGVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG4uaGVyb2ltYWdle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAxNSU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMjtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwxMSw0MCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMTEsNDAsMSkgMCUsIHJnYmEoMCwxMiwzOCwwLjc0MDIzMTEyNjYzMDMzOTYpIDUwJSk7XHJcbiAgaDJ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG4ucGFnZWdyaWR7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDcwJSAzMCU7XHJcbiAgZ3JpZC1yb3c6IGF1dG87XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gIC5zdGFyc3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGltZ3tcclxuICAgICB3aWR0aDogMzBweDtcclxuICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yb29tc3tcclxuICAgIGg0e1xyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICAgIGNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5oZWFkZXIye1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZGVzY3tcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206NXB4IGRhc2hlZCByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgICB9XHJcbiAgICAgIC5yb29te1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgNzAlO1xyXG4gICAgICAgIGdyaWQtcm93OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucm9vbTpob3ZlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgIH1cclxuICB9XHJcbi5jaXRpZXN7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgaDR7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gIH1cclxuICAgIHB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZHJlc3M6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XHJcbiAgY29udGVudDogXCJcXGYwOGRcIjtcclxufVxyXG4ucGhvbmU6YmVmb3Jle1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XHJcbiAgY29udGVudDogXCJcXGYwZTBcIjtcclxufVxyXG59XHJcbn1cclxuLmNvdW50cnluYXZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiBjYWxjKDQwMHB4ICsgMjAwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xyXG4gIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBtYXJnaW46IDJ2aCBhdXRvIDJ2aCBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAydmg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAucGFnZWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG59XHJcbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4zLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIpO1xuLmhlcm9pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTUlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcbiAgYmFja2dyb3VuZDogIzAwMGIyODtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwYjI4IDAlLCByZ2JhKDAsIDEyLCAzOCwgMC43NDAyMzExMjY2KSA1MCUpO1xufVxuLmhlYWRlciBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnBhZ2VncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MCUgMzAlO1xuICBncmlkLXJvdzogYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA3dmg7XG59XG4ucGFnZWdyaWQgLnN0YXJzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDVweCAwO1xufVxuLnBhZ2VncmlkIC5zdGFycyBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnBhZ2VncmlkIC5yb29tcyBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBjb2xvcjogIzQ5NDk0OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhZ2VncmlkIC5yb29tcyAuaGVhZGVyMiB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5wYWdlZ3JpZCAucm9vbXMgLmRlc2Mge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzYzNjM2MztcbiAgYm9yZGVyLWJvdHRvbTogNXB4IGRhc2hlZCBncmF5O1xufVxuLnBhZ2VncmlkIC5yb29tcyAucm9vbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDcwJTtcbiAgZ3JpZC1yb3c6IGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgcGFkZGluZzogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLnBhZ2VncmlkIC5yb29tcyAucm9vbSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucGFnZWdyaWQgLnJvb21zIC5yb29tIC50ZXh0IHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2MzYzNjM7XG59XG4ucGFnZWdyaWQgLnJvb21zIC5yb29tIC50ZXh0IC5wcmljZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBhZ2VncmlkIC5yb29tcyAucm9vbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ucGFnZWdyaWQgLmNpdGllcyB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xufVxuLnBhZ2VncmlkIC5jaXRpZXMgaDQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2MzYzNjM7XG59XG4ucGFnZWdyaWQgLmNpdGllcyBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzYzNjM2MztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhZ2VncmlkIC5jaXRpZXMgLmFkcmVzczpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCLvgo1cIjtcbn1cbi5wYWdlZ3JpZCAuY2l0aWVzIC5waG9uZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIjtcbiAgY29udGVudDogXCLvg6BcIjtcbn1cblxuLmNvdW50cnluYXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDQwMHB4ICsgMjAwICogKCgxMDB2dyAtIDMyMHB4KSAvIDY4MCkpO1xuICBjb2xvcjogIzgzODM4MztcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luOiAydmggYXV0byAydmggYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDJ2aDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnBhZ2VncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hotel',
          templateUrl: './hotel.component.html',
          styleUrls: ['./hotel.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hoteller/hoteller.component.ts":
  /*!************************************************!*\
    !*** ./src/app/hoteller/hoteller.component.ts ***!
    \************************************************/

  /*! exports provided: HotellerComponent */

  /***/
  function srcAppHotellerHotellerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotellerComponent", function () {
      return HotellerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HotellerComponent = /*#__PURE__*/function () {
      function HotellerComponent() {
        _classCallCheck(this, HotellerComponent);
      }

      _createClass(HotellerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HotellerComponent;
    }();

    HotellerComponent.ɵfac = function HotellerComponent_Factory(t) {
      return new (t || HotellerComponent)();
    };

    HotellerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HotellerComponent,
      selectors: [["app-hoteller"]],
      decls: 2,
      vars: 0,
      template: function HotellerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "hoteller works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsbGVyL2hvdGVsbGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HotellerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hoteller',
          templateUrl: './hoteller.component.html',
          styleUrls: ['./hoteller.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, fb, http) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.fb = fb;
        this.http = http;
        this.clickCounter = 0;
        this.name = '';
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          var formData = new FormData();
          formData.append('username', this.loginForm.get('username').value);
          formData.append('password', this.loginForm.get('password').value);

          if (this.loginForm.get('username').value !== '' && this.loginForm.get('password').value !== '') {
            this.http.post('https://api.mediehuset.net/token', formData).subscribe(function (response) {
              console.log(response.access_token);

              if (response.access_token) {
                _this8.setCookie('token', response.access_token, 7);

                _this8.setCookie('user_id', response.user_id, 7);

                _this8.router.navigate(['/forside']);

                return true;
              } else {
                return;
              }
            }, function (error) {
              var err = document.getElementsByTagName('form')[0];
              console.log(err);

              if (!document.getElementsByClassName('error')[0]) {
                err.insertAdjacentHTML('afterbegin', "<p class=\"error\">Der er noget der er g\xE5et helt galt!</p>");
              }
            });
          } else {
            var err = document.getElementsByTagName('form')[0];

            if (!document.getElementsByClassName('error')[0]) {
              err.insertAdjacentHTML('afterbegin', "<p class=\"error\">Du skal lige huske og udfylde felterne!</p>");
            }
          }
        }
      }, {
        key: "setCookie",
        value: function setCookie(cnamne, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
          var expires = 'expires=' + d.toUTCString;
          document.cookie = "".concat(cnamne, " = ").concat(cvalue, "; ").concat(expires, ";path=/");
        }
      }, {
        key: "focus",
        value: function focus() {
          var errMessage = document.getElementsByClassName('error')[0].remove();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 82,
      vars: 1,
      consts: [[1, "search"], [1, "searchitem", "first"], [1, "searchitem"], ["value", "", "disabled", "", "selected", ""], ["type", "date", "id", "birthday", "name", "birthday"], ["src", "../../assets/overlook-victoria.jpg", "alt", "countryimage", 1, "heroimage"], [1, "header2"], [1, "desc"], [1, "login-form", 3, "formGroup", "ngSubmit"], ["for", "username", 1, "username-label"], [1, "red"], ["type", "text", "name", "username", "id", "username", "formControlName", "username", "placeholder", "Indtast dit brugernavn", 3, "focus"], ["for", "password", 1, "password-label"], ["type", "password", "name", "password", "id", "password", "formControlName", "password", "placeholder", "Indtast din adgangskode", 3, "focus"], ["type", "login"], ["type", "login", 1, "button2"], [1, "error"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Find dit v\xE6relse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hvor vil du hen og hvorn\xE5r vil du det?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Destination: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "V\xE6lg destination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Danmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sverige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Norge");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Island");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Finland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tyskland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Polen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Check-in: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Check-out: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Antal personer: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "S\xF8g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Hotel Overlook > Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Her kan du logge ind og administrere dine reservationer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_66_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Brugernavn:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function LoginComponent_Template_input_focus_71_listener() {
            return ctx.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Adgangskode:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function LoginComponent_Template_input_focus_76_listener() {
            return ctx.focus();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Annuler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap\")[_ngcontent-%COMP%];\n.search[_ngcontent-%COMP%] {\n  width: 70%;\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: repeat(auto-fill, minmax(calc(100px + 30 * ((100vw - 320px) / 680)), 1fr));\n  grid-auto-rows: auto;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  position: absolute;\n  top: 100px;\n  left: 15%;\n  border-radius: 5px;\n  -moz-border-radius: 5px;\n  -webkit-border-radius: 5px;\n  box-shadow: 0px 0px 8px 2px #000000;\n  background-color: white;\n  z-index: 2;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%] {\n  display: grid;\n  text-align: left;\n  padding: 15px 5%;\n  height: calc(100px - 15 * ((100vw - 320px) / 680));\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n}\n.search[_ngcontent-%COMP%]   .searchitem[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  background-color: red;\n  height: 50%;\n  border: 1px solid black;\n  border-radius: 5px;\n  margin-top: 22%;\n}\n.search[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%] {\n  background-color: rgba(131, 131, 131, 0.363);\n  border-right: 1px solid gray;\n}\n.heroimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 60%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  z-index: 2;\n  letter-spacing: 2px;\n  font-weight: 300;\n  border-radius: 0px 0px 100px 0px;\n  background: #000b28;\n  background: linear-gradient(90deg, #000b28 0%, rgba(0, 12, 38, 0.7402311266) 50%);\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n  padding-left: 10px;\n}\nh4[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  padding-left: 10%;\n  margin-top: 10vh;\n  color: #494949;\n}\n.header2[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: left;\n  font-family: \"Open Sans\", sans-serif;\n  margin: auto;\n  margin-top: 2vh;\n  color: #636363;\n  font-weight: 600;\n  font-size: 30px;\n}\n.desc[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  border-bottom: 5px dashed gray;\n}\n.desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.login-form[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 500px;\n  margin-left: 10%;\n  margin-top: 5vh;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n}\n.login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 5px;\n}\n.login-form[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  color: red;\n}\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  outline: 0;\n  background: #ffffff;\n  width: 100%;\n  border: 0;\n  margin: 0 0 25px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n  border-radius: 5px;\n}\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background: red;\n  width: 25%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: 0.3s;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 0, 0, 0.562);\n  transition: 0.3s;\n  transform: scale(1.05);\n}\n.login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n.login-form[_ngcontent-%COMP%]   .button2[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxicnV0YVxcRGVza3RvcFxcSGplbW1lc2lkZXJcXE92ZXJsb29rXFxvdmVybG9vay9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRkFBQTtBQUNSO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUdBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNGLHVCQUFBO0VBQ0EsMEJBQUE7RUFHQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQ0NBO0FEQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFRjtBRERFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDR0o7QURERTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEQUE7RUFDRSw0Q0FBQTtFQUNBLDRCQUFBO0FDRUY7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0VGO0FEQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlGQUFBO0FDR0Y7QURGRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBRERBO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0lGO0FERkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0tGO0FESEE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDTUY7QURMRTtFQUNFLFVBQUE7QUNPSjtBREpBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUNPRjtBRE5FO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ1FKO0FETkU7RUFDRSxVQUFBO0FDUUo7QURORTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1FKO0FETkU7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDUUo7QURORTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1FKO0FETkU7RUFDRSxxQkFBQTtBQ1FKO0FETkU7RUFDRSxpQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG4uc2VhcmNoe1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heChjYWxjKDEwMHB4ICsgMzAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSksIDFmcikpO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDBweDtcclxuICBsZWZ0OiAxNSU7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbi1tb3otYm9yZGVyLXJhZGl1czo1cHg7XHJcbi13ZWJraXQtYm9yZGVyLXJhZGl1czo1cHg7XHJcbi13ZWJraXQtYm94LXNoYWRvdzowcHggMHB4IDhweCAycHggIzAwMDAwMCA7XHJcbi1tb3otYm94LXNoYWRvdzowcHggMHB4IDhweCAycHggIzAwMDAwMCA7XHJcbmJveC1zaGFkb3c6MHB4IDBweCA4cHggMnB4ICMwMDAwMDAgO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuei1pbmRleDogMjtcclxuLnNlYXJjaGl0ZW17XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgcGFkZGluZzogMTVweCA1JTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwcHggLSAxNSAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgc3Ryb25ne1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDIyJTtcclxuICB9XHJcbn1cclxuLmZpcnN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4zNjMpO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxMjgsIDEyOCwgMTI4KTtcclxufVxyXG59XHJcbi5oZXJvaW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDE1JTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLDExLDQwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwxMSw0MCwxKSAwJSwgcmdiYSgwLDEyLDM4LDAuNzQwMjMxMTI2NjMwMzM5NikgNTAlKTtcclxuICBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbmg0e1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIGNvbG9yOiByZ2IoNzMsIDczLCA3Myk7XHJcbn1cclxuLmhlYWRlcjJ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmRlc2N7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgYm9yZGVyLWJvdHRvbTo1cHggZGFzaGVkIHJnYigxMjgsIDEyOCwgMTI4KTtcclxuICBwe1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuLmxvZ2luLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5yZWR7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMjVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjU2Mik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB9XHJcbiAgYnV0dG9uOmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbiAgLmJ1dHRvbjJ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbiAgfVxyXG5cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuLnNlYXJjaCB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAwO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heChjYWxjKDEwMHB4ICsgMzAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSksIDFmcikpO1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAxNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjMDAwMDAwO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCAjMDAwMDAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDI7XG59XG4uc2VhcmNoIC5zZWFyY2hpdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTVweCA1JTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHB4IC0gMTUgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNlYXJjaCAuc2VhcmNoaXRlbSBzdHJvbmcge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc2VhcmNoIC5zZWFyY2hpdGVtIGJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjIlO1xufVxuLnNlYXJjaCAuZmlyc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMzYzKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcbn1cblxuLmhlcm9pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTUlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcbiAgYmFja2dyb3VuZDogIzAwMGIyODtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDAwYjI4IDAlLCByZ2JhKDAsIDEyLCAzOCwgMC43NDAyMzExMjY2KSA1MCUpO1xufVxuLmhlYWRlciBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaDQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDEwdmg7XG4gIGNvbG9yOiAjNDk0OTQ5O1xufVxuXG4uaGVhZGVyMiB7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmRlc2Mge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzYzNjM2MztcbiAgYm9yZGVyLWJvdHRvbTogNXB4IGRhc2hlZCBncmF5O1xufVxuLmRlc2MgcCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5sb2dpbi1mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzYzNjM2Mztcbn1cbi5sb2dpbi1mb3JtIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubG9naW4tZm9ybSAucmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5sb2dpbi1mb3JtIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMCAwIDI1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmxvZ2luLWZvcm0gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5sb2dpbi1mb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjU2Mik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG4ubG9naW4tZm9ybSBidXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuLmxvZ2luLWZvcm0gLmJ1dHRvbjIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news/news.component.ts":
  /*!****************************************!*\
    !*** ./src/app/news/news.component.ts ***!
    \****************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent() {
        _classCallCheck(this, NewsComponent);
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)();
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 2,
      vars: 0,
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "news works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/newsside/newsside.component.ts":
  /*!************************************************!*\
    !*** ./src/app/newsside/newsside.component.ts ***!
    \************************************************/

  /*! exports provided: NewssideComponent */

  /***/
  function srcAppNewssideNewssideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewssideComponent", function () {
      return NewssideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var NewssideComponent = /*#__PURE__*/function () {
      function NewssideComponent(route, router, http) {
        _classCallCheck(this, NewssideComponent);

        this.route = route;
        this.router = router;
        this.http = http;
      }

      _createClass(NewssideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          var newsId = this.route.snapshot.paramMap.get('id');
          this.http.get("https://api.mediehuset.net/overlook/news/".concat(newsId)).subscribe(function (data) {
            _this9.news = data;
            console.log(_this9.news);
          });
        }
      }]);

      return NewssideComponent;
    }();

    NewssideComponent.ɵfac = function NewssideComponent_Factory(t) {
      return new (t || NewssideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    NewssideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewssideComponent,
      selectors: [["app-newsside"]],
      decls: 11,
      vars: 4,
      consts: [["alt", "newsimage", 1, "heroimage", 3, "src"], [1, "header"], [1, "header2"], [1, "content"]],
      template: function NewssideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.news.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.news.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.news.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.news.item.content);
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap\")[_ngcontent-%COMP%];\n.heroimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 20%;\n  width: 60%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  z-index: 2;\n  letter-spacing: 2px;\n  font-weight: 300;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.header[_ngcontent-%COMP%]:before {\n  content: \"\";\n  transform: skew(-30deg);\n  background-color: black;\n  height: 70%;\n  width: 80%;\n  top: 15%;\n  position: absolute;\n  border-radius: 0px 0px 20px 0px;\n  background: #000b28;\n  background: linear-gradient(90deg, black 0%, rgba(0, 0, 0, 0.667) 100%);\n  z-index: -1;\n}\n.header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  background-color: black;\n  height: 70%;\n  width: 40px;\n  position: absolute;\n  top: 15%;\n  left: -15px;\n  z-index: -1;\n}\n.header2[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: left;\n  font-family: \"Open Sans\", sans-serif;\n  margin: auto;\n  margin-top: 5vh;\n  color: #636363;\n  font-weight: 600;\n  font-size: 30px;\n}\n.content[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 80%;\n  margin: auto;\n  font-size: 20px;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  margin-bottom: 15vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3c3NpZGUvQzpcXFVzZXJzXFxicnV0YVxcRGVza3RvcFxcSGplbW1lc2lkZXJcXE92ZXJsb29rXFxvdmVybG9vay9zcmNcXGFwcFxcbmV3c3NpZGVcXG5ld3NzaWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXdzc2lkZS9uZXdzc2lkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSwyRkFBQTtBQUNSO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0o7QURDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNFSjtBRERJO0VBQ0UsZ0JBQUE7QUNHTjtBREFFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUVGLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1RUFBQTtFQUNBLFdBQUE7QUNHRjtBRERFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0lKO0FERkU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0tKO0FESEU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9uZXdzc2lkZS9uZXdzc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcbi5oZXJvaW1hZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICAuaGVhZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGgye1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaGVhZGVyOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTMwZGVnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCAwcHggMjBweCAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMCwxMSw0MCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC42NjcpIDEwMCUpO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuaGVhZGVyOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTUlO1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICB9XHJcbiAgLmhlYWRlcjJ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1dmg7XHJcblxyXG4gIH1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuLmhlcm9pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwdmg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMjAlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmhlYWRlciBoMiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5oZWFkZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgdHJhbnNmb3JtOiBza2V3KC0zMGRlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDcwJTtcbiAgd2lkdGg6IDgwJTtcbiAgdG9wOiAxNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwYjI4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGJsYWNrIDAlLCByZ2JhKDAsIDAsIDAsIDAuNjY3KSAxMDAlKTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5oZWFkZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICBsZWZ0OiAtMTVweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5oZWFkZXIyIHtcbiAgd2lkdGg6IDgwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBjb2xvcjogIzYzNjM2MztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY29udGVudCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIG1hcmdpbi1ib3R0b206IDE1dmg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewssideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-newsside',
          templateUrl: './newsside.component.html',
          styleUrls: ['./newsside.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/reservationer/reservationer.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/reservationer/reservationer.component.ts ***!
    \**********************************************************/

  /*! exports provided: ReservationerComponent */

  /***/
  function srcAppReservationerReservationerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationerComponent", function () {
      return ReservationerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ReservationerComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hotel og v\xE6relsestype");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dato");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Antal personer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Handling");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Rediger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReservationerComponent_div_1_Template_p_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var res_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteIt(res_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Slet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var res_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.hotel_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.room_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.checkin_date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.checkout_date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.num_persons);
      }
    }

    var ReservationerComponent = /*#__PURE__*/function () {
      function ReservationerComponent(route, router, fb, http) {
        _classCallCheck(this, ReservationerComponent);

        this.route = route;
        this.router = router;
        this.fb = fb;
        this.http = http;
      }

      _createClass(ReservationerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          var token = this.getCookie('token');
          var user_id = this.getCookie('user_id');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(token));
          this.http.get("https://api.mediehuset.net/overlook/reservations/list_by_user/".concat(user_id), {
            headers: headers
          }).subscribe(function (data) {
            _this10.reservationer = data;
            console.log(user_id);
            console.log(_this10.reservationer);
          });
        }
      }, {
        key: "getCookie",
        value: function getCookie(name) {
          var nameLenPlus = name.length + 1;
          return document.cookie.split(';').map(function (c) {
            return c.trim();
          }).filter(function (cookie) {
            return cookie.substring(0, nameLenPlus) === "".concat(name, "=");
          }).map(function (cookie) {
            return decodeURIComponent(cookie.substring(nameLenPlus));
          })[0] || null;
        }
      }, {
        key: "deleteIt",
        value: function deleteIt(id) {
          var token = this.getCookie('token');
          var user_id = this.getCookie('user_id');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(token));
          this.http["delete"]("https://api.mediehuset.net/overlook/reservations/".concat(id), {
            headers: headers
          }).subscribe(function (response) {
            console.log(response.access_token);

            if (response.access_token) {
              return true;
            } else {
              return;
            }
          }, function (error) {
            return console.log;
          });
          setTimeout(function () {
            document.location.reload(true);
          }, 100);
        }
      }]);

      return ReservationerComponent;
    }();

    ReservationerComponent.ɵfac = function ReservationerComponent_Factory(t) {
      return new (t || ReservationerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ReservationerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReservationerComponent,
      selectors: [["app-reservationer"]],
      decls: 2,
      vars: 1,
      consts: [["id", "reservationer"], [4, "ngFor", "ngForOf"], [1, "booking"], [1, "info"], [1, "dato"], [1, "antal"], [1, "handling"], [1, "redi"], [1, "slet", 3, "click"]],
      template: function ReservationerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReservationerComponent_div_1_Template, 33, 5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reservationer.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap\");\n#reservationer {\n  width: 90%;\n  margin: auto;\n}\n#reservationer .booking {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: auto;\n  padding: 5px;\n  font-family: \"Open Sans\", sans-serif;\n  background-color: silver;\n  margin-bottom: 2vh;\n}\n#reservationer .booking .redi {\n  color: green;\n}\n#reservationer .booking .slet {\n  color: red;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXRpb25lci9DOlxcVXNlcnNcXGJydXRhXFxEZXNrdG9wXFxIamVtbWVzaWRlclxcT3Zlcmxvb2tcXG92ZXJsb29rL3NyY1xcYXBwXFxyZXNlcnZhdGlvbmVyXFxyZXNlcnZhdGlvbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXNlcnZhdGlvbmVyL3Jlc2VydmF0aW9uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkZBQUE7QUFDUjtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEREk7RUFDRSxZQUFBO0FDR047QURESTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9yZXNlcnZhdGlvbmVyL3Jlc2VydmF0aW9uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG4jcmVzZXJ2YXRpb25lcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAuYm9va2luZ3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcclxuICAgIC5yZWRpe1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB9XHJcbiAgICAuc2xldHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG4jcmVzZXJ2YXRpb25lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbiNyZXNlcnZhdGlvbmVyIC5ib29raW5nIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgcGFkZGluZzogNXB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xuICBtYXJnaW4tYm90dG9tOiAydmg7XG59XG4jcmVzZXJ2YXRpb25lciAuYm9va2luZyAucmVkaSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbiNyZXNlcnZhdGlvbmVyIC5ib29raW5nIC5zbGV0IHtcbiAgY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReservationerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reservationer',
          templateUrl: './reservationer.component.html',
          styleUrls: ['./reservationer.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search-resualt/search-resualt.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/search-resualt/search-resualt.component.ts ***!
    \************************************************************/

  /*! exports provided: SearchResualtComponent */

  /***/
  function srcAppSearchResualtSearchResualtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResualtComponent", function () {
      return SearchResualtComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SearchResualtComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hotel_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hotel_r1.title);
      }
    }

    var SearchResualtComponent = /*#__PURE__*/function () {
      function SearchResualtComponent(route, router, http) {
        _classCallCheck(this, SearchResualtComponent);

        this.route = route;
        this.router = router;
        this.http = http;
      }

      _createClass(SearchResualtComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          var cityId = this.route.snapshot.paramMap.get('id');
          var num = this.route.snapshot.paramMap.get('num');
          this.http.get("https://api.mediehuset.net/overlook/hotels/by_city/".concat(cityId)).subscribe(function (data) {
            _this11.city = data;
            console.log(_this11.city);
            _this11.number = num;
          });
        }
      }]);

      return SearchResualtComponent;
    }();

    SearchResualtComponent.ɵfac = function SearchResualtComponent_Factory(t) {
      return new (t || SearchResualtComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    SearchResualtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchResualtComponent,
      selectors: [["app-search-resualt"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function SearchResualtComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchResualtComponent_div_0_Template, 3, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.city.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1YWx0L3NlYXJjaC1yZXN1YWx0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResualtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-resualt',
          templateUrl: './search-resualt.component.html',
          styleUrls: ['./search-resualt.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vaerelse-type/vaerelse-type.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/vaerelse-type/vaerelse-type.component.ts ***!
    \**********************************************************/

  /*! exports provided: VaerelseTypeComponent */

  /***/
  function srcAppVaerelseTypeVaerelseTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VaerelseTypeComponent", function () {
      return VaerelseTypeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VaerelseTypeComponent = /*#__PURE__*/function () {
      function VaerelseTypeComponent() {
        _classCallCheck(this, VaerelseTypeComponent);
      }

      _createClass(VaerelseTypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VaerelseTypeComponent;
    }();

    VaerelseTypeComponent.ɵfac = function VaerelseTypeComponent_Factory(t) {
      return new (t || VaerelseTypeComponent)();
    };

    VaerelseTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VaerelseTypeComponent,
      selectors: [["app-vaerelse-type"]],
      decls: 2,
      vars: 0,
      template: function VaerelseTypeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vaerelse-type works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhZXJlbHNlLXR5cGUvdmFlcmVsc2UtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaerelseTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vaerelse-type',
          templateUrl: './vaerelse-type.component.html',
          styleUrls: ['./vaerelse-type.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vaerelse/vaerelse.component.ts":
  /*!************************************************!*\
    !*** ./src/app/vaerelse/vaerelse.component.ts ***!
    \************************************************/

  /*! exports provided: VaerelseComponent */

  /***/
  function srcAppVaerelseVaerelseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VaerelseComponent", function () {
      return VaerelseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VaerelseComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/distinationer/", country_r6.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r6.name);
      }
    }

    function VaerelseComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VaerelseComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r10 = ctx.$implicit;
        var i_r11 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "roomimage", i_r11, "");
      }
    }

    function VaerelseComponent_ng_container_36_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var seng_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", seng_r12.title, " ");
      }
    }

    function VaerelseComponent_ng_container_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VaerelseComponent_ng_container_36_ng_container_1_Template, 2, 1, "ng-container", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var seng_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", seng_r12.category === "Senge");
      }
    }

    function VaerelseComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var faci_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", faci_r15.title, " ");
      }
    }

    function VaerelseComponent_div_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var city_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r17.title);
      }
    }

    var VaerelseComponent = /*#__PURE__*/function () {
      function VaerelseComponent(route, router, http) {
        _classCallCheck(this, VaerelseComponent);

        this.route = route;
        this.router = router;
        this.http = http;
      }

      _createClass(VaerelseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          var cityId = this.route.snapshot.paramMap.get('id');
          var hotelId = this.route.snapshot.paramMap.get('hotelid');
          var countryId = this.route.snapshot.paramMap.get('countryid');
          var cityname = this.route.snapshot.paramMap.get('cityname');
          this.cityname = cityname;
          this.http.get("https://api.mediehuset.net/overlook/rooms/".concat(cityId)).subscribe(function (data) {
            _this12.room = data;
            console.log(_this12.room);
          });
          this.http.get("https://api.mediehuset.net/overlook/hotels/".concat(hotelId)).subscribe(function (data) {
            _this12.hotel = data;
          });
          this.http.get("https://api.mediehuset.net/overlook/countries/".concat(countryId)).subscribe(function (data) {
            _this12.country = data;
            console.log(_this12.country);
          });
          this.http.get("https://api.mediehuset.net/overlook/countries").subscribe(function (data) {
            _this12.countries = data;
          });
        }
      }]);

      return VaerelseComponent;
    }();

    VaerelseComponent.ɵfac = function VaerelseComponent_Factory(t) {
      return new (t || VaerelseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    VaerelseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VaerelseComponent,
      selectors: [["app-vaerelse"]],
      decls: 74,
      vars: 24,
      consts: [["alt", "countryimage", 1, "heroimage", 3, "src"], [1, "header"], [1, "countrynav"], [4, "ngFor", "ngForOf"], [1, "pagegrid"], [1, "rooms"], [1, "header2"], [1, "stars"], ["class", "stars", 4, "ngFor", "ngForOf"], [1, "desc"], [1, "roomcard"], ["alt", "roomimage", 3, "src"], [1, "description"], [1, "info"], [1, "img"], [1, "faciliteter"], [1, "bookings"], [1, "book"], [1, "price"], [3, "routerLink"], [1, "cities"], [1, "adress"], [1, "phone"], [1, "country", 3, "routerLink"], ["src", "../../assets/star-images-9454.png", "alt", ""], [3, "src", "alt"], [4, "ngIf"], [1, "faci"], [1, "city"]],
      template: function VaerelseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "HOTELLER OG DESTINATIONER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VaerelseComponent_div_5_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VaerelseComponent_div_15_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Vores v\xE6relser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VaerelseComponent_div_30_Template, 2, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sengetyper:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, VaerelseComponent_ng_container_36_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Vores v\xE6relse er udstyret med:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, VaerelseComponent_div_40_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "NORMAL pris - inkl. morgenmad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Kan ikke \xE6ndres eller afbestilles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "DKK/nat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " FLEX pris - inkl. morgenmad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Kan \xE6ndres eller afbestilles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "DKK/nat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Hotel Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Faciliteter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, VaerelseComponent_div_73_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.hotel.item.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("Hotel Overlook > Hoteller og Destinationer > ", ctx.country.item.name, " > ", ctx.hotel.item.city_name, " > ", ctx.hotel.item.title, " ", ctx.hotel.item.city_name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hotel.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", " ".repeat(ctx.hotel.item.num_stars).split(""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hotel.item.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.room.item.images[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.room.item.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.room.item.area, ". Plads til ", ctx.room.item.num_persons, " personer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.room.item.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.room.item.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.room.item.facilities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.room.item.facilities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.room.item.day_price_normal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.room.item.day_price_flex);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/book/", ctx.room.item.id, "/", ctx.hotel.item.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hotel.item.address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.hotel.item.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hotel.item.facilities);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap\")[_ngcontent-%COMP%];\n@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\");\n@charset \"UTF-8\";\n.heroimage[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 60%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-family: \"Open Sans\", sans-serif;\n  color: white;\n  z-index: 2;\n  letter-spacing: 2px;\n  font-weight: 300;\n  border-radius: 0px 0px 100px 0px;\n  background: #000b28;\n  background: linear-gradient(90deg, #000b28 0%, rgba(0, 12, 38, 0.7402311266) 50%);\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 300;\n  padding-left: 10px;\n}\n.pagegrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-row: auto;\n  width: 90%;\n  margin: auto;\n  margin-top: 7vh;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n}\n.pagegrid[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  width: 50%;\n  margin: 5px 0;\n}\n.pagegrid[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: auto;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  padding-left: 5%;\n  margin-top: 10vh;\n  color: #494949;\n  cursor: pointer;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .header2[_ngcontent-%COMP%] {\n  width: 90%;\n  text-align: left;\n  font-family: \"Open Sans\", sans-serif;\n  margin: auto;\n  margin-top: 2vh;\n  color: #636363;\n  font-weight: 600;\n  font-size: 30px;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  border-bottom: 5px dashed gray;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .roomcard[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: auto;\n  background-color: white;\n  margin-bottom: 3vh;\n  padding: 20px;\n  cursor: pointer;\n  transition: 0.5s;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .roomcard[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 400px;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin: 5px 0;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin-top: 20px;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 70px;\n  margin: auto;\n  transition: 1s;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  height: 200px;\n  width: 200px;\n  transition: 1s;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .faciliteter[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .faciliteter[_ngcontent-%COMP%]   .faci[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 5px;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .faciliteter[_ngcontent-%COMP%]   .faci[_ngcontent-%COMP%]:before {\n  content: \" \";\n  color: green;\n  font-family: \"FontAwesome\";\n  content: \"\uF00C\";\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .bookings[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto;\n  margin: auto;\n  grid-gap: 20px;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .bookings[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%] {\n  background-color: #bbbbbb;\n  color: black;\n  padding: 5px;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   .bookings[_ngcontent-%COMP%]   .book[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.pagegrid[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: red;\n  border: none;\n  width: 90%;\n  margin: 20px 5% 0 5%;\n  font-size: 30px;\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%] {\n  padding-left: 10%;\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  font-family: \"Open Sans\", sans-serif;\n  color: #636363;\n  cursor: pointer;\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]:before {\n  content: \" \";\n  font-family: \"FontAwesome\";\n  content: \"\uF08D\";\n}\n.pagegrid[_ngcontent-%COMP%]   .cities[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]:before {\n  content: \" \";\n  font-family: \"FontAwesome\";\n  content: \"\uF0E0\";\n}\n.countrynav[_ngcontent-%COMP%] {\n  text-align: center;\n  width: calc(400px + 200 * ((100vw - 320px) / 680));\n  color: #838383;\n  display: grid;\n  margin: 2vh auto 2vh auto;\n  padding-bottom: 2vh;\n  font-family: \"Open Sans\", sans-serif;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  box-shadow: 0 4px 2px -2px gray;\n  cursor: pointer;\n}\n@media only screen and (max-width: 600px) {\n  .pagegrid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .faciliteter[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFlcmVsc2UvQzpcXFVzZXJzXFxicnV0YVxcRGVza3RvcFxcSGplbW1lc2lkZXJcXE92ZXJsb29rXFxvdmVybG9vay9zcmNcXGFwcFxcdmFlcmVsc2VcXHZhZXJlbHNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YWVyZWxzZS92YWVyZWxzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQVEsMkZBQUE7QUFDQSxvRkFBQTtBQ0RSLGdCQUFnQjtBREVoQjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0VGO0FEQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlGQUFBO0FDR0Y7QURGRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBRERBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtBQ0lGO0FESEU7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0tKO0FESkk7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ01MO0FERkk7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lOO0FERkk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0lOO0FERkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FDSU47QURGTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNJUjtBREhRO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxhQUFBO0FDS1Y7QURGTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNJUjtBREhRO0VBQ0csYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUNLWDtBREpRO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNNVjtBREpRO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTVY7QURGTTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0FDSVI7QURIUTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDS1Y7QURIUTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0FDS1Y7QURGTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNJUjtBREhRO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0tWO0FESlU7RUFDRSxlQUFBO0FDTVo7QURGTTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNJUjtBRERBO0VBQ0UsaUJBQUE7QUNHRjtBREZJO0VBQ0YsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSUY7QURGQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNJRjtBREZBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQ0lGO0FEQUE7RUFDRSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrREFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ0dGO0FEREE7RUFDRTtJQUNFLDBCQUFBO0VDSUY7O0VERkE7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdmFlcmVsc2UvdmFlcmVsc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4zLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcbi5oZXJvaW1hZ2V7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDE1JTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTAwcHggMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLDExLDQwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwxMSw0MCwxKSAwJSwgcmdiYSgwLDEyLDM4LDAuNzQwMjMxMTI2NjMwMzM5NikgNTAlKTtcclxuICBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5wYWdlZ3JpZHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcclxuICBncmlkLXJvdzogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgLnN0YXJze1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgaW1ne1xyXG4gICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgLnJvb21ze1xyXG4gICAgaDR7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgICAgY29sb3I6IHJnYig3MywgNzMsIDczKTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcjJ7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC5kZXNje1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTo1cHggZGFzaGVkIHJnYigxMjgsIDEyOCwgMTI4KTtcclxuICAgIH1cclxuICAgICAgLnJvb21jYXJke1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDN2aDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwMHB4XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIC5pbWd7XHJcbiAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZzpob3ZlcntcclxuICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmZhY2lsaXRldGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAgLmZhY2l7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZhY2k6YmVmb3Jle1xyXG4gICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG4gICAgICAgICAgY29udGVudDogXCJcXGYwMGNcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJvb2tpbmdze1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICAgICAgLmJvb2t7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxODcsIDE4Nyk7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDIwcHggNSUgMCA1JTtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIH1cclxuICB9XHJcbi5jaXRpZXN7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwe1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWRyZXNzOmJlZm9yZXtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMDhkXCI7XHJcbn1cclxuLnBob25lOmJlZm9yZXtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG4gIGNvbnRlbnQ6IFwiXFxmMGUwXCI7XHJcbn1cclxufVxyXG59XHJcbi5jb3VudHJ5bmF2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogY2FsYyg0MDBweCArIDIwMCAqICgoMTAwdncgLSAzMjBweCkgLyA2ODApKTtcclxuICBjb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWFyZ2luOiAydmggYXV0byAydmggYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnBhZ2VncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuICAuZmFjaWxpdGV0ZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIH1cclxufVxyXG4iLCJAY2hhcnNldCBcIlVURi04XCI7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcIi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcbi5oZXJvaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDE1JTtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxMDBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDBiMjg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwMGIyOCAwJSwgcmdiYSgwLCAxMiwgMzgsIDAuNzQwMjMxMTI2NikgNTAlKTtcbn1cbi5oZWFkZXIgaDIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5wYWdlZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcbiAgZ3JpZC1yb3c6IGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogN3ZoO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2MzYzNjM7XG59XG4ucGFnZWdyaWQgLnN0YXJzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDVweCAwO1xufVxuLnBhZ2VncmlkIC5zdGFycyBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnBhZ2VncmlkIC5yb29tcyBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBjb2xvcjogIzQ5NDk0OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhZ2VncmlkIC5yb29tcyAuaGVhZGVyMiB7XG4gIHdpZHRoOiA5MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5wYWdlZ3JpZCAucm9vbXMgLmRlc2Mge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzYzNjM2MztcbiAgYm9yZGVyLWJvdHRvbTogNXB4IGRhc2hlZCBncmF5O1xufVxuLnBhZ2VncmlkIC5yb29tcyAucm9vbWNhcmQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5wYWdlZ3JpZCAucm9vbXMgLnJvb21jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbi5wYWdlZ3JpZCAucm9vbXMgLmRlc2NyaXB0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBtYXJnaW46IDVweCAwO1xufVxuLnBhZ2VncmlkIC5yb29tcyAuZGVzY3JpcHRpb24gLmltZyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucGFnZWdyaWQgLnJvb21zIC5kZXNjcmlwdGlvbiAuaW1nIGltZyB7XG4gIHdpZHRoOiA5MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNpdGlvbjogMXM7XG59XG4ucGFnZWdyaWQgLnJvb21zIC5kZXNjcmlwdGlvbiAuaW1nIGltZzpob3ZlciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgdHJhbnNpdGlvbjogMXM7XG59XG4ucGFnZWdyaWQgLnJvb21zIC5mYWNpbGl0ZXRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbn1cbi5wYWdlZ3JpZCAucm9vbXMgLmZhY2lsaXRldGVyIC5mYWNpIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucGFnZWdyaWQgLnJvb21zIC5mYWNpbGl0ZXRlciAuZmFjaTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIu+AjFwiO1xufVxuLnBhZ2VncmlkIC5yb29tcyAuYm9va2luZ3Mge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBncmlkLWdhcDogMjBweDtcbn1cbi5wYWdlZ3JpZCAucm9vbXMgLmJvb2tpbmdzIC5ib29rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYjtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucGFnZWdyaWQgLnJvb21zIC5ib29raW5ncyAuYm9vayAucHJpY2Uge1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucGFnZWdyaWQgLnJvb21zIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDIwcHggNSUgMCA1JTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnBhZ2VncmlkIC5jaXRpZXMge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbn1cbi5wYWdlZ3JpZCAuY2l0aWVzIHAge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNjM2MzYzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFnZWdyaWQgLmNpdGllcyAuYWRyZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIu+CjVwiO1xufVxuLnBhZ2VncmlkIC5jaXRpZXMgLnBob25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xuICBjb250ZW50OiBcIu+DoFwiO1xufVxuXG4uY291bnRyeW5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoNDAwcHggKyAyMDAgKiAoKDEwMHZ3IC0gMzIwcHgpIC8gNjgwKSk7XG4gIGNvbG9yOiAjODM4MzgzO1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW46IDJ2aCBhdXRvIDJ2aCBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMnZoO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDJweCAtMnB4IGdyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucGFnZWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmZhY2lsaXRldGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaerelseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vaerelse',
          templateUrl: './vaerelse.component.html',
          styleUrls: ['./vaerelse.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vaerelser/vaerelser.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/vaerelser/vaerelser.component.ts ***!
    \**************************************************/

  /*! exports provided: VaerelserComponent */

  /***/
  function srcAppVaerelserVaerelserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VaerelserComponent", function () {
      return VaerelserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VaerelserComponent = /*#__PURE__*/function () {
      function VaerelserComponent() {
        _classCallCheck(this, VaerelserComponent);
      }

      _createClass(VaerelserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VaerelserComponent;
    }();

    VaerelserComponent.ɵfac = function VaerelserComponent_Factory(t) {
      return new (t || VaerelserComponent)();
    };

    VaerelserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VaerelserComponent,
      selectors: [["app-vaerelser"]],
      decls: 2,
      vars: 0,
      template: function VaerelserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vaerelser works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhZXJlbHNlci92YWVyZWxzZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaerelserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vaerelser',
          templateUrl: './vaerelser.component.html',
          styleUrls: ['./vaerelser.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\bruta\Desktop\Hjemmesider\Overlook\overlook\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map