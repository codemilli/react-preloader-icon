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
	
	__webpack_require__(1);
	
	__webpack_require__(38);
	
	__webpack_require__(70);
	
	var _PreloaderIcon = __webpack_require__(83);
	
	var _PreloaderIcon2 = _interopRequireDefault(_PreloaderIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = _PreloaderIcon2.default;
	module.exports.ICON_TYPE = _PreloaderIcon.ICON_TYPE;

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ICON_TYPE = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(84);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(114);
	
	var _Oval = __webpack_require__(115);
	
	var _Oval2 = _interopRequireDefault(_Oval);
	
	var _TailSpin = __webpack_require__(122);
	
	var _TailSpin2 = _interopRequireDefault(_TailSpin);
	
	var _pick = __webpack_require__(123);
	
	var _pick2 = _interopRequireDefault(_pick);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * @type {object}
	 * @property {string} OVAL
	 * @property {string} TAIL_SPIN
	 */
	var ICON_TYPE = {
	    OVAL: 'oval',
	    TAIL_SPIN: 'tailSpin'
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
	         * @property {?number} strokeWidth
	         * @property {?string} strokeColor
	         * @property {?number} duration
	         */
	        value: function render() {
	            var className = 'preloader-icon ' + this.props.className;
	            var size = '' + this.props.size + this.props.unit;
	            var style = Object.assign({ width: size, height: size }, this.props.style);
	            var loaderOptions = (0, _pick2.default)(this.props, ['strokeWidth', 'strokeColor', 'duration']);
	            var loader = this.createLoader(this.props.type, loaderOptions);
	
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
	                default:
	                    return null;
	            }
	        }
	    }]);
	
	    return PreloaderIcon;
	}(_react2.default.Component);
	
	PreloaderIcon.propTypes = {
	    className: _react2.default.PropTypes.string,
	    type: _react2.default.PropTypes.string,
	    size: _react2.default.PropTypes.number,
	    strokeWidth: _react2.default.PropTypes.number,
	    strokeColor: _react2.default.PropTypes.string,
	    duration: _react2.default.PropTypes.number
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

/***/ 114:
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

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class;
	
	var _react = __webpack_require__(84);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _detectie = __webpack_require__(116);
	
	var _detectie2 = _interopRequireDefault(_detectie);
	
	var _reactMixin = __webpack_require__(117);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _animationLifecycle = __webpack_require__(119);
	
	var _animationLifecycle2 = _interopRequireDefault(_animationLifecycle);
	
	var _animations = __webpack_require__(120);
	
	var _animations2 = _interopRequireDefault(_animations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Oval = (_dec = _reactMixin2.default.decorate(_animationLifecycle2.default), _dec2 = _reactMixin2.default.decorate(_animations2.default), _dec(_class = _dec2(_class = function (_React$Component) {
	    _inherits(Oval, _React$Component);
	
	    function Oval() {
	        _classCallCheck(this, Oval);
	
	        return _possibleConstructorReturn(this, (Oval.__proto__ || Object.getPrototypeOf(Oval)).apply(this, arguments));
	    }
	
	    _createClass(Oval, [{
	        key: 'startAnimation',
	        value: function startAnimation() {
	            this.spin(this._getTargetElement());
	        }
	
	        /**
	         * @property {number!} strokeWidth
	         * @property {string!} strokeColor
	         * @property {number!} duration
	         */
	
	    }, {
	        key: 'updateAnimation',
	        value: function updateAnimation() {
	            var _this2 = this;
	
	            this.stop(this._getTargetElement()).then(function () {
	                _this2.startAnimation();
	            });
	        }
	    }, {
	        key: 'finishAnimation',
	        value: function finishAnimation() {
	            this.finish(this._getTargetElement());
	        }
	
	        /**
	         * @returns {ReactElement|XML}
	         */
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            var strokeWidth = this.props.strokeWidth;
	            var translateSize = strokeWidth / 2 + 1;
	            var viewBoxSize = 38 + strokeWidth;
	
	            return _react2.default.createElement(
	                'div',
	                { ref: function ref(r) {
	                        return _this3._oval = r;
	                    }, className: 'preloader-icon__oval', style: { height: '100%' } },
	                _react2.default.createElement(
	                    'svg',
	                    {
	                        xmlns: 'http://www.w3.org/2000/svg',
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
	                            _react2.default.createElement('path', {
	                                ref: function ref(r) {
	                                    return _this3._arc = r;
	                                },
	                                style: { transformOrigin: '18px 18px' },
	                                d: 'M36 18c0-9.94-8.06-18-18-18'
	                            })
	                        )
	                    )
	                )
	            );
	        }
	
	        /**
	         * @returns {HTMLDivElement|SVGPathElement}
	         * @private
	         */
	
	    }, {
	        key: '_getTargetElement',
	        value: function _getTargetElement() {
	            var result = this._oval;
	
	            if (!(0, _detectie2.default)()) {
	                result = this._arc;
	            }
	
	            return result;
	        }
	    }]);
	
	    return Oval;
	}(_react2.default.Component)) || _class) || _class);
	Oval.propTypes = {
	    strokeWidth: _react2.default.PropTypes.number.isRequired,
	    strokeColor: _react2.default.PropTypes.string.isRequired,
	    duration: _react2.default.PropTypes.number.isRequired
	};
	exports.default = Oval;

/***/ },

/***/ 119:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var animationLifecycle = {
	    componentDidMount: function componentDidMount() {
	        if (!this.startAnimation || !this.updateAnimation || !this.finishAnimation) {
	            throw new Error('A need to define the animation lifecycle method' + '(startAnimation or updateAnimation or finishAnimation)');
	        }
	
	        this.startAnimation();
	    },
	
	
	    /**
	     * @param {Object} prevProps
	     */
	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        if (prevProps.duration !== this.props.duration) {
	            this.updateAnimation();
	        }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        this.finishAnimation();
	    }
	};
	
	exports.default = animationLifecycle;

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _velocityAnimate = __webpack_require__(121);
	
	var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var animations = {
	
	    /**
	     * @param {HTMLElement|SVGElement} element
	     * @returns {Promise}
	     */
	    spin: function spin(element) {
	        return (0, _velocityAnimate2.default)(element, {
	            rotateZ: '360deg'
	        }, {
	            duration: this.props.duration,
	            easing: 'linear',
	            loop: true
	        });
	    },
	
	
	    /**
	     * @param {HTMLElement|SVGElement} element
	     * @returns {Promise}
	     */
	    stop: function stop(element) {
	        return (0, _velocityAnimate2.default)(element, 'stop', true);
	    },
	
	
	    /**
	     * @param {HTMLElement|SVGElement} element
	     * @returns {Promise}
	     */
	    finish: function finish(element) {
	        this.stop(element).then(function () {
	            (0, _velocityAnimate2.default)(element, 'finish');
	        });
	    }
	};
	
	exports.default = animations;

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _dec2, _class;
	
	var _react = __webpack_require__(84);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMixin = __webpack_require__(117);
	
	var _reactMixin2 = _interopRequireDefault(_reactMixin);
	
	var _detectie = __webpack_require__(116);
	
	var _detectie2 = _interopRequireDefault(_detectie);
	
	var _animationLifecycle = __webpack_require__(119);
	
	var _animationLifecycle2 = _interopRequireDefault(_animationLifecycle);
	
	var _animations = __webpack_require__(120);
	
	var _animations2 = _interopRequireDefault(_animations);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TailSpin = (_dec = _reactMixin2.default.decorate(_animationLifecycle2.default), _dec2 = _reactMixin2.default.decorate(_animations2.default), _dec(_class = _dec2(_class = function (_React$Component) {
	    _inherits(TailSpin, _React$Component);
	
	    function TailSpin() {
	        _classCallCheck(this, TailSpin);
	
	        return _possibleConstructorReturn(this, (TailSpin.__proto__ || Object.getPrototypeOf(TailSpin)).apply(this, arguments));
	    }
	
	    _createClass(TailSpin, [{
	        key: 'startAnimation',
	        value: function startAnimation() {
	            if ((0, _detectie2.default)()) {
	                this.spin(this._tailSpin);
	            } else {
	                this.spin(this._ball);
	                this.spin(this._tail);
	            }
	        }
	
	        /**
	         * @property {number!} strokeWidth
	         * @property {string!} strokeColor
	         * @property {number!} duration
	         */
	
	    }, {
	        key: 'updateAnimation',
	        value: function updateAnimation() {
	            var _this2 = this;
	
	            var promise = (0, _detectie2.default)() ? this.stop(this._tailSpin) : Promise.all([this.stop(this._ball), this.stop(this._tail)]);
	
	            promise.then(function () {
	                _this2.startAnimation();
	            });
	        }
	    }, {
	        key: 'finishAnimation',
	        value: function finishAnimation() {
	            this.finish(this._tailSpin);
	            this.finish(this._ball);
	            this.finish(this._tail);
	        }
	
	        /**
	         * @returns {ReactElement|XML}
	         */
	
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            var strokeWidth = this.props.strokeWidth;
	            var translateSize = strokeWidth / 2 + 1;
	            var viewBoxSize = 38 + strokeWidth;
	
	            return _react2.default.createElement(
	                'div',
	                { ref: function ref(r) {
	                        return _this3._tailSpin = r;
	                    }, className: 'preloader-icon__tail-spin', style: { height: '100%' } },
	                _react2.default.createElement(
	                    'svg',
	                    {
	                        xmlns: 'http://www.w3.org/2000/svg',
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
	                            _react2.default.createElement('path', {
	                                ref: function ref(r) {
	                                    return _this3._tail = r;
	                                },
	                                d: 'M36 18c0-9.94-8.06-18-18-18',
	                                stroke: 'url(#a)',
	                                strokeWidth: this.props.strokeWidth,
	                                style: { transformOrigin: '18px 18px' }
	                            }),
	                            _react2.default.createElement('circle', {
	                                ref: function ref(r) {
	                                    return _this3._ball = r;
	                                },
	                                fill: this.props.strokeColor,
	                                cx: '36',
	                                cy: '18',
	                                r: this.props.strokeWidth / 2,
	                                style: { transformOrigin: '18px 18px' }
	                            })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return TailSpin;
	}(_react2.default.Component)) || _class) || _class);
	TailSpin.propTypes = {
	    strokeWidth: _react2.default.PropTypes.number.isRequired,
	    strokeColor: _react2.default.PropTypes.string.isRequired,
	    duration: _react2.default.PropTypes.number.isRequired
	};
	exports.default = TailSpin;

/***/ },

/***/ 123:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function pick(object, keys) {
	    var result = {};
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;
	
	            result[key] = object[key];
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return result;
	}
	
	exports.default = pick;

/***/ }

})
});
;
//# sourceMappingURL=browser.js.map