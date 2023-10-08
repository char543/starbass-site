"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use";
exports.ids = ["vendor-chunks/react-use"];
exports.modules = {

/***/ "./node_modules/react-use/esm/useInterval.js":
/*!***************************************************!*\
  !*** ./node_modules/react-use/esm/useInterval.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar useInterval = function (callback, delay) {\n    var savedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function () { });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        savedCallback.current = callback;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n        if (delay !== null) {\n            var interval_1 = setInterval(function () { return savedCallback.current(); }, delay || 0);\n            return function () { return clearInterval(interval_1); };\n        }\n        return undefined;\n    }, [delay]);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VJbnRlcnZhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFDMUM7QUFDQSx3QkFBd0IsNkNBQU0sZ0JBQWdCO0FBQzlDLElBQUksZ0RBQVM7QUFDYjtBQUNBLEtBQUs7QUFDTCxJQUFJLGdEQUFTO0FBQ2I7QUFDQSx1REFBdUQsaUNBQWlDO0FBQ3hGLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUVBQWUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtbmV4dC10YWlsd2luZC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZUludGVydmFsLmpzPzllZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG52YXIgdXNlSW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgdmFyIHNhdmVkQ2FsbGJhY2sgPSB1c2VSZWYoZnVuY3Rpb24gKCkgeyB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQgPSBjYWxsYmFjaztcbiAgICB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZGVsYXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbF8xID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2F2ZWRDYWxsYmFjay5jdXJyZW50KCk7IH0sIGRlbGF5IHx8IDApO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxfMSk7IH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBbZGVsYXldKTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VJbnRlcnZhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-use/esm/useInterval.js\n");

/***/ })

};
;