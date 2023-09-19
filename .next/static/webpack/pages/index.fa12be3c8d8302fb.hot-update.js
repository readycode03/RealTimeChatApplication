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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/im */ \"./node_modules/react-icons/im/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emoji-picker-react */ \"./node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction MessageBar() {\n    _s();\n    const [{ currentChatUser , userInfo , socket  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const [message, setmessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [showemojiPicker, setshowemojiPicker] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleemojimodel = ()=>{\n        setshowemojiPicker(!showemojiPicker);\n    };\n    const handleemojiClick = (emoji)=>{\n        setmessage((prev)=>{\n            prev += emoji.emoji;\n        });\n    };\n    const sendMsg = async ()=>{\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.ADD_MESSAGE_ROUTE, {\n                to: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data.id,\n                from: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,\n                message\n            }).then(console.log(\"sent successfully\"));\n            socket.current.emit(\"send-msg\", {\n                to: currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data.id,\n                from: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,\n                message: data.message\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducercases.ADD_MESSAGE,\n                newMessage: {\n                    ...data.message\n                },\n                fromSelf: true\n            });\n            setmessage(\"\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-panel-header-background h-20 px-4 flex items-center gap-6 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsEmojiSmile, {\n                            className: \" text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Emoji\",\n                            id: \"emoji-opener\",\n                            onClick: handleemojimodel\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 7\n                        }, this),\n                        showemojiPicker && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-24 left-14 z-40\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(emoji_picker_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onEmojiClick: handleemojiClick,\n                                theme: \"dark\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 28\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_im__WEBPACK_IMPORTED_MODULE_8__.ImAttachment, {\n                            className: \" text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Attach File\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 7\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full rounded-lg h-10 flex items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Type your message\",\n                        onChange: (e)=>setmessage(e.target.value),\n                        value: message,\n                        className: \" bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-10 items-center justify-center \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdSend, {\n                            className: \" text-panel-header-icon cursor-pointer text-xl\",\n                            title: \"Send message\",\n                            onClick: sendMsg\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\MessageBar.jsx\",\n        lineNumber: 45,\n        columnNumber: 10\n    }, this);\n}\n_s(MessageBar, \"Q98hZg3UBxXLdV7EfMM6e45tHWU=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = MessageBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MessageBar);\nvar _c;\n$RefreshReg$(_c, \"MessageBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L01lc3NhZ2VCYXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNQO0FBQ0c7QUFDNUI7QUFDYztBQUNNO0FBQ0E7QUFDSDtBQUNIO0FBQ0k7QUFDNUMsU0FBU1csYUFBYTs7SUFDcEIsTUFBTSxDQUFDLEVBQUNDLGdCQUFlLEVBQUNDLFNBQVEsRUFBQ0MsT0FBTSxFQUFDLEVBQUNDLFNBQVMsR0FBR2YsdUVBQWdCQTtJQUNyRSxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2EsaUJBQWlCQyxtQkFBbUIsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUM1RCxNQUFNZSxtQkFBbUIsSUFBSTtRQUMzQkQsbUJBQW1CLENBQUNEO0lBQ3RCO0lBQ0EsTUFBTUcsbUJBQW1CLENBQUNDLFFBQVE7UUFDaENMLFdBQVcsQ0FBQ00sT0FBTztZQUFDQSxRQUFNRCxNQUFNQSxLQUFLO1FBQUE7SUFDdkM7SUFDQSxNQUFNRSxVQUFVLFVBQVM7UUFDeEIsSUFBSTtZQUNILE1BQU0sRUFBQ0MsS0FBSSxFQUFDLEdBQUcsTUFBTXRCLGtEQUFVLENBQUNELCtEQUFpQkEsRUFBQztnQkFDaER5QixFQUFFLEVBQUNmLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCYSxJQUFJLENBQUNHLEVBQUU7Z0JBQzNCQyxNQUFLaEIscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVZSxFQUFFO2dCQUNqQlo7WUFDRixHQUFHYyxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQztZQUNwQmxCLE9BQU9tQixPQUFPLENBQUNDLElBQUksQ0FBQyxZQUFXO2dCQUM3QlAsRUFBRSxFQUFDZiw0QkFBQUEsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFpQmEsSUFBSSxDQUFDRyxFQUFFO2dCQUMzQkMsTUFBS2hCLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWUsRUFBRTtnQkFDakJaLFNBQVFTLEtBQUtULE9BQU87WUFDdEI7WUFDREQsU0FBUztnQkFDUm9CLE1BQUtsQyx3RUFBd0I7Z0JBQzdCb0MsWUFBVztvQkFDVCxHQUFHWixLQUFLVCxPQUFPO2dCQUNqQjtnQkFDQXNCLFVBQVMsSUFBSTtZQUNkO1lBQ0NyQixXQUFXO1FBQ1osRUFBRSxPQUFPc0IsT0FBTztZQUNmUixRQUFRQyxHQUFHLENBQUNPO1FBQ2I7SUFDRDtJQUNBLHFCQUFPLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNwQjs7OEJBQ0EsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ25DLHdEQUFZQTs0QkFDWm1DLFdBQVU7NEJBQWlEQyxPQUFNOzRCQUFRZCxJQUFHOzRCQUFlZSxTQUFTdkI7Ozs7Ozt3QkFHbkdGLGlDQUFtQiw4REFBQ3NCOzRCQUFJQyxXQUFVO3NDQUNoQyw0RUFBQy9CLDBEQUFXQTtnQ0FBQ2tDLGNBQWN2QjtnQ0FBa0J3QixPQUFNOzs7Ozs7Ozs7OztzQ0FHdkQsOERBQUNyQyx3REFBWUE7NEJBQUNpQyxXQUFVOzRCQUFpREMsT0FBTTs7Ozs7Ozs7Ozs7OzhCQUVqRiw4REFBQ0Y7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNLO3dCQUFNWCxNQUFLO3dCQUFPWSxhQUFZO3dCQUFvQkMsVUFBVSxDQUFDQyxJQUFJaEMsV0FBV2dDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzt3QkFBR0EsT0FBT25DO3dCQUFTeUIsV0FBVTs7Ozs7Ozs7Ozs7OEJBRTFILDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1c7a0NBQ0MsNEVBQUMzQyxrREFBTUE7NEJBQUNnQyxXQUFVOzRCQUFpREMsT0FBTTs0QkFBZUMsU0FBU25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16RztHQTFEU2I7O1FBQzhDWCxtRUFBZ0JBOzs7S0FEOURXO0FBNERULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXQvTWVzc2FnZUJhci5qc3g/MTRlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgcmVkdWNlcmNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgQUREX01FU1NBR0VfUk9VVEUgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnNFbW9qaVNtaWxlIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7IEZhTWljcm9waG9uZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQge0ltQXR0YWNobWVudH0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcclxuaW1wb3J0IHsgTWRTZW5kIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBFbW9qaVBpY2tlciBmcm9tIFwiZW1vamktcGlja2VyLXJlYWN0XCJcclxuZnVuY3Rpb24gTWVzc2FnZUJhcigpIHtcclxuICBjb25zdCBbe2N1cnJlbnRDaGF0VXNlcix1c2VySW5mbyxzb2NrZXR9LGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0bWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2hvd2Vtb2ppUGlja2VyLCBzZXRzaG93ZW1vamlQaWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZWVtb2ppbW9kZWwgPSAoKT0+e1xyXG4gICAgc2V0c2hvd2Vtb2ppUGlja2VyKCFzaG93ZW1vamlQaWNrZXIpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVlbW9qaUNsaWNrID0gKGVtb2ppKT0+e1xyXG4gICAgc2V0bWVzc2FnZSgocHJldik9PntwcmV2Kz1lbW9qaS5lbW9qaX0pO1xyXG4gIH1cclxuICBjb25zdCBzZW5kTXNnID0gYXN5bmMoKT0+e1xyXG4gICB0cnkge1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChBRERfTUVTU0FHRV9ST1VURSx7XHJcbiAgICAgIHRvOmN1cnJlbnRDaGF0VXNlcj8uZGF0YS5pZCxcclxuICAgICAgZnJvbTp1c2VySW5mbz8uaWQsXHJcbiAgICAgIG1lc3NhZ2VcclxuICAgIH0pLnRoZW4oY29uc29sZS5sb2coXCJzZW50IHN1Y2Nlc3NmdWxseVwiKSlcclxuICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJzZW5kLW1zZ1wiLHtcclxuICAgICAgdG86Y3VycmVudENoYXRVc2VyPy5kYXRhLmlkLFxyXG4gICAgICBmcm9tOnVzZXJJbmZvPy5pZCxcclxuICAgICAgbWVzc2FnZTpkYXRhLm1lc3NhZ2UsXHJcbiAgICB9KTtcclxuICAgZGlzcGF0Y2goe1xyXG4gICAgdHlwZTpyZWR1Y2VyY2FzZXMuQUREX01FU1NBR0UsXHJcbiAgICBuZXdNZXNzYWdlOntcclxuICAgICAgLi4uZGF0YS5tZXNzYWdlLFxyXG4gICAgfSxcclxuICAgIGZyb21TZWxmOnRydWVcclxuICAgfSlcclxuICAgIHNldG1lc3NhZ2UoXCJcIik7XHJcbiAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgIH1cclxuICB9XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiIGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIGgtMjAgcHgtNCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNiByZWxhdGl2ZVwiPlxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxyXG4gICAgICA8QnNFbW9qaVNtaWxlXHJcbiAgICAgICBjbGFzc05hbWU9XCIgdGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCIgdGl0bGU9XCJFbW9qaVwiIGlkPVwiZW1vamktb3BlbmVyXCIgb25DbGljaz17aGFuZGxlZW1vamltb2RlbH1cclxuICAgICAgLz5cclxuICAgICAge1xyXG4gICAgICAgIHNob3dlbW9qaVBpY2tlciAmJiA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yNCBsZWZ0LTE0IHotNDBcIj5cclxuICAgICAgICAgIDxFbW9qaVBpY2tlciBvbkVtb2ppQ2xpY2s9e2hhbmRsZWVtb2ppQ2xpY2t9IHRoZW1lPVwiZGFya1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAgPEltQXR0YWNobWVudCBjbGFzc05hbWU9XCIgdGV4dC1wYW5lbC1oZWFkZXItaWNvbiBjdXJzb3ItcG9pbnRlciB0ZXh0LXhsXCIgdGl0bGU9XCJBdHRhY2ggRmlsZVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlXCIgb25DaGFuZ2U9eyhlKT0+c2V0bWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXttZXNzYWdlfSBjbGFzc05hbWU9XCIgYmctaW5wdXQtYmFja2dyb3VuZCB0ZXh0LXNtIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGgtMTAgcm91bmRlZC1sZyBweC01IHB5LTQgdy1mdWxsXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgICA8YnV0dG9uPlxyXG4gICAgICAgIDxNZFNlbmQgY2xhc3NOYW1lPVwiIHRleHQtcGFuZWwtaGVhZGVyLWljb24gY3Vyc29yLXBvaW50ZXIgdGV4dC14bFwiIHRpdGxlPVwiU2VuZCBtZXNzYWdlXCIgb25DbGljaz17c2VuZE1zZ30vPlxyXG4gICAgICAgIHsvKiA8RmFNaWNyb3Bob25lIGNsYXNzTmFtZT1cIiB0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIiB0aXRsZT1cIlJlY29yZFwiLz4gKi99XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCYXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlcmNhc2VzIiwiQUREX01FU1NBR0VfUk9VVEUiLCJheGlvcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJCc0Vtb2ppU21pbGUiLCJGYU1pY3JvcGhvbmUiLCJJbUF0dGFjaG1lbnQiLCJNZFNlbmQiLCJFbW9qaVBpY2tlciIsIk1lc3NhZ2VCYXIiLCJjdXJyZW50Q2hhdFVzZXIiLCJ1c2VySW5mbyIsInNvY2tldCIsImRpc3BhdGNoIiwibWVzc2FnZSIsInNldG1lc3NhZ2UiLCJzaG93ZW1vamlQaWNrZXIiLCJzZXRzaG93ZW1vamlQaWNrZXIiLCJoYW5kbGVlbW9qaW1vZGVsIiwiaGFuZGxlZW1vamlDbGljayIsImVtb2ppIiwicHJldiIsInNlbmRNc2ciLCJkYXRhIiwicG9zdCIsInRvIiwiaWQiLCJmcm9tIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiZW1pdCIsInR5cGUiLCJBRERfTUVTU0FHRSIsIm5ld01lc3NhZ2UiLCJmcm9tU2VsZiIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvbkNsaWNrIiwib25FbW9qaUNsaWNrIiwidGhlbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/MessageBar.jsx\n"));

/***/ })

});