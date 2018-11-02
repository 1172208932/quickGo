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
var IFScene = /** @class */ (function (_super) {
    __extends(IFScene, _super);
    function IFScene() {
        var _this = _super.call(this) || this;
        _this.addListener();
        return _this;
    }
    IFScene.prototype.addListener = function () {
        var _this = this;
        this.onMessage(PaoYa.Client.DISCONNECT, this, function (value, code, msg) {
            //{owner_id:1377551}
            if (code != 200) {
                return;
            }
            if (!_this.isActive) {
                return;
            }
            _this.onDisconnect(value, code, msg);
        });
        this.onMessage(PaoYa.Client.SHARE_RECEIVE_INVITE, this, function (value, code, msg) {
            if (code != 200) {
                return;
            }
            if (!_this.isActive) {
                return;
            }
            _this.peopleJoinRoomInfo = value;
            _this.onPeopleJoinRoom(value, code, msg);
        });
        this.onMessage(PaoYa.Client.GAME_START_GAME, this, function (value, code, msg) {
            if (code != 200) {
                return;
            }
            if (!_this.isActive) {
                return;
            }
            _this.startGameHandler && _this.startGameHandler(_this.peopleJoinRoomInfo, value);
        });
    };
    /**子类实现 */
    IFScene.prototype.onDisconnect = function (value, code, msg) {
    };
    /**子类实现 */
    IFScene.prototype.onPeopleJoinRoom = function (value, code, msg) {
    };
    return IFScene;
}(PaoYa.Scene));
var IFHostView = /** @class */ (function (_super) {
    __extends(IFHostView, _super);
    function IFHostView() {
        return _super.call(this) || this;
    }
    IFHostView.prototype._initview = function () {
        this.toggleEnable(false);
        var myInfoView = new UserView();
        myInfoView.pos(57, 406);
        this.addChild(myInfoView);
        this.myInfoView = myInfoView;
        var otherInfoView = new UserView(UserViewStyle.Girl);
        otherInfoView.pos(496, 406);
        this.addChild(otherInfoView);
        this.otherInfoView = otherInfoView;
        this.otherInfoView.visible = false;
        this.btnInvite.visible = true;
        this.graphics.drawRect(0, 0, this.width, this.height, "#8585e9");
        this.btnStart.clickHandler = Laya.Handler.create(this, function () {
            this.event(IFHostView.START);
        }, null, false);
        this.btnBack.clickHandler = Laya.Handler.create(this, function () {
            this.event(IFHostView.BACK);
        }, null, false);
        this.btnInvite.clickHandler = Laya.Handler.create(this, function () {
            this.event(IFHostView.INVITE);
        }, null, false);
        // this.initTips();
    };
    IFHostView.prototype.getSceneUrl = function () {
        return "scene/InviteFriend/IFHostView.json";
    };
    IFHostView.prototype.initTips = function () {
        var tipLabel = new Laya.Label();
        var tipsText = "Tips:" + PaoYa.DataCenter.config.game.strategy.split(';').randomItem;
        console.log(tipsText);
        tipLabel.text = tipsText;
        tipLabel.width = 600;
        tipLabel.color = "#b1a3a3";
        tipLabel.wordWrap = true;
        tipLabel.align = "center";
        tipLabel.leading = 10;
        tipLabel.fontSize = 22;
        tipLabel.x = (this.width - tipLabel.width) / 2;
        tipLabel.y = 1100;
        this.addChild(tipLabel);
    };
    IFHostView.prototype.toggleEnable = function (enable) {
        this.btnStart.disabled = !enable;
        this.lblTitle.text = enable ? "对手已就位，开始碾压TA吧" : "拉好友过来玩,趁机虐虐";
    };
    IFHostView.prototype.setMyInfo = function (data) {
        this.myInfoView.setData(data);
    };
    IFHostView.prototype.setOtherInfo = function (data) {
        this.otherInfoView.setData(data);
    };
    IFHostView.prototype.reset = function () {
        this.otherInfoView.visible = false;
        this.btnInvite.visible = true;
        this.toggleEnable(false);
    };
    IFHostView.BACK = "back";
    IFHostView.START = "start";
    IFHostView.INVITE = "invite";
    return IFHostView;
}(PaoYa.View));
var IFHostScene = /** @class */ (function (_super) {
    __extends(IFHostScene, _super);
    function IFHostScene() {
        var _this = _super.call(this) || this;
        var view = new IFHostView();
        _this.view = view;
        return _this;
    }
    IFHostScene.prototype.viewDidLoad = function () {
        var _this = this;
        if (this.view) {
            // Toast.showLoading("");
            this.GET("get_share_task", {}, function (data) {
                PaoYa.Toast.hideLoading();
                var taskview = new TaskView(data);
                taskview.y = 1134;
                _this.view.addChild(taskview);
            });
        }
        this.view._initview();
        this.initView();
    };
    IFHostScene.prototype.onHide = function (res) {
        if (res.mode != "hide") {
            this.sendMessage(PaoYa.Client.LEAVE_ROOM, {});
        }
    };
    IFHostScene.prototype.initView = function () {
        var _this = this;
        var user = PaoYa.DataCenter.user;
        var view = this.view;
        view.setMyInfo({
            name: PaoYa.Utils.formatName(user.nickname),
            icon: PaoYa.Utils.makeIcon(user.avstar),
            gender: PaoYa.Utils.makeGenderIcon(user.gender),
            ladder: PaoYa.DataCenter.makeLadderIconById(PaoYa.DataCenter.rawData.ladder_id),
            city: (user.member_province || "") + ' ' + user.city
        });
        view.setOtherInfo({
            gender: "",
            icon: PaoYa.Utils.makeIcon(""),
        });
        view.toggleEnable(false);
        view.on(IFHostView.BACK, this, function () {
            PaoYa.Toast.showModal("提示", "确定退出房间?", "确定", function () {
                _this.sendMessage(PaoYa.Client.LEAVE_ROOM, {});
                if (PaoYa.DataCenter.isFromMiniProgram) {
                    window.game.exit();
                }
                else {
                    _this.navigator.pop();
                }
            }, "取消");
        });
        view.on(IFHostView.START, this, function () {
            _this.sendMessage(PaoYa.Client.SHARE_START_GAME, { type: 1 });
        });
        view.on(IFHostView.INVITE, this, function () {
            this.inviteFriendOk();
        });
    };
    IFHostScene.prototype.onDisconnect = function (value, code, msg) {
        var userId = value.user_id + "";
        var rname = value.room_name;
        var view = this.view;
        view.reset();
    };
    IFHostScene.prototype.onPeopleJoinRoom = function (value, code, msg) {
        var _this = this;
        if (value && value.status == 1 && value.invite_user) {
            var inviteUser = value.invite_user;
            if (inviteUser.user_id == PaoYa.DataCenter.user.id) {
                var user = value.receive_user;
                var view = this.view;
                view.otherInfoView.visible = true;
                view.btnInvite.visible = false;
                view.setOtherInfo({
                    name: PaoYa.Utils.formatName(user.user_name),
                    icon: PaoYa.Utils.makeIcon(user.user_icon),
                    gender: PaoYa.Utils.makeGenderIcon(user.gender),
                    ladder: PaoYa.DataCenter.makeLadderIconById(user.ladder_id),
                    city: user.location
                });
                view.toggleEnable(true);
                view.setMyInfo({
                    city: inviteUser.location
                });
            }
            else {
                PaoYa.Toast.showModal("提示", "数据出错", "退出房间", function () {
                    _this.navigator.pop();
                });
            }
        }
        else {
            PaoYa.Toast.showModal("提示", "邀请人进入房间失败", "退出房间", function () {
                _this.navigator.pop();
            });
        }
    };
    IFHostScene.prototype.inviteFriendOk = function () {
        var title = PaoYa.DataCenter.config.game.share_list.randomItem;
        var params = {
            rname: PaoYa.DataCenter.rname,
            type: 1,
            id:PaoYa.DataCenter.user.id
        };
        PaoYa.ShareManager.shareTitle(title, params, function () {
        }, function () {
        });
    };
    return IFHostScene;
}(IFScene));
var IFMemberView = /** @class */ (function (_super) {
    __extends(IFMemberView, _super);
    function IFMemberView() {
        return _super.call(this) || this;
    }
    IFMemberView.prototype._initView = function () {
        var _this = this;
        var host = new UserView();
        host.centerX = 0;
        host.y = 506;
        this.addChild(host);
        this.host = host;
        this.graphics.drawRect(0, 0, this.width, this.height, "#8585e9");
        this.btnAgree.clickHandler = Laya.Handler.create(this, function () {
            _this.event(IFMemberView.AGREE);
        }, null, false);
        this.btnCancel.clickHandler = Laya.Handler.create(this, function () {
            _this.event(IFMemberView.CANCEL);
        }, null, false);
        // this.initTips();
    };
    IFMemberView.prototype.getSceneUrl = function () {
        return "scene/InviteFriend/IFMemberView.json";
    };
    IFMemberView.prototype.initTips = function () {
        var tipLabel = new Laya.Label();
        var tipsText = "Tips:" + PaoYa.DataCenter.config.game.strategy.split(';').randomItem;
        console.log(tipsText);
        tipLabel.text = tipsText;
        tipLabel.width = 600;
        tipLabel.color = "#b1a3a3";
        tipLabel.wordWrap = true;
        tipLabel.align = "center";
        tipLabel.leading = 20;
        tipLabel.fontSize = 22;
        tipLabel.x = (this.width - tipLabel.width) / 2;
        tipLabel.y = 1220;
        this.addChild(tipLabel);
    };
    IFMemberView.prototype.setUser = function (data) {
        this.host.setData(data);
        this.toggleEnable(true);
    };
    IFMemberView.prototype.toggleEnable = function (enable) {
        this.btnAgree.disabled = !enable;
    };
    IFMemberView.AGREE = "agree";
    IFMemberView.CANCEL = "cancel";
    return IFMemberView;
}(PaoYa.View));
var IFMemberScene = /** @class */ (function (_super) {
    __extends(IFMemberScene, _super);
    function IFMemberScene(params) {
        var _this = _super.call(this) || this;
        _this.params = params;
        // this.initData()
        var view = new IFMemberView();
        _this.view = view;
        _this.joinRoom();
        return _this;
    }
    IFMemberScene.prototype.onHide = function (res) {
        if (res.mode != "hide") {
            this.sendMessage(PaoYa.Client.LEAVE_ROOM, {});
        }
    };
    IFMemberScene.prototype.viewDidLoad = function () {
        var _this = this;
        this.view._initView();
        this.view.on(IFMemberView.CANCEL, this, function () {
            PaoYa.Toast.showModal("提示", "确定退出房间?", "确定", function () {
                _this.sendMessage(PaoYa.Client.LEAVE_ROOM, {});
                _this.navigator.pop();
            }, "取消");
        });
        this.view.on(IFMemberView.AGREE, this, function () {
            _this.sendMessage(PaoYa.Client.SHARE_START_GAME, { type: 1 });
        });
        this.view.setUser({
            name: "等待对方入场...",
            gender: ""
        });
        
    };
    IFMemberScene.prototype.onDisconnect = function () {
        var _this = this;
        PaoYa.Toast.showModal("提示", "对战房间已经过期，去其他地方溜达下吧", "溜达溜达", function () {
            _this.navigator.pop();
        });
    };
    IFMemberScene.prototype.onPeopleJoinRoom = function (value, code, msg) {
        var _this = this;
        if (!value || !value.invite_user) {
            PaoYa.Toast.showModal("提示", "数据出错", "退出房间", function () {
                _this.navigator.pop();
            });
            return;
        }
        var inviteUser = value.invite_user;
        if (value.status == 1) {
            if (inviteUser.user_id == PaoYa.DataCenter.user.id) {
            }
            else {
                var view = this.view;
                view.setUser({
                    name: PaoYa.Utils.formatName(inviteUser.user_name),
                    icon: PaoYa.Utils.makeIcon(inviteUser.user_icon),
                    gender: PaoYa.Utils.makeGenderIcon(inviteUser.gender),
                    ladder: PaoYa.DataCenter.makeLadderIconById(inviteUser.ladder_id),
                    city: inviteUser.location
                });
            }
        }
        else {
            if (value.status == 2) {
                var view = this.view;
                view.setUser({
                    name: PaoYa.Utils.formatName(inviteUser.user_name),
                    icon: PaoYa.Utils.makeIcon(inviteUser.user_icon),
                    gender: PaoYa.Utils.makeGenderIcon(inviteUser.gender),
                    ladder: PaoYa.DataCenter.makeLadderIconById(inviteUser.ladder_id),
                    city: inviteUser.location
                });
                PaoYa.Toast.showModal("提示", "游戏早就开始了，你来晚了", "随便逛逛", function () {
                    _this.navigator.pop();
                });
            }
            else if (value.status == 3) {
                PaoYa.Toast.showModal("提示", "对战房间已经过期，去其他地方溜达下吧", "溜达溜达", function () {
                    _this.navigator.pop();
                });
            }
        }
    };
    // initData() {
    //     this.onMessage(PaoYa.Client.DISCONNECT, this, (value, msg, code) => {
    //         //{owner_id:1377551}
    //         PaoYa.Toast.showModal("提示", "房主已离开", "退出房间", () => {
    //             this.navigator.pop()
    //         })
    //     })
    //     this.onMessage(PaoYa.Client.SHARE_RECEIVE_INVITE, this, (value, msg, code) => {
    //         if (code != 200){return}
    //         if (value.result == "success") {
    //             let inviteUser = value.invite_user
    //             if (inviteUser.user_id == PaoYa.DataCenter.user.id) {
    //             } else {
    //                 let view = this.view as IFMemberView
    //                 view.setUser(inviteUser.user_icon.makeIcon(), inviteUser.user_name.formatName())
    //             }
    //         } else {
    //             PaoYa.Toast.showModal("提示", "对方已经在游戏中", "退出房间", () => {
    //                 this.navigator.pop()
    //             })
    //         }
    //     })
    // }
    IFMemberScene.prototype.joinRoom = function () {
        this.sendMessage(PaoYa.Client.SHARE_RECEIVE_INVITE, { to_id: this.params.id, game_id: PaoYa.Game.ins.gameId, room_name: this.params.rname });
    };
    return IFMemberScene;
}(IFScene));
var InviteService = /** @class */ (function (_super) {
    __extends(InviteService, _super);
    function InviteService() {
        return _super.call(this) || this;
    }
    InviteService.prototype.handleOnShow = function (res) {
        var query = res.query;
        if (query.type == 1) {
            var scene = PaoYa.Game.ins.navigator.visibleScene;
            if (!(scene instanceof IFHostScene) || !(scene instanceof IFMemberScene)) {
                if (query.id != PaoYa.DataCenter.user.id) {
                    this.joinRoom({ id: query.id, rname: query.rname });
                }
            }
            else {
                PaoYa.Toast.showModal("提示", "您已经在游戏房间，不能加入其他房间");
            }
        }
    };
    /**创建邀请房间 */
    InviteService.prototype.createRoom = function () {
        PaoYa.Toast.showLoading("");
        PaoYa.Game.ins.socket.once(PaoYa.Client.SHARE_INVITE_FRIEND, this, this.inviteFriendHandler);
        PaoYa.Game.ins.socket.sendMessage(PaoYa.Client.SHARE_INVITE_FRIEND, { game_id: PaoYa.Game.ins.gameId, type: 1 });
    };
    /**加入房间 */
    InviteService.prototype.joinRoom = function (params) {
        var _this = this;
        PaoYa.Loader.load(["res/atlas/wxlocal/Common.atlas"], this, function () {
            var memberScene = new IFMemberScene(params);
            memberScene.startGameHandler = function (res, value) {
                _this.startGame([res, value]);
            };
            PaoYa.Game.ins.navigator.push(memberScene);
        });
    };
    /**邀请好友回调 */
    InviteService.prototype.inviteFriendHandler = function (value, code, msg) {
        var _this = this;
        // PaoYa.Toast.hideLoading()
        PaoYa.DataCenter.rname = value.room_name;
        PaoYa.Loader.load(["res/atlas/wxlocal/Common.atlas"], this, function () {
            var hostScene = new IFHostScene();
            hostScene.startGameHandler = function (res, value) {
                _this.startGame([res, value]);
            };
            PaoYa.Game.ins.navigator.push(hostScene);
        });
    };
    /**开始游戏 */
    InviteService.prototype.startGame = function (res) {
        this.event(InviteService.START_GAME, res);
    };
    InviteService.START_GAME = "start.game";
    return InviteService;
}(Laya.EventDispatcher));
window.InviteService = InviteService;
