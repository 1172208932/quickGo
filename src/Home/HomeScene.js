import HomeView from "./HomeView";
import RoleChangeScene from "../role/RoleChangeScene";
import GameScene from "../game/GameScene";
import MatchGradeScene from "../MatchGrade/MatchGradeScene";
import RankingListScene from "../Rank/RankingListScene";
import Sound from "../common/Sound";

export default class HomeScene extends Scene {
    constructor() {
        super();
        let homeView = new HomeView();
        this.view = homeView
    }
    viewWillAppear() {

        Scene.prototype.viewWillAppear.call(this);
        if (PaoYa.DataCenter.rawData.is_first_game == 0) {
            Laya.Scene.open('scene/dialog/RuleDialog.json')
            this.POST('/save_new_hand', {}, function (data) {
                console.log(data)
            })
            PaoYa.DataCenter.rawData.is_first_game = 1
        }
        console.log(PaoYa.DataCenter.login)
        let userData = PaoYa.DataCenter.user
        var a = 70;
        this.showWxIcon()
        this.addMarquee();
        if (this.marquee) {
            this.marquee.play();
        }
    }

    addMarquee() {
        var _this = this;
        PaoYa.Request.GET("get_broadcast_message", {}, function (data) {
            if (data.list.length == 0) {
                return;
            }
            for (var i in data.list) {
                data.list[i].name = data.list[i].name.replace(/&/i, "&amp;")
            }
            var marquee = new Marquee(data.list);
            _this.view.addChild(marquee);
            marquee.play();
            _this.marquee = marquee;
        })
    }

    viewWillDisappear() {
        if (this.marquee) {
            this.marquee.stop();
        }
    }

    onViewClick(e) {
        switch (e.target.name) {
            case 'btnRules':
                Laya.Scene.open('scene/dialog/RuleDialog.json')
                break
            case 'friendhoho':
                this.tofriend()
                break
            case 'morepeople':
                let rolechange = new RoleChangeScene()
                this.navigator.push(rolechange)
                break
            case 'btnToThen':
                let homethen = new MatchGradeScene()
                this.navigator.push(homethen)
                break
            case 'btnSet':
                var setdialog = new SettingDialog();
                setdialog.popup();
                break
            case 'btnRank':
                var rankingList = new RankingListScene()
                this.navigator.push(rankingList)
                break
            case 'skeletonBox':
                PaoYa.DataTrack.trackType(PaoYa.DataTrackType.Jump);
                this.moreGame();
                break
            case "btnGoHall":
                this.onGoHall();
                break

        }
    }

    tofriend() {
        PaoYa.DataCenter.gameType = "friend";
        PaoYa.DataTrack.trackType(PaoYa.DataTrackType.FriendBattle)
        PaoYa.Game.ins.ifService.createRoom();
    }

    static goGame(data1, data2) {
        Laya.SoundManager.stopAll();        
        PaoYa.DataCenter.ownData = data1
        console.log('比赛数据：', data1, data2);

        var params = { self: null, other: null, gameConfig: null, indector: null };
        params.gameConfig = data2.game_config;
        params.speed = data2.speed;
        if (data1.match_list[0].user_id == PaoYa.DataCenter.user.id) {
            params.self = data1.match_list[0];
            params.other = data1.match_list[1];
        } else {
            params.self = data1.match_list[1];
            params.other = data1.match_list[0];
        }
        
        var gameScene = new GameScene(params)
        PaoYa.Game.ins.navigator.push(gameScene);
    }

    showWxIcon() {
        if (!PaoYa.DataCenter.config) { return; }
        var config = PaoYa.DataCenter.config;
        if (!config.common_config.share_info) { return; }
        this.jumpInfo = config.common_config.share_info.randomItem;
        console.log(this.jumpInfo)
        var randomIconUrl = this.jumpInfo.spine_url;
        let appId = this.jumpInfo.appId + "";
        let  arrayList = [    
        "wx6c6a845c3a61e971",
        "wx17e66e26685ed5d0",
        "wx28a78997b4784ef1",
        "wx405ee3ea1e491440",
        "wx9c8b6b87f5a23598",
        "wxb4dccfef8aebd0e9",
        "wx1fa0ca658a9a0ce6",
        "wxcaae4fff0e46aead",
        "wxff74aa65beb1ba7e",
        "wxa163f2723eef4ea3"]
        //不存在返回 -1
        // if(arrayList.indexOf(appId) == -1){
        //     this.jumpOtherGame();
        // }
        if (this.moreGameSkeleton) {
            this.moreGameSkeleton.load(randomIconUrl, Laya.Handler.create(this, function () {
                this.moreGameSkeleton.play();
            }))
        } else {
            this.moreGameSkeleton = new Laya.Skeleton();
            this.moreGameSkeleton.load(randomIconUrl, Laya.Handler.create(this, function () {
                this.moreGameSkeleton.play();
            }));

            this.moreGameSkeleton.width = 130;
            this.moreGameSkeleton.height = 130;
            this.moreGameSkeleton.pos(65, 80)
            Laya.timer.once(500, this, () => { this.view.skeletonBox.addChild(this.moreGameSkeleton); })
        }
    }

    moreGame() {
        var _this = this;
        Service.navigateToMiniProgram({
            appId: _this.jumpInfo.appId,
            images: [_this.jumpInfo.img]
        });
    }
//二维码跳转
    jumpOtherGame() {
        var _this = this;
		Service.navigateToMiniProgram({
			appId: _this.jumpInfo.appId,
			path: 'index',
			extraData: {},
			envVersion: 'develop', //'trial' 'release'
			images: [_this.jumpInfo.img]
		});
	}

    onGoHall() {
        PaoYa.DataTrack.trackType(PaoYa.DataTrackType.HallBack)
        var url = PaoYa.DataCenter.config.common_config.hall_img.split(";").randomItem;
        Service.navigateToMiniProgram({
            appId: "wx6c6a845c3a61e971",
            images: [url]
        });
    }
    onShow(){
       Sound.onPlayHomeMusic()
    }

}
