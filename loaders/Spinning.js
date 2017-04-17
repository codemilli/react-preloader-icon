'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stepperjs = require('stepperjs');

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = require('stepperjs/dist/easings/linear');

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
                    prevTarget = _this2['c' + prevIndex];
                    prevTarget.style.fillOpacity = 0;

                    prevIndex = nextIndex === 0 ? 7 : nextIndex - 1;
                }

                progress = (progress - PART_PROGRESS * nextIndex) / PART_PROGRESS;

                nextTarget = _this2['c' + nextIndex];
                prevTarget = _this2['c' + prevIndex];

                nextTarget.style.fillOpacity = progress;
                prevTarget.style.fillOpacity = 1 - progress;
            });

            this.stepper.start();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.duration !== this.props.duration) {
                for (var i = 0, n = 8; i < n; i++) {
                    this['c' + i].style.fillOpacity = 0;
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
            var _this3 = this;

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
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c0 = el;
                                }, cx: '42.601', cy: '11.462', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c1 = el;
                                }, cx: '49.063', cy: '27.063', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c2 = el;
                                }, cx: '42.601', cy: '42.663', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c3 = el;
                                }, cx: '27', cy: '49.125', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c4 = el;
                                }, cx: '11.399', cy: '42.663', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c5 = el;
                                }, cx: '4.938', cy: '27.063', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c6 = el;
                                }, cx: '11.399', cy: '11.462', r: '5', style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c7 = el;
                                }, cx: '27', cy: '5', r: '5', style: { fillOpacity: 0 }, fill: strokeColor })
                        )
                    )
                )
            );
        }
    }]);

    return Spinning;
}(_react2.default.Component);

exports.default = Spinning;