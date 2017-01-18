/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _list = __webpack_require__(1);

	var _listHeader = __webpack_require__(2);

	var _listItem = __webpack_require__(3);

	var _list2 = __webpack_require__(4);

	__webpack_require__(5);

	angular.module("todoList", ['ngAnimate']).component('list', _list.ListComponent).component('listHead', _listHeader.HeadComponent).component('listItem', _listItem.ItemComponent).service('taskModel', _list2.TaskModel); /**
	                                                                                                                                                                                                                          * Created by IlyaLitvinov on 27.12.16.
	                                                                                                                                                                                                                          */

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by IlyaLitvinov on 30.12.16.
	 */
	var ListController = function () {
	    function ListController(taskModel) {
	        var _this = this;

	        _classCallCheck(this, ListController);

	        console.log("Main cntrl");

	        this.options = {
	            listHeader: "Passed from parent",
	            placeHolderText: "enter task"
	        };

	        this.tasks = [];

	        this.model = taskModel;

	        this.model.fetchTasks().then(function (resp) {
	            _this.tasks = resp.data;
	        });
	        this.testGreet = "Hello i am injected data to component";
	    }

	    _createClass(ListController, [{
	        key: "onAddItem",
	        value: function onAddItem(text) {
	            var _this2 = this;

	            this.model.addTask(text).then(function (resp) {
	                _this2.tasks.push(resp.data);
	            });
	        }
	    }, {
	        key: "removeItem",
	        value: function removeItem(id) {
	            var _this3 = this;

	            this.model.removeTask(id).then(function (resp) {
	                if (resp.status === 200) {
	                    _this3.tasks = _this3.tasks.filter(function (item) {
	                        return item.id !== id;
	                    });
	                }
	            });
	        }
	    }]);

	    return ListController;
	}();

	var ListComponent = {
	    template: "\n            <div class=\"app-container\">\n                <div class=\"todo_list\">\n                    <div class=\"todo_list__head row\">\n                       <list-head l-header=\"$ctrl.options.listHeader\"\n                       l-placeholder=\"$ctrl.options.placeholder\"\n                       add-item=\"$ctrl.onAddItem(text)\"></list-head>\n                    </div>\n                    <div class=\"todo_list__section row\">\n                         <list-item class=\"list__item\"\n                            ng-repeat=\"task in $ctrl.tasks\" item=\"task\" on-delete=\"$ctrl.removeItem(id)\"></list-item> \n                    </div>\n                </div>\n            </div>\n        ",
	    controller: ListController
	};

	exports.ListComponent = ListComponent;

	// angular.module("todoList")
	//     .component('list', ListComponent);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by IlyaLitvinov on 30.12.16.
	 */
	var HeadController = function () {
	    function HeadController() {
	        _classCallCheck(this, HeadController);

	        this.inputField = "";
	    }

	    _createClass(HeadController, [{
	        key: "_addItem",
	        value: function _addItem(e) {
	            if (e.keyCode === 13) {
	                this.addItem({ text: this.inputField });
	                this.inputField = "";
	            }
	        }
	    }]);

	    return HeadController;
	}();

	var HeadComponent = {
	    bindings: {
	        lHeader: "<",
	        lPlaceholder: "<",
	        addItem: '&'
	    },
	    template: "\n            <h3 hide-element class=\"teal-text text-darken-2\">{{$ctrl.lHeader}}</h3>\n            <div class=\"todo_list__head_input input-field col s12\">\n                <input class=\"todo_list__head_input__field\"\n                       type=\"text\"\n                       id=\"todo_list__head_input__field\"\n                       ng-model=\"$ctrl.inputField\"\n                       ng-keypress=\"$ctrl._addItem($event)\">\n                <label for=\"todo_list__head_input__field\">{{$ctrl.options.placeholder}}</label>\n            </div>\n        ",
	    controller: HeadController
	};

	exports.HeadComponent = HeadComponent;

	// angular.module("todoList")
	//     .component('listHead', component);

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by IlyaLitvinov on 30.12.16.
	 */
	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);

	        this.painted = false;
	    }

	    _createClass(Controller, [{
	        key: 'removeItem',
	        value: function removeItem(id) {
	            this.onDelete({ id: id });
	        }
	    }, {
	        key: 'paint',
	        value: function paint() {
	            this.painted = !this.painted;
	        }
	    }]);

	    return Controller;
	}();

	var ItemComponent = {
	    template: '\n            <li class="card-panel todo_list__todo_item row"\n                <div class="col s1 m1 l1 checkbox">\n                    <input type="checkbox" ng-model="$ctrl.item.completed" id="{{item.id}}" ng-checked="$ctrl.item.completed"/>\n                    <label for="{{$ctrl.item.id}}" class="todo_list__checkbox"></label>\n                </div>\n                <div class="todo_list__todo_item__title" \n                    ng-class="{painted: $ctrl.painted}"\n                    ng-click="$ctrl.paint()"\n                >{{$ctrl.item.title}}</div>\n                <a ng-click="$ctrl.removeItem($ctrl.item.id)" class="btn-floating btn-large waves-effect waves-light red">\n                    <i class="material-icons todo_list__btn_delete">X</i>\n                </a>\n            </li>\n        ',
	    controller: Controller,
	    bindings: {
	        item: '<',
	        onDelete: '&' //передача callback функции в компонент
	    }
	};

	exports.ItemComponent = ItemComponent;
	// angular.module("todoList")
	//     .component('listItem', Component);

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by IlyaLitvinov on 30.12.16.
	 */
	var TaskModel = function () {
	    function TaskModel($http) {
	        _classCallCheck(this, TaskModel);

	        this.baseUrl = "http://localhost:4001/list";
	        this.$http = $http;
	    }

	    _createClass(TaskModel, [{
	        key: "fetchTasks",
	        value: function fetchTasks() {
	            return this.$http.get(this.baseUrl);
	        }
	    }, {
	        key: "addTask",
	        value: function addTask(text) {
	            var newTaskObj = {
	                "completed": false,
	                "title": text
	            };

	            return this.$http.post(this.baseUrl, newTaskObj);
	        }
	    }, {
	        key: "removeTask",
	        value: function removeTask(id) {
	            return this.$http.delete(this.baseUrl + ("/" + id));
	        }
	    }]);

	    return TaskModel;
	}();

	exports.TaskModel = TaskModel;
	// angular.module("todoList")
	//     .service('taskModel', TaskModel);

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=application.bundle.e49b271a8b9c41825c2f.js.map