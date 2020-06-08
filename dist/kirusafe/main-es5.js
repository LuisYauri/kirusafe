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

    var routes = [];

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


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.title, " ");
      }
    }

    function AppComponent_div_45_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 49);
      }

      if (rf & 2) {
        var item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AppComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_45_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var item_r4 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.checkBox(item_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_45_img_7_Template, 1, 1, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.flag);
      }
    }

    function AppComponent_img_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_img_57_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var item_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.openLink(item_r9.url);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r9.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'kirusafe';
        this.listMenu = [{
          title: 'Inicio'
        }, {
          title: '¿Quiénes somos?'
        }, {
          title: '¿Cómo lo hacemos?'
        }];
        this.urlVideo = 'https://www.youtube.com/watch?v=Q4u0Q69gmLM';
        this.logoKirusafe = 'assets/img/logo.png';
        this.headerContent = {
          title: 'KiruSafe',
          subTitle: '¡El Lazo que nos une!',
          description: 'Red de voluntarios y docentes a nivel nacional enfocados en promover la salud oral.',
          btn: 'VER VIDEO',
          img: 'assets/img/img_girls.png'
        };
        this.sectionOne = {
          title: '¿Quiénes somos?',
          description: 'Somos una comunidad que utiliza redes sociales libres como Facebook para realizar asesorías grupales por colegio y a su vez por aula; aprovechando que cada maestra conoce la realidad de sus niños y su familia, se brinda educación en el marco  promoción - prevención en niños menores de 12 años; tocando temas de salud, especialmente de salud bucal.',
          img: 'assets/img/img_section_1.png'
        };
        this.sectionTwo = {
          title: '¿Cómo lo hacemos?',
          listItem: [{
            description: 'Brindar educación en la salud en el marco de la promoción y prevención, utilizando Facebook para interactuar y transmitir los conocimientos.',
            img: 'assets/img/img_section_2_1.png',
            flag: false
          }, {
            description: 'Además también birndamos una solución clínica para cada caso, con encargados de KiruSafe  que agendarán una Teleconsulta con un especialista y/o estudiante capacitado para brindar alternativas de solución y/o un plan de tratamiento.',
            img: 'assets/img/img_section_2_2.png',
            flag: false
          }]
        };
        this.sectionFooter = {
          left: {
            title: 'KiruSafe.com',
            description: '© 2020 Todos los derechos reservados'
          },
          right: {
            socials: [{
              icon: 'assets/img/ic_youtube.png',
              url: 'https://www.youtube.com/channel/UCGCZ2VR412YER2eEFJOW2wA'
            }, {
              icon: 'assets/img/ic_facebook.png',
              url: 'https://www.facebook.com/kirusafe'
            }],
            email: {
              text: 'kirusafe@gmail.com',
              url: ''
            }
          }
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
        }
      }, {
        key: "checkBox",
        value: function checkBox(item) {
          item.flag = !item.flag;
        }
      }, {
        key: "openLink",
        value: function openLink(url) {
          window.open(url, "_blank");
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 63,
      vars: 16,
      consts: [[1, "content-max"], ["data-aos", "zoom-in-down", 1, "content-section"], [1, "content-body"], [1, "content-father"], [1, "menu"], ["alt", "logo", 1, "menu-logo", 3, "src"], [1, "menu-desktop"], ["class", "menu-desktop__item", 4, "ngFor", "ngForOf"], [1, "menu-mobile"], [1, "gg-menu-right-alt", 2, "color", "#731469"], [1, "header-principal"], [1, "header-principal-box"], [1, "header-principal-box__title"], [1, "header-principal-box__subtitle"], [1, "header-principal-box__description"], [1, "header-principal-box__btn", 2, "outline", "none", 3, "click"], [1, "header-principal-box__btn__title"], [1, "gg-chevron-right-o"], ["alt", "girls", 1, "header-principal-img", 3, "src"], ["data-aos", "zoom-in-down", 1, "content-section", 2, "background", "#F8D152"], [1, "section-one"], [1, "title-general"], [1, "title-general__line"], [1, "title-general__text"], [1, "section-one-box"], ["alt", "section-one", 1, "section-one-box__img", 3, "src"], [1, "section-one-box__description"], [1, "section-two"], [1, "section-two-box"], ["class", "section-two-box-item", 3, "click", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in-down", 1, "content-section", 2, "background", "#731469"], [1, "section-footer"], [1, "section-footer-left"], [1, "section-footer-left__title"], [1, "section-footer-left__description"], [1, "section-footer-right"], [1, "section-footer-right__socials"], ["class", "section-footer-right__socials__item", "alt", "", 3, "src", "click", 4, "ngFor", "ngForOf"], [1, "section-footer-right__contact"], [1, "section-footer-right__contact__icon"], [1, "gg-mail"], [1, "menu-desktop__item"], [1, "section-two-box-item", 3, "click"], [1, "section-two-box-item-block"], [1, "section-two-box-item-block__icon"], [1, "gg-add-r"], [1, "section-two-box-item-block__description"], [1, "section-two-box-item-img"], ["alt", "img", "class", "section-two-box-item-img--img", "data-aos", "zoom-in-down", 3, "src", 4, "ngIf"], ["alt", "img", "data-aos", "zoom-in-down", 1, "section-two-box-item-img--img", 3, "src"], ["alt", "", 1, "section-footer-right__socials__item", 3, "src", "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() {
            return ctx.openLink(ctx.urlVideo);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AppComponent_div_45_Template, 8, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AppComponent_img_57_Template, 1, 1, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoKirusafe, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerContent.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerContent.subTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerContent.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.headerContent.btn, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.headerContent.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionOne.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.sectionOne.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sectionOne.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionTwo.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sectionTwo.listItem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionFooter.left.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionFooter.left.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sectionFooter.right.socials);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sectionFooter.right.email.text);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Dosis\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #d8d8d8;\n  border-radius: 10px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #d8d8d8;\n}\n.content-max[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.content-section[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n.content-body[_ngcontent-%COMP%] {\n  width: 1440px;\n}\n@media (max-width: 1439px) {\n  .content-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.content-father[_ngcontent-%COMP%] {\n  padding: 0 80px;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 576px) {\n  .content-father[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 96px;\n}\n@media (max-width: 576px) {\n  .menu-logo[_ngcontent-%COMP%] {\n    width: 112px;\n  }\n}\n.menu-desktop[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 30px;\n  color: #731469;\n}\n.menu-desktop__item[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  cursor: pointer;\n}\n@media (max-width: 1279px) {\n  .menu-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.menu-mobile[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n}\n@media (max-width: 1279px) {\n  .menu-mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.header-principal[_ngcontent-%COMP%] {\n  background-image: url('bg_header.png');\n  background-size: cover;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 93px 0;\n}\n@media (max-width: 1200px) {\n  .header-principal[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 25px 0 50px;\n  }\n}\n.header-principal-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 1200px) {\n  .header-principal-box[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n  }\n}\n.header-principal-box__title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 72px;\n  line-height: 91px;\n  color: #731469;\n}\n@media (max-width: 1200px) {\n  .header-principal-box__title[_ngcontent-%COMP%] {\n    font-size: 50px;\n    line-height: 43px;\n    text-align: center;\n  }\n}\n.header-principal-box__subtitle[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 61px;\n  color: #EC8D9F;\n  margin: 15px 0;\n}\n@media (max-width: 1200px) {\n  .header-principal-box__subtitle[_ngcontent-%COMP%] {\n    margin: 5px 0;\n    font-size: 25px;\n    line-height: 45px;\n    text-align: center;\n  }\n}\n.header-principal-box__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 30px;\n  color: #727272;\n}\n@media (min-width: 1440px) {\n  .header-principal-box__description[_ngcontent-%COMP%] {\n    width: 620px;\n  }\n}\n@media (max-width: 1200px) {\n  .header-principal-box__description[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 18px;\n    text-align: center;\n  }\n}\n.header-principal-box__btn[_ngcontent-%COMP%] {\n  background: #46B7C1;\n  border-radius: 10px;\n  margin: 20px 0;\n  border: 0;\n  box-shadow: none;\n  padding: 10px 50px;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n  color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  cursor: pointer;\n}\n.header-principal-box__btn__title[_ngcontent-%COMP%] {\n  margin: 0 20px 0 0;\n}\n@media (max-width: 1200px) {\n  .header-principal-box__btn[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 18px;\n    text-align: center;\n    padding: 8px 35px;\n  }\n}\n@media (max-width: 576px) {\n  .header-principal-img[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n.section-one[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 50px 0;\n  background-image: url('bg_section_1.png');\n  background-size: cover;\n}\n@media (max-width: 1200px) {\n  .section-one[_ngcontent-%COMP%] {\n    padding: 10px 0 25px;\n  }\n}\n.title-general[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.title-general__line[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 38px;\n  background: #870D6C;\n  border-radius: 20px;\n  margin-right: 14px;\n}\n@media (max-width: 1200px) {\n  .title-general__line[_ngcontent-%COMP%] {\n    width: 7px;\n    height: 20px;\n    margin-right: 9px;\n  }\n}\n.title-general__text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 44px;\n  line-height: 61px;\n  color: #870D6C;\n}\n@media (max-width: 1200px) {\n  .title-general__text[_ngcontent-%COMP%] {\n    font-size: 25px;\n    line-height: 61px;\n  }\n}\n.section-one-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 30px 0;\n}\n@media (max-width: 1200px) {\n  .section-one-box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 0;\n  }\n}\n.section-one-box__img[_ngcontent-%COMP%] {\n  width: 377px;\n}\n@media (max-width: 1200px) {\n  .section-one-box__img[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n.section-one-box__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #870D6C;\n  display: flex;\n  align-items: center;\n  padding: 40px;\n}\n@media (max-width: 1200px) {\n  .section-one-box__description[_ngcontent-%COMP%] {\n    padding: 20px 0 0 0;\n    font-size: 16px;\n    line-height: 18px;\n  }\n}\n.section-two[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 50px 0;\n  background-size: cover;\n}\n@media (max-width: 1200px) {\n  .section-two[_ngcontent-%COMP%] {\n    padding: 10px 0 25px;\n  }\n}\n.section-two-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 30px 0;\n}\n@media (max-width: 1200px) {\n  .section-two-box[_ngcontent-%COMP%] {\n    padding: 0 0;\n  }\n}\n.section-two-box-item-block[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: #EC8D9F;\n  border-radius: 10px;\n  margin: 10px 0;\n  padding: 40px 30px;\n  color: #FFFFFF;\n}\n@media (max-width: 1200px) {\n  .section-two-box-item-block[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 30px;\n  }\n}\n.section-two-box-item-block__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #FFFFFF;\n  padding: 0 0 0 20px;\n}\n@media (max-width: 1200px) {\n  .section-two-box-item-block__description[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 10px 0;\n  }\n}\n.section-two-box-item-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 1200px) {\n  .section-two-box-item-img[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 1200px) {\n  .section-two-box-item-img--img[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n.section-footer[_ngcontent-%COMP%] {\n  margin: 40px 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 1200px) {\n  .section-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n  }\n}\n.section-footer-left__title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 23px;\n  line-height: 30px;\n  color: #FFFFFF;\n  margin: 0 0 10px 0;\n}\n@media (max-width: 1200px) {\n  .section-footer-left__title[_ngcontent-%COMP%] {\n    font-size: 18px;\n    text-align: center;\n    margin: 0 0 5px 0;\n  }\n}\n.section-footer-left__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 30px;\n  color: #FFFFFF;\n}\n@media (max-width: 1200px) {\n  .section-footer-left__description[_ngcontent-%COMP%] {\n    font-size: 16px;\n    text-align: center;\n  }\n}\n.section-footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n@media (max-width: 1200px) {\n  .section-footer-right[_ngcontent-%COMP%] {\n    align-items: center;\n    justify-content: center;\n  }\n}\n.section-footer-right__socials[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin: 0 0 10px 0;\n}\n@media (max-width: 1200px) {\n  .section-footer-right__socials[_ngcontent-%COMP%] {\n    margin: 20px 0;\n  }\n}\n.section-footer-right__socials__item[_ngcontent-%COMP%] {\n  height: 23px;\n  cursor: pointer;\n  margin: 0 10px 0;\n}\n@media (max-width: 1200px) {\n  .section-footer-right__socials__item[_ngcontent-%COMP%] {\n    height: 20px;\n  }\n}\n.section-footer-right__contact[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 30px;\n  color: #FFFFFF;\n  align-items: center;\n}\n.section-footer-right__contact__icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW8vRGVza3RvcC9MdWlzWWF1cmkva2lydXNhZmUvc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVvL0Rlc2t0b3AvTHVpc1lhdXJpL2tpcnVzYWZlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7QURvREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ2pERjtBRG9EQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNqREY7QURxREE7RUFDRSxtQkFBQTtBQ2xERjtBQ2pCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRG9CRjtBQ2pCQTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRG1CRjtBQ2hCQTtFQUNFLGFBQUE7QURtQkY7QURRRTtFRTVCRjtJQUlJLFdBQUE7RURvQkY7QUFDRjtBQ2hCQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QURtQkY7QURsQ0U7RUVZRjtJQUtJLGVBQUE7RURxQkY7QUFDRjtBQ2xCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEb0JGO0FEL0NFO0VFOEJGO0lBRUksWUFBQTtFRG9CRjtBQUNGO0FDakJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURvQkY7QUNsQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRG9CSjtBQ2pCRTtFQWRGO0lBZUksYUFBQTtFRG9CRjtBQUNGO0FDakJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QURvQkY7QUNuQkU7RUFIRjtJQUlJLGFBQUE7RURzQkY7QUFDRjtBQ25CQTtFQUNF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QUE7QUR3Q047QUQ1WUU7RUVnV0U7SUFNSSxjQUFBO0VEMENOO0FBQ0Y7QUN6Q007RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEMkNSO0FEdFpFO0VFd1dJO0lBS0ksWUFBQTtFRDZDUjtBQUNGO0FDekNJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRDJDTjtBQzFDTTtFQUNFLGtCQUFBO0FENENSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuKiB7XG4gIGZvbnQtZmFtaWx5OiAnRG9zaXMnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbkBtaXhpbiB4c3MtZGV2aWNlcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNTlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4vLyBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZVxuQG1peGluIHhzLWRldmljZXMge1xuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuLy8gU21hbGwgc2NyZWVuIC8gcGhvbmVcbkBtaXhpbiBzbS1kZXZpY2VzIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbi8vIE1lZGl1bSBzY3JlZW4gLyB0YWJsZXRcbkBtaXhpbiBtZC1kZXZpY2VzIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kLWxnLWRldmljZXMge1xuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG5AbWl4aW4gbGctZGV2aWNlcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGctZGV2aWNlcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcbkBtaXhpbiB4bC1kZXZpY2VzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiKDIxNiwgMjE2LCAyMTYpO1xufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbioge1xuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogI2Q4ZDhkODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkOGQ4ZDg7XG59XG5cbi5jb250ZW50LW1heCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudC1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGVudC1ib2R5IHtcbiAgd2lkdGg6IDE0NDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgLmNvbnRlbnQtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmNvbnRlbnQtZmF0aGVyIHtcbiAgcGFkZGluZzogMCA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250ZW50LWZhdGhlciB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDk2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubWVudS1sb2dvIHtcbiAgICB3aWR0aDogMTEycHg7XG4gIH1cbn1cblxuLm1lbnUtZGVza3RvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM3MzE0Njk7XG59XG4ubWVudS1kZXNrdG9wX19pdGVtIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLm1lbnUtZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ubWVudS1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC5tZW51LW1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG4uaGVhZGVyLXByaW5jaXBhbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL2JnX2hlYWRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOTNweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyLXByaW5jaXBhbCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjVweCAwIDUwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1wcmluY2lwYWwtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlci1wcmluY2lwYWwtYm94IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4uaGVhZGVyLXByaW5jaXBhbC1ib3hfX3RpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBsaW5lLWhlaWdodDogOTFweDtcbiAgY29sb3I6ICM3MzE0Njk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXItcHJpbmNpcGFsLWJveF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5oZWFkZXItcHJpbmNpcGFsLWJveF9fc3VidGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDYxcHg7XG4gIGNvbG9yOiAjRUM4RDlGO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlci1wcmluY2lwYWwtYm94X19zdWJ0aXRsZSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uaGVhZGVyLXByaW5jaXBhbC1ib3hfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzcyNzI3Mjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmhlYWRlci1wcmluY2lwYWwtYm94X19kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDYyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXItcHJpbmNpcGFsLWJveF9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5oZWFkZXItcHJpbmNpcGFsLWJveF9fYnRuIHtcbiAgYmFja2dyb3VuZDogIzQ2QjdDMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyLXByaW5jaXBhbC1ib3hfX2J0bl9fdGl0bGUge1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXItcHJpbmNpcGFsLWJveF9fYnRuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAzNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaGVhZGVyLXByaW5jaXBhbC1pbWcge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgfVxufVxuXG4uc2VjdGlvbi1vbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL2JnX3NlY3Rpb25fMS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLW9uZSB7XG4gICAgcGFkZGluZzogMTBweCAwIDI1cHg7XG4gIH1cbn1cblxuLnRpdGxlLWdlbmVyYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpdGxlLWdlbmVyYWxfX2xpbmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kOiAjODcwRDZDO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50aXRsZS1nZW5lcmFsX19saW5lIHtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgfVxufVxuLnRpdGxlLWdlbmVyYWxfX3RleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MXB4O1xuICBjb2xvcjogIzg3MEQ2Qztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRpdGxlLWdlbmVyYWxfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsaW5lLWhlaWdodDogNjFweDtcbiAgfVxufVxuXG4uc2VjdGlvbi1vbmUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMzBweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi1vbmUtYm94IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAwO1xuICB9XG59XG4uc2VjdGlvbi1vbmUtYm94X19pbWcge1xuICB3aWR0aDogMzc3cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLW9uZS1ib3hfX2ltZyB7XG4gICAgd2lkdGg6IDI2MHB4O1xuICB9XG59XG4uc2VjdGlvbi1vbmUtYm94X19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM4NzBENkM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLW9uZS1ib3hfX2Rlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxufVxuXG4uc2VjdGlvbi10d28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLXR3byB7XG4gICAgcGFkZGluZzogMTBweCAwIDI1cHg7XG4gIH1cbn1cblxuLnNlY3Rpb24tdHdvLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNlY3Rpb24tdHdvLWJveCB7XG4gICAgcGFkZGluZzogMCAwO1xuICB9XG59XG5cbi5zZWN0aW9uLXR3by1ib3gtaXRlbS1ibG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0VDOEQ5RjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDQwcHggMzBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLXR3by1ib3gtaXRlbS1ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgfVxufVxuLnNlY3Rpb24tdHdvLWJveC1pdGVtLWJsb2NrX19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDAgMCAwIDIwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLXR3by1ib3gtaXRlbS1ibG9ja19fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbn1cblxuLnNlY3Rpb24tdHdvLWJveC1pdGVtLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi10d28tYm94LWl0ZW0taW1nIHtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLXR3by1ib3gtaXRlbS1pbWctLWltZyB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICB9XG59XG5cbi5zZWN0aW9uLWZvb3RlciB7XG4gIG1hcmdpbjogNDBweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLWZvb3RlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG59XG4uc2VjdGlvbi1mb290ZXItbGVmdF9fdGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi1mb290ZXItbGVmdF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gIH1cbn1cbi5zZWN0aW9uLWZvb3Rlci1sZWZ0X19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLWZvb3Rlci1sZWZ0X19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLnNlY3Rpb24tZm9vdGVyLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi1mb290ZXItcmlnaHQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5zZWN0aW9uLWZvb3Rlci1yaWdodF9fc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNlY3Rpb24tZm9vdGVyLXJpZ2h0X19zb2NpYWxzIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgfVxufVxuLnNlY3Rpb24tZm9vdGVyLXJpZ2h0X19zb2NpYWxzX19pdGVtIHtcbiAgaGVpZ2h0OiAyM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCAxMHB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLWZvb3Rlci1yaWdodF9fc29jaWFsc19faXRlbSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG59XG4uc2VjdGlvbi1mb290ZXItcmlnaHRfX2NvbnRhY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VjdGlvbi1mb290ZXItcmlnaHRfX2NvbnRhY3RfX2ljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXMuc2Nzc1wiO1xuXG4uY29udGVudC1tYXgge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICAvL2JhY2tncm91bmQ6IHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb250ZW50LWJvZHkge1xuICB3aWR0aDogMTQ0MHB4O1xuICAvL2JhY2tncm91bmQ6IGJsdWU7XG4gIEBpbmNsdWRlIGxnLWRldmljZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vYmFja2dyb3VuZDogZ3JlZW47XG4gIH1cbn1cblxuLmNvbnRlbnQtZmF0aGVyIHtcbiAgcGFkZGluZzogMCA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAaW5jbHVkZSB4cy1kZXZpY2VzIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAvL2JhY2tncm91bmQ6IHJlYmVjY2FwdXJwbGU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5NnB4O1xufVxuXG4ubWVudS1sb2dvIHtcbiAgQGluY2x1ZGUgeHMtZGV2aWNlcyB7XG4gICAgd2lkdGg6IDExMnB4O1xuICB9XG59XG5cbi5tZW51LWRlc2t0b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjNzMxNDY5O1xuXG4gICZfX2l0ZW0ge1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5tZW51LW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuLmhlYWRlci1wcmluY2lwYWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL2JnX2hlYWRlci5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA5M3B4IDA7XG4gIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI1cHggMCA1MHB4O1xuICB9XG59XG5cbi5oZWFkZXItcHJpbmNpcGFsLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgICBsaW5lLWhlaWdodDogOTFweDtcbiAgICBjb2xvcjogIzczMTQ2OTtcbiAgICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX3N1YnRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDYxcHg7XG4gICAgY29sb3I6ICNFQzhEOUY7XG4gICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogIzcyNzI3MjtcbiAgICBAaW5jbHVkZSB4bC1kZXZpY2VzIHtcbiAgICAgIHdpZHRoOiA2MjBweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19idG4ge1xuICAgIGJhY2tncm91bmQ6ICM0NkI3QzE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4IDM1cHg7XG4gICAgfVxuICB9XG59XG5cbi5oZWFkZXItcHJpbmNpcGFsLWltZyB7XG4gIEBpbmNsdWRlIHhzLWRldmljZXMge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgfVxufVxuXG4vLyBTZWN0aW9uIG9uZVxuLnNlY3Rpb24tb25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNTBweCAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL2JnX3NlY3Rpb25fMS5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgcGFkZGluZzogMTBweCAwIDI1cHg7XG4gIH1cbn1cblxuLnRpdGxlLWdlbmVyYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICZfX2xpbmUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBiYWNrZ3JvdW5kOiAjODcwRDZDO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgd2lkdGg6IDdweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xuICAgIH1cbiAgfVxuXG4gICZfX3RleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDYxcHg7XG4gICAgY29sb3I6ICM4NzBENkM7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBsaW5lLWhlaWdodDogNjFweDtcbiAgICB9XG4gIH1cbn1cblxuLnNlY3Rpb24tb25lLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDM3N3B4O1xuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgd2lkdGg6IDI2MHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICM4NzBENkM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDQwcHg7XG5cbiAgICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICAgIHBhZGRpbmc6IDIwcHggMCAwIDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gU2VjdGlvbiB0d29cblxuLnNlY3Rpb24tdHdvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNTBweCAwO1xuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWcvYmdfc2VjdGlvbl8yLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMjVweDtcbiAgfVxufVxuXG4uc2VjdGlvbi10d28tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweCAwO1xuICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICBwYWRkaW5nOiAwIDA7XG4gIH1cbn1cblxuLnNlY3Rpb24tdHdvLWJveC1pdGVtLWJsb2NrIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRUM4RDlGO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZzogNDBweCAzMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgfVxuXG4gICZfX2ljb24ge1xuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cbiAgfVxufVxuXG4uc2VjdGlvbi10d28tYm94LWl0ZW0taW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAmLS1pbWcge1xuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgd2lkdGg6IDYwMHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBGb290ZXJcblxuLnNlY3Rpb24tZm9vdGVyIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG5cbiAgJi1sZWZ0IHtcbiAgICAmX190aXRsZSB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYtcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJl9fc29jaWFscyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICB9XG4gICAgICAmX19pdGVtIHtcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDA7XG4gICAgICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICZfX2NvbnRhY3Qge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgJl9faWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"]
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
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
    /*! /Users/leo/Desktop/LuisYauri/kirusafe/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map