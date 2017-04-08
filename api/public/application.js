webpackJsonp([0],{

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(95);

var _header2 = _interopRequireDefault(_header);

var _list = __webpack_require__(96);

var _list2 = _interopRequireDefault(_list);

var _connect = __webpack_require__(79);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by IlyaLitvinov on 07.04.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            debugger;
            var list = this.props.todos.list;

            return _react2.default.createElement(
                'div',
                { className: 'app_container' },
                _react2.default.createElement(_header2.default, { title: 'Test' }),
                _react2.default.createElement(_list2.default, { list: list })
            );
        }
    }]);

    return App;
}(_react.Component);

debugger;
var mapStsteToProps = function mapStsteToProps(state) {
    return {
        todos: state.todos
    };
};

exports.default = (0, _connect2.default)(mapStsteToProps)(App);

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(24);

var _reducer = __webpack_require__(97);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by IlyaLitvinov on 07.04.17.
 */
var store = (0, _redux.createStore)(_reducer2.default);

exports.default = store;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addItem = addItem;
exports.toggleItem = toggleItem;
exports.setVisibilityFilter = setVisibilityFilter;
/**
 * Created by IlyaLitvinov on 07.04.17.
 */
var ADD_ITEM = exports.ADD_ITEM = 'ADD_ITEM';
var DELETE_ITEM = exports.DELETE_ITEM = 'DELETE_ITEM';
var TOGGLE_ITEM = exports.TOGGLE_ITEM = 'TOGGLE_ITEM';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
var VisibilityFilters = exports.VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

function addItem(text) {
    return {
        type: ADD_ITEM,
        text: text
    };
}

function toggleItem(id) {
    return {
        type: TOGGLE_ITEM,
        id: id
    };
}

function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter: filter
    };
}

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactRedux = __webpack_require__(31);

var _app = __webpack_require__(91);

var _app2 = _interopRequireDefault(_app);

var _createStore = __webpack_require__(92);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.querySelector('#root');

console.log(_createStore2.default.getState());
(0, _reactDom.render)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: _createStore2.default },
        _react2.default.createElement(_app2.default, null)
), root);

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by IlyaLitvinov on 07.04.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            var title = this.props.title;
            var onClick = this.props.onClick;


            return _react2.default.createElement(
                "div",
                { className: "todo__header" },
                _react2.default.createElement(
                    "h2",
                    { className: "todo__title" },
                    title
                ),
                _react2.default.createElement("input", { type: "text" }),
                _react2.default.createElement("input", { type: "button", value: "add", onClick: onClick })
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by IlyaLitvinov on 07.04.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var List = function (_Component) {
    _inherits(List, _Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var list = this.props.list;

            var listComponents = list.map(function (item, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i.toString() },
                    item.text
                );
            });

            return _react2.default.createElement(
                'ul',
                null,
                listComponents
            );
        }
    }]);

    return List;
}(_react.Component);

exports.default = List;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(24);

var _actions = __webpack_require__(93);

/**
 * Created by IlyaLitvinov on 07.04.17.
 */
var SHOW_ALL = _actions.VisibilityFilters.SHOW_ALL;


var initialState = {
    visibilityFilter: _actions.VisibilityFilters.SHOW_ALL,
    todos: [{
        text: "Hello wolrd",
        id: Date.now(),
        completed: false
    }, {
        text: "Hello wolrd2",
        id: Date.now(),
        completed: false
    }, {
        text: "Hello wolrd3",
        id: Date.now(),
        completed: false
    }]
};

function visibilityFilters() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.visibilityFilter;
    var action = arguments[1];

    switch (action.type) {
        case _actions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState.todos;
    var action = arguments[1];

    switch (action.type) {
        case _actions.ADD_ITEM:
            return state.concat([{
                text: action.text,
                completed: false,
                id: Date.now()
            }]);
        case _actions.TOGGLE_ITEM:
            return state.map(function (todo) {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        default:
            return state;
    }
}

var todoApp = (0, _redux.combineReducers)({ visibilityFilters: visibilityFilters, todos: todos });

exports.default = todoApp;

/***/ })

},[94]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9hcHAuY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saXN0LmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlci9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIkFwcCIsImxpc3QiLCJwcm9wcyIsInRvZG9zIiwibWFwU3RzdGVUb1Byb3BzIiwic3RhdGUiLCJzdG9yZSIsImFkZEl0ZW0iLCJ0b2dnbGVJdGVtIiwic2V0VmlzaWJpbGl0eUZpbHRlciIsIkFERF9JVEVNIiwiREVMRVRFX0lURU0iLCJUT0dHTEVfSVRFTSIsIlNFVF9WSVNJQklMSVRZX0ZJTFRFUiIsIlZpc2liaWxpdHlGaWx0ZXJzIiwiU0hPV19BTEwiLCJTSE9XX0NPTVBMRVRFRCIsIlNIT1dfQUNUSVZFIiwidGV4dCIsInR5cGUiLCJpZCIsImZpbHRlciIsInJvb3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RhdGUiLCJIZWFkZXIiLCJ0aXRsZSIsIm9uQ2xpY2siLCJMaXN0IiwibGlzdENvbXBvbmVudHMiLCJtYXAiLCJpdGVtIiwiaSIsInRvU3RyaW5nIiwiaW5pdGlhbFN0YXRlIiwidmlzaWJpbGl0eUZpbHRlciIsIkRhdGUiLCJub3ciLCJjb21wbGV0ZWQiLCJ2aXNpYmlsaXR5RmlsdGVycyIsImFjdGlvbiIsImNvbmNhdCIsInRvZG8iLCJ0b2RvQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQU5BOzs7OztJQVFNQSxHOzs7Ozs7Ozs7OztpQ0FDTztBQUNMO0FBREssZ0JBRUVDLElBRkYsR0FFVSxLQUFLQyxLQUFMLENBQVdDLEtBRnJCLENBRUVGLElBRkY7O0FBR0wsbUJBQU87QUFBQTtBQUFBLGtCQUFLLFdBQVUsZUFBZjtBQUNILGtFQUFRLE9BQU0sTUFBZCxHQURHO0FBRUgsZ0VBQU0sTUFBTUEsSUFBWjtBQUZHLGFBQVA7QUFJSDs7Ozs7O0FBRUw7QUFDQSxJQUFNRyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUMvQixXQUFPO0FBQ0hGLGVBQU9FLE1BQU1GO0FBRFYsS0FBUDtBQUdILENBSkQ7O2tCQU1lLHVCQUFRQyxlQUFSLEVBQXlCSixHQUF6QixDOzs7Ozs7Ozs7Ozs7OztBQ3RCZjs7QUFDQTs7Ozs7O0FBSkE7OztBQU1BLElBQUlNLFFBQVEsMENBQVo7O2tCQUVlQSxLOzs7Ozs7Ozs7Ozs7O1FDTUNDLE8sR0FBQUEsTztRQU9BQyxVLEdBQUFBLFU7UUFPQUMsbUIsR0FBQUEsbUI7QUE1QmhCOzs7QUFHTyxJQUFNQyw4QkFBVyxVQUFqQjtBQUNBLElBQU1DLG9DQUFjLGFBQXBCO0FBQ0EsSUFBTUMsb0NBQWMsYUFBcEI7QUFDQSxJQUFNQyx3REFBd0IsdUJBQTlCO0FBQ0EsSUFBTUMsZ0RBQW9CO0FBQzdCQyxjQUFVLFVBRG1CO0FBRTdCQyxvQkFBZ0IsZ0JBRmE7QUFHN0JDLGlCQUFhO0FBSGdCLENBQTFCOztBQU9BLFNBQVNWLE9BQVQsQ0FBa0JXLElBQWxCLEVBQXdCO0FBQzNCLFdBQU87QUFDSEMsY0FBTVQsUUFESDtBQUVIUTtBQUZHLEtBQVA7QUFJSDs7QUFFTSxTQUFTVixVQUFULENBQXFCWSxFQUFyQixFQUF5QjtBQUM1QixXQUFPO0FBQ0hELGNBQU1QLFdBREg7QUFFSFE7QUFGRyxLQUFQO0FBSUg7O0FBRU0sU0FBU1gsbUJBQVQsQ0FBOEJZLE1BQTlCLEVBQXNDO0FBQ3pDLFdBQU87QUFDSEYsY0FBTU4scUJBREg7QUFFSFE7QUFGRyxLQUFQO0FBSUgsQzs7Ozs7Ozs7OztBQ2pDRDs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLE9BQU9DLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjs7QUFFQUMsUUFBUUMsR0FBUixDQUFZLHNCQUFNQyxRQUFOLEVBQVo7QUFDQSxzQkFBTztBQUFBO0FBQUEsVUFBVSw0QkFBVjtBQUNDO0FBREQsQ0FBUCxFQUVpQkwsSUFGakIsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7OytlQUhBOzs7OztJQUtxQk0sTTs7Ozs7Ozs7Ozs7aUNBQ1I7QUFBQSxnQkFDRUMsS0FERixHQUNXLEtBQUszQixLQURoQixDQUNFMkIsS0FERjtBQUFBLGdCQUVFQyxPQUZGLEdBRWEsS0FBSzVCLEtBRmxCLENBRUU0QixPQUZGOzs7QUFJTCxtQkFBTztBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0g7QUFBQTtBQUFBLHNCQUFJLFdBQVUsYUFBZDtBQUE2QkQ7QUFBN0IsaUJBREc7QUFFSCx5REFBTyxNQUFLLE1BQVosR0FGRztBQUdILHlEQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLEtBQTNCLEVBQWlDLFNBQVNDLE9BQTFDO0FBSEcsYUFBUDtBQUtIOzs7Ozs7a0JBVmdCRixNOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7Ozs7Ozs7OytlQUhBOzs7OztJQUtxQkcsSTs7Ozs7Ozs7Ozs7aUNBQ1I7QUFBQSxnQkFDRTlCLElBREYsR0FDVSxLQUFLQyxLQURmLENBQ0VELElBREY7O0FBRUwsZ0JBQU0rQixpQkFBaUIvQixLQUFLZ0MsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQ3pDLHVCQUFPO0FBQUE7QUFBQSxzQkFBSSxLQUFLQSxFQUFFQyxRQUFGLEVBQVQ7QUFBd0JGLHlCQUFLaEI7QUFBN0IsaUJBQVA7QUFDSCxhQUZzQixDQUF2Qjs7QUFJQSxtQkFBTztBQUFBO0FBQUE7QUFBS2M7QUFBTCxhQUFQO0FBQ0g7Ozs7OztrQkFSZ0JELEk7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOztBQUNBOztBQUpBOzs7SUFLT2hCLFEsOEJBQUFBLFE7OztBQUVQLElBQU1zQixlQUFlO0FBQ2pCQyxzQkFBa0IsMkJBQWtCdkIsUUFEbkI7QUFFakJaLFdBQU8sQ0FDSDtBQUNJZSxjQUFNLGFBRFY7QUFFSUUsWUFBSW1CLEtBQUtDLEdBQUwsRUFGUjtBQUdJQyxtQkFBVztBQUhmLEtBREcsRUFNSDtBQUNJdkIsY0FBTSxjQURWO0FBRUlFLFlBQUltQixLQUFLQyxHQUFMLEVBRlI7QUFHSUMsbUJBQVc7QUFIZixLQU5HLEVBV0g7QUFDSXZCLGNBQU0sY0FEVjtBQUVJRSxZQUFJbUIsS0FBS0MsR0FBTCxFQUZSO0FBR0lDLG1CQUFXO0FBSGYsS0FYRztBQUZVLENBQXJCOztBQXFCQSxTQUFTQyxpQkFBVCxHQUEwRTtBQUFBLFFBQS9DckMsS0FBK0MsdUVBQXZDZ0MsYUFBYUMsZ0JBQTBCO0FBQUEsUUFBUkssTUFBUTs7QUFDdEUsWUFBUUEsT0FBT3hCLElBQWY7QUFDSTtBQUNJLG1CQUFPd0IsT0FBT3RCLE1BQWQ7QUFDSjtBQUNJLG1CQUFPaEIsS0FBUDtBQUpSO0FBTUg7O0FBRUQsU0FBU0YsS0FBVCxHQUFtRDtBQUFBLFFBQXBDRSxLQUFvQyx1RUFBNUJnQyxhQUFhbEMsS0FBZTtBQUFBLFFBQVJ3QyxNQUFROztBQUMvQyxZQUFRQSxPQUFPeEIsSUFBZjtBQUNJO0FBQ0ksbUJBQU9kLE1BQU11QyxNQUFOLENBQWEsQ0FDaEI7QUFDSTFCLHNCQUFNeUIsT0FBT3pCLElBRGpCO0FBRUl1QiwyQkFBVyxLQUZmO0FBR0lyQixvQkFBSW1CLEtBQUtDLEdBQUw7QUFIUixhQURnQixDQUFiLENBQVA7QUFNSjtBQUNJLG1CQUFPbkMsTUFBTTRCLEdBQU4sQ0FBVSxnQkFBUTtBQUNyQixvQkFBSVksS0FBS3pCLEVBQUwsS0FBWXVCLE9BQU92QixFQUF2QixFQUEyQjtBQUN2QnlCLHlCQUFLSixTQUFMLEdBQWlCLENBQUNJLEtBQUtKLFNBQXZCO0FBQ0g7QUFDRCx1QkFBT0ksSUFBUDtBQUNILGFBTE0sQ0FBUDtBQU1KO0FBQ0ksbUJBQU94QyxLQUFQO0FBaEJSO0FBa0JIOztBQUVELElBQU15QyxVQUFVLDRCQUFnQixFQUFDSixvQ0FBRCxFQUFvQnZDLFlBQXBCLEVBQWhCLENBQWhCOztrQkFFZTJDLE8iLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSWx5YUxpdHZpbm92IG9uIDA3LjA0LjE3LlxuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgY29ubmVjdCBmcm9tIFwicmVhY3QtcmVkdXgvZXMvY29ubmVjdC9jb25uZWN0XCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgY29uc3Qge2xpc3R9ID0gdGhpcy5wcm9wcy50b2RvcztcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYXBwX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgPEhlYWRlciB0aXRsZT1cIlRlc3RcIi8+XG4gICAgICAgICAgICA8TGlzdCBsaXN0PXtsaXN0fS8+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9XG59XG5kZWJ1Z2dlcjtcbmNvbnN0IG1hcFN0c3RlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvZG9zOiBzdGF0ZS50b2Rvc1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RzdGVUb1Byb3BzKShBcHApO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL2FwcC5jb250YWluZXIuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSWx5YUxpdHZpbm92IG9uIDA3LjA0LjE3LlxuICovXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0b2RvQXBwIGZyb20gJy4uL3JlZHVjZXIvcmVkdWNlcic7XG5cbmxldCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHRvZG9BcHApO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvY3JlYXRlU3RvcmUuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgSWx5YUxpdHZpbm92IG9uIDA3LjA0LjE3LlxuICovXG5leHBvcnQgY29uc3QgQUREX0lURU0gPSAnQUREX0lURU0nO1xuZXhwb3J0IGNvbnN0IERFTEVURV9JVEVNID0gJ0RFTEVURV9JVEVNJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfSVRFTSA9ICdUT0dHTEVfSVRFTSc7XG5leHBvcnQgY29uc3QgU0VUX1ZJU0lCSUxJVFlfRklMVEVSID0gJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUic7XG5leHBvcnQgY29uc3QgVmlzaWJpbGl0eUZpbHRlcnMgPSB7XG4gICAgU0hPV19BTEw6ICdTSE9XX0FMTCcsXG4gICAgU0hPV19DT01QTEVURUQ6ICdTSE9XX0NPTVBMRVRFRCcsXG4gICAgU0hPV19BQ1RJVkU6ICdTSE9XX0FDVElWRSdcbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW0gKHRleHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfSVRFTSxcbiAgICAgICAgdGV4dFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVJdGVtIChpZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRPR0dMRV9JVEVNLFxuICAgICAgICBpZFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWaXNpYmlsaXR5RmlsdGVyIChmaWx0ZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgIGZpbHRlclxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbnRhaW5lcnMvYXBwLmNvbnRhaW5lcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9jcmVhdGVTdG9yZSc7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xuXG5jb25zb2xlLmxvZyhzdG9yZS5nZXRTdGF0ZSgpKTtcbnJlbmRlcig8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPEFwcCAvPlxuICAgIDwvUHJvdmlkZXI+LCByb290KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJbHlhTGl0dmlub3Ygb24gMDcuMDQuMTcuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7dGl0bGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qge29uQ2xpY2t9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0b2RvX19oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0b2RvX190aXRsZVwiPnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cImFkZFwiIG9uQ2xpY2s9e29uQ2xpY2t9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJbHlhTGl0dmlub3Ygb24gMDcuMDQuMTcuXG4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2xpc3R9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgbGlzdENvbXBvbmVudHMgPSBsaXN0Lm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2kudG9TdHJpbmcoKX0+e2l0ZW0udGV4dH08L2xpPlxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gPHVsPntsaXN0Q29tcG9uZW50c308L3VsPlxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9saXN0LmNvbXBvbmVudC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBJbHlhTGl0dmlub3Ygb24gMDcuMDQuMTcuXG4gKi9cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgQUREX0lURU0sIFRPR0dMRV9JVEVNLCBTRVRfVklTSUJJTElUWV9GSUxURVIsIFZpc2liaWxpdHlGaWx0ZXJzIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb25zJztcbmNvbnN0IHtTSE9XX0FMTH0gPSBWaXNpYmlsaXR5RmlsdGVycztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHZpc2liaWxpdHlGaWx0ZXI6IFZpc2liaWxpdHlGaWx0ZXJzLlNIT1dfQUxMLFxuICAgIHRvZG9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiSGVsbG8gd29scmRcIixcbiAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkhlbGxvIHdvbHJkMlwiLFxuICAgICAgICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiSGVsbG8gd29scmQzXCIsXG4gICAgICAgICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfSxcbiAgICBdXG59O1xuXG5mdW5jdGlvbiB2aXNpYmlsaXR5RmlsdGVycyhzdGF0ZSA9IGluaXRpYWxTdGF0ZS52aXNpYmlsaXR5RmlsdGVyLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgU0VUX1ZJU0lCSUxJVFlfRklMVEVSOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2RvcyhzdGF0ZSA9IGluaXRpYWxTdGF0ZS50b2RvcywgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9JVEVNOlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmNvbmNhdChbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IERhdGUubm93KClcbiAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgIGNhc2UgVE9HR0xFX0lURU06XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0b2RvLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0b2RvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHt2aXNpYmlsaXR5RmlsdGVycywgdG9kb3N9KTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb0FwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdWNlci9yZWR1Y2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==