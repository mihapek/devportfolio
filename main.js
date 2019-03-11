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
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _labels_labels_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./labels/labels.component */ "./src/app/labels/labels.component.ts");
/* harmony import */ var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-section/main-section.component */ "./src/app/main-section/main-section.component.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"], _labels_labels_component__WEBPACK_IMPORTED_MODULE_10__["LabelsComponent"], _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_11__["MainSectionComponent"], _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_1__["MyMaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]],
            providers: [],
            bootstrap: [_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/labels/labels.component.ts":
/*!********************************************!*\
  !*** ./src/app/labels/labels.component.ts ***!
  \********************************************/
/*! exports provided: LabelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsComponent", function() { return LabelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LabelsComponent = /** @class */ (function () {
    function LabelsComponent() {
        console.log("Load LabelsComponent");
    }
    LabelsComponent.prototype.printLabel = function (value) {
        return value.name ? value.name : value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LabelsComponent.prototype, "values", void 0);
    LabelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'labels',
            template: "\n    <span class=\"badge badge-success dlabel\" *ngFor=\"let value of values\">{{printLabel(value)}}\n\t\t<span class=\"badge badge-light\" *ngIf=\"value.version\">{{value.version}}</span>\n\t</span>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LabelsComponent);
    return LabelsComponent;
}());



/***/ }),

/***/ "./src/app/main-section/main-section.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-section/main-section.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  main-section works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/main-section/main-section.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main-section/main-section.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2VjdGlvbi9tYWluLXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main-section/main-section.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-section/main-section.component.ts ***!
  \********************************************************/
/*! exports provided: MainSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSectionComponent", function() { return MainSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainSectionComponent = /** @class */ (function () {
    function MainSectionComponent() {
    }
    MainSectionComponent.prototype.ngOnInit = function () {
    };
    MainSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-section',
            template: __webpack_require__(/*! ./main-section.component.html */ "./src/app/main-section/main-section.component.html"),
            styles: [__webpack_require__(/*! ./main-section.component.scss */ "./src/app/main-section/main-section.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainSectionComponent);
    return MainSectionComponent;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MyMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMaterialModule", function() { return MyMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var MyMaterialModule = /** @class */ (function () {
    function MyMaterialModule() {
    }
    MyMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            ]
        })
    ], MyMaterialModule);
    return MyMaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fixed-header\">\r\n  <div fxHide.gt-xs>\r\n      <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n          <mat-icon>menu</mat-icon>\r\n      </button>\r\n  </div>\r\n  <div>\r\n      <a href=\"#page-top\">Top</a>\r\n  </div>\r\n  <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\r\n      <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\r\n          <li>\r\n              <a href=\"#skills\">Skills</a>\r\n          </li>\r\n          <li>\r\n              <a href=\"#projects\">Projects</a>\r\n          </li>\r\n          <li>\r\n              <a href=\"#others\">Others</a>\r\n          </li>\r\n          <li>\r\n              <a href=\"#\" (click)=\"changeTheme()\">Theme: <span class=\"capitalize\">{{currentTheme}} > </span></a>\r\n          </li>\r\n      </ul>\r\n  </div>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/navigation/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed-header {\n  top: 0;\n  position: fixed;\n  z-index: 999; }\n\na {\n  text-decoration: none;\n  color: white; }\n\na:hover, a:active {\n  color: lightgray; }\n\n.navigation-items {\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n\nmat-toolbar {\n  border-radius: 3px; }\n\n@media (max-width: 959px) {\n  mat-toolbar {\n    border-radius: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvRDpcXERldmVsb3BcXGRldnBvcnRmb2xpby9zcmNcXGFwcFxcbmF2aWdhdGlvblxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxNQUFLO0VBQ0wsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFO0lBQ0ksa0JBQWtCLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWQtaGVhZGVyIHtcclxuICB0b3A6MDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1pdGVtc3tcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbm1hdC10b29sYmFye1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTU5cHgpe1xyXG4gIG1hdC10b29sYmFye1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(renderer) {
        this.renderer = renderer;
        this.currentTheme = "nerd";
        this.themes = ["nerd", "playground"];
        this.changeTheme();
    }
    HeaderComponent.prototype.changeTheme = function () {
        var theme = this.currentTheme;
        this.renderer.removeClass(document.body, this.currentTheme);
        var index = (this.themes.indexOf(theme) + 1) % this.themes.length;
        this.currentTheme = this.themes[index];
        this.renderer.addClass(document.body, this.currentTheme);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, "nerd");
        this.renderer.removeClass(document.body, "classic");
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/navigation/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/portfolio.service.ts":
/*!**************************************!*\
  !*** ./src/app/portfolio.service.ts ***!
  \**************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _skills_skill_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skill.structure */ "./src/app/skills/skill.structure.ts");



var PortfolioService = /** @class */ (function () {
    function PortfolioService() {
        this.skills = {};
        this.others = [];
        this.personOthers = [];
        this.skillTypes = ["languages", "frameworks", "tools"];
        this.portfolio = {
            person: {
                name: "Alan Greenberg",
                foto: "assets/images/avatar/avatar-white.png",
                motto: "Unus pro omnibus, omnes pro uno",
                others: {
                    dob: "1972-02-30 in Santiago de Cuba",
                    "civil status": "single",
                    languages: "English, Spanish, Chinese"
                }
            },
            projects: [
                {
                    name: "One project that I was done",
                    description: "Lorem <b>ipsum</b> dolor <i>sit amet</i>, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    fromDate: "2017-02-01",
                    toDate: "2018-04-15",
                    languages: [{ name: "java", version: "1.8" }, "html", "sql"],
                    frameworks: ["spring", { name: "spring boot", version: "1" }],
                    tools: [
                        "eclipse",
                        "dbeaver",
                        "jira",
                        "bitbucket",
                        "git",
                        "jenkins",
                        "mvn",
                        "mysql"
                    ]
                },
                {
                    name: "Second project that I was done too",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    fromDate: "2018-03-01",
                    toDate: "2018-03-31",
                    languages: ["java", "html", "sql"],
                    frameworks: ["spring"],
                    tools: ["eclipse", "dbeaver", "svn", "jenkins", "ant", "oracle"]
                },
                {
                    name: "33333 project that I was done too",
                    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    fromDate: "2011-11-01",
                    toDate: "2017-01-31",
                    languages: [{ name: "java", version: "1.6" }, "groovy"],
                    frameworks: ["struts"],
                    tools: ["eclipse", "svn", "jenkins", "gradle", "oracle"]
                }
            ],
            others: {
                Hobby: "<ul><li>First hobby</li><li>Second hobby</li></ul>",
                Certificates: "<ul><li>First certificate</li><li>Second certificate</li></ul>"
            },
            copyright: "Greenberg 2018"
        };
        console.log("Load PortfolioService");
        for (var _i = 0, _a = this.skillTypes; _i < _a.length; _i++) {
            var skillType = _a[_i];
            var skillMap = this.computeSkills(skillType);
            var skillsArray = [];
            for (var skill in skillMap) {
                skillsArray.push(skillMap[skill]);
            }
            this.skills[skillType] = skillsArray;
        }
        for (var key in this.portfolio.others) {
            this.others.push({ key: key, value: this.portfolio.others[key] });
        }
        for (var key in this.portfolio.person.others) {
            this.personOthers.push({
                key: key,
                value: this.portfolio.person.others[key]
            });
        }
    }
    PortfolioService.prototype.getSkills = function (skillType) {
        return this.skills[skillType];
    };
    PortfolioService.prototype.computeSkills = function (skillType) {
        var skillMap = {};
        for (var _i = 0, _a = this.portfolio.projects; _i < _a.length; _i++) {
            var project = _a[_i];
            for (var _b = 0, _c = project[skillType]; _b < _c.length; _b++) {
                var skill = _c[_b];
                var name_1 = skill;
                if (skill.name) {
                    name_1 = skill.name;
                }
                if (!skillMap[name_1]) {
                    skillMap[name_1] = new _skills_skill_structure__WEBPACK_IMPORTED_MODULE_2__["Skill"](name_1, 0, 0);
                }
                skillMap[name_1].count++;
                skillMap[name_1].months += this.getProjectDurationInMonth(project);
                skillMap[name_1].lastJob = this.maxDate(skillMap[name_1].lastJob, project);
            }
        }
        return skillMap;
    };
    PortfolioService.prototype.getProjectDurationInMonth = function (project) {
        if (project.fromDate) {
            var fromDate = Date.parse(project.fromDate);
            var toDate = Date.now();
            if (project.toDate) {
                toDate = Date.parse(project.toDate);
            }
            var timeDiff = Math.abs(toDate - fromDate);
            return Math.ceil(timeDiff / (1000 * 3600 * 24 * 30));
        }
        else {
            return 0;
        }
    };
    PortfolioService.prototype.maxDate = function (lastDate, project) {
        var projectToDate = Date.now();
        if (!project.fromDate) {
            return lastDate;
        }
        else if (project.toDate) {
            projectToDate = Date.parse(project.toDate);
        }
        if (!lastDate || projectToDate > lastDate) {
            return projectToDate;
        }
        return lastDate;
    };
    PortfolioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand js-scroll-trigger\" href=\"#page-top\">Top</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" href=\"#skills\">Skills</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" href=\"#projects\">Projects</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" href=\"#others\">Others</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link js-scroll-trigger\" href=\"#\" (click)=\"changeTheme()\">Theme: <span class=\"capitalize\">{{currentTheme}}\r\n              > </span></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n-->\r\n\r\n<app-header></app-header>\r\n\r\n<header class=\"\" id=\"page-top\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-lg-5\">\r\n        <h1>{{portfolioService.portfolio.person.name}}</h1>\r\n        <h5>\r\n          <i>{{portfolioService.portfolio.person.motto}}</i>\r\n        </h5>\r\n        <div class=\"container\">\r\n          <div class=\"row\" *ngFor=\"let item of portfolioService.personOthers\">\r\n            <div class=\"col col-lg-4\">\r\n              <span [innerHtml]=\"item.key\"></span>\r\n            </div>\r\n            <div class=\"col\">\r\n              <span [innerHtml]=\"item.value\"></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n      </div>\r\n      <div class=\"col col-lg-4\">\r\n        <img src=\"{{portfolioService.portfolio.person.foto}}\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<section id=\"skills\" class=\"main-section\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n      <h1>Skills</h1>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section id=\"skils-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n      <skills></skills>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section id=\"projects\" class=\"main-section\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n      <h1>Projects</h1>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section *ngFor=\"let project of portfolioService.portfolio.projects; let even=even\" [ngClass]=\"{'bg-light':even}\">\r\n  <project [project]=\"project\"></project>\r\n</section>\r\n<section id=\"others\" class=\"main-section\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n      <h1>Others</h1>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section *ngFor=\"let item of portfolioService.others; let even=even\" [ngClass]=\"{'bg-light':even}\" id=\"item.key\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8 mx-auto\">\r\n        <h2>{{item.key}}</h2>\r\n        <p class=\"lead\" [innerHtml]=\"item.value\"></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- Footer -->\r\n<footer class=\"py-5 bg-dark\">\r\n  <div class=\"container\">\r\n    <p class=\"m-0 text-center text-white\">Copyright &copy; {{portfolioService.portfolio.copyright}}</p>\r\n  </div>\r\n  <!-- /.container -->\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolio.service */ "./src/app/portfolio.service.ts");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(portfolioService) {
        this.portfolioService = portfolioService;
    }
    PortfolioComponent.prototype.ngOnInit = function () { };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-portfolio",
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n      <h2>{{project.name}}</h2>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n    \t<h6>{{getDuration()}}</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n\t  <p class=\"lead\" [innerHTML]=\"project.description\"></p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n\t  Programming languages: <labels [values]=\"project.languages\"></labels>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n\t  Frameworks: <labels [values]=\"project.frameworks\"></labels>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8 mx-auto\">\r\n\t  Tools: <labels [values]=\"project.tools\"></labels>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_structure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.structure */ "./src/app/project/project.structure.ts");



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        console.log("Load ProjectComponent");
    }
    ProjectComponent.prototype.getDuration = function () {
        if (this.project.fromDate) {
            var fromDate = Date.parse(this.project.fromDate);
            var toDate = Date.now();
            if (this.project.toDate) {
                toDate = Date.parse(this.project.toDate);
            }
            var timeDiff = Math.abs(toDate - fromDate);
            var diffMonths = Math.ceil(timeDiff / (1000 * 3600 * 24 * 30));
            return (this.formatDate(fromDate) +
                " - " +
                (this.project.toDate ? this.formatDate(toDate) : "now") +
                " (" +
                diffMonths +
                " months)");
        }
        else {
            return "---";
        }
    };
    ProjectComponent.prototype.formatDate = function (timems) {
        var date = new Date(timems);
        return date.getFullYear() + "/" + (date.getMonth() + 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _project_structure__WEBPACK_IMPORTED_MODULE_2__["Project"])
    ], ProjectComponent.prototype, "project", void 0);
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "project",
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/project.structure.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.structure.ts ***!
  \**********************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/skills/skill.structure.ts":
/*!*******************************************!*\
  !*** ./src/app/skills/skill.structure.ts ***!
  \*******************************************/
/*! exports provided: Skill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skill", function() { return Skill; });
var Skill = /** @class */ (function () {
    function Skill(name, count, months, lastJob) {
        this.name = name;
        this.count = count;
        this.months = months;
        this.lastJob = lastJob;
    }
    return Skill;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let skillType of portfolioService.skillTypes\">\r\n    <h3 class=\"capitalize\" style=\"margin-top: 20px;\">{{skillType}}</h3>\r\n\r\n    <span *ngFor=\"let skill of portfolioService.getSkills(skillType)\">\r\n      <ng-template #popContent>\r\n        projects: {{skill.count}}<br/>\r\n        months: {{skill.months}}<br/>\r\n        last job: {{skill.lastJob | date}}<br/>\r\n      </ng-template>\r\n      <button type=\"button\" class=\"btn btn-primary dlabel\" [ngbPopover]=\"popContent\" popoverTitle=\"{{skill.name}}\">\r\n        {{skill.name}} <img src=\"{{getIconPath(skill.months)}}\" height=\"20\" width=\"20\" alt=\"months: {{skill.months}}\"/>\r\n      </button>\r\n    </span>\r\n  </div>"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolio.service */ "./src/app/portfolio.service.ts");



var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(portfolioService) {
        this.portfolioService = portfolioService;
        this.icons = [
            { "to": 6, "src": "assets/images/skills/junior.svg" },
            { "to": 30, "src": "assets/images/skills/minior.svg" },
            { "to": 9999, "src": "assets/images/skills/senior.svg" },
        ];
        console.log("Load SkillsComponent");
    }
    SkillsComponent.prototype.getIconPath = function (months) {
        for (var _i = 0, _a = this.icons; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.to > months) {
                return item.src;
            }
        }
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]])
    ], SkillsComponent);
    return SkillsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Develop\devportfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map