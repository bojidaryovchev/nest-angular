/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __webpack_require__(3);
var cwd = process.cwd();
exports.FOLDER_DIST = path_1.join(cwd, 'dist');
exports.FOLDER_DIST_BROWSER = path_1.join(exports.FOLDER_DIST, 'browser');
exports.FOLDER_DIST_SERVER = path_1.join(exports.FOLDER_DIST, 'server');


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(6);
var core_1 = __webpack_require__(1);
var core_2 = __webpack_require__(10);
var e = __webpack_require__(0);
var express_engine_1 = __webpack_require__(11);
var app_module_1 = __webpack_require__(12);
var config_1 = __webpack_require__(15);
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var express, app, env, config;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    express = e();
                    if (process.env.NODE_ENV === 'production') {
                        core_1.enableProdMode();
                        renderServerSide(express);
                    }
                    return [4, core_2.NestFactory.create(app_module_1.ApplicationModule, express)];
                case 1:
                    app = _a.sent();
                    env = process.env.NODE_ENV || 'development';
                    config = config_1.Config[env];
                    __webpack_require__(16)(config, app, express);
                    return [4, app.listen(config.port)];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
function renderServerSide(app) {
    var _a = __webpack_require__(21), AppServerModuleNgFactory = _a.AppServerModuleNgFactory, LAZY_MODULE_MAP = _a.LAZY_MODULE_MAP;
    var provideModuleMap = __webpack_require__(33).provideModuleMap;
    app.engine('html', express_engine_1.ngExpressEngine({
        bootstrap: AppServerModuleNgFactory,
        providers: [
            provideModuleMap(LAZY_MODULE_MAP)
        ]
    }));
}
bootstrap();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(9);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("zone.js/dist/zone-node");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("rxjs/Rx");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/express-engine");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(2);
var app_controller_1 = __webpack_require__(13);
var ApplicationModule = (function () {
    function ApplicationModule() {
    }
    ApplicationModule = __decorate([
        common_1.Module({
            imports: [],
            controllers: [app_controller_1.AppController],
            components: [],
        })
    ], ApplicationModule);
    return ApplicationModule;
}());
exports.ApplicationModule = ApplicationModule;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(2);
var e = __webpack_require__(0);
var path_1 = __webpack_require__(3);
var fs_1 = __webpack_require__(14);
var constants_1 = __webpack_require__(4);
var AppController = (function () {
    function AppController() {
    }
    AppController.prototype.all = function (res, req) {
        fs_1.createReadStream(path_1.join(constants_1.FOLDER_DIST_BROWSER, 'index.html')).pipe(res);
    };
    __decorate([
        common_1.Get('*'),
        __param(0, common_1.Response()), __param(1, common_1.Request()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AppController.prototype, "all", null);
    AppController = __decorate([
        common_1.Controller()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rootPath = process.cwd();
var Config = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/store',
        port: 1337,
        sessionSecret: 'secret'
    },
    production: {
        rootPath: rootPath,
        db: process.env.MONGODB_CONNECTION,
        port: +process.env.PORT,
        sessionSecret: process.env.SESSION_SECRET
    }
};
exports.Config = Config;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
Object.defineProperty(exports, "__esModule", { value: true });
var e = __webpack_require__(0);
var body_parser_1 = __webpack_require__(17);
var cookieParser = __webpack_require__(18);
var session = __webpack_require__(19);
var passport_1 = __webpack_require__(20);
var constants_1 = __webpack_require__(4);
module.exports = function (config, app, express) {
    express.disable('x-powered-by');
    app.use(cookieParser());
    app.use(body_parser_1.json());
    app.use(body_parser_1.urlencoded({ extended: true }));
    app.use(session({
        secret: config.sessionSecret,
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport_1.initialize());
    app.use(passport_1.session());
    app.set('view engine', 'html');
    app.set('views', __dirname);
    express.get('*.*', e.static(constants_1.FOLDER_DIST_BROWSER));
};

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

!function(n,l){for(var e in l)n[e]=l[e]}(exports,function(n){var l={};function e(t){if(l[t])return l[t].exports;var u=l[t]={i:t,l:!1,exports:{}};return n[t].call(u.exports,u,u.exports,e),u.l=!0,u.exports}return e.m=n,e.c=l,e.d=function(n,l,t){e.o(n,l)||Object.defineProperty(n,l,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(l,"a",l),l},e.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},e.p="",e(e.s=0)}({"+d1A":function(n,l,e){"use strict";var t=e("0TZS"),u=e("OQ0P"),i=e("A7Ap"),o=e("yv0u"),r=e("MHKG"),d=e("7K+x"),p=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function c(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,63,"nav",[["class","navbar navbar-default"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(2,0,null,null,60,"div",[["class","container-fluid"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(4,0,null,null,6,"div",[["class","navbar-header"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275eld(6,0,null,null,3,"a",[["class","navbar-brand"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.\u0275nov(n,7).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u.\u0275did(7,671744,null,0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,o.LocationStrategy],{routerLink:[0,"routerLink"]},null),u.\u0275pad(8,1),(n()(),u.\u0275ted(-1,null,["Recipe Book"])),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275ted(-1,null,["\n\n    "])),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(13,0,null,null,48,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275eld(15,0,null,null,22,"ul",[["class","nav navbar-nav"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(17,0,null,null,9,"li",[["routerLinkActive","active"]],null,null,null,null,null)),u.\u0275did(18,1720320,null,2,i.RouterLinkActive,[i.Router,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActiveOptions:[0,"routerLinkActiveOptions"],routerLinkActive:[1,"routerLinkActive"]},null),u.\u0275qud(603979776,1,{links:1}),u.\u0275qud(603979776,2,{linksWithHrefs:1}),u.\u0275pod(21,{exact:0}),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(23,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.\u0275nov(n,24).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u.\u0275did(24,671744,[[2,4]],0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,o.LocationStrategy],{routerLink:[0,"routerLink"]},null),u.\u0275pad(25,1),(n()(),u.\u0275ted(-1,null,["Recipes"])),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(28,0,null,null,8,"li",[["routerLinkActive","active"]],null,null,null,null,null)),u.\u0275did(29,1720320,null,2,i.RouterLinkActive,[i.Router,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u.\u0275qud(603979776,3,{links:1}),u.\u0275qud(603979776,4,{linksWithHrefs:1}),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(33,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.\u0275nov(n,34).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u.\u0275did(34,671744,[[4,4]],0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,o.LocationStrategy],{routerLink:[0,"routerLink"]},null),u.\u0275pad(35,1),(n()(),u.\u0275ted(-1,null,["Shopping List"])),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275eld(39,0,null,null,21,"ul",[["class","nav navbar-nav navbar-right"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(41,0,null,null,18,"li",[["appDropdown",""],["class","dropdown"]],[[2,"open",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.\u0275nov(n,42).handleClick()&&t),t},null,null)),u.\u0275did(42,16384,null,0,r.DropdownDirective,[],null,null),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(44,0,null,null,3,"a",[["class","dropdown-toggle"],["role","button"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n            Manage "])),(n()(),u.\u0275eld(46,0,null,null,0,"span",[["class","caret caret-clean"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(49,0,null,null,9,"ul",[["class","dropdown-menu"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n            "])),(n()(),u.\u0275eld(51,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),u.\u0275eld(52,0,null,null,1,"a",[],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["Save Data"])),(n()(),u.\u0275ted(-1,null,["\n            "])),(n()(),u.\u0275eld(55,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),u.\u0275eld(56,0,null,null,1,"a",[],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["Fetch Data"])),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n"]))],function(n,l){n(l,7,0,n(l,8,0,"recipes")),n(l,18,0,n(l,21,0,!0),"active"),n(l,24,0,n(l,25,0,"recipes")),n(l,29,0,"active"),n(l,34,0,n(l,35,0,"shopping-list"))},function(n,l){n(l,6,0,u.\u0275nov(l,7).target,u.\u0275nov(l,7).href),n(l,23,0,u.\u0275nov(l,24).target,u.\u0275nov(l,24).href),n(l,33,0,u.\u0275nov(l,34).target,u.\u0275nov(l,34).href),n(l,41,0,u.\u0275nov(l,42).isOpen)})}function s(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-header",[],null,null,null,c,p)),u.\u0275did(1,114688,null,0,d.HeaderComponent,[],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_HeaderComponent=p,l.View_HeaderComponent_0=c,l.View_HeaderComponent_Host_0=s,l.HeaderComponentNgFactory=u.\u0275ccf("app-header",d.HeaderComponent,s,{},{},[])},0:function(n,l,e){n.exports=e("cMD+")},"0TZS":function(n,l,e){"use strict";l.styles=[""]},"294F":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("A7Ap"),l.AuthGuardService=function(){function n(n){this.router=n}return n.prototype.canActivate=function(n,l){return!0},n.prototype.canActivateChild=function(n,l){return this.canActivate(n,l)},n}()},"5ju5":function(n,l,e){"use strict";var t=e("GpaR"),u=e("OQ0P"),i=e("zEsI"),o=e("nScG"),r=e("6uKa"),d=e("bUjw"),p=e("Kd51"),c=e("yv0u"),s=e("Pmr3"),a=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function m(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-ingredient",[],null,[[null,"ingredientRemoved"]],function(n,l,e){var t=!0;return"ingredientRemoved"===l&&(t=!1!==n.component.shoppingListService.removeIngredient(n.context.index)&&t),t},i.View_IngredientComponent_0,i.RenderType_IngredientComponent)),u.\u0275did(1,114688,null,0,o.IngredientComponent,[],{ingredient:[0,"ingredient"]},{ingredientRemoved:"ingredientRemoved"})],function(n,l){n(l,1,0,l.context.$implicit)},null)}function f(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(2,0,null,null,12,"div",[["class","col-xs-10"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(4,0,null,null,1,"app-shopping-list-edit",[],null,null,null,r.View_ShoppingListEditComponent_0,r.RenderType_ShoppingListEditComponent)),u.\u0275did(5,114688,null,0,d.ShoppingListEditComponent,[p.ShoppingListService],null,null),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(7,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(9,0,null,null,4,"ul",[["class","list-group"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275and(16777216,null,null,1,null,m)),u.\u0275did(12,802816,null,0,c.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n"]))],function(n,l){var e=l.component;n(l,5,0),n(l,12,0,e.ingredients)},null)}function v(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-shopping-list",[],null,null,null,f,a)),u.\u0275did(1,114688,null,0,s.ShoppingListComponent,[p.ShoppingListService],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_ShoppingListComponent=a,l.View_ShoppingListComponent_0=f,l.View_ShoppingListComponent_Host_0=v,l.ShoppingListComponentNgFactory=u.\u0275ccf("app-shopping-list",s.ShoppingListComponent,v,{},{},[])},"6uKa":function(n,l,e){"use strict";var t=e("R4j7"),u=e("OQ0P"),i=e("bUjw"),o=e("Kd51"),r=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function d(n){return u.\u0275vid(0,[u.\u0275qud(402653184,1,{name:0}),u.\u0275qud(402653184,2,{amount:0}),(n()(),u.\u0275eld(2,0,null,null,38,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(4,0,null,null,35,"div",[["class","col-xs-12"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(6,0,null,null,32,"form",[],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275eld(8,0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(10,0,null,null,6,"div",[["class","col-sm-5 form-group"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(12,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["Name"])),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(15,0,[[1,0],["name",1]],null,0,"input",[["class","form-control"],["id","name"],["type","text"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(18,0,null,null,6,"div",[["class","col-sm-2 form-group"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(20,0,null,null,1,"label",[["for","amount"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["Amount"])),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(23,0,[[2,0],["amount",1]],null,0,"input",[["class","form-control"],["id","amount"],["type","text"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275eld(27,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(29,0,null,null,7,"div",[["class","col-xs-12"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(31,0,null,null,1,"button",[["class","btn btn-success"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.createIngredient()&&t),t},null,null)),(n()(),u.\u0275ted(-1,null,["Create"])),(n()(),u.\u0275ted(-1,null,["\n          "])),(n()(),u.\u0275eld(34,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.clearFields()&&t),t},null,null)),(n()(),u.\u0275ted(-1,null,["Clear"])),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n"]))],null,null)}function p(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-shopping-list-edit",[],null,null,null,d,r)),u.\u0275did(1,114688,null,0,i.ShoppingListEditComponent,[o.ShoppingListService],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_ShoppingListEditComponent=r,l.View_ShoppingListEditComponent_0=d,l.View_ShoppingListEditComponent_Host_0=p,l.ShoppingListEditComponentNgFactory=u.\u0275ccf("app-shopping-list-edit",i.ShoppingListEditComponent,p,{},{},[])},"7K+x":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("OQ0P"),l.HeaderComponent=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()},"8wGh":function(n,l){n.exports=__webpack_require__(22)},A7Ap:function(n,l){n.exports=__webpack_require__(23)},ASwt:function(n,l){n.exports=__webpack_require__(24)},Af24:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.SharedModule=function(){}},"EPu/":function(n,l,e){"use strict";l.styles=[".btn-small[_ngcontent-%COMP%]{padding:2px 10px 2px 10px}"]},Ejxl:function(n,l,e){"use strict";l.styles=[""]},FJoC:function(n,l,e){"use strict";l.styles=[""]},G63x:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("ASwt"),l.AppServerModule=function(){}},GE1N:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("OQ0P"),l.RecipeItem=function(n,l,e,t){this.name=n,this.description=l,this.imagePath=e,this.ingredients=t},l.RecipeItemComponent=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()},GpaR:function(n,l,e){"use strict";l.styles=[""]},"Hq/i":function(n,l){n.exports=__webpack_require__(25)},Ir0Z:function(n,l){n.exports=__webpack_require__(26)},Kd51:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("OQ0P"),u=e("nScG");l.ShoppingListService=function(){function n(){this.ingredientCreated=new t.EventEmitter,this.ingredients=[new u.Ingredient("tomatoes",3),new u.Ingredient("cheese",1),new u.Ingredient("potatoes",2)]}return n.prototype.getIngredients=function(){var n=this;return new Promise(function(l,e){l(n.ingredients)})},n.prototype.addIngredient=function(n){this.ingredients.push(n)},n.prototype.removeIngredient=function(n){this.ingredients.splice(n,1)},n.prototype.addIngredients=function(n){var l;(l=this.ingredients).push.apply(l,n)},n}()},MHKG:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("OQ0P"),l.DropdownDirective=function(){function n(){this.isOpen=!1}return n.prototype.handleClick=function(n){this.isOpen=!this.isOpen},n}()},NESo:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("A7Ap"),e("wgcz"),e("alQX"),e("Pmr3"),e("jgdH"),l.AppRoutingModule=function(){}},OQ0P:function(n,l){n.exports=__webpack_require__(1)},OjF7:function(n,l,e){"use strict";l.styles=[""]},Pmr3:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("OQ0P"),e("Kd51"),l.ShoppingListComponent=function(){function n(n){this.shoppingListService=n}return n.prototype.ngOnInit=function(){var n=this;this.shoppingListService.getIngredients().then(function(l){n.ingredients=l})},n}()},R4j7:function(n,l,e){"use strict";l.styles=[""]},RZ0Z:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.ServicesModule=function(){}},YNEt:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("OQ0P"),l.RecipesListComponent=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()},alQX:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("OQ0P"),e("c/7X"),e("A7Ap"),l.RecipeDetailsComponent=function(){function n(n,l,e){this.recipesService=n,this.route=l,this.router=e}return n.prototype.ngOnInit=function(){var n=this;this.route.params.subscribe(function(l){n.id=+l.id,n.recipe=n.recipesService.getRecipe(n.id)})},n.prototype.onAddToShoppingList=function(){this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients)},n.prototype.onDeleteRecipe=function(){this.recipesService.removeRecipe(this.id),this.router.navigate(["../"],{relativeTo:this.route})},n}()},b8iw:function(n,l,e){"use strict";var t=e("dRQZ"),u=e("OQ0P"),i=e("A7Ap"),o=e("yv0u"),r=e("GE1N"),d=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function p(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,19,"a",[["class","list-group-item clearfix"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.\u0275nov(n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u.\u0275did(1,671744,[[2,4]],0,i.RouterLinkWithHref,[i.Router,i.ActivatedRoute,o.LocationStrategy],{routerLink:[0,"routerLink"]},null),u.\u0275did(2,1720320,null,2,i.RouterLinkActive,[i.Router,u.ElementRef,u.Renderer2,u.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),u.\u0275qud(603979776,1,{links:1}),u.\u0275qud(603979776,2,{linksWithHrefs:1}),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(6,0,null,null,7,"div",[["class","pull-left"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(8,0,null,null,1,"h4",[["class","list-group-item-heading"]],null,null,null,null,null)),(n()(),u.\u0275ted(9,null,["",""])),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(11,0,null,null,1,"p",[["class","list-group-item-text"]],null,null,null,null,null)),(n()(),u.\u0275ted(12,null,["",""])),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(15,0,null,null,3,"span",[["class","pull-right"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(17,0,null,null,0,"img",[["alt",""],["class","img-responsive"],["style","max-height: 50px;"]],[[8,"src",4]],null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275ted(-1,null,["\n"]))],function(n,l){n(l,1,0,l.component.recipeIndex),n(l,2,0,"active")},function(n,l){var e=l.component;n(l,0,0,u.\u0275nov(l,1).target,u.\u0275nov(l,1).href),n(l,9,0,e.recipe.name),n(l,12,0,e.recipe.description),n(l,17,0,e.recipe.imagePath)})}function c(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-recipe-item",[],null,null,null,p,d)),u.\u0275did(1,114688,null,0,r.RecipeItemComponent,[],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_RecipeItemComponent=d,l.View_RecipeItemComponent_0=p,l.View_RecipeItemComponent_Host_0=c,l.RecipeItemComponentNgFactory=u.\u0275ccf("app-recipe-item",r.RecipeItemComponent,c,{recipe:"recipe",recipeIndex:"recipeIndex"},{},[])},bUjw:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("OQ0P");var t=e("nScG");e("Kd51"),l.ShoppingListEditComponent=function(){function n(n){this.shoppingListService=n}return n.prototype.ngOnInit=function(){this.nameInput=this.name.nativeElement,this.amountInput=this.amount.nativeElement},n.prototype.createIngredient=function(){var n=new t.Ingredient(this.nameInput.value,+this.amountInput.value);this.shoppingListService.addIngredient(n),this.clearFields()},n.prototype.clearFields=function(){this.nameInput.value=null,this.amountInput.value=null},n}()},bXKH:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.CanDeactivateGuardService=function(){function n(){}return n.prototype.canDeactivate=function(n,l,e,t){return n.canDeactivate()},n}()},"c/7X":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("OQ0P"),u=e("GE1N"),i=e("nScG");e("Kd51"),l.RecipesService=function(){function n(n){this.shoppingListService=n,this.recipeSelected=new t.EventEmitter,this.recipes=[new u.RecipeItem("Ketchup","Homemade ketchup, old recipe!","https://cdn.pixabay.com/photo/2015/08/11/20/43/tomato-885168_960_720.jpg",[new i.Ingredient("tomatoes",10),new i.Ingredient("vinegar",1),new i.Ingredient("salt",1),new i.Ingredient("suggar",1)]),new u.RecipeItem("Pizza","Some delicious pizza yum!","https://cdn.pixabay.com/photo/2017/09/19/20/41/pizza-2766568_960_720.jpg",[])]}return n.prototype.getRecipe=function(n){return this.recipes[n]},n.prototype.getRecipes=function(){var n=this;return new Promise(function(l,e){l(n.recipes)})},n.prototype.addIngredientsToShoppingList=function(n){this.shoppingListService.addIngredients(n)},n.prototype.removeRecipe=function(n){this.recipes.splice(n,1)},n}()},"cMD+":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("uHIK");l.AppServerModuleNgFactory=t.AppServerModuleNgFactory;var u=e("G63x");l.AppServerModule=u.AppServerModule,l.LAZY_MODULE_MAP={}},cipL:function(n,l){n.exports=__webpack_require__(27)},dRQZ:function(n,l,e){"use strict";l.styles=[""]},f9NF:function(n,l){n.exports=__webpack_require__(28)},hNFS:function(n,l,e){"use strict";var t=e("vd7Q"),u=e("OQ0P"),i=e("+d1A"),o=e("7K+x"),r=e("A7Ap"),d=e("vGFf"),p=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function c(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-header",[],null,null,null,i.View_HeaderComponent_0,i.RenderType_HeaderComponent)),u.\u0275did(1,114688,null,0,o.HeaderComponent,[],null,null),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275eld(3,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(5,0,null,null,4,"div",[["class","col-md-12"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.\u0275did(8,212992,null,0,r.RouterOutlet,[r.ChildrenOutletContexts,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n"]))],function(n,l){n(l,1,0),n(l,8,0)},null)}function s(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-root",[],null,null,null,c,p)),u.\u0275did(1,49152,null,0,d.AppComponent,[],null,null)],null,null)}l.RenderType_AppComponent=p,l.View_AppComponent_0=c,l.View_AppComponent_Host_0=s,l.AppComponentNgFactory=u.\u0275ccf("app-root",d.AppComponent,s,{},{},[])},jgdH:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("OQ0P"),l.RecipeEditComponent=function(){function n(){}return n.prototype.ngOnInit=function(){},n}()},l0JX:function(n,l){n.exports=__webpack_require__(29)},nScG:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("OQ0P");l.Ingredient=function(n,l){this.name=n,this.amount=l},l.IngredientComponent=function(){function n(){this.ingredientRemoved=new t.EventEmitter}return n.prototype.ngOnInit=function(){},n.prototype.onRemoveIngredient=function(){this.ingredientRemoved.emit(this.ingredient)},n}()},"r7/q":function(n,l,e){"use strict";var t=e("Ejxl"),u=e("OQ0P"),i=e("zEsI"),o=e("nScG"),r=e("MHKG"),d=e("A7Ap"),p=e("yv0u"),c=e("alQX"),s=e("c/7X"),a=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function m(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-ingredient",[],null,null,null,i.View_IngredientComponent_0,i.RenderType_IngredientComponent)),u.\u0275did(1,114688,null,0,o.IngredientComponent,[],{ingredient:[0,"ingredient"]},null)],function(n,l){n(l,1,0,l.context.$implicit)},null)}function f(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(2,0,null,null,3,"div",[["class","col-xs-12"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(4,0,null,null,0,"img",[["alt",""],["class","img-responsive"]],[[8,"src",4]],null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275eld(8,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(10,0,null,null,4,"div",[["class","col-xs-12"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(12,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.\u0275ted(13,null,["",""])),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275eld(17,0,null,null,31,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(19,0,null,null,28,"div",[["class","col-xs-12"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(21,0,null,null,25,"div",[["appDropdown",""],["class","btn-group"]],[[2,"open",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.\u0275nov(n,22).handleClick()&&t),t},null,null)),u.\u0275did(22,16384,null,0,r.DropdownDirective,[],null,null),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275eld(24,0,null,null,3,"button",[["class","btn btn-primary dropdown-toggle"],["type","button"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        Manage Recipe "])),(n()(),u.\u0275eld(26,0,null,null,0,"span",[["class","caret caret-clean"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275eld(29,0,null,null,16,"div",[["class","dropdown-menu"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(31,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),u.\u0275eld(32,0,null,null,2,"a",[["routerLink","/shopping-list"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0,i=n.component;return"click"===l&&(t=!1!==u.\u0275nov(n,33).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),"click"===l&&(t=!1!==i.onAddToShoppingList()&&t),t},null,null)),u.\u0275did(33,671744,null,0,d.RouterLinkWithHref,[d.Router,d.ActivatedRoute,p.LocationStrategy],{routerLink:[0,"routerLink"]},null),(n()(),u.\u0275ted(-1,null,["To Shopping List"])),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(36,0,null,null,4,"li",[],null,null,null,null,null)),(n()(),u.\u0275eld(37,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.\u0275nov(n,38).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u.\u0275did(38,671744,null,0,d.RouterLinkWithHref,[d.Router,d.ActivatedRoute,p.LocationStrategy],{routerLink:[0,"routerLink"]},null),u.\u0275pad(39,1),(n()(),u.\u0275ted(-1,null,["Edit Recipe"])),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(42,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),u.\u0275eld(43,0,null,null,1,"a",[["style","cursor: pointer;"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onDeleteRecipe()&&t),t},null,null)),(n()(),u.\u0275ted(-1,null,["Delete Recipe"])),(n()(),u.\u0275ted(-1,null,["\n      "])),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275eld(50,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(52,0,null,null,1,"div",[["class","col-xs-12"]],null,null,null,null,null)),(n()(),u.\u0275ted(53,null,["\n    ","\n  "])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275eld(56,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(58,0,null,null,4,"div",[["class","col-xs-6"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275and(16777216,null,null,1,null,m)),u.\u0275did(61,802816,null,0,p.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n"]))],function(n,l){var e=l.component;n(l,33,0,"/shopping-list"),n(l,38,0,n(l,39,0,"edit")),n(l,61,0,e.recipe.ingredients)},function(n,l){var e=l.component;n(l,4,0,e.recipe.imagePath),n(l,13,0,e.recipe.name),n(l,21,0,u.\u0275nov(l,22).isOpen),n(l,32,0,u.\u0275nov(l,33).target,u.\u0275nov(l,33).href),n(l,37,0,u.\u0275nov(l,38).target,u.\u0275nov(l,38).href),n(l,53,0,e.recipe.description)})}function v(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-recipe-details",[],null,null,null,f,a)),u.\u0275did(1,114688,null,0,c.RecipeDetailsComponent,[s.RecipesService,d.ActivatedRoute,d.Router],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_RecipeDetailsComponent=a,l.View_RecipeDetailsComponent_0=f,l.View_RecipeDetailsComponent_Host_0=v,l.RecipeDetailsComponentNgFactory=u.\u0275ccf("app-recipe-details",c.RecipeDetailsComponent,v,{},{},[])},rGE3:function(n,l){n.exports=__webpack_require__(30)},ramy:function(n,l,e){"use strict";var t=e("OjF7"),u=e("OQ0P"),i=e("jgdH"),o=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function r(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  recipe-edit works!\n"])),(n()(),u.\u0275ted(-1,null,["\n"]))],null,null)}function d(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-recipe-edit",[],null,null,null,r,o)),u.\u0275did(1,114688,null,0,i.RecipeEditComponent,[],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_RecipeEditComponent=o,l.View_RecipeEditComponent_0=r,l.View_RecipeEditComponent_Host_0=d,l.RecipeEditComponentNgFactory=u.\u0275ccf("app-recipe-edit",i.RecipeEditComponent,d,{},{},[])},sCNy:function(n,l,e){"use strict";var t=e("FJoC"),u=e("OQ0P"),i=e("tGGY"),o=e("YNEt"),r=e("A7Ap"),d=e("c/7X"),p=e("Kd51"),c=e("wgcz"),s=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function a(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(2,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(4,0,null,null,1,"app-recipes-list",[],null,null,null,i.View_RecipesListComponent_0,i.RenderType_RecipesListComponent)),u.\u0275did(5,114688,null,0,o.RecipesListComponent,[],{recipes:[0,"recipes"]},null),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275eld(8,0,null,null,4,"div",[["class","col-md-6"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(10,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.\u0275did(11,212992,null,0,r.RouterOutlet,[r.ChildrenOutletContexts,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null),(n()(),u.\u0275ted(-1,null,["\n  "])),(n()(),u.\u0275ted(-1,null,["\n"]))],function(n,l){n(l,5,0,l.component.recipes),n(l,11,0)},null)}function m(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,2,"app-recipes",[],null,null,null,a,s)),u.\u0275prd(512,null,d.RecipesService,d.RecipesService,[p.ShoppingListService]),u.\u0275did(2,114688,null,0,c.RecipesComponent,[d.RecipesService],null,null)],function(n,l){n(l,2,0)},null)}l.RenderType_RecipesComponent=s,l.View_RecipesComponent_0=a,l.View_RecipesComponent_Host_0=m,l.RecipesComponentNgFactory=u.\u0275ccf("app-recipes",c.RecipesComponent,m,{},{},[])},sDoJ:function(n,l,e){"use strict";l.styles=[""]},tGGY:function(n,l,e){"use strict";var t=e("sDoJ"),u=e("OQ0P"),i=e("b8iw"),o=e("GE1N"),r=e("A7Ap"),d=e("yv0u"),p=e("YNEt"),c=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function s(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-recipe-item",[],null,null,null,i.View_RecipeItemComponent_0,i.RenderType_RecipeItemComponent)),u.\u0275did(1,114688,null,0,o.RecipeItemComponent,[],{recipe:[0,"recipe"],recipeIndex:[1,"recipeIndex"]},null)],function(n,l){n(l,1,0,l.context.$implicit,l.context.index)},null)}function a(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(2,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275eld(4,0,null,null,3,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==u.\u0275nov(n,5).onClick()&&t),t},null,null)),u.\u0275did(5,16384,null,0,r.RouterLink,[r.Router,r.ActivatedRoute,[8,null],u.Renderer2,u.ElementRef],{routerLink:[0,"routerLink"]},null),u.\u0275pad(6,1),(n()(),u.\u0275ted(-1,null,["New Recipe"])),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275eld(11,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275eld(13,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275eld(15,0,null,null,4,"div",[["class","col-xs-12"]],null,null,null,null,null)),(n()(),u.\u0275ted(-1,null,["\n        "])),(n()(),u.\u0275and(16777216,null,null,1,null,s)),u.\u0275did(18,802816,null,0,d.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),u.\u0275ted(-1,null,["\n    "])),(n()(),u.\u0275ted(-1,null,["\n"])),(n()(),u.\u0275ted(-1,null,["\n"]))],function(n,l){var e=l.component;n(l,5,0,n(l,6,0,"new")),n(l,18,0,e.recipes)},null)}function m(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-recipes-list",[],null,null,null,a,c)),u.\u0275did(1,114688,null,0,p.RecipesListComponent,[],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_RecipesListComponent=c,l.View_RecipesListComponent_0=a,l.View_RecipesListComponent_Host_0=m,l.RecipesListComponentNgFactory=u.\u0275ccf("app-recipes-list",p.RecipesListComponent,m,{recipes:"recipes"},{},[])},tNcG:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.GuardsModule=function(){}},uHIK:function(n,l,e){"use strict";var t=e("OQ0P"),u=e("G63x"),i=e("vGFf"),o=e("sCNy"),r=e("ramy"),d=e("r7/q"),p=e("5ju5"),c=e("hNFS"),s=e("A7Ap"),a=e("yv0u"),m=e("wp5R"),f=e("ASwt"),v=e("8wGh"),g=e("Hq/i"),R=e("Kd51"),h=e("c/7X"),y=e("294F"),C=e("bXKH"),S=e("f9NF"),_=e("Ir0Z"),A=e("l0JX"),I=e("rGE3"),O=e("wgcz"),L=e("jgdH"),M=e("alQX"),E=e("Pmr3"),w=e("NESo"),N=e("RZ0Z"),P=e("Af24"),k=e("tNcG"),T=e("vKU8"),b=e("cipL");l.AppServerModuleNgFactory=t.\u0275cmf(u.AppServerModule,[i.AppComponent],function(n){return t.\u0275mod([t.\u0275mpd(512,t.ComponentFactoryResolver,t.\u0275CodegenComponentFactoryResolver,[[8,[o.RecipesComponentNgFactory,r.RecipeEditComponentNgFactory,d.RecipeDetailsComponentNgFactory,p.ShoppingListComponentNgFactory,c.AppComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.\u0275mpd(5120,s.ActivatedRoute,s.\u0275f,[s.Router]),t.\u0275mpd(4608,s.PreloadAllModules,s.PreloadAllModules,[]),t.\u0275mpd(6144,s.PreloadingStrategy,null,[s.PreloadAllModules]),t.\u0275mpd(135680,s.RouterPreloader,s.RouterPreloader,[s.Router,t.NgModuleFactoryLoader,t.Compiler,t.Injector,s.PreloadingStrategy]),t.\u0275mpd(4608,s.NoPreloading,s.NoPreloading,[]),t.\u0275mpd(5120,s.ROUTER_INITIALIZER,s.\u0275i,[s.\u0275g]),t.\u0275mpd(5120,t.APP_BOOTSTRAP_LISTENER,function(n){return[n]},[s.ROUTER_INITIALIZER]),t.\u0275mpd(5120,t.LOCALE_ID,t.\u0275q,[[3,t.LOCALE_ID]]),t.\u0275mpd(4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a.\u0275a]]),t.\u0275mpd(5120,t.IterableDiffers,t.\u0275n,[]),t.\u0275mpd(5120,t.KeyValueDiffers,t.\u0275o,[]),t.\u0275mpd(4608,m.DomSanitizer,m.\u0275e,[a.DOCUMENT]),t.\u0275mpd(6144,t.Sanitizer,null,[m.DomSanitizer]),t.\u0275mpd(4608,m.HAMMER_GESTURE_CONFIG,m.HammerGestureConfig,[]),t.\u0275mpd(5120,m.EVENT_MANAGER_PLUGINS,function(n,l,e,t,u){return[new m.\u0275DomEventsPlugin(n,l),new m.\u0275KeyEventsPlugin(e),new m.\u0275HammerGesturesPlugin(t,u)]},[a.DOCUMENT,t.NgZone,a.DOCUMENT,a.DOCUMENT,m.HAMMER_GESTURE_CONFIG]),t.\u0275mpd(4608,m.EventManager,m.EventManager,[m.EVENT_MANAGER_PLUGINS,t.NgZone]),t.\u0275mpd(135680,m.\u0275DomSharedStylesHost,m.\u0275DomSharedStylesHost,[a.DOCUMENT]),t.\u0275mpd(4608,m.\u0275DomRendererFactory2,m.\u0275DomRendererFactory2,[m.EventManager,m.\u0275DomSharedStylesHost]),t.\u0275mpd(4608,f.\u0275c,f.\u0275c,[m.DOCUMENT,[2,m.\u0275TRANSITION_ID]]),t.\u0275mpd(6144,m.\u0275SharedStylesHost,null,[f.\u0275c]),t.\u0275mpd(4608,f.\u0275ServerRendererFactory2,f.\u0275ServerRendererFactory2,[t.NgZone,m.DOCUMENT,m.\u0275SharedStylesHost]),t.\u0275mpd(4608,v.AnimationDriver,v.\u0275NoopAnimationDriver,[]),t.\u0275mpd(5120,v.\u0275AnimationStyleNormalizer,g.\u0275d,[]),t.\u0275mpd(4608,v.\u0275AnimationEngine,g.\u0275b,[v.AnimationDriver,v.\u0275AnimationStyleNormalizer]),t.\u0275mpd(5120,t.RendererFactory2,f.\u0275a,[f.\u0275ServerRendererFactory2,v.\u0275AnimationEngine,t.NgZone]),t.\u0275mpd(4352,t.Testability,null,[]),t.\u0275mpd(4608,m.Meta,m.Meta,[a.DOCUMENT]),t.\u0275mpd(4608,m.Title,m.Title,[a.DOCUMENT]),t.\u0275mpd(4608,m.TransferState,m.TransferState,[]),t.\u0275mpd(4608,R.ShoppingListService,R.ShoppingListService,[]),t.\u0275mpd(4608,h.RecipesService,h.RecipesService,[R.ShoppingListService]),t.\u0275mpd(4608,y.AuthGuardService,y.AuthGuardService,[s.Router]),t.\u0275mpd(4608,C.CanDeactivateGuardService,C.CanDeactivateGuardService,[]),t.\u0275mpd(4608,S.BrowserXhr,f.\u0275d,[]),t.\u0275mpd(4608,S.ResponseOptions,S.BaseResponseOptions,[]),t.\u0275mpd(4608,S.XSRFStrategy,f.\u0275e,[]),t.\u0275mpd(4608,S.XHRBackend,S.XHRBackend,[S.BrowserXhr,S.ResponseOptions,S.XSRFStrategy]),t.\u0275mpd(4608,S.RequestOptions,S.BaseRequestOptions,[]),t.\u0275mpd(5120,S.Http,f.\u0275f,[S.XHRBackend,S.RequestOptions]),t.\u0275mpd(4608,_.HttpXsrfTokenExtractor,_.\u0275g,[a.DOCUMENT,t.PLATFORM_ID,_.\u0275e]),t.\u0275mpd(4608,_.\u0275h,_.\u0275h,[_.HttpXsrfTokenExtractor,_.\u0275f]),t.\u0275mpd(5120,_.HTTP_INTERCEPTORS,function(n){return[n]},[_.\u0275h]),t.\u0275mpd(4608,_.XhrFactory,f.\u0275d,[]),t.\u0275mpd(4608,_.HttpXhrBackend,_.HttpXhrBackend,[_.XhrFactory]),t.\u0275mpd(6144,_.HttpBackend,null,[_.HttpXhrBackend]),t.\u0275mpd(5120,_.HttpHandler,f.\u0275g,[_.HttpBackend,[2,_.HTTP_INTERCEPTORS]]),t.\u0275mpd(4608,_.HttpClient,_.HttpClient,[_.HttpHandler]),t.\u0275mpd(4608,_.\u0275d,_.\u0275d,[]),t.\u0275mpd(4608,A.AnimationBuilder,g.\u0275BrowserAnimationBuilder,[t.RendererFactory2,m.DOCUMENT]),t.\u0275mpd(5120,f.BEFORE_APP_SERIALIZED,function(n,l,e){return[f.\u0275b(n,l,e)]},[m.DOCUMENT,t.APP_ID,m.TransferState]),t.\u0275mpd(1024,s.\u0275a,s.\u0275d,[[3,s.Router]]),t.\u0275mpd(1024,t.ErrorHandler,m.\u0275a,[]),t.\u0275mpd(512,s.\u0275g,s.\u0275g,[t.Injector]),t.\u0275mpd(1024,t.NgProbeToken,function(){return[s.\u0275b()]},[]),t.\u0275mpd(256,t.APP_ID,"nest-angular",[]),t.\u0275mpd(2048,m.\u0275TRANSITION_ID,null,[t.APP_ID]),t.\u0275mpd(1024,t.APP_INITIALIZER,function(n,l,e,t,u){return[s.\u0275h(n),m.\u0275h(l),m.\u0275f(e,t,u)]},[s.\u0275g,[2,t.NgProbeToken],m.\u0275TRANSITION_ID,a.DOCUMENT,t.Injector]),t.\u0275mpd(512,t.ApplicationInitStatus,t.ApplicationInitStatus,[[2,t.APP_INITIALIZER]]),t.\u0275mpd(131584,t.ApplicationRef,t.ApplicationRef,[t.NgZone,t.\u0275Console,t.Injector,t.ErrorHandler,t.ComponentFactoryResolver,t.ApplicationInitStatus]),t.\u0275mpd(512,s.UrlSerializer,s.DefaultUrlSerializer,[]),t.\u0275mpd(512,s.ChildrenOutletContexts,s.ChildrenOutletContexts,[]),t.\u0275mpd(256,s.ROUTER_CONFIGURATION,{useHash:!1,preloadingStrategy:s.PreloadAllModules},[]),t.\u0275mpd(1024,a.LocationStrategy,s.\u0275c,[a.PlatformLocation,[2,a.APP_BASE_HREF],s.ROUTER_CONFIGURATION]),t.\u0275mpd(512,a.Location,a.Location,[a.LocationStrategy]),t.\u0275mpd(512,t.Compiler,t.Compiler,[]),t.\u0275mpd(512,t.NgModuleFactoryLoader,I.ModuleMapNgFactoryLoader,[t.Compiler,I.MODULE_MAP]),t.\u0275mpd(1024,s.ROUTES,function(){return[[{path:"",pathMatch:"full",redirectTo:"recipes"},{path:"recipes",component:O.RecipesComponent,children:[{path:"new",component:L.RecipeEditComponent},{path:":id",component:M.RecipeDetailsComponent},{path:":id/edit",component:L.RecipeEditComponent}]},{path:"shopping-list",component:E.ShoppingListComponent},{path:"**",redirectTo:"recipes"}]]},[]),t.\u0275mpd(1024,s.Router,s.\u0275e,[t.ApplicationRef,s.UrlSerializer,s.ChildrenOutletContexts,a.Location,t.Injector,t.NgModuleFactoryLoader,t.Compiler,s.ROUTES,s.ROUTER_CONFIGURATION,[2,s.UrlHandlingStrategy],[2,s.RouteReuseStrategy]]),t.\u0275mpd(512,s.RouterModule,s.RouterModule,[[2,s.\u0275a],[2,s.Router]]),t.\u0275mpd(512,w.AppRoutingModule,w.AppRoutingModule,[]),t.\u0275mpd(512,a.CommonModule,a.CommonModule,[]),t.\u0275mpd(512,t.ApplicationModule,t.ApplicationModule,[t.ApplicationRef]),t.\u0275mpd(512,m.BrowserModule,m.BrowserModule,[[3,m.BrowserModule]]),t.\u0275mpd(512,m.BrowserTransferStateModule,m.BrowserTransferStateModule,[]),t.\u0275mpd(512,N.ServicesModule,N.ServicesModule,[]),t.\u0275mpd(512,P.SharedModule,P.SharedModule,[]),t.\u0275mpd(512,k.GuardsModule,k.GuardsModule,[]),t.\u0275mpd(512,T.AppModule,T.AppModule,[]),t.\u0275mpd(512,S.HttpModule,S.HttpModule,[]),t.\u0275mpd(512,_.HttpClientXsrfModule,_.HttpClientXsrfModule,[]),t.\u0275mpd(512,_.HttpClientModule,_.HttpClientModule,[]),t.\u0275mpd(512,g.NoopAnimationsModule,g.NoopAnimationsModule,[]),t.\u0275mpd(512,f.ServerModule,f.ServerModule,[]),t.\u0275mpd(512,f.ServerTransferStateModule,f.ServerTransferStateModule,[]),t.\u0275mpd(512,b.ModuleMapLoaderModule,b.ModuleMapLoaderModule,[]),t.\u0275mpd(512,u.AppServerModule,u.AppServerModule,[]),t.\u0275mpd(256,_.\u0275e,"XSRF-TOKEN",[]),t.\u0275mpd(256,_.\u0275f,"X-XSRF-TOKEN",[])])})},vGFf:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.AppComponent=function(){this.title="app"}},vKU8:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("wp5R"),l.AppModule=function(){}},vd7Q:function(n,l,e){"use strict";l.styles=[""]},wgcz:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),e("OQ0P"),e("c/7X"),l.RecipesComponent=function(){function n(n){this.recipesService=n}return n.prototype.ngOnInit=function(){var n=this;this.recipesService.getRecipes().then(function(l){return n.recipes=l})},n}()},wp5R:function(n,l){n.exports=__webpack_require__(31)},yv0u:function(n,l){n.exports=__webpack_require__(32)},zEsI:function(n,l,e){"use strict";var t=e("EPu/"),u=e("OQ0P"),i=e("nScG"),o=u.\u0275crt({encapsulation:0,styles:[t.styles],data:{}});function r(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,4,"a",[["class","list-group-item"],["cursor","pointer"]],null,null,null,null,null)),(n()(),u.\u0275ted(1,null,["\n  "," (",")\n  "])),(n()(),u.\u0275eld(2,0,null,null,1,"button",[["class","btn btn-danger pull-right btn-small"],["type","button"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onRemoveIngredient()&&t),t},null,null)),(n()(),u.\u0275ted(-1,null,["Remove"])),(n()(),u.\u0275ted(-1,null,["\n"]))],null,function(n,l){var e=l.component;n(l,1,0,e.ingredient.name,e.ingredient.amount)})}function d(n){return u.\u0275vid(0,[(n()(),u.\u0275eld(0,0,null,null,1,"app-ingredient",[],null,null,null,r,o)),u.\u0275did(1,114688,null,0,i.IngredientComponent,[],null,null)],function(n,l){n(l,1,0)},null)}l.RenderType_IngredientComponent=o,l.View_IngredientComponent_0=r,l.View_IngredientComponent_Host_0=d,l.IngredientComponentNgFactory=u.\u0275ccf("app-ingredient",i.IngredientComponent,d,{ingredient:"ingredient"},{ingredientRemoved:"ingredientRemoved"},[])}}));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader/src/module-map-loader.module");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader/src/module-map-ngfactory-loader");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/module-map-ngfactory-loader");

/***/ })
/******/ ]);