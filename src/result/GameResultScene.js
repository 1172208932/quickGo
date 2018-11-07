import GameResultView from "./GameResultView";
import GameScene from "../game/GameScene";
import MatchGradeScene from '../MatchGrade/MatchGradeScene'
import Sound from "../common/Sound";
import ShareDialog from "../dialog/ShareDialog";
import HomeScene from "../Home/HomeScene";
// import SelectGameScene from "../Home/SelectGameScene";

export default class GameResultScene extends PaoYa.Scene {
    constructor(e, data) {
        super()
        this.view = new GameResultView(e, data, PaoYa.DataCenter.matchSUccessData)
        this.shareBean = false;
        this.onMessage(PaoYa.Client.DISCONNECT, this, function () {
            console.log('收到对方离开游戏命令');
            this.view.setBtn();
        });
        if (PaoYa.DataCenter.gameType == "friend") {
            var name = PaoYa.DataCenter.game_params.other.user_name;
            var id = PaoYa.DataCenter.game_params.other.user_id;
            this.gameAgainService = new GameAgainService(id, name);
            this.gameAgainService.on(GameAgainService.START_GAME, this, function (data) {
                var gameScene = new GameScene(PaoYa.DataCenter.game_params)
                PaoYa.Game.ins.navigator.push(gameScene);
                this.navigator.replace(GameScene, gameScene);
            });
        }
    }
    viewDidAppear() {
        var _this = this;
        this.GET("/props_refresh_time_get", { type: 0 }, function (data) {
            if (data.is_get == 1) {
                PaoYa.DataCenter.isGet = true
            } else {
                PaoYa.DataCenter.isGet = false
            }
        })
    }
    viewDidLoad() {
        Sound.onPlayHomeMusic()

    }
    onViewClick(e) {
        switch (e.target.name) {
            case 'btnAgain':
                var _this = this;
                if (PaoYa.DataCenter.gameType == "friend") {
                    _this.gameAgainService.showGameAgain();
                } else {
                    this.GET("update_chips", {}, function (data) {
                        PaoYa.DataCenter.user.gold = data.pao_gold;
                        _this.goMatchScene();
                    })
                }
                break
            case 'btnBack':
                if (PaoYa.DataCenter.gameType == "friend") {
                    this.navigator.popToRootScene();
                    this.sendMessage(PaoYa.Client.LEAVE_ROOM, {});
                } else {
                    let scene = this.navigator.findSceneWithClass(MatchGradeScene)
                    this.navigator.popToScene(scene)
                }
                break
            case 'btnShowy':
                PaoYa.ShareManager.share(PaoYa.DataCenter.config.game.share_list.randomItem, PaoYa.DataCenter.config.game.share_img.randomItem, {}, function () { });
                break
            case 'btnChangeLuck':
                console.log('更改')

                var jumpInfo = PaoYa.DataCenter.config.common_config.share_info.randomItem;
                Service.navigateToMiniProgram({
                    appId: jumpInfo.appId,
                    images: [jumpInfo.img]
                });
                break
            case 'btnShowGigt':
                this.shareBean = true
                PaoYa.ShareManager.share(PaoYa.DataCenter.config.game.share_list.randomItem, PaoYa.DataCenter.config.game.share_img.randomItem, {}, function () { });
                break
            case 'btnCheat':
                if (PaoYa.DataCenter.gameType == "friend") {
                    let scene = this.navigator.findSceneWithClass(HomeScene)
                    this.navigator.popToScene(scene)
                } else {
                    PaoYa.DataCenter.DialogProps= 1
                    let scene = this.navigator.findSceneWithClass(MatchGradeScene)
                    this.navigator.popToScene(scene)
                    // let toMatch = new MatchGradeScene(1)
                    // this.navigator.push(toMatch)
                }
                break
        }
    }
    goMatchScene() {
        var type = PaoYa.DataCenter.config.game.match_type;
        switch (MatchGradeScene.matchTypeId) {
            case type[0].id:
                // this.event(MatchGradeScene.goNovice)
                MatchGradeScene.goNovice();
                break;
            case type[1].id:
                MatchGradeScene.goPrimary();
                break;
            case type[2].id:
                // this.event(MatchGradeScene.MIDDLE,{})
                MatchGradeScene.goMiddle();
                break;
        }
    }

    onShow() {
        this.view.btnShowy.disabled = true
        this.view.btnShowGigt.disabled = true
        this.view.btnChangeLuck.disabled = true
        this.view.btnCheat.disabled = true
        if (this.shareBean) {
            Laya.Scene.open('scene/dialog/ShareDialog.json')
            this.POST('/surfing_wins_reward', {}, function (data) {
            })
            var _this = this
            this.GET("update_chips", {}, function (data) {
                PaoYa.DataCenter.user.gold = data.pao_gold;
            })
            this.shareBean = false
        }
    }

    onDestroy() {
        this.gameAgainService && this.gameAgainService.destroy();
    };
}