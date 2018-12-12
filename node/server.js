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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/config/code.js":
/*!*******************************!*\
  !*** ./server/config/code.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Code = {\n  SUCCESS: 200,\n  INVALID_REQUEST: 10000,\n  INVALID_AUTH: 10001,\n  INVALID_TOKEN: 10002,\n  INVALID_GRANT: 10003\n};\nmodule.exports = Code;\n\n//# sourceURL=webpack:///./server/config/code.js?");

/***/ }),

/***/ "./server/config/index.js":
/*!********************************!*\
  !*** ./server/config/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Code = __webpack_require__(/*! ./code */ \"./server/config/code.js\");\n\nvar dataBase = {\n  DATABASE: 'moyun_official',\n  USERNAME: 'root',\n  PASSWORD: '949223',\n  PORT: '3306',\n  HOST: 'localhost'\n};\nmodule.exports = {\n  dataBase: dataBase,\n  Code: Code\n};\n\n//# sourceURL=webpack:///./server/config/index.js?");

/***/ }),

/***/ "./server/controller/user.js":
/*!***********************************!*\
  !*** ./server/controller/user.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nvar _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\"));\n\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\"));\n\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\"));\n\nvar moment = __webpack_require__(/*! moment */ \"moment\");\n\nvar UserModel = __webpack_require__(/*! ../model/user */ \"./server/model/user.js\");\n\nvar _require = __webpack_require__(/*! ../config */ \"./server/config/index.js\"),\n    Code = _require.Code;\n\nvar UserController =\n/*#__PURE__*/\nfunction () {\n  function UserController() {\n    (0, _classCallCheck2.default)(this, UserController);\n  }\n\n  (0, _createClass2.default)(UserController, null, [{\n    key: \"login\",\n    value: function () {\n      var _login = (0, _asyncToGenerator2.default)(\n      /*#__PURE__*/\n      _regenerator.default.mark(function _callee(data) {\n        var userInfo;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return UserModel.findOne({\n                  where: {\n                    account: data.account\n                  }\n                });\n\n              case 2:\n                userInfo = _context.sent;\n\n                if (userInfo) {\n                  _context.next = 5;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", {\n                  status: Code.INVALID_AUTH,\n                  msg: '该用户不存在!'\n                });\n\n              case 5:\n                if (!(data.password === userInfo.password)) {\n                  _context.next = 7;\n                  break;\n                }\n\n                return _context.abrupt(\"return\", {\n                  status: Code.SUCCESS,\n                  userInfo: userInfo,\n                  msg: '登陆成功'\n                });\n\n              case 7:\n                return _context.abrupt(\"return\", {\n                  status: Code.INVALID_GRANT,\n                  msg: '用户名或密码错误!'\n                });\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      return function login(_x) {\n        return _login.apply(this, arguments);\n      };\n    }()\n  }, {\n    key: \"register\",\n    value: function () {\n      var _register = (0, _asyncToGenerator2.default)(\n      /*#__PURE__*/\n      _regenerator.default.mark(function _callee2(info) {\n        var isAccount, isUserName;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return UserModel.findOne({\n                  where: {\n                    account: info.account\n                  }\n                });\n\n              case 2:\n                isAccount = _context2.sent;\n\n                if (!isAccount) {\n                  _context2.next = 5;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", {\n                  status: Code.INVALID_GRANT,\n                  msg: '账号已存在'\n                });\n\n              case 5:\n                _context2.next = 7;\n                return UserModel.findOne({\n                  where: {\n                    userName: info.username\n                  }\n                });\n\n              case 7:\n                isUserName = _context2.sent;\n\n                if (!isUserName) {\n                  _context2.next = 10;\n                  break;\n                }\n\n                return _context2.abrupt(\"return\", {\n                  status: Code.INVALID_GRANT,\n                  msg: '用户名重复!'\n                });\n\n              case 10:\n                _context2.prev = 10;\n                _context2.next = 13;\n                return UserModel.create((0, _objectSpread2.default)({}, info, {\n                  moment: moment().format('YY-MM-DD HH:mm:ss')\n                }));\n\n              case 13:\n                return _context2.abrupt(\"return\", {\n                  status: Code.SUCCESS,\n                  msg: '注册成功!'\n                });\n\n              case 16:\n                _context2.prev = 16;\n                _context2.t0 = _context2[\"catch\"](10);\n                return _context2.abrupt(\"return\", {\n                  status: Code.INVALID_GRANT,\n                  msg: _context2.t0\n                });\n\n              case 19:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this, [[10, 16]]);\n      }));\n\n      return function register(_x2) {\n        return _register.apply(this, arguments);\n      };\n    }()\n  }]);\n  return UserController;\n}();\n\nmodule.exports = UserController;\n\n//# sourceURL=webpack:///./server/controller/user.js?");

/***/ }),

/***/ "./server/db/index.js":
/*!****************************!*\
  !*** ./server/db/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar _require = __webpack_require__(/*! ../config/index */ \"./server/config/index.js\"),\n    dataBase = _require.dataBase;\n\nvar db = new Sequelize(dataBase.DATABASE, dataBase.USERNAME, dataBase.PASSWORD, {\n  host: dataBase.HOST,\n  port: dataBase.PORT,\n  dialect: 'mysql' // 连接器\n\n});\nmodule.exports = db;\n\n//# sourceURL=webpack:///./server/db/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\"));\n\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\"));\n\nvar Koa = __webpack_require__(/*! koa */ \"koa\");\n\nvar logger = __webpack_require__(/*! koa-logger */ \"koa-logger\");\n\nvar koaStatic = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar bodyparser = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n\nvar users = __webpack_require__(/*! ./router/user */ \"./server/router/user.js\");\n\nvar app = new Koa();\napp.use(\n/*#__PURE__*/\nfunction () {\n  var _ref = (0, _asyncToGenerator2.default)(\n  /*#__PURE__*/\n  _regenerator.default.mark(function _callee(ctx, next) {\n    var startTime, ms;\n    return _regenerator.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            startTime = +new Date();\n            _context.next = 3;\n            return next();\n\n          case 3:\n            ms = +new Date() - startTime;\n            console.log(\"\".concat(ctx.method, \": \").concat(ctx.url, \" - \").concat(ms, \":ms\"));\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\napp.use(bodyparser());\napp.use(logger());\napp.use(koaStatic(path.resolve(process.cwd(), 'server/public')));\napp.use(users.routes());\nmodule.exports = app;\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/model/user.js":
/*!******************************!*\
  !*** ./server/model/user.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\"));\n\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar db = __webpack_require__(/*! ../db */ \"./server/db/index.js\");\n\nvar User =\n/*#__PURE__*/\nfunction (_Sequelize$Model) {\n  (0, _inherits2.default)(User, _Sequelize$Model);\n\n  function User() {\n    (0, _classCallCheck2.default)(this, User);\n    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(User).apply(this, arguments));\n  }\n\n  (0, _createClass2.default)(User, null, [{\n    key: \"init\",\n    value: function init(sequelize) {\n      return sequelize.define('users', {\n        id: {\n          type: Sequelize.INTEGER,\n          primaryKey: true,\n          autoIncrement: true\n        },\n        username: {\n          type: Sequelize.CHAR(64),\n          allowNull: false\n        },\n        account: {\n          type: Sequelize.CHAR(32),\n          allowNull: false\n        },\n        password: {\n          type: Sequelize.CHAR(32),\n          allowNull: false\n        },\n        avatar: {\n          type: Sequelize.CHAR(255)\n        },\n        email: {\n          type: Sequelize.CHAR(255),\n          allowNull: false,\n          validate: {\n            isEmail: true\n          }\n        },\n        moment: {\n          type: Sequelize.CHAR(255),\n          defaultValue: Sequelize.NOW\n        }\n      }, {\n        timestamps: false,\n        freezeTableName: true,\n        tableName: 'user_info'\n      });\n    }\n  }]);\n  return User;\n}(Sequelize.Model);\n\nvar UserModel = User.init(db);\nUserModel.sync({\n  force: false\n});\nmodule.exports = UserModel;\n\n//# sourceURL=webpack:///./server/model/user.js?");

/***/ }),

/***/ "./server/router/user.js":
/*!*******************************!*\
  !*** ./server/router/user.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"@babel/runtime/helpers/interopRequireDefault\");\n\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\"));\n\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\"));\n\nvar router = __webpack_require__(/*! koa-router */ \"koa-router\")({\n  prefix: '/api/v1'\n});\n\nvar _require = __webpack_require__(/*! ../config */ \"./server/config/index.js\"),\n    Code = _require.Code;\n\nvar UserController = __webpack_require__(/*! ../controller/user */ \"./server/controller/user.js\");\n\nrouter.post('/register',\n/*#__PURE__*/\nfunction () {\n  var _ref = (0, _asyncToGenerator2.default)(\n  /*#__PURE__*/\n  _regenerator.default.mark(function _callee(ctx) {\n    var requestBody, regInfo, response;\n    return _regenerator.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            requestBody = ctx.request.body;\n            regInfo = {\n              username: requestBody.username,\n              account: requestBody.account,\n              password: requestBody.password,\n              email: requestBody.email\n            };\n\n            if (!(!regInfo.username || !regInfo.account || !regInfo.password || !regInfo.email)) {\n              _context.next = 6;\n              break;\n            }\n\n            ctx.body = {\n              status: Code.INVALID_REQUEST,\n              msg: '请完善注册信息!'\n            };\n            _context.next = 10;\n            break;\n\n          case 6:\n            _context.next = 8;\n            return UserController.register(regInfo);\n\n          case 8:\n            response = _context.sent;\n            ctx.body = response;\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\nrouter.post('/login',\n/*#__PURE__*/\nfunction () {\n  var _ref2 = (0, _asyncToGenerator2.default)(\n  /*#__PURE__*/\n  _regenerator.default.mark(function _callee2(ctx) {\n    var response;\n    return _regenerator.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return UserController.login(ctx.request.body);\n\n          case 2:\n            response = _context2.sent;\n            ctx.body = response;\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this);\n  }));\n\n  return function (_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./server/router/user.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/interopRequireDefault\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/interopRequireDefault%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectSpread\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectSpread%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-logger":
/*!*****************************!*\
  !*** external "koa-logger" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-logger\");\n\n//# sourceURL=webpack:///external_%22koa-logger%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });