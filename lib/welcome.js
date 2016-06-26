'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../less/index.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

require('whatwg-fetch');

var Test = (function (_Component) {
    _inherits(Test, _Component);

    function Test(props, context) {
        _classCallCheck(this, Test);

        _Component.call(this, props, context);
        this.state = {
            test: props.test,
            clickHint: props.clickHint
        };
    }

    Test.prototype.handleClick = function handleClick() {
        var _this = this;

        if (this.state.avatar) {
            return;
        };
        this.setState({
            clickHint: '正连接到api.github.com'
        });
        var fetchUrl = 'https://api.github.com/users/iwfe';
        fetch(fetchUrl, { method: 'GET' }).then(function (response) {
            return response.json();
        }).then(function (res) {
            _this.setState({
                avatar: res['avatar_url'],
                clickHint: '你已访问' + res['login'] + '的github-api信息'
            });
        })['catch'](function (err) {
            alert('error');alert(JSON.stringify(err));
        });
    };

    Test.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        var testStr = '欢迎使用npm-module-boilerplate构建您的npm项目\n,发布模块请别忘了修改package.json字段的信息';
        var index = 1;
        var interval = setInterval(function () {
            _this2.setState({
                test: testStr.slice(0, index)
            });
            index += 4;
            testStr == _this2.state.test && clearInterval(interval);
        }, 50);
    };

    Test.prototype.render = function render() {
        var _this3 = this;

        var _state = this.state;
        var test = _state.test;
        var clickHint = _state.clickHint;
        var avatar = _state.avatar;

        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'div',
                { className: 'test',
                    onClick: function () {
                        return _this3.handleClick();
                    } },
                test
            ),
            _react2['default'].createElement(
                'div',
                { className: 'info',
                    onClick: function () {
                        return _this3.handleClick();
                    } },
                clickHint,
                avatar ? _react2['default'].createElement('img', { src: avatar }) : null
            )
        );
    };

    _createClass(Test, null, [{
        key: 'propTypes',
        value: {
            /**
             * 参数说明
             */
            test: _react.PropTypes.string.isRequired
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            test: 'components initiated',
            clickHint: '请点击执行AJAX网络请求'
        },
        enumerable: true
    }]);

    return Test;
})(_react.Component);

exports['default'] = Test;
module.exports = exports['default'];