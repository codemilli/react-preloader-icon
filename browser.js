(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PreloaderIcon"] = factory();
	else
		root["PreloaderIcon"] = factory();
})(this, function() {
return webpackJsonpPreloaderIcon([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _PreloaderIcon = __webpack_require__(1);
	
	var _PreloaderIcon2 = _interopRequireDefault(_PreloaderIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _PreloaderIcon2.default;
	module.exports.ICON_TYPE = _PreloaderIcon.ICON_TYPE;

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ICON_TYPE = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(5);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _styles = __webpack_require__(30);
	
	var _Oval = __webpack_require__(31);
	
	var _Oval2 = _interopRequireDefault(_Oval);
	
	var _TailSpin = __webpack_require__(41);
	
	var _TailSpin2 = _interopRequireDefault(_TailSpin);
	
	var _Spinning = __webpack_require__(42);
	
	var _Spinning2 = _interopRequireDefault(_Spinning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @type {object}
	 * @property {string} OVAL
	 * @property {string} TAIL_SPIN
	 * @property {string} SPINNING
	 */
	var ICON_TYPE = {
	    OVAL: 'oval',
	    TAIL_SPIN: 'tailSpin',
	    SPINNING: 'spinning'
	};
	
	var PreloaderIcon = function (_React$Component) {
	    _inherits(PreloaderIcon, _React$Component);
	
	    function PreloaderIcon() {
	        _classCallCheck(this, PreloaderIcon);
	
	        return _possibleConstructorReturn(this, (PreloaderIcon.__proto__ || Object.getPrototypeOf(PreloaderIcon)).apply(this, arguments));
	    }
	
	    _createClass(PreloaderIcon, [{
	        key: 'render',
	
	
	        /**
	         * @returns {ReactElement|XML}
	         */
	
	
	        /**
	         * @property {?string} className
	         * @property {?string} type
	         * @property {?number} size
	         * @property {?string} unit
	         * @property {?number} strokeWidth
	         * @property {?string} strokeColor
	         * @property {?number} duration
	         */
	        value: function render() {
	            var className = 'preloader-icon ' + this.props.className;
	            var size = '' + this.props.size + this.props.unit;
	            var style = (0, _objectAssign2.default)({ width: size, height: size }, this.props.style);
	            var _props = this.props,
	                strokeWidth = _props.strokeWidth,
	                strokeColor = _props.strokeColor,
	                duration = _props.duration;
	
	            var loader = this.createLoader(this.props.type, { strokeWidth: strokeWidth, strokeColor: strokeColor, duration: duration });
	
	            return _react2.default.createElement(
	                'div',
	                { className: className, style: style },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'preloader-icon__inner', style: _styles.inner },
	                    _react2.default.createElement(
	                        'em',
	                        { className: 'preloader-icon__title', style: _styles.title },
	                        'Loading...'
	                    ),
	                    loader
	                )
	            );
	        }
	
	        /**
	         * @param {string} type
	         * @param {object} options
	         * @returns {ReactElement|XML|null}
	         */
	
	
	        /**
	         * @property {string} className
	         * @property {number} size
	         * @property {number} strokeWidth
	         * @property {string} strokeColor
	         * @property {number} duration
	         */
	
	    }, {
	        key: 'createLoader',
	        value: function createLoader(type, options) {
	            switch (type) {
	                case ICON_TYPE.OVAL:
	                    return _react2.default.createElement(_Oval2.default, options);
	                case ICON_TYPE.TAIL_SPIN:
	                    return _react2.default.createElement(_TailSpin2.default, options);
	                case ICON_TYPE.SPINNING:
	                    return _react2.default.createElement(_Spinning2.default, options);
	                default:
	                    return null;
	            }
	        }
	    }]);
	
	    return PreloaderIcon;
	}(_react2.default.Component);
	
	PreloaderIcon.propTypes = {
	    className: _react.PropTypes.string,
	    type: _react.PropTypes.string,
	    size: _react.PropTypes.number,
	    unit: _react.PropTypes.string,
	    strokeWidth: _react.PropTypes.number,
	    strokeColor: _react.PropTypes.string,
	    duration: _react.PropTypes.number
	};
	PreloaderIcon.defaultProps = {
	    className: '',
	    type: ICON_TYPE.OVAL,
	    size: 32,
	    unit: 'px',
	    strokeWidth: 3,
	    strokeColor: '#f0ad4e',
	    duration: 800
	};
	exports.default = PreloaderIcon;
	exports.ICON_TYPE = ICON_TYPE;

/***/ },

/***/ 30:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var inner = {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    overflow: 'hidden',
	    transform: 'translate3d(0, 0, 0)',
	    lineHeight: 0
	};
	
	var title = {
	    fontSize: 0,
	    height: 0,
	    left: 0,
	    overflow: 'hidden',
	    position: 'absolute',
	    top: 0,
	    visibility: 'hidden',
	    width: 0
	};
	
	exports.inner = inner;
	exports.title = title;

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stepperjs = __webpack_require__(32);
	
	var _stepperjs2 = _interopRequireDefault(_stepperjs);
	
	var _linear = __webpack_require__(39);
	
	var _linear2 = _interopRequireDefault(_linear);
	
	var _pfx = __webpack_require__(40);
	
	var _pfx2 = _interopRequireDefault(_pfx);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Oval = function (_React$Component) {
	    _inherits(Oval, _React$Component);
	
	    function Oval(props) {
	        _classCallCheck(this, Oval);
	
	        var _this = _possibleConstructorReturn(this, (Oval.__proto__ || Object.getPrototypeOf(Oval)).call(this, props));
	
	        _this.stepper = new _stepperjs2.default({
	            duration: _this.props.duration,
	            easing: _linear2.default,
	            loop: true
	        });
	        return _this;
	    }
	
	    _createClass(Oval, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            var transform = (0, _pfx2.default)('transform').property;
	            var rotate = (0, _pfx2.default)('perspective').support ? 'rotateZ' : 'rotate';
	
	            this.stepper.on('update', function (progress) {
	                _this2.refs.target.style[transform] = rotate + '(' + progress * 360 + 'deg)';
	            });
	
	            this.stepper.start();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.duration !== this.props.duration) {
	                this.stepper.option('duration', this.props.duration);
	                this.stepper.stop();
	                this.stepper.start();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.stepper.stop();
	            this.stepper.off();
	            this.stepper = null;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var strokeWidth = this.props.strokeWidth;
	            var translateSize = strokeWidth / 2 + 1;
	            var viewBoxSize = 38 + strokeWidth;
	
	            return _react2.default.createElement(
	                'div',
	                { ref: 'target', className: 'preloader-icon__oval', style: { height: '100%' } },
	                _react2.default.createElement(
	                    'svg',
	                    {
	                        xmlns: 'http://www.w3.org/2000/svg',
	                        width: '100%',
	                        height: '100%',
	                        viewBox: '0 0 ' + viewBoxSize + ' ' + viewBoxSize,
	                        stroke: this.props.strokeColor
	                    },
	                    _react2.default.createElement(
	                        'g',
	                        { fill: 'none' },
	                        _react2.default.createElement(
	                            'g',
	                            { transform: 'translate(' + translateSize + ' ' + translateSize + ')', strokeWidth: strokeWidth },
	                            _react2.default.createElement('circle', { stroke: this.props.strokeColor, strokeOpacity: '.5', cx: '18', cy: '18', r: '18' }),
	                            _react2.default.createElement('path', { d: 'M36 18c0-9.94-8.06-18-18-18' })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Oval;
	}(_react2.default.Component);
	
	exports.default = Oval;

/***/ },

/***/ 40:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var memory = {};
	
	function pfx(property) {
	    if (memory[property]) {
	        return memory[property];
	    }
	
	    var style = document.createElement("dummy").style;
	    var prefixes = ['Webkit', 'Moz', 'O', 'ms'];
	    var camelCaseProp = property.replace(/-(\w)/g, function (m, g) {
	        return g.toUpperCase();
	    });
	    var firstUpperProp = camelCaseProp.charAt(0).toUpperCase() + camelCaseProp.substr(1);
	    var properties = (camelCaseProp + " " + prefixes.join(firstUpperProp + " ") + firstUpperProp).split(" ");
	
	    memory[property] = {
	        support: false,
	        prefix: '',
	        original: property,
	        property: ''
	    };
	
	    for (var i = 0, n = properties.length; i < n; i++) {
	        if (style[properties[i]] !== undefined) {
	            memory[property] = {
	                support: true,
	                prefix: prefixes[i - 1] || '',
	                original: property,
	                property: properties[i]
	            };
	
	            break;
	        }
	    }
	
	    return memory[property];
	}
	
	exports.default = pfx;

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stepperjs = __webpack_require__(32);
	
	var _stepperjs2 = _interopRequireDefault(_stepperjs);
	
	var _linear = __webpack_require__(39);
	
	var _linear2 = _interopRequireDefault(_linear);
	
	var _pfx = __webpack_require__(40);
	
	var _pfx2 = _interopRequireDefault(_pfx);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TailSpin = function (_React$Component) {
	    _inherits(TailSpin, _React$Component);
	
	    function TailSpin(props) {
	        _classCallCheck(this, TailSpin);
	
	        var _this = _possibleConstructorReturn(this, (TailSpin.__proto__ || Object.getPrototypeOf(TailSpin)).call(this, props));
	
	        _this.stepper = new _stepperjs2.default({
	            duration: _this.props.duration,
	            easing: _linear2.default,
	            loop: true
	        });
	        return _this;
	    }
	
	    _createClass(TailSpin, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            var transform = (0, _pfx2.default)('transform').property;
	            var rotate = (0, _pfx2.default)('perspective').support ? 'rotateZ' : 'rotate';
	
	            this.stepper.on('update', function (progress) {
	                _this2.refs.target.style[transform] = rotate + '(' + progress * 360 + 'deg)';
	            });
	
	            this.stepper.start();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.duration !== this.props.duration) {
	                this.stepper.option('duration', this.props.duration);
	                this.stepper.stop();
	                this.stepper.start();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.stepper.stop();
	            this.stepper.off();
	            this.stepper = null;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var strokeWidth = this.props.strokeWidth;
	            var translateSize = strokeWidth / 2 + 1;
	            var viewBoxSize = 38 + strokeWidth;
	
	            return _react2.default.createElement(
	                'div',
	                { ref: 'target', className: 'preloader-icon__tail-spin', style: { height: '100%' } },
	                _react2.default.createElement(
	                    'svg',
	                    {
	                        xmlns: 'http://www.w3.org/2000/svg',
	                        width: '100%',
	                        height: '100%',
	                        viewBox: '0 0 ' + viewBoxSize + ' ' + viewBoxSize
	                    },
	                    _react2.default.createElement(
	                        'defs',
	                        null,
	                        _react2.default.createElement(
	                            'linearGradient',
	                            { x1: '8.042%', y1: '0%', x2: '65.682%', y2: '23.865%', id: 'a' },
	                            _react2.default.createElement('stop', { stopColor: this.props.strokeColor, stopOpacity: '0', offset: '0%' }),
	                            _react2.default.createElement('stop', { stopColor: this.props.strokeColor, stopOpacity: '.631', offset: '63.146%' }),
	                            _react2.default.createElement('stop', { stopColor: this.props.strokeColor, offset: '100%' })
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'g',
	                        { fill: 'none' },
	                        _react2.default.createElement(
	                            'g',
	                            { transform: 'translate(' + translateSize + ' ' + translateSize + ')' },
	                            _react2.default.createElement('path', { d: 'M36 18c0-9.94-8.06-18-18-18', stroke: 'url(#a)', strokeWidth: this.props.strokeWidth }),
	                            _react2.default.createElement('circle', { fill: this.props.strokeColor, cx: '36', cy: '18', r: this.props.strokeWidth / 2 })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return TailSpin;
	}(_react2.default.Component);
	
	exports.default = TailSpin;

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _stepperjs = __webpack_require__(32);
	
	var _stepperjs2 = _interopRequireDefault(_stepperjs);
	
	var _linear = __webpack_require__(39);
	
	var _linear2 = _interopRequireDefault(_linear);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CIRCULAR_COUNT = 8;
	var PART_PROGRESS = 1 / CIRCULAR_COUNT;
	
	var Spinning = function (_React$Component) {
	    _inherits(Spinning, _React$Component);
	
	    function Spinning(props) {
	        _classCallCheck(this, Spinning);
	
	        var _this = _possibleConstructorReturn(this, (Spinning.__proto__ || Object.getPrototypeOf(Spinning)).call(this, props));
	
	        _this.stepper = new _stepperjs2.default({
	            duration: _this.props.duration,
	            easing: _linear2.default,
	            loop: true
	        });
	        return _this;
	    }
	
	    _createClass(Spinning, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            var prevIndex = 0;
	
	            this.stepper.on('update', function (progress) {
	                progress = progress > 1 ? 0.9999 : progress;
	
	                var nextIndex = parseInt(progress / PART_PROGRESS, 10);
	                var nextTarget = void 0;
	                var prevTarget = void 0;
	
	                if (nextIndex - 1 !== prevIndex && !(nextIndex === 0 && prevIndex === 7)) {
	                    prevTarget = _this2.refs['c' + prevIndex];
	                    prevTarget.style.fillOpacity = 0;
	
	                    prevIndex = nextIndex === 0 ? 7 : nextIndex - 1;
	                }
	
	                progress = (progress - PART_PROGRESS * nextIndex) / PART_PROGRESS;
	
	                nextTarget = _this2.refs['c' + nextIndex];
	                prevTarget = _this2.refs['c' + prevIndex];
	
	                nextTarget.style.fillOpacity = progress;
	                prevTarget.style.fillOpacity = 1 - progress;
	            });
	
	            this.stepper.start();
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            if (prevProps.duration !== this.props.duration) {
	                for (var key in this.refs) {
	                    if (this.refs.hasOwnProperty(key)) {
	                        this.refs[key].style.fillOpacity = 0;
	                    }
	                }
	
	                this.stepper.option('duration', this.props.duration);
	                this.stepper.stop();
	                this.stepper.start();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.stepper.stop();
	            this.stepper.off();
	            this.stepper = null;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                strokeColor = _props.strokeColor,
	                strokeWidth = _props.strokeWidth;
	
	            var translateSize = strokeWidth / 2 + 1;
	            var viewBoxSize = 56 + strokeWidth;
	
	            return _react2.default.createElement(
	                'div',
	                { className: 'preloader-icon__spinning', style: { height: '100%' } },
	                _react2.default.createElement(
	                    'svg',
	                    {
	                        xmlns: 'http://www.w3.org/2000/svg',
	                        width: '100%',
	                        height: '100%',
	                        viewBox: '0 0 ' + viewBoxSize + ' ' + viewBoxSize
	                    },
	                    _react2.default.createElement(
	                        'g',
	                        { fill: 'none' },
	                        _react2.default.createElement(
	                            'g',
	                            {
	                                transform: 'translate(' + translateSize + ' ' + translateSize + ')',
	                                stroke: strokeColor,
	                                strokeWidth: strokeWidth
	                            },
	                            _react2.default.createElement('circle', { ref: 'c0', cx: '42.601', cy: '11.462', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
	                            _react2.default.createElement('circle', { ref: 'c1', cx: '49.063', cy: '27.063', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
	                            _react2.default.createElement('circle', { ref: 'c2', cx: '42.601', cy: '42.663', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
	                            _react2.default.createElement('circle', { ref: 'c3', cx: '27', cy: '49.125', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
	                            _react2.default.createElement('circle', { ref: 'c4', cx: '11.399', cy: '42.663', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
	                            _react2.default.createElement('circle', { ref: 'c5', cx: '4.938', cy: '27.063', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
	                            _react2.default.createElement('circle', { ref: 'c6', cx: '11.399', cy: '11.462', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
	                            _react2.default.createElement('circle', { ref: 'c7', cx: '27', cy: '5', r: '5', style: { fillOpacity: 0 }, fill: strokeColor })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Spinning;
	}(_react2.default.Component);
	
	exports.default = Spinning;

/***/ }

})
});
;
//# sourceMappingURL=browser.js.map