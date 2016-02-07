(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Doldolyi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _Oval = require('./Oval');

var _Oval2 = _interopRequireDefault(_Oval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Doldolyi = function (_React$Component) {
    _inherits(Doldolyi, _React$Component);

    function Doldolyi() {
        _classCallCheck(this, Doldolyi);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Doldolyi).apply(this, arguments));
    }

    _createClass(Doldolyi, [{
        key: 'render',

        /**
         * @returns {ReactElement|XML}
         */
        value: function render() {
            var className = 'doldolyi ' + this.props.className;
            var style = Object.assign({ width: this.props.size, height: this.props.size }, this.props.style);

            if (this.props.alignCenter) {
                style = Object.assign(style, _styles.center);
            }

            return _react2.default.createElement(
                'div',
                { className: className, style: style },
                _react2.default.createElement(
                    'div',
                    { className: 'doldolyi__inner', style: _styles.inner },
                    _react2.default.createElement(
                        'em',
                        { style: _styles.blind },
                        'Loading...'
                    ),
                    _react2.default.createElement(_Oval2.default, {
                        strokeWidth: this.props.strokeWidth,
                        strokeColor: this.props.strokeColor
                    })
                )
            );
        }
    }]);

    return Doldolyi;
}(_react2.default.Component);

/**
 * @property {?string} size
 * @property {?string} strokeWidth
 * @property {?string} strokeColor
 */

Doldolyi.propTypes = {
    size: _react2.default.PropTypes.string,
    strokeWidth: _react2.default.PropTypes.string,
    strokeColor: _react2.default.PropTypes.string
};

/**
 * @property {string} className
 * @property {string} size
 * @property {string} strokeWidth
 * @property {string} strokeColor
 */
Doldolyi.defaultProps = {
    className: '',
    size: '32px',
    strokeWidth: '3px',
    strokeColor: '#f0ad4e',
    alignCenter: true
};

exports.default = Doldolyi;

},{"./Oval":2,"./styles":4,"react":"react"}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _velocityReact = require('velocity-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Oval = function (_React$Component) {
    _inherits(Oval, _React$Component);

    function Oval() {
        _classCallCheck(this, Oval);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Oval).apply(this, arguments));
    }

    _createClass(Oval, [{
        key: 'render',

        /**
         * @returns {ReactElement|XML}
         */
        value: function render() {
            var strokeWidth = parseInt(this.props.strokeWidth, 10);
            var translateSize = strokeWidth / 2 > 0 ? strokeWidth / 2 : 1;
            var viewBoxSize = strokeWidth - 2 + 38;
            var style = {
                width: "100%",
                height: "100%",
                display: "block",
                stroke: this.props.strokeColor
            };

            return _react2.default.createElement(
                _velocityReact.VelocityComponent,
                {
                    animation: { rotateZ: '360deg' },
                    duration: 800,
                    easing: 'linear',
                    loop: true,
                    runOnMount: true
                },
                _react2.default.createElement(
                    'div',
                    { className: 'doldolyi__oval', style: { width: 'inherit', height: 'inherit' } },
                    _react2.default.createElement(
                        'svg',
                        {
                            xmlns: 'http://www.w3.org/svg/2000',
                            className: 'doldolyi__oval-svg',
                            viewBox: '0 0 ' + viewBoxSize + ' ' + viewBoxSize,
                            style: style
                        },
                        _react2.default.createElement(
                            'g',
                            { fill: 'none' },
                            _react2.default.createElement(
                                'g',
                                { transform: 'translate(' + translateSize + ' ' + translateSize + ')', strokeWidth: this.props.strokeWidth },
                                _react2.default.createElement('circle', { stroke: this.props.strokeColor, strokeOpacity: '.5', cx: '18', cy: '18', r: '18' }),
                                _react2.default.createElement('path', { d: 'M36 18c0-9.94-8.06-18-18-18' })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Oval;
}(_react2.default.Component);

/**
 * @property {string!} strokeWidth
 * @property {string!} strokeColor
 */

Oval.propTypes = {
    strokeWidth: _react2.default.PropTypes.string.isRequired,
    strokeColor: _react2.default.PropTypes.string.isRequired
};

exports.default = Oval;

},{"react":"react","velocity-react":"velocity-react"}],3:[function(require,module,exports){
'use strict';

require('core-js/fn/object/assign');

var _Doldolyi = require('./Doldolyi');

var _Doldolyi2 = _interopRequireDefault(_Doldolyi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Doldolyi2.default;

},{"./Doldolyi":1,"core-js/fn/object/assign":"core-js/fn/object/assign"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var inner = {
    width: 'inherit',
    height: 'inherit',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)'
};

var blind = {
    fontSize: 0,
    height: 0,
    left: 0,
    lineHeight: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    visibility: 'hidden',
    width: 0
};

var center = {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    margin: 'auto'
};

exports.inner = inner;
exports.blind = blind;
exports.center = center;

},{}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvRG9sZG9seWkuanMiLCJzcmMvT3ZhbC5qcyIsInNyYy9pbmRleC5qcyIsInNyYy9zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0lNOzs7Ozs7Ozs7Ozs7Ozs7aUNBS087QUFDTCxnQkFBTSwwQkFBd0IsS0FBSyxLQUFMLENBQVcsU0FBWCxDQUR6QjtBQUVMLGdCQUFJLFFBQVEsT0FBTyxNQUFQLENBQWMsRUFBQyxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsUUFBUSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQS9DLEVBQWlFLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBekUsQ0FGQzs7QUFJTCxnQkFBSSxLQUFLLEtBQUwsQ0FBVyxXQUFYLEVBQXdCO0FBQ3hCLHdCQUFRLE9BQU8sTUFBUCxDQUFjLEtBQWQsaUJBQVIsQ0FEd0I7YUFBNUI7O0FBSUEsbUJBQ0k7O2tCQUFLLFdBQVcsU0FBWCxFQUFzQixPQUFPLEtBQVAsRUFBM0I7Z0JBQ0k7O3NCQUFLLFdBQVUsaUJBQVYsRUFBNEIsc0JBQWpDO29CQUNJOzswQkFBSSxzQkFBSjs7cUJBREo7b0JBRUk7QUFDSSxxQ0FBYSxLQUFLLEtBQUwsQ0FBVyxXQUFYO0FBQ2IscUNBQWEsS0FBSyxLQUFMLENBQVcsV0FBWDtxQkFGakIsQ0FGSjtpQkFESjthQURKLENBUks7Ozs7V0FMUDtFQUFpQixnQkFBTSxTQUFOOzs7Ozs7OztBQWdDdkIsU0FBUyxTQUFULEdBQXFCO0FBQ2pCLFVBQU0sZ0JBQU0sU0FBTixDQUFnQixNQUFoQjtBQUNOLGlCQUFhLGdCQUFNLFNBQU4sQ0FBZ0IsTUFBaEI7QUFDYixpQkFBYSxnQkFBTSxTQUFOLENBQWdCLE1BQWhCO0NBSGpCOzs7Ozs7OztBQVlBLFNBQVMsWUFBVCxHQUF3QjtBQUNwQixlQUFXLEVBQVg7QUFDQSxVQUFNLE1BQU47QUFDQSxpQkFBYSxLQUFiO0FBQ0EsaUJBQWEsU0FBYjtBQUNBLGlCQUFhLElBQWI7Q0FMSjs7a0JBUWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNyRFQ7Ozs7Ozs7Ozs7Ozs7OztpQ0FLTztBQUNMLGdCQUFNLGNBQWMsU0FBUyxLQUFLLEtBQUwsQ0FBVyxXQUFYLEVBQXdCLEVBQWpDLENBQWQsQ0FERDtBQUVMLGdCQUFNLGdCQUFnQixjQUFjLENBQWQsR0FBa0IsQ0FBbEIsR0FBc0IsY0FBYyxDQUFkLEdBQWtCLENBQXhDLENBRmpCO0FBR0wsZ0JBQU0sY0FBYyxjQUFjLENBQWQsR0FBa0IsRUFBbEIsQ0FIZjtBQUlMLGdCQUFNLFFBQVE7QUFDVix1QkFBTyxNQUFQO0FBQ0Esd0JBQVEsTUFBUjtBQUNBLHlCQUFTLE9BQVQ7QUFDQSx3QkFBUSxLQUFLLEtBQUwsQ0FBVyxXQUFYO2FBSk4sQ0FKRDs7QUFXTCxtQkFDSTs7O0FBQ0ksK0JBQVcsRUFBQyxTQUFTLFFBQVQsRUFBWjtBQUNBLDhCQUFVLEdBQVY7QUFDQSw0QkFBTyxRQUFQO0FBQ0EsMEJBQU0sSUFBTjtBQUNBLGdDQUFZLElBQVo7aUJBTEo7Z0JBT0k7O3NCQUFLLFdBQVUsZ0JBQVYsRUFBMkIsT0FBTyxFQUFDLE9BQU8sU0FBUCxFQUFrQixRQUFRLFNBQVIsRUFBMUIsRUFBaEM7b0JBQ0k7OztBQUNJLG1DQUFNLDRCQUFOO0FBQ0EsdUNBQVUsb0JBQVY7QUFDQSw4Q0FBZ0Isb0JBQWUsV0FBL0I7QUFDQSxtQ0FBTyxLQUFQO3lCQUpKO3dCQU1JOzs4QkFBRyxNQUFLLE1BQUwsRUFBSDs0QkFDSTs7a0NBQUcsMEJBQXdCLHNCQUFpQixtQkFBekMsRUFBMkQsYUFBYSxLQUFLLEtBQUwsQ0FBVyxXQUFYLEVBQTNFO2dDQUNJLDBDQUFRLFFBQVEsS0FBSyxLQUFMLENBQVcsV0FBWCxFQUF3QixlQUFjLElBQWQsRUFBbUIsSUFBRyxJQUFILEVBQVEsSUFBRyxJQUFILEVBQVEsR0FBRSxJQUFGLEVBQTNFLENBREo7Z0NBRUksd0NBQU0sR0FBRSw2QkFBRixFQUFOLENBRko7NkJBREo7eUJBTko7cUJBREo7aUJBUEo7YUFESixDQVhLOzs7O1dBTFA7RUFBYSxnQkFBTSxTQUFOOzs7Ozs7O0FBZ0RuQixLQUFLLFNBQUwsR0FBaUI7QUFDYixpQkFBYSxnQkFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBQXZCO0FBQ2IsaUJBQWEsZ0JBQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQUF2QjtDQUZqQjs7a0JBS2U7Ozs7Ozs7Ozs7Ozs7QUNyRGYsT0FBTyxPQUFQOzs7Ozs7OztBQ0hBLElBQU0sUUFBUTtBQUNWLFdBQU8sU0FBUDtBQUNBLFlBQVEsU0FBUjtBQUNBLGNBQVUsVUFBVjtBQUNBLGNBQVUsUUFBVjtBQUNBLGVBQVcsc0JBQVg7Q0FMRTs7QUFRTixJQUFNLFFBQVE7QUFDVixjQUFVLENBQVY7QUFDQSxZQUFRLENBQVI7QUFDQSxVQUFNLENBQU47QUFDQSxnQkFBWSxDQUFaO0FBQ0EsY0FBVSxRQUFWO0FBQ0EsY0FBVSxVQUFWO0FBQ0EsU0FBSyxDQUFMO0FBQ0EsZ0JBQVksUUFBWjtBQUNBLFdBQU8sQ0FBUDtDQVRFOztBQVlOLElBQU0sU0FBUztBQUNYLGNBQVUsVUFBVjtBQUNBLFVBQU0sQ0FBTjtBQUNBLFNBQUssQ0FBTDtBQUNBLFdBQU8sQ0FBUDtBQUNBLFlBQVEsQ0FBUjtBQUNBLFlBQVEsTUFBUjtDQU5FOztRQVNFO1FBQU87UUFBTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpbm5lciwgYmxpbmQsIGNlbnRlcn0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IE92YWwgZnJvbSAnLi9PdmFsJztcblxuY2xhc3MgRG9sZG9seWkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1JlYWN0RWxlbWVudHxYTUx9XG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBgZG9sZG9seWkgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX1gO1xuICAgICAgICBsZXQgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt3aWR0aDogdGhpcy5wcm9wcy5zaXplLCBoZWlnaHQ6IHRoaXMucHJvcHMuc2l6ZX0sIHRoaXMucHJvcHMuc3R5bGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmFsaWduQ2VudGVyKSB7XG4gICAgICAgICAgICBzdHlsZSA9IE9iamVjdC5hc3NpZ24oc3R5bGUsIGNlbnRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvbGRvbHlpX19pbm5lclwiIHN0eWxlPXtpbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxlbSBzdHlsZT17YmxpbmR9PkxvYWRpbmcuLi48L2VtPlxuICAgICAgICAgICAgICAgICAgICA8T3ZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9e3RoaXMucHJvcHMuc3Ryb2tlV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj17dGhpcy5wcm9wcy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcHJvcGVydHkgez9zdHJpbmd9IHNpemVcbiAqIEBwcm9wZXJ0eSB7P3N0cmluZ30gc3Ryb2tlV2lkdGhcbiAqIEBwcm9wZXJ0eSB7P3N0cmluZ30gc3Ryb2tlQ29sb3JcbiAqL1xuRG9sZG9seWkucHJvcFR5cGVzID0ge1xuICAgIHNpemU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3Ryb2tlV2lkdGg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3Ryb2tlQ29sb3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsYXNzTmFtZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNpemVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzdHJva2VXaWR0aFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHN0cm9rZUNvbG9yXG4gKi9cbkRvbGRvbHlpLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNpemU6ICczMnB4JyxcbiAgICBzdHJva2VXaWR0aDogJzNweCcsXG4gICAgc3Ryb2tlQ29sb3I6ICcjZjBhZDRlJyxcbiAgICBhbGlnbkNlbnRlcjogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRG9sZG9seWk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtWZWxvY2l0eUNvbXBvbmVudH0gZnJvbSAndmVsb2NpdHktcmVhY3QnO1xuXG5jbGFzcyBPdmFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtSZWFjdEVsZW1lbnR8WE1MfVxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGggPSBwYXJzZUludCh0aGlzLnByb3BzLnN0cm9rZVdpZHRoLCAxMCk7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZVNpemUgPSBzdHJva2VXaWR0aCAvIDIgPiAwID8gc3Ryb2tlV2lkdGggLyAyIDogMTtcbiAgICAgICAgY29uc3Qgdmlld0JveFNpemUgPSBzdHJva2VXaWR0aCAtIDIgKyAzODtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgICAgICAgc3Ryb2tlOiB0aGlzLnByb3BzLnN0cm9rZUNvbG9yXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWZWxvY2l0eUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17e3JvdGF0ZVo6ICczNjBkZWcnfX1cbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17ODAwfVxuICAgICAgICAgICAgICAgIGVhc2luZz1cImxpbmVhclwiXG4gICAgICAgICAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBydW5Pbk1vdW50PXt0cnVlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9sZG9seWlfX292YWxcIiBzdHlsZT17e3dpZHRoOiAnaW5oZXJpdCcsIGhlaWdodDogJ2luaGVyaXQnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvc3ZnLzIwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9sZG9seWlfX292YWwtc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9e2AwIDAgJHt2aWV3Qm94U2l6ZX0gJHt2aWV3Qm94U2l6ZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3RyYW5zbGF0ZVNpemV9ICR7dHJhbnNsYXRlU2l6ZX0pYH0gc3Ryb2tlV2lkdGg9e3RoaXMucHJvcHMuc3Ryb2tlV2lkdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZT17dGhpcy5wcm9wcy5zdHJva2VDb2xvcn0gc3Ryb2tlT3BhY2l0eT1cIi41XCIgY3g9XCIxOFwiIGN5PVwiMThcIiByPVwiMThcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVmVsb2NpdHlDb21wb25lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIX0gc3Ryb2tlV2lkdGhcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIX0gc3Ryb2tlQ29sb3JcbiAqL1xuT3ZhbC5wcm9wVHlwZXMgPSB7XG4gICAgc3Ryb2tlV2lkdGg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBzdHJva2VDb2xvcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBPdmFsO1xuIiwiaW1wb3J0ICdjb3JlLWpzL2ZuL29iamVjdC9hc3NpZ24nO1xuaW1wb3J0IERvbGRvbHlpIGZyb20gJy4vRG9sZG9seWknO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERvbGRvbHlpO1xuIiwiY29uc3QgaW5uZXIgPSB7XG4gICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknXG59O1xuXG5jb25zdCBibGluZCA9IHtcbiAgICBmb250U2l6ZTogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbGVmdDogMCxcbiAgICBsaW5lSGVpZ2h0OiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgd2lkdGg6IDBcbn07XG5cbmNvbnN0IGNlbnRlciA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbWFyZ2luOiAnYXV0bydcbn07XG5cbmV4cG9ydCB7aW5uZXIsIGJsaW5kLCBjZW50ZXJ9O1xuIl19
