"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/layout",{

/***/ "(app-pages-browser)/./app/(dashboard)/_components/SideBarItem.tsx":
/*!*****************************************************!*\
  !*** ./app/(dashboard)/_components/SideBarItem.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SideBarItem = (param)=>{\n    let { icon: Icon, label, href } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isActive = pathname === \"/\" && href === \"/\" || (pathname === null || pathname === void 0 ? void 0 : pathname.startsWith(\"\".concat(href, \"/\"))) || pathname === href;\n    const onClick = ()=>router.push(href);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClick,\n        type: \"button\",\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20\", isActive && \"text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-x-2 py-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                        size: 22,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"text-slate-500\", isActive && \"text-sky-700\")\n                    }, void 0, false, {\n                        fileName: \"/Users/macbook/Desktop/afrimit-learning/app/(dashboard)/_components/SideBarItem.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    label\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbook/Desktop/afrimit-learning/app/(dashboard)/_components/SideBarItem.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"ml-auto opacity-0 border-2 border-primary h-full transition-all\", isActive && \"opacity-100 \")\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Desktop/afrimit-learning/app/(dashboard)/_components/SideBarItem.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbook/Desktop/afrimit-learning/app/(dashboard)/_components/SideBarItem.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SideBarItem, \"0h+B63IiVHeDT9bDhB3JTwv8ebY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SideBarItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBarItem);\nvar _c;\n$RefreshReg$(_c, \"SideBarItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9fY29tcG9uZW50cy9TaWRlQmFySXRlbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWlDO0FBRXdCO0FBUXpELE1BQU1HLGNBQWM7UUFBQyxFQUFFQyxNQUFNQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFvQjs7SUFDOUQsTUFBTUMsV0FBV1AsNERBQVdBO0lBQzVCLE1BQU1RLFNBQVNQLDBEQUFTQTtJQUN4QixNQUFNUSxXQUFXLGFBQWMsT0FBT0gsU0FBUyxRQUFRQyxxQkFBQUEsK0JBQUFBLFNBQVVHLFVBQVUsQ0FBQyxHQUFRLE9BQUxKLE1BQUssVUFBT0MsYUFBYUQ7SUFDeEcsTUFBTUssVUFBVSxJQUFNSCxPQUFPSSxJQUFJLENBQUNOO0lBQ2xDLHFCQUNJLDhEQUFDTztRQUFPRixTQUFTQTtRQUFTRyxNQUFLO1FBQVNDLFdBQVdoQiw4Q0FBRUEsQ0FBQyw4SEFBOEhVLFlBQVk7OzBCQUM1TCw4REFBQ087Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDWDt3QkFBS2EsTUFBTTt3QkFBSUYsV0FBWWhCLDhDQUFFQSxDQUFDLGtCQUFrQlUsWUFBWTs7Ozs7O29CQUM1REo7Ozs7Ozs7MEJBRUwsOERBQUNXO2dCQUFJRCxXQUFXaEIsOENBQUVBLENBQUMsbUVBQW1FVSxZQUFZOzs7Ozs7Ozs7Ozs7QUFHOUc7R0FkTVA7O1FBQ2VGLHdEQUFXQTtRQUNiQyxzREFBU0E7OztLQUZ0QkM7QUFnQk4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhkYXNoYm9hcmQpL19jb21wb25lbnRzL1NpZGVCYXJJdGVtLnRzeD8xZGM4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBMdWNpZGVJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuaW50ZXJmYWNlIFNpZGVCYXJJdGVtUHJvcHMgeyBcbiAgICBpY29uOiBMdWNpZGVJY29uO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgaHJlZjogc3RyaW5nO1xufVxuXG5jb25zdCBTaWRlQmFySXRlbSA9ICh7IGljb246IEljb24sIGxhYmVsLCBocmVmIH06IFNpZGVCYXJJdGVtUHJvcHMpID0+IHsgXG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGlzQWN0aXZlID0gKHBhdGhuYW1lID09PSBcIi9cIiAmJiBocmVmID09PSBcIi9cIikgfHwgcGF0aG5hbWU/LnN0YXJ0c1dpdGgoYCR7aHJlZn0vYCkgfHwgcGF0aG5hbWUgPT09IGhyZWY7XG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHJvdXRlci5wdXNoKGhyZWYpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0yIHRleHQtc2xhdGUtNTAwIHRleHQtc20gZm9udC1bNTAwXSBwbC02IHRyYW5zaXRpb24tYWxsIGhvdmVyOnRleHQtc2xhdGUtNjAwIGhvdmVyOmJnLXNsYXRlLTMwMC8yMFwiLCBpc0FjdGl2ZSAmJiBcInRleHQtc2t5LTcwMCBiZy1za3ktMjAwLzIwIGhvdmVyOmJnLXNreS0yMDAvMjAgaG92ZXI6dGV4dC1za3ktNzAwXCIpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMiBweS00XCI+XG4gICAgICAgICAgICAgICAgPEljb24gc2l6ZT17MjJ9IGNsYXNzTmFtZT17IGNuKFwidGV4dC1zbGF0ZS01MDBcIiwgaXNBY3RpdmUgJiYgXCJ0ZXh0LXNreS03MDBcIil9IC8+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oXCJtbC1hdXRvIG9wYWNpdHktMCBib3JkZXItMiBib3JkZXItcHJpbWFyeSBoLWZ1bGwgdHJhbnNpdGlvbi1hbGxcIiwgaXNBY3RpdmUgJiYgXCJvcGFjaXR5LTEwMCBcIil9PjwvZGl2PlxuICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhckl0ZW0iXSwibmFtZXMiOlsiY24iLCJ1c2VQYXRobmFtZSIsInVzZVJvdXRlciIsIlNpZGVCYXJJdGVtIiwiaWNvbiIsIkljb24iLCJsYWJlbCIsImhyZWYiLCJwYXRobmFtZSIsInJvdXRlciIsImlzQWN0aXZlIiwic3RhcnRzV2l0aCIsIm9uQ2xpY2siLCJwdXNoIiwiYnV0dG9uIiwidHlwZSIsImNsYXNzTmFtZSIsImRpdiIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/_components/SideBarItem.tsx\n"));

/***/ })

});