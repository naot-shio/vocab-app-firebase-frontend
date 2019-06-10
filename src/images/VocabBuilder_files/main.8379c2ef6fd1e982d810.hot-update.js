webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.8379c2ef6fd1e982d810.hot-update.js.map