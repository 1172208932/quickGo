/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _core_navigator_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _core_navigator_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _core_navigator_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _core_network_Client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _core_network_Request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _game_main_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(23);
/* harmony import */ var _game_main_game__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7);
/* harmony import */ var _game_modal_ConfigList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30);
/* harmony import */ var _game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* harmony import */ var _game_modal_LoginData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(27);
/* harmony import */ var _game_modal_User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(28);
/* harmony import */ var _game_service_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31);
/* harmony import */ var _game_service_TimerService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32);
/* harmony import */ var _game_view_LaunchScreenView__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33);
/* harmony import */ var _game_view_LoginMaskView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(34);
/* harmony import */ var _game_view_RoundImageView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(35);
/* harmony import */ var _laya_sound__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(18);
/* harmony import */ var _wx_manager_AuthManager__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(26);
/* harmony import */ var _wx_manager_PayManager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(29);
/* harmony import */ var _wx_manager_ShareManager__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(12);
/* harmony import */ var _wx_monitor_LifeCircleMonitor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(11);
/* harmony import */ var _wx_monitor_NetworkMonitor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9);
/* harmony import */ var _wx_Toast__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(16);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(14);
/* harmony import */ var _wx_utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(10);
/* harmony import */ var _utils_Array__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(36);
/* harmony import */ var _utils_Array__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_utils_Array__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _utils_Date__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(37);
/* harmony import */ var _utils_Date__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_utils_Date__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _utils_Number__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(38);
/* harmony import */ var _utils_Number__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_utils_Number__WEBPACK_IMPORTED_MODULE_30__);































var PaoYa = {
    NotificationCenter: _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["default"],
    NotificationName: _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["NotificationName"],
    Navigator: _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_1__["default"],
    Scene: _core_navigator_Scene__WEBPACK_IMPORTED_MODULE_2__["default"],
    View: _core_navigator_View__WEBPACK_IMPORTED_MODULE_3__["default"],
    Dialog: _core_navigator_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"],
    Client: _core_network_Client__WEBPACK_IMPORTED_MODULE_5__["default"],
    Request: _core_network_Request__WEBPACK_IMPORTED_MODULE_6__["default"],
    DataTrack: _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_7__["default"],
    DataTrackType: _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_7__["DataTrackType"],
    Main: _game_main_main__WEBPACK_IMPORTED_MODULE_8__["default"],
    Game: _game_main_game__WEBPACK_IMPORTED_MODULE_9__["default"],
    ConfigList: _game_modal_ConfigList__WEBPACK_IMPORTED_MODULE_10__["default"],
    DataCenter: _game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_11__["default"],
    PrizeType: _game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_11__["PrizeType"],
    LoginData: _game_modal_LoginData__WEBPACK_IMPORTED_MODULE_12__["default"],
    User: _game_modal_User__WEBPACK_IMPORTED_MODULE_13__["default"],
    Loader: _game_service_Loader__WEBPACK_IMPORTED_MODULE_14__["default"],
    TimerService: _game_service_TimerService__WEBPACK_IMPORTED_MODULE_15__["default"],
    SoundManager: _laya_sound__WEBPACK_IMPORTED_MODULE_19__["default"],
    LaunchScreenView: _game_view_LaunchScreenView__WEBPACK_IMPORTED_MODULE_16__["default"],
    LoginMaskView: _game_view_LoginMaskView__WEBPACK_IMPORTED_MODULE_17__["default"],
    RoundImageView: _game_view_RoundImageView__WEBPACK_IMPORTED_MODULE_18__["default"],
    AuthManager: _wx_manager_AuthManager__WEBPACK_IMPORTED_MODULE_20__["default"],
    PayManager: _wx_manager_PayManager__WEBPACK_IMPORTED_MODULE_21__["default"],
    ShareManager: _wx_manager_ShareManager__WEBPACK_IMPORTED_MODULE_22__["default"],
    LifeCircleMonitor: _wx_monitor_LifeCircleMonitor__WEBPACK_IMPORTED_MODULE_23__["default"],
    NetworkMonitor: _wx_monitor_NetworkMonitor__WEBPACK_IMPORTED_MODULE_24__["default"],
    Toast: _wx_Toast__WEBPACK_IMPORTED_MODULE_25__["default"],
    Utils: _utils_utils__WEBPACK_IMPORTED_MODULE_26__["default"],
    RectCorner: _utils_utils__WEBPACK_IMPORTED_MODULE_26__["RectCorner"],
    APIEnable: _wx_utils__WEBPACK_IMPORTED_MODULE_27__["default"]
};
window.PaoYa = PaoYa;
// export default PaoYa


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationName", function() { return NotificationName; });
var NotificationCenter = /** @class */ (function () {
    function NotificationCenter() {
    }
    NotificationCenter.defaultCenter = new Laya.EventDispatcher();
    return NotificationCenter;
}());
/* harmony default export */ __webpack_exports__["default"] = (NotificationCenter);
//要扩展NotificationName，请在const.js 中重点标明
var NotificationName = /** @class */ (function () {
    function NotificationName() {
    }
    NotificationName.ApplicationShow = 'app-show';
    NotificationName.ApplicationHide = 'app-hide';
    NotificationName.GameShow = 'game-show';
    NotificationName.NetworkChanged = 'network-changed';
    NotificationName.LoginSuccess = 'login-success';
    return NotificationName;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var Navigator = /** @class */ (function () {
    function Navigator() {
        this.scenes = [];
        this.visibleScene = null;
    }
    /**将全新的scene显示在屏幕上 */
    Navigator.prototype.push = function (scene, animated) {
        if (animated === void 0) { animated = true; }
        if (!(scene instanceof _Scene__WEBPACK_IMPORTED_MODULE_0__["default"])) {
            console.error("scene必须为Scene的子类");
        }
        var view = scene.view;
        if (!view) {
            console.error("必须设置该场景的视图，键名为view");
        }
        if (!Navigator.setupViewHandler || !Navigator.activeView || !Navigator.deactiveView) {
            console.error("必须指定view在Navigator中的初始化方式");
        }
        var sceneCount = this.scenes.length;
        if (sceneCount > 0) {
            var from = this.scenes[sceneCount - 1];
            from._viewWillDisappear();
            Navigator.deactiveView(from.view);
            from.isActive = false;
            from._viewDidDisappear();
        }
        Navigator.setupViewHandler(view);
        scene._viewWillAppear();
        scene.navigator = this;
        scene.isActive = true;
        this.scenes.push(scene);
        this.visibleScene = scene;
        scene._viewDidAppear();
    };
    /**将scene临时显示到屏幕上，不会加入到之前的栈中 */
    Navigator.prototype.show = function (scene, animated) {
        if (animated === void 0) { animated = true; }
        if (!(scene instanceof _Scene__WEBPACK_IMPORTED_MODULE_0__["default"])) {
            console.error("scene必须为Scene的子类");
        }
        var view = scene.view;
        if (!view) {
            console.error("必须设置该场景的视图，键名为view");
        }
        Navigator.setupViewHandler(view);
        scene._viewWillAppear();
        scene.navigator = this;
        scene.isActive = true;
        scene._viewDidAppear();
    };
    Navigator.prototype.dismiss = function (scene, animated) {
        if (animated === void 0) { animated = true; }
        scene._viewWillDisappear();
        Navigator.deactiveView(scene.view);
        scene.isActive = false;
        scene._viewDidDisappear();
        scene.destroy();
    };
    /**将视图推出栈*/
    Navigator.prototype.pop = function () {
        if (this.scenes.length <= 1) {
            console.error("当前只有一个scene，此时不能执行pop操作");
            return;
        }
        var from = this.visibleScene;
        from._viewWillDisappear();
        this.scenes.pop();
        from._viewDidDisappear();
        from.destroy();
        var to = this.scenes[this.scenes.length - 1];
        to._viewWillAppear();
        Navigator.activeView(to.view);
        to.isActive = true;
        to._viewDidAppear();
        this.visibleScene = to;
    };
    /** 跳到栈底的scene*/
    Navigator.prototype.popToRootScene = function () {
        if (this.scenes.length <= 1) {
            console.error("当前只有一个scene，此时不能执行popToRootScene操作");
            return;
        }
        for (var i = this.scenes.length - 1; i > 0; i--) {
            var scene = this.scenes[i];
            scene.destroy();
            this.scenes.pop();
        }
        var to = this.scenes[0];
        to._viewWillAppear();
        Navigator.activeView(to.view);
        to.isActive = true;
        to._viewDidAppear();
        this.visibleScene = to;
    };
    /**跳到指定的scene*/
    Navigator.prototype.popToScene = function (toScene) {
        var index = this.scenes.indexOf(toScene);
        if (index < 0) {
            console.error("指定的scene未包含在Navigator中");
        }
        for (var i = this.scenes.length - 1; i > index; i--) {
            var scene = this.scenes[i];
            scene.destroy();
            this.scenes.pop();
        }
        var to = toScene;
        to._viewWillAppear();
        Navigator.activeView(to.view);
        to.isActive = true;
        to._viewDidAppear();
        this.visibleScene = to;
    };
    /**在视图栈中动态替换指定的scene，实现逻辑为
     * 1、找到指定的oldScene所在的位置，并pop到她所在的位置
     * 2、用newScene替换掉它
     */
    Navigator.prototype._replaceSceneWith = function (oldScene, newScene) {
        var index = this.scenes.indexOf(oldScene);
        if (index < 0) {
            console.error("指定的scene未包含在Navigator中");
            return;
        }
        for (var i = this.scenes.length - 1; i >= index; i--) {
            var scene_1 = this.scenes[i];
            scene_1.destroy();
            this.scenes.pop();
        }
        var scene = newScene;
        Navigator.setupViewHandler(scene.view);
        scene._viewWillAppear();
        scene.navigator = this;
        scene.isActive = true;
        this.scenes.push(scene);
        this.visibleScene = scene;
        scene._viewDidAppear();
    };
    /**找到指定SceneClass的scene */
    Navigator.prototype.findSceneWithClass = function (SceneClass) {
        var desScene = null;
        for (var i = this.scenes.length - 1; i >= 0; i--) {
            var scene = this.scenes[i];
            if (scene instanceof SceneClass) {
                desScene = scene;
                break;
            }
        }
        return desScene;
    };
    Navigator.prototype.replace = function (SceneClass, newScene) {
        var scene = this.findSceneWithClass(SceneClass);
        this._replaceSceneWith(scene, newScene);
    };
    Navigator.prototype.replaceSceneWith = function (newScene) {
        var scene = this.findSceneWithClass(newScene.constructor);
        this._replaceSceneWith(scene, newScene);
    };
    return Navigator;
}());
/* harmony default export */ __webpack_exports__["default"] = (Navigator);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _network_Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _wx_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _game_main_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _wx_manager_ShareManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var BaseScene = /** @class */ (function (_super) {
    __extends(BaseScene, _super);
    function BaseScene() {
        var _this = _super.call(this) || this;
        /**当前是否活跃，直接标识了当前scene是否显示在屏幕上 */
        _this.isActive = true;
        return _this;
    }
    Object.defineProperty(BaseScene.prototype, "app", {
        get: function () {
            return _game_main_game__WEBPACK_IMPORTED_MODULE_2__["default"].ins;
        },
        enumerable: true,
        configurable: true
    });
    BaseScene.prototype._viewDidLoad = function () {
        this.event(Scene.VIEW_DID_LOAD);
    };
    BaseScene.prototype._viewWillAppear = function () {
        this.viewWillAppear();
        this.event(Scene.VIEW_WILL_APPEAR);
    };
    /**view显示完成时调用 */
    BaseScene.prototype._viewDidAppear = function () {
        this.viewDidAppear();
        this.event(Scene.VIEW_DID_APPEAR);
    };
    /**view将要消失时调用 */
    BaseScene.prototype._viewWillDisappear = function () {
        this.viewWillDisappear();
        this.event(Scene.VIEW_WILL_DISAPPEAR);
    };
    /**view完全消失时调用 */
    BaseScene.prototype._viewDidDisappear = function () {
        this.viewDidDisappear();
        this.event(Scene.VIEW_DID_DISAPPEAR);
    };
    BaseScene.prototype._onViewClick = function (event) {
        switch (event.target.name) {
            case 'pop':
                this.navigator.pop();
                break;
            case 'popToRoot':
                this.navigator.popToRootScene();
                break;
        }
        this.onViewClick(event);
    };
    /**当 scene 中的 view 点击时触发，该方法为虚方法 */
    BaseScene.prototype.onViewClick = function (event) {
    };
    /**view加载完成时调用 */
    BaseScene.prototype.viewDidLoad = function () { };
    /**view将要显示时调用 */
    BaseScene.prototype.viewWillAppear = function () { };
    /**view显示完成时调用 */
    BaseScene.prototype.viewDidAppear = function () { };
    /**view将要消失时调用 */
    BaseScene.prototype.viewWillDisappear = function () { };
    /**view完全消失时调用 */
    BaseScene.prototype.viewDidDisappear = function () { };
    /**Scene销毁时调用 */
    BaseScene.prototype.destroy = function () {
        this.event(Scene.WILL_DESTROY);
        if (!Scene.destroyHandler) {
            console.error('必须指定Scene.destroyHandler');
        }
        Scene.destroyHandler(this);
        /**这里需要做判断，为了解决没有view的scene用作service的情况，这个坑需要注意 */
        // if (this.view) {
        // var child = this.view._childs[0];
        //child == fairygui.GRoot.inst.displayObject
        // if ((typeof fairygui != 'undefined') && Laya.Component && (child instanceof Laya.Component)) {
        //     this.view.dispose();
        // } else {
        //     this.view.destroy(true);
        // }
        // if (this.view instanceof Laya.Sprite) {
        //     if (this.view.parent) {
        //         this.view.removeSelf();
        //     }
        //     this.view.destroy(true)
        // } else {
        //     this.view.dispose()
        // }
        // }
        this.offAll();
        Laya.timer.clearAll(this);
        this.navigator = null;
        this.isActive = false;
        this._view = null;
        if (Object(_wx_utils__WEBPACK_IMPORTED_MODULE_1__["default"])('triggerGC')) {
            wx.triggerGC();
        }
    };
    BaseScene.VIEW_DID_LOAD = 'VIEW_DID_LOAD';
    BaseScene.VIEW_WILL_APPEAR = 'VIEW_WILL_APPEAR';
    BaseScene.VIEW_DID_APPEAR = 'VIEW_DID_APPEAR';
    BaseScene.VIEW_WILL_DISAPPEAR = 'VIEW_WILL_DISAPPEAR';
    BaseScene.VIEW_DID_DISAPPEAR = 'VIEW_DID_DISAPPEAR';
    BaseScene.WILL_DESTROY = 'WILL_DESTROY';
    return BaseScene;
}(Laya.EventDispatcher));
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        var _this = _super.call(this) || this;
        _this._requests = [];
        _this._messages = [];
        _this.cmds = [];
        return _this;
    }
    Object.defineProperty(Scene.prototype, "view", {
        get: function () {
            return this._view;
        },
        set: function (v) {
            this._view = v;
            var prototype = Scene.prototype;
            if (this.onViewClick !== prototype.onViewClick) {
                v.on(Laya.Event.CLICK, this, this._onViewClick);
            }
            v.owner = this;
            if (!v._getBit(0x08)){
                this._viewDidLoad()
            } else {
                v.on('onViewCreated', this, this._viewDidLoad);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**GET请求 */
    Scene.prototype.GET = function (path, params, suc, fail) {
        if (fail === void 0) { fail = null; }
        var xmr = _network_Request__WEBPACK_IMPORTED_MODULE_0__["default"].GET(path, params, suc, fail);
        this._requests.push(xmr);
    };
    /**POST请求 */
    Scene.prototype.POST = function (path, params, suc, fail) {
        if (fail === void 0) { fail = null; }
        var xmr = _network_Request__WEBPACK_IMPORTED_MODULE_0__["default"].POST(path, params, suc, fail);
        this._requests.push(xmr);
    };
    Scene.prototype.sendMessage = function (cmd, params) {
        this.app.socket.sendMessage(cmd, params);
    };
    /**
     * Socket监听服务器推送消息
     * @warn 这里是可以省略掉caller的，因为caller一般都是指代this
    */
    Scene.prototype.onMessage = function (cmd, caller, listener) {
        if (!_game_main_game__WEBPACK_IMPORTED_MODULE_2__["default"].ins.socket) {
            console.error("socket 没有初始化");
        }
        this._messages.push({ cmd: cmd, caller: caller, listener: listener });
        _game_main_game__WEBPACK_IMPORTED_MODULE_2__["default"].ins.socket.on(cmd, caller, listener);
    };
    Scene.prototype._viewDidLoad = function () {
        this._view._setSceneInComponents(this);
        _super.prototype._viewDidLoad();
        this.viewDidLoad();
    };
    Scene.prototype._onSocketMessage = function (cmd, value, code, message) {
        this.onSocketMessage(cmd, value, code, message);
    };
    /**当前 scene 收到服务器 socket 命令时触发，这是一个空方法，子类可以直接覆盖 */
    Scene.prototype.onSocketMessage = function (cmd, value, code, message) {
    };
    Scene.prototype._onShow = function (res) {
        this.onShow(res);
    };
    Scene.prototype._onHide = function (res) {
        this.onHide(res);
    };
    /**进入前台时执行，由游戏事件分发主动调用 */
    Scene.prototype.onShow = function (res) {
    };
    /**进入后台时执行，由游戏事件分发主动调用 */
    Scene.prototype.onHide = function (res) {
    };
    /**点击右上角转发时触发 */
    Scene.prototype.onShareAppMessage = function () {
        return null;
    };
    /**当网络变化时调用 */
    Scene.prototype.onNetworkChange = function () {
    };
    /**销毁时调用 */
    Scene.prototype.destroy = function () {
        if (this._requests.length > 0) {
            for (var i = this._requests.length - 1; i >= 0; i--) {
                var xmr = this._requests.pop();
                if (xmr.http.readyState != XMLHttpRequest.DONE) {
                    xmr.http.abort && xmr.http.abort();
                }
            }
        }
        if (this._messages.length > 0) {
            for (var i = this._messages.length - 1; i >= 0; i--) {
                var item = this._messages.pop();
                this.app.socket.off(item.cmd, item.caller, item.listener);
            }
        }
        this._requests = null;
        this._messages = null;
        _super.prototype.destroy.call(this);
        this.onDestroy();
    };
    /**分享主要方法，需要传入所有参数 */
    Scene.prototype.share = function (title, image, query, success, fail) {
        _wx_manager_ShareManager__WEBPACK_IMPORTED_MODULE_3__["default"].share(title, image, query, success, fail);
    };
    /**分享方法，可以不用传入图片，图片将从 ShareManager.imageURL 获取 */
    Scene.prototype.shareTitle = function (title, query, success, fail) {
        _wx_manager_ShareManager__WEBPACK_IMPORTED_MODULE_3__["default"].shareTitle(title, query, success, fail);
    };
    Scene.prototype.onDestroy = function () {
    };
    return Scene;
}(BaseScene));
/* harmony default export */ __webpack_exports__["default"] = (Scene);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestConfig", function() { return RequestConfig; });
/* harmony import */ var _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RequestConfig = /** @class */ (function () {
    function RequestConfig() {
    }
    RequestConfig.baseURL = "";
    RequestConfig.token = "";
    RequestConfig.headers = ["Content-Type", "application/x-www-form-urlencoded"];
    RequestConfig.maxRetryTimes = 3;
    return RequestConfig;
}());

var Request = /** @class */ (function (_super) {
    __extends(Request, _super);
    function Request() {
        var _this_1 = _super.call(this) || this;
        _this_1._retryTimes = 0;
        var _this = _this_1;
        _this_1.http.ontimeout = function (e) {
            _this.timeout(e);
        };
        return _this_1;
    }
    Request.prototype.sendRequest = function (path, params, method) {
        if (!RequestConfig.baseURL) {
            console.error("请指定baseURL");
            return;
        }
        this._path = path;
        if (RequestConfig.makeParamsHandler) {
            params = RequestConfig.makeParamsHandler(params);
        }
        if (window.navigator.userAgent.indexOf('Mobile') > -1) {
            console.log("R >>> | " + path + " | " + (params['wxparams'] || JSON.stringify(params)));
        }
        else {
            console.log("%c R >>> ", "background:#f3f8f1;color:#9d2932", path + " | " + params['wxparams'] || JSON.stringify(params));
        }
        var items = [];
        for (var key in params) {
            items.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
        }
        var result = items.join("&");
        var url = RequestConfig.baseURL + path;
        if (method == 'get') {
            url += "?" + result;
        }
        this.$url = url;
        this.$query = result;
        this.$method = method;
        this.send(url, result, method, null, RequestConfig.headers);
    };
    /**发送GET请求 */
    Request.prototype.GET = function (path, params) {
        this.sendRequest(path, params, 'get');
    };
    /**发送POST请求 */
    Request.prototype.POST = function (path, params) {
        this.sendRequest(path, params, 'post');
    };
    /**重写父类的complete方法 */
    Request.prototype.complete = function () {
        if (window.navigator.userAgent.indexOf('Mobile') > -1) {
            console.log("R <<< | " + this._path + " | " + this.http.responseText);
        }
        else {
            console.log("%c R <<< | ", "background:#f3f8f1;color:#9d2932", this._path, '| ', this.http.responseText);
        }
        _super.prototype.complete.call(this);
    };
    /**重写父类的complete方法 */
    Request.prototype.error = function (message) {
        _super.prototype.error.call(this, message);
        // let status = this.http.status
        // if (this._retryTimes < RequestConfig.maxRetryTimes) {
        //     this._retryTimes++
        //     DataTrack.track(DataTrackType.HTTPRetry,{c:this.$url,t:this._retryTimes})
        //     setTimeout(function () {
        //         this.send(this.$url, this.$query, this.$method, null, RequestConfig.headers);
        //     }.bind(this), 500)
        // } else {
        //     super.error(message)
        // }
    };
    Request.prototype.timeout = function (message) {
        if (this._retryTimes < RequestConfig.maxRetryTimes) {
            this._retryTimes++;
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_0__["default"].track(_dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_0__["DataTrackType"].HTTPRetry, { c: this.$url, t: this._retryTimes });
            setTimeout(function () {
                this.send(this.$url, this.$query, this.$method, null, RequestConfig.headers);
            }.bind(this), 500);
        }
        else {
            this.error(message);
        }
    };
    /**类方法进行GET请求 */
    Request.GET = function (path, params, suc, fail) {
        var _this_1 = this;
        if (fail === void 0) { fail = null; }
        var xmr = new Request();
        xmr.on(Laya.Event.COMPLETE, this, function (data) {
            _this_1.handleError(data, suc, fail);
        });
        xmr.on(Laya.Event.ERROR, this, function (res) {
            fail && fail.call(_this_1, res || "连接服务器失败");
        });
        xmr.GET(path, params);
        return xmr;
    };
    /**类方法进行POST请求 */
    Request.POST = function (path, params, suc, fail) {
        var _this_1 = this;
        if (fail === void 0) { fail = null; }
        var xmr = new Request();
        xmr.on(Laya.Event.COMPLETE, this, function (data) {
            _this_1.handleError(data, suc, fail);
        });
        xmr.on(Laya.Event.ERROR, this, function (res) {
            fail && fail.call(_this_1, res || "连接服务器失败");
        });
        xmr.POST(path, params);
        return xmr;
    };
    Request.handleError = function (data, suc, fail) {
        data = JSON.parse(data);
        var code = data.code;
        if (code == 200) {
            suc && suc.call(this, data.value);
        }
        else {
            fail && fail.call(this, data.message || "请求出现错误", (data.errorcode ? data.errorcode : code));
        }
    };
    return Request;
}(Laya.HttpRequest));
/* harmony default export */ __webpack_exports__["default"] = (Request);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTrackType", function() { return DataTrackType; });
/* harmony import */ var _mta_analysis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _core_network_Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _game_main_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



var DataTrack = /** @class */ (function () {
    function DataTrack() {
    }
    DataTrack.setup = function (appID, eventID, options) {
        if (appID === void 0) { appID = "500624773"; }
        if (eventID === void 0) { eventID = "500624774"; }
        _mta_analysis__WEBPACK_IMPORTED_MODULE_0__["default"].App.init({
            "appID": appID,
            "eventID": eventID,
            "lauchOpts": options
        });
    };
    DataTrack.track = function (type, params) {
        if (!params.gameId && _game_main_game__WEBPACK_IMPORTED_MODULE_2__["default"].ins && _game_main_game__WEBPACK_IMPORTED_MODULE_2__["default"].ins.gameId) {
            params.gameId = _game_main_game__WEBPACK_IMPORTED_MODULE_2__["default"].ins.gameId;
        }
        if (params.data) {
            var value = JSON.parse(params.data);
            value.T = _game_main_game__WEBPACK_IMPORTED_MODULE_2__["default"].ins.networkMonitor.type;
            params.data = JSON.stringify(value);
        }
        console.log("T | upload | " + JSON.stringify(params));
        _mta_analysis__WEBPACK_IMPORTED_MODULE_0__["default"].Event.stat(type + '', params);
    };
    DataTrack.trackType = function (type) {
        _core_network_Request__WEBPACK_IMPORTED_MODULE_1__["default"].POST('userStatistics', { type: type }, null);
    };
    DataTrack.now = function () {
        return new Date().valueOf();
    };
    DataTrack.startTrackTime = function (id) {
        this.loginCostTime[id] = DataTrack.now();
    };
    DataTrack.stopTrackTime = function (id) {
        var time = this.loginCostTime[id];
        var delta = DataTrack.now() - time;
        this.loginCostTime[id] = delta;
        console.warn("T | " + id + " | cost | " + delta + " ms");
    };
    DataTrack.startSocketTime = function () {
        this.socketCostTime = DataTrack.now();
    };
    DataTrack.stopSocketTime = function () {
        var time = DataTrack.now() - this.socketCostTime;
        console.warn("T | Socket | cost | " + time + "ms");
        this.track(DataTrackType.SocketTimeCost, {
            data: JSON.stringify({
                t: time
            })
        });
    };
    DataTrack.startSocketLogin = function () {
        this.socketLoginTime = DataTrack.now();
    };
    DataTrack.stopSocketLogin = function () {
        var time = DataTrack.now() - this.socketLoginTime;
        console.warn("T | Socket login | cost | " + time + "ms");
        this.track(DataTrackType.SocketLoginTimeCost, { data: JSON.stringify({ t: time }) });
    };
    DataTrack.uploadLoginCostTime = function () {
        var upload = JSON.stringify(this.loginCostTime);
        console.log("T | login | upload | " + upload);
        this.track(DataTrackType.LoginTimeCost, { data: upload });
    };
    DataTrack.loginCostTime = {};
    DataTrack.socketCostTime = 0;
    DataTrack.socketLoginTime = 0;
    return DataTrack;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataTrack);
var DataTrackType;
(function (DataTrackType) {
    DataTrackType[DataTrackType["LoginTimeCost"] = 3001] = "LoginTimeCost";
    DataTrackType[DataTrackType["SocketTimeCost"] = 3002] = "SocketTimeCost";
    DataTrackType[DataTrackType["SocketLoginTimeCost"] = 3003] = "SocketLoginTimeCost";
    DataTrackType[DataTrackType["SocketRetry"] = 3004] = "SocketRetry";
    DataTrackType[DataTrackType["HTTPRetry"] = 3005] = "HTTPRetry";
    DataTrackType[DataTrackType["Ladder"] = 1001] = "Ladder";
    DataTrackType[DataTrackType["FriendBattle"] = 1002] = "FriendBattle";
    DataTrackType[DataTrackType["RedPacket"] = 1003] = "RedPacket";
    DataTrackType[DataTrackType["PlayOffline"] = 1004] = "PlayOffline";
    DataTrackType[DataTrackType["Rank"] = 1004] = "Rank";
    DataTrackType[DataTrackType["HallBack"] = 1006] = "HallBack";
    DataTrackType[DataTrackType["WithDraw"] = 1007] = "WithDraw";
    DataTrackType[DataTrackType["Jump"] = 1008] = "Jump";
    DataTrackType[DataTrackType["Change"] = 1009] = "Change"; //换换手气
})(DataTrackType || (DataTrackType = {}));


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MTA_CONFIG = {
  app_id: "",
  event_id: "",
  api_base: "https://pingtas.qq.com/pingd",
  prefix: "_mta_",
  version: "1.3.5",
  stat_share_app: !1,
  stat_pull_down_fresh: !1,
  stat_reach_bottom: !1
};

function getNetworkType(a) {
  wx.getNetworkType({
    success: function (b) {
      a(b.networkType)
    }
  })
}

function getSystemInfo() {
  var a = wx.getSystemInfoSync();
  return {
    adt: encodeURIComponent(a.model),
    scl: a.pixelRatio,
    scr: a.windowWidth + "x" + a.windowHeight,
    lg: a.language,
    fl: a.version,
    jv: encodeURIComponent(a.system),
    tz: encodeURIComponent(a.platform)
  }
}

function getUID() {
  try {
    return wx.getStorageSync(MTA_CONFIG.prefix + "auid")
  } catch (a) {}
}

function setUID() {
  try {
    var a = getRandom();
    wx.setStorageSync(MTA_CONFIG.prefix + "auid", a);
    return a
  } catch (b) {}
}

function getSID() {
  try {
    return wx.getStorageSync(MTA_CONFIG.prefix + "ssid")
  } catch (a) {}
}

function setSID() {
  try {
    var a = "s" + getRandom();
    wx.setStorageSync(MTA_CONFIG.prefix + "ssid", a);
    return a
  } catch (b) {}
}

function getRandom(a) {
  for (var b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], c = 10; 1 < c; c--) {
    var d = Math.floor(10 * Math.random()),
      e = b[d];
    b[d] = b[c - 1];
    b[c - 1] = e
  }
  for (c = d = 0; 5 > c; c++) d = 10 * d + b[c];
  return (a || "") + (d + "" + +new Date)
}

function getPagePath() {
  try {
    var a = getCurrentPages(),
      b = "/";
    0 < a.length && (b = a.pop().__route__);
    return b
  } catch (c) {
    console.log("get current page path error:" + c)
  }
}

function getMainInfo() {
  var a = {
    dm: "wechat.apps.xx",
    url: getPagePath(),
    pvi: "",
    si: "",
    ty: 0
  };
  a.pvi = function () {
    var b = getUID();
    b || (b = setUID(), a.ty = 1);
    return b
  }();
  a.si = function () {
    var a = getSID();
    a || (a = setSID());
    return a
  }();
  return a
}

function getBasicInfo() {
  var a = getSystemInfo();
  getNetworkType(function (a) {
    try {
      wx.setStorageSync(MTA_CONFIG.prefix + "ntdata", a)
    } catch (c) {}
  });
  a.ct = wx.getStorageSync(MTA_CONFIG.prefix + "ntdata") || "4g";
  return a
}

function getExtentInfo() {
  var a = MTA.Data.userInfo;
  var b = [],
    c;
  for (c in a) a.hasOwnProperty(c) && b.push(c + "=" + a[c]);
  a = b.join(";");
  return {
    r2: MTA_CONFIG.app_id,
    r4: "wx",
    ext: "v=" + MTA_CONFIG.version + (null !== a && "" !== a ? ";ui=" + encodeURIComponent(a) : "")
  }
}
var MTA = {
  App: {
    init: function (a) {
      "appID" in a && (MTA_CONFIG.app_id = a.appID);
      "eventID" in a && (MTA_CONFIG.event_id = a.eventID);
      "statShareApp" in a && (MTA_CONFIG.stat_share_app = a.statShareApp);
      "statPullDownFresh" in a && (MTA_CONFIG.stat_pull_down_fresh = a.statPullDownFresh);
      "statReachBottom" in a && (MTA_CONFIG.stat_reach_bottom = a.statReachBottom);
      setSID();
      "lauchOpts" in a && (MTA.Data.lanchInfo = a.lauchOpts, MTA.Data.lanchInfo.landing = 1)
    }
  },
  Page: {
    init: function () {
      var a = getCurrentPages()[getCurrentPages().length - 1];
      a.onShow &&
        ! function () {
          var b = a.onShow;
          a.onShow = function () {
            MTA.Page.stat();
            b.call(this, arguments)
          }
        }();
      MTA_CONFIG.stat_pull_down_fresh && a.onPullDownRefresh && ! function () {
        var b = a.onPullDownRefresh;
        a.onPullDownRefresh = function () {
          MTA.Event.stat(MTA_CONFIG.prefix + "pulldownfresh", {
            url: a.__route__
          });
          b.call(this, arguments)
        }
      }();
      MTA_CONFIG.stat_reach_bottom && a.onReachBottom && ! function () {
        var b = a.onReachBottom;
        a.onReachBottom = function () {
          MTA.Event.stat(MTA_CONFIG.prefix + "reachbottom", {
            url: a.__route__
          });
          b.call(this, arguments)
        }
      }();
      MTA_CONFIG.stat_share_app && a.onShareAppMessage && ! function () {
        var b = a.onShareAppMessage;
        a.onShareAppMessage = function () {
          MTA.Event.stat(MTA_CONFIG.prefix + "shareapp", {
            url: a.__route__
          });
          return b.call(this, arguments)
        }
      }()
    },
    stat: function () {
      if ("" != MTA_CONFIG.app_id) {
        var a = [],
          b = getExtentInfo(),
          c = [getMainInfo(), b, getBasicInfo()];
        MTA.Data.lanchInfo && (c.push({
            ht: MTA.Data.lanchInfo.scene,
            rdm: "/",
            rurl: MTA.Data.lanchInfo.path
          }), MTA.Data.lanchInfo.query && MTA.Data.lanchInfo.query._mta_ref_id && c.push({
            rarg: MTA.Data.lanchInfo.query._mta_ref_id
          }),
          1 == MTA.Data.lanchInfo.landing && (b.ext += ";lp=1", MTA.Data.lanchInfo.landing = 0));
        c.push({
          rand: +new Date
        });
        b = 0;
        for (var d = c.length; b < d; b++)
          for (var e in c[b]) c[b].hasOwnProperty(e) && a.push(e + "=" + ("undefined" == typeof c[b][e] ? "" : c[b][e]));
        wx.request({
          url: MTA_CONFIG.api_base + "?" + a.join("&").toLowerCase()
        })
      }
    }
  },
  Event: {
    stat: function (a, b) {
      if ("" != MTA_CONFIG.event_id) {
        var c = [],
          d = getMainInfo(),
          e = getExtentInfo();
        d.dm = "wxapps.click";
        d.url = a;
        e.r2 = MTA_CONFIG.event_id;
        var f = "undefined" === typeof b ? {} : b;
        var k = [],
          g;
        for (g in f) f.hasOwnProperty(g) &&
          k.push(encodeURIComponent(g) + "=" + encodeURIComponent(f[g]));
        f = k.join(";");
        e.r5 = f;
        f = 0;
        d = [d, e, getBasicInfo(), {
          rand: +new Date
        }];
        for (e = d.length; f < e; f++)
          for (var h in d[f]) d[f].hasOwnProperty(h) && c.push(h + "=" + ("undefined" == typeof d[f][h] ? "" : d[f][h]));
        wx.request({
          url: MTA_CONFIG.api_base + "?" + c.join("&").toLowerCase()
        })
      }
    }
  },
  Data: {
    userInfo: null,
    lanchInfo: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MTA);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _laya_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _wx_wx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _modal_DataCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(params) {
        var _this = _super.call(this) || this;
        _this.params = params;
        /**当前游戏的ID */
        _this.gameId = 1001;
        /**是否已登录 */
        _this.isLogined = false;
        /**已经授权访问用户信息，只在登录之前有用，登录之后该值不再起作用 */
        _this.isAuthed = false;
        _this.params.debug = _this.params.debug || false;
        _this._initLaya();
        _this._setupConfig();
        _this._initSoundManager();
        return _this;
    }
    /**初始化Laya引擎，子类可重写此方法，实现自己的界面展示 */
    Game.prototype._initLaya = function () {
        var width = this.params.width || 750;
        var height = this.params.height || 1334;
        var config = this.params;
        if (window['Laya3D']) {
            Laya3D.init(width, height);
        }
        else {
            Laya.init(width, height, config.webGL || Laya.WebGL);
        }
        Laya["Physics"] && Laya["Physics"].enable();
        //显示当前调试状态
        if (this.params.debug) {
            config.showStat && Laya.Stat.show();
            (config.showDebugTool || Laya.Utils.getQueryString('debug') == 'true') && Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya["PhysicsDebugDraw"] && Laya["PhysicsDebugDraw"].enable();
            Laya.alertGlobalError = true;
        }
        //屏幕适配相关
        var stage = Laya.stage;
        var Stage = Laya.Stage;
        stage.scaleMode = config.scaleMode || Stage.SCALE_FIXED_WIDTH;
        stage.alignH = config.alignH || Stage.ALIGN_CENTER;
        stage.alignV = config.alignV || Stage.ALIGN_MIDDLE;
        // stage.screenMode = Stage.SCREEN_VERTICAL;
        // stage.frameRate = Stage.FRAME_MOUSE;
        var sprite = new Laya.Sprite();
        var Browser = Laya.Browser;
        sprite.graphics.drawRect(0, 0, Browser.width, Browser.height, "#000000");
        stage.addChild(sprite);
    };
    Game.prototype._setupConfig = function () {
        var _this = this;
        Laya.loader.retryNum = 3;
        Laya.loader.retryDelay = 2000;
        Laya.loader.maxLoader = 8;
        Laya.URL.formatURL = function (url) {
            if (url.indexOf('wxlocal') >= 0 || url.indexOf('http') >= 0) {
                return url;
            }
            var tmp = url.split('.')[0];
            if (_this.resInclude) {
                if (_this.resInclude.length) {
                    if (_this.resInclude.indexOf(tmp) >= 0) {
                        return _modal_DataCenter__WEBPACK_IMPORTED_MODULE_3__["default"].CDNURL + url;
                    }
                }
                else {
                    return _modal_DataCenter__WEBPACK_IMPORTED_MODULE_3__["default"].CDNURL + url;
                }
            }
            else if (_this.resExclude) {
                if (_this.resExclude.length) {
                    if (_this.resExclude.indexOf(tmp) < 0) {
                        return _modal_DataCenter__WEBPACK_IMPORTED_MODULE_3__["default"].CDNURL + url;
                    }
                }
                else {
                    return url;
                }
            }
            return url;
        };
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = true;
    };
    Game.prototype._initSoundManager = function () {
        _laya_sound__WEBPACK_IMPORTED_MODULE_1__["default"].onAudioInterruptionBeginHandler && _wx_wx__WEBPACK_IMPORTED_MODULE_2__["default"].onAudioInterruptionBegin(_laya_sound__WEBPACK_IMPORTED_MODULE_1__["default"].onAudioInterruptionBeginHandler);
        _laya_sound__WEBPACK_IMPORTED_MODULE_1__["default"].onAudioInterruptionEndHandler && _wx_wx__WEBPACK_IMPORTED_MODULE_2__["default"].onAudioInterruptionEnd(_laya_sound__WEBPACK_IMPORTED_MODULE_1__["default"].onAudioInterruptionEndHandler);
    };
    Game.prototype._onShow = function (res) {
        _laya_sound__WEBPACK_IMPORTED_MODULE_1__["default"].onShowHandler && _laya_sound__WEBPACK_IMPORTED_MODULE_1__["default"].onShowHandler();
        _super.prototype._onShow.call(this, res);
    };
    Game.prototype._onHide = function (res) {
        _laya_sound__WEBPACK_IMPORTED_MODULE_1__["default"].onHideHandler && _laya_sound__WEBPACK_IMPORTED_MODULE_1__["default"].onHideHandler();
        _super.prototype._onHide.call(this, res);
    };
    return Game;
}(_app__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _wx_monitor_NetworkMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _wx_monitor_LifeCircleMonitor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _wx_manager_ShareManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _wx_manager_UpdateManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _wx_Toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _wx_wx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _wx_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var Application = /** @class */ (function (_super) {
    __extends(Application, _super);
    function Application() {
        var _this = _super.call(this) || this;
        _this._init();
        if (Object(_wx_utils__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
            _this.launchOption = _wx_wx__WEBPACK_IMPORTED_MODULE_6__["default"].getLaunchOptionsSync();
            console.warn("LAUNCH | " + JSON.stringify(_this.launchOption));
            _this._initWeChat();
            _this._checkUpdate();
        }
        return _this;
    }
    Application.prototype._init = function () {
        //初始化导航控制器
        this.navigator = new _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.networkMonitor = new _wx_monitor_NetworkMonitor__WEBPACK_IMPORTED_MODULE_1__["default"]();
        var lifeCircleMonitor = this.lifeCircleMonitor = new _wx_monitor_LifeCircleMonitor__WEBPACK_IMPORTED_MODULE_2__["default"]();
        lifeCircleMonitor.on(_wx_monitor_LifeCircleMonitor__WEBPACK_IMPORTED_MODULE_2__["default"].SHOW, this, this._onShow);
        lifeCircleMonitor.on(_wx_monitor_LifeCircleMonitor__WEBPACK_IMPORTED_MODULE_2__["default"].HIDE, this, this._onHide);
        lifeCircleMonitor.startMonitor();
    };
    Application.prototype._initWeChat = function () {
        var _this = this;
        /**转发 */
        _wx_manager_ShareManager__WEBPACK_IMPORTED_MODULE_3__["default"].updateShareMenu();
        _wx_manager_ShareManager__WEBPACK_IMPORTED_MODULE_3__["default"].showShareMenu();
        _wx_wx__WEBPACK_IMPORTED_MODULE_6__["default"].onShareAppMessage(function () {
            var scene = _this.navigator.visibleScene;
            var msg = scene.onShareAppMessage();
            if (msg) {
                return msg;
            }
            else {
                return _this.onShareAppMessage();
            }
        });
        _wx_wx__WEBPACK_IMPORTED_MODULE_6__["default"].setKeepScreenOn({
            keepScreenOn: true
        });
    };
    Application.prototype._checkUpdate = function () {
        var manager = new _wx_manager_UpdateManager__WEBPACK_IMPORTED_MODULE_4__["default"]();
        manager.on(_wx_manager_UpdateManager__WEBPACK_IMPORTED_MODULE_4__["default"].HAS_UPDATE, this, function () {
        });
        manager.on(_wx_manager_UpdateManager__WEBPACK_IMPORTED_MODULE_4__["default"].UPDATE_READY, this, function (cb) {
            _wx_Toast__WEBPACK_IMPORTED_MODULE_5__["default"].showModal("提示", "新版本下载成功", "重启", function () {
                cb && cb();
            });
        });
        manager.on(_wx_manager_UpdateManager__WEBPACK_IMPORTED_MODULE_4__["default"].UPDATE_FAIL, this, function () {
        });
    };
    Application.prototype._onShow = function (res) {
        this.launchOption = res;
        if (!this.networkMonitor.isConnected) {
            _wx_Toast__WEBPACK_IMPORTED_MODULE_5__["default"].showModal("提示", "网络已断开，请检查您的网络");
            return;
        }
        this.onShow(res);
    };
    Application.prototype._onHide = function (res) {
        this.onHide(res);
    };
    /**返回用户【转发】消息 */
    Application.prototype.onShareAppMessage = function () {
        return null;
    };
    Application.prototype.onShow = function (res) {
    };
    Application.prototype.onHide = function (res) {
    };
    /**退出当前小游戏 */
    Application.prototype.exit = function () {
        _wx_wx__WEBPACK_IMPORTED_MODULE_6__["default"].exitMiniProgram({});
    };
    return Application;
}(Laya.EventDispatcher));
/* harmony default export */ __webpack_exports__["default"] = (Application);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var NetworkMonitor = /** @class */ (function (_super) {
    __extends(NetworkMonitor, _super);
    function NetworkMonitor() {
        var _this = _super.call(this) || this;
        /**当前网络是否连接 */
        _this.isConnected = true;
        _this.isWIFI = true;
        _this.type = '';
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
            console.warn('只有在微信环境下才能启用NetworkMonitor');
            return _this;
        }
        _this.getCurrentType(function (type) {
            _this.isConnected = (type != 'unknown' || type != 'none');
            _this.isWIFI = type === 'wifi';
            _this.type = type;
        });
        _this.startMonitor();
        return _this;
    }
    /**启用网络监听 */
    NetworkMonitor.prototype.startMonitor = function () {
        var _this = this;
        wx.onNetworkStatusChange(function (res) {
            _this.isWIFI = res.networkType === 'wifi';
            _this.type = res.networkType;
            _this.isConnected = res.isConnected;
            console.log("NETWORK | change | " + JSON.stringify(res));
            _this.event(NetworkMonitor.NETWORK_CHANGE, res);
            _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["default"].defaultCenter.event(_base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["NotificationName"].NetworkChanged, res);
        });
    };
    /**停止网络监听 */
    NetworkMonitor.prototype.stopMonitor = function () {
        wx.offNetworkStatusChange();
    };
    /**获取当前网络状态 */
    NetworkMonitor.prototype.getCurrentType = function (cb) {
        wx.getNetworkType({
            success: function (res) {
                console.log("NETWORK | type | " + JSON.stringify(res));
                cb && cb(res.networkType);
            },
            fail: function () { },
            complete: function () { }
        });
    };
    NetworkMonitor.NETWORK_CHANGE = 'NetworkMonitor.network.change';
    return NetworkMonitor;
}(Laya.EventDispatcher));
/* harmony default export */ __webpack_exports__["default"] = (NetworkMonitor);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function APIEnable(method) {
    if (typeof wx == 'undefined') {
        return false;
    }
    if (method)
        return wx[method];
    return true;
}
/* harmony default export */ __webpack_exports__["default"] = (APIEnable);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LifeCircleMonitor = /** @class */ (function (_super) {
    __extends(LifeCircleMonitor, _super);
    function LifeCircleMonitor() {
        var _this = _super.call(this) || this;
        /**是否在前台 */
        _this.inForeground = false;
        _this.ignoreFirstTime = true;
        return _this;
    }
    /**生命周期监听开始 */
    LifeCircleMonitor.prototype.startMonitor = function () {
        var _this = this;
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
            console.warn('只有在微信环境下才能启用LifeCircleMonitor');
            return;
        }
        wx.onShow(function (res) {
            if (_this.ignoreFirstTime) {
                _this.ignoreFirstTime = false;
                return;
            }
            console.log("SHOW | " + JSON.stringify(res));
            _this.inForeground = true;
            _this.event(LifeCircleMonitor.SHOW, res);
            _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["default"].defaultCenter.event(_base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["NotificationName"].ApplicationShow, res);
        });
        wx.onHide(function (res) {
            //{mode:back}  {mode:close}
            console.log("HIDE | " + JSON.stringify(res));
            _this.inForeground = false;
            _this.event(LifeCircleMonitor.HIDE, res);
            _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["default"].defaultCenter.event(_base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["NotificationName"].ApplicationHide, res);
        });
    };
    /**生命周期监听结束 */
    LifeCircleMonitor.prototype.stopMonitor = function () {
        wx.offShow();
        wx.offHide();
    };
    LifeCircleMonitor.SHOW = 'app.on.show';
    LifeCircleMonitor.HIDE = 'app.on.hide';
    LifeCircleMonitor.OFF_SHOW = 'app.off.show';
    LifeCircleMonitor.OFF_HIDE = 'app.off.hide';
    return LifeCircleMonitor;
}(Laya.EventDispatcher));
/* harmony default export */ __webpack_exports__["default"] = (LifeCircleMonitor);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

var ShareManager = /** @class */ (function () {
    function ShareManager() {
    }
    /**组织分享 */
    ShareManager.makeShareInfo = function (title, image, query, success, fail) {
        if (image === void 0) { image = this.imageURL; }
        if (fail === void 0) { fail = null; }
        if (this.makeQueryHandler) {
            query = this.makeQueryHandler(query);
        }
        return {
            title: title,
            imageUrl: image,
            query: toQueryString(query),
            success: success,
            fail: function () {
                fail && fail();
            }
        };
    };
    /**分享主要方法，需要传入所有参数 */
    ShareManager.share = function (title, image, query, success, fail) {
        var _this = this;
        if (fail === void 0) { fail = null; }
        if (!image && !this.imageURL) {
            console.error("必须指定分享图片地址，建议使用ShareManager.imageURL全局设置统一分享图片");
            return;
        }
        _game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_0__["default"].isShare = true;
        wx.shareAppMessage(this.makeShareInfo(title, image, query, function (res) {
            console.warn("SHARE | " + JSON.stringify(res));
            var isGroup = res.shareTickets && res.shareTickets.length > 0;
            if (isGroup && _this.checkGroup) {
                var shareTicket = res.shareTickets[0];
                _this.getShareInfo(shareTicket, function (encryptedData, iv) {
                    success && success(isGroup, encryptedData, iv);
                }, function () {
                    fail && fail();
                });
            }
            else {
                success && success(isGroup);
            }
        }, fail));
    };
    /**分享方法，可以不用传入图片，图片将从 ShareManager.imageURL 获取 */
    ShareManager.shareTitle = function (title, query, success, fail) {
        if (fail === void 0) { fail = null; }
        if (!this.imageURL) {
            console.error("必须指定 ShareManager.imageURL 才可执行此方法");
        }
        this.share(title, this.imageURL, query, success, fail);
    };
    /**获取分享内容 */
    ShareManager.getShareInfo = function (shareTicket, suc, fail) {
        wx.getShareInfo({
            shareTicket: shareTicket,
            success: function (res) {
                console.log("SHARE | getShareInfo | " + JSON.stringify(res));
                suc && suc(res);
            },
            fail: fail,
            complete: function () { }
        });
    };
    /**显示当前页面的转发按钮 */
    ShareManager.showShareMenu = function (withShareTicket) {
        if (withShareTicket === void 0) { withShareTicket = true; }
        wx.showShareMenu({
            withShareTicket: withShareTicket,
            success: function () { },
            fail: function () { },
            complete: function () { }
        });
    };
    /**隐藏转发按钮 */
    ShareManager.hideShareMenu = function () {
        wx.hideShareMenu({
            success: function () { },
            fail: function () { },
            complete: function () { }
        });
    };
    /**更新转发属性 */
    ShareManager.updateShareMenu = function (withShareTicket) {
        if (withShareTicket === void 0) { withShareTicket = true; }
        wx.updateShareMenu({
            withShareTicket: withShareTicket,
            success: function () { },
            fail: function () { },
            complete: function () { }
        });
    };
    /**是否验证群ID */
    ShareManager.checkGroup = false;
    return ShareManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (ShareManager);
function toQueryString(params) {
    var items = [], queryStr = "";
    for (var key in params) {
        items.push(key + "=" + params[key]);
    }
    if (items.length) {
        queryStr = items.join("&");
    }
    return queryStr;
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrizeType", function() { return PrizeType; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);

var PrizeType;
(function (PrizeType) {
    PrizeType[PrizeType["Gold"] = 1] = "Gold";
    PrizeType[PrizeType["Money"] = 2] = "Money";
})(PrizeType || (PrizeType = {}));
var DataCenter = /** @class */ (function () {
    function DataCenter() {
    }
    /**通过天梯ID获取天梯 */
    DataCenter.findLadderById = function (id) {
        var result = this.config.game.ladder_config.filter(function (item) {
            return item.id == id;
        });
        return result[0];
    };
    DataCenter.makeLadderIconById = function (id) {
        var ladder = "";
        var ladderItem = this.findLadderById(id);
        if (ladderItem) {
            ladder = _utils_utils__WEBPACK_IMPORTED_MODULE_0__["default"].makeIcon(ladderItem.icon);
        }
        return ladder;
    };
    DataCenter.formatPrize = function (prize) {
        var allPrize = prize.split(",");
        if (allPrize.length == 0) {
            return;
        }
        var prizes = [];
        allPrize.forEach(function (item, index) {
            var prizeInfo = item.split("-");
            if (prizeInfo && prizeInfo.length == 2) {
                prizes.push({
                    type: prizeInfo[0],
                    value: prizeInfo[1]
                });
            }
        });
        return prizes;
    };
    DataCenter.CDNURL = 'https://res.xingqiu123.com/';
    return DataCenter;
}());
/* harmony default export */ __webpack_exports__["default"] = (DataCenter);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectCorner", function() { return RectCorner; });
/* harmony import */ var _game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);

var RectCorner;
(function (RectCorner) {
    RectCorner[RectCorner["RectCornerTopLeft"] = 1] = "RectCornerTopLeft";
    RectCorner[RectCorner["RectCornerTopRight"] = 2] = "RectCornerTopRight";
    RectCorner[RectCorner["RectCornerBottomLeft"] = 4] = "RectCornerBottomLeft";
    RectCorner[RectCorner["RectCornerBottomRight"] = 8] = "RectCornerBottomRight";
    RectCorner[RectCorner["RectCornerAllCorners"] = 15] = "RectCornerAllCorners";
})(RectCorner || (RectCorner = {}));
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
    * 便捷生成图片数组，主要用于名称连续的图片
    * @param {用来组织图片的格式,用%i占位} format
    * @param {开始索引} start
    * @param {结束索引} end
    */
    Utils.makeImagesWithFormat = function (format, start, end) {
        var images = [];
        for (var i = start; i < end; i++) {
            images.push(format.replace("%i", String(i)));
        }
        return images;
    };
    Utils.toQueryString = function (params) {
        var items = [], queryStr = "";
        for (var key in params) {
            items.push(key + "=" + params[key]);
        }
        if (items.length) {
            queryStr = items.join("&");
        }
        return queryStr;
    };
    Utils.makeGenderIcon = function (gender) {
        var icon = "wxlocal/Common/gay-white.png";
        if (gender == "男") {
            icon = "wxlocal/Common/boy-white.png";
        }
        else if (gender == "女") {
            icon = "wxlocal/Common/girl-white.png";
        }
        // switch (gender) {
        //     case "男":
        //         icon = "wxlocal/Common/boy-white.png"
        //         break
        //     case "女":
        //         icon = "wxlocal/Common/boy-white.png"
        //         break
        //     default:
        //         icon = "wxlocal/Common/gay-white.png"
        //         break
        // }
        return icon;
    };
    Utils.findUserByID = function (users, id) {
        var result = users.filter(function (user, index) {
            return user.user_id && (user.user_id == id);
        });
        if (result.length) {
            return result[0];
        }
        console.error('');
        return null;
    };
    //圆角矩形
    Utils.makeRoundRectPath = function (width, height, r, corner) {
        var path = [];
        if (corner & RectCorner.RectCornerTopLeft) {
            path.push(["moveTo", r, 0]);
        }
        else {
            path.push(["moveTo", 0, 0]);
        }
        if (corner & RectCorner.RectCornerTopRight) {
            path.push(["lineTo", width - r, 0]);
            path.push(["arcTo", width, 0, width, r, r]);
        }
        else {
            path.push(["lineTo", width, 0]);
        }
        if (corner & RectCorner.RectCornerBottomRight) {
            path.push(["lineTo", width, height - r]);
            path.push(["arcTo", width, height, width - r, height, r]);
        }
        else {
            path.push(["lineTo", width, height]);
        }
        if (corner & RectCorner.RectCornerBottomLeft) {
            path.push(["lineTo", r, height]);
            path.push(["arcTo", 0, height, 0, height - r, r]);
        }
        else {
            path.push(["lineTo", 0, height]);
        }
        if (corner & RectCorner.RectCornerTopLeft) {
            path.push(["lineTo", 0, r]);
            path.push(["arcTo", 0, 0, r, 0, r]);
        }
        else {
            path.push(["lineTo", 0, 0]);
        }
        path.push(["closePath"]);
        return path;
    };
    Utils.makeAllCornerRoundRectPath = function (w, h, r) {
        return this.makeRoundRectPath(w, h, r, RectCorner.RectCornerAllCorners);
    };
    /**用于保留指定长度的字符串，其余用...表示 */
    Utils.formatName = function (name, length) {
        if (length === void 0) { length = 10; }
        var r = /[^\x00-\xff]/g;
        if (name.replace(r, "mm").length <= length) {
            return name + "";
        }
        var m = Math.floor(length / 2);
        for (var i = m; i < name.length; i++) {
            if (name.substring(0, i).replace(r, "mm").length >= length) {
                return name.substring(0, i) + "...";
            }
        }
        return name + "";
    };
    /**只用于显示用户头像 */
    Utils.makeIcon = function (icon, width) {
        if (width === void 0) { width = 96; }
        if (icon == "") {
            return "wxlocal/Common/avstar.png";
        }
        if (icon.indexOf('http') === 0) {
            var items = icon.split("/") || [];
            if (items.length > 1) {
                var str = items[items.length - 1];
                if (str === "0") {
                    items[items.length - 1] = width > 100 ? "132" : "96";
                }
                return items.join('/');
            }
            return icon + "";
        }
        else {
            if (_game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_0__["default"].CDNURL) {
                console.error('you must assign value to [PaoYa.DataCenter.CDNURL]');
                return;
            }
            return _game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_0__["default"].CDNURL + icon + "?imageView2/0/w/" + width;
        }
    };
    /**用于完全拼接用户的头像地址 */
    Utils.makeResourceURL = function (url) {
        if (url == "") {
            return "wxlocal/Common/avstar.png";
        }
        if (url.indexOf('https') === 0) {
            return url + "";
        }
        else {
            if (_game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_0__["default"].CDNURL) {
                console.error('you must assign value to [PaoYa.DataCenter.CDNURL]');
                return;
            }
            return _game_modal_DataCenter__WEBPACK_IMPORTED_MODULE_0__["default"].CDNURL + this;
        }
    };
    /** 计算文字宽度 */
    Utils.measureWidth = function (text) {
        var measureResult = Laya.Utils.measureText(text, 'Arial');
        return measureResult.width;
    };
    return Utils;
}());
/* harmony default export */ __webpack_exports__["default"] = (Utils);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UpdateManager = /** @class */ (function (_super) {
    __extends(UpdateManager, _super);
    function UpdateManager() {
        var _this = _super.call(this) || this;
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('getUpdateManager')) {
            return _this;
        }
        var updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            console.warn("\u5F53\u524D | " + (res.hasUpdate ? "有" : "无") + " | \u65B0\u7248\u672C");
            if (res.hasUpdate) {
                _this.event(UpdateManager.HAS_UPDATE);
            }
        });
        updateManager.onUpdateReady(function () {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            function cb() {
                updateManager.applyUpdate();
            }
            _this.event(UpdateManager.UPDATE_READY, cb);
        });
        updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            _this.event(UpdateManager.UPDATE_FAIL);
        });
        return _this;
    }
    UpdateManager.HAS_UPDATE = "HAS_UPDATE";
    UpdateManager.UPDATE_READY = "UPDATE_READY";
    UpdateManager.UPDATE_FAIL = "UPDATE_FAIL";
    return UpdateManager;
}(Laya.EventDispatcher));
/* harmony default export */ __webpack_exports__["default"] = (UpdateManager);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

var Toast = /** @class */ (function () {
    function Toast() {
    }
    /**
    * 1. icon默认是"success"
    * 2. icon 和 image 同时存在只会有一个生效，image的优先级高于icon，不管什么情况下都会有图片的，这个是取消不了的
    * 3. icon为null、undefined、""或者任何字符串，结果都为"success"
    * 4. duration是毫秒级
    * 5. 多次重复调用，只有最新调用的生效
    */
    Toast.show = function (title, icon, image, duration) {
        if (image === void 0) { image = null; }
        if (duration === void 0) { duration = 1500; }
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
            console.warn("Toast | title:" + title + " | icon:" + icon + " | image:" + image);
            return;
        }
        var params = {
            title: title,
            icon: icon,
            image: image,
            duration: duration,
            mask: false,
            success: function () { },
            fail: function () { },
            complete: function () { }
        };
        wx.showToast(params);
    };
    Toast.hide = function () {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
            console.warn("Toast | hide");
            return;
        }
        wx.hideToast();
    };
    Toast.showSuccess = function (title, duration) {
        if (duration === void 0) { duration = 1500; }
        this.show(title, null, 'https://res.xingqiu123.com/wxgame/common/success.png', duration);
    };
    Toast.showError = function (title, duration) {
        if (duration === void 0) { duration = 1500; }
        this.show(title, null, 'https://res.xingqiu123.com/wxgame/common/error.png', duration);
    };
    Toast.showWarn = function (title, duration) {
        if (duration === void 0) { duration = 1500; }
        this.show(title, null, 'https://res.xingqiu123.com/wxgame/common/warning.png', duration);
    };
    Toast.showImage = function (image, duration) {
        if (duration === void 0) { duration = 1500; }
        this.show(null, null, image, duration);
    };
    /**
     * 显示loading提示层
     * @param  title
     * @param  mask 是否显示透明蒙层，也就是避免用户点击
     */
    Toast.showLoading = function (title, mask) {
        if (title === void 0) { title = ''; }
        if (mask === void 0) { mask = true; }
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
            console.warn("Toast | showLoading");
            return;
        }
        wx.showLoading({
            title: title,
            mask: mask,
            success: function () { },
            fail: function () { },
            complete: function () { }
        });
    };
    Toast.hideLoading = function () {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
            console.warn("Toast | hideLoading");
            return;
        }
        wx.hideLoading();
    };
    Toast.showModal = function (title, content, confirmText, confirmCallback, cancelText, cancelCallback) {
        if (title === void 0) { title = '提示'; }
        if (content === void 0) { content = ''; }
        if (confirmText === void 0) { confirmText = '知道了'; }
        if (confirmCallback === void 0) { confirmCallback = null; }
        if (cancelText === void 0) { cancelText = ""; }
        if (cancelCallback === void 0) { cancelCallback = null; }
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
            return;
        }
        var params = {
            title: title,
            content: content,
            showCancel: cancelText ? true : false,
            cancelColor: '#000000',
            confirmColor: '#3cc51f',
            cancelText: cancelText,
            confirmText: confirmText,
            success: function (res) {
                if (res.confirm) {
                    confirmCallback && confirmCallback();
                }
                if (res.cancel) {
                    cancelCallback && cancelCallback();
                }
            },
            fail: function () { },
            complete: function () { }
        };
        wx.showModal(params);
    };
    return Toast;
}());
/* harmony default export */ __webpack_exports__["default"] = (Toast);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

var WeChatWrapper = /** @class */ (function () {
    function WeChatWrapper() {
    }
    WeChatWrapper.exitMiniProgram = function (params) {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('exitMiniProgram')) {
            return;
        }
        wx.exitMiniProgram(params);
    };
    WeChatWrapper.onShareAppMessage = function (func) {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('onShareAppMessage')) {
            return;
        }
        wx.onShareAppMessage(func);
    };
    WeChatWrapper.getLaunchOptionsSync = function () {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('getLaunchOptionsSync')) {
            return null;
        }
        return wx.getLaunchOptionsSync();
    };
    WeChatWrapper.setKeepScreenOn = function (params) {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('setKeepScreenOn')) {
            return;
        }
        wx.setKeepScreenOn(params);
    };
    WeChatWrapper.onAudioInterruptionBegin = function (func) {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('onAudioInterruptionBegin')) {
            return;
        }
        wx.onAudioInterruptionBegin(func);
    };
    WeChatWrapper.onAudioInterruptionEnd = function (func) {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["default"])('onAudioInterruptionEnd')) {
            return;
        }
        wx.onAudioInterruptionEnd(func);
    };
    return WeChatWrapper;
}());
/* harmony default export */ __webpack_exports__["default"] = (WeChatWrapper);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SoundManager = /** @class */ (function (_super) {
    __extends(SoundManager, _super);
    function SoundManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SoundManager;
}(Laya.SoundManager));
/* harmony default export */ __webpack_exports__["default"] = (SoundManager);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = /** @class */ (function (_super) {
    __extends(View, _super);
    function View() {
        var _this = _super.call(this) || this;
        _this._$createView();
        _this._$addEventListener();
        return _this;
    }
    View.prototype._$createView = function () {
        var _this = this;
        var url = this.url || this.getSceneUrl();
        var type = Laya.Utils.getFileExtension(url);
        type || (url += '.json');
        Laya.loader.resetProgress();
        var loader = new Laya.SceneLoader();
        loader.on(Laya.Event.COMPLETE, null, function () {
            var obj = Laya.Loader.getRes(url);
            if (!obj)
                throw "Can not find scene:" + url;
            if (!_this._getBit(/*laya.Const.NOT_READY*/ 0x08))
                console.warn('Scene has been Ready!!!');
            else {
                // _this.on("onViewCreated", _this, function () {
                //     console.warn("Scene has been Created");
                //     _this.event('onViewReady');
                // });
                _this.createView(obj);
            }
        });
        loader.load(url);
    };
    View.prototype._$addEventListener = function () {
        var prototype = View.prototype;
        if (this.onClick !== prototype.onClick) {
            this.on(Laya.Event.CLICK, this, this._onClick);
        }
    };
    View.prototype._setSceneInComponents = function (scene) {
        var components = this['_components'];
        if (components) {
            for (var i = 0, n = components.length; i < n; i++) {
                var item = components[i];
                if (item instanceof Laya.Script) {
                    item['scene'] = scene;
                }
            }
        }
    };
    View.prototype._onClick = function (e) {
        this.onClick(e);
    };
    View.prototype.onClick = function (e) {
    };
    View.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        // Laya.Scene.gc()
        this.owner = null;
        var proto = Laya.Scene.prototype || Laya.View.prototype;
        if (proto) {
            this.onDestroy();
        }
    };
    /**当 view destroy 时调用，该方法为虚方法 */
    View.prototype.onDestroy = function () {
    };
    View.prototype.getSceneUrl = function () {
        console.error('必须在当前View中增加getSceneUrl方法');
        return "";
    };
    return View;
}(Laya.View));
/* harmony default export */ __webpack_exports__["default"] = (View);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super.call(this) || this;
        _this._$createView();
        return _this;
    }
    Dialog.prototype._onViewReady = function () {
        this.onViewReady();
    };
    Dialog.prototype.onViewReady = function () {
    };
    Dialog.prototype._$createView = function () {
        var _this = this;
        var url = this.url || this.getSceneUrl();
        var type = Laya.Utils.getFileExtension(url);
        type || (url += '.json');
        Laya.loader.resetProgress();
        var loader = new Laya.SceneLoader();
        loader.on(Laya.Event.COMPLETE, null, function () {
            var obj = Laya.Loader.getRes(url);
            if (!obj)
                throw "Can not find dialog:" + url;
            if (!_this._getBit(/*laya.Const.NOT_READY*/ 0x08))
                console.warn('Dialog has been Ready!!!');
            else {
                _this.on("onViewCreated", _this, function () {
                    console.warn("Dialog has been Created");
                    _this._onViewReady();
                });
                _this.createView(obj);
            }
        });
        loader.load(url);
    };
    Dialog.prototype.getSceneUrl = function () {
        console.error('必须在当前Dialog中增加getSceneUrl方法');
        return "";
    };
    return Dialog;
}(Laya.Dialog));
/* harmony default export */ __webpack_exports__["default"] = (Dialog);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientConfig", function() { return ClientConfig; });
/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _wx_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _game_main_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ClientConfig = /** @class */ (function () {
    function ClientConfig() {
    }
    ClientConfig.watchDogTime = 5;
    ClientConfig.maxRetryTime = 3;
    return ClientConfig;
}());

var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client(url) {
        var _this = _super.call(this, url) || this;
        _this.msgsSending = [];
        _this.msgsSent = [];
        _this.map = {};
        _this.on(Client.LOGIN, _this, _this.onLogin);
        return _this;
    }
    /**发送socket消息 */
    Client.prototype.sendMessage = function (cmd, params) {
        if (!params.game_id && _game_main_game__WEBPACK_IMPORTED_MODULE_3__["default"].ins) {
            params.game_id = _game_main_game__WEBPACK_IMPORTED_MODULE_3__["default"].ins.gameId;
        }
        params.command = cmd;
        var time = (new Date()).valueOf();
        params.m_id = time;
        if (this.map[time] == undefined) {
            this.map[time] = 0;
        }
        else {
            this.map[time] = this.map[time]++;
        }
        var msg = JSON.stringify(params);
        if (window.navigator.userAgent.indexOf('Mobile') > -1) {
            console.log("S >>>");
            console.log(msg.toString());
        }
        else {
            console.log("%c S >>> ", "background:#f3f8f1;color:#177cb0", cmd, " | ", msg.toString());
        }
        if (this.connected) {
            this.send(msg);
            var shouldCheck = true;
            var cmds = Client.ignoreCmds;
            for (var i = 0; i < cmds.length; i++) {
                var command = cmds[i];
                if (cmd === command) {
                    shouldCheck = false;
                    break;
                }
            }
            cmds = Client._ignoreCmds;
            for (var i = 0; i < cmds.length; i++) {
                var command = cmds[i];
                if (cmd === command) {
                    shouldCheck = false;
                    break;
                }
            }
            if (shouldCheck) {
                this.msgsSent.push(msg);
            }
        }
        else {
            this.msgsSending.push(msg);
            if (!this.isReconnecting) {
                this._startReconnect();
            }
            console.warn("缓存socket命令，等待连接成功后再次发送");
        }
    };
    /**处理socket消息 */
    Client.prototype.handleMessage = function (msg) {
        _super.prototype.handleMessage.call(this, msg);
        var obj = JSON.parse(msg);
        var cmd = obj.command;
        var value = obj.value;
        var code = obj.code;
        var message = obj.message || "请求出错";
        if (code != 200) {
            obj.errorcode && (code = obj.errorcode);
            console.error(message);
        }
        this.event(cmd, [value, code, message]);
        //将事件分发给当前可见的Scene
        var scene = _game_main_game__WEBPACK_IMPORTED_MODULE_3__["default"].ins.navigator.visibleScene;
        if (scene) {
            scene._onSocketMessage(cmd, value, code, message);
        }
        //remove item
        this.removeMsg(obj);
    };
    Client.prototype.onLogin = function () {
        var _this = this;
        console.log("S: | sending | msgs: " + this.msgsSending.length + "\u4E2A");
        this.msgsSending.forEach(function (msg) {
            _this.send(msg);
        });
        // let msg = this.msgsSending.shift()
        // msg && this.send(msg)
        this.msgsSending.length = 0;
        this.startWatchDog();
        this.startHeartBeat();
    };
    Client.prototype.startWatchDog = function () {
        Laya.timer.loop(ClientConfig.watchDogTime, this, this.checkCmd);
    };
    Client.prototype.stopWatchDog = function () {
        //测试是否需要清空历史命令
        this.msgsSent.length = 0;
        Laya.timer.clear(this, this.checkCmd);
    };
    Client.prototype.checkCmd = function () {
        var _this = this;
        var currentTimestamp = (new Date()).valueOf();
        this.msgsSent.forEach(function (item, index) {
            var msg = JSON.parse(item);
            if (msg.m_id && (currentTimestamp - msg.m_id > 5 * 1000)) {
                if (msg.retryTime < ClientConfig.maxRetryTime) {
                    //resend msg
                    _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_2__["default"].track(_dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_2__["DataTrackType"].SocketRetry, { c: msg.command, t: msg.retryTime });
                    _this.sendMessage(msg.command, msg);
                }
                else {
                    _this.event(msg.command, [{}, -1, '请求超时']);
                    console.warn("\u547D\u4EE4 " + msg.command + " \u8BF7\u6C42\u8D85\u65F6");
                }
                //remove item
                _this.removeMsg(msg);
            }
        });
    };
    Client.prototype.removeMsg = function (msg) {
        for (var i = 0; i < this.msgsSent.length; i++) {
            var item = JSON.parse(this.msgsSent[i]);
            if (item.m_id == msg.m_id) {
                this.msgsSent.splice(i, 1);
                delete this.map[item.m_id];
            }
        }
    };
    Client.prototype._onClose = function (e) {
        _super.prototype._onClose.call(this, e);
        this.stopHeartBeat();
        this.stopWatchDog();
    };
    Client.prototype.startHeartBeat = function () {
        Laya.timer.loop(15000, this, this.handleHeartBeat);
    };
    Client.prototype.stopHeartBeat = function () {
        Laya.timer.clear(this, this.handleHeartBeat);
    };
    Client.prototype.handleHeartBeat = function () {
        this.sendMessage(Client.HEART_BEAT, {});
    };
    /**子类重写 */
    Client.prototype.onReconnecting = function (cur, total) {
        _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].showLoading("\u8FDE\u63A5\u4E2D(" + cur + "/" + total + ")", true);
    };
    Client.prototype.onReconnectStart = function () {
        this.stopHeartBeat();
        _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].showLoading("正在连接...");
    };
    Client.prototype.onReconnectEnd = function () {
        _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].showSuccess("连接成功", 1500);
    };
    Client.prototype.onReconnectFail = function () {
        _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].showSuccess("连接失败", 1500);
    };
    Client.ignoreCmds = [];
    Client._ignoreCmds = ['betpk', 'startmatch',
        'joinmatch', 'cancelmatch',
        'matchagain', 'cancelagain',
        'promotionenroll', 'cancelenroll',
        'laddermatch', 'cancelladdermatch', 'demandpk'];
    //通用命令
    Client.HEART_BEAT = "heartbeat";
    Client.DISCONNECT = "disconnect";
    Client.LEAVE_ROOM = 'leave_room';
    Client.LOGIN = 'login';
    //匹配
    Client.MATCH_SUCCESS = "matchsuccess";
    Client.MATCH_FAIL = "matchfail";
    Client.MATCH_JOIN = "joinmatch";
    Client.MATCH_CANCEL = "cancelmatch";
    //天梯
    Client.LADDER_MATCH_JOIN = "laddermatch";
    Client.LADDER_MATCH_CANCEL = "cancelladdermatch";
    //游戏阶段
    Client.GAME_START_MATCH = 'startmatch';
    Client.GAME_START_GAME = 'startpkgame';
    Client.GAME_START_PK = 'startpk';
    Client.GAME_BET = 'betpk';
    Client.GAME_END_PK = 'endpk';
    Client.GAME_END_PKGAME = 'endpkgame';
    //再来一局
    Client.AGIAN_SEND = 'matchagain';
    Client.AGAIN_REJECT = 'matchreject';
    Client.AGAIN_CANCAL = 'cancelagain';
    //赛事
    Client.CHAMPIONSHIP_JION = 'promotionenroll';
    Client.CHAMPIONSHIP_CANCEL = 'cancelenroll';
    Client.CHAMPIONSHIP_UPDATE_ROOM_COUNT = 'updateCount';
    Client.CHAMPIONSHIP_UPDATE_TOTAL_COUNT = 'updatecurUserCount';
    //分享
    Client.SHARE_START_GAME = "sharestartgame";
    Client.SHARE_INVITE_FRIEND = "invite_friend";
    Client.SHARE_RECEIVE_INVITE = "receive_invite";
    // static SHARE_LEAVE_ROOM = "shareleaveroom"
    //群约战pk
    Client.GROUP_JOIN_ROOM = "groupjoinroom";
    Client.GROUP_ROOM_STATUS = "grouproomStatus";
    return Client;
}(_Socket__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Client);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketConfig", function() { return SocketConfig; });
/* harmony import */ var _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _wx_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _game_main_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var SocketConfig = /** @class */ (function () {
    function SocketConfig() {
    }
    SocketConfig.zone = "";
    return SocketConfig;
}());

var Socket = /** @class */ (function (_super) {
    __extends(Socket, _super);
    function Socket(url) {
        var _this = _super.call(this) || this;
        _this.url = url;
        /**当前是否在重连 */
        _this.isReconnecting = false;
        /**当前重连次数 */
        _this.reconnectTimes = 0;
        _this.addObserver();
        return _this;
    }
    Object.defineProperty(Socket.prototype, "canReconnect", {
        get: function () {
            var networkMonitor = _game_main_game__WEBPACK_IMPORTED_MODULE_3__["default"].ins.networkMonitor;
            var lifeCircleMonitor = _game_main_game__WEBPACK_IMPORTED_MODULE_3__["default"].ins.lifeCircleMonitor;
            if (Object(_wx_utils__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
                console.log("SOCKET是否连接：" + (this.connected ? "是" : "否"));
                console.log("是否在前台：" + (lifeCircleMonitor.inForeground ? "是" : "否"));
                console.log("网络是否连接：" + (networkMonitor.isConnected ? "是" : "否"));
                console.log("是否正在重连：" + (this.isReconnecting ? "是" : "否"));
            }
            return !this.connected && lifeCircleMonitor.inForeground && networkMonitor.isConnected && !this.isReconnecting;
        },
        enumerable: true,
        configurable: true
    });
    Socket.prototype.addObserver = function () {
        var _this = this;
        var center = _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_1__["default"].defaultCenter;
        center.on(_base_NotificationCenter__WEBPACK_IMPORTED_MODULE_1__["NotificationName"].NetworkChanged, this, function (isConnected, isWIFI) {
            if (_this.canReconnect) {
                _this._startReconnect();
            }
        });
        // lifeCircleMonitor.on(LifeCircleMonitor.SHOW, this, function () {
        //     if (this.canReconnect) {
        //         this._startReconnect();
        //     }
        // })
        center.on(_base_NotificationCenter__WEBPACK_IMPORTED_MODULE_1__["NotificationName"].GameShow, this, function () {
            if (_this.canReconnect) {
                _this._startReconnect();
            }
        });
    };
    /**切换服务器 */
    Socket.prototype.changeUrl = function (url) {
        var _this = this;
        if (url != this.url) {
            if (this.isReconnecting) {
                this._stopReconnect();
            }
            if (this.connected) {
                this.close();
            }
            Laya.timer.once(1000, this, function () {
                _this.connectByUrl(url);
            });
        }
    };
    /**重写父类方法 */
    Socket.prototype._onOpen = function (e) {
        if (window.navigator.userAgent.indexOf('Mobile') > -1) {
            console.log("S OPEN:");
            var res = JSON.stringify(e) || "";
            console.log(res.toString());
        }
        else {
            console.log("%c S OPEN: ", "background:#f3f8f1;color:#177cb0", e);
        }
        _super.prototype._onOpen.call(this, e);
        if (this.isReconnecting) {
            this._stopReconnect();
            this.onReconnectEnd();
            this.event(Socket.RECONNECT_END);
        }
    };
    //{code:1006,reason:"abnormal closure"}服务器主动断开连接
    //{code:1000} 用户主动断开连接
    Socket.prototype._onClose = function (e) {
        var res = JSON.stringify(e) || "";
        if (window.navigator.userAgent.indexOf('Mobile') > -1) {
            console.log("S CLOSE:");
            console.log(res.toString());
        }
        else {
            console.log("%c S CLOSE: ", "background:#f3f8f1;color:#177cb0", res.toString());
        }
        _super.prototype._onClose.call(this, e);
        if (e.code == 1000) {
            return;
        }
        if (this.canReconnect) {
            if (e.code && e.code == 1006) { //网络原因导致的
                this._startReconnect(Socket.reconnectConfig.duration);
            }
            else {
                this._startReconnect(Socket.reconnectConfig.interval);
            }
        }
    };
    /**重写父类方法 */
    Socket.prototype._onMessage = function (msg) {
        _super.prototype._onMessage.call(this, msg);
        if (!msg || !msg.data)
            return;
        var data = msg.data;
        if (window.navigator.userAgent.indexOf('Mobile') > -1) {
            console.log("S <<<");
            console.log(data);
        }
        else {
            console.log("%c S <<< ", "background:#f3f8f1;color:#177cb0", data);
        }
        this.handleMessage(data);
    };
    /**重写父类方法 */
    Socket.prototype._onError = function (e) {
        var res = JSON.stringify(e) || "";
        if (window.navigator.userAgent.indexOf('Mobile') > -1) {
            console.log("S ERROR:");
            console.log(res.toString());
        }
        else {
            console.log('S | ERROR | ' + res);
            console.log("%c S ERROR: ", "background:#f3f8f1;color:#177cb0", res.toString());
        }
        _super.prototype._onError.call(this, e);
        // if (!window.$networkMonitor.isConnected) {
        //     if (this.isReconnecting) {
        //         this._stopReconnect();
        //     }
        // } else {
        // }
    };
    /**处理消息返回内容，子类需重写 */
    Socket.prototype.handleMessage = function (msg) { };
    /**自定义方法，便于快速执行 */
    Socket.prototype.connect = function () {
        this.connectByUrl(this.url);
    };
    /**重写父类方法 */
    Socket.prototype.connectByUrl = function (url) {
        _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_0__["default"].startSocketTime();
        this.url = url;
        _super.prototype.connectByUrl.call(this, url);
    };
    Socket.prototype.startWatchDog = function () {
        Laya.timer.loop(5000, this, this.handleWatchDog);
    };
    Socket.prototype.handleWatchDog = function () {
        if (this.connected) {
            this.stopWatchDog();
        }
        else {
            this._startReconnect();
        }
    };
    Socket.prototype.stopWatchDog = function () {
        Laya.timer.clear(this, this.handleWatchDog);
    };
    /**开始重连 */
    Socket.prototype._startReconnect = function (interval) {
        if (interval === void 0) { interval = Socket.reconnectConfig.interval; }
        if (this.isReconnecting) {
            return;
        }
        this.isReconnecting = true;
        this.reconnectTimes = 0;
        this._reconnect();
        this.onReconnectStart();
        Laya.timer.loop(interval * 1000, this, this._reconnect);
        this.event(Socket.RECONNECT_START, [this.reconnectTimes, Socket.reconnectConfig.total]);
    };
    /**停止重连 */
    Socket.prototype._stopReconnect = function () {
        if (!this.isReconnecting) {
            return;
        }
        this.isReconnecting = false;
        this.reconnectTimes = 0;
        Laya.timer.clear(this, this._reconnect);
    };
    /**执行重连方法 */
    Socket.prototype._reconnect = function () {
        var config = Socket.reconnectConfig;
        if (this.reconnectTimes < config.total) {
            this.connect();
            this.reconnectTimes++;
            this.onReconnecting(this.reconnectTimes, config.total);
            this.event(Socket.RECONNECT_PROGRESS, [this.reconnectTimes, config.total]);
            if (this.reconnectTimes > config.total / 2) {
                Laya.timer.clear(this, this._reconnect);
                Laya.timer.loop(config.duration * 1000, this, this._reconnect);
            }
        }
        else {
            this._stopReconnect();
            this.onReconnectFail();
            this.event(Socket.RECONNECT_FAIL);
        }
    };
    /**子类重写 */
    Socket.prototype.onReconnecting = function (times, total) {
    };
    Socket.prototype.onReconnectStart = function () {
    };
    Socket.prototype.onReconnectEnd = function () {
    };
    Socket.prototype.onReconnectFail = function () {
    };
    /**重连配置 */
    Socket.reconnectConfig = {
        total: 8,
        interval: 5,
        duration: 10 //后续重连间隔
    };
    Socket.RECONNECT_START = "socket.reconnect.start";
    Socket.RECONNECT_END = 'socket.reconnect.end';
    Socket.RECONNECT_FAIL = 'socket.reconnect.fail';
    Socket.RECONNECT_PROGRESS = 'socket.reconnect.progress';
    return Socket;
}(Laya.Socket));
/* harmony default export */ __webpack_exports__["default"] = (Socket);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareType", function() { return ShareType; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _wx_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _core_network_Request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _core_network_Socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _service_UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _modal_LoginData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _wx_manager_LoginManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _wx_manager_PayManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29);
/* harmony import */ var _core_navigator_Scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3);
/* harmony import */ var _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1);
/* harmony import */ var _core_network_Client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21);
/* harmony import */ var _wx_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(10);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();















var ShareType;
(function (ShareType) {
    ShareType[ShareType["InviteFriend"] = 1] = "InviteFriend";
    ShareType[ShareType["GroupPK"] = 2] = "GroupPK";
    ShareType[ShareType["GroupRank"] = 3] = "GroupRank";
})(ShareType || (ShareType = {}));
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(params) {
        var _this_1 = _super.call(this, params) || this;
        _this_1.params = params;
        /**登录的code */
        _this_1.$code = '';
        if (!params.gameId) {
            console.error("初始化时必须传入gameId");
        }
        if (!params.baseURL) {
            console.error("初始化时必须传入baseURL");
        }
        if (!params.zone) {
            console.error("初始化时必须传入zone");
        }
        _this_1.gameId = params.gameId;
        //对全局单例进行赋值
        _game__WEBPACK_IMPORTED_MODULE_0__["default"].ins = _this_1;
        _core_network_Socket__WEBPACK_IMPORTED_MODULE_3__["SocketConfig"].zone = params.zone;
        _wx_manager_PayManager__WEBPACK_IMPORTED_MODULE_10__["default"].offerId = params.offerId;
        _this_1._configHTTP();
        _this_1._configNavigator();
        if (Object(_wx_utils__WEBPACK_IMPORTED_MODULE_14__["default"])()) {
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].startTrackTime('c');
            _wx_manager_LoginManager__WEBPACK_IMPORTED_MODULE_9__["default"].getCode(function (res) {
                _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].stopTrackTime('c');
                _this_1.$code = res.code;
                _this_1._auth();
            });
        }
        else {
            _this_1.login();
        }
        Laya.AtlasInfoManager.enable('fileconfig.json', Laya.Handler.create(_this_1, _this_1.initRootScene, [_this_1.launchOption]));
        if (Object(_wx_utils__WEBPACK_IMPORTED_MODULE_14__["default"])()) {
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].setup(params.mtaID, params.mtaEventID, _this_1.launchOption);
        }
        return _this_1;
    }
    /**
     * @override
     */
    Main.prototype._onShow = function (res) {
        _super.prototype._onShow.call(this, res);
        //当通过好友邀请进入游戏时，需要再次调用登录，以获取好友所在的服务器
        var query = res.query;
        var type = query.type;
        if (type == ShareType.InviteFriend || type == ShareType.GroupPK) {
            this._loginCore(null, false, this._changeClientURL);
        }
        else {
            this.socket && this.handleOnShowResult(this.launchOption);
        }
        this.navigator.visibleScene && this.navigator.visibleScene._onShow(res);
    };
    Main.prototype._onHide = function (res) {
        _super.prototype._onHide.call(this, res);
        this.navigator.visibleScene && this.navigator.visibleScene._onHide(res);
    };
    Main.prototype._configHTTP = function () {
        _core_network_Request__WEBPACK_IMPORTED_MODULE_2__["RequestConfig"].baseURL = this.params.baseURL;
        _core_network_Request__WEBPACK_IMPORTED_MODULE_2__["RequestConfig"].token = localStorage.getItem('token') || '';
        if (this.launchOption) {
            var referrerInfo = this.launchOption.referrerInfo;
            if (referrerInfo && referrerInfo.extraData && referrerInfo.extraData.token) {
                _core_network_Request__WEBPACK_IMPORTED_MODULE_2__["RequestConfig"].token = referrerInfo.extraData.token;
            }
        }
        var _this = this;
        _core_network_Request__WEBPACK_IMPORTED_MODULE_2__["RequestConfig"].makeParamsHandler = function (params) {
            if (!params['user_token'] && _core_network_Request__WEBPACK_IMPORTED_MODULE_2__["RequestConfig"].token) {
                params['user_token'] = _core_network_Request__WEBPACK_IMPORTED_MODULE_2__["RequestConfig"].token;
            }
            if (!params['game_id'] && _this.gameId) {
                params['game_id'] = _this.gameId;
            }
            return { wxparams: JSON.stringify(params) };
        };
    };
    Main.prototype._configNavigator = function () {
        _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_4__["default"].setupViewHandler = function (view) {
            var stage = Laya.stage;
            var screenWidth = Laya.Browser.width;
            var screenHeight = Laya.Browser.height;
            var width = stage.designWidth;
            var height = stage.designHeight;
            var scaleX = screenWidth / width;
            var y = (screenHeight - height * scaleX >> 1) / scaleX;
            if (view instanceof Laya.Sprite) {
                var v = view;
                v.size(stage.width, stage.height);
                v.pos(0, Math.floor(y));
                v.open(false);
                // stage.addChild(view);
            }
            else {
                var inst = fairygui.GRoot.inst;
                view.setSize(inst.width, inst.height);
                view.setXY(0, Math.floor(y));
                inst.addChild(view);
            }
        };
        _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_4__["default"].activeView = function (view) {
            view.visible = true;
        };
        _core_navigator_Navigator__WEBPACK_IMPORTED_MODULE_4__["default"].deactiveView = function (view) {
            view.visible = false;
        };
        _core_navigator_Scene__WEBPACK_IMPORTED_MODULE_11__["default"].destroyHandler = function (scene) {
            scene.view && scene.view.destroy();
        };
    };
    Main.prototype._auth = function () {
        var _this = this;
        _service_UserService__WEBPACK_IMPORTED_MODULE_5__["default"].auth({
            success: function () {
                _this.isAuthed = true;
                if (_this.params.autoLogin == undefined || _this.params.autoLogin) {
                    _this.login();
                }
            },
            fail: function () {
                _this.isAuthed = false;
            }
        });
    };
    Main.prototype.login = function () {
        var _this_1 = this;
        this._loginCore(null, true, function (res) {
            _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].config = res.config_list;
            if (_this_1.params.useSocket == undefined || _this_1.params.useSocket) {
                _this_1._initClient();
            }
            _this_1.isLogined = true;
            _this_1.loginSuccess();
            _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_12__["default"].defaultCenter.event(_base_NotificationCenter__WEBPACK_IMPORTED_MODULE_12__["NotificationName"].LoginSuccess);
        });
    };
    /**开始登录逻辑 */
    Main.prototype._loginCore = function (data, requestConfig, cb) {
        if (data === void 0) { data = null; }
        if (requestConfig === void 0) { requestConfig = true; }
        var params = {
            type: 5,
            platform: 5,
            game_app_id: this.gameId,
            version: this.params.version || '1.0',
            release: this.params.release || 0,
            share_type: 0,
            share_id: 0,
            is_config: requestConfig ? 1 : 0
        };
        if (Object(_wx_utils__WEBPACK_IMPORTED_MODULE_14__["default"])()) {
            params['device_info'] = wx.getSystemInfoSync();
            var query = this.launchOption.query;
            if (query && query['id']) {
                params['share_id'] = query['id'];
            }
            if (query && query['type']) {
                params['share_type'] = query['type'];
            }
            params['launch_info'] = this.launchOption || '';
        }
        if (data) {
            params.encrypted_data = data.encryptedData;
            params.iv = data.iv;
        }
        function loginIn(code) {
            var _this_1 = this;
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].startTrackTime('l');
            _service_UserService__WEBPACK_IMPORTED_MODULE_5__["default"].login(code, params, function (res) {
                _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].stopTrackTime('l');
                _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].uploadLoginCostTime();
                _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].rawData = res;
                var login = new _modal_LoginData__WEBPACK_IMPORTED_MODULE_6__["default"](res);
                _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].login = login;
                _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].user = login.user;
                _core_network_Request__WEBPACK_IMPORTED_MODULE_2__["RequestConfig"].token = login.token;
                localStorage.setItem("token", login.token);
                _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].hideLoading();
                cb && cb.call(_this_1, res);
            }, function (msg, code) {
                /**
             * {"code":401,"time":1525849533,"message":"您的账号在另一个设备上登录了, 需要重新登录","errorcode":2004}
             */
                if (code == 2004) { //token不对
                    _core_network_Request__WEBPACK_IMPORTED_MODULE_2__["RequestConfig"].token = "";
                    _this_1.login(null, cb);
                }
                else {
                    _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].hideLoading();
                    _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].showModal('登录失败', msg);
                }
            });
        }
        _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].showLoading();
        if (Object(_wx_utils__WEBPACK_IMPORTED_MODULE_14__["default"])()) {
            loginIn.call(this, this.$code);
        }
        else if (this.params.debug) {
            loginIn.call(this, 'app,' + this.params.userId);
        }
        else {
            console.error('release 模式下禁止登录');
        }
        // LoginManager.checkSession({
        //     success() {
        //         console.warn(`T | wx.checkSession | ${(new Date()).valueOf() - beginTime}`)
        //         loginIn.call(this)
        //     },
        //     fail() {
        //         beginTime = (new Date()).valueOf()
        //         LoginManager.getCode(res => {
        //             console.warn(`T | wx.getCode | ${(new Date()).valueOf() - beginTime}`)
        //             loginIn.call(this,res)
        //         })
        //     }
        // })
    };
    Main.prototype.getConfigList = function () {
        var _this_1 = this;
        _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].startTrackTime('config_list_new');
        _core_network_Request__WEBPACK_IMPORTED_MODULE_2__["default"].GET('config_list_new', {}, function (res) {
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].stopTrackTime('config_list_new');
            _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].config = res;
            _this_1.getConfigListSuccess();
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].uploadLoginCostTime();
        }, function () {
            _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].showModal('提示', '获取配置失败，请稍候再试');
        });
    };
    /**初始化websocket */
    Main.prototype._initClient = function () {
        if (!_modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].login.game_url) {
            console.error("请验证game_url是否正确");
        }
        var url = _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].login.game_url;
        if (Laya.Render.isConchApp) {
            url = _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].rawData['app_game_url'];
        }
        var socket = this.socket = new _core_network_Client__WEBPACK_IMPORTED_MODULE_13__["default"](url + this.params.zone);
        socket.on(Laya.Event.OPEN, this, function () {
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].stopSocketTime();
            var userId = _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].user.id;
            if (!userId) {
                console.error("user_id不存在，请检查错误");
            }
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].startSocketLogin();
            socket.sendMessage("login", { user_id: userId });
        });
        socket.on(_core_network_Client__WEBPACK_IMPORTED_MODULE_13__["default"].LOGIN, this, function () {
            _wx_Toast__WEBPACK_IMPORTED_MODULE_1__["default"].hideLoading();
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_8__["default"].stopSocketLogin();
            this.handleOnShowResult(this.launchOption);
        });
        socket.connect();
        this.initService();
    };
    Main.prototype._changeClientURL = function () {
        var url = _modal_DataCenter__WEBPACK_IMPORTED_MODULE_7__["default"].login.game_url + this.params.zone;
        if (url != this.socket.url) {
            this.socket.changeUrl(url);
        }
        else {
            var socket = this.socket;
            if (socket && socket.connected) {
                this.handleOnShowResult(this.launchOption);
            }
            else {
                socket._startReconnect();
            }
        }
    };
    Main.prototype.handleOnShowResult = function (res) {
        if (!res) {
            return;
        }
        this.handleOnShow(res);
        this.launchOption.query = {};
    };
    /**以下方法为子类重写 */
    Main.prototype.loginSuccess = function () {
    };
    Main.prototype.getConfigListSuccess = function () {
    };
    /**初始化首屏界面 */
    Main.prototype.initRootScene = function (launchOption) {
    };
    /**初始化业务逻辑 */
    Main.prototype.initService = function () {
    };
    /**监听网络状态变化 */
    Main.prototype.handleNetworkChange = function (isConnected, isWIFI) {
    };
    /**子类重写该方法，用于onShow之后 */
    Main.prototype.handleOnShow = function (res) {
    };
    return Main;
}(_game__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Main);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wx_manager_LoginManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _wx_manager_AuthManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _wx_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _core_network_Request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);





var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.getMyInfo = function (cb) {
        var _this = this;
        if (this.userInfo) {
            cb && cb(this.userInfo);
            return;
        }
        _wx_manager_LoginManager__WEBPACK_IMPORTED_MODULE_0__["default"].getUserInfoWithoutCredentials(function (res) {
            _this.userInfo = res.data;
            cb && cb(_this.userInfo);
        });
    };
    UserService.login = function (code, params, suc, fail) {
        function sendHttpLogin() {
            params.js_code = code;
            _core_network_Request__WEBPACK_IMPORTED_MODULE_3__["default"].POST('user_login', params, suc, fail);
        }
        function getUserInfo() {
            var _this = this;
            var beginTime = (new Date()).valueOf();
            _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_4__["default"].startTrackTime('u');
            _wx_manager_LoginManager__WEBPACK_IMPORTED_MODULE_0__["default"].getUserInfo(function (res) {
                _dataTrack_dataTrack__WEBPACK_IMPORTED_MODULE_4__["default"].stopTrackTime('u');
                localStorage.setItem('lastLoginTime', (new Date()).valueOf() + '');
                _this.userInfo = res.userInfo;
                params.encrypted_data = res.encryptedData;
                params.iv = res.iv;
                sendHttpLogin();
            });
        }
        if (params.encrypted_data || (code && code.indexOf('app') != -1)) {
            sendHttpLogin();
        }
        else {
            var beginTime = (new Date()).valueOf();
            var day7 = 7 * 24 * 60 * 60 * 1000;
            if ((beginTime - this.lastLoginTime) < day7 && _core_network_Request__WEBPACK_IMPORTED_MODULE_3__["RequestConfig"].token) {
                sendHttpLogin();
                return;
            }
            else {
                getUserInfo.call(this);
            }
        }
    };
    UserService.auth = function (obj) {
        _wx_manager_AuthManager__WEBPACK_IMPORTED_MODULE_1__["default"].auth({
            scope: _wx_manager_AuthManager__WEBPACK_IMPORTED_MODULE_1__["default"].scope.userInfo,
            success: obj.success,
            fail: obj.fail,
            alert: function (cb) {
                _wx_Toast__WEBPACK_IMPORTED_MODULE_2__["default"].showModal('提示', '需要您的授权才能正常使用', '去设置', function () {
                    cb();
                });
            }
        });
    };
    UserService.lastLoginTime = Number(localStorage.getItem('lastLoginTime') || '');
    UserService.getCode = _wx_manager_LoginManager__WEBPACK_IMPORTED_MODULE_0__["default"].getCode;
    return UserService;
}());
/* harmony default export */ __webpack_exports__["default"] = (UserService);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var LoginManager = /** @class */ (function () {
    function LoginManager() {
    }
    /**
    * 调用微信登录
    */
    LoginManager.getCode = function (cb) {
        wx.login({
            success: function (res) {
                cb && cb(res);
            },
            fail: function () { },
            complete: function () { }
        });
    };
    LoginManager.checkSession = function (o) {
        wx.checkSession({
            success: function () {
                o.success && o.success();
            },
            fail: function () {
                o.fail && o.fail();
            },
            complete: function () { }
        });
    };
    /**调用微信获取用户信息接口 */
    LoginManager.getUserInfo = function (cb) {
        wx.getUserInfo({
            withCredentials: true,
            lang: "zh_CN",
            success: function (res) {
                cb && cb(res);
            },
            fail: function () { },
            complete: function () { }
        });
    };
    LoginManager.getUserInfoWithoutCredentials = function (cb) {
        wx.getUserInfo({
            lang: "zh_CN",
            withCredentials: false,
            success: function (res) {
                cb && cb(res);
            },
            fail: function () { },
            complete: function () { }
        });
    };
    return LoginManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (LoginManager);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AuthManager = /** @class */ (function () {
    function AuthManager() {
    }
    /**
     *
     * @param scope 想要获取授权的标识，可以使用上面已经列举出来的权限
     * @param suc   授权成功回调
     * @param fail  授权失败回调
     * @param alert 当需要打开用户设置界面时，用于可以修改弹窗内容，方便用户确认操作
     */
    AuthManager.auth = function (params) {
        var okHandler = function () {
            wx.openSetting({
                success: function (res) {
                    var result = res.authSetting[params.scope];
                    if (result) {
                        params.success && params.success();
                    }
                    else {
                        params.alert && params.alert(okHandler);
                    }
                },
                fail: function () {
                    params.fail && params.fail();
                },
                complete: function () { }
            });
        };
        wx.getSetting({
            success: function (res) {
                var result = res.authSetting[params.scope];
                if (result == undefined) { //没有获取过权限
                    wx.authorize({
                        scope: params.scope,
                        success: function (res) {
                            params.success && params.success();
                        },
                        fail: function () {
                            params.alert && params.alert(okHandler);
                        },
                        complete: function () { }
                    });
                }
                else if (!result) { //当前权限为否
                    params.alert && params.alert(okHandler);
                }
                else {
                    params.success && params.success();
                }
            },
            fail: function () {
            },
            complete: function () { }
        });
    };
    AuthManager.scope = {
        userInfo: "scope.userInfo",
        userLocation: "scope.userLocation",
        address: "scope.address",
        invoiceTitle: "scope.invoiceTitle",
        werun: "scope.werun",
        record: "scope.record",
        writePhotosAlbum: "scope.writePhotosAlbum",
        camera: "scope.camera"
    };
    return AuthManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (AuthManager);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);

var LoginData = /** @class */ (function () {
    function LoginData(obj) {
        /**是否正式环境，用于控制支付显示 */
        this.isProduction = true;
        /**连续登录天数 */
        this.login_bonus_day = 1;
        /**是否已经登录过 */
        this.login_bonus = 1;
        this.game_url = "";
        /**用户登录凭证 */
        this.token = "";
        this.isProduction = obj.isProduction;
        this.login_bonus = obj.login_bonus;
        this.login_bonus_day = obj.login_bonus_day;
        this.token = obj.token;
        this.game_url = obj.game_url;
        this.user = new _User__WEBPACK_IMPORTED_MODULE_0__["default"](obj);
    }
    return LoginData;
}());
/* harmony default export */ __webpack_exports__["default"] = (LoginData);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(obj) {
        var _this = _super.call(this) || this;
        /**性别，值为 (男、女、"") */
        _this.gender = "男";
        /**红包 */
        _this.member_rmb = 1;
        /**泡豆 */
        _this.member_gold = 1;
        /**昵称 */
        _this.nickname = '';
        _this.id = 2557087;
        /**头像 */
        _this.avstar = "";
        _this.member_country = "";
        _this.member_province = '';
        _this.city = "";
        _this.gender = obj.gender;
        _this.member_rmb = obj.member_rmb;
        _this.member_gold = obj.member_gold;
        _this.nickname = obj.nickname;
        _this.id = obj.id;
        _this.avstar = obj.avstar;
        _this.member_country = obj.member_country;
        _this.member_province = obj.member_province;
        _this.city = obj.member_city || "";
        return _this;
    }
    Object.defineProperty(User.prototype, "gold", {
        get: function () {
            return this.member_gold;
        },
        set: function (newValue) {
            this.member_gold = newValue;
            this.event(User.CHANGE_GOLD, newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "rmb", {
        get: function () {
            return this.member_rmb;
        },
        set: function (newValue) {
            this.member_rmb = newValue;
            this.event(User.CHANGE_RMB, newValue);
        },
        enumerable: true,
        configurable: true
    });
    User.CHANGE_GOLD = 'change.gold';
    User.CHANGE_RMB = 'change.rmb';
    return User;
}(Laya.EventDispatcher));
/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PayManager = /** @class */ (function () {
    function PayManager() {
    }
    PayManager.pay = function (buyQuantity, success, fail) {
        wx.requestMidasPayment({
            mode: "game",
            env: this.env,
            offerId: this.offerId,
            currencyType: "CNY",
            buyQuantity: buyQuantity,
            platform: this.platform,
            zoneId: "1",
            success: function (res) {
                console.log("PAY | suc | " + JSON.stringify(res));
                success && success();
            },
            fail: function (res) {
                console.log("PAY | fail | " + JSON.stringify(res));
                var msg = res.errMsg;
                var code = res.errCode;
                switch (code) {
                    case -1:
                        break;
                    case -2:
                        break;
                    case -15001:
                        break;
                    case -15002:
                        break;
                    case -15003:
                        break;
                    case -15004:
                        break;
                    case -15005:
                        break;
                    case -15006:
                        break;
                    case -15007:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 1000:
                        break;
                    case 1003:
                        break;
                }
                fail && fail(code);
            }
        });
    };
    PayManager.env = 0; // 0 正式版，1 沙箱环境
    PayManager.platform = 'android';
    return PayManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (PayManager);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ConfigList = /** @class */ (function () {
    function ConfigList() {
    }
    return ConfigList;
}());
/* harmony default export */ __webpack_exports__["default"] = (ConfigList);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Loader = /** @class */ (function () {
    function Loader() {
    }
    Loader.load = function (url, caller, completion, p) {
        if (p === void 0) { p = null; }
        var completeHandler = Laya.Handler.create(this, function () {
            completion && completion.call(caller);
        });
        var progressHandler = Laya.Handler.create(this, function (progress) {
            console.log("loading progress" + progress);
            p && p.call(caller, progress);
        }, null, false);
        Laya.loader.load(url, completeHandler, progressHandler);
    };
    return Loader;
}());
/* harmony default export */ __webpack_exports__["default"] = (Loader);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TimerService = /** @class */ (function (_super) {
    __extends(TimerService, _super);
    function TimerService(duration, interval, up) {
        if (interval === void 0) { interval = 1; }
        if (up === void 0) { up = false; }
        var _this = _super.call(this) || this;
        _this.duration = duration;
        _this.interval = interval;
        _this.up = up;
        _this.curTime = 0;
        return _this;
    }
    TimerService.prototype.start = function () {
        if (this.up) {
            this.curTime = 0;
        }
        else {
            this.curTime = this.duration;
        }
        this.update();
        Laya.timer.loop(this.interval * 1000, this, this.update);
        this.event(TimerService.START, "");
    };
    TimerService.prototype.stop = function () {
        this.curTime = 0;
        Laya.timer.clear(this, this.update);
        this.event(TimerService.STOP, "");
    };
    TimerService.prototype.update = function () {
        if (this.up) {
            this.curTime++;
            if (this.curTime >= this.duration) {
                this.stop();
            }
            else {
                this.event(TimerService.PROGRESS, this.curTime);
            }
        }
        else {
            if (this.curTime > 0) {
                this.curTime--;
                this.event(TimerService.PROGRESS, this.curTime);
            }
            else {
                this.stop();
            }
        }
    };
    TimerService.START = "start_";
    TimerService.STOP = "stop_";
    TimerService.TIMEOUT = "timeout_";
    TimerService.PROGRESS = "progress_";
    return TimerService;
}(Laya.EventDispatcher));
/* harmony default export */ __webpack_exports__["default"] = (TimerService);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LaunchScreenView = /** @class */ (function (_super) {
    __extends(LaunchScreenView, _super);
    function LaunchScreenView(icon, name) {
        var _this = _super.call(this) || this;
        _this.updateUI();
        _this.lblName.text = name;
        return _this;
        // this.imgIcon.skin = icon
    }
    LaunchScreenView.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.createView(LaunchScreenView.uiView);
    };
    LaunchScreenView.prototype.updateUI = function () {
        if (Laya.Browser.onAndroid) {
        }
        else {
        }
    };
    LaunchScreenView.show = function (name, icon) {
        if (Laya.Render.isConchApp) {
            return;
        }
        var view = new LaunchScreenView(icon, name);
        view.zOrder = 9999;
        Laya.stage.addChild(view);
        this.ins = view;
    };
    LaunchScreenView.hide = function () {
        if (Laya.Render.isConchApp) {
            setTimeout(function () {
                wx.hideSplash && wx.hideSplash();
            }, 1000);
        }
        if (this.ins) {
            this.ins.destroy();
        }
    };
    LaunchScreenView.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Rect", "props": { "y": 0, "x": 0, "width": 750, "lineWidth": 1, "height": 1334, "fillColor": "#ffffff" } }, { "type": "Image", "props": { "y": 697, "x": 300, "var": "imgLoading", "skin": "wxlocal/launchScreen/2.png" } }, { "type": "Image", "props": { "y": 475, "x": 305, "width": 144, "var": "imgIcon", "skin": "wxlocal/launchScreen/icon.png", "height": 144 }, "child": [{ "type": "Sprite", "props": { "renderType": "mask" }, "child": [{ "type": "Circle", "props": { "y": 72, "x": 72, "radius": 72, "lineWidth": 1, "fillColor": "#ff0000" } }] }] }, { "type": "Label", "props": { "y": 649, "x": 216, "width": 318, "var": "lblName", "text": "泡泡打地鼠", "height": 36, "fontSize": 36, "align": "center" } }, { "type": "Label", "props": { "y": 1260, "x": 67, "var": "lblTips", "text": "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。\\n适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。", "leading": 5, "fontSize": 22, "color": "#b2b2b2", "bottom": 20 } }, { "type": "Box", "props": { "y": 1178, "x": 299, "var": "gameView" }, "child": [{ "type": "Label", "props": { "y": 18, "x": 67, "text": "小游戏", "fontSize": 28, "color": "#282828" } }, { "type": "Image", "props": { "width": 60, "skin": "wxlocal/launchScreen/minigame-icon.png", "height": 60 } }] }] };
    return LaunchScreenView;
}(Laya.View));
/* harmony default export */ __webpack_exports__["default"] = (LaunchScreenView);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _main_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var LoginMaskView = /** @class */ (function (_super) {
    __extends(LoginMaskView, _super);
    function LoginMaskView() {
        var _this = _super.call(this) || this;
        _this.size(750, 1334);
        _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["default"].defaultCenter.on(_base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["NotificationName"].LoginSuccess, _this, _this.destroy);
        _this.on(Laya.Event.CLICK, _this, function () {
            if (!_main_game__WEBPACK_IMPORTED_MODULE_1__["default"].ins.isAuthed) {
                console.warn('此时用户还没有完成授权');
                return;
            }
            if (!_main_game__WEBPACK_IMPORTED_MODULE_1__["default"].ins.isLogined) {
                console.warn('此时用户还没有登录成功');
                return;
            }
            this.destroy();
        });
        return _this;
    }
    LoginMaskView.showInView = function (view) {
        if (_main_game__WEBPACK_IMPORTED_MODULE_1__["default"].ins.isLogined) {
            return;
        }
        var maskView = new LoginMaskView();
        this.view = maskView;
        view.addChild(maskView);
    };
    LoginMaskView.hide = function () {
        this.view.destroy();
    };
    LoginMaskView.prototype.destroy = function () {
        _base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["default"].defaultCenter.off(_base_NotificationCenter__WEBPACK_IMPORTED_MODULE_0__["NotificationName"].LoginSuccess, this, this.destroy);
        this.removeSelf();
        _super.prototype.destroy.call(this, true);
    };
    return LoginMaskView;
}(Laya.View));
/* harmony default export */ __webpack_exports__["default"] = (LoginMaskView);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RoundImageView = /** @class */ (function (_super) {
    __extends(RoundImageView, _super);
    function RoundImageView(skin) {
        var _this = _super.call(this, skin) || this;
        _this.__init_$();
        return _this;
    }
    RoundImageView.prototype.__init_$ = function () {
        var _this = this;
        var mask = new Laya.Sprite();
        this.mask = mask;
        this.on(Laya.Event.RESIZE, this, function () {
            if (!_this.mask) {
                return;
            }
            _this.mask.graphics.clear();
            var width = _this.width, height = _this.height;
            var r = Math.ceil(Math.min(width, height) / 2);
            _this.mask.graphics.drawCircle(r, r, r, '#ff0000');
        });
    };
    return RoundImageView;
}(Laya.Image));
/* harmony default export */ __webpack_exports__["default"] = (RoundImageView);
Laya.ClassUtils.regClass('PaoYa.RoundImageView', RoundImageView);


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/**返回数组中最后一个元素，如果数组为空，返回null */
Object.defineProperty(Array.prototype, "lastObject", {
    configurable: false,
    enumerable: false,
    get: function () {
        if (!this.length) {
            return null;
        }
        return this[this.length - 1];
    }
});
/**随机返回数组中一个元素，如果数组为空，返回null */
Object.defineProperty(Array.prototype, "randomItem", {
    configurable: false,
    enumerable: false,
    get: function () {
        if (!this.length) {
            return null;
        }
        var index = Math.floor(Math.random() * this.length);
        return this[index];
    }
});


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 *
 * @param {时间格式，如“yyyy-mm-dd hh:mm:ss”} format
 */
Date.prototype.formatWithStyle = function (format) {
    var y = this.getFullYear();
    var m = this.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = this.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = this.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = this.getMinutes();
    var second = this.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    format = format.replace("yyyy", y + "");
    format = format.replace("mm", m + '');
    format = format.replace("dd", d + '');
    format = format.replace('hh', h + '');
    format = format.replace('mm', minute + '');
    format = format.replace('ss', second + '');
    return format;
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * 格式化秒数，如 1000s = 00:16:40
 */
Number.prototype.formatTime = function () {
    var seconds = this;
    seconds = Math.floor(seconds);
    var hour = Math.floor(seconds / 3600);
    var hourStr = hour < 10 ? ("0" + hour) : hour;
    var balance = seconds % 3600;
    var minute = Math.floor(balance / 60);
    var minuteStr = minute < 10 ? ("0" + minute) : minute;
    var second = balance % 60;
    var secondStr = second < 10 ? ("0" + second) : second;
    return hour + ":" + minute + ":" + second;
};


/***/ })
/******/ ]);