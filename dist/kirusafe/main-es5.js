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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.title, " ");
      }
    }

    function AppComponent_div_45_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AppComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_45_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var item_r3 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.checkBox(item_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_45_img_7_Template, 1, 1, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.flag);
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
        this.sectionTwo = {
          title: '¿Como lo hacemos?',
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
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkBox",
        value: function checkBox(item) {
          item.flag = !item.flag;
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
      decls: 54,
      vars: 12,
      consts: [[1, "content-max"], [1, "content-section"], [1, "content-body"], [1, "content-father"], [1, "menu"], ["alt", "logo", 1, "menu-logo", 3, "src"], [1, "menu-desktop"], ["class", "menu-desktop__item", 4, "ngFor", "ngForOf"], [1, "menu-mobile"], [1, "gg-menu-right-alt", 2, "color", "#731469"], [1, "header-principal"], [1, "header-principal-box"], [1, "header-principal-box__title"], [1, "header-principal-box__subtitle"], [1, "header-principal-box__description"], [1, "header-principal-box__btn"], [1, "header-principal-box__btn__title"], [1, "gg-chevron-right-o"], ["alt", "girls", 1, "header-principal-img", 3, "src"], [1, "content-section", 2, "background", "#F8D152"], [1, "section-one"], [1, "title-general"], [1, "title-general__line"], [1, "title-general__text"], [1, "section-one-box"], ["alt", "section-one", 1, "section-one-box__img", 3, "src"], [1, "section-one-box__description"], [1, "section-two"], [1, "section-two-box"], ["class", "section-two-box-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "menu-desktop__item"], [1, "section-two-box-item", 3, "click"], [1, "section-two-box-item-block"], [1, "section-two-box-item-block__icon"], [1, "gg-add-r"], [1, "section-two-box-item-block__description"], [1, "section-two-box-item-img"], ["alt", "img", "class", "section-two-box-item-img--img", 3, "src", 4, "ngIf"], ["alt", "img", 1, "section-two-box-item-img--img", 3, "src"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Quienes confian en nostros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Footer ");

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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"Dosis\", sans-serif;\n  margin: 0;\n  padding: 0;\n}\n.content-max[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.content-section[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n.content-body[_ngcontent-%COMP%] {\n  width: 1440px;\n}\n@media (max-width: 1439px) {\n  .content-body[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.content-father[_ngcontent-%COMP%] {\n  padding: 0 80px;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 576px) {\n  .content-father[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 96px;\n}\n@media (max-width: 576px) {\n  .menu-logo[_ngcontent-%COMP%] {\n    width: 112px;\n  }\n}\n.menu-desktop[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 30px;\n  color: #731469;\n}\n.menu-desktop__item[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  cursor: pointer;\n}\n@media (max-width: 1279px) {\n  .menu-desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.menu-mobile[_ngcontent-%COMP%] {\n  display: none;\n  cursor: pointer;\n}\n@media (max-width: 1279px) {\n  .menu-mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.header-principal[_ngcontent-%COMP%] {\n  background-image: url('bg_header.png');\n  background-size: cover;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 33px 0;\n}\n@media (max-width: 1200px) {\n  .header-principal[_ngcontent-%COMP%] {\n    background: #FFFFFF;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px 0 30px;\n  }\n}\n.header-principal-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 1200px) {\n  .header-principal-box[_ngcontent-%COMP%] {\n    justify-content: center;\n    align-items: center;\n  }\n}\n.header-principal-box__title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 72px;\n  line-height: 91px;\n  color: #731469;\n}\n@media (max-width: 1200px) {\n  .header-principal-box__title[_ngcontent-%COMP%] {\n    font-size: 50px;\n    line-height: 43px;\n    text-align: center;\n  }\n}\n.header-principal-box__subtitle[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 61px;\n  color: #EC8D9F;\n  margin: 15px 0;\n}\n@media (max-width: 1200px) {\n  .header-principal-box__subtitle[_ngcontent-%COMP%] {\n    margin: 5px 0;\n    font-size: 25px;\n    line-height: 45px;\n    text-align: center;\n  }\n}\n.header-principal-box__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n  line-height: 30px;\n  color: #727272;\n}\n@media (min-width: 1440px) {\n  .header-principal-box__description[_ngcontent-%COMP%] {\n    width: 620px;\n  }\n}\n@media (max-width: 1200px) {\n  .header-principal-box__description[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 18px;\n    text-align: center;\n  }\n}\n.header-principal-box__btn[_ngcontent-%COMP%] {\n  background: #46B7C1;\n  border-radius: 10px;\n  margin: 20px 0;\n  border: 0;\n  box-shadow: none;\n  padding: 10px 50px;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n  color: #FFFFFF;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  cursor: pointer;\n}\n.header-principal-box__btn__title[_ngcontent-%COMP%] {\n  margin: 0 20px 0 0;\n}\n@media (max-width: 1200px) {\n  .header-principal-box__btn[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 18px;\n    text-align: center;\n    padding: 8px 35px;\n  }\n}\n@media (max-width: 576px) {\n  .header-principal-img[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n.section-one[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 50px 0;\n  background-image: url('bg_section_1.png');\n  background-size: cover;\n}\n@media (max-width: 1200px) {\n  .section-one[_ngcontent-%COMP%] {\n    padding: 10px 0 25px;\n  }\n}\n.title-general[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.title-general__line[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 38px;\n  background: #870D6C;\n  border-radius: 20px;\n  margin-right: 14px;\n}\n@media (max-width: 1200px) {\n  .title-general__line[_ngcontent-%COMP%] {\n    width: 7px;\n    height: 20px;\n    margin-right: 9px;\n  }\n}\n.title-general__text[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 44px;\n  line-height: 61px;\n  color: #870D6C;\n}\n@media (max-width: 1200px) {\n  .title-general__text[_ngcontent-%COMP%] {\n    font-size: 25px;\n    line-height: 61px;\n  }\n}\n.section-one-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding: 30px 0;\n}\n@media (max-width: 1200px) {\n  .section-one-box[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 0;\n  }\n}\n.section-one-box__img[_ngcontent-%COMP%] {\n  width: 377px;\n}\n@media (max-width: 1200px) {\n  .section-one-box__img[_ngcontent-%COMP%] {\n    width: 260px;\n  }\n}\n.section-one-box__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #870D6C;\n  display: flex;\n  align-items: center;\n  padding: 40px;\n}\n@media (max-width: 1200px) {\n  .section-one-box__description[_ngcontent-%COMP%] {\n    padding: 20px 0 0 0;\n    font-size: 16px;\n    line-height: 18px;\n  }\n}\n.section-two[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 50px 0;\n  background-size: cover;\n}\n@media (max-width: 1200px) {\n  .section-two[_ngcontent-%COMP%] {\n    padding: 10px 0 25px;\n  }\n}\n.section-two-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 30px 0;\n}\n@media (max-width: 1200px) {\n  .section-two-box[_ngcontent-%COMP%] {\n    padding: 0 0;\n  }\n}\n.section-two-box-item-block[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: #EC8D9F;\n  border-radius: 10px;\n  margin: 10px 0;\n  padding: 40px 30px;\n  color: #FFFFFF;\n}\n@media (max-width: 1200px) {\n  .section-two-box-item-block[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 20px 30px;\n  }\n}\n.section-two-box-item-block__description[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 30px;\n  color: #FFFFFF;\n  padding: 0 0 0 20px;\n}\n@media (max-width: 1200px) {\n  .section-two-box-item-block__description[_ngcontent-%COMP%] {\n    font-size: 16px;\n    padding: 10px 0;\n  }\n}\n.section-two-box-item-img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 1200px) {\n  .section-two-box-item-img[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n    justify-content: flex-start;\n  }\n}\n@media (max-width: 1200px) {\n  .section-two-box-item-img--img[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZW8vRGVza3RvcC9MdWlzWWF1cmkva2lydXNhZmUvc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVvL0Rlc2t0b3AvTHVpc1lhdXJpL2tpcnVzYWZlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7QUNIQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBRE1GO0FDSEE7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURLRjtBQ0ZBO0VBQ0UsYUFBQTtBREtGO0FEc0JFO0VFNUJGO0lBSUksV0FBQTtFRE1GO0FBQ0Y7QUNGQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QURLRjtBRHBCRTtFRVlGO0lBS0ksZUFBQTtFRE9GO0FBQ0Y7QUNKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FETUY7QURqQ0U7RUU4QkY7SUFFSSxZQUFBO0VETUY7QUFDRjtBQ0hBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURNRjtBQ0pFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QURNSjtBQ0hFO0VBZEY7SUFlSSxhQUFBO0VETUY7QUFDRjtBQ0hBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QURNRjtBQ0xFO0VBSEY7SUFJSSxhQUFBO0VEUUY7QUFDRjtBQ0xBO0VBQ0Usc0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEUUY7QUQ1REU7RUU2Q0Y7SUFTSSxtQkFBQTtJQUNBLHNCQUFBO0lB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O0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFRDJCRjtBQUNGO0FDeEJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRDBCSjtBRDNTRTtFRTJRQTtJQVFJLGVBQUE7SUFDQSxlQUFBO0VENEJKO0FBQ0Y7QUN4QkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUQyQkY7QUR0VEU7RUV5UkY7SUFJSSxrQkFBQTtJQUNBLDJCQUFBO0VENkJGO0FBQ0Y7QUQ1VEU7RUVnU0E7SUFFSSxZQUFBO0VEOEJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIHtcbiAgZm9udC1mYW1pbHk6ICdEb3NpcycsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuQG1peGluIHhzcy1kZXZpY2VzIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbi8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG5AbWl4aW4geHMtZGV2aWNlcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4vLyBTbWFsbCBzY3JlZW4gLyBwaG9uZVxuQG1peGluIHNtLWRldmljZXMge1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxuQG1peGluIG1kLWRldmljZXMge1xuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQtbGctZGV2aWNlcyB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcbkBtaXhpbiBsZy1kZXZpY2VzIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZy1kZXZpY2VzIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuQG1peGluIHhsLWRldmljZXMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiRG9zaXNcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGVudC1tYXgge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNvbnRlbnQtYm9keSB7XG4gIHdpZHRoOiAxNDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gIC5jb250ZW50LWJvZHkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jb250ZW50LWZhdGhlciB7XG4gIHBhZGRpbmc6IDAgODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY29udGVudC1mYXRoZXIge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA5NnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1lbnUtbG9nbyB7XG4gICAgd2lkdGg6IDExMnB4O1xuICB9XG59XG5cbi5tZW51LWRlc2t0b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjNzMxNDY5O1xufVxuLm1lbnUtZGVza3RvcF9faXRlbSB7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gIC5tZW51LWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLm1lbnUtbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNzlweCkge1xuICAubWVudS1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuLmhlYWRlci1wcmluY2lwYWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9iZ19oZWFkZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMzcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlYWRlci1wcmluY2lwYWwge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMCAzMHB4O1xuICB9XG59XG5cbi5oZWFkZXItcHJpbmNpcGFsLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXItcHJpbmNpcGFsLWJveCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLmhlYWRlci1wcmluY2lwYWwtYm94X190aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgbGluZS1oZWlnaHQ6IDkxcHg7XG4gIGNvbG9yOiAjNzMxNDY5O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyLXByaW5jaXBhbC1ib3hfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uaGVhZGVyLXByaW5jaXBhbC1ib3hfX3N1YnRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MXB4O1xuICBjb2xvcjogI0VDOEQ5RjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZWFkZXItcHJpbmNpcGFsLWJveF9fc3VidGl0bGUge1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmhlYWRlci1wcmluY2lwYWwtYm94X19kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM3MjcyNzI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIC5oZWFkZXItcHJpbmNpcGFsLWJveF9fZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiA2MjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyLXByaW5jaXBhbC1ib3hfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uaGVhZGVyLXByaW5jaXBhbC1ib3hfX2J0biB7XG4gIGJhY2tncm91bmQ6ICM0NkI3QzE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlci1wcmluY2lwYWwtYm94X19idG5fX3RpdGxlIHtcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVhZGVyLXByaW5jaXBhbC1ib3hfX2J0biB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMzVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmhlYWRlci1wcmluY2lwYWwtaW1nIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbn1cblxuLnNlY3Rpb24tb25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNTBweCAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9iZ19zZWN0aW9uXzEucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi1vbmUge1xuICAgIHBhZGRpbmc6IDEwcHggMCAyNXB4O1xuICB9XG59XG5cbi50aXRsZS1nZW5lcmFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50aXRsZS1nZW5lcmFsX19saW5lIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgYmFja2dyb3VuZDogIzg3MEQ2QztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudGl0bGUtZ2VuZXJhbF9fbGluZSB7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIH1cbn1cbi50aXRsZS1nZW5lcmFsX190ZXh0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBsaW5lLWhlaWdodDogNjFweDtcbiAgY29sb3I6ICM4NzBENkM7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50aXRsZS1nZW5lcmFsX190ZXh0IHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDYxcHg7XG4gIH1cbn1cblxuLnNlY3Rpb24tb25lLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNlY3Rpb24tb25lLWJveCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgfVxufVxuLnNlY3Rpb24tb25lLWJveF9faW1nIHtcbiAgd2lkdGg6IDM3N3B4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi1vbmUtYm94X19pbWcge1xuICAgIHdpZHRoOiAyNjBweDtcbiAgfVxufVxuLnNlY3Rpb24tb25lLWJveF9fZGVzY3JpcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjODcwRDZDO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi1vbmUtYm94X19kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbn1cblxuLnNlY3Rpb24tdHdvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNTBweCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi10d28ge1xuICAgIHBhZGRpbmc6IDEwcHggMCAyNXB4O1xuICB9XG59XG5cbi5zZWN0aW9uLXR3by1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zZWN0aW9uLXR3by1ib3gge1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgfVxufVxuXG4uc2VjdGlvbi10d28tYm94LWl0ZW0tYmxvY2sge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNFQzhEOUY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi10d28tYm94LWl0ZW0tYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIH1cbn1cbi5zZWN0aW9uLXR3by1ib3gtaXRlbS1ibG9ja19fZGVzY3JpcHRpb24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi10d28tYm94LWl0ZW0tYmxvY2tfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICB9XG59XG5cbi5zZWN0aW9uLXR3by1ib3gtaXRlbS1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNlY3Rpb24tdHdvLWJveC1pdGVtLWltZyB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc2VjdGlvbi10d28tYm94LWl0ZW0taW1nLS1pbWcge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzLnNjc3NcIjtcblxuLmNvbnRlbnQtbWF4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgLy9iYWNrZ3JvdW5kOiByZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGVudC1ib2R5IHtcbiAgd2lkdGg6IDE0NDBweDtcbiAgLy9iYWNrZ3JvdW5kOiBibHVlO1xuICBAaW5jbHVkZSBsZy1kZXZpY2VzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvL2JhY2tncm91bmQ6IGdyZWVuO1xuICB9XG59XG5cbi5jb250ZW50LWZhdGhlciB7XG4gIHBhZGRpbmc6IDAgODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgQGluY2x1ZGUgeHMtZGV2aWNlcyB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLy9iYWNrZ3JvdW5kOiByZWJlY2NhcHVycGxlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogOTZweDtcbn1cblxuLm1lbnUtbG9nbyB7XG4gIEBpbmNsdWRlIHhzLWRldmljZXMge1xuICAgIHdpZHRoOiAxMTJweDtcbiAgfVxufVxuXG4ubWVudS1kZXNrdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzczMTQ2OTtcblxuICAmX19pdGVtIHtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogMTI3OXB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4ubWVudS1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbi5oZWFkZXItcHJpbmNpcGFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltZy9iZ19oZWFkZXIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzNweCAwO1xuICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMzBweDtcbiAgfVxufVxuXG4uaGVhZGVyLXByaW5jaXBhbC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBAaW5jbHVkZSBtZC1sZy1kZXZpY2VzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDcycHg7XG4gICAgbGluZS1oZWlnaHQ6IDkxcHg7XG4gICAgY29sb3I6ICM3MzE0Njk7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAmX19zdWJ0aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MXB4O1xuICAgIGNvbG9yOiAjRUM4RDlGO1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICM3MjcyNzI7XG4gICAgQGluY2x1ZGUgeGwtZGV2aWNlcyB7XG4gICAgICB3aWR0aDogNjIwcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgJl9fYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDZCN0MxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBtYXJnaW46IDAgMjBweCAwIDA7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweCAzNXB4O1xuICAgIH1cbiAgfVxufVxuXG4uaGVhZGVyLXByaW5jaXBhbC1pbWcge1xuICBAaW5jbHVkZSB4cy1kZXZpY2VzIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gIH1cbn1cblxuLy8gU2VjdGlvbiBvbmVcbi5zZWN0aW9uLW9uZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDUwcHggMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltZy9iZ19zZWN0aW9uXzEucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgIHBhZGRpbmc6IDEwcHggMCAyNXB4O1xuICB9XG59XG5cbi50aXRsZS1nZW5lcmFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJl9fbGluZSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xuICAgIGJhY2tncm91bmQ6ICM4NzBENkM7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICB3aWR0aDogN3B4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgfVxuICB9XG4gICZfX3RleHQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDYxcHg7XG4gICAgY29sb3I6ICM4NzBENkM7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBsaW5lLWhlaWdodDogNjFweDtcbiAgICB9XG4gIH1cbn1cblxuLnNlY3Rpb24tb25lLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgfVxuXG4gICZfX2ltZyB7XG4gICAgd2lkdGg6IDM3N3B4O1xuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgd2lkdGg6IDI2MHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9ue1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBjb2xvcjogIzg3MEQ2QztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcblxuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyBTZWN0aW9uIHR3b1xuXG4uc2VjdGlvbi10d28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1MHB4IDA7XG4gIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltZy9iZ19zZWN0aW9uXzIucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgIHBhZGRpbmc6IDEwcHggMCAyNXB4O1xuICB9XG59XG5cbi5zZWN0aW9uLXR3by1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgfVxufVxuXG4uc2VjdGlvbi10d28tYm94LWl0ZW0tYmxvY2t7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0VDOEQ5RjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDQwcHggMzBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIH1cbiAgJl9faWNvbntcbiAgfVxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBhZGRpbmc6IDAgMCAwIDIwcHg7XG4gICAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgfVxuICB9XG59XG5cbi5zZWN0aW9uLXR3by1ib3gtaXRlbS1pbWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgQGluY2x1ZGUgbWQtbGctZGV2aWNlcyB7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICAmLS1pbWcge1xuICAgIEBpbmNsdWRlIG1kLWxnLWRldmljZXMge1xuICAgICAgd2lkdGg6IDYwMHB4O1xuICAgIH1cbiAgfVxufSJdfQ== */"]
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