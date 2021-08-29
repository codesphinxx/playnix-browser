(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/playnix.js":
/*!************************!*\
  !*** ./src/playnix.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var playnix_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! playnix-core */ "./node_modules/playnix-core/src/index.js");
/* harmony import */ var lognetic_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lognetic-browser */ "./node_modules/lognetic-browser/src/index.js");
/* harmony import */ var playnix_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! playnix-types */ "./node_modules/playnix-types/src/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var PlaynixSession = /*#__PURE__*/function (_PlaynixBaseClient) {
  _inherits(PlaynixSession, _PlaynixBaseClient);

  var _super = _createSuper(PlaynixSession);

  function PlaynixSession() {
    _classCallCheck(this, PlaynixSession);

    return _super.apply(this, arguments);
  }

  _createClass(PlaynixSession, [{
    key: "_setup",
    value:
    /**
    * @protected
    * @param {String} key
    * @param {PlaynixOptions} options
    */
    function _setup(key, options) {
      lognetic_browser__WEBPACK_IMPORTED_MODULE_1__.lognetic.init(key, options);
      this.options = lognetic_browser__WEBPACK_IMPORTED_MODULE_1__.lognetic.options;
      this.lognetic = lognetic_browser__WEBPACK_IMPORTED_MODULE_1__.lognetic;
    }
    /**
     * @private
     * @param {String} method
     * @param {String} url
     */

  }, {
    key: "_createXHR",
    value: function _createXHR(method, url) {
      var xhttp = new XMLHttpRequest();
      xhttp.open(method, url, true);
      xhttp.setRequestHeader('Content-Type', 'application/json');
      return xhttp;
    }
    /**
     * @public
     * @param {String} sid Social prodiver user Id
     * @param {String} provider Social provider ie {Goole, Facebook}
     * @param {String} token Access token generated from social login
     */

  }, {
    key: "authenticate",
    value: function authenticate(sid, provider, token) {
      var _this = this;

      var data = {
        sid: sid,
        token: token,
        client: this.game
      };
      return new Promise(function (resolve, reject) {
        var xhr = _this._createXHR('POST', "".concat(_this.options.protocol, ":").concat(_this.options.uri, "/auth/").concat(provider));

        xhr.onload = function () {
          if (xhr.status == 200) {
            var resp = JSON.parse(xhr.responseText);
            _this.token = resp.token;
            delete resp.token;
            resolve(resp);
          } else {
            reject(xhr.statusText);
          }
        };

        xhr.onerror = function () {
          return reject(xhr.statusText);
        };

        xhr.send(JSON.stringify(data));
      });
    }
  }, {
    key: "getLoginStatus",
    value: function getLoginStatus() {
      throw new Error('NotImplementedException: This method was not implemented for the target framework');
    }
    /**
     * @public
     * @param {Object} data Player data
     */

  }, {
    key: "saveGameData",
    value: function saveGameData(data) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var xhr = _this2._createXHR('POST', "".concat(_this2.options.protocol, ":").concat(_this2.options.uri, "/api/player"));

        xhr.setRequestHeader('Authorization', "Bearer ".concat(_this2.token));

        xhr.onload = function () {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.statusText);
          }
        };

        xhr.onerror = function () {
          return reject(xhr.statusText);
        };

        xhr.send(JSON.stringify(data));
      });
    }
    /**
     * @public
     */

  }, {
    key: "loadGameData",
    value: function loadGameData() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var xhr = _this3._createXHR('GET', "".concat(_this3.options.protocol, ":").concat(_this3.options.uri, "/api/player"));

        xhr.setRequestHeader('Authorization', "Bearer ".concat(_this3.token));

        xhr.onload = function () {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr.statusText);
          }
        };

        xhr.onerror = function () {
          return reject(xhr.statusText);
        };

        xhr.send();
      });
    }
  }]);

  return PlaynixSession;
}(playnix_core__WEBPACK_IMPORTED_MODULE_0__.PlaynixBaseClient);

var singleton = new PlaynixSession();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleton);

/***/ }),

/***/ "./node_modules/lognetic-browser/src/device.informer.js":
/*!**************************************************************!*\
  !*** ./node_modules/lognetic-browser/src/device.informer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var playnix_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! playnix-core */ "./node_modules/playnix-core/src/index.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js");
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_1__);



class BrowserInformer extends playnix_core__WEBPACK_IMPORTED_MODULE_0__.DeviceInformer
{
    init()
    {
        this.parser = new ua_parser_js__WEBPACK_IMPORTED_MODULE_1__.UAParser();
    }

    /**
     * @returns {{name:String,version:String}}
     */
    getOS() 
    {
        let browserData = this.parser.getResult();
        return browserData.os;
    }

    /**
    * @returns {{vendor:String,model:String}}
    */
    getDevice() 
    {
        let browserData = this.parser.getResult();
        return browserData.device;
    }

    /**
    * @returns {{name:String,version:String}}
    */
    getEngine() 
    {
        let browserData = this.parser.getResult();
        return browserData.engine;
    }
}

const instance = new BrowserInformer();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

/***/ }),

/***/ "./node_modules/lognetic-browser/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/lognetic-browser/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lognetic": () => (/* reexport safe */ _log_client__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "WebHelper": () => (/* reexport safe */ _web_helper__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "BrowserInformer": () => (/* reexport safe */ _device_informer__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "murmurhash3_32_gc": () => (/* reexport safe */ _murmurhash3__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _log_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.client */ "./node_modules/lognetic-browser/src/log.client.js");
/* harmony import */ var _web_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web.helper */ "./node_modules/lognetic-browser/src/web.helper.js");
/* harmony import */ var _device_informer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device.informer */ "./node_modules/lognetic-browser/src/device.informer.js");
/* harmony import */ var _murmurhash3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./murmurhash3 */ "./node_modules/lognetic-browser/src/murmurhash3.js");








/***/ }),

/***/ "./node_modules/lognetic-browser/src/log.client.js":
/*!*********************************************************!*\
  !*** ./node_modules/lognetic-browser/src/log.client.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var playnix_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! playnix-core */ "./node_modules/playnix-core/src/index.js");
/* harmony import */ var _device_informer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device.informer */ "./node_modules/lognetic-browser/src/device.informer.js");
/* harmony import */ var _murmurhash3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./murmurhash3 */ "./node_modules/lognetic-browser/src/murmurhash3.js");
/* harmony import */ var _web_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web.helper */ "./node_modules/lognetic-browser/src/web.helper.js");
/* harmony import */ var playnix_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! playnix-types */ "./node_modules/playnix-types/src/index.js");







class BrowserLogClient extends playnix_core__WEBPACK_IMPORTED_MODULE_0__.LogClient
{
    /**
    * @public
    * @description Initializes playnix's logging client for browsers.
    * @param {String} key
    * @param {PlaynixOptions} options
    */
    init(key, options)
    {
        this.registerDeviceInformer(_device_informer__WEBPACK_IMPORTED_MODULE_1__.default);
        super.init(key, options);
        
        window.onerror = this._onerror.bind(this);

        /**
         * @private
         */
        this._console = {};
    }

    generateClientId() 
    {
        let bar = '|';
        /**
         * @type {import('ua-parser-js')}
         */
        let parser = this.deviceInformer.parser;
        let browserData = parser.getResult();
        let userAgent = browserData.ua;
        let screenPrint = _web_helper__WEBPACK_IMPORTED_MODULE_3__.default.getScreenPrint();
        let localStorage = _web_helper__WEBPACK_IMPORTED_MODULE_3__.default.isLocalStorage();
        let sessionStorage = _web_helper__WEBPACK_IMPORTED_MODULE_3__.default.isSessionStorage();
        let timeZone = _web_helper__WEBPACK_IMPORTED_MODULE_3__.default.getTimeZone();
        let language = navigator.language;
        let systemLanguage = navigator.systemLanguage;
        let cookies = navigator.cookieEnabled;
  
        let key = userAgent + bar + screenPrint + bar + localStorage + bar + sessionStorage + bar + timeZone + bar + language + bar + systemLanguage + bar + cookies;
        let seed = 256;
        
        this._client_id = (0,_murmurhash3__WEBPACK_IMPORTED_MODULE_2__.default)(key, seed);
    }

    /**
     * @private
     * @param {String} msg 
     * @param {String} file 
     * @param {String} line 
     * @param {Number} col 
     * @param {Error} error 
     */
    _onerror(msg, file, line, col, error)
    {
        if (!error) return;
        this.writeException(error);
    }

    /**
     * @private
     * @param {string} action 
     */
    _onconsole(action)
    {        

        this._console[action] = console[action];
        console[action] = () => {
            if (action == playnix_types__WEBPACK_IMPORTED_MODULE_4__.LoggingConfig.LOG_TRIGGER.ERROR)
            {
                this.writeException(arguments);
            }
            else
            {
                this.writeMessage(JSON.stringify(arguments));
            }
            this._console[action].apply(console, arguments);
        };
    }
}

const singleton = new BrowserLogClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (singleton);

/***/ }),

/***/ "./node_modules/lognetic-browser/src/murmurhash3.js":
/*!**********************************************************!*\
  !*** ./node_modules/lognetic-browser/src/murmurhash3.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ murmurhash3_32_gc)
/* harmony export */ });
/**
 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 */

/**
 * @param {String} key 
 * @param {Number} seed 
 */
function murmurhash3_32_gc(key, seed) 
{
	var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;

	remainder = key.length & 3; // key.length % 4
	bytes = key.length - remainder;
	h1 = seed;
	c1 = 0xcc9e2d51;
	c2 = 0x1b873593;
	i = 0;

	while (i < bytes) {
	  	k1 =
	  	  ((key.charCodeAt(i) & 0xff)) |
	  	  ((key.charCodeAt(++i) & 0xff) << 8) |
	  	  ((key.charCodeAt(++i) & 0xff) << 16) |
	  	  ((key.charCodeAt(++i) & 0xff) << 24);
		++i;

		k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

		h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
		h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
		h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
	}

	k1 = 0;

	switch (remainder) {
		case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
		case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
		case 1: k1 ^= (key.charCodeAt(i) & 0xff);

		k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= k1;
	}

	h1 ^= key.length;

	h1 ^= h1 >>> 16;
	h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
	h1 ^= h1 >>> 13;
	h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
	h1 ^= h1 >>> 16;

	return h1 >>> 0;
}

/***/ }),

/***/ "./node_modules/lognetic-browser/src/web.helper.js":
/*!*********************************************************!*\
  !*** ./node_modules/lognetic-browser/src/web.helper.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebHelper)
/* harmony export */ });
class WebHelper 
{
  constructor() 
  {
    throw new Error('This is a static class');
  }

  static isLocalStorage() 
  {
    try 
    {
      return !!window.localStorage;
    }
    catch (e) 
    {
      return true;
    }
  }

  static isSessionStorage() 
  {
    try 
    {
      return !!window.sessionStorage;
    }
    catch (e) 
    {
      return true;
    }
  }

  static getScreenPrint() 
  {
    return "Current Resolution: " + screen.width + "x" + screen.height
      + ", Available Resolution: " + screen.availWidth + "x" + screen.availHeight
      + ", Color Depth: " + screen.colorDepth + ", Device XDPI: " + screen.deviceXDPI +
      ", Device YDPI: " + screen.deviceYDPI;
  }

  static getTimeZone() 
  {
    return String(String(new Date()).split("(")[1]).split(")")[0];
  }
}

/***/ }),

/***/ "./node_modules/playnix-core/src/device.informer.js":
/*!**********************************************************!*\
  !*** ./node_modules/playnix-core/src/device.informer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeviceInformer)
/* harmony export */ });
class DeviceInformer
{
    constructor()
    {
        if (!DeviceInformer.instance)
        {

            DeviceInformer.instance = this;
        }

        return DeviceInformer.instance;
    }

    init() {}

    /**
     * @description Get the device OS
     * @returns {{name:String,version:String}}
     */
    getOS() {}

    /**
    * @description Get device model details
    * @returns {{vendor:String,model:String}}
    */
    getDevice() {}

    /**
    * @description Get runtine engine - for browser only
    * @returns {{name:String,version:String}}
    */
    getEngine() {}
}

/***/ }),

/***/ "./node_modules/playnix-core/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/playnix-core/src/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogClient": () => (/* reexport safe */ _log_client__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "DeviceInformer": () => (/* reexport safe */ _device_informer__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "PlaynixBaseClient": () => (/* reexport safe */ _playnix_base__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _log_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.client */ "./node_modules/playnix-core/src/log.client.js");
/* harmony import */ var _device_informer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device.informer */ "./node_modules/playnix-core/src/device.informer.js");
/* harmony import */ var _playnix_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playnix.base */ "./node_modules/playnix-core/src/playnix.base.js");






/***/ }),

/***/ "./node_modules/playnix-core/src/log.client.js":
/*!*****************************************************!*\
  !*** ./node_modules/playnix-core/src/log.client.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogClient)
/* harmony export */ });
/* harmony import */ var playnix_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! playnix-types */ "./node_modules/playnix-types/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/playnix-core/src/utils.js");



class LogClient extends playnix_types__WEBPACK_IMPORTED_MODULE_0__.BaseLogClient
{
    /**
     * @protected
     * @param {Message} message 
     */
    _populateMessage(message)
    {
        message.os = this.deviceInformer.getOS();
        message.engine = this.deviceInformer.getEngine();
        message.device = this.deviceInformer.getDevice();
        return message;
    }

    /**
     * @protected
     * @param {Error} error
     */
    _createException(error) 
    {
        let exception = new playnix_types__WEBPACK_IMPORTED_MODULE_0__.Exception(error, true);
        return exception;
    }

    /**
    * @public
    * @description Initializes playnix's logging client.
    * @param {String} key
    * @param {Object} options
    * @param {Boolean} options.debug
    * @param {String} options.uri
    * @param {String} options.method
    * @param {String} options.protocol
    * @param {String} options.environment
    */
    init(key, options)
    {
        super.init(key, options);
        this._xhttp = new XMLHttpRequest();
        this._xhttp.onreadystatechange = this._onreadystatechange.bind(this);
    }

    /**
     * @protected
     * @param {import('./device.informer').default} informer 
     */
    registerDeviceInformer(informer)
    {  
        if (!informer)
        {
            throw new Error('NullArgument: DeviceInformer cannot be null');
        }
        this.deviceInformer = informer;
        this.deviceInformer.init();
    }

    /**
     * @public
     * @param {String} username 
     */
    setAppUser(username)
    {
        if (!_utils__WEBPACK_IMPORTED_MODULE_1__.default.isNullOrEmpty(username))
        {
            this._user = String(username);
        }
    }

    /**
     * @public
     * @param {String} version App version info
     */
    setAppVersion(version)
    {
        if (!_utils__WEBPACK_IMPORTED_MODULE_1__.default.isNullOrEmpty(version))
        {
            this._user_version = String(version);
        }        
    }

    /**
     * @public
     * @param {Object|Array} data
     */
    setMetaContext(data)
    {
        if (!data) return;

        if (!Array.isArray(data) && typeof data === 'object')
        {
            data = JSON.parse(JSON.stringify(data));
        }
        this._meta = data;
    }

    /**
    * @public
    * @param {String} message the custom message to log
    * @param {Object} data additional data to send(must contains values of string, number, or boolean)
    */
    writeMessage(message)
    {
        let msg = new playnix_types__WEBPACK_IMPORTED_MODULE_0__.Message(message);
        this._populateMessage(msg);
        this._commit(msg);
    }

    /**
    * @public
    * @param {String} id event id
    * @param {String} message event message
    * @param {String} category event action
    */
    writeEvent(message, id, category)
    {
        let evt = new playnix_types__WEBPACK_IMPORTED_MODULE_0__.Event(id, message, category);
        this._populateMessage(evt);
        this._commit(evt);
    }

    /**
    * @public
    * @param {Error} error Error object to log.
    * @param {Object} data additional data to send(must contains values of string, number, or boolean)
    */
    writeException(error, data)
    {
        if (!error) return;
        
        let ex = this._createException(error);
        ex = this._populateMessage(ex);
        if (data)
        {
            ex.extra = JSON.parse(JSON.stringify(data));
        }
        this._commit(ex);
    }
}

/***/ }),

/***/ "./node_modules/playnix-core/src/playnix.base.js":
/*!*******************************************************!*\
  !*** ./node_modules/playnix-core/src/playnix.base.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlaynixBaseClient)
/* harmony export */ });
/* harmony import */ var playnix_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! playnix-types */ "./node_modules/playnix-types/src/index.js");


class PlaynixBaseClient
{
    constructor()
    {
        if (!PlaynixBaseClient.singleton)
        {
            /**
             * @private
             * @type {String}
             */
            this.game = null;
            /**
             * @private
             * @type {String}
             */
            this.token = null;
            /**
             * @private
             * @type {PlaynixOptions}
             */
            this.options = null;

            PlaynixBaseClient.singleton = this;
        }

        return PlaynixBaseClient.singleton;
    }

    /**
     * @public
     */
    get isAuthenticated ()
    {
        return false;
    }

    /**
    * @public
    * @description Initializes the playnix session.
    * @param {String} key
    * @param {Object} options
    * @param {Boolean} options.debug
    * @param {String} options.uri
    * @param {String} options.method
    * @param {String} options.protocol
    * @param {String} options.environment
    */
    init(key, options)
    {
        this.game = key;
        this._setup(key, options);
    }

    /**
     * @protected
     * @param {String} key 
     * @param {Object} options 
     */
    _setup(key, options) {}

    /**
     * @public
     * @description Verifies the user social login access token
     * @param {String} sid Social prodiver user Id
     * @param {String} provider Social provider ie {Goole, Facebook}
     * @param {String} token Access token generated from social login
     */
    authenticate(sid, provider, token) {}

    /**
     * @public
     * @description Saves player data
     * @param {Object} data 
     */
    saveGameData(data) {}

    /**
     * @public
     * @description Loads player save data
     */
    loadGameData() {}

    /**
     * @public
     * @description Checks player login status
     * @returns {Object} player ref
     */
    getLoginStatus() {}
}

/***/ }),

/***/ "./node_modules/playnix-core/src/utils.js":
/*!************************************************!*\
  !*** ./node_modules/playnix-core/src/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var playnix_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! playnix-types */ "./node_modules/playnix-types/src/index.js");


class Utils
{
    constructor()
    {
        throw new Error('This is a static class');
    }

    static stringify(value)
    {
        if (value === null) return '';
        if (typeof value === 'function' || typeof value === 'symbol' || typeof value === 'undefined') return '';
        
        let result = '';
        
        if (Array.isArray(value))
        {
            result = '';
            for(let i = 0; i < value.length; i++)
            {
                let data_type = typeof value[i];
                if (Utils.PRIMITIVES.indexOf(data_type) != -1)
                {
                    result += i===0 ? Utils.stringify(value[i]) : ' ' + Utils.stringify(value[i]);
                }
                else
                {
                    result += i===0 ? Utils.stringify(value[i]) : ', ' + Utils.stringify(value[i]);
                }                
            }
        }
        else if (typeof value === 'object')
        {
            let index = 0;
            result = '{';
            for (let key in value)
            {
                let node = key.toString() + ': ';
                node += Array.isArray(value[key]) ? ('[' + Utils.stringify(value[key]) + ']') : Utils.stringify(value[key]);
                result += index===0 ? node : ', ' + node;
                index++;
            }  
            if (index === 0 && value.toString)
            {
                result += value.toString();
            }  
            result += '}';        
        }
        else
        {
            result += value;
        }        
    
        return result;
    }

    static isLogLevel(value)
    {
        return value ? ([playnix_types__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.LOGS.ERROR,playnix_types__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.LOGS.INFO,playnix_types__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.LOGS.WARN].indexOf(value) !== -1) : false;
    }

    static isObject(what) 
    {
        return typeof what === 'object' && what !== null;
    }
      
    static isError(value) 
    {
        switch ({}.toString.call(value)) 
        {
          case '[object Error]':
            return true;
          case '[object Exception]':
            return true;
          case '[object DOMException]':
            return true;
          default:
            return value instanceof Error;
        }
    }
    
    static isNull(value) 
    {
        return value == null || value == undefined;
    }

    /**
     * @param {String} value 
     */
    static isNullOrEmpty(value)
    {
        if (value === null || value === undefined)
            return true;

        if (typeof value != 'string')
        {
            return true;
        }

        let text = value.replace('/ /g', '');

        if (text.length === 0)
            return true;
    }
}

Utils.PRIMITIVES = ['undefined','boolean','number','string'];

/***/ }),

/***/ "./node_modules/playnix-types/src/client.js":
/*!**************************************************!*\
  !*** ./node_modules/playnix-types/src/client.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseLogClient)
/* harmony export */ });
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options */ "./node_modules/playnix-types/src/options.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/playnix-types/src/config.js");
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exception */ "./node_modules/playnix-types/src/exception.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./node_modules/playnix-types/src/message.js");





class BaseLogClient
{
    constructor()
    {
        if (!BaseLogClient.singleton)
        {
            /**
             * @type {PlaynixOptions}
             */
            this.options = null;
            /**
             * @private
             * @type {String}
             */
            this._app_key = null;
            /**
             * @private
             * @type {XMLHttpRequest}
             */
            this._xhttp = null;
            /**
             * @private
             */
            this._meta = null;
            /**
             * @private
             * @type {String}
             */
            this._user = null;
            /**
             * @private
             * @type {String}
             */
            this._user_version = null;
            /**
             * @private
             * @type {String}
             */
            this._client_id = null;
            /**
             * @private
             * @type {{category:String, message:String, timestamp:Date, data:Object}[]}
             */
            this._breadcrumbs = [];

            BaseLogClient.singleton = this;
        }

        return BaseLogClient.singleton;
    }

    /**
     * @protected
     */
    _onreadystatechange ()
    {
        if (this._xhttp instanceof XMLHttpRequest)
        {
            if (this._xhttp.readyState === XMLHttpRequest.DONE && this._xhttp.status != 200 && this.options.debug && !this.options.console.log)
            {
                console.log(this._xhttp.responseText);
            }
        }
    }

    static get CONSTANTS()
    {
        return _config__WEBPACK_IMPORTED_MODULE_1__.default;
    }

    /**
     * @protected
     * @param {Error} error
     * @returns {Exception}
     */
    _createException(error) {}

    /**
     * @protected
     * @param {Message} data 
     */
    _commit(data)
    {
        if (this._meta)
        {
            data.meta = this._meta;
        }
        if (this._user)
        {
            data.user = this._user;
        }
        if (this._user_version)
        {
            data.appVersion = this._user_version;
        }
        if (this._client_id)
        {
            data.clientId = this._client_id;
        }
        if (this._app_key)
        {
            data.secret = this._app_key;
        }
        if (this.options.environment)
        {
            data.environment = this.options.environment;
        }
        if (this._breadcrumbs.length != 0)
        {
            data.breadcrumbs = this._breadcrumbs;
        }
        if (this._xhttp)
        {
            let path = '';
            if (data.name == _config__WEBPACK_IMPORTED_MODULE_1__.default.LOG_ACTION.ERROR && this.options.paths.error)
            {
                path = `/${this.options.paths.error}`;
            } 
            if (data.name == _config__WEBPACK_IMPORTED_MODULE_1__.default.LOG_ACTION.EVENT && this.options.paths.event)
            {
                path = `/${this.options.paths.event}`;
            }
            if (data.name == _config__WEBPACK_IMPORTED_MODULE_1__.default.LOG_ACTION.MESSAGE && this.options.paths.message)
            {
                path = `/${this.options.paths.message}`;
            }
            this._xhttp.open(this.options.method, `${this.options.protocol}:${this.options.uri}${path}`, true);
            if (this._xhttp instanceof XMLHttpRequest)
            {
                this._xhttp.setRequestHeader('Content-Type', 'application/json');
            }        
            this._xhttp.send(JSON.stringify(data));
        }        
    }

    /**
     * @protected
     * @param {Object} breadcrumb
     * @param {String} breadcrumb.category
     * @param {String} breadcrumb.message
     * @param {Date} breadcrumb.timestamp
     * @param {Object} breadcrumb.data
     */
    _extractBreadcrumb(breadcrumb)
    {
        if (!breadcrumb) return;

        let values = {};

        if (typeof breadcrumb.category == 'string')
        {
            values.category = breadcrumb.category;
        }
        if (typeof breadcrumb.message == 'string')
        {
            values.message = breadcrumb.message;
        }
        if (breadcrumb.timestamp instanceof Date)
        {
            values.timestamp = breadcrumb.timestamp.getTime();
        }
        else if (typeof breadcrumb.timestamp == 'number' || typeof breadcrumb.timestamp == 'bigint')
        {
            values.timestamp = breadcrumb.timestamp;
        }
        if (breadcrumb.data)
        {
            values.data = JSON.parse(JSON.stringify(breadcrumb.data));
        }
        
        return values;
    }
    
    /**
    * @public
    * @param {String} key - the client application api key
    * @param {Object} options
    * @param {Boolean} options.debug
    * @param {String} options.uri
    * @param {String} options.method
    * @param {String} options.protocol
    * @param {String} options.environment
    * @param {Object} options.paths
    * @param {String} options.paths.message
    * @param {String} options.paths.event
    * @param {String} options.paths.error
    * @param {Object} options.console
    * @param {Boolean} options.console.log
    * @param {Boolean} options.console.warn
    * @param {Boolean} options.console.error
    */
    init(key, options)
    {      
        options = options || {};   
        if (!key)
        {
            throw new Error('InvalidArgument: Application client id cannot be null');
        }
        if (typeof key != 'string')
        {
            throw new Error('InvalidArgument: Client id is expecting a string value');
        }
        options = Object.assign(_options__WEBPACK_IMPORTED_MODULE_0__.default, options);
        if (options.uri.indexOf('https:')!=-1)
        {
            options.uri = options.uri.replace('https:', '');
            options.protocol = 'https';
        }
        else if (options.uri.indexOf('http:')!=-1)
        {
            options.uri = options.uri.replace('http:', '');
            options.protocol = 'http';
        } 
        options.method = options.method.toUpperCase();
        if (['POST','PUT','DELETE'].indexOf(options.method) == -1)
        {
            throw new Error('InvalidArgument: Client submit method must either POST, PUT or DELETE');
        }
        this._app_key = key;
        this.options = options;
        this.generateClientId();
    }

    /**
    * @public
    * @description Sets breadcrumbs that will be attached to any outgoing message
    * @param {Object} breadcrumb Breadcrumb data
     * @param {String} breadcrumb.category
     * @param {String} breadcrumb.message
     * @param {Date} breadcrumb.timestamp
     * @param {Object} breadcrumb.data
    */
    addBreadcrumb(breadcrumb) 
    {
        let entry = this._extractBreadcrumb(breadcrumb);
        if (entry)
        {
            this._breadcrumbs.push(entry);
            return true;
        }

        return false;
    }

    /**
    * @public
    * @description Clear breadcrumbs
    */
    clearBreadcrumbs() 
    {
        this._breadcrumbs.length = 0;
    }

    /**
     * @public
     * @description Generate and set a unique client Id
     */
    generateClientId() {}

    /**
    * @public
    * @description Sends a custom info-level message.
    * @param {String} message the custom message to log
    */
    writeMessage(message) {}

    /**
    * @public
    * @description Captures an event message
    * @param {String} id event id
    * @param {String} message event message
    * @param {String} category event category
    */
    writeEvent(id, message, category) {}

    /**
    * @public
    * @description Sends a custom error exception.
    * @param {Error} error Error object to log.
    * @param {Object} data additional data to send(must contains values of string, number, or boolean)
    */
    writeException(error, data) {}

    /**
    * @public
    * @description Sets custom metadata that will be submitted with each message
    * @param {Object|Array} data custom meta data, can be user to store user details
    */
    setMetaContext(data) {}

    /**
    * @public
    * @description Sets the user client version metadata
    * @param {String} version App version info
    */
    setAppVersion(version) {}

    /**
    * @public
    * @description Sets the client's current user metadata
    * @param {String} username Username of the currently logged on user
    */
    setAppUser(username) {}
}

/***/ }),

/***/ "./node_modules/playnix-types/src/config.js":
/*!**************************************************!*\
  !*** ./node_modules/playnix-types/src/config.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const LoggingConfig = Object.freeze({
    LOGS: {
        INFO: 'info',
        WARN: 'warn',
        ERROR: 'error'
    },
    LOG_ACTION: {
        MESSAGE: 'message',
        ERROR: 'error',
        EVENT: 'event'
    }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoggingConfig);

/***/ }),

/***/ "./node_modules/playnix-types/src/event.js":
/*!*************************************************!*\
  !*** ./node_modules/playnix-types/src/event.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Event)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/playnix-types/src/config.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./node_modules/playnix-types/src/message.js");



class Event extends _message__WEBPACK_IMPORTED_MODULE_1__.default
{
    /**
     * @param {String} id
     * @param {String} message
     * @param {String} category
     */
    constructor(id, message, category)
    {
        super(message);
        this.name = _config__WEBPACK_IMPORTED_MODULE_0__.default.LOG_ACTION.EVENT;
        /**
         * @type {String}
         */
        this.eventId = id;
        /**
         * @type {String}
         */
        this.category = category;
    }
}

/***/ }),

/***/ "./node_modules/playnix-types/src/exception.js":
/*!*****************************************************!*\
  !*** ./node_modules/playnix-types/src/exception.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Exception)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/playnix-types/src/config.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./node_modules/playnix-types/src/message.js");



class Exception extends _message__WEBPACK_IMPORTED_MODULE_1__.default
{
    /**
     * @param {Error} error 
     */
    constructor(error, handled = true)
    {
        super(error.message);
        this.name = _config__WEBPACK_IMPORTED_MODULE_0__.default.LOG_ACTION.ERROR;
                
        /**
         * @type {Boolean}
         */
        this.handled = handled;
        /**
         * @type {Object[]}
         */
        this.stack = [];
        /**
         * @type {Object}
         */
        this.extra = {};
        /**
         * @type {String}
         */
        this.level = _config__WEBPACK_IMPORTED_MODULE_0__.default.LOGS.ERROR;

        this.addStack(error);
    }    

    addStack(error)
    {
        if (!error) return;
       
        let stack = {args:[], line:-1, column:-1, func:'', context:'', url:''};
        
        if (error.stack || error.stacktrace) 
            stack.context = error.stack || error.stacktrace;

        if (error.fileName) 
            stack.url = error.fileName;
        
        if (error.lineNumber)
            stack.line = error.lineNumber;

        if (error.columnNumber)
            stack.column = error.columnNumber;

        if (error.toSource && !error.stack && !error.stacktrace)
            stack.context = error.toSource();
        this.stack.push(stack);
    }
}

/***/ }),

/***/ "./node_modules/playnix-types/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/playnix-types/src/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseLogClient": () => (/* reexport safe */ _client__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Event": () => (/* reexport safe */ _event__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Exception": () => (/* reexport safe */ _exception__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Message": () => (/* reexport safe */ _message__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Response": () => (/* reexport safe */ _response__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "LoggingConfig": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "PlaynixOptions": () => (/* reexport safe */ _options__WEBPACK_IMPORTED_MODULE_6__.default)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./node_modules/playnix-types/src/client.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./node_modules/playnix-types/src/event.js");
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exception */ "./node_modules/playnix-types/src/exception.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message */ "./node_modules/playnix-types/src/message.js");
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./response */ "./node_modules/playnix-types/src/response.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/playnix-types/src/config.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options */ "./node_modules/playnix-types/src/options.js");














/***/ }),

/***/ "./node_modules/playnix-types/src/message.js":
/*!***************************************************!*\
  !*** ./node_modules/playnix-types/src/message.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/playnix-types/src/config.js");


class Message
{
    /**
     * @param {String} message 
     */
    constructor(message)
    {
        /**
         * @type {String}
         */
        this.name = _config__WEBPACK_IMPORTED_MODULE_0__.default.LOG_ACTION.MESSAGE;
        /**
         * @type {String}
         */
        this.message = message || '';
        /**
         * @type {Object}
         */
        this.device = null;
        /**
         * @type {Object}
         */
        this.engine = null;
        /**
         * @type {Object}
         */
        this.os = null;
        /**
         * @type {{category:String, message:String, timestamp:Date, data:Object}[]}
         */
        this.breadcrumbs = [];
        /**
         * @type {Number}
         */
        this.timestamp = Date.now();
        /**
         * @type {String}
         */      
        this.secret = null;
        /**
         * @type {String}
         */
        this.appVersion = null;
        /**
         * @type {String}
         */
        this.page = null;
        /**
         * @type {String}
         */
        this.clientId = null;
        /**
         * @type {String}
         */
        this.environment = null;
        /**
         * @type {String}
         */
        this.runtime = 'javascript';
        /**
         * @type {String}
         */
        this.user = 'anonymous';
        /**
         * @type {Object}
         */
        this.meta = {};
    }

    /**
     * @type {string}
     */
    get version()
    {
        return "0.0.5";
    }
}

/***/ }),

/***/ "./node_modules/playnix-types/src/options.js":
/*!***************************************************!*\
  !*** ./node_modules/playnix-types/src/options.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const API_URI = '{SERVER_URI}';

const PlaynixOptions = {
    /**
     * @type {Boolean}
     * @default false
     */
    debug: false,
    /**
     * @type {String}
     */
    uri: `${API_URI}`,
    /**
     * @type {String}
     * @default POST
     */
    method: 'POST',
    /**
     * @type {String}
     * @default https
     */
    protocol: 'https',
    /**
     * @type {String}
     */
    environment: null,
    /**
     * @type {{message:String, event:String, error:String}}
     */
    paths: {},
    /**
     * @type {{log:Boolean, warn:Boolean, error:Boolean}}
     */
    console: { log:false, warn:false, error:true }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaynixOptions);

/***/ }),

/***/ "./node_modules/playnix-types/src/response.js":
/*!****************************************************!*\
  !*** ./node_modules/playnix-types/src/response.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Response)
/* harmony export */ });
class Response
{
    /**
     * @param {String} id
     * @param {Number} status
     * @param {String} detail
     */
    constructor(id, status, detail)
    {
        /**
         * @type {String}
         */
        this.id = id || null;
        /**
         * @type {String}
         */
        this.status = status || -1;
        /**
         * @type {String}
         */
        this.detail = detail || null;
    }
}

/***/ }),

/***/ "./node_modules/ua-parser-js/src/ua-parser.js":
/*!****************************************************!*\
  !*** ./node_modules/ua-parser-js/src/ua-parser.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.28',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 255;


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        has : function (str1, str2) {
            return typeof str1 === STR_TYPE ? str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1 : false;
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str, len) {
            str = str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            // Safari < 3.0
            oldSafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            },
            oldEdge : {
                version : {
                    '0.1'   : '12.',
                    '21'    : '13.',
                    '31'    : '14.',
                    '39'    : '15.',
                    '41'    : '16.',
                    '42'    : '17.',
                    '44'    : '18.'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [
            // breaking change (reserved for next major release):
            ///edge\/([\w\.]+)/i                                                  // Old Edge (Trident)
            //], [[VERSION, mapper.str, maps.browser.oldEdge.version], [NAME, 'Edge']], [

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,                // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i,                         // Opera
            ], [NAME, VERSION], [
            /opios[\/\s]+([\w\.]+)/i                                            // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, 'Opera Mini']], [
            /\sopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, 'Opera']], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,     // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,             // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/\s]?([\w\.]+)/i,                                 // Baidu Browser
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                                                                                // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,         // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i           // UCBrowser
            ], [VERSION, [NAME, 'UCBrowser']], [
            /(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i      // WeChat Desktop for Windows Built-in Browser
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i                     // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure Browser'], VERSION], [
            /focus\/([\w\.]+)/i                                                 // Firefox Focus
            ], [VERSION, [NAME, 'Firefox Focus']], [
            /opt\/([\w\.]+)/i                                                   // Opera Touch
            ], [VERSION, [NAME, 'Opera Touch']], [
            /coc_coc_browser\/([\w\.]+)/i                                       // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, 'Opera Coast']],
            [/xiaomi\/miuibrowser\/([\w\.]+)/i                                  // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [
            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [
            /(qihu|qhbrowser|qihoobrowser|360browser)/i                         // 360
            ], [[NAME, '360 Browser']], [
            /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 Browser'], VERSION], [                       // Oculus/Samsung/Sailfish Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /\s(electron)\/([\w\.]+)\ssafari/i,                                 // Electron-based App
            /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,                // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i           // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(MetaSr)[\/\s]?([\w\.]+)/i,                                        // SouGouBrowser
            /(LBBROWSER)/i                                                      // LieBao Browser
            ], [NAME], [

            // WebView
            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android with version
            ], [VERSION, [NAME, 'Facebook']], [
            /FBAN\/FBIOS|FB_IAB\/FB4A/i                                         // Facebook App for iOS & Android without version
            ], [[NAME, 'Facebook']], [
            /safari\s(line)\/([\w\.]+)/i,                                       // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/\s]([\w\.-]+)/i                             // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+)\s.*safari\//i                                     // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)|\s)/i                                 // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, 'Chrome WebView'], VERSION], [

            /droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i         // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i      // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i                      // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i                   // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldSafari.version]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /ile\svr;\srv:([\w\.]+)\).+firefox/i                                // Firefox Reality
            ], [VERSION, [NAME, 'Firefox Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,                       // Other Firefox-based
            /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,                        // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]*)/i,                                         // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|armv?8e?l?)\b/i                                         // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i
            ], [MODEL, [VENDOR, 'Samsung'], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,
            /\ssamsung[\s-]([\w-]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, 'Samsung'], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\s\w]*);/i                                        // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [
            /\((ipad);[\w\s\),;-]+apple/i,                                      // iPad
            /applecoremedia\/[\w\.]+\s\((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            // Huawei
            /\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i,
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, TABLET]], [
            /d\/huawei([\w\s-]+)[;\)]/i,
            /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,
            /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\s\w]+)(?:\sbuild|\))/i,                                   // Xiaomi POCO
            /\b;\s(\w+)\sbuild\/hm\1/i,                                         // Xiaomi Hongmi 'numeric' models
            /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,                       // Xiaomi Hongmi
            /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,              // Xiaomi Redmi
            /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i  // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [
            /\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i                  // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [

            // OPPO
            /;\s(\w+)\sbuild.+\soppo/i,
            /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /\svivo\s(\w+)(?:\sbuild|\))/i,
            /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\s(rmx[12]\d{3})(?:\sbuild|;)/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,
            /\smot(?:orola)?[\s-](\w*)/i,
            /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [
            /(lm-?f100[nv]?|nexus\s[45])/i,
            /lg[e;\s\/-]+((?!browser|netcast)\w+)/i,
            /\blg(\-?[\d\w]+)\sbuild/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[\w\-\s]+)/i,
            /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i        // Lenovo tablets
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia\s\d+)/i,
            /nokia[\s_-]?([\w\.-]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /droid.+;\s(pixel\sc)[\s)]/i                                        // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [
            /droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i                    // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            // Sony
            /droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [
            /sony\stablet\s[ps]\sbuild\//i,
            /(?:sony)?sgp\w+(?:\sbuild\/|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, 'Sony'], [TYPE, TABLET]], [

            // OnePlus
            /\s(kb2005|in20[12]5|be20[12][59])\b/i,
            /\ba000(1)\sbuild/i,                                                // OnePlus
            /\boneplus\s(a\d{4})[\s)]/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)(\sbuild\/|\))/i,                                    // Kindle Fire without Silk
            /(kf[a-z]+)(\sbuild\/|\)).+silk\//i                                 // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i                    // Fire Phone
            ], [[MODEL, 'Fire Phone'], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            // BlackBerry
            /\((playbook);[\w\s\),;-]+(rim)/i                                   // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, 'ASUS'], [TYPE, TABLET]], [
            /\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i
            ], [MODEL, [VENDOR, 'ASUS'], [TYPE, MOBILE]], [

            // HTC
            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,                    // HTC

            // ZTE
            /(zte)-(\w*)/i,
            /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+;\s(m[1-5]\snote)\sbuild/i,
            /\bmz-([\w-]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft);\s(lumia[\s\w]+)/i,                                    // Microsoft Lumia
            /(lenovo)[_\s-]?([\w-]+)/i,                                         // Lenovo
            /linux;.+(jolla);/i,                                                // Jolla
            /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i                              // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i,                                 // Dell Streak
            /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,                   // Le Pan Tablets
            /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,                         // Trinity Tablets
            /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,                             // Gigaset Tablets
            /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i                            // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /\s(surface\sduo)\s/i                                               // Surface Duo
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, TABLET]], [
            /droid\s[\d\.]+;\s(fp\du?)\sbuild/i
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /\s(u304aa)\sbuild/i                                                // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /sie-(\w*)/i                                                        // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /[;\/]\s?(rct\w+)\sbuild/i                                          // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /[;\/\s](venue[\d\s]{2,7})\sbuild/i                                 // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i                                   // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i          // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /[;\/]\s(tm\d{3}\w+)\sbuild/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /;\s(k88)\sbuild/i                                                  // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /;\s(nx\d{3}j)\sbuild/i                                             // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /[;\/]\s?(gen\d{3})\sbuild.*49h/i                                   // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /[;\/]\s?(zur\d{3})\sbuild/i                                        // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /[;\/]\s?((zeki)?tb.*\b)\sbuild/i                                   // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /[;\/]\s([yr]\d{2})\sbuild/i,
            /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i                   // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /[;\/]\s?(ns-?\w{0,9})\sbuild/i                                     // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i                             // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [                    // Voice Xtreme Phones
            /[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i                                // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /;\s(ph-1)\s/i
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [                // Essential PH-1
            /[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i                    // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i                                 // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /[;\/]\s?tu_(1491)\sbuild/i                                         // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w\s]+)\sbuild/i                                           // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint)\s(\w+)/i                                                  // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
            /droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i     // Zebra
            ], [MODEL, [VENDOR, 'Zebra'], [TYPE, TABLET]], [
            /droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, 'Zebra'], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3utch]+)/i                                       // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+;\s(shield)\sbuild/i                                        // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation\s[345portablevi]+)/i                                  // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [
            /[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i                        // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [
            /(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i,              // LG SmartTV
            ], [[VENDOR, 'LG'], [TYPE, SMARTTV]], [
            /(apple)\s?tv/i                                                     // Apple TV
            ], [VENDOR, [MODEL, 'Apple TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google'], [TYPE, SMARTTV]], [
            /droid.+aft([\w])(\sbuild\/|\))/i                                   // Fire TV
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [
            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [
            /[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i                 // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+;\s(glass)\s\d/i                                            // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [
            /droid\s[\d\.]+;\s(wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, 'Zebra'], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i                   // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i    // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i  // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\s(tablet|tab)[;\/]/i,                                             // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize]], [
            /(android[\w\.\s\-]{0,9});.+build/i                                 // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']], [
            /(phone)/i
            ], [[TYPE, MOBILE]]
        ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,                   // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,          // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac\sos\sx)\s?([\w\s\.]*)/i,
            /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i                         // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes                                                      // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki/Sailfish OS
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/\s]([\w\.]+)/i,                                    // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, 'BlackBerry']], [
            /(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i       // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, 'Chromecast']], [
            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation)\s([wids345portablevuch]+)/i,                // Nintendo/Playstation
            /(xbox);\s+xbox\s([^\);]+)/i,                                       // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // GNU/Linux based
            /(mint)[\/\s\(\)]?(\w*)/i,                                          // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]*)/i,                                        // Hurd/Linux
            /(gnu)\s?([\w\.]*)/i,                                               // GNU

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,  // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            /(haiku)\s(\w+)/i                                                   // Haiku
            ], [NAME, VERSION], [

            // Other
            /(sunos)\s?([\w\.\d]*)/i                                            // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,                             // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,                                // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,  // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS/Fuchsia
            /(unix)\s?([\w\.]*)/i                                               // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////
    var UAParser = function (ua, extensions) {

        if (typeof ua === 'object') {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== 'undefined' && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = { name: undefined, version: undefined };
            mapper.rgx.call(_browser, _ua, _rgxmap.browser);
            _browser.major = util.major(_browser.version); // deprecated
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = { architecture: undefined };
            mapper.rgx.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = { vendor: undefined, model: undefined, type: undefined };
            mapper.rgx.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = { name: undefined, version: undefined };
            mapper.rgx.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = { name: undefined, version: undefined };
            mapper.rgx.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? util.trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };

    ///////////
    // Export
    //////////


    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if ("object" !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== 'undefined' && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "playnix": () => (/* reexport safe */ _playnix__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _playnix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playnix */ "./src/playnix.js");

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=playnix.js.map