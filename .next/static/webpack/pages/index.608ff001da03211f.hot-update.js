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

/***/ "./src/components/Chat/MessageBar.jsx":
/*!********************************************!*\
  !*** ./src/components/Chat/MessageBar.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction MessageBar() {\n    _s();\n    const [{ currentChatUser , userInfo , socket  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [message, setmessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showemojiPicker, setshowemojiPicker] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleemojimodel = ()=>{\n        setshowemojiPicker(!showemojiPicker);\n    };\n    const handleemojiClick = ()=>{};\n    const sendMsg = async ()=>{\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.ADD_MESSAGE_ROUTE, {\n                to: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data.id,\n                from: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,\n                message\n            }).then(console.log(\"sent successfully\"));\n            socket.current.emit(\"send-msg\", {\n                to: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data.id,\n                from: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,\n                message: data.message\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducercases.ADD_MESSAGE,\n                newMessage: {\n                    ...data.message\n                },\n                fromSelf: true\n            });\n            setmessage(\"\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-panel-header-background h-20 px-4 flex items-center gap-6 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsEmojiSmile, {\n                            className: \" text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Emoji\",\n                            id: \"emoji-opener\",\n                            onClick: handleemojimodel\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 7\n                        }, this),\n                        showemojiPicker && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 28\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_7__.ImAttachment, {\n                            className: \" text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Attach File\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg h-10 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your message\",\n                        onChange: (e)=>setmessage(e.target.value),\n                        value: message,\n                        className: \" bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-10 items-center justify-center \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdSend, {\n                            className: \" text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Send message\",\n                            onClick: sendMsg\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n        lineNumber: 45,\n        columnNumber: 10\n    }, this);\n}\n_s(MessageBar, \"Q98hZg3UBxXLdV7EfMM6e45tHWU=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBar);\nvar _c;\n$RefreshReg$(_c, \"MessageBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ1A7QUFDRztBQUM1QjtBQUNjO0FBQ007QUFDQTtBQUNIO0FBQ0g7QUFFeEMsU0FBU1UsYUFBYTs7SUFDcEIsTUFBTSxDQUFDLEVBQUNDLGdCQUFlLEVBQUNDLFNBQVEsRUFBQ0MsT0FBTSxFQUFDLEVBQUNDLFNBQVMsR0FBR2QsdUVBQWdCQTtJQUNyRSxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVELE1BQU1jLG1CQUFtQixJQUFJO1FBQzNCRCxtQkFBbUIsQ0FBQ0Q7SUFDdEI7SUFDQSxNQUFNRyxtQkFBbUIsSUFBSSxDQUU3QjtJQUNBLE1BQU1DLFVBQVUsVUFBUztRQUN4QixJQUFJO1lBQ0gsTUFBTSxFQUFDQyxLQUFJLEVBQUMsR0FBRyxNQUFNbkIsa0RBQVUsQ0FBQ0QsK0RBQWlCQSxFQUFDO2dCQUNoRHNCLEVBQUUsRUFBQ2IsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJXLElBQUksQ0FBQ0csRUFBRTtnQkFDM0JDLE1BQUtkLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWEsRUFBRTtnQkFDakJWO1lBQ0YsR0FBR1ksSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUM7WUFDcEJoQixPQUFPaUIsT0FBTyxDQUFDQyxJQUFJLENBQUMsWUFBVztnQkFDN0JQLEVBQUUsRUFBQ2IsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJXLElBQUksQ0FBQ0csRUFBRTtnQkFDM0JDLE1BQUtkLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWEsRUFBRTtnQkFDakJWLFNBQVFPLEtBQUtQLE9BQU87WUFDdEI7WUFDREQsU0FBUztnQkFDUmtCLE1BQUsvQix3RUFBd0I7Z0JBQzdCaUMsWUFBVztvQkFDVCxHQUFHWixLQUFLUCxPQUFPO2dCQUNqQjtnQkFDQW9CLFVBQVMsSUFBSTtZQUNkO1lBQ0NuQixXQUFXO1FBQ1osRUFBRSxPQUFPb0IsT0FBTztZQUNmUixRQUFRQyxHQUFHLENBQUNPO1FBQ2I7SUFDRDtJQUNBLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNwQjs7OEJBQ0EsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2hDLHdEQUFZQTs0QkFDWmdDLFdBQVU7NEJBQWlEQyxPQUFNOzRCQUFRZCxJQUFHOzRCQUFlZSxTQUFTckI7Ozs7Ozt3QkFHbkdGLGlDQUFtQiw4REFBQ29COzs7OztzQ0FFdEIsOERBQUM3Qix3REFBWUE7NEJBQUM4QixXQUFVOzRCQUFpREMsT0FBTTs7Ozs7Ozs7Ozs7OzhCQUVqRiw4REFBQ0Y7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNHO3dCQUFNVCxNQUFLO3dCQUFPVSxhQUFZO3dCQUFvQkMsVUFBVSxDQUFDQyxJQUFJNUIsV0FBVzRCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3QkFBR0EsT0FBTy9CO3dCQUFTdUIsV0FBVTs7Ozs7Ozs7Ozs7OEJBRTFILDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1M7a0NBQ0MsNEVBQUN0QyxrREFBTUE7NEJBQUM2QixXQUFVOzRCQUFpREMsT0FBTTs0QkFBZUMsU0FBU25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16RztHQXhEU1g7O1FBQzhDVixtRUFBZ0JBOzs7S0FEOURVO0FBMERULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXQvTWVzc2FnZUJhci5qc3g/MTRlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgcmVkdWNlcmNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQUREX01FU1NBR0VfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnNFbW9qaVNtaWxlIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IEZhTWljcm9waG9uZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQge0ltQXR0YWNobWVudH0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcclxuaW1wb3J0IHsgTWRTZW5kIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlQmFyKCkge1xyXG4gIGNvbnN0IFt7Y3VycmVudENoYXRVc2VyLHVzZXJJbmZvLHNvY2tldH0sZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRtZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzaG93ZW1vamlQaWNrZXIsIHNldHNob3dlbW9qaVBpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlZW1vamltb2RlbCA9ICgpPT57XHJcbiAgICBzZXRzaG93ZW1vamlQaWNrZXIoIXNob3dlbW9qaVBpY2tlcik7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZWVtb2ppQ2xpY2sgPSAoKT0+e1xyXG5cclxuICB9XHJcbiAgY29uc3Qgc2VuZE1zZyA9IGFzeW5jKCk9PntcclxuICAgdHJ5IHtcclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoQUREX01FU1NBR0VfUk9VVEUse1xyXG4gICAgICB0bzpjdXJyZW50Q2hhdFVzZXI/LmRhdGEuaWQsXHJcbiAgICAgIGZyb206dXNlckluZm8/LmlkLFxyXG4gICAgICBtZXNzYWdlXHJcbiAgICB9KS50aGVuKGNvbnNvbGUubG9nKFwic2VudCBzdWNjZXNzZnVsbHlcIikpXHJcbiAgICBzb2NrZXQuY3VycmVudC5lbWl0KFwic2VuZC1tc2dcIix7XHJcbiAgICAgIHRvOmN1cnJlbnRDaGF0VXNlcj8uZGF0YS5pZCxcclxuICAgICAgZnJvbTp1c2VySW5mbz8uaWQsXHJcbiAgICAgIG1lc3NhZ2U6ZGF0YS5tZXNzYWdlLFxyXG4gICAgfSk7XHJcbiAgIGRpc3BhdGNoKHtcclxuICAgIHR5cGU6cmVkdWNlcmNhc2VzLkFERF9NRVNTQUdFLFxyXG4gICAgbmV3TWVzc2FnZTp7XHJcbiAgICAgIC4uLmRhdGEubWVzc2FnZSxcclxuICAgIH0sXHJcbiAgICBmcm9tU2VsZjp0cnVlXHJcbiAgIH0pXHJcbiAgICBzZXRtZXNzYWdlKFwiXCIpO1xyXG4gICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICB9XHJcbiAgfVxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCBoLTIwIHB4LTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgcmVsYXRpdmVcIj5cclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cclxuICAgICAgPEJzRW1vamlTbWlsZVxyXG4gICAgICAgY2xhc3NOYW1lPVwiIHRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiIHRpdGxlPVwiRW1vamlcIiBpZD1cImVtb2ppLW9wZW5lclwiIG9uQ2xpY2s9e2hhbmRsZWVtb2ppbW9kZWx9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtcclxuICAgICAgICBzaG93ZW1vamlQaWNrZXIgJiYgPGRpdj48L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICA8SW1BdHRhY2htZW50IGNsYXNzTmFtZT1cIiB0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIiB0aXRsZT1cIkF0dGFjaCBGaWxlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBoLTEwIGZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2VcIiBvbkNoYW5nZT17KGUpPT5zZXRtZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e21lc3NhZ2V9IGNsYXNzTmFtZT1cIiBiZy1pbnB1dC1iYWNrZ3JvdW5kIHRleHQtc20gZm9jdXM6b3V0bGluZS1ub25lIHRleHQtd2hpdGUgaC0xMCByb3VuZGVkLWxnIHB4LTUgcHktNCB3LWZ1bGxcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgIDxidXR0b24+XHJcbiAgICAgICAgPE1kU2VuZCBjbGFzc05hbWU9XCIgdGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCIgdGl0bGU9XCJTZW5kIG1lc3NhZ2VcIiBvbkNsaWNrPXtzZW5kTXNnfS8+XHJcbiAgICAgICAgey8qIDxGYU1pY3JvcGhvbmUgY2xhc3NOYW1lPVwiIHRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiIHRpdGxlPVwiUmVjb3JkXCIvPiAqL31cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUJhcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyY2FzZXMiLCJBRERfTUVTU0FHRV9ST1VURSIsImF4aW9zIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJzRW1vamlTbWlsZSIsIkZhTWljcm9waG9uZSIsIkltQXR0YWNobWVudCIsIk1kU2VuZCIsIk1lc3NhZ2VCYXIiLCJjdXJyZW50Q2hhdFVzZXIiLCJ1c2VySW5mbyIsInNvY2tldCIsImRpc3BhdGNoIiwibWVzc2FnZSIsInNldG1lc3NhZ2UiLCJzaG93ZW1vamlQaWNrZXIiLCJzZXRzaG93ZW1vamlQaWNrZXIiLCJoYW5kbGVlbW9qaW1vZGVsIiwiaGFuZGxlZW1vamlDbGljayIsInNlbmRNc2ciLCJkYXRhIiwicG9zdCIsInRvIiwiaWQiLCJmcm9tIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiZW1pdCIsInR5cGUiLCJBRERfTUVTU0FHRSIsIm5ld01lc3NhZ2UiLCJmcm9tU2VsZiIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvbkNsaWNrIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/MessageBar.jsx\n"));

/***/ })

});