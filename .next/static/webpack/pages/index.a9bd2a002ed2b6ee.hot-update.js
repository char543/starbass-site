/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Particles/index.js":
/*!***************************************!*\
  !*** ./components/Particles/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var _particle_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./particle-config */ \"./components/Particles/particle-config.js\");\n/* harmony import */ var _particle_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_particle_config__WEBPACK_IMPORTED_MODULE_3__);\n// import React from 'react';\n// import { useCallback } from 'react';\n// import { loadFull } from 'tsparticles';\n// import Particles from 'react-tsparticles';\n// import Img1 from '/public/img-1.png';\n// import Img2 from '/public/img-3.png';\n// import Img3 from '/public/img-4.png';\n// import Img4 from '/public/img-5.png';\n// import Img5 from '/public/img-6.png';\n// import Img6 from '/public/img-8.png';\n// const ParticlesComponent = () => {\n// \treturn (\n// \t\t<>\n// \t\t\t<Particles\n// \t\t\t\tclassName=\"particle\"\n// \t\t\t\tparams={{\n// \t\t\t\t\tparticles: {\n// \t\t\t\t\t\tnumber: {\n// \t\t\t\t\t\t\tvalue: 15,\n// \t\t\t\t\t\t\tdensity: { enable: true, value_area: 850 },\n// \t\t\t\t\t\t},\n// \t\t\t\t\t\tshape: {\n// \t\t\t\t\t\t\ttype: ['images'],\n// \t\t\t\t\t\t\timage: [\n// \t\t\t\t\t\t\t\t{\n// \t\t\t\t\t\t\t\t\tsrc: `${Img1?.src}`,\n// \t\t\t\t\t\t\t\t\twidth: 50,\n// \t\t\t\t\t\t\t\t\theight: 52,\n// \t\t\t\t\t\t\t\t},\n// \t\t\t\t\t\t\t\t{\n// \t\t\t\t\t\t\t\t\tsrc: `${Img2?.src}`,\n// \t\t\t\t\t\t\t\t\twidth: 50,\n// \t\t\t\t\t\t\t\t\theight: 52,\n// \t\t\t\t\t\t\t\t},\n// \t\t\t\t\t\t\t\t{\n// \t\t\t\t\t\t\t\t\tsrc: `${Img3?.src}`,\n// \t\t\t\t\t\t\t\t\twidth: 20,\n// \t\t\t\t\t\t\t\t\theight: 23,\n// \t\t\t\t\t\t\t\t},\n// \t\t\t\t\t\t\t\t{\n// \t\t\t\t\t\t\t\t\tsrc: `${Img4?.src}`,\n// \t\t\t\t\t\t\t\t\twidth: 20,\n// \t\t\t\t\t\t\t\t\theight: 23,\n// \t\t\t\t\t\t\t\t},\n// \t\t\t\t\t\t\t\t{\n// \t\t\t\t\t\t\t\t\tsrc: `${Img5?.src}`,\n// \t\t\t\t\t\t\t\t\twidth: 50,\n// \t\t\t\t\t\t\t\t\theight: 53,\n// \t\t\t\t\t\t\t\t},\n// \t\t\t\t\t\t\t\t{\n// \t\t\t\t\t\t\t\t\tsrc: `${Img6?.src}`,\n// \t\t\t\t\t\t\t\t\twidth: 50,\n// \t\t\t\t\t\t\t\t\theight: 53,\n// \t\t\t\t\t\t\t\t},\n// \t\t\t\t\t\t\t],\n// \t\t\t\t\t\t},\n// \t\t\t\t\t\topacity: {\n// \t\t\t\t\t\t\tvalue: 0.57626369048095938,\n// \t\t\t\t\t\t\trandom: false,\n// \t\t\t\t\t\t\tanim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },\n// \t\t\t\t\t\t},\n// \t\t\t\t\t\tsize: {\n// \t\t\t\t\t\t\tvalue: 8,\n// \t\t\t\t\t\t\trandom: true,\n// \t\t\t\t\t\t\tanim: { enable: false, speed: 40, size_min: 0.8, sync: false },\n// \t\t\t\t\t\t},\n// \t\t\t\t\t\tline_linked: {\n// \t\t\t\t\t\t\tenable: false,\n// \t\t\t\t\t\t\tdistance: 150,\n// \t\t\t\t\t\t\tcolor: '#ffffff',\n// \t\t\t\t\t\t\topacity: 0.4,\n// \t\t\t\t\t\t\twidth: 1,\n// \t\t\t\t\t\t},\n// \t\t\t\t\t\tmove: {\n// \t\t\t\t\t\t\tenable: true,\n// \t\t\t\t\t\t\tspeed: 3,\n// \t\t\t\t\t\t\tdirection: 'none',\n// \t\t\t\t\t\t\trandom: false,\n// \t\t\t\t\t\t\tstraight: false,\n// \t\t\t\t\t\t\tout_mode: 'out',\n// \t\t\t\t\t\t\tbounce: false,\n// \t\t\t\t\t\t\tattract: { enable: false, rotateX: 600, rotateY: 1200 },\n// \t\t\t\t\t\t},\n// \t\t\t\t\t},\n// \t\t\t\t\tinteractivity: {\n// \t\t\t\t\t\tdetect_on: 'canvas',\n// \t\t\t\t\t\tevents: {\n// \t\t\t\t\t\t\tonhover: { enable: true, mode: 'repulse' },\n// \t\t\t\t\t\t\tonclick: { enable: true, mode: 'push' },\n// \t\t\t\t\t\t\tresize: true,\n// \t\t\t\t\t\t},\n// \t\t\t\t\t\tmodes: {\n// \t\t\t\t\t\t\tgrab: { distance: 400, line_linked: { opacity: 1 } },\n// \t\t\t\t\t\t\tbubble: {\n// \t\t\t\t\t\t\t\tdistance: 400,\n// \t\t\t\t\t\t\t\tsize: 40,\n// \t\t\t\t\t\t\t\tduration: 2,\n// \t\t\t\t\t\t\t\topacity: 8,\n// \t\t\t\t\t\t\t\tspeed: 3,\n// \t\t\t\t\t\t\t},\n// \t\t\t\t\t\t\trepulse: { distance: 200, duration: 0.4 },\n// \t\t\t\t\t\t\tpush: { particles_nb: 4 },\n// \t\t\t\t\t\t\tremove: { particles_nb: 2 },\n// \t\t\t\t\t\t},\n// \t\t\t\t\t},\n// \t\t\t\t\tretina_detect: true,\n// \t\t\t\t}}\n// \t\t\t/>\n// \t\t</>\n// \t);\n// };\n// export default ParticlesComponent;\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import styles from '../styles/Home.module.css';\nvar ParticlesComponent = function() {\n    _s();\n    var particlesInit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(engine) {\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(engine);\n                        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets\n                        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready\n                        // starting from v2 you can add only the features you need reducing the bundle size\n                        return [\n                            4,\n                            (0,tsparticles__WEBPACK_IMPORTED_MODULE_6__.loadFull)(engine)\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function(engine) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    var particlesLoaded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function(container) {\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_5__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            console.log(container)\n                        ];\n                    case 1:\n                        _state.sent();\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function(container) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"particle-background\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            id: \"tsparticles\",\n            particlesLoaded: \"particlesLoaded\",\n            init: particlesInit,\n            loaded: particlesLoaded,\n            options: (_particle_config__WEBPACK_IMPORTED_MODULE_3___default()),\n            height: \"100vh\",\n            width: \"100vw\"\n        }, void 0, false, {\n            fileName: \"/Users/retrack/Desktop/sb-site/components/Particles/index.js\",\n            lineNumber: 138,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/retrack/Desktop/sb-site/components/Particles/index.js\",\n        lineNumber: 137,\n        columnNumber: 5\n    }, _this);\n};\n_s(ParticlesComponent, \"PjleD03JXt5mR6AE5+SxrsWvXBc=\");\n_c = ParticlesComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParticlesComponent);\nvar _c;\n$RefreshReg$(_c, \"ParticlesComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0UsOERBQUNDO1FBQUlDLElBQUc7a0JBQ04sNEVBQUNWLHlEQUFTQTtZQUNSVSxJQUFHO1lBQ0hILGlCQUFnQjtZQUNoQkksTUFBTVI7WUFDTlMsUUFBUUw7WUFDUk0sU0FBU1oseURBQWVBO1lBQ3hCYSxRQUFPO1lBQ1BDLE9BQU07Ozs7Ozs7Ozs7O0FBSWQ7R0F6Qk1iO0tBQUFBO0FBMkJOLCtEQUFlQSxrQkFBa0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXJ0aWNsZXMvaW5kZXguanM/Y2UxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBsb2FkRnVsbCB9IGZyb20gJ3RzcGFydGljbGVzJztcbi8vIGltcG9ydCBQYXJ0aWNsZXMgZnJvbSAncmVhY3QtdHNwYXJ0aWNsZXMnO1xuLy8gaW1wb3J0IEltZzEgZnJvbSAnL3B1YmxpYy9pbWctMS5wbmcnO1xuLy8gaW1wb3J0IEltZzIgZnJvbSAnL3B1YmxpYy9pbWctMy5wbmcnO1xuLy8gaW1wb3J0IEltZzMgZnJvbSAnL3B1YmxpYy9pbWctNC5wbmcnO1xuLy8gaW1wb3J0IEltZzQgZnJvbSAnL3B1YmxpYy9pbWctNS5wbmcnO1xuLy8gaW1wb3J0IEltZzUgZnJvbSAnL3B1YmxpYy9pbWctNi5wbmcnO1xuLy8gaW1wb3J0IEltZzYgZnJvbSAnL3B1YmxpYy9pbWctOC5wbmcnO1xuXG4vLyBjb25zdCBQYXJ0aWNsZXNDb21wb25lbnQgPSAoKSA9PiB7XG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PD5cbi8vIFx0XHRcdDxQYXJ0aWNsZXNcbi8vIFx0XHRcdFx0Y2xhc3NOYW1lPVwicGFydGljbGVcIlxuLy8gXHRcdFx0XHRwYXJhbXM9e3tcbi8vIFx0XHRcdFx0XHRwYXJ0aWNsZXM6IHtcbi8vIFx0XHRcdFx0XHRcdG51bWJlcjoge1xuLy8gXHRcdFx0XHRcdFx0XHR2YWx1ZTogMTUsXG4vLyBcdFx0XHRcdFx0XHRcdGRlbnNpdHk6IHsgZW5hYmxlOiB0cnVlLCB2YWx1ZV9hcmVhOiA4NTAgfSxcbi8vIFx0XHRcdFx0XHRcdH0sXG5cbi8vIFx0XHRcdFx0XHRcdHNoYXBlOiB7XG4vLyBcdFx0XHRcdFx0XHRcdHR5cGU6IFsnaW1hZ2VzJ10sXG4vLyBcdFx0XHRcdFx0XHRcdGltYWdlOiBbXG4vLyBcdFx0XHRcdFx0XHRcdFx0e1xuLy8gXHRcdFx0XHRcdFx0XHRcdFx0c3JjOiBgJHtJbWcxPy5zcmN9YCxcbi8vIFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiA1MCxcbi8vIFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNTIsXG4vLyBcdFx0XHRcdFx0XHRcdFx0fSxcbi8vIFx0XHRcdFx0XHRcdFx0XHR7XG4vLyBcdFx0XHRcdFx0XHRcdFx0XHRzcmM6IGAke0ltZzI/LnNyY31gLFxuLy8gXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwLFxuLy8gXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1Mixcbi8vIFx0XHRcdFx0XHRcdFx0XHR9LFxuLy8gXHRcdFx0XHRcdFx0XHRcdHtcbi8vIFx0XHRcdFx0XHRcdFx0XHRcdHNyYzogYCR7SW1nMz8uc3JjfWAsXG4vLyBcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjAsXG4vLyBcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDIzLFxuLy8gXHRcdFx0XHRcdFx0XHRcdH0sXG4vLyBcdFx0XHRcdFx0XHRcdFx0e1xuLy8gXHRcdFx0XHRcdFx0XHRcdFx0c3JjOiBgJHtJbWc0Py5zcmN9YCxcbi8vIFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyMCxcbi8vIFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMjMsXG4vLyBcdFx0XHRcdFx0XHRcdFx0fSxcbi8vIFx0XHRcdFx0XHRcdFx0XHR7XG4vLyBcdFx0XHRcdFx0XHRcdFx0XHRzcmM6IGAke0ltZzU/LnNyY31gLFxuLy8gXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDUwLFxuLy8gXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA1Myxcbi8vIFx0XHRcdFx0XHRcdFx0XHR9LFxuLy8gXHRcdFx0XHRcdFx0XHRcdHtcbi8vIFx0XHRcdFx0XHRcdFx0XHRcdHNyYzogYCR7SW1nNj8uc3JjfWAsXG4vLyBcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNTAsXG4vLyBcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDUzLFxuLy8gXHRcdFx0XHRcdFx0XHRcdH0sXG4vLyBcdFx0XHRcdFx0XHRcdF0sXG4vLyBcdFx0XHRcdFx0XHR9LFxuLy8gXHRcdFx0XHRcdFx0b3BhY2l0eToge1xuLy8gXHRcdFx0XHRcdFx0XHR2YWx1ZTogMC41NzYyNjM2OTA0ODA5NTkzOCxcbi8vIFx0XHRcdFx0XHRcdFx0cmFuZG9tOiBmYWxzZSxcbi8vIFx0XHRcdFx0XHRcdFx0YW5pbTogeyBlbmFibGU6IGZhbHNlLCBzcGVlZDogMSwgb3BhY2l0eV9taW46IDAuMSwgc3luYzogZmFsc2UgfSxcbi8vIFx0XHRcdFx0XHRcdH0sXG4vLyBcdFx0XHRcdFx0XHRzaXplOiB7XG4vLyBcdFx0XHRcdFx0XHRcdHZhbHVlOiA4LFxuLy8gXHRcdFx0XHRcdFx0XHRyYW5kb206IHRydWUsXG4vLyBcdFx0XHRcdFx0XHRcdGFuaW06IHsgZW5hYmxlOiBmYWxzZSwgc3BlZWQ6IDQwLCBzaXplX21pbjogMC44LCBzeW5jOiBmYWxzZSB9LFxuLy8gXHRcdFx0XHRcdFx0fSxcbi8vIFx0XHRcdFx0XHRcdGxpbmVfbGlua2VkOiB7XG4vLyBcdFx0XHRcdFx0XHRcdGVuYWJsZTogZmFsc2UsXG4vLyBcdFx0XHRcdFx0XHRcdGRpc3RhbmNlOiAxNTAsXG4vLyBcdFx0XHRcdFx0XHRcdGNvbG9yOiAnI2ZmZmZmZicsXG4vLyBcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuNCxcbi8vIFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEsXG4vLyBcdFx0XHRcdFx0XHR9LFxuLy8gXHRcdFx0XHRcdFx0bW92ZToge1xuLy8gXHRcdFx0XHRcdFx0XHRlbmFibGU6IHRydWUsXG4vLyBcdFx0XHRcdFx0XHRcdHNwZWVkOiAzLFxuLy8gXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb246ICdub25lJyxcbi8vIFx0XHRcdFx0XHRcdFx0cmFuZG9tOiBmYWxzZSxcbi8vIFx0XHRcdFx0XHRcdFx0c3RyYWlnaHQ6IGZhbHNlLFxuLy8gXHRcdFx0XHRcdFx0XHRvdXRfbW9kZTogJ291dCcsXG4vLyBcdFx0XHRcdFx0XHRcdGJvdW5jZTogZmFsc2UsXG4vLyBcdFx0XHRcdFx0XHRcdGF0dHJhY3Q6IHsgZW5hYmxlOiBmYWxzZSwgcm90YXRlWDogNjAwLCByb3RhdGVZOiAxMjAwIH0sXG4vLyBcdFx0XHRcdFx0XHR9LFxuLy8gXHRcdFx0XHRcdH0sXG4vLyBcdFx0XHRcdFx0aW50ZXJhY3Rpdml0eToge1xuLy8gXHRcdFx0XHRcdFx0ZGV0ZWN0X29uOiAnY2FudmFzJyxcbi8vIFx0XHRcdFx0XHRcdGV2ZW50czoge1xuLy8gXHRcdFx0XHRcdFx0XHRvbmhvdmVyOiB7IGVuYWJsZTogdHJ1ZSwgbW9kZTogJ3JlcHVsc2UnIH0sXG4vLyBcdFx0XHRcdFx0XHRcdG9uY2xpY2s6IHsgZW5hYmxlOiB0cnVlLCBtb2RlOiAncHVzaCcgfSxcbi8vIFx0XHRcdFx0XHRcdFx0cmVzaXplOiB0cnVlLFxuLy8gXHRcdFx0XHRcdFx0fSxcbi8vIFx0XHRcdFx0XHRcdG1vZGVzOiB7XG4vLyBcdFx0XHRcdFx0XHRcdGdyYWI6IHsgZGlzdGFuY2U6IDQwMCwgbGluZV9saW5rZWQ6IHsgb3BhY2l0eTogMSB9IH0sXG4vLyBcdFx0XHRcdFx0XHRcdGJ1YmJsZToge1xuLy8gXHRcdFx0XHRcdFx0XHRcdGRpc3RhbmNlOiA0MDAsXG4vLyBcdFx0XHRcdFx0XHRcdFx0c2l6ZTogNDAsXG4vLyBcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDIsXG4vLyBcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogOCxcbi8vIFx0XHRcdFx0XHRcdFx0XHRzcGVlZDogMyxcbi8vIFx0XHRcdFx0XHRcdFx0fSxcbi8vIFx0XHRcdFx0XHRcdFx0cmVwdWxzZTogeyBkaXN0YW5jZTogMjAwLCBkdXJhdGlvbjogMC40IH0sXG4vLyBcdFx0XHRcdFx0XHRcdHB1c2g6IHsgcGFydGljbGVzX25iOiA0IH0sXG4vLyBcdFx0XHRcdFx0XHRcdHJlbW92ZTogeyBwYXJ0aWNsZXNfbmI6IDIgfSxcbi8vIFx0XHRcdFx0XHRcdH0sXG4vLyBcdFx0XHRcdFx0fSxcbi8vIFx0XHRcdFx0XHRyZXRpbmFfZGV0ZWN0OiB0cnVlLFxuLy8gXHRcdFx0XHR9fVxuLy8gXHRcdFx0Lz5cbi8vIFx0XHQ8Lz5cbi8vIFx0KTtcbi8vIH07XG4vLyBleHBvcnQgZGVmYXVsdCBQYXJ0aWNsZXNDb21wb25lbnQ7XG5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9hZEZ1bGwgfSBmcm9tICd0c3BhcnRpY2xlcyc7XG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXRzcGFydGljbGVzJztcbmltcG9ydCBQYXJ0aWNsZXNDb25maWcgZnJvbSAnLi9wYXJ0aWNsZS1jb25maWcnO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuY29uc3QgUGFydGljbGVzQ29tcG9uZW50ID0gKCkgPT4ge1xuICBjb25zdCBwYXJ0aWNsZXNJbml0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKGVuZ2luZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVuZ2luZSk7XG4gICAgLy8geW91IGNhbiBpbml0aWF0ZSB0aGUgdHNQYXJ0aWNsZXMgaW5zdGFuY2UgKGVuZ2luZSkgaGVyZSwgYWRkaW5nIGN1c3RvbSBzaGFwZXMgb3IgcHJlc2V0c1xuICAgIC8vIHRoaXMgbG9hZHMgdGhlIHRzcGFydGljbGVzIHBhY2thZ2UgYnVuZGxlLCBpdCdzIHRoZSBlYXNpZXN0IG1ldGhvZCBmb3IgZ2V0dGluZyBldmVyeXRoaW5nIHJlYWR5XG4gICAgLy8gc3RhcnRpbmcgZnJvbSB2MiB5b3UgY2FuIGFkZCBvbmx5IHRoZSBmZWF0dXJlcyB5b3UgbmVlZCByZWR1Y2luZyB0aGUgYnVuZGxlIHNpemVcbiAgICBhd2FpdCBsb2FkRnVsbChlbmdpbmUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcGFydGljbGVzTG9hZGVkID0gdXNlQ2FsbGJhY2soYXN5bmMgKGNvbnRhaW5lcikgPT4ge1xuICAgIGF3YWl0IGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdwYXJ0aWNsZS1iYWNrZ3JvdW5kJz5cbiAgICAgIDxQYXJ0aWNsZXNcbiAgICAgICAgaWQ9J3RzcGFydGljbGVzJ1xuICAgICAgICBwYXJ0aWNsZXNMb2FkZWQ9J3BhcnRpY2xlc0xvYWRlZCdcbiAgICAgICAgaW5pdD17cGFydGljbGVzSW5pdH1cbiAgICAgICAgbG9hZGVkPXtwYXJ0aWNsZXNMb2FkZWR9XG4gICAgICAgIG9wdGlvbnM9e1BhcnRpY2xlc0NvbmZpZ31cbiAgICAgICAgaGVpZ2h0PScxMDB2aCdcbiAgICAgICAgd2lkdGg9JzEwMHZ3J1xuICAgICAgPjwvUGFydGljbGVzPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFydGljbGVzQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwibG9hZEZ1bGwiLCJQYXJ0aWNsZXMiLCJQYXJ0aWNsZXNDb25maWciLCJQYXJ0aWNsZXNDb21wb25lbnQiLCJwYXJ0aWNsZXNJbml0IiwiZW5naW5lIiwiY29uc29sZSIsImxvZyIsInBhcnRpY2xlc0xvYWRlZCIsImNvbnRhaW5lciIsImRpdiIsImlkIiwiaW5pdCIsImxvYWRlZCIsIm9wdGlvbnMiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Particles/index.js\n"));

/***/ }),

/***/ "./components/Particles/particle-config.js":
/*!*************************************************!*\
  !*** ./components/Particles/particle-config.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});