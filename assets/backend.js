/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backend/blocks/blocks.js":
/*!**************************************!*\
  !*** ./src/backend/blocks/blocks.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox/index.js */ "./src/backend/blocks/checkbox/index.js");
/* harmony import */ var _container_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/index.js */ "./src/backend/blocks/container/index.js");
/* harmony import */ var _country_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country/index.js */ "./src/backend/blocks/country/index.js");
/* harmony import */ var _date_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date/index.js */ "./src/backend/blocks/date/index.js");
/* harmony import */ var _email_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email/index.js */ "./src/backend/blocks/email/index.js");
/* harmony import */ var _form_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/index.js */ "./src/backend/blocks/form/index.js");
/* harmony import */ var _html_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html/index.js */ "./src/backend/blocks/html/index.js");
/* harmony import */ var _radio_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./radio/index.js */ "./src/backend/blocks/radio/index.js");
/* harmony import */ var _select_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select/index.js */ "./src/backend/blocks/select/index.js");
/* harmony import */ var _tel_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tel/index.js */ "./src/backend/blocks/tel/index.js");
/* harmony import */ var _text_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./text/index.js */ "./src/backend/blocks/text/index.js");
/* harmony import */ var _textarea_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./textarea/index.js */ "./src/backend/blocks/textarea/index.js");
/**
 * WordPress dependencies
 */


/**
 * Blocks dependencies.
 */












const registerBlock = block => {
  if (!block) return;
  const {
    name,
    settings
  } = block;
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, settings);
};
const blocks = [_form_index_js__WEBPACK_IMPORTED_MODULE_6__, _container_index_js__WEBPACK_IMPORTED_MODULE_2__, _text_index_js__WEBPACK_IMPORTED_MODULE_11__, _email_index_js__WEBPACK_IMPORTED_MODULE_5__, _textarea_index_js__WEBPACK_IMPORTED_MODULE_12__, _date_index_js__WEBPACK_IMPORTED_MODULE_4__, _checkbox_index_js__WEBPACK_IMPORTED_MODULE_1__, _select_index_js__WEBPACK_IMPORTED_MODULE_9__, _country_index_js__WEBPACK_IMPORTED_MODULE_3__, _tel_index_js__WEBPACK_IMPORTED_MODULE_10__, _radio_index_js__WEBPACK_IMPORTED_MODULE_8__, _html_index_js__WEBPACK_IMPORTED_MODULE_7__];
const registerBlocks = () => {
  blocks.forEach(block => {
    registerBlock(block);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (registerBlocks);

/***/ }),

/***/ "./src/backend/blocks/checkbox/edit.js":
/*!*********************************************!*\
  !*** ./src/backend/blocks/checkbox/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/checkbox/inspector.js");

/**
 * Wordpress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      width,
      required,
      label,
      fieldid,
      help,
      style,
      placeholder
    },
    setAttributes
  } = props;
  const validFieldId = () => {
    const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
    return validPattern.test(fieldid);
  };
  const setFieldId = value => {
    value = value.toLowerCase();
    value = value.replace(/\s/g, '-');
    setAttributes({
      fieldid: value.toLowerCase()
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-field', 'ctx:form-field--' + width, validFieldId() == false || help === '' ? 'ctx:form-field--error' : ''].filter(Boolean).join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_4__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label critical",
    value: fieldid,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Slug', 'gutenberg-form'),
    onChange: value => setFieldId(value)
  }), validFieldId() == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__error-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please type in a unique itentifier for the field', 'gutenberg-form')), validFieldId() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Unique identifier', 'gutenberg-form')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "label"
  }, style == 'checkbox' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    checked: placeholder,
    onChange: value => setAttributes({
      placeholder: value
    })
  }), style == 'toggle' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    checked: placeholder,
    onChange: value => setAttributes({
      placeholder: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label critical",
    value: help,
    required: true,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('What should your visitor say "yes" to?', 'gutenberg-form'),
    onChange: value => setAttributes({
      help: value
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/checkbox/icons.js":
/*!**********************************************!*\
  !*** ./src/backend/blocks/checkbox/icons.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const icons = {
  checkbox: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    width: "24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM10.6 16.2 17.65 9.15 16.25 7.75 10.6 13.4 7.75 10.55 6.35 11.95ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"
  })),
  toggle: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#000000"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zm0-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/backend/blocks/checkbox/index.js":
/*!**********************************************!*\
  !*** ./src/backend/blocks/checkbox/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/checkbox/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/checkbox/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/checkbox/editor.scss");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/backend/blocks/checkbox/icons.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'gutenberg-form'),
  icon: _icons__WEBPACK_IMPORTED_MODULE_3__["default"].checkbox,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/checkbox/inspector.js":
/*!**************************************************!*\
  !*** ./src/backend/blocks/checkbox/inspector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons.js */ "./src/backend/blocks/checkbox/icons.js");





const Inspector = props => {
  const {
    attributes: {
      width,
      required,
      pattern,
      label,
      options,
      style,
      help,
      error
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Data', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'gutenberg-form'),
    checked: required,
    onChange: value => setAttributes({
      required: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error message', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text to inform the user that this checkbox must be checked', 'gutenberg-form'),
    value: error,
    onChange: value => setAttributes({
      error: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label",
    htmlFor: "inspector-range-control-4"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Style', 'gutenberg-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "styleSelector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      style: 'checkbox'
    }),
    className: style == 'checkbox' ? 'active' : ''
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].checkbox
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Box', 'gutenberg-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => setAttributes({
      style: 'toggle'
    }),
    className: style == 'toggle' ? 'active' : ''
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "64",
    className: "icon",
    icon: _icons_js__WEBPACK_IMPORTED_MODULE_4__["default"].toggle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggle', 'gutenberg-form')))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/blocks/container/edit.js":
/*!**********************************************!*\
  !*** ./src/backend/blocks/container/edit.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Wordpress dependencies
 */



function Edit(_ref) {
  let {
    ...props
  } = _ref;
  console.log(props.context);
  if (props.context?.postType !== 'gbf-form') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "gbf-alert"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('This block is only usable in the forms post type', 'gutenberg-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('If you want to add a form to this page, use the Form block', 'gutenberg-form')));
  }
  const {
    clientId
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)('core/editor').getCurrentPostType);
  if (['bookingform', 'attendeeform'].includes(postType)) {
    console.log('registering form');
    document.getElementsByClassName('edit-post-fullscreen-mode-close')[0]?.setAttribute('href', 'edit.php?post_type=event&page=gutenberg-form-forms');
  }
  const allowedBlocks = ['gutenberg-form/form-text', 'gutenberg-form/form-email', 'gutenberg-form/form-textarea', 'gutenberg-form/form-select', 'gutenberg-form/form-country', 'gutenberg-form/form-phone', 'gutenberg-form/form-radio', 'gutenberg-form/form-checkbox', 'gutenberg-form/form-date', 'gutenberg-form/form-html'];
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    allowedBlocks,
    renderAppender: false
  });
  function SectionAppender(_ref2) {
    let {
      rootClientId
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.Inserter, {
      rootClientId: rootClientId,
      renderToggle: _ref3 => {
        let {
          onToggle,
          disabled
        } = _ref3;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
          className: "components-button is-primary",
          onClick: onToggle
        }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Add Field', 'gutenberg-form'));
      },
      isAppender: true
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("form", {
    autocomplete: "off",
    className: "ctx:form-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerBlocksProps, {
    className: "ctx:form-form__container"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ctx:form-form__appender"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SectionAppender, {
    rootClientId: clientId
  })));
}

/***/ }),

/***/ "./src/backend/blocks/container/icon.js":
/*!**********************************************!*\
  !*** ./src/backend/blocks/container/icon.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 21v-2.125l5.3-5.3 2.125 2.125-5.3 5.3Zm-9-5v-2h7v2Zm17.125-1L18 12.875l.725-.725q.275-.275.7-.275.425 0 .7.275l.725.725q.275.275.275.7 0 .425-.275.7ZM3 12v-2h11v2Zm0-4V6h11v2Z"
})));

/***/ }),

/***/ "./src/backend/blocks/container/index.js":
/*!***********************************************!*\
  !*** ./src/backend/blocks/container/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/container/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/container/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/container/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/container/icon.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/backend/blocks/country/edit.js":
/*!********************************************!*\
  !*** ./src/backend/blocks/country/edit.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/country/inspector.js");

/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      width,
      required,
      pattern,
      label,
      fieldid,
      help,
      error
    },
    setAttributes
  } = props;
  const countries = () => {};
  const validFieldId = () => {
    const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
    return validPattern.test(fieldid);
  };
  const setFieldId = value => {
    value = value.toLowerCase();
    value = value.replace(/\s/g, '-');
    setAttributes({
      fieldid: value.toLowerCase()
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-field', 'ctx:form-field--' + width, validFieldId() == false ? 'ctx:form-field--error' : ''].filter(Boolean).join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "ctx:form-details__label",
    value: label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'gutenberg-form'),
    onChange: value => setAttributes({
      label: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, required ? '*' : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label for the field', 'gutenberg-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label",
    value: fieldid,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slug', 'gutenberg-form'),
    onChange: value => setFieldId(value)
  }), validFieldId() == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__error-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please type in a unique itentifier for the field', 'gutenberg-form')), validFieldId() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unique identifier', 'gutenberg-form')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", null, Object.keys(window.eventBlocksLocalization?.countries).map(country => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: country
    }, window.eventBlocksLocalization?.countries[country]);
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/country/icon.js":
/*!********************************************!*\
  !*** ./src/backend/blocks/country/icon.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 9.925 2.788 8.113Q3.575 6.3 4.938 4.938Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12Q22 14.05 21.212 15.875Q20.425 17.7 19.062 19.062Q17.7 20.425 15.887 21.212Q14.075 22 12 22ZM15.95 8H18.9Q18.175 6.75 17.087 5.825Q16 4.9 14.6 4.45Q15.05 5.275 15.388 6.162Q15.725 7.05 15.95 8ZM10.1 8H13.9Q13.6 6.9 13.125 5.925Q12.65 4.95 12 4.05Q11.35 4.95 10.875 5.925Q10.4 6.9 10.1 8ZM4.25 14H7.65Q7.575 13.5 7.537 13.012Q7.5 12.525 7.5 12Q7.5 11.475 7.537 10.988Q7.575 10.5 7.65 10H4.25Q4.125 10.5 4.062 10.988Q4 11.475 4 12Q4 12.525 4.062 13.012Q4.125 13.5 4.25 14ZM9.4 19.55Q8.95 18.725 8.613 17.837Q8.275 16.95 8.05 16H5.1Q5.825 17.25 6.912 18.175Q8 19.1 9.4 19.55ZM5.1 8H8.05Q8.275 7.05 8.613 6.162Q8.95 5.275 9.4 4.45Q8 4.9 6.912 5.825Q5.825 6.75 5.1 8ZM12 19.95Q12.65 19.05 13.125 18.075Q13.6 17.1 13.9 16H10.1Q10.4 17.1 10.875 18.075Q11.35 19.05 12 19.95ZM9.65 14H14.35Q14.425 13.5 14.463 13.012Q14.5 12.525 14.5 12Q14.5 11.475 14.463 10.988Q14.425 10.5 14.35 10H9.65Q9.575 10.5 9.538 10.988Q9.5 11.475 9.5 12Q9.5 12.525 9.538 13.012Q9.575 13.5 9.65 14ZM14.6 19.55Q16 19.1 17.087 18.175Q18.175 17.25 18.9 16H15.95Q15.725 16.95 15.388 17.837Q15.05 18.725 14.6 19.55ZM16.35 14H19.75Q19.875 13.5 19.938 13.012Q20 12.525 20 12Q20 11.475 19.938 10.988Q19.875 10.5 19.75 10H16.35Q16.425 10.5 16.462 10.988Q16.5 11.475 16.5 12Q16.5 12.525 16.462 13.012Q16.425 13.5 16.35 14Z"
})));

/***/ }),

/***/ "./src/backend/blocks/country/index.js":
/*!*********************************************!*\
  !*** ./src/backend/blocks/country/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/country/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/country/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/country/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/country/icon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/country/inspector.js":
/*!*************************************************!*\
  !*** ./src/backend/blocks/country/inspector.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes: {
      width,
      required,
      error
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Data', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'gutenberg-form'),
    checked: required,
    onChange: value => setAttributes({
      required: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error message', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text to inform the user that a choice has to be made', 'gutenberg-form'),
    value: error,
    onChange: value => setAttributes({
      error: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns the input field will occupy', 'gutenberg-form'),
    value: width,
    max: 6,
    min: 1,
    onChange: value => setAttributes({
      width: value
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/blocks/date/dateDiff.js":
/*!*********************************************!*\
  !*** ./src/backend/blocks/date/dateDiff.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

function dateDiff(date1, date2) {
  const date1_time_stamp = new Date(date1).getTime();
  const date2_time_stamp = new Date(date2).getTime();
  const calc = date1_time_stamp > date2_time_stamp ? new Date(date1_time_stamp - date2_time_stamp) : new Date(date2_time_stamp - date1_time_stamp);
  const calcFormat = `${calc.getDate()}-${calc.getMonth() + 1}-${calc.getFullYear()}`.split('-');

  //Subtract each member of our array from the default date
  const days_passed = Number(Math.abs(calcFormat[0]) - 1);
  const months_passed = Number(Math.abs(calcFormat[1]) - 1);
  const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

  //Convert to days and sum together
  const total_days = years_passed * 365 + months_passed * 30.417 + days_passed;

  //display result with custom text
  const result = (years_passed == 1 ? `${years_passed} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('year', 'events')} ` : years_passed > 1 ? `${years_passed} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('years', 'events')} ` : '') + (months_passed == 1 ? `${months_passed} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('month', 'events')} ` : months_passed > 1 ? `${months_passed} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('months', 'events')} ` : '') + (days_passed == 1 ? `${days_passed} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('day', 'events')}` : days_passed > 1 ? `${days_passed} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('days', 'events')}` : '');

  //return the result
  return {
    total_days: Math.round(total_days),
    years: years_passed,
    months: months_passed,
    days: days_passed,
    result: result.trim()
  };
}
/* harmony default export */ __webpack_exports__["default"] = (dateDiff);

/***/ }),

/***/ "./src/backend/blocks/date/edit.js":
/*!*****************************************!*\
  !*** ./src/backend/blocks/date/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/date/inspector.js");

/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      width,
      required,
      pattern,
      placeholder,
      label,
      fieldid,
      help,
      error
    },
    setAttributes
  } = props;
  const validFieldId = () => {
    const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
    return validPattern.test(fieldid);
  };
  const setFieldId = value => {
    value = value.toLowerCase();
    value = value.replace(/\s/g, '-');
    setAttributes({
      fieldid: value.toLowerCase()
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-field', 'ctx:form-field--' + width, validFieldId() == false ? 'ctx:form-field--error' : ''].filter(Boolean).join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "ctx:form-details__label",
    value: label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'gutenberg-form'),
    onChange: value => setAttributes({
      label: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, required ? '*' : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label for the field', 'gutenberg-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label",
    value: fieldid,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slug', 'gutenberg-form'),
    onChange: value => setFieldId(value)
  }), validFieldId() == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__error-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please type in a unique itentifier for the field', 'gutenberg-form')), validFieldId() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unique identifier', 'gutenberg-form')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    autocomplete: "off",
    value: placeholder,
    type: "date",
    onChange: event => setAttributes({
      placeholder: event.target.value
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/date/icon.js":
/*!*****************************************!*\
  !*** ./src/backend/blocks/date/icon.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.5 18Q13.45 18 12.725 17.275Q12 16.55 12 15.5Q12 14.45 12.725 13.725Q13.45 13 14.5 13Q15.55 13 16.275 13.725Q17 14.45 17 15.5Q17 16.55 16.275 17.275Q15.55 18 14.5 18ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2H8V4H16V2H18V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20ZM5 8H19V6Q19 6 19 6Q19 6 19 6H5Q5 6 5 6Q5 6 5 6ZM5 8V6Q5 6 5 6Q5 6 5 6Q5 6 5 6Q5 6 5 6V8Z"
})));

/***/ }),

/***/ "./src/backend/blocks/date/index.js":
/*!******************************************!*\
  !*** ./src/backend/blocks/date/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/date/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/date/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/date/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/date/icon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/date/inspector.js":
/*!**********************************************!*\
  !*** ./src/backend/blocks/date/inspector.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dateDiff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dateDiff */ "./src/backend/blocks/date/dateDiff.js");






const Inspector = props => {
  const {
    attributes: {
      width,
      required,
      min,
      max,
      help,
      error
    },
    setAttributes
  } = props;
  const [referenceDate, setReferenceDate] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(Date());
  const minAge = (0,_dateDiff__WEBPACK_IMPORTED_MODULE_5__["default"])(min, referenceDate);
  const maxAge = (0,_dateDiff__WEBPACK_IMPORTED_MODULE_5__["default"])(max, referenceDate);
  const ageInfo = () => {
    if (minAge === 0 && maxAge !== 0) {
      return `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('at best', 'gutenberg-form')} ${maxAge.result} }`;
    }
    if (minAge !== 0 && maxAge === 0) {
      return `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('at least', 'gutenberg-form')} ${minAge.result} }`;
    }
    if (minAge === maxAge) {
      return `${minAge.result}`;
    }
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('from', 'gutenberg-form'), " ", maxAge.result, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('to', 'gutenberg-form'), " ", minAge.result);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Data', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'gutenberg-form'),
    checked: required,
    onChange: value => setAttributes({
      required: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Help', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Help text for the date field', 'gutenberg-form'),
    value: help,
    onChange: value => setAttributes({
      help: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error message', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text to display when the user types in invalid or insufficient data', 'gutenberg-form'),
    value: error,
    onChange: value => setAttributes({
      error: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Lowest Date', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('e.g. maximal age for an attendee', 'gutenberg-form'),
    value: min,
    onChange: value => setAttributes({
      min: value
    }),
    type: "date"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Highest Date', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('e.g. minimal age for an attendee', 'gutenberg-form'),
    value: max,
    onChange: value => setAttributes({
      max: value
    }),
    type: "date"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "age-info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Reference Date', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Only for testing', 'gutenberg-form'),
    value: referenceDate,
    onChange: value => {
      setReferenceDate(value);
    },
    type: "date"
  }), ageInfo())), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns the input field will occupy', 'gutenberg-form'),
    value: width,
    max: 6,
    min: 1,
    onChange: value => setAttributes({
      width: value
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/blocks/email/edit.js":
/*!******************************************!*\
  !*** ./src/backend/blocks/email/edit.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/email/inspector.js");
/* harmony import */ var _lockIcon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lockIcon.js */ "./src/backend/blocks/email/lockIcon.js");

/**
 * Wordpress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      width,
      required,
      placeholder,
      label,
      fieldid
    },
    setAttributes
  } = props;
  const validFieldId = () => {
    const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
    return validPattern.test(fieldid);
  };
  const lockFieldId = 'user_email' === fieldid;
  const setFieldId = value => {
    value = value.toLowerCase();
    value = value.replace(/\s/g, '_');
    setAttributes({
      fieldid: value.toLowerCase()
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-field', 'ctx:form-field--' + width, validFieldId() == false ? 'ctx:form-field--error' : ''].filter(Boolean).join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_4__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "ctx:form-details__label",
    value: label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label', 'gutenberg-form'),
    onChange: value => setAttributes({
      label: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, required ? '*' : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label for the field', 'gutenberg-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__name"
  }, !lockFieldId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label",
    value: fieldid,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Slug', 'gutenberg-form'),
    onChange: value => setFieldId(value)
  }), lockFieldId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-details__label--lock"
  }, fieldid, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: _lockIcon_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    size: 14
  })), validFieldId() == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__error-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please type in a unique identifier for the field', 'gutenberg-form')), validFieldId() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Unique identifier', 'gutenberg-form')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    autocomplete: "off",
    type: "text",
    value: placeholder,
    onChange: event => setAttributes({
      placeholder: event.target.value
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/email/icon.js":
/*!******************************************!*\
  !*** ./src/backend/blocks/email/icon.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 9.925 2.788 8.113Q3.575 6.3 4.938 4.938Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.075 2 15.887 2.787Q17.7 3.575 19.062 4.938Q20.425 6.3 21.212 8.113Q22 9.925 22 12V13.45Q22 14.925 20.988 15.962Q19.975 17 18.5 17Q17.6 17 16.825 16.6Q16.05 16.2 15.55 15.55Q14.875 16.225 13.963 16.613Q13.05 17 12 17Q9.925 17 8.463 15.537Q7 14.075 7 12Q7 9.925 8.463 8.462Q9.925 7 12 7Q14.075 7 15.538 8.462Q17 9.925 17 12V13.45Q17 14.175 17.45 14.587Q17.9 15 18.5 15Q19.1 15 19.55 14.587Q20 14.175 20 13.45V12Q20 8.725 17.637 6.362Q15.275 4 12 4Q8.725 4 6.362 6.362Q4 8.725 4 12Q4 15.275 6.362 17.637Q8.725 20 12 20H17V22ZM12 15Q13.25 15 14.125 14.125Q15 13.25 15 12Q15 10.75 14.125 9.875Q13.25 9 12 9Q10.75 9 9.875 9.875Q9 10.75 9 12Q9 13.25 9.875 14.125Q10.75 15 12 15Z"
})));

/***/ }),

/***/ "./src/backend/blocks/email/index.js":
/*!*******************************************!*\
  !*** ./src/backend/blocks/email/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/email/edit.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/email/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/email/block.json");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/email/editor.scss");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_2__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'events'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'events'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/email/inspector.js":
/*!***********************************************!*\
  !*** ./src/backend/blocks/email/inspector.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes: {
      width,
      required,
      fieldid,
      pattern,
      label,
      name,
      help,
      error
    },
    setAttributes
  } = props;
  const lockFieldId = 'user_email' === fieldid;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Data', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'gutenberg-form'),
    checked: required,
    disabled: lockFieldId,
    onChange: value => setAttributes({
      required: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Help', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Help text for the input field', 'gutenberg-form'),
    value: help,
    onChange: value => setAttributes({
      help: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error message', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text to display when the user types in invalid or insufficient data', 'gutenberg-form'),
    value: error,
    onChange: value => setAttributes({
      error: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns the input field will occupy', 'gutenberg-form'),
    value: width,
    max: 6,
    min: 1,
    onChange: value => setAttributes({
      width: value
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/blocks/email/lockIcon.js":
/*!**********************************************!*\
  !*** ./src/backend/blocks/email/lockIcon.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "14px",
  viewBox: "0 0 24 24",
  width: "14px",
  fill: "#555555"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
})));

/***/ }),

/***/ "./src/backend/blocks/form/edit.js":
/*!*****************************************!*\
  !*** ./src/backend/blocks/form/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/form/icon.js");

/**
 * Wordpress dependencies
 */







/**
 * Internal dependencies
 */

/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      formPost
    },
    setAttributes
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx-form-placeholder'].filter(Boolean).join(' ')
  });
  const forms = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
    const rawData = getEntityRecords('postType', 'gbf-form', {
      per_page: -1
    });
    if (!rawData) {
      return [{
        value: '',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('No forms found', 'gutenberg-form'),
        disabled: true
      }];
    }
    let result = rawData.map(form => {
      return {
        value: form.id,
        label: form.title.raw
      };
    });
    result.unshift({
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('No form selected', 'gutenberg-form'),
      disabled: true
    });
    return result;
  }, []);
  console.log(forms);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "components-placeholder__label"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select a form', 'gutenberg-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: formPost,
    onChange: value => {
      setAttributes({
        formPost: value
      });
    },
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select a form', 'gutenberg-form'),
    options: forms
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-placeholder__learn-more"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ExternalLink, {
    href: "/wp-admin/edit.php?post_type=gbf-form#general"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Create a new form', 'gutenberg-form')))));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/form/icon.js":
/*!*****************************************!*\
  !*** ./src/backend/blocks/form/icon.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M4 21q-.825 0-1.412-.587Q2 19.825 2 19V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v14q0 .825-.587 1.413Q20.825 21 20 21Zm0-2h16V5H4v14Zm1-2h5v-2H5Zm9.55-2 4.95-4.95-1.425-1.425-3.525 3.55-1.425-1.425-1.4 1.425ZM5 13h5v-2H5Zm0-4h5V7H5ZM4 19V5v14Z"
})));

/***/ }),

/***/ "./src/backend/blocks/form/index.js":
/*!******************************************!*\
  !*** ./src/backend/blocks/form/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/form/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/form/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/form/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/form/icon.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withColors)({
    buttonColor: 'buttonColor'
  })(_edit__WEBPACK_IMPORTED_MODULE_1__["default"]),
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/html/edit.js":
/*!*****************************************!*\
  !*** ./src/backend/blocks/html/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/html/inspector.js");

/**
 * Wordpress dependencies
 */


function Edit(_ref) {
  let {
    ...props
  } = _ref;
  const {
    attributes: {
      width
    }
  } = props;
  const template = [['core/paragraph']];
  const allowedBlocks = ['core/paragraph', 'core/heading', 'core/list', 'core/quote', 'core/image', 'core/group'];
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps)({}, {
    allowedBlocks,
    template,
    templateLock: false
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-html', 'ctx:form-html--' + width].filter(Boolean).join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_2__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", innerBlocksProps));
}

/***/ }),

/***/ "./src/backend/blocks/html/icon.js":
/*!*****************************************!*\
  !*** ./src/backend/blocks/html/icon.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3 18V16H15V18ZM3 13V11H21V13ZM3 8V6H21V8Z"
})));

/***/ }),

/***/ "./src/backend/blocks/html/index.js":
/*!******************************************!*\
  !*** ./src/backend/blocks/html/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/html/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/html/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/html/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/html/icon.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);

/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */


const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_1__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null);
  }
};


/***/ }),

/***/ "./src/backend/blocks/html/inspector.js":
/*!**********************************************!*\
  !*** ./src/backend/blocks/html/inspector.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes: {
      width
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns the input field will occupy', 'gutenberg-form'),
    value: width,
    max: 6,
    min: 1,
    onChange: value => setAttributes({
      width: value
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/blocks/radio/edit.js":
/*!******************************************!*\
  !*** ./src/backend/blocks/radio/edit.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/radio/inspector.js");

/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      width,
      required,
      placeholder,
      label,
      fieldid,
      options
    },
    setAttributes
  } = props;
  const validFieldId = () => {
    const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
    return validPattern.test(fieldid);
  };
  const setFieldId = value => {
    value = value.toLowerCase();
    value = value.replace(/\s/g, '-');
    setAttributes({
      fieldid: value.toLowerCase()
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-field', 'ctx:form-field--' + width, validFieldId() == false ? 'ctx:form-field--error' : ''].filter(Boolean).join(' ')
  });
  console.log(placeholder);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "ctx:form-details__label",
    value: label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'gutenberg-form'),
    onChange: value => setAttributes({
      label: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, required ? '*' : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label for the field', 'gutenberg-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label",
    value: fieldid,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slug', 'gutenberg-form'),
    onChange: value => setFieldId(value)
  }), validFieldId() == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__error-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please type in a unique itentifier for the field', 'gutenberg-form')), validFieldId() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unique identifier', 'gutenberg-form')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, options.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      name: index,
      value: index,
      checked: placeholder == index,
      onChange: () => {
        setAttributes({
          placeholder: index
        });
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, option));
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/radio/icon.js":
/*!******************************************!*\
  !*** ./src/backend/blocks/radio/icon.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z"
})));

/***/ }),

/***/ "./src/backend/blocks/radio/index.js":
/*!*******************************************!*\
  !*** ./src/backend/blocks/radio/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/radio/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/radio/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/radio/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/radio/icon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/radio/inspector.js":
/*!***********************************************!*\
  !*** ./src/backend/blocks/radio/inspector.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes: {
      width,
      required,
      options,
      error
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Data', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'gutenberg-form'),
    checked: required,
    onChange: value => setAttributes({
      required: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error message', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text to inform the user that a choice has to be made', 'gutenberg-form'),
    value: error,
    onChange: value => setAttributes({
      error: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Options', 'gutenberg-form'),
    value: options.join('\n'),
    onChange: value => setAttributes({
      options: value.split('\n')
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Options for the radio control. Each line represents one option', 'gutenberg-form')
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/blocks/select/edit.js":
/*!*******************************************!*\
  !*** ./src/backend/blocks/select/edit.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/select/inspector.js");

/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      width,
      required,
      pattern,
      label,
      fieldid,
      help,
      error,
      options,
      hasEmptyOption
    },
    setAttributes
  } = props;
  const validFieldId = () => {
    const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
    return validPattern.test(fieldid);
  };
  const setFieldId = value => {
    value = value.toLowerCase();
    value = value.replace(/\s/g, '_');
    setAttributes({
      fieldid: value.toLowerCase()
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-field', 'ctx:form-field--' + width, validFieldId() == false ? 'ctx:form-field--error' : ''].filter(Boolean).join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "ctx:form-details__label",
    value: label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'gutenberg-form'),
    onChange: value => setAttributes({
      label: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, required ? '*' : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label for the field', 'gutenberg-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label",
    value: fieldid,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slug', 'gutenberg-form'),
    onChange: value => setFieldId(value)
  }), validFieldId() == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__error-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please type in a unique itentifier for the field', 'gutenberg-form')), validFieldId() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unique identifier', 'gutenberg-form')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", null, hasEmptyOption && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: ""
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Make a selection', 'gutenberg-form')), options.map((option, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      key: index,
      value: index
    }, option);
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/select/icon.js":
/*!*******************************************!*\
  !*** ./src/backend/blocks/select/icon.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5 9H10V7H5ZM5 13H10V11H5ZM5 17H10V15H5ZM14.55 15 19.5 10.05 18.075 8.625 14.55 12.175 13.125 10.75 11.725 12.175ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM4 19H20Q20 19 20 19Q20 19 20 19V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5V19Q4 19 4 19Q4 19 4 19ZM4 19Q4 19 4 19Q4 19 4 19V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V19Q4 19 4 19Q4 19 4 19Z"
})));

/***/ }),

/***/ "./src/backend/blocks/select/index.js":
/*!********************************************!*\
  !*** ./src/backend/blocks/select/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/select/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/select/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/select/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/select/icon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/select/inspector.js":
/*!************************************************!*\
  !*** ./src/backend/blocks/select/inspector.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes: {
      width,
      required,
      help,
      error,
      options,
      hasEmptyOption
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Data', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'gutenberg-form'),
    checked: required,
    onChange: value => setAttributes({
      required: value,
      hasEmptyOption: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Empty option', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('An empty option ist shown and selected as default', 'gutenberg-form'),
    checked: hasEmptyOption,
    disabled: required,
    onChange: value => setAttributes({
      hasEmptyOption: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Help', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Alternate text for the empty option', 'gutenberg-form'),
    value: help,
    disabled: !hasEmptyOption,
    onChange: value => setAttributes({
      help: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error message', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text to inform the user that a choice has to be made', 'gutenberg-form'),
    value: error,
    onChange: value => setAttributes({
      error: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Options', 'gutenberg-form'),
    value: options.join('\n'),
    onChange: value => setAttributes({
      options: value.split('\n')
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Options for the select control. Each line represents one option', 'gutenberg-form')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns the input field will occupy', 'gutenberg-form'),
    value: width,
    max: 6,
    min: 1,
    onChange: value => setAttributes({
      width: value
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/blocks/tel/edit.js":
/*!****************************************!*\
  !*** ./src/backend/blocks/tel/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/tel/inspector.js");

/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      width,
      required,
      label,
      fieldid
    },
    setAttributes
  } = props;
  const validFieldId = () => {
    const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
    return validPattern.test(fieldid);
  };
  const setFieldId = value => {
    value = value.toLowerCase();
    value = value.replace(/\s/g, '-');
    setAttributes({
      fieldid: value.toLowerCase()
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-field', 'ctx:form-field--' + width, validFieldId() == false ? 'ctx:form-field--error' : ''].filter(Boolean).join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "ctx:form-details__label",
    value: label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'gutenberg-form'),
    onChange: value => setAttributes({
      label: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, required ? '*' : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label for the field', 'gutenberg-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label",
    value: fieldid,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slug', 'gutenberg-form'),
    onChange: value => setFieldId(value)
  }), validFieldId() == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__error-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please type in a unique itentifier for the field', 'gutenberg-form')), validFieldId() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unique identifier', 'gutenberg-form')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    autocomplete: "off",
    type: "tel",
    onChange: event => setName({
      placeholder: event.target.value
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/tel/icon.js":
/*!****************************************!*\
  !*** ./src/backend/blocks/tel/icon.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M19 12Q19 9.075 16.962 7.037Q14.925 5 12 5V3Q13.875 3 15.513 3.712Q17.15 4.425 18.363 5.637Q19.575 6.85 20.288 8.487Q21 10.125 21 12ZM15 12Q15 10.75 14.125 9.875Q13.25 9 12 9V7Q14.075 7 15.538 8.462Q17 9.925 17 12ZM19.95 21Q16.725 21 13.663 19.562Q10.6 18.125 8.238 15.762Q5.875 13.4 4.438 10.337Q3 7.275 3 4.05Q3 3.6 3.3 3.3Q3.6 3 4.05 3H8.1Q8.45 3 8.725 3.225Q9 3.45 9.05 3.8L9.7 7.3Q9.75 7.65 9.688 7.937Q9.625 8.225 9.4 8.45L7 10.9Q8.05 12.7 9.625 14.275Q11.2 15.85 13.1 17L15.45 14.65Q15.675 14.425 16.038 14.312Q16.4 14.2 16.75 14.25L20.2 14.95Q20.55 15.025 20.775 15.287Q21 15.55 21 15.9V19.95Q21 20.4 20.7 20.7Q20.4 21 19.95 21ZM6.05 9 7.7 7.35Q7.7 7.35 7.7 7.35Q7.7 7.35 7.7 7.35L7.25 5Q7.25 5 7.25 5Q7.25 5 7.25 5H5.05Q5.05 5 5.05 5Q5.05 5 5.05 5Q5.175 6.025 5.4 7.025Q5.625 8.025 6.05 9ZM19 18.95Q19 18.95 19 18.95Q19 18.95 19 18.95V16.75Q19 16.75 19 16.75Q19 16.75 19 16.75L16.65 16.25Q16.65 16.25 16.65 16.25Q16.65 16.25 16.65 16.25L15 17.9Q15.975 18.325 16.975 18.6Q17.975 18.875 19 18.95ZM15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9Q15 17.9 15 17.9ZM6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Q6.05 9 6.05 9Z"
})));

/***/ }),

/***/ "./src/backend/blocks/tel/index.js":
/*!*****************************************!*\
  !*** ./src/backend/blocks/tel/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/tel/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/tel/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/tel/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/tel/icon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/tel/inspector.js":
/*!*********************************************!*\
  !*** ./src/backend/blocks/tel/inspector.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes: {
      width,
      required,
      help,
      error
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Data', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'gutenberg-form'),
    checked: required,
    onChange: value => setAttributes({
      required: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pattern', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Help text for the input field', 'gutenberg-form'),
    value: help,
    onChange: value => setAttributes({
      help: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error message', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text to display when the user types in invalid or insufficient data', 'gutenberg-form'),
    value: error,
    onChange: value => setAttributes({
      error: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns the input field will occupy', 'gutenberg-form'),
    value: width,
    max: 6,
    min: 1,
    onChange: value => setAttributes({
      width: value
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/blocks/text/edit.js":
/*!*****************************************!*\
  !*** ./src/backend/blocks/text/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/text/inspector.js");
/* harmony import */ var _lockIcon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lockIcon.js */ "./src/backend/blocks/text/lockIcon.js");

/**
 * Wordpress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      width,
      required,
      pattern,
      placeholder,
      label,
      fieldid,
      help,
      error
    },
    setAttributes
  } = props;
  const lockFieldId = ['first_name', 'last_name'].includes(fieldid);
  const validFieldId = () => {
    const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
    return validPattern.test(fieldid);
  };
  const setFieldId = value => {
    value = value.toLowerCase();
    value = value.replace(/\s/g, '-');
    setAttributes({
      fieldid: value.toLowerCase()
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-field', 'ctx:form-field--' + width, validFieldId() == false ? 'ctx:form-field--error' : ''].filter(Boolean).join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_4__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "ctx:form-details__label",
    value: label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label', 'gutenberg-form'),
    onChange: value => setAttributes({
      label: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, required ? '*' : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Label for the field', 'gutenberg-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__name"
  }, !lockFieldId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label",
    value: fieldid,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Slug', 'gutenberg-form'),
    onChange: value => setFieldId(value)
  }), lockFieldId && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-details__label--lock"
  }, fieldid, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    icon: _lockIcon_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    size: 14
  })), validFieldId() == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__error-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Please type in a unique itentifier for the field', 'gutenberg-form')), validFieldId() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Unique identifier', 'gutenberg-form')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    autocomplete: "off",
    value: placeholder,
    type: "text",
    onChange: event => setAttributes({
      placeholder: event.target.value
    })
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/text/icon.js":
/*!*****************************************!*\
  !*** ./src/backend/blocks/text/icon.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10 21 14 17H22V21ZM4 19H5.4L14.025 10.375L12.625 8.975L4 17.6ZM18.3 8.925 14.05 4.725 15.45 3.325Q16.025 2.75 16.863 2.75Q17.7 2.75 18.275 3.325L19.675 4.725Q20.25 5.3 20.275 6.113Q20.3 6.925 19.725 7.5ZM16.85 10.4 6.25 21H2V16.75L12.6 6.15ZM13.325 9.675 12.625 8.975 14.025 10.375Z"
})));

/***/ }),

/***/ "./src/backend/blocks/text/index.js":
/*!******************************************!*\
  !*** ./src/backend/blocks/text/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/text/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/text/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/text/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/text/icon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/text/inspector.js":
/*!**********************************************!*\
  !*** ./src/backend/blocks/text/inspector.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes: {
      width,
      required,
      pattern,
      fieldid,
      label,
      name,
      help,
      error
    },
    setAttributes
  } = props;
  const lockFieldId = ['first_name', 'last_name'].includes(fieldid);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Data', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'gutenberg-form'),
    checked: required,
    disabled: lockFieldId,
    onChange: value => setAttributes({
      required: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pattern', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Regular expression to prevent wrong or illegal input', 'gutenberg-form'),
    value: pattern,
    onChange: value => setAttributes({
      pattern: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Help', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Details about how to fill this field', 'gutenberg-form'),
    value: help,
    onChange: value => setAttributes({
      help: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error message', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text to display when the user types in invalid or insufficient data', 'gutenberg-form'),
    value: error,
    onChange: value => setAttributes({
      error: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns the input field will occupy', 'gutenberg-form'),
    value: width,
    max: 6,
    min: 1,
    onChange: value => setAttributes({
      width: value
    })
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/blocks/text/lockIcon.js":
/*!*********************************************!*\
  !*** ./src/backend/blocks/text/lockIcon.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "14px",
  viewBox: "0 0 24 24",
  width: "14px",
  fill: "#555555"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
})));

/***/ }),

/***/ "./src/backend/blocks/textarea/edit.js":
/*!*********************************************!*\
  !*** ./src/backend/blocks/textarea/edit.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector.js */ "./src/backend/blocks/textarea/inspector.js");

/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * @param {Props} props
 * @return {JSX.Element} Element
 */
const edit = props => {
  const {
    attributes: {
      width,
      required,
      pattern,
      placeholder,
      label,
      fieldid,
      rows,
      help,
      error
    },
    setAttributes
  } = props;
  const validFieldId = () => {
    const validPattern = new RegExp('([a-zA-Z0-9_]){3,40}');
    return validPattern.test(fieldid);
  };
  const setFieldId = value => {
    value = value.toLowerCase();
    value = value.replace(/\s/g, '-');
    setAttributes({
      fieldid: value.toLowerCase()
    });
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: ['ctx:form-field', validFieldId() == false ? 'ctx:form-field--error' : ''].filter(Boolean).join(' ')
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_js__WEBPACK_IMPORTED_MODULE_3__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__caption"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__description"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "ctx:form-details__label",
    value: label,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label', 'gutenberg-form'),
    onChange: value => setAttributes({
      label: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, required ? '*' : '')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Label for the field', 'gutenberg-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ctx:form-field__name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "ctx:form-details__label",
    value: fieldid,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Slug', 'ctx-blocks'),
    onChange: value => setFieldId(value)
  }), validFieldId() == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__error-message"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please type in a unique itentifier for the field', 'gutenberg-form')), validFieldId() && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ctx:form-field__label"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unique identifier', 'gutenberg-form')))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: rows,
    autocomplete: "off",
    type: "text",
    onChange: event => setAttributes({
      placeholder: event.target.value
    })
  }, placeholder));
};
/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/backend/blocks/textarea/icon.js":
/*!*********************************************!*\
  !*** ./src/backend/blocks/textarea/icon.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  width: "24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 21V18.875L17.3 13.575L19.425 15.7L14.125 21ZM3 16V14H10V16ZM20.125 15 18 12.875 18.725 12.15Q19 11.875 19.425 11.875Q19.85 11.875 20.125 12.15L20.85 12.875Q21.125 13.15 21.125 13.575Q21.125 14 20.85 14.275ZM3 12V10H14V12ZM3 8V6H14V8Z"
})));

/***/ }),

/***/ "./src/backend/blocks/textarea/index.js":
/*!**********************************************!*\
  !*** ./src/backend/blocks/textarea/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "settings": function() { return /* binding */ settings; }
/* harmony export */ });
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/backend/blocks/textarea/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/backend/blocks/textarea/edit.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/backend/blocks/textarea/editor.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/backend/blocks/textarea/icon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Internal dependencies
 */





/**
 * Wordpress dependencies
 */

const {
  name,
  title,
  description
} = _block_json__WEBPACK_IMPORTED_MODULE_0__;
const settings = {
  ..._block_json__WEBPACK_IMPORTED_MODULE_0__,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(title, 'gutenberg-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(description, 'gutenberg-form'),
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: () => {
    return null;
  }
};


/***/ }),

/***/ "./src/backend/blocks/textarea/inspector.js":
/*!**************************************************!*\
  !*** ./src/backend/blocks/textarea/inspector.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




const Inspector = props => {
  const {
    attributes: {
      width,
      required,
      pattern,
      label,
      rows,
      name,
      help,
      error
    },
    setAttributes
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Data', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Required', 'gutenberg-form'),
    checked: required,
    onChange: value => setAttributes({
      required: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Pattern', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Help text for the input field', 'gutenberg-form'),
    value: help,
    onChange: value => setAttributes({
      help: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Error message', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text to display when the user types in invalid or insufficient data', 'gutenberg-form'),
    value: error,
    onChange: value => setAttributes({
      error: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Appearance', 'gutenberg-form'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Width', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of columns the input field will occupy', 'gutenberg-form'),
    value: width,
    max: 6,
    min: 1,
    onChange: value => setAttributes({
      width: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Height', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Number of text rows', 'gutenberg-form'),
    value: rows,
    onChange: value => setAttributes({
      rows: value
    }),
    min: 1,
    max: 12
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/backend/plugins/mail-editor/index.js":
/*!**************************************************!*\
  !*** ./src/backend/plugins/mail-editor/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Adds a metabox for the page color settings
 */

/**
 * WordPress dependencies
 */





const MailEditor = () => {
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/editor').getCurrentPostType();
  if (postType !== 'event') return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', postType, 'meta');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__.PluginDocumentSettingPanel, {
    name: "maileditor-settings",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Mail Content', 'events'),
    className: "events-location-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Subject', 'events'),
    value: meta._event_audience,
    onChange: value => {
      setMeta({
        _event_audience: value
      });
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mail-editor',
  settings: {
    render: MailEditor,
    icon: 'edit'
  }
});

/***/ }),

/***/ "./src/backend/plugins/mail-recipients/index.js":
/*!******************************************************!*\
  !*** ./src/backend/plugins/mail-recipients/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Adds a metabox for the page color settings
 */

/**
 * WordPress dependencies
 */





const MailRecipients = _ref => {
  let {
    ...props
  } = _ref;
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)('core/editor').getCurrentPostType();
  console.log(postType);
  if (postType !== 'gbf-form') {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  }
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', postType, 'meta');
  console.log(meta);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_3__.PluginDocumentSettingPanel, {
    name: "form-recipient-settings",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Recipients', 'gutenberg-form'),
    className: "form-recipient-settings"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Mail addresses', 'gutenberg-form'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Separate multiple addresses with commas', 'gutenberg-form'),
    value: meta._mail_recipients,
    onChange: value => {
      setMeta({
        _mail_recipients: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Send copy to admin', 'gutenberg-form'),
    checked: meta._send_to_admin,
    onChange: value => {
      setMeta({
        _send_to_admin: value
      });
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mail-recipients',
  settings: {
    render: MailRecipients,
    icon: 'email'
  }
});

/***/ }),

/***/ "./src/backend/plugins/plugins.js":
/*!****************************************!*\
  !*** ./src/backend/plugins/plugins.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mail_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail-editor */ "./src/backend/plugins/mail-editor/index.js");
/* harmony import */ var _mail_recipients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mail-recipients */ "./src/backend/plugins/mail-recipients/index.js");
/**
 * WordPress dependencies
 */


/**
 * Plugin dependencies.
 */


const plugins = [_mail_editor__WEBPACK_IMPORTED_MODULE_1__["default"], _mail_recipients__WEBPACK_IMPORTED_MODULE_2__["default"]];
const registerPlugins = () => {
  plugins.forEach(plugin => {
    (0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)(plugin.name, plugin.settings);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (registerPlugins);

/***/ }),

/***/ "./src/backend/blocks/checkbox/editor.scss":
/*!*************************************************!*\
  !*** ./src/backend/blocks/checkbox/editor.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/container/editor.scss":
/*!**************************************************!*\
  !*** ./src/backend/blocks/container/editor.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/country/editor.scss":
/*!************************************************!*\
  !*** ./src/backend/blocks/country/editor.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/date/editor.scss":
/*!*********************************************!*\
  !*** ./src/backend/blocks/date/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/email/editor.scss":
/*!**********************************************!*\
  !*** ./src/backend/blocks/email/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/form/editor.scss":
/*!*********************************************!*\
  !*** ./src/backend/blocks/form/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/html/editor.scss":
/*!*********************************************!*\
  !*** ./src/backend/blocks/html/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/radio/editor.scss":
/*!**********************************************!*\
  !*** ./src/backend/blocks/radio/editor.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/select/editor.scss":
/*!***********************************************!*\
  !*** ./src/backend/blocks/select/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/tel/editor.scss":
/*!********************************************!*\
  !*** ./src/backend/blocks/tel/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/text/editor.scss":
/*!*********************************************!*\
  !*** ./src/backend/blocks/text/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/backend/blocks/textarea/editor.scss":
/*!*************************************************!*\
  !*** ./src/backend/blocks/textarea/editor.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/backend/blocks/checkbox/block.json":
/*!************************************************!*\
  !*** ./src/backend/blocks/checkbox/block.json ***!
  \************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/checkbox","apiVersion":2,"title":"Checkbox","description":"Lets the user check something","category":"widgets","attributes":{"fieldid":{"type":"string","default":""},"width":{"type":"integer","default":6},"required":{"type":"boolean","default":false},"label":{"type":"string","default":""},"placeholder":{"type":"boolean","default":false},"help":{"type":"string","default":""},"error":{"type":"string","default":""},"style":{"type":"string","default":"checkbox"}},"parent":["gutenberg-form/form-container"]}');

/***/ }),

/***/ "./src/backend/blocks/container/block.json":
/*!*************************************************!*\
  !*** ./src/backend/blocks/container/block.json ***!
  \*************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/form-container","apiVersion":2,"title":"Form Container","description":"Basic form container block","category":"layout","attributes":{},"usesContext":["postType"]}');

/***/ }),

/***/ "./src/backend/blocks/country/block.json":
/*!***********************************************!*\
  !*** ./src/backend/blocks/country/block.json ***!
  \***********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/country","apiVersion":2,"title":"Country","description":"Lets the user select a country","category":"widgets","attributes":{"fieldid":{"type":"string","default":""},"width":{"type":"integer","default":6},"required":{"type":"boolean","default":false},"label":{"type":"string","default":""},"defaultValue":{"type":"string","default":""},"help":{"type":"string","default":""},"error":{"type":"string","default":""}},"parent":["gutenberg-form/form-container"]}');

/***/ }),

/***/ "./src/backend/blocks/date/block.json":
/*!********************************************!*\
  !*** ./src/backend/blocks/date/block.json ***!
  \********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/date","apiVersion":2,"title":"Date Field","description":"Lets the user specify a date","category":"widgets","attributes":{"fieldid":{"type":"string","default":""},"width":{"type":"integer","default":6},"required":{"type":"boolean","default":false},"min":{"type":"datetime","default":""},"max":{"type":"datetime","default":""},"label":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"help":{"type":"string","default":""},"error":{"type":"string","default":""}},"parent":["gutenberg-form/form-container"]}');

/***/ }),

/***/ "./src/backend/blocks/email/block.json":
/*!*********************************************!*\
  !*** ./src/backend/blocks/email/block.json ***!
  \*********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/email","apiVersion":2,"title":"Email Field","description":"Lets the user type an email address.","category":"widgets","attributes":{"fieldid":{"type":"string","default":""},"width":{"type":"integer","default":6},"required":{"type":"boolean","default":true},"label":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"help":{"type":"string","default":""},"error":{"type":"string","default":""}},"parent":["gutenberg-form/form-container"]}');

/***/ }),

/***/ "./src/backend/blocks/form/block.json":
/*!********************************************!*\
  !*** ./src/backend/blocks/form/block.json ***!
  \********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/form","apiVersion":2,"title":"Form","description":"Add a form as Block to a page.","category":"widgets","attributes":{"formPost":{"type":"string","default":""}},"usesContext":["postType"]}');

/***/ }),

/***/ "./src/backend/blocks/html/block.json":
/*!********************************************!*\
  !*** ./src/backend/blocks/html/block.json ***!
  \********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/html","apiVersion":2,"title":"Text Block","description":"Headline or text block","category":"widgets","attributes":{"width":{"type":"integer","default":6}},"parent":["gutenberg-form/form-container"]}');

/***/ }),

/***/ "./src/backend/blocks/radio/block.json":
/*!*********************************************!*\
  !*** ./src/backend/blocks/radio/block.json ***!
  \*********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/radio","apiVersion":2,"title":"Radio Select","description":"Lets the user check something","category":"widgets","attributes":{"fieldid":{"type":"string","default":""},"width":{"type":"integer","default":6},"required":{"type":"boolean","default":false},"label":{"type":"string","default":""},"placeholder":{"type":"integer","default":0},"help":{"type":"string","default":""},"error":{"type":"string","default":""},"options":{"type":"array","default":[]}},"parent":["gutenberg-form/form-container"]}');

/***/ }),

/***/ "./src/backend/blocks/select/block.json":
/*!**********************************************!*\
  !*** ./src/backend/blocks/select/block.json ***!
  \**********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/select","apiVersion":2,"title":"Select","description":"Lets the user select something","category":"widgets","attributes":{"fieldid":{"type":"string","default":""},"width":{"type":"integer","default":6},"required":{"type":"boolean","default":false},"options":{"type":"array","default":[]},"hasEmptyOption":{"type":"boolean","default":false},"label":{"type":"string","default":""},"placeholder":{"type":"boolean","default":false},"help":{"type":"string","default":""},"error":{"type":"string","default":""}},"parent":["gutenberg-form/form-container"]}');

/***/ }),

/***/ "./src/backend/blocks/tel/block.json":
/*!*******************************************!*\
  !*** ./src/backend/blocks/tel/block.json ***!
  \*******************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/tel","apiVersion":2,"title":"Phone Field","description":"Lets the user type a phone number.","category":"widgets","attributes":{"fieldid":{"type":"string","default":"email"},"width":{"type":"integer","default":6},"required":{"type":"boolean","default":true},"label":{"type":"string","default":"Phone"},"placeholder":{"type":"string","default":""},"help":{"type":"string","default":""},"error":{"type":"string","default":""}},"parent":["gutenberg-form/form-container"]}');

/***/ }),

/***/ "./src/backend/blocks/text/block.json":
/*!********************************************!*\
  !*** ./src/backend/blocks/text/block.json ***!
  \********************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/text","apiVersion":2,"title":"Text Field","description":"Lets the user type a short text","category":"widgets","attributes":{"fieldid":{"type":"string","default":""},"width":{"type":"integer","default":6},"required":{"type":"boolean","default":false},"pattern":{"type":"string","default":""},"label":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"help":{"type":"string","default":""},"error":{"type":"string","default":""}},"parent":["gutenberg-form/form-container"]}');

/***/ }),

/***/ "./src/backend/blocks/textarea/block.json":
/*!************************************************!*\
  !*** ./src/backend/blocks/textarea/block.json ***!
  \************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"gutenberg-form/textarea","apiVersion":2,"title":"Text Area","description":"Lets the user type a longer text","category":"widgets","attributes":{"fieldid":{"type":"string","default":""},"width":{"type":"integer","default":6},"required":{"type":"boolean","default":false},"pattern":{"type":"string","default":""},"label":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"help":{"type":"string","default":""},"rows":{"type":"number","default":3},"error":{"type":"string","default":""}},"parent":["gutenberg-form/form-container"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************************!*\
  !*** ./src/backend/backend.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/blocks.js */ "./src/backend/blocks/blocks.js");
/* harmony import */ var _plugins_plugins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/plugins.js */ "./src/backend/plugins/plugins.js");


(0,_blocks_blocks_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_plugins_plugins_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=backend.js.map