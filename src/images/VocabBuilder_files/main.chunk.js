(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background-color: #f2f0f0;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_pages_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/Navbar */ "./src/components/pages/Navbar.js");
/* harmony import */ var _components_pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/Home */ "./src/components/pages/Home.js");
/* harmony import */ var _components_sentences_SentenceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sentences/SentenceList */ "./src/components/sentences/SentenceList.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
var _jsxFileName = "/Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/src/App.js";

 // JS files




 // redux




function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_pages_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _components_pages_Home__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/words",
    component: _components_sentences_SentenceList__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/auth/AuthenticationIcon.js":
/*!***************************************************!*\
  !*** ./src/components/auth/AuthenticationIcon.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignUp */ "./src/components/auth/SignUp.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./src/components/auth/Login.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _styles_AuthenticationIconStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/AuthenticationIconStyles */ "./src/styles/AuthenticationIconStyles.js");
var _jsxFileName = "/Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/src/components/auth/AuthenticationIcon.js";


 // font awesome


 // styles







class AuthenticationIcon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSignUpForm: false,
      openLoginForm: false
    };
    this.handleClickOpenSignUp = this.handleClickOpenSignUp.bind(this);
    this.handleCloseSignUp = this.handleCloseSignUp.bind(this);
    this.handleClickOpenLogin = this.handleClickOpenLogin.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
  }

  handleClickOpenSignUp() {
    this.setState({
      openSignUpForm: true
    });
  }

  handleClickOpenLogin() {
    this.setState({
      openLoginForm: true
    });
  }

  handleCloseLogin() {
    this.setState({
      openLoginForm: false
    });
  }

  handleCloseSignUp() {
    this.setState({
      openSignUpForm: false
    });
  }

  render() {
    const classes = this.props.classes;
    const _this$state = this.state,
          open = _this$state.open,
          openSignUpForm = _this$state.openSignUpForm,
          openLoginForm = _this$state.openLoginForm;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.icons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Sign up/Login",
      placement: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "secondary",
      "aria-label": "Add",
      className: classes.icon,
      onClick: () => this.setState({
        open: !open
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Sign up",
      placement: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "secondary",
      "aria-label": "Add",
      className: classes.hiddenIcon,
      style: {
        display: open ? "block" : "none"
      },
      onClick: this.handleClickOpenSignUp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserPlus"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Login",
      placement: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "secondary",
      "aria-label": "Add",
      className: classes.hiddenIcon,
      style: {
        display: open ? "block" : "none"
      },
      onClick: this.handleClickOpenLogin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSignInAlt"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
      open: openSignUpForm,
      "aria-labelledby": "sign-up-dialog-title",
      onClose: this.handleCloseSignUp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignUp__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
      open: openLoginForm,
      "aria-labelledby": "login-dialog-title",
      onClose: this.handleCloseLogin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_5___default()(_styles_AuthenticationIconStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(AuthenticationIcon));

/***/ }),

/***/ "./src/components/auth/Login.js":
/*!**************************************!*\
  !*** ./src/components/auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _styles_AuthenticationStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/AuthenticationStyles */ "./src/styles/AuthenticationStyles.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/userActions */ "./src/redux/actions/userActions.js");
var _jsxFileName = "/Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/src/components/auth/Login.js";

 // styles








 // redux




class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleSubmit = evt => {
      evt.preventDefault();
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      this.props.loginUser(userData);
    };

    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    const classes = this.props.classes;
    const errors = this.state.errors;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "sign-up-dialog-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.dialogIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faSignInAlt"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    })), "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      noValidate: true,
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      className: classes.textField,
      helperText: errors.email,
      error: errors.email ? true : false,
      value: this.state.email,
      onChange: this.handleChange,
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "password",
      name: "password",
      type: "password",
      label: "Password",
      className: classes.textField,
      helperText: errors.password,
      error: errors.password ? true : false,
      value: this.state.password,
      onChange: this.handleChange,
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), errors.general && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "body2",
      className: classes.error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, errors.general), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      variant: "contained",
      color: "primary",
      className: classes.button,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Sign Up")));
  }

}

Login.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  loginUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  UI: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, {
  loginUser: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["loginUser"]
})(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_styles_AuthenticationStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(Login)));

/***/ }),

/***/ "./src/components/auth/SignUp.js":
/*!***************************************!*\
  !*** ./src/components/auth/SignUp.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _styles_AuthenticationStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/AuthenticationStyles */ "./src/styles/AuthenticationStyles.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/userActions */ "./src/redux/actions/userActions.js");
var _jsxFileName = "/Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/src/components/auth/SignUp.js";

 // styles








 // Redux




class SignUp extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleSubmit = evt => {
      evt.preventDefault();
      const newUserData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      };
      this.props.signUpUser(newUserData);
    };

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      loading: false,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    const _this$props = this.props,
          classes = _this$props.classes,
          loading = _this$props.UI.loading;
    const errors = this.state.errors;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "sign-up-dialog-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: classes.dialogIcon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUserPlus"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), "Sign Up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      noValidate: true,
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "name",
      name: "name",
      type: "name",
      label: "User Name",
      className: classes.textField,
      helperText: errors.name,
      error: errors.name ? true : false,
      value: this.state.name,
      onChange: this.handleChange,
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      className: classes.textField,
      helperText: errors.email,
      error: errors.email ? true : false,
      value: this.state.email,
      onChange: this.handleChange,
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "password",
      name: "password",
      type: "text",
      label: "Password",
      className: classes.textField,
      helperText: errors.password,
      error: errors.password ? true : false,
      value: this.state.password,
      onChange: this.handleChange,
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "confirmPassword",
      name: "confirmPassword",
      type: "text",
      label: "Confirm Password",
      className: classes.textField,
      helperText: errors.confirmPassword,
      error: errors.confirmPassword ? true : false,
      value: this.state.confirmPassword,
      onChange: this.handleChange,
      fullWidth: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }), errors.general && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "body2",
      className: classes.error,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, errors.general), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      variant: "contained",
      color: "primary",
      className: classes.button,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Sign Up")));
  }

}

SignUp.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  signUpUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  UI: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  signUpUser: _redux_actions_userActions__WEBPACK_IMPORTED_MODULE_11__["signUpUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapActionsToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_styles_AuthenticationStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(SignUp)));

/***/ }),

/***/ "./src/components/pages/Home.js":
/*!**************************************!*\
  !*** ./src/components/pages/Home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_AuthenticationIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/AuthenticationIcon */ "./src/components/auth/AuthenticationIcon.js");
/* harmony import */ var _styles_HomeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/HomeStyles */ "./src/styles/HomeStyles.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
var _jsxFileName = "/Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/src/components/pages/Home.js";





function Home() {
  const classes = Object(_styles_HomeStyles__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    sm: 2,
    xs: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    sm: 8,
    xs: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "VocabBuilder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Beef up your vocabulary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "and"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.subtitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Enrich your life")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    sm: 2,
    xs: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.auth,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_AuthenticationIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/pages/Navbar.js":
/*!****************************************!*\
  !*** ./src/components/pages/Navbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _styles_NavbarStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/NavbarStyles */ "./src/styles/NavbarStyles.js");
var _jsxFileName = "/Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/src/components/pages/Navbar.js";







function Navbar() {
  const classes = Object(_styles_NavbarStyles__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "static",
    className: classes.AppBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "VocabBuilder"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/sentences/SentenceList.js":
/*!**************************************************!*\
  !*** ./src/components/sentences/SentenceList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_AuthenticationIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/AuthenticationIcon */ "./src/components/auth/AuthenticationIcon.js");
/* harmony import */ var _utils_wordMeaningPairs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/wordMeaningPairs */ "./src/utils/wordMeaningPairs.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ "./node_modules/@material-ui/core/styles/withStyles.js");
/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _styles_SentenceListStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../styles/SentenceListStyles */ "./src/styles/SentenceListStyles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/dataActions */ "./src/redux/actions/dataActions.js");
var _jsxFileName = "/Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/src/components/sentences/SentenceList.js";


 // styles









 // Redux 




class WordList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.props.getSentences();
  }

  render() {
    const classes = this.props.classes;
    const _this$props$data = this.props.data,
          loading = _this$props$data.loading,
          sentences = _this$props$data.sentences;
    let allSentences = !loading ? sentences.map(sentence => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.Card,
      key: sentence.sentenceId,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h5",
      className: classes.sentence,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, sentence.sentence), Object(_utils_wordMeaningPairs__WEBPACK_IMPORTED_MODULE_2__["default"])(sentence).map((pair, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: classes.pairs,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: "secondary",
      "aria-label": "Add",
      className: classes.checkBox,
      onClick: this.handleClickOpenSignUp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faSquare"],
      color: "blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faCheckSquare"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, pair[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, pair[1]))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "body1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, sentence.translation)))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      sm: 2,
      xs: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      sm: 8,
      xs: 10,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, allSentences), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      sm: 2,
      xs: 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.auth,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_AuthenticationIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }))));
  }

}

const mapStateToProps = state => ({
  data: state.data,
  UI: state.UI
});

const mapActionsToProps = {
  getSentences: _redux_actions_dataActions__WEBPACK_IMPORTED_MODULE_13__["getSentences"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapActionsToProps)(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_styles_SentenceListStyles__WEBPACK_IMPORTED_MODULE_11__["default"])(WordList)));

/***/ }),

/***/ "./src/images/background-min.png":
/*!***************************************!*\
  !*** ./src/images/background-min.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background-min.8319f6be.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/redux/actions/dataActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/dataActions.js ***!
  \******************************************/
/*! exports provided: getSentences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSentences", function() { return getSentences; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const getSentences = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_DATA"]
  });
  axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/sentences').then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SENTENCES"],
      payload: res.data
    });
  }).catch(() => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_SENTENCES"],
      payload: []
    });
  });
};

/***/ }),

/***/ "./src/redux/actions/userActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/userActions.js ***!
  \******************************************/
/*! exports provided: signUpUser, loginUser, getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUpUser", function() { return signUpUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");


const signUpUser = newUserData => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOADING_UI"]
  });
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/signup', newUserData).then(res => {
    const FBIdToken = "Bearer ".concat(res.data.token);
    localStorage.setItem('FBIdToken', FBIdToken);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = FBIdToken;
    dispatch(getUserData());
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_ERRORS"]
    });
  }).catch(err => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_ERRORS"],
      payload: err.response.data
    });
  });
};
const loginUser = userData => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOADING_UI"]
  });
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/login', userData).then(res => {
    console.log(res.data);
    const FBIdToken = "Bearer ".concat(res.data.token);
    localStorage.setItem('FBIdToken', FBIdToken);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = FBIdToken;
    dispatch(getUserData());
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_ERRORS"]
    });
  }).catch(err => {
    console.log(err.response.data);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_ERRORS"],
      payload: err.response.data
    });
  });
};
const getUserData = () => dispatch => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/user').then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_USER"],
      payload: res.data
    });
  }).catch(err => console.error(err));
};

/***/ }),

/***/ "./src/redux/reducers/dataReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/dataReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");


const initialState = {
  sentences: [],
  loading: false
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["LOADING_DATA"]:
      return Object(_Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_SENTENCES"]:
      return Object(_Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        sentences: action.payload,
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/reducers/uiReducer.js":
/*!*****************************************!*\
  !*** ./src/redux/reducers/uiReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");


const initialState = {
  loading: false,
  errors: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_ERRORS"]:
      return Object(_Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        errors: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_ERRORS"]:
      return Object(_Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false,
        errors: null
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["LOADING_UI"]:
      return Object(_Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["STOP_LOADING_UI"]:
      return Object(_Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/reducers/userReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/userReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/redux/types.js");


const initialState = {
  authenticated: false,
  credentials: {},
  likes: [],
  stocks: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_AUTHENTICATED"]:
      return Object(_Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        authenticated: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_UNAUTHENTICATED"]:
      return initialState;

    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_USER"]:
      return Object(_Users_naotoshiota_Desktop_vocabulary_vocabulary_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        authenticated: true
      }, action.payload);

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/userReducer */ "./src/redux/reducers/userReducer.js");
/* harmony import */ var _reducers_dataReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/dataReducer */ "./src/redux/reducers/dataReducer.js");
/* harmony import */ var _reducers_uiReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/uiReducer */ "./src/redux/reducers/uiReducer.js");





const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]];
const reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _reducers_userReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  data: _reducers_dataReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  UI: _reducers_uiReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/redux/types.js":
/*!****************************!*\
  !*** ./src/redux/types.js ***!
  \****************************/
/*! exports provided: SET_AUTHENTICATED, SET_UNAUTHENTICATED, SET_USER, LOADING_USER, SET_SENTENCES, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, STOP_LOADING_UI, LOADING_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTHENTICATED", function() { return SET_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_UNAUTHENTICATED", function() { return SET_UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_USER", function() { return LOADING_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SENTENCES", function() { return SET_SENTENCES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERRORS", function() { return SET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_UI", function() { return LOADING_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_LOADING_UI", function() { return STOP_LOADING_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_DATA", function() { return LOADING_DATA; });
// USER REDUCER TYPES
const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
const SET_UNAUTHENTICATED = 'SET_UNAUTHENTICATED';
const SET_USER = 'SET_USER';
const LOADING_USER = 'LOADING_USER'; // DATA REDUCER TYPES

const SET_SENTENCES = 'SET_SENTENCES';
const SET_ERRORS = 'SET_ERRORS';
const CLEAR_ERRORS = 'CLEAR_ERRORS';
const LOADING_UI = 'LOADING_UI';
const STOP_LOADING_UI = 'STOP_LOADING_UI';
const LOADING_DATA = 'LOADING_DATA'; // UI REDUCER TYPES

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/styles/AuthenticationIconStyles.js":
/*!************************************************!*\
  !*** ./src/styles/AuthenticationIconStyles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  icons: {
    width: 54,
    marginTop: -35,
    marginLeft: "auto",
    marginRight: 20,
    zIndex: 5
  },
  icon: {
    marginTop: 7,
    display: "block"
  },
  hiddenIcon: {
    marginTop: 7
  },
  "@media (max-width: 430px)": {
    hiddenIcon: {
      opacity: "0.8"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/styles/AuthenticationStyles.js":
/*!********************************************!*\
  !*** ./src/styles/AuthenticationStyles.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  root: {
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    backgroundColor: "#f5f5f5"
  },
  textField: {
    marginBottom: 5
  },
  button: {
    marginTop: 15
  },
  dialogIcon: {
    marginRight: 10,
    color: "green"
  },
  "@media (max-width: 320px)": {
    root: {
      width: 150
    },
    dialogIcon: {
      display: "none"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/styles/HomeStyles.js":
/*!**********************************!*\
  !*** ./src/styles/HomeStyles.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _images_background_min_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/background-min.png */ "./src/images/background-min.png");
/* harmony import */ var _images_background_min_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_background_min_png__WEBPACK_IMPORTED_MODULE_1__);


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    height: "100vh"
  },
  main: {
    height: "100%",
    background: "radial-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(0,0,0,0.1)), url(".concat(_images_background_min_png__WEBPACK_IMPORTED_MODULE_1___default.a, ")"),
    backgroundPosition: "center",
    backgroundSize: "cover",
    textAlign: "center",
    color: "rgba(0,0,0,0.87)"
  },
  title: {
    fontSize: "5rem",
    marginTop: 0,
    paddingTop: 100,
    fontFamily: "serif"
  },
  subtitle: {
    marginTop: 20,
    fontSize: "2rem"
  },
  "@media (max-width: 645px)": {
    title: {
      fontSize: "4rem"
    }
  },
  "@media (max-width: 600px)": {
    auth: {
      float: "right"
    }
  },
  "@media (max-width: 530px)": {
    title: {
      fontSize: "3rem"
    }
  },
  "@media (max-width: 432px)": {
    title: {
      paddingTop: 70
    },
    subtitle: {
      fontSize: "1.3rem"
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "./src/styles/NavbarStyles.js":
/*!************************************!*\
  !*** ./src/styles/NavbarStyles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  AppBar: {
    boxShadow: "none",
    marginBottom: 0
  },
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    "& a": {
      textDecoration: "none",
      color: "#fafafa",
      fontFamily: "Serif"
    }
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
    "& a": {
      fontWeight: 600
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "./src/styles/SentenceListStyles.js":
/*!******************************************!*\
  !*** ./src/styles/SentenceListStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  Card: {
    margin: 30,
    width: 700,
    marginLeft: "auto",
    marginRight: "auto"
  },
  sentence: {
    color: "blue",
    paddingBottom: 10
  },
  pairs: {
    textIndent: "5%"
  },
  japanese: {
    textIndent: "5%"
  },
  example: {
    textIndent: "7%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./src/utils/wordMeaningPairs.js":
/*!***************************************!*\
  !*** ./src/utils/wordMeaningPairs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const wordMeaningParis = sentence => {
  if (sentence.words.length === sentence.meanings.length) {
    let wordSets = [];

    for (let i = 0; i < sentence.words.length; i++) {
      wordSets.push([sentence.words[i], sentence.meanings[i]]);
    }

    return wordSets;
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (wordMeaningParis);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/naotoshiota/Desktop/vocabulary/vocabulary-frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map