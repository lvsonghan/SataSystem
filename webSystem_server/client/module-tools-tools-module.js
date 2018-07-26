(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-tools-tools-module"],{

/***/ "./node_modules/@tinymce/tinymce-angular/esm5/tinymce-tinymce-angular.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-angular/esm5/tinymce-tinymce-angular.js ***!
  \*******************************************************************************/
/*! exports provided: EditorModule, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 * @template T
 */
var Events = /** @class */ (function () {
    function Events() {
        this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    return Events;
}());
Events.propDecorators = {
    "onBeforePaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onContextMenu": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onCopy": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onCut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onDblclick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onDragDrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onDragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onDragGesture": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onDragOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onDrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocusIn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onFocusOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyPress": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onKeyUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onMouseDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onMouseEnter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onMouseLeave": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onMouseMove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onMouseUp": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onPaste": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onSelectionChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onActivate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onAddUndo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBeforeAddUndo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBeforeExecCommand": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBeforeGetContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBeforeRenderUI": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onBeforeSetContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onClearUndos": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onDeactivate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onDirty": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onExecCommand": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onGetContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onInit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onLoadContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onNodeChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onPostProcess": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onPostRender": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onPreInit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onPreProcess": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onProgressState": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRedo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onRemove": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onReset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onSaveContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onSetAttrib": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onObjectResizeStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onObjectResized": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onObjectSelected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onSetContent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onSubmit": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onUndo": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onVisualAid": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
};
var validEvents = [
    'onActivate',
    'onAddUndo',
    'onBeforeAddUndo',
    'onBeforeExecCommand',
    'onBeforeGetContent',
    'onBeforeRenderUI',
    'onBeforeSetContent',
    'onBeforePaste',
    'onBlur',
    'onChange',
    'onClearUndos',
    'onClick',
    'onContextMenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onDeactivate',
    'onDirty',
    'onDrag',
    'onDragDrop',
    'onDragEnd',
    'onDragGesture',
    'onDragOver',
    'onDrop',
    'onExecCommand',
    'onFocus',
    'onFocusIn',
    'onFocusOut',
    'onGetContent',
    'onHide',
    'onInit',
    'onKeyDown',
    'onKeyPress',
    'onKeyUp',
    'onLoadContent',
    'onMouseDown',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onNodeChange',
    'onObjectResizeStart',
    'onObjectResized',
    'onObjectSelected',
    'onPaste',
    'onPostProcess',
    'onPostRender',
    'onPreProcess',
    'onProgressState',
    'onRedo',
    'onRemove',
    'onReset',
    'onSaveContent',
    'onSelectionChange',
    'onSetAttrib',
    'onSetContent',
    'onShow',
    'onSubmit',
    'onUndo',
    'onVisualAid'
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var bindHandlers = function (ctx, editor, initEvent) {
    validEvents.forEach(function (eventName) {
        var /** @type {?} */ eventEmitter = ctx[eventName];
        if (eventEmitter.observers.length > 0) {
            if (eventName === 'onInit') {
                ctx.ngZone.run(function () { return eventEmitter.emit({ event: initEvent, editor: editor }); });
            }
            else {
                editor.on(eventName.substring(2), ctx.ngZone.run(function () { return function (event) { return eventEmitter.emit({ event: event, editor: editor }); }; }));
            }
        }
    });
};
var unique = 0;
var uuid = function (prefix) {
    var /** @type {?} */ date = new Date();
    var /** @type {?} */ time = date.getTime();
    var /** @type {?} */ random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
var isTextarea = function (element) {
    return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
};
var normalizePluginArray = function (plugins) {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
var mergePlugins = function (initPlugins, inputPlugins) { return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins)); };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/**
 * @record
 */
var injectScriptTag = function (scriptId, doc, url, callback) {
    var /** @type {?} */ scriptTag = doc.createElement('script');
    scriptTag.type = 'application/javascript';
    scriptTag.id = scriptId;
    scriptTag.addEventListener('load', callback);
    scriptTag.src = url;
    doc.head.appendChild(scriptTag);
};
var create = function () {
    return {
        listeners: [],
        scriptId: uuid('tiny-script'),
        scriptLoaded: false
    };
};
var load = function (state, doc, url, callback) {
    if (state.scriptLoaded) {
        callback();
    }
    else {
        state.listeners.push(callback);
        if (!doc.getElementById(state.scriptId)) {
            injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) { return fn(); });
                state.scriptLoaded = true;
            });
        }
    }
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var getTinymce = function () {
    var /** @type {?} */ w = (window);
    return w && w.tinymce ? w.tinymce : null;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var scriptState = create();
var EDITOR_COMPONENT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EditorComponent; }),
    multi: true
};
var EditorComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EditorComponent, _super);
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     */
    function EditorComponent(elementRef, ngZone) {
        var _this = _super.call(this) || this;
        _this.element = undefined;
        _this.id = '';
        _this.toolbar = null;
        _this.onTouchedCallback = function () { };
        _this.onChangeCallback = function (x) { };
        _this.elementRef = elementRef;
        _this.ngZone = ngZone;
        _this.initialise = _this.initialise.bind(_this);
        return _this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    EditorComponent.prototype.writeValue = function (value) {
        this.initialValue = value || this.initialValue;
        if (this.editor && this.editor.initialized && typeof value === 'string') {
            this.editor.setContent(value);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EditorComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    EditorComponent.prototype.setDisabledState = function (isDisabled) {
        if (this.editor) {
            this.editor.setMode(isDisabled ? 'readonly' : 'design');
        }
        else if (isDisabled) {
            this.init = Object.assign({}, this.init, { readonly: true });
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngAfterViewInit = function () {
        this.id = this.id || uuid('tiny-react');
        this.inline = typeof this.inline !== 'undefined' ? this.inline : this.init && this.init["inline"];
        this.createElement();
        if (getTinymce() !== null) {
            this.initialise();
        }
        else if (this.element) {
            var /** @type {?} */ doc = this.element.ownerDocument;
            var /** @type {?} */ channel = this.cloudChannel || 'stable';
            var /** @type {?} */ apiKey = this.apiKey || '';
            load(scriptState, doc, "https://cloud.tinymce.com/" + channel + "/tinymce.min.js?apiKey=" + apiKey, this.initialise);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngOnDestroy = function () {
        if (getTinymce() !== null) {
            getTinymce().remove(this.editor);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.createElement = function () {
        var /** @type {?} */ tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
        this.element = document.createElement(this.inline ? tagName : 'textarea');
        if (this.element) {
            this.element.id = this.id;
            if (isTextarea(this.element)) {
                this.element.style.visibility = 'hidden';
            }
            this.elementRef.nativeElement.appendChild(this.element);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.initialise = function () {
        var _this = this;
        var /** @type {?} */ finalInit = Object.assign({}, this.init, { selector: "#" + this.id, inline: this.inline, plugins: mergePlugins(this.init && this.init["plugins"], this.plugins), toolbar: this.toolbar || (this.init && this.init["toolbar"]), setup: function (editor) {
                _this.editor = editor;
                editor.on('init', function (e) {
                    _this.initEditor(e, editor);
                });
                if (_this.init && typeof _this.init["setup"] === 'function') {
                    _this.init["setup"](editor);
                }
            } });
        if (isTextarea(this.element)) {
            this.element.style.visibility = '';
        }
        this.ngZone.runOutsideAngular(function () {
            getTinymce().init(finalInit);
        });
    };
    /**
     * @param {?} initEvent
     * @param {?} editor
     * @return {?}
     */
    EditorComponent.prototype.initEditor = function (initEvent, editor) {
        var _this = this;
        if (typeof this.initialValue === 'string') {
            this.ngZone.run(function () { return editor.setContent(_this.initialValue); });
        }
        editor.once('blur', function () { return _this.ngZone.run(function () { return _this.onTouchedCallback(); }); });
        editor.on('setcontent', function (_a) {
            var content = _a.content, format = _a.format;
            return format === 'html' && content && _this.ngZone.run(function () { return _this.onChangeCallback(content); });
        });
        editor.on('change keyup undo redo', function () { return _this.ngZone.run(function () { return _this.onChangeCallback(editor.getContent()); }); });
        bindHandlers(this, editor, initEvent);
    };
    return EditorComponent;
}(Events));
EditorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'editor',
                template: '<ng-template></ng-template>',
                styles: [':host { display: block; }'],
                providers: [EDITOR_COMPONENT_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
EditorComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
]; };
EditorComponent.propDecorators = {
    "cloudChannel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "apiKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "init": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "initialValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inline": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "tagName": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "plugins": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "toolbar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    return EditorModule;
}());
EditorModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [EditorComponent],
                exports: [EditorComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=tinymce-tinymce-angular.js.map


/***/ }),

/***/ "./node_modules/angular-calendar/fesm5/angular-calendar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-calendar/fesm5/angular-calendar.js ***!
  \*****************************************************************/
/*! exports provided: DAYS_OF_WEEK, CalendarModule, CalendarCommonModule, CalendarEventTitleFormatter, MOMENT, CalendarMomentDateFormatter, CalendarNativeDateFormatter, CalendarAngularDateFormatter, CalendarDateFormatter, CalendarUtils, CalendarMonthViewComponent, CalendarMonthModule, CalendarWeekViewComponent, CalendarWeekModule, CalendarDayViewComponent, CalendarDayModule, ɵh, ɵa, ɵb, ɵi, ɵf, ɵe, ɵg, ɵd, ɵc, ɵj, ɵp, ɵr, ɵq, ɵk, ɵm, ɵl, ɵo, ɵn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarCommonModule", function() { return CalendarCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return CalendarEventTitleFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOMENT", function() { return MOMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return CalendarMomentDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return CalendarNativeDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarAngularDateFormatter", function() { return CalendarAngularDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return CalendarDateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return CalendarUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return CalendarMonthViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarMonthModule", function() { return CalendarMonthModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return CalendarWeekViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarWeekModule", function() { return CalendarWeekModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return CalendarDayViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarDayModule", function() { return CalendarDayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CalendarDatePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CalendarEventActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CalendarEventTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CalendarEventTitlePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return CalendarNextViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return CalendarPreviousViewDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return CalendarTodayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return CalendarTooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CalendarTooltipWindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ClickDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return CalendarAllDayEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return CalendarDayViewEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return CalendarDayViewHourSegmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return CalendarMonthCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return CalendarMonthViewHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return CalendarOpenDayEventsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return CalendarWeekViewEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return CalendarWeekViewHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var calendar_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! calendar-utils */ "./node_modules/calendar-utils/dist/calendar-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return calendar_utils__WEBPACK_IMPORTED_MODULE_1__["DAYS_OF_WEEK"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! positioning */ "./node_modules/positioning/dist/positioning.js");
/* harmony import */ var date_fns_sub_days_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/sub_days/index */ "./node_modules/date-fns/sub_days/index.js");
/* harmony import */ var date_fns_sub_days_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_sub_days_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_sub_weeks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/sub_weeks/index */ "./node_modules/date-fns/sub_weeks/index.js");
/* harmony import */ var date_fns_sub_weeks_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_sub_weeks_index__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns_sub_months_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/sub_months/index */ "./node_modules/date-fns/sub_months/index.js");
/* harmony import */ var date_fns_sub_months_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_sub_months_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_add_days_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/add_days/index */ "./node_modules/date-fns/add_days/index.js");
/* harmony import */ var date_fns_add_days_index__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_days_index__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var date_fns_add_weeks_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/add_weeks/index */ "./node_modules/date-fns/add_weeks/index.js");
/* harmony import */ var date_fns_add_weeks_index__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_weeks_index__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_add_months_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/add_months/index */ "./node_modules/date-fns/add_months/index.js");
/* harmony import */ var date_fns_add_months_index__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_months_index__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns_start_of_today_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/start_of_today/index */ "./node_modules/date-fns/start_of_today/index.js");
/* harmony import */ var date_fns_start_of_today_index__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns_start_of_today_index__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var date_fns_get_iso_week_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/get_iso_week/index */ "./node_modules/date-fns/get_iso_week/index.js");
/* harmony import */ var date_fns_get_iso_week_index__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_iso_week_index__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var date_fns_is_same_day_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns/is_same_day/index */ "./node_modules/date-fns/is_same_day/index.js");
/* harmony import */ var date_fns_is_same_day_index__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_same_day_index__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var date_fns_set_date_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns/set_date/index */ "./node_modules/date-fns/set_date/index.js");
/* harmony import */ var date_fns_set_date_index__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(date_fns_set_date_index__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var date_fns_set_month_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns/set_month/index */ "./node_modules/date-fns/set_month/index.js");
/* harmony import */ var date_fns_set_month_index__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(date_fns_set_month_index__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var date_fns_set_year_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns/set_year/index */ "./node_modules/date-fns/set_year/index.js");
/* harmony import */ var date_fns_set_year_index__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(date_fns_set_year_index__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var date_fns_get_date_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns/get_date/index */ "./node_modules/date-fns/get_date/index.js");
/* harmony import */ var date_fns_get_date_index__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_date_index__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var date_fns_get_month_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns/get_month/index */ "./node_modules/date-fns/get_month/index.js");
/* harmony import */ var date_fns_get_month_index__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_month_index__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var date_fns_get_year_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/get_year/index */ "./node_modules/date-fns/get_year/index.js");
/* harmony import */ var date_fns_get_year_index__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_year_index__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var date_fns_difference_in_seconds_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns/difference_in_seconds/index */ "./node_modules/date-fns/difference_in_seconds/index.js");
/* harmony import */ var date_fns_difference_in_seconds_index__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(date_fns_difference_in_seconds_index__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var date_fns_add_seconds_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! date-fns/add_seconds/index */ "./node_modules/date-fns/add_seconds/index.js");
/* harmony import */ var date_fns_add_seconds_index__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_seconds_index__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var date_fns_add_minutes_index__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! date-fns/add_minutes/index */ "./node_modules/date-fns/add_minutes/index.js");
/* harmony import */ var date_fns_add_minutes_index__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_minutes_index__WEBPACK_IMPORTED_MODULE_26__);





























/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ validateEvents$1 = function (events) {
    var /** @type {?} */ warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(['angular-calendar'], args));
    };
    return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["validateEvents"])(events, warn);
};
/**
 * @param {?} outer
 * @param {?} inner
 * @return {?}
 */
function isInside(outer, inner) {
    return (outer.left <= inner.left &&
        inner.left <= outer.right &&
        outer.left <= inner.right &&
        inner.right <= outer.right &&
        outer.top <= inner.top &&
        inner.top <= outer.bottom &&
        outer.top <= inner.bottom &&
        inner.bottom <= outer.bottom);
}
var /** @type {?} */ trackByEventId = function (index, event) {
    return event.id ? event.id : event;
};
var /** @type {?} */ trackByWeekDayHeaderDate = function (index, day) {
    return day.date.toISOString();
};
var /** @type {?} */ trackByIndex = function (index) { return index; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
        this.trackByIndex = trackByIndex;
    }
    CalendarEventActionsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-event-actions',
                    template: "\n    <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n      <a\n        class=\"cal-event-action\"\n        href=\"javascript:;\"\n        *ngFor=\"let action of event.actions; trackBy:trackByIndex\"\n        (mwlClick)=\"action.onClick({event: event})\"\n        [ngClass]=\"action.cssClass\"\n        [innerHtml]=\"action.label\">\n      </a>\n    </span>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarEventActionsComponent.propDecorators = {
        "event": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
    };
    return CalendarEventActionsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarEventTitleComponent = /** @class */ (function () {
    function CalendarEventTitleComponent() {
    }
    CalendarEventTitleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-event-title',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-view=\"view\">\n      <a\n        class=\"cal-event-title\"\n        href=\"javascript:;\"\n        [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n      </a>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarEventTitleComponent.propDecorators = {
        "event": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "view": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
    };
    return CalendarEventTitleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarTooltipWindowComponent = /** @class */ (function () {
    function CalendarTooltipWindowComponent() {
    }
    CalendarTooltipWindowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\">\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarTooltipWindowComponent.propDecorators = {
        "contents": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "event": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
    };
    return CalendarTooltipWindowComponent;
}());
var CalendarTooltipDirective = /** @class */ (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document //tslint:disable-line
         = document;
        this.placement = 'top';
        this.positioning = new positioning__WEBPACK_IMPORTED_MODULE_4__["Positioning"]();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.hide();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOver = /**
     * @return {?}
     */
    function () {
        this.show();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.onMouseOut = /**
     * @return {?}
     */
    function () {
        this.hide();
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.placement = this.placement;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    /**
     * @return {?}
     */
    CalendarTooltipDirective.prototype.positionTooltip = /**
     * @return {?}
     */
    function () {
        if (this.tooltipRef) {
            var /** @type {?} */ targetPosition = this.positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            var /** @type {?} */ elm = this.tooltipRef.location.nativeElement
                .children[0];
            this.renderer.setStyle(elm, 'top', targetPosition.top + "px");
            this.renderer.setStyle(elm, 'left', targetPosition.left + "px");
        }
    };
    CalendarTooltipDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlCalendarTooltip]'
                },] },
    ];
    /** @nocollapse */
    CalendarTooltipDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] },] },
    ]; };
    CalendarTooltipDirective.propDecorators = {
        "contents": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mwlCalendarTooltip',] },],
        "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['tooltipPlacement',] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['tooltipTemplate',] },],
        "event": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['tooltipEvent',] },],
        "appendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['tooltipAppendToBody',] },],
        "onMouseOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['mouseenter',] },],
        "onMouseOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['mouseleave',] },],
    };
    return CalendarTooltipDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @hidden
     * @return {?}
     */
    CalendarPreviousViewDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        var /** @type {?} */ subFn = {
            day: date_fns_sub_days_index__WEBPACK_IMPORTED_MODULE_5___default.a,
            week: date_fns_sub_weeks_index__WEBPACK_IMPORTED_MODULE_6___default.a,
            month: date_fns_sub_months_index__WEBPACK_IMPORTED_MODULE_7___default.a
        }[this.view];
        this.viewDateChange.emit(subFn(this.viewDate, 1));
    };
    CalendarPreviousViewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlCalendarPreviousView]'
                },] },
    ];
    /** @nocollapse */
    CalendarPreviousViewDirective.propDecorators = {
        "view": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "viewDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "viewDateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click',] },],
    };
    return CalendarPreviousViewDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var CalendarNextViewDirective = /** @class */ (function () {
    function CalendarNextViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @hidden
     * @return {?}
     */
    CalendarNextViewDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        var /** @type {?} */ addFn = {
            day: date_fns_add_days_index__WEBPACK_IMPORTED_MODULE_8___default.a,
            week: date_fns_add_weeks_index__WEBPACK_IMPORTED_MODULE_9___default.a,
            month: date_fns_add_months_index__WEBPACK_IMPORTED_MODULE_10___default.a
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, 1));
    };
    CalendarNextViewDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlCalendarNextView]'
                },] },
    ];
    /** @nocollapse */
    CalendarNextViewDirective.propDecorators = {
        "view": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "viewDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "viewDateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click',] },],
    };
    return CalendarNextViewDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var CalendarTodayDirective = /** @class */ (function () {
    function CalendarTodayDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @hidden
     * @return {?}
     */
    CalendarTodayDirective.prototype.onClick = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.viewDateChange.emit(date_fns_start_of_today_index__WEBPACK_IMPORTED_MODULE_11___default()());
    };
    CalendarTodayDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlCalendarToday]'
                },] },
    ];
    /** @nocollapse */
    CalendarTodayDirective.propDecorators = {
        "viewDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "viewDateChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click',] },],
    };
    return CalendarTodayDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
var  /**
 * This will use the angular date pipe to do all date formatting. It is the default date formatter used by the calendar.
 */
CalendarAngularDateFormatter = /** @class */ (function () {
    function CalendarAngularDateFormatter() {
    }
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'EEEE', null, locale);
    };
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'd', null, locale);
    };
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'MMMM y', null, locale);
    };
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'EEEE', null, locale);
    };
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'MMM d', null, locale);
    };
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        var /** @type {?} */ year = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'y', null, locale);
        var /** @type {?} */ weekNumber = date_fns_get_iso_week_index__WEBPACK_IMPORTED_MODULE_12___default()(date);
        return "Week " + weekNumber + " of " + year;
    };
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'h a', null, locale);
    };
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarAngularDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"](locale).transform(date, 'EEEE, MMMM d, y', null, locale);
    };
    return CalendarAngularDateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { DatePipe } from '\@angular/common';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return new DatePipe(locale).transform(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var  /**
 * This class is responsible for all formatting of dates. There are 3 implementations available, the `CalendarAngularDateFormatter` (default) which uses the angular date pipe to format dates, the `CalendarNativeDateFormatter` which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 * import { DatePipe } from '\@angular/common';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return new DatePipe(locale).transform(date, 'EEE', locale); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
CalendarDateFormatter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CalendarDateFormatter;
}(CalendarAngularDateFormatter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var CalendarDatePipe = /** @class */ (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    /**
     * @param {?} date
     * @param {?} method
     * @param {?=} locale
     * @return {?}
     */
    CalendarDatePipe.prototype.transform = /**
     * @param {?} date
     * @param {?} method
     * @param {?=} locale
     * @return {?}
     */
    function (date, method, locale) {
        if (locale === void 0) { locale = this.locale; }
        return this.dateFormatter[method]({ date: date, locale: locale });
    };
    CalendarDatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"], args: [{
                    name: 'calendarDate'
                },] },
    ];
    /** @nocollapse */
    CalendarDatePipe.ctorParameters = function () { return [
        { type: CalendarDateFormatter, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] },] },
    ]; };
    return CalendarDatePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var  /**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
CalendarEventTitleFormatter = /** @class */ (function () {
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     */
    /**
     * The month view event title.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.month = /**
     * The month view event title.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.title;
    };
    /**
     * The week view event title.
     */
    /**
     * The week view event title.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.week = /**
     * The week view event title.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.title;
    };
    /**
     * The day view event title.
     */
    /**
     * The day view event title.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.day = /**
     * The day view event title.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarEventTitlePipe = /** @class */ (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    /**
     * @param {?} title
     * @param {?} titleType
     * @param {?} event
     * @return {?}
     */
    CalendarEventTitlePipe.prototype.transform = /**
     * @param {?} title
     * @param {?} titleType
     * @param {?} event
     * @return {?}
     */
    function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event);
    };
    CalendarEventTitlePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"], args: [{
                    name: 'calendarEventTitle'
                },] },
    ];
    /** @nocollapse */
    CalendarEventTitlePipe.ctorParameters = function () { return [
        { type: CalendarEventTitleFormatter, },
    ]; };
    return CalendarEventTitlePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ eventName = typeof window !== 'undefined' && typeof window['Hammer'] !== 'undefined'
            ? 'tap'
            : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            _this.click.next(event);
        });
    };
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListener();
    };
    ClickDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlClick]'
                },] },
    ];
    /** @nocollapse */
    ClickDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], },
    ]; };
    ClickDirective.propDecorators = {
        "click": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['mwlClick',] },],
    };
    return ClickDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarUtils = /** @class */ (function () {
    function CalendarUtils() {
    }
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getMonthView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getMonthView"])(args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekViewHeader = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getWeekViewHeader"])(args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getWeekView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getWeekView"])(args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayView = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getDayView"])(args);
    };
    /**
     * @param {?} args
     * @return {?}
     */
    CalendarUtils.prototype.getDayViewHourGrid = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return Object(calendar_utils__WEBPACK_IMPORTED_MODULE_1__["getDayViewHourGrid"])(args);
    };
    CalendarUtils.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"] },
    ];
    return CalendarUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MOMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var CalendarMomentDateFormatter = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment) {
        this.moment = moment;
    }
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D');
    };
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D MMM');
    };
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('[Week] W [of] YYYY');
    };
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    };
    /** @nocollapse */
    CalendarMomentDateFormatter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MOMENT,] },] },
    ]; };
    return CalendarMomentDateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var  /**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
CalendarNativeDateFormatter = /** @class */ (function () {
    function CalendarNativeDateFormatter() {
    }
    /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = /**
     * The month view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = /**
     * The month view cell day number
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = /**
     * The month view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = /**
     * The week view header week day labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = /**
     * The week view sub header day and month labels
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = /**
     * The week view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        var /** @type {?} */ year = new Intl.DateTimeFormat(locale, {
            year: 'numeric'
        }).format(date);
        var /** @type {?} */ weekNumber = date_fns_get_iso_week_index__WEBPACK_IMPORTED_MODULE_12___default()(date);
        return "Week " + weekNumber + " of " + year;
    };
    /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = /**
     * The time formatting down the left hand side of the day view
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = /**
     * The day view title
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    return CalendarNativeDateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Import this module to if you're just using a singular view and want to save on bundle size. Example usage:
 *
 * ```typescript
 * import { CalendarCommonModule } from 'angular-calendar/modules/common';
 * import { CalendarMonthModule } from 'angular-calendar/modules/month';
 *
 * \@NgModule({
 *   imports: [
 *     CalendarCommonModule.forRoot(),
 *     CalendarMonthModule
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarCommonModule = /** @class */ (function () {
    function CalendarCommonModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CalendarCommonModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarCommonModule,
            providers: [
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_13__["DraggableHelper"],
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    CalendarCommonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        ClickDirective
                    ],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    exports: [
                        CalendarEventActionsComponent,
                        CalendarEventTitleComponent,
                        CalendarTooltipWindowComponent,
                        CalendarTooltipDirective,
                        CalendarPreviousViewDirective,
                        CalendarNextViewDirective,
                        CalendarTodayDirective,
                        CalendarDatePipe,
                        CalendarEventTitlePipe,
                        ClickDirective
                    ],
                    entryComponents: [CalendarTooltipWindowComponent]
                },] },
    ];
    return CalendarCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * @hidden
         */
        this.trackByIndex = trackByIndex;
        /**
         * @hidden
         */
        this.trackByDate = function (index, day) { return day.date.toISOString(); };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} isHighlighted
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = /**
     * @hidden
     * @param {?} event
     * @param {?} isHighlighted
     * @return {?}
     */
    function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} day
     * @param {?} event
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.eventDropped = /**
     * @hidden
     * @param {?} day
     * @param {?} event
     * @return {?}
     */
    function (day, event) {
        var /** @type {?} */ year = date_fns_get_year_index__WEBPACK_IMPORTED_MODULE_21___default()(day.date);
        var /** @type {?} */ month = date_fns_get_month_index__WEBPACK_IMPORTED_MODULE_20___default()(day.date);
        var /** @type {?} */ date = date_fns_get_date_index__WEBPACK_IMPORTED_MODULE_19___default()(day.date);
        var /** @type {?} */ newStart = date_fns_set_date_index__WEBPACK_IMPORTED_MODULE_16___default()(date_fns_set_month_index__WEBPACK_IMPORTED_MODULE_17___default()(date_fns_set_year_index__WEBPACK_IMPORTED_MODULE_18___default()(event.start, year), month), date);
        var /** @type {?} */ newEnd;
        if (event.end) {
            var /** @type {?} */ secondsDiff = date_fns_difference_in_seconds_index__WEBPACK_IMPORTED_MODULE_22___default()(newStart, event.start);
            newEnd = date_fns_add_seconds_index__WEBPACK_IMPORTED_MODULE_23___default()(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event: event, newStart: newStart, newEnd: newEnd, day: day });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} clickEvent
     * @param {?} day
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.handleDayClick = /**
     * @hidden
     * @param {?} clickEvent
     * @param {?} day
     * @return {?}
     */
    function (clickEvent, day) {
        // when using hammerjs, stopPropagation doesn't work. See https://github.com/mattlewis92/angular-calendar/issues/318
        if (!clickEvent.target.classList.contains('cal-event')) {
            this.dayClicked.emit({ day: day });
        }
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshHeader = /**
     * @return {?}
     */
    function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshBody = /**
     * @return {?}
     */
    function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) {
                return date_fns_is_same_day_index__WEBPACK_IMPORTED_MODULE_15___default()(day.date, _this.viewDate);
            });
            var /** @type {?} */ index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.refreshAll = /**
     * @return {?}
     */
    function () {
        this.columnHeaders = null;
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    /**
     * @return {?}
     */
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = /**
     * @return {?}
     */
    function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    };
    CalendarMonthViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-month-view',
                    template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets; trackByIndex\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of (view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)); trackBy:trackByDate\"\n              [class.cal-drag-over]=\"day.dragOver\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (click)=\"handleDayClick($event, day)\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              (dragEnter)=\"day.dragOver = true\"\n              (dragLeave)=\"day.dragOver = false\"\n              (drop)=\"day.dragOver = false; eventDropped(day, $event.dropData.event)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarMonthViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], },
        { type: CalendarUtils, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] },] },
    ]; };
    CalendarMonthViewComponent.propDecorators = {
        "viewDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "events": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "excludeDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "activeDayIsOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "refresh": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipPlacement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipAppendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "weekStartsOn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "headerTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "cellTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "openDayEventsTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventTitleTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "weekendDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "beforeViewRender": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "dayClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "eventClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "eventTimesChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return CalendarMonthViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarMonthViewHeaderComponent = /** @class */ (function () {
    function CalendarMonthViewHeaderComponent() {
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    CalendarMonthViewHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-month-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\">\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale}\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarMonthViewHeaderComponent.propDecorators = {
        "days": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
    };
    return CalendarMonthViewHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarMonthCellComponent = /** @class */ (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.unhighlightDay = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
    }
    CalendarMonthCellComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-month-cell',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events; trackBy:trackByEventId\"\n          [style.backgroundColor]=\"event.color?.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          mwlDraggable\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"eventClicked.emit({ event: event })\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  ",
                    host: {
                        class: 'cal-cell cal-day-cell',
                        '[class.cal-past]': 'day.isPast',
                        '[class.cal-today]': 'day.isToday',
                        '[class.cal-future]': 'day.isFuture',
                        '[class.cal-weekend]': 'day.isWeekend',
                        '[class.cal-in-month]': 'day.inMonth',
                        '[class.cal-out-month]': '!day.inMonth',
                        '[class.cal-has-events]': 'day.events.length > 0',
                        '[class.cal-open]': 'day === openDay',
                        '[style.backgroundColor]': 'day.backgroundColor'
                    }
                },] },
    ];
    /** @nocollapse */
    CalendarMonthCellComponent.propDecorators = {
        "day": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "openDay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipPlacement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipAppendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "highlightDay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "unhighlightDay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "eventClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return CalendarMonthCellComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarOpenDayEventsComponent = /** @class */ (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.trackByEventId = trackByEventId;
    }
    CalendarOpenDayEventsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-open-day-events',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        *ngFor=\"let event of events; trackBy:trackByEventId\"\n        [ngClass]=\"event?.cssClass\"\n        mwlDraggable\n        [dropData]=\"{event: event}\"\n        [dragAxis]=\"{x: event.draggable, y: event.draggable}\">\n        <span\n          class=\"cal-event\"\n          [style.backgroundColor]=\"event.color?.primary\">\n        </span>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"month\"\n          (mwlClick)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        &ngsp;\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </ng-template>\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <ng-template\n        [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n        [ngTemplateOutletContext]=\"{\n          events: events,\n          eventClicked: eventClicked\n        }\">\n      </ng-template>\n    </div>\n  ",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_24__["trigger"])('collapse', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_24__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_24__["style"])({ height: 0, overflow: 'hidden' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_24__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_24__["style"])({ height: '*' }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_24__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_24__["style"])({ height: '*', overflow: 'hidden' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_24__["animate"])('150ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_24__["style"])({ height: 0 }))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    CalendarOpenDayEventsComponent.propDecorators = {
        "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "events": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventTitleTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return CalendarOpenDayEventsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarMonthModule = /** @class */ (function () {
    function CalendarMonthModule() {
    }
    CalendarMonthModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_13__["DragAndDropModule"], CalendarCommonModule],
                    declarations: [
                        CalendarMonthViewComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarMonthViewHeaderComponent
                    ],
                    exports: [
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_13__["DragAndDropModule"],
                        CalendarMonthViewComponent,
                        CalendarMonthCellComponent,
                        CalendarOpenDayEventsComponent,
                        CalendarMonthViewHeaderComponent
                    ]
                },] },
    ];
    return CalendarMonthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarDragHelper.prototype.validateDrag = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var x = _a.x, y = _a.y;
        var /** @type {?} */ newRect = Object.assign({}, this.startPosition, {
            left: this.startPosition.left + x,
            right: this.startPosition.right + x,
            top: this.startPosition.top + y,
            bottom: this.startPosition.bottom + y
        });
        return isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
    };
    return CalendarDragHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarResizeHelper = /** @class */ (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarResizeHelper.prototype.validateResize = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth && rectangle.width < this.minWidth) {
            return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var CalendarWeekViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'bottom';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        /**
         * @hidden
         */
        this.trackByIndex = trackByIndex;
        /**
         * @hidden
         */
        this.trackByEventId = function (index, weekEvent) {
            return weekEvent.event.id ? weekEvent.event.id : weekEvent;
        };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.events || changes.viewDate || changes.excludeDays) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} weekViewContainer
     * @param {?} weekEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.resizeStarted = /**
     * @hidden
     * @param {?} weekViewContainer
     * @param {?} weekEvent
     * @param {?} resizeEvent
     * @return {?}
     */
    function (weekViewContainer, weekEvent, resizeEvent) {
        this.currentResizes.set(weekEvent, {
            originalOffset: weekEvent.offset,
            originalSpan: weekEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        this.dayColumnWidth = this.getDayColumnWidth(weekViewContainer);
        var /** @type {?} */ resizeHelper = new CalendarResizeHelper(weekViewContainer, this.dayColumnWidth);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} resizeEvent
     * @param {?} dayWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.resizing = /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} resizeEvent
     * @param {?} dayWidth
     * @return {?}
     */
    function (weekEvent, resizeEvent, dayWidth) {
        var /** @type {?} */ currentResize = this.currentResizes.get(weekEvent);
        if (resizeEvent.edges.left) {
            var /** @type {?} */ diff = Math.round(+resizeEvent.edges.left / dayWidth);
            weekEvent.offset = currentResize.originalOffset + diff;
            weekEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var /** @type {?} */ diff = Math.round(+resizeEvent.edges.right / dayWidth);
            weekEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} weekEvent
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.resizeEnded = /**
     * @hidden
     * @param {?} weekEvent
     * @return {?}
     */
    function (weekEvent) {
        var /** @type {?} */ currentResize = this.currentResizes.get(weekEvent);
        var /** @type {?} */ daysDiff;
        if (currentResize.edge === 'left') {
            daysDiff = weekEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = weekEvent.span - currentResize.originalSpan;
        }
        weekEvent.offset = currentResize.originalOffset;
        weekEvent.span = currentResize.originalSpan;
        var /** @type {?} */ newStart = weekEvent.event.start;
        var /** @type {?} */ newEnd = weekEvent.event.end;
        if (currentResize.edge === 'left') {
            newStart = date_fns_add_days_index__WEBPACK_IMPORTED_MODULE_8___default()(newStart, daysDiff);
        }
        else if (newEnd) {
            newEnd = date_fns_add_days_index__WEBPACK_IMPORTED_MODULE_8___default()(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
        this.currentResizes.delete(weekEvent);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} draggedByPx
     * @param {?} dayWidth
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.eventDragged = /**
     * @hidden
     * @param {?} weekEvent
     * @param {?} draggedByPx
     * @param {?} dayWidth
     * @return {?}
     */
    function (weekEvent, draggedByPx, dayWidth) {
        var /** @type {?} */ daysDragged = draggedByPx / dayWidth;
        var /** @type {?} */ newStart = date_fns_add_days_index__WEBPACK_IMPORTED_MODULE_8___default()(weekEvent.event.start, daysDragged);
        var /** @type {?} */ newEnd;
        if (weekEvent.event.end) {
            newEnd = date_fns_add_days_index__WEBPACK_IMPORTED_MODULE_8___default()(weekEvent.event.end, daysDragged);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} eventRowContainer
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = /**
     * @hidden
     * @param {?} eventRowContainer
     * @return {?}
     */
    function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} weekViewContainer
     * @param {?} event
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.dragStart = /**
     * @hidden
     * @param {?} weekViewContainer
     * @param {?} event
     * @return {?}
     */
    function (weekViewContainer, event) {
        var _this = this;
        this.dayColumnWidth = this.getDayColumnWidth(weekViewContainer);
        var /** @type {?} */ dragHelper = new CalendarDragHelper(weekViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshHeader = /**
     * @return {?}
     */
    function () {
        this.days = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshBody = /**
     * @return {?}
     */
    function () {
        this.view = this.utils.getWeekView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.refreshAll = /**
     * @return {?}
     */
    function () {
        this.refreshHeader();
        this.refreshBody();
    };
    /**
     * @return {?}
     */
    CalendarWeekViewComponent.prototype.emitBeforeViewRender = /**
     * @return {?}
     */
    function () {
        if (this.days && this.view) {
            this.beforeViewRender.emit({
                header: this.days,
                period: this.view.period
            });
        }
    };
    CalendarWeekViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-week-view',
                    template: "\n    <div class=\"cal-week-view\" #weekViewContainer>\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventTimesChanged.emit($event)\">\n      </mwl-calendar-week-view-header>\n      <div *ngFor=\"let eventRow of view.eventRows; trackBy:trackByIndex\" #eventRowContainer class=\"cal-events-row\">\n        <div\n          *ngFor=\"let weekEvent of eventRow.row; trackBy:trackByEventId\"\n          #event\n          class=\"cal-event-container\"\n          [class.cal-draggable]=\"weekEvent.event.draggable\"\n          [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n          [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n          [ngClass]=\"weekEvent.event?.cssClass\"\n          [style.width]=\"((100 / days.length) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / days.length) * weekEvent.offset) + '%'\"\n          mwlResizable\n          [resizeEdges]=\"{left: weekEvent.event?.resizable?.beforeStart, right: weekEvent.event?.resizable?.afterEnd}\"\n          [resizeSnapGrid]=\"{left: dayColumnWidth, right: dayColumnWidth}\"\n          [validateResize]=\"validateResize\"\n          (resizeStart)=\"resizeStarted(weekViewContainer, weekEvent, $event)\"\n          (resizing)=\"resizing(weekEvent, $event, dayColumnWidth)\"\n          (resizeEnd)=\"resizeEnded(weekEvent)\"\n          mwlDraggable\n          [dragAxis]=\"{x: weekEvent.event.draggable && currentResizes.size === 0, y: false}\"\n          [dragSnapGrid]=\"{x: dayColumnWidth}\"\n          [validateDrag]=\"validateDrag\"\n          (dragPointerDown)=\"dragStart(weekViewContainer, event)\"\n          (dragEnd)=\"eventDragged(weekEvent, $event.x, dayColumnWidth)\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            [tooltipAppendToBody]=\"tooltipAppendToBody\"\n            [customTemplate]=\"eventTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], },
        { type: CalendarUtils, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] },] },
    ]; };
    CalendarWeekViewComponent.propDecorators = {
        "viewDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "events": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "excludeDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "refresh": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipPlacement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipAppendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "weekStartsOn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "headerTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventTitleTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "precision": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "weekendDays": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dayHeaderClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "eventClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "eventTimesChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "beforeViewRender": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return CalendarWeekViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.eventDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    CalendarWeekViewHeaderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-header',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\">\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy:trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [class.cal-drag-over]=\"day.dragOver\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({day: day})\"\n          mwlDroppable\n          (dragEnter)=\"day.dragOver = true\"\n          (dragLeave)=\"day.dragOver = false\"\n          (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewHeaderComponent.propDecorators = {
        "days": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dayHeaderClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "eventDropped": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return CalendarWeekViewHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarWeekViewEventComponent = /** @class */ (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    CalendarWeekViewEventComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-week-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"weekEvent.event.color?.secondary\"\n        [style.borderColor]=\"weekEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"weekEvent.event\"></mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarWeekViewEventComponent.propDecorators = {
        "weekEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipPlacement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipAppendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventTitleTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return CalendarWeekViewEventComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarWeekModule = /** @class */ (function () {
    function CalendarWeekModule() {
    }
    CalendarWeekModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_13__["DragAndDropModule"],
                        CalendarCommonModule
                    ],
                    declarations: [
                        CalendarWeekViewComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent
                    ],
                    exports: [
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_13__["DragAndDropModule"],
                        CalendarWeekViewComponent,
                        CalendarWeekViewHeaderComponent,
                        CalendarWeekViewEventComponent
                    ]
                },] },
    ];
    return CalendarWeekModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @hidden
 */
var /** @type {?} */ MINUTES_IN_HOUR = 60;
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var CalendarDayViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The height in pixels of each hour segment
         */
        this.hourSegmentHeight = 30;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The grid size to snap resizing and dragging of events to
         */
        this.eventSnapSize = this.hourSegmentHeight;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to an hour grid segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        /**
         * @hidden
         */
        this.trackByEventId = trackByEventId;
        /**
         * @hidden
         */
        this.trackByDayEvent = function (index, dayEvent) {
            return dayEvent.event.id ? dayEvent.event.id : dayEvent.event;
        };
        /**
         * @hidden
         */
        this.trackByHour = function (index, hour) {
            return hour.segments[0].date.toISOString();
        };
        /**
         * @hidden
         */
        this.trackByHourSegment = function (index, segment) {
            return segment.date.toISOString();
        };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    CalendarDayViewComponent.prototype.ngOnChanges = /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.hourSegments) {
            this.refreshHourGrid();
        }
        if (changes.events) {
            validateEvents$1(this.events);
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    /**
     * @param {?} dropEvent
     * @param {?} segment
     * @return {?}
     */
    CalendarDayViewComponent.prototype.eventDropped = /**
     * @param {?} dropEvent
     * @param {?} segment
     * @return {?}
     */
    function (dropEvent, segment) {
        if (dropEvent.dropData && dropEvent.dropData.event) {
            this.eventTimesChanged.emit({
                event: dropEvent.dropData.event,
                newStart: segment.date
            });
        }
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @param {?} dayViewContainer
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeStarted = /**
     * @param {?} event
     * @param {?} resizeEvent
     * @param {?} dayViewContainer
     * @return {?}
     */
    function (event, resizeEvent, dayViewContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        var /** @type {?} */ resizeHelper = new CalendarResizeHelper(dayViewContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @param {?} event
     * @param {?} resizeEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizing = /**
     * @param {?} event
     * @param {?} resizeEvent
     * @return {?}
     */
    function (event, resizeEvent) {
        var /** @type {?} */ currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    /**
     * @param {?} dayEvent
     * @return {?}
     */
    CalendarDayViewComponent.prototype.resizeEnded = /**
     * @param {?} dayEvent
     * @return {?}
     */
    function (dayEvent) {
        var /** @type {?} */ currentResize = this.currentResizes.get(dayEvent);
        var /** @type {?} */ pixelsMoved;
        if (currentResize.edge === 'top') {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        var /** @type {?} */ pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * this.hourSegmentHeight);
        var /** @type {?} */ minutesMoved = pixelsMoved * pixelAmountInMinutes;
        var /** @type {?} */ newStart = dayEvent.event.start;
        var /** @type {?} */ newEnd = dayEvent.event.end;
        if (currentResize.edge === 'top') {
            newStart = date_fns_add_minutes_index__WEBPACK_IMPORTED_MODULE_26___default()(newStart, minutesMoved);
        }
        else if (newEnd) {
            newEnd = date_fns_add_minutes_index__WEBPACK_IMPORTED_MODULE_26___default()(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
        this.currentResizes.delete(dayEvent);
    };
    /**
     * @param {?} event
     * @param {?} dayViewContainer
     * @return {?}
     */
    CalendarDayViewComponent.prototype.dragStart = /**
     * @param {?} event
     * @param {?} dayViewContainer
     * @return {?}
     */
    function (event, dayViewContainer) {
        var _this = this;
        var /** @type {?} */ dragHelper = new CalendarDragHelper(dayViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    /**
     * @param {?} dayEvent
     * @param {?} draggedInPixels
     * @return {?}
     */
    CalendarDayViewComponent.prototype.eventDragged = /**
     * @param {?} dayEvent
     * @param {?} draggedInPixels
     * @return {?}
     */
    function (dayEvent, draggedInPixels) {
        var /** @type {?} */ pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * this.hourSegmentHeight);
        var /** @type {?} */ minutesMoved = draggedInPixels * pixelAmountInMinutes;
        var /** @type {?} */ newStart = date_fns_add_minutes_index__WEBPACK_IMPORTED_MODULE_26___default()(dayEvent.event.start, minutesMoved);
        var /** @type {?} */ newEnd;
        if (dayEvent.event.end) {
            newEnd = date_fns_add_minutes_index__WEBPACK_IMPORTED_MODULE_26___default()(dayEvent.event.end, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshHourGrid = /**
     * @return {?}
     */
    function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshView = /**
     * @return {?}
     */
    function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: this.hourSegmentHeight
        });
        this.emitBeforeViewRender();
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.refreshAll = /**
     * @return {?}
     */
    function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    /**
     * @return {?}
     */
    CalendarDayViewComponent.prototype.emitBeforeViewRender = /**
     * @return {?}
     */
    function () {
        if (this.hours && this.view) {
            this.beforeViewRender.emit({
                body: {
                    hourGrid: this.hours
                },
                period: this.view.period
            });
        }
    };
    CalendarDayViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-day-view',
                    template: "\n    <div class=\"cal-day-view\" #dayViewContainer>\n      <mwl-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents; trackBy:trackByEventId\"\n        [event]=\"event\"\n        [customTemplate]=\"allDayEventTemplate\"\n        [eventTitleTemplate]=\"eventTitleTemplate\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </mwl-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events; trackBy:trackByDayEvent\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeEdges]=\"{top: dayEvent.event?.resizable?.beforeStart, bottom: dayEvent.event?.resizable?.afterEnd}\"\n            [resizeSnapGrid]=\"{top: eventSnapSize, bottom: eventSnapSize}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayViewContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            [dragAxis]=\"{x: false, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"{y: eventSnapSize}\"\n            [validateDrag]=\"validateDrag\"\n            (dragPointerDown)=\"dragStart(event, dayViewContainer)\"\n            (dragEnd)=\"eventDragged(dayEvent, $event.y)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours; trackBy:trackByHour\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments; trackBy:trackByHourSegment\"\n            [style.height.px]=\"hourSegmentHeight\"\n            [segment]=\"segment\"\n            [segmentHeight]=\"hourSegmentHeight\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (click)=\"hourSegmentClicked.emit({date: segment.date})\"\n            [class.cal-drag-over]=\"segment.dragOver\"\n            mwlDroppable\n            (dragEnter)=\"segment.dragOver = true\"\n            (dragLeave)=\"segment.dragOver = false\"\n            (drop)=\"segment.dragOver = false; eventDropped($event, segment)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], },
        { type: CalendarUtils, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],] },] },
    ]; };
    CalendarDayViewComponent.propDecorators = {
        "viewDate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "events": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "hourSegments": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "hourSegmentHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dayStartHour": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dayStartMinute": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dayEndHour": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dayEndMinute": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "refresh": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventSnapSize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipPlacement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipAppendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "hourSegmentTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "allDayEventTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventTitleTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "hourSegmentClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "eventTimesChanged": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "beforeViewRender": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return CalendarDayViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarAllDayEventComponent = /** @class */ (function () {
    function CalendarAllDayEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    CalendarAllDayEventComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-all-day-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        class=\"cal-all-day-event\"\n        [style.backgroundColor]=\"event.color?.secondary\"\n        [style.borderColor]=\"event.color?.primary\">\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        eventClicked: eventClicked\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarAllDayEventComponent.propDecorators = {
        "event": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventTitleTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return CalendarAllDayEventComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDayViewHourSegmentComponent = /** @class */ (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    CalendarDayViewHourSegmentComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-hour-segment',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\">\n      <div\n        class=\"cal-hour-segment\"\n        [style.height.px]=\"segmentHeight\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewHourSegmentComponent.propDecorators = {
        "segment": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "segmentHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "locale": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
    };
    return CalendarDayViewHourSegmentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDayViewEventComponent = /** @class */ (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    CalendarDayViewEventComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    selector: 'mwl-calendar-day-view-event',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color?.secondary\"\n        [style.borderColor]=\"dayEvent.event.color?.primary\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n        &ngsp;\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarDayViewEventComponent.propDecorators = {
        "dayEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipPlacement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipAppendToBody": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "customTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventTitleTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "tooltipTemplate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "eventClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return CalendarDayViewEventComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CalendarDayModule = /** @class */ (function () {
    function CalendarDayModule() {
    }
    CalendarDayModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_13__["DragAndDropModule"],
                        CalendarCommonModule
                    ],
                    declarations: [
                        CalendarDayViewComponent,
                        CalendarAllDayEventComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent
                    ],
                    exports: [
                        angular_resizable_element__WEBPACK_IMPORTED_MODULE_25__["ResizableModule"],
                        angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_13__["DragAndDropModule"],
                        CalendarDayViewComponent,
                        CalendarAllDayEventComponent,
                        CalendarDayViewHourSegmentComponent,
                        CalendarDayViewEventComponent
                    ]
                },] },
    ];
    return CalendarDayModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * \@NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    CalendarModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule,
            providers: [
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_13__["DraggableHelper"],
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils
            ]
        };
    };
    CalendarModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [
                        CalendarCommonModule,
                        CalendarMonthModule,
                        CalendarWeekModule,
                        CalendarDayModule
                    ],
                    exports: [
                        CalendarCommonModule,
                        CalendarMonthModule,
                        CalendarWeekModule,
                        CalendarDayModule
                    ]
                },] },
    ];
    return CalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jYWxlbmRhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi91dGlsLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWV2ZW50LWFjdGlvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWV2ZW50LXRpdGxlLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci10b29sdGlwLmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1wcmV2aW91cy12aWV3LmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1uZXh0LXZpZXcuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLXRvZGF5LmRpcmVjdGl2ZS50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1hbmd1bGFyLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWRhdGUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1ldmVudC10aXRsZS1mb3JtYXR0ZXIucHJvdmlkZXIudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItZXZlbnQtdGl0bGUucGlwZS50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jbGljay5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItdXRpbHMucHJvdmlkZXIudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItbW9tZW50LWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY29tbW9uL2NhbGVuZGFyLW5hdGl2ZS1kYXRlLWZvcm1hdHRlci5wcm92aWRlci50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvbW9udGgvY2FsZW5kYXItbW9udGgtdmlldy5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9tb250aC9jYWxlbmRhci1tb250aC12aWV3LWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9tb250aC9jYWxlbmRhci1tb250aC1jZWxsLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL21vbnRoL2NhbGVuZGFyLW9wZW4tZGF5LWV2ZW50cy5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9tb250aC9jYWxlbmRhci1tb250aC5tb2R1bGUudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItZHJhZy1oZWxwZXIucHJvdmlkZXIudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy9jb21tb24vY2FsZW5kYXItcmVzaXplLWhlbHBlci5wcm92aWRlci50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL3dlZWsvY2FsZW5kYXItd2Vlay12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL3dlZWsvY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy93ZWVrL2NhbGVuZGFyLXdlZWstdmlldy1ldmVudC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItY2FsZW5kYXIvbW9kdWxlcy93ZWVrL2NhbGVuZGFyLXdlZWsubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvZGF5L2NhbGVuZGFyLWRheS12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2RheS9jYWxlbmRhci1hbGwtZGF5LWV2ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2RheS9jYWxlbmRhci1kYXktdmlldy1ob3VyLXNlZ21lbnQuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvZGF5L2NhbGVuZGFyLWRheS12aWV3LWV2ZW50LmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2RheS9jYWxlbmRhci1kYXkubW9kdWxlLnRzIiwibmc6Ly9hbmd1bGFyLWNhbGVuZGFyL21vZHVsZXMvY2FsZW5kYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENhbGVuZGFyRXZlbnQsXG4gIHZhbGlkYXRlRXZlbnRzIGFzIHZhbGlkYXRlRXZlbnRzV2l0aG91dExvZyxcbiAgV2Vla0RheVxufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUV2ZW50cyA9IChldmVudHM6IENhbGVuZGFyRXZlbnRbXSkgPT4ge1xuICBjb25zdCB3YXJuID0gKC4uLmFyZ3MpID0+IGNvbnNvbGUud2FybignYW5ndWxhci1jYWxlbmRhcicsIC4uLmFyZ3MpO1xuICByZXR1cm4gdmFsaWRhdGVFdmVudHNXaXRob3V0TG9nKGV2ZW50cywgd2Fybik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbnNpZGUob3V0ZXI6IENsaWVudFJlY3QsIGlubmVyOiBDbGllbnRSZWN0KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgb3V0ZXIubGVmdCA8PSBpbm5lci5sZWZ0ICYmXG4gICAgaW5uZXIubGVmdCA8PSBvdXRlci5yaWdodCAmJlxuICAgIG91dGVyLmxlZnQgPD0gaW5uZXIucmlnaHQgJiZcbiAgICBpbm5lci5yaWdodCA8PSBvdXRlci5yaWdodCAmJlxuICAgIG91dGVyLnRvcCA8PSBpbm5lci50b3AgJiZcbiAgICBpbm5lci50b3AgPD0gb3V0ZXIuYm90dG9tICYmXG4gICAgb3V0ZXIudG9wIDw9IGlubmVyLmJvdHRvbSAmJlxuICAgIGlubmVyLmJvdHRvbSA8PSBvdXRlci5ib3R0b21cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IHRyYWNrQnlFdmVudElkID0gKGluZGV4OiBudW1iZXIsIGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PlxuICBldmVudC5pZCA/IGV2ZW50LmlkIDogZXZlbnQ7XG5cbmV4cG9ydCBjb25zdCB0cmFja0J5V2Vla0RheUhlYWRlckRhdGUgPSAoaW5kZXg6IG51bWJlciwgZGF5OiBXZWVrRGF5KSA9PlxuICBkYXkuZGF0ZS50b0lTT1N0cmluZygpO1xuXG5leHBvcnQgY29uc3QgdHJhY2tCeUluZGV4ID0gKGluZGV4OiBudW1iZXIpID0+IGluZGV4O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IHRyYWNrQnlJbmRleCB9IGZyb20gJy4vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiAqbmdJZj1cImV2ZW50LmFjdGlvbnNcIiBjbGFzcz1cImNhbC1ldmVudC1hY3Rpb25zXCI+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImNhbC1ldmVudC1hY3Rpb25cIlxuICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgKm5nRm9yPVwibGV0IGFjdGlvbiBvZiBldmVudC5hY3Rpb25zOyB0cmFja0J5OnRyYWNrQnlJbmRleFwiXG4gICAgICAgIChtd2xDbGljayk9XCJhY3Rpb24ub25DbGljayh7ZXZlbnQ6IGV2ZW50fSlcIlxuICAgICAgICBbbmdDbGFzc109XCJhY3Rpb24uY3NzQ2xhc3NcIlxuICAgICAgICBbaW5uZXJIdG1sXT1cImFjdGlvbi5sYWJlbFwiPlxuICAgICAgPC9hPlxuICAgIDwvc3Bhbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckV2ZW50QWN0aW9uc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICB0cmFja0J5SW5kZXggPSB0cmFja0J5SW5kZXg7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1ldmVudD1cImV2ZW50XCJcbiAgICAgIGxldC12aWV3PVwidmlld1wiPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtdGl0bGVcIlxuICAgICAgICBocmVmPVwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgW2lubmVySFRNTF09XCJldmVudC50aXRsZSB8IGNhbGVuZGFyRXZlbnRUaXRsZTp2aWV3OmV2ZW50XCI+XG4gICAgICA8L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgIHZpZXc6IHZpZXdcbiAgICAgIH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRXZlbnRUaXRsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIHZpZXc6IHN0cmluZztcbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgQ29tcG9uZW50LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgRWxlbWVudFJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUG9zaXRpb25pbmcgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1jb250ZW50cz1cImNvbnRlbnRzXCJcbiAgICAgIGxldC1wbGFjZW1lbnQ9XCJwbGFjZW1lbnRcIlxuICAgICAgbGV0LWV2ZW50PVwiZXZlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtdG9vbHRpcFwiIFtuZ0NsYXNzXT1cIidjYWwtdG9vbHRpcC0nICsgcGxhY2VtZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtdG9vbHRpcC1hcnJvd1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLXRvb2x0aXAtaW5uZXJcIiBbaW5uZXJIdG1sXT1cImNvbnRlbnRzXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGNvbnRlbnRzOiBjb250ZW50cyxcbiAgICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY29udGVudHM6IHN0cmluZztcblxuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcblxuICBASW5wdXQoKSBldmVudDogQ2FsZW5kYXJFdmVudDtcblxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pjtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENhbGVuZGFyVG9vbHRpcF0nXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgnbXdsQ2FsZW5kYXJUb29sdGlwJykgY29udGVudHM6IHN0cmluZzsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1pbnB1dC1yZW5hbWVcblxuICBASW5wdXQoJ3Rvb2x0aXBQbGFjZW1lbnQnKSBwbGFjZW1lbnQ6IHN0cmluZyA9ICd0b3AnOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWlucHV0LXJlbmFtZVxuXG4gIEBJbnB1dCgndG9vbHRpcFRlbXBsYXRlJykgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8taW5wdXQtcmVuYW1lXG5cbiAgQElucHV0KCd0b29sdGlwRXZlbnQnKSBldmVudDogQ2FsZW5kYXJFdmVudDsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1pbnB1dC1yZW5hbWVcblxuICBASW5wdXQoJ3Rvb2x0aXBBcHBlbmRUb0JvZHknKSBhcHBlbmRUb0JvZHk6IGJvb2xlYW47IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8taW5wdXQtcmVuYW1lXG5cbiAgcHJpdmF0ZSB0b29sdGlwRmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQ+O1xuICBwcml2YXRlIHRvb2x0aXBSZWY6IENvbXBvbmVudFJlZjxDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQ+O1xuICBwcml2YXRlIHBvc2l0aW9uaW5nOiBQb3NpdGlvbmluZyA9IG5ldyBQb3NpdGlvbmluZygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQgLy90c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICkge1xuICAgIHRoaXMudG9vbHRpcEZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoXG4gICAgICBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnRcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZU92ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZU91dCgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvdygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudG9vbHRpcFJlZiAmJiB0aGlzLmNvbnRlbnRzKSB7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KFxuICAgICAgICB0aGlzLnRvb2x0aXBGYWN0b3J5LFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLmluamVjdG9yLFxuICAgICAgICBbXVxuICAgICAgKTtcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jb250ZW50cyA9IHRoaXMuY29udGVudHM7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UucGxhY2VtZW50ID0gdGhpcy5wbGFjZW1lbnQ7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuY3VzdG9tVGVtcGxhdGUgPSB0aGlzLmN1c3RvbVRlbXBsYXRlO1xuICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmV2ZW50ID0gdGhpcy5ldmVudDtcbiAgICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b29sdGlwUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblRvb2x0aXAoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwUmVmKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYucmVtb3ZlKFxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuaW5kZXhPZih0aGlzLnRvb2x0aXBSZWYuaG9zdFZpZXcpXG4gICAgICApO1xuICAgICAgdGhpcy50b29sdGlwUmVmID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBvc2l0aW9uVG9vbHRpcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwUmVmKSB7XG4gICAgICBjb25zdCB0YXJnZXRQb3NpdGlvbjogQ2xpZW50UmVjdCA9IHRoaXMucG9zaXRpb25pbmcucG9zaXRpb25FbGVtZW50cyhcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMudG9vbHRpcFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLFxuICAgICAgICB0aGlzLnBsYWNlbWVudCxcbiAgICAgICAgdGhpcy5hcHBlbmRUb0JvZHlcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IGVsbTogSFRNTEVsZW1lbnQgPSB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudFxuICAgICAgICAuY2hpbGRyZW5bMF07XG5cbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxtLCAndG9wJywgYCR7dGFyZ2V0UG9zaXRpb24udG9wfXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsbSwgJ2xlZnQnLCBgJHt0YXJnZXRQb3NpdGlvbi5sZWZ0fXB4YCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHN1YkRheXMgZnJvbSAnZGF0ZS1mbnMvc3ViX2RheXMvaW5kZXgnO1xuaW1wb3J0IHN1YldlZWtzIGZyb20gJ2RhdGUtZm5zL3N1Yl93ZWVrcy9pbmRleCc7XG5pbXBvcnQgc3ViTW9udGhzIGZyb20gJ2RhdGUtZm5zL3N1Yl9tb250aHMvaW5kZXgnO1xuXG4vKipcbiAqIENoYW5nZSB0aGUgdmlldyBkYXRlIHRvIHRoZSBwcmV2aW91cyB2aWV3LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8YnV0dG9uXG4gKiAgbXdsQ2FsZW5kYXJQcmV2aW91c1ZpZXdcbiAqICBbKHZpZXdEYXRlKV09XCJ2aWV3RGF0ZVwiXG4gKiAgW3ZpZXddPVwidmlld1wiPlxuICogIFByZXZpb3VzXG4gKiA8L2J1dHRvbj5cbiAqIGBgYFxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ2FsZW5kYXJQcmV2aW91c1ZpZXddJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclByZXZpb3VzVmlld0RpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKSB2aWV3OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXcgZGF0ZVxuICAgKi9cbiAgQElucHV0KCkgdmlld0RhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB2aWV3IGRhdGUgaXMgY2hhbmdlZFxuICAgKi9cbiAgQE91dHB1dCgpIHZpZXdEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBjb25zdCBzdWJGbjogYW55ID0ge1xuICAgICAgZGF5OiBzdWJEYXlzLFxuICAgICAgd2Vlazogc3ViV2Vla3MsXG4gICAgICBtb250aDogc3ViTW9udGhzXG4gICAgfVt0aGlzLnZpZXddO1xuXG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KHN1YkZuKHRoaXMudmlld0RhdGUsIDEpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZF9kYXlzL2luZGV4JztcbmltcG9ydCBhZGRXZWVrcyBmcm9tICdkYXRlLWZucy9hZGRfd2Vla3MvaW5kZXgnO1xuaW1wb3J0IGFkZE1vbnRocyBmcm9tICdkYXRlLWZucy9hZGRfbW9udGhzL2luZGV4JztcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZpZXcgZGF0ZSB0byB0aGUgbmV4dCB2aWV3LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8YnV0dG9uXG4gKiAgbXdsQ2FsZW5kYXJOZXh0Vmlld1xuICogIFsodmlld0RhdGUpXT1cInZpZXdEYXRlXCJcbiAqICBbdmlld109XCJ2aWV3XCI+XG4gKiAgTmV4dFxuICogPC9idXR0b24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENhbGVuZGFyTmV4dFZpZXddJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck5leHRWaWV3RGlyZWN0aXZlIHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpIHZpZXc6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlldyBkYXRlXG4gICAqL1xuICBASW5wdXQoKSB2aWV3RGF0ZTogRGF0ZTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHZpZXcgZGF0ZSBpcyBjaGFuZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgdmlld0RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGFkZEZuOiBhbnkgPSB7XG4gICAgICBkYXk6IGFkZERheXMsXG4gICAgICB3ZWVrOiBhZGRXZWVrcyxcbiAgICAgIG1vbnRoOiBhZGRNb250aHNcbiAgICB9W3RoaXMudmlld107XG5cbiAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQoYWRkRm4odGhpcy52aWV3RGF0ZSwgMSkpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHN0YXJ0T2ZUb2RheSBmcm9tICdkYXRlLWZucy9zdGFydF9vZl90b2RheS9pbmRleCc7XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2aWV3IGRhdGUgdG8gdGhlIGN1cnJlbnQgZGF5LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8YnV0dG9uXG4gKiAgbXdsQ2FsZW5kYXJUb2RheVxuICogIFsodmlld0RhdGUpXT1cInZpZXdEYXRlXCI+XG4gKiAgVG9kYXlcbiAqIDwvYnV0dG9uPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xDYWxlbmRhclRvZGF5XSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJUb2RheURpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlldyBkYXRlIGlzIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKSB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KHN0YXJ0T2ZUb2RheSgpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2FsZW5kYXJEYXRlRm9ybWF0dGVySW50ZXJmYWNlLFxuICBEYXRlRm9ybWF0dGVyUGFyYW1zXG59IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCBnZXRJU09XZWVrIGZyb20gJ2RhdGUtZm5zL2dldF9pc29fd2Vlay9pbmRleCc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbi8qKlxuICogVGhpcyB3aWxsIHVzZSB0aGUgYW5ndWxhciBkYXRlIHBpcGUgdG8gZG8gYWxsIGRhdGUgZm9ybWF0dGluZy4gSXQgaXMgdGhlIGRlZmF1bHQgZGF0ZSBmb3JtYXR0ZXIgdXNlZCBieSB0aGUgY2FsZW5kYXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckFuZ3VsYXJEYXRlRm9ybWF0dGVyXG4gIGltcGxlbWVudHMgQ2FsZW5kYXJEYXRlRm9ybWF0dGVySW50ZXJmYWNlIHtcbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IGhlYWRlciB3ZWVrIGRheSBsYWJlbHNcbiAgICovXG4gIHB1YmxpYyBtb250aFZpZXdDb2x1bW5IZWFkZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBEYXRlUGlwZShsb2NhbGUpLnRyYW5zZm9ybShkYXRlLCAnRUVFRScsIG51bGwsIGxvY2FsZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgY2VsbCBkYXkgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3RGF5TnVtYmVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgRGF0ZVBpcGUobG9jYWxlKS50cmFuc2Zvcm0oZGF0ZSwgJ2QnLCBudWxsLCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IHRpdGxlXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBEYXRlUGlwZShsb2NhbGUpLnRyYW5zZm9ybShkYXRlLCAnTU1NTSB5JywgbnVsbCwgbG9jYWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IGhlYWRlciB3ZWVrIGRheSBsYWJlbHNcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld0NvbHVtbkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IERhdGVQaXBlKGxvY2FsZSkudHJhbnNmb3JtKGRhdGUsICdFRUVFJywgbnVsbCwgbG9jYWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IHN1YiBoZWFkZXIgZGF5IGFuZCBtb250aCBsYWJlbHNcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld0NvbHVtblN1YkhlYWRlcih7XG4gICAgZGF0ZSxcbiAgICBsb2NhbGVcbiAgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBEYXRlUGlwZShsb2NhbGUpLnRyYW5zZm9ybShkYXRlLCAnTU1NIGQnLCBudWxsLCBsb2NhbGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgdGl0bGVcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld1RpdGxlKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHllYXI6IHN0cmluZyA9IG5ldyBEYXRlUGlwZShsb2NhbGUpLnRyYW5zZm9ybShcbiAgICAgIGRhdGUsXG4gICAgICAneScsXG4gICAgICBudWxsLFxuICAgICAgbG9jYWxlXG4gICAgKTtcbiAgICBjb25zdCB3ZWVrTnVtYmVyOiBudW1iZXIgPSBnZXRJU09XZWVrKGRhdGUpO1xuICAgIHJldHVybiBgV2VlayAke3dlZWtOdW1iZXJ9IG9mICR7eWVhcn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0aW1lIGZvcm1hdHRpbmcgZG93biB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIGRheSB2aWV3XG4gICAqL1xuICBwdWJsaWMgZGF5Vmlld0hvdXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBEYXRlUGlwZShsb2NhbGUpLnRyYW5zZm9ybShkYXRlLCAnaCBhJywgbnVsbCwgbG9jYWxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHZpZXcgdGl0bGVcbiAgICovXG4gIHB1YmxpYyBkYXlWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBEYXRlUGlwZShsb2NhbGUpLnRyYW5zZm9ybShcbiAgICAgIGRhdGUsXG4gICAgICAnRUVFRSwgTU1NTSBkLCB5JyxcbiAgICAgIG51bGwsXG4gICAgICBsb2NhbGVcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDYWxlbmRhckFuZ3VsYXJEYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi9jYWxlbmRhci1hbmd1bGFyLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBhbGwgZm9ybWF0dGluZyBvZiBkYXRlcy4gVGhlcmUgYXJlIDMgaW1wbGVtZW50YXRpb25zIGF2YWlsYWJsZSwgdGhlIGBDYWxlbmRhckFuZ3VsYXJEYXRlRm9ybWF0dGVyYCAoZGVmYXVsdCkgd2hpY2ggdXNlcyB0aGUgYW5ndWxhciBkYXRlIHBpcGUgdG8gZm9ybWF0IGRhdGVzLCB0aGUgYENhbGVuZGFyTmF0aXZlRGF0ZUZvcm1hdHRlcmAgd2hpY2ggd2lsbCB1c2UgdGhlIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9JbnRsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SW50bDwvYT4gQVBJIHRvIGZvcm1hdCBkYXRlcywgb3IgdGhlcmUgaXMgdGhlIGBDYWxlbmRhck1vbWVudERhdGVGb3JtYXR0ZXJgIHdoaWNoIHVzZXMgPGEgaHJlZj1cImh0dHA6Ly9tb21lbnRqcy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+bW9tZW50PC9hPi5cbiAqXG4gKiBJZiB5b3Ugd2lzaCwgeW91IG1heSBvdmVycmlkZSBhbnkgb2YgdGhlIGRlZmF1bHRzIHZpYSBhbmd1bGFycyBESS4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLCBEYXRlRm9ybWF0dGVyUGFyYW1zIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG4gKiBpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4gKlxuICogY2xhc3MgQ3VzdG9tRGF0ZUZvcm1hdHRlciBleHRlbmRzIENhbGVuZGFyRGF0ZUZvcm1hdHRlciB7XG4gKlxuICogICBwdWJsaWMgbW9udGhWaWV3Q29sdW1uSGVhZGVyKHtkYXRlLCBsb2NhbGV9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAqICAgICByZXR1cm4gbmV3IERhdGVQaXBlKGxvY2FsZSkudHJhbnNmb3JtKGRhdGUsICdFRUUnLCBsb2NhbGUpOyAvLyB1c2Ugc2hvcnQgd2VlayBkYXlzXG4gKiAgIH1cbiAqXG4gKiB9XG4gKlxuICogLy8gaW4geW91ciBjb21wb25lbnQgdGhhdCB1c2VzIHRoZSBjYWxlbmRhclxuICogcHJvdmlkZXJzOiBbe1xuICogICBwcm92aWRlOiBDYWxlbmRhckRhdGVGb3JtYXR0ZXIsXG4gKiAgIHVzZUNsYXNzOiBDdXN0b21EYXRlRm9ybWF0dGVyXG4gKiB9XVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRhdGVGb3JtYXR0ZXIgZXh0ZW5kcyBDYWxlbmRhckFuZ3VsYXJEYXRlRm9ybWF0dGVyIHt9XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBMT0NBTEVfSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5cbi8qKlxuICogVGhpcyBwaXBlIGlzIHByaW1hcmlseSBmb3IgcmVuZGVyaW5nIHRoZSBjdXJyZW50IHZpZXcgdGl0bGUuIEV4YW1wbGUgdXNhZ2U6XG4gKiBgYGB0eXBlc2NyaXB0XG4gKiAvLyB3aGVyZSBgdmlld0RhdGVgIGlzIGEgYERhdGVgIGFuZCB2aWV3IGlzIGAnbW9udGgnIHwgJ3dlZWsnIHwgJ2RheSdgXG4gKiB7eyB2aWV3RGF0ZSB8IGNhbGVuZGFyRGF0ZToodmlldyArICdWaWV3VGl0bGUnKTonZW4nIH19XG4gKiBgYGBcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnY2FsZW5kYXJEYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGF0ZUZvcm1hdHRlcjogQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nXG4gICkge31cblxuICB0cmFuc2Zvcm0oZGF0ZTogRGF0ZSwgbWV0aG9kOiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nID0gdGhpcy5sb2NhbGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXJbbWV0aG9kXSh7IGRhdGUsIGxvY2FsZSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBkaXNwbGF5aW5nIGFsbCBldmVudCB0aXRsZXMgd2l0aGluIHRoZSBjYWxlbmRhci4gWW91IG1heSBvdmVycmlkZSBhbnkgb2YgaXRzIG1ldGhvZHMgdmlhIGFuZ3VsYXJzIERJIHRvIHN1aXQgeW91ciByZXF1aXJlbWVudHMuIEZvciBleGFtcGxlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGVuZGFyRXZlbnRUaXRsZUZvcm1hdHRlciwgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuICpcbiAqIGNsYXNzIEN1c3RvbUV2ZW50VGl0bGVGb3JtYXR0ZXIgZXh0ZW5kcyBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIge1xuICpcbiAqICAgbW9udGgoZXZlbnQ6IENhbGVuZGFyRXZlbnQpOiBzdHJpbmcge1xuICogICAgIHJldHVybiBgQ3VzdG9tIHByZWZpeDogJHtldmVudC50aXRsZX1gO1xuICogICB9XG4gKlxuICogfVxuICpcbiAqIC8vIGluIHlvdXIgY29tcG9uZW50XG4gKiBwcm92aWRlcnM6IFt7XG4gKiAgcHJvdmlkZTogQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyLFxuICogIHVzZUNsYXNzOiBDdXN0b21FdmVudFRpdGxlRm9ybWF0dGVyXG4gKiB9XVxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIge1xuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgZXZlbnQgdGl0bGUuXG4gICAqL1xuICBtb250aChldmVudDogQ2FsZW5kYXJFdmVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGV2ZW50LnRpdGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IGV2ZW50IHRvb2x0aXAuIFJldHVybiBhIGZhbHNleSB2YWx1ZSBmcm9tIHRoaXMgdG8gZGlzYWJsZSB0aGUgdG9vbHRpcC5cbiAgICovXG4gIG1vbnRoVG9vbHRpcChldmVudDogQ2FsZW5kYXJFdmVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGV2ZW50LnRpdGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgZXZlbnQgdGl0bGUuXG4gICAqL1xuICB3ZWVrKGV2ZW50OiBDYWxlbmRhckV2ZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXZlbnQudGl0bGU7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyBldmVudCB0b29sdGlwLiBSZXR1cm4gYSBmYWxzZXkgdmFsdWUgZnJvbSB0aGlzIHRvIGRpc2FibGUgdGhlIHRvb2x0aXAuXG4gICAqL1xuICB3ZWVrVG9vbHRpcChldmVudDogQ2FsZW5kYXJFdmVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGV2ZW50LnRpdGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgdmlldyBldmVudCB0aXRsZS5cbiAgICovXG4gIGRheShldmVudDogQ2FsZW5kYXJFdmVudCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGV2ZW50LnRpdGxlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgdmlldyBldmVudCB0b29sdGlwLiBSZXR1cm4gYSBmYWxzZXkgdmFsdWUgZnJvbSB0aGlzIHRvIGRpc2FibGUgdGhlIHRvb2x0aXAuXG4gICAqL1xuICBkYXlUb29sdGlwKGV2ZW50OiBDYWxlbmRhckV2ZW50KTogc3RyaW5nIHtcbiAgICByZXR1cm4gZXZlbnQudGl0bGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGl0bGVGb3JtYXR0ZXIgfSBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpdGxlLWZvcm1hdHRlci5wcm92aWRlcic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2NhbGVuZGFyRXZlbnRUaXRsZSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudFRpdGxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbGVuZGFyRXZlbnRUaXRsZTogQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyKSB7fVxuXG4gIHRyYW5zZm9ybSh0aXRsZTogc3RyaW5nLCB0aXRsZVR5cGU6IHN0cmluZywgZXZlbnQ6IENhbGVuZGFyRXZlbnQpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNhbGVuZGFyRXZlbnRUaXRsZVt0aXRsZVR5cGVdKGV2ZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENsaWNrXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xpY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoJ213bENsaWNrJykgY2xpY2s6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsbTogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudE5hbWU6IHN0cmluZyA9XG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93WydIYW1tZXInXSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyAndGFwJ1xuICAgICAgICA6ICdjbGljayc7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudCxcbiAgICAgIGV2ZW50TmFtZSxcbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5jbGljay5uZXh0KGV2ZW50KTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBnZXRNb250aFZpZXcsXG4gIEdldE1vbnRoVmlld0FyZ3MsXG4gIE1vbnRoVmlldyxcbiAgZ2V0V2Vla1ZpZXdIZWFkZXIsXG4gIEdldFdlZWtWaWV3SGVhZGVyQXJncyxcbiAgV2Vla0RheSxcbiAgZ2V0V2Vla1ZpZXcsXG4gIEdldFdlZWtWaWV3QXJncyxcbiAgZ2V0RGF5VmlldyxcbiAgR2V0RGF5Vmlld0FyZ3MsXG4gIERheVZpZXcsXG4gIGdldERheVZpZXdIb3VyR3JpZCxcbiAgR2V0RGF5Vmlld0hvdXJHcmlkQXJncyxcbiAgRGF5Vmlld0hvdXIsXG4gIFdlZWtWaWV3XG59IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyVXRpbHMge1xuICBnZXRNb250aFZpZXcoYXJnczogR2V0TW9udGhWaWV3QXJncyk6IE1vbnRoVmlldyB7XG4gICAgcmV0dXJuIGdldE1vbnRoVmlldyhhcmdzKTtcbiAgfVxuXG4gIGdldFdlZWtWaWV3SGVhZGVyKGFyZ3M6IEdldFdlZWtWaWV3SGVhZGVyQXJncyk6IFdlZWtEYXlbXSB7XG4gICAgcmV0dXJuIGdldFdlZWtWaWV3SGVhZGVyKGFyZ3MpO1xuICB9XG5cbiAgZ2V0V2Vla1ZpZXcoYXJnczogR2V0V2Vla1ZpZXdBcmdzKTogV2Vla1ZpZXcge1xuICAgIHJldHVybiBnZXRXZWVrVmlldyhhcmdzKTtcbiAgfVxuXG4gIGdldERheVZpZXcoYXJnczogR2V0RGF5Vmlld0FyZ3MpOiBEYXlWaWV3IHtcbiAgICByZXR1cm4gZ2V0RGF5VmlldyhhcmdzKTtcbiAgfVxuXG4gIGdldERheVZpZXdIb3VyR3JpZChhcmdzOiBHZXREYXlWaWV3SG91ckdyaWRBcmdzKTogRGF5Vmlld0hvdXJbXSB7XG4gICAgcmV0dXJuIGdldERheVZpZXdIb3VyR3JpZChhcmdzKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJEYXRlRm9ybWF0dGVySW50ZXJmYWNlLFxuICBEYXRlRm9ybWF0dGVyUGFyYW1zXG59IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IE1PTUVOVDogSW5qZWN0aW9uVG9rZW48c3RyaW5nPiA9IG5ldyBJbmplY3Rpb25Ub2tlbignTW9tZW50Jyk7XG5cbi8qKlxuICogVGhpcyB3aWxsIHVzZSA8YSBocmVmPVwiaHR0cDovL21vbWVudGpzLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5tb21lbnQ8L2E+IHRvIGRvIGFsbCBkYXRlIGZvcm1hdHRpbmcuIFRvIHVzZSB0aGlzIGNsYXNzOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlciwgQ2FsZW5kYXJNb21lbnREYXRlRm9ybWF0dGVyLCBNT01FTlQgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbiAqIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbiAqXG4gKiAvLyBpbiB5b3VyIGNvbXBvbmVudFxuICogcHJvdmlkZTogW3tcbiAqICAgcHJvdmlkZTogTU9NRU5ULCB1c2VWYWx1ZTogbW9tZW50XG4gKiB9LCB7XG4gKiAgIHByb3ZpZGU6IENhbGVuZGFyRGF0ZUZvcm1hdHRlciwgdXNlQ2xhc3M6IENhbGVuZGFyTW9tZW50RGF0ZUZvcm1hdHRlclxuICogfV1cbiAqXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9tZW50RGF0ZUZvcm1hdHRlclxuICBpbXBsZW1lbnRzIENhbGVuZGFyRGF0ZUZvcm1hdHRlckludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KE1PTUVOVCkgcHJpdmF0ZSBtb21lbnQ6IGFueSkge31cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgKi9cbiAgcHVibGljIG1vbnRoVmlld0NvbHVtbkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSlcbiAgICAgIC5sb2NhbGUobG9jYWxlKVxuICAgICAgLmZvcm1hdCgnZGRkZCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IGNlbGwgZGF5IG51bWJlclxuICAgKi9cbiAgcHVibGljIG1vbnRoVmlld0RheU51bWJlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSlcbiAgICAgIC5sb2NhbGUobG9jYWxlKVxuICAgICAgLmZvcm1hdCgnRCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IHRpdGxlXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubW9tZW50KGRhdGUpXG4gICAgICAubG9jYWxlKGxvY2FsZSlcbiAgICAgIC5mb3JtYXQoJ01NTU0gWVlZWScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKVxuICAgICAgLmxvY2FsZShsb2NhbGUpXG4gICAgICAuZm9ybWF0KCdkZGRkJyk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyBzdWIgaGVhZGVyIGRheSBhbmQgbW9udGggbGFiZWxzXG4gICAqL1xuICBwdWJsaWMgd2Vla1ZpZXdDb2x1bW5TdWJIZWFkZXIoe1xuICAgIGRhdGUsXG4gICAgbG9jYWxlXG4gIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKVxuICAgICAgLmxvY2FsZShsb2NhbGUpXG4gICAgICAuZm9ybWF0KCdEIE1NTScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgdGl0bGVcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld1RpdGxlKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKVxuICAgICAgLmxvY2FsZShsb2NhbGUpXG4gICAgICAuZm9ybWF0KCdbV2Vla10gVyBbb2ZdIFlZWVknKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGltZSBmb3JtYXR0aW5nIGRvd24gdGhlIGxlZnQgaGFuZCBzaWRlIG9mIHRoZSBkYXkgdmlld1xuICAgKi9cbiAgcHVibGljIGRheVZpZXdIb3VyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1vbWVudChkYXRlKVxuICAgICAgLmxvY2FsZShsb2NhbGUpXG4gICAgICAuZm9ybWF0KCdoYScpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIGRheVZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tb21lbnQoZGF0ZSlcbiAgICAgIC5sb2NhbGUobG9jYWxlKVxuICAgICAgLmZvcm1hdCgnZGRkZCwgRCBNTU1NLCBZWVlZJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENhbGVuZGFyRGF0ZUZvcm1hdHRlckludGVyZmFjZSxcbiAgRGF0ZUZvcm1hdHRlclBhcmFtc1xufSBmcm9tICcuL2NhbGVuZGFyLWRhdGUtZm9ybWF0dGVyLmludGVyZmFjZSc7XG5pbXBvcnQgZ2V0SVNPV2VlayBmcm9tICdkYXRlLWZucy9nZXRfaXNvX3dlZWsvaW5kZXgnO1xuXG4vKipcbiAqIFRoaXMgd2lsbCB1c2UgPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5JbnRsPC9hPiBBUEkgdG8gZG8gYWxsIGRhdGUgZm9ybWF0dGluZy5cbiAqXG4gKiBZb3Ugd2lsbCBuZWVkIHRvIGluY2x1ZGUgYSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FuZHllYXJuc2hhdy9JbnRsLmpzL1wiPnBvbHlmaWxsPC9hPiBmb3Igb2xkZXIgYnJvd3NlcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWxlbmRhck5hdGl2ZURhdGVGb3JtYXR0ZXJcbiAgaW1wbGVtZW50cyBDYWxlbmRhckRhdGVGb3JtYXR0ZXJJbnRlcmZhY2Uge1xuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgKi9cbiAgcHVibGljIG1vbnRoVmlld0NvbHVtbkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgY2VsbCBkYXkgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3RGF5TnVtYmVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgZGF5OiAnbnVtZXJpYycgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBtb250aCB2aWV3IHRpdGxlXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdsb25nJ1xuICAgIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IGhlYWRlciB3ZWVrIGRheSBsYWJlbHNcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld0NvbHVtbkhlYWRlcih7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7IHdlZWtkYXk6ICdsb25nJyB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyBzdWIgaGVhZGVyIGRheSBhbmQgbW9udGggbGFiZWxzXG4gICAqL1xuICBwdWJsaWMgd2Vla1ZpZXdDb2x1bW5TdWJIZWFkZXIoe1xuICAgIGRhdGUsXG4gICAgbG9jYWxlXG4gIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdzaG9ydCdcbiAgICB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHdlZWsgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgY29uc3QgeWVhcjogc3RyaW5nID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICB9KS5mb3JtYXQoZGF0ZSk7XG4gICAgY29uc3Qgd2Vla051bWJlcjogbnVtYmVyID0gZ2V0SVNPV2VlayhkYXRlKTtcbiAgICByZXR1cm4gYFdlZWsgJHt3ZWVrTnVtYmVyfSBvZiAke3llYXJ9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGltZSBmb3JtYXR0aW5nIGRvd24gdGhlIGxlZnQgaGFuZCBzaWRlIG9mIHRoZSBkYXkgdmlld1xuICAgKi9cbiAgcHVibGljIGRheVZpZXdIb3VyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgaG91cjogJ251bWVyaWMnIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHZpZXcgdGl0bGVcbiAgICovXG4gIHB1YmxpYyBkYXlWaWV3VGl0bGUoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgd2Vla2RheTogJ2xvbmcnXG4gICAgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEcmFnZ2FibGVIZWxwZXIgfSBmcm9tICdhbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudEFjdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnRUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZXZlbnQtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENhbGVuZGFyVG9vbHRpcERpcmVjdGl2ZSxcbiAgQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50XG59IGZyb20gJy4vY2FsZW5kYXItdG9vbHRpcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJQcmV2aW91c1ZpZXdEaXJlY3RpdmUgfSBmcm9tICcuL2NhbGVuZGFyLXByZXZpb3VzLXZpZXcuZGlyZWN0aXZlJztcbmltcG9ydCB7IENhbGVuZGFyTmV4dFZpZXdEaXJlY3RpdmUgfSBmcm9tICcuL2NhbGVuZGFyLW5leHQtdmlldy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJUb2RheURpcmVjdGl2ZSB9IGZyb20gJy4vY2FsZW5kYXItdG9kYXkuZGlyZWN0aXZlJztcbmltcG9ydCB7IENhbGVuZGFyRGF0ZVBpcGUgfSBmcm9tICcuL2NhbGVuZGFyLWRhdGUucGlwZSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGl0bGVQaXBlIH0gZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aXRsZS5waXBlJztcbmltcG9ydCB7IENsaWNrRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGljay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyIH0gZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aXRsZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi9jYWxlbmRhci1kYXRlLWZvcm1hdHRlci5wcm92aWRlcic7XG5pbXBvcnQgeyBDYWxlbmRhclV0aWxzIH0gZnJvbSAnLi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJNb2R1bGVDb25maWcge1xuICBldmVudFRpdGxlRm9ybWF0dGVyPzogUHJvdmlkZXI7XG4gIGRhdGVGb3JtYXR0ZXI/OiBQcm92aWRlcjtcbiAgdXRpbHM/OiBQcm92aWRlcjtcbn1cblxuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1ldmVudC10aXRsZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1tb21lbnQtZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1uYXRpdmUtZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci1hbmd1bGFyLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWRhdGUtZm9ybWF0dGVyLmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbGVuZGFyLWV2ZW50LXRpbWVzLWNoYW5nZWQtZXZlbnQuaW50ZXJmYWNlJztcblxuZXhwb3J0IHtcbiAgQ2FsZW5kYXJFdmVudCxcbiAgRXZlbnRBY3Rpb24gYXMgQ2FsZW5kYXJFdmVudEFjdGlvbixcbiAgREFZU19PRl9XRUVLLFxuICBWaWV3UGVyaW9kIGFzIENhbGVuZGFyVmlld1BlcmlvZFxufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5cbi8qKlxuICogSW1wb3J0IHRoaXMgbW9kdWxlIHRvIGlmIHlvdSdyZSBqdXN0IHVzaW5nIGEgc2luZ3VsYXIgdmlldyBhbmQgd2FudCB0byBzYXZlIG9uIGJ1bmRsZSBzaXplLiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL2NvbW1vbic7XG4gKiBpbXBvcnQgeyBDYWxlbmRhck1vbnRoTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhci9tb2R1bGVzL21vbnRoJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgQ2FsZW5kYXJDb21tb25Nb2R1bGUuZm9yUm9vdCgpLFxuICogICAgIENhbGVuZGFyTW9udGhNb2R1bGVcbiAqICAgXVxuICogfSlcbiAqIGNsYXNzIE15TW9kdWxlIHt9XG4gKiBgYGBcbiAqXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbGVuZGFyRXZlbnRBY3Rpb25zQ29tcG9uZW50LFxuICAgIENhbGVuZGFyRXZlbnRUaXRsZUNvbXBvbmVudCxcbiAgICBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJUb29sdGlwRGlyZWN0aXZlLFxuICAgIENhbGVuZGFyUHJldmlvdXNWaWV3RGlyZWN0aXZlLFxuICAgIENhbGVuZGFyTmV4dFZpZXdEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJUb2RheURpcmVjdGl2ZSxcbiAgICBDYWxlbmRhckRhdGVQaXBlLFxuICAgIENhbGVuZGFyRXZlbnRUaXRsZVBpcGUsXG4gICAgQ2xpY2tEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBDYWxlbmRhckV2ZW50QWN0aW9uc0NvbXBvbmVudCxcbiAgICBDYWxlbmRhckV2ZW50VGl0bGVDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJUb29sdGlwV2luZG93Q29tcG9uZW50LFxuICAgIENhbGVuZGFyVG9vbHRpcERpcmVjdGl2ZSxcbiAgICBDYWxlbmRhclByZXZpb3VzVmlld0RpcmVjdGl2ZSxcbiAgICBDYWxlbmRhck5leHRWaWV3RGlyZWN0aXZlLFxuICAgIENhbGVuZGFyVG9kYXlEaXJlY3RpdmUsXG4gICAgQ2FsZW5kYXJEYXRlUGlwZSxcbiAgICBDYWxlbmRhckV2ZW50VGl0bGVQaXBlLFxuICAgIENsaWNrRGlyZWN0aXZlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0NhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJDb21tb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IENhbGVuZGFyTW9kdWxlQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERyYWdnYWJsZUhlbHBlcixcbiAgICAgICAgY29uZmlnLmV2ZW50VGl0bGVGb3JtYXR0ZXIgfHwgQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyLFxuICAgICAgICBjb25maWcuZGF0ZUZvcm1hdHRlciB8fCBDYWxlbmRhckRhdGVGb3JtYXR0ZXIsXG4gICAgICAgIGNvbmZpZy51dGlscyB8fCBDYWxlbmRhclV0aWxzXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkNoYW5nZXMsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBMT0NBTEVfSUQsXG4gIEluamVjdCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYWxlbmRhckV2ZW50LFxuICBXZWVrRGF5LFxuICBNb250aFZpZXcsXG4gIE1vbnRoVmlld0RheSxcbiAgVmlld1BlcmlvZFxufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV9kYXkvaW5kZXgnO1xuaW1wb3J0IHNldERhdGUgZnJvbSAnZGF0ZS1mbnMvc2V0X2RhdGUvaW5kZXgnO1xuaW1wb3J0IHNldE1vbnRoIGZyb20gJ2RhdGUtZm5zL3NldF9tb250aC9pbmRleCc7XG5pbXBvcnQgc2V0WWVhciBmcm9tICdkYXRlLWZucy9zZXRfeWVhci9pbmRleCc7XG5pbXBvcnQgZ2V0RGF0ZSBmcm9tICdkYXRlLWZucy9nZXRfZGF0ZS9pbmRleCc7XG5pbXBvcnQgZ2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvZ2V0X21vbnRoL2luZGV4JztcbmltcG9ydCBnZXRZZWFyIGZyb20gJ2RhdGUtZm5zL2dldF95ZWFyL2luZGV4JztcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fc2Vjb25kcy9pbmRleCc7XG5pbXBvcnQgYWRkU2Vjb25kcyBmcm9tICdkYXRlLWZucy9hZGRfc2Vjb25kcy9pbmRleCc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJVdGlscyB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5pbXBvcnQgeyB2YWxpZGF0ZUV2ZW50cywgdHJhY2tCeUluZGV4IH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyTW9udGhWaWV3QmVmb3JlUmVuZGVyRXZlbnQge1xuICBoZWFkZXI6IFdlZWtEYXlbXTtcbiAgYm9keTogTW9udGhWaWV3RGF5W107XG4gIHBlcmlvZDogVmlld1BlcmlvZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhck1vbnRoVmlld0V2ZW50VGltZXNDaGFuZ2VkRXZlbnRcbiAgZXh0ZW5kcyBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQge1xuICBkYXk6IE1vbnRoVmlld0RheTtcbn1cblxuLyoqXG4gKiBTaG93cyBhbGwgZXZlbnRzIG9uIGEgZ2l2ZW4gbW9udGguIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPG13bC1jYWxlbmRhci1tb250aC12aWV3XG4gKiAgW3ZpZXdEYXRlXT1cInZpZXdEYXRlXCJcbiAqICBbZXZlbnRzXT1cImV2ZW50c1wiPlxuICogPC9td2wtY2FsZW5kYXItbW9udGgtdmlldz5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItbW9udGgtdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbC1tb250aC12aWV3XCI+XG4gICAgICA8bXdsLWNhbGVuZGFyLW1vbnRoLXZpZXctaGVhZGVyXG4gICAgICAgIFtkYXlzXT1cImNvbHVtbkhlYWRlcnNcIlxuICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJoZWFkZXJUZW1wbGF0ZVwiPlxuICAgICAgPC9td2wtY2FsZW5kYXItbW9udGgtdmlldy1oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsLWRheXNcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcm93SW5kZXggb2Ygdmlldy5yb3dPZmZzZXRzOyB0cmFja0J5SW5kZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWNlbGwtcm93XCI+XG4gICAgICAgICAgICA8bXdsLWNhbGVuZGFyLW1vbnRoLWNlbGxcbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiAodmlldy5kYXlzIHwgc2xpY2UgOiByb3dJbmRleCA6IHJvd0luZGV4ICsgKHZpZXcudG90YWxEYXlzVmlzaWJsZUluV2VlaykpOyB0cmFja0J5OnRyYWNrQnlEYXRlXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmNhbC1kcmFnLW92ZXJdPVwiZGF5LmRyYWdPdmVyXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiZGF5Py5jc3NDbGFzc1wiXG4gICAgICAgICAgICAgIFtkYXldPVwiZGF5XCJcbiAgICAgICAgICAgICAgW29wZW5EYXldPVwib3BlbkRheVwiXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgICAgICAgIFt0b29sdGlwQXBwZW5kVG9Cb2R5XT1cInRvb2x0aXBBcHBlbmRUb0JvZHlcIlxuICAgICAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJjZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiaGFuZGxlRGF5Q2xpY2soJGV2ZW50LCBkYXkpXCJcbiAgICAgICAgICAgICAgKGhpZ2hsaWdodERheSk9XCJ0b2dnbGVEYXlIaWdobGlnaHQoJGV2ZW50LmV2ZW50LCB0cnVlKVwiXG4gICAgICAgICAgICAgICh1bmhpZ2hsaWdodERheSk9XCJ0b2dnbGVEYXlIaWdobGlnaHQoJGV2ZW50LmV2ZW50LCBmYWxzZSlcIlxuICAgICAgICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgICAgICAgKGRyYWdFbnRlcik9XCJkYXkuZHJhZ092ZXIgPSB0cnVlXCJcbiAgICAgICAgICAgICAgKGRyYWdMZWF2ZSk9XCJkYXkuZHJhZ092ZXIgPSBmYWxzZVwiXG4gICAgICAgICAgICAgIChkcm9wKT1cImRheS5kcmFnT3ZlciA9IGZhbHNlOyBldmVudERyb3BwZWQoZGF5LCAkZXZlbnQuZHJvcERhdGEuZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGV2ZW50Q2xpY2tlZCk9XCJldmVudENsaWNrZWQuZW1pdCh7ZXZlbnQ6ICRldmVudC5ldmVudH0pXCI+XG4gICAgICAgICAgICA8L213bC1jYWxlbmRhci1tb250aC1jZWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxtd2wtY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzXG4gICAgICAgICAgICBbaXNPcGVuXT1cIm9wZW5Sb3dJbmRleCA9PT0gcm93SW5kZXhcIlxuICAgICAgICAgICAgW2V2ZW50c109XCJvcGVuRGF5Py5ldmVudHNcIlxuICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cIm9wZW5EYXlFdmVudHNUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbZXZlbnRUaXRsZVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogJGV2ZW50LmV2ZW50fSlcIj5cbiAgICAgICAgICA8L213bC1jYWxlbmRhci1vcGVuLWRheS1ldmVudHM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aFZpZXdDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZpZXcgZGF0ZVxuICAgKi9cbiAgQElucHV0KCkgdmlld0RhdGU6IERhdGU7XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGV2ZW50cyB0byBkaXNwbGF5IG9uIHZpZXcuXG4gICAqIFRoZSBzY2hlbWEgaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jYWxlbmRhci11dGlscy9ibG9iL2M1MTY4OTk4NWY1OWEyNzE5NDBlMzBiYzRlMmM0ZTFmZWUzZmNiNWMvc3JjL2NhbGVuZGFyVXRpbHMudHMjTDQ5LUw2M1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IHdpbGwgYmUgaGlkZGVuIG9uIHRoZSB2aWV3XG4gICAqL1xuICBASW5wdXQoKSBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgZXZlbnRzIGxpc3QgZm9yIHRoZSBkYXkgb2YgdGhlIGB2aWV3RGF0ZWAgb3B0aW9uIGlzIHZpc2libGUgb3Igbm90XG4gICAqL1xuICBASW5wdXQoKSBhY3RpdmVEYXlJc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKSByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBldmVudCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiBzdHJpbmcgPSAndG9wJztcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZXZlbnQgdG9vbHRpcHNcbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBhcHBlbmQgdG9vbHRpcHMgdG8gdGhlIGJvZHkgb3IgbmV4dCB0byB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwQXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIHN0YXJ0IG51bWJlciBvZiB0aGUgd2Vla1xuICAgKi9cbiAgQElucHV0KCkgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBoZWFkZXJcbiAgICovXG4gIEBJbnB1dCgpIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgdG8gcmVwbGFjZSB0aGUgZGF5IGNlbGxcbiAgICovXG4gIEBJbnB1dCgpIGNlbGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgc2xpZGUgZG93biBib3ggb2YgZXZlbnRzIGZvciB0aGUgYWN0aXZlIGRheVxuICAgKi9cbiAgQElucHV0KCkgb3BlbkRheUV2ZW50c1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIGV2ZW50IHRpdGxlc1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBkYXkgaW5kZXhlcyAoMCA9IHN1bmRheSwgMSA9IG1vbmRheSBldGMpIHRoYXQgaW5kaWNhdGUgd2hpY2ggZGF5cyBhcmUgd2Vla2VuZHNcbiAgICovXG4gIEBJbnB1dCgpIHdlZWtlbmREYXlzOiBudW1iZXJbXTtcblxuICAvKipcbiAgICogQW4gb3V0cHV0IHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIHRoZSB2aWV3IGlzIHJlbmRlcmVkIGZvciB0aGUgY3VycmVudCBtb250aC5cbiAgICogSWYgeW91IGFkZCB0aGUgYGNzc0NsYXNzYCBwcm9wZXJ0eSB0byBhIGRheSBpbiB0aGUgYm9keSBpdCB3aWxsIGFkZCB0aGF0IGNsYXNzIHRvIHRoZSBjZWxsIGVsZW1lbnQgaW4gdGhlIHRlbXBsYXRlXG4gICAqL1xuICBAT3V0cHV0KClcbiAgYmVmb3JlVmlld1JlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJNb250aFZpZXdCZWZvcmVSZW5kZXJFdmVudD4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGRheSBjZWxsIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBkYXlDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZGF5OiBNb250aFZpZXdEYXk7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIGRyYWdnZWQgYW5kIGRyb3BwZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBldmVudFRpbWVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgQ2FsZW5kYXJNb250aFZpZXdFdmVudFRpbWVzQ2hhbmdlZEV2ZW50XG4gID4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29sdW1uSGVhZGVyczogV2Vla0RheVtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2aWV3OiBNb250aFZpZXc7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG9wZW5Sb3dJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBvcGVuRGF5OiBNb250aFZpZXdEYXk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeUluZGV4ID0gdHJhY2tCeUluZGV4O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0cmFja0J5RGF0ZSA9IChpbmRleDogbnVtYmVyLCBkYXk6IE1vbnRoVmlld0RheSkgPT4gZGF5LmRhdGUudG9JU09TdHJpbmcoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdXRpbHM6IENhbGVuZGFyVXRpbHMsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nXG4gICkge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbiA9IHRoaXMucmVmcmVzaC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGwoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5leGNsdWRlRGF5cyB8fCBjaGFuZ2VzLndlZWtlbmREYXlzKSB7XG4gICAgICB0aGlzLnJlZnJlc2hIZWFkZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5ldmVudHMpIHtcbiAgICAgIHZhbGlkYXRlRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLnZpZXdEYXRlIHx8XG4gICAgICBjaGFuZ2VzLmV2ZW50cyB8fFxuICAgICAgY2hhbmdlcy5leGNsdWRlRGF5cyB8fFxuICAgICAgY2hhbmdlcy53ZWVrZW5kRGF5c1xuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNoYW5nZXMuYWN0aXZlRGF5SXNPcGVuIHx8XG4gICAgICBjaGFuZ2VzLnZpZXdEYXRlIHx8XG4gICAgICBjaGFuZ2VzLmV2ZW50cyB8fFxuICAgICAgY2hhbmdlcy5leGNsdWRlRGF5c1xuICAgICkge1xuICAgICAgdGhpcy5jaGVja0FjdGl2ZURheUlzT3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdG9nZ2xlRGF5SGlnaGxpZ2h0KGV2ZW50OiBDYWxlbmRhckV2ZW50LCBpc0hpZ2hsaWdodGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy52aWV3LmRheXMuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgaWYgKGlzSGlnaGxpZ2h0ZWQgJiYgZGF5LmV2ZW50cy5pbmRleE9mKGV2ZW50KSA+IC0xKSB7XG4gICAgICAgIGRheS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgIChldmVudC5jb2xvciAmJiBldmVudC5jb2xvci5zZWNvbmRhcnkpIHx8ICcjRDFFOEZGJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBkYXkuYmFja2dyb3VuZENvbG9yO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGV2ZW50RHJvcHBlZChkYXk6IE1vbnRoVmlld0RheSwgZXZlbnQ6IENhbGVuZGFyRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSBnZXRZZWFyKGRheS5kYXRlKTtcbiAgICBjb25zdCBtb250aDogbnVtYmVyID0gZ2V0TW9udGgoZGF5LmRhdGUpO1xuICAgIGNvbnN0IGRhdGU6IG51bWJlciA9IGdldERhdGUoZGF5LmRhdGUpO1xuICAgIGNvbnN0IG5ld1N0YXJ0OiBEYXRlID0gc2V0RGF0ZShcbiAgICAgIHNldE1vbnRoKHNldFllYXIoZXZlbnQuc3RhcnQsIHllYXIpLCBtb250aCksXG4gICAgICBkYXRlXG4gICAgKTtcbiAgICBsZXQgbmV3RW5kOiBEYXRlO1xuICAgIGlmIChldmVudC5lbmQpIHtcbiAgICAgIGNvbnN0IHNlY29uZHNEaWZmOiBudW1iZXIgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKG5ld1N0YXJ0LCBldmVudC5zdGFydCk7XG4gICAgICBuZXdFbmQgPSBhZGRTZWNvbmRzKGV2ZW50LmVuZCwgc2Vjb25kc0RpZmYpO1xuICAgIH1cbiAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoeyBldmVudCwgbmV3U3RhcnQsIG5ld0VuZCwgZGF5IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGhhbmRsZURheUNsaWNrKGNsaWNrRXZlbnQ6IGFueSwgZGF5OiBNb250aFZpZXdEYXkpIHtcbiAgICAvLyB3aGVuIHVzaW5nIGhhbW1lcmpzLCBzdG9wUHJvcGFnYXRpb24gZG9lc24ndCB3b3JrLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21hdHRsZXdpczkyL2FuZ3VsYXItY2FsZW5kYXIvaXNzdWVzLzMxOFxuICAgIGlmICghY2xpY2tFdmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYWwtZXZlbnQnKSkge1xuICAgICAgdGhpcy5kYXlDbGlja2VkLmVtaXQoeyBkYXkgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoSGVhZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uSGVhZGVycyA9IHRoaXMudXRpbHMuZ2V0V2Vla1ZpZXdIZWFkZXIoe1xuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgICB3ZWVrZW5kRGF5czogdGhpcy53ZWVrZW5kRGF5c1xuICAgIH0pO1xuICAgIHRoaXMuZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEJvZHkoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3ID0gdGhpcy51dGlscy5nZXRNb250aFZpZXcoe1xuICAgICAgZXZlbnRzOiB0aGlzLmV2ZW50cyxcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLndlZWtTdGFydHNPbixcbiAgICAgIGV4Y2x1ZGVkOiB0aGlzLmV4Y2x1ZGVEYXlzLFxuICAgICAgd2Vla2VuZERheXM6IHRoaXMud2Vla2VuZERheXNcbiAgICB9KTtcbiAgICB0aGlzLmVtaXRCZWZvcmVWaWV3UmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQWN0aXZlRGF5SXNPcGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2ZURheUlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5vcGVuRGF5ID0gdGhpcy52aWV3LmRheXMuZmluZChkYXkgPT5cbiAgICAgICAgaXNTYW1lRGF5KGRheS5kYXRlLCB0aGlzLnZpZXdEYXRlKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLnZpZXcuZGF5cy5pbmRleE9mKHRoaXMub3BlbkRheSk7XG4gICAgICB0aGlzLm9wZW5Sb3dJbmRleCA9XG4gICAgICAgIE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLnZpZXcudG90YWxEYXlzVmlzaWJsZUluV2VlaykgKlxuICAgICAgICB0aGlzLnZpZXcudG90YWxEYXlzVmlzaWJsZUluV2VlaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuUm93SW5kZXggPSBudWxsO1xuICAgICAgdGhpcy5vcGVuRGF5ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5IZWFkZXJzID0gbnVsbDtcbiAgICB0aGlzLnZpZXcgPSBudWxsO1xuICAgIHRoaXMucmVmcmVzaEhlYWRlcigpO1xuICAgIHRoaXMucmVmcmVzaEJvZHkoKTtcbiAgICB0aGlzLmNoZWNrQWN0aXZlRGF5SXNPcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRCZWZvcmVWaWV3UmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbHVtbkhlYWRlcnMgJiYgdGhpcy52aWV3KSB7XG4gICAgICB0aGlzLmJlZm9yZVZpZXdSZW5kZXIuZW1pdCh7XG4gICAgICAgIGhlYWRlcjogdGhpcy5jb2x1bW5IZWFkZXJzLFxuICAgICAgICBib2R5OiB0aGlzLnZpZXcuZGF5cyxcbiAgICAgICAgcGVyaW9kOiB0aGlzLnZpZXcucGVyaW9kXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXZWVrRGF5IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItbW9udGgtdmlldy1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWRheXM9XCJkYXlzXCJcbiAgICAgIGxldC1sb2NhbGU9XCJsb2NhbGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtY2VsbC1yb3cgY2FsLWhlYWRlclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtY2VsbFwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiBkYXlzOyB0cmFja0J5OnRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZVwiXG4gICAgICAgICAgW2NsYXNzLmNhbC1wYXN0XT1cImRheS5pc1Bhc3RcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtdG9kYXldPVwiZGF5LmlzVG9kYXlcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtZnV0dXJlXT1cImRheS5pc0Z1dHVyZVwiXG4gICAgICAgICAgW2NsYXNzLmNhbC13ZWVrZW5kXT1cImRheS5pc1dlZWtlbmRcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImRheS5jc3NDbGFzc1wiPlxuICAgICAgICAgIHt7IGRheS5kYXRlIHwgY2FsZW5kYXJEYXRlOidtb250aFZpZXdDb2x1bW5IZWFkZXInOmxvY2FsZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXlzOiBkYXlzLCBsb2NhbGU6IGxvY2FsZX1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9udGhWaWV3SGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF5czogV2Vla0RheVtdO1xuXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZSA9IHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZTtcbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vbnRoVmlld0RheSwgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IHRyYWNrQnlFdmVudElkIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItbW9udGgtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZGF5PVwiZGF5XCJcbiAgICAgIGxldC1vcGVuRGF5PVwib3BlbkRheVwiXG4gICAgICBsZXQtbG9jYWxlPVwibG9jYWxlXCJcbiAgICAgIGxldC10b29sdGlwUGxhY2VtZW50PVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICBsZXQtaGlnaGxpZ2h0RGF5PVwiaGlnaGxpZ2h0RGF5XCJcbiAgICAgIGxldC11bmhpZ2hsaWdodERheT1cInVuaGlnaGxpZ2h0RGF5XCJcbiAgICAgIGxldC1ldmVudENsaWNrZWQ9XCJldmVudENsaWNrZWRcIlxuICAgICAgbGV0LXRvb2x0aXBUZW1wbGF0ZT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICBsZXQtdG9vbHRpcEFwcGVuZFRvQm9keT1cInRvb2x0aXBBcHBlbmRUb0JvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtY2VsbC10b3BcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYWwtZGF5LWJhZGdlXCIgKm5nSWY9XCJkYXkuYmFkZ2VUb3RhbCA+IDBcIj57eyBkYXkuYmFkZ2VUb3RhbCB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjYWwtZGF5LW51bWJlclwiPnt7IGRheS5kYXRlIHwgY2FsZW5kYXJEYXRlOidtb250aFZpZXdEYXlOdW1iZXInOmxvY2FsZSB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1ldmVudHNcIiAqbmdJZj1cImRheS5ldmVudHMubGVuZ3RoID4gMFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnRcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBldmVudCBvZiBkYXkuZXZlbnRzOyB0cmFja0J5OnRyYWNrQnlFdmVudElkXCJcbiAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImV2ZW50LmNvbG9yPy5wcmltYXJ5XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJldmVudD8uY3NzQ2xhc3NcIlxuICAgICAgICAgIChtb3VzZWVudGVyKT1cImhpZ2hsaWdodERheS5lbWl0KHtldmVudDogZXZlbnR9KVwiXG4gICAgICAgICAgKG1vdXNlbGVhdmUpPVwidW5oaWdobGlnaHREYXkuZW1pdCh7ZXZlbnQ6IGV2ZW50fSlcIlxuICAgICAgICAgIFttd2xDYWxlbmRhclRvb2x0aXBdPVwiZXZlbnQudGl0bGUgfCBjYWxlbmRhckV2ZW50VGl0bGU6J21vbnRoVG9vbHRpcCc6ZXZlbnRcIlxuICAgICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgIFt0b29sdGlwRXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICBbdG9vbHRpcEFwcGVuZFRvQm9keV09XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCJcbiAgICAgICAgICBtd2xEcmFnZ2FibGVcbiAgICAgICAgICBbZHJvcERhdGFdPVwie2V2ZW50OiBldmVudH1cIlxuICAgICAgICAgIFtkcmFnQXhpc109XCJ7eDogZXZlbnQuZHJhZ2dhYmxlLCB5OiBldmVudC5kcmFnZ2FibGV9XCJcbiAgICAgICAgICAobXdsQ2xpY2spPVwiZXZlbnRDbGlja2VkLmVtaXQoeyBldmVudDogZXZlbnQgfSlcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGRheTogZGF5LFxuICAgICAgICBvcGVuRGF5OiBvcGVuRGF5LFxuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgdG9vbHRpcFBsYWNlbWVudDogdG9vbHRpcFBsYWNlbWVudCxcbiAgICAgICAgaGlnaGxpZ2h0RGF5OiBoaWdobGlnaHREYXksXG4gICAgICAgIHVuaGlnaGxpZ2h0RGF5OiB1bmhpZ2hsaWdodERheSxcbiAgICAgICAgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWQsXG4gICAgICAgIHRvb2x0aXBUZW1wbGF0ZTogdG9vbHRpcFRlbXBsYXRlLFxuICAgICAgICB0b29sdGlwQXBwZW5kVG9Cb2R5OiB0b29sdGlwQXBwZW5kVG9Cb2R5XG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnY2FsLWNlbGwgY2FsLWRheS1jZWxsJyxcbiAgICAnW2NsYXNzLmNhbC1wYXN0XSc6ICdkYXkuaXNQYXN0JyxcbiAgICAnW2NsYXNzLmNhbC10b2RheV0nOiAnZGF5LmlzVG9kYXknLFxuICAgICdbY2xhc3MuY2FsLWZ1dHVyZV0nOiAnZGF5LmlzRnV0dXJlJyxcbiAgICAnW2NsYXNzLmNhbC13ZWVrZW5kXSc6ICdkYXkuaXNXZWVrZW5kJyxcbiAgICAnW2NsYXNzLmNhbC1pbi1tb250aF0nOiAnZGF5LmluTW9udGgnLFxuICAgICdbY2xhc3MuY2FsLW91dC1tb250aF0nOiAnIWRheS5pbk1vbnRoJyxcbiAgICAnW2NsYXNzLmNhbC1oYXMtZXZlbnRzXSc6ICdkYXkuZXZlbnRzLmxlbmd0aCA+IDAnLFxuICAgICdbY2xhc3MuY2FsLW9wZW5dJzogJ2RheSA9PT0gb3BlbkRheScsXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdJzogJ2RheS5iYWNrZ3JvdW5kQ29sb3InXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb250aENlbGxDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXk6IE1vbnRoVmlld0RheTtcblxuICBASW5wdXQoKSBvcGVuRGF5OiBNb250aFZpZXdEYXk7XG5cbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHRvb2x0aXBBcHBlbmRUb0JvZHk6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKSBoaWdobGlnaHREYXk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSB1bmhpZ2hsaWdodERheTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgfT4oKTtcblxuICB0cmFja0J5RXZlbnRJZCA9IHRyYWNrQnlFdmVudElkO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyB0cmFja0J5RXZlbnRJZCB9IGZyb20gJy4uL2NvbW1vbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLW9wZW4tZGF5LWV2ZW50cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZXZlbnRzPVwiZXZlbnRzXCJcbiAgICAgIGxldC1ldmVudENsaWNrZWQ9XCJldmVudENsaWNrZWRcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nRm9yPVwibGV0IGV2ZW50IG9mIGV2ZW50czsgdHJhY2tCeTp0cmFja0J5RXZlbnRJZFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImV2ZW50Py5jc3NDbGFzc1wiXG4gICAgICAgIG13bERyYWdnYWJsZVxuICAgICAgICBbZHJvcERhdGFdPVwie2V2ZW50OiBldmVudH1cIlxuICAgICAgICBbZHJhZ0F4aXNdPVwie3g6IGV2ZW50LmRyYWdnYWJsZSwgeTogZXZlbnQuZHJhZ2dhYmxlfVwiPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImV2ZW50LmNvbG9yPy5wcmltYXJ5XCI+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgJm5nc3A7XG4gICAgICAgIDxtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGVcbiAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJldmVudFRpdGxlVGVtcGxhdGVcIlxuICAgICAgICAgIHZpZXc9XCJtb250aFwiXG4gICAgICAgICAgKG13bENsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogZXZlbnR9KVwiPlxuICAgICAgICA8L213bC1jYWxlbmRhci1ldmVudC10aXRsZT5cbiAgICAgICAgJm5nc3A7XG4gICAgICAgIDxtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyBbZXZlbnRdPVwiZXZlbnRcIj48L213bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY2FsLW9wZW4tZGF5LWV2ZW50c1wiIFtAY29sbGFwc2VdICpuZ0lmPVwiaXNPcGVuXCI+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICBldmVudHM6IGV2ZW50cyxcbiAgICAgICAgICBldmVudENsaWNrZWQ6IGV2ZW50Q2xpY2tlZFxuICAgICAgICB9XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZGl2PlxuICBgLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignY29sbGFwc2UnLCBbXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAwLCBvdmVyZmxvdzogJ2hpZGRlbicgfSksXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xuICAgICAgICBzdHlsZSh7IGhlaWdodDogJyonLCBvdmVyZmxvdzogJ2hpZGRlbicgfSksXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zJywgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJPcGVuRGF5RXZlbnRzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZXZlbnRzOiBDYWxlbmRhckV2ZW50W107XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIH0+KCk7XG5cbiAgdHJhY2tCeUV2ZW50SWQgPSB0cmFja0J5RXZlbnRJZDtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRHJhZ0FuZERyb3BNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLW1vbnRoLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhWaWV3SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1tb250aC12aWV3LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb250aENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLW1vbnRoLWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyT3BlbkRheUV2ZW50c0NvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci1jb21tb24ubW9kdWxlJztcblxuZXhwb3J0IHtcbiAgQ2FsZW5kYXJNb250aFZpZXdDb21wb25lbnQsXG4gIENhbGVuZGFyTW9udGhWaWV3QmVmb3JlUmVuZGVyRXZlbnQsXG4gIENhbGVuZGFyTW9udGhWaWV3RXZlbnRUaW1lc0NoYW5nZWRFdmVudFxufSBmcm9tICcuL2NhbGVuZGFyLW1vbnRoLXZpZXcuY29tcG9uZW50JztcbmV4cG9ydCB7IE1vbnRoVmlld0RheSBhcyBDYWxlbmRhck1vbnRoVmlld0RheSB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRHJhZ0FuZERyb3BNb2R1bGUsIENhbGVuZGFyQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2FsZW5kYXJNb250aFZpZXdDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJNb250aENlbGxDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJPcGVuRGF5RXZlbnRzQ29tcG9uZW50LFxuICAgIENhbGVuZGFyTW9udGhWaWV3SGVhZGVyQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBEcmFnQW5kRHJvcE1vZHVsZSxcbiAgICBDYWxlbmRhck1vbnRoVmlld0NvbXBvbmVudCxcbiAgICBDYWxlbmRhck1vbnRoQ2VsbENvbXBvbmVudCxcbiAgICBDYWxlbmRhck9wZW5EYXlFdmVudHNDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJNb250aFZpZXdIZWFkZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck1vbnRoTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBpc0luc2lkZSB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRyYWdIZWxwZXIge1xuICBzdGFydFBvc2l0aW9uOiBDbGllbnRSZWN0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZHJhZ0NvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIGRyYWdnYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50XG4gICkge1xuICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IGRyYWdnYWJsZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICB2YWxpZGF0ZURyYWcoeyB4LCB5IH06IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5ld1JlY3Q6IENsaWVudFJlY3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXJ0UG9zaXRpb24sIHtcbiAgICAgIGxlZnQ6IHRoaXMuc3RhcnRQb3NpdGlvbi5sZWZ0ICsgeCxcbiAgICAgIHJpZ2h0OiB0aGlzLnN0YXJ0UG9zaXRpb24ucmlnaHQgKyB4LFxuICAgICAgdG9wOiB0aGlzLnN0YXJ0UG9zaXRpb24udG9wICsgeSxcbiAgICAgIGJvdHRvbTogdGhpcy5zdGFydFBvc2l0aW9uLmJvdHRvbSArIHlcbiAgICB9KTtcblxuICAgIHJldHVybiBpc0luc2lkZSh0aGlzLmRyYWdDb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBuZXdSZWN0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNJbnNpZGUgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJSZXNpemVIZWxwZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlc2l6ZUNvbnRhaW5lckVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIHByaXZhdGUgbWluV2lkdGg/OiBudW1iZXJcbiAgKSB7fVxuXG4gIHZhbGlkYXRlUmVzaXplKHsgcmVjdGFuZ2xlIH06IHsgcmVjdGFuZ2xlOiBDbGllbnRSZWN0IH0pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5taW5XaWR0aCAmJiByZWN0YW5nbGUud2lkdGggPCB0aGlzLm1pbldpZHRoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzSW5zaWRlKFxuICAgICAgdGhpcy5yZXNpemVDb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgcmVjdGFuZ2xlXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBMT0NBTEVfSUQsXG4gIEluamVjdCxcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIFdlZWtEYXksXG4gIENhbGVuZGFyRXZlbnQsXG4gIFdlZWtWaWV3RXZlbnQsXG4gIFdlZWtWaWV3LFxuICBWaWV3UGVyaW9kXG59IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IFJlc2l6ZUV2ZW50IH0gZnJvbSAnYW5ndWxhci1yZXNpemFibGUtZWxlbWVudCc7XG5pbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGRfZGF5cy9pbmRleCc7XG5pbXBvcnQgeyBDYWxlbmRhckRyYWdIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZHJhZy1oZWxwZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJSZXNpemVIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItcmVzaXplLWhlbHBlci5wcm92aWRlcic7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJVdGlscyB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5pbXBvcnQgeyB2YWxpZGF0ZUV2ZW50cywgdHJhY2tCeUluZGV4IH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtWaWV3RXZlbnRSZXNpemUge1xuICBvcmlnaW5hbE9mZnNldDogbnVtYmVyO1xuICBvcmlnaW5hbFNwYW46IG51bWJlcjtcbiAgZWRnZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyV2Vla1ZpZXdCZWZvcmVSZW5kZXJFdmVudCB7XG4gIGhlYWRlcjogV2Vla0RheVtdO1xuICBwZXJpb2Q6IFZpZXdQZXJpb2Q7XG59XG5cbi8qKlxuICogU2hvd3MgYWxsIGV2ZW50cyBvbiBhIGdpdmVuIHdlZWsuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPG13bC1jYWxlbmRhci13ZWVrLXZpZXdcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCI+XG4gKiA8L213bC1jYWxlbmRhci13ZWVrLXZpZXc+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLXdlZWstdmlldycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNhbC13ZWVrLXZpZXdcIiAjd2Vla1ZpZXdDb250YWluZXI+XG4gICAgICA8bXdsLWNhbGVuZGFyLXdlZWstdmlldy1oZWFkZXJcbiAgICAgICAgW2RheXNdPVwiZGF5c1wiXG4gICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImhlYWRlclRlbXBsYXRlXCJcbiAgICAgICAgKGRheUhlYWRlckNsaWNrZWQpPVwiZGF5SGVhZGVyQ2xpY2tlZC5lbWl0KCRldmVudClcIlxuICAgICAgICAoZXZlbnREcm9wcGVkKT1cImV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgPC9td2wtY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlcj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGV2ZW50Um93IG9mIHZpZXcuZXZlbnRSb3dzOyB0cmFja0J5OnRyYWNrQnlJbmRleFwiICNldmVudFJvd0NvbnRhaW5lciBjbGFzcz1cImNhbC1ldmVudHMtcm93XCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgd2Vla0V2ZW50IG9mIGV2ZW50Um93LnJvdzsgdHJhY2tCeTp0cmFja0J5RXZlbnRJZFwiXG4gICAgICAgICAgI2V2ZW50XG4gICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtY29udGFpbmVyXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLWRyYWdnYWJsZV09XCJ3ZWVrRXZlbnQuZXZlbnQuZHJhZ2dhYmxlXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXN0YXJ0cy13aXRoaW4td2Vla109XCIhd2Vla0V2ZW50LnN0YXJ0c0JlZm9yZVdlZWtcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtZW5kcy13aXRoaW4td2Vla109XCIhd2Vla0V2ZW50LmVuZHNBZnRlcldlZWtcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cIndlZWtFdmVudC5ldmVudD8uY3NzQ2xhc3NcIlxuICAgICAgICAgIFtzdHlsZS53aWR0aF09XCIoKDEwMCAvIGRheXMubGVuZ3RoKSAqIHdlZWtFdmVudC5zcGFuKSArICclJ1wiXG4gICAgICAgICAgW3N0eWxlLm1hcmdpbkxlZnRdPVwiKCgxMDAgLyBkYXlzLmxlbmd0aCkgKiB3ZWVrRXZlbnQub2Zmc2V0KSArICclJ1wiXG4gICAgICAgICAgbXdsUmVzaXphYmxlXG4gICAgICAgICAgW3Jlc2l6ZUVkZ2VzXT1cIntsZWZ0OiB3ZWVrRXZlbnQuZXZlbnQ/LnJlc2l6YWJsZT8uYmVmb3JlU3RhcnQsIHJpZ2h0OiB3ZWVrRXZlbnQuZXZlbnQ/LnJlc2l6YWJsZT8uYWZ0ZXJFbmR9XCJcbiAgICAgICAgICBbcmVzaXplU25hcEdyaWRdPVwie2xlZnQ6IGRheUNvbHVtbldpZHRoLCByaWdodDogZGF5Q29sdW1uV2lkdGh9XCJcbiAgICAgICAgICBbdmFsaWRhdGVSZXNpemVdPVwidmFsaWRhdGVSZXNpemVcIlxuICAgICAgICAgIChyZXNpemVTdGFydCk9XCJyZXNpemVTdGFydGVkKHdlZWtWaWV3Q29udGFpbmVyLCB3ZWVrRXZlbnQsICRldmVudClcIlxuICAgICAgICAgIChyZXNpemluZyk9XCJyZXNpemluZyh3ZWVrRXZlbnQsICRldmVudCwgZGF5Q29sdW1uV2lkdGgpXCJcbiAgICAgICAgICAocmVzaXplRW5kKT1cInJlc2l6ZUVuZGVkKHdlZWtFdmVudClcIlxuICAgICAgICAgIG13bERyYWdnYWJsZVxuICAgICAgICAgIFtkcmFnQXhpc109XCJ7eDogd2Vla0V2ZW50LmV2ZW50LmRyYWdnYWJsZSAmJiBjdXJyZW50UmVzaXplcy5zaXplID09PSAwLCB5OiBmYWxzZX1cIlxuICAgICAgICAgIFtkcmFnU25hcEdyaWRdPVwie3g6IGRheUNvbHVtbldpZHRofVwiXG4gICAgICAgICAgW3ZhbGlkYXRlRHJhZ109XCJ2YWxpZGF0ZURyYWdcIlxuICAgICAgICAgIChkcmFnUG9pbnRlckRvd24pPVwiZHJhZ1N0YXJ0KHdlZWtWaWV3Q29udGFpbmVyLCBldmVudClcIlxuICAgICAgICAgIChkcmFnRW5kKT1cImV2ZW50RHJhZ2dlZCh3ZWVrRXZlbnQsICRldmVudC54LCBkYXlDb2x1bW5XaWR0aClcIj5cbiAgICAgICAgICA8bXdsLWNhbGVuZGFyLXdlZWstdmlldy1ldmVudFxuICAgICAgICAgICAgW3dlZWtFdmVudF09XCJ3ZWVrRXZlbnRcIlxuICAgICAgICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgICAgICBbdG9vbHRpcFRlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbdG9vbHRpcEFwcGVuZFRvQm9keV09XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCJcbiAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJldmVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgIFtldmVudFRpdGxlVGVtcGxhdGVdPVwiZXZlbnRUaXRsZVRlbXBsYXRlXCJcbiAgICAgICAgICAgIChldmVudENsaWNrZWQpPVwiZXZlbnRDbGlja2VkLmVtaXQoe2V2ZW50OiB3ZWVrRXZlbnQuZXZlbnR9KVwiPlxuICAgICAgICAgIDwvbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ldmVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3XG4gICAqIFRoZSBzY2hlbWEgaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jYWxlbmRhci11dGlscy9ibG9iL2M1MTY4OTk4NWY1OWEyNzE5NDBlMzBiYzRlMmM0ZTFmZWUzZmNiNWMvc3JjL2NhbGVuZGFyVXRpbHMudHMjTDQ5LUw2M1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZGF5IGluZGV4ZXMgKDAgPSBzdW5kYXksIDEgPSBtb25kYXkgZXRjKSB0aGF0IHdpbGwgYmUgaGlkZGVuIG9uIHRoZSB2aWV3XG4gICAqL1xuICBASW5wdXQoKSBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKSByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcGxhY2VtZW50IG9mIHRoZSBldmVudCB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50OiBzdHJpbmcgPSAnYm90dG9tJztcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZXZlbnQgdG9vbHRpcHNcbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogV2hldGhlciB0byBhcHBlbmQgdG9vbHRpcHMgdG8gdGhlIGJvZHkgb3IgbmV4dCB0byB0aGUgdHJpZ2dlciBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwQXBwZW5kVG9Cb2R5OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIHN0YXJ0IG51bWJlciBvZiB0aGUgd2Vla1xuICAgKi9cbiAgQElucHV0KCkgd2Vla1N0YXJ0c09uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBoZWFkZXJcbiAgICovXG4gIEBJbnB1dCgpIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHdlZWsgdmlldyBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgdGl0bGVzXG4gICAqL1xuICBASW5wdXQoKSBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBwcmVjaXNpb24gdG8gZGlzcGxheSBldmVudHMuXG4gICAqIGBkYXlzYCB3aWxsIHJvdW5kIGV2ZW50IHN0YXJ0IGFuZCBlbmQgZGF0ZXMgdG8gdGhlIG5lYXJlc3QgZGF5IGFuZCBgbWludXRlc2Agd2lsbCBub3QgZG8gdGhpcyByb3VuZGluZ1xuICAgKi9cbiAgQElucHV0KCkgcHJlY2lzaW9uOiAnZGF5cycgfCAnbWludXRlcycgPSAnZGF5cyc7XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCBpbmRpY2F0ZSB3aGljaCBkYXlzIGFyZSB3ZWVrZW5kc1xuICAgKi9cbiAgQElucHV0KCkgd2Vla2VuZERheXM6IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGhlYWRlciB3ZWVrIGRheSBpcyBjbGlja2VkLiBBZGRpbmcgYSBgY3NzQ2xhc3NgIHByb3BlcnR5IG9uIGAkZXZlbnQuZGF5YCB3aWxsIGFkZCB0aGF0IGNsYXNzIHRvIHRoZSBoZWFkZXIgZWxlbWVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRheUhlYWRlckNsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGRheTogV2Vla0RheSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGRheTogV2Vla0RheTtcbiAgfT4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGV2ZW50IHRpdGxlIGlzIGNsaWNrZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIHJlc2l6ZWQgb3IgZHJhZ2dlZCBhbmQgZHJvcHBlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGV2ZW50VGltZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8XG4gICAgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50XG4gID4gPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4oKTtcblxuICAvKipcbiAgICogQW4gb3V0cHV0IHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIHRoZSB2aWV3IGlzIHJlbmRlcmVkIGZvciB0aGUgY3VycmVudCB3ZWVrLlxuICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIGEgZGF5IGluIHRoZSBoZWFkZXIgaXQgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgY2VsbCBlbGVtZW50IGluIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGJlZm9yZVZpZXdSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyV2Vla1ZpZXdCZWZvcmVSZW5kZXJFdmVudD4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZGF5czogV2Vla0RheVtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2aWV3OiBXZWVrVmlldztcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjdXJyZW50UmVzaXplczogTWFwPFdlZWtWaWV3RXZlbnQsIFdlZWtWaWV3RXZlbnRSZXNpemU+ID0gbmV3IE1hcCgpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2YWxpZGF0ZURyYWc6IChhcmdzOiBhbnkpID0+IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHZhbGlkYXRlUmVzaXplOiAoYXJnczogYW55KSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBkYXlDb2x1bW5XaWR0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0cmFja0J5SW5kZXggPSB0cmFja0J5SW5kZXg7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHRyYWNrQnlFdmVudElkID0gKGluZGV4OiBudW1iZXIsIHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudCkgPT5cbiAgICB3ZWVrRXZlbnQuZXZlbnQuaWQgPyB3ZWVrRXZlbnQuZXZlbnQuaWQgOiB3ZWVrRXZlbnQ7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHV0aWxzOiBDYWxlbmRhclV0aWxzLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBsb2NhbGU6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQWxsKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZpZXdEYXRlIHx8IGNoYW5nZXMuZXhjbHVkZURheXMgfHwgY2hhbmdlcy53ZWVrZW5kRGF5cykge1xuICAgICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZXZlbnRzKSB7XG4gICAgICB2YWxpZGF0ZUV2ZW50cyh0aGlzLmV2ZW50cyk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZXZlbnRzIHx8IGNoYW5nZXMudmlld0RhdGUgfHwgY2hhbmdlcy5leGNsdWRlRGF5cykge1xuICAgICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVzaXplU3RhcnRlZChcbiAgICB3ZWVrVmlld0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgd2Vla0V2ZW50OiBXZWVrVmlld0V2ZW50LFxuICAgIHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnRSZXNpemVzLnNldCh3ZWVrRXZlbnQsIHtcbiAgICAgIG9yaWdpbmFsT2Zmc2V0OiB3ZWVrRXZlbnQub2Zmc2V0LFxuICAgICAgb3JpZ2luYWxTcGFuOiB3ZWVrRXZlbnQuc3BhbixcbiAgICAgIGVkZ2U6IHR5cGVvZiByZXNpemVFdmVudC5lZGdlcy5sZWZ0ICE9PSAndW5kZWZpbmVkJyA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgICB9KTtcbiAgICB0aGlzLmRheUNvbHVtbldpZHRoID0gdGhpcy5nZXREYXlDb2x1bW5XaWR0aCh3ZWVrVmlld0NvbnRhaW5lcik7XG4gICAgY29uc3QgcmVzaXplSGVscGVyOiBDYWxlbmRhclJlc2l6ZUhlbHBlciA9IG5ldyBDYWxlbmRhclJlc2l6ZUhlbHBlcihcbiAgICAgIHdlZWtWaWV3Q29udGFpbmVyLFxuICAgICAgdGhpcy5kYXlDb2x1bW5XaWR0aFxuICAgICk7XG4gICAgdGhpcy52YWxpZGF0ZVJlc2l6ZSA9ICh7IHJlY3RhbmdsZSB9KSA9PlxuICAgICAgcmVzaXplSGVscGVyLnZhbGlkYXRlUmVzaXplKHsgcmVjdGFuZ2xlIH0pO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHJlc2l6aW5nKFxuICAgIHdlZWtFdmVudDogV2Vla1ZpZXdFdmVudCxcbiAgICByZXNpemVFdmVudDogUmVzaXplRXZlbnQsXG4gICAgZGF5V2lkdGg6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50UmVzaXplOiBXZWVrVmlld0V2ZW50UmVzaXplID0gdGhpcy5jdXJyZW50UmVzaXplcy5nZXQoXG4gICAgICB3ZWVrRXZlbnRcbiAgICApO1xuXG4gICAgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQpIHtcbiAgICAgIGNvbnN0IGRpZmY6IG51bWJlciA9IE1hdGgucm91bmQoK3Jlc2l6ZUV2ZW50LmVkZ2VzLmxlZnQgLyBkYXlXaWR0aCk7XG4gICAgICB3ZWVrRXZlbnQub2Zmc2V0ID0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbE9mZnNldCArIGRpZmY7XG4gICAgICB3ZWVrRXZlbnQuc3BhbiA9IGN1cnJlbnRSZXNpemUub3JpZ2luYWxTcGFuIC0gZGlmZjtcbiAgICB9IGVsc2UgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLnJpZ2h0KSB7XG4gICAgICBjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLnJvdW5kKCtyZXNpemVFdmVudC5lZGdlcy5yaWdodCAvIGRheVdpZHRoKTtcbiAgICAgIHdlZWtFdmVudC5zcGFuID0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW4gKyBkaWZmO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICByZXNpemVFbmRlZCh3ZWVrRXZlbnQ6IFdlZWtWaWV3RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50UmVzaXplOiBXZWVrVmlld0V2ZW50UmVzaXplID0gdGhpcy5jdXJyZW50UmVzaXplcy5nZXQoXG4gICAgICB3ZWVrRXZlbnRcbiAgICApO1xuXG4gICAgbGV0IGRheXNEaWZmOiBudW1iZXI7XG4gICAgaWYgKGN1cnJlbnRSZXNpemUuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICBkYXlzRGlmZiA9IHdlZWtFdmVudC5vZmZzZXQgLSBjdXJyZW50UmVzaXplLm9yaWdpbmFsT2Zmc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlzRGlmZiA9IHdlZWtFdmVudC5zcGFuIC0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbFNwYW47XG4gICAgfVxuXG4gICAgd2Vla0V2ZW50Lm9mZnNldCA9IGN1cnJlbnRSZXNpemUub3JpZ2luYWxPZmZzZXQ7XG4gICAgd2Vla0V2ZW50LnNwYW4gPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsU3BhbjtcblxuICAgIGxldCBuZXdTdGFydDogRGF0ZSA9IHdlZWtFdmVudC5ldmVudC5zdGFydDtcbiAgICBsZXQgbmV3RW5kOiBEYXRlID0gd2Vla0V2ZW50LmV2ZW50LmVuZDtcbiAgICBpZiAoY3VycmVudFJlc2l6ZS5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgIG5ld1N0YXJ0ID0gYWRkRGF5cyhuZXdTdGFydCwgZGF5c0RpZmYpO1xuICAgIH0gZWxzZSBpZiAobmV3RW5kKSB7XG4gICAgICBuZXdFbmQgPSBhZGREYXlzKG5ld0VuZCwgZGF5c0RpZmYpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7IG5ld1N0YXJ0LCBuZXdFbmQsIGV2ZW50OiB3ZWVrRXZlbnQuZXZlbnQgfSk7XG4gICAgdGhpcy5jdXJyZW50UmVzaXplcy5kZWxldGUod2Vla0V2ZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBldmVudERyYWdnZWQoXG4gICAgd2Vla0V2ZW50OiBXZWVrVmlld0V2ZW50LFxuICAgIGRyYWdnZWRCeVB4OiBudW1iZXIsXG4gICAgZGF5V2lkdGg6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb25zdCBkYXlzRHJhZ2dlZDogbnVtYmVyID0gZHJhZ2dlZEJ5UHggLyBkYXlXaWR0aDtcbiAgICBjb25zdCBuZXdTdGFydDogRGF0ZSA9IGFkZERheXMod2Vla0V2ZW50LmV2ZW50LnN0YXJ0LCBkYXlzRHJhZ2dlZCk7XG4gICAgbGV0IG5ld0VuZDogRGF0ZTtcbiAgICBpZiAod2Vla0V2ZW50LmV2ZW50LmVuZCkge1xuICAgICAgbmV3RW5kID0gYWRkRGF5cyh3ZWVrRXZlbnQuZXZlbnQuZW5kLCBkYXlzRHJhZ2dlZCk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHsgbmV3U3RhcnQsIG5ld0VuZCwgZXZlbnQ6IHdlZWtFdmVudC5ldmVudCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBnZXREYXlDb2x1bW5XaWR0aChldmVudFJvd0NvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGV2ZW50Um93Q29udGFpbmVyLm9mZnNldFdpZHRoIC8gdGhpcy5kYXlzLmxlbmd0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZHJhZ1N0YXJ0KHdlZWtWaWV3Q29udGFpbmVyOiBIVE1MRWxlbWVudCwgZXZlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5kYXlDb2x1bW5XaWR0aCA9IHRoaXMuZ2V0RGF5Q29sdW1uV2lkdGgod2Vla1ZpZXdDb250YWluZXIpO1xuICAgIGNvbnN0IGRyYWdIZWxwZXI6IENhbGVuZGFyRHJhZ0hlbHBlciA9IG5ldyBDYWxlbmRhckRyYWdIZWxwZXIoXG4gICAgICB3ZWVrVmlld0NvbnRhaW5lcixcbiAgICAgIGV2ZW50XG4gICAgKTtcbiAgICB0aGlzLnZhbGlkYXRlRHJhZyA9ICh7IHgsIHkgfSkgPT5cbiAgICAgIHRoaXMuY3VycmVudFJlc2l6ZXMuc2l6ZSA9PT0gMCAmJiBkcmFnSGVscGVyLnZhbGlkYXRlRHJhZyh7IHgsIHkgfSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hIZWFkZXIoKTogdm9pZCB7XG4gICAgdGhpcy5kYXlzID0gdGhpcy51dGlscy5nZXRXZWVrVmlld0hlYWRlcih7XG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICAgIHdlZWtlbmREYXlzOiB0aGlzLndlZWtlbmREYXlzXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0QmVmb3JlVmlld1JlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQm9keSgpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLnV0aWxzLmdldFdlZWtWaWV3KHtcbiAgICAgIGV2ZW50czogdGhpcy5ldmVudHMsXG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICAgIHByZWNpc2lvbjogdGhpcy5wcmVjaXNpb24sXG4gICAgICBhYnNvbHV0ZVBvc2l0aW9uZWRFdmVudHM6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmVtaXRCZWZvcmVWaWV3UmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0QmVmb3JlVmlld1JlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kYXlzICYmIHRoaXMudmlldykge1xuICAgICAgdGhpcy5iZWZvcmVWaWV3UmVuZGVyLmVtaXQoe1xuICAgICAgICBoZWFkZXI6IHRoaXMuZGF5cyxcbiAgICAgICAgcGVyaW9kOiB0aGlzLnZpZXcucGVyaW9kXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQsIFdlZWtEYXkgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyB0cmFja0J5V2Vla0RheUhlYWRlckRhdGUgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci13ZWVrLXZpZXctaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1kYXlzPVwiZGF5c1wiXG4gICAgICBsZXQtbG9jYWxlPVwibG9jYWxlXCJcbiAgICAgIGxldC1kYXlIZWFkZXJDbGlja2VkPVwiZGF5SGVhZGVyQ2xpY2tlZFwiXG4gICAgICBsZXQtZXZlbnREcm9wcGVkPVwiZXZlbnREcm9wcGVkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsLWRheS1oZWFkZXJzXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNhbC1oZWFkZXJcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5czsgdHJhY2tCeTp0cmFja0J5V2Vla0RheUhlYWRlckRhdGVcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtcGFzdF09XCJkYXkuaXNQYXN0XCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXRvZGF5XT1cImRheS5pc1RvZGF5XCJcbiAgICAgICAgICBbY2xhc3MuY2FsLWZ1dHVyZV09XCJkYXkuaXNGdXR1cmVcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtd2Vla2VuZF09XCJkYXkuaXNXZWVrZW5kXCJcbiAgICAgICAgICBbY2xhc3MuY2FsLWRyYWctb3Zlcl09XCJkYXkuZHJhZ092ZXJcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImRheS5jc3NDbGFzc1wiXG4gICAgICAgICAgKG13bENsaWNrKT1cImRheUhlYWRlckNsaWNrZWQuZW1pdCh7ZGF5OiBkYXl9KVwiXG4gICAgICAgICAgbXdsRHJvcHBhYmxlXG4gICAgICAgICAgKGRyYWdFbnRlcik9XCJkYXkuZHJhZ092ZXIgPSB0cnVlXCJcbiAgICAgICAgICAoZHJhZ0xlYXZlKT1cImRheS5kcmFnT3ZlciA9IGZhbHNlXCJcbiAgICAgICAgICAoZHJvcCk9XCJkYXkuZHJhZ092ZXIgPSBmYWxzZTsgZXZlbnREcm9wcGVkLmVtaXQoe2V2ZW50OiAkZXZlbnQuZHJvcERhdGEuZXZlbnQsIG5ld1N0YXJ0OiBkYXkuZGF0ZX0pXCI+XG4gICAgICAgICAgPGI+e3sgZGF5LmRhdGUgfCBjYWxlbmRhckRhdGU6J3dlZWtWaWV3Q29sdW1uSGVhZGVyJzpsb2NhbGUgfX08L2I+PGJyPlxuICAgICAgICAgIDxzcGFuPnt7IGRheS5kYXRlIHwgY2FsZW5kYXJEYXRlOid3ZWVrVmlld0NvbHVtblN1YkhlYWRlcic6bG9jYWxlIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntkYXlzOiBkYXlzLCBsb2NhbGU6IGxvY2FsZSwgZGF5SGVhZGVyQ2xpY2tlZDogZGF5SGVhZGVyQ2xpY2tlZCwgZXZlbnREcm9wcGVkOiBldmVudERyb3BwZWR9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3SGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGF5czogV2Vla0RheVtdO1xuXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBkYXlIZWFkZXJDbGlja2VkOiBFdmVudEVtaXR0ZXI8eyBkYXk6IFdlZWtEYXkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBkYXk6IFdlZWtEYXk7XG4gIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIGV2ZW50RHJvcHBlZDogRXZlbnRFbWl0dGVyPHtcbiAgICBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgICBuZXdTdGFydDogRGF0ZTtcbiAgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7IG5ld1N0YXJ0OiBEYXRlIH0+KCk7XG5cbiAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlID0gdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2Vla1ZpZXdFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ldmVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtd2Vla0V2ZW50PVwid2Vla0V2ZW50XCJcbiAgICAgIGxldC10b29sdGlwUGxhY2VtZW50PVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICBsZXQtZXZlbnRDbGlja2VkPVwiZXZlbnRDbGlja2VkXCJcbiAgICAgIGxldC10b29sdGlwVGVtcGxhdGU9XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgbGV0LXRvb2x0aXBBcHBlbmRUb0JvZHk9XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWV2ZW50XCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJ3ZWVrRXZlbnQuZXZlbnQuY29sb3I/LnNlY29uZGFyeVwiXG4gICAgICAgIFtzdHlsZS5ib3JkZXJDb2xvcl09XCJ3ZWVrRXZlbnQuZXZlbnQuY29sb3I/LnByaW1hcnlcIlxuICAgICAgICBbbXdsQ2FsZW5kYXJUb29sdGlwXT1cIndlZWtFdmVudC5ldmVudC50aXRsZSB8IGNhbGVuZGFyRXZlbnRUaXRsZTond2Vla1Rvb2x0aXAnOndlZWtFdmVudC5ldmVudFwiXG4gICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICBbdG9vbHRpcEV2ZW50XT1cIndlZWtFdmVudC5ldmVudFwiXG4gICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgW3Rvb2x0aXBBcHBlbmRUb0JvZHldPVwidG9vbHRpcEFwcGVuZFRvQm9keVwiPlxuICAgICAgICA8bXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnMgW2V2ZW50XT1cIndlZWtFdmVudC5ldmVudFwiPjwvbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnM+XG4gICAgICAgICZuZ3NwO1xuICAgICAgICA8bXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlXG4gICAgICAgICAgW2V2ZW50XT1cIndlZWtFdmVudC5ldmVudFwiXG4gICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgdmlldz1cIndlZWtcIlxuICAgICAgICAgIChtd2xDbGljayk9XCJldmVudENsaWNrZWQuZW1pdCgpXCI+XG4gICAgICAgIDwvbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICB3ZWVrRXZlbnQ6IHdlZWtFdmVudCxcbiAgICAgICAgdG9vbHRpcFBsYWNlbWVudDogdG9vbHRpcFBsYWNlbWVudCxcbiAgICAgICAgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWQsXG4gICAgICAgIHRvb2x0aXBUZW1wbGF0ZTogdG9vbHRpcFRlbXBsYXRlLFxuICAgICAgICB0b29sdGlwQXBwZW5kVG9Cb2R5OiB0b29sdGlwQXBwZW5kVG9Cb2R5XG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3RXZlbnRDb21wb25lbnQge1xuICBASW5wdXQoKSB3ZWVrRXZlbnQ6IFdlZWtWaWV3RXZlbnQ7XG5cbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHRvb2x0aXBBcHBlbmRUb0JvZHk6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVzaXphYmxlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1yZXNpemFibGUtZWxlbWVudCc7XG5pbXBvcnQgeyBEcmFnQW5kRHJvcE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZSc7XG5pbXBvcnQgeyBDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci13ZWVrLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyV2Vla1ZpZXdIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXdlZWstdmlldy1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyV2Vla1ZpZXdFdmVudENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItd2Vlay12aWV3LWV2ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckNvbW1vbk1vZHVsZSB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci1jb21tb24ubW9kdWxlJztcblxuZXhwb3J0IHtcbiAgQ2FsZW5kYXJXZWVrVmlld0NvbXBvbmVudCxcbiAgQ2FsZW5kYXJXZWVrVmlld0JlZm9yZVJlbmRlckV2ZW50XG59IGZyb20gJy4vY2FsZW5kYXItd2Vlay12aWV3LmNvbXBvbmVudCc7XG5leHBvcnQge1xuICBXZWVrVmlld0V2ZW50IGFzIENhbGVuZGFyV2Vla1ZpZXdFdmVudCxcbiAgV2Vla1ZpZXdFdmVudFJvdyBhcyBDYWxlbmRhcldlZWtWaWV3RXZlbnRSb3csXG4gIEdldFdlZWtWaWV3QXJncyBhcyBDYWxlbmRhckdldFdlZWtWaWV3QXJnc1xufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVzaXphYmxlTW9kdWxlLFxuICAgIERyYWdBbmREcm9wTW9kdWxlLFxuICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0hlYWRlckNvbXBvbmVudCxcbiAgICBDYWxlbmRhcldlZWtWaWV3RXZlbnRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJlc2l6YWJsZU1vZHVsZSxcbiAgICBEcmFnQW5kRHJvcE1vZHVsZSxcbiAgICBDYWxlbmRhcldlZWtWaWV3Q29tcG9uZW50LFxuICAgIENhbGVuZGFyV2Vla1ZpZXdIZWFkZXJDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0V2ZW50Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJXZWVrTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgTE9DQUxFX0lELFxuICBJbmplY3QsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbGVuZGFyRXZlbnQsXG4gIERheVZpZXcsXG4gIERheVZpZXdIb3VyLFxuICBEYXlWaWV3SG91clNlZ21lbnQsXG4gIERheVZpZXdFdmVudCxcbiAgVmlld1BlcmlvZFxufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlc2l6ZUV2ZW50IH0gZnJvbSAnYW5ndWxhci1yZXNpemFibGUtZWxlbWVudCc7XG5pbXBvcnQgYWRkTWludXRlcyBmcm9tICdkYXRlLWZucy9hZGRfbWludXRlcy9pbmRleCc7XG5pbXBvcnQgeyBDYWxlbmRhckRyYWdIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZHJhZy1oZWxwZXIucHJvdmlkZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJSZXNpemVIZWxwZXIgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItcmVzaXplLWhlbHBlci5wcm92aWRlcic7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItZXZlbnQtdGltZXMtY2hhbmdlZC1ldmVudC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FsZW5kYXJVdGlscyB9IGZyb20gJy4uL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5pbXBvcnQgeyB2YWxpZGF0ZUV2ZW50cywgdHJhY2tCeUV2ZW50SWQgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJEYXlWaWV3QmVmb3JlUmVuZGVyRXZlbnQge1xuICBib2R5OiB7XG4gICAgaG91ckdyaWQ6IERheVZpZXdIb3VyW107XG4gIH07XG4gIHBlcmlvZDogVmlld1BlcmlvZDtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IE1JTlVURVNfSU5fSE9VUjogbnVtYmVyID0gNjA7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdFdmVudFJlc2l6ZSB7XG4gIG9yaWdpbmFsVG9wOiBudW1iZXI7XG4gIG9yaWdpbmFsSGVpZ2h0OiBudW1iZXI7XG4gIGVkZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBTaG93cyBhbGwgZXZlbnRzIG9uIGEgZ2l2ZW4gZGF5LiBFeGFtcGxlIHVzYWdlOlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIDxtd2wtY2FsZW5kYXItZGF5LXZpZXdcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCI+XG4gKiA8L213bC1jYWxlbmRhci1kYXktdmlldz5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItZGF5LXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYWwtZGF5LXZpZXdcIiAjZGF5Vmlld0NvbnRhaW5lcj5cbiAgICAgIDxtd2wtY2FsZW5kYXItYWxsLWRheS1ldmVudFxuICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnQgb2Ygdmlldy5hbGxEYXlFdmVudHM7IHRyYWNrQnk6dHJhY2tCeUV2ZW50SWRcIlxuICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiYWxsRGF5RXZlbnRUZW1wbGF0ZVwiXG4gICAgICAgIFtldmVudFRpdGxlVGVtcGxhdGVdPVwiZXZlbnRUaXRsZVRlbXBsYXRlXCJcbiAgICAgICAgKGV2ZW50Q2xpY2tlZCk9XCJldmVudENsaWNrZWQuZW1pdCh7ZXZlbnQ6IGV2ZW50fSlcIj5cbiAgICAgIDwvbXdsLWNhbGVuZGFyLWFsbC1kYXktZXZlbnQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsLWhvdXItcm93c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWV2ZW50c1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICNldmVudFxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGRheUV2ZW50IG9mIHZpZXc/LmV2ZW50czsgdHJhY2tCeTp0cmFja0J5RGF5RXZlbnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnQtY29udGFpbmVyXCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWwtZHJhZ2dhYmxlXT1cImRheUV2ZW50LmV2ZW50LmRyYWdnYWJsZVwiXG4gICAgICAgICAgICBbY2xhc3MuY2FsLXN0YXJ0cy13aXRoaW4tZGF5XT1cIiFkYXlFdmVudC5zdGFydHNCZWZvcmVEYXlcIlxuICAgICAgICAgICAgW2NsYXNzLmNhbC1lbmRzLXdpdGhpbi1kYXldPVwiIWRheUV2ZW50LmVuZHNBZnRlckRheVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJkYXlFdmVudC5ldmVudC5jc3NDbGFzc1wiXG4gICAgICAgICAgICBtd2xSZXNpemFibGVcbiAgICAgICAgICAgIFtyZXNpemVFZGdlc109XCJ7dG9wOiBkYXlFdmVudC5ldmVudD8ucmVzaXphYmxlPy5iZWZvcmVTdGFydCwgYm90dG9tOiBkYXlFdmVudC5ldmVudD8ucmVzaXphYmxlPy5hZnRlckVuZH1cIlxuICAgICAgICAgICAgW3Jlc2l6ZVNuYXBHcmlkXT1cInt0b3A6IGV2ZW50U25hcFNpemUsIGJvdHRvbTogZXZlbnRTbmFwU2l6ZX1cIlxuICAgICAgICAgICAgW3ZhbGlkYXRlUmVzaXplXT1cInZhbGlkYXRlUmVzaXplXCJcbiAgICAgICAgICAgIChyZXNpemVTdGFydCk9XCJyZXNpemVTdGFydGVkKGRheUV2ZW50LCAkZXZlbnQsIGRheVZpZXdDb250YWluZXIpXCJcbiAgICAgICAgICAgIChyZXNpemluZyk9XCJyZXNpemluZyhkYXlFdmVudCwgJGV2ZW50KVwiXG4gICAgICAgICAgICAocmVzaXplRW5kKT1cInJlc2l6ZUVuZGVkKGRheUV2ZW50KVwiXG4gICAgICAgICAgICBtd2xEcmFnZ2FibGVcbiAgICAgICAgICAgIFtkcmFnQXhpc109XCJ7eDogZmFsc2UsIHk6IGRheUV2ZW50LmV2ZW50LmRyYWdnYWJsZSAmJiBjdXJyZW50UmVzaXplcy5zaXplID09PSAwfVwiXG4gICAgICAgICAgICBbZHJhZ1NuYXBHcmlkXT1cInt5OiBldmVudFNuYXBTaXplfVwiXG4gICAgICAgICAgICBbdmFsaWRhdGVEcmFnXT1cInZhbGlkYXRlRHJhZ1wiXG4gICAgICAgICAgICAoZHJhZ1BvaW50ZXJEb3duKT1cImRyYWdTdGFydChldmVudCwgZGF5Vmlld0NvbnRhaW5lcilcIlxuICAgICAgICAgICAgKGRyYWdFbmQpPVwiZXZlbnREcmFnZ2VkKGRheUV2ZW50LCAkZXZlbnQueSlcIlxuICAgICAgICAgICAgW3N0eWxlLm1hcmdpblRvcC5weF09XCJkYXlFdmVudC50b3BcIlxuICAgICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJkYXlFdmVudC5oZWlnaHRcIlxuICAgICAgICAgICAgW3N0eWxlLm1hcmdpbkxlZnQucHhdPVwiZGF5RXZlbnQubGVmdCArIDcwXCJcbiAgICAgICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJkYXlFdmVudC53aWR0aCAtIDFcIj5cbiAgICAgICAgICAgIDxtd2wtY2FsZW5kYXItZGF5LXZpZXctZXZlbnRcbiAgICAgICAgICAgICAgW2RheUV2ZW50XT1cImRheUV2ZW50XCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBQbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgICAgICAgIFt0b29sdGlwVGVtcGxhdGVdPVwidG9vbHRpcFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBBcHBlbmRUb0JvZHldPVwidG9vbHRpcEFwcGVuZFRvQm9keVwiXG4gICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJldmVudFRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgW2V2ZW50VGl0bGVUZW1wbGF0ZV09XCJldmVudFRpdGxlVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cImV2ZW50Q2xpY2tlZC5lbWl0KHtldmVudDogZGF5RXZlbnQuZXZlbnR9KVwiPlxuICAgICAgICAgICAgPC9td2wtY2FsZW5kYXItZGF5LXZpZXctZXZlbnQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWhvdXJcIiAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3VyczsgdHJhY2tCeTp0cmFja0J5SG91clwiIFtzdHlsZS5taW5XaWR0aC5weF09XCJ2aWV3Py53aWR0aCArIDcwXCI+XG4gICAgICAgICAgPG13bC1jYWxlbmRhci1kYXktdmlldy1ob3VyLXNlZ21lbnRcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBzZWdtZW50IG9mIGhvdXIuc2VnbWVudHM7IHRyYWNrQnk6dHJhY2tCeUhvdXJTZWdtZW50XCJcbiAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiaG91clNlZ21lbnRIZWlnaHRcIlxuICAgICAgICAgICAgW3NlZ21lbnRdPVwic2VnbWVudFwiXG4gICAgICAgICAgICBbc2VnbWVudEhlaWdodF09XCJob3VyU2VnbWVudEhlaWdodFwiXG4gICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiaG91clNlZ21lbnRUZW1wbGF0ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiaG91clNlZ21lbnRDbGlja2VkLmVtaXQoe2RhdGU6IHNlZ21lbnQuZGF0ZX0pXCJcbiAgICAgICAgICAgIFtjbGFzcy5jYWwtZHJhZy1vdmVyXT1cInNlZ21lbnQuZHJhZ092ZXJcIlxuICAgICAgICAgICAgbXdsRHJvcHBhYmxlXG4gICAgICAgICAgICAoZHJhZ0VudGVyKT1cInNlZ21lbnQuZHJhZ092ZXIgPSB0cnVlXCJcbiAgICAgICAgICAgIChkcmFnTGVhdmUpPVwic2VnbWVudC5kcmFnT3ZlciA9IGZhbHNlXCJcbiAgICAgICAgICAgIChkcm9wKT1cInNlZ21lbnQuZHJhZ092ZXIgPSBmYWxzZTsgZXZlbnREcm9wcGVkKCRldmVudCwgc2VnbWVudClcIj5cbiAgICAgICAgICA8L213bC1jYWxlbmRhci1kYXktdmlldy1ob3VyLXNlZ21lbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXlWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3XG4gICAqIFRoZSBzY2hlbWEgaXMgYXZhaWxhYmxlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jYWxlbmRhci11dGlscy9ibG9iL2M1MTY4OTk4NWY1OWEyNzE5NDBlMzBiYzRlMmM0ZTFmZWUzZmNiNWMvc3JjL2NhbGVuZGFyVXRpbHMudHMjTDQ5LUw2M1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBzZWdtZW50cyBpbiBhbiBob3VyLiBNdXN0IGJlIDw9IDZcbiAgICovXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50czogbnVtYmVyID0gMjtcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBpbiBwaXhlbHMgb2YgZWFjaCBob3VyIHNlZ21lbnRcbiAgICovXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50SGVpZ2h0OiBudW1iZXIgPSAzMDtcblxuICAvKipcbiAgICogVGhlIGRheSBzdGFydCBob3VycyBpbiAyNCBob3VyIHRpbWUuIE11c3QgYmUgMC0yM1xuICAgKi9cbiAgQElucHV0KCkgZGF5U3RhcnRIb3VyOiBudW1iZXIgPSAwO1xuXG4gIC8qKlxuICAgKiBUaGUgZGF5IHN0YXJ0IG1pbnV0ZXMuIE11c3QgYmUgMC01OVxuICAgKi9cbiAgQElucHV0KCkgZGF5U3RhcnRNaW51dGU6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgZW5kIGhvdXJzIGluIDI0IGhvdXIgdGltZS4gTXVzdCBiZSAwLTIzXG4gICAqL1xuICBASW5wdXQoKSBkYXlFbmRIb3VyOiBudW1iZXIgPSAyMztcblxuICAvKipcbiAgICogVGhlIGRheSBlbmQgbWludXRlcy4gTXVzdCBiZSAwLTU5XG4gICAqL1xuICBASW5wdXQoKSBkYXlFbmRNaW51dGU6IG51bWJlciA9IDU5O1xuXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggaW4gcGl4ZWxzIG9mIGVhY2ggZXZlbnQgb24gdGhlIHZpZXdcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50V2lkdGg6IG51bWJlciA9IDE1MDtcblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IHdoZW4gZW1pdHRlZCBvbiB3aWxsIHJlLXJlbmRlciB0aGUgY3VycmVudCB2aWV3XG4gICAqL1xuICBASW5wdXQoKSByZWZyZXNoOiBTdWJqZWN0PGFueT47XG5cbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgdXNlZCB0byBmb3JtYXQgZGF0ZXNcbiAgICovXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZ3JpZCBzaXplIHRvIHNuYXAgcmVzaXppbmcgYW5kIGRyYWdnaW5nIG9mIGV2ZW50cyB0b1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRTbmFwU2l6ZTogbnVtYmVyID0gdGhpcy5ob3VyU2VnbWVudEhlaWdodDtcblxuICAvKipcbiAgICogVGhlIHBsYWNlbWVudCBvZiB0aGUgZXZlbnQgdG9vbHRpcFxuICAgKi9cbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogc3RyaW5nID0gJ3RvcCc7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIGV2ZW50IHRvb2x0aXBzXG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gYXBwZW5kIHRvb2x0aXBzIHRvIHRoZSBib2R5IG9yIG5leHQgdG8gdGhlIHRyaWdnZXIgZWxlbWVudFxuICAgKi9cbiAgQElucHV0KCkgdG9vbHRpcEFwcGVuZFRvQm9keTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBob3VyIHNlZ21lbnRcbiAgICovXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgYWxsIGRheSBldmVudHNcbiAgICovXG4gIEBJbnB1dCgpIGFsbERheUV2ZW50VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZGF5IHZpZXcgZXZlbnRzXG4gICAqL1xuICBASW5wdXQoKSBldmVudFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIGV2ZW50IHRpdGxlc1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGhvdXIgc2VnbWVudCBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgaG91clNlZ21lbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZGF0ZTogRGF0ZTtcbiAgfT4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW4gZXZlbnQgaXMgcmVzaXplZCBvciBkcmFnZ2VkIGFuZCBkcm9wcGVkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRUaW1lc0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudD4oKTtcblxuICAvKipcbiAgICogQW4gb3V0cHV0IHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIHRoZSB2aWV3IGlzIHJlbmRlcmVkIGZvciB0aGUgY3VycmVudCBkYXkuXG4gICAqIElmIHlvdSBhZGQgdGhlIGBjc3NDbGFzc2AgcHJvcGVydHkgdG8gYW4gaG91ciBncmlkIHNlZ21lbnQgaXQgd2lsbCBhZGQgdGhhdCBjbGFzcyB0byB0aGUgaG91ciBzZWdtZW50IGluIHRoZSB0ZW1wbGF0ZVxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGJlZm9yZVZpZXdSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyRGF5Vmlld0JlZm9yZVJlbmRlckV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBob3VyczogRGF5Vmlld0hvdXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2aWV3OiBEYXlWaWV3O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB3aWR0aDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcmVmcmVzaFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjdXJyZW50UmVzaXplczogTWFwPERheVZpZXdFdmVudCwgRGF5Vmlld0V2ZW50UmVzaXplPiA9IG5ldyBNYXAoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdmFsaWRhdGVEcmFnOiAoYXJnczogYW55KSA9PiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2YWxpZGF0ZVJlc2l6ZTogKGFyZ3M6IGFueSkgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeUV2ZW50SWQgPSB0cmFja0J5RXZlbnRJZDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeURheUV2ZW50ID0gKGluZGV4OiBudW1iZXIsIGRheUV2ZW50OiBEYXlWaWV3RXZlbnQpID0+XG4gICAgZGF5RXZlbnQuZXZlbnQuaWQgPyBkYXlFdmVudC5ldmVudC5pZCA6IGRheUV2ZW50LmV2ZW50O1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0cmFja0J5SG91ciA9IChpbmRleDogbnVtYmVyLCBob3VyOiBEYXlWaWV3SG91cikgPT5cbiAgICBob3VyLnNlZ21lbnRzWzBdLmRhdGUudG9JU09TdHJpbmcoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeUhvdXJTZWdtZW50ID0gKGluZGV4OiBudW1iZXIsIHNlZ21lbnQ6IERheVZpZXdIb3VyU2VnbWVudCkgPT5cbiAgICBzZWdtZW50LmRhdGUudG9JU09TdHJpbmcoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdXRpbHM6IENhbGVuZGFyVXRpbHMsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIGxvY2FsZTogc3RyaW5nXG4gICkge1xuICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbiA9IHRoaXMucmVmcmVzaC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlZnJlc2hBbGwoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5yZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIGNoYW5nZXMudmlld0RhdGUgfHxcbiAgICAgIGNoYW5nZXMuZGF5U3RhcnRIb3VyIHx8XG4gICAgICBjaGFuZ2VzLmRheVN0YXJ0TWludXRlIHx8XG4gICAgICBjaGFuZ2VzLmRheUVuZEhvdXIgfHxcbiAgICAgIGNoYW5nZXMuZGF5RW5kTWludXRlIHx8XG4gICAgICBjaGFuZ2VzLmhvdXJTZWdtZW50c1xuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoSG91ckdyaWQoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5ldmVudHMpIHtcbiAgICAgIHZhbGlkYXRlRXZlbnRzKHRoaXMuZXZlbnRzKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLnZpZXdEYXRlIHx8XG4gICAgICBjaGFuZ2VzLmV2ZW50cyB8fFxuICAgICAgY2hhbmdlcy5kYXlTdGFydEhvdXIgfHxcbiAgICAgIGNoYW5nZXMuZGF5U3RhcnRNaW51dGUgfHxcbiAgICAgIGNoYW5nZXMuZGF5RW5kSG91ciB8fFxuICAgICAgY2hhbmdlcy5kYXlFbmRNaW51dGUgfHxcbiAgICAgIGNoYW5nZXMuZXZlbnRXaWR0aFxuICAgICkge1xuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIGV2ZW50RHJvcHBlZChcbiAgICBkcm9wRXZlbnQ6IHsgZHJvcERhdGE/OiB7IGV2ZW50PzogQ2FsZW5kYXJFdmVudCB9IH0sXG4gICAgc2VnbWVudDogRGF5Vmlld0hvdXJTZWdtZW50XG4gICk6IHZvaWQge1xuICAgIGlmIChkcm9wRXZlbnQuZHJvcERhdGEgJiYgZHJvcEV2ZW50LmRyb3BEYXRhLmV2ZW50KSB7XG4gICAgICB0aGlzLmV2ZW50VGltZXNDaGFuZ2VkLmVtaXQoe1xuICAgICAgICBldmVudDogZHJvcEV2ZW50LmRyb3BEYXRhLmV2ZW50LFxuICAgICAgICBuZXdTdGFydDogc2VnbWVudC5kYXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXNpemVTdGFydGVkKFxuICAgIGV2ZW50OiBEYXlWaWV3RXZlbnQsXG4gICAgcmVzaXplRXZlbnQ6IFJlc2l6ZUV2ZW50LFxuICAgIGRheVZpZXdDb250YWluZXI6IEhUTUxFbGVtZW50XG4gICk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudFJlc2l6ZXMuc2V0KGV2ZW50LCB7XG4gICAgICBvcmlnaW5hbFRvcDogZXZlbnQudG9wLFxuICAgICAgb3JpZ2luYWxIZWlnaHQ6IGV2ZW50LmhlaWdodCxcbiAgICAgIGVkZ2U6IHR5cGVvZiByZXNpemVFdmVudC5lZGdlcy50b3AgIT09ICd1bmRlZmluZWQnID8gJ3RvcCcgOiAnYm90dG9tJ1xuICAgIH0pO1xuICAgIGNvbnN0IHJlc2l6ZUhlbHBlcjogQ2FsZW5kYXJSZXNpemVIZWxwZXIgPSBuZXcgQ2FsZW5kYXJSZXNpemVIZWxwZXIoXG4gICAgICBkYXlWaWV3Q29udGFpbmVyXG4gICAgKTtcbiAgICB0aGlzLnZhbGlkYXRlUmVzaXplID0gKHsgcmVjdGFuZ2xlIH0pID0+XG4gICAgICByZXNpemVIZWxwZXIudmFsaWRhdGVSZXNpemUoeyByZWN0YW5nbGUgfSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZXNpemluZyhldmVudDogRGF5Vmlld0V2ZW50LCByZXNpemVFdmVudDogUmVzaXplRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50UmVzaXplOiBEYXlWaWV3RXZlbnRSZXNpemUgPSB0aGlzLmN1cnJlbnRSZXNpemVzLmdldChldmVudCk7XG4gICAgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLnRvcCkge1xuICAgICAgZXZlbnQudG9wID0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbFRvcCArICtyZXNpemVFdmVudC5lZGdlcy50b3A7XG4gICAgICBldmVudC5oZWlnaHQgPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsSGVpZ2h0IC0gK3Jlc2l6ZUV2ZW50LmVkZ2VzLnRvcDtcbiAgICB9IGVsc2UgaWYgKHJlc2l6ZUV2ZW50LmVkZ2VzLmJvdHRvbSkge1xuICAgICAgZXZlbnQuaGVpZ2h0ID0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodCArICtyZXNpemVFdmVudC5lZGdlcy5ib3R0b207XG4gICAgfVxuICB9XG5cbiAgcmVzaXplRW5kZWQoZGF5RXZlbnQ6IERheVZpZXdFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRSZXNpemU6IERheVZpZXdFdmVudFJlc2l6ZSA9IHRoaXMuY3VycmVudFJlc2l6ZXMuZ2V0KGRheUV2ZW50KTtcblxuICAgIGxldCBwaXhlbHNNb3ZlZDogbnVtYmVyO1xuICAgIGlmIChjdXJyZW50UmVzaXplLmVkZ2UgPT09ICd0b3AnKSB7XG4gICAgICBwaXhlbHNNb3ZlZCA9IGRheUV2ZW50LnRvcCAtIGN1cnJlbnRSZXNpemUub3JpZ2luYWxUb3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBpeGVsc01vdmVkID0gZGF5RXZlbnQuaGVpZ2h0IC0gY3VycmVudFJlc2l6ZS5vcmlnaW5hbEhlaWdodDtcbiAgICB9XG5cbiAgICBkYXlFdmVudC50b3AgPSBjdXJyZW50UmVzaXplLm9yaWdpbmFsVG9wO1xuICAgIGRheUV2ZW50LmhlaWdodCA9IGN1cnJlbnRSZXNpemUub3JpZ2luYWxIZWlnaHQ7XG5cbiAgICBjb25zdCBwaXhlbEFtb3VudEluTWludXRlczogbnVtYmVyID1cbiAgICAgIE1JTlVURVNfSU5fSE9VUiAvICh0aGlzLmhvdXJTZWdtZW50cyAqIHRoaXMuaG91clNlZ21lbnRIZWlnaHQpO1xuICAgIGNvbnN0IG1pbnV0ZXNNb3ZlZDogbnVtYmVyID0gcGl4ZWxzTW92ZWQgKiBwaXhlbEFtb3VudEluTWludXRlcztcbiAgICBsZXQgbmV3U3RhcnQ6IERhdGUgPSBkYXlFdmVudC5ldmVudC5zdGFydDtcbiAgICBsZXQgbmV3RW5kOiBEYXRlID0gZGF5RXZlbnQuZXZlbnQuZW5kO1xuICAgIGlmIChjdXJyZW50UmVzaXplLmVkZ2UgPT09ICd0b3AnKSB7XG4gICAgICBuZXdTdGFydCA9IGFkZE1pbnV0ZXMobmV3U3RhcnQsIG1pbnV0ZXNNb3ZlZCk7XG4gICAgfSBlbHNlIGlmIChuZXdFbmQpIHtcbiAgICAgIG5ld0VuZCA9IGFkZE1pbnV0ZXMobmV3RW5kLCBtaW51dGVzTW92ZWQpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRUaW1lc0NoYW5nZWQuZW1pdCh7IG5ld1N0YXJ0LCBuZXdFbmQsIGV2ZW50OiBkYXlFdmVudC5ldmVudCB9KTtcbiAgICB0aGlzLmN1cnJlbnRSZXNpemVzLmRlbGV0ZShkYXlFdmVudCk7XG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQ6IEhUTUxFbGVtZW50LCBkYXlWaWV3Q29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGRyYWdIZWxwZXI6IENhbGVuZGFyRHJhZ0hlbHBlciA9IG5ldyBDYWxlbmRhckRyYWdIZWxwZXIoXG4gICAgICBkYXlWaWV3Q29udGFpbmVyLFxuICAgICAgZXZlbnRcbiAgICApO1xuICAgIHRoaXMudmFsaWRhdGVEcmFnID0gKHsgeCwgeSB9KSA9PlxuICAgICAgdGhpcy5jdXJyZW50UmVzaXplcy5zaXplID09PSAwICYmIGRyYWdIZWxwZXIudmFsaWRhdGVEcmFnKHsgeCwgeSB9KTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGV2ZW50RHJhZ2dlZChkYXlFdmVudDogRGF5Vmlld0V2ZW50LCBkcmFnZ2VkSW5QaXhlbHM6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHBpeGVsQW1vdW50SW5NaW51dGVzOiBudW1iZXIgPVxuICAgICAgTUlOVVRFU19JTl9IT1VSIC8gKHRoaXMuaG91clNlZ21lbnRzICogdGhpcy5ob3VyU2VnbWVudEhlaWdodCk7XG4gICAgY29uc3QgbWludXRlc01vdmVkOiBudW1iZXIgPSBkcmFnZ2VkSW5QaXhlbHMgKiBwaXhlbEFtb3VudEluTWludXRlcztcbiAgICBjb25zdCBuZXdTdGFydDogRGF0ZSA9IGFkZE1pbnV0ZXMoZGF5RXZlbnQuZXZlbnQuc3RhcnQsIG1pbnV0ZXNNb3ZlZCk7XG4gICAgbGV0IG5ld0VuZDogRGF0ZTtcbiAgICBpZiAoZGF5RXZlbnQuZXZlbnQuZW5kKSB7XG4gICAgICBuZXdFbmQgPSBhZGRNaW51dGVzKGRheUV2ZW50LmV2ZW50LmVuZCwgbWludXRlc01vdmVkKTtcbiAgICB9XG4gICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHsgbmV3U3RhcnQsIG5ld0VuZCwgZXZlbnQ6IGRheUV2ZW50LmV2ZW50IH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoSG91ckdyaWQoKTogdm9pZCB7XG4gICAgdGhpcy5ob3VycyA9IHRoaXMudXRpbHMuZ2V0RGF5Vmlld0hvdXJHcmlkKHtcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgaG91clNlZ21lbnRzOiB0aGlzLmhvdXJTZWdtZW50cyxcbiAgICAgIGRheVN0YXJ0OiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5U3RhcnRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5U3RhcnRNaW51dGVcbiAgICAgIH0sXG4gICAgICBkYXlFbmQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlFbmRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5RW5kTWludXRlXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5lbWl0QmVmb3JlVmlld1JlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLnV0aWxzLmdldERheVZpZXcoe1xuICAgICAgZXZlbnRzOiB0aGlzLmV2ZW50cyxcbiAgICAgIHZpZXdEYXRlOiB0aGlzLnZpZXdEYXRlLFxuICAgICAgaG91clNlZ21lbnRzOiB0aGlzLmhvdXJTZWdtZW50cyxcbiAgICAgIGRheVN0YXJ0OiB7XG4gICAgICAgIGhvdXI6IHRoaXMuZGF5U3RhcnRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5U3RhcnRNaW51dGVcbiAgICAgIH0sXG4gICAgICBkYXlFbmQ6IHtcbiAgICAgICAgaG91cjogdGhpcy5kYXlFbmRIb3VyLFxuICAgICAgICBtaW51dGU6IHRoaXMuZGF5RW5kTWludXRlXG4gICAgICB9LFxuICAgICAgZXZlbnRXaWR0aDogdGhpcy5ldmVudFdpZHRoLFxuICAgICAgc2VnbWVudEhlaWdodDogdGhpcy5ob3VyU2VnbWVudEhlaWdodFxuICAgIH0pO1xuICAgIHRoaXMuZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaEFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hIb3VyR3JpZCgpO1xuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaG91cnMgJiYgdGhpcy52aWV3KSB7XG4gICAgICB0aGlzLmJlZm9yZVZpZXdSZW5kZXIuZW1pdCh7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICBob3VyR3JpZDogdGhpcy5ob3Vyc1xuICAgICAgICB9LFxuICAgICAgICBwZXJpb2Q6IHRoaXMudmlldy5wZXJpb2RcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLWFsbC1kYXktZXZlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWV2ZW50PVwiZXZlbnRcIlxuICAgICAgbGV0LWV2ZW50Q2xpY2tlZD1cImV2ZW50Q2xpY2tlZFwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1hbGwtZGF5LWV2ZW50XCJcbiAgICAgICAgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJldmVudC5jb2xvcj8uc2Vjb25kYXJ5XCJcbiAgICAgICAgW3N0eWxlLmJvcmRlckNvbG9yXT1cImV2ZW50LmNvbG9yPy5wcmltYXJ5XCI+XG4gICAgICAgIDxtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyBbZXZlbnRdPVwiZXZlbnRcIj48L213bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zPlxuICAgICAgICAmbmdzcDtcbiAgICAgICAgPG13bC1jYWxlbmRhci1ldmVudC10aXRsZVxuICAgICAgICAgIFtldmVudF09XCJldmVudFwiXG4gICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgdmlldz1cImRheVwiXG4gICAgICAgICAgKG13bENsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KClcIj5cbiAgICAgICAgPC9td2wtY2FsZW5kYXItZXZlbnQtdGl0bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWRcbiAgICAgIH1cIj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQWxsRGF5RXZlbnRDb21wb25lbnQge1xuICBASW5wdXQoKSBldmVudDogQ2FsZW5kYXJFdmVudDtcblxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpIGV2ZW50Q2xpY2tlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF5Vmlld0hvdXJTZWdtZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItZGF5LXZpZXctaG91ci1zZWdtZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1zZWdtZW50PVwic2VnbWVudFwiXG4gICAgICBsZXQtbG9jYWxlPVwibG9jYWxlXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLWhvdXItc2VnbWVudFwiXG4gICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwic2VnbWVudEhlaWdodFwiXG4gICAgICAgIFtjbGFzcy5jYWwtaG91ci1zdGFydF09XCJzZWdtZW50LmlzU3RhcnRcIlxuICAgICAgICBbY2xhc3MuY2FsLWFmdGVyLWhvdXItc3RhcnRdPVwiIXNlZ21lbnQuaXNTdGFydFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cInNlZ21lbnQuY3NzQ2xhc3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC10aW1lXCI+XG4gICAgICAgICAge3sgc2VnbWVudC5kYXRlIHwgY2FsZW5kYXJEYXRlOidkYXlWaWV3SG91cic6bG9jYWxlIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBzZWdtZW50OiBzZWdtZW50LFxuICAgICAgICBsb2NhbGU6IGxvY2FsZVxuICAgICAgfVwiPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXlWaWV3SG91clNlZ21lbnRDb21wb25lbnQge1xuICBASW5wdXQoKSBzZWdtZW50OiBEYXlWaWV3SG91clNlZ21lbnQ7XG5cbiAgQElucHV0KCkgc2VnbWVudEhlaWdodDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF5Vmlld0V2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItZGF5LXZpZXctZXZlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWRheUV2ZW50PVwiZGF5RXZlbnRcIlxuICAgICAgbGV0LXRvb2x0aXBQbGFjZW1lbnQ9XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgIGxldC1ldmVudENsaWNrZWQ9XCJldmVudENsaWNrZWRcIlxuICAgICAgbGV0LXRvb2x0aXBUZW1wbGF0ZT1cInRvb2x0aXBUZW1wbGF0ZVwiXG4gICAgICBsZXQtdG9vbHRpcEFwcGVuZFRvQm9keT1cInRvb2x0aXBBcHBlbmRUb0JvZHlcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnRcIlxuICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImRheUV2ZW50LmV2ZW50LmNvbG9yPy5zZWNvbmRhcnlcIlxuICAgICAgICBbc3R5bGUuYm9yZGVyQ29sb3JdPVwiZGF5RXZlbnQuZXZlbnQuY29sb3I/LnByaW1hcnlcIlxuICAgICAgICBbbXdsQ2FsZW5kYXJUb29sdGlwXT1cImRheUV2ZW50LmV2ZW50LnRpdGxlIHwgY2FsZW5kYXJFdmVudFRpdGxlOidkYXlUb29sdGlwJzpkYXlFdmVudC5ldmVudFwiXG4gICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICBbdG9vbHRpcEV2ZW50XT1cImRheUV2ZW50LmV2ZW50XCJcbiAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICBbdG9vbHRpcEFwcGVuZFRvQm9keV09XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCI+XG4gICAgICAgIDxtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucyBbZXZlbnRdPVwiZGF5RXZlbnQuZXZlbnRcIj48L213bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zPlxuICAgICAgICAmbmdzcDtcbiAgICAgICAgPG13bC1jYWxlbmRhci1ldmVudC10aXRsZVxuICAgICAgICAgIFtldmVudF09XCJkYXlFdmVudC5ldmVudFwiXG4gICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgdmlldz1cImRheVwiXG4gICAgICAgICAgKG13bENsaWNrKT1cImV2ZW50Q2xpY2tlZC5lbWl0KClcIj5cbiAgICAgICAgPC9td2wtY2FsZW5kYXItZXZlbnQtdGl0bGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGRheUV2ZW50OiBkYXlFdmVudCxcbiAgICAgICAgdG9vbHRpcFBsYWNlbWVudDogdG9vbHRpcFBsYWNlbWVudCxcbiAgICAgICAgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWQsXG4gICAgICAgIHRvb2x0aXBUZW1wbGF0ZTogdG9vbHRpcFRlbXBsYXRlLFxuICAgICAgICB0b29sdGlwQXBwZW5kVG9Cb2R5OiB0b29sdGlwQXBwZW5kVG9Cb2R5XG4gICAgICB9XCI+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRheVZpZXdFdmVudENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRheUV2ZW50OiBEYXlWaWV3RXZlbnQ7XG5cbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHRvb2x0aXBBcHBlbmRUb0JvZHk6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIHRvb2x0aXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgZXZlbnRDbGlja2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVzaXphYmxlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1yZXNpemFibGUtZWxlbWVudCc7XG5pbXBvcnQgeyBEcmFnQW5kRHJvcE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZSc7XG5pbXBvcnQgeyBDYWxlbmRhckRheVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLWRheS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckFsbERheUV2ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci1hbGwtZGF5LWV2ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRheVZpZXdIb3VyU2VnbWVudENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZGF5LXZpZXctaG91ci1zZWdtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhckRheVZpZXdFdmVudENvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItZGF5LXZpZXctZXZlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuXG5leHBvcnQge1xuICBDYWxlbmRhckRheVZpZXdDb21wb25lbnQsXG4gIENhbGVuZGFyRGF5Vmlld0JlZm9yZVJlbmRlckV2ZW50XG59IGZyb20gJy4vY2FsZW5kYXItZGF5LXZpZXcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZXNpemFibGVNb2R1bGUsXG4gICAgRHJhZ0FuZERyb3BNb2R1bGUsXG4gICAgQ2FsZW5kYXJDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2FsZW5kYXJEYXlWaWV3Q29tcG9uZW50LFxuICAgIENhbGVuZGFyQWxsRGF5RXZlbnRDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJEYXlWaWV3SG91clNlZ21lbnRDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJEYXlWaWV3RXZlbnRDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJlc2l6YWJsZU1vZHVsZSxcbiAgICBEcmFnQW5kRHJvcE1vZHVsZSxcbiAgICBDYWxlbmRhckRheVZpZXdDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJBbGxEYXlFdmVudENvbXBvbmVudCxcbiAgICBDYWxlbmRhckRheVZpZXdIb3VyU2VnbWVudENvbXBvbmVudCxcbiAgICBDYWxlbmRhckRheVZpZXdFdmVudENvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRGF5TW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSGVscGVyIH0gZnJvbSAnYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlJztcbmltcG9ydCB7XG4gIENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICBDYWxlbmRhck1vZHVsZUNvbmZpZyxcbiAgQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyLFxuICBDYWxlbmRhckRhdGVGb3JtYXR0ZXIsXG4gIENhbGVuZGFyVXRpbHNcbn0gZnJvbSAnLi9jb21tb24vY2FsZW5kYXItY29tbW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoTW9kdWxlIH0gZnJvbSAnLi9tb250aC9jYWxlbmRhci1tb250aC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrTW9kdWxlIH0gZnJvbSAnLi93ZWVrL2NhbGVuZGFyLXdlZWsubW9kdWxlJztcbmltcG9ydCB7IENhbGVuZGFyRGF5TW9kdWxlIH0gZnJvbSAnLi9kYXkvY2FsZW5kYXItZGF5Lm1vZHVsZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tb250aC9jYWxlbmRhci1tb250aC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi93ZWVrL2NhbGVuZGFyLXdlZWsubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZGF5L2NhbGVuZGFyLWRheS5tb2R1bGUnO1xuXG4vKipcbiAqIFRoZSBtYWluIG1vZHVsZSBvZiB0aGlzIGxpYnJhcnkuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kZXJNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgQ2FsZW5kZXJNb2R1bGUuZm9yUm9vdCgpXG4gKiAgIF1cbiAqIH0pXG4gKiBjbGFzcyBNeU1vZHVsZSB7fVxuICogYGBgXG4gKlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FsZW5kYXJDb21tb25Nb2R1bGUsXG4gICAgQ2FsZW5kYXJNb250aE1vZHVsZSxcbiAgICBDYWxlbmRhcldlZWtNb2R1bGUsXG4gICAgQ2FsZW5kYXJEYXlNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICAgIENhbGVuZGFyTW9udGhNb2R1bGUsXG4gICAgQ2FsZW5kYXJXZWVrTW9kdWxlLFxuICAgIENhbGVuZGFyRGF5TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IENhbGVuZGFyTW9kdWxlQ29uZmlnID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhbGVuZGFyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERyYWdnYWJsZUhlbHBlcixcbiAgICAgICAgY29uZmlnLmV2ZW50VGl0bGVGb3JtYXR0ZXIgfHwgQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyLFxuICAgICAgICBjb25maWcuZGF0ZUZvcm1hdHRlciB8fCBDYWxlbmRhckRhdGVGb3JtYXR0ZXIsXG4gICAgICAgIGNvbmZpZy51dGlscyB8fCBDYWxlbmRhclV0aWxzXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInZhbGlkYXRlRXZlbnRzIiwidmFsaWRhdGVFdmVudHNXaXRob3V0TG9nIiwidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1PLHFCQUFNQSxnQkFBYyxHQUFHLFVBQUMsTUFBdUI7SUFDcEQscUJBQU0sSUFBSSxHQUFHO1FBQUMsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7UUFBSyxPQUFBLE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxZQUFNLGtCQUFrQixHQUFLLElBQUk7S0FBQyxDQUFDO0lBQ3BFLE9BQU9DLGNBQXdCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQy9DLENBQUM7Ozs7OztBQUVGLGtCQUF5QixLQUFpQixFQUFFLEtBQWlCO0lBQzNELFFBQ0UsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSTtRQUN4QixLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxLQUFLO1FBQ3pCLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUs7UUFDekIsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSztRQUMxQixLQUFLLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHO1FBQ3RCLEtBQUssQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU07UUFDekIsS0FBSyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTTtRQUN6QixLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQzVCO0NBQ0g7QUFFRCxBQUFPLHFCQUFNLGNBQWMsR0FBRyxVQUFDLEtBQWEsRUFBRSxLQUFvQjtJQUNoRSxPQUFBLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLO0NBQUEsQ0FBQztBQUU5QixBQUFPLHFCQUFNLHdCQUF3QixHQUFHLFVBQUMsS0FBYSxFQUFFLEdBQVk7SUFDbEUsT0FBQSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtDQUFBLENBQUM7QUFFekIsQUFBTyxxQkFBTSxZQUFZLEdBQUcsVUFBQyxLQUFhLElBQUssT0FBQSxLQUFLLEdBQUEsQ0FBQzs7Ozs7O0FDOUJyRDs7NEJBcUJpQixZQUFZOzs7Z0JBakI1QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLHVYQVdUO2lCQUNGOzs7OzBCQUVFLEtBQUs7O3dDQXBCUjs7Ozs7OztBQ0FBOzs7O2dCQUdDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUseWRBa0JUO2lCQUNGOzs7OzBCQUVFLEtBQUs7bUNBRUwsS0FBSzt5QkFFTCxLQUFLOztzQ0E5QlI7Ozs7Ozs7QUNBQTs7OztnQkFvQkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrbUJBbUJUO2lCQUNGOzs7OzZCQUVFLEtBQUs7OEJBRUwsS0FBSzswQkFFTCxLQUFLO21DQUVMLEtBQUs7O3lDQWpEUjs7O0lBc0VFLGtDQUNVLFlBQ0EsVUFDQSxVQUNSLHdCQUFrRCxFQUMxQyxrQkFDa0I7OztRQUxsQixlQUFVLEdBQVYsVUFBVTtRQUNWLGFBQVEsR0FBUixRQUFRO1FBQ1IsYUFBUSxHQUFSLFFBQVE7UUFFUixxQkFBZ0IsR0FBaEIsZ0JBQWdCO1FBQ0UsYUFBUTtXQUFSLFFBQVE7eUJBbEJXLEtBQUs7MkJBVWpCLElBQUksV0FBVyxFQUFFO1FBVWxELElBQUksQ0FBQyxjQUFjLEdBQUcsd0JBQXdCLENBQUMsdUJBQXVCLENBQ3BFLDhCQUE4QixDQUMvQixDQUFDO0tBQ0g7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDYjs7OztJQUdELDhDQUFXOzs7O1FBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztJQUlkLDZDQUFVOzs7O1FBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztJQUdOLHVDQUFJOzs7OztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUNyRCxJQUFJLENBQUMsY0FBYyxFQUNuQixDQUFDLEVBQ0QsSUFBSSxDQUFDLFFBQVEsRUFDYixFQUFFLENBQ0gsQ0FBQztZQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQzlELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzVDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QscUJBQXFCLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QixDQUFDLENBQUM7U0FDSjs7Ozs7SUFHSyx1Q0FBSTs7OztRQUNWLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQ3hELENBQUM7WUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4Qjs7Ozs7SUFHSyxrREFBZTs7OztRQUNyQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIscUJBQU0sY0FBYyxHQUFlLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUNsRCxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7WUFFRixxQkFBTSxHQUFHLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWE7aUJBQzVELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUssY0FBYyxDQUFDLEdBQUcsT0FBSSxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBSyxjQUFjLENBQUMsSUFBSSxPQUFJLENBQUMsQ0FBQztTQUNqRTs7O2dCQXpGSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7Ozs7Z0JBNUNDLFVBQVU7Z0JBSFYsUUFBUTtnQkFNUixTQUFTO2dCQUxULHdCQUF3QjtnQkFDeEIsZ0JBQWdCO2dEQW1FYixNQUFNLFNBQUMsUUFBUTs7OzZCQXBCakIsS0FBSyxTQUFDLG9CQUFvQjs4QkFFMUIsS0FBSyxTQUFDLGtCQUFrQjttQ0FFeEIsS0FBSyxTQUFDLGlCQUFpQjswQkFFdkIsS0FBSyxTQUFDLGNBQWM7aUNBRXBCLEtBQUssU0FBQyxxQkFBcUI7Z0NBdUIzQixZQUFZLFNBQUMsWUFBWTsrQkFLekIsWUFBWSxTQUFDLFlBQVk7O21DQTVGNUI7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBd0NpRCxJQUFJLFlBQVksRUFBRTs7Ozs7O0lBTWpFLCtDQUFPOzs7OztRQUNMLHFCQUFNLEtBQUssR0FBUTtZQUNqQixHQUFHLEVBQUUsT0FBTztZQUNaLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLFNBQVM7U0FDakIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Z0JBOUJyRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7eUJBS0UsS0FBSzs2QkFLTCxLQUFLO21DQUtMLE1BQU07NEJBS04sWUFBWSxTQUFDLE9BQU87O3dDQTdDdkI7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBd0NpRCxJQUFJLFlBQVksRUFBRTs7Ozs7O0lBTWpFLDJDQUFPOzs7OztRQUNMLHFCQUFNLEtBQUssR0FBUTtZQUNqQixHQUFHLEVBQUUsT0FBTztZQUNaLElBQUksRUFBRSxRQUFRO1lBQ2QsS0FBSyxFQUFFLFNBQVM7U0FDakIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Z0JBOUJyRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7Ozs7eUJBS0UsS0FBSzs2QkFLTCxLQUFLO21DQUtMLE1BQU07NEJBS04sWUFBWSxTQUFDLE9BQU87O29DQTdDdkI7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFnQ2lELElBQUksWUFBWSxFQUFFOzs7Ozs7SUFNakUsd0NBQU87Ozs7O1FBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzs7O2dCQW5CNUMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7OzZCQUtFLEtBQUs7bUNBS0wsTUFBTTs0QkFLTixZQUFZLFNBQUMsT0FBTzs7aUNBckN2Qjs7Ozs7OztBQ0lBOzs7QUFNQTs7O0FBQUE7Ozs7Ozs7O0lBS1MsNERBQXFCOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUN6QyxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7OztJQU03RCx5REFBa0I7Ozs7O2NBQUMsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQ3RDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0lBTTFELHFEQUFjOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUNsQyxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7Ozs7OztJQU0vRCwyREFBb0I7Ozs7O2NBQUMsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQ3hDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0lBTTdELDhEQUF1Qjs7Ozs7Y0FBQyxFQUdUO1lBRnBCLGNBQUksRUFDSixrQkFBTTtRQUVOLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0lBTTlELG9EQUFhOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUNqQyxxQkFBTSxJQUFJLEdBQVcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUNqRCxJQUFJLEVBQ0osR0FBRyxFQUNILElBQUksRUFDSixNQUFNLENBQ1AsQ0FBQztRQUNGLHFCQUFNLFVBQVUsR0FBVyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxVQUFRLFVBQVUsWUFBTyxJQUFNLENBQUM7Ozs7Ozs7SUFNbEMsa0RBQVc7Ozs7O2NBQUMsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQy9CLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7Ozs7O0lBTTVELG1EQUFZOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUNoQyxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FDbkMsSUFBSSxFQUNKLGlCQUFpQixFQUNqQixJQUFJLEVBQ0osTUFBTSxDQUNQLENBQUM7O3VDQWhGTjtJQWtGQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUEyQ0MseUNBQTRCOzs7O2dDQTFCdkU7RUEwQjJDLDRCQUE0QixFQUFHOzs7Ozs7QUMxQjFFOzs7Ozs7OztJQWNFLDBCQUNVLGVBQ21CO1FBRG5CLGtCQUFhLEdBQWIsYUFBYTtRQUNNLFdBQU0sR0FBTixNQUFNO0tBQy9COzs7Ozs7O0lBRUosb0NBQVM7Ozs7OztJQUFULFVBQVUsSUFBVSxFQUFFLE1BQWMsRUFBRSxNQUE0QjtRQUE1Qix1QkFBQSxFQUFBLFNBQWlCLElBQUksQ0FBQyxNQUFNO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztLQUNyRDs7Z0JBWEYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxjQUFjO2lCQUNyQjs7OztnQkFYUSxxQkFBcUI7Z0RBZXpCLE1BQU0sU0FBQyxTQUFTOzsyQkFoQnJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7SUFJRSwyQ0FBSzs7Ozs7SUFBTCxVQUFNLEtBQW9CO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztLQUNwQjs7Ozs7Ozs7O0lBS0Qsa0RBQVk7Ozs7O0lBQVosVUFBYSxLQUFvQjtRQUMvQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7S0FDcEI7Ozs7Ozs7OztJQUtELDBDQUFJOzs7OztJQUFKLFVBQUssS0FBb0I7UUFDdkIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0tBQ3BCOzs7Ozs7Ozs7SUFLRCxpREFBVzs7Ozs7SUFBWCxVQUFZLEtBQW9CO1FBQzlCLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztLQUNwQjs7Ozs7Ozs7O0lBS0QseUNBQUc7Ozs7O0lBQUgsVUFBSSxLQUFvQjtRQUN0QixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7S0FDcEI7Ozs7Ozs7OztJQUtELGdEQUFVOzs7OztJQUFWLFVBQVcsS0FBb0I7UUFDN0IsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0tBQ3BCO3NDQWhFSDtJQWlFQzs7Ozs7O0FDakVEO0lBUUUsZ0NBQW9CLGtCQUErQztRQUEvQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTZCO0tBQUk7Ozs7Ozs7SUFFdkUsMENBQVM7Ozs7OztJQUFULFVBQVUsS0FBYSxFQUFFLFNBQWlCLEVBQUUsS0FBb0I7UUFDOUQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbEQ7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsb0JBQW9CO2lCQUMzQjs7OztnQkFKUSwyQkFBMkI7O2lDQUZwQzs7Ozs7OztBQ0FBO0lBa0JFLHdCQUFvQixRQUFtQixFQUFVLEdBQWU7UUFBNUMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7cUJBSlYsSUFBSSxZQUFZLEVBQUU7S0FJSjs7OztJQUVwRSxpQ0FBUTs7O0lBQVI7UUFBQSxpQkFZQztRQVhDLHFCQUFNLFNBQVMsR0FDYixPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssV0FBVztjQUNwRSxLQUFLO2NBQ0wsT0FBTyxDQUFDO1FBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLFNBQVMsRUFDVCxVQUFBLEtBQUs7WUFDSCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QixDQUNGLENBQUM7S0FDSDs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7Z0JBMUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBVkMsU0FBUztnQkFDVCxVQUFVOzs7MEJBV1QsTUFBTSxTQUFDLFVBQVU7O3lCQWRwQjs7Ozs7OztBQ0FBOzs7Ozs7O0lBcUJFLG9DQUFZOzs7O0lBQVosVUFBYSxJQUFzQjtRQUNqQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQjs7Ozs7SUFFRCx5Q0FBaUI7Ozs7SUFBakIsVUFBa0IsSUFBMkI7UUFDM0MsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksSUFBcUI7UUFDL0IsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRUQsa0NBQVU7Ozs7SUFBVixVQUFXLElBQW9CO1FBQzdCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7OztJQUVELDBDQUFrQjs7OztJQUFsQixVQUFtQixJQUE0QjtRQUM3QyxPQUFPLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pDOztnQkFwQkYsVUFBVTs7d0JBbkJYOzs7Ozs7O0FDQUEscUJBTWEsTUFBTSxHQUEyQixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJ6RSxxQ0FBb0M7UUFBQSxXQUFNLEdBQU4sTUFBTTtLQUFTOzs7Ozs7SUFLNUMsMkRBQXFCOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7SUFNYix3REFBa0I7Ozs7O2NBQUMsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7OztJQU1WLG9EQUFjOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUNsQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7Ozs7SUFNbEIsMERBQW9COzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7SUFNYiw2REFBdUI7Ozs7O2NBQUMsRUFHVDtZQUZwQixjQUFJLEVBQ0osa0JBQU07UUFFTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7SUFNZCxtREFBYTs7Ozs7Y0FBQyxFQUFxQztZQUFuQyxjQUFJLEVBQUUsa0JBQU07UUFDakMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2QsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Ozs7Ozs7SUFNM0IsaURBQVc7Ozs7O2NBQUMsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQy9CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDckIsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU1YLGtEQUFZOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs7OztnREExRXJCLE1BQU0sU0FBQyxNQUFNOztzQ0E3QjVCOzs7Ozs7O0FDSUE7Ozs7O0FBT0E7Ozs7O0FBQUE7Ozs7Ozs7O0lBS1MsMkRBQXFCOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUN6QyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7SUFNcEUsd0RBQWtCOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUN0QyxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7SUFNbkUsb0RBQWM7Ozs7O2NBQUMsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQ2xDLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU1YLDBEQUFvQjs7Ozs7Y0FBQyxFQUFxQztZQUFuQyxjQUFJLEVBQUUsa0JBQU07UUFDeEMsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0lBTXBFLDZEQUF1Qjs7Ozs7Y0FBQyxFQUdUO1lBRnBCLGNBQUksRUFDSixrQkFBTTtRQUVOLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxHQUFHLEVBQUUsU0FBUztZQUNkLEtBQUssRUFBRSxPQUFPO1NBQ2YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU1YLG1EQUFhOzs7OztjQUFDLEVBQXFDO1lBQW5DLGNBQUksRUFBRSxrQkFBTTtRQUNqQyxxQkFBTSxJQUFJLEdBQVcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUNuRCxJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLHFCQUFNLFVBQVUsR0FBVyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxVQUFRLFVBQVUsWUFBTyxJQUFNLENBQUM7Ozs7Ozs7SUFNbEMsaURBQVc7Ozs7O2NBQUMsRUFBcUM7WUFBbkMsY0FBSSxFQUFFLGtCQUFNO1FBQy9CLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU1wRSxrREFBWTs7Ozs7Y0FBQyxFQUFxQztZQUFuQyxjQUFJLEVBQUUsa0JBQU07UUFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQ3JDLEdBQUcsRUFBRSxTQUFTO1lBQ2QsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O3NDQXBGcEI7SUFzRkM7Ozs7OztBQ3RGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUZTLDRCQUFPOzs7O0lBQWQsVUFBZSxNQUFpQztRQUFqQyx1QkFBQSxFQUFBLFdBQWlDO1FBQzlDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmLE1BQU0sQ0FBQyxtQkFBbUIsSUFBSSwyQkFBMkI7Z0JBQ3pELE1BQU0sQ0FBQyxhQUFhLElBQUkscUJBQXFCO2dCQUM3QyxNQUFNLENBQUMsS0FBSyxJQUFJLGFBQWE7YUFDOUI7U0FDRixDQUFDO0tBQ0g7O2dCQXZDRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDZCQUE2Qjt3QkFDN0IsMkJBQTJCO3dCQUMzQiw4QkFBOEI7d0JBQzlCLHdCQUF3Qjt3QkFDeEIsNkJBQTZCO3dCQUM3Qix5QkFBeUI7d0JBQ3pCLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixzQkFBc0I7d0JBQ3RCLGNBQWM7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUU7d0JBQ1AsNkJBQTZCO3dCQUM3QiwyQkFBMkI7d0JBQzNCLDhCQUE4Qjt3QkFDOUIsd0JBQXdCO3dCQUN4Qiw2QkFBNkI7d0JBQzdCLHlCQUF5Qjt3QkFDekIsc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEIsY0FBYztxQkFDZjtvQkFDRCxlQUFlLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDbEQ7OytCQXJGRDs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7OztJQXVQRSxvQ0FDVSxLQUNBLE9BQ1c7UUFGWCxRQUFHLEdBQUgsR0FBRztRQUNILFVBQUssR0FBTCxLQUFLOzs7OztzQkExSW9CLEVBQUU7Ozs7MkJBS0osRUFBRTs7OzsrQkFLQyxLQUFLOzs7O2dDQWVMLEtBQUs7Ozs7bUNBVUQsSUFBSTs7Ozs7Z0NBcUN6QixJQUFJLFlBQVksRUFBc0M7Ozs7MEJBTTVELElBQUksWUFBWSxFQUV6Qjs7Ozs0QkFNVyxJQUFJLFlBQVksRUFFM0I7Ozs7aUNBTWdCLElBQUksWUFBWSxFQUVqQzs7Ozs0QkE4QlksWUFBWTs7OzsyQkFLYixVQUFDLEtBQWEsRUFBRSxHQUFpQixJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBQTtRQVV4RSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUN0Qjs7Ozs7Ozs7SUFLRCw2Q0FBUTs7OztJQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDekIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Ozs7Ozs7O0lBS0QsZ0RBQVc7Ozs7O0lBQVgsVUFBWSxPQUFZO1FBQ3RCLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsV0FBVyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDbEUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCRixnQkFBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQ0UsT0FBTyxDQUFDLFFBQVE7WUFDaEIsT0FBTyxDQUFDLE1BQU07WUFDZCxPQUFPLENBQUMsV0FBVztZQUNuQixPQUFPLENBQUMsV0FDVixFQUFFO1lBQ0EsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO1FBRUQsSUFDRSxPQUFPLENBQUMsZUFBZTtZQUN2QixPQUFPLENBQUMsUUFBUTtZQUNoQixPQUFPLENBQUMsTUFBTTtZQUNkLE9BQU8sQ0FBQyxXQUNWLEVBQUU7WUFDQSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtLQUNGOzs7Ozs7OztJQUtELGdEQUFXOzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEM7S0FDRjs7Ozs7Ozs7OztJQUtELHVEQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLEtBQW9CLEVBQUUsYUFBc0I7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUN4QixJQUFJLGFBQWEsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbkQsR0FBRyxDQUFDLGVBQWU7b0JBQ2pCLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0wsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFDO2FBQzVCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7Ozs7SUFLRCxpREFBWTs7Ozs7O0lBQVosVUFBYSxHQUFpQixFQUFFLEtBQW9CO1FBQ2xELHFCQUFNLElBQUksR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLHFCQUFNLEtBQUssR0FBVyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLHFCQUFNLElBQUksR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLHFCQUFNLFFBQVEsR0FBUyxPQUFPLENBQzVCLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsRUFDM0MsSUFBSSxDQUNMLENBQUM7UUFDRixxQkFBSSxNQUFZLENBQUM7UUFDakIsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2IscUJBQU0sV0FBVyxHQUFXLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkUsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztLQUMvRDs7Ozs7Ozs7OztJQUtELG1EQUFjOzs7Ozs7SUFBZCxVQUFlLFVBQWUsRUFBRSxHQUFpQjs7UUFFL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztTQUMvQjtLQUNGOzs7O0lBRU8sa0RBQWE7Ozs7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ2hELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUM5QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7Ozs7SUFHdEIsZ0RBQVc7Ozs7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNsQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDMUIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQzlCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOzs7OztJQUd0Qix5REFBb0I7Ozs7O1FBQzFCLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNwQyxPQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUM7YUFBQSxDQUNuQyxDQUFDO1lBQ0YscUJBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFlBQVk7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7Ozs7O0lBR0ssK0NBQVU7Ozs7UUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7Ozs7SUFHdEIseURBQW9COzs7O1FBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDcEIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTthQUN6QixDQUFDLENBQUM7U0FDSjs7O2dCQTFWSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLHM0REF5Q1Q7aUJBQ0Y7Ozs7Z0JBN0ZDLGlCQUFpQjtnQkF5QlYsYUFBYTtnREEyTmpCLE1BQU0sU0FBQyxTQUFTOzs7NkJBakpsQixLQUFLOzJCQU1MLEtBQUs7Z0NBS0wsS0FBSztvQ0FLTCxLQUFLOzRCQUtMLEtBQUs7MkJBS0wsS0FBSztxQ0FLTCxLQUFLO29DQUtMLEtBQUs7d0NBS0wsS0FBSztpQ0FLTCxLQUFLO21DQUtMLEtBQUs7aUNBS0wsS0FBSzswQ0FLTCxLQUFLO3VDQUtMLEtBQUs7Z0NBS0wsS0FBSztxQ0FNTCxNQUFNOytCQU1OLE1BQU07aUNBUU4sTUFBTTtzQ0FRTixNQUFNOztxQ0E1TVQ7Ozs7Ozs7QUNBQTs7d0NBcUM2Qix3QkFBd0I7OztnQkFqQ3BELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO29CQUMxQyxRQUFRLEVBQUUsNHdCQXNCVDtpQkFDRjs7Ozt5QkFFRSxLQUFLOzJCQUVMLEtBQUs7bUNBRUwsS0FBSzs7MkNBbkNSOzs7Ozs7O0FDQUE7OzRCQTJGOEMsSUFBSSxZQUFZLEVBQUU7OEJBRWhCLElBQUksWUFBWSxFQUFFOzRCQUdULElBQUksWUFBWSxFQUVuRTs4QkFFYSxjQUFjOzs7Z0JBMUZoQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLHdoRUFrRFQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSx1QkFBdUI7d0JBQzlCLGtCQUFrQixFQUFFLFlBQVk7d0JBQ2hDLG1CQUFtQixFQUFFLGFBQWE7d0JBQ2xDLG9CQUFvQixFQUFFLGNBQWM7d0JBQ3BDLHFCQUFxQixFQUFFLGVBQWU7d0JBQ3RDLHNCQUFzQixFQUFFLGFBQWE7d0JBQ3JDLHVCQUF1QixFQUFFLGNBQWM7d0JBQ3ZDLHdCQUF3QixFQUFFLHVCQUF1Qjt3QkFDakQsa0JBQWtCLEVBQUUsaUJBQWlCO3dCQUNyQyx5QkFBeUIsRUFBRSxxQkFBcUI7cUJBQ2pEO2lCQUNGOzs7O3dCQUVFLEtBQUs7NEJBRUwsS0FBSzsyQkFFTCxLQUFLO3FDQUVMLEtBQUs7d0NBRUwsS0FBSzttQ0FFTCxLQUFLO29DQUVMLEtBQUs7aUNBRUwsTUFBTTttQ0FFTixNQUFNO2lDQUVOLE1BQU07O3FDQS9GVDs7Ozs7OztBQ0FBOztzQkErRDZCLEtBQUs7NEJBU3VCLElBQUksWUFBWSxFQUVuRTs4QkFFYSxjQUFjOzs7Z0JBakVoQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsUUFBUSxFQUFFLCtwQ0FtQ1Q7b0JBQ0QsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxVQUFVLEVBQUU7NEJBQ2xCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO2dDQUN4QyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDOzZCQUN6QyxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO2dDQUMxQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUN2QyxDQUFDO3lCQUNILENBQUM7cUJBQ0g7aUJBQ0Y7Ozs7MkJBRUUsS0FBSzsyQkFFTCxLQUFLO21DQUVMLEtBQUs7dUNBRUwsS0FBSztpQ0FFTCxNQUFNOzt5Q0F2RVQ7Ozs7Ozs7QUNBQTs7OztnQkFnQkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsQ0FBQztvQkFDaEUsWUFBWSxFQUFFO3dCQUNaLDBCQUEwQjt3QkFDMUIsMEJBQTBCO3dCQUMxQiw4QkFBOEI7d0JBQzlCLGdDQUFnQztxQkFDakM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGlCQUFpQjt3QkFDakIsMEJBQTBCO3dCQUMxQiwwQkFBMEI7d0JBQzFCLDhCQUE4Qjt3QkFDOUIsZ0NBQWdDO3FCQUNqQztpQkFDRjs7OEJBL0JEOzs7Ozs7O0FDQUEsQUFFQSxJQUFBO0lBR0UsNEJBQ1Usc0JBQ1IsZ0JBQTZCO1FBRHJCLHlCQUFvQixHQUFwQixvQkFBb0I7UUFHNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQy9EOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxFQUFrQztZQUFoQyxRQUFDLEVBQUUsUUFBQztRQUNqQixxQkFBTSxPQUFPLEdBQWUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsQ0FBQztZQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNuQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFFSCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMscUJBQXFCLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM3RTs2QkFyQkg7SUFzQkMsQ0FBQTs7Ozs7O0FDdEJELEFBRUEsSUFBQTtJQUNFLDhCQUNVLHdCQUNBO1FBREEsMkJBQXNCLEdBQXRCLHNCQUFzQjtRQUN0QixhQUFRLEdBQVIsUUFBUTtLQUNkOzs7OztJQUVKLDZDQUFjOzs7O0lBQWQsVUFBZSxFQUF3QztZQUF0Qyx3QkFBUztRQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLFFBQVEsQ0FDYixJQUFJLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLEVBQUUsRUFDbkQsU0FBUyxDQUNWLENBQUM7S0FDSDsrQkFqQkg7SUFrQkMsQ0FBQTs7Ozs7O0FDbEJEOzs7Ozs7Ozs7Ozs7OztJQTRQRSxtQ0FDVSxLQUNBLE9BQ1c7UUFGWCxRQUFHLEdBQUgsR0FBRztRQUNILFVBQUssR0FBTCxLQUFLOzs7OztzQkFqSm9CLEVBQUU7Ozs7MkJBS0osRUFBRTs7OztnQ0FlQyxRQUFROzs7O21DQVVKLElBQUk7Ozs7O3lCQTBCSCxNQUFNOzs7O2dDQVdJLElBQUksWUFBWSxFQUUvRDs7Ozs0QkFNbUQsSUFBSSxZQUFZLEVBRW5FOzs7O2lDQVFBLElBQUksWUFBWSxFQUFrQzs7Ozs7Z0NBT25DLElBQUksWUFBWSxFQUFxQzs7Ozs4QkFvQmQsSUFBSSxHQUFHLEVBQUU7Ozs7NEJBb0JwRCxZQUFZOzs7OzhCQUtWLFVBQUMsS0FBYSxFQUFFLFNBQXdCO1lBQ3ZELE9BQUEsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsU0FBUztTQUFBO1FBVW5ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7Ozs7OztJQUtELDRDQUFROzs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6QixDQUFDLENBQUM7U0FDSjtLQUNGOzs7Ozs7Ozs7SUFLRCwrQ0FBVzs7Ozs7SUFBWCxVQUFZLE9BQVk7UUFDdEIsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUNsRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEJBLGdCQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUM3RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7S0FDRjs7Ozs7Ozs7SUFLRCwrQ0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3hDO0tBQ0Y7Ozs7Ozs7Ozs7O0lBS0QsaURBQWE7Ozs7Ozs7SUFBYixVQUNFLGlCQUE4QixFQUM5QixTQUF3QixFQUN4QixXQUF3QjtRQUV4QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDakMsY0FBYyxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ2hDLFlBQVksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUM1QixJQUFJLEVBQUUsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE9BQU87U0FDdkUsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxxQkFBTSxZQUFZLEdBQXlCLElBQUksb0JBQW9CLENBQ2pFLGlCQUFpQixFQUNqQixJQUFJLENBQUMsY0FBYyxDQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFDLEVBQWE7Z0JBQVgsd0JBQVM7WUFDaEMsT0FBQSxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQztTQUFBLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6Qjs7Ozs7Ozs7Ozs7SUFLRCw0Q0FBUTs7Ozs7OztJQUFSLFVBQ0UsU0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsUUFBZ0I7UUFFaEIscUJBQU0sYUFBYSxHQUF3QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FDaEUsU0FBUyxDQUNWLENBQUM7UUFFRixJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQzFCLHFCQUFNLElBQUksR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDcEUsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUN2RCxTQUFTLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3BEO2FBQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNsQyxxQkFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ3JFLFNBQVMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDcEQ7S0FDRjs7Ozs7Ozs7O0lBS0QsK0NBQVc7Ozs7O0lBQVgsVUFBWSxTQUF3QjtRQUNsQyxxQkFBTSxhQUFhLEdBQXdCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUNoRSxTQUFTLENBQ1YsQ0FBQztRQUVGLHFCQUFJLFFBQWdCLENBQUM7UUFDckIsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUNqQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO1NBQzVEO2FBQU07WUFDTCxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDO1NBQ3hEO1FBRUQsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUU1QyxxQkFBSSxRQUFRLEdBQVMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0MscUJBQUksTUFBTSxHQUFTLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3ZDLElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDakMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEM7YUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNqQixNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNwQztRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDdkM7Ozs7Ozs7Ozs7O0lBS0QsZ0RBQVk7Ozs7Ozs7SUFBWixVQUNFLFNBQXdCLEVBQ3hCLFdBQW1CLEVBQ25CLFFBQWdCO1FBRWhCLHFCQUFNLFdBQVcsR0FBVyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQ25ELHFCQUFNLFFBQVEsR0FBUyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbkUscUJBQUksTUFBWSxDQUFDO1FBQ2pCLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDM0U7Ozs7Ozs7OztJQUtELHFEQUFpQjs7Ozs7SUFBakIsVUFBa0IsaUJBQThCO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyRTs7Ozs7Ozs7OztJQUtELDZDQUFTOzs7Ozs7SUFBVCxVQUFVLGlCQUE4QixFQUFFLEtBQWtCO1FBQTVELGlCQVNDO1FBUkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRSxxQkFBTSxVQUFVLEdBQXVCLElBQUksa0JBQWtCLENBQzNELGlCQUFpQixFQUNqQixLQUFLLENBQ04sQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBQyxFQUFRO2dCQUFOLFFBQUMsRUFBRSxRQUFDO1lBQ3pCLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDO1NBQUEsQ0FBQztRQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRU8saURBQWE7Ozs7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQ3ZDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzFCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztTQUM5QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7Ozs7SUFHdEIsK0NBQVc7Ozs7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLHdCQUF3QixFQUFFLElBQUk7U0FDL0IsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Ozs7O0lBR3RCLDhDQUFVOzs7O1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7O0lBR2Isd0RBQW9COzs7O1FBQzFCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTthQUN6QixDQUFDLENBQUM7U0FDSjs7O2dCQTNZSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLDYwRUE2Q1Q7aUJBQ0Y7Ozs7Z0JBN0ZDLGlCQUFpQjtnQkFxQlYsYUFBYTtnREFxT2pCLE1BQU0sU0FBQyxTQUFTOzs7NkJBeEpsQixLQUFLOzJCQU1MLEtBQUs7Z0NBS0wsS0FBSzs0QkFLTCxLQUFLOzJCQUtMLEtBQUs7cUNBS0wsS0FBSztvQ0FLTCxLQUFLO3dDQUtMLEtBQUs7aUNBS0wsS0FBSzttQ0FLTCxLQUFLO2tDQUtMLEtBQUs7dUNBS0wsS0FBSzs4QkFNTCxLQUFLO2dDQUtMLEtBQUs7cUNBS0wsTUFBTTtpQ0FRTixNQUFNO3NDQVFOLE1BQU07cUNBU04sTUFBTTs7b0NBeE1UOzs7Ozs7O0FDQUE7O2dDQXFEcUQsSUFBSSxZQUFZLEVBRS9EOzRCQU1DLElBQUksWUFBWSxFQUE0Qzt3Q0FFdEMsd0JBQXdCOzs7Z0JBckRwRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFLHcxQ0ErQlQ7aUJBQ0Y7Ozs7eUJBRUUsS0FBSzsyQkFFTCxLQUFLO21DQUVMLEtBQUs7cUNBRUwsTUFBTTtpQ0FLTixNQUFNOzswQ0F6RFQ7Ozs7Ozs7QUNBQTs7NEJBK0Q4QyxJQUFJLFlBQVksRUFBRTs7O2dCQXREL0QsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxrOUNBcUNUO2lCQUNGOzs7OzhCQUVFLEtBQUs7cUNBRUwsS0FBSzt3Q0FFTCxLQUFLO21DQUVMLEtBQUs7dUNBRUwsS0FBSztvQ0FFTCxLQUFLO2lDQUVMLE1BQU07O3lDQS9EVDs7Ozs7OztBQ0FBOzs7O2dCQW1CQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHlCQUF5Qjt3QkFDekIsK0JBQStCO3dCQUMvQiw4QkFBOEI7cUJBQy9CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIseUJBQXlCO3dCQUN6QiwrQkFBK0I7d0JBQy9CLDhCQUE4QjtxQkFDL0I7aUJBQ0Y7OzZCQXRDRDs7Ozs7OztBQ0FBOzs7QUF3Q0EscUJBQU0sZUFBZSxHQUFXLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lBcVJqQyxrQ0FDVSxLQUNBLE9BQ1c7UUFGWCxRQUFHLEdBQUgsR0FBRztRQUNILFVBQUssR0FBTCxLQUFLOzs7OztzQkFuTG9CLEVBQUU7Ozs7NEJBS0wsQ0FBQzs7OztpQ0FLSSxFQUFFOzs7OzRCQUtQLENBQUM7Ozs7OEJBS0MsQ0FBQzs7OzswQkFLTCxFQUFFOzs7OzRCQUtBLEVBQUU7Ozs7MEJBS0osR0FBRzs7Ozs2QkFlQSxJQUFJLENBQUMsaUJBQWlCOzs7O2dDQUtuQixLQUFLOzs7O21DQVVELElBQUk7Ozs7NEJBMEI3QixJQUFJLFlBQVksRUFFM0I7Ozs7a0NBTWlCLElBQUksWUFBWSxFQUVqQzs7OztpQ0FNZ0IsSUFBSSxZQUFZLEVBQWtDOzs7OztnQ0FPbkQsSUFBSSxZQUFZLEVBQW9DOzs7O3FCQUtoRCxFQUFFOzs7O3FCQVVULENBQUM7Ozs7OEJBVXVDLElBQUksR0FBRyxFQUFFOzs7OzhCQWVoRCxjQUFjOzs7OytCQUtiLFVBQUMsS0FBYSxFQUFFLFFBQXNCO1lBQ3RELE9BQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUs7U0FBQTs7OzsyQkFLMUMsVUFBQyxLQUFhLEVBQUUsSUFBaUI7WUFDN0MsT0FBQSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7U0FBQTs7OztrQ0FLaEIsVUFBQyxLQUFhLEVBQUUsT0FBMkI7WUFDOUQsT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtTQUFBO1FBVTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7Ozs7OztJQUtELDJDQUFROzs7O0lBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUN6QixDQUFDLENBQUM7U0FDSjtLQUNGOzs7Ozs7OztJQUtELDhDQUFXOzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEM7S0FDRjs7Ozs7Ozs7O0lBS0QsOENBQVc7Ozs7O0lBQVgsVUFBWSxPQUFZO1FBQ3RCLElBQ0UsT0FBTyxDQUFDLFFBQVE7WUFDaEIsT0FBTyxDQUFDLFlBQVk7WUFDcEIsT0FBTyxDQUFDLGNBQWM7WUFDdEIsT0FBTyxDQUFDLFVBQVU7WUFDbEIsT0FBTyxDQUFDLFlBQVk7WUFDcEIsT0FBTyxDQUFDLFlBQ1YsRUFBRTtZQUNBLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQkEsZ0JBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUNFLE9BQU8sQ0FBQyxRQUFRO1lBQ2hCLE9BQU8sQ0FBQyxNQUFNO1lBQ2QsT0FBTyxDQUFDLFlBQVk7WUFDcEIsT0FBTyxDQUFDLGNBQWM7WUFDdEIsT0FBTyxDQUFDLFVBQVU7WUFDbEIsT0FBTyxDQUFDLFlBQVk7WUFDcEIsT0FBTyxDQUFDLFVBQ1YsRUFBRTtZQUNBLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtLQUNGOzs7Ozs7SUFFRCwrQ0FBWTs7Ozs7SUFBWixVQUNFLFNBQW1ELEVBQ25ELE9BQTJCO1FBRTNCLElBQUksU0FBUyxDQUFDLFFBQVEsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtZQUNsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO2dCQUMxQixLQUFLLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLO2dCQUMvQixRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUk7YUFDdkIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Ozs7OztJQUVELGdEQUFhOzs7Ozs7SUFBYixVQUNFLEtBQW1CLEVBQ25CLFdBQXdCLEVBQ3hCLGdCQUE2QjtRQUU3QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDN0IsV0FBVyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ3RCLGNBQWMsRUFBRSxLQUFLLENBQUMsTUFBTTtZQUM1QixJQUFJLEVBQUUsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxXQUFXLEdBQUcsS0FBSyxHQUFHLFFBQVE7U0FDdEUsQ0FBQyxDQUFDO1FBQ0gscUJBQU0sWUFBWSxHQUF5QixJQUFJLG9CQUFvQixDQUNqRSxnQkFBZ0IsQ0FDakIsQ0FBQztRQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBQyxFQUFhO2dCQUFYLHdCQUFTO1lBQ2hDLE9BQUEsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFNBQVMsV0FBQSxFQUFFLENBQUM7U0FBQSxDQUFDO1FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekI7Ozs7OztJQUVELDJDQUFROzs7OztJQUFSLFVBQVMsS0FBbUIsRUFBRSxXQUF3QjtRQUNwRCxxQkFBTSxhQUFhLEdBQXVCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDekIsS0FBSyxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDL0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsY0FBYyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDdEU7YUFBTSxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25DLEtBQUssQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLGNBQWMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3pFO0tBQ0Y7Ozs7O0lBRUQsOENBQVc7Ozs7SUFBWCxVQUFZLFFBQXNCO1FBQ2hDLHFCQUFNLGFBQWEsR0FBdUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUUscUJBQUksV0FBbUIsQ0FBQztRQUN4QixJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQ2hDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7U0FDeEQ7YUFBTTtZQUNMLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUM7U0FDOUQ7UUFFRCxRQUFRLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDekMsUUFBUSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBRS9DLHFCQUFNLG9CQUFvQixHQUN4QixlQUFlLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNqRSxxQkFBTSxZQUFZLEdBQVcsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ2hFLHFCQUFJLFFBQVEsR0FBUyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxQyxxQkFBSSxNQUFNLEdBQVMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDdEMsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtZQUNoQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUMvQzthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2pCLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN0Qzs7Ozs7O0lBRUQsNENBQVM7Ozs7O0lBQVQsVUFBVSxLQUFrQixFQUFFLGdCQUE2QjtRQUEzRCxpQkFRQztRQVBDLHFCQUFNLFVBQVUsR0FBdUIsSUFBSSxrQkFBa0IsQ0FDM0QsZ0JBQWdCLEVBQ2hCLEtBQUssQ0FDTixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFDLEVBQVE7Z0JBQU4sUUFBQyxFQUFFLFFBQUM7WUFDekIsT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUM7U0FBQSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDekI7Ozs7OztJQUVELCtDQUFZOzs7OztJQUFaLFVBQWEsUUFBc0IsRUFBRSxlQUF1QjtRQUMxRCxxQkFBTSxvQkFBb0IsR0FDeEIsZUFBZSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakUscUJBQU0sWUFBWSxHQUFXLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQztRQUNwRSxxQkFBTSxRQUFRLEdBQVMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RFLHFCQUFJLE1BQVksQ0FBQztRQUNqQixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3RCLE1BQU0sR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQzFFOzs7O0lBRU8sa0RBQWU7Ozs7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1lBQ3pDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQzVCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQzFCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Ozs7O0lBR3RCLDhDQUFXOzs7O1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7WUFDaEMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQzVCO1lBQ0QsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQzFCO1lBQ0QsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGFBQWEsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1NBQ3RDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDOzs7OztJQUd0Qiw2Q0FBVTs7OztRQUNoQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOzs7OztJQUdiLHVEQUFvQjs7OztRQUMxQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUN6QixJQUFJLEVBQUU7b0JBQ0osUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNyQjtnQkFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2FBQ3pCLENBQUMsQ0FBQztTQUNKOzs7Z0JBdmNKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsdXdHQWlFVDtpQkFDRjs7OztnQkEzSEMsaUJBQWlCO2dCQXFCVixhQUFhO2dEQXFTakIsTUFBTSxTQUFDLFNBQVM7Ozs2QkExTGxCLEtBQUs7MkJBTUwsS0FBSztpQ0FLTCxLQUFLO3NDQUtMLEtBQUs7aUNBS0wsS0FBSzttQ0FLTCxLQUFLOytCQUtMLEtBQUs7aUNBS0wsS0FBSzsrQkFLTCxLQUFLOzRCQUtMLEtBQUs7MkJBS0wsS0FBSztrQ0FLTCxLQUFLO3FDQUtMLEtBQUs7b0NBS0wsS0FBSzt3Q0FLTCxLQUFLO3dDQUtMLEtBQUs7d0NBS0wsS0FBSztrQ0FLTCxLQUFLO3VDQUtMLEtBQUs7aUNBS0wsTUFBTTt1Q0FRTixNQUFNO3NDQVFOLE1BQU07cUNBT04sTUFBTTs7bUNBN1BUOzs7Ozs7O0FDQUE7OzRCQThDOEMsSUFBSSxZQUFZLEVBQUU7OztnQkFyQy9ELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsaTFCQTBCVDtpQkFDRjs7OzswQkFFRSxLQUFLO21DQUVMLEtBQUs7dUNBRUwsS0FBSztpQ0FFTCxNQUFNOzt1Q0E5Q1Q7Ozs7Ozs7QUNBQTs7OztnQkFHQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztvQkFDOUMsUUFBUSxFQUFFLGtzQkF1QlQ7aUJBQ0Y7Ozs7NEJBRUUsS0FBSztrQ0FFTCxLQUFLOzJCQUVMLEtBQUs7bUNBRUwsS0FBSzs7OENBckNSOzs7Ozs7O0FDQUE7OzRCQStEOEMsSUFBSSxZQUFZLEVBQUU7OztnQkF0RC9ELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxRQUFRLEVBQUUscThDQXFDVDtpQkFDRjs7Ozs2QkFFRSxLQUFLO3FDQUVMLEtBQUs7d0NBRUwsS0FBSzttQ0FFTCxLQUFLO3VDQUVMLEtBQUs7b0NBRUwsS0FBSztpQ0FFTCxNQUFNOzt3Q0EvRFQ7Ozs7Ozs7QUNBQTs7OztnQkFlQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjtxQkFDckI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHdCQUF3Qjt3QkFDeEIsNEJBQTRCO3dCQUM1QixtQ0FBbUM7d0JBQ25DLDZCQUE2QjtxQkFDOUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQix3QkFBd0I7d0JBQ3hCLDRCQUE0Qjt3QkFDNUIsbUNBQW1DO3dCQUNuQyw2QkFBNkI7cUJBQzlCO2lCQUNGOzs0QkFwQ0Q7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdEUyxzQkFBTzs7OztJQUFkLFVBQWUsTUFBaUM7UUFBakMsdUJBQUEsRUFBQSxXQUFpQztRQUM5QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2YsTUFBTSxDQUFDLG1CQUFtQixJQUFJLDJCQUEyQjtnQkFDekQsTUFBTSxDQUFDLGFBQWEsSUFBSSxxQkFBcUI7Z0JBQzdDLE1BQU0sQ0FBQyxLQUFLLElBQUksYUFBYTthQUM5QjtTQUNGLENBQUM7S0FDSDs7Z0JBekJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsaUJBQWlCO3FCQUNsQjtpQkFDRjs7eUJBOUNEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js ***!
  \***************************************************************************************/
/*! exports provided: DragAndDropModule, DraggableHelper, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropModule", function() { return DragAndDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableHelper", function() { return DraggableHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DroppableDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DraggableHelper = /** @class */ (function () {
    function DraggableHelper() {
        this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    return DraggableHelper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MOVE_CURSOR = 'move';
var DraggableDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function DraggableDirective(element, renderer, draggableHelper, zone) {
        this.element = element;
        this.renderer = renderer;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        /**
         * The axis along which the element is draggable
         */
        this.dragAxis = { x: true, y: true };
        /**
         * Snap all drags to an x / y grid
         */
        this.dragSnapGrid = {};
        /**
         * Show a ghost element that shows the drag when dragging
         */
        this.ghostDragEnabled = true;
        /**
         * The cursor to use when dragging the element
         */
        this.dragCursor = MOVE_CURSOR;
        /**
         * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
         */
        this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the element has started to be dragged.
         * Only called after at least one mouse or touch move event
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the element is being dragged
         */
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called after the element is dragged
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * @hidden
         */
        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * @hidden
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.eventListenerSubscriptions = {};
    }
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.checkEventListeners();
        var /** @type {?} */ pointerDrag = this.pointerDown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return _this.canDrag(); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (pointerDownEvent) {
            var /** @type {?} */ currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            _this.zone.run(function () {
                _this.dragPointerDown.next({ x: 0, y: 0 });
            });
            var /** @type {?} */ pointerMove = _this.pointerMove
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (pointerMoveEvent) {
                pointerMoveEvent.event.preventDefault();
                return {
                    currentDrag: currentDrag,
                    x: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                    y: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                    clientX: pointerMoveEvent.clientX,
                    clientY: pointerMoveEvent.clientY
                };
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (moveData) {
                if (_this.dragSnapGrid.x) {
                    moveData.x =
                        Math.floor(moveData.x / _this.dragSnapGrid.x) *
                            _this.dragSnapGrid.x;
                }
                if (_this.dragSnapGrid.y) {
                    moveData.y =
                        Math.floor(moveData.y / _this.dragSnapGrid.y) *
                            _this.dragSnapGrid.y;
                }
                return moveData;
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (moveData) {
                if (!_this.dragAxis.x) {
                    moveData.x = 0;
                }
                if (!_this.dragAxis.y) {
                    moveData.y = 0;
                }
                return moveData;
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
                var x = _a.x, y = _a.y;
                return !_this.validateDrag || _this.validateDrag({ x: x, y: y });
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(_this.pointerUp, _this.pointerDown)))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
            pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
                pointerDownEvent.event.preventDefault();
                _this.zone.run(function () {
                    _this.dragStart.next({ x: 0, y: 0 });
                });
                _this.setCursor(_this.dragCursor);
                _this.draggableHelper.currentDrag.next(currentDrag);
            });
            pointerMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeLast"])(1)).subscribe(function (_a) {
                var x = _a.x, y = _a.y;
                _this.zone.run(function () {
                    _this.dragEnd.next({ x: x, y: y });
                });
                currentDrag.complete();
                _this.setCssTransform('');
                if (_this.ghostDragEnabled) {
                    _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', '');
                }
            });
            return pointerMove;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"])(pointerDrag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return [, value]; })), pointerDrag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), previous = _b[0], next = _b[1];
            if (!previous) {
                return true;
            }
            return previous.x !== next.x || previous.y !== next.y;
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), previous = _b[0], next = _b[1];
            return next;
        }))
            .subscribe(function (_a) {
            var x = _a.x, y = _a.y, currentDrag = _a.currentDrag, clientX = _a.clientX, clientY = _a.clientY;
            _this.zone.run(function () {
                _this.dragging.next({ x: x, y: y });
            });
            if (_this.ghostDragEnabled) {
                _this.renderer.setStyle(_this.element.nativeElement, 'pointerEvents', 'none');
            }
            _this.setCssTransform("translate(" + x + "px, " + y + "px)");
            currentDrag.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this.dropData
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DraggableDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['dragAxis']) {
            this.checkEventListeners();
        }
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeEventListeners();
        this.pointerDown.complete();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.checkEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ canDrag = this.canDrag();
        var /** @type {?} */ hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;
        if (canDrag && !hasEventListeners) {
            this.zone.runOutsideAngular(function () {
                _this.eventListenerSubscriptions.mousedown = _this.renderer.listen(_this.element.nativeElement, 'mousedown', function (event) {
                    _this.onMouseDown(event);
                });
                _this.eventListenerSubscriptions.mouseup = _this.renderer.listen('document', 'mouseup', function (event) {
                    _this.onMouseUp(event);
                });
                _this.eventListenerSubscriptions.touchstart = _this.renderer.listen(_this.element.nativeElement, 'touchstart', function (event) {
                    _this.onTouchStart(event);
                });
                _this.eventListenerSubscriptions.touchend = _this.renderer.listen('document', 'touchend', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.touchcancel = _this.renderer.listen('document', 'touchcancel', function (event) {
                    _this.onTouchEnd(event);
                });
                _this.eventListenerSubscriptions.mouseenter = _this.renderer.listen(_this.element.nativeElement, 'mouseenter', function () {
                    _this.onMouseEnter();
                });
                _this.eventListenerSubscriptions.mouseleave = _this.renderer.listen(_this.element.nativeElement, 'mouseleave', function () {
                    _this.onMouseLeave();
                });
            });
        }
        else if (!canDrag && hasEventListeners) {
            this.unsubscribeEventListeners();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', function (mouseMoveEvent) {
                _this.pointerMove.next({
                    event: mouseMoveEvent,
                    clientX: mouseMoveEvent.clientX,
                    clientY: mouseMoveEvent.clientY
                });
            });
        }
        this.pointerDown.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onMouseUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventListenerSubscriptions.mousemove) {
            this.eventListenerSubscriptions.mousemove();
            delete this.eventListenerSubscriptions.mousemove;
        }
        this.pointerUp.next({
            event: event,
            clientX: event.clientX,
            clientY: event.clientY
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove = this.renderer.listen('document', 'touchmove', function (touchMoveEvent) {
                _this.pointerMove.next({
                    event: touchMoveEvent,
                    clientX: touchMoveEvent.targetTouches[0].clientX,
                    clientY: touchMoveEvent.targetTouches[0].clientY
                });
            });
        }
        this.pointerDown.next({
            event: event,
            clientX: event.touches[0].clientX,
            clientY: event.touches[0].clientY
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DraggableDirective.prototype.onTouchEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventListenerSubscriptions.touchmove) {
            this.eventListenerSubscriptions.touchmove();
            delete this.eventListenerSubscriptions.touchmove;
        }
        this.pointerUp.next({
            event: event,
            clientX: event.changedTouches[0].clientX,
            clientY: event.changedTouches[0].clientY
        });
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        this.setCursor(this.dragCursor);
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.setCursor('');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DraggableDirective.prototype.setCssTransform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.ghostDragEnabled) {
            var /** @type {?} */ transformAttributes = [
                'transform',
                '-webkit-transform',
                '-ms-transform',
                '-moz-transform',
                '-o-transform'
            ];
            transformAttributes.forEach(function (transformAttribute) {
                _this.renderer.setStyle(_this.element.nativeElement, transformAttribute, value);
            });
        }
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.canDrag = /**
     * @return {?}
     */
    function () {
        return this.dragAxis.x || this.dragAxis.y;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DraggableDirective.prototype.setCursor = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
    };
    /**
     * @return {?}
     */
    DraggableDirective.prototype.unsubscribeEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.eventListenerSubscriptions).forEach(function (type) {
            (/** @type {?} */ (_this)).eventListenerSubscriptions[type]();
            delete (/** @type {?} */ (_this)).eventListenerSubscriptions[type];
        });
    };
    DraggableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlDraggable]'
                },] },
    ];
    /** @nocollapse */
    DraggableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], },
        { type: DraggableHelper, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], },
    ]; };
    DraggableDirective.propDecorators = {
        "dropData": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dragAxis": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dragSnapGrid": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "ghostDragEnabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "validateDrag": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dragCursor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] },],
        "dragPointerDown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "dragStart": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "dragging": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "dragEnd": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return DraggableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} clientX
 * @param {?} clientY
 * @param {?} rect
 * @return {?}
 */
function isCoordinateWithinRectangle(clientX, clientY, rect) {
    return (clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom);
}
var DroppableDirective = /** @class */ (function () {
    function DroppableDirective(element, draggableHelper, zone) {
        this.element = element;
        this.draggableHelper = draggableHelper;
        this.zone = zone;
        /**
         * Called when a draggable element starts overlapping the element
         */
        this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when a draggable element stops overlapping the element
         */
        this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when a draggable element is moved over the element
         */
        this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when a draggable element is dropped on this element
         */
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(function (drag) {
            var /** @type {?} */ droppableRectangle = _this.element.nativeElement.getBoundingClientRect();
            var /** @type {?} */ currentDragDropData;
            var /** @type {?} */ overlaps = drag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var clientX = _a.clientX, clientY = _a.clientY, dropData = _a.dropData;
                currentDragDropData = dropData;
                return isCoordinateWithinRectangle(clientX, clientY, droppableRectangle);
            }));
            var /** @type {?} */ overlapsChanged = overlaps.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
            var /** @type {?} */ dragOverActive; // TODO - see if there's a way of doing this via rxjs
            overlapsChanged
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (overlapsNow) { return overlapsNow; }))
                .subscribe(function () {
                dragOverActive = true;
                _this.zone.run(function () {
                    _this.dragEnter.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlaps.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (overlapsNow) { return overlapsNow; })).subscribe(function () {
                _this.zone.run(function () {
                    _this.dragOver.next({
                        dropData: currentDragDropData
                    });
                });
            });
            overlapsChanged
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])())
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(_a, 2), didOverlap = _b[0], overlapsNow = _b[1];
                return didOverlap && !overlapsNow;
            }))
                .subscribe(function () {
                dragOverActive = false;
                _this.zone.run(function () {
                    _this.dragLeave.next({
                        dropData: currentDragDropData
                    });
                });
            });
            drag.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () { return overlaps; })).subscribe({
                complete: function () {
                    if (dragOverActive) {
                        _this.zone.run(function () {
                            _this.drop.next({
                                dropData: currentDragDropData
                            });
                        });
                    }
                }
            });
        });
    };
    /**
     * @return {?}
     */
    DroppableDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.currentDragSubscription.unsubscribe();
    };
    DroppableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: '[mwlDroppable]'
                },] },
    ];
    /** @nocollapse */
    DroppableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], },
        { type: DraggableHelper, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], },
    ]; };
    DroppableDirective.propDecorators = {
        "dragEnter": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "dragLeave": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "dragOver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
        "drop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] },],
    };
    return DroppableDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DragAndDropModule = /** @class */ (function () {
    function DragAndDropModule() {
    }
    /**
     * @return {?}
     */
    DragAndDropModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DragAndDropModule,
            providers: [DraggableHelper]
        };
    };
    DragAndDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [DraggableDirective, DroppableDirective],
                    exports: [DraggableDirective, DroppableDirective]
                },] },
    ];
    return DragAndDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUvZHJhZ2dhYmxlLWhlbHBlci5wcm92aWRlci50cyIsIm5nOi8vYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlL2RyYWdnYWJsZS5kaXJlY3RpdmUudHMiLCJuZzovL2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZS9kcm9wcGFibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLWRyYWdnYWJsZS1kcm9wcGFibGUvZHJhZy1hbmQtZHJvcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSGVscGVyIHtcbiAgY3VycmVudERyYWc6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBOZ1pvbmUsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgdGFrZVVudGlsLFxuICB0YWtlLFxuICB0YWtlTGFzdCxcbiAgcGFpcndpc2UsXG4gIHNoYXJlLFxuICBmaWx0ZXJcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSGVscGVyIH0gZnJvbSAnLi9kcmFnZ2FibGUtaGVscGVyLnByb3ZpZGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlcyB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdBeGlzIHtcbiAgeDogYm9vbGVhbjtcbiAgeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTbmFwR3JpZCB7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIFZhbGlkYXRlRHJhZyA9IChjb29yZGluYXRlczogQ29vcmRpbmF0ZXMpID0+IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRlckV2ZW50IHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICBjbGllbnRZOiBudW1iZXI7XG4gIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbn1cblxuY29uc3QgTU9WRV9DVVJTT1I6IHN0cmluZyA9ICdtb3ZlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bERyYWdnYWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogYW4gb2JqZWN0IG9mIGRhdGEgeW91IGNhbiBwYXNzIHRvIHRoZSBkcm9wIGV2ZW50XG4gICAqL1xuICBASW5wdXQoKSBkcm9wRGF0YTogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgYXhpcyBhbG9uZyB3aGljaCB0aGUgZWxlbWVudCBpcyBkcmFnZ2FibGVcbiAgICovXG4gIEBJbnB1dCgpIGRyYWdBeGlzOiBEcmFnQXhpcyA9IHsgeDogdHJ1ZSwgeTogdHJ1ZSB9O1xuXG4gIC8qKlxuICAgKiBTbmFwIGFsbCBkcmFncyB0byBhbiB4IC8geSBncmlkXG4gICAqL1xuICBASW5wdXQoKSBkcmFnU25hcEdyaWQ6IFNuYXBHcmlkID0ge307XG5cbiAgLyoqXG4gICAqIFNob3cgYSBnaG9zdCBlbGVtZW50IHRoYXQgc2hvd3MgdGhlIGRyYWcgd2hlbiBkcmFnZ2luZ1xuICAgKi9cbiAgQElucHV0KCkgZ2hvc3REcmFnRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEFsbG93IGN1c3RvbSBiZWhhdmlvdXIgdG8gY29udHJvbCB3aGVuIHRoZSBlbGVtZW50IGlzIGRyYWdnZWRcbiAgICovXG4gIEBJbnB1dCgpIHZhbGlkYXRlRHJhZzogVmFsaWRhdGVEcmFnO1xuXG4gIC8qKlxuICAgKiBUaGUgY3Vyc29yIHRvIHVzZSB3aGVuIGRyYWdnaW5nIHRoZSBlbGVtZW50XG4gICAqL1xuICBASW5wdXQoKSBkcmFnQ3Vyc29yID0gTU9WRV9DVVJTT1I7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGNhbiBiZSBkcmFnZ2VkIGFsb25nIG9uZSBheGlzIGFuZCBoYXMgdGhlIG1vdXNlIG9yIHBvaW50ZXIgZGV2aWNlIHByZXNzZWQgb24gaXRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnUG9pbnRlckRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPENvb3JkaW5hdGVzPigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBoYXMgc3RhcnRlZCB0byBiZSBkcmFnZ2VkLlxuICAgKiBPbmx5IGNhbGxlZCBhZnRlciBhdCBsZWFzdCBvbmUgbW91c2Ugb3IgdG91Y2ggbW92ZSBldmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29vcmRpbmF0ZXM+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzIGJlaW5nIGRyYWdnZWRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnZ2luZyA9IG5ldyBFdmVudEVtaXR0ZXI8Q29vcmRpbmF0ZXM+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBkcmFnZ2VkXG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q29vcmRpbmF0ZXM+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHBvaW50ZXJEb3duOiBTdWJqZWN0PFBvaW50ZXJFdmVudD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwb2ludGVyTW92ZTogU3ViamVjdDxQb2ludGVyRXZlbnQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcG9pbnRlclVwOiBTdWJqZWN0PFBvaW50ZXJFdmVudD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnM6IHtcbiAgICBtb3VzZW1vdmU/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNlZG93bj86ICgpID0+IHZvaWQ7XG4gICAgbW91c2V1cD86ICgpID0+IHZvaWQ7XG4gICAgbW91c2VlbnRlcj86ICgpID0+IHZvaWQ7XG4gICAgbW91c2VsZWF2ZT86ICgpID0+IHZvaWQ7XG4gICAgdG91Y2hzdGFydD86ICgpID0+IHZvaWQ7XG4gICAgdG91Y2htb3ZlPzogKCkgPT4gdm9pZDtcbiAgICB0b3VjaGVuZD86ICgpID0+IHZvaWQ7XG4gICAgdG91Y2hjYW5jZWw/OiAoKSA9PiB2b2lkO1xuICB9ID0ge307XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGRyYWdnYWJsZUhlbHBlcjogRHJhZ2dhYmxlSGVscGVyLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnN0IHBvaW50ZXJEcmFnOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLnBvaW50ZXJEb3duXG4gICAgICAucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5jYW5EcmFnKCkpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKChwb2ludGVyRG93bkV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50RHJhZzogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcblxuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmFnUG9pbnRlckRvd24ubmV4dCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBwb2ludGVyTW92ZTogT2JzZXJ2YWJsZTxDb29yZGluYXRlcz4gPSB0aGlzLnBvaW50ZXJNb3ZlXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChwb2ludGVyTW92ZUV2ZW50OiBQb2ludGVyRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBwb2ludGVyTW92ZUV2ZW50LmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgY3VycmVudERyYWcsXG4gICAgICAgICAgICAgICAgICB4OiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFggLSBwb2ludGVyRG93bkV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICB5OiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFkgLSBwb2ludGVyRG93bkV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgICBjbGllbnRYOiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOiBwb2ludGVyTW92ZUV2ZW50LmNsaWVudFlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgobW92ZURhdGE6IENvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ1NuYXBHcmlkLngpIHtcbiAgICAgICAgICAgICAgICAgIG1vdmVEYXRhLnggPVxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG1vdmVEYXRhLnggLyB0aGlzLmRyYWdTbmFwR3JpZC54KSAqXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1NuYXBHcmlkLng7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZHJhZ1NuYXBHcmlkLnkpIHtcbiAgICAgICAgICAgICAgICAgIG1vdmVEYXRhLnkgPVxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKG1vdmVEYXRhLnkgLyB0aGlzLmRyYWdTbmFwR3JpZC55KSAqXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1NuYXBHcmlkLnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vdmVEYXRhO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcCgobW92ZURhdGE6IENvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRyYWdBeGlzLngpIHtcbiAgICAgICAgICAgICAgICAgIG1vdmVEYXRhLnggPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kcmFnQXhpcy55KSB7XG4gICAgICAgICAgICAgICAgICBtb3ZlRGF0YS55ID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbW92ZURhdGE7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgICAgICh7IHgsIHkgfSkgPT4gIXRoaXMudmFsaWRhdGVEcmFnIHx8IHRoaXMudmFsaWRhdGVEcmFnKHsgeCwgeSB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZSh0YWtlVW50aWwobWVyZ2UodGhpcy5wb2ludGVyVXAsIHRoaXMucG9pbnRlckRvd24pKSlcbiAgICAgICAgICAgIC5waXBlKHNoYXJlKCkpO1xuXG4gICAgICAgICAgcG9pbnRlck1vdmUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgcG9pbnRlckRvd25FdmVudC5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnU3RhcnQubmV4dCh7IHg6IDAsIHk6IDAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRDdXJzb3IodGhpcy5kcmFnQ3Vyc29yKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnZ2FibGVIZWxwZXIuY3VycmVudERyYWcubmV4dChjdXJyZW50RHJhZyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBwb2ludGVyTW92ZS5waXBlKHRha2VMYXN0KDEpKS5zdWJzY3JpYmUoKHsgeCwgeSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5kcmFnRW5kLm5leHQoeyB4LCB5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjdXJyZW50RHJhZy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRDc3NUcmFuc2Zvcm0oJycpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2hvc3REcmFnRW5hYmxlZCkge1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgICAgICdwb2ludGVyRXZlbnRzJyxcbiAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHBvaW50ZXJNb3ZlO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoc2hhcmUoKSk7XG5cbiAgICBtZXJnZShcbiAgICAgIHBvaW50ZXJEcmFnLnBpcGUodGFrZSgxKSkucGlwZShtYXAodmFsdWUgPT4gWywgdmFsdWVdKSksXG4gICAgICBwb2ludGVyRHJhZy5waXBlKHBhaXJ3aXNlKCkpXG4gICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoW3ByZXZpb3VzLCBuZXh0XSkgPT4ge1xuICAgICAgICAgIGlmICghcHJldmlvdXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJldmlvdXMueCAhPT0gbmV4dC54IHx8IHByZXZpb3VzLnkgIT09IG5leHQueTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5waXBlKG1hcCgoW3ByZXZpb3VzLCBuZXh0XSkgPT4gbmV4dCkpXG4gICAgICAuc3Vic2NyaWJlKCh7IHgsIHksIGN1cnJlbnREcmFnLCBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmFnZ2luZy5uZXh0KHsgeCwgeSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmdob3N0RHJhZ0VuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAncG9pbnRlckV2ZW50cycsXG4gICAgICAgICAgICAnbm9uZSdcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q3NzVHJhbnNmb3JtKGB0cmFuc2xhdGUoJHt4fXB4LCAke3l9cHgpYCk7XG4gICAgICAgIGN1cnJlbnREcmFnLm5leHQoe1xuICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICBkcm9wRGF0YTogdGhpcy5kcm9wRGF0YVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzWydkcmFnQXhpcyddKSB7XG4gICAgICB0aGlzLmNoZWNrRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnBvaW50ZXJEb3duLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5wb2ludGVyTW92ZS5jb21wbGV0ZSgpO1xuICAgIHRoaXMucG9pbnRlclVwLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgY29uc3QgY2FuRHJhZzogYm9vbGVhbiA9IHRoaXMuY2FuRHJhZygpO1xuICAgIGNvbnN0IGhhc0V2ZW50TGlzdGVuZXJzOiBib29sZWFuID1cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMpLmxlbmd0aCA+IDA7XG5cbiAgICBpZiAoY2FuRHJhZyAmJiAhaGFzRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vkb3duID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlZG93bicsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZXVwID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAnbW91c2V1cCcsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uTW91c2VVcChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hzdGFydCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaGVuZCA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2hjYW5jZWwgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICd0b3VjaGNhbmNlbCcsXG4gICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlZW50ZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnbW91c2VlbnRlcicsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlRW50ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZWxlYXZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21vdXNlbGVhdmUnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZUxlYXZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghY2FuRHJhZyAmJiBoYXNFdmVudExpc3RlbmVycykge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5tb3VzZW1vdmUpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICdkb2N1bWVudCcsXG4gICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAobW91c2VNb3ZlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLnBvaW50ZXJNb3ZlLm5leHQoe1xuICAgICAgICAgICAgZXZlbnQ6IG1vdXNlTW92ZUV2ZW50LFxuICAgICAgICAgICAgY2xpZW50WDogbW91c2VNb3ZlRXZlbnQuY2xpZW50WCxcbiAgICAgICAgICAgIGNsaWVudFk6IG1vdXNlTW92ZUV2ZW50LmNsaWVudFlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wb2ludGVyRG93bi5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFlcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlKSB7XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLm1vdXNlbW92ZSgpO1xuICAgICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMubW91c2Vtb3ZlO1xuICAgIH1cbiAgICB0aGlzLnBvaW50ZXJVcC5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFlcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Ub3VjaFN0YXJ0KGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLnRvdWNobW92ZSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgICh0b3VjaE1vdmVFdmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMucG9pbnRlck1vdmUubmV4dCh7XG4gICAgICAgICAgICBldmVudDogdG91Y2hNb3ZlRXZlbnQsXG4gICAgICAgICAgICBjbGllbnRYOiB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICBjbGllbnRZOiB0b3VjaE1vdmVFdmVudC50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5wb2ludGVyRG93bi5uZXh0KHtcbiAgICAgIGV2ZW50LFxuICAgICAgY2xpZW50WDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmUpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMudG91Y2htb3ZlKCk7XG4gICAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy50b3VjaG1vdmU7XG4gICAgfVxuICAgIHRoaXMucG9pbnRlclVwLm5leHQoe1xuICAgICAgZXZlbnQsXG4gICAgICBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgY2xpZW50WTogZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDdXJzb3IodGhpcy5kcmFnQ3Vyc29yKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q3Vyc29yKCcnKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3NzVHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5naG9zdERyYWdFbmFibGVkKSB7XG4gICAgICBjb25zdCB0cmFuc2Zvcm1BdHRyaWJ1dGVzID0gW1xuICAgICAgICAndHJhbnNmb3JtJyxcbiAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgICAgICAgJy1tcy10cmFuc2Zvcm0nLFxuICAgICAgICAnLW1vei10cmFuc2Zvcm0nLFxuICAgICAgICAnLW8tdHJhbnNmb3JtJ1xuICAgICAgXTtcbiAgICAgIHRyYW5zZm9ybUF0dHJpYnV0ZXMuZm9yRWFjaCh0cmFuc2Zvcm1BdHRyaWJ1dGUgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgIHRyYW5zZm9ybUF0dHJpYnV0ZSxcbiAgICAgICAgICB2YWx1ZVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYW5EcmFnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRyYWdBeGlzLnggfHwgdGhpcy5kcmFnQXhpcy55O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJzb3IodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCB2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ldmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucykuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICh0aGlzIGFzIGFueSkuZXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnNbdHlwZV0oKTtcbiAgICAgIGRlbGV0ZSAodGhpcyBhcyBhbnkpLmV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zW3R5cGVdO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgcGFpcndpc2UsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEcmFnZ2FibGVIZWxwZXIgfSBmcm9tICcuL2RyYWdnYWJsZS1oZWxwZXIucHJvdmlkZXInO1xuXG5mdW5jdGlvbiBpc0Nvb3JkaW5hdGVXaXRoaW5SZWN0YW5nbGUoXG4gIGNsaWVudFg6IG51bWJlcixcbiAgY2xpZW50WTogbnVtYmVyLFxuICByZWN0OiBDbGllbnRSZWN0XG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBjbGllbnRYID49IHJlY3QubGVmdCAmJlxuICAgIGNsaWVudFggPD0gcmVjdC5yaWdodCAmJlxuICAgIGNsaWVudFkgPj0gcmVjdC50b3AgJiZcbiAgICBjbGllbnRZIDw9IHJlY3QuYm90dG9tXG4gICk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcERhdGEge1xuICBkcm9wRGF0YTogYW55O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsRHJvcHBhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJvcHBhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBzdGFydHMgb3ZlcmxhcHBpbmcgdGhlIGVsZW1lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBkcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BEYXRhPigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IHN0b3BzIG92ZXJsYXBwaW5nIHRoZSBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxEcm9wRGF0YT4oKTtcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBkcmFnZ2FibGUgZWxlbWVudCBpcyBtb3ZlZCBvdmVyIHRoZSBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJhZ092ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BEYXRhPigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGRyYWdnYWJsZSBlbGVtZW50IGlzIGRyb3BwZWQgb24gdGhpcyBlbGVtZW50XG4gICAqL1xuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcERhdGE+KCk7XG5cbiAgY3VycmVudERyYWdTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBkcmFnZ2FibGVIZWxwZXI6IERyYWdnYWJsZUhlbHBlcixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaW50ZXJmYWNlIEN1cnJlbnREcmFnRGF0YSB7XG4gICAgICBjbGllbnRYOiBudW1iZXI7XG4gICAgICBjbGllbnRZOiBudW1iZXI7XG4gICAgICBkcm9wRGF0YTogYW55O1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudERyYWdTdWJzY3JpcHRpb24gPSB0aGlzLmRyYWdnYWJsZUhlbHBlci5jdXJyZW50RHJhZy5zdWJzY3JpYmUoXG4gICAgICAoZHJhZzogU3ViamVjdDxDdXJyZW50RHJhZ0RhdGE+KSA9PiB7XG4gICAgICAgIGNvbnN0IGRyb3BwYWJsZVJlY3RhbmdsZTogQ2xpZW50UmVjdCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGxldCBjdXJyZW50RHJhZ0Ryb3BEYXRhOiBhbnk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXBzID0gZHJhZy5waXBlKFxuICAgICAgICAgIG1hcCgoeyBjbGllbnRYLCBjbGllbnRZLCBkcm9wRGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50RHJhZ0Ryb3BEYXRhID0gZHJvcERhdGE7XG4gICAgICAgICAgICByZXR1cm4gaXNDb29yZGluYXRlV2l0aGluUmVjdGFuZ2xlKFxuICAgICAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgICAgICBkcm9wcGFibGVSZWN0YW5nbGVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBvdmVybGFwc0NoYW5nZWQgPSBvdmVybGFwcy5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gICAgICAgIGxldCBkcmFnT3ZlckFjdGl2ZTogYm9vbGVhbjsgLy8gVE9ETyAtIHNlZSBpZiB0aGVyZSdzIGEgd2F5IG9mIGRvaW5nIHRoaXMgdmlhIHJ4anNcblxuICAgICAgICBvdmVybGFwc0NoYW5nZWRcbiAgICAgICAgICAucGlwZShmaWx0ZXIob3ZlcmxhcHNOb3cgPT4gb3ZlcmxhcHNOb3cpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgZHJhZ092ZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0VudGVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgb3ZlcmxhcHMucGlwZShmaWx0ZXIob3ZlcmxhcHNOb3cgPT4gb3ZlcmxhcHNOb3cpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmFnT3Zlci5uZXh0KHtcbiAgICAgICAgICAgICAgZHJvcERhdGE6IGN1cnJlbnREcmFnRHJvcERhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBvdmVybGFwc0NoYW5nZWRcbiAgICAgICAgICAucGlwZShwYWlyd2lzZSgpKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKChbZGlkT3ZlcmxhcCwgb3ZlcmxhcHNOb3ddKSA9PiBkaWRPdmVybGFwICYmICFvdmVybGFwc05vdylcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBkcmFnT3ZlckFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ0xlYXZlLm5leHQoe1xuICAgICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZHJhZy5waXBlKG1lcmdlTWFwKCgpID0+IG92ZXJsYXBzKSkuc3Vic2NyaWJlKHtcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRyYWdPdmVyQWN0aXZlKSB7XG4gICAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcC5uZXh0KHtcbiAgICAgICAgICAgICAgICAgIGRyb3BEYXRhOiBjdXJyZW50RHJhZ0Ryb3BEYXRhXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudERyYWdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERyYWdnYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZ2dhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEcm9wcGFibGVEaXJlY3RpdmUgfSBmcm9tICcuL2Ryb3BwYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlSGVscGVyIH0gZnJvbSAnLi9kcmFnZ2FibGUtaGVscGVyLnByb3ZpZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcm9wcGFibGVEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbRHJhZ2dhYmxlRGlyZWN0aXZlLCBEcm9wcGFibGVEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIERyYWdBbmREcm9wTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEcmFnQW5kRHJvcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RyYWdnYWJsZUhlbHBlcl1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFFQTs7MkJBQzhCLElBQUksT0FBTyxFQUFFOzswQkFIM0M7SUFJQzs7Ozs7O0FDNkNELHFCQUFNLFdBQVcsR0FBVyxNQUFNLENBQUM7Ozs7O0lBdUZqQyw0QkFDUyxTQUNDLFVBQ0EsaUJBQ0E7UUFIRCxZQUFPLEdBQVAsT0FBTztRQUNOLGFBQVEsR0FBUixRQUFRO1FBQ1Isb0JBQWUsR0FBZixlQUFlO1FBQ2YsU0FBSSxHQUFKLElBQUk7Ozs7d0JBN0VnQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTs7Ozs0QkFLaEIsRUFBRTs7OztnQ0FLQyxJQUFJOzs7OzBCQVVuQixXQUFXOzs7OytCQUtMLElBQUksWUFBWSxFQUFlOzs7Ozt5QkFNckMsSUFBSSxZQUFZLEVBQWU7Ozs7d0JBS2hDLElBQUksWUFBWSxFQUFlOzs7O3VCQUtoQyxJQUFJLFlBQVksRUFBZTs7OzsyQkFLZCxJQUFJLE9BQU8sRUFBRTs7OzsyQkFLYixJQUFJLE9BQU8sRUFBRTs7Ozt5QkFLZixJQUFJLE9BQU8sRUFBRTswQ0FZNUMsRUFBRTtLQVVGOzs7O0lBRUoscUNBQVE7OztJQUFSO1FBQUEsaUJBZ0lDO1FBL0hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRTNCLHFCQUFNLFdBQVcsR0FBb0IsSUFBSSxDQUFDLFdBQVc7YUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxHQUFBLENBQUMsQ0FBQzthQUNsQyxJQUFJLENBQ0gsUUFBUSxDQUFDLFVBQUMsZ0JBQThCO1lBQ3RDLHFCQUFNLFdBQVcsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUVoRCxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDM0MsQ0FBQyxDQUFDO1lBRUgscUJBQU0sV0FBVyxHQUE0QixLQUFJLENBQUMsV0FBVztpQkFDMUQsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLGdCQUE4QjtnQkFDakMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV4QyxPQUFPO29CQUNMLFdBQVcsYUFBQTtvQkFDWCxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU87b0JBQ3RELENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTztvQkFDdEQsT0FBTyxFQUFFLGdCQUFnQixDQUFDLE9BQU87b0JBQ2pDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPO2lCQUNsQyxDQUFDO2FBQ0gsQ0FBQyxDQUNIO2lCQUNBLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxRQUFxQjtnQkFDeEIsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRTtvQkFDdkIsUUFBUSxDQUFDLENBQUM7d0JBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUM1QyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDdkI7Z0JBRUQsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRTtvQkFDdkIsUUFBUSxDQUFDLENBQUM7d0JBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzRCQUM1QyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDdkI7Z0JBRUQsT0FBTyxRQUFRLENBQUM7YUFDakIsQ0FBQyxDQUNIO2lCQUNBLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxRQUFxQjtnQkFDeEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO29CQUNwQixRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEI7Z0JBRUQsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO29CQUNwQixRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEI7Z0JBRUQsT0FBTyxRQUFRLENBQUM7YUFDakIsQ0FBQyxDQUNIO2lCQUNBLElBQUksQ0FDSCxNQUFNLENBQ0osVUFBQyxFQUFRO29CQUFOLFFBQUMsRUFBRSxRQUFDO2dCQUFPLE9BQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDO2FBQUEsQ0FDaEUsQ0FDRjtpQkFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2lCQUN4RCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUVqQixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDbEMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV4QyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDWixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3JDLENBQUMsQ0FBQztnQkFFSCxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFFaEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ3BELENBQUMsQ0FBQztZQUVILFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBUTtvQkFBTixRQUFDLEVBQUUsUUFBQztnQkFDN0MsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ1osS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLENBQUM7aUJBQzdCLENBQUMsQ0FBQztnQkFDSCxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksS0FBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQzFCLGVBQWUsRUFDZixFQUFFLENBQ0gsQ0FBQztpQkFDSDthQUNGLENBQUMsQ0FBQztZQUVILE9BQU8sV0FBVyxDQUFDO1NBQ3BCLENBQUMsQ0FDSDthQUNBLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLEtBQUssQ0FDSCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxHQUFHLEtBQUssQ0FBQyxHQUFBLENBQUMsQ0FBQyxFQUN2RCxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQzdCO2FBQ0UsSUFBSSxDQUNILE1BQU0sQ0FBQyxVQUFDLEVBQWdCO2dCQUFoQixrQkFBZ0IsRUFBZixnQkFBUSxFQUFFLFlBQUk7WUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxRQUFRLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZELENBQUMsQ0FDSDthQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFnQjtnQkFBaEIsa0JBQWdCLEVBQWYsZ0JBQVEsRUFBRSxZQUFJO1lBQU0sT0FBQSxJQUFJO1NBQUEsQ0FBQyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxVQUFDLEVBQXVDO2dCQUFyQyxRQUFDLEVBQUUsUUFBQyxFQUFFLDRCQUFXLEVBQUUsb0JBQU8sRUFBRSxvQkFBTztZQUMvQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsQ0FBQzthQUM5QixDQUFDLENBQUM7WUFDSCxJQUFJLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUMxQixlQUFlLEVBQ2YsTUFBTSxDQUNQLENBQUM7YUFDSDtZQUNELEtBQUksQ0FBQyxlQUFlLENBQUMsZUFBYSxDQUFDLFlBQU8sQ0FBQyxRQUFLLENBQUMsQ0FBQztZQUNsRCxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNmLE9BQU8sU0FBQTtnQkFDUCxPQUFPLFNBQUE7Z0JBQ1AsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRO2FBQ3hCLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNOOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtLQUNGOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDM0I7Ozs7SUFFTyxnREFBbUI7Ozs7O1FBQ3pCLHFCQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMscUJBQU0saUJBQWlCLEdBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUUxRCxJQUFJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQzFCLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQzlELEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUMxQixXQUFXLEVBQ1gsVUFBQyxLQUFpQjtvQkFDaEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekIsQ0FDRixDQUFDO2dCQUVGLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQzVELFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBQyxLQUFpQjtvQkFDaEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkIsQ0FDRixDQUFDO2dCQUVGLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQy9ELEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUMxQixZQUFZLEVBQ1osVUFBQyxLQUFpQjtvQkFDaEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDMUIsQ0FDRixDQUFDO2dCQUVGLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQzdELFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBQyxLQUFpQjtvQkFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEIsQ0FDRixDQUFDO2dCQUVGLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2hFLFVBQVUsRUFDVixhQUFhLEVBQ2IsVUFBQyxLQUFpQjtvQkFDaEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEIsQ0FDRixDQUFDO2dCQUVGLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQy9ELEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUMxQixZQUFZLEVBQ1o7b0JBQ0UsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2lCQUNyQixDQUNGLENBQUM7Z0JBRUYsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDL0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQzFCLFlBQVksRUFDWjtvQkFDRSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCLENBQ0YsQ0FBQzthQUNILENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxpQkFBaUIsRUFBRTtZQUN4QyxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztTQUNsQzs7Ozs7O0lBR0ssd0NBQVc7Ozs7Y0FBQyxLQUFpQjs7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLEVBQUU7WUFDOUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDOUQsVUFBVSxFQUNWLFdBQVcsRUFDWCxVQUFDLGNBQTBCO2dCQUN6QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztvQkFDcEIsS0FBSyxFQUFFLGNBQWM7b0JBQ3JCLE9BQU8sRUFBRSxjQUFjLENBQUMsT0FBTztvQkFDL0IsT0FBTyxFQUFFLGNBQWMsQ0FBQyxPQUFPO2lCQUNoQyxDQUFDLENBQUM7YUFDSixDQUNGLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3BCLEtBQUssT0FBQTtZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDdkIsQ0FBQyxDQUFDOzs7Ozs7SUFHRyxzQ0FBUzs7OztjQUFDLEtBQWlCO1FBQ2pDLElBQUksSUFBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsRUFBRTtZQUM3QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDNUMsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbEIsS0FBSyxPQUFBO1lBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztTQUN2QixDQUFDLENBQUM7Ozs7OztJQUdHLHlDQUFZOzs7O2NBQUMsS0FBaUI7O1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxFQUFFO1lBQzlDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQzlELFVBQVUsRUFDVixXQUFXLEVBQ1gsVUFBQyxjQUEwQjtnQkFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLEtBQUssRUFBRSxjQUFjO29CQUNyQixPQUFPLEVBQUUsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO29CQUNoRCxPQUFPLEVBQUUsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO2lCQUNqRCxDQUFDLENBQUM7YUFDSixDQUNGLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3BCLEtBQUssT0FBQTtZQUNMLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87WUFDakMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztTQUNsQyxDQUFDLENBQUM7Ozs7OztJQUdHLHVDQUFVOzs7O2NBQUMsS0FBaUI7UUFDbEMsSUFBSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsU0FBUyxFQUFFO1lBQzdDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1QyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztZQUNsQixLQUFLLE9BQUE7WUFDTCxPQUFPLEVBQUUsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO1lBQ3hDLE9BQU8sRUFBRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87U0FDekMsQ0FBQyxDQUFDOzs7OztJQUdHLHlDQUFZOzs7O1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7OztJQUcxQix5Q0FBWTs7OztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7SUFHYiw0Q0FBZTs7OztjQUFDLEtBQWE7O1FBQ25DLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLHFCQUFNLG1CQUFtQixHQUFHO2dCQUMxQixXQUFXO2dCQUNYLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLGNBQWM7YUFDZixDQUFDO1lBQ0YsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUEsa0JBQWtCO2dCQUM1QyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQzFCLGtCQUFrQixFQUNsQixLQUFLLENBQ04sQ0FBQzthQUNILENBQUMsQ0FBQztTQUNKOzs7OztJQUdLLG9DQUFPOzs7O1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Ozs7O0lBR3BDLHNDQUFTOzs7O2NBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7Ozs7O0lBRzlELHNEQUF5Qjs7Ozs7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ3ZELG1CQUFDLEtBQVcsR0FBRSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2pELE9BQU8sbUJBQUMsS0FBVyxHQUFFLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZELENBQUMsQ0FBQzs7O2dCQXhaTixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBbERDLFVBQVU7Z0JBQ1YsU0FBUztnQkFvQkYsZUFBZTtnQkFkdEIsTUFBTTs7OzZCQWdETCxLQUFLOzZCQUtMLEtBQUs7aUNBS0wsS0FBSztxQ0FLTCxLQUFLO2lDQUtMLEtBQUs7K0JBS0wsS0FBSztvQ0FLTCxNQUFNOzhCQU1OLE1BQU07NkJBS04sTUFBTTs0QkFLTixNQUFNOzs2QkF4R1Q7Ozs7Ozs7Ozs7Ozs7QUNtQkEscUNBQ0UsT0FBZSxFQUNmLE9BQWUsRUFDZixJQUFnQjtJQUVoQixRQUNFLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSTtRQUNwQixPQUFPLElBQUksSUFBSSxDQUFDLEtBQUs7UUFDckIsT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHO1FBQ25CLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUN0QjtDQUNIOztJQWdDQyw0QkFDVSxTQUNBLGlCQUNBO1FBRkEsWUFBTyxHQUFQLE9BQU87UUFDUCxvQkFBZSxHQUFmLGVBQWU7UUFDZixTQUFJLEdBQUosSUFBSTs7Ozt5QkF0QlEsSUFBSSxZQUFZLEVBQVk7Ozs7eUJBSzVCLElBQUksWUFBWSxFQUFZOzs7O3dCQUs3QixJQUFJLFlBQVksRUFBWTs7OztvQkFLaEMsSUFBSSxZQUFZLEVBQVk7S0FRekM7Ozs7SUFFSixxQ0FBUTs7O0lBQVI7UUFBQSxpQkF5RUM7UUFsRUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FDdkUsVUFBQyxJQUE4QjtZQUM3QixxQkFBTSxrQkFBa0IsR0FBZSxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBRTFGLHFCQUFJLG1CQUF3QixDQUFDO1lBQzdCLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUN4QixHQUFHLENBQUMsVUFBQyxFQUE4QjtvQkFBNUIsb0JBQU8sRUFBRSxvQkFBTyxFQUFFLHNCQUFRO2dCQUMvQixtQkFBbUIsR0FBRyxRQUFRLENBQUM7Z0JBQy9CLE9BQU8sMkJBQTJCLENBQ2hDLE9BQU8sRUFDUCxPQUFPLEVBQ1Asa0JBQWtCLENBQ25CLENBQUM7YUFDSCxDQUFDLENBQ0gsQ0FBQztZQUVGLHFCQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztZQUU5RCxxQkFBSSxjQUF1QixDQUFDO1lBRTVCLGVBQWU7aUJBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsR0FBQSxDQUFDLENBQUM7aUJBQ3hDLFNBQVMsQ0FBQztnQkFDVCxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDWixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsUUFBUSxFQUFFLG1CQUFtQjtxQkFDOUIsQ0FBQyxDQUFDO2lCQUNKLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztZQUVMLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxHQUFBLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7b0JBQ1osS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ2pCLFFBQVEsRUFBRSxtQkFBbUI7cUJBQzlCLENBQUMsQ0FBQztpQkFDSixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7WUFFSCxlQUFlO2lCQUNaLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDaEIsSUFBSSxDQUNILE1BQU0sQ0FBQyxVQUFDLEVBQXlCO29CQUF6QixrQkFBeUIsRUFBeEIsa0JBQVUsRUFBRSxtQkFBVztnQkFBTSxPQUFBLFVBQVUsSUFBSSxDQUFDLFdBQVc7YUFBQSxDQUFDLENBQ2xFO2lCQUNBLFNBQVMsQ0FBQztnQkFDVCxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztvQkFDWixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDbEIsUUFBUSxFQUFFLG1CQUFtQjtxQkFDOUIsQ0FBQyxDQUFDO2lCQUNKLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztZQUVMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQU0sT0FBQSxRQUFRLEdBQUEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUM1QyxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxjQUFjLEVBQUU7d0JBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzRCQUNaLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dDQUNiLFFBQVEsRUFBRSxtQkFBbUI7NkJBQzlCLENBQUMsQ0FBQzt5QkFDSixDQUFDLENBQUM7cUJBQ0o7aUJBQ0Y7YUFDRixDQUFDLENBQUM7U0FDSixDQUNGLENBQUM7S0FDSDs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM1Qzs7Z0JBN0dGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFuQ0MsVUFBVTtnQkFjSCxlQUFlO2dCQVZ0QixNQUFNOzs7OEJBb0NMLE1BQU07OEJBS04sTUFBTTs2QkFLTixNQUFNO3lCQUtOLE1BQU07OzZCQTFEVDs7Ozs7OztBQ0FBOzs7Ozs7SUFVUyx5QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDN0IsQ0FBQztLQUNIOztnQkFWRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3RELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO2lCQUNsRDs7NEJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js ***!
  \***********************************************************************************/
/*! exports provided: ResizableDirective, ResizeHandleDirective, ResizableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableDirective", function() { return ResizableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeHandleDirective", function() { return ResizeHandleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableModule", function() { return ResizableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */
function isNumberCloseTo(value1, value2, precision) {
    if (precision === void 0) { precision = 3; }
    var /** @type {?} */ diff = Math.abs(value1 - value2);
    return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    var /** @type {?} */ newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */
function getElementRect(element, ghostElementPositioning) {
    var /** @type {?} */ translateX = 0;
    var /** @type {?} */ translateY = 0;
    var /** @type {?} */ style = element.nativeElement.style;
    var /** @type {?} */ transformProperties = [
        'transform',
        '-ms-transform',
        '-moz-transform',
        '-o-transform'
    ];
    var /** @type {?} */ transform = transformProperties
        .map(function (property) { return style[property]; })
        .find(function (value) { return !!value; });
    if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$1');
        translateY = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$2');
    }
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight +
                element.nativeElement.offsetTop -
                translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth +
                element.nativeElement.offsetLeft -
                translateX
        };
    }
    else {
        var /** @type {?} */ boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingY(_a) {
    var clientY = _a.clientY, rect = _a.rect;
    return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingX(_a) {
    var clientX = _a.clientX, rect = _a.rect;
    return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getResizeEdges(_a) {
    var clientX = _a.clientX, clientY = _a.clientY, elm = _a.elm, allowedEdges = _a.allowedEdges, cursorPrecision = _a.cursorPrecision;
    var /** @type {?} */ elmPosition = elm.nativeElement.getBoundingClientRect();
    var /** @type {?} */ edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY: clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX: clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
var /** @type {?} */ DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'col-resize',
    topOrBottom: 'row-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEdgesDiff(_a) {
    var edges = _a.edges, initialRectangle = _a.initialRectangle, newRectangle = _a.newRectangle;
    var /** @type {?} */ edgesDiff = {};
    Object.keys(edges).forEach(function (edge) {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
    });
    return edgesDiff;
}
var /** @type {?} */ RESIZE_ACTIVE_CLASS = 'resize-active';
var /** @type {?} */ RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
var /** @type {?} */ RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
var /** @type {?} */ RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
var /** @type {?} */ RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
var /** @type {?} */ RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
var /** @type {?} */ MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
var ResizableDirective = /** @class */ (function () {
    /**
     * @hidden
     */
    function ResizableDirective(renderer, elm, zone) {
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */
        this.allowNegativeResizes = false;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * @hidden
         */
        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * @hidden
         */
        this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * @hidden
         */
        this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pointerEventListenerSubscriptions = {};
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnInit = /**
     * @hidden
     * @return {?}
     */
    function () {
        var _this = this;
        // TODO - use some fancy Observable.merge's for this
        this.pointerEventListenerSubscriptions.pointerDown = this.pointerEventListeners.pointerDown.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mousedown.next({ clientX: clientX, clientY: clientY });
        });
        this.pointerEventListenerSubscriptions.pointerMove = this.pointerEventListeners.pointerMove.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, event = _a.event;
            _this.mousemove.next({ clientX: clientX, clientY: clientY, event: event });
        });
        this.pointerEventListenerSubscriptions.pointerUp = this.pointerEventListeners.pointerUp.subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            _this.mouseup.next({ clientX: clientX, clientY: clientY });
        });
        var /** @type {?} */ currentResize;
        var /** @type {?} */ removeGhostElement = function () {
            if (currentResize && currentResize.clonedNode) {
                _this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        var /** @type {?} */ mouseMove = this.mousemove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        mouseMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !!currentResize; })).subscribe(function (_a) {
            var event = _a.event;
            event.preventDefault();
        });
        mouseMove
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(MOUSE_MOVE_THROTTLE_MS); }))
            .subscribe(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            var /** @type {?} */ resizeEdges = getResizeEdges({
                clientX: clientX,
                clientY: clientY,
                elm: _this.elm,
                allowedEdges: _this.resizeEdges,
                cursorPrecision: _this.resizeCursorPrecision
            });
            var /** @type {?} */ resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
            if (currentResize) {
                var /** @type {?} */ cursor = getResizeCursor(currentResize.edges, resizeCursors);
                _this.renderer.setStyle(document.body, 'cursor', cursor);
            }
            else {
                var /** @type {?} */ cursor = getResizeCursor(resizeEdges, resizeCursors);
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', cursor);
            }
            _this.setElementClass(_this.elm, RESIZE_ACTIVE_CLASS, !!currentResize);
            _this.setElementClass(_this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            _this.setElementClass(_this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            _this.setElementClass(_this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            _this.setElementClass(_this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        var /** @type {?} */ mousedrag = this.mousedown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (startCoords) {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            }
            var /** @type {?} */ getSnapGrid = function () {
                var /** @type {?} */ snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (_this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +_this.resizeSnapGrid.left;
                    }
                    else if (_this.resizeSnapGrid.right &&
                        currentResize.edges.right) {
                        snapGrid.x = +_this.resizeSnapGrid.right;
                    }
                    if (_this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +_this.resizeSnapGrid.top;
                    }
                    else if (_this.resizeSnapGrid.bottom &&
                        currentResize.edges.bottom) {
                        snapGrid.y = +_this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */
            function getGrid(coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(mouseMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (coords) { return [, coords]; })), mouseMove.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])()))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), previousCoords = _b[0], newCoords = _b[1];
                return [
                    previousCoords ? getDiff(previousCoords) : previousCoords,
                    getDiff(newCoords)
                ];
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), previousCoords = _b[0], newCoords = _b[1];
                if (!previousCoords) {
                    return true;
                }
                var /** @type {?} */ snapGrid = getSnapGrid();
                var /** @type {?} */ previousGrid = getGrid(previousCoords, snapGrid);
                var /** @type {?} */ newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), newCoords = _b[1];
                var /** @type {?} */ snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(_this.mouseup, _this.mousedown)));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () { return !!currentResize; }));
        mousedrag
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY;
            return getNewBoundingRectangle(/** @type {?} */ ((currentResize)).startingRect, /** @type {?} */ ((currentResize)).edges, clientX, clientY);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (newBoundingRect) {
            return (_this.allowNegativeResizes ||
                !!(newBoundingRect.height &&
                    newBoundingRect.width &&
                    newBoundingRect.height > 0 &&
                    newBoundingRect.width > 0));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (newBoundingRect) {
            return _this.validateResize
                ? _this.validateResize({
                    rectangle: newBoundingRect,
                    edges: getEdgesDiff({
                        edges: /** @type {?} */ ((currentResize)).edges,
                        initialRectangle: /** @type {?} */ ((currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    })
                })
                : true;
        }))
            .subscribe(function (newBoundingRect) {
            if (currentResize && currentResize.clonedNode) {
                _this.renderer.setStyle(currentResize.clonedNode, 'height', newBoundingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', newBoundingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', newBoundingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'left', newBoundingRect.left + "px");
            }
            _this.zone.run(function () {
                _this.resizing.emit({
                    edges: getEdgesDiff({
                        edges: /** @type {?} */ ((currentResize)).edges,
                        initialRectangle: /** @type {?} */ ((currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                });
            }); /** @type {?} */
            ((currentResize)).currentRect = newBoundingRect;
        });
        this.mousedown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var clientX = _a.clientX, clientY = _a.clientY, edges = _a.edges;
            return (edges ||
                getResizeEdges({
                    clientX: clientX,
                    clientY: clientY,
                    elm: _this.elm,
                    allowedEdges: _this.resizeEdges,
                    cursorPrecision: _this.resizeCursorPrecision
                }));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (edges) {
            return Object.keys(edges).length > 0;
        }))
            .subscribe(function (edges) {
            if (currentResize) {
                removeGhostElement();
            }
            var /** @type {?} */ startingRect = getElementRect(_this.elm, _this.ghostElementPositioning);
            currentResize = {
                edges: edges,
                startingRect: startingRect,
                currentRect: startingRect
            };
            if (_this.enableGhostResize) {
                currentResize.clonedNode = _this.elm.nativeElement.cloneNode(true);
                var /** @type {?} */ resizeCursors = Object.assign({}, DEFAULT_RESIZE_CURSORS, _this.resizeCursors);
                _this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                _this.renderer.setStyle(_this.elm.nativeElement, 'visibility', 'hidden');
                _this.renderer.setStyle(currentResize.clonedNode, 'position', _this.ghostElementPositioning);
                _this.renderer.setStyle(currentResize.clonedNode, 'left', currentResize.startingRect.left + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'top', currentResize.startingRect.top + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'height', currentResize.startingRect.height + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'width', currentResize.startingRect.width + "px");
                _this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                _this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS); /** @type {?} */
                ((currentResize.clonedNode)).scrollTop = /** @type {?} */ (currentResize.startingRect
                    .scrollTop); /** @type {?} */
                ((currentResize.clonedNode)).scrollLeft = /** @type {?} */ (currentResize.startingRect
                    .scrollLeft);
            }
            _this.zone.run(function () {
                _this.resizeStart.emit({
                    edges: getEdgesDiff({
                        edges: edges,
                        initialRectangle: startingRect,
                        newRectangle: startingRect
                    }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
            });
        });
        this.mouseup.subscribe(function () {
            if (currentResize) {
                _this.renderer.removeClass(_this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                _this.renderer.setStyle(document.body, 'cursor', '');
                _this.renderer.setStyle(_this.elm.nativeElement, 'cursor', '');
                _this.zone.run(function () {
                    _this.resizeEnd.emit({
                        edges: getEdgesDiff({
                            edges: /** @type {?} */ ((currentResize)).edges,
                            initialRectangle: /** @type {?} */ ((currentResize)).startingRect,
                            newRectangle: /** @type {?} */ ((currentResize)).currentRect
                        }),
                        rectangle: /** @type {?} */ ((currentResize)).currentRect
                    });
                });
                removeGhostElement();
                currentResize = null;
            }
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @return {?}
     */
    ResizableDirective.prototype.ngOnDestroy = /**
     * @hidden
     * @return {?}
     */
    function () {
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.pointerEventListenerSubscriptions.pointerDown.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerMove.unsubscribe();
        this.pointerEventListenerSubscriptions.pointerUp.unsubscribe();
    };
    /**
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    ResizableDirective.prototype.setElementClass = /**
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    function (elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    };
    ResizableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[mwlResizable]'
                },] }
    ];
    /** @nocollapse */
    ResizableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ResizableDirective.propDecorators = {
        validateResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        enableGhostResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeSnapGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeCursors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeCursorPrecision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        ghostElementPositioning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        allowNegativeResizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        resizeStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        resizing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        resizeEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return ResizableDirective;
}());
var PointerEventListeners = /** @class */ (function () {
    function PointerEventListeners(renderer, zone) {
        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var /** @type {?} */ unsubscribeMouseDown;
            var /** @type {?} */ unsubscribeTouchStart;
            zone.runOutsideAngular(function () {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', function (event) {
                    observer.next({
                        clientX: event.touches[0].clientX,
                        clientY: event.touches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseDown();
                unsubscribeTouchStart();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var /** @type {?} */ unsubscribeMouseMove;
            var /** @type {?} */ unsubscribeTouchMove;
            zone.runOutsideAngular(function () {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', function (event) {
                    observer.next({
                        clientX: event.targetTouches[0].clientX,
                        clientY: event.targetTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseMove();
                unsubscribeTouchMove();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            var /** @type {?} */ unsubscribeMouseUp;
            var /** @type {?} */ unsubscribeTouchEnd;
            var /** @type {?} */ unsubscribeTouchCancel;
            zone.runOutsideAngular(function () {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', function (event) {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event: event
                    });
                });
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', function (event) {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event: event
                    });
                });
            });
            return function () {
                unsubscribeMouseUp();
                unsubscribeTouchEnd();
                unsubscribeTouchCancel();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
    }
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    PointerEventListeners.getInstance = /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    function (renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    };
    return PointerEventListeners;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 */
var ResizeHandleDirective = /** @class */ (function () {
    function ResizeHandleDirective(renderer, element, zone, resizable) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeEventListeners();
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousedown = /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        var _this = this;
        event.preventDefault();
        this.zone.runOutsideAngular(function () {
            if (!_this.eventListeners.touchmove) {
                _this.eventListeners.touchmove = _this.renderer.listen(_this.element.nativeElement, 'touchmove', function (touchMoveEvent) {
                    _this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
                });
            }
            if (!_this.eventListeners.mousemove) {
                _this.eventListeners.mousemove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', function (mouseMoveEvent) {
                    _this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
                });
            }
            _this.resizable.mousedown.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @hidden
     */
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMouseup = /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (clientX, clientY) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.unsubscribeEventListeners();
            _this.resizable.mouseup.next({
                clientX: clientX,
                clientY: clientY,
                edges: _this.resizeEdges
            });
        });
    };
    /**
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    ResizeHandleDirective.prototype.onMousemove = /**
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    function (event, clientX, clientY) {
        this.resizable.mousemove.next({
            clientX: clientX,
            clientY: clientY,
            edges: this.resizeEdges,
            event: event
        });
    };
    /**
     * @return {?}
     */
    ResizeHandleDirective.prototype.unsubscribeEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            (/** @type {?} */ (_this)).eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    ResizeHandleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[mwlResizeHandle]'
                },] }
    ];
    /** @nocollapse */
    ResizeHandleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: ResizableDirective }
    ]; };
    ResizeHandleDirective.propDecorators = {
        resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchstart', [
                        '$event',
                        '$event.touches[0].clientX',
                        '$event.touches[0].clientY'
                    ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] }],
        onMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchend', [
                        '$event.changedTouches[0].clientX',
                        '$event.changedTouches[0].clientY'
                    ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['touchcancel', [
                        '$event.changedTouches[0].clientX',
                        '$event.changedTouches[0].clientY'
                    ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['mouseup', ['$event.clientX', '$event.clientY'],] }]
    };
    return ResizeHandleDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ResizableModule = /** @class */ (function () {
    function ResizableModule() {
    }
    ResizableModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [ResizableDirective, ResizeHandleDirective],
                    exports: [ResizableDirective, ResizeHandleDirective]
                },] }
    ];
    return ResizableModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yZXNpemFibGUtZWxlbWVudC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1yZXNpemFibGUtZWxlbWVudC9yZXNpemFibGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50L3Jlc2l6ZS1oYW5kbGUuZGlyZWN0aXZlLnRzIiwibmc6Ly9hbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50L3Jlc2l6YWJsZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBJbnB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIE9ic2VydmVyLCBtZXJnZSwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIG1hcCxcbiAgbWVyZ2VNYXAsXG4gIHRha2VVbnRpbCxcbiAgZmlsdGVyLFxuICBwYWlyd2lzZSxcbiAgdGFrZSxcbiAgdGhyb3R0bGUsXG4gIHNoYXJlXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVkZ2VzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2VkZ2VzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBCb3VuZGluZ1JlY3RhbmdsZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9ib3VuZGluZy1yZWN0YW5nbGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IFJlc2l6ZUV2ZW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3Jlc2l6ZS1ldmVudC5pbnRlcmZhY2UnO1xuXG5pbnRlcmZhY2UgUG9pbnRlckV2ZW50Q29vcmRpbmF0ZSB7XG4gIGNsaWVudFg6IG51bWJlcjtcbiAgY2xpZW50WTogbnVtYmVyO1xuICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQ7XG59XG5cbmludGVyZmFjZSBDb29yZGluYXRlIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyQ2xvc2VUbyhcbiAgdmFsdWUxOiBudW1iZXIsXG4gIHZhbHVlMjogbnVtYmVyLFxuICBwcmVjaXNpb246IG51bWJlciA9IDNcbik6IGJvb2xlYW4ge1xuICBjb25zdCBkaWZmOiBudW1iZXIgPSBNYXRoLmFicyh2YWx1ZTEgLSB2YWx1ZTIpO1xuICByZXR1cm4gZGlmZiA8IHByZWNpc2lvbjtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3Qm91bmRpbmdSZWN0YW5nbGUoXG4gIHN0YXJ0aW5nUmVjdDogQm91bmRpbmdSZWN0YW5nbGUsXG4gIGVkZ2VzOiBFZGdlcyxcbiAgY2xpZW50WDogbnVtYmVyLFxuICBjbGllbnRZOiBudW1iZXJcbik6IEJvdW5kaW5nUmVjdGFuZ2xlIHtcbiAgY29uc3QgbmV3Qm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSA9IHtcbiAgICB0b3A6IHN0YXJ0aW5nUmVjdC50b3AsXG4gICAgYm90dG9tOiBzdGFydGluZ1JlY3QuYm90dG9tLFxuICAgIGxlZnQ6IHN0YXJ0aW5nUmVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBzdGFydGluZ1JlY3QucmlnaHRcbiAgfTtcblxuICBpZiAoZWRnZXMudG9wKSB7XG4gICAgbmV3Qm91bmRpbmdSZWN0LnRvcCArPSBjbGllbnRZO1xuICB9XG4gIGlmIChlZGdlcy5ib3R0b20pIHtcbiAgICBuZXdCb3VuZGluZ1JlY3QuYm90dG9tICs9IGNsaWVudFk7XG4gIH1cbiAgaWYgKGVkZ2VzLmxlZnQpIHtcbiAgICBuZXdCb3VuZGluZ1JlY3QubGVmdCArPSBjbGllbnRYO1xuICB9XG4gIGlmIChlZGdlcy5yaWdodCkge1xuICAgIG5ld0JvdW5kaW5nUmVjdC5yaWdodCArPSBjbGllbnRYO1xuICB9XG4gIG5ld0JvdW5kaW5nUmVjdC5oZWlnaHQgPSBuZXdCb3VuZGluZ1JlY3QuYm90dG9tIC0gbmV3Qm91bmRpbmdSZWN0LnRvcDtcbiAgbmV3Qm91bmRpbmdSZWN0LndpZHRoID0gbmV3Qm91bmRpbmdSZWN0LnJpZ2h0IC0gbmV3Qm91bmRpbmdSZWN0LmxlZnQ7XG5cbiAgcmV0dXJuIG5ld0JvdW5kaW5nUmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFJlY3QoXG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gIGdob3N0RWxlbWVudFBvc2l0aW9uaW5nOiBzdHJpbmdcbik6IEJvdW5kaW5nUmVjdGFuZ2xlIHtcbiAgbGV0IHRyYW5zbGF0ZVggPSAwO1xuICBsZXQgdHJhbnNsYXRlWSA9IDA7XG4gIGNvbnN0IHN0eWxlID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlO1xuICBjb25zdCB0cmFuc2Zvcm1Qcm9wZXJ0aWVzID0gW1xuICAgICd0cmFuc2Zvcm0nLFxuICAgICctbXMtdHJhbnNmb3JtJyxcbiAgICAnLW1vei10cmFuc2Zvcm0nLFxuICAgICctby10cmFuc2Zvcm0nXG4gIF07XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHRyYW5zZm9ybVByb3BlcnRpZXNcbiAgICAubWFwKHByb3BlcnR5ID0+IHN0eWxlW3Byb3BlcnR5XSlcbiAgICAuZmluZCh2YWx1ZSA9PiAhIXZhbHVlKTtcbiAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0uaW5jbHVkZXMoJ3RyYW5zbGF0ZScpKSB7XG4gICAgdHJhbnNsYXRlWCA9IHRyYW5zZm9ybS5yZXBsYWNlKC8uKnRyYW5zbGF0ZVxcKCguKilweCwgKC4qKXB4XFwpLiovLCAnJDEnKTtcbiAgICB0cmFuc2xhdGVZID0gdHJhbnNmb3JtLnJlcGxhY2UoLy4qdHJhbnNsYXRlXFwoKC4qKXB4LCAoLiopcHhcXCkuKi8sICckMicpO1xuICB9XG5cbiAgaWYgKGdob3N0RWxlbWVudFBvc2l0aW9uaW5nID09PSAnYWJzb2x1dGUnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlaWdodDogZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgIHdpZHRoOiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICB0b3A6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLSB0cmFuc2xhdGVZLFxuICAgICAgYm90dG9tOlxuICAgICAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICtcbiAgICAgICAgZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtXG4gICAgICAgIHRyYW5zbGF0ZVksXG4gICAgICBsZWZ0OiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0TGVmdCAtIHRyYW5zbGF0ZVgsXG4gICAgICByaWdodDpcbiAgICAgICAgZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoICtcbiAgICAgICAgZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgLVxuICAgICAgICB0cmFuc2xhdGVYXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBib3VuZGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlID0gZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IGJvdW5kaW5nUmVjdC5oZWlnaHQsXG4gICAgICB3aWR0aDogYm91bmRpbmdSZWN0LndpZHRoLFxuICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wIC0gdHJhbnNsYXRlWSxcbiAgICAgIGJvdHRvbTogYm91bmRpbmdSZWN0LmJvdHRvbSAtIHRyYW5zbGF0ZVksXG4gICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCAtIHRyYW5zbGF0ZVgsXG4gICAgICByaWdodDogYm91bmRpbmdSZWN0LnJpZ2h0IC0gdHJhbnNsYXRlWCxcbiAgICAgIHNjcm9sbFRvcDogZWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1dpdGhpbkJvdW5kaW5nWSh7XG4gIGNsaWVudFksXG4gIHJlY3Rcbn06IHtcbiAgY2xpZW50WTogbnVtYmVyO1xuICByZWN0OiBDbGllbnRSZWN0O1xufSk6IGJvb2xlYW4ge1xuICByZXR1cm4gY2xpZW50WSA+PSByZWN0LnRvcCAmJiBjbGllbnRZIDw9IHJlY3QuYm90dG9tO1xufVxuXG5mdW5jdGlvbiBpc1dpdGhpbkJvdW5kaW5nWCh7XG4gIGNsaWVudFgsXG4gIHJlY3Rcbn06IHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICByZWN0OiBDbGllbnRSZWN0O1xufSk6IGJvb2xlYW4ge1xuICByZXR1cm4gY2xpZW50WCA+PSByZWN0LmxlZnQgJiYgY2xpZW50WCA8PSByZWN0LnJpZ2h0O1xufVxuXG5mdW5jdGlvbiBnZXRSZXNpemVFZGdlcyh7XG4gIGNsaWVudFgsXG4gIGNsaWVudFksXG4gIGVsbSxcbiAgYWxsb3dlZEVkZ2VzLFxuICBjdXJzb3JQcmVjaXNpb25cbn06IHtcbiAgY2xpZW50WDogbnVtYmVyO1xuICBjbGllbnRZOiBudW1iZXI7XG4gIGVsbTogRWxlbWVudFJlZjtcbiAgYWxsb3dlZEVkZ2VzOiBFZGdlcztcbiAgY3Vyc29yUHJlY2lzaW9uOiBudW1iZXI7XG59KTogRWRnZXMge1xuICBjb25zdCBlbG1Qb3NpdGlvbjogQ2xpZW50UmVjdCA9IGVsbS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBlZGdlczogRWRnZXMgPSB7fTtcblxuICBpZiAoXG4gICAgYWxsb3dlZEVkZ2VzLmxlZnQgJiZcbiAgICBpc051bWJlckNsb3NlVG8oY2xpZW50WCwgZWxtUG9zaXRpb24ubGVmdCwgY3Vyc29yUHJlY2lzaW9uKSAmJlxuICAgIGlzV2l0aGluQm91bmRpbmdZKHsgY2xpZW50WSwgcmVjdDogZWxtUG9zaXRpb24gfSlcbiAgKSB7XG4gICAgZWRnZXMubGVmdCA9IHRydWU7XG4gIH1cblxuICBpZiAoXG4gICAgYWxsb3dlZEVkZ2VzLnJpZ2h0ICYmXG4gICAgaXNOdW1iZXJDbG9zZVRvKGNsaWVudFgsIGVsbVBvc2l0aW9uLnJpZ2h0LCBjdXJzb3JQcmVjaXNpb24pICYmXG4gICAgaXNXaXRoaW5Cb3VuZGluZ1koeyBjbGllbnRZLCByZWN0OiBlbG1Qb3NpdGlvbiB9KVxuICApIHtcbiAgICBlZGdlcy5yaWdodCA9IHRydWU7XG4gIH1cblxuICBpZiAoXG4gICAgYWxsb3dlZEVkZ2VzLnRvcCAmJlxuICAgIGlzTnVtYmVyQ2xvc2VUbyhjbGllbnRZLCBlbG1Qb3NpdGlvbi50b3AsIGN1cnNvclByZWNpc2lvbikgJiZcbiAgICBpc1dpdGhpbkJvdW5kaW5nWCh7IGNsaWVudFgsIHJlY3Q6IGVsbVBvc2l0aW9uIH0pXG4gICkge1xuICAgIGVkZ2VzLnRvcCA9IHRydWU7XG4gIH1cblxuICBpZiAoXG4gICAgYWxsb3dlZEVkZ2VzLmJvdHRvbSAmJlxuICAgIGlzTnVtYmVyQ2xvc2VUbyhjbGllbnRZLCBlbG1Qb3NpdGlvbi5ib3R0b20sIGN1cnNvclByZWNpc2lvbikgJiZcbiAgICBpc1dpdGhpbkJvdW5kaW5nWCh7IGNsaWVudFgsIHJlY3Q6IGVsbVBvc2l0aW9uIH0pXG4gICkge1xuICAgIGVkZ2VzLmJvdHRvbSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXplQ3Vyc29ycyB7XG4gIHRvcExlZnQ6IHN0cmluZztcbiAgdG9wUmlnaHQ6IHN0cmluZztcbiAgYm90dG9tTGVmdDogc3RyaW5nO1xuICBib3R0b21SaWdodDogc3RyaW5nO1xuICBsZWZ0T3JSaWdodDogc3RyaW5nO1xuICB0b3BPckJvdHRvbTogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1JFU0laRV9DVVJTT1JTOiBSZXNpemVDdXJzb3JzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHRvcExlZnQ6ICdudy1yZXNpemUnLFxuICB0b3BSaWdodDogJ25lLXJlc2l6ZScsXG4gIGJvdHRvbUxlZnQ6ICdzdy1yZXNpemUnLFxuICBib3R0b21SaWdodDogJ3NlLXJlc2l6ZScsXG4gIGxlZnRPclJpZ2h0OiAnY29sLXJlc2l6ZScsXG4gIHRvcE9yQm90dG9tOiAncm93LXJlc2l6ZSdcbn0pO1xuXG5mdW5jdGlvbiBnZXRSZXNpemVDdXJzb3IoZWRnZXM6IEVkZ2VzLCBjdXJzb3JzOiBSZXNpemVDdXJzb3JzKTogc3RyaW5nIHtcbiAgaWYgKGVkZ2VzLmxlZnQgJiYgZWRnZXMudG9wKSB7XG4gICAgcmV0dXJuIGN1cnNvcnMudG9wTGVmdDtcbiAgfSBlbHNlIGlmIChlZGdlcy5yaWdodCAmJiBlZGdlcy50b3ApIHtcbiAgICByZXR1cm4gY3Vyc29ycy50b3BSaWdodDtcbiAgfSBlbHNlIGlmIChlZGdlcy5sZWZ0ICYmIGVkZ2VzLmJvdHRvbSkge1xuICAgIHJldHVybiBjdXJzb3JzLmJvdHRvbUxlZnQ7XG4gIH0gZWxzZSBpZiAoZWRnZXMucmlnaHQgJiYgZWRnZXMuYm90dG9tKSB7XG4gICAgcmV0dXJuIGN1cnNvcnMuYm90dG9tUmlnaHQ7XG4gIH0gZWxzZSBpZiAoZWRnZXMubGVmdCB8fCBlZGdlcy5yaWdodCkge1xuICAgIHJldHVybiBjdXJzb3JzLmxlZnRPclJpZ2h0O1xuICB9IGVsc2UgaWYgKGVkZ2VzLnRvcCB8fCBlZGdlcy5ib3R0b20pIHtcbiAgICByZXR1cm4gY3Vyc29ycy50b3BPckJvdHRvbTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RWRnZXNEaWZmKHtcbiAgZWRnZXMsXG4gIGluaXRpYWxSZWN0YW5nbGUsXG4gIG5ld1JlY3RhbmdsZVxufToge1xuICBlZGdlczogRWRnZXM7XG4gIGluaXRpYWxSZWN0YW5nbGU6IEJvdW5kaW5nUmVjdGFuZ2xlO1xuICBuZXdSZWN0YW5nbGU6IEJvdW5kaW5nUmVjdGFuZ2xlO1xufSk6IEVkZ2VzIHtcbiAgY29uc3QgZWRnZXNEaWZmOiBFZGdlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhlZGdlcykuZm9yRWFjaChlZGdlID0+IHtcbiAgICBlZGdlc0RpZmZbZWRnZV0gPSAobmV3UmVjdGFuZ2xlW2VkZ2VdIHx8IDApIC0gKGluaXRpYWxSZWN0YW5nbGVbZWRnZV0gfHwgMCk7XG4gIH0pO1xuICByZXR1cm4gZWRnZXNEaWZmO1xufVxuXG5jb25zdCBSRVNJWkVfQUNUSVZFX0NMQVNTOiBzdHJpbmcgPSAncmVzaXplLWFjdGl2ZSc7XG5jb25zdCBSRVNJWkVfTEVGVF9IT1ZFUl9DTEFTUzogc3RyaW5nID0gJ3Jlc2l6ZS1sZWZ0LWhvdmVyJztcbmNvbnN0IFJFU0laRV9SSUdIVF9IT1ZFUl9DTEFTUzogc3RyaW5nID0gJ3Jlc2l6ZS1yaWdodC1ob3Zlcic7XG5jb25zdCBSRVNJWkVfVE9QX0hPVkVSX0NMQVNTOiBzdHJpbmcgPSAncmVzaXplLXRvcC1ob3Zlcic7XG5jb25zdCBSRVNJWkVfQk9UVE9NX0hPVkVSX0NMQVNTOiBzdHJpbmcgPSAncmVzaXplLWJvdHRvbS1ob3Zlcic7XG5jb25zdCBSRVNJWkVfR0hPU1RfRUxFTUVOVF9DTEFTUzogc3RyaW5nID0gJ3Jlc2l6ZS1naG9zdC1lbGVtZW50JztcblxuZXhwb3J0IGNvbnN0IE1PVVNFX01PVkVfVEhST1RUTEVfTVM6IG51bWJlciA9IDUwO1xuXG4vKipcbiAqIFBsYWNlIHRoaXMgb24gYW4gZWxlbWVudCB0byBtYWtlIGl0IHJlc2l6YWJsZS4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgaHRtbFxuICogPGRpdlxuICogICBtd2xSZXNpemFibGVcbiAqICAgW3Jlc2l6ZUVkZ2VzXT1cIntib3R0b206IHRydWUsIHJpZ2h0OiB0cnVlLCB0b3A6IHRydWUsIGxlZnQ6IHRydWV9XCJcbiAqICAgW2VuYWJsZUdob3N0UmVzaXplXT1cInRydWVcIj5cbiAqIDwvZGl2PlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xSZXNpemFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXNpemFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGVhY2ggcmVzaXplIGV2ZW50LiBSZXR1cm4gYHRydWVgIHRvIGFsbG93IHRoZSByZXNpemUgZXZlbnQgdG8gcHJvcGFnYXRlIG9yIGBmYWxzZWAgdG8gY2FuY2VsIGl0XG4gICAqL1xuICBASW5wdXQoKSB2YWxpZGF0ZVJlc2l6ZTogKHJlc2l6ZUV2ZW50OiBSZXNpemVFdmVudCkgPT4gYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGVkZ2VzIHRoYXQgYW4gZWxlbWVudCBjYW4gYmUgcmVzaXplZCBmcm9tLiBQYXNzIGFuIG9iamVjdCBsaWtlIGB7dG9wOiB0cnVlLCBib3R0b206IGZhbHNlfWAuIEJ5IGRlZmF1bHQgbm8gZWRnZXMgY2FuIGJlIHJlc2l6ZWQuXG4gICAqL1xuICBASW5wdXQoKSByZXNpemVFZGdlczogRWRnZXMgPSB7fTtcblxuICAvKipcbiAgICogU2V0IHRvIGB0cnVlYCB0byBlbmFibGUgYSB0ZW1wb3JhcnkgcmVzaXppbmcgZWZmZWN0IG9mIHRoZSBlbGVtZW50IGluIGJldHdlZW4gdGhlIGByZXNpemVTdGFydGAgYW5kIGByZXNpemVFbmRgIGV2ZW50cy5cbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZUdob3N0UmVzaXplOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEEgc25hcCBncmlkIHRoYXQgcmVzaXplIGV2ZW50cyB3aWxsIGJlIGxvY2tlZCB0by5cbiAgICpcbiAgICogZS5nLiB0byBvbmx5IGFsbG93IHRoZSBlbGVtZW50IHRvIGJlIHJlc2l6ZWQgZXZlcnkgMTBweCBzZXQgaXQgdG8gYHtsZWZ0OiAxMCwgcmlnaHQ6IDEwfWBcbiAgICovXG4gIEBJbnB1dCgpIHJlc2l6ZVNuYXBHcmlkOiBFZGdlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBUaGUgbW91c2UgY3Vyc29ycyB0aGF0IHdpbGwgYmUgc2V0IG9uIHRoZSByZXNpemUgZWRnZXNcbiAgICovXG4gIEBJbnB1dCgpIHJlc2l6ZUN1cnNvcnM6IFJlc2l6ZUN1cnNvcnMgPSBERUZBVUxUX1JFU0laRV9DVVJTT1JTO1xuXG4gIC8qKlxuICAgKiBNb3VzZSBvdmVyIHRoaWNrbmVzcyB0byBhY3RpdmUgY3Vyc29yLlxuICAgKi9cbiAgQElucHV0KCkgcmVzaXplQ3Vyc29yUHJlY2lzaW9uOiBudW1iZXIgPSAzO1xuXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIHBvc2l0aW9uaW5nIG9mIHRoZSBnaG9zdCBlbGVtZW50IChjYW4gYmUgZml4ZWQgb3IgYWJzb2x1dGUpXG4gICAqL1xuICBASW5wdXQoKSBnaG9zdEVsZW1lbnRQb3NpdGlvbmluZzogJ2ZpeGVkJyB8ICdhYnNvbHV0ZScgPSAnZml4ZWQnO1xuXG4gIC8qKlxuICAgKiBBbGxvdyBlbGVtZW50cyB0byBiZSByZXNpemVkIHRvIG5lZ2F0aXZlIGRpbWVuc2lvbnNcbiAgICovXG4gIEBJbnB1dCgpIGFsbG93TmVnYXRpdmVSZXNpemVzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBtb3VzZSBpcyBwcmVzc2VkIGFuZCBhIHJlc2l6ZSBldmVudCBpcyBhYm91dCB0byBiZWdpbi4gYCRldmVudGAgaXMgYSBgUmVzaXplRXZlbnRgIG9iamVjdC5cbiAgICovXG4gIEBPdXRwdXQoKSByZXNpemVTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhcyB0aGUgbW91c2UgaXMgZHJhZ2dlZCBhZnRlciBhIHJlc2l6ZSBldmVudCBoYXMgYmVndW4uIGAkZXZlbnRgIGlzIGEgYFJlc2l6ZUV2ZW50YCBvYmplY3QuXG4gICAqL1xuICBAT3V0cHV0KCkgcmVzaXppbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2l6ZUV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgYWZ0ZXIgdGhlIG1vdXNlIGlzIHJlbGVhc2VkIGFmdGVyIGEgcmVzaXplIGV2ZW50LiBgJGV2ZW50YCBpcyBhIGBSZXNpemVFdmVudGAgb2JqZWN0LlxuICAgKi9cbiAgQE91dHB1dCgpIHJlc2l6ZUVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplRXZlbnQ+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHB1YmxpYyBtb3VzZXVwID0gbmV3IFN1YmplY3Q8e1xuICAgIGNsaWVudFg6IG51bWJlcjtcbiAgICBjbGllbnRZOiBudW1iZXI7XG4gICAgZWRnZXM/OiBFZGdlcztcbiAgfT4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHVibGljIG1vdXNlZG93biA9IG5ldyBTdWJqZWN0PHtcbiAgICBjbGllbnRYOiBudW1iZXI7XG4gICAgY2xpZW50WTogbnVtYmVyO1xuICAgIGVkZ2VzPzogRWRnZXM7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHB1YmxpYyBtb3VzZW1vdmUgPSBuZXcgU3ViamVjdDx7XG4gICAgY2xpZW50WDogbnVtYmVyO1xuICAgIGNsaWVudFk6IG51bWJlcjtcbiAgICBlZGdlcz86IEVkZ2VzO1xuICAgIGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudDtcbiAgfT4oKTtcblxuICBwcml2YXRlIHBvaW50ZXJFdmVudExpc3RlbmVyczogUG9pbnRlckV2ZW50TGlzdGVuZXJzO1xuXG4gIHByaXZhdGUgcG9pbnRlckV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zOiBhbnkgPSB7fTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHB1YmxpYyBlbG06IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lcnMgPSBQb2ludGVyRXZlbnRMaXN0ZW5lcnMuZ2V0SW5zdGFuY2UoXG4gICAgICByZW5kZXJlcixcbiAgICAgIHpvbmVcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIFRPRE8gLSB1c2Ugc29tZSBmYW5jeSBPYnNlcnZhYmxlLm1lcmdlJ3MgZm9yIHRoaXNcbiAgICB0aGlzLnBvaW50ZXJFdmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5wb2ludGVyRG93biA9IHRoaXMucG9pbnRlckV2ZW50TGlzdGVuZXJzLnBvaW50ZXJEb3duLnN1YnNjcmliZShcbiAgICAgICh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuICAgICAgICB0aGlzLm1vdXNlZG93bi5uZXh0KHsgY2xpZW50WCwgY2xpZW50WSB9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMucG9pbnRlck1vdmUgPSB0aGlzLnBvaW50ZXJFdmVudExpc3RlbmVycy5wb2ludGVyTW92ZS5zdWJzY3JpYmUoXG4gICAgICAoeyBjbGllbnRYLCBjbGllbnRZLCBldmVudCB9KSA9PiB7XG4gICAgICAgIHRoaXMubW91c2Vtb3ZlLm5leHQoeyBjbGllbnRYLCBjbGllbnRZLCBldmVudCB9KTtcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMucG9pbnRlclVwID0gdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lcnMucG9pbnRlclVwLnN1YnNjcmliZShcbiAgICAgICh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuICAgICAgICB0aGlzLm1vdXNldXAubmV4dCh7IGNsaWVudFgsIGNsaWVudFkgfSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGxldCBjdXJyZW50UmVzaXplOiB7XG4gICAgICBlZGdlczogRWRnZXM7XG4gICAgICBzdGFydGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlO1xuICAgICAgY3VycmVudFJlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlO1xuICAgICAgY2xvbmVkTm9kZT86IEhUTUxFbGVtZW50O1xuICAgIH0gfCBudWxsO1xuXG4gICAgY29uc3QgcmVtb3ZlR2hvc3RFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgaWYgKGN1cnJlbnRSZXNpemUgJiYgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlKSB7XG4gICAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChcbiAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAndmlzaWJpbGl0eScsICdpbmhlcml0Jyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1vdXNlTW92ZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5tb3VzZW1vdmUucGlwZShzaGFyZSgpKTtcblxuICAgIG1vdXNlTW92ZS5waXBlKGZpbHRlcigoKSA9PiAhIWN1cnJlbnRSZXNpemUpKS5zdWJzY3JpYmUoKHsgZXZlbnQgfSkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcblxuICAgIG1vdXNlTW92ZVxuICAgICAgLnBpcGUodGhyb3R0bGUoKCkgPT4gaW50ZXJ2YWwoTU9VU0VfTU9WRV9USFJPVFRMRV9NUykpKVxuICAgICAgLnN1YnNjcmliZSgoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcbiAgICAgICAgY29uc3QgcmVzaXplRWRnZXM6IEVkZ2VzID0gZ2V0UmVzaXplRWRnZXMoe1xuICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSxcbiAgICAgICAgICBlbG06IHRoaXMuZWxtLFxuICAgICAgICAgIGFsbG93ZWRFZGdlczogdGhpcy5yZXNpemVFZGdlcyxcbiAgICAgICAgICBjdXJzb3JQcmVjaXNpb246IHRoaXMucmVzaXplQ3Vyc29yUHJlY2lzaW9uXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXNpemVDdXJzb3JzOiBSZXNpemVDdXJzb3JzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBERUZBVUxUX1JFU0laRV9DVVJTT1JTLFxuICAgICAgICAgIHRoaXMucmVzaXplQ3Vyc29yc1xuICAgICAgICApO1xuICAgICAgICBpZiAoY3VycmVudFJlc2l6ZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnNvcjogc3RyaW5nID0gZ2V0UmVzaXplQ3Vyc29yKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5lZGdlcyxcbiAgICAgICAgICAgIHJlc2l6ZUN1cnNvcnNcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsIGN1cnNvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY3Vyc29yOiBzdHJpbmcgPSBnZXRSZXNpemVDdXJzb3IocmVzaXplRWRnZXMsIHJlc2l6ZUN1cnNvcnMpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsIGN1cnNvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbG0sIFJFU0laRV9BQ1RJVkVfQ0xBU1MsICEhY3VycmVudFJlc2l6ZSk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9MRUZUX0hPVkVSX0NMQVNTLFxuICAgICAgICAgIHJlc2l6ZUVkZ2VzLmxlZnQgPT09IHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50Q2xhc3MoXG4gICAgICAgICAgdGhpcy5lbG0sXG4gICAgICAgICAgUkVTSVpFX1JJR0hUX0hPVkVSX0NMQVNTLFxuICAgICAgICAgIHJlc2l6ZUVkZ2VzLnJpZ2h0ID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9UT1BfSE9WRVJfQ0xBU1MsXG4gICAgICAgICAgcmVzaXplRWRnZXMudG9wID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudENsYXNzKFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIFJFU0laRV9CT1RUT01fSE9WRVJfQ0xBU1MsXG4gICAgICAgICAgcmVzaXplRWRnZXMuYm90dG9tID09PSB0cnVlXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgIGNvbnN0IG1vdXNlZHJhZzogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5tb3VzZWRvd25cbiAgICAgIC5waXBlKFxuICAgICAgICBtZXJnZU1hcChzdGFydENvb3JkcyA9PiB7XG4gICAgICAgICAgZnVuY3Rpb24gZ2V0RGlmZihtb3ZlQ29vcmRzOiB7IGNsaWVudFg6IG51bWJlcjsgY2xpZW50WTogbnVtYmVyIH0pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGNsaWVudFg6IG1vdmVDb29yZHMuY2xpZW50WCAtIHN0YXJ0Q29vcmRzLmNsaWVudFgsXG4gICAgICAgICAgICAgIGNsaWVudFk6IG1vdmVDb29yZHMuY2xpZW50WSAtIHN0YXJ0Q29vcmRzLmNsaWVudFlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZ2V0U25hcEdyaWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzbmFwR3JpZDogQ29vcmRpbmF0ZSA9IHsgeDogMSwgeTogMSB9O1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFJlc2l6ZSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5yZXNpemVTbmFwR3JpZC5sZWZ0ICYmIGN1cnJlbnRSZXNpemUuZWRnZXMubGVmdCkge1xuICAgICAgICAgICAgICAgIHNuYXBHcmlkLnggPSArdGhpcy5yZXNpemVTbmFwR3JpZC5sZWZ0O1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplU25hcEdyaWQucmlnaHQgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzaXplLmVkZ2VzLnJpZ2h0XG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHNuYXBHcmlkLnggPSArdGhpcy5yZXNpemVTbmFwR3JpZC5yaWdodDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZVNuYXBHcmlkLnRvcCAmJiBjdXJyZW50UmVzaXplLmVkZ2VzLnRvcCkge1xuICAgICAgICAgICAgICAgIHNuYXBHcmlkLnkgPSArdGhpcy5yZXNpemVTbmFwR3JpZC50b3A7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVTbmFwR3JpZC5ib3R0b20gJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzaXplLmVkZ2VzLmJvdHRvbVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBzbmFwR3JpZC55ID0gK3RoaXMucmVzaXplU25hcEdyaWQuYm90dG9tO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzbmFwR3JpZDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZnVuY3Rpb24gZ2V0R3JpZChcbiAgICAgICAgICAgIGNvb3JkczogeyBjbGllbnRYOiBudW1iZXI7IGNsaWVudFk6IG51bWJlciB9LFxuICAgICAgICAgICAgc25hcEdyaWQ6IENvb3JkaW5hdGVcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHg6IE1hdGguY2VpbChjb29yZHMuY2xpZW50WCAvIHNuYXBHcmlkLngpLFxuICAgICAgICAgICAgICB5OiBNYXRoLmNlaWwoY29vcmRzLmNsaWVudFkgLyBzbmFwR3JpZC55KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbWVyZ2UoXG4gICAgICAgICAgICBtb3VzZU1vdmUucGlwZSh0YWtlKDEpKS5waXBlKG1hcChjb29yZHMgPT4gWywgY29vcmRzXSkpLFxuICAgICAgICAgICAgbW91c2VNb3ZlLnBpcGUocGFpcndpc2UoKSlcbiAgICAgICAgICApXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChbcHJldmlvdXNDb29yZHMsIG5ld0Nvb3Jkc10pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb29yZHMgPyBnZXREaWZmKHByZXZpb3VzQ29vcmRzKSA6IHByZXZpb3VzQ29vcmRzLFxuICAgICAgICAgICAgICAgICAgZ2V0RGlmZihuZXdDb29yZHMpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIoKFtwcmV2aW91c0Nvb3JkcywgbmV3Q29vcmRzXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcHJldmlvdXNDb29yZHMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBHcmlkOiBDb29yZGluYXRlID0gZ2V0U25hcEdyaWQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0dyaWQ6IENvb3JkaW5hdGUgPSBnZXRHcmlkKFxuICAgICAgICAgICAgICAgICAgcHJldmlvdXNDb29yZHMsXG4gICAgICAgICAgICAgICAgICBzbmFwR3JpZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3R3JpZDogQ29vcmRpbmF0ZSA9IGdldEdyaWQobmV3Q29vcmRzLCBzbmFwR3JpZCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgcHJldmlvdXNHcmlkLnggIT09IG5ld0dyaWQueCB8fCBwcmV2aW91c0dyaWQueSAhPT0gbmV3R3JpZC55XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAoKFssIG5ld0Nvb3Jkc10pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwR3JpZDogQ29vcmRpbmF0ZSA9IGdldFNuYXBHcmlkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGNsaWVudFg6XG4gICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQobmV3Q29vcmRzLmNsaWVudFggLyBzbmFwR3JpZC54KSAqIHNuYXBHcmlkLngsXG4gICAgICAgICAgICAgICAgICBjbGllbnRZOlxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKG5ld0Nvb3Jkcy5jbGllbnRZIC8gc25hcEdyaWQueSkgKiBzbmFwR3JpZC55XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5waXBlKHRha2VVbnRpbChtZXJnZSh0aGlzLm1vdXNldXAsIHRoaXMubW91c2Vkb3duKSkpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoZmlsdGVyKCgpID0+ICEhY3VycmVudFJlc2l6ZSkpO1xuXG4gICAgbW91c2VkcmFnXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiBnZXROZXdCb3VuZGluZ1JlY3RhbmdsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUhLnN0YXJ0aW5nUmVjdCxcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUhLmVkZ2VzLFxuICAgICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICAgIGNsaWVudFlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigobmV3Qm91bmRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB0aGlzLmFsbG93TmVnYXRpdmVSZXNpemVzIHx8XG4gICAgICAgICAgICAhIShcbiAgICAgICAgICAgICAgbmV3Qm91bmRpbmdSZWN0LmhlaWdodCAmJlxuICAgICAgICAgICAgICBuZXdCb3VuZGluZ1JlY3Qud2lkdGggJiZcbiAgICAgICAgICAgICAgbmV3Qm91bmRpbmdSZWN0LmhlaWdodCA+IDAgJiZcbiAgICAgICAgICAgICAgbmV3Qm91bmRpbmdSZWN0LndpZHRoID4gMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChuZXdCb3VuZGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVSZXNpemVcbiAgICAgICAgICAgID8gdGhpcy52YWxpZGF0ZVJlc2l6ZSh7XG4gICAgICAgICAgICAgICAgcmVjdGFuZ2xlOiBuZXdCb3VuZGluZ1JlY3QsXG4gICAgICAgICAgICAgICAgZWRnZXM6IGdldEVkZ2VzRGlmZih7XG4gICAgICAgICAgICAgICAgICBlZGdlczogY3VycmVudFJlc2l6ZSEuZWRnZXMsXG4gICAgICAgICAgICAgICAgICBpbml0aWFsUmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5zdGFydGluZ1JlY3QsXG4gICAgICAgICAgICAgICAgICBuZXdSZWN0YW5nbGU6IG5ld0JvdW5kaW5nUmVjdFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IHRydWU7XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChuZXdCb3VuZGluZ1JlY3Q6IEJvdW5kaW5nUmVjdGFuZ2xlKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UmVzaXplICYmIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAnaGVpZ2h0JyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC5oZWlnaHR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC53aWR0aH1weGBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAndG9wJyxcbiAgICAgICAgICAgIGAke25ld0JvdW5kaW5nUmVjdC50b3B9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ2xlZnQnLFxuICAgICAgICAgICAgYCR7bmV3Qm91bmRpbmdSZWN0LmxlZnR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzaXppbmcuZW1pdCh7XG4gICAgICAgICAgICBlZGdlczogZ2V0RWRnZXNEaWZmKHtcbiAgICAgICAgICAgICAgZWRnZXM6IGN1cnJlbnRSZXNpemUhLmVkZ2VzLFxuICAgICAgICAgICAgICBpbml0aWFsUmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5zdGFydGluZ1JlY3QsXG4gICAgICAgICAgICAgIG5ld1JlY3RhbmdsZTogbmV3Qm91bmRpbmdSZWN0XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJlY3RhbmdsZTogbmV3Qm91bmRpbmdSZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRSZXNpemUhLmN1cnJlbnRSZWN0ID0gbmV3Qm91bmRpbmdSZWN0O1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm1vdXNlZG93blxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoeyBjbGllbnRYLCBjbGllbnRZLCBlZGdlcyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGVkZ2VzIHx8XG4gICAgICAgICAgICBnZXRSZXNpemVFZGdlcyh7XG4gICAgICAgICAgICAgIGNsaWVudFgsXG4gICAgICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgICAgIGVsbTogdGhpcy5lbG0sXG4gICAgICAgICAgICAgIGFsbG93ZWRFZGdlczogdGhpcy5yZXNpemVFZGdlcyxcbiAgICAgICAgICAgICAgY3Vyc29yUHJlY2lzaW9uOiB0aGlzLnJlc2l6ZUN1cnNvclByZWNpc2lvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZWRnZXM6IEVkZ2VzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGVkZ2VzKS5sZW5ndGggPiAwO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZWRnZXM6IEVkZ2VzKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50UmVzaXplKSB7XG4gICAgICAgICAgcmVtb3ZlR2hvc3RFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRpbmdSZWN0OiBCb3VuZGluZ1JlY3RhbmdsZSA9IGdldEVsZW1lbnRSZWN0KFxuICAgICAgICAgIHRoaXMuZWxtLFxuICAgICAgICAgIHRoaXMuZ2hvc3RFbGVtZW50UG9zaXRpb25pbmdcbiAgICAgICAgKTtcbiAgICAgICAgY3VycmVudFJlc2l6ZSA9IHtcbiAgICAgICAgICBlZGdlcyxcbiAgICAgICAgICBzdGFydGluZ1JlY3QsXG4gICAgICAgICAgY3VycmVudFJlY3Q6IHN0YXJ0aW5nUmVjdFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5lbmFibGVHaG9zdFJlc2l6ZSkge1xuICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgIGNvbnN0IHJlc2l6ZUN1cnNvcnM6IFJlc2l6ZUN1cnNvcnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBERUZBVUxUX1JFU0laRV9DVVJTT1JTLFxuICAgICAgICAgICAgdGhpcy5yZXNpemVDdXJzb3JzXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGVcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ3Zpc2liaWxpdHknLFxuICAgICAgICAgICAgJ2hpZGRlbidcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgICBjdXJyZW50UmVzaXplLmNsb25lZE5vZGUsXG4gICAgICAgICAgICAncG9zaXRpb24nLFxuICAgICAgICAgICAgdGhpcy5naG9zdEVsZW1lbnRQb3NpdGlvbmluZ1xuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdsZWZ0JyxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0LmxlZnR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3RvcCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC50b3B9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgICBgJHtjdXJyZW50UmVzaXplLnN0YXJ0aW5nUmVjdC5oZWlnaHR9cHhgXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgJ3dpZHRoJyxcbiAgICAgICAgICAgIGAke2N1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0LndpZHRofXB4YFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSxcbiAgICAgICAgICAgICdjdXJzb3InLFxuICAgICAgICAgICAgZ2V0UmVzaXplQ3Vyc29yKGN1cnJlbnRSZXNpemUuZWRnZXMsIHJlc2l6ZUN1cnNvcnMpXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICAgICAgY3VycmVudFJlc2l6ZS5jbG9uZWROb2RlLFxuICAgICAgICAgICAgUkVTSVpFX0dIT1NUX0VMRU1FTlRfQ0xBU1NcbiAgICAgICAgICApO1xuICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSEuc2Nyb2xsVG9wID0gY3VycmVudFJlc2l6ZS5zdGFydGluZ1JlY3RcbiAgICAgICAgICAgIC5zY3JvbGxUb3AgYXMgbnVtYmVyO1xuICAgICAgICAgIGN1cnJlbnRSZXNpemUuY2xvbmVkTm9kZSEuc2Nyb2xsTGVmdCA9IGN1cnJlbnRSZXNpemUuc3RhcnRpbmdSZWN0XG4gICAgICAgICAgICAuc2Nyb2xsTGVmdCBhcyBudW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZXNpemVTdGFydC5lbWl0KHtcbiAgICAgICAgICAgIGVkZ2VzOiBnZXRFZGdlc0RpZmYoe1xuICAgICAgICAgICAgICBlZGdlcyxcbiAgICAgICAgICAgICAgaW5pdGlhbFJlY3RhbmdsZTogc3RhcnRpbmdSZWN0LFxuICAgICAgICAgICAgICBuZXdSZWN0YW5nbGU6IHN0YXJ0aW5nUmVjdFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN0YW5nbGU6IGdldE5ld0JvdW5kaW5nUmVjdGFuZ2xlKHN0YXJ0aW5nUmVjdCwge30sIDAsIDApXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLm1vdXNldXAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGlmIChjdXJyZW50UmVzaXplKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgUkVTSVpFX0FDVElWRV9DTEFTUyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZG9jdW1lbnQuYm9keSwgJ2N1cnNvcicsICcnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAnY3Vyc29yJywgJycpO1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc2l6ZUVuZC5lbWl0KHtcbiAgICAgICAgICAgIGVkZ2VzOiBnZXRFZGdlc0RpZmYoe1xuICAgICAgICAgICAgICBlZGdlczogY3VycmVudFJlc2l6ZSEuZWRnZXMsXG4gICAgICAgICAgICAgIGluaXRpYWxSZWN0YW5nbGU6IGN1cnJlbnRSZXNpemUhLnN0YXJ0aW5nUmVjdCxcbiAgICAgICAgICAgICAgbmV3UmVjdGFuZ2xlOiBjdXJyZW50UmVzaXplIS5jdXJyZW50UmVjdFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZWN0YW5nbGU6IGN1cnJlbnRSZXNpemUhLmN1cnJlbnRSZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVHaG9zdEVsZW1lbnQoKTtcbiAgICAgICAgY3VycmVudFJlc2l6ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tb3VzZWRvd24uY29tcGxldGUoKTtcbiAgICB0aGlzLm1vdXNldXAuY29tcGxldGUoKTtcbiAgICB0aGlzLm1vdXNlbW92ZS5jb21wbGV0ZSgpO1xuICAgIHRoaXMucG9pbnRlckV2ZW50TGlzdGVuZXJTdWJzY3JpcHRpb25zLnBvaW50ZXJEb3duLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5wb2ludGVyRXZlbnRMaXN0ZW5lclN1YnNjcmlwdGlvbnMucG9pbnRlck1vdmUudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnBvaW50ZXJFdmVudExpc3RlbmVyU3Vic2NyaXB0aW9ucy5wb2ludGVyVXAudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RWxlbWVudENsYXNzKGVsbTogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nLCBhZGQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoYWRkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsbS5uYXRpdmVFbGVtZW50LCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbG0ubmF0aXZlRWxlbWVudCwgbmFtZSk7XG4gICAgfVxuICB9XG59XG5cbmNsYXNzIFBvaW50ZXJFdmVudExpc3RlbmVycyB7XG4gIHB1YmxpYyBwb2ludGVyRG93bjogT2JzZXJ2YWJsZTxQb2ludGVyRXZlbnRDb29yZGluYXRlPjtcblxuICBwdWJsaWMgcG9pbnRlck1vdmU6IE9ic2VydmFibGU8UG9pbnRlckV2ZW50Q29vcmRpbmF0ZT47XG5cbiAgcHVibGljIHBvaW50ZXJVcDogT2JzZXJ2YWJsZTxQb2ludGVyRXZlbnRDb29yZGluYXRlPjtcblxuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUG9pbnRlckV2ZW50TGlzdGVuZXJzOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHpvbmU6IE5nWm9uZVxuICApOiBQb2ludGVyRXZlbnRMaXN0ZW5lcnMge1xuICAgIGlmICghUG9pbnRlckV2ZW50TGlzdGVuZXJzLmluc3RhbmNlKSB7XG4gICAgICBQb2ludGVyRXZlbnRMaXN0ZW5lcnMuaW5zdGFuY2UgPSBuZXcgUG9pbnRlckV2ZW50TGlzdGVuZXJzKFxuICAgICAgICByZW5kZXJlcixcbiAgICAgICAgem9uZVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFBvaW50ZXJFdmVudExpc3RlbmVycy5pbnN0YW5jZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMucG9pbnRlckRvd24gPSBuZXcgT2JzZXJ2YWJsZShcbiAgICAgIChvYnNlcnZlcjogT2JzZXJ2ZXI8UG9pbnRlckV2ZW50Q29vcmRpbmF0ZT4pID0+IHtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlTW91c2VEb3duOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaFN0YXJ0OiAoKSA9PiB2b2lkO1xuXG4gICAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VEb3duID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaFN0YXJ0ID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZLFxuICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZURvd24oKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoU3RhcnQoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgICB0aGlzLnBvaW50ZXJNb3ZlID0gbmV3IE9ic2VydmFibGUoXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPFBvaW50ZXJFdmVudENvb3JkaW5hdGU+KSA9PiB7XG4gICAgICAgIGxldCB1bnN1YnNjcmliZU1vdXNlTW92ZTogKCkgPT4gdm9pZDtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlVG91Y2hNb3ZlOiAoKSA9PiB2b2lkO1xuXG4gICAgICAgIHpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VNb3ZlID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICdtb3VzZW1vdmUnLFxuICAgICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoe1xuICAgICAgICAgICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgICAgICAgICAgY2xpZW50WTogZXZlbnQuY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaE1vdmUgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7XG4gICAgICAgICAgICAgICAgY2xpZW50WDogZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WSxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlTW91c2VNb3ZlKCk7XG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaE1vdmUoKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICApLnBpcGUoc2hhcmUoKSk7XG5cbiAgICB0aGlzLnBvaW50ZXJVcCA9IG5ldyBPYnNlcnZhYmxlKFxuICAgICAgKG9ic2VydmVyOiBPYnNlcnZlcjxQb2ludGVyRXZlbnRDb29yZGluYXRlPikgPT4ge1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVNb3VzZVVwOiAoKSA9PiB2b2lkO1xuICAgICAgICBsZXQgdW5zdWJzY3JpYmVUb3VjaEVuZDogKCkgPT4gdm9pZDtcbiAgICAgICAgbGV0IHVuc3Vic2NyaWJlVG91Y2hDYW5jZWw6ICgpID0+IHZvaWQ7XG5cbiAgICAgICAgem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmVNb3VzZVVwID0gcmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgICAgJ2RvY3VtZW50JyxcbiAgICAgICAgICAgICdtb3VzZXVwJyxcbiAgICAgICAgICAgIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hFbmQgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNoZW5kJyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHVuc3Vic2NyaWJlVG91Y2hDYW5jZWwgPSByZW5kZXJlci5saXN0ZW4oXG4gICAgICAgICAgICAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAgICAgICAgIChldmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcbiAgICAgICAgICAgICAgICBjbGllbnRYOiBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICAgIGNsaWVudFk6IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksXG4gICAgICAgICAgICAgICAgZXZlbnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICB1bnN1YnNjcmliZU1vdXNlVXAoKTtcbiAgICAgICAgICB1bnN1YnNjcmliZVRvdWNoRW5kKCk7XG4gICAgICAgICAgdW5zdWJzY3JpYmVUb3VjaENhbmNlbCgpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICkucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzaXphYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9yZXNpemFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEVkZ2VzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2VkZ2VzLmludGVyZmFjZSc7XG5cbi8qKlxuICogQW4gZWxlbWVudCBwbGFjZWQgaW5zaWRlIGEgYG13bFJlc2l6YWJsZWAgZGlyZWN0aXZlIHRvIGJlIHVzZWQgYXMgYSBkcmFnIGFuZCByZXNpemUgaGFuZGxlXG4gKlxuICogRm9yIGV4YW1wbGVcbiAqXG4gKiBgYGBodG1sXG4gKiA8ZGl2IG13bFJlc2l6YWJsZT5cbiAqICAgPGRpdiBtd2xSZXNpemVIYW5kbGUgW3Jlc2l6ZUVkZ2VzXT1cIntib3R0b206IHRydWUsIHJpZ2h0OiB0cnVlfVwiPjwvZGl2PlxuICogPC9kaXY+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bFJlc2l6ZUhhbmRsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6ZUhhbmRsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgYEVkZ2VzYCBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgZWRnZXMgb2YgdGhlIHBhcmVudCBlbGVtZW50IHRoYXQgZHJhZ2dpbmcgdGhlIGhhbmRsZSB3aWxsIHRyaWdnZXIgYSByZXNpemUgb25cbiAgICovXG4gIEBJbnB1dCgpIHJlc2l6ZUVkZ2VzOiBFZGdlcyA9IHt9O1xuXG4gIHByaXZhdGUgZXZlbnRMaXN0ZW5lcnM6IHtcbiAgICB0b3VjaG1vdmU/OiAoKSA9PiB2b2lkO1xuICAgIG1vdXNlbW92ZT86ICgpID0+IHZvaWQ7XG4gICAgW2tleTogc3RyaW5nXTogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkO1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJlc2l6YWJsZTogUmVzaXphYmxlRGlyZWN0aXZlXG4gICkge31cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgW1xuICAgICckZXZlbnQnLFxuICAgICckZXZlbnQudG91Y2hlc1swXS5jbGllbnRYJyxcbiAgICAnJGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSdcbiAgXSlcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnLCAnJGV2ZW50LmNsaWVudFgnLCAnJGV2ZW50LmNsaWVudFknXSlcbiAgb25Nb3VzZWRvd24oXG4gICAgZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50LFxuICAgIGNsaWVudFg6IG51bWJlcixcbiAgICBjbGllbnRZOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzLnRvdWNobW92ZSkge1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnRvdWNobW92ZSA9IHRoaXMucmVuZGVyZXIubGlzdGVuKFxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICAgICh0b3VjaE1vdmVFdmVudDogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbk1vdXNlbW92ZShcbiAgICAgICAgICAgICAgdG91Y2hNb3ZlRXZlbnQsXG4gICAgICAgICAgICAgIHRvdWNoTW92ZUV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICAgICAgICAgICAgdG91Y2hNb3ZlRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5ldmVudExpc3RlbmVycy5tb3VzZW1vdmUpIHtcbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5tb3VzZW1vdmUgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAnbW91c2Vtb3ZlJyxcbiAgICAgICAgICAobW91c2VNb3ZlRXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25Nb3VzZW1vdmUoXG4gICAgICAgICAgICAgIG1vdXNlTW92ZUV2ZW50LFxuICAgICAgICAgICAgICBtb3VzZU1vdmVFdmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICBtb3VzZU1vdmVFdmVudC5jbGllbnRZXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXphYmxlLm1vdXNlZG93bi5uZXh0KHtcbiAgICAgICAgY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSxcbiAgICAgICAgZWRnZXM6IHRoaXMucmVzaXplRWRnZXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgW1xuICAgICckZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCcsXG4gICAgJyRldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZJ1xuICBdKVxuICBASG9zdExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIFtcbiAgICAnJGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgnLFxuICAgICckZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSdcbiAgXSlcbiAgQEhvc3RMaXN0ZW5lcignbW91c2V1cCcsIFsnJGV2ZW50LmNsaWVudFgnLCAnJGV2ZW50LmNsaWVudFknXSlcbiAgb25Nb3VzZXVwKGNsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5yZXNpemFibGUubW91c2V1cC5uZXh0KHtcbiAgICAgICAgY2xpZW50WCxcbiAgICAgICAgY2xpZW50WSxcbiAgICAgICAgZWRnZXM6IHRoaXMucmVzaXplRWRnZXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1vdXNlbW92ZShcbiAgICBldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQsXG4gICAgY2xpZW50WDogbnVtYmVyLFxuICAgIGNsaWVudFk6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6YWJsZS5tb3VzZW1vdmUubmV4dCh7XG4gICAgICBjbGllbnRYLFxuICAgICAgY2xpZW50WSxcbiAgICAgIGVkZ2VzOiB0aGlzLnJlc2l6ZUVkZ2VzLFxuICAgICAgZXZlbnRcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmV2ZW50TGlzdGVuZXJzKS5mb3JFYWNoKHR5cGUgPT4ge1xuICAgICAgKHRoaXMgYXMgYW55KS5ldmVudExpc3RlbmVyc1t0eXBlXSgpO1xuICAgICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnNbdHlwZV07XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNpemFibGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlc2l6YWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUmVzaXplSGFuZGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9yZXNpemUtaGFuZGxlLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1Jlc2l6YWJsZURpcmVjdGl2ZSwgUmVzaXplSGFuZGxlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1Jlc2l6YWJsZURpcmVjdGl2ZSwgUmVzaXplSGFuZGxlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNpemFibGVNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EseUJBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxTQUFxQjtJQUFyQiwwQkFBQSxFQUFBLGFBQXFCO0lBRXJCLHFCQUFNLElBQUksR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMvQyxPQUFPLElBQUksR0FBRyxTQUFTLENBQUM7Q0FDekI7Ozs7Ozs7O0FBRUQsaUNBQ0UsWUFBK0IsRUFDL0IsS0FBWSxFQUNaLE9BQWUsRUFDZixPQUFlO0lBRWYscUJBQU0sZUFBZSxHQUFzQjtRQUN6QyxHQUFHLEVBQUUsWUFBWSxDQUFDLEdBQUc7UUFDckIsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO1FBQzNCLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtRQUN2QixLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUs7S0FDMUIsQ0FBQztJQUVGLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNiLGVBQWUsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFD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

/***/ }),

/***/ "./node_modules/angular2-baidu-map/fesm5/angular2-baidu-map.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular2-baidu-map/fesm5/angular2-baidu-map.js ***!
  \*********************************************************************/
/*! exports provided: BaiduMapModule, MapTypeEnum, ControlAnchor, LengthUnit, NavigationControlType, MapTypeControlType, ɵh, ɵf, ɵj, ɵa, ɵe, ɵm, ɵi, ɵg, ɵk, ɵl, ɵb, ɵd, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaiduMapModule", function() { return BaiduMapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTypeEnum", function() { return MapTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlAnchor", function() { return ControlAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LengthUnit", function() { return LengthUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationControlType", function() { return NavigationControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTypeControlType", function() { return MapTypeControlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return CircleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return ControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return HeatmapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MarkerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return MarkerClustererComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return PolygonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return PolylineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return TileLayderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return TrafficLayderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return MapService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ScriptLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ScriptLoaderConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} obj
 * @return {?}
 */
function isNull(obj) {
    return obj === null || obj === undefined;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isUndefined(obj) {
    return obj === undefined;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
/**
 * @template T
 * @param {?} obj
 * @param {...?} keys
 * @return {?}
 */
function omit(obj) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    var /** @type {?} */ rawKeys = Object.keys(obj);
    var /** @type {?} */ finalKeys = rawKeys.filter(function (k) { return keys.indexOf(k) < 0; });
    return finalKeys.reduce(function (p, v) {
        p[v] = obj[v];
        return p;
    }, /** @type {?} */ ({}));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} opts
 * @return {?}
 */
function toPoint(opts) {
    if (!opts) {
        return new window.BMap.Point();
    }
    return new window.BMap.Point(opts.lng, opts.lat);
}
/**
 * @param {?} opts
 * @return {?}
 */
function toPoints(opts) {
    if (!opts) {
        return [];
    }
    return opts.map(function (p) {
        return new window.BMap.Point(p.lng, p.lat);
    });
}
/**
 * @param {?} opts
 * @return {?}
 */
function toSize(opts) {
    if (!opts) {
        return new window.BMap.Size();
    }
    return new window.BMap.Size(opts.width, opts.height);
}
/**
 * @param {?} url
 * @param {?} size
 * @param {?} options
 * @return {?}
 */
function toIcon(url, size, options) {
    if (!size && !options) {
        return new window.BMap.Icon(url);
    }
    if (!size) {
        return new window.BMap.Icon(url, toSize(size));
    }
    var /** @type {?} */ iconOptions = {
        anchor: toSize(options.anchor),
        imageOffset: toSize(options.imageOffset),
        infoWindowAnchor: toSize(options.infoWindowAnchor),
        printImageUrl: options.printImageUrl
    };
    var /** @type {?} */ icon = new window.BMap.Icon(url, toSize(size), iconOptions);
    if (options.imageSize) {
        icon.setImageSize(toSize(options.imageSize));
    }
    return icon;
}
/**
 * @param {?} options
 * @return {?}
 */
function toMarkerOptions(options) {
    var /** @type {?} */ opts = {};
    if (!options) {
        return opts;
    }
    if (options.offset) {
        opts.offset = toSize(options.offset);
    }
    if (options.icon) {
        opts.icon = toIcon(options.icon.imageUrl, options.icon.size, options.icon);
    }
    if (!isNull(options.enableMassClear)) {
        opts.enableMassClear = options.enableMassClear;
    }
    if (!isNull(options.enableDragging)) {
        opts.enableDragging = options.enableDragging;
    }
    if (!isNull(options.enableClicking)) {
        opts.enableClicking = options.enableClicking;
    }
    if (!isNull(options.raiseOnDrag)) {
        opts.raiseOnDrag = options.raiseOnDrag;
    }
    if (!isNull(options.draggingCursor)) {
        opts.draggingCursor = options.draggingCursor;
    }
    if (!isNull(options.rotation)) {
        opts.rotation = options.rotation;
    }
    if (!isNull(options.title)) {
        opts.title = options.title;
    }
    if (!isNull(options.shadow)) {
        opts.shadow = toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow);
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toNavigationControlOptions(options) {
    var /** @type {?} */ opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.enableGeolocation)) {
        opts.enableGeolocation = options.enableGeolocation;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.showZoomInfo)) {
        opts.showZoomInfo = options.showZoomInfo;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toOverviewMapControlOptions(options) {
    var /** @type {?} */ opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.isOpen)) {
        opts.isOpen = options.isOpen;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.size)) {
        opts.size = toSize(options.size);
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toScaleControlOptions(options) {
    var /** @type {?} */ opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toMapTypeControlOptions(options) {
    var /** @type {?} */ opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.type)) {
        opts.type = options.type;
    }
    return opts;
}
/**
 * @param {?} options
 * @return {?}
 */
function toGeolocationOptions(options) {
    var /** @type {?} */ opts = {};
    if (!options) {
        return opts;
    }
    if (!isNull(options.anchor)) {
        opts.anchor = options.anchor;
    }
    if (!isNull(options.offset)) {
        opts.offset = toSize(options.offset);
    }
    if (!isNull(options.enableAutoLocation)) {
        opts.enableAutoLocation = options.enableAutoLocation;
    }
    if (!isNull(options.locationIcon)) {
        opts.locationIcon = toIcon(options.locationIcon.imageUrl, options.locationIcon.size, options.locationIcon);
    }
    if (!isNull(options.showAddressBar)) {
        opts.showAddressBar = options.showAddressBar;
    }
    return opts;
}
/**
 * @param {?} style
 * @return {?}
 */
function toTextIconStyle(style) {
    var /** @type {?} */ realStyle = {
        url: style.url,
        size: toSize(style.size)
    };
    if (style.anchor) {
        realStyle.anchor = toSize(style.anchor);
    }
    if (style.offset) {
        realStyle.offset = toSize(style.offset);
    }
    if (!isNull(style.textSize)) {
        realStyle.textSize = style.textSize;
    }
    if (!isNull(style.textColor)) {
        realStyle.textColor = style.textColor;
    }
    return realStyle;
}
/**
 * @param {?} options
 * @return {?}
 */
function toMarkerClustererOptions(options) {
    var /** @type {?} */ opts = {};
    if (!options) {
        return opts;
    }
    if (options.markers) {
        opts.markers = options.markers.map(function (m) { return new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options)); });
    }
    if (!isNull(options.girdSize)) {
        opts.girdSize = options.girdSize;
    }
    if (!isNull(options.maxZoom)) {
        opts.maxZoom = options.maxZoom;
    }
    if (!isNull(options.minClusterSize)) {
        opts.minClusterSize = options.minClusterSize;
    }
    if (!isNull(options.isAverangeCenter)) {
        opts.isAverangeCenter = options.isAverangeCenter;
    }
    if (options.styles) {
        opts.styles = options.styles.filter(function (s) { return s; }).map(function (s) { return toTextIconStyle(s); });
    }
    return opts;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} obj
 * @param {?} msg
 * @return {?}
 */
function nullCheck(obj, msg) {
    if (isNull(obj)) {
        throw new Error(msg);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var LOADING_STATE = {
    NON: 0,
    LOADED: 1,
    LOADING: 2,
};
LOADING_STATE[LOADING_STATE.NON] = "NON";
LOADING_STATE[LOADING_STATE.LOADED] = "LOADED";
LOADING_STATE[LOADING_STATE.LOADING] = "LOADING";
var ScriptLoaderConfig = /** @class */ (function () {
    function ScriptLoaderConfig() {
        this.ak = '';
    }
    return ScriptLoaderConfig;
}());
window._scriptLoadState = {};
window._loadingCallbacks = {};
var ScriptLoader = /** @class */ (function () {
    function ScriptLoader() {
    }
    /**
     * @param {?} url
     * @param {?=} isMain
     * @param {?=} cb
     * @return {?}
     */
    ScriptLoader.prototype.load = /**
     * @param {?} url
     * @param {?=} isMain
     * @param {?=} cb
     * @return {?}
     */
    function (url, isMain, cb) {
        if (isMain === void 0) { isMain = false; }
        var /** @type {?} */ scriptKey = isString(url) ? url : url['key'];
        var /** @type {?} */ scriptUrls = isString(url) ? [url] : url['scripts'];
        if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADED) {
            if (isMain) {
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
            }
            return cb();
        }
        if (!window._loadingCallbacks[scriptKey]) {
            window._loadingCallbacks[scriptKey] = [];
        }
        if (window._scriptLoadState[scriptKey] === LOADING_STATE.LOADING) {
            window._loadingCallbacks[scriptKey].push(cb);
            return;
        }
        window._scriptLoadState[scriptKey] = LOADING_STATE.LOADING;
        window._loadingCallbacks[scriptKey].push(cb);
        if (isMain) {
            window.baidumapinit = function () {
                window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
                switchDisplay('baidu-map .baidu-map-instance', 'block');
                switchDisplay('baidu-map .baidu-map-offline', 'none');
                window._loadingCallbacks[scriptKey].forEach(function (c) {
                    c();
                });
            };
        }
        appendScriptsTag(scriptKey, scriptUrls, isMain);
    };
    ScriptLoader.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return ScriptLoader;
}());
/**
 * @param {?} scriptKey
 * @param {?} urls
 * @param {?} isMain
 * @return {?}
 */
function appendScriptsTag(scriptKey, urls, isMain) {
    var /** @type {?} */ leftObj = {
        count: urls.length
    };
    urls.forEach(function (url) {
        appendScriptTag(scriptKey, url, isMain, leftObj);
    });
}
/**
 * @param {?} scriptKey
 * @param {?} url
 * @param {?} isMain
 * @param {?} leftObj
 * @return {?}
 */
function appendScriptTag(scriptKey, url, isMain, leftObj) {
    var /** @type {?} */ script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onerror = function () {
        if (isMain) {
            switchDisplay('baidu-map .baidu-map-offline', 'block');
            switchDisplay('baidu-map .baidu-map-instance', 'none');
        }
        document.body.removeChild(script);
        setTimeout(function () {
            appendScriptTag(scriptKey, url, isMain, leftObj);
        }, 30000);
    };
    if (!isMain) {
        script.onload = function () {
            leftObj.count--;
            if (leftObj.count) {
                return;
            }
            window._scriptLoadState[scriptKey] = LOADING_STATE.LOADED;
            window._loadingCallbacks[scriptKey].forEach(function (c) {
                c();
            });
        };
    }
    document.body.appendChild(script);
}
/**
 * @param {?} selector
 * @param {?} state
 * @return {?}
 */
function switchDisplay(selector, state) {
    Array.prototype.slice.call(document.querySelectorAll(selector)).forEach(function (node) {
        node.style.display = state;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
var MapTypeEnum = {
    BMAP_NORMAL_MAP: 'BMAP_NORMAL_MAP',
    BMAP_PERSPECTIVE_MAP: 'BMAP_PERSPECTIVE_MAP',
    BMAP_SATELLITE_MAP: 'BMAP_SATELLITE_MAP',
    BMAP_HYBRID_MAP: 'BMAP_HYBRID_MAP',
};
/**
 * @param {?} maptype
 * @return {?}
 */
function isMapTypeEnum(maptype) {
    return !isFunction((/** @type {?} */ (maptype)).getTileLayer);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MapService = /** @class */ (function () {
    function MapService(config, _loader) {
        var _this = this;
        this._loader = _loader;
        nullCheck(config.ak, 'ak must be provided');
        this._config = config;
        this._map = new Promise(function (resolve) {
            _this._mapResolver = resolve;
        });
    }
    /**
     * @param {?} el
     * @param {?} mapOptions
     * @return {?}
     */
    MapService.prototype.createMap = /**
     * @param {?} el
     * @param {?} mapOptions
     * @return {?}
     */
    function (el, mapOptions) {
        var _this = this;
        var /** @type {?} */ URL = "https://api.map.baidu.com/api?v=2.0&ak=" + this._config.ak + "&callback=baidumapinit&s=1";
        return new Promise(function (resolve) {
            _this._loader.load(URL, true, function () {
                var /** @type {?} */ map = new window.BMap.Map(el, omit(mapOptions, 'mapType'));
                _this.setOptions(mapOptions);
                _this._mapResolver(map);
                resolve(map);
            });
        });
    };
    /**
     * @param {?} opts
     * @return {?}
     */
    MapService.prototype.setOptions = /**
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        var disableDragging = opts.disableDragging, enableScrollWheelZoom = opts.enableScrollWheelZoom, disableDoubleClickZoom = opts.disableDoubleClickZoom, enableKeyboard = opts.enableKeyboard, enableInertialDragging = opts.enableInertialDragging, enableAutoResize = opts.enableAutoResize, enableContinuousZoom = opts.enableContinuousZoom, disablePinchToZoom = opts.disablePinchToZoom;
        if (isBoolean(disableDragging)) {
            this._map.then(function (map) { return map[(disableDragging ? 'disable' : 'enable') + 'Dragging'](); });
        }
        if (isBoolean(enableScrollWheelZoom)) {
            this._map.then(function (map) { return map[(enableScrollWheelZoom ? 'enable' : 'disable') + 'ScrollWheelZoom'](); });
        }
        if (isBoolean(enableAutoResize)) {
            this._map.then(function (map) { return map[(enableAutoResize ? 'enable' : 'disable') + 'AutoResize'](); });
        }
        if (isBoolean(disableDoubleClickZoom)) {
            this._map.then(function (map) { return map[(disableDoubleClickZoom ? 'disable' : 'enable') + 'DoubleClickZoom'](); });
        }
        if (isBoolean(enableKeyboard)) {
            this._map.then(function (map) { return map[(enableKeyboard ? 'enable' : 'disable') + 'Keyboard'](); });
        }
        if (isBoolean(enableInertialDragging)) {
            this._map.then(function (map) { return map[(enableInertialDragging ? 'enable' : 'disable') + 'InertialDragging'](); });
        }
        if (isBoolean(enableContinuousZoom)) {
            this._map.then(function (map) { return map[(enableContinuousZoom ? 'enable' : 'disable') + 'ContinuousZoom'](); });
        }
        if (isBoolean(disablePinchToZoom)) {
            this._map.then(function (map) { return map[(disablePinchToZoom ? 'disable' : 'enable') + 'PinchToZoom'](); });
        }
        if (!isNull(opts.cursor)) {
            this._map.then(function (map) { return map.setDefaultCursor(opts.cursor); });
        }
        if (!isNull(opts.draggingCursor)) {
            this._map.then(function (map) { return map.setDraggingCursor(opts.draggingCursor); });
        }
        if (!isNull(opts.currentCity)) {
            this._map.then(function (map) { return map.setCurrentCity(opts.currentCity); });
        }
        if (!isNull(opts.centerAndZoom)) {
            this._map.then(function (map) {
                map.centerAndZoom(toPoint(opts.centerAndZoom), opts.centerAndZoom.zoom);
            });
        }
        if (!isNull(opts.mapType)) {
            this._map.then(function (map) {
                var /** @type {?} */ realType = isMapTypeEnum(opts.mapType) ? window[opts.mapType] : opts.mapType;
                map.setMapType(realType);
            });
        }
    };
    /**
     * @param {?} cb
     * @return {?}
     */
    MapService.prototype.addOverlay = /**
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        return this._map.then(function (map) {
            var /** @type {?} */ overlay = cb(map);
            map.addOverlay(overlay);
            return { map: map, overlay: overlay };
        });
    };
    /**
     * @param {?} overlay
     * @return {?}
     */
    MapService.prototype.removeOverlay = /**
     * @param {?} overlay
     * @return {?}
     */
    function (overlay) {
        return this._map.then(function (map) {
            map.removeOverlay(overlay);
        });
    };
    /**
     * @param {?} cb
     * @return {?}
     */
    MapService.prototype.addTileLayer = /**
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        return this._map.then(function (map) {
            var /** @type {?} */ tilelayer = cb(map);
            map.addTileLayer(tilelayer);
            return { map: map, tilelayer: tilelayer };
        });
    };
    /**
     * @param {?} tilelayer
     * @return {?}
     */
    MapService.prototype.removeTileLayer = /**
     * @param {?} tilelayer
     * @return {?}
     */
    function (tilelayer) {
        return this._map.then(function (map) {
            map.removeOverlay(tilelayer);
        });
    };
    /**
     * @param {?} cb
     * @return {?}
     */
    MapService.prototype.addControl = /**
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        return this._map.then(function (map) {
            var /** @type {?} */ control = cb(map);
            map.addControl(control);
            return { map: map, control: control };
        });
    };
    /**
     * @param {?} control
     * @return {?}
     */
    MapService.prototype.removeControl = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return this._map.then(function (map) {
            map.removeControl(control);
        });
    };
    /**
     * @return {?}
     */
    MapService.prototype.getNativeMap = /**
     * @return {?}
     */
    function () {
        return this._map;
    };
    MapService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MapService.ctorParameters = function () { return [
        { type: ScriptLoaderConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ScriptLoaderConfig,] },] },
        { type: ScriptLoader, },
    ]; };
    return MapService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ControlComponent = /** @class */ (function () {
    function ControlComponent(_service) {
        this._service = _service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        nullCheck(this.type, 'type is required for <control>');
        this._service
            .addControl(function () {
            _this.control = _this.createControl(_this.type, _this.options);
            return _this.control;
        })
            .then(function (_a) {
            var control = _a.control;
            _this.loaded.emit(control);
        });
    };
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._service.removeControl(this.control);
    };
    /**
     * @param {?} type
     * @param {?} options
     * @return {?}
     */
    ControlComponent.prototype.createControl = /**
     * @param {?} type
     * @param {?} options
     * @return {?}
     */
    function (type, options) {
        if (type === 'navigation') {
            return new window.BMap.NavigationControl(toNavigationControlOptions(options));
        }
        if (type === 'overviewmap') {
            return new window.BMap.OverviewMapControl(toOverviewMapControlOptions(options));
        }
        if (type === 'scale') {
            return new window.BMap.ScaleControl(toScaleControlOptions(options));
        }
        if (type === 'maptype') {
            return new window.BMap.MapTypeControl(toMapTypeControlOptions(options));
        }
        if (type === 'geolocation') {
            return new window.BMap.GeolocationControl(toGeolocationOptions(options));
        }
        if (type === 'panorama') {
            return new window.BMap.PanoramaControl();
        }
        throw new Error("Unsupported type:" + type + " of control");
    };
    ControlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'control'
                },] },
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: MapService, },
    ]; };
    ControlComponent.propDecorators = {
        "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return ControlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MapComponent = /** @class */ (function () {
    function MapComponent(_service) {
        this._service = _service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    MapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        nullCheck(this.options, 'options is required for <baidu-map>');
        nullCheck(this.options.centerAndZoom, 'options.centerAndZoom is required for <baidu-map>');
        this._service
            .createMap(this.mapInstance.nativeElement, this.options)
            .then(function (map) {
            _this.loaded.emit(map);
            return map;
        })
            .then(function (map) {
            _this.addListener(map);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ opts = /** @type {?} */ (changes["options"].currentValue);
        if (!opts) {
            return console.warn('MapOptions change was ignored since you are passing empty value');
        }
        this._service.setOptions(opts);
    };
    /**
     * @return {?}
     */
    MapComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        console.log('on map destroy');
    };
    /**
     * @param {?} map
     * @return {?}
     */
    MapComponent.prototype.addListener = /**
     * @param {?} map
     * @return {?}
     */
    function (map) {
        var _this = this;
        map.addEventListener('click', function (e) {
            _this.clicked.emit(e);
        });
    };
    MapComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    providers: [MapService],
                    selector: 'baidu-map',
                    styles: [
                        "\n        .baidu-map-instance {\n            width: 100%;\n            height: 100%;\n            display: none;\n        }\n        .baidu-map-offline {\n            width: 100%;\n            height: 100%;\n            background-color: #E6E6E6;\n            position: relative;\n            display: none;\n        }\n        .baidu-map-offline label {\n            fontSize: 30px;\n            margin: 0;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            margin-right: -50%;\n            transform: translate(-50%, -50%);\n        }\n        .tranclude-content {\n            display: none;\n        }\n        "
                    ],
                    template: "\n    <div #mapinstance class=\"baidu-map-instance\"></div>\n    <div class=\"baidu-map-offline\">\n        <label>{{ 'NO_NETWORK' }}</label>\n    </div>\n    <div class=\"tranclude-content\">\n        <ng-content></ng-content>\n    </div>\n    "
                },] },
    ];
    /** @nocollapse */
    MapComponent.ctorParameters = function () { return [
        { type: MapService, },
    ]; };
    MapComponent.propDecorators = {
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "clicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "mapInstance": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['mapinstance',] },],
    };
    return MapComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MarkerComponent = /** @class */ (function () {
    function MarkerComponent(_service) {
        this._service = _service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    MarkerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        nullCheck(this.point, 'point is required for <marker>');
        this._service
            .addOverlay(function () {
            return (_this.marker = new window.BMap.Marker(toPoint(_this.point), toMarkerOptions(_this.options)));
        })
            .then(function (_a) {
            var map = _a.map;
            _this.loaded.emit(_this.marker);
            _this.addListener(_this.marker, map);
        })
            .then(function () {
            // workaround: it's weird that postion is set while constructing phase will make click event not working
            // workaround: it's weird that postion is set while constructing phase will make click event not working
            _this.marker.setPosition(new window.BMap.Point(_this.point.lng, _this.point.lat));
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MarkerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["point"] && !changes["point"].isFirstChange()) {
            this.marker.setPosition(toPoint(changes["point"].currentValue));
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    };
    /**
     * @return {?}
     */
    MarkerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._service.removeOverlay(this.marker);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    MarkerComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isNull(options.offset)) {
            this.marker.setOffset(toSize(options.offset));
        }
        if (!isNull(options.icon)) {
            this.marker.setIcon(toIcon(options.icon.imageUrl, options.icon.size, options.icon));
        }
        if (!isNull(options.enableMassClear)) {
            this.marker[(options.enableMassClear ? 'enable' : 'disable') + 'MassClear']();
        }
        if (!isNull(options.enableDragging)) {
            this.marker[(options.enableDragging ? 'enable' : 'disable') + 'Dragging']();
        }
        if (!isNull(options.rotation)) {
            this.marker.setRotation(options.rotation);
        }
        if (!isNull(options.shadow)) {
            this.marker.setShadow(toIcon(options.shadow.imageUrl, options.shadow.size, options.shadow));
        }
        if (!isNull(options.title)) {
            this.marker.setTitle(options.title);
        }
    };
    /**
     * @param {?} marker
     * @param {?} map
     * @return {?}
     */
    MarkerComponent.prototype.addListener = /**
     * @param {?} marker
     * @param {?} map
     * @return {?}
     */
    function (marker, map) {
        var _this = this;
        marker.addEventListener('click', function (e) {
            _this.clicked.emit({
                e: e,
                map: map,
                marker: marker
            });
        });
    };
    MarkerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'marker'
                },] },
    ];
    /** @nocollapse */
    MarkerComponent.ctorParameters = function () { return [
        { type: MapService, },
    ]; };
    MarkerComponent.propDecorators = {
        "point": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "clicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return MarkerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PolylineComponent = /** @class */ (function () {
    function PolylineComponent(_service) {
        this._service = _service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PolylineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        nullCheck(this.points, 'points is required for <polyline>');
        this._service
            .addOverlay(function () {
            return (_this.polyline = new window.BMap.Polyline(toPoints(_this.points), _this.options));
        })
            .then(function () {
            _this.loaded.emit(_this.polyline);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PolylineComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["points"] && !changes["points"].isFirstChange()) {
            this.polyline.setPath(toPoints(changes["points"].currentValue));
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    };
    /**
     * @return {?}
     */
    PolylineComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._service.removeOverlay(this.polyline);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PolylineComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polyline.enableEditing();
            }
            else {
                this.polyline.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polyline.enableMassClear();
            }
            else {
                this.polyline.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polyline.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polyline.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polyline.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polyline.setStrokeWeight(options.strokeWeight);
        }
    };
    PolylineComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'polyline'
                },] },
    ];
    /** @nocollapse */
    PolylineComponent.ctorParameters = function () { return [
        { type: MapService, },
    ]; };
    PolylineComponent.propDecorators = {
        "points": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PolylineComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CircleComponent = /** @class */ (function () {
    function CircleComponent(_service) {
        this._service = _service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    CircleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        nullCheck(this.center, 'center is required for <circle>');
        nullCheck(this.radius, 'center is required for <circle>');
        this._service
            .addOverlay(function () {
            return (_this.circle = new window.BMap.Circle(toPoint(_this.center), _this.radius, _this.options));
        })
            .then(function () {
            _this.loaded.emit(_this.circle);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CircleComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["center"] && !changes["center"].isFirstChange()) {
            this.circle.setCenter(toPoint(changes["center"].currentValue));
        }
        if (changes["radius"] && !changes["radius"].isFirstChange()) {
            this.circle.setRadius(changes["radius"].currentValue);
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    };
    /**
     * @return {?}
     */
    CircleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._service.removeOverlay(this.circle);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    CircleComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.circle.enableEditing();
            }
            else {
                this.circle.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.circle.enableMassClear();
            }
            else {
                this.circle.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.circle.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.circle.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.circle.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.circle.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.circle.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.circle.setStrokeWeight(options.strokeWeight);
        }
    };
    CircleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'circle'
                },] },
    ];
    /** @nocollapse */
    CircleComponent.ctorParameters = function () { return [
        { type: MapService, },
    ]; };
    CircleComponent.propDecorators = {
        "center": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return CircleComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PolygonComponent = /** @class */ (function () {
    function PolygonComponent(_service) {
        this._service = _service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    PolygonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        nullCheck(this.points, 'points is required for <polygon>');
        this._service
            .addOverlay(function () {
            return (_this.polygon = new window.BMap.Polygon(toPoints(_this.points), _this.options));
        })
            .then(function () {
            _this.loaded.emit(_this.polygon);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PolygonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["points"] && !changes["points"].isFirstChange()) {
            this.polygon.setPath(toPoints(changes["points"].currentValue));
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.setOptions(changes["options"].currentValue);
        }
    };
    /**
     * @return {?}
     */
    PolygonComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._service.removeOverlay(this.polygon);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PolygonComponent.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (isNull(options)) {
            return;
        }
        if (!isUndefined(options.enableEditing)) {
            if (options.enableEditing) {
                this.polygon.enableEditing();
            }
            else {
                this.polygon.disableEditing();
            }
        }
        if (!isUndefined(options.enableMassClear)) {
            if (options.enableEditing) {
                this.polygon.enableMassClear();
            }
            else {
                this.polygon.disableMassClear();
            }
        }
        if (!isUndefined(options.strokeColor)) {
            this.polygon.setStrokeColor(options.strokeColor);
        }
        if (!isUndefined(options.fillColor)) {
            this.polygon.setFillColor(options.fillColor);
        }
        if (!isUndefined(options.strokeOpacity)) {
            this.polygon.setStrokeOpacity(options.strokeOpacity);
        }
        if (!isUndefined(options.fillOpacity)) {
            this.polygon.setFillOpacity(options.fillOpacity);
        }
        if (!isUndefined(options.strokeStyle)) {
            this.polygon.setStrokeStyle(options.strokeStyle);
        }
        if (!isUndefined(options.strokeWeight)) {
            this.polygon.setStrokeWeight(options.strokeWeight);
        }
    };
    PolygonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'polygon'
                },] },
    ];
    /** @nocollapse */
    PolygonComponent.ctorParameters = function () { return [
        { type: MapService, },
    ]; };
    PolygonComponent.propDecorators = {
        "points": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PolygonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LIB_URL = "https://api.map.baidu.com/library/Heatmap/2.0/src/Heatmap_min.js";
var HeatmapComponent = /** @class */ (function () {
    function HeatmapComponent(_service, scriptLoader) {
        this._service = _service;
        this.scriptLoader = scriptLoader;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    HeatmapComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        nullCheck(this.dataset, 'dataset is required for <heatmap>');
        this._service.getNativeMap().then(function () {
            return _this.scriptLoader.load(LIB_URL, false, function () {
                _this._service
                    .addOverlay(function () {
                    return (_this.heatmap = new window.BMapLib.HeatmapOverlay(_this.options));
                })
                    .then(function () {
                    _this.loaded.emit(_this.heatmap);
                    if (_this.dataset) {
                        _this.heatmap.setDataSet(_this.dataset);
                    }
                });
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    HeatmapComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["dataset"] && !changes["dataset"].isFirstChange()) {
            this.heatmap.setDataSet(changes["dataset"].currentValue);
        }
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.heatmap.setOptions(changes["options"].currentValue);
        }
    };
    /**
     * @return {?}
     */
    HeatmapComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._service.removeOverlay(this.heatmap);
    };
    HeatmapComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'heatmap'
                },] },
    ];
    /** @nocollapse */
    HeatmapComponent.ctorParameters = function () { return [
        { type: MapService, },
        { type: ScriptLoader, },
    ]; };
    HeatmapComponent.propDecorators = {
        "dataset": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return HeatmapComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TileLayderComponent = /** @class */ (function () {
    function TileLayderComponent(_service) {
        this._service = _service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    TileLayderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ func = this.getTilesUrl;
        this._service
            .addTileLayer(function () {
            _this.tilelayer = new window.BMap.TileLayer(_this.options);
            if (_this.getTilesUrl) {
                _this.tilelayer.getTilesUrl = function (tileCoord, zoom) {
                    return func(tileCoord, zoom);
                };
            }
            return _this.tilelayer;
        })
            .then(function () {
            _this.loaded.emit(_this.tilelayer);
        });
    };
    /**
     * @return {?}
     */
    TileLayderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._service.removeTileLayer(this.tilelayer);
    };
    TileLayderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'tilelayer'
                },] },
    ];
    /** @nocollapse */
    TileLayderComponent.ctorParameters = function () { return [
        { type: MapService, },
    ]; };
    TileLayderComponent.propDecorators = {
        "getTilesUrl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return TileLayderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TrafficLayderComponent = /** @class */ (function () {
    function TrafficLayderComponent(_service) {
        this._service = _service;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    TrafficLayderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._service
            .addTileLayer(function () {
            _this.trafficlayer = new window.BMap.TrafficLayer(_this.options);
            return _this.trafficlayer;
        })
            .then(function () {
            _this.loaded.emit(_this.trafficlayer);
        });
    };
    /**
     * @return {?}
     */
    TrafficLayderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._service.removeTileLayer(this.trafficlayer);
    };
    TrafficLayderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'trafficlayer'
                },] },
    ];
    /** @nocollapse */
    TrafficLayderComponent.ctorParameters = function () { return [
        { type: MapService, },
    ]; };
    TrafficLayderComponent.propDecorators = {
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return TrafficLayderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ LIB_URLS = {
    key: 'markerClusterer',
    scripts: [
        'https://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js',
        'https://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js'
    ]
};
var MarkerClustererComponent = /** @class */ (function () {
    function MarkerClustererComponent(_service, scriptLoader) {
        this._service = _service;
        this.scriptLoader = scriptLoader;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    MarkerClustererComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        nullCheck(this.options, 'options is required for <marker-clusterer>');
        this._service.getNativeMap().then(function (map) {
            return _this.scriptLoader.load(LIB_URLS, false, function () {
                _this.markerClusterer = new window.BMapLib.MarkerClusterer(map, toMarkerClustererOptions(_this.options));
                _this.loaded.emit(_this.markerClusterer);
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MarkerClustererComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["options"] && !changes["options"].isFirstChange()) {
            this.resetOptions(changes["options"].currentValue);
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    MarkerClustererComponent.prototype.resetOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        if (options.markers) {
            this.markerClusterer.clearMarkers();
            this.markerClusterer.addMarkers(options.markers.map(function (m) { return new window.BMap.Marker(toPoint(m.point), toMarkerOptions(m.options)); }));
        }
        if (!isUndefined(options.girdSize)) {
            this.markerClusterer.setGridSize(options.girdSize);
        }
        if (!isUndefined(options.maxZoom)) {
            this.markerClusterer.setMaxZoom(options.maxZoom);
        }
        if (options.styles) {
            this.markerClusterer.setStyles(options.styles.filter(function (s) { return s; }).map(function (s) { return toTextIconStyle(s); }));
        }
    };
    /**
     * @return {?}
     */
    MarkerClustererComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.markerClusterer.clearMarkers();
    };
    MarkerClustererComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'marker-clusterer'
                },] },
    ];
    /** @nocollapse */
    MarkerClustererComponent.ctorParameters = function () { return [
        { type: MapService, },
        { type: ScriptLoader, },
    ]; };
    MarkerClustererComponent.propDecorators = {
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "loaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return MarkerClustererComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var ControlAnchor = {
    BMAP_ANCHOR_TOP_LEFT: 0,
    BMAP_ANCHOR_TOP_RIGHT: 1,
    BMAP_ANCHOR_BOTTOM_LEFT: 2,
    BMAP_ANCHOR_BOTTOM_RIGHT: 3,
};
ControlAnchor[ControlAnchor.BMAP_ANCHOR_TOP_LEFT] = "BMAP_ANCHOR_TOP_LEFT";
ControlAnchor[ControlAnchor.BMAP_ANCHOR_TOP_RIGHT] = "BMAP_ANCHOR_TOP_RIGHT";
ControlAnchor[ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT] = "BMAP_ANCHOR_BOTTOM_LEFT";
ControlAnchor[ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT] = "BMAP_ANCHOR_BOTTOM_RIGHT";
/** @enum {number} */
var NavigationControlType = {
    BMAP_NAVIGATION_CONTROL_LARGE: 0,
    BMAP_NAVIGATION_CONTROL_SMALL: 1,
    BMAP_NAVIGATION_CONTROL_PAN: 2,
    BMAP_NAVIGATION_CONTROL_ZOOM: 3,
};
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE] = "BMAP_NAVIGATION_CONTROL_LARGE";
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL] = "BMAP_NAVIGATION_CONTROL_SMALL";
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_PAN] = "BMAP_NAVIGATION_CONTROL_PAN";
NavigationControlType[NavigationControlType.BMAP_NAVIGATION_CONTROL_ZOOM] = "BMAP_NAVIGATION_CONTROL_ZOOM";
/** @enum {number} */
var MapTypeControlType = {
    BMAP_MAPTYPE_CONTROL_HORIZONTAL: 0,
    BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
    BMAP_MAPTYPE_CONTROL_MAP: 2,
};
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL] = "BMAP_MAPTYPE_CONTROL_HORIZONTAL";
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_DROPDOWN] = "BMAP_MAPTYPE_CONTROL_DROPDOWN";
MapTypeControlType[MapTypeControlType.BMAP_MAPTYPE_CONTROL_MAP] = "BMAP_MAPTYPE_CONTROL_MAP";
/** @enum {string} */
var LengthUnit = {
    BMAP_UNIT_METRIC: 'metric',
    BMAP_UNIT_IMPERIAL: 'us',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BaiduMapModule = /** @class */ (function () {
    function BaiduMapModule() {
    }
    /**
     * @param {?=} _config
     * @return {?}
     */
    BaiduMapModule.forRoot = /**
     * @param {?=} _config
     * @return {?}
     */
    function (_config) {
        return {
            ngModule: BaiduMapModule,
            providers: [{ provide: ScriptLoaderConfig, useValue: _config }, ScriptLoader]
        };
    };
    BaiduMapModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        MapComponent,
                        MarkerComponent,
                        ControlComponent,
                        PolylineComponent,
                        CircleComponent,
                        PolygonComponent,
                        HeatmapComponent,
                        TileLayderComponent,
                        TrafficLayderComponent,
                        MarkerClustererComponent
                    ],
                    exports: [
                        MapComponent,
                        MarkerComponent,
                        ControlComponent,
                        PolylineComponent,
                        CircleComponent,
                        PolygonComponent,
                        HeatmapComponent,
                        TileLayderComponent,
                        TrafficLayderComponent,
                        MarkerClustererComponent
                    ]
                },] },
    ];
    return BaiduMapModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItYmFpZHUtbWFwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvaGVscGVycy9vYmplY3QudHMiLCJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC9oZWxwZXJzL3RyYW5zZm9ybWVyLnRzIiwibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvaGVscGVycy92YWxpZGF0ZS50cyIsIm5nOi8vYW5ndWxhcjItYmFpZHUtbWFwL3Byb3ZpZGVycy9zY3JpcHRMb2FkZXIudHMiLCJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC90eXBlcy9NYXAudHMiLCJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC9wcm92aWRlcnMvbWFwU2VydmljZS50cyIsIm5nOi8vYW5ndWxhcjItYmFpZHUtbWFwL2NvbXBvbmVudHMvY29udHJvbC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC9jb21wb25lbnRzL21hcC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC9jb21wb25lbnRzL21hcmtlci5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC9jb21wb25lbnRzL3BvbHlsaW5lLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhcjItYmFpZHUtbWFwL2NvbXBvbmVudHMvY2lyY2xlLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhcjItYmFpZHUtbWFwL2NvbXBvbmVudHMvcG9seWdvbi5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXIyLWJhaWR1LW1hcC9jb21wb25lbnRzL2hlYXRtYXAuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvY29tcG9uZW50cy90aWxlbGF5ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvY29tcG9uZW50cy90cmFmZmljbGF5ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvY29tcG9uZW50cy9tYXJrZXJDbHVzdGVyZXIuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyMi1iYWlkdS1tYXAvdHlwZXMvQ29udHJvbC50cyIsIm5nOi8vYW5ndWxhcjItYmFpZHUtbWFwL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc051bGwob2JqOiBhbnkpIHtcbiAgcmV0dXJuIG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqOiBhbnkpIHtcbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4ob2JqOiBhbnkpOiBvYmogaXMgYm9vbGVhbiB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iajogYW55KTogb2JqIGlzIGJvb2xlYW4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iajogYW55KTogb2JqIGlzIGJvb2xlYW4ge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbWl0PFQ+KG9iajogVCwgLi4ua2V5czogQXJyYXk8c3RyaW5nPik6IFQge1xuICBjb25zdCByYXdLZXlzID0gT2JqZWN0LmtleXMob2JqKVxuICBjb25zdCBmaW5hbEtleXMgPSByYXdLZXlzLmZpbHRlcihrID0+IGtleXMuaW5kZXhPZihrKSA8IDApXG4gIHJldHVybiBmaW5hbEtleXMucmVkdWNlKFxuICAgIChwLCB2KSA9PiB7XG4gICAgICBwW3ZdID0gb2JqW3ZdXG4gICAgICByZXR1cm4gcFxuICAgIH0sXG4gICAgPFQ+e31cbiAgKVxufVxuIiwiaW1wb3J0IHtcbiAgQkdlb2xvY2F0aW9uQ29udHJvbE9wdGlvbnMsXG4gIEJNYXBUeXBlQ29udHJvbE9wdGlvbnMsXG4gIEJOYXZpZ2F0aW9uQ29udHJvbE9wdGlvbnMsXG4gIEJPdmVydmlld01hcENvbnRyb2xPcHRpb25zLFxuICBCU2NhbGVDb250cm9sT3B0aW9ucyxcbiAgR2VvbG9jYXRpb25Db250cm9sT3B0aW9ucyxcbiAgTWFwVHlwZUNvbnRyb2xPcHRpb25zLFxuICBOYXZpZ2F0aW9uQ29udHJvbE9wdGlvbnMsXG4gIE92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnMsXG4gIFNjYWxlQ29udHJvbE9wdGlvbnNcbn0gZnJvbSAnLi4vdHlwZXMvQ29udHJvbCdcbmltcG9ydCB7IEJJY29uLCBJY29uT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL0ljb24nXG5pbXBvcnQgeyBCTWFya2VyT3B0aW9ucywgTWFya2VyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL01hcmtlcidcbmltcG9ydCB7IEJQb2ludCwgUG9pbnQgfSBmcm9tICcuLi90eXBlcy9Qb2ludCdcbmltcG9ydCB7IEJTaXplLCBTaXplIH0gZnJvbSAnLi4vdHlwZXMvU2l6ZSdcblxuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnLi9vYmplY3QnXG5pbXBvcnQgeyBCTWFya2VyQ2x1c3RlcmVyT3B0aW9ucywgTWFya2VyQ2x1c3RlcmVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzL01hcmtlckNsdXN0ZXJlcidcbmltcG9ydCB7IFRleHRJY29uU3R5bGUsIEJUZXh0SWNvblN0eWxlIH0gZnJvbSAnLi4vdHlwZXMvVGV4dEljb25PdmVybGF5J1xuXG5leHBvcnQgZnVuY3Rpb24gdG9Qb2ludChvcHRzOiBQb2ludCk6IEJQb2ludCB7XG4gIGlmICghb3B0cykge1xuICAgIHJldHVybiBuZXcgd2luZG93LkJNYXAuUG9pbnQoKVxuICB9XG4gIHJldHVybiBuZXcgd2luZG93LkJNYXAuUG9pbnQob3B0cy5sbmcsIG9wdHMubGF0KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Qb2ludHMob3B0czogQXJyYXk8UG9pbnQ+KTogQXJyYXk8QlBvaW50PiB7XG4gIGlmICghb3B0cykge1xuICAgIHJldHVybiBbXVxuICB9XG4gIHJldHVybiBvcHRzLm1hcChwID0+IHtcbiAgICByZXR1cm4gbmV3IHdpbmRvdy5CTWFwLlBvaW50KHAubG5nLCBwLmxhdClcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvU2l6ZShvcHRzOiBTaXplKTogQlNpemUge1xuICBpZiAoIW9wdHMpIHtcbiAgICByZXR1cm4gbmV3IHdpbmRvdy5CTWFwLlNpemUoKVxuICB9XG4gIHJldHVybiBuZXcgd2luZG93LkJNYXAuU2l6ZShvcHRzLndpZHRoLCBvcHRzLmhlaWdodClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvSWNvbih1cmw6IHN0cmluZywgc2l6ZTogU2l6ZSwgb3B0aW9uczogSWNvbk9wdGlvbnMpOiBCSWNvbiB7XG4gIGlmICghc2l6ZSAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgd2luZG93LkJNYXAuSWNvbih1cmwpXG4gIH1cbiAgaWYgKCFzaXplKSB7XG4gICAgcmV0dXJuIG5ldyB3aW5kb3cuQk1hcC5JY29uKHVybCwgdG9TaXplKHNpemUpKVxuICB9XG4gIGNvbnN0IGljb25PcHRpb25zOiBhbnkgPSB7XG4gICAgYW5jaG9yOiB0b1NpemUob3B0aW9ucy5hbmNob3IpLFxuICAgIGltYWdlT2Zmc2V0OiB0b1NpemUob3B0aW9ucy5pbWFnZU9mZnNldCksXG4gICAgaW5mb1dpbmRvd0FuY2hvcjogdG9TaXplKG9wdGlvbnMuaW5mb1dpbmRvd0FuY2hvciksXG4gICAgcHJpbnRJbWFnZVVybDogb3B0aW9ucy5wcmludEltYWdlVXJsXG4gIH1cbiAgY29uc3QgaWNvbiA9IG5ldyB3aW5kb3cuQk1hcC5JY29uKHVybCwgdG9TaXplKHNpemUpLCBpY29uT3B0aW9ucylcbiAgaWYgKG9wdGlvbnMuaW1hZ2VTaXplKSB7XG4gICAgaWNvbi5zZXRJbWFnZVNpemUodG9TaXplKG9wdGlvbnMuaW1hZ2VTaXplKSlcbiAgfVxuICByZXR1cm4gaWNvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9NYXJrZXJPcHRpb25zKG9wdGlvbnM6IE1hcmtlck9wdGlvbnMpOiBCTWFya2VyT3B0aW9ucyB7XG4gIGNvbnN0IG9wdHM6IEJNYXJrZXJPcHRpb25zID0ge31cblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0c1xuICB9XG5cbiAgaWYgKG9wdGlvbnMub2Zmc2V0KSB7XG4gICAgb3B0cy5vZmZzZXQgPSB0b1NpemUob3B0aW9ucy5vZmZzZXQpXG4gIH1cblxuICBpZiAob3B0aW9ucy5pY29uKSB7XG4gICAgb3B0cy5pY29uID0gdG9JY29uKG9wdGlvbnMuaWNvbi5pbWFnZVVybCwgb3B0aW9ucy5pY29uLnNpemUsIG9wdGlvbnMuaWNvbilcbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLmVuYWJsZU1hc3NDbGVhcikpIHtcbiAgICBvcHRzLmVuYWJsZU1hc3NDbGVhciA9IG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyXG4gIH1cbiAgaWYgKCFpc051bGwob3B0aW9ucy5lbmFibGVEcmFnZ2luZykpIHtcbiAgICBvcHRzLmVuYWJsZURyYWdnaW5nID0gb3B0aW9ucy5lbmFibGVEcmFnZ2luZ1xuICB9XG4gIGlmICghaXNOdWxsKG9wdGlvbnMuZW5hYmxlQ2xpY2tpbmcpKSB7XG4gICAgb3B0cy5lbmFibGVDbGlja2luZyA9IG9wdGlvbnMuZW5hYmxlQ2xpY2tpbmdcbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLnJhaXNlT25EcmFnKSkge1xuICAgIG9wdHMucmFpc2VPbkRyYWcgPSBvcHRpb25zLnJhaXNlT25EcmFnXG4gIH1cbiAgaWYgKCFpc051bGwob3B0aW9ucy5kcmFnZ2luZ0N1cnNvcikpIHtcbiAgICBvcHRzLmRyYWdnaW5nQ3Vyc29yID0gb3B0aW9ucy5kcmFnZ2luZ0N1cnNvclxuICB9XG4gIGlmICghaXNOdWxsKG9wdGlvbnMucm90YXRpb24pKSB7XG4gICAgb3B0cy5yb3RhdGlvbiA9IG9wdGlvbnMucm90YXRpb25cbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLnRpdGxlKSkge1xuICAgIG9wdHMudGl0bGUgPSBvcHRpb25zLnRpdGxlXG4gIH1cbiAgaWYgKCFpc051bGwob3B0aW9ucy5zaGFkb3cpKSB7XG4gICAgb3B0cy5zaGFkb3cgPSB0b0ljb24ob3B0aW9ucy5zaGFkb3cuaW1hZ2VVcmwsIG9wdGlvbnMuc2hhZG93LnNpemUsIG9wdGlvbnMuc2hhZG93KVxuICB9XG5cbiAgcmV0dXJuIG9wdHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTmF2aWdhdGlvbkNvbnRyb2xPcHRpb25zKG9wdGlvbnM6IE5hdmlnYXRpb25Db250cm9sT3B0aW9ucyk6IEJOYXZpZ2F0aW9uQ29udHJvbE9wdGlvbnMge1xuICBjb25zdCBvcHRzOiBCTmF2aWdhdGlvbkNvbnRyb2xPcHRpb25zID0ge31cblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0c1xuICB9XG5cbiAgaWYgKCFpc051bGwob3B0aW9ucy5hbmNob3IpKSB7XG4gICAgb3B0cy5hbmNob3IgPSBvcHRpb25zLmFuY2hvclxuICB9XG4gIGlmICghaXNOdWxsKG9wdGlvbnMuZW5hYmxlR2VvbG9jYXRpb24pKSB7XG4gICAgb3B0cy5lbmFibGVHZW9sb2NhdGlvbiA9IG9wdGlvbnMuZW5hYmxlR2VvbG9jYXRpb25cbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLm9mZnNldCkpIHtcbiAgICBvcHRzLm9mZnNldCA9IHRvU2l6ZShvcHRpb25zLm9mZnNldClcbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLnNob3dab29tSW5mbykpIHtcbiAgICBvcHRzLnNob3dab29tSW5mbyA9IG9wdGlvbnMuc2hvd1pvb21JbmZvXG4gIH1cblxuICBpZiAoIWlzTnVsbChvcHRpb25zLnR5cGUpKSB7XG4gICAgb3B0cy50eXBlID0gb3B0aW9ucy50eXBlXG4gIH1cbiAgcmV0dXJuIG9wdHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvT3ZlcnZpZXdNYXBDb250cm9sT3B0aW9ucyhvcHRpb25zOiBPdmVydmlld01hcENvbnRyb2xPcHRpb25zKTogQk92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnMge1xuICBjb25zdCBvcHRzOiBCT3ZlcnZpZXdNYXBDb250cm9sT3B0aW9ucyA9IHt9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdHNcbiAgfVxuXG4gIGlmICghaXNOdWxsKG9wdGlvbnMuYW5jaG9yKSkge1xuICAgIG9wdHMuYW5jaG9yID0gb3B0aW9ucy5hbmNob3JcbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLmlzT3BlbikpIHtcbiAgICBvcHRzLmlzT3BlbiA9IG9wdGlvbnMuaXNPcGVuXG4gIH1cbiAgaWYgKCFpc051bGwob3B0aW9ucy5vZmZzZXQpKSB7XG4gICAgb3B0cy5vZmZzZXQgPSB0b1NpemUob3B0aW9ucy5vZmZzZXQpXG4gIH1cbiAgaWYgKCFpc051bGwob3B0aW9ucy5zaXplKSkge1xuICAgIG9wdHMuc2l6ZSA9IHRvU2l6ZShvcHRpb25zLnNpemUpXG4gIH1cbiAgcmV0dXJuIG9wdHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvU2NhbGVDb250cm9sT3B0aW9ucyhvcHRpb25zOiBTY2FsZUNvbnRyb2xPcHRpb25zKTogQlNjYWxlQ29udHJvbE9wdGlvbnMge1xuICBjb25zdCBvcHRzOiBCU2NhbGVDb250cm9sT3B0aW9ucyA9IHt9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdHNcbiAgfVxuXG4gIGlmICghaXNOdWxsKG9wdGlvbnMuYW5jaG9yKSkge1xuICAgIG9wdHMuYW5jaG9yID0gb3B0aW9ucy5hbmNob3JcbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLm9mZnNldCkpIHtcbiAgICBvcHRzLm9mZnNldCA9IHRvU2l6ZShvcHRpb25zLm9mZnNldClcbiAgfVxuICByZXR1cm4gb3B0c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9NYXBUeXBlQ29udHJvbE9wdGlvbnMob3B0aW9uczogTWFwVHlwZUNvbnRyb2xPcHRpb25zKTogQk1hcFR5cGVDb250cm9sT3B0aW9ucyB7XG4gIGNvbnN0IG9wdHM6IEJNYXBUeXBlQ29udHJvbE9wdGlvbnMgPSB7fVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIHJldHVybiBvcHRzXG4gIH1cblxuICBpZiAoIWlzTnVsbChvcHRpb25zLnR5cGUpKSB7XG4gICAgb3B0cy50eXBlID0gb3B0aW9ucy50eXBlXG4gIH1cbiAgcmV0dXJuIG9wdHNcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0dlb2xvY2F0aW9uT3B0aW9ucyhvcHRpb25zOiBHZW9sb2NhdGlvbkNvbnRyb2xPcHRpb25zKTogQkdlb2xvY2F0aW9uQ29udHJvbE9wdGlvbnMge1xuICBjb25zdCBvcHRzOiBCR2VvbG9jYXRpb25Db250cm9sT3B0aW9ucyA9IHt9XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdHNcbiAgfVxuXG4gIGlmICghaXNOdWxsKG9wdGlvbnMuYW5jaG9yKSkge1xuICAgIG9wdHMuYW5jaG9yID0gb3B0aW9ucy5hbmNob3JcbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLm9mZnNldCkpIHtcbiAgICBvcHRzLm9mZnNldCA9IHRvU2l6ZShvcHRpb25zLm9mZnNldClcbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLmVuYWJsZUF1dG9Mb2NhdGlvbikpIHtcbiAgICBvcHRzLmVuYWJsZUF1dG9Mb2NhdGlvbiA9IG9wdGlvbnMuZW5hYmxlQXV0b0xvY2F0aW9uXG4gIH1cbiAgaWYgKCFpc051bGwob3B0aW9ucy5sb2NhdGlvbkljb24pKSB7XG4gICAgb3B0cy5sb2NhdGlvbkljb24gPSB0b0ljb24ob3B0aW9ucy5sb2NhdGlvbkljb24uaW1hZ2VVcmwsIG9wdGlvbnMubG9jYXRpb25JY29uLnNpemUsIG9wdGlvbnMubG9jYXRpb25JY29uKVxuICB9XG4gIGlmICghaXNOdWxsKG9wdGlvbnMuc2hvd0FkZHJlc3NCYXIpKSB7XG4gICAgb3B0cy5zaG93QWRkcmVzc0JhciA9IG9wdGlvbnMuc2hvd0FkZHJlc3NCYXJcbiAgfVxuICByZXR1cm4gb3B0c1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9UZXh0SWNvblN0eWxlKHN0eWxlOiBUZXh0SWNvblN0eWxlKTogQlRleHRJY29uU3R5bGUge1xuICBjb25zdCByZWFsU3R5bGU6IEJUZXh0SWNvblN0eWxlID0ge1xuICAgIHVybDogc3R5bGUudXJsLFxuICAgIHNpemU6IHRvU2l6ZShzdHlsZS5zaXplKVxuICB9XG4gIGlmIChzdHlsZS5hbmNob3IpIHtcbiAgICByZWFsU3R5bGUuYW5jaG9yID0gdG9TaXplKHN0eWxlLmFuY2hvcilcbiAgfVxuICBpZiAoc3R5bGUub2Zmc2V0KSB7XG4gICAgcmVhbFN0eWxlLm9mZnNldCA9IHRvU2l6ZShzdHlsZS5vZmZzZXQpXG4gIH1cbiAgaWYgKCFpc051bGwoc3R5bGUudGV4dFNpemUpKSB7XG4gICAgcmVhbFN0eWxlLnRleHRTaXplID0gc3R5bGUudGV4dFNpemVcbiAgfVxuICBpZiAoIWlzTnVsbChzdHlsZS50ZXh0Q29sb3IpKSB7XG4gICAgcmVhbFN0eWxlLnRleHRDb2xvciA9IHN0eWxlLnRleHRDb2xvclxuICB9XG5cbiAgcmV0dXJuIHJlYWxTdHlsZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9NYXJrZXJDbHVzdGVyZXJPcHRpb25zKG9wdGlvbnM6IE1hcmtlckNsdXN0ZXJlck9wdGlvbnMpOiBCTWFya2VyQ2x1c3RlcmVyT3B0aW9ucyB7XG4gIGNvbnN0IG9wdHM6IEJNYXJrZXJDbHVzdGVyZXJPcHRpb25zID0ge31cblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0c1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWFya2Vycykge1xuICAgIG9wdHMubWFya2VycyA9IG9wdGlvbnMubWFya2Vycy5tYXAoXG4gICAgICBtID0+IG5ldyB3aW5kb3cuQk1hcC5NYXJrZXIodG9Qb2ludChtLnBvaW50KSwgdG9NYXJrZXJPcHRpb25zKG0ub3B0aW9ucykpXG4gICAgKVxuICB9XG5cbiAgaWYgKCFpc051bGwob3B0aW9ucy5naXJkU2l6ZSkpIHtcbiAgICBvcHRzLmdpcmRTaXplID0gb3B0aW9ucy5naXJkU2l6ZVxuICB9XG4gIGlmICghaXNOdWxsKG9wdGlvbnMubWF4Wm9vbSkpIHtcbiAgICBvcHRzLm1heFpvb20gPSBvcHRpb25zLm1heFpvb21cbiAgfVxuICBpZiAoIWlzTnVsbChvcHRpb25zLm1pbkNsdXN0ZXJTaXplKSkge1xuICAgIG9wdHMubWluQ2x1c3RlclNpemUgPSBvcHRpb25zLm1pbkNsdXN0ZXJTaXplXG4gIH1cbiAgaWYgKCFpc051bGwob3B0aW9ucy5pc0F2ZXJhbmdlQ2VudGVyKSkge1xuICAgIG9wdHMuaXNBdmVyYW5nZUNlbnRlciA9IG9wdGlvbnMuaXNBdmVyYW5nZUNlbnRlclxuICB9XG4gIGlmIChvcHRpb25zLnN0eWxlcykge1xuICAgIG9wdHMuc3R5bGVzID0gb3B0aW9ucy5zdHlsZXMuZmlsdGVyKHMgPT4gcykubWFwKHMgPT4gdG9UZXh0SWNvblN0eWxlKHMpKVxuICB9XG5cbiAgcmV0dXJuIG9wdHNcbn1cbiIsImltcG9ydCB7IGlzTnVsbCB9IGZyb20gJy4vb2JqZWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gbnVsbENoZWNrKG9iajogYW55LCBtc2c6IHN0cmluZykge1xuICBpZiAoaXNOdWxsKG9iaikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobXNnKVxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vaGVscGVycy9vYmplY3QnXG5pbXBvcnQgeyBTY3JpcHRUeXBlIH0gZnJvbSAnLi4vdHlwZXMvU2NyaXB0J1xuXG5leHBvcnQgZW51bSBMT0FESU5HX1NUQVRFIHtcbiAgTk9OID0gMCxcbiAgTE9BREVEID0gMSxcbiAgTE9BRElORyA9IDJcbn1cblxuZXhwb3J0IGNsYXNzIFNjcmlwdExvYWRlckNvbmZpZyB7XG4gIHB1YmxpYyBhazogc3RyaW5nID0gJydcbn1cblxud2luZG93Ll9zY3JpcHRMb2FkU3RhdGUgPSB7fVxud2luZG93Ll9sb2FkaW5nQ2FsbGJhY2tzID0ge31cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjcmlwdExvYWRlciB7XG4gIHB1YmxpYyBsb2FkKHVybDogc3RyaW5nIHwgU2NyaXB0VHlwZSwgaXNNYWluOiBib29sZWFuID0gZmFsc2UsIGNiOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3Qgc2NyaXB0S2V5ID0gaXNTdHJpbmcodXJsKSA/IHVybCA6IHVybFsna2V5J11cbiAgICBjb25zdCBzY3JpcHRVcmxzID0gaXNTdHJpbmcodXJsKSA/IFt1cmxdIDogdXJsWydzY3JpcHRzJ11cblxuICAgIGlmICh3aW5kb3cuX3NjcmlwdExvYWRTdGF0ZVtzY3JpcHRLZXldID09PSBMT0FESU5HX1NUQVRFLkxPQURFRCkge1xuICAgICAgaWYgKGlzTWFpbikge1xuICAgICAgICBzd2l0Y2hEaXNwbGF5KCdiYWlkdS1tYXAgLmJhaWR1LW1hcC1pbnN0YW5jZScsICdibG9jaycpXG4gICAgICAgIHN3aXRjaERpc3BsYXkoJ2JhaWR1LW1hcCAuYmFpZHUtbWFwLW9mZmxpbmUnLCAnbm9uZScpXG4gICAgICB9XG4gICAgICByZXR1cm4gY2IoKVxuICAgIH1cbiAgICBpZiAoIXdpbmRvdy5fbG9hZGluZ0NhbGxiYWNrc1tzY3JpcHRLZXldKSB7XG4gICAgICB3aW5kb3cuX2xvYWRpbmdDYWxsYmFja3Nbc2NyaXB0S2V5XSA9IFtdXG4gICAgfVxuICAgIGlmICh3aW5kb3cuX3NjcmlwdExvYWRTdGF0ZVtzY3JpcHRLZXldID09PSBMT0FESU5HX1NUQVRFLkxPQURJTkcpIHtcbiAgICAgIHdpbmRvdy5fbG9hZGluZ0NhbGxiYWNrc1tzY3JpcHRLZXldLnB1c2goY2IpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgd2luZG93Ll9zY3JpcHRMb2FkU3RhdGVbc2NyaXB0S2V5XSA9IExPQURJTkdfU1RBVEUuTE9BRElOR1xuICAgIHdpbmRvdy5fbG9hZGluZ0NhbGxiYWNrc1tzY3JpcHRLZXldLnB1c2goY2IpXG5cbiAgICBpZiAoaXNNYWluKSB7XG4gICAgICB3aW5kb3cuYmFpZHVtYXBpbml0ID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuX3NjcmlwdExvYWRTdGF0ZVtzY3JpcHRLZXldID0gTE9BRElOR19TVEFURS5MT0FERURcbiAgICAgICAgc3dpdGNoRGlzcGxheSgnYmFpZHUtbWFwIC5iYWlkdS1tYXAtaW5zdGFuY2UnLCAnYmxvY2snKVxuICAgICAgICBzd2l0Y2hEaXNwbGF5KCdiYWlkdS1tYXAgLmJhaWR1LW1hcC1vZmZsaW5lJywgJ25vbmUnKVxuICAgICAgICB3aW5kb3cuX2xvYWRpbmdDYWxsYmFja3Nbc2NyaXB0S2V5XS5mb3JFYWNoKChjOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgYygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGFwcGVuZFNjcmlwdHNUYWcoc2NyaXB0S2V5LCBzY3JpcHRVcmxzLCBpc01haW4pXG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0c1RhZyhzY3JpcHRLZXk6IHN0cmluZywgdXJsczogQXJyYXk8c3RyaW5nPiwgaXNNYWluOiBib29sZWFuKSB7XG4gIGNvbnN0IGxlZnRPYmogPSB7XG4gICAgY291bnQ6IHVybHMubGVuZ3RoXG4gIH1cbiAgdXJscy5mb3JFYWNoKHVybCA9PiB7XG4gICAgYXBwZW5kU2NyaXB0VGFnKHNjcmlwdEtleSwgdXJsLCBpc01haW4sIGxlZnRPYmopXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdFRhZyhzY3JpcHRLZXk6IHN0cmluZywgdXJsOiBzdHJpbmcsIGlzTWFpbjogYm9vbGVhbiwgbGVmdE9iajogeyBjb3VudDogbnVtYmVyIH0pIHtcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICBzY3JpcHQuc3JjID0gdXJsXG4gIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgIGlmIChpc01haW4pIHtcbiAgICAgIHN3aXRjaERpc3BsYXkoJ2JhaWR1LW1hcCAuYmFpZHUtbWFwLW9mZmxpbmUnLCAnYmxvY2snKVxuICAgICAgc3dpdGNoRGlzcGxheSgnYmFpZHUtbWFwIC5iYWlkdS1tYXAtaW5zdGFuY2UnLCAnbm9uZScpXG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhcHBlbmRTY3JpcHRUYWcoc2NyaXB0S2V5LCB1cmwsIGlzTWFpbiwgbGVmdE9iailcbiAgICB9LCAzMDAwMClcbiAgfVxuXG4gIGlmICghaXNNYWluKSB7XG4gICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGxlZnRPYmouY291bnQtLVxuICAgICAgaWYgKGxlZnRPYmouY291bnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB3aW5kb3cuX3NjcmlwdExvYWRTdGF0ZVtzY3JpcHRLZXldID0gTE9BRElOR19TVEFURS5MT0FERURcbiAgICAgIHdpbmRvdy5fbG9hZGluZ0NhbGxiYWNrc1tzY3JpcHRLZXldLmZvckVhY2goKGM6ICgpID0+IHZvaWQpID0+IHtcbiAgICAgICAgYygpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbn1cblxuZnVuY3Rpb24gc3dpdGNoRGlzcGxheShzZWxlY3Rvcjogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKSB7XG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKS5mb3JFYWNoKChub2RlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IHN0YXRlXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBCQm91bmRzIH0gZnJvbSAnLi9Cb3VuZHMnXG5pbXBvcnQgeyBCQ29udHJvbCB9IGZyb20gJy4vQ29udHJvbCdcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuL092ZXJsYXknXG5pbXBvcnQgeyBCUG9pbnQsIFBvaW50IH0gZnJvbSAnLi9Qb2ludCdcbmltcG9ydCB7IEJUaWxlTGF5ZXIgfSBmcm9tICcuL1RpbGVMYXllcidcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcbmltcG9ydCB7IEJTaXplIH0gZnJvbSAnLi9TaXplJ1xuaW1wb3J0IHsgQk1hcFR5cGUgfSBmcm9tICcuL01hcFR5cGUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQk1hcENvbnN0cnVjdG9yIHtcbiAgbmV3IChlbDogSFRNTEVsZW1lbnQgfCBzdHJpbmcsIG9wdHM6IE1hcE9wdGlvbnMpOiBCTWFwSW5zdGFuY2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCTWFwSW5zdGFuY2Uge1xuICBkaXNhYmxlRHJhZ2dpbmcoKTogdm9pZFxuICBlbmFibGVEcmFnZ2luZygpOiB2b2lkXG5cbiAgZGlzYWJsZVNjcm9sbFdoZWVsWm9vbSgpOiB2b2lkXG4gIGVuYWJsZVNjcm9sbFdoZWVsWm9vbSgpOiB2b2lkXG5cbiAgZGlzYWJsZURvdWJsZUNsaWNrWm9vbSgpOiB2b2lkXG4gIGVuYWJsZURvdWJsZUNsaWNrWm9vbSgpOiB2b2lkXG5cbiAgZGlzYWJsZUtleWJvYXJkKCk6IHZvaWRcbiAgZW5hYmxlS2V5Ym9hcmQoKTogdm9pZFxuXG4gIGRpc2FibGVJbmVydGlhbERyYWdnaW5nKCk6IHZvaWRcbiAgZW5hYmxlSW5lcnRpYWxEcmFnZ2luZygpOiB2b2lkXG5cbiAgZGlzYWJsZUNvbnRpbnVvdXNab29tKCk6IHZvaWRcbiAgZW5hYmxlQ29udGludW91c1pvb20oKTogdm9pZFxuXG4gIGRpc2FibGVQaW5jaFRvWm9vbSgpOiB2b2lkXG4gIGVuYWJsZVBpbmNoVG9ab29tKCk6IHZvaWRcblxuICBkaXNhYmxlQXV0b1Jlc2l6ZSgpOiB2b2lkXG4gIGVuYWJsZUF1dG9SZXNpemUoKTogdm9pZFxuXG4gIGFkZENvbnRyb2woY29udHJvbDogQkNvbnRyb2wpOiB2b2lkXG4gIHJlbW92ZUNvbnRyb2woY29udHJvbDogQkNvbnRyb2wpOiB2b2lkXG5cbiAgYWRkT3ZlcmxheShjb250cm9sOiBPdmVybGF5KTogdm9pZFxuICByZW1vdmVPdmVybGF5KGNvbnRyb2w6IE92ZXJsYXkpOiB2b2lkXG4gIGNsZWFyT3ZlcmxheXMoKTogdm9pZFxuXG4gIGFkZFRpbGVMYXllcih0aWxlTGF5ZXI6IEJUaWxlTGF5ZXIpOiB2b2lkXG4gIHJlbW92ZVRpbGVMYXllcih0aWxlTGF5ZXI6IEJUaWxlTGF5ZXIpOiB2b2lkXG5cbiAgc2V0RGVmYXVsdEN1cnNvcihjdXJzb3I6IHN0cmluZyk6IHZvaWRcbiAgZ2V0RGVmYXVsdEN1cnNvcigpOiBzdHJpbmdcblxuICBzZXREcmFnZ2luZ0N1cnNvcihkcmFnZ2luZ0N1cnNvcjogc3RyaW5nKTogdm9pZFxuICBnZXREcmFnZ2luZ0N1cnNvcigpOiBzdHJpbmdcblxuICBzZXRNaW5ab29tKHpvb206IG51bWJlcik6IHZvaWRcbiAgc2V0TWF4Wm9vbSh6b29tOiBudW1iZXIpOiB2b2lkXG5cbiAgZ2V0Qm91bmRzKCk6IEJCb3VuZHNcblxuICBzZXRDZW50ZXIoY2VudGVyOiBCUG9pbnQgfCBzdHJpbmcpOiB2b2lkXG4gIGdldENlbnRlcigpOiBCUG9pbnRcblxuICBnZXREaXN0YW5jZShzdGFydDogQlBvaW50LCBlbmQ6IEJQb2ludCk6IG51bWJlclxuXG4gIHNldEN1cnJlbnRDaXR5KGNpdHk6IHN0cmluZyk6IHZvaWRcbiAgY2VudGVyQW5kWm9vbShjZW50ZXI6IEJQb2ludCwgem9vbTogbnVtYmVyKTogdm9pZFxuXG4gIHNldE1hcFR5cGUobWFwVHlwZTogQk1hcFR5cGUgfCBNYXBUeXBlRW51bSk6IHZvaWRcbiAgZ2V0TWFwVHlwZSgpOiBCTWFwVHlwZVxuXG4gIGdldFNpemUoKTogQlNpemVcblxuICBzZXRab29tKHpvb206IG51bWJlcik6IHZvaWRcbiAgZ2V0Wm9vbSgpOiBudW1iZXJcblxuICBwYW5UbyhjZW50ZXI6IEJQb2ludCwgb3B0czogQlBhbk9wdGlvbnMpOiB2b2lkXG5cbiAgcGFuQnkoeDogbnVtYmVyLCB5OiBudW1iZXIsIG9wdHM6IEJQYW5PcHRpb25zKTogdm9pZFxuXG4gIHJlc2V0KCk6IHZvaWRcblxuICBoaWdoUmVzb2x1dGlvbkVuYWJsZWQoKTogYm9vbGVhblxuXG4gIHpvb21JbigpOiB2b2lkXG4gIHpvb21PdXQoKTogdm9pZFxuXG4gIGdldENvbnRhaW5lcigpOiBIVE1MRWxlbWVudFxuXG4gIGNsb3NlSW5mb1dpbmRvdygpOiB2b2lkXG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nLCBoYW5kbGVyOiAoZTogYW55KSA9PiB2b2lkKTogdm9pZFxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6ICgpID0+IHZvaWQpOiB2b2lkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwT3B0aW9ucyB7XG4gIG1pblpvb20/OiBudW1iZXJcbiAgbWF4Wm9vbT86IG51bWJlclxuICBlbmFibGVIaWdoUmVzb2x1dGlvbj86IGJvb2xlYW5cbiAgZW5hYmxlQXV0b1Jlc2l6ZT86IGJvb2xlYW5cbiAgZW5hYmxlTWFwQ2xpY2s/OiBib29sZWFuXG5cbiAgZGlzYWJsZURyYWdnaW5nPzogYm9vbGVhblxuICBlbmFibGVTY3JvbGxXaGVlbFpvb20/OiBib29sZWFuXG4gIGRpc2FibGVEb3VibGVDbGlja1pvb20/OiBib29sZWFuXG4gIGVuYWJsZUtleWJvYXJkPzogYm9vbGVhblxuICBlbmFibGVJbmVydGlhbERyYWdnaW5nPzogYm9vbGVhblxuICBlbmFibGVDb250aW51b3VzWm9vbT86IGJvb2xlYW5cbiAgZGlzYWJsZVBpbmNoVG9ab29tPzogYm9vbGVhblxuXG4gIGN1cnNvcj86IHN0cmluZ1xuICBkcmFnZ2luZ0N1cnNvcj86IHN0cmluZ1xuICBjdXJyZW50Q2l0eT86IHN0cmluZ1xuICBjZW50ZXJBbmRab29tPzogQ2VudGVyQW5kWm9vbVxuXG4gIG1hcFR5cGU/OiBCTWFwVHlwZSB8IE1hcFR5cGVFbnVtXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2VudGVyQW5kWm9vbSBleHRlbmRzIFBvaW50IHtcbiAgem9vbT86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJQYW5PcHRpb25zIHtcbiAgbm9BbmltYXRpb246IGJvb2xlYW5cbn1cblxuZXhwb3J0IGVudW0gTWFwVHlwZUVudW0ge1xuICBCTUFQX05PUk1BTF9NQVAgPSAnQk1BUF9OT1JNQUxfTUFQJyxcbiAgQk1BUF9QRVJTUEVDVElWRV9NQVAgPSAnQk1BUF9QRVJTUEVDVElWRV9NQVAnLFxuICBCTUFQX1NBVEVMTElURV9NQVAgPSAnQk1BUF9TQVRFTExJVEVfTUFQJyxcbiAgQk1BUF9IWUJSSURfTUFQID0gJ0JNQVBfSFlCUklEX01BUCdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWFwVHlwZUVudW0obWFwdHlwZTogTWFwVHlwZUVudW0gfCBCTWFwVHlwZSk6IG1hcHR5cGUgaXMgTWFwVHlwZUVudW0ge1xuICByZXR1cm4gIWlzRnVuY3Rpb24oKDxCTWFwVHlwZT5tYXB0eXBlKS5nZXRUaWxlTGF5ZXIpXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgaXNCb29sZWFuLCBpc051bGwsIG9taXQgfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcbmltcG9ydCB7IG51bGxDaGVjayB9IGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdGUnXG5pbXBvcnQgeyBCQ29udHJvbCB9IGZyb20gJy4uL3R5cGVzL0NvbnRyb2wnXG5pbXBvcnQgeyBTY3JpcHRMb2FkZXJDb25maWcgfSBmcm9tICcuL3NjcmlwdExvYWRlcidcbmltcG9ydCB7IEJNYXBJbnN0YW5jZSwgTWFwT3B0aW9ucywgaXNNYXBUeXBlRW51bSB9IGZyb20gJy4uL3R5cGVzL01hcCdcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi90eXBlcy9PdmVybGF5J1xuaW1wb3J0IHsgQlRpbGVMYXllciB9IGZyb20gJy4uL3R5cGVzL1RpbGVMYXllcidcblxuaW1wb3J0IHsgdG9Qb2ludCB9IGZyb20gJy4uL2hlbHBlcnMvdHJhbnNmb3JtZXInXG5cbmltcG9ydCB7IFNjcmlwdExvYWRlciB9IGZyb20gJy4vc2NyaXB0TG9hZGVyJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFwU2VydmljZSB7XG4gIHByaXZhdGUgX2NvbmZpZzogU2NyaXB0TG9hZGVyQ29uZmlnXG5cbiAgcHJpdmF0ZSBfbWFwOiBQcm9taXNlPEJNYXBJbnN0YW5jZT5cbiAgcHJpdmF0ZSBfbWFwUmVzb2x2ZXI6ICh2YWx1ZTogQk1hcEluc3RhbmNlKSA9PiB2b2lkXG5cbiAgY29uc3RydWN0b3IoQEluamVjdChTY3JpcHRMb2FkZXJDb25maWcpIGNvbmZpZzogU2NyaXB0TG9hZGVyQ29uZmlnLCBwcml2YXRlIF9sb2FkZXI6IFNjcmlwdExvYWRlcikge1xuICAgIG51bGxDaGVjayhjb25maWcuYWssICdhayBtdXN0IGJlIHByb3ZpZGVkJylcblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZ1xuXG4gICAgdGhpcy5fbWFwID0gbmV3IFByb21pc2U8Qk1hcEluc3RhbmNlPigocmVzb2x2ZTogKCkgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5fbWFwUmVzb2x2ZXIgPSByZXNvbHZlXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVNYXAoZWw6IEhUTUxFbGVtZW50LCBtYXBPcHRpb25zOiBNYXBPcHRpb25zKTogUHJvbWlzZTxCTWFwSW5zdGFuY2U+IHtcbiAgICBjb25zdCBVUkwgPSBgaHR0cHM6Ly9hcGkubWFwLmJhaWR1LmNvbS9hcGk/dj0yLjAmYWs9JHt0aGlzLl9jb25maWcuYWt9JmNhbGxiYWNrPWJhaWR1bWFwaW5pdCZzPTFgXG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLl9sb2FkZXIubG9hZChVUkwsIHRydWUsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IHdpbmRvdy5CTWFwLk1hcChlbCwgb21pdChtYXBPcHRpb25zLCAnbWFwVHlwZScpKVxuICAgICAgICB0aGlzLnNldE9wdGlvbnMobWFwT3B0aW9ucylcbiAgICAgICAgdGhpcy5fbWFwUmVzb2x2ZXIobWFwKVxuICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzZXRPcHRpb25zKG9wdHM6IE1hcE9wdGlvbnMpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlRHJhZ2dpbmcsXG4gICAgICBlbmFibGVTY3JvbGxXaGVlbFpvb20sXG4gICAgICBkaXNhYmxlRG91YmxlQ2xpY2tab29tLFxuICAgICAgZW5hYmxlS2V5Ym9hcmQsXG4gICAgICBlbmFibGVJbmVydGlhbERyYWdnaW5nLFxuICAgICAgZW5hYmxlQXV0b1Jlc2l6ZSxcbiAgICAgIGVuYWJsZUNvbnRpbnVvdXNab29tLFxuICAgICAgZGlzYWJsZVBpbmNoVG9ab29tXG4gICAgfSA9IG9wdHNcblxuICAgIGlmIChpc0Jvb2xlYW4oZGlzYWJsZURyYWdnaW5nKSkge1xuICAgICAgdGhpcy5fbWFwLnRoZW4obWFwID0+IG1hcFsoZGlzYWJsZURyYWdnaW5nID8gJ2Rpc2FibGUnIDogJ2VuYWJsZScpICsgJ0RyYWdnaW5nJ10oKSlcbiAgICB9XG4gICAgaWYgKGlzQm9vbGVhbihlbmFibGVTY3JvbGxXaGVlbFpvb20pKSB7XG4gICAgICB0aGlzLl9tYXAudGhlbihtYXAgPT4gbWFwWyhlbmFibGVTY3JvbGxXaGVlbFpvb20gPyAnZW5hYmxlJyA6ICdkaXNhYmxlJykgKyAnU2Nyb2xsV2hlZWxab29tJ10oKSlcbiAgICB9XG4gICAgaWYgKGlzQm9vbGVhbihlbmFibGVBdXRvUmVzaXplKSkge1xuICAgICAgdGhpcy5fbWFwLnRoZW4obWFwID0+IG1hcFsoZW5hYmxlQXV0b1Jlc2l6ZSA/ICdlbmFibGUnIDogJ2Rpc2FibGUnKSArICdBdXRvUmVzaXplJ10oKSlcbiAgICB9XG4gICAgaWYgKGlzQm9vbGVhbihkaXNhYmxlRG91YmxlQ2xpY2tab29tKSkge1xuICAgICAgdGhpcy5fbWFwLnRoZW4obWFwID0+IG1hcFsoZGlzYWJsZURvdWJsZUNsaWNrWm9vbSA/ICdkaXNhYmxlJyA6ICdlbmFibGUnKSArICdEb3VibGVDbGlja1pvb20nXSgpKVxuICAgIH1cbiAgICBpZiAoaXNCb29sZWFuKGVuYWJsZUtleWJvYXJkKSkge1xuICAgICAgdGhpcy5fbWFwLnRoZW4obWFwID0+IG1hcFsoZW5hYmxlS2V5Ym9hcmQgPyAnZW5hYmxlJyA6ICdkaXNhYmxlJykgKyAnS2V5Ym9hcmQnXSgpKVxuICAgIH1cbiAgICBpZiAoaXNCb29sZWFuKGVuYWJsZUluZXJ0aWFsRHJhZ2dpbmcpKSB7XG4gICAgICB0aGlzLl9tYXAudGhlbihtYXAgPT4gbWFwWyhlbmFibGVJbmVydGlhbERyYWdnaW5nID8gJ2VuYWJsZScgOiAnZGlzYWJsZScpICsgJ0luZXJ0aWFsRHJhZ2dpbmcnXSgpKVxuICAgIH1cbiAgICBpZiAoaXNCb29sZWFuKGVuYWJsZUNvbnRpbnVvdXNab29tKSkge1xuICAgICAgdGhpcy5fbWFwLnRoZW4obWFwID0+IG1hcFsoZW5hYmxlQ29udGludW91c1pvb20gPyAnZW5hYmxlJyA6ICdkaXNhYmxlJykgKyAnQ29udGludW91c1pvb20nXSgpKVxuICAgIH1cbiAgICBpZiAoaXNCb29sZWFuKGRpc2FibGVQaW5jaFRvWm9vbSkpIHtcbiAgICAgIHRoaXMuX21hcC50aGVuKG1hcCA9PiBtYXBbKGRpc2FibGVQaW5jaFRvWm9vbSA/ICdkaXNhYmxlJyA6ICdlbmFibGUnKSArICdQaW5jaFRvWm9vbSddKCkpXG4gICAgfVxuICAgIGlmICghaXNOdWxsKG9wdHMuY3Vyc29yKSkge1xuICAgICAgdGhpcy5fbWFwLnRoZW4obWFwID0+IG1hcC5zZXREZWZhdWx0Q3Vyc29yKG9wdHMuY3Vyc29yKSlcbiAgICB9XG4gICAgaWYgKCFpc051bGwob3B0cy5kcmFnZ2luZ0N1cnNvcikpIHtcbiAgICAgIHRoaXMuX21hcC50aGVuKG1hcCA9PiBtYXAuc2V0RHJhZ2dpbmdDdXJzb3Iob3B0cy5kcmFnZ2luZ0N1cnNvcikpXG4gICAgfVxuICAgIGlmICghaXNOdWxsKG9wdHMuY3VycmVudENpdHkpKSB7XG4gICAgICB0aGlzLl9tYXAudGhlbihtYXAgPT4gbWFwLnNldEN1cnJlbnRDaXR5KG9wdHMuY3VycmVudENpdHkpKVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbChvcHRzLmNlbnRlckFuZFpvb20pKSB7XG4gICAgICB0aGlzLl9tYXAudGhlbihtYXAgPT4ge1xuICAgICAgICBtYXAuY2VudGVyQW5kWm9vbSh0b1BvaW50KG9wdHMuY2VudGVyQW5kWm9vbSksIG9wdHMuY2VudGVyQW5kWm9vbS56b29tKVxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKCFpc051bGwob3B0cy5tYXBUeXBlKSkge1xuICAgICAgdGhpcy5fbWFwLnRoZW4obWFwID0+IHtcbiAgICAgICAgY29uc3QgcmVhbFR5cGUgPSBpc01hcFR5cGVFbnVtKG9wdHMubWFwVHlwZSkgPyB3aW5kb3dbb3B0cy5tYXBUeXBlXSA6IG9wdHMubWFwVHlwZVxuICAgICAgICBtYXAuc2V0TWFwVHlwZShyZWFsVHlwZSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZE92ZXJsYXkoY2I6IChtYXA6IEJNYXBJbnN0YW5jZSkgPT4gT3ZlcmxheSk6IFByb21pc2U8eyBtYXA6IEJNYXBJbnN0YW5jZTsgb3ZlcmxheTogT3ZlcmxheSB9PiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKChtYXA6IEJNYXBJbnN0YW5jZSkgPT4ge1xuICAgICAgY29uc3Qgb3ZlcmxheSA9IGNiKG1hcClcbiAgICAgIG1hcC5hZGRPdmVybGF5KG92ZXJsYXkpXG4gICAgICByZXR1cm4geyBtYXAsIG92ZXJsYXkgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlT3ZlcmxheShvdmVybGF5OiBPdmVybGF5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKChtYXA6IEJNYXBJbnN0YW5jZSkgPT4ge1xuICAgICAgbWFwLnJlbW92ZU92ZXJsYXkob3ZlcmxheSlcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGFkZFRpbGVMYXllcihcbiAgICBjYjogKG1hcDogQk1hcEluc3RhbmNlKSA9PiBCVGlsZUxheWVyXG4gICk6IFByb21pc2U8eyBtYXA6IEJNYXBJbnN0YW5jZTsgdGlsZWxheWVyOiBCVGlsZUxheWVyIH0+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogQk1hcEluc3RhbmNlKSA9PiB7XG4gICAgICBjb25zdCB0aWxlbGF5ZXIgPSBjYihtYXApXG4gICAgICBtYXAuYWRkVGlsZUxheWVyKHRpbGVsYXllcilcbiAgICAgIHJldHVybiB7IG1hcCwgdGlsZWxheWVyIH1cbiAgICB9KVxuICB9XG5cbiAgcHVibGljIHJlbW92ZVRpbGVMYXllcih0aWxlbGF5ZXI6IEJUaWxlTGF5ZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwLnRoZW4oKG1hcDogQk1hcEluc3RhbmNlKSA9PiB7XG4gICAgICBtYXAucmVtb3ZlT3ZlcmxheSh0aWxlbGF5ZXIpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBhZGRDb250cm9sKGNiOiAobWFwOiBCTWFwSW5zdGFuY2UpID0+IEJDb250cm9sKTogUHJvbWlzZTx7IG1hcDogQk1hcEluc3RhbmNlOyBjb250cm9sOiBCQ29udHJvbCB9PiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcC50aGVuKChtYXA6IEJNYXBJbnN0YW5jZSkgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IGNiKG1hcClcbiAgICAgIG1hcC5hZGRDb250cm9sKGNvbnRyb2wpXG4gICAgICByZXR1cm4geyBtYXAsIGNvbnRyb2wgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQ29udHJvbChjb250cm9sOiBCQ29udHJvbCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9tYXAudGhlbigobWFwOiBCTWFwSW5zdGFuY2UpID0+IHtcbiAgICAgIG1hcC5yZW1vdmVDb250cm9sKGNvbnRyb2wpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXROYXRpdmVNYXAoKTogUHJvbWlzZTxCTWFwSW5zdGFuY2U+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwXG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7XG4gIHRvR2VvbG9jYXRpb25PcHRpb25zLFxuICB0b01hcFR5cGVDb250cm9sT3B0aW9ucyxcbiAgdG9OYXZpZ2F0aW9uQ29udHJvbE9wdGlvbnMsXG4gIHRvT3ZlcnZpZXdNYXBDb250cm9sT3B0aW9ucyxcbiAgdG9TY2FsZUNvbnRyb2xPcHRpb25zXG59IGZyb20gJy4uL2hlbHBlcnMvdHJhbnNmb3JtZXInXG5pbXBvcnQgeyBudWxsQ2hlY2sgfSBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRlJ1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xuaW1wb3J0IHsgQkNvbnRyb2wsIENvbnRyb2xUeXBlIH0gZnJvbSAnLi4vdHlwZXMvQ29udHJvbCdcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnY29udHJvbCdcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHJpdmF0ZSB0eXBlOiBDb250cm9sVHlwZVxuICBASW5wdXQoKSBwcml2YXRlIG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH1cblxuICBAT3V0cHV0KCkgcHJpdmF0ZSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBwcml2YXRlIGNvbnRyb2w6IEJDb250cm9sXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogTWFwU2VydmljZSkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgbnVsbENoZWNrKHRoaXMudHlwZSwgJ3R5cGUgaXMgcmVxdWlyZWQgZm9yIDxjb250cm9sPicpXG5cbiAgICB0aGlzLl9zZXJ2aWNlXG4gICAgICAuYWRkQ29udHJvbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuY3JlYXRlQ29udHJvbCh0aGlzLnR5cGUsIHRoaXMub3B0aW9ucylcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbFxuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IGNvbnRyb2wgfSkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KGNvbnRyb2wpXG4gICAgICB9KVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3NlcnZpY2UucmVtb3ZlQ29udHJvbCh0aGlzLmNvbnRyb2wpXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbnRyb2wodHlwZTogQ29udHJvbFR5cGUsIG9wdGlvbnM6IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiBCQ29udHJvbCB7XG4gICAgaWYgKHR5cGUgPT09ICduYXZpZ2F0aW9uJykge1xuICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuQk1hcC5OYXZpZ2F0aW9uQ29udHJvbCh0b05hdmlnYXRpb25Db250cm9sT3B0aW9ucyhvcHRpb25zKSlcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdvdmVydmlld21hcCcpIHtcbiAgICAgIHJldHVybiBuZXcgd2luZG93LkJNYXAuT3ZlcnZpZXdNYXBDb250cm9sKHRvT3ZlcnZpZXdNYXBDb250cm9sT3B0aW9ucyhvcHRpb25zKSlcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdzY2FsZScpIHtcbiAgICAgIHJldHVybiBuZXcgd2luZG93LkJNYXAuU2NhbGVDb250cm9sKHRvU2NhbGVDb250cm9sT3B0aW9ucyhvcHRpb25zKSlcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdtYXB0eXBlJykge1xuICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuQk1hcC5NYXBUeXBlQ29udHJvbCh0b01hcFR5cGVDb250cm9sT3B0aW9ucyhvcHRpb25zKSlcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdnZW9sb2NhdGlvbicpIHtcbiAgICAgIHJldHVybiBuZXcgd2luZG93LkJNYXAuR2VvbG9jYXRpb25Db250cm9sKHRvR2VvbG9jYXRpb25PcHRpb25zKG9wdGlvbnMpKVxuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ3Bhbm9yYW1hJykge1xuICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuQk1hcC5QYW5vcmFtYUNvbnRyb2woKVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIHR5cGU6JHt0eXBlfSBvZiBjb250cm9sYClcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXG5pbXBvcnQgeyBCTWFwSW5zdGFuY2UsIE1hcE9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9NYXAnXG5cbmltcG9ydCB7IG51bGxDaGVjayB9IGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdGUnXG5cbkBDb21wb25lbnQoe1xuICBwcm92aWRlcnM6IFtNYXBTZXJ2aWNlXSxcbiAgc2VsZWN0b3I6ICdiYWlkdS1tYXAnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAgIC5iYWlkdS1tYXAtaW5zdGFuY2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5iYWlkdS1tYXAtb2ZmbGluZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5iYWlkdS1tYXAtb2ZmbGluZSBsYWJlbCB7XG4gICAgICAgICAgICBmb250U2l6ZTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYW5jbHVkZS1jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYFxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI21hcGluc3RhbmNlIGNsYXNzPVwiYmFpZHUtbWFwLWluc3RhbmNlXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJhaWR1LW1hcC1vZmZsaW5lXCI+XG4gICAgICAgIDxsYWJlbD57eyAnTk9fTkVUV09SSycgfX08L2xhYmVsPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0cmFuY2x1ZGUtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogTWFwT3B0aW9uc1xuXG4gIEBPdXRwdXQoKSBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBAT3V0cHV0KCkgcHJpdmF0ZSBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgQFZpZXdDaGlsZCgnbWFwaW5zdGFuY2UnKSBwcml2YXRlIG1hcEluc3RhbmNlOiBFbGVtZW50UmVmXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogTWFwU2VydmljZSkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgbnVsbENoZWNrKHRoaXMub3B0aW9ucywgJ29wdGlvbnMgaXMgcmVxdWlyZWQgZm9yIDxiYWlkdS1tYXA+JylcbiAgICBudWxsQ2hlY2sodGhpcy5vcHRpb25zLmNlbnRlckFuZFpvb20sICdvcHRpb25zLmNlbnRlckFuZFpvb20gaXMgcmVxdWlyZWQgZm9yIDxiYWlkdS1tYXA+JylcblxuICAgIHRoaXMuX3NlcnZpY2VcbiAgICAgIC5jcmVhdGVNYXAodGhpcy5tYXBJbnN0YW5jZS5uYXRpdmVFbGVtZW50LCB0aGlzLm9wdGlvbnMpXG4gICAgICAudGhlbihtYXAgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KG1hcClcbiAgICAgICAgcmV0dXJuIG1hcFxuICAgICAgfSlcbiAgICAgIC50aGVuKG1hcCA9PiB7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXIobWFwKVxuICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgY29uc3Qgb3B0cyA9IGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUgYXMgTWFwT3B0aW9uc1xuICAgIGlmICghb3B0cykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUud2FybignTWFwT3B0aW9ucyBjaGFuZ2Ugd2FzIGlnbm9yZWQgc2luY2UgeW91IGFyZSBwYXNzaW5nIGVtcHR5IHZhbHVlJylcbiAgICB9XG4gICAgdGhpcy5fc2VydmljZS5zZXRPcHRpb25zKG9wdHMpXG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coJ29uIG1hcCBkZXN0cm95JylcbiAgfVxuXG4gIHByaXZhdGUgYWRkTGlzdGVuZXIobWFwOiBCTWFwSW5zdGFuY2UpIHtcbiAgICBtYXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmNsaWNrZWQuZW1pdChlKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnLi4vaGVscGVycy9vYmplY3QnXG5pbXBvcnQgeyB0b0ljb24sIHRvTWFya2VyT3B0aW9ucywgdG9Qb2ludCwgdG9TaXplIH0gZnJvbSAnLi4vaGVscGVycy90cmFuc2Zvcm1lcidcbmltcG9ydCB7IG51bGxDaGVjayB9IGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdGUnXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXG5pbXBvcnQgeyBCTWFwSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9NYXAnXG5pbXBvcnQgeyBCTWFya2VyLCBNYXJrZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMvTWFya2VyJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi90eXBlcy9Qb2ludCdcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWFya2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXJrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHJpdmF0ZSBwb2ludDogUG9pbnRcbiAgQElucHV0KCkgcHJpdmF0ZSBvcHRpb25zOiBNYXJrZXJPcHRpb25zXG5cbiAgQE91dHB1dCgpIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBPdXRwdXQoKSBwcml2YXRlIGNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBwcml2YXRlIG1hcmtlcjogQk1hcmtlclxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6IE1hcFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIG51bGxDaGVjayh0aGlzLnBvaW50LCAncG9pbnQgaXMgcmVxdWlyZWQgZm9yIDxtYXJrZXI+JylcblxuICAgIHRoaXMuX3NlcnZpY2VcbiAgICAgIC5hZGRPdmVybGF5KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm1hcmtlciA9IG5ldyB3aW5kb3cuQk1hcC5NYXJrZXIodG9Qb2ludCh0aGlzLnBvaW50KSwgdG9NYXJrZXJPcHRpb25zKHRoaXMub3B0aW9ucykpKVxuICAgICAgfSlcbiAgICAgIC50aGVuKCh7IG1hcCB9KSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5tYXJrZXIpXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXIodGhpcy5tYXJrZXIsIG1hcClcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIHdvcmthcm91bmQ6IGl0J3Mgd2VpcmQgdGhhdCBwb3N0aW9uIGlzIHNldCB3aGlsZSBjb25zdHJ1Y3RpbmcgcGhhc2Ugd2lsbCBtYWtlIGNsaWNrIGV2ZW50IG5vdCB3b3JraW5nXG4gICAgICAgIHRoaXMubWFya2VyLnNldFBvc2l0aW9uKG5ldyB3aW5kb3cuQk1hcC5Qb2ludCh0aGlzLnBvaW50LmxuZywgdGhpcy5wb2ludC5sYXQpKVxuICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKGNoYW5nZXMucG9pbnQgJiYgIWNoYW5nZXMucG9pbnQuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLm1hcmtlci5zZXRQb3NpdGlvbih0b1BvaW50KGNoYW5nZXMucG9pbnQuY3VycmVudFZhbHVlKSlcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5zZXRPcHRpb25zKGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3NlcnZpY2UucmVtb3ZlT3ZlcmxheSh0aGlzLm1hcmtlcilcbiAgfVxuXG4gIHByaXZhdGUgc2V0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKGlzTnVsbChvcHRpb25zKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMub2Zmc2V0KSkge1xuICAgICAgdGhpcy5tYXJrZXIuc2V0T2Zmc2V0KHRvU2l6ZShvcHRpb25zLm9mZnNldCkpXG4gICAgfVxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMuaWNvbikpIHtcbiAgICAgIHRoaXMubWFya2VyLnNldEljb24odG9JY29uKG9wdGlvbnMuaWNvbi5pbWFnZVVybCwgb3B0aW9ucy5pY29uLnNpemUsIG9wdGlvbnMuaWNvbikpXG4gICAgfVxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyKSkge1xuICAgICAgdGhpcy5tYXJrZXJbKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyID8gJ2VuYWJsZScgOiAnZGlzYWJsZScpICsgJ01hc3NDbGVhciddKClcbiAgICB9XG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5lbmFibGVEcmFnZ2luZykpIHtcbiAgICAgIHRoaXMubWFya2VyWyhvcHRpb25zLmVuYWJsZURyYWdnaW5nID8gJ2VuYWJsZScgOiAnZGlzYWJsZScpICsgJ0RyYWdnaW5nJ10oKVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbChvcHRpb25zLnJvdGF0aW9uKSkge1xuICAgICAgdGhpcy5tYXJrZXIuc2V0Um90YXRpb24ob3B0aW9ucy5yb3RhdGlvbilcbiAgICB9XG4gICAgaWYgKCFpc051bGwob3B0aW9ucy5zaGFkb3cpKSB7XG4gICAgICB0aGlzLm1hcmtlci5zZXRTaGFkb3codG9JY29uKG9wdGlvbnMuc2hhZG93LmltYWdlVXJsLCBvcHRpb25zLnNoYWRvdy5zaXplLCBvcHRpb25zLnNoYWRvdykpXG4gICAgfVxuICAgIGlmICghaXNOdWxsKG9wdGlvbnMudGl0bGUpKSB7XG4gICAgICB0aGlzLm1hcmtlci5zZXRUaXRsZShvcHRpb25zLnRpdGxlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkTGlzdGVuZXIobWFya2VyOiBCTWFya2VyLCBtYXA6IEJNYXBJbnN0YW5jZSkge1xuICAgIG1hcmtlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuY2xpY2tlZC5lbWl0KHtcbiAgICAgICAgZSxcbiAgICAgICAgbWFwLFxuICAgICAgICBtYXJrZXJcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBpc051bGwsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vaGVscGVycy9vYmplY3QnXG5pbXBvcnQgeyB0b1BvaW50cyB9IGZyb20gJy4uL2hlbHBlcnMvdHJhbnNmb3JtZXInXG5pbXBvcnQgeyBudWxsQ2hlY2sgfSBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRlJ1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xuaW1wb3J0IHsgQlBvbHlsaW5lLCBQb2x5bGluZU9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9Qb2x5bGluZSdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vdHlwZXMvUG9pbnQnXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3BvbHlsaW5lJ1xufSlcbmV4cG9ydCBjbGFzcyBQb2x5bGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwcml2YXRlIHBvaW50czogQXJyYXk8UG9pbnQ+XG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogUG9seWxpbmVPcHRpb25zXG5cbiAgQE91dHB1dCgpIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgcHJpdmF0ZSBwb2x5bGluZTogQlBvbHlsaW5lXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogTWFwU2VydmljZSkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgbnVsbENoZWNrKHRoaXMucG9pbnRzLCAncG9pbnRzIGlzIHJlcXVpcmVkIGZvciA8cG9seWxpbmU+JylcblxuICAgIHRoaXMuX3NlcnZpY2VcbiAgICAgIC5hZGRPdmVybGF5KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnBvbHlsaW5lID0gbmV3IHdpbmRvdy5CTWFwLlBvbHlsaW5lKHRvUG9pbnRzKHRoaXMucG9pbnRzKSwgdGhpcy5vcHRpb25zKSlcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5wb2x5bGluZSlcbiAgICAgIH0pXG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgIGlmIChjaGFuZ2VzLnBvaW50cyAmJiAhY2hhbmdlcy5wb2ludHMuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnBvbHlsaW5lLnNldFBhdGgodG9Qb2ludHMoY2hhbmdlcy5wb2ludHMuY3VycmVudFZhbHVlKSlcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5zZXRPcHRpb25zKGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX3NlcnZpY2UucmVtb3ZlT3ZlcmxheSh0aGlzLnBvbHlsaW5lKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdGlvbnM6IFBvbHlsaW5lT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmIChpc051bGwob3B0aW9ucykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZW5hYmxlRWRpdGluZykpIHtcbiAgICAgIGlmIChvcHRpb25zLmVuYWJsZUVkaXRpbmcpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZS5lbmFibGVFZGl0aW5nKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9seWxpbmUuZGlzYWJsZUVkaXRpbmcoKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyKSkge1xuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlRWRpdGluZykge1xuICAgICAgICB0aGlzLnBvbHlsaW5lLmVuYWJsZU1hc3NDbGVhcigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvbHlsaW5lLmRpc2FibGVNYXNzQ2xlYXIoKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3Ryb2tlQ29sb3IpKSB7XG4gICAgICB0aGlzLnBvbHlsaW5lLnNldFN0cm9rZUNvbG9yKG9wdGlvbnMuc3Ryb2tlQ29sb3IpXG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VPcGFjaXR5KSkge1xuICAgICAgdGhpcy5wb2x5bGluZS5zZXRTdHJva2VPcGFjaXR5KG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSlcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZVN0eWxlKSkge1xuICAgICAgdGhpcy5wb2x5bGluZS5zZXRTdHJva2VTdHlsZShvcHRpb25zLnN0cm9rZVN0eWxlKVxuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3Ryb2tlV2VpZ2h0KSkge1xuICAgICAgdGhpcy5wb2x5bGluZS5zZXRTdHJva2VXZWlnaHQob3B0aW9ucy5zdHJva2VXZWlnaHQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IGlzTnVsbCwgaXNVbmRlZmluZWQgfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcbmltcG9ydCB7IHRvUG9pbnQgfSBmcm9tICcuLi9oZWxwZXJzL3RyYW5zZm9ybWVyJ1xuaW1wb3J0IHsgbnVsbENoZWNrIH0gZnJvbSAnLi4vaGVscGVycy92YWxpZGF0ZSdcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcbmltcG9ydCB7IEJDaXJjbGUsIENpcmNsZU9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9DaXJjbGUnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3R5cGVzL1BvaW50J1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdjaXJjbGUnXG59KVxuZXhwb3J0IGNsYXNzIENpcmNsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwcml2YXRlIGNlbnRlcjogUG9pbnRcbiAgQElucHV0KCkgcHJpdmF0ZSByYWRpdXM6IG51bWJlclxuICBASW5wdXQoKSBwcml2YXRlIG9wdGlvbnM6IENpcmNsZU9wdGlvbnNcblxuICBAT3V0cHV0KCkgcHJpdmF0ZSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBwcml2YXRlIGNpcmNsZTogQkNpcmNsZVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6IE1hcFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIG51bGxDaGVjayh0aGlzLmNlbnRlciwgJ2NlbnRlciBpcyByZXF1aXJlZCBmb3IgPGNpcmNsZT4nKVxuICAgIG51bGxDaGVjayh0aGlzLnJhZGl1cywgJ2NlbnRlciBpcyByZXF1aXJlZCBmb3IgPGNpcmNsZT4nKVxuXG4gICAgdGhpcy5fc2VydmljZVxuICAgICAgLmFkZE92ZXJsYXkoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuY2lyY2xlID0gbmV3IHdpbmRvdy5CTWFwLkNpcmNsZSh0b1BvaW50KHRoaXMuY2VudGVyKSwgdGhpcy5yYWRpdXMsIHRoaXMub3B0aW9ucykpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMuY2lyY2xlKVxuICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKGNoYW5nZXMuY2VudGVyICYmICFjaGFuZ2VzLmNlbnRlci5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuY2lyY2xlLnNldENlbnRlcih0b1BvaW50KGNoYW5nZXMuY2VudGVyLmN1cnJlbnRWYWx1ZSkpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLnJhZGl1cyAmJiAhY2hhbmdlcy5yYWRpdXMuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLmNpcmNsZS5zZXRSYWRpdXMoY2hhbmdlcy5yYWRpdXMuY3VycmVudFZhbHVlKVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5vcHRpb25zICYmICFjaGFuZ2VzLm9wdGlvbnMuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnNldE9wdGlvbnMoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc2VydmljZS5yZW1vdmVPdmVybGF5KHRoaXMuY2lyY2xlKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdGlvbnM6IENpcmNsZU9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoaXNOdWxsKG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmVuYWJsZUVkaXRpbmcpKSB7XG4gICAgICBpZiAob3B0aW9ucy5lbmFibGVFZGl0aW5nKSB7XG4gICAgICAgIHRoaXMuY2lyY2xlLmVuYWJsZUVkaXRpbmcoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaXJjbGUuZGlzYWJsZUVkaXRpbmcoKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyKSkge1xuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlRWRpdGluZykge1xuICAgICAgICB0aGlzLmNpcmNsZS5lbmFibGVNYXNzQ2xlYXIoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaXJjbGUuZGlzYWJsZU1hc3NDbGVhcigpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VDb2xvcikpIHtcbiAgICAgIHRoaXMuY2lyY2xlLnNldFN0cm9rZUNvbG9yKG9wdGlvbnMuc3Ryb2tlQ29sb3IpXG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5maWxsQ29sb3IpKSB7XG4gICAgICB0aGlzLmNpcmNsZS5zZXRGaWxsQ29sb3Iob3B0aW9ucy5maWxsQ29sb3IpXG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VPcGFjaXR5KSkge1xuICAgICAgdGhpcy5jaXJjbGUuc2V0U3Ryb2tlT3BhY2l0eShvcHRpb25zLnN0cm9rZU9wYWNpdHkpXG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5maWxsT3BhY2l0eSkpIHtcbiAgICAgIHRoaXMuY2lyY2xlLnNldEZpbGxPcGFjaXR5KG9wdGlvbnMuZmlsbE9wYWNpdHkpXG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VTdHlsZSkpIHtcbiAgICAgIHRoaXMuY2lyY2xlLnNldFN0cm9rZVN0eWxlKG9wdGlvbnMuc3Ryb2tlU3R5bGUpXG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VXZWlnaHQpKSB7XG4gICAgICB0aGlzLmNpcmNsZS5zZXRTdHJva2VXZWlnaHQob3B0aW9ucy5zdHJva2VXZWlnaHQpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IGlzTnVsbCwgaXNVbmRlZmluZWQgfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcbmltcG9ydCB7IHRvUG9pbnRzIH0gZnJvbSAnLi4vaGVscGVycy90cmFuc2Zvcm1lcidcbmltcG9ydCB7IG51bGxDaGVjayB9IGZyb20gJy4uL2hlbHBlcnMvdmFsaWRhdGUnXG5pbXBvcnQgeyBNYXBTZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL21hcFNlcnZpY2UnXG5pbXBvcnQgeyBCUG9seWdvbiwgUG9seWdvbk9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9Qb2x5Z29uJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi90eXBlcy9Qb2ludCdcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAncG9seWdvbidcbn0pXG5leHBvcnQgY2xhc3MgUG9seWdvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBwcml2YXRlIHBvaW50czogQXJyYXk8UG9pbnQ+XG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogUG9seWdvbk9wdGlvbnNcblxuICBAT3V0cHV0KCkgcHJpdmF0ZSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBwcml2YXRlIHBvbHlnb246IEJQb2x5Z29uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogTWFwU2VydmljZSkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgbnVsbENoZWNrKHRoaXMucG9pbnRzLCAncG9pbnRzIGlzIHJlcXVpcmVkIGZvciA8cG9seWdvbj4nKVxuXG4gICAgdGhpcy5fc2VydmljZVxuICAgICAgLmFkZE92ZXJsYXkoKCkgPT4ge1xuICAgICAgICByZXR1cm4gKHRoaXMucG9seWdvbiA9IG5ldyB3aW5kb3cuQk1hcC5Qb2x5Z29uKHRvUG9pbnRzKHRoaXMucG9pbnRzKSwgdGhpcy5vcHRpb25zKSlcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5wb2x5Z29uKVxuICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKGNoYW5nZXMucG9pbnRzICYmICFjaGFuZ2VzLnBvaW50cy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMucG9seWdvbi5zZXRQYXRoKHRvUG9pbnRzKGNoYW5nZXMucG9pbnRzLmN1cnJlbnRWYWx1ZSkpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgJiYgIWNoYW5nZXMub3B0aW9ucy5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9ucyhjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zZXJ2aWNlLnJlbW92ZU92ZXJsYXkodGhpcy5wb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRPcHRpb25zKG9wdGlvbnM6IFBvbHlnb25PcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKGlzTnVsbChvcHRpb25zKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5lbmFibGVFZGl0aW5nKSkge1xuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlRWRpdGluZykge1xuICAgICAgICB0aGlzLnBvbHlnb24uZW5hYmxlRWRpdGluZygpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvbHlnb24uZGlzYWJsZUVkaXRpbmcoKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuZW5hYmxlTWFzc0NsZWFyKSkge1xuICAgICAgaWYgKG9wdGlvbnMuZW5hYmxlRWRpdGluZykge1xuICAgICAgICB0aGlzLnBvbHlnb24uZW5hYmxlTWFzc0NsZWFyKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucG9seWdvbi5kaXNhYmxlTWFzc0NsZWFyKClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLnN0cm9rZUNvbG9yKSkge1xuICAgICAgdGhpcy5wb2x5Z29uLnNldFN0cm9rZUNvbG9yKG9wdGlvbnMuc3Ryb2tlQ29sb3IpXG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5maWxsQ29sb3IpKSB7XG4gICAgICB0aGlzLnBvbHlnb24uc2V0RmlsbENvbG9yKG9wdGlvbnMuZmlsbENvbG9yKVxuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSkpIHtcbiAgICAgIHRoaXMucG9seWdvbi5zZXRTdHJva2VPcGFjaXR5KG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSlcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmZpbGxPcGFjaXR5KSkge1xuICAgICAgdGhpcy5wb2x5Z29uLnNldEZpbGxPcGFjaXR5KG9wdGlvbnMuZmlsbE9wYWNpdHkpXG4gICAgfVxuICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5zdHJva2VTdHlsZSkpIHtcbiAgICAgIHRoaXMucG9seWdvbi5zZXRTdHJva2VTdHlsZShvcHRpb25zLnN0cm9rZVN0eWxlKVxuICAgIH1cbiAgICBpZiAoIWlzVW5kZWZpbmVkKG9wdGlvbnMuc3Ryb2tlV2VpZ2h0KSkge1xuICAgICAgdGhpcy5wb2x5Z29uLnNldFN0cm9rZVdlaWdodChvcHRpb25zLnN0cm9rZVdlaWdodClcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgbnVsbENoZWNrIH0gZnJvbSAnLi4vaGVscGVycy92YWxpZGF0ZSdcbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcbmltcG9ydCB7IEJIZWF0bWFwLCBIZWF0bWFwT3B0aW9ucywgSGVhdG1hcERhdGEgfSBmcm9tICcuLi90eXBlcy9IZWF0bWFwJ1xuaW1wb3J0IHsgU2NyaXB0TG9hZGVyIH0gZnJvbSAnLi4vcHJvdmlkZXJzL3NjcmlwdExvYWRlcidcblxuY29uc3QgTElCX1VSTCA9IGBodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2xpYnJhcnkvSGVhdG1hcC8yLjAvc3JjL0hlYXRtYXBfbWluLmpzYFxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdoZWF0bWFwJ1xufSlcbmV4cG9ydCBjbGFzcyBIZWF0bWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHByaXZhdGUgZGF0YXNldDogSGVhdG1hcERhdGFcbiAgQElucHV0KCkgcHJpdmF0ZSBvcHRpb25zOiBIZWF0bWFwT3B0aW9uc1xuXG4gIEBPdXRwdXQoKSBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIHByaXZhdGUgaGVhdG1hcDogQkhlYXRtYXBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXJ2aWNlOiBNYXBTZXJ2aWNlLCBwcml2YXRlIHNjcmlwdExvYWRlcjogU2NyaXB0TG9hZGVyKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBudWxsQ2hlY2sodGhpcy5kYXRhc2V0LCAnZGF0YXNldCBpcyByZXF1aXJlZCBmb3IgPGhlYXRtYXA+JylcblxuICAgIHRoaXMuX3NlcnZpY2UuZ2V0TmF0aXZlTWFwKCkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JpcHRMb2FkZXIubG9hZChMSUJfVVJMLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXJ2aWNlXG4gICAgICAgICAgLmFkZE92ZXJsYXkoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmhlYXRtYXAgPSBuZXcgd2luZG93LkJNYXBMaWIuSGVhdG1hcE92ZXJsYXkodGhpcy5vcHRpb25zKSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5oZWF0bWFwKVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YXNldCkge1xuICAgICAgICAgICAgICB0aGlzLmhlYXRtYXAuc2V0RGF0YVNldCh0aGlzLmRhdGFzZXQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKGNoYW5nZXMuZGF0YXNldCAmJiAhY2hhbmdlcy5kYXRhc2V0LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5oZWF0bWFwLnNldERhdGFTZXQoY2hhbmdlcy5kYXRhc2V0LmN1cnJlbnRWYWx1ZSlcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5oZWF0bWFwLnNldE9wdGlvbnMoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc2VydmljZS5yZW1vdmVPdmVybGF5KHRoaXMuaGVhdG1hcClcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xuaW1wb3J0IHsgQlRpbGVMYXllciwgVGlsZUxheWVyT3B0aW9ucywgZ2V0VGlsZXNVcmxGdW5jIH0gZnJvbSAnLi4vdHlwZXMvVGlsZUxheWVyJ1xuaW1wb3J0IHsgQlBpeGVsIH0gZnJvbSAnLi4vdHlwZXMvUGl4ZWwnXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RpbGVsYXllcidcbn0pXG5leHBvcnQgY2xhc3MgVGlsZUxheWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHJpdmF0ZSBnZXRUaWxlc1VybDogZ2V0VGlsZXNVcmxGdW5jXG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogVGlsZUxheWVyT3B0aW9uc1xuXG4gIEBPdXRwdXQoKSBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIHByaXZhdGUgdGlsZWxheWVyOiBCVGlsZUxheWVyXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogTWFwU2VydmljZSkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZnVuYyA9IHRoaXMuZ2V0VGlsZXNVcmxcblxuICAgIHRoaXMuX3NlcnZpY2VcbiAgICAgIC5hZGRUaWxlTGF5ZXIoKCkgPT4ge1xuICAgICAgICB0aGlzLnRpbGVsYXllciA9IG5ldyB3aW5kb3cuQk1hcC5UaWxlTGF5ZXIodGhpcy5vcHRpb25zKVxuXG4gICAgICAgIGlmICh0aGlzLmdldFRpbGVzVXJsKSB7XG4gICAgICAgICAgdGhpcy50aWxlbGF5ZXIuZ2V0VGlsZXNVcmwgPSBmdW5jdGlvbih0aWxlQ29vcmQ6IEJQaXhlbCwgem9vbTogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuYyh0aWxlQ29vcmQsIHpvb20pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVsYXllclxuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0aGlzLnRpbGVsYXllcilcbiAgICAgIH0pXG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fc2VydmljZS5yZW1vdmVUaWxlTGF5ZXIodGhpcy50aWxlbGF5ZXIpXG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7IE1hcFNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvbWFwU2VydmljZSdcbmltcG9ydCB7IEJUcmFmZmljTGF5ZXIsIFRyYWZmaWNMYXllck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcy9UcmFmZmljTGF5ZXInXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RyYWZmaWNsYXllcidcbn0pXG5leHBvcnQgY2xhc3MgVHJhZmZpY0xheWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHJpdmF0ZSBvcHRpb25zOiBUcmFmZmljTGF5ZXJPcHRpb25zXG5cbiAgQE91dHB1dCgpIHByaXZhdGUgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgcHJpdmF0ZSB0cmFmZmljbGF5ZXI6IEJUcmFmZmljTGF5ZXJcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXJ2aWNlOiBNYXBTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zZXJ2aWNlXG4gICAgICAuYWRkVGlsZUxheWVyKCgpID0+IHtcbiAgICAgICAgdGhpcy50cmFmZmljbGF5ZXIgPSBuZXcgd2luZG93LkJNYXAuVHJhZmZpY0xheWVyKHRoaXMub3B0aW9ucylcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhZmZpY2xheWVyXG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMudHJhZmZpY2xheWVyKVxuICAgICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9zZXJ2aWNlLnJlbW92ZVRpbGVMYXllcih0aGlzLnRyYWZmaWNsYXllcilcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBudWxsQ2hlY2sgfSBmcm9tICcuLi9oZWxwZXJzL3ZhbGlkYXRlJ1xuaW1wb3J0IHsgaXNVbmRlZmluZWQgfSBmcm9tICcuLi9oZWxwZXJzL29iamVjdCdcbmltcG9ydCB7IHRvTWFya2VyQ2x1c3RlcmVyT3B0aW9ucywgdG9Qb2ludCwgdG9NYXJrZXJPcHRpb25zLCB0b1RleHRJY29uU3R5bGUgfSBmcm9tICcuLi9oZWxwZXJzL3RyYW5zZm9ybWVyJ1xuaW1wb3J0IHsgTWFwU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9tYXBTZXJ2aWNlJ1xuaW1wb3J0IHsgTWFya2VyQ2x1c3RlcmVyT3B0aW9ucywgQk1hcmtlckNsdXN0ZXJlciB9IGZyb20gJy4uL3R5cGVzL01hcmtlckNsdXN0ZXJlcidcbmltcG9ydCB7IFNjcmlwdExvYWRlciB9IGZyb20gJy4uL3Byb3ZpZGVycy9zY3JpcHRMb2FkZXInXG5pbXBvcnQgeyBCTWFwSW5zdGFuY2UgfSBmcm9tICcuLi90eXBlcy9NYXAnXG5cbmNvbnN0IExJQl9VUkxTID0ge1xuICBrZXk6ICdtYXJrZXJDbHVzdGVyZXInLFxuICBzY3JpcHRzOiBbXG4gICAgJ2h0dHBzOi8vYXBpLm1hcC5iYWlkdS5jb20vbGlicmFyeS9NYXJrZXJDbHVzdGVyZXIvMS4yL3NyYy9NYXJrZXJDbHVzdGVyZXJfbWluLmpzJyxcbiAgICAnaHR0cHM6Ly9hcGkubWFwLmJhaWR1LmNvbS9saWJyYXJ5L1RleHRJY29uT3ZlcmxheS8xLjIvc3JjL1RleHRJY29uT3ZlcmxheV9taW4uanMnXG4gIF1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWFya2VyLWNsdXN0ZXJlcidcbn0pXG5leHBvcnQgY2xhc3MgTWFya2VyQ2x1c3RlcmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHByaXZhdGUgb3B0aW9uczogTWFya2VyQ2x1c3RlcmVyT3B0aW9uc1xuXG4gIEBPdXRwdXQoKSBwcml2YXRlIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIHByaXZhdGUgbWFya2VyQ2x1c3RlcmVyOiBCTWFya2VyQ2x1c3RlcmVyXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogTWFwU2VydmljZSwgcHJpdmF0ZSBzY3JpcHRMb2FkZXI6IFNjcmlwdExvYWRlcikge31cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgbnVsbENoZWNrKHRoaXMub3B0aW9ucywgJ29wdGlvbnMgaXMgcmVxdWlyZWQgZm9yIDxtYXJrZXItY2x1c3RlcmVyPicpXG5cbiAgICB0aGlzLl9zZXJ2aWNlLmdldE5hdGl2ZU1hcCgpLnRoZW4oKG1hcDogQk1hcEluc3RhbmNlKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JpcHRMb2FkZXIubG9hZChMSUJfVVJMUywgZmFsc2UsICgpID0+IHtcbiAgICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIgPSBuZXcgd2luZG93LkJNYXBMaWIuTWFya2VyQ2x1c3RlcmVyKG1hcCwgdG9NYXJrZXJDbHVzdGVyZXJPcHRpb25zKHRoaXMub3B0aW9ucykpXG5cbiAgICAgICAgdGhpcy5sb2FkZWQuZW1pdCh0aGlzLm1hcmtlckNsdXN0ZXJlcilcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgaWYgKGNoYW5nZXMub3B0aW9ucyAmJiAhY2hhbmdlcy5vcHRpb25zLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5yZXNldE9wdGlvbnMoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc2V0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJDbHVzdGVyZXJPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMubWFya2Vycykge1xuICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuY2xlYXJNYXJrZXJzKClcbiAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLmFkZE1hcmtlcnMoXG4gICAgICAgIG9wdGlvbnMubWFya2Vycy5tYXAobSA9PiBuZXcgd2luZG93LkJNYXAuTWFya2VyKHRvUG9pbnQobS5wb2ludCksIHRvTWFya2VyT3B0aW9ucyhtLm9wdGlvbnMpKSlcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLmdpcmRTaXplKSkge1xuICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuc2V0R3JpZFNpemUob3B0aW9ucy5naXJkU2l6ZSlcbiAgICB9XG4gICAgaWYgKCFpc1VuZGVmaW5lZChvcHRpb25zLm1heFpvb20pKSB7XG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5zZXRNYXhab29tKG9wdGlvbnMubWF4Wm9vbSlcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuc3R5bGVzKSB7XG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5zZXRTdHlsZXMob3B0aW9ucy5zdHlsZXMuZmlsdGVyKHMgPT4gcykubWFwKHMgPT4gdG9UZXh0SWNvblN0eWxlKHMpKSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIuY2xlYXJNYXJrZXJzKClcbiAgfVxufVxuIiwiaW1wb3J0IHsgQkljb24sIEljb24gfSBmcm9tICcuL0ljb24nXG5pbXBvcnQgeyBCU2l6ZSwgU2l6ZSB9IGZyb20gJy4vU2l6ZSdcblxuZXhwb3J0IGludGVyZmFjZSBCQ29udHJvbENvbnN0cnVjdG9yIHtcbiAgbmV3IChvcHRzOiBhbnkpOiBCQ29udHJvbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJDb250cm9sIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQk5hdmlnYXRpb25Db250cm9sQ29uc3RydWN0b3IgZXh0ZW5kcyBCQ29udHJvbENvbnN0cnVjdG9yIHtcbiAgbmV3IChvcHRzOiBCTmF2aWdhdGlvbkNvbnRyb2xPcHRpb25zKTogQk5hdmlnYXRpb25Db250cm9sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQk92ZXJ2aWV3TWFwQ29udHJvbENvbnN0cnVjdG9yIGV4dGVuZHMgQkNvbnRyb2xDb25zdHJ1Y3RvciB7XG4gIG5ldyAob3B0czogQk92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnMpOiBCT3ZlcnZpZXdNYXBDb250cm9sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQlNjYWxlQ29udHJvbENvbnN0cnVjdG9yIGV4dGVuZHMgQkNvbnRyb2xDb25zdHJ1Y3RvciB7XG4gIG5ldyAob3B0czogQlNjYWxlQ29udHJvbE9wdGlvbnMpOiBCU2NhbGVDb250cm9sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQk1hcFR5cGVDb250cm9sQ29uc3RydWN0b3IgZXh0ZW5kcyBCQ29udHJvbENvbnN0cnVjdG9yIHtcbiAgbmV3IChvcHRzOiBCTWFwVHlwZUNvbnRyb2xPcHRpb25zKTogQk1hcFR5cGVDb250cm9sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQkdlb2xvY2F0aW9uQ29uc3RydWN0b3IgZXh0ZW5kcyBCQ29udHJvbENvbnN0cnVjdG9yIHtcbiAgbmV3IChvcHRzOiBCR2VvbG9jYXRpb25Db250cm9sT3B0aW9ucyk6IEJHZW9sb2NhdGlvbkNvbnRyb2xcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCUGFub3JhbWFDb250cm9sQ29uc3RydWN0b3IgZXh0ZW5kcyBCQ29udHJvbENvbnN0cnVjdG9yIHtcbiAgbmV3ICgpOiBCUGFub3JhbWFDb250cm9sQ29udHJvbFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJOYXZpZ2F0aW9uQ29udHJvbCBleHRlbmRzIEJDb250cm9sIHtcbiAgZ2V0VHlwZSgpOiBOYXZpZ2F0aW9uQ29udHJvbFR5cGVcbiAgc2V0VHlwZSh0eXBlOiBOYXZpZ2F0aW9uQ29udHJvbFR5cGUpOiB2b2lkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQk92ZXJ2aWV3TWFwQ29udHJvbCBleHRlbmRzIEJDb250cm9sIHtcbiAgY2hhbmdlVmlldygpOiB2b2lkXG4gIHNldFNpemUoc2l6ZTogQlNpemUpOiB2b2lkXG4gIGdldFNpemUoKTogQlNpemVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCU2NhbGVDb250cm9sIGV4dGVuZHMgQkNvbnRyb2wge1xuICBnZXRVbml0KCk6IExlbmd0aFVuaXRcbiAgc2V0VW5pdCh1bml0OiBMZW5ndGhVbml0KTogdm9pZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJNYXBUeXBlQ29udHJvbCBleHRlbmRzIEJDb250cm9sIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQkdlb2xvY2F0aW9uQ29udHJvbCBleHRlbmRzIEJDb250cm9sIHtcbiAgbG9jYXRpb24oKTogdm9pZFxuICBnZXRBZGRyZXNzQ29tcG9uZW50KCk6IEFkZHJlc3NDb21wb25lbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCUGFub3JhbWFDb250cm9sQ29udHJvbCBleHRlbmRzIEJDb250cm9sIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbE9wdGlvbnMge1xuICBhbmNob3I/OiBDb250cm9sQW5jaG9yXG4gIG9mZnNldD86IFNpemVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCQ29udHJvbE9wdGlvbnMge1xuICBhbmNob3I/OiBDb250cm9sQW5jaG9yXG4gIG9mZnNldD86IEJTaXplXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbkNvbnRyb2xPcHRpb25zIGV4dGVuZHMgQ29udHJvbE9wdGlvbnMge1xuICB0eXBlPzogTmF2aWdhdGlvbkNvbnRyb2xUeXBlXG4gIHNob3dab29tSW5mbz86IGJvb2xlYW5cbiAgZW5hYmxlR2VvbG9jYXRpb24/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQk5hdmlnYXRpb25Db250cm9sT3B0aW9ucyBleHRlbmRzIEJDb250cm9sT3B0aW9ucyB7XG4gIHR5cGU/OiBOYXZpZ2F0aW9uQ29udHJvbFR5cGVcbiAgc2hvd1pvb21JbmZvPzogYm9vbGVhblxuICBlbmFibGVHZW9sb2NhdGlvbj86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdmVydmlld01hcENvbnRyb2xPcHRpb25zIGV4dGVuZHMgQ29udHJvbE9wdGlvbnMge1xuICBzaXplPzogU2l6ZVxuICBpc09wZW4/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQk92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnMgZXh0ZW5kcyBCQ29udHJvbE9wdGlvbnMge1xuICBzaXplPzogQlNpemVcbiAgaXNPcGVuPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjYWxlQ29udHJvbE9wdGlvbnMgZXh0ZW5kcyBDb250cm9sT3B0aW9ucyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEJTY2FsZUNvbnRyb2xPcHRpb25zIGV4dGVuZHMgQkNvbnRyb2xPcHRpb25zIHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFwVHlwZUNvbnRyb2xPcHRpb25zIHtcbiAgdHlwZT86IE1hcFR5cGVDb250cm9sVHlwZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJNYXBUeXBlQ29udHJvbE9wdGlvbnMge1xuICB0eXBlPzogTWFwVHlwZUNvbnRyb2xUeXBlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvbG9jYXRpb25Db250cm9sT3B0aW9ucyBleHRlbmRzIENvbnRyb2xPcHRpb25zIHtcbiAgc2hvd0FkZHJlc3NCYXI/OiBib29sZWFuXG4gIGVuYWJsZUF1dG9Mb2NhdGlvbj86IGJvb2xlYW5cbiAgbG9jYXRpb25JY29uPzogSWNvblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJHZW9sb2NhdGlvbkNvbnRyb2xPcHRpb25zIGV4dGVuZHMgQkNvbnRyb2xPcHRpb25zIHtcbiAgc2hvd0FkZHJlc3NCYXI/OiBib29sZWFuXG4gIGVuYWJsZUF1dG9Mb2NhdGlvbj86IGJvb2xlYW5cbiAgbG9jYXRpb25JY29uPzogQkljb25cbn1cblxuZXhwb3J0IGVudW0gQ29udHJvbEFuY2hvciB7XG4gIEJNQVBfQU5DSE9SX1RPUF9MRUZUID0gMCxcbiAgQk1BUF9BTkNIT1JfVE9QX1JJR0hUID0gMSxcbiAgQk1BUF9BTkNIT1JfQk9UVE9NX0xFRlQgPSAyLFxuICBCTUFQX0FOQ0hPUl9CT1RUT01fUklHSFQgPSAzXG59XG5cbmV4cG9ydCBlbnVtIE5hdmlnYXRpb25Db250cm9sVHlwZSB7XG4gIEJNQVBfTkFWSUdBVElPTl9DT05UUk9MX0xBUkdFID0gMCxcbiAgQk1BUF9OQVZJR0FUSU9OX0NPTlRST0xfU01BTEwgPSAxLFxuICBCTUFQX05BVklHQVRJT05fQ09OVFJPTF9QQU4gPSAyLFxuICBCTUFQX05BVklHQVRJT05fQ09OVFJPTF9aT09NID0gM1xufVxuXG5leHBvcnQgZW51bSBNYXBUeXBlQ29udHJvbFR5cGUge1xuICBCTUFQX01BUFRZUEVfQ09OVFJPTF9IT1JJWk9OVEFMID0gMCxcbiAgQk1BUF9NQVBUWVBFX0NPTlRST0xfRFJPUERPV04gPSAxLFxuICBCTUFQX01BUFRZUEVfQ09OVFJPTF9NQVAgPSAyXG59XG5cbmV4cG9ydCBlbnVtIExlbmd0aFVuaXQge1xuICBCTUFQX1VOSVRfTUVUUklDID0gJ21ldHJpYycsXG4gIEJNQVBfVU5JVF9JTVBFUklBTCA9ICd1cydcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzQ29tcG9uZW50IHtcbiAgc3RyZWV0TnVtYmVyOiBzdHJpbmdcbiAgc3RyZWV0OiBzdHJpbmdcbiAgZGlzdHJpY3Q6IHN0cmluZ1xuICBjaXR5OiBzdHJpbmdcbiAgcHJvdmluY2U6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBDb250cm9sVHlwZSA9ICduYXZpZ2F0aW9uJyB8ICdvdmVydmlld21hcCcgfCAnc2NhbGUnIHwgJ21hcHR5cGUnIHwgJ2dlb2xvY2F0aW9uJyB8ICdwYW5vcmFtYSdcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sLmNvbXBvbmVudCdcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tYXAuY29tcG9uZW50J1xuaW1wb3J0IHsgTWFya2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hcmtlci5jb21wb25lbnQnXG5pbXBvcnQgeyBQb2x5bGluZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wb2x5bGluZS5jb21wb25lbnQnXG5pbXBvcnQgeyBDaXJjbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2lyY2xlLmNvbXBvbmVudCdcbmltcG9ydCB7IFBvbHlnb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcG9seWdvbi5jb21wb25lbnQnXG5pbXBvcnQgeyBIZWF0bWFwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYXRtYXAuY29tcG9uZW50J1xuaW1wb3J0IHsgVGlsZUxheWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90aWxlbGF5ZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgVHJhZmZpY0xheWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmFmZmljbGF5ZXIuY29tcG9uZW50J1xuaW1wb3J0IHsgTWFya2VyQ2x1c3RlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21hcmtlckNsdXN0ZXJlci5jb21wb25lbnQnXG5pbXBvcnQgeyBMT0FESU5HX1NUQVRFLCBTY3JpcHRMb2FkZXIsIFNjcmlwdExvYWRlckNvbmZpZyB9IGZyb20gJy4vcHJvdmlkZXJzL3NjcmlwdExvYWRlcidcblxuaW1wb3J0IHsgQk1hcCB9IGZyb20gJy4vdHlwZXMvQk1hcCdcbmltcG9ydCB7IEJNYXBMaWIgfSBmcm9tICcuL3R5cGVzL0JNYXBMaWInXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hcENvbXBvbmVudCxcbiAgICBNYXJrZXJDb21wb25lbnQsXG4gICAgQ29udHJvbENvbXBvbmVudCxcbiAgICBQb2x5bGluZUNvbXBvbmVudCxcbiAgICBDaXJjbGVDb21wb25lbnQsXG4gICAgUG9seWdvbkNvbXBvbmVudCxcbiAgICBIZWF0bWFwQ29tcG9uZW50LFxuICAgIFRpbGVMYXlkZXJDb21wb25lbnQsXG4gICAgVHJhZmZpY0xheWRlckNvbXBvbmVudCxcbiAgICBNYXJrZXJDbHVzdGVyZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1hcENvbXBvbmVudCxcbiAgICBNYXJrZXJDb21wb25lbnQsXG4gICAgQ29udHJvbENvbXBvbmVudCxcbiAgICBQb2x5bGluZUNvbXBvbmVudCxcbiAgICBDaXJjbGVDb21wb25lbnQsXG4gICAgUG9seWdvbkNvbXBvbmVudCxcbiAgICBIZWF0bWFwQ29tcG9uZW50LFxuICAgIFRpbGVMYXlkZXJDb21wb25lbnQsXG4gICAgVHJhZmZpY0xheWRlckNvbXBvbmVudCxcbiAgICBNYXJrZXJDbHVzdGVyZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCYWlkdU1hcE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChfY29uZmlnPzogU2NyaXB0TG9hZGVyQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCYWlkdU1hcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU2NyaXB0TG9hZGVyQ29uZmlnLCB1c2VWYWx1ZTogX2NvbmZpZyB9LCBTY3JpcHRMb2FkZXJdXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IEJNYXBJbnN0YW5jZSwgTWFwT3B0aW9ucywgTWFwVHlwZUVudW0gfSBmcm9tICcuL3R5cGVzL01hcCdcbmV4cG9ydCB7IEJNYXBUeXBlIH0gZnJvbSAnLi90eXBlcy9NYXBUeXBlJ1xuZXhwb3J0IHsgQlByb2plY3Rpb24gfSBmcm9tICcuL3R5cGVzL1Byb2plY3Rpb24nXG5leHBvcnQgeyBQb2ludCB9IGZyb20gJy4vdHlwZXMvUG9pbnQnXG5leHBvcnQgeyBCTWFya2VyLCBNYXJrZXIsIE1hcmtlck9wdGlvbnMgfSBmcm9tICcuL3R5cGVzL01hcmtlcidcbmV4cG9ydCB7IEJQb2x5bGluZSwgUG9seWxpbmVPcHRpb25zIH0gZnJvbSAnLi90eXBlcy9Qb2x5bGluZSdcbmV4cG9ydCB7IEJDaXJjbGUsIENpcmNsZU9wdGlvbnMgfSBmcm9tICcuL3R5cGVzL0NpcmNsZSdcbmV4cG9ydCB7IEJQb2x5Z29uLCBQb2x5Z29uT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMvUG9seWdvbidcbmV4cG9ydCB7IEJIZWF0bWFwLCBIZWF0bWFwT3B0aW9ucywgSGVhdG1hcERhdGEgfSBmcm9tICcuL3R5cGVzL0hlYXRtYXAnXG5leHBvcnQgeyBCVGlsZUxheWVyLCBUaWxlTGF5ZXJPcHRpb25zLCBnZXRUaWxlc1VybEZ1bmMgfSBmcm9tICcuL3R5cGVzL1RpbGVMYXllcidcbmV4cG9ydCB7IEJUcmFmZmljTGF5ZXIsIFRyYWZmaWNMYXllck9wdGlvbnMsIFByZWRpY3REYXRlIH0gZnJvbSAnLi90eXBlcy9UcmFmZmljTGF5ZXInXG5leHBvcnQgeyBCTWFya2VyQ2x1c3RlcmVyLCBNYXJrZXJDbHVzdGVyZXJPcHRpb25zIH0gZnJvbSAnLi90eXBlcy9NYXJrZXJDbHVzdGVyZXInXG5leHBvcnQgeyBUZXh0SWNvblN0eWxlIH0gZnJvbSAnLi90eXBlcy9UZXh0SWNvbk92ZXJsYXknXG5leHBvcnQge1xuICBCQ29udHJvbCxcbiAgQk5hdmlnYXRpb25Db250cm9sLFxuICBCT3ZlcnZpZXdNYXBDb250cm9sLFxuICBCU2NhbGVDb250cm9sLFxuICBCTWFwVHlwZUNvbnRyb2wsXG4gIEJHZW9sb2NhdGlvbkNvbnRyb2wsXG4gIEJQYW5vcmFtYUNvbnRyb2xDb250cm9sLFxuICBDb250cm9sVHlwZSxcbiAgQ29udHJvbEFuY2hvcixcbiAgR2VvbG9jYXRpb25Db250cm9sT3B0aW9ucyxcbiAgTGVuZ3RoVW5pdCxcbiAgTmF2aWdhdGlvbkNvbnRyb2xPcHRpb25zLFxuICBOYXZpZ2F0aW9uQ29udHJvbFR5cGUsXG4gIE92ZXJ2aWV3TWFwQ29udHJvbE9wdGlvbnMsXG4gIFNjYWxlQ29udHJvbE9wdGlvbnMsXG4gIE1hcFR5cGVDb250cm9sT3B0aW9ucyxcbiAgTWFwVHlwZUNvbnRyb2xUeXBlXG59IGZyb20gJy4vdHlwZXMvQ29udHJvbCdcbmV4cG9ydCB7IEJJbmZvV2luZG93Q29uc3RydWN0b3IsIEJJbmZvV2luZG93T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMvSW5mb1dpbmRvdydcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfc2NyaXB0TG9hZFN0YXRlOiB7IFt1cmw6IHN0cmluZ106IExPQURJTkdfU1RBVEUgfVxuICAgIF9sb2FkaW5nQ2FsbGJhY2tzOiB7IFt1cmw6IHN0cmluZ106IEFycmF5PCgpID0+IHZvaWQ+IH1cbiAgICBCTWFwOiBCTWFwXG4gICAgQk1hcExpYjogQk1hcExpYlxuICAgIGJhaWR1bWFwaW5pdDogKCkgPT4gdm9pZFxuICAgIEJNQVBfUEVSU1BFQ1RJVkVfTUFQOiBhbnlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQkFBdUIsR0FBUTtJQUM3QixPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsQ0FBQTtDQUN6Qzs7Ozs7QUFFRCxxQkFBNEIsR0FBUTtJQUNsQyxPQUFPLEdBQUcsS0FBSyxTQUFTLENBQUE7Q0FDekI7Ozs7O0FBRUQsbUJBQTBCLEdBQVE7SUFDaEMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssa0JBQWtCLENBQUE7Q0FDbEU7Ozs7O0FBRUQsb0JBQTJCLEdBQVE7SUFDakMsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssbUJBQW1CLENBQUE7Q0FDbkU7Ozs7O0FBRUQsa0JBQXlCLEdBQVE7SUFDL0IsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssaUJBQWlCLENBQUE7Q0FDakU7Ozs7Ozs7QUFFRCxjQUF3QixHQUFNO0lBQUUsY0FBc0I7U0FBdEIsVUFBc0IsRUFBdEIscUJBQXNCLEVBQXRCLElBQXNCO1FBQXRCLDZCQUFzQjs7SUFDcEQscUJBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDaEMscUJBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUE7SUFDMUQsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUNyQixVQUFDLENBQUMsRUFBRSxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNiLE9BQU8sQ0FBQyxDQUFBO0tBQ1Qsb0JBQ0UsRUFBRSxFQUNOLENBQUE7Q0FDRjs7Ozs7O0FDYkQ7Ozs7QUFJQSxpQkFBd0IsSUFBVztJQUNqQyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7S0FDL0I7SUFDRCxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7Q0FDakQ7Ozs7O0FBRUQsa0JBQXlCLElBQWtCO0lBQ3pDLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLEVBQUUsQ0FBQTtLQUNWO0lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztRQUNmLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUMzQyxDQUFDLENBQUE7Q0FDSDs7Ozs7QUFFRCxnQkFBdUIsSUFBVTtJQUMvQixJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7S0FDOUI7SUFDRCxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Q0FDckQ7Ozs7Ozs7QUFFRCxnQkFBdUIsR0FBVyxFQUFFLElBQVUsRUFBRSxPQUFvQjtJQUNsRSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ3JCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNqQztJQUNELElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0tBQy9DO0lBQ0QscUJBQU0sV0FBVyxHQUFRO1FBQ3ZCLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM5QixXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDeEMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWE7S0FDckMsQ0FBQTtJQUNELHFCQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUE7SUFDakUsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0tBQzdDO0lBQ0QsT0FBTyxJQUFJLENBQUE7Q0FDWjs7Ozs7QUFFRCx5QkFBZ0MsT0FBc0I7SUFDcEQscUJBQU0sSUFBSSxHQUFtQixFQUFFLENBQUE7SUFFL0IsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0tBQ3JDO0lBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUMzRTtJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQTtLQUMvQztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQTtLQUM3QztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQTtLQUM3QztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQTtLQUN2QztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQTtLQUM3QztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQTtLQUNqQztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQTtLQUMzQjtJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUNuRjtJQUVELE9BQU8sSUFBSSxDQUFBO0NBQ1o7Ozs7O0FBRUQsb0NBQTJDLE9BQWlDO0lBQzFFLHFCQUFNLElBQUksR0FBOEIsRUFBRSxDQUFBO0lBRTFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPLElBQUksQ0FBQTtLQUNaO0lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBO0tBQzdCO0lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFBO0tBQ25EO0lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0tBQ3JDO0lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUU7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFBO0tBQ3pDO0lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO0tBQ3pCO0lBQ0QsT0FBTyxJQUFJLENBQUE7Q0FDWjs7Ozs7QUFFRCxxQ0FBNEMsT0FBa0M7SUFDNUUscUJBQU0sSUFBSSxHQUErQixFQUFFLENBQUE7SUFFM0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7S0FDN0I7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7S0FDN0I7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7S0FDckM7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDakM7SUFDRCxPQUFPLElBQUksQ0FBQTtDQUNaOzs7OztBQUVELCtCQUFzQyxPQUE0QjtJQUNoRSxxQkFBTSxJQUFJLEdBQXlCLEVBQUUsQ0FBQTtJQUVyQyxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ1osT0FBTyxJQUFJLENBQUE7S0FDWjtJQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtLQUM3QjtJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUNyQztJQUNELE9BQU8sSUFBSSxDQUFBO0NBQ1o7Ozs7O0FBRUQsaUNBQXdDLE9BQThCO0lBQ3BFLHFCQUFNLElBQUksR0FBMkIsRUFBRSxDQUFBO0lBRXZDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPLElBQUksQ0FBQTtLQUNaO0lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFBO0tBQ3pCO0lBQ0QsT0FBTyxJQUFJLENBQUE7Q0FDWjs7Ozs7QUFDRCw4QkFBcUMsT0FBa0M7SUFDckUscUJBQU0sSUFBSSxHQUErQixFQUFFLENBQUE7SUFFM0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUE7S0FDN0I7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7S0FDckM7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUE7S0FDckQ7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7S0FDM0c7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUE7S0FDN0M7SUFDRCxPQUFPLElBQUksQ0FBQTtDQUNaOzs7OztBQUVELHlCQUFnQyxLQUFvQjtJQUNsRCxxQkFBTSxTQUFTLEdBQW1CO1FBQ2hDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztRQUNkLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztLQUN6QixDQUFBO0lBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2hCLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtLQUN4QztJQUNELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUNoQixTQUFTLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7S0FDeEM7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMzQixTQUFTLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUE7S0FDcEM7SUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUM1QixTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUE7S0FDdEM7SUFFRCxPQUFPLFNBQVMsQ0FBQTtDQUNqQjs7Ozs7QUFFRCxrQ0FBeUMsT0FBK0I7SUFDdEUscUJBQU0sSUFBSSxHQUE0QixFQUFFLENBQUE7SUFFeEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sSUFBSSxDQUFBO0tBQ1o7SUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FDaEMsVUFBQSxDQUFDLElBQUksT0FBQSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFBLENBQzFFLENBQUE7S0FDRjtJQUVELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQTtLQUNqQztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQTtLQUMvQjtJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQTtLQUM3QztJQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQTtLQUNqRDtJQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxHQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFBO0tBQ3pFO0lBRUQsT0FBTyxJQUFJLENBQUE7Q0FDWjs7Ozs7O0FDbFFEOzs7OztBQUVBLG1CQUEwQixHQUFRLEVBQUUsR0FBVztJQUM3QyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDckI7Q0FDRjs7Ozs7O0FDTkQ7Ozs7Ozs7OztBQVVBLElBQUE7O2tCQUNzQixFQUFFOzs2QkFYeEI7SUFZQyxDQUFBO0FBRkQsQUFJQSxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFBO0FBQzVCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUE7Ozs7Ozs7Ozs7SUFJcEIsMkJBQUk7Ozs7OztjQUFDLEdBQXdCLEVBQUUsTUFBdUIsRUFBRSxFQUFjO1FBQXZDLHVCQUFBLEVBQUEsY0FBdUI7UUFDM0QscUJBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2xELHFCQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFekQsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUMvRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixhQUFhLENBQUMsK0JBQStCLEVBQUUsT0FBTyxDQUFDLENBQUE7Z0JBQ3ZELGFBQWEsQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLENBQUMsQ0FBQTthQUN0RDtZQUNELE9BQU8sRUFBRSxFQUFFLENBQUE7U0FDWjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDeEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtTQUN6QztRQUNELElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDaEUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUM1QyxPQUFNO1NBQ1A7UUFDRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQTtRQUMxRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRTVDLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLFlBQVksR0FBRztnQkFDcEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUE7Z0JBQ3pELGFBQWEsQ0FBQywrQkFBK0IsRUFBRSxPQUFPLENBQUMsQ0FBQTtnQkFDdkQsYUFBYSxDQUFDLDhCQUE4QixFQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUNyRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBYTtvQkFDeEQsQ0FBQyxFQUFFLENBQUE7aUJBQ0osQ0FBQyxDQUFBO2FBQ0gsQ0FBQTtTQUNGO1FBQ0QsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQTs7O2dCQWpDbEQsVUFBVTs7dUJBakJYOzs7Ozs7OztBQXNEQSwwQkFBMEIsU0FBaUIsRUFBRSxJQUFtQixFQUFFLE1BQWU7SUFDL0UscUJBQU0sT0FBTyxHQUFHO1FBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO0tBQ25CLENBQUE7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztRQUNkLGVBQWUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtLQUNqRCxDQUFDLENBQUE7Q0FDSDs7Ozs7Ozs7QUFFRCx5QkFBeUIsU0FBaUIsRUFBRSxHQUFXLEVBQUUsTUFBZSxFQUFFLE9BQTBCO0lBQ2xHLHFCQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQy9DLE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUE7SUFDL0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7SUFDaEIsTUFBTSxDQUFDLE9BQU8sR0FBRztRQUNmLElBQUksTUFBTSxFQUFFO1lBQ1YsYUFBYSxDQUFDLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUFBO1lBQ3RELGFBQWEsQ0FBQywrQkFBK0IsRUFBRSxNQUFNLENBQUMsQ0FBQTtTQUN2RDtRQUNELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBRWpDLFVBQVUsQ0FBQztZQUNULGVBQWUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtTQUNqRCxFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ1YsQ0FBQTtJQUVELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxNQUFNLENBQUMsTUFBTSxHQUFHO1lBQ2QsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2YsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNqQixPQUFNO2FBQ1A7WUFDRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQTtZQUN6RCxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBYTtnQkFDeEQsQ0FBQyxFQUFFLENBQUE7YUFDSixDQUFDLENBQUE7U0FDSCxDQUFBO0tBQ0Y7SUFDRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtDQUNsQzs7Ozs7O0FBRUQsdUJBQXVCLFFBQWdCLEVBQUUsS0FBYTtJQUNwRCxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBaUI7UUFDeEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0tBQzNCLENBQUMsQ0FBQTtDQUNIOzs7Ozs7QUM3RkQ7O3FCQXlIb0IsaUJBQWlCOzBCQUNaLHNCQUFzQjt3QkFDeEIsb0JBQW9CO3FCQUN2QixpQkFBaUI7Ozs7OztBQUdyQyx1QkFBOEIsT0FBK0I7SUFDM0QsT0FBTyxDQUFDLFVBQVUsQ0FBQyxtQkFBVyxPQUFPLEdBQUUsWUFBWSxDQUFDLENBQUE7Q0FDckQ7Ozs7OztBQ3RJRDtJQW9CRSxvQkFBd0MsUUFBb0MsT0FBcUI7UUFBakcsaUJBUUM7UUFSMkUsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUMvRixTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFBO1FBRTNDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1FBRXJCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQWUsVUFBQyxPQUFtQjtZQUN4RCxLQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQTtTQUM1QixDQUFDLENBQUE7S0FDSDs7Ozs7O0lBRU0sOEJBQVM7Ozs7O2NBQUMsRUFBZSxFQUFFLFVBQXNCOztRQUN0RCxxQkFBTSxHQUFHLEdBQUcsNENBQTBDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSwrQkFBNEIsQ0FBQTtRQUVqRyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFO2dCQUMzQixxQkFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFBO2dCQUNoRSxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2dCQUMzQixLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDYixDQUFDLENBQUE7U0FDSCxDQUFDLENBQUE7Ozs7OztJQUdHLCtCQUFVOzs7O2NBQUMsSUFBZ0I7UUFFOUIsSUFBQSxzQ0FBZSxFQUNmLGtEQUFxQixFQUNyQixvREFBc0IsRUFDdEIsb0NBQWMsRUFDZCxvREFBc0IsRUFDdEIsd0NBQWdCLEVBQ2hCLGdEQUFvQixFQUNwQiw0Q0FBa0IsQ0FDWjtRQUVSLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLENBQUMsZUFBZSxHQUFHLFNBQVMsR0FBRyxRQUFRLElBQUksVUFBVSxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUE7U0FDcEY7UUFDRCxJQUFJLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLENBQUMscUJBQXFCLEdBQUcsUUFBUSxHQUFHLFNBQVMsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLEdBQUEsQ0FBQyxDQUFBO1NBQ2pHO1FBQ0QsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLFFBQVEsR0FBRyxTQUFTLElBQUksWUFBWSxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUE7U0FDdkY7UUFDRCxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxHQUFHLFFBQVEsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLEdBQUEsQ0FBQyxDQUFBO1NBQ2xHO1FBQ0QsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsQ0FBQyxjQUFjLEdBQUcsUUFBUSxHQUFHLFNBQVMsSUFBSSxVQUFVLENBQUMsRUFBRSxHQUFBLENBQUMsQ0FBQTtTQUNuRjtRQUNELElBQUksU0FBUyxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsQ0FBQyxzQkFBc0IsR0FBRyxRQUFRLEdBQUcsU0FBUyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUE7U0FDbkc7UUFDRCxJQUFJLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLENBQUMsb0JBQW9CLEdBQUcsUUFBUSxHQUFHLFNBQVMsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUEsQ0FBQyxDQUFBO1NBQy9GO1FBQ0QsSUFBSSxTQUFTLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsR0FBRyxRQUFRLElBQUksYUFBYSxDQUFDLEVBQUUsR0FBQSxDQUFDLENBQUE7U0FDMUY7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUEsQ0FBQyxDQUFBO1NBQ3pEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFBLENBQUMsQ0FBQTtTQUNsRTtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUEsQ0FBQyxDQUFBO1NBQzVEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNoQixHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUN4RSxDQUFDLENBQUE7U0FDSDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDaEIscUJBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO2dCQUNsRixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ3pCLENBQUMsQ0FBQTtTQUNIOzs7Ozs7SUFHSSwrQkFBVTs7OztjQUFDLEVBQWtDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFpQjtZQUN0QyxxQkFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3ZCLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdkIsT0FBTyxFQUFFLEdBQUcsS0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUE7U0FDeEIsQ0FBQyxDQUFBOzs7Ozs7SUFHRyxrQ0FBYTs7OztjQUFDLE9BQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFpQjtZQUN0QyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzNCLENBQUMsQ0FBQTs7Ozs7O0lBR0csaUNBQVk7Ozs7Y0FDakIsRUFBcUM7UUFFckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO1lBQ3RDLHFCQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDekIsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMzQixPQUFPLEVBQUUsR0FBRyxLQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsQ0FBQTtTQUMxQixDQUFDLENBQUE7Ozs7OztJQUdHLG9DQUFlOzs7O2NBQUMsU0FBcUI7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQWlCO1lBQ3RDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDN0IsQ0FBQyxDQUFBOzs7Ozs7SUFHRywrQkFBVTs7OztjQUFDLEVBQW1DO1FBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFpQjtZQUN0QyxxQkFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3ZCLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDdkIsT0FBTyxFQUFFLEdBQUcsS0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUE7U0FDeEIsQ0FBQyxDQUFBOzs7Ozs7SUFHRyxrQ0FBYTs7OztjQUFDLE9BQWlCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFpQjtZQUN0QyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzNCLENBQUMsQ0FBQTs7Ozs7SUFHRyxpQ0FBWTs7OztRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUE7OztnQkFySW5CLFVBQVU7Ozs7Z0JBVEYsa0JBQWtCLHVCQWdCWixNQUFNLFNBQUMsa0JBQWtCO2dCQVQvQixZQUFZOztxQkFYckI7Ozs7Ozs7QUNBQTtJQXdCRSwwQkFBb0IsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtzQkFKYixJQUFJLFlBQVksRUFBRTtLQUlEOzs7O0lBRXJDLG1DQUFROzs7OztRQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGdDQUFnQyxDQUFDLENBQUE7UUFFdEQsSUFBSSxDQUFDLFFBQVE7YUFDVixVQUFVLENBQUM7WUFDVixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDMUQsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFBO1NBQ3BCLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxFQUFXO2dCQUFULG9CQUFPO1lBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDMUIsQ0FBQyxDQUFBOzs7OztJQUdDLHNDQUFXOzs7O1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTs7Ozs7OztJQUduQyx3Q0FBYTs7Ozs7Y0FBQyxJQUFpQixFQUFFLE9BQStCO1FBQ3RFLElBQUksSUFBSSxLQUFLLFlBQVksRUFBRTtZQUN6QixPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQzlFO1FBQ0QsSUFBSSxJQUFJLEtBQUssYUFBYSxFQUFFO1lBQzFCLE9BQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDaEY7UUFDRCxJQUFJLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDcEIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDcEU7UUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDdEIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDeEU7UUFDRCxJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7WUFDMUIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUN6RTtRQUNELElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUN2QixPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtTQUN6QztRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQW9CLElBQUksZ0JBQWEsQ0FBQyxDQUFBOzs7Z0JBakR6RCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCOzs7O2dCQUxRLFVBQVU7Ozt5QkFPaEIsS0FBSzs0QkFDTCxLQUFLOzJCQUVMLE1BQU07OzJCQXBCVDs7Ozs7OztBQ0FBO0lBa0VFLHNCQUFvQixRQUFvQjtRQUFwQixhQUFRLEdBQVIsUUFBUSxDQUFZO3NCQUxiLElBQUksWUFBWSxFQUFFO3VCQUNqQixJQUFJLFlBQVksRUFBRTtLQUlGOzs7O0lBRXJDLCtCQUFROzs7OztRQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHFDQUFxQyxDQUFDLENBQUE7UUFDOUQsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLG1EQUFtRCxDQUFDLENBQUE7UUFFMUYsSUFBSSxDQUFDLFFBQVE7YUFDVixTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2RCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDckIsT0FBTyxHQUFHLENBQUE7U0FDWCxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNQLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDdEIsQ0FBQyxDQUFBOzs7Ozs7SUFHQyxrQ0FBVzs7OztjQUFDLE9BQWlEO1FBQ2xFLHFCQUFNLElBQUkscUJBQUcsT0FBTyxZQUFTLFlBQTBCLENBQUEsQ0FBQTtRQUN2RCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGlFQUFpRSxDQUFDLENBQUE7U0FDdkY7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs7SUFHekIsa0NBQVc7Ozs7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOzs7Ozs7SUFHdkIsa0NBQVc7Ozs7Y0FBQyxHQUFpQjs7UUFDbkMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQU07WUFDbkMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDckIsQ0FBQyxDQUFBOzs7Z0JBakZMLFNBQVMsU0FBQztvQkFDVCxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLFFBQVEsRUFBRSxXQUFXO29CQUNyQixNQUFNLEVBQUU7d0JBQ04sbXBCQXlCSztxQkFDTjtvQkFDRCxRQUFRLEVBQUUsdVBBUVA7aUJBQ0o7Ozs7Z0JBN0NRLFVBQVU7Ozs0QkErQ2hCLEtBQUs7MkJBRUwsTUFBTTs0QkFDTixNQUFNO2dDQUVOLFNBQVMsU0FBQyxhQUFhOzt1QkFoRTFCOzs7Ozs7O0FDQUE7SUErQkUseUJBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7c0JBTGIsSUFBSSxZQUFZLEVBQUU7dUJBQ2pCLElBQUksWUFBWSxFQUFFO0tBSUY7Ozs7SUFFckMsa0NBQVE7Ozs7O1FBQ2IsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQTtRQUV2RCxJQUFJLENBQUMsUUFBUTthQUNWLFVBQVUsQ0FBQztZQUNWLFFBQVEsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsZUFBZSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFDO1NBQ2xHLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQyxFQUFPO2dCQUFMLFlBQUc7WUFDVixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDN0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ25DLENBQUM7YUFDRCxJQUFJLENBQUM7OztZQUVKLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQy9FLENBQUMsQ0FBQTs7Ozs7O0lBR0MscUNBQVc7Ozs7Y0FBQyxPQUFpRDtRQUNsRSxJQUFJLE9BQU8sYUFBVSxDQUFDLE9BQU8sVUFBTyxhQUFhLEVBQUUsRUFBRTtZQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxVQUFPLFlBQVksQ0FBQyxDQUFDLENBQUE7U0FDN0Q7UUFDRCxJQUFJLE9BQU8sZUFBWSxDQUFDLE9BQU8sWUFBUyxhQUFhLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sWUFBUyxZQUFZLENBQUMsQ0FBQTtTQUM5Qzs7Ozs7SUFHSSxxQ0FBVzs7OztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7OztJQUdsQyxvQ0FBVTs7OztjQUFDLE9BQXNCO1FBQ3ZDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLE9BQU07U0FDUDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtTQUM5QztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtTQUNwRjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLFFBQVEsR0FBRyxTQUFTLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQTtTQUM5RTtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLFFBQVEsR0FBRyxTQUFTLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQTtTQUM1RTtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUMxQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtTQUM1RjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNwQzs7Ozs7OztJQUdLLHFDQUFXOzs7OztjQUFDLE1BQWUsRUFBRSxHQUFpQjs7UUFDcEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQU07WUFDdEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsR0FBQTtnQkFDRCxHQUFHLEtBQUE7Z0JBQ0gsTUFBTSxRQUFBO2FBQ1AsQ0FBQyxDQUFBO1NBQ0gsQ0FBQyxDQUFBOzs7Z0JBOUVMLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtpQkFDbkI7Ozs7Z0JBUFEsVUFBVTs7OzBCQVNoQixLQUFLOzRCQUNMLEtBQUs7MkJBRUwsTUFBTTs0QkFDTixNQUFNOzswQkEzQlQ7Ozs7Ozs7QUNBQTtJQTZCRSwyQkFBb0IsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtzQkFKYixJQUFJLFlBQVksRUFBRTtLQUlEOzs7O0lBRXJDLG9DQUFROzs7OztRQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1DQUFtQyxDQUFDLENBQUE7UUFFM0QsSUFBSSxDQUFDLFFBQVE7YUFDVixVQUFVLENBQUM7WUFDVixRQUFRLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztTQUN2RixDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1NBQ2hDLENBQUMsQ0FBQTs7Ozs7O0lBR0MsdUNBQVc7Ozs7Y0FBQyxPQUFpRDtRQUNsRSxJQUFJLE9BQU8sY0FBVyxDQUFDLE9BQU8sV0FBUSxhQUFhLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxXQUFRLFlBQVksQ0FBQyxDQUFDLENBQUE7U0FDN0Q7UUFDRCxJQUFJLE9BQU8sZUFBWSxDQUFDLE9BQU8sWUFBUyxhQUFhLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sWUFBUyxZQUFZLENBQUMsQ0FBQTtTQUM5Qzs7Ozs7SUFHSSx1Q0FBVzs7OztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7Ozs7OztJQUdwQyxzQ0FBVTs7OztjQUFDLE9BQXdCO1FBQ3pDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLE9BQU07U0FDUDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQTthQUM5QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFBO2FBQy9CO1NBQ0Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN6QyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUE7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO2FBQ2pDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDbEQ7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUN0RDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUNsRDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUNwRDs7O2dCQW5FSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQU5RLFVBQVU7OzsyQkFRaEIsS0FBSzs0QkFDTCxLQUFLOzJCQUVMLE1BQU07OzRCQXpCVDs7Ozs7OztBQ0FBO0lBOEJFLHlCQUFvQixRQUFvQjtRQUFwQixhQUFRLEdBQVIsUUFBUSxDQUFZO3NCQUpiLElBQUksWUFBWSxFQUFFO0tBSUQ7Ozs7SUFFckMsa0NBQVE7Ozs7O1FBQ2IsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsaUNBQWlDLENBQUMsQ0FBQTtRQUN6RCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxpQ0FBaUMsQ0FBQyxDQUFBO1FBRXpELElBQUksQ0FBQyxRQUFRO2FBQ1YsVUFBVSxDQUFDO1lBQ1YsUUFBUSxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztTQUMvRixDQUFDO2FBQ0QsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzlCLENBQUMsQ0FBQTs7Ozs7O0lBR0MscUNBQVc7Ozs7Y0FBQyxPQUFpRDtRQUNsRSxJQUFJLE9BQU8sY0FBVyxDQUFDLE9BQU8sV0FBUSxhQUFhLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxXQUFRLFlBQVksQ0FBQyxDQUFDLENBQUE7U0FDNUQ7UUFDRCxJQUFJLE9BQU8sY0FBVyxDQUFDLE9BQU8sV0FBUSxhQUFhLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLFdBQVEsWUFBWSxDQUFDLENBQUE7U0FDbkQ7UUFDRCxJQUFJLE9BQU8sZUFBWSxDQUFDLE9BQU8sWUFBUyxhQUFhLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sWUFBUyxZQUFZLENBQUMsQ0FBQTtTQUM5Qzs7Ozs7SUFHSSxxQ0FBVzs7OztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7Ozs7OztJQUdsQyxvQ0FBVTs7OztjQUFDLE9BQXNCO1FBQ3ZDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ25CLE9BQU07U0FDUDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQTthQUM1QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFBO2FBQzdCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUN6QyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUE7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO2FBQy9CO1NBQ0Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDaEQ7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDNUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUNwRDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUNoRDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUNoRDtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUNsRDs7O2dCQTlFSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzs7O2dCQU5RLFVBQVU7OzsyQkFRaEIsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBRUwsTUFBTTs7MEJBMUJUOzs7Ozs7O0FDQUE7SUE2QkUsMEJBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7c0JBSmIsSUFBSSxZQUFZLEVBQUU7S0FJRDs7OztJQUVyQyxtQ0FBUTs7Ozs7UUFDYixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxrQ0FBa0MsQ0FBQyxDQUFBO1FBRTFELElBQUksQ0FBQyxRQUFRO2FBQ1YsVUFBVSxDQUFDO1lBQ1YsUUFBUSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7U0FDckYsQ0FBQzthQUNELElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMvQixDQUFDLENBQUE7Ozs7OztJQUdDLHNDQUFXOzs7O2NBQUMsT0FBaUQ7UUFDbEUsSUFBSSxPQUFPLGNBQVcsQ0FBQyxPQUFPLFdBQVEsYUFBYSxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sV0FBUSxZQUFZLENBQUMsQ0FBQyxDQUFBO1NBQzVEO1FBQ0QsSUFBSSxPQUFPLGVBQVksQ0FBQyxPQUFPLFlBQVMsYUFBYSxFQUFFLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLFlBQVMsWUFBWSxDQUFDLENBQUE7U0FDOUM7Ozs7O0lBR0ksc0NBQVc7Ozs7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBOzs7Ozs7SUFHbkMscUNBQVU7Ozs7Y0FBQyxPQUF1QjtRQUN4QyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNuQixPQUFNO1NBQ1A7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUN2QyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUE7YUFDN0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQTthQUM5QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDekMsSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFBO2FBQy9CO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTthQUNoQztTQUNGO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDckQ7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDakQ7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7U0FDakQ7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7U0FDbkQ7OztnQkF6RUosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO2lCQUNwQjs7OztnQkFOUSxVQUFVOzs7MkJBUWhCLEtBQUs7NEJBQ0wsS0FBSzsyQkFFTCxNQUFNOzsyQkF6QlQ7Ozs7Ozs7QUNBQSxBQWdCQSxxQkFBTSxPQUFPLEdBQUcsa0VBQWtFLENBQUE7O0lBYWhGLDBCQUFvQixRQUFvQixFQUFVLFlBQTBCO1FBQXhELGFBQVEsR0FBUixRQUFRLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztzQkFKakQsSUFBSSxZQUFZLEVBQUU7S0FJbUM7Ozs7SUFFekUsbUNBQVE7Ozs7O1FBQ2IsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUMsQ0FBQTtRQUU1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztZQUNoQyxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUU7Z0JBQzVDLEtBQUksQ0FBQyxRQUFRO3FCQUNWLFVBQVUsQ0FBQztvQkFDVixRQUFRLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUM7aUJBQ3hFLENBQUM7cUJBQ0QsSUFBSSxDQUFDO29CQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDOUIsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO3dCQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7cUJBQ3RDO2lCQUNGLENBQUMsQ0FBQTthQUNMLENBQUMsQ0FBQTtTQUNILENBQUMsQ0FBQTs7Ozs7O0lBR0csc0NBQVc7Ozs7Y0FBQyxPQUFpRDtRQUNsRSxJQUFJLE9BQU8sZUFBWSxDQUFDLE9BQU8sWUFBUyxhQUFhLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLFlBQVMsWUFBWSxDQUFDLENBQUE7U0FDdEQ7UUFDRCxJQUFJLE9BQU8sZUFBWSxDQUFDLE9BQU8sWUFBUyxhQUFhLEVBQUUsRUFBRTtZQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLFlBQVMsWUFBWSxDQUFDLENBQUE7U0FDdEQ7Ozs7O0lBR0ksc0NBQVc7Ozs7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBOzs7Z0JBMUM1QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7aUJBQ3BCOzs7O2dCQVJRLFVBQVU7Z0JBRVYsWUFBWTs7OzRCQVFsQixLQUFLOzRCQUNMLEtBQUs7MkJBRUwsTUFBTTs7MkJBekJUOzs7Ozs7O0FDQUE7SUFpQkUsNkJBQW9CLFFBQW9CO1FBQXBCLGFBQVEsR0FBUixRQUFRLENBQVk7c0JBSmIsSUFBSSxZQUFZLEVBQUU7S0FJRDs7OztJQUVyQyxzQ0FBUTs7Ozs7UUFDYixxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUU3QixJQUFJLENBQUMsUUFBUTthQUNWLFlBQVksQ0FBQztZQUNaLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFFeEQsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFTLFNBQWlCLEVBQUUsSUFBWTtvQkFDbkUsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO2lCQUM3QixDQUFBO2FBQ0Y7WUFDRCxPQUFPLEtBQUksQ0FBQyxTQUFTLENBQUE7U0FDdEIsQ0FBQzthQUNELElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUNqQyxDQUFDLENBQUE7Ozs7O0lBR0MseUNBQVc7Ozs7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBOzs7Z0JBakNoRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCOzs7O2dCQU5RLFVBQVU7OztnQ0FRaEIsS0FBSzs0QkFDTCxLQUFLOzJCQUVMLE1BQU07OzhCQWJUOzs7Ozs7O0FDQUE7SUFlRSxnQ0FBb0IsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtzQkFKYixJQUFJLFlBQVksRUFBRTtLQUlEOzs7O0lBRXJDLHlDQUFROzs7OztRQUNiLElBQUksQ0FBQyxRQUFRO2FBQ1YsWUFBWSxDQUFDO1lBQ1osS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM5RCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUE7U0FDekIsQ0FBQzthQUNELElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUNwQyxDQUFDLENBQUE7Ozs7O0lBR0MsNENBQVc7Ozs7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBOzs7Z0JBeEJuRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQUxRLFVBQVU7Ozs0QkFPaEIsS0FBSzsyQkFFTCxNQUFNOztpQ0FYVDs7Ozs7OztBQ0FBLEFBbUJBLHFCQUFNLFFBQVEsR0FBRztJQUNmLEdBQUcsRUFBRSxpQkFBaUI7SUFDdEIsT0FBTyxFQUFFO1FBQ1Asa0ZBQWtGO1FBQ2xGLGtGQUFrRjtLQUNuRjtDQUNGLENBQUE7O0lBWUMsa0NBQW9CLFFBQW9CLEVBQVUsWUFBMEI7UUFBeEQsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO3NCQUpqRCxJQUFJLFlBQVksRUFBRTtLQUltQzs7OztJQUV6RSwyQ0FBUTs7Ozs7UUFDYixTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSw0Q0FBNEMsQ0FBQyxDQUFBO1FBRXJFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBaUI7WUFDbEQsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFO2dCQUM3QyxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLHdCQUF3QixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2dCQUV0RyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7YUFDdkMsQ0FBQyxDQUFBO1NBQ0gsQ0FBQyxDQUFBOzs7Ozs7SUFHRyw4Q0FBVzs7OztjQUFDLE9BQWlEO1FBQ2xFLElBQUksT0FBTyxlQUFZLENBQUMsT0FBTyxZQUFTLGFBQWEsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxZQUFTLFlBQVksQ0FBQyxDQUFBO1NBQ2hEOzs7Ozs7SUFHSywrQ0FBWTs7OztjQUFDLE9BQStCO1FBQ2xELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFBO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUM3QixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUMvRixDQUFBO1NBQ0Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDbkQ7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDakQ7UUFDRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEdBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUMsQ0FBQTtTQUMzRjs7Ozs7SUFHSSw4Q0FBVzs7OztRQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFBOzs7Z0JBakR0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBZlEsVUFBVTtnQkFFVixZQUFZOzs7NEJBZWxCLEtBQUs7MkJBRUwsTUFBTTs7bUNBakNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQ3VJcUIsUUFBUTt3QkFDTixJQUFJOzs7Ozs7O0FDeEkzQjs7Ozs7OztJQTRDZ0Isc0JBQU87Ozs7Y0FBQyxPQUE0QjtRQUNoRCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLFlBQVksQ0FBQztTQUM5RSxDQUFBOzs7Z0JBL0JKLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osWUFBWTt3QkFDWixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIsd0JBQXdCO3FCQUN6QjtpQkFDRjs7eUJBMUNEOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./node_modules/calendar-utils/dist/calendar-utils.js":
/*!************************************************************!*\
  !*** ./node_modules/calendar-utils/dist/calendar-utils.js ***!
  \************************************************************/
/*! exports provided: DAYS_OF_WEEK, SECONDS_IN_DAY, SECONDS_IN_WEEK, getWeekViewEventOffset, getEventsInPeriod, getWeekViewHeader, getWeekView, getMonthView, getDayView, getDayViewHourGrid, EventValidationErrorMessage, validateEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return DAYS_OF_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDS_IN_DAY", function() { return SECONDS_IN_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDS_IN_WEEK", function() { return SECONDS_IN_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewEventOffset", function() { return getWeekViewEventOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventsInPeriod", function() { return getEventsInPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekViewHeader", function() { return getWeekViewHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekView", function() { return getWeekView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthView", function() { return getMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayView", function() { return getDayView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayViewHourGrid", function() { return getDayViewHourGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventValidationErrorMessage", function() { return EventValidationErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEvents", function() { return validateEvents; });
/* harmony import */ var date_fns_add_days__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/add_days */ "./node_modules/date-fns/add_days/index.js");
/* harmony import */ var date_fns_add_days__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_days__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_add_hours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/add_hours */ "./node_modules/date-fns/add_hours/index.js");
/* harmony import */ var date_fns_add_hours__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_hours__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_add_minutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/add_minutes */ "./node_modules/date-fns/add_minutes/index.js");
/* harmony import */ var date_fns_add_minutes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_minutes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/add_seconds */ "./node_modules/date-fns/add_seconds/index.js");
/* harmony import */ var date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_difference_in_days__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/difference_in_days */ "./node_modules/date-fns/difference_in_days/index.js");
/* harmony import */ var date_fns_difference_in_days__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_difference_in_days__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var date_fns_difference_in_minutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/difference_in_minutes */ "./node_modules/date-fns/difference_in_minutes/index.js");
/* harmony import */ var date_fns_difference_in_minutes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns_difference_in_minutes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var date_fns_difference_in_seconds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/difference_in_seconds */ "./node_modules/date-fns/difference_in_seconds/index.js");
/* harmony import */ var date_fns_difference_in_seconds__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns_difference_in_seconds__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns_end_of_day__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/end_of_day */ "./node_modules/date-fns/end_of_day/index.js");
/* harmony import */ var date_fns_end_of_day__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns_end_of_day__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns_end_of_month__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/end_of_month */ "./node_modules/date-fns/end_of_month/index.js");
/* harmony import */ var date_fns_end_of_month__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns_end_of_month__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var date_fns_end_of_week__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/end_of_week */ "./node_modules/date-fns/end_of_week/index.js");
/* harmony import */ var date_fns_end_of_week__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_end_of_week__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns_get_day__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/get_day */ "./node_modules/date-fns/get_day/index.js");
/* harmony import */ var date_fns_get_day__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns_get_day__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var date_fns_is_date__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/is_date */ "./node_modules/date-fns/is_date/index.js");
/* harmony import */ var date_fns_is_date__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_date__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var date_fns_is_same_day__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/is_same_day */ "./node_modules/date-fns/is_same_day/index.js");
/* harmony import */ var date_fns_is_same_day__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_same_day__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var date_fns_is_same_month__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/is_same_month */ "./node_modules/date-fns/is_same_month/index.js");
/* harmony import */ var date_fns_is_same_month__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_same_month__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var date_fns_is_same_second__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns/is_same_second */ "./node_modules/date-fns/is_same_second/index.js");
/* harmony import */ var date_fns_is_same_second__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(date_fns_is_same_second__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var date_fns_max__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns/max */ "./node_modules/date-fns/max/index.js");
/* harmony import */ var date_fns_max__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(date_fns_max__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var date_fns_set_hours__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns/set_hours */ "./node_modules/date-fns/set_hours/index.js");
/* harmony import */ var date_fns_set_hours__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(date_fns_set_hours__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var date_fns_set_minutes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns/set_minutes */ "./node_modules/date-fns/set_minutes/index.js");
/* harmony import */ var date_fns_set_minutes__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(date_fns_set_minutes__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns/start_of_day */ "./node_modules/date-fns/start_of_day/index.js");
/* harmony import */ var date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var date_fns_start_of_minute__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns/start_of_minute */ "./node_modules/date-fns/start_of_minute/index.js");
/* harmony import */ var date_fns_start_of_minute__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(date_fns_start_of_minute__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var date_fns_start_of_month__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns/start_of_month */ "./node_modules/date-fns/start_of_month/index.js");
/* harmony import */ var date_fns_start_of_month__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(date_fns_start_of_month__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var date_fns_start_of_week__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/start_of_week */ "./node_modules/date-fns/start_of_week/index.js");
/* harmony import */ var date_fns_start_of_week__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(date_fns_start_of_week__WEBPACK_IMPORTED_MODULE_21__);






















var DAYS_OF_WEEK;
(function (DAYS_OF_WEEK) {
    DAYS_OF_WEEK[DAYS_OF_WEEK["SUNDAY"] = 0] = "SUNDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["MONDAY"] = 1] = "MONDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["TUESDAY"] = 2] = "TUESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["WEDNESDAY"] = 3] = "WEDNESDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["THURSDAY"] = 4] = "THURSDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["FRIDAY"] = 5] = "FRIDAY";
    DAYS_OF_WEEK[DAYS_OF_WEEK["SATURDAY"] = 6] = "SATURDAY";
})(DAYS_OF_WEEK || (DAYS_OF_WEEK = {}));
var DEFAULT_WEEKEND_DAYS = [
    DAYS_OF_WEEK.SUNDAY,
    DAYS_OF_WEEK.SATURDAY
];
var DAYS_IN_WEEK = 7;
var HOURS_IN_DAY = 24;
var MINUTES_IN_HOUR = 60;
var SECONDS_IN_DAY = 60 * 60 * 24;
var SECONDS_IN_WEEK = SECONDS_IN_DAY * DAYS_IN_WEEK;
function getExcludedSeconds(_a) {
    var startDate = _a.startDate, seconds = _a.seconds, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    if (excluded.length < 1) {
        return 0;
    }
    var endDate = date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_3___default()(startDate, seconds - 1);
    var dayStart = date_fns_get_day__WEBPACK_IMPORTED_MODULE_10___default()(startDate);
    var dayEnd = date_fns_get_day__WEBPACK_IMPORTED_MODULE_10___default()(date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_3___default()(endDate, 0));
    var result = 0; // Calculated in seconds
    var current = startDate;
    var _loop_1 = function () {
        var day = date_fns_get_day__WEBPACK_IMPORTED_MODULE_10___default()(current);
        if (excluded.some(function (excludedDay) { return excludedDay === day; })) {
            result += calculateExcludedSeconds({
                dayStart: dayStart,
                dayEnd: dayEnd,
                day: day,
                precision: precision,
                startDate: startDate,
                endDate: endDate
            });
        }
        current = date_fns_add_days__WEBPACK_IMPORTED_MODULE_0___default()(current, 1);
    };
    while (current < endDate) {
        _loop_1();
    }
    return result;
}
function calculateExcludedSeconds(_a) {
    var precision = _a.precision, day = _a.day, dayStart = _a.dayStart, dayEnd = _a.dayEnd, startDate = _a.startDate, endDate = _a.endDate;
    if (precision === 'minutes') {
        if (day === dayStart) {
            return date_fns_difference_in_seconds__WEBPACK_IMPORTED_MODULE_6___default()(date_fns_end_of_day__WEBPACK_IMPORTED_MODULE_7___default()(startDate), startDate) + 1;
        }
        else if (day === dayEnd) {
            return date_fns_difference_in_seconds__WEBPACK_IMPORTED_MODULE_6___default()(endDate, date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(endDate)) + 1;
        }
    }
    return SECONDS_IN_DAY;
}
function getWeekViewEventSpan(_a) {
    var event = _a.event, offset = _a.offset, startOfWeekDate = _a.startOfWeekDate, excluded = _a.excluded, _b = _a.precision, precision = _b === void 0 ? 'days' : _b;
    var span = SECONDS_IN_DAY;
    var begin = date_fns_max__WEBPACK_IMPORTED_MODULE_15___default()(event.start, startOfWeekDate);
    if (event.end) {
        switch (precision) {
            case 'minutes':
                span = date_fns_difference_in_seconds__WEBPACK_IMPORTED_MODULE_6___default()(event.end, begin);
                break;
            default:
                span =
                    date_fns_difference_in_days__WEBPACK_IMPORTED_MODULE_4___default()(date_fns_add_days__WEBPACK_IMPORTED_MODULE_0___default()(date_fns_end_of_day__WEBPACK_IMPORTED_MODULE_7___default()(event.end), 1), begin) *
                        SECONDS_IN_DAY;
                break;
        }
    }
    var offsetSeconds = offset * SECONDS_IN_DAY;
    var totalLength = offsetSeconds + span;
    // the best way to detect if an event is outside the week-view
    // is to check if the total span beginning (from startOfWeekDay or event start) exceeds 7days
    if (totalLength > SECONDS_IN_WEEK) {
        span = SECONDS_IN_WEEK - offsetSeconds;
    }
    span -= getExcludedSeconds({
        startDate: begin,
        seconds: span,
        excluded: excluded,
        precision: precision
    });
    return span / SECONDS_IN_DAY;
}
function getWeekViewEventOffset(_a) {
    var event = _a.event, startOfWeekDate = _a.startOfWeek, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, _c = _a.precision, precision = _c === void 0 ? 'days' : _c;
    if (event.start < startOfWeekDate) {
        return 0;
    }
    var offset = 0;
    switch (precision) {
        case 'days':
            offset =
                date_fns_difference_in_days__WEBPACK_IMPORTED_MODULE_4___default()(date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(event.start), startOfWeekDate) *
                    SECONDS_IN_DAY;
            break;
        case 'minutes':
            offset = date_fns_difference_in_seconds__WEBPACK_IMPORTED_MODULE_6___default()(event.start, startOfWeekDate);
            break;
    }
    offset -= getExcludedSeconds({
        startDate: startOfWeekDate,
        seconds: offset,
        excluded: excluded,
        precision: precision
    });
    return offset / SECONDS_IN_DAY;
}
function isEventIsPeriod(_a) {
    var event = _a.event, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    var eventStart = event.start;
    var eventEnd = event.end || event.start;
    if (eventStart > periodStart && eventStart < periodEnd) {
        return true;
    }
    if (eventEnd > periodStart && eventEnd < periodEnd) {
        return true;
    }
    if (eventStart < periodStart && eventEnd > periodEnd) {
        return true;
    }
    if (date_fns_is_same_second__WEBPACK_IMPORTED_MODULE_14___default()(eventStart, periodStart) ||
        date_fns_is_same_second__WEBPACK_IMPORTED_MODULE_14___default()(eventStart, periodEnd)) {
        return true;
    }
    if (date_fns_is_same_second__WEBPACK_IMPORTED_MODULE_14___default()(eventEnd, periodStart) ||
        date_fns_is_same_second__WEBPACK_IMPORTED_MODULE_14___default()(eventEnd, periodEnd)) {
        return true;
    }
    return false;
}
function getEventsInPeriod(_a) {
    var events = _a.events, periodStart = _a.periodStart, periodEnd = _a.periodEnd;
    return events.filter(function (event) {
        return isEventIsPeriod({ event: event, periodStart: periodStart, periodEnd: periodEnd });
    });
}
function getWeekDay(_a) {
    var date = _a.date, _b = _a.weekendDays, weekendDays = _b === void 0 ? DEFAULT_WEEKEND_DAYS : _b;
    var today = date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(new Date());
    return {
        date: date,
        isPast: date < today,
        isToday: date_fns_is_same_day__WEBPACK_IMPORTED_MODULE_12___default()(date, today),
        isFuture: date > today,
        isWeekend: weekendDays.indexOf(date_fns_get_day__WEBPACK_IMPORTED_MODULE_10___default()(date)) > -1
    };
}
function getWeekViewHeader(_a) {
    var viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _b = _a.excluded, excluded = _b === void 0 ? [] : _b, weekendDays = _a.weekendDays;
    var start = date_fns_start_of_week__WEBPACK_IMPORTED_MODULE_21___default()(viewDate, { weekStartsOn: weekStartsOn });
    var days = [];
    var _loop_2 = function (i) {
        var date = date_fns_add_days__WEBPACK_IMPORTED_MODULE_0___default()(start, i);
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            days.push(getWeekDay({ date: date, weekendDays: weekendDays }));
        }
    };
    for (var i = 0; i < DAYS_IN_WEEK; i++) {
        _loop_2(i);
    }
    return days;
}
function getWeekView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.precision, precision = _d === void 0 ? 'days' : _d, _e = _a.absolutePositionedEvents, absolutePositionedEvents = _e === void 0 ? false : _e;
    if (!events) {
        events = [];
    }
    var startOfViewWeek = date_fns_start_of_week__WEBPACK_IMPORTED_MODULE_21___default()(viewDate, { weekStartsOn: weekStartsOn });
    var endOfViewWeek = date_fns_end_of_week__WEBPACK_IMPORTED_MODULE_9___default()(viewDate, { weekStartsOn: weekStartsOn });
    var maxRange = DAYS_IN_WEEK - excluded.length;
    var eventsInPeriod = getEventsInPeriod({
        events: events,
        periodStart: startOfViewWeek,
        periodEnd: endOfViewWeek
    });
    var eventsMapped = eventsInPeriod
        .map(function (event) {
        var offset = getWeekViewEventOffset({
            event: event,
            startOfWeek: startOfViewWeek,
            excluded: excluded,
            precision: precision
        });
        var span = getWeekViewEventSpan({
            event: event,
            offset: offset,
            startOfWeekDate: startOfViewWeek,
            excluded: excluded,
            precision: precision
        });
        return { event: event, offset: offset, span: span };
    })
        .filter(function (e) { return e.offset < maxRange; })
        .filter(function (e) { return e.span > 0; })
        .map(function (entry) { return ({
        event: entry.event,
        offset: entry.offset,
        span: entry.span,
        startsBeforeWeek: entry.event.start < startOfViewWeek,
        endsAfterWeek: (entry.event.end || entry.event.start) > endOfViewWeek
    }); })
        .sort(function (itemA, itemB) {
        var startSecondsDiff = date_fns_difference_in_seconds__WEBPACK_IMPORTED_MODULE_6___default()(itemA.event.start, itemB.event.start);
        if (startSecondsDiff === 0) {
            return date_fns_difference_in_seconds__WEBPACK_IMPORTED_MODULE_6___default()(itemB.event.end || itemB.event.start, itemA.event.end || itemA.event.start);
        }
        return startSecondsDiff;
    });
    var eventRows = [];
    var allocatedEvents = [];
    eventsMapped.forEach(function (event, index) {
        if (allocatedEvents.indexOf(event) === -1) {
            allocatedEvents.push(event);
            var rowSpan_1 = event.span + event.offset;
            var otherRowEvents = eventsMapped
                .slice(index + 1)
                .filter(function (nextEvent) {
                if (nextEvent.offset >= rowSpan_1 &&
                    rowSpan_1 + nextEvent.span <= DAYS_IN_WEEK &&
                    allocatedEvents.indexOf(nextEvent) === -1) {
                    var nextEventOffset = nextEvent.offset - rowSpan_1;
                    if (!absolutePositionedEvents) {
                        nextEvent.offset = nextEventOffset;
                    }
                    rowSpan_1 += nextEvent.span + nextEventOffset;
                    allocatedEvents.push(nextEvent);
                    return true;
                }
            });
            eventRows.push({
                row: [event].concat(otherRowEvents)
            });
        }
    });
    return {
        eventRows: eventRows,
        period: {
            events: eventsInPeriod,
            start: startOfViewWeek,
            end: endOfViewWeek
        }
    };
}
function getMonthView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, weekStartsOn = _a.weekStartsOn, _c = _a.excluded, excluded = _c === void 0 ? [] : _c, _d = _a.viewStart, viewStart = _d === void 0 ? date_fns_start_of_month__WEBPACK_IMPORTED_MODULE_20___default()(viewDate) : _d, _e = _a.viewEnd, viewEnd = _e === void 0 ? date_fns_end_of_month__WEBPACK_IMPORTED_MODULE_8___default()(viewDate) : _e, weekendDays = _a.weekendDays;
    if (!events) {
        events = [];
    }
    var start = date_fns_start_of_week__WEBPACK_IMPORTED_MODULE_21___default()(viewStart, { weekStartsOn: weekStartsOn });
    var end = date_fns_end_of_week__WEBPACK_IMPORTED_MODULE_9___default()(viewEnd, { weekStartsOn: weekStartsOn });
    var eventsInMonth = getEventsInPeriod({
        events: events,
        periodStart: start,
        periodEnd: end
    });
    var initialViewDays = [];
    var previousDate;
    var _loop_3 = function (i) {
        // hacky fix for https://github.com/mattlewis92/angular-calendar/issues/173
        var date;
        if (previousDate) {
            date = date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(date_fns_add_hours__WEBPACK_IMPORTED_MODULE_1___default()(previousDate, HOURS_IN_DAY));
            if (previousDate.getTime() === date.getTime()) {
                // DST change, so need to add 25 hours
                date = date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(date_fns_add_hours__WEBPACK_IMPORTED_MODULE_1___default()(previousDate, HOURS_IN_DAY + 1));
            }
            previousDate = date;
        }
        else {
            date = previousDate = start;
        }
        if (!excluded.some(function (e) { return date.getDay() === e; })) {
            var day = getWeekDay({
                date: date,
                weekendDays: weekendDays
            });
            var eventsInPeriod = getEventsInPeriod({
                events: eventsInMonth,
                periodStart: date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(date),
                periodEnd: date_fns_end_of_day__WEBPACK_IMPORTED_MODULE_7___default()(date)
            });
            day.inMonth = date_fns_is_same_month__WEBPACK_IMPORTED_MODULE_13___default()(date, viewDate);
            day.events = eventsInPeriod;
            day.badgeTotal = eventsInPeriod.length;
            initialViewDays.push(day);
        }
    };
    for (var i = 0; i < date_fns_difference_in_days__WEBPACK_IMPORTED_MODULE_4___default()(end, start) + 1; i++) {
        _loop_3(i);
    }
    var days = [];
    var totalDaysVisibleInWeek = DAYS_IN_WEEK - excluded.length;
    if (totalDaysVisibleInWeek < DAYS_IN_WEEK) {
        for (var i = 0; i < initialViewDays.length; i += totalDaysVisibleInWeek) {
            var row = initialViewDays.slice(i, i + totalDaysVisibleInWeek);
            var isRowInMonth = row.some(function (day) { return day.date.getMonth() === viewDate.getMonth(); });
            if (isRowInMonth) {
                days = days.concat(row);
            }
        }
    }
    else {
        days = initialViewDays;
    }
    var rows = Math.floor(days.length / totalDaysVisibleInWeek);
    var rowOffsets = [];
    for (var i = 0; i < rows; i++) {
        rowOffsets.push(i * totalDaysVisibleInWeek);
    }
    return {
        rowOffsets: rowOffsets,
        totalDaysVisibleInWeek: totalDaysVisibleInWeek,
        days: days,
        period: {
            start: start,
            end: end,
            events: eventsInMonth
        }
    };
}
function getDayView(_a) {
    var _b = _a.events, events = _b === void 0 ? [] : _b, viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd, eventWidth = _a.eventWidth, segmentHeight = _a.segmentHeight;
    if (!events) {
        events = [];
    }
    var startOfView = date_fns_set_minutes__WEBPACK_IMPORTED_MODULE_17___default()(date_fns_set_hours__WEBPACK_IMPORTED_MODULE_16___default()(date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = date_fns_set_minutes__WEBPACK_IMPORTED_MODULE_17___default()(date_fns_set_hours__WEBPACK_IMPORTED_MODULE_16___default()(date_fns_start_of_minute__WEBPACK_IMPORTED_MODULE_19___default()(date_fns_end_of_day__WEBPACK_IMPORTED_MODULE_7___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var previousDayEvents = [];
    var eventsInPeriod = getEventsInPeriod({
        events: events.filter(function (event) { return !event.allDay; }),
        periodStart: startOfView,
        periodEnd: endOfView
    });
    var dayViewEvents = eventsInPeriod
        .sort(function (eventA, eventB) {
        return eventA.start.valueOf() - eventB.start.valueOf();
    })
        .map(function (event) {
        var eventStart = event.start;
        var eventEnd = event.end || eventStart;
        var startsBeforeDay = eventStart < startOfView;
        var endsAfterDay = eventEnd > endOfView;
        var hourHeightModifier = hourSegments * segmentHeight / MINUTES_IN_HOUR;
        var top = 0;
        if (eventStart > startOfView) {
            top += date_fns_difference_in_minutes__WEBPACK_IMPORTED_MODULE_5___default()(eventStart, startOfView);
        }
        top *= hourHeightModifier;
        var startDate = startsBeforeDay ? startOfView : eventStart;
        var endDate = endsAfterDay ? endOfView : eventEnd;
        var height = date_fns_difference_in_minutes__WEBPACK_IMPORTED_MODULE_5___default()(endDate, startDate);
        if (!event.end) {
            height = segmentHeight;
        }
        else {
            height *= hourHeightModifier;
        }
        var bottom = top + height;
        var overlappingPreviousEvents = previousDayEvents.filter(function (previousEvent) {
            var previousEventTop = previousEvent.top;
            var previousEventBottom = previousEvent.top + previousEvent.height;
            if (top < previousEventBottom && previousEventBottom < bottom) {
                return true;
            }
            else if (previousEventTop <= top && bottom <= previousEventBottom) {
                return true;
            }
            return false;
        });
        var left = 0;
        while (overlappingPreviousEvents.some(function (previousEvent) { return previousEvent.left === left; })) {
            left += eventWidth;
        }
        var dayEvent = {
            event: event,
            height: height,
            width: eventWidth,
            top: top,
            left: left,
            startsBeforeDay: startsBeforeDay,
            endsAfterDay: endsAfterDay
        };
        if (height > 0) {
            previousDayEvents.push(dayEvent);
        }
        return dayEvent;
    })
        .filter(function (dayEvent) { return dayEvent.height > 0; });
    var width = Math.max.apply(Math, dayViewEvents.map(function (event) { return event.left + event.width; }));
    var allDayEvents = getEventsInPeriod({
        events: events.filter(function (event) { return event.allDay; }),
        periodStart: date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(startOfView),
        periodEnd: date_fns_end_of_day__WEBPACK_IMPORTED_MODULE_7___default()(endOfView)
    });
    return {
        events: dayViewEvents,
        width: width,
        allDayEvents: allDayEvents,
        period: {
            events: eventsInPeriod,
            start: startOfView,
            end: endOfView
        }
    };
}
function getDayViewHourGrid(_a) {
    var viewDate = _a.viewDate, hourSegments = _a.hourSegments, dayStart = _a.dayStart, dayEnd = _a.dayEnd;
    var hours = [];
    var startOfView = date_fns_set_minutes__WEBPACK_IMPORTED_MODULE_17___default()(date_fns_set_hours__WEBPACK_IMPORTED_MODULE_16___default()(date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(viewDate), dayStart.hour), dayStart.minute);
    var endOfView = date_fns_set_minutes__WEBPACK_IMPORTED_MODULE_17___default()(date_fns_set_hours__WEBPACK_IMPORTED_MODULE_16___default()(date_fns_start_of_minute__WEBPACK_IMPORTED_MODULE_19___default()(date_fns_end_of_day__WEBPACK_IMPORTED_MODULE_7___default()(viewDate)), dayEnd.hour), dayEnd.minute);
    var segmentDuration = MINUTES_IN_HOUR / hourSegments;
    var startOfViewDay = date_fns_start_of_day__WEBPACK_IMPORTED_MODULE_18___default()(viewDate);
    for (var i = 0; i < HOURS_IN_DAY; i++) {
        var segments = [];
        for (var j = 0; j < hourSegments; j++) {
            var date = date_fns_add_minutes__WEBPACK_IMPORTED_MODULE_2___default()(date_fns_add_hours__WEBPACK_IMPORTED_MODULE_1___default()(startOfViewDay, i), j * segmentDuration);
            if (date >= startOfView && date < endOfView) {
                segments.push({
                    date: date,
                    isStart: j === 0
                });
            }
        }
        if (segments.length > 0) {
            hours.push({ segments: segments });
        }
    }
    return hours;
}
var EventValidationErrorMessage;
(function (EventValidationErrorMessage) {
    EventValidationErrorMessage["NotArray"] = "Events must be an array";
    EventValidationErrorMessage["StartPropertyMissing"] = "Event is missing the `start` property";
    EventValidationErrorMessage["StartPropertyNotDate"] = "Event `start` property should be a javascript date object. Do `new Date(event.start)` to fix it.";
    EventValidationErrorMessage["EndPropertyNotDate"] = "Event `end` property should be a javascript date object. Do `new Date(event.end)` to fix it.";
    EventValidationErrorMessage["EndsBeforeStart"] = "Event `start` property occurs after the `end`";
})(EventValidationErrorMessage || (EventValidationErrorMessage = {}));
function validateEvents(events, log) {
    var isValid = true;
    function isError(msg, event) {
        log(msg, event);
        isValid = false;
    }
    if (!Array.isArray(events)) {
        log(EventValidationErrorMessage.NotArray, events);
        return false;
    }
    events.forEach(function (event) {
        if (!event.start) {
            isError(EventValidationErrorMessage.StartPropertyMissing, event);
        }
        else if (!date_fns_is_date__WEBPACK_IMPORTED_MODULE_11___default()(event.start)) {
            isError(EventValidationErrorMessage.StartPropertyNotDate, event);
        }
        if (event.end) {
            if (!date_fns_is_date__WEBPACK_IMPORTED_MODULE_11___default()(event.end)) {
                isError(EventValidationErrorMessage.EndPropertyNotDate, event);
            }
            if (event.start > event.end) {
                isError(EventValidationErrorMessage.EndsBeforeStart, event);
            }
        }
    });
    return isValid;
}
//# sourceMappingURL=calendar-utils.js.map

/***/ }),

/***/ "./node_modules/date-fns/add_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/add_days/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ "./node_modules/date-fns/add_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/add_hours/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "./node_modules/date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} the new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
}

module.exports = addHours


/***/ }),

/***/ "./node_modules/date-fns/add_milliseconds/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/add_milliseconds/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount) {
  var timestamp = parse(dirtyDate).getTime()
  var amount = Number(dirtyAmount)
  return new Date(timestamp + amount)
}

module.exports = addMilliseconds


/***/ }),

/***/ "./node_modules/date-fns/add_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/add_minutes/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "./node_modules/date-fns/add_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @returns {Date} the new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
}

module.exports = addMinutes


/***/ }),

/***/ "./node_modules/date-fns/add_months/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/add_months/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ "./node_modules/date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ "./node_modules/date-fns/add_seconds/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/add_seconds/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(/*! ../add_milliseconds/index.js */ "./node_modules/date-fns/add_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @returns {Date} the new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * 1000)
}

module.exports = addSeconds


/***/ }),

/***/ "./node_modules/date-fns/add_weeks/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/add_weeks/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(/*! ../add_days/index.js */ "./node_modules/date-fns/add_days/index.js")

/**
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks


/***/ }),

/***/ "./node_modules/date-fns/compare_asc/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/compare_asc/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),

/***/ "./node_modules/date-fns/difference_in_calendar_days/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_calendar_days/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ "./node_modules/date-fns/difference_in_days/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/difference_in_days/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var differenceInCalendarDays = __webpack_require__(/*! ../difference_in_calendar_days/index.js */ "./node_modules/date-fns/difference_in_calendar_days/index.js")
var compareAsc = __webpack_require__(/*! ../compare_asc/index.js */ "./node_modules/date-fns/compare_asc/index.js")

/**
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full days
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 */
function differenceInDays (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))
  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastDayNotFull)
}

module.exports = differenceInDays


/***/ }),

/***/ "./node_modules/date-fns/difference_in_milliseconds/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_milliseconds/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),

/***/ "./node_modules/date-fns/difference_in_minutes/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_minutes/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ "./node_modules/date-fns/difference_in_milliseconds/index.js")

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInMinutes


/***/ }),

/***/ "./node_modules/date-fns/difference_in_seconds/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/difference_in_seconds/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(/*! ../difference_in_milliseconds/index.js */ "./node_modules/date-fns/difference_in_milliseconds/index.js")

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),

/***/ "./node_modules/date-fns/end_of_day/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/end_of_day/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay


/***/ }),

/***/ "./node_modules/date-fns/end_of_month/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/end_of_month/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfMonth


/***/ }),

/***/ "./node_modules/date-fns/end_of_week/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/end_of_week/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek


/***/ }),

/***/ "./node_modules/date-fns/get_date/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/get_date/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate


/***/ }),

/***/ "./node_modules/date-fns/get_day/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/get_day/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),

/***/ "./node_modules/date-fns/get_days_in_month/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/get_days_in_month/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ "./node_modules/date-fns/get_iso_week/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_week/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")
var startOfISOYear = __webpack_require__(/*! ../start_of_iso_year/index.js */ "./node_modules/date-fns/start_of_iso_year/index.js")

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ "./node_modules/date-fns/get_iso_year/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/get_iso_year/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ "./node_modules/date-fns/get_month/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/get_month/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),

/***/ "./node_modules/date-fns/get_year/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/get_year/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),

/***/ "./node_modules/date-fns/is_date/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/is_date/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ "./node_modules/date-fns/is_same_day/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/is_same_day/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ "./node_modules/date-fns/is_same_month/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/is_same_month/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ "./node_modules/date-fns/is_same_second/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/is_same_second/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfSecond = __webpack_require__(/*! ../start_of_second/index.js */ "./node_modules/date-fns/start_of_second/index.js")

/**
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
function isSameSecond (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}

module.exports = isSameSecond


/***/ }),

/***/ "./node_modules/date-fns/max/index.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/max/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var latestTimestamp = Math.max.apply(null, dates)
  return new Date(latestTimestamp)
}

module.exports = max


/***/ }),

/***/ "./node_modules/date-fns/parse/index.js":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/parse/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(/*! ../is_date/index.js */ "./node_modules/date-fns/is_date/index.js")

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ "./node_modules/date-fns/set_date/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/set_date/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ "./node_modules/date-fns/set_hours/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/set_hours/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours setted
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours (dirtyDate, dirtyHours) {
  var date = parse(dirtyDate)
  var hours = Number(dirtyHours)
  date.setHours(hours)
  return date
}

module.exports = setHours


/***/ }),

/***/ "./node_modules/date-fns/set_minutes/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/set_minutes/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes setted
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes (dirtyDate, dirtyMinutes) {
  var date = parse(dirtyDate)
  var minutes = Number(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes


/***/ }),

/***/ "./node_modules/date-fns/set_month/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/set_month/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")
var getDaysInMonth = __webpack_require__(/*! ../get_days_in_month/index.js */ "./node_modules/date-fns/get_days_in_month/index.js")

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),

/***/ "./node_modules/date-fns/set_year/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/set_year/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),

/***/ "./node_modules/date-fns/start_of_day/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/start_of_day/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_week/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_week/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(/*! ../start_of_week/index.js */ "./node_modules/date-fns/start_of_week/index.js")

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ "./node_modules/date-fns/start_of_iso_year/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/start_of_iso_year/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(/*! ../get_iso_year/index.js */ "./node_modules/date-fns/get_iso_year/index.js")
var startOfISOWeek = __webpack_require__(/*! ../start_of_iso_week/index.js */ "./node_modules/date-fns/start_of_iso_week/index.js")

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ "./node_modules/date-fns/start_of_minute/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/start_of_minute/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(0, 0)
  return date
}

module.exports = startOfMinute


/***/ }),

/***/ "./node_modules/date-fns/start_of_month/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/start_of_month/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ "./node_modules/date-fns/start_of_second/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/start_of_second/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(0)
  return date
}

module.exports = startOfSecond


/***/ }),

/***/ "./node_modules/date-fns/start_of_today/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/start_of_today/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(/*! ../start_of_day/index.js */ "./node_modules/date-fns/start_of_day/index.js")

/**
 * @category Day Helpers
 * @summary Return the start of today.
 *
 * @description
 * Return the start of today.
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday () {
  return startOfDay(new Date())
}

module.exports = startOfToday


/***/ }),

/***/ "./node_modules/date-fns/start_of_week/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/start_of_week/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! ../parse/index.js */ "./node_modules/date-fns/parse/index.js")

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ "./node_modules/date-fns/sub_days/index.js":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/sub_days/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(/*! ../add_days/index.js */ "./node_modules/date-fns/add_days/index.js")

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ "./node_modules/date-fns/sub_months/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/sub_months/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(/*! ../add_months/index.js */ "./node_modules/date-fns/add_months/index.js")

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),

/***/ "./node_modules/date-fns/sub_weeks/index.js":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/sub_weeks/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var addWeeks = __webpack_require__(/*! ../add_weeks/index.js */ "./node_modules/date-fns/add_weeks/index.js")

/**
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks


/***/ }),

/***/ "./node_modules/positioning/dist/positioning.js":
/*!******************************************************!*\
  !*** ./node_modules/positioning/dist/positioning.js ***!
  \******************************************************/
/*! exports provided: Positioning, positionElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    // get the availble placements of the target element in the viewport dependeing on the host element
    Positioning.prototype.getAvailablePlacements = function (hostElement, targetElement) {
        var availablePlacements = [];
        var hostElemClientRect = hostElement.getBoundingClientRect();
        var targetElemClientRect = targetElement.getBoundingClientRect();
        var html = document.documentElement;
        var windowHeight = window.innerHeight || html.clientHeight;
        var windowWidth = window.innerWidth || html.clientWidth;
        var hostElemClientRectHorCenter = hostElemClientRect.left + hostElemClientRect.width / 2;
        var hostElemClientRectVerCenter = hostElemClientRect.top + hostElemClientRect.height / 2;
        // left: check if target width can be placed between host left and viewport start and also height of target is
        // inside viewport
        if (targetElemClientRect.width < hostElemClientRect.left) {
            // check for left only
            if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 &&
                windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'left');
            }
            // check for left-top and left-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'left', availablePlacements);
        }
        // top: target height is less than host top
        if (targetElemClientRect.height < hostElemClientRect.top) {
            if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 &&
                windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'top');
            }
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'top', availablePlacements);
        }
        // right: check if target width can be placed between host right and viewport end and also height of target is
        // inside viewport
        if (windowWidth - hostElemClientRect.right > targetElemClientRect.width) {
            // check for right only
            if (hostElemClientRectVerCenter > targetElemClientRect.height / 2 &&
                windowHeight - hostElemClientRectVerCenter > targetElemClientRect.height / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'right');
            }
            // check for right-top and right-bottom
            this.setSecondaryPlacementForLeftRight(hostElemClientRect, targetElemClientRect, 'right', availablePlacements);
        }
        // bottom: check if there is enough space between host bottom and viewport end for target height
        if (windowHeight - hostElemClientRect.bottom > targetElemClientRect.height) {
            if (hostElemClientRectHorCenter > targetElemClientRect.width / 2 &&
                windowWidth - hostElemClientRectHorCenter > targetElemClientRect.width / 2) {
                availablePlacements.splice(availablePlacements.length, 1, 'bottom');
            }
            this.setSecondaryPlacementForTopBottom(hostElemClientRect, targetElemClientRect, 'bottom', availablePlacements);
        }
        return availablePlacements;
    };
    /**
     * check if secondary placement for left and right are available i.e. left-top, left-bottom, right-top, right-bottom
     * primaryplacement: left|right
     * availablePlacementArr: array in which available placemets to be set
     */
    Positioning.prototype.setSecondaryPlacementForLeftRight = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if (targetElemClientRect.height <= hostElemClientRect.bottom) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-bottom');
        }
        if ((window.innerHeight || html.clientHeight) - hostElemClientRect.top >= targetElemClientRect.height) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-top');
        }
    };
    /**
     * check if secondary placement for top and bottom are available i.e. top-left, top-right, bottom-left, bottom-right
     * primaryplacement: top|bottom
     * availablePlacementArr: array in which available placemets to be set
     */
    Positioning.prototype.setSecondaryPlacementForTopBottom = function (hostElemClientRect, targetElemClientRect, primaryPlacement, availablePlacementArr) {
        var html = document.documentElement;
        // check for left-bottom
        if ((window.innerWidth || html.clientWidth) - hostElemClientRect.left >= targetElemClientRect.width) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-left');
        }
        if (targetElemClientRect.width <= hostElemClientRect.right) {
            availablePlacementArr.splice(availablePlacementArr.length, 1, primaryPlacement + '-right');
        }
    };
    return Positioning;
}());

var positionService = new Positioning();
/*
 * Accept the placement array and applies the appropriate placement dependent on the viewport.
 * Returns the applied placement.
 * In case of auto placement, placements are selected in order
 *   'top', 'bottom', 'left', 'right',
 *   'top-left', 'top-right',
 *   'bottom-left', 'bottom-right',
 *   'left-top', 'left-bottom',
 *   'right-top', 'right-bottom'.
 * */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var placementVals = Array.isArray(placement) ? placement : [placement];
    // replace auto placement with other placements
    var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
    if (hasAuto >= 0) {
        ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top',
            'left-bottom', 'right-top', 'right-bottom',
        ].forEach(function (obj) {
            if (placementVals.find(function (val) { return val.search('^' + obj) !== -1; }) == null) {
                placementVals.splice(hasAuto++, 1, obj);
            }
        });
    }
    // coordinates where to position
    var topVal = 0, leftVal = 0;
    var appliedPlacement;
    // get available placements
    var availablePlacements = positionService.getAvailablePlacements(hostElement, targetElement);
    var _loop_1 = function (item, index) {
        // check if passed placement is present in the available placement or otherwise apply the last placement in the
        // passed placement list
        if ((availablePlacements.find(function (val) { return val === item; }) != null) || (placementVals.length === index + 1)) {
            appliedPlacement = item;
            var pos = positionService.positionElements(hostElement, targetElement, item, appendToBody);
            topVal = pos.top;
            leftVal = pos.left;
            return "break";
        }
    };
    // iterate over all the passed placements
    for (var _i = 0, _a = toItemIndexes(placementVals); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b.item, index = _b.index;
        var state_1 = _loop_1(item, index);
        if (state_1 === "break")
            break;
    }
    targetElement.style.top = topVal + "px";
    targetElement.style.left = leftVal + "px";
    return appliedPlacement;
}
// function to get index and item of an array
function toItemIndexes(a) {
    return a.map(function (item, index) { return ({ item: item, index: index }); });
}
//# sourceMappingURL=positioning.js.map

/***/ }),

/***/ "./src/app/ai/photo/photo.component.css":
/*!**********************************************!*\
  !*** ./src/app/ai/photo/photo.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ai/photo/photo.component.html":
/*!***********************************************!*\
  !*** ./src/app/ai/photo/photo.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ai/photo/photo.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ai/photo/photo.component.ts ***!
  \*********************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoComponent = /** @class */ (function () {
    function PhotoComponent() {
    }
    PhotoComponent.prototype.ngOnInit = function () {
    };
    PhotoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! ./photo.component.html */ "./src/app/ai/photo/photo.component.html"),
            styles: [__webpack_require__(/*! ./photo.component.css */ "./src/app/ai/photo/photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/ai/sound/sound.component.css":
/*!**********************************************!*\
  !*** ./src/app/ai/sound/sound.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ai/sound/sound.component.html":
/*!***********************************************!*\
  !*** ./src/app/ai/sound/sound.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sound works!\n</p>\n"

/***/ }),

/***/ "./src/app/ai/sound/sound.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ai/sound/sound.component.ts ***!
  \*********************************************/
/*! exports provided: SoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundComponent", function() { return SoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoundComponent = /** @class */ (function () {
    function SoundComponent() {
    }
    SoundComponent.prototype.ngOnInit = function () {
    };
    SoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sound',
            template: __webpack_require__(/*! ./sound.component.html */ "./src/app/ai/sound/sound.component.html"),
            styles: [__webpack_require__(/*! ./sound.component.css */ "./src/app/ai/sound/sound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SoundComponent);
    return SoundComponent;
}());



/***/ }),

/***/ "./src/app/module/tools/tools.module.ts":
/*!**********************************************!*\
  !*** ./src/app/module/tools/tools.module.ts ***!
  \**********************************************/
/*! exports provided: ToolsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsModule", function() { return ToolsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tools_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools.routes */ "./src/app/module/tools/tools.routes.ts");
/* harmony import */ var _tools_express_express_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/express/express.component */ "./src/app/tools/express/express.component.ts");
/* harmony import */ var _song_song_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../song/song.component */ "./src/app/song/song.component.ts");
/* harmony import */ var _ai_photo_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ai/photo/photo.component */ "./src/app/ai/photo/photo.component.ts");
/* harmony import */ var _ai_sound_sound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ai/sound/sound.component */ "./src/app/ai/sound/sound.component.ts");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../note/note.component */ "./src/app/note/note.component.ts");
/* harmony import */ var _tools_weather_weather_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tools/weather/weather.component */ "./src/app/tools/weather/weather.component.ts");
/* harmony import */ var _tools_map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../tools/map/map.component */ "./src/app/tools/map/map.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var element_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! element-angular */ "./node_modules/element-angular/release/element-angular.module.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var angular2_baidu_map__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-baidu-map */ "./node_modules/angular2-baidu-map/fesm5/angular2-baidu-map.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _word_edit_word_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../word-edit/word-edit.component */ "./src/app/word-edit/word-edit.component.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/esm5/tinymce-tinymce-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var ToolsModule = /** @class */ (function () {
    function ToolsModule() {
    }
    ToolsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                /*响应式的模块*/
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tools_routes__WEBPACK_IMPORTED_MODULE_3__["ToolRoutes"]),
                /*第三方的包*/
                element_angular__WEBPACK_IMPORTED_MODULE_15__["ElModule"].forRoot(),
                angular2_baidu_map__WEBPACK_IMPORTED_MODULE_17__["BaiduMapModule"].forRoot({ ak: 'm7Q5C64s8uKmUgnCw3THgmUKcOcepQQn' }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"].forRoot(),
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_20__["EditorModule"],
                /*数据可视化库*/
                ngx_echarts__WEBPACK_IMPORTED_MODULE_16__["NgxEchartsModule"],
            ],
            declarations: [
                _tools_weather_weather_component__WEBPACK_IMPORTED_MODULE_9__["WeatherComponent"],
                _tools_map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"],
                _tools_express_express_component__WEBPACK_IMPORTED_MODULE_4__["ExpressComponent"],
                _ai_sound_sound_component__WEBPACK_IMPORTED_MODULE_7__["SoundComponent"],
                _ai_photo_photo_component__WEBPACK_IMPORTED_MODULE_6__["PhotoComponent"],
                _note_note_component__WEBPACK_IMPORTED_MODULE_8__["NoteComponent"],
                _song_song_component__WEBPACK_IMPORTED_MODULE_5__["SongComponent"],
                _word_edit_word_edit_component__WEBPACK_IMPORTED_MODULE_19__["WordEditComponent"],
            ],
            providers: [],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], ToolsModule);
    return ToolsModule;
}());



/***/ }),

/***/ "./src/app/module/tools/tools.routes.ts":
/*!**********************************************!*\
  !*** ./src/app/module/tools/tools.routes.ts ***!
  \**********************************************/
/*! exports provided: ToolRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolRoutes", function() { return ToolRoutes; });
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _tools_weather_weather_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tools/weather/weather.component */ "./src/app/tools/weather/weather.component.ts");
/* harmony import */ var _tools_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tools/map/map.component */ "./src/app/tools/map/map.component.ts");
/* harmony import */ var _tools_express_express_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tools/express/express.component */ "./src/app/tools/express/express.component.ts");
/* harmony import */ var _ai_sound_sound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ai/sound/sound.component */ "./src/app/ai/sound/sound.component.ts");
/* harmony import */ var _ai_photo_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ai/photo/photo.component */ "./src/app/ai/photo/photo.component.ts");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../note/note.component */ "./src/app/note/note.component.ts");
/* harmony import */ var _song_song_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../song/song.component */ "./src/app/song/song.component.ts");
/* harmony import */ var _serve_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../serve/login.service */ "./src/app/serve/login.service.ts");
/* harmony import */ var _word_edit_word_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../word-edit/word-edit.component */ "./src/app/word-edit/word-edit.component.ts");










var ToolRoutes = [
    {
        path: 'tools',
        component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_0__["ToolsComponent"],
        canActivate: [_serve_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]],
        children: [
            {
                path: '',
                component: _tools_weather_weather_component__WEBPACK_IMPORTED_MODULE_1__["WeatherComponent"]
            },
            {
                path: 'weather',
                component: _tools_weather_weather_component__WEBPACK_IMPORTED_MODULE_1__["WeatherComponent"]
            },
            {
                path: 'map',
                component: _tools_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]
            },
            {
                path: 'express',
                component: _tools_express_express_component__WEBPACK_IMPORTED_MODULE_3__["ExpressComponent"]
            },
        ]
    },
    {
        path: 'ai',
        component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_0__["ToolsComponent"],
        canActivate: [_serve_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]],
        children: [
            {
                path: '',
                component: _ai_sound_sound_component__WEBPACK_IMPORTED_MODULE_4__["SoundComponent"]
            },
            {
                path: 'sound',
                component: _ai_sound_sound_component__WEBPACK_IMPORTED_MODULE_4__["SoundComponent"]
            },
            {
                path: 'photo',
                component: _ai_photo_photo_component__WEBPACK_IMPORTED_MODULE_5__["PhotoComponent"]
            }
        ]
    },
    {
        path: 'note',
        component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_0__["ToolsComponent"],
        canActivate: [_serve_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]],
        children: [
            {
                path: '',
                component: _note_note_component__WEBPACK_IMPORTED_MODULE_6__["NoteComponent"]
            }
        ]
    },
    {
        path: 'song',
        component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_0__["ToolsComponent"],
        canActivate: [_serve_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]],
        children: [
            {
                path: '',
                component: _song_song_component__WEBPACK_IMPORTED_MODULE_7__["SongComponent"]
            }
        ]
    },
    {
        path: 'edit',
        component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_0__["ToolsComponent"],
        children: [
            {
                path: '',
                component: _word_edit_word_edit_component__WEBPACK_IMPORTED_MODULE_9__["WordEditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/note/note.component.css":
/*!*****************************************!*\
  !*** ./src/app/note/note.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/note/note.component.html":
/*!******************************************!*\
  !*** ./src/app/note/note.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/note/note.component.ts":
/*!****************************************!*\
  !*** ./src/app/note/note.component.ts ***!
  \****************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteComponent = /** @class */ (function () {
    function NoteComponent(/*public toastr: ToastsManager,*/ vcr) {
    }
    NoteComponent.prototype.ngOnInit = function () {
    };
    NoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-note',
            template: __webpack_require__(/*! ./note.component.html */ "./src/app/note/note.component.html"),
            styles: [__webpack_require__(/*! ./note.component.css */ "./src/app/note/note.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/serve/life.service.ts":
/*!***************************************!*\
  !*** ./src/app/serve/life.service.ts ***!
  \***************************************/
/*! exports provided: LifeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifeService", function() { return LifeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LifeService = /** @class */ (function () {
    function LifeService(http) {
        this.http = http;
    }
    /*查询天气的函数*/
    LifeService.prototype.searchWeather = function (name) {
        console.log(name);
        if (!name) {
            return;
        }
        else {
            return this.http.post('api/weather', { params: name }).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
        }
    };
    /*查询快递的函数*/
    LifeService.prototype.searchExpress = function (expressname, number) {
        if (!number && !expressname) {
            return;
        }
        else {
            return this.http.get('api/express', { params: { name: expressname, number: number } }).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
        }
    };
    LifeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], LifeService);
    return LifeService;
}());



/***/ }),

/***/ "./src/app/song/song.component.css":
/*!*****************************************!*\
  !*** ./src/app/song/song.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/song/song.component.html":
/*!******************************************!*\
  !*** ./src/app/song/song.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/song/song.component.ts":
/*!****************************************!*\
  !*** ./src/app/song/song.component.ts ***!
  \****************************************/
/*! exports provided: SongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponent", function() { return SongComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SongComponent = /** @class */ (function () {
    function SongComponent() {
    }
    SongComponent.prototype.ngOnInit = function () {
    };
    SongComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-song',
            template: __webpack_require__(/*! ./song.component.html */ "./src/app/song/song.component.html"),
            styles: [__webpack_require__(/*! ./song.component.css */ "./src/app/song/song.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SongComponent);
    return SongComponent;
}());



/***/ }),

/***/ "./src/app/tools/express/express.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tools/express/express.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#expressname {\r\n  width: 8rem;\r\n}\r\n#expressnum {\r\n  width: 16rem;\r\n}\r\n.express-desc {\r\n  line-height: 5rem;\r\n  margin-top: 5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tools/express/express.component.html":
/*!******************************************************!*\
  !*** ./src/app/tools/express/express.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <p class=\"admin-header\">快递查询</p>\n  <hr/>\n  <div class=\"container\">\n    <div class=\"row\">\n      <form [formGroup]='formModel' (ngSubmit)='submit()' novalidate>\n        <div class=\"form-row\">\n          <div class=\"col\">\n            <div class=\"col-sm-10\">\n              <input type=\"text\" formControlName=\"num\" class=\"form-control weather-input\" id=\"expressnum\"\n                     placeholder=\"请输入快递单号\">\n            </div>\n          </div>\n          <div class=\"col\">\n            <select class=\"form-control\" id=\"expressname\" formControlName=\"name\">\n              <option>邮政快递</option>\n              <option>优速快递</option>\n              <option>圆通快递</option>\n              <option>韵达快递</option>\n              <option>运通快递</option>\n              <option>中通快递</option>\n              <option>申通快递</option>\n              <option>顺丰快递</option>\n            </select>\n          </div>\n          <div class=\"col\">\n            <button type=\"submit\" class=\"btn btn-primary weather-btn\" id=\"submitRegSearch\">查找</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <!--<div class=\"container mt-5\">\n    <div class=\"row\">\n      <div class=\"align-middle\">\n      <span class=\"fa-stack fa-lg\">\n        <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\n        <span class=\"fa-stack-1x\">1</span>\n      </span>\n        <div class=\"d-inline-block\">\n          <p class=\"mb-1\">Finished</p>\n          <p class=\"position-absolute text-muted\">This is a description</p>\n        </div>\n      </div>\n      <span class=\"col border mx-3 my-auto\"></span>\n      <div class=\"align-middle\">\n      <span class=\"fa-stack fa-lg\">\n        <i class=\"fa fa-circle-thin fa-stack-2x\"></i>\n        <span class=\"fa-stack-1x\">2</span>\n      </span>\n        <div class=\"d-inline-block\">\n          <p class=\"mb-1\"><strong>In Progress</strong></p>\n          <p class=\"position-absolute text-muted\">This is a description</p>\n        </div>\n      </div>\n    </div>\n  </div>-->\n  <div class=\"express-desc\">\n  <el-steps  [active]=\"1\" [align-center]=\"true\">\n    <el-step title=\"步骤 1\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n    <el-step title=\"步骤 2\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n    <el-step title=\"步骤 3\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n    <el-step title=\"步骤 1\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n    <el-step title=\"步骤 2\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n    <el-step title=\"步骤 3\" description=\"这是一段很长很长很长的描述性文字\"></el-step>\n  </el-steps>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/tools/express/express.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tools/express/express.component.ts ***!
  \****************************************************/
/*! exports provided: ExpressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressComponent", function() { return ExpressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _serve_life_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../serve/life.service */ "./src/app/serve/life.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExpressComponent = /** @class */ (function () {
    function ExpressComponent(router, http, fb, life) {
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.life = life;
        this.expressname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.expressnum = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.formModel = this.fb.group({
            'name': this.expressname,
            'num': this.expressnum,
        });
    }
    ExpressComponent.prototype.ngOnInit = function () {
    };
    ExpressComponent.prototype.submit = function () {
        console.log(this.formModel.value);
        this.life.searchExpress((this.formModel.value).name, (this.formModel.value).num).subscribe({
            next: function (res) {
                console.log(res);
            },
            error: function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('发生错误');
            }
        });
    };
    ExpressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-express',
            template: __webpack_require__(/*! ./express.component.html */ "./src/app/tools/express/express.component.html"),
            styles: [__webpack_require__(/*! ./express.component.css */ "./src/app/tools/express/express.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _serve_life_service__WEBPACK_IMPORTED_MODULE_4__["LifeService"]])
    ], ExpressComponent);
    return ExpressComponent;
}());



/***/ }),

/***/ "./src/app/tools/map/map.component.css":
/*!*********************************************!*\
  !*** ./src/app/tools/map/map.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapsearch {\r\n  padding-top: 2rem;\r\n}\r\n#submitMapSearch {\r\n  margin-left: 3rem;\r\n}\r\n.mapsearch .citymap-input {\r\n  width: 18rem;\r\n  float: left;\r\n  margin-left: 2rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tools/map/map.component.html":
/*!**********************************************!*\
  !*** ./src/app/tools/map/map.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\r\n\r\n  <form [formGroup]='formModel' (ngSubmit)='submit()' novalidate class=\"mapsearch\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"cityname\" class=\" col-form-label\">城市</label>\r\n\r\n        <input type=\"text\" formControlName=\"city\" class=\"form-control citymap-input\" id=\"cityname\" placeholder=\"请输入城市名称\">\r\n        <button type=\"submit\" class=\"btn btn-primary weather-btn\" id=\"submitMapSearch\">查找</button>\r\n\r\n    </div>\r\n  </form>\r\n  <div style=\"height:500px;width:100%;\">\r\n    <!--百度地图的接入方式-->\r\n    <!--<baidu-map [options]=\"opts\">\r\n      <marker *ngFor=\"let marker of markers\" [point]=\"marker.point\" [options]=\"marker.options\"></marker>\r\n      <control type=\"navigation\" [options]=\"controlOpts\" (loaded)=\"controlLoaded($event)\"></control>\r\n      <control type=\"overviewmap\" [options]=\"overviewmapOpts\"></control>\r\n      <control type=\"scale\" [options]=\"scaleOpts\"></control>\r\n      <control type=\"maptype\" [options]=\"mapTypeOpts\"></control>\r\n      <control type=\"geolocation\" [options]=\"geolocationOpts\" (loaded)=\"locationMap($event)\"></control>\r\n    </baidu-map>-->\r\n    <!--高德地图的接入方式-->\r\n\r\n    <div id=\"container\" tabindex=\"0\" style=\"height: 100%; height: 100%\"></div>\r\n\r\n  </div>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/tools/map/map.component.ts":
/*!********************************************!*\
  !*** ./src/app/tools/map/map.component.ts ***!
  \********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _serve_life_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../serve/life.service */ "./src/app/serve/life.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = /** @class */ (function () {
    function MapComponent(router, http, fb, life) {
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.life = life;
        this.cityname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.formModel = this.fb.group({
            'city': this.cityname
        });
        //  /*百度地图的标记配置*/
        // /* this.markers = [
        //    {
        //      options: {
        //        icon: {
        //          imageUrl: '/assets//location.jpg',
        //          size: {
        //            height: 60,
        //            width: 50
        //          }
        //        },
        //        title: 'asdkjgaslfkjasd'
        //      },
        //      point: {
        //        lng: 120.62,   // 经度
        //        lat: 31.32,    // 纬度
        //      }
        //    },
        //    {
        //      point: {
        //        lng: 120.63,   // 经度
        //        lat: 31.32,    // 纬度
        //      }
        //    },
        //    {
        //      point: {
        //        lng: 120.63,   // 经度
        //        lat: 31.31,    // 纬度
        //      }
        //    }
        //  ];*/
        // /*百度地图的配置*/
        // /* this.opts = {
        //    centerAndZoom: {
        //      lng: 121.506191,
        //      lat: 31.245554,
        //      zoom: 15
        //    },
        //    minZoom: 3,  // 最小缩放级别的地图
        //    maxZoom: 19, // 最大缩放级别的地图
        //    enableHighResolution: true,  // 是否用高分辨率的地图，default：true
        //    enableAutoResize: true,  // 是否可以自动调整大小，default：true
        //    enableMapClick: true,  // 地图是否可以点击，default：true
        //    disableDragging: false, // 是否禁用地图拖动功能
        //    enableScrollWheelZoom: true, // 是否启用滚轮进行缩放功能
        //    disableDoubleClickZoom: false, // 是否禁用双击缩放功能
        //    enableKeyboard: true,  // 是否启用键盘移动地图功能
        //    enableInertialDragging: false,     // 是否启用惯性阻力函数
        //    enableContinuousZoom: true,  // 是否启用连续缩放功能
        //    disablePinchToZoom: false,   // 是否禁用缩放功能的缩放
        //    cursor: '',         // 设置默认的光标样式,应该遵循CSS规范
        //    draggingCursor: '', // 设置默认的拖动光标样式，应该遵循CSS规范
        //    currentCity: '潍坊市',   // 设置当前的城市
        //  };*/
        //  /*地图控制器参数*/
        //  /*this.controlOpts = {
        //    anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
        //    type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
        //  };*/
        //  /*全景图的配置参数*/
        //  /*this.overviewmapOpts = {
        //    anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
        //    isOpen: true
        //  };*/
        //  /*this.scaleOpts = {
        //    anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
        //  };*/
        //  /*地图类型的配置参数*/
        //  /*this.mapTypeOpts = {
        //    type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_HORIZONTAL
        //  };*/
        //  /*定位功能的模块*/
        //  /*this.geolocationOpts = {
        //    showAddressBar: true,
        //    enableAutoLocation : true,
        //    locationIcon: {
        //      imageUrl: '/assets//location.jpg',
        //      size: {
        //        height: 60,
        //        width: 50
        //      },
        //      imageSize: {
        //        height: 60,
        //        width: 50
        //      },
        //    }
        //  };*/
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var map = new AMap.Map('container', {
            resizeEnable: true
        });
        map.plugin([
            'AMap.Geolocation',
            'AMap.Marker',
        ], function () {
            /*定位的插件*/
            var geolocation = new AMap.Geolocation({
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0,
                convert: true,
                showButton: true,
                buttonPosition: 'LB',
                buttonOffset: new AMap.Pixel(10, 20),
                showMarker: true,
                showCircle: true,
                panToLocation: true,
                zoomToAccuracy: true //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', _this.locationSuccess); //返回定位信息
            AMap.event.addListener(geolocation, 'error', _this.locationFail);
            /*/!*地图旋转等控件*!/
            const controlBar = new AMap.ControlBar({
              position: {bottom: '10px', right: '10px'}
            });
            map.addControl(controlBar);
            /!*地图类型*!/
              const type = new AMap.MapType({
              defaultType: 0
            });
            map.addControl(type);
            /!*地图的鹰眼控件*!/
            const view = new AMap.OverView();
            map.addControl(view);*/
            var marker = new AMap.Marker({
                map: map,
                position: _this.jingwei,
                title: _this.citylocation
            });
            map.addControl(marker);
        });
    };
    /*搜索地点的触发的事件*/
    MapComponent.prototype.submit = function () {
        console.log(this.formModel.value);
    };
    /*百度地图的加载时触发的事件*/
    /* private  controlLoaded(control: BNavigationControl): void {
       console.log('control loaded', control);
     }
     /!*百度地图的定位的事件*!/
     private locationMap(event): void {
       // console.log(event.typedef);
     }*/
    MapComponent.prototype.locationSuccess = function (data) {
        console.log(data);
        this.citylocation = data.formattedAddress;
        this.jingwei = [data.position.lng, data.position.lat];
        console.log(this.jingwei);
    };
    MapComponent.prototype.locationFail = function (data) {
        console.log(data);
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/tools/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/tools/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _serve_life_service__WEBPACK_IMPORTED_MODULE_3__["LifeService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/tools/tools.component.css":
/*!*******************************************!*\
  !*** ./src/app/tools/tools.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  max-width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tools/tools.component.html":
/*!********************************************!*\
  !*** ./src/app/tools/tools.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container first-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" style=\"background-color: #20a0ff; height: 20%;\">\n      <app-header></app-header>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-2\" style=\"height: 80%;\">\n      <app-aibar></app-aibar>\n    </div>\n    <div class=\"col-md-10\" style=\"\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <div class=\"coptright\">\n      <p><span><a href=\"wwww.cnayuegongzi.xyz\">残月公子［2017］9791-758号</a><a href=\"wwww.cnayuegongzi.xyz\">沪ICP备11049082号-1</a></span></p>\n      <p>版权归Marvin所有</p>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tools/tools.component.ts":
/*!******************************************!*\
  !*** ./src/app/tools/tools.component.ts ***!
  \******************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolsComponent = /** @class */ (function () {
    function ToolsComponent() {
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    ToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.css */ "./src/app/tools/tools.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "./src/app/tools/weather/weather.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tools/weather/weather.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n#mainBody{\r\n  height:100%;\r\n}\r\n.weather-back {\r\n  background: url('body_bg.jpg');\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: 100% 100%;\r\n}\r\n.cloud{\r\n  position:absolute;\r\n  top:0px;\r\n  left:0px;\r\n  width:100%;\r\n  height:100%;\r\n  background:url('cloud.png') no-repeat;\r\n  z-index:1;\r\n  opacity:0.8;\r\n}\r\n#cloud2{\r\n  z-index:3;\r\n}\r\n#weather{\r\n  background:url('sun.png') no-repeat;\r\n  border-radius: 90px;\r\n  width: 140px;\r\n  /* height: 120px; */\r\n  position: absolute;\r\n  left: 150px;\r\n  top: 0px;\r\n  z-index: 2;\r\n}\r\n#weather img{\r\n  margin:30px -90px;\r\n}\r\ntable{\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 1;\r\n  width: 460px;\r\n  padding: 6px;\r\n  border-radius: 15px;\r\n  color: #FFF;\r\n  letter-spacing: 2px;\r\n  text-shadow: 0 2px 2px #000;\r\n  overflow: hidden;\r\n}\r\n/* thead tfoot*/\r\nthead tr{\r\n  height:160px;\r\n  /*background:#314561; !* default background for browsers without gradient support *!*/\r\n  /* css3 */\r\n /* background:-webkit-gradient(linear, 0 0, 0 30%, from(#6E7C90), to(#314561));\r\n  background:-moz-linear-gradient(#6E7C90, #314561);\r\n  background:-o-linear-gradient(#6E7C90, #314561);\r\n  background:linear-gradient(#6E7C90, #314561);*/\r\n  border-top-right-radius:10px;\r\n  border-top-left-radius:10px;\r\n\r\n}\r\ntfoot tr{\r\n  /*background:#344865;*/\r\n  height:45px;\r\n  border-bottom-right-radius:10px;\r\n  border-bottom-left-radius:10px;\r\n}\r\n/* tbody */\r\ntbody tr{\r\n  /*background:#40597D;*/\r\n  height:50px;\r\n}\r\ntbody tr.even{\r\n  /*background:#344865;*/\r\n}\r\ntbody td{\r\n  width:165px;\r\n /* border-top:4px solid #2D3D56;*/\r\n  font:22px \"黑体\";\r\n  line-height:30px;\r\n  padding:2px 10px;\r\n}\r\ntbody td img{\r\n  margin-left:50px;\r\n  width:65px;\r\n  height:45px;\r\n}\r\n/* paragram */\r\n.paraLeft{\r\n  float:left;\r\n  margin:5px 0 0 5px;\r\n}\r\n#local{\r\n  font:26px \"黑体\";\r\n  line-height:26px;\r\n  margin-top:60px;\r\n}\r\n#city{\r\n  font:18px \"黑体\";\r\n  line-height:20px;\r\n}\r\n#hour{\r\n  font:18px \"黑体\";\r\n  line-height:20px;\r\n  color:#8191A4;\r\n  letter-spacing:-1px;\r\n}\r\n#temper{\r\n  height:100px;\r\n  margin-top:60px;\r\n  float:right;\r\n  font:96px Arial, Helvetica, sans-serif;\r\n  line-height:100px;\r\n  text-align:right;\r\n  margin-left:5px;\r\n}\r\n#update{\r\n  font:18px \"黑体\";\r\n  line-height:45px;\r\n  width:auto;\r\n  height:45px;\r\n  margin:0;\r\n  float:right;\r\n  color: #FFFFFF;\r\n}\r\nspan#time1,span#time2{\r\n  font:18px Arial, Helvetica, sans-serif;\r\n  width:auto;\r\n  height:45px;\r\n  line-height:45px;\r\n  margin:0 15px;\r\n  float:right;\r\n}\r\nspan#time2{\r\n  float:left;\r\n}\r\nspan{\r\n  float:right;\r\n  width:60px;\r\n  font:bolder 32px Arial, Helvetica, sans-serif;\r\n  line-height:30px;\r\n  text-align:right;\r\n  margin-left:5px;\r\n}\r\nspan.blue{\r\n  color:#7696C1;\r\n}\r\n.searchweather {\r\n  margin-top: 2rem;\r\n}\r\n.weather-btn {\r\n  float: left;\r\n  margin-left: 2rem;\r\n}\r\n.weather-input { float: left;width: 14rem}\r\n.advice {\r\n  font-weight: 600;\r\n  font-size: 1.2rem;\r\n  color: #ff8c0c;\r\n\r\n}\r\n.weather-title {\r\n  margin-bottom: .5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tools/weather/weather.component.html":
/*!******************************************************!*\
  !*** ./src/app/tools/weather/weather.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container weather-back\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div id=\"mainBody\">\r\n        <div id=\"cloud1\" class=\"cloud\"></div>\r\n        <div id=\"cloud2\" class=\"cloud\"></div>\r\n      </div>\r\n\r\n      <div id=\"weather\"><img src=\"../../../assets/images/cloud.png\" width=\"300\"/></div>\r\n\r\n      <table cellspacing=\"0\">\r\n        <thead>\r\n        <tr>\r\n          <td style=\"border-top-left-radius:10px;\">\r\n            <div class=\"paraLeft\" id=\"local\">{{cityName}}</div>\r\n            <div class=\"paraLeft\" id=\"city\"></div>\r\n            <div class=\"paraLeft\" id=\"hour\">未来天气预报</div>\r\n          </td>\r\n          <td>&nbsp;</td>\r\n          <td style=\"border-top-right-radius:10px;\"><div id=\"temper\">6°</div></td>\r\n        </tr>\r\n        </thead>\r\n\r\n        <tbody>\r\n\r\n        <tr *ngFor=\"let Weather of futureWeather \">\r\n          <td>{{Weather ?.week}}</td>\r\n          <td>{{Weather ?.weather}}</td>\r\n          <td><span class=\"blue\">{{Weather ?.temp_night_c}}°</span><span>{{Weather.temp_day_c}}°</span></td>\r\n        </tr>\r\n        </tbody>\r\n        <tfoot>\r\n        <tr>\r\n          <td style=\"border-bottom-left-radius:10px;\">\r\n            <div class=\"paraLeft\" id=\"update\">更新于{{nowWeather ?.time | date:'HH:mm:ss'}}</div>\r\n          </td>\r\n          <td><span id=\"time1\"></span></td>\r\n          <td  style=\"border-bottom-right-radius:10px;\"><span id=\"time2\"></span></td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n    <div class=\"searchweather col-md-6\">\r\n      <form [formGroup]='formModel' (ngSubmit)='submit()' novalidate>\r\n        <div class=\"form-group row\">\r\n          <label for=\"cityname\" class=\"col-sm-2 col-form-label\">城市</label>\r\n          <div class=\"col-sm-10\">\r\n            <input type=\"text\" formControlName=\"city\" class=\"form-control weather-input\" id=\"cityname\" placeholder=\"请输入城市名称\">\r\n            <button type=\"submit\" class=\"btn btn-primary weather-btn\" id=\"submitRegSearch\">查找</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <div class=\"advice container\">\r\n        <div *ngFor=\"let item of Advice\">\r\n        <div class=\"row weather-title\">\r\n          <div class=\"col-md-12\">{{item?.name}}:{{item?.level}}</div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">{{item?.content}}</div>\r\n        </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tools/weather/weather.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tools/weather/weather.component.ts ***!
  \****************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _serve_life_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../serve/life.service */ "./src/app/serve/life.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(router, http, fb, life) {
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.life = life;
        this.cityname = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.formModel = this.fb.group({
            'city': this.cityname
        });
    }
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.life.searchWeather('潍坊').subscribe({
            next: function (res) {
                _this.dataInit(res);
                // console.log(res);
            },
            error: function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('加载失败');
            }
        });
    };
    /*页面数据渲染*/
    WeatherComponent.prototype.dataInit = function (res) {
        this.cityName = res.data.value[0].city;
        this.nowWeather = res.data.value[0].realtime;
        this.futureWeather = (res.data.value[0].weathers).slice(0, 6);
        this.environmentStatus = res.data.value[0].pm25;
        this.Advice = (res.data.value[0].indexes).slice(0, 4);
    };
    /*查询*/
    WeatherComponent.prototype.submit = function () {
        var _this = this;
        // console.log(this.formModel.value);
        this.life.searchWeather((this.formModel.value).city).subscribe({
            next: function (res) {
                _this.dataInit(res);
            },
            error: function () {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()('获取失败', '具体原因请联系管理员', 'error');
            }
        });
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/tools/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/tools/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _serve_life_service__WEBPACK_IMPORTED_MODULE_4__["LifeService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/word-edit/word-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/word-edit/word-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/word-edit/word-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/word-edit/word-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container><p class=\"admin-header\">文本编辑</p>\r\n  <hr/>\r\n\r\n\r\n  <div style=\"width: 100%; height: 200px\"\r\n  ><editor cloudChannel=\"dev\" apiKey=\"test\" [init]=\"{plugins: 'link'}\" [(ngModel)]=\"dataModel\" (onChange)=\"handleEvent($event)\"></editor></div>\r\n\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/word-edit/word-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/word-edit/word-edit.component.ts ***!
  \**************************************************/
/*! exports provided: WordEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordEditComponent", function() { return WordEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordEditComponent = /** @class */ (function () {
    function WordEditComponent() {
    }
    WordEditComponent.prototype.ngOnInit = function () {
    };
    WordEditComponent.prototype.handleEvent = function ($eventObj) {
        console.log(this.dataModel);
    };
    WordEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-word-edit',
            template: __webpack_require__(/*! ./word-edit.component.html */ "./src/app/word-edit/word-edit.component.html"),
            styles: [__webpack_require__(/*! ./word-edit.component.css */ "./src/app/word-edit/word-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WordEditComponent);
    return WordEditComponent;
}());



/***/ })

}]);
//# sourceMappingURL=module-tools-tools-module.js.map