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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction MessageBar() {\n    _s();\n    const [{ currentChatUser , userInfo , socket  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [message, setmessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showemojiPicker, setshowemojiPicker] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleemojimodel = ()=>{\n        setshowemojiPicker(!s);\n    };\n    const handleemojiClick = ()=>{};\n    const sendMsg = async ()=>{\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.ADD_MESSAGE_ROUTE, {\n                to: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data.id,\n                from: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,\n                message\n            }).then(console.log(\"sent successfully\"));\n            socket.current.emit(\"send-msg\", {\n                to: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data.id,\n                from: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,\n                message: data.message\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducercases.ADD_MESSAGE,\n                newMessage: {\n                    ...data.message\n                },\n                fromSelf: true\n            });\n            setmessage(\"\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-panel-header-background h-20 px-4 flex items-center gap-6 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsEmojiSmile, {\n                            className: \" text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Emoji\",\n                            id: \"emoji-opener\",\n                            onClick: handleemojimodel\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 7\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_7__.ImAttachment, {\n                            className: \" text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Attach File\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg h-10 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your message\",\n                        onChange: (e)=>setmessage(e.target.value),\n                        value: message,\n                        className: \" bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-10 items-center justify-center \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdSend, {\n                            className: \" text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Send message\",\n                            onClick: sendMsg\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n        lineNumber: 45,\n        columnNumber: 10\n    }, this);\n}\n_s(MessageBar, \"Q98hZg3UBxXLdV7EfMM6e45tHWU=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBar);\nvar _c;\n$RefreshReg$(_c, \"MessageBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ1A7QUFDRztBQUM1QjtBQUNjO0FBQ007QUFDQTtBQUNIO0FBQ0g7QUFFeEMsU0FBU1UsYUFBYTs7SUFDcEIsTUFBTSxDQUFDLEVBQUNDLGdCQUFlLEVBQUNDLFNBQVEsRUFBQ0MsT0FBTSxFQUFDLEVBQUNDLFNBQVMsR0FBR2QsdUVBQWdCQTtJQUNyRSxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDWSxpQkFBaUJDLG1CQUFtQixHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVELE1BQU1jLG1CQUFtQixJQUFJO1FBQzNCRCxtQkFBbUIsQ0FBQ0U7SUFDdEI7SUFDQSxNQUFNQyxtQkFBbUIsSUFBSSxDQUU3QjtJQUNBLE1BQU1DLFVBQVUsVUFBUztRQUN4QixJQUFJO1lBQ0gsTUFBTSxFQUFDQyxLQUFJLEVBQUMsR0FBRyxNQUFNcEIsa0RBQVUsQ0FBQ0QsK0RBQWlCQSxFQUFDO2dCQUNoRHVCLEVBQUUsRUFBQ2QsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJZLElBQUksQ0FBQ0csRUFBRTtnQkFDM0JDLE1BQUtmLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWMsRUFBRTtnQkFDakJYO1lBQ0YsR0FBR2EsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUM7WUFDcEJqQixPQUFPa0IsT0FBTyxDQUFDQyxJQUFJLENBQUMsWUFBVztnQkFDN0JQLEVBQUUsRUFBQ2QsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJZLElBQUksQ0FBQ0csRUFBRTtnQkFDM0JDLE1BQUtmLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWMsRUFBRTtnQkFDakJYLFNBQVFRLEtBQUtSLE9BQU87WUFDdEI7WUFDREQsU0FBUztnQkFDUm1CLE1BQUtoQyx3RUFBd0I7Z0JBQzdCa0MsWUFBVztvQkFDVCxHQUFHWixLQUFLUixPQUFPO2dCQUNqQjtnQkFDQXFCLFVBQVMsSUFBSTtZQUNkO1lBQ0NwQixXQUFXO1FBQ1osRUFBRSxPQUFPcUIsT0FBTztZQUNmUixRQUFRQyxHQUFHLENBQUNPO1FBQ2I7SUFDRDtJQUNBLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNwQjs7OEJBQ0EsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2pDLHdEQUFZQTs0QkFDWmlDLFdBQVU7NEJBQWlEQyxPQUFNOzRCQUFRZCxJQUFHOzRCQUFlZSxTQUFTdEI7Ozs7OztzQ0FFckcsOERBQUNYLHdEQUFZQTs0QkFBQytCLFdBQVU7NEJBQWlEQyxPQUFNOzs7Ozs7Ozs7Ozs7OEJBRWpGLDhEQUFDRjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0c7d0JBQU1ULE1BQUs7d0JBQU9VLGFBQVk7d0JBQW9CQyxVQUFVLENBQUNDLElBQUk3QixXQUFXNkIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUFHQSxPQUFPaEM7d0JBQVN3QixXQUFVOzs7Ozs7Ozs7Ozs4QkFFMUgsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDUztrQ0FDQyw0RUFBQ3ZDLGtEQUFNQTs0QkFBQzhCLFdBQVU7NEJBQWlEQyxPQUFNOzRCQUFlQyxTQUFTbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpHO0dBckRTWjs7UUFDOENWLG1FQUFnQkE7OztLQUQ5RFU7QUF1RFQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9NZXNzYWdlQmFyLmpzeD8xNGViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xyXG5pbXBvcnQgeyByZWR1Y2VyY2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBBRERfTUVTU0FHRV9ST1VURSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCc0Vtb2ppU21pbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgRmFNaWNyb3Bob25lIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7SW1BdHRhY2htZW50fSBmcm9tIFwicmVhY3QtaWNvbnMvaW1cIlxyXG5pbXBvcnQgeyBNZFNlbmQgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VCYXIoKSB7XHJcbiAgY29uc3QgW3tjdXJyZW50Q2hhdFVzZXIsdXNlckluZm8sc29ja2V0fSxkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldG1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3dlbW9qaVBpY2tlciwgc2V0c2hvd2Vtb2ppUGlja2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVlbW9qaW1vZGVsID0gKCk9PntcclxuICAgIHNldHNob3dlbW9qaVBpY2tlcighcylcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlZW1vamlDbGljayA9ICgpPT57XHJcblxyXG4gIH1cclxuICBjb25zdCBzZW5kTXNnID0gYXN5bmMoKT0+e1xyXG4gICB0cnkge1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChBRERfTUVTU0FHRV9ST1VURSx7XHJcbiAgICAgIHRvOmN1cnJlbnRDaGF0VXNlcj8uZGF0YS5pZCxcclxuICAgICAgZnJvbTp1c2VySW5mbz8uaWQsXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH0pLnRoZW4oY29uc29sZS5sb2coXCJzZW50IHN1Y2Nlc3NmdWxseVwiKSlcclxuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJzZW5kLW1zZ1wiLHtcclxuICAgICAgdG86Y3VycmVudENoYXRVc2VyPy5kYXRhLmlkLFxyXG4gICAgICBmcm9tOnVzZXJJbmZvPy5pZCxcclxuICAgICAgbWVzc2FnZTpkYXRhLm1lc3NhZ2UsXHJcbiAgICB9KTtcclxuICAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTpyZWR1Y2VyY2FzZXMuQUREX01FU1NBR0UsXHJcbiAgICBuZXdNZXNzYWdlOntcclxuICAgICAgLi4uZGF0YS5tZXNzYWdlLFxyXG4gICAgfSxcclxuICAgIGZyb21TZWxmOnRydWVcclxuICAgfSlcclxuICAgIHNldG1lc3NhZ2UoXCJcIik7XHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgIH1cclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiIGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIGgtMjAgcHgtNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNiByZWxhdGl2ZVwiPlxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxyXG4gICAgICA8QnNFbW9qaVNtaWxlXHJcbiAgICAgICBjbGFzc05hbWU9XCIgdGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCIgdGl0bGU9XCJFbW9qaVwiIGlkPVwiZW1vamktb3BlbmVyXCIgb25DbGljaz17aGFuZGxlZW1vamltb2RlbH1cclxuICAgICAgLz5cclxuICAgICAgPEltQXR0YWNobWVudCBjbGFzc05hbWU9XCIgdGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCIgdGl0bGU9XCJBdHRhY2ggRmlsZVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlXCIgb25DaGFuZ2U9eyhlKT0+c2V0bWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXttZXNzYWdlfSBjbGFzc05hbWU9XCIgYmctaW5wdXQtYmFja2dyb3VuZCB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGgtMTAgcm91bmRlZC1sZyBweC01IHB5LTQgdy1mdWxsXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICA8YnV0dG9uPlxyXG4gICAgICAgIDxNZFNlbmQgY2xhc3NOYW1lPVwiIHRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiIHRpdGxlPVwiU2VuZCBtZXNzYWdlXCIgb25DbGljaz17c2VuZE1zZ30vPlxyXG4gICAgICAgIHsvKiA8RmFNaWNyb3Bob25lIGNsYXNzTmFtZT1cIiB0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIiB0aXRsZT1cIlJlY29yZFwiLz4gKi99XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCYXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlcmNhc2VzIiwiQUREX01FU1NBR0VfUk9VVEUiLCJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJCc0Vtb2ppU21pbGUiLCJGYU1pY3JvcGhvbmUiLCJJbUF0dGFjaG1lbnQiLCJNZFNlbmQiLCJNZXNzYWdlQmFyIiwiY3VycmVudENoYXRVc2VyIiwidXNlckluZm8iLCJzb2NrZXQiLCJkaXNwYXRjaCIsIm1lc3NhZ2UiLCJzZXRtZXNzYWdlIiwic2hvd2Vtb2ppUGlja2VyIiwic2V0c2hvd2Vtb2ppUGlja2VyIiwiaGFuZGxlZW1vamltb2RlbCIsInMiLCJoYW5kbGVlbW9qaUNsaWNrIiwic2VuZE1zZyIsImRhdGEiLCJwb3N0IiwidG8iLCJpZCIsImZyb20iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJlbWl0IiwidHlwZSIsIkFERF9NRVNTQUdFIiwibmV3TWVzc2FnZSIsImZyb21TZWxmIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm9uQ2xpY2siLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/MessageBar.jsx\n"));

/***/ })

});