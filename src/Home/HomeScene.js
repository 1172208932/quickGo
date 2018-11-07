import HomeView from "./HomeView";
import RoleChangeScene from "../role/RoleChangeScene";
import GameScene, { name as teads } from "../game/GameScene";
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
        console.log(PaoYa.DataCenter.user,'33333333333333')
        Scene.prototype.viewWillAppear.call(this);
        if (PaoYa.DataCenter.rawData.is_first_game == 0) {
            Laya.Scene.open('scene/dialog/RuleDialog.json')
            this.POST('/save_new_hand', {}, function (data) {
                console.log('shouci',data)
            })
            PaoYa.DataCenter.rawData.is_first_game = 1
        }
        console.log(PaoYa.DataCenter.user.avstar)
        let userData = PaoYa.DataCenter.user
        // console.log(userData)
        var a = 70;
        // console.log('4444444', new Number(90).formatTime())
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
        var randomIconUrl = this.jumpInfo.spine_url;
        if (this.moreGameSkeleton) {
            this.moreGameSkeleton.load(randomIconUrl, Laya.Handler.create(this, function () {
                this.moreGameSkeleton.play();
            }))
        } else {
            this.moreGameSkeleton = new Laya.Skeleton();
            this.moreGameSkeleton.load(randomIconUrl, Laya.Handler.create(this, function () {
                this.moreGameSkeleton.play();
            }));
            // this.view.skeletonBox.on(Laya.Event.CLICK, this, function () {

            // })
            this.moreGameSkeleton.width = 130;
            this.moreGameSkeleton.height = 130;
            this.moreGameSkeleton.pos(65, 80)
            Laya.timer.once(100, this, () => { this.view.skeletonBox.addChild(this.moreGameSkeleton); })
        }
    }

    moreGame() {
        var _this = this;
        Service.navigateToMiniProgram({
            appId: _this.jumpInfo.appId,
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
