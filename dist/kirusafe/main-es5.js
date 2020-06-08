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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'kirusafe';
        this.listMenu = [{
          title: 'Inicio'
        }, {
          title: '¿Quienes somos?'
        }, {
          title: '¿Quienes somos?'
        }, {
          title: '¿Quienes confian en nosotros?'
        }];
        this.logoKirusafe = 'assets/img/logo.png';
        this.headerContent = {
          title: 'KiruSafe',
          subTitle: '¡El Lazo que nos une!',
          description: 'Red de voluntarios y docentes a nivel nacional enfocados en promover la salud oral.',
          btn: 'VER VIDEO',
          img: 'assets/img/img_girls.png'
        };
        this.sectionOne = {
          title: '¿Quienes somos?',
          description: 'Somos una comunidad que utiliza redes sociales libres como Facebook para realizar asesorías grupales por colegio y a su vez por aula; aprovechando que cada maestra conoce la realidad de sus niños y su familia, se brinda educación en el marco  promoción - prevención en niños menores de 12 años; tocando temas de salud, especialmente de salud bucal.',
          img: 'assets/img/img_section_1.png'
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 48,
      vars: 10,
      consts: [[1, "content-max"], [1, "content-section"], [1, "content-body"], [1, "content-father"], [1, "menu"], ["alt", "logo", 1, "menu-logo", 3, "src"], [1, "menu-desktop"], ["class", "menu-desktop__item", 4, "ngFor", "ngForOf"], [1, "menu-mobile"], [1, "gg-menu-right-alt", 2, "color", "#731469"], [1, "header-principal"], [1, "header-principal-box"], [1, "header-principal-box__title"], [1, "header-principal-box__subtitle"], [1, "header-principal-box__description"], [1, "header-principal-box__btn"], [1, "header-principal-box__btn__title"], [1, "gg-chevron-right-o"], ["alt", "girls", 1, "header-principal-img", 3, "src"], [1, "content-section", 2, "background", "#F8D152"], [1, "section-one"], [1, "title-general"], [1, "title-general__line"], [1, "title-general__text"], [1, "section-one-box"], ["alt", "section-one", 1, "section-one-box__img", 3, "src"], [1, "section-one-box__description"], [1, "menu-desktop__item"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Como lo hacemos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Quienes confian en nostros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Footer ");

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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Dosis\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n.content-max[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.content-section[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n.content-body[_ngcontent-%COMP%] {\n  width: 1440px;\n}\n@media (max-width: 1439px) {\n  .content-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.content-father[_ngcontent-%COMP%] {\n  padding: 0 80px;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 576px) {\n  .content-father[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 96px;\n}\n@media (max-width: 576px) {\n  .menu-logo[_ngcontent-%COMP%] {\n    width: 112px;\n  }\n}\n.menu-desktop[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 30px;\n  color: #731469;\n}\n.menu-desktop__item[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  cursor: pointer;\n}\n@media (max-width: 1279px) {\n  .menu-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.menu-mobile[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n}\n@media (max-width: 1279px) {\n  .menu-mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.header-principal[_ngcontent-%COMP%] {\n  background-image: url('bg_header.png');\n  background-size: cover;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 33px 0;\n}\n@media (max-width: 1200px) {\n  .header-principal[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 0 30px;\n  }\n}\n.header-principal-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 1200px) {\n  .header-principal-box[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n  }\n}\n.header-principal-box__title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 72px;\n  line-height: 91px;\n  color: #731469;\n}\n@media (max-width: 1200px) {\n  .header-principal-box__title[_ngcontent-%COMP%] {\n    font-size: 50px;\n    line-height: 43px;\n    text-align: center;\n  }\n}\n.header-principal-box__subtitle[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 61px;\n  color: #EC8D9F;\n  margin: 15px 0;\n}\n@media (max-width: 1200px) {\n  .header-principal-box__subtitle[_ngcontent-%COMP%] {\n    margin: 5px 0;\n    font-size: 25px;\n    line-height: 45px;\n    text-align: center;\n  }\n}\n.header-principal-box__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 30px;\n  color: #727272;\n}\n@media (min-width: 1440px) {\n  .header-principal-box__description[_ngcontent-%COMP%] {\n    width: 620px;\n  }\n}\n@media (max-width: 1200px) {\n  .header-principal-box__description[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 18px;\n    text-align: center;\n  }\n}\n.header-principal-box__btn[_ngcontent-%COMP%] {\n  background: #46B7C1;\n  border-radius: 10px;\n  margin: 20px 0;\n  border: 0;\n  box-shadow: none;\n  padding: 10px 50px;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n  color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  cursor: pointer;\n}\n.header-principal-box__btn__title[_ngcontent-%COMP%] {\n  margin: 0 20px 0 0;\n}\n@media (max-width: 1200px) {\n  .header-principal-box__btn[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 18px;\n    text-align: center;\n    padding: 8px 35px;\n  }\n}\n@media (max-width: 576px) {\n  .header-principal-img[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n.section-one[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 50px 0;\n  background-image: url('bg_section_1.png');\n  background-size: cover;\n}\n@media (max-width: 1200px) {\n  .section-one[_ngcontent-%COMP%] {\n    padding: 10px 0 25px;\n  }\n}\n.title-general[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.title-general__line[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 38px;\n  background: #870D6C;\n  border-radius: 20px;\n  margin-right: 14px;\n}\n@media (max-width: 1200px) {\n  .title-general__line[_ngcontent-%COMP%] {\n    width: 7px;\n    height: 20px;\n    margin-right: 9px;\n  }\n}\n.title-general__text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 44px;\n  line-height: 61px;\n  color: #870D6C;\n}\n@media (max-width: 1200px) {\n  .title-general__text[_ngcontent-%COMP%] {\n    font-size: 25px;\n    line-height: 61px;\n  }\n}\n.section-one-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 30px 0;\n}\n@media (max-width: 1200px) {\n  .section-one-box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 0;\n  }\n}\n.section-one-box__img[_ngcontent-%COMP%] {\n  width: 377px;\n}\n@media (max-width: 1200px) {\n  .section-one-box__img[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n.section-one-box__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #870D6C;\n  display: flex;\n  align-items: center;\n  padding: 40px;\n}\n@media (max-width: 1200px) {\n  .section-one-box__description[_ngcontent-%COMP%] {\n    padding: 20px 0 0 0;\n    font-size: 16px;\n    line-height: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW8vRGVza3RvcC9MdWlzWWF1cmkva2lydXNhZmUvc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVvL0Rlc2t0b3AvTHVpc1lhdXJpL2tpcnVzYWZlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7QUNIQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRE1GO0FDSEE7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURLRjtBQ0ZBO0VBQ0UsYUFBQTtBREtGO0FEc0JFO0VFNUJGO0lBSUksV0FBQTtFRE1GO0FBQ0Y7QUNGQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QURLRjtBRHBCRTtFRVlGO0lBS0ksZUFBQTtFRE9GO0FBQ0Y7QUNKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FETUY7QURqQ0U7RUU4QkY7SUFFSSxZQUFBO0VETUY7QUFDRjtBQ0hBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURNRjtBQ0pFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QURNSjtBQ0hFO0VBZEY7SUFlSSxhQUFBO0VETUY7QUFDRjtBQ0hBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QURNRjtBQ0xFO0VBSEY7SUFJSSxhQUFBO0VEUUY7QUFDRjtBQ0xBO0VBQ0Usc0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEUUY7QUQ1REU7RUU2Q0Y7SUFTSSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0VEVUY7QUFDRjtBQ1BBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEVUY7QUQxRUU7RUU4REY7SUFJSSx1QkFBQTtJQUNBLG1CQUFBO0VEWUY7QUFDRjtBQ1ZFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURZSjtBRHZGRTtFRXNFQTtJQU9JLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VEY0o7QUFDRjtBQ1hFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FEYUo7QUR0R0U7RUVtRkE7SUFRSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RURlSjtBQUNGO0FDWkU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRGNKO0FEakdFO0VFOEVBO0lBT0ksWUFBQTtFRGdCSjtBQUNGO0FEMUhFO0VFa0dBO0lBVUksZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RURrQko7QUFDRjtBQ2ZFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEaUJKO0FDZkk7RUFDRSxrQkFBQTtBRGlCTjtBRHJKRTtFRWtIQTtJQXNCSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VEaUJKO0FBQ0Y7QUQvS0U7RUVrS0Y7SUFFSSxZQUFBO0VEZ0JGO0FBQ0Y7QUNaQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0FEZUY7QUQzS0U7RUV1SkY7SUFPSSxvQkFBQTtFRGlCRjtBQUNGO0FDZEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRGlCRjtBQ2hCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FEa0JKO0FEN0xFO0VFc0tBO0lBT0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFRG9CSjtBQUNGO0FDbEJFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURvQko7QUQzTUU7RUVrTEE7SUFPSSxlQUFBO0lBQ0EsaUJBQUE7RURzQko7QUFDRjtBQ2xCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURxQkY7QUR2TkU7RUUrTEY7SUFLSSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0VEdUJGO0FBQ0Y7QUNyQkU7RUFDRSxZQUFBO0FEdUJKO0FEbE9FO0VFME1BO0lBR0ksWUFBQTtFRHlCSjtBQUNGO0FDdEJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEd0JKO0FEalBFO0VFaU5BO0lBV0ksbUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUR5Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbioge1xuICBmb250LWZhbWlseTogJ0Rvc2lzJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5AbWl4aW4geHNzLWRldmljZXMge1xuICBAbWVkaWEgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcbkBtaXhpbiB4cy1kZXZpY2VzIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbi8vIFNtYWxsIHNjcmVlbiAvIHBob25lXG5AbWl4aW4gc20tZGV2aWNlcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4vLyBNZWRpdW0gc2NyZWVuIC8gdGFibGV0XG5AbWl4aW4gbWQtZGV2aWNlcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZC1sZy1kZXZpY2VzIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuQG1peGluIGxnLWRldmljZXMge1xuICBAbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnLWRldmljZXMge1xuICBAbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gRXh0cmEgbGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wXG5AbWl4aW4geGwtZGV2aWNlcyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbioge1xuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb250ZW50LW1heCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudC1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGVudC1ib2R5IHtcbiAgd2lkdGg6IDE0NDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgLmNvbnRlbnQtYm9keSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmNvbnRlbnQtZmF0aGVyIHtcbiAgcGFkZGluZzogMCA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jb250ZW50LWZhdGhlciB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDk2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubWVudS1sb2dvIHtcbiAgICB3aWR0aDogMTEycHg7XG4gIH1cbn1cblxuLm1lbnUtZGVza3RvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM3MzE0Njk7XG59XG4ubWVudS1kZXNrdG9wX19pdGVtIHtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgLm1lbnUtZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ubWVudS1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC5tZW51LW1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG4uaGVhZGVyLXByaW5jaXBhbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL2JnX2hlYWRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzNweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyLXByaW5jaXBhbCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAwIDMwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1wcmluY2lwYWwtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlci1wcmluY2lwYWwtYm94IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4uaGVhZGVyLXByaW5jaXBhbC1ib3hfX3RpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBsaW5lLWhlaWdodDogOTFweDtcbiAgY29sb3I6ICM3MzE0Njk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXItcHJpbmNpcGFsLWJveF9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5oZWFkZXItcHJpbmNpcGFsLWJveF9fc3VidGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDYxcHg7XG4gIGNvbG9yOiAjRUM4RDlGO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlci1wcmluY2lwYWwtYm94X19zdWJ0aXRsZSB7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uaGVhZGVyLXByaW5jaXBhbC1ib3hfX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzcyNzI3Mjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmhlYWRlci1wcmluY2lwYWwtYm94X19kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDYyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXItcHJpbmNpcGFsLWJveF9fZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5oZWFkZXItcHJpbmNpcGFsLWJveF9fYnRuIHtcbiAgYmFja2dyb3VuZDogIzQ2QjdDMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZzogMTBweCA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyLXByaW5jaXBhbC1ib3hfX2J0bl9fdGl0bGUge1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXItcHJpbmNpcGFsLWJveF9fYnRuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweCAzNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaGVhZGVyLXByaW5jaXBhbC1pbWcge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgfVxufVxuXG4uc2VjdGlvbi1vbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL2JnX3NlY3Rpb25fMS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLW9uZSB7XG4gICAgcGFkZGluZzogMTBweCAwIDI1cHg7XG4gIH1cbn1cblxuLnRpdGxlLWdlbmVyYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRpdGxlLWdlbmVyYWxfX2xpbmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBiYWNrZ3JvdW5kOiAjODcwRDZDO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50aXRsZS1nZW5lcmFsX19saW5lIHtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgfVxufVxuLnRpdGxlLWdlbmVyYWxfX3RleHQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MXB4O1xuICBjb2xvcjogIzg3MEQ2Qztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRpdGxlLWdlbmVyYWxfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsaW5lLWhlaWdodDogNjFweDtcbiAgfVxufVxuXG4uc2VjdGlvbi1vbmUtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMzBweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi1vbmUtYm94IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAwO1xuICB9XG59XG4uc2VjdGlvbi1vbmUtYm94X19pbWcge1xuICB3aWR0aDogMzc3cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLW9uZS1ib3hfX2ltZyB7XG4gICAgd2lkdGg6IDI2MHB4O1xuICB9XG59XG4uc2VjdGlvbi1vbmUtYm94X19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM4NzBENkM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLW9uZS1ib3hfX2Rlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzLnNjc3NcIjtcblxuLmNvbnRlbnQtbWF4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgLy9iYWNrZ3JvdW5kOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGVudC1ib2R5IHtcbiAgd2lkdGg6IDE0NDBweDtcbiAgLy9iYWNrZ3JvdW5kOiBibHVlO1xuICBAaW5jbHVkZSBsZy1kZXZpY2VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL2JhY2tncm91bmQ6IGdyZWVuO1xuICB9XG59XG5cbi5jb250ZW50LWZhdGhlciB7XG4gIHBhZGRpbmc6IDAgODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgQGluY2x1ZGUgeHMtZGV2aWNlcyB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLy9iYWNrZ3JvdW5kOiByZWJlY2NhcHVycGxlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogOTZweDtcbn1cblxuLm1lbnUtbG9nbyB7XG4gIEBpbmNsdWRlIHhzLWRldmljZXMge1xuICAgIHdpZHRoOiAxMTJweDtcbiAgfVxufVxuXG4ubWVudS1kZXNrdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzczMTQ2OTtcblxuICAmX19pdGVtIHtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ubWVudS1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbi5oZWFkZXItcHJpbmNpcGFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltZy9iZ19oZWFkZXIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzNweCAwO1xuICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMzBweDtcbiAgfVxufVxuXG4uaGVhZGVyLXByaW5jaXBhbC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDcycHg7XG4gICAgbGluZS1oZWlnaHQ6IDkxcHg7XG4gICAgY29sb3I6ICM3MzE0Njk7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19zdWJ0aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MXB4O1xuICAgIGNvbG9yOiAjRUM4RDlGO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICM3MjcyNzI7XG4gICAgQGluY2x1ZGUgeGwtZGV2aWNlcyB7XG4gICAgICB3aWR0aDogNjIwcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDZCN0MxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBtYXJnaW46IDAgMjBweCAwIDA7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweCAzNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uaGVhZGVyLXByaW5jaXBhbC1pbWcge1xuICBAaW5jbHVkZSB4cy1kZXZpY2VzIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbn1cblxuLy8gU2VjdGlvbiBvbmVcbi5zZWN0aW9uLW9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltZy9iZ19zZWN0aW9uXzEucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgIHBhZGRpbmc6IDEwcHggMCAyNXB4O1xuICB9XG59XG5cbi50aXRsZS1nZW5lcmFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJl9fbGluZSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGJhY2tncm91bmQ6ICM4NzBENkM7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICB3aWR0aDogN3B4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgfVxuICB9XG4gICZfX3RleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDYxcHg7XG4gICAgY29sb3I6ICM4NzBENkM7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBsaW5lLWhlaWdodDogNjFweDtcbiAgICB9XG4gIH1cbn1cblxuLnNlY3Rpb24tb25lLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDM3N3B4O1xuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgd2lkdGg6IDI2MHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9ue1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogIzg3MEQ2QztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcblxuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIH1cbiAgfVxufSJdfQ== */"]
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