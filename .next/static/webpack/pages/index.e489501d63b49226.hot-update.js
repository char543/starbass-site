"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BigText/BigText.tsx":
/*!****************************************!*\
  !*** ./components/BigText/BigText.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BigText; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_useInterval_react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=useInterval!=!react-use */ \"__barrel_optimize__?names=useInterval!=!./node_modules/react-use/esm/index.js\");\n/* harmony import */ var lib_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/classNames */ \"./lib/classNames.ts\");\n// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction BigText(param) {\n    var slides = param.slides;\n    var _this = this;\n    _s();\n    var _React_useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState(0), 2), currentSlide = _React_useState[0], setSlide = _React_useState[1];\n    var totalSlides = slides.length;\n    (0,_barrel_optimize_names_useInterval_react_use__WEBPACK_IMPORTED_MODULE_4__.useInterval)(function() {\n        if (totalSlides - 1 === currentSlide) {\n            setSlide(0);\n        } else {\n            setSlide(currentSlide + 1);\n        }\n    }, 2000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center text-6xl font-extrabold tracking-tight md:text-9xl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl tracking-normal sm:text-3xl\",\n                    children: \"The ultimate underground community\"\n                }, void 0, false, {\n                    fileName: \"/Users/retrack/Desktop/sb-site/components/BigText/BigText.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                slides.map(function(text, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"relative block text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (0,lib_classNames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"absolute transition duration-1000\", currentSlide !== index ? \"opacity-100\" : \"opacity-0\"),\n                                \"aria-hidden\": true,\n                                children: text\n                            }, void 0, false, {\n                                fileName: \"/Users/retrack/Desktop/sb-site/components/BigText/BigText.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (0,lib_classNames__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"decoration-clone bg-clip-text text-transparent bg-gradient-to-r\", index === 0 ? \"from-yellow-400 via-red-500 to-pink-500\" : \"\", index === 1 ? \"from-purple-400 via-pink-500 to-red-500\" : \"\", index === 2 ? \"from-green-400 to-blue-500\" : \"\", index === 3 ? \"from-blue-400 via-indigo-500 to-purple-500\" : \"\", index === 4 ? \"from-green-300 via-teal-400 to-blue-500\" : \"\", index === 5 ? \"from-yellow-300 via-orange-400 to-red-500\" : \"\"),\n                                children: text\n                            }, void 0, false, {\n                                fileName: \"/Users/retrack/Desktop/sb-site/components/BigText/BigText.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, text, true, {\n                        fileName: \"/Users/retrack/Desktop/sb-site/components/BigText/BigText.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, _this);\n                }),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-4 text-2xl tracking-normal sm:text-3xl\",\n                    children: \"Yes Raver \\uD83D\\uDD7A.\"\n                }, void 0, false, {\n                    fileName: \"/Users/retrack/Desktop/sb-site/components/BigText/BigText.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-6 text-lg font-medium tracking-normal text-tertiary\",\n                    children: \"Sign up to get started. \\uD83D\\uDE80\"\n                }, void 0, false, {\n                    fileName: \"/Users/retrack/Desktop/sb-site/components/BigText/BigText.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/retrack/Desktop/sb-site/components/BigText/BigText.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/retrack/Desktop/sb-site/components/BigText/BigText.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(BigText, \"kY64yJLNWYuA9y16SvskNEx7Qcc=\", false, function() {\n    return [\n        _barrel_optimize_names_useInterval_react_use__WEBPACK_IMPORTED_MODULE_4__.useInterval\n    ];\n});\n_c = BigText;\nvar _c;\n$RefreshReg$(_c, \"BigText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JpZ1RleHQvQmlnVGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpRkFBaUY7Ozs7QUFDeEQ7QUFFYztBQUVBO0FBTXhCLFNBQVNHLFFBQVEsS0FBd0I7UUFBeEIsZUFBRUM7OztJQUNoQyxJQUFpQ0osa0JBQUFBLCtEQUFBQSxDQUFBQSxxREFBYyxDQUFDLFFBQXpDTSxlQUEwQk4sb0JBQVpPLFdBQVlQO0lBRWpDLElBQU1RLGNBQWNKLE9BQU9LLE1BQU07SUFFakNSLHlGQUFXQSxDQUFDO1FBQ1YsSUFBSU8sY0FBYyxNQUFNRixjQUFjO1lBQ3BDQyxTQUFTO1FBQ1gsT0FBTztZQUNMQSxTQUFTRCxlQUFlO1FBQzFCO0lBQ0YsR0FBRztJQUVILHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQXVDOzs7Ozs7Z0JBQ25EUCxPQUFPUyxHQUFHLENBQUMsU0FBQ0MsTUFBTUM7b0JBQ2pCLHFCQUNFLDhEQUFDQzt3QkFBZ0JMLFdBQVU7OzBDQUN6Qiw4REFBQ0s7Z0NBQ0NMLFdBQVdULDBEQUFVQSxDQUNuQixxQ0FDQUksaUJBQWlCUyxRQUFRLGdCQUFnQjtnQ0FFM0NFLGVBQWE7MENBRVpIOzs7Ozs7MENBR0gsOERBQUNFO2dDQUNDTCxXQUFXVCwwREFBVUEsQ0FDbkIsbUVBQ0FhLFVBQVUsSUFBSSw0Q0FBNEMsSUFDMURBLFVBQVUsSUFBSSw0Q0FBNEMsSUFDMURBLFVBQVUsSUFBSSwrQkFBK0IsSUFDN0NBLFVBQVUsSUFBSSwrQ0FBK0MsSUFDN0RBLFVBQVUsSUFBSSw0Q0FBNEMsSUFDMURBLFVBQVUsSUFBSSw4Q0FBOEM7MENBSzdERDs7Ozs7Ozt1QkF4Qk1BOzs7OztnQkE0QmY7OEJBQ0EsOERBQUNGO29CQUFFRCxXQUFVOzhCQUE0Qzs7Ozs7OzhCQUd6RCw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQXlEOzs7Ozs7Ozs7Ozs7Ozs7OztBQU05RTtHQXpEd0JSOztRQUt0QkYscUZBQVdBOzs7S0FMV0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CaWdUZXh0L0JpZ1RleHQudHN4PzUwOGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9naXRodWIuY29tL2RlbGJhb2xpdmVpcmEvd2Vic2l0ZS9ibG9iL21haW4vdWkvY2hhbGxlbmdlL1RleHRTbGlkZXIudHN4XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSAncmVhY3QtdXNlJ1xuXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdsaWIvY2xhc3NOYW1lcydcblxuaW50ZXJmYWNlIEJpZ1RleHRQcm9wcyB7XG4gIHNsaWRlczogQXJyYXk8c3RyaW5nPlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWdUZXh0KHsgc2xpZGVzIH06IEJpZ1RleHRQcm9wcykge1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRTbGlkZV0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IHRvdGFsU2xpZGVzID0gc2xpZGVzLmxlbmd0aFxuXG4gIHVzZUludGVydmFsKCgpID0+IHtcbiAgICBpZiAodG90YWxTbGlkZXMgLSAxID09PSBjdXJyZW50U2xpZGUpIHtcbiAgICAgIHNldFNsaWRlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpXG4gICAgfVxuICB9LCAyMDAwKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtNnhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IG1kOnRleHQtOXhsJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC0yeGwgdHJhY2tpbmctbm9ybWFsIHNtOnRleHQtM3hsJz5UaGUgdWx0aW1hdGUgdW5kZXJncm91bmQgY29tbXVuaXR5PC9wPlxuICAgICAgICB7c2xpZGVzLm1hcCgodGV4dCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXt0ZXh0fSBjbGFzc05hbWU9J3JlbGF0aXZlIGJsb2NrIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAnYWJzb2x1dGUgdHJhbnNpdGlvbiBkdXJhdGlvbi0xMDAwJyxcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSAhPT0gaW5kZXggPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCdcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcbiAgICAgICAgICAgICAgICAgICdkZWNvcmF0aW9uLWNsb25lIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXInLFxuICAgICAgICAgICAgICAgICAgaW5kZXggPT09IDAgPyAnZnJvbS15ZWxsb3ctNDAwIHZpYS1yZWQtNTAwIHRvLXBpbmstNTAwJyA6ICcnLFxuICAgICAgICAgICAgICAgICAgaW5kZXggPT09IDEgPyAnZnJvbS1wdXJwbGUtNDAwIHZpYS1waW5rLTUwMCB0by1yZWQtNTAwJyA6ICcnLFxuICAgICAgICAgICAgICAgICAgaW5kZXggPT09IDIgPyAnZnJvbS1ncmVlbi00MDAgdG8tYmx1ZS01MDAnIDogJycsXG4gICAgICAgICAgICAgICAgICBpbmRleCA9PT0gMyA/ICdmcm9tLWJsdWUtNDAwIHZpYS1pbmRpZ28tNTAwIHRvLXB1cnBsZS01MDAnIDogJycsXG4gICAgICAgICAgICAgICAgICBpbmRleCA9PT0gNCA/ICdmcm9tLWdyZWVuLTMwMCB2aWEtdGVhbC00MDAgdG8tYmx1ZS01MDAnIDogJycsXG4gICAgICAgICAgICAgICAgICBpbmRleCA9PT0gNSA/ICdmcm9tLXllbGxvdy0zMDAgdmlhLW9yYW5nZS00MDAgdG8tcmVkLTUwMCcgOiAnJyxcbiAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdtdC00IHRleHQtMnhsIHRyYWNraW5nLW5vcm1hbCBzbTp0ZXh0LTN4bCc+XG4gICAgICAgICAgWWVzIFJhdmVyIPCflbouXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdtdC02IHRleHQtbGcgZm9udC1tZWRpdW0gdHJhY2tpbmctbm9ybWFsIHRleHQtdGVydGlhcnknPlxuICAgICAgICAgIFNpZ24gdXAgdG8gZ2V0IHN0YXJ0ZWQuIPCfmoBcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUludGVydmFsIiwiY2xhc3NOYW1lcyIsIkJpZ1RleHQiLCJzbGlkZXMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRTbGlkZSIsInNldFNsaWRlIiwidG90YWxTbGlkZXMiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwibWFwIiwidGV4dCIsImluZGV4Iiwic3BhbiIsImFyaWEtaGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BigText/BigText.tsx\n"));

/***/ })

});