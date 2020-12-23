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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router_todoRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/todoRouter */ \"./src/router/todoRouter.ts\");\n\r\n_router_todoRouter__WEBPACK_IMPORTED_MODULE_0__[\"todoRouter\"].load();\r\n\n\n//# sourceURL=webpack:///./src/App.ts?");

/***/ }),

/***/ "./src/_core/Component.ts":
/*!********************************!*\
  !*** ./src/_core/Component.ts ***!
  \********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n\r\n\r\nclass Component {\r\n    constructor($target, $props) {\r\n        this.$target = $target;\r\n        this.$props = $props;\r\n        this.$children = {};\r\n        this.render = () => {\r\n            try {\r\n                this.$target.innerHTML = this.template();\r\n                this.buildChildren();\r\n            }\r\n            catch (e) {\r\n                this.$target.innerHTML = '';\r\n            }\r\n            this.componentDidMount();\r\n        };\r\n        this.setup();\r\n    }\r\n    async setup() {\r\n        await this.componentInit();\r\n        this.$state = Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"observable\"])(this.$state || {});\r\n        this.setEvent();\r\n        Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"observe\"])(this.render);\r\n    }\r\n    buildChildren() {\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"selectAllElement\"])('[data-component]', this.$target).forEach(target => {\r\n            try {\r\n                const componentName = target.dataset.component;\r\n                const { constructor, props } = this.$children[componentName];\r\n                new constructor(target, props);\r\n            }\r\n            catch (e) {\r\n                console.log(target);\r\n            }\r\n        });\r\n    }\r\n    componentInit() { }\r\n    setEvent() { }\r\n    componentDidMount() { }\r\n    template() {\r\n        return '';\r\n    }\r\n    setState(payload) {\r\n        Object.entries(payload)\r\n            .forEach(([key, value]) => {\r\n            this.$state[key] = value;\r\n        });\r\n    }\r\n    addEvent(ref, eventType, callback) {\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"addEventBubblingListener\"])(this.$target, `[data-ref=\"${ref}\"]`, eventType, callback);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/_core/Component.ts?");

/***/ }),

/***/ "./src/_core/Observer.ts":
/*!*******************************!*\
  !*** ./src/_core/Observer.ts ***!
  \*******************************/
/*! exports provided: observe, observableOfKey, observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observe\", function() { return observe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observableOfKey\", function() { return observableOfKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observable\", function() { return observable; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n\r\nlet currentObserver = null;\r\nconst observe = (observer) => {\r\n    currentObserver = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"debounceOneFrame\"])(observer);\r\n    observer();\r\n    currentObserver = null;\r\n};\r\nconst observableOfKey = (obj, key, defaultValue) => {\r\n    if (!obj)\r\n        return;\r\n    const observers = new Set();\r\n    let _value = defaultValue && typeof defaultValue === 'object'\r\n        ? observable(defaultValue)\r\n        : defaultValue;\r\n    Object.defineProperty(obj, key, {\r\n        enumerable: true,\r\n        configurable: true,\r\n        get() {\r\n            if (currentObserver)\r\n                observers.add(currentObserver);\r\n            return _value;\r\n        },\r\n        set(value) {\r\n            if (JSON.stringify(value) === JSON.stringify(_value))\r\n                return;\r\n            _value = value && typeof value === 'object'\r\n                ? observable(value)\r\n                : value;\r\n            observers.forEach(observer => observer());\r\n        },\r\n    });\r\n    return obj;\r\n};\r\nconst observable = (target) => (Object.entries(target)\r\n    .reduce((obj, [key, defaultValue]) => observableOfKey(obj, key, defaultValue), target));\r\n\n\n//# sourceURL=webpack:///./src/_core/Observer.ts?");

/***/ }),

/***/ "./src/_core/RestClient.ts":
/*!*********************************!*\
  !*** ./src/_core/RestClient.ts ***!
  \*********************************/
/*! exports provided: RestClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RestClient\", function() { return RestClient; });\nclass RestClient {\r\n    constructor(baseURL) {\r\n        this.baseURL = baseURL;\r\n    }\r\n    getUrlOf(uri) {\r\n        const slash = uri.indexOf('/') === 0 ? '' : '/';\r\n        return `${this.baseURL}${slash}${uri}`;\r\n    }\r\n    request(uri, method = \"GET\" /* GET */) {\r\n        return fetch(this.getUrlOf(uri), { method })\r\n            .then(response => response.json());\r\n    }\r\n    requestWithBody(uri, method, body) {\r\n        const headers = { 'Content-Type': 'application/json' };\r\n        const requestInit = { method, headers, body: JSON.stringify(body) };\r\n        return fetch(this.getUrlOf(uri), requestInit).then(response => response.json());\r\n    }\r\n    get(uri) {\r\n        return this.request(uri);\r\n    }\r\n    delete(uri) {\r\n        return this.request(uri, \"DELETE\" /* DELETE */);\r\n    }\r\n    post(uri, body) {\r\n        return this.requestWithBody(uri, \"POST\" /* POST */, body);\r\n    }\r\n    put(uri, body) {\r\n        return this.requestWithBody(uri, \"PUT\" /* PUT */, body);\r\n    }\r\n    patch(uri, body) {\r\n        return this.requestWithBody(uri, \"PATCH\" /* PATCH */, body);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/_core/RestClient.ts?");

/***/ }),

/***/ "./src/_core/Router.ts":
/*!*****************************!*\
  !*** ./src/_core/Router.ts ***!
  \*****************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return Router; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n\r\nconst Router = class {\r\n    constructor(callback, baseURI = \"\") {\r\n        this.callback = callback;\r\n        this.baseURI = baseURI;\r\n        this.$query = {};\r\n        window.onpopstate = () => this.load();\r\n    }\r\n    load() {\r\n        const uri = location.href.replace(location.origin, \"\");\r\n        this.$query = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseQuery\"])(uri);\r\n        this.callback(uri);\r\n    }\r\n    push(uri) {\r\n        const fullUri = `${this.baseURI}/#!${uri}`;\r\n        const query = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"parseQuery\"])(uri);\r\n        this.$query = query;\r\n        this.callback(fullUri);\r\n        history.pushState(query, '', fullUri);\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/_core/Router.ts?");

/***/ }),

/***/ "./src/_core/Store.ts":
/*!****************************!*\
  !*** ./src/_core/Store.ts ***!
  \****************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n\r\nclass Store {\r\n    constructor({ state, getters = {}, mutations = {}, actions = {} }) {\r\n        this.$state = Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"observable\"])(state);\r\n        this.$getters = Object.entries(getters)\r\n            .reduce((getters, [key, getter]) => {\r\n            Object.defineProperty(getters, key, {\r\n                get: () => getter(this.$state)\r\n            });\r\n            return getters;\r\n        }, {});\r\n        this.mutations = mutations;\r\n        this.actions = actions;\r\n    }\r\n    commit(key, payload) {\r\n        this.mutations[key](this.$state, payload);\r\n    }\r\n    dispatch(key, payload) {\r\n        return this.actions[key]({\r\n            commit: (key, payload) => this.commit(key, payload),\r\n            dispatch: (key, payload) => this.dispatch(key, payload),\r\n            state: this.$state,\r\n        }, payload);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/_core/Store.ts?");

/***/ }),

/***/ "./src/_core/index.ts":
/*!****************************!*\
  !*** ./src/_core/index.ts ***!
  \****************************/
/*! exports provided: Component, RestClient, Router, Store, observe, observableOfKey, observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/_core/Component.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]; });\n\n/* harmony import */ var _RestClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestClient */ \"./src/_core/RestClient.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RestClient\", function() { return _RestClient__WEBPACK_IMPORTED_MODULE_1__[\"RestClient\"]; });\n\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Router */ \"./src/_core/Router.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Router\", function() { return _Router__WEBPACK_IMPORTED_MODULE_2__[\"Router\"]; });\n\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store */ \"./src/_core/Store.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return _Store__WEBPACK_IMPORTED_MODULE_3__[\"Store\"]; });\n\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Observer */ \"./src/_core/Observer.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"observe\", function() { return _Observer__WEBPACK_IMPORTED_MODULE_4__[\"observe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"observableOfKey\", function() { return _Observer__WEBPACK_IMPORTED_MODULE_4__[\"observableOfKey\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"observable\", function() { return _Observer__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/_core/index.ts?");

/***/ }),

/***/ "./src/adapter/todoAdapter.ts":
/*!************************************!*\
  !*** ./src/adapter/todoAdapter.ts ***!
  \************************************/
/*! exports provided: todoAdapterURL, todoAdapterClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoAdapterURL\", function() { return todoAdapterURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoAdapterClient\", function() { return todoAdapterClient; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n\r\nconst todoAdapterURL = 'https://js-todo-list-9ca3a.df.r.appspot.com/api';\r\nconst todoAdapterClient = new _core__WEBPACK_IMPORTED_MODULE_0__[\"RestClient\"](todoAdapterURL);\r\n\n\n//# sourceURL=webpack:///./src/adapter/todoAdapter.ts?");

/***/ }),

/***/ "./src/components/Team/TeamAppendForm.ts":
/*!***********************************************!*\
  !*** ./src/components/Team/TeamAppendForm.ts ***!
  \***********************************************/
/*! exports provided: TeamAppendForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TeamAppendForm\", function() { return TeamAppendForm; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n\r\n\r\n\r\nconst TeamAppendForm = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    close() {\r\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"teamStore\"].commit(_store__WEBPACK_IMPORTED_MODULE_1__[\"SET_OPENED_TEAM_APPEND_FORM\"], false);\r\n    }\r\n    async appendTeam(name) {\r\n        try {\r\n            await _store__WEBPACK_IMPORTED_MODULE_1__[\"teamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TEAM\"], name);\r\n            this.close();\r\n        }\r\n        catch (e) {\r\n            console.error(e);\r\n        }\r\n    }\r\n    template() {\r\n        const { openedAppendForm } = _store__WEBPACK_IMPORTED_MODULE_1__[\"teamStore\"].$state;\r\n        return openedAppendForm ? `\r\n      <div class=\"modal\" data-ref=\"close\">\r\n        <div class=\"modal-box\">\r\n          <button type=\"button\" class=\"modal-close-button\" data-ref=\"close\">×</button>\r\n          <h3 class=\"modal-title\">팀 추가하기</h3>\r\n          <form action=\"\" data-ref=\"append\">\r\n            <div class=\"appendForm\">\r\n              <input type=\"text\" data-ref=\"team-name\" />\r\n              <button type=\"submit\">추가하기</button>\r\n            </div>\r\n          </form>\r\n        </div>     \r\n      </div>\r\n    ` : '';\r\n    }\r\n    componentDidMount() {\r\n        if (!_store__WEBPACK_IMPORTED_MODULE_1__[\"teamStore\"].$state.openedAppendForm)\r\n            return;\r\n        const { $target } = this;\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"selectElement\"])('.modal-box', $target).addEventListener('click', event => {\r\n            const target = event.target;\r\n            if (target.closest('.modal-box')) {\r\n                event.stopPropagation();\r\n            }\r\n        });\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"selectElement\"])('input', $target).focus();\r\n    }\r\n    setEvent() {\r\n        this.addEvent('close', 'click', () => this.close());\r\n        this.addEvent('append', 'submit', e => {\r\n            e.preventDefault();\r\n            const teamName = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"selectElement\"])('input', e.target).value;\r\n            this.appendTeam(teamName);\r\n        });\r\n        this.addEvent('team-name', 'keyup', ({ key, target }) => {\r\n            if (key === 'Escape')\r\n                this.close();\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Team/TeamAppendForm.ts?");

/***/ }),

/***/ "./src/components/Team/TeamList.ts":
/*!*****************************************!*\
  !*** ./src/components/Team/TeamList.ts ***!
  \*****************************************/
/*! exports provided: TeamList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TeamList\", function() { return TeamList; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ \"./src/router/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n\r\n\r\n\r\n\r\nconst TeamList = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    template() {\r\n        const { teams } = _store__WEBPACK_IMPORTED_MODULE_1__[\"teamStore\"].$state;\r\n        return `\r\n      ${teams.map(({ _id, name }) => `\r\n        <div class=\"team-card-container\" data-id=\"${_id}\">\r\n          <a href=\"#!\" class=\"card\" data-ref=\"view\">\r\n            <div class=\"card-title\">\r\n              ${name}\r\n            </div>\r\n          </a>\r\n        </div>\r\n      `).join('')}\r\n      \r\n      <div class=\"add-team-button-container\">\r\n        <button id=\"add-team-button\" class=\"ripple\" data-ref=\"add\">\r\n          <span class=\"material-icons\">add</span>\r\n        </button>\r\n      </div>\r\n    `;\r\n    }\r\n    setEvent() {\r\n        this.addEvent('view', 'click', event => {\r\n            event.preventDefault();\r\n            const id = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"selectParent\"])('[data-id]', event.target).dataset.id;\r\n            _router__WEBPACK_IMPORTED_MODULE_2__[\"todoRouter\"].push(`/kanban?id=${id}`);\r\n        });\r\n        this.addEvent('add', 'click', () => {\r\n            _store__WEBPACK_IMPORTED_MODULE_1__[\"teamStore\"].commit(_store__WEBPACK_IMPORTED_MODULE_1__[\"SET_OPENED_TEAM_APPEND_FORM\"], true);\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Team/TeamList.ts?");

/***/ }),

/***/ "./src/components/Todo/TodoHeader.ts":
/*!*******************************************!*\
  !*** ./src/components/Todo/TodoHeader.ts ***!
  \*******************************************/
/*! exports provided: TodoHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoHeader\", function() { return TodoHeader; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _store_todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/todoOfTeamStore */ \"./src/store/todoOfTeamStore.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n\r\n\r\n\r\nconst TodoHeader = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    template() {\r\n        const { name } = _store_todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$state;\r\n        return name ? `\r\n        <span><strong>${name}</strong>'s Todo List</span>\r\n        <button type=\"button\" data-ref=\"removeMember\">⌫</button>\r\n    ` : '';\r\n    }\r\n    setEvent() {\r\n        this.addEvent('removeMember', 'click', () => {\r\n            if (!confirm('현재 팀을 삭제하시겠습니까?'))\r\n                return;\r\n            _store__WEBPACK_IMPORTED_MODULE_2__[\"teamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_2__[\"REMOVE_TEAM\"], _store_todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$state._id);\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Todo/TodoHeader.ts?");

/***/ }),

/***/ "./src/components/Todo/TodoItemAppender.ts":
/*!*************************************************!*\
  !*** ./src/components/Todo/TodoItemAppender.ts ***!
  \*************************************************/
/*! exports provided: TodoItemAppender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoItemAppender\", function() { return TodoItemAppender; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _store_todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/todoOfTeamStore */ \"./src/store/todoOfTeamStore.ts\");\n\r\n\r\nconst TodoItemAppender = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    template() {\r\n        return `\r\n      <input class=\"new-todo\" placeholder=\"할 일을 입력해주세요.\" data-ref=\"appender\" autofocus />\r\n    `;\r\n    }\r\n    setEvent() {\r\n        this.addEvent('appender', 'keyup', ({ key, target }) => {\r\n            if (key === 'Enter') {\r\n                _store_todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].dispatch(_store_todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"ADD_ITEM\"], {\r\n                    memberId: this.$props.id,\r\n                    contents: target.value\r\n                });\r\n                target.value = '';\r\n            }\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Todo/TodoItemAppender.ts?");

/***/ }),

/***/ "./src/components/Todo/TodoList.ts":
/*!*****************************************!*\
  !*** ./src/components/Todo/TodoList.ts ***!
  \*****************************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _TodoListFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoListFooter */ \"./src/components/Todo/TodoListFooter.ts\");\n/* harmony import */ var _TodoItemAppender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoItemAppender */ \"./src/components/Todo/TodoItemAppender.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst sortByPriority = (priority) => priority === \"FIRST\" /* FIRST */ ? 1 :\r\n    priority === \"SECOND\" /* SECOND */ ? 2 : 3;\r\nconst TodoList = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    get id() {\r\n        return this.$props.id;\r\n    }\r\n    get member() {\r\n        return _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$state.members[this.id];\r\n    }\r\n    get filterType() {\r\n        return _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$state.filterType[this.id];\r\n    }\r\n    get filteredItems() {\r\n        const memberOfItem = _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$getters.membersByFilteredTodoList;\r\n        const items = memberOfItem[this.id];\r\n        if (this.filterType === \"priority\" /* PRIORITY */) {\r\n            items.sort((a, b) => sortByPriority(a.priority) - sortByPriority(b.priority));\r\n        }\r\n        return items;\r\n    }\r\n    isEditingOf(id) {\r\n        return _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$state.editing === id;\r\n    }\r\n    toggle(itemId) {\r\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_ITEM\"], { memberId: this.id, itemId });\r\n    }\r\n    remove(itemId) {\r\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_ITEM\"], { memberId: this.id, itemId });\r\n    }\r\n    removeMember() {\r\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_TEAM_MEMBER\"], this.id);\r\n    }\r\n    editing(itemId) {\r\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].commit(_store__WEBPACK_IMPORTED_MODULE_1__[\"SET_EDITING\"], itemId);\r\n    }\r\n    edited(itemId, contents) {\r\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_1__[\"UPDATE_ITEM\"], { memberId: this.id, itemId, contents });\r\n        this.cancel();\r\n    }\r\n    cancel() {\r\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].commit(_store__WEBPACK_IMPORTED_MODULE_1__[\"SET_EDITING\"], null);\r\n    }\r\n    updatePriority(itemId, priority) {\r\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_1__[\"UPDATE_ITEM_PRIORITY\"], { memberId: this.id, itemId, priority });\r\n    }\r\n    componentInit() {\r\n        const props = { id: this.id };\r\n        this.$children = {\r\n            TodoItemAppender: { constructor: _TodoItemAppender__WEBPACK_IMPORTED_MODULE_3__[\"TodoItemAppender\"], props },\r\n            TodoListFooter: { constructor: _TodoListFooter__WEBPACK_IMPORTED_MODULE_2__[\"TodoListFooter\"], props },\r\n        };\r\n    }\r\n    template() {\r\n        return `\r\n      <h2>\r\n        <span><strong>${this.member.name}</strong>'s Todo List</span>\r\n        <button type=\"button\" data-ref=\"removeMember\">⌫</button>\r\n      </h2>\r\n      <div class=\"todoapp\">\r\n        <section data-component=\"TodoItemAppender\" id=\"todo-item-appender\" class=\"input-container\"></section>\r\n        <section class=\"main\">\r\n          <ul class=\"todo-list\">\r\n            ${this.filteredItems.map(({ _id, isCompleted, priority, contents }) => `\r\n              <li class=\"todo-list-item ${isCompleted ? 'completed' : ''} ${this.isEditingOf(_id) ? 'editing' : ''}\" data-id=\"${_id}\">\r\n                <div class=\"view\">\r\n                  <input class=\"toggle\" type=\"checkbox\" data-ref=\"toggle\" ${isCompleted ? 'checked' : ''} />\r\n                  <label class=\"label\" data-ref=\"editing\">\r\n                    <div class=\"chip-container\">\r\n                      ${priority === \"NONE\" /* NONE */ ? `\r\n                        <select class=\"chip select\" data-ref=\"priority\">\r\n                          <option value=\"${\"NONE\" /* NONE */}\" selected>순위</option>\r\n                          <option value=\"${\"FIRST\" /* FIRST */}\">1순위</option>\r\n                          <option value=\"${\"SECOND\" /* SECOND */}\">2순위</option>\r\n                        </select>` : `\r\n                        <span class=\"chip ${Object(_constants__WEBPACK_IMPORTED_MODULE_4__[\"getPriorityChip\"])(priority)}\">\r\n                          ${priority === \"FIRST\" /* FIRST */ ? 1 : 2}\r\n                          순위\r\n                        </span>                        \r\n                      `}\r\n                    </div>\r\n                    ${contents}\r\n                  </label>\r\n                  <button class=\"destroy\" data-ref=\"delete\"></button>\r\n                </div>\r\n                <input class=\"edit\" value=\"${contents}\" data-ref=\"edited\" />\r\n              </li>\r\n            `).join('')}\r\n          </ul>\r\n        </section>\r\n        <div data-component=\"TodoListFooter\" id=\"todo-list-footer\" class=\"count-container\"></div>\r\n      </div>\r\n    `;\r\n    }\r\n    setEvent() {\r\n        const getId = (target) => Object(_utils__WEBPACK_IMPORTED_MODULE_5__[\"selectParent\"])('[data-id]', target).dataset.id;\r\n        this.addEvent('toggle', 'change', ({ target }) => {\r\n            this.toggle(getId(target));\r\n        });\r\n        this.addEvent('delete', 'click', ({ target }) => {\r\n            this.remove(getId(target));\r\n        });\r\n        this.addEvent('editing', 'dblclick', ({ target }) => {\r\n            this.editing(getId(target));\r\n        });\r\n        this.addEvent('edited', 'keypress', ({ key, target }) => {\r\n            if (key === 'Enter')\r\n                this.edited(getId(target), target.value);\r\n        });\r\n        this.addEvent('edited', 'keyup', e => {\r\n            const { key } = e;\r\n            if (key === 'Escape')\r\n                this.cancel();\r\n        });\r\n        this.addEvent('removeMember', 'click', () => {\r\n            if (!confirm('정말로 삭제하시겠습니까?'))\r\n                return;\r\n            this.removeMember();\r\n        });\r\n        this.addEvent('priority', 'change', ({ target }) => {\r\n            this.updatePriority(getId(target), target.value);\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Todo/TodoList.ts?");

/***/ }),

/***/ "./src/components/Todo/TodoListFooter.ts":
/*!***********************************************!*\
  !*** ./src/components/Todo/TodoListFooter.ts ***!
  \***********************************************/
/*! exports provided: TodoListFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListFooter\", function() { return TodoListFooter; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n\r\n\r\nconst filterButtons = {\r\n    [\"all\" /* ALL */]: '전체보기',\r\n    [\"priority\" /* PRIORITY */]: '우선 순위',\r\n    [\"active\" /* ACTIVE */]: '해야할 일',\r\n    [\"completed\" /* COMPLETED */]: '완료한 일',\r\n};\r\nconst TodoListFooter = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    get id() {\r\n        return this.$props.id;\r\n    }\r\n    get filterType() {\r\n        return _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$state.filterType[this.id];\r\n    }\r\n    get filteredCount() {\r\n        const memberOfItem = _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$getters.membersByFilteredTodoList;\r\n        return memberOfItem[this.id].length;\r\n    }\r\n    template() {\r\n        return `\r\n      <span class=\"todo-count\">총 <strong>${this.filteredCount}</strong> 개</span>\r\n      <ul class=\"filters\">\r\n        ${Object.entries(filterButtons).map(([type, text]) => `\r\n          <li>\r\n            <a href=\"#\" ${this.filterType === type ? ' class=\"selected\"' : ''} data-filter-type=\"${type}\" data-ref=\"filter\">${text}</a>\r\n          </li>\r\n        `).join('')}\r\n      </ul>\r\n      <button class=\"clear-completed\" data-ref=\"delete-all\">모두 삭제</button>\r\n    `;\r\n    }\r\n    setEvent() {\r\n        this.addEvent('filter', 'click', event => {\r\n            event.preventDefault();\r\n            _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].commit(_store__WEBPACK_IMPORTED_MODULE_1__[\"SET_FILTER_TYPE\"], {\r\n                memberId: this.id,\r\n                filterType: event.target.dataset.filterType\r\n            });\r\n        });\r\n        this.addEvent('delete-all', 'click', event => {\r\n            event.preventDefault();\r\n            _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_ALL_ITEM\"], this.id);\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Todo/TodoListFooter.ts?");

/***/ }),

/***/ "./src/components/Todo/TodoListOfTeam.ts":
/*!***********************************************!*\
  !*** ./src/components/Todo/TodoListOfTeam.ts ***!
  \***********************************************/
/*! exports provided: TodoListOfTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoListOfTeam\", function() { return TodoListOfTeam; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _TodoMemberAppender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoMemberAppender */ \"./src/components/Todo/TodoMemberAppender.ts\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/components/Todo/TodoList.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n\r\n\r\n\r\n\r\nconst TodoListOfTeam = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    get ids() {\r\n        return Object.keys(_store__WEBPACK_IMPORTED_MODULE_3__[\"todoOfTeamStore\"].$state.members);\r\n    }\r\n    componentInit() {\r\n        this.$children = {\r\n            TodoMemberAppender: { constructor: _TodoMemberAppender__WEBPACK_IMPORTED_MODULE_1__[\"TodoMemberAppender\"] },\r\n            ...this.ids.reduce((obj, id) => {\r\n                obj[`TodoList-${id}`] = {\r\n                    constructor: _TodoList__WEBPACK_IMPORTED_MODULE_2__[\"TodoList\"],\r\n                    props: { id },\r\n                };\r\n                return obj;\r\n            }, {})\r\n        };\r\n    }\r\n    template() {\r\n        return `\r\n      ${this.ids.map(id => `\r\n        <li data-component=\"TodoList-${id}\" class=\"todoapp-container\"></li>\r\n      `).join('')}\r\n      <li id=\"todo-member-appender\" data-component=\"TodoMemberAppender\" class=\"add-user-button-container\"></li>\r\n    `;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Todo/TodoListOfTeam.ts?");

/***/ }),

/***/ "./src/components/Todo/TodoMemberAppendForm.ts":
/*!*****************************************************!*\
  !*** ./src/components/Todo/TodoMemberAppendForm.ts ***!
  \*****************************************************/
/*! exports provided: TodoMemberAppendForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoMemberAppendForm\", function() { return TodoMemberAppendForm; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n\r\n\r\n\r\nconst TodoMemberAppendForm = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    close() {\r\n        _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].commit(_store__WEBPACK_IMPORTED_MODULE_1__[\"SET_OPENED_MEMBER_APPEND_FORM\"], false);\r\n    }\r\n    async appendMember(name) {\r\n        try {\r\n            await _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TEAM_MEMBER\"], name);\r\n            this.close();\r\n        }\r\n        catch (e) {\r\n            console.error(e);\r\n        }\r\n    }\r\n    template() {\r\n        const { openedAppendForm } = _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$state;\r\n        return openedAppendForm ? `\r\n      <div class=\"modal\" data-ref=\"close\">\r\n        <div class=\"modal-box\">\r\n          <button type=\"button\" class=\"modal-close-button\" data-ref=\"close\">×</button>\r\n          <h3 class=\"modal-title\">멤버 추가하기</h3>\r\n          <form action=\"\" data-ref=\"append\">\r\n            <div class=\"appendForm\">\r\n              <input type=\"text\" data-ref=\"member-name\" />\r\n              <button type=\"submit\">추가하기</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    ` : '';\r\n    }\r\n    componentDidMount() {\r\n        if (!_store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].$state.openedAppendForm)\r\n            return;\r\n        const { $target } = this;\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"selectElement\"])('.modal-box', $target).addEventListener('click', e => e.stopPropagation());\r\n        Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"selectElement\"])('input', $target).focus();\r\n    }\r\n    setEvent() {\r\n        this.addEvent('close', 'click', () => this.close());\r\n        this.addEvent('append', 'submit', e => {\r\n            e.preventDefault();\r\n            const memberName = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"selectElement\"])('input', e.target).value;\r\n            this.appendMember(memberName);\r\n        });\r\n        this.addEvent('member-name', 'keyup', ({ key, target }) => {\r\n            if (key === 'Escape')\r\n                this.close();\r\n        });\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Todo/TodoMemberAppendForm.ts?");

/***/ }),

/***/ "./src/components/Todo/TodoMemberAppender.ts":
/*!***************************************************!*\
  !*** ./src/components/Todo/TodoMemberAppender.ts ***!
  \***************************************************/
/*! exports provided: TodoMemberAppender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoMemberAppender\", function() { return TodoMemberAppender; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n\r\n\r\nconst TodoMemberAppender = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    template() {\r\n        return `\r\n      <button id=\"add-user-button\" class=\"ripple\" data-ref=\"append\">\r\n        <span class=\"material-icons\">add</span>\r\n      </button>\r\n    `;\r\n    }\r\n    setEvent() {\r\n        this.addEvent('append', 'click', () => _store__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"].commit(_store__WEBPACK_IMPORTED_MODULE_1__[\"SET_OPENED_MEMBER_APPEND_FORM\"], true));\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/components/Todo/TodoMemberAppender.ts?");

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/*! exports provided: getPriorityChip, ONE_FRAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPriorityChip\", function() { return getPriorityChip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ONE_FRAME\", function() { return ONE_FRAME; });\nconst getPriorityChip = (priority) => {\r\n    return priority === \"FIRST\" /* FIRST */ ? 'primary' :\r\n        priority === \"SECOND\" /* SECOND */ ? 'secondary' :\r\n            priority === \"NONE\" /* NONE */ ? 'none' :\r\n                '';\r\n};\r\nconst ONE_FRAME = 1000 / 60;\r\n\n\n//# sourceURL=webpack:///./src/constants/index.ts?");

/***/ }),

/***/ "./src/router/index.ts":
/*!*****************************!*\
  !*** ./src/router/index.ts ***!
  \*****************************/
/*! exports provided: todoRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoRouter */ \"./src/router/todoRouter.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"todoRouter\", function() { return _todoRouter__WEBPACK_IMPORTED_MODULE_0__[\"todoRouter\"]; });\n\n\r\n\n\n//# sourceURL=webpack:///./src/router/index.ts?");

/***/ }),

/***/ "./src/router/todoRouter.ts":
/*!**********************************!*\
  !*** ./src/router/todoRouter.ts ***!
  \**********************************/
/*! exports provided: todoRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoRouter\", function() { return todoRouter; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views */ \"./src/views/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n\r\n\r\n\r\nconst $app = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"selectElement\"])('#app');\r\nconst todoRouter = new _core__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]((uri) => {\r\n    if (uri.includes('kanban')) {\r\n        return new _views__WEBPACK_IMPORTED_MODULE_1__[\"Kanban\"]($app);\r\n    }\r\n    return new _views__WEBPACK_IMPORTED_MODULE_1__[\"Team\"]($app);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/router/todoRouter.ts?");

/***/ }),

/***/ "./src/services/TeamService.ts":
/*!*************************************!*\
  !*** ./src/services/TeamService.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/adapter/todoAdapter */ \"./src/adapter/todoAdapter.ts\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object.freeze({\r\n    fetchTeams() {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].get('/teams');\r\n    },\r\n    fetchTeam(teamId) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].get(`/teams/${teamId}`);\r\n    },\r\n    addTeam(name) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].post(`/teams`, { name });\r\n    },\r\n    addTeamMember(teamId, name) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].post(`/teams/${teamId}/members`, { name });\r\n    },\r\n    deleteTeam(teamId) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].delete(`/teams/${teamId}`);\r\n    },\r\n    deleteTeamMember(teamId, memberId) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].delete(`/teams/${teamId}/members/${memberId}`);\r\n    },\r\n}));\r\n\n\n//# sourceURL=webpack:///./src/services/TeamService.ts?");

/***/ }),

/***/ "./src/services/TodoService.ts":
/*!*************************************!*\
  !*** ./src/services/TodoService.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/adapter/todoAdapter */ \"./src/adapter/todoAdapter.ts\");\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object.freeze({\r\n    fetchTodoList({ teamId, memberId }) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].get(`/teams/${teamId}/members/${memberId}`);\r\n    },\r\n    addItem({ teamId, memberId, contents }) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].post(`/teams/${teamId}/members/${memberId}/items`, { contents });\r\n    },\r\n    toggleItem({ teamId, memberId, itemId }) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].put(`/teams/${teamId}/members/${memberId}/items/${itemId}/toggle`);\r\n    },\r\n    updateItem({ teamId, memberId, itemId, contents }) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].put(`/teams/${teamId}/members/${memberId}/items/${itemId}`, { contents });\r\n    },\r\n    updateItemPriority({ teamId, memberId, itemId, priority }) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].put(`/teams/${teamId}/membersZ/${memberId}/items/${itemId}/priority`, { priority });\r\n    },\r\n    deleteItem({ teamId, memberId, itemId }) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].delete(`/teams/${teamId}/members/${memberId}/items/${itemId}`);\r\n    },\r\n    deleteAllItem({ teamId, memberId }) {\r\n        return _adapter_todoAdapter__WEBPACK_IMPORTED_MODULE_0__[\"todoAdapterClient\"].delete(`/teams/${teamId}/members/${memberId}/items`);\r\n    },\r\n}));\r\n\n\n//# sourceURL=webpack:///./src/services/TodoService.ts?");

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! exports provided: TeamService, TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TeamService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeamService */ \"./src/services/TeamService.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TeamService\", function() { return _TeamService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _TodoService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoService */ \"./src/services/TodoService.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TodoService\", function() { return _TodoService__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/services/index.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: SET_TEAMS, SET_OPENED_TEAM_APPEND_FORM, FETCH_TEAMS, ADD_TEAM, REMOVE_TEAM, teamStore, INIT, SET_TODO_LIST, SET_EDITING, SET_FILTER_TYPE, SET_OPENED_MEMBER_APPEND_FORM, FETCH_TEAM, FETCH_TODO_LIST, ADD_ITEM, ADD_TEAM_MEMBER, TOGGLE_ITEM, UPDATE_ITEM, UPDATE_ITEM_PRIORITY, DELETE_ITEM, DELETE_ALL_ITEM, DELETE_TEAM_MEMBER, todoOfTeamStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _teamStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teamStore */ \"./src/store/teamStore.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_TEAMS\", function() { return _teamStore__WEBPACK_IMPORTED_MODULE_0__[\"SET_TEAMS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_OPENED_TEAM_APPEND_FORM\", function() { return _teamStore__WEBPACK_IMPORTED_MODULE_0__[\"SET_OPENED_TEAM_APPEND_FORM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FETCH_TEAMS\", function() { return _teamStore__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_TEAMS\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ADD_TEAM\", function() { return _teamStore__WEBPACK_IMPORTED_MODULE_0__[\"ADD_TEAM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_TEAM\", function() { return _teamStore__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE_TEAM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"teamStore\", function() { return _teamStore__WEBPACK_IMPORTED_MODULE_0__[\"teamStore\"]; });\n\n/* harmony import */ var _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoOfTeamStore */ \"./src/store/todoOfTeamStore.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"INIT\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"INIT\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_TODO_LIST\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"SET_TODO_LIST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_EDITING\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"SET_EDITING\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_FILTER_TYPE\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"SET_FILTER_TYPE\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SET_OPENED_MEMBER_APPEND_FORM\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"SET_OPENED_MEMBER_APPEND_FORM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FETCH_TEAM\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_TEAM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FETCH_TODO_LIST\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_TODO_LIST\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ADD_ITEM\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"ADD_ITEM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ADD_TEAM_MEMBER\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"ADD_TEAM_MEMBER\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TOGGLE_ITEM\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"TOGGLE_ITEM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_ITEM\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"UPDATE_ITEM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_ITEM_PRIORITY\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"UPDATE_ITEM_PRIORITY\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DELETE_ITEM\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_ITEM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DELETE_ALL_ITEM\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_ALL_ITEM\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DELETE_TEAM_MEMBER\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_TEAM_MEMBER\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"todoOfTeamStore\", function() { return _todoOfTeamStore__WEBPACK_IMPORTED_MODULE_1__[\"todoOfTeamStore\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/store/index.ts?");

/***/ }),

/***/ "./src/store/teamStore.ts":
/*!********************************!*\
  !*** ./src/store/teamStore.ts ***!
  \********************************/
/*! exports provided: SET_TEAMS, SET_OPENED_TEAM_APPEND_FORM, FETCH_TEAMS, ADD_TEAM, REMOVE_TEAM, teamStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_TEAMS\", function() { return SET_TEAMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_OPENED_TEAM_APPEND_FORM\", function() { return SET_OPENED_TEAM_APPEND_FORM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_TEAMS\", function() { return FETCH_TEAMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TEAM\", function() { return ADD_TEAM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_TEAM\", function() { return REMOVE_TEAM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teamStore\", function() { return teamStore; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ \"./src/services/index.ts\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ \"./src/router/index.ts\");\n\r\n\r\n\r\nconst SET_TEAMS = 'SET_TEAMS';\r\nconst SET_OPENED_TEAM_APPEND_FORM = 'SET_OPENED_TEAM_APPEND_FORM';\r\nconst FETCH_TEAMS = 'FETCH_TEAMS';\r\nconst ADD_TEAM = 'ADD_TEAM';\r\nconst REMOVE_TEAM = 'REMOVE_TEAM';\r\nconst teamStore = new _core__WEBPACK_IMPORTED_MODULE_0__[\"Store\"]({\r\n    state: {\r\n        teams: [],\r\n        openedAppendForm: false,\r\n    },\r\n    mutations: {\r\n        [SET_TEAMS](state, teams) {\r\n            state.teams = teams;\r\n        },\r\n        [SET_OPENED_TEAM_APPEND_FORM](state, openedAppendForm) {\r\n            state.openedAppendForm = openedAppendForm;\r\n        },\r\n    },\r\n    actions: {\r\n        async [FETCH_TEAMS]({ commit }) {\r\n            commit(SET_TEAMS, await _services__WEBPACK_IMPORTED_MODULE_1__[\"TeamService\"].fetchTeams());\r\n        },\r\n        async [ADD_TEAM]({ dispatch }, name) {\r\n            await _services__WEBPACK_IMPORTED_MODULE_1__[\"TeamService\"].addTeam(name);\r\n            return dispatch(FETCH_TEAMS);\r\n        },\r\n        async [REMOVE_TEAM]({ dispatch }, teamId) {\r\n            await _services__WEBPACK_IMPORTED_MODULE_1__[\"TeamService\"].deleteTeam(teamId);\r\n            alert('삭제되었습니다.');\r\n            _router__WEBPACK_IMPORTED_MODULE_2__[\"todoRouter\"].push('/');\r\n        },\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/store/teamStore.ts?");

/***/ }),

/***/ "./src/store/todoOfTeamStore.ts":
/*!**************************************!*\
  !*** ./src/store/todoOfTeamStore.ts ***!
  \**************************************/
/*! exports provided: INIT, SET_TODO_LIST, SET_EDITING, SET_FILTER_TYPE, SET_OPENED_MEMBER_APPEND_FORM, FETCH_TEAM, FETCH_TODO_LIST, ADD_ITEM, ADD_TEAM_MEMBER, TOGGLE_ITEM, UPDATE_ITEM, UPDATE_ITEM_PRIORITY, DELETE_ITEM, DELETE_ALL_ITEM, DELETE_TEAM_MEMBER, todoOfTeamStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"INIT\", function() { return INIT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_TODO_LIST\", function() { return SET_TODO_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_EDITING\", function() { return SET_EDITING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_FILTER_TYPE\", function() { return SET_FILTER_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_OPENED_MEMBER_APPEND_FORM\", function() { return SET_OPENED_MEMBER_APPEND_FORM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_TEAM\", function() { return FETCH_TEAM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_TODO_LIST\", function() { return FETCH_TODO_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_ITEM\", function() { return ADD_ITEM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_TEAM_MEMBER\", function() { return ADD_TEAM_MEMBER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOGGLE_ITEM\", function() { return TOGGLE_ITEM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_ITEM\", function() { return UPDATE_ITEM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_ITEM_PRIORITY\", function() { return UPDATE_ITEM_PRIORITY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_ITEM\", function() { return DELETE_ITEM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_ALL_ITEM\", function() { return DELETE_ALL_ITEM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_TEAM_MEMBER\", function() { return DELETE_TEAM_MEMBER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoOfTeamStore\", function() { return todoOfTeamStore; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ \"./src/services/index.ts\");\n\r\n\r\nconst INIT = 'INIT';\r\nconst SET_TODO_LIST = 'SET_TODO_LIST';\r\nconst SET_EDITING = 'SET_EDITING';\r\nconst SET_FILTER_TYPE = 'SET_FILTER_TYPE';\r\nconst SET_OPENED_MEMBER_APPEND_FORM = 'SET_OPENED_MEMBER_APPEND_FORM';\r\nconst FETCH_TEAM = 'FETCH_TEAM';\r\nconst FETCH_TODO_LIST = 'FETCH_TODO_LIST';\r\nconst ADD_ITEM = 'ADD_ITEM';\r\nconst ADD_TEAM_MEMBER = 'ADD_TEAM_MEMBER';\r\nconst TOGGLE_ITEM = 'TOGGLE_ITEM';\r\nconst UPDATE_ITEM = 'UPDATE_ITEM';\r\nconst UPDATE_ITEM_PRIORITY = 'UPDATE_ITEM_PRIORITY';\r\nconst DELETE_ITEM = 'DELETE_ITEM';\r\nconst DELETE_ALL_ITEM = 'DELETE_ALL_ITEM';\r\nconst DELETE_TEAM_MEMBER = 'DELETE_TEAM_MEMBER';\r\nconst todoOfTeamStore = new _core__WEBPACK_IMPORTED_MODULE_0__[\"Store\"]({\r\n    state: {\r\n        _id: '',\r\n        name: '',\r\n        members: {},\r\n        filterType: {},\r\n        editing: '',\r\n        openedAppendForm: false,\r\n    },\r\n    mutations: {\r\n        [INIT](state, { _id, name, members }) {\r\n            state._id = _id;\r\n            state.name = name;\r\n            const memberMap = {};\r\n            const filterMap = {};\r\n            for (const member of members) {\r\n                memberMap[member._id] = {\r\n                    ...member,\r\n                    todoList: (member.todoList || []).filter(v => v !== null)\r\n                };\r\n                filterMap[member._id] = \"all\" /* ALL */;\r\n            }\r\n            state.members = Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"observable\"])(memberMap);\r\n            state.filterType = Object(_core__WEBPACK_IMPORTED_MODULE_0__[\"observable\"])(filterMap);\r\n        },\r\n        [SET_TODO_LIST](state, { memberId, todoList }) {\r\n            state.members[memberId].todoList = todoList;\r\n        },\r\n        [SET_EDITING](state, editing) {\r\n            state.editing = editing;\r\n        },\r\n        [SET_FILTER_TYPE](state, { memberId, filterType }) {\r\n            state.filterType[memberId] = filterType;\r\n        },\r\n        [SET_OPENED_MEMBER_APPEND_FORM](state, openedAppendForm) {\r\n            state.openedAppendForm = openedAppendForm;\r\n        },\r\n    },\r\n    getters: {\r\n        membersByFilteredTodoList: ({ members, filterType }) => Object.entries(members)\r\n            .reduce((temp, [id, { todoList }]) => ({\r\n            ...temp,\r\n            [id]: todoList.filter(({ isCompleted }) => (filterType[id] === \"all\" /* ALL */) ||\r\n                (filterType[id] === \"priority\" /* PRIORITY */) ||\r\n                (filterType[id] === \"completed\" /* COMPLETED */ && isCompleted) ||\r\n                (filterType[id] === \"active\" /* ACTIVE */ && !isCompleted))\r\n        }), {}),\r\n    },\r\n    actions: {\r\n        async [FETCH_TEAM]({ commit }, teamId) {\r\n            commit(INIT, await _services__WEBPACK_IMPORTED_MODULE_1__[\"TeamService\"].fetchTeam(teamId));\r\n        },\r\n        async [FETCH_TODO_LIST]({ commit, state: { _id: teamId } }, memberId) {\r\n            const { todoList } = await _services__WEBPACK_IMPORTED_MODULE_1__[\"TodoService\"].fetchTodoList({ teamId, memberId });\r\n            commit(SET_TODO_LIST, { memberId, todoList: (todoList || []).filter((v) => v !== null) });\r\n        },\r\n        async [ADD_ITEM]({ dispatch, state: { _id: teamId } }, { memberId, contents }) {\r\n            await _services__WEBPACK_IMPORTED_MODULE_1__[\"TodoService\"].addItem({ teamId, memberId, contents });\r\n            return dispatch(FETCH_TODO_LIST, memberId);\r\n        },\r\n        async [TOGGLE_ITEM]({ dispatch, state: { _id: teamId } }, { memberId, itemId }) {\r\n            await _services__WEBPACK_IMPORTED_MODULE_1__[\"TodoService\"].toggleItem({ teamId, memberId, itemId });\r\n            return dispatch(FETCH_TODO_LIST, memberId);\r\n        },\r\n        async [UPDATE_ITEM]({ dispatch, state: { _id: teamId } }, { memberId, itemId, contents }) {\r\n            await _services__WEBPACK_IMPORTED_MODULE_1__[\"TodoService\"].updateItem({ teamId, memberId, itemId, contents });\r\n            return dispatch(FETCH_TODO_LIST, memberId);\r\n        },\r\n        async [UPDATE_ITEM_PRIORITY]({ dispatch, state: { _id: teamId } }, { memberId, itemId, priority }) {\r\n            await _services__WEBPACK_IMPORTED_MODULE_1__[\"TodoService\"].updateItemPriority({ teamId, memberId, itemId, priority });\r\n            return dispatch(FETCH_TODO_LIST, memberId);\r\n        },\r\n        async [DELETE_ITEM]({ dispatch, state: { _id: teamId } }, { memberId, itemId }) {\r\n            await _services__WEBPACK_IMPORTED_MODULE_1__[\"TodoService\"].deleteItem({ teamId, memberId, itemId });\r\n            return dispatch(FETCH_TODO_LIST, memberId);\r\n        },\r\n        async [DELETE_ALL_ITEM]({ dispatch, state: { _id: teamId } }, memberId) {\r\n            await _services__WEBPACK_IMPORTED_MODULE_1__[\"TodoService\"].deleteAllItem({ teamId, memberId });\r\n            return dispatch(FETCH_TODO_LIST, memberId);\r\n        },\r\n        async [ADD_TEAM_MEMBER]({ commit, state: { _id: teamId } }, name) {\r\n            return commit(INIT, await _services__WEBPACK_IMPORTED_MODULE_1__[\"TeamService\"].addTeamMember(teamId, name));\r\n        },\r\n        async [DELETE_TEAM_MEMBER]({ dispatch, state: { _id: teamId } }, memberId) {\r\n            await _services__WEBPACK_IMPORTED_MODULE_1__[\"TeamService\"].deleteTeamMember(teamId, memberId);\r\n            return dispatch(FETCH_TEAM, teamId);\r\n        },\r\n    },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/store/todoOfTeamStore.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: selectElement, selectAllElement, selectParent, debounceOneFrame, lazyFrame, addEventBubblingListener, parseQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectElement\", function() { return selectElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectAllElement\", function() { return selectAllElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectParent\", function() { return selectParent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"debounceOneFrame\", function() { return debounceOneFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lazyFrame\", function() { return lazyFrame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventBubblingListener\", function() { return addEventBubblingListener; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseQuery\", function() { return parseQuery; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants */ \"./src/constants/index.ts\");\n\r\nconst selectElement = (selector, parent = document) => parent.querySelector(selector);\r\nconst selectAllElement = (selector, parent = document) => [...parent.querySelectorAll(selector)];\r\nconst selectParent = (selector, target) => target.closest(selector);\r\nconst debounceOneFrame = (callback) => {\r\n    let timer = -1;\r\n    return (props) => {\r\n        cancelAnimationFrame(timer);\r\n        timer = requestAnimationFrame(() => callback(props));\r\n    };\r\n};\r\nconst lazyFrame = () => new Promise(resolve => setTimeout(resolve, _constants__WEBPACK_IMPORTED_MODULE_0__[\"ONE_FRAME\"] * 10));\r\nconst addEventBubblingListener = (parent, childSelector, eventType, callback) => {\r\n    const isTarget = (target) => selectAllElement(childSelector).includes(target) ||\r\n        selectParent(childSelector, target);\r\n    parent.addEventListener(eventType, (event) => {\r\n        const e = event;\r\n        if (!isTarget(e.target))\r\n            return;\r\n        callback(e);\r\n    });\r\n};\r\nconst parseQuery = (uri) => {\r\n    const queryString = uri.split('?')[1] || '';\r\n    return queryString.split('&').reduce((query, str) => {\r\n        const [key, value] = str.split(\"=\");\r\n        if (key && value)\r\n            query[key] = value;\r\n        return query;\r\n    }, {});\r\n};\r\n\n\n//# sourceURL=webpack:///./src/utils/index.ts?");

/***/ }),

/***/ "./src/views/Kanban.ts":
/*!*****************************!*\
  !*** ./src/views/Kanban.ts ***!
  \*****************************/
/*! exports provided: Kanban */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Kanban\", function() { return Kanban; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _components_Todo_TodoHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Todo/TodoHeader */ \"./src/components/Todo/TodoHeader.ts\");\n/* harmony import */ var _router_todoRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router/todoRouter */ \"./src/router/todoRouter.ts\");\n/* harmony import */ var _components_Todo_TodoListOfTeam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Todo/TodoListOfTeam */ \"./src/components/Todo/TodoListOfTeam.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Todo_TodoMemberAppendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Todo/TodoMemberAppendForm */ \"./src/components/Todo/TodoMemberAppendForm.ts\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst Kanban = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    async componentInit() {\r\n        await _store__WEBPACK_IMPORTED_MODULE_4__[\"todoOfTeamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_4__[\"FETCH_TEAM\"], _router_todoRouter__WEBPACK_IMPORTED_MODULE_2__[\"todoRouter\"].$query.id);\r\n        this.$children = {\r\n            TodoHeader: { constructor: _components_Todo_TodoHeader__WEBPACK_IMPORTED_MODULE_1__[\"TodoHeader\"] },\r\n            TodoListOfTeam: { constructor: _components_Todo_TodoListOfTeam__WEBPACK_IMPORTED_MODULE_3__[\"TodoListOfTeam\"] },\r\n            TodoMemberAppendForm: { constructor: _components_Todo_TodoMemberAppendForm__WEBPACK_IMPORTED_MODULE_5__[\"TodoMemberAppendForm\"] },\r\n        };\r\n    }\r\n    template() {\r\n        return `\r\n      <h1 data-component=\"TodoHeader\" id=\"user-title\"></h1>\r\n      <ul data-component=\"TodoListOfTeam\" id=\"todo-list-of-team\" class=\"todoapp-list-container flex-column-container\"></ul>\r\n      <div data-component=\"TodoMemberAppendForm\" id=\"member-append-form\"></div>\r\n    `;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/views/Kanban.ts?");

/***/ }),

/***/ "./src/views/Team.ts":
/*!***************************!*\
  !*** ./src/views/Team.ts ***!
  \***************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Team\", function() { return Team; });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/_core */ \"./src/_core/index.ts\");\n/* harmony import */ var _components_Team_TeamList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Team/TeamList */ \"./src/components/Team/TeamList.ts\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ \"./src/store/index.ts\");\n/* harmony import */ var _components_Team_TeamAppendForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Team/TeamAppendForm */ \"./src/components/Team/TeamAppendForm.ts\");\n\r\n\r\n\r\n\r\nconst Team = class extends _core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    async componentInit() {\r\n        await _store__WEBPACK_IMPORTED_MODULE_2__[\"teamStore\"].dispatch(_store__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_TEAMS\"]);\r\n        this.$children = {\r\n            TeamList: { constructor: _components_Team_TeamList__WEBPACK_IMPORTED_MODULE_1__[\"TeamList\"] },\r\n            TeamAppendForm: { constructor: _components_Team_TeamAppendForm__WEBPACK_IMPORTED_MODULE_3__[\"TeamAppendForm\"] },\r\n        };\r\n    }\r\n    template() {\r\n        return `\r\n      <h1 id=\"user-title\" data-username=\"eastjun\">\r\n        <span><strong>Team</strong>'s Todo Lists</span>\r\n      </h1>\r\n      <div data-component=\"TeamList\" class=\"team-list-container\"></div>\r\n      <div data-component=\"TeamAppendForm\" id=\"team-append-form\"></div>\r\n    `;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/views/Team.ts?");

/***/ }),

/***/ "./src/views/index.ts":
/*!****************************!*\
  !*** ./src/views/index.ts ***!
  \****************************/
/*! exports provided: Kanban, Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Kanban__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Kanban */ \"./src/views/Kanban.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Kanban\", function() { return _Kanban__WEBPACK_IMPORTED_MODULE_0__[\"Kanban\"]; });\n\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Team */ \"./src/views/Team.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Team\", function() { return _Team__WEBPACK_IMPORTED_MODULE_1__[\"Team\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/views/index.ts?");

/***/ })

/******/ });