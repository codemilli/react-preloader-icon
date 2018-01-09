(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PreloaderIcon"] = factory();
	else
		root["PreloaderIcon"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpPreloaderIcon([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PreloaderIcon = __webpack_require__(14);

var _PreloaderIcon2 = _interopRequireDefault(_PreloaderIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _PreloaderIcon2.default;
module.exports.ICON_TYPE = _PreloaderIcon.ICON_TYPE;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ICON_TYPE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(17);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _objectAssign = __webpack_require__(1);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _styles = __webpack_require__(19);

var _Oval = __webpack_require__(20);

var _Oval2 = _interopRequireDefault(_Oval);

var _TailSpin = __webpack_require__(27);

var _TailSpin2 = _interopRequireDefault(_TailSpin);

var _Spinning = __webpack_require__(28);

var _Spinning2 = _interopRequireDefault(_Spinning);

var _Puff = __webpack_require__(29);

var _Puff2 = _interopRequireDefault(_Puff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICON_TYPE = {
    OVAL: 'oval',
    TAIL_SPIN: 'tailSpin',
    SPINNING: 'spinning',
    PUFF: 'puff'
};

var PreloaderIcon = function (_React$Component) {
    _inherits(PreloaderIcon, _React$Component);

    function PreloaderIcon() {
        _classCallCheck(this, PreloaderIcon);

        return _possibleConstructorReturn(this, (PreloaderIcon.__proto__ || Object.getPrototypeOf(PreloaderIcon)).apply(this, arguments));
    }

    _createClass(PreloaderIcon, [{
        key: 'render',
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
                case ICON_TYPE.PUFF:
                    return _react2.default.createElement(_Puff2.default, options);
                default:
                    return null;
            }
        }
    }]);

    return PreloaderIcon;
}(_react2.default.Component);

PreloaderIcon.propTypes = {
    className: _propTypes2.default.string,
    type: _propTypes2.default.string,
    size: _propTypes2.default.number,
    unit: _propTypes2.default.string,
    strokeWidth: _propTypes2.default.number,
    strokeColor: _propTypes2.default.string,
    duration: _propTypes2.default.number
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

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(18)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(2);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(7);
var assign = __webpack_require__(1);

var ReactPropTypesSecret = __webpack_require__(10);
var checkPropTypes = __webpack_require__(8);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("undefined" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stepperjs = __webpack_require__(3);

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = __webpack_require__(4);

var _linear2 = _interopRequireDefault(_linear);

var _pfx = __webpack_require__(11);

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
                _this2.target.style[transform] = rotate + '(' + progress * 360 + 'deg)';
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
            var _this3 = this;

            var strokeWidth = this.props.strokeWidth;
            var radius = 50 - strokeWidth / 2;

            return _react2.default.createElement(
                'div',
                { ref: function ref(el) {
                        return _this3.target = el;
                    }, className: 'preloader-icon__oval', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '100%',
                        height: '100%',
                        viewBox: '0 0 102 102',
                        stroke: this.props.strokeColor
                    },
                    _react2.default.createElement(
                        'g',
                        { fill: 'none' },
                        _react2.default.createElement(
                            'g',
                            { transform: 'translate(1 1)', strokeWidth: strokeWidth },
                            _react2.default.createElement('circle', { stroke: this.props.strokeColor, strokeOpacity: '.5', cx: '50', cy: '50', r: radius }),
                            _react2.default.createElement('path', { d: 'M50,' + strokeWidth / 2 + ' A' + radius + ',' + radius + ',0,0,1,' + (50 + radius) + ',50' })
                        )
                    )
                )
            );
        }
    }]);

    return Oval;
}(_react2.default.Component);

exports.default = Oval;

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stepperjs = __webpack_require__(3);

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = __webpack_require__(4);

var _linear2 = _interopRequireDefault(_linear);

var _pfx = __webpack_require__(11);

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
                _this2.target.style[transform] = rotate + '(' + progress * 360 + 'deg)';
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
            var _this3 = this;

            var strokeWidth = this.props.strokeWidth;
            var radius = 50 - strokeWidth / 2;

            return _react2.default.createElement(
                'div',
                { ref: function ref(el) {
                        return _this3.target = el;
                    }, className: 'preloader-icon__tail-spin', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '100%',
                        height: '100%',
                        viewBox: '0 0 102 102'
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
                            { transform: 'translate(1 1)' },
                            _react2.default.createElement('path', {
                                d: 'M50,' + strokeWidth / 2 + ' A' + radius + ',' + radius + ',0,0,1,' + (50 + radius) + ',50',
                                stroke: 'url(#a)',
                                strokeWidth: strokeWidth
                            }),
                            _react2.default.createElement('circle', { fill: this.props.strokeColor, cx: 50 + radius, cy: '50', r: strokeWidth / 2 })
                        )
                    )
                )
            );
        }
    }]);

    return TailSpin;
}(_react2.default.Component);

exports.default = TailSpin;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stepperjs = __webpack_require__(3);

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = __webpack_require__(4);

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
                progress = progress >= 1 ? 0.9999 : progress;

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

            var radius = 50 - strokeWidth / 2;

            return _react2.default.createElement(
                'div',
                { className: 'preloader-icon__spinning', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '100%',
                        height: '100%',
                        viewBox: '0 0 560 560'
                    },
                    _react2.default.createElement(
                        'g',
                        { fill: 'none' },
                        _react2.default.createElement(
                            'g',
                            {
                                transform: 'translate(10 10)',
                                stroke: strokeColor,
                                strokeWidth: strokeWidth
                            },
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c0 = el;
                                }, cx: '426.01', cy: '114.62', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c1 = el;
                                }, cx: '490.63', cy: '270.63', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c2 = el;
                                }, cx: '426.01', cy: '426.63', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c3 = el;
                                }, cx: '270', cy: '491.25', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c4 = el;
                                }, cx: '113.99', cy: '426.63', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c5 = el;
                                }, cx: '49.38', cy: '270.63', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c6 = el;
                                }, cx: '113.99', cy: '114.62', r: radius, style: { fillOpacity: 0 }, fill: strokeColor }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c7 = el;
                                }, cx: '270', cy: '50', r: radius, style: { fillOpacity: 0 }, fill: strokeColor })
                        )
                    )
                )
            );
        }
    }]);

    return Spinning;
}(_react2.default.Component);

exports.default = Spinning;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _stepperjs = __webpack_require__(3);

var _stepperjs2 = _interopRequireDefault(_stepperjs);

var _linear = __webpack_require__(4);

var _linear2 = _interopRequireDefault(_linear);

var _bezierEasing = __webpack_require__(12);

var _bezierEasing2 = _interopRequireDefault(_bezierEasing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var spread = (0, _bezierEasing2.default)(0.165, 0.84, 0.44, 1);
var fade = (0, _bezierEasing2.default)(0.3, 0.61, 0.355, 1);

var Puff = function (_React$Component) {
    _inherits(Puff, _React$Component);

    function Puff(props) {
        _classCallCheck(this, Puff);

        var _this = _possibleConstructorReturn(this, (Puff.__proto__ || Object.getPrototypeOf(Puff)).call(this, props));

        _this.radius = 50 - props.strokeWidth / 2;
        _this.stepper = new _stepperjs2.default({
            duration: props.duration,
            easing: _linear2.default,
            loop: true
        });
        return _this;
    }

    _createClass(Puff, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var c1 = this.c1,
                c2 = this.c2;


            this.stepper.on('update', function (n) {
                var n2 = n >= .5 ? n - .5 : n + .5;

                c1.setAttribute('r', spread(n) * _this2.radius);
                c2.setAttribute('r', spread(n2) * _this2.radius);
                c1.style.strokeOpacity = 1 - fade(n);
                c2.style.strokeOpacity = 1 - fade(n2);
            });

            this.stepper.start();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.strokeWidth !== this.props.strokeWidth) {
                this.radius = 50 - this.props.strokeWidth / 2;
            }

            if (prevProps.duration !== this.props.duration) {
                this.c1.setAttribute('r', '0');
                this.c2.setAttribute('r', '0');
                this.c1.style.strokeOpacity = 0;
                this.c2.style.strokeOpacity = 0;
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

            return _react2.default.createElement(
                'div',
                { className: 'preloader-icon__puff', style: { height: '100%' } },
                _react2.default.createElement(
                    'svg',
                    {
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 102 102',
                        stroke: this.props.strokeColor
                    },
                    _react2.default.createElement(
                        'g',
                        { fill: 'none' },
                        _react2.default.createElement(
                            'g',
                            { transform: 'translate(1 1)', strokeWidth: this.props.strokeWidth },
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c1 = el;
                                }, cx: '50', cy: '50', r: '0', style: { strokeOpacity: 0 } }),
                            _react2.default.createElement('circle', { ref: function ref(el) {
                                    return _this3.c2 = el;
                                }, cx: '50', cy: '50', r: '0', style: { strokeOpacity: 0 } })
                        )
                    )
                )
            );
        }
    }]);

    return Puff;
}(_react2.default.Component);

exports.default = Puff;

/***/ })
],[13]);
});
//# sourceMappingURL=browser.js.map