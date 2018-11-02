var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.ToMiniProgramForReward = function (cb) {
        if (cb === void 0) { cb = null; }
        var url_1 = PaoYa.DataCenter.config.common_config.hall_img.split(";").randomItem;
        Service.navigateToMiniProgram({
            appId: "wx6c6a845c3a61e971",
            images: [url_1],
            path: "pages/index?to=2",
            envVersion: "release"
        });
    };
    Service.showAlertWhenHasNoMoney = function (cb) {
        if (cb === void 0) { cb = null; }
        var view = new GoldLackAlert();
        view.popup();
    };
    Service.showIOSAlertNoMoney = function (cb) {
        if (cb === void 0) { cb = null; }
        var view = new GoldLackAlertForIOS();
        view.popup();
    };
    Service.hasEnoughMoney = function (cost) {
        if (PaoYa.DataCenter.user.gold < cost) {
            if (Laya.Browser.onIOS) {
                this.showIOSAlertNoMoney();
            }
            else {
                this.showAlertWhenHasNoMoney();
            }
            return false;
        }
        return true;
    };
    /**
     * {
     *     appId:'wxxxxxxx',
     *     path: 'index',
     *     extraData: {},
     *     envVersion: 'develop', //'trial' 'release'
     *     images:['','']
     * }
     */
    Service.navigateToMiniProgram = function (params) {
        if (!params.appId) {
            console.error("必须指定appId");
            return;
        }
        if (typeof wx == 'undefined') {
            return;
        }
        if (wx.navigateToMiniProgram) {
            wx.navigateToMiniProgram({
                appId: params.appId,
                path: params.path || "",
                extraData: params.extraData || {},
                envVersion: params.envVersion || "release"
            });
        }
        else {
            var url = params.images.randomItem.makeResourceURL();
            wx.previewImage({
                urls: [url],
                success: function (res) {
                    console.log(res);
                },
                fail: function (res) {
                    console.log(res);
                }
            });
        }
    };
    Service.goToHall = function () {
        PaoYa.DataTrack.trackType(PaoYa.DataTrackType.HallBack);
        if (PaoYa.DataCenter.isFromMiniProgram) {
            window.game.exit();
            return;
        }
        var url = PaoYa.DataCenter.config.common_config.hall_img.split(";").randomItem;
        Service.navigateToMiniProgram({
            appId: "wx6c6a845c3a61e971",
            images: [url]
        });
    };
    Service.goToCharge = function (cb) {
        if (cb === void 0) { cb = null; }
        if (PaoYa.DataCenter.rawData.is_review) {
            Toast.showModal("提示", "该功能尚未上线");
            return;
        }
        if (Laya.Browser.onIOS) {
            var url = PaoYa.DataCenter.config.common_config.hall_img.split(";").randomItem;
            var view = new ChargeAlertForIOS();
            view.popup();
            view.onClosed = function (type) {
                if (type == Laya.Dialog.OK) {
                    Service.ToMiniProgramForReward();
                }
            };
        }
        else {
            if (!PaoYa.DataCenter.config.item_list) {
                console.log("PaoYa.DataCenter.config.item_list不存在");
                return;
            }
            if (PaoYa.DataCenter.login.isProduction) {
                PaoYa.Loader.load("res/atlas/wxlocal/Charge.atlas", this, function () {
                    var view = new ChargeView(cb);
                    view.popup();
                });
            }
            else {
                var view = new ChargeAlertForIOS();
                view.chargeRemind.text = "当前版本暂时无法充值，您可以返回大厅参与其他游戏哦！";
                view.popup();
                view.onClosed = function (type) {
                    if (type == Laya.Dialog.OK) {
                        Service.goToHall();
                    }
                };
            }
        }
    };
    Service.goToAds = function () {
        PaoYa.DataCenter.videoAd.load();
    };
    Service.setupAd = function (adUnit) {
        //创建视频广告，需要传入adunitId
        if (!VideoAd.canShowAd) {
            var AdDialog = new AlertDialog("提示", "微信版本过低,请更新微信", "跳过", null, "重新观看", function () {
                console.log("重新观看");
            });
            AdDialog.popup();
            return;
        }
        var videoAd = new VideoAd(adUnit);
        //用户未看完视频
        videoAd.on(VideoAd.CLOSE, this, function () {
            /*   var AdDialog = new AlertView("提示","完整看完视频才有豆子奖励哦", ["跳过","重新观看"]);
              AdDialog.popup();
              AdDialog.onClosed=function(type){
                  if (type == Dialog.CANCEL) {
                     
                  } else if (type == Dialog.OK) {
                     broadAd();
                  }
              } */
        });
        //用户成功看完视频
        videoAd.on(VideoAd.COMPLETE, this, function () {
            PaoYa.Request.GET("ads_reward", {}, function (data) {
                var AdDialog = new AlertDialog("恭喜", "获得" + data.gold + "豆子", "确定");
                AdDialog.popup();
                var currentScene = window.$navigator.visibleScene;
                if (currentScene.updateChips) {
                    currentScene.updateChips();
                }
            }, function () {
                if (Laya.Browser.onIOS) {
                    var message = "今日广告奖励已达上限，您可以参与其他游戏哦！关注“泡泡游戏”公众号，每周领取豆子礼包！";
                    var btnText = "领礼包";
                }
                else {
                    var message = "今日视频广告奖励已达上线，您可以直接充值豆子哦！";
                    var btnText = "去充值";
                }
                var AdDialog = new AlertDialog("提示", message, btnText, function () {
                    if (Laya.Browser.onIOS) {
                        Service.ToMiniProgramForReward();
                    }
                    else {
                        Service.goToCharge();
                    }
                }, "跳过", null);
                AdDialog.btnCancel.skin = "wxlocal/Common/btnYellow.png";
                AdDialog.btnOK.skin = "wxlocal/Common/btnBlue.png";
                AdDialog.popup();
            });
        });
        //用户失败
        videoAd.on(VideoAd.ERROR, this, function () {
            var AdDialog = new AlertDialog("提示", "加载失误,稍后再试", "确定");
            AdDialog.popup();
        });
        PaoYa.DataCenter.videoAd = videoAd;
    };
    Service.goToBannerAd = function () {
        PaoYa.DataCenter.videoAd.show();
    };
    Service.hideBannerAd = function () {
        PaoYa.DataCenter.bannerAd.hide();
    };
    Service.setBannerAd = function (adUnit) {
        if (!BannerAd.canShowAd) {
            var AdDialog = new AlertDialog("提示", "微信版本过低,请更新微信", "跳过", null, "重新观看", function () {
                console.log("重新观看");
            });
            AdDialog.popup();
            return;
        }
        if (!PaoYa.DataCenter.bannerAd) {
            var bannerAd = new BannerAd(adUnit);
        }
        else {
            PaoYa.DataCenter.bannerAd.destroy();
            var bannerAd = new BannerAd(adUnit);
        }
        bannerAd.on(BannerAd.ERROR, this, function () {
            var AdDialog = new AlertDialog("提示", "加载失误,稍后再试", "确定");
            AdDialog.popup();
        });
        PaoYa.DataCenter.bannerAd = bannerAd;
    };
    return Service;
}());
window.Service = Service;
var UserViewStyle;
(function (UserViewStyle) {
    UserViewStyle[UserViewStyle["Girl"] = 0] = "Girl";
    UserViewStyle[UserViewStyle["Boy"] = 1] = "Boy";
})(UserViewStyle || (UserViewStyle = {}));
window.UserViewStyle = UserViewStyle;
var UserView = /** @class */ (function (_super) {
    __extends(UserView, _super);
    function UserView(style) {
        if (style === void 0) { style = UserViewStyle.Boy; }
        var _this = _super.call(this) || this;
        _this.style = style;
        _this._createView();
        _this.changeStyle();
        return _this;
    }
    UserView.prototype._createView = function () {
        this.width = 200;
        this.height = 328;
        this.sceneColor = "#ffffff";
        //avstar
        var imgIcon = new PaoYa.RoundImageView("wxlocal/Common/avstar.png");
        this.addChild(imgIcon);
        this.imgIcon = imgIcon;
        var imgIconMask = new Laya.Image();
        imgIconMask.skin = "wxlocal/Common/usericon-mask-boy.png";
        imgIconMask.x = imgIcon.x = 29;
        imgIconMask.y = imgIcon.y = 110;
        imgIconMask.width = imgIcon.width = 142;
        imgIconMask.height = imgIcon.height = 142;
        this.addChild(imgIconMask);
        this.imgIconMask = imgIconMask;
        var imgNameBg = new Laya.Image();
        imgNameBg.width = 230;
        imgNameBg.height = 46;
        imgNameBg.pos(-15, 253);
        imgNameBg.skin = "wxlocal/Common/username-bg-boy.png";
        imgNameBg.sizeGrid = "0,24,0,24";
        this.addChild(imgNameBg);
        this.imgNameBg = imgNameBg;
        var hBox = new Laya.HBox();
        hBox.space = 8;
        hBox.y = 263;
        hBox.centerX = 0;
        var imgSex = new Laya.Image();
        imgSex.skin = "wxlocal/Common/boy-white.png";
        var lblName = new Laya.Label();
        lblName.text = "等待对方入场...";
        lblName.fontSize = 24;
        lblName.color = "#ffffff";
        hBox.addChild(imgSex);
        hBox.addChild(lblName);
        this.addChild(hBox);
        this.imgSex = imgSex;
        this.lblName = lblName;
        this.hBox = hBox;
        var lblCity = new Laya.Label();
        lblCity.color = "#4d4d4d";
        lblCity.y = 308;
        lblCity.fontSize = 20;
        lblCity.height = 20;
        lblCity.centerX = 0;
        this.addChild(lblCity);
        this.lblCity = lblCity;
    };
    UserView.prototype.changeStyle = function () {
        switch (this.style) {
            case UserViewStyle.Girl:
                this.imgIconMask.skin = "wxlocal/Common/usericon-mask-girl.png";
                this.imgNameBg.skin = "wxlocal/Common/username-bg-girl.png";
                break;
            case UserViewStyle.Boy:
                break;
        }
    };
    /*  getSceneUrl(){
         return "scene/Common/UserView.json"
     } */
    UserView.prototype.setData = function (data) {
        if (data.icon != undefined) {
            this.imgIcon.skin = data.icon; //|| "wxlocal/Common/avstar.png"
        }
        if (data.name != undefined) {
            this.lblName.text = data.name; //|| "等待对方入场..."
        }
        if (data.city != undefined) {
            if (data.city) {
                this.lblCity.visible = true;
                this.lblCity.text = data.city;
                this.lblCity.centerX = 0;
            }
            else {
                this.lblCity.visible = false;
            }
        }
        if (data.gender != undefined) {
            if (data.gender) {
                this.hBox.space = 8;
                this.imgSex.visible = true;
                this.imgSex.skin = data.gender;
            }
            else {
                this.hBox.space = 0;
                this.imgSex.visible = false;
            }
        }
        this.hBox.centerX = 0;
        /*    if (data.ladder != undefined){
               if (data.ladder){
                   this.imgLadder.visible = true
                   this.imgLadder.skin = data.ladder
               } else {
                   this.imgLadder.visible = false
               }
           } */
    };
    return UserView;
}(Laya.View));
window.UserView = UserView;
var AlertDialog = /** @class */ (function (_super) {
    __extends(AlertDialog, _super);
    function AlertDialog(title, msg, ok, okHandler, cancel, cancelHandler) {
        if (ok === void 0) { ok = "知道了"; }
        if (okHandler === void 0) { okHandler = null; }
        if (cancel === void 0) { cancel = null; }
        if (cancelHandler === void 0) { cancelHandler = null; }
        var _this = _super.call(this) || this;
        _this.title = title;
        _this.width = 450;
        _this.height = 380;
        _this.params = {
            title: title,
            msg: msg,
            ok: ok,
            okHandler: okHandler,
            cancel: cancel,
            cancelHandler: cancelHandler
        };
        return _this;
        /*  this.on("onViewReady",this,function(){
             
         }) */
    }
    AlertDialog.prototype.onEnable = function () {
        var _this = this;
        console.log(222);
        console.log("参数：", this.params);
        var _a = this.params, title = _a.title, msg = _a.msg, ok = _a.ok, okHandler = _a.okHandler, cancel = _a.cancel, cancelHandler = _a.cancelHandler;
        this.lblMsg.text = msg;
        this.lblTitle.text = title;
        if (cancel) {
            this.btnClose.visible = false;
            this.btnOK.label = ok;
            this.btnOK.clickHandler = Laya.Handler.create(this, function () {
                _this.close();
                okHandler && okHandler();
            });
            this.btnCancel.label = cancel;
            this.btnCancel.clickHandler = Laya.Handler.create(this, function () {
                _this.close();
                cancelHandler && cancelHandler();
            });
        }
        else {
            this.btnOK.visible = false;
            this.btnCancel.visible = false;
            this.btnClose.label = ok;
            this.btnClose.clickHandler = Laya.Handler.create(this, function () {
                _this.close();
                okHandler && okHandler();
            });
        }
    };
    AlertDialog.prototype.getSceneUrl = function () {
        return "scene/Common/AlertDialog.json";
    };
    return AlertDialog;
}(PaoYa.Dialog));
window.AlertDialog = AlertDialog;
var ChargeAlertForIOS = /** @class */ (function (_super) {
    __extends(ChargeAlertForIOS, _super);
    function ChargeAlertForIOS() {
        var _this = _super.call(this) || this;
        _this.width = 500;
        _this.height = 400;
        return _this;
    }
    ChargeAlertForIOS.prototype.getSceneUrl = function () {
        return "scene/Common/ChargeAlertForIOS.json";
    };
    return ChargeAlertForIOS;
}(PaoYa.Dialog));
window.ChargeAlertForIOS = ChargeAlertForIOS;
var GoldLackAlert = /** @class */ (function (_super) {
    __extends(GoldLackAlert, _super);
    function GoldLackAlert() {
        var _this = _super.call(this) || this;
        _this.width = 500;
        _this.height = 513;
        return _this;
    }
    GoldLackAlert.prototype.onEnable = function () {
        this.btnCharge.clickHandler = Laya.Handler.create(this, function () {
            Service.goToCharge();
        }, null, false);
        this.btnAds.clickHandler = Laya.Handler.create(this, function () {
            Service.goToAds();
        }, null, false);
    };
    GoldLackAlert.prototype.getSceneUrl = function () {
        return "scene/Common/GoldLackAlert.json";
    };
    return GoldLackAlert;
}(PaoYa.Dialog));
window.GoldLackAlert = GoldLackAlert;
var GoldLackAlertForIOS = /** @class */ (function (_super) {
    __extends(GoldLackAlertForIOS, _super);
    function GoldLackAlertForIOS() {
        var _this = _super.call(this) || this;
        _this.width = 500;
        _this.height = 513;
        return _this;
    }
    GoldLackAlertForIOS.prototype.onEnable = function () {
        this.btnCharge.clickHandler = Laya.Handler.create(this, function () {
            Service.ToMiniProgramForReward();
        }, null, false);
        this.btnAds.clickHandler = Laya.Handler.create(this, function () {
            Service.goToAds();
        }, null, false);
    };
    GoldLackAlertForIOS.prototype.getSceneUrl = function () {
        return "scene/Common/GoldLackAlertForIOS.json";
    };
    return GoldLackAlertForIOS;
}(PaoYa.Dialog));
window.GoldLackAlertForIOS = GoldLackAlertForIOS;
var WithDrawAlert = /** @class */ (function (_super) {
    __extends(WithDrawAlert, _super);
    function WithDrawAlert() {
        var _this = _super.call(this) || this;
        _this.width = 500;
        _this.height = 400;
        return _this;
    }
    WithDrawAlert.prototype.getSceneUrl = function () {
        return "scene/Common/WithDrawAlert.json";
    };
    return WithDrawAlert;
}(PaoYa.Dialog));
window.WithDrawAlert = WithDrawAlert;
var ChargeView = /** @class */ (function (_super) {
    __extends(ChargeView, _super);
    function ChargeView(cb) {
        if (cb === void 0) { cb = null; }
        var _this = _super.call(this) || this;
        _this.cb = cb;
        // this.init()
        _this.width = 676;
        _this.height = 1016;
        return _this;
    }
    ChargeView.prototype.getSceneUrl = function () {
        return "scene/Common/ChargeView.json";
    };
    ChargeView.prototype.onEnable = function () {
        var list = PaoYa.DataCenter.config.item_list;
        for (var i = 1; i < list.length + 1; i++) {
            var item = list[i - 1];
            var box = this.getChildByName(i + "");
            var children = box._children;
            var bg = children[0];
            var icon = children[1];
            var lblValue = children[2];
            var lblMoney = children[3];
            var imgFree = children[4];
            var lblFree = imgFree._children[0];
            // set UI
            if (i < 3) {
                bg.skin = "wxlocal/Charge/b.png";
            }
            icon.skin = "wxlocal/Charge/" + i + ".png";
            lblValue.text = item.pao_gold;
            lblMoney.text = "￥" + item.price;
            imgFree.visible = item.free_gold > 0;
            lblFree.text = "+" + item.free_gold;
            box.on(Laya.Event.CLICK, this, this.clickHandler, [item]);
        }
    };
    ChargeView.prototype.clickHandler = function (item) {
        var _this = this;
        PaoYa.PayManager.pay(item.pao_gold, function () {
            _this.refreshGold(item.id);
        }, function (code) {
            if (code != -2 || code != 1) {
                Toast.showModal("提示", "支付失败");
            }
        });
    };
    ChargeView.prototype.refreshGold = function (itemId) {
        var _this = this;
        var params = {
            itemId: itemId,
            gameAppId: window.game.gameId
        };
        Toast.showLoading("");
        PaoYa.Request.POST("midas_pay", params, function (data) {
            Toast.hideLoading();
            PaoYa.DataCenter.user.gold = data.pao_gold;
            Toast.showModal("恭喜", "充值成功");
            _this.cb && _this.cb(data.pao_gold);
        }, function () {
            Toast.hideLoading();
        });
    };
    return ChargeView;
}(PaoYa.Dialog));
window.ChargeView = ChargeView;
var PrizeView = /** @class */ (function (_super) {
    __extends(PrizeView, _super);
    function PrizeView(prize) {
        var _this = _super.call(this) || this;
        _this.prize = prize;
        _this.init();
        return _this;
    }
    PrizeView.prototype.init = function () {
        this.align = Laya.VBox.CENTER;
        var image = new Laya.Image();
        image.skin = this.prize.type == PaoYa.PrizeType.Gold ? "wxlocal/Common/icon-bean-ladder.png" : "wxlocal/Common/icon-hb-ladder.png";
        image.y = -1;
        this.addChild(image);
        var label = new Laya.Label();
        label.color = "#ffffff";
        label.bold = true;
        label.fontSize = 35;
        label.italic = true;
        label.stroke = 5;
        label.strokeColor = "#3ecbff";
        label.text = "X" + this.prize.value;
        this.addChild(label);
    };
    return PrizeView;
}(Laya.VBox));
var PrizeShowView = /** @class */ (function (_super) {
    __extends(PrizeShowView, _super);
    function PrizeShowView(prizes) {
        var _this = _super.call(this) || this;
        _this.prizes = prizes;
        if (prizes.length) {
            _this.init();
        }
        return _this;
    }
    PrizeShowView.prototype.init = function () {
        var _this = this;
        this.align = Laya.HBox.MIDDLE;
        this.prizes.forEach(function (prize, index) {
            var view = new PrizeView(prize);
            view.x = index;
            _this.addChild(view);
        });
        if (this.prizes.length == 1) {
            this.space = 0;
        }
        else {
            this.space = 80;
        }
        this.centerX = 0;
    };
    return PrizeShowView;
}(Laya.HBox));
window.PrizeShowView = PrizeShowView;
var Scene = /** @class */ (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scene.prototype.viewDidLoad = function () {
        var _this = this;
        var view = this.view;
        if (view && view.goldView) {
            view.goldView.on(Laya.Event.CLICK, this, function () {
                _this.chargeHandler();
            });
        }
        if (view && view.moneyView) {
            view.moneyView.on(Laya.Event.CLICK, this, function () {
                _this.txHandler();
            });
        }
        this.refreshUserInfo();
        if (PaoYa.DataCenter.user) {
            var user = PaoYa.DataCenter.user;
            if (user.nickname) {
                var label = view.userView.getChildByName("label");
                label.text = PaoYa.Utils.formatName(user.nickname);
                var sprite = view.userView.getChildByName("nameBg");
                if (sprite) {
                    sprite.graphics.clear();
                    var width = PaoYa.Utils.measureWidth(label.text) + 80;
                    //  var width = label.text.measureWidth() + 37 + 25;
                    sprite.graphics.drawPath(0, 0, PaoYa.Utils.makeAllCornerRoundRectPath(width, 50, 25), {
                        fillStyle: "#000000"
                    });
                }
            }
            if (user.avstar) {
                var icon = view.userView.getChildByName("icon");
                icon.skin = user.avstar;
            }
        }
        if (view.btnBack) {
            view.btnBack.clickHandler = Laya.Handler.create(this, this.backButtonHandler);
        }
    };
    Scene.prototype.refreshUserInfo = function () {
        if (!this.view) {
            return;
        }
        if (PaoYa.DataCenter.user) {
            if (this.view.goldView) {
                var label = this.view.goldView.getChildByName("label");
                label && (label.text = PaoYa.DataCenter.user.gold + "");
            }
            if (this.view.moneyView) {
                var label = this.view.moneyView.getChildByName("label");
                label && (label.text = PaoYa.DataCenter.user.rmb + "");
            }
        }
    };
    Scene.prototype.viewWillAppear = function () {
        _super.prototype.viewWillAppear.call(this);
        this.updateChips();
    };
    /**充值功能 */
    Scene.prototype.chargeHandler = function () {
        var _this = this;
        Service.goToCharge(function () {
            _this.refreshUserInfo();
        });
    };
    /**提现功能 */
    Scene.prototype.txHandler = function () {
        var url = PaoYa.DataCenter.config.common_config.hall_img.split(";").randomItem;
        var view = new WithDrawAlert();
        view.popup();
        view.onClosed = function (type) {
            if (type == Laya.Dialog.OK) {
                Service.navigateToMiniProgram({
                    appId: "wx6c6a845c3a61e971",
                    images: [url],
                    path: "pages/index?to=1",
                    envVersion: "release"
                });
            }
        };
    };
    /**用户头像点击回调 */
    Scene.prototype.userViewHandler = function () {
    };
    /**返回按钮点击时触发的方法 */
    Scene.prototype.backButtonHandler = function () {
        this.navigator.pop();
    };
    /**自动更新用户金币数 */
    Scene.prototype.updateChips = function () {
        var _this = this;
        if (!PaoYa.DataCenter.user) {
            return;
        }
        this.GET("update_chips", {}, function (res) {
            if (res.pao_gold != undefined) {
                PaoYa.DataCenter.user.gold = res.pao_gold;
            }
            if (res.rmb != undefined) {
                PaoYa.DataCenter.user.rmb = res.rmb;
            }
            _this.refreshUserInfo();
        });
    };
    return Scene;
}(PaoYa.Scene));
window.Scene = Scene;
var SettingDialog = /** @class */ (function (_super) {
    __extends(SettingDialog, _super);
    function SettingDialog() {
        var _this = _super.call(this) || this;
        _this.height = 770;
        _this.width = 540;
        return _this;
    }
    SettingDialog.setUp = function () {
        if (localStorage.getItem("musicSwitchState")) {
            Laya.SoundManager.musicMuted = true;
        }
        else {
            Laya.SoundManager.musicMuted = false;
        }
        if (localStorage.getItem("effectSwitchState")) {
            Laya.SoundManager.soundMuted = true;
        }
        else {
            Laya.SoundManager.soundMuted = false;
        }
    };
    //1:off;2:on
    SettingDialog.prototype.onEnable = function () {
        this.btnCopy.on(Laya.Event.CLICK, this, this.copy);
        this.musicSwitch.on(Laya.Event.CLICK, this, this.setMusicVolume);
        this.effectSwitch.on(Laya.Event.CLICK, this, this.setEffectVolume);
        if (localStorage.getItem("musicSwitchState")) {
            this.musicSwitch.skin = "wxlocal/Common/volumeBar0.png";
            Laya.SoundManager.musicMuted = true;
        }
        else {
            this.musicSwitch.skin = "wxlocal/Common/volumeBar1.png";
            Laya.SoundManager.musicMuted = false;
        }
        if (localStorage.getItem("effectSwitchState")) {
            this.effectSwitch.skin = "wxlocal/Common/volumeBar0.png";
            Laya.SoundManager.soundMuted = true;
        }
        else {
            this.effectSwitch.skin = "wxlocal/Common/volumeBar1.png";
            Laya.SoundManager.soundMuted = false;
        }
    };
    SettingDialog.prototype.getSceneUrl = function () {
        return "scene/Common/SettingDialog.json";
    };
    SettingDialog.prototype.copy = function () {
        wx.setClipboardData({
            data: "泡泡游戏",
            success: function () {
                Toast.showModal("提示", "已复制到粘贴板");
            }
        });
    };
    SettingDialog.prototype.setMusicVolume = function () {
        Laya.SoundManager.musicMuted = !Laya.SoundManager.musicMuted;
        localStorage.setItem("musicSwitchState", Laya.SoundManager.musicMuted);
        this.musicSwitch.skin = Laya.SoundManager.musicMuted ? "wxlocal/Common/volumeBar0.png" : "wxlocal/Common/volumeBar1.png";
    };
    SettingDialog.prototype.setEffectVolume = function () {
        Laya.SoundManager.soundMuted = !Laya.SoundManager.soundMuted;
        localStorage.setItem("effectSwitchState", Laya.SoundManager.soundMuted);
        this.effectSwitch.skin = Laya.SoundManager.soundMuted ? "wxlocal/Common/volumeBar0.png" : "wxlocal/Common/volumeBar1.png";
    };
    return SettingDialog;
}(PaoYa.Dialog));
window.SettingDialog = SettingDialog;
var TaskReward = /** @class */ (function (_super) {
    __extends(TaskReward, _super);
    function TaskReward(prizes, btnName) {
        var _this = _super.call(this) || this;
        _this.prizes = prizes;
        _this.btnName = btnName;
        _this.width = 520;
        _this.height = 500;
        btnName && (_this.btnName = btnName);
        return _this;
    }
    TaskReward.prototype.onEnable = function () {
        this.setPrizes(200, this.prizes);
        this.btnName && (this.btnOk.label = this.btnName);
    };
    TaskReward.prototype.getSceneUrl = function () {
        return "scene/Common/TaskReward.json";
    };
    return TaskReward;
}(PaoYa.Dialog));
var TaskViewStatus;
(function (TaskViewStatus) {
    TaskViewStatus[TaskViewStatus["noReceive"] = 0] = "noReceive";
    TaskViewStatus[TaskViewStatus["receive"] = 1] = "receive";
    TaskViewStatus[TaskViewStatus["received"] = 2] = "received";
})(TaskViewStatus || (TaskViewStatus = {}));
var TaskView = /** @class */ (function (_super) {
    __extends(TaskView, _super);
    function TaskView(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        _this.giftBoxes = [];
        _this.requestLabels = [];
        _this.boxAnimate = new Laya.Templet();
        PaoYa.Toast.showLoading("");
        return _this;
    }
    TaskView.prototype.getSceneUrl = function () {
        return "scene/Common/TaskView.json";
    };
    TaskView.prototype.onEnable = function () {
        var _this = this;
        var progressRatio = this.data.finish_count / this.data.total_count;
        var maskWidth = this.progressBar.width * progressRatio;
        var cMask = new Laya.Sprite();
        cMask.graphics.drawPath(0, 0, PaoYa.Utils.makeAllCornerRoundRectPath(maskWidth, 16, 8), {
            fillStyle: "#ffffff"
        });
        this.progressBar.mask = cMask;
        this.boxAnimate.loadAni("https://res.xingqiu123.com/wxgame/service/jiang_li.sk");
        this.boxAnimate.on(Laya.Event.COMPLETE, this, function () {
            PaoYa.Toast.hideLoading();
            _this.initStatus();
        });
    };
    TaskView.prototype.initStatus = function () {
        var list = this.data.list;
        for (var i = 0; i < list.length; i++) {
            this.giftBoxes.push(this.giftBoxesInfo._children[i]._children[0]);
            this.requestLabels.push(this.giftBoxesInfo._children[i]._children[1]);
            this.giftBoxes[i].posX = this.giftBoxesInfo._children[i].x;
            this.giftBoxes[i].posY = this.giftBoxesInfo._children[i].y;
            this.giftBoxes[i].taskId = list[i].task_id;
            this.giftBoxes[i].status = list[i].status; //0 未完成  1 完成未领取 2 领取
            this.giftBoxes[i].taskReward = list[i].task_reward;
            this.requestLabels[i].text = list[i].num + "个人";
            this.initBoxStatus(this.giftBoxes[i]);
            this.giftBoxes[i].on(Laya.Event.CLICK, this.giftBoxes[i], this.clickBoxes);
        }
        this.numberOk.text = this.data.finish_count + "/" + this.data.total_count;
    };
    TaskView.prototype.initBoxStatus = function (box) {
        switch (box.status) {
            case TaskViewStatus.noReceive:
                box.skin = "wxlocal/Task/box-noReceive-" + box.taskId + ".png";
                break;
            case TaskViewStatus.receive:
                box.skin = null;
                var boxSkeleton = this.boxAnimate.buildArmature(0);
                box.boxSkeleton = boxSkeleton;
                boxSkeleton.pos(70, 70);
                boxSkeleton.play("jiang_li_" + box.taskId, true);
                box.addChild(boxSkeleton);
                break;
            case TaskViewStatus.received:
                box.skin = "wxlocal/Task/box-received-" + box.taskId + ".png";
                break;
        }
    };
    TaskView.prototype.clickBoxes = function () {
        switch (this.status) {
            case TaskViewStatus.noReceive:
                var view1 = new TaskReward(PaoYa.DataCenter.formatPrize(this.taskReward));
                view1.popup();
                break;
            case TaskViewStatus.receive:
                var btnName = "领取";
                var view2_1 = new TaskReward(PaoYa.DataCenter.formatPrize(this.taskReward), btnName);
                view2_1.onClosed = function () {
                    var _this = this;
                    PaoYa.Toast.showLoading("");
                    PaoYa.Request.POST("share_task_reward", { task_id: this.taskId }, function (res) {
                        PaoYa.Toast.hideLoading();
                        _this.boxSkeleton.destroy();
                        _this.skin = "wxlocal/Task/box-received-" + _this.taskId + ".png";
                        _this.alpha = 1;
                        _this.status = 2;
                        view2_1.close();
                    }, function () {
                        PaoYa.Toast.hideLoading();
                    });
                };
                view2_1.popup();
                break;
            case TaskViewStatus.received:
                console.log("已经领取");
                break;
        }
    };
    TaskView.prototype.destroy = function () {
        for (var i = 0; i < this.giftBoxes.length; i++) {
            if (this.giftBoxes[i].boxSkeleton) {
                this.giftBoxes[i].boxSkeleton.destroy();
            }
        }
        _super.prototype.destroy.call(this);
    };
    return TaskView;
}(PaoYa.View));
window.TaskView = TaskView;
var GameAgainDialog = /** @class */ (function (_super) {
    __extends(GameAgainDialog, _super);
    function GameAgainDialog() {
        return _super.call(this) || this;
    }
    GameAgainDialog.prototype.getSceneUrl = function () {
        return "scene/Common/GameAgain.json";
    };
    GameAgainDialog.prototype.show = function (isSender, name) {
        this.isSender = isSender;
        if (isSender) {
            this.bSender.visible = true;
            this.lblSender.text = name;
            this.bReceiver.visible = false;
            this.btnRefuse.visible = false;
            this.btnAccept.visible = false;
            this.btnSend.visible = true;
            this.btnSend.skin = "wxlocal/Common/btn_normal.png";
            this.btnSend.label = "取消邀请";
            this.btnSend.name = Laya.Dialog.CANCEL;
        }
        else {
            this.bReceiver.visible = true;
            this.lblReceiver.text = name;
            this.bSender.visible = false;
            this.btnRefuse.visible = true;
            this.btnAccept.visible = true;
            this.btnSend.visible = false;
        }
        this.callLater(this.reloadView);
        this.popup(true);
        this.startTimer();
    };
    GameAgainDialog.prototype.hide = function () {
        this.stopTimer();
        this.close("");
    };
    GameAgainDialog.prototype.reloadView = function () {
        if (this.isSender) {
            this.bSender.refresh();
            this.bSender.centerX = 0;
        }
        else {
            this.bReceiver.refresh();
            this.bReceiver.centerX = 0;
        }
    };
    GameAgainDialog.prototype.startTimer = function (duration) {
        if (duration === void 0) { duration = 30; }
        this.duration = duration;
        this.timerHandler();
        Laya.timer.loop(1000, this, this.timerHandler);
    };
    GameAgainDialog.prototype.stopTimer = function () {
        Laya.timer.clear(this, this.timerHandler);
    };
    GameAgainDialog.prototype.timerHandler = function () {
        if (this.duration >= 0) {
            this.lblTime.text = this.duration + "s";
            this.duration--;
        }
        else {
            if (this.isSender) {
                this.btnSend.skin = "wxlocal/Common/btn_gray.png";
                this.btnSend.label = "对方未接受";
                this.btnSend.name = Laya.Dialog.CLOSE;
            }
            this.stopTimer();
            this.close("close");
        }
    };
    return GameAgainDialog;
}(PaoYa.Dialog));
var GameAgainService = /** @class */ (function (_super) {
    __extends(GameAgainService, _super);
    function GameAgainService(userId, name) {
        var _this = _super.call(this) || this;
        _this.userId = userId;
        _this.name = name;
        _this.addListener();
        return _this;
    }
    /**显示再来一局弹窗，传入对方的名字 */
    GameAgainService.prototype.showGameAgain = function (isSender) {
        var _this = this;
        if (isSender === void 0) { isSender = true; }
        if (this.lastTime) {
            var now = new Date();
            if (now.valueOf() - this.lastTime.valueOf() < 3000) {
                var view = new AlertDialog("提示", "操作过快，请稍候重试");
                view.popup();
                return;
            }
        }
        this.lastTime = new Date();
        if (!this.view) {
            Laya.Dialog.manager = null;
            Laya.UIConfig.closeDialogOnSide = false;
            var view = new GameAgainDialog();
            view.onClosed = function (type) {
                Laya.UIConfig.closeDialogOnSide = true;
                if (type == Laya.Dialog.OK) {
                    _this.sendMessage(PaoYa.Client.AGIAN_SEND, { user_id: _this.userId });
                }
                else if (type == Laya.Dialog.NO) {
                    _this.sendMessage(PaoYa.Client.AGAIN_REJECT, { user_id: _this.userId });
                }
                else if (type == Laya.Dialog.CANCEL) {
                    _this.sendMessage(PaoYa.Client.AGAIN_CANCAL, { user_id: _this.userId });
                }
                else {
                }
            };
            this.view = view;
        }
        if (!this.view._getBit(0x08)) {
            this.showDialog(isSender);
        }
        else {
            this.view.on("onViewCreated", this, function () {
                this.showDialog(isSender);
            });
        }
    };
    GameAgainService.prototype.showDialog = function (isSender) {
        this.view.show(isSender, this.name);
        if (isSender) {
            this.sendMessage(PaoYa.Client.AGIAN_SEND, { user_id: this.userId });
        }
    };
    GameAgainService.prototype.addListener = function () {
        this.onMessage(PaoYa.Client.AGAIN_REJECT, this, this.rejectHandler);
        this.onMessage(PaoYa.Client.AGIAN_SEND, this, this.receiveHandler);
        this.onMessage(PaoYa.Client.AGAIN_CANCAL, this, this.cancelHandler);
        this.onMessage(PaoYa.Client.GAME_START_GAME, this, this.startGameHandler);
    };
    /**邀请被拒绝 */
    GameAgainService.prototype.rejectHandler = function () {
        if (!this.view || !this.view.isPopup || !this.view.isSender)
            return;
        this.view.hide();
        var view = new AlertDialog("提示", "对方已拒绝");
        view.popup();
    };
    /**邀请被取消 */
    GameAgainService.prototype.cancelHandler = function () {
        if (!this.view || !this.view.isPopup || this.view.isSender)
            return;
        this.view.hide();
        var view = new AlertDialog("提示", "对方已取消");
        view.popup();
    };
    /**收到邀请 */
    GameAgainService.prototype.receiveHandler = function (res) {
        if (!this.view || !this.view.isPopup) {
            this.showGameAgain(false);
        }
    };
    GameAgainService.prototype.startGameHandler = function (res) {
        this.view && this.view.hide();
        this.event(GameAgainService.START_GAME, res);
    };
    GameAgainService.prototype.destroy = function () {
        if (this.view && this.view.isPopup) {
            this.view.hide();
            this.view = null;
        }
        _super.prototype.destroy.call(this);
    };
    GameAgainService.START_GAME = "start_game";
    return GameAgainService;
}(PaoYa.Scene));
window.GameAgainService = GameAgainService;
