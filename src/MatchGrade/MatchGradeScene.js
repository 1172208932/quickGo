import MatchGradeView from "./MatchGradeView";
import GameOverScene from "../result/GameResultScene";
import MatchScene from "./MatchScene";
import GameResultScene from "../result/GameResultScene";
import GetPropDialog from "../dialog/GetPropDialog";
import Sound from "../common/Sound";

export default class MatchGradeScene extends Scene {
    constructor(a) {
        super();
        this.upDialog = a 
        var params = PaoYa.DataCenter.config.game.match_type;
        this.view = new MatchGradeView(params);
    }
    onViewClick() {
    }

    viewWillAppear() {
        // Laya.Scene.open('scene/dialog/GetPropDialog.json')
        var view = this.view;
        view.on(MatchGradeView.NOVICE, this, MatchGradeScene.goNovice);
        view.on(MatchGradeView.PRIMARY, this, MatchGradeScene.goPrimary);
        view.on(MatchGradeView.MIDDLE, this, MatchGradeScene.goMiddle);
        view.on(MatchGradeView.QUICKMATCH, this, MatchGradeScene.quickMatch);
        view.on(MatchGradeView.CHARGE, this, this.charge);
        view.on(MatchGradeView.TIXIAN, this, this.tiXianHandler);
        view.on(MatchGradeView.BACK, this, this.backHandler);
    }
    viewDidAppear() {
        // let rolechange = new GetPropDialog()
        // rolechange.popup();
            if ( this.upDialog ==1){
                this.toGetProp()
            }
        var _this = this;
        this.requestData()
        PaoYa.Toast.showLoading("");
        this.GET("update_chips", {
        }, function (data) {
            _this.view.setQuickMatchSession(data.pao_gold);//设置快速匹配场次
            //获取人数
            _this.GET("get_match_type_count", {
            }, function (data) {
                PaoYa.Toast.hideLoading();
                // PaoYa.DataCenter.roundLimit = data.round_limit;
                _this.view.setPeopleCount(data.list);
            }, function () {
                PaoYa.Toast.hideLoading();
            })
        })
    }
    requestData() {
        var _this = this;
        this.GET("/props_refresh_time_get", { type: 0 }, function (data) {
            if (data.is_get == 1) {
                _this.view.timeDown.visible = false
                _this.view.btnPropGet.mouseEnabled = true
            } else {
                _this.view.btnPropGet.mouseEnabled = false
                _this.changeTime(data)
            }
        })
    }
    changeTime(data) {
        function timest() {
            var tmp = Date.parse(new Date()).toString();
            tmp = tmp.substr(0, 10);
            return tmp;
        }

        let time = data.get_time
        let timestamp = timest()
        let newTime = time - timestamp

        function secondToDate(result) {
            var m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
            var s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
            return result = m + ":" + s;
        }
        let mm = secondToDate(newTime)
        this.view.timeDown.text = mm
        Laya.timer.loop(1000, this, () => {
            newTime--
            if (newTime <= 0) {
                this.requestData()
            }
            let mm = secondToDate(newTime)
            this.view.timeDown.text = mm
        })
    }
    // backHandler() {
    //     this.navigator.pop();
    // }
    toGetProp() {
        let propChange = new GetPropDialog()
        this.propChange = propChange
        propChange.popup();

        // Laya.Scene.open('scene/dialog/GetPropDialog.json')
    }

    static goNovice() {
        console.log("新手场")
        var _this = this;
        if (MatchGradeScene.showLimitWarn()) {
            return;
        }

        var matchType = PaoYa.DataCenter.config.game.match_type;
        /* if (!Service.hasEnoughMoney(matchType[0].cost + matchType[0].entry_fee)) {
            return;
        } */
        if (PaoYa.DataCenter.user.gold < matchType[0].cost + matchType[0].entry_fee) {
            var message = Laya.Browser.onIOS ? "观看广告可获得豆子奖励哦！关注“泡泡游戏”公众号，每周领取豆子礼包!" : "豆子不足,观看广告即可获得豆子奖励哦！";
            var btnText = Laya.Browser.onIOS ? "领礼包" : "去充值";
            var warn = new AlertDialog("豆子不足", message, btnText, function () {
                if (Laya.Browser.onIOS) {
                    Service.ToMiniProgramForReward();
                } else {
                    Service.goToCharge();
                }
            }, "观看广告", function () {
                Service.goToAds();
            })
            warn.popup();
            Laya.timer.callLater(this, function () {
                // warn.btnCancel.skin = "wxlocal/Common/btnYellow.png";
                // warn.btnOK.skin = "wxlocal/Common/btnBlue.png";
            })
            return;
        }
        if (PaoYa.DataCenter.user.gold > matchType[0].limit.split("-")[1]) {
            var warn = new AlertDialog("提示", "您的水平很高超，参加高级场次可以赢取更多豆子哦。", "立即参加", function () {
                MatchGradeScene.quickMatch();
            }, "跳过");

            warn.popup();
            // warn.btnCancel.skin = "wxlocal/Common/btnGray.png";
            // warn.btnOK.skin = "wxlocal/Common/btnBlue.png";
        } else {
            MatchGradeScene.goMatch(matchType[0].id);
        }
    }

    static goPrimary() {
        var matchType = PaoYa.DataCenter.config.game.match_type;
        console.log("初级场")
        var _this = this;
        if (MatchGradeScene.showLimitWarn()) {
            return;
        }
        if (PaoYa.DataCenter.user.gold < matchType[1].limit.split("-")[0]) {
            var message = Laya.Browser.onIOS ? "观看广告可获得豆子奖励哦！关注“泡泡游戏”公众号，每周领取豆子礼包!" : "豆子不足,观看广告即可获得豆子奖励哦！";
            var btnText = Laya.Browser.onIOS ? "领礼包" : "去充值";
            var warn = new AlertDialog("提示", message, btnText, function () {
                if (Laya.Browser.onIOS) {
                    Service.ToMiniProgramForReward();
                } else {
                    Service.goToCharge();
                }
            }, "观看广告", function () {
                Service.goToAds();
            });

            warn.popup();
            // warn.btnCancel.skin = "wxlocal/Common/btnYellow.png";
            // warn.btnOK.skin = "wxlocal/Common/btnBlue.png";
            return;
        }
        if (matchType[1].limit.split("-")[1] && PaoYa.DataCenter.user.gold > matchType[1].limit.split("-")[1]) {
            var warn = new AlertDialog("提示", "您的水平很高超，参加高级场次可以赢取更多豆子哦。", "立即参加", function () {
                MatchGradeScene.quickMatch();
            }, "跳过");
            // warn.btnCancel.skin = "wxlocal/Common/btnGray.png";
            // warn.btnOK.skin = "wxlocal/Common/btnBlue.png";
            warn.popup();
        } else {
            //进入匹配
            MatchGradeScene.goMatch(matchType[1].id);
        }
    }

    static goMiddle() {
        var matchType = PaoYa.DataCenter.config.game.match_type;
        console.log("中级场")
        if (MatchGradeScene.showLimitWarn()) {
            return;
        }
        //？？提示有问题 
        if (PaoYa.DataCenter.user.gold < matchType[2].limit.split("-")[0]) {
            var message = Laya.Browser.onIOS ? "您可以去其他比赛场赚豆子哦！关注“泡泡游戏”公众号，每周领取豆子礼包！" : "豆子不足,请充值或去其他场赚豆子";
            var btnText = Laya.Browser.onIOS ? "领礼包" : "去充值";
            var warn = new AlertDialog("豆子不足", message, btnText, function () {
                if (Laya.Browser.onIOS) {
                    Service.ToMiniProgramForReward();
                } else {
                    Service.goToCharge();
                }
            }, "跳过");
            // warn.btnCancel.skin = "wxlocal/Common/btnGray.png";
            // warn.btnOK.skin = "wxlocal/Common/btnYellow.png";
            warn.popup();
            return;
        } else {
            //进入匹配
            MatchGradeScene.goMatch(matchType[2].id);
        }

    }

    static quickMatch() {
        var matchType = PaoYa.DataCenter.config.game.match_type;
        console.log("快速匹配")
        var currentId = PaoYa.DataCenter.currentId;
        switch (currentId) {
            case matchType[0].id:
                MatchGradeScene.goNovice();
                break;
            case matchType[1].id:
                MatchGradeScene.goPrimary();
                break;
            case matchType[2].id:
                MatchGradeScene.goMiddle();
                break;
        }
    }

    static goMatch(id) {
        this.matchTypeId = id;
        var _this = this;
        PaoYa.DataCenter.gameType = 'randMatch';
        var info = MatchGradeScene.getInfoById(id);
        if (PaoYa.Game.ins.navigator.visibleScene instanceof GameResultScene) {
            var matchScene = new MatchScene({
                matchTypeId: id,
                matchCost: info.cost,
                ticketCost: info.entry_fee
            });
            console.log(1111111, matchScene);
            PaoYa.Game.ins.navigator.replace(MatchScene, matchScene);
            return;
        }
        var match = new MatchScene({
            matchTypeId: _this.matchTypeId,
            matchCost: info.cost,
            ticketCost: info.entry_fee
        });
        PaoYa.Game.ins.navigator.push(match);
    }

    static getInfoById(id) {
        return PaoYa.DataCenter.config.game.match_type.filter(function (item) {
            return item.id == id;
        })[0];
    }

    static showLimitWarn() {
        if (PaoYa.DataCenter.roundLimit && !PaoYa.DataCenter.matchWarnDialog) {
            var matchWarnDialog = new AlertDialog("提示", "您已经进入疲劳游戏时间，为了您的身心健康，请适度休息。继续游戏将不再产生收益", "知道了");
            matchWarnDialog.popup();
            PaoYa.DataCenter.matchWarnDialog = matchWarnDialog;
            return true;
        }
        return false;

    }
    onShow() {
        Sound.onPlayHomeMusic()
        if(PaoYa.DataCenter.onShowCan){
            this.GET("/props_refresh_time_get", { type: 1 }, function (data) {
            })
            Laya.timer.once(100, this, function () {
                this.propChange.changeDialog()
                this.requestData()
            })
        }
        PaoYa.DataCenter.onShowCan = false

    }
}