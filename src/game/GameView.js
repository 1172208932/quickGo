import SpineConfig from "../SpineConfig";
import PropertyBar from "./PropertyBar";
import GameBg from "../common/GameBg";
import Sound from "../common/Sound";


export default class GameView extends PaoYa.View {
    constructor(params) {
        super();
        this.params = params;
        this.watering = 0;
        this.shielding = 0
        this.fasting = 0;
        this.distance = 200
        this.firstProp = PaoYa.DataCenter.firstProp;
    }
    getSceneUrl() {
        return 'scene/GameView.json'
    }


    onEnable() {
        this.removeLength = 0
        this.dsMove()
        this.monitor();
        let propertyBar = new PropertyBar(this.params)
        this.propertyBar = propertyBar;
        this.propertyBar.on(PropertyBar.NOCLICK, this, this.noClick)
        this.controlPanel.visible = false;
        propertyBar.pos(82, 815)
        Laya.timer.once(5000, this, function () {
            this.addChild(propertyBar);
            this.controlPanel.visible = true;
        })

        this.userInfo();

        this.playerSelf = this.createPlayer(SpineConfig.lan_pao_pao.templet, SpineConfig.lan_ship.templet, { x: 200, y: 600 });
        this.playerDs = this.createPlayer(SpineConfig.fen_pao_pao.templet, SpineConfig.fen_ship.templet, { x: 500, y: 600 });
    }

    createPlayer(playerTemp, skateTemp, pos) {
        var box = new Laya.Box();
        var skPlayer = new Laya.Skeleton(playerTemp, 1);   //人物
        box.skPlayer = skPlayer;
        var skBullet = new Laya.Skeleton(SpineConfig.shui_dan_shou_ji.templet, 1); //水弹
        box.skBullet = skBullet;
        var skate = new Laya.Skeleton(skateTemp, 1);    //滑板
        box.skate = skate;
        var shield = new Laya.Skeleton(SpineConfig.hu_dun.templet, 1); //护盾
        shield.visible = false;
        shield.alpha = 0.6;
        shield.scale(1.52, 1.52);
        shield.pos(5, 30);
        box.shield = shield;
        box.addChild(skPlayer);
        box.addChild(skBullet);
        box.addChildAt(skate, 0);
        box.addChild(shield);
        skPlayer.play(1, true);
        skate.play(0, true);
        shield.play(0, true);
        box.pos(pos.x, pos.y);
        this.addChild(box);
        return box;
    }

    userInfo() {
        this.txtNameSelf.text = PaoYa.Utils.formatName(this.params.self.user_name, 5)
        this.txtNameOther.text = PaoYa.Utils.formatName(this.params.other.user_name, 5)
        this.myUserId = this.params.self.user_id;

        this.imgHeadSelf.skin = PaoYa.Utils.makeIcon(this.params.self.user_icon);
        this.imgHeadOther.skin = PaoYa.Utils.makeIcon(this.params.other.user_icon);
        this.MyGender.skin = this.getGenderUrl(this.params.self.gender);
        this.otherGender.skin = this.getGenderUrl(this.params.other.gender);
        this.otherUserId = this.params.other.user_id;

    }

    monitor() {
        var userId = 2;
        // Sound.stopAll();

        this.a = this.panel.getComponent(GameBg);
        Laya.timer.once(5000, this, function () {
            this.a.startMove()
            this.useFirstProp();
        })
        Laya.timer.loop(100, this, function () {
            this.owne.y = 691 - 490 * this.a.ownPercent
            this.oppo.y = 691 - 490 * this.a.oppoPercent
            // 2平局 4 胜利 1失败
            if (this.a.resOut == 0) {
                Sound.onPlayWin()
                Laya.timer.clearAll(this);
                this.event(GameView.RESULT, userId)
            }
            if (this.a.resOut == 1) {
                Sound.onPlayWin()
                userId = this.myUserId;
                Laya.timer.clearAll(this);
                this.event(GameView.RESULT, userId)
            }
            if (this.a.resOut == -1) {
                Sound.onPlayLose()
                userId = this.otherUserId;
                Laya.timer.clearAll(this);
                this.event(GameView.RESULT, userId)
            }
        })
    }

    //优先获得道具，开局使用
    useFirstProp() {
        if (this.firstProp) {
            let value = this.firstProp;
            this.propertyBar._showDiaglog(value);
            if (value == 1) {
                this.protectShield(true);
            } else if (value == 2) {
                this.fasting = 0;
                this.runFast();
            } else if (value == 3) {
                this.watering = 0;//0代表自己扔水单
                this.throwWater();
            }
        } else {
            this.propertyBar._startPlay();
        }
    }

    //点击获取
    onClick(event) {
        let type = event.type;
        let value = 0;
        this.mouseEnabled = false;
        if (type == "click") {
            this.controlPanel.visible = false;
            Laya.timer.clear(this, this.showTip);
            Laya.timer.once(5000, this, this.showTip);
        }

        value = this.propertyBar.handleClick();
        this.event(GameView.SendMyInfo, { is_finish: 0, distance: this.a.length, user_id: this.myUserId, props_id: value });

        if (value == 1) {
            console.log('我击中护盾')
            this.protectShield(true);
        } else if (value == 2) {
            console.log('我击中加速')
            this.fasting = 0;
            this.runFast();
        } else if (value == 3) {
            console.log('我击中水弹')
            this.watering = 0;//0代表自己扔水单
            this.throwWater();
        }
    }

    noClick() {
        this.mouseEnabled = true;
    }
    showTip() {
        this.controlPanel.visible = true;
    }

    //扔水弹
    throwWater() {
        this.waterbombIcon = new Laya.Image('wxlocal/Game/skills_waterbomb.png');
        this.waterbombIcon.name = "waterbombIcon";
        this.throwWaterHandle(this.watering);
    }

    //扔水弹后的人物和水弹的 一系列变化
    throwWaterHandle(watering) {
        var playerAttack, playerAttacked;   //攻击的玩家和被攻击的玩家
        var iconBox;    //左上角水弹icon
        var info;

        if (watering == 1) {
            //对手扔了水弹出来
            playerAttack = this.playerDs;
            playerAttacked = this.playerSelf;
            iconBox = this.myInfo;
            this.addMyIcon(this.waterbombIcon, "waterbombIcon")//给我加icon
            info = this.myInfo;
        } else {
            Sound.onPlayBridgeDown();
            playerAttack = this.playerSelf;
            playerAttacked = this.playerDs;
            this.addOtherIcon(this.waterbombIcon, "waterbombIcon")
            info = this.otherInfo;

        }

        playerAttack.skPlayer.play(0, false);
        playerAttack.skBullet.play(0, false);

        Laya.timer.once(750, this, function () {
            playerAttacked.skBullet.play(1, false);
            if (!playerAttacked.shield.visible) {
                //没有护盾的情况下
                Sound.onPlayBridgeDrop();
                playerAttacked.skPlayer.play(3, false);
                this.dropBehind(watering);
                if (watering == 1) {
                    this.a.ownSpeed = 0
                    this.propertyBar.stun();
                    this.mouseEnabled = false;
                } else {
                    this.a.oppoSpeed = 0;
                    PaoYa.DataCenter.addSpeedCan = true;
                    Laya.timer.once(750,this,function(){ PaoYa.DataCenter.addSpeedCan = false;})
                    // PaoYa.DataCenter.isRobot = true;
                    // Laya.timer.once(750, this, function () {
                    //     PaoYa.DataCenter.isRobot = false;
                    // })
                }
            } else {
                playerAttacked.shield.visible = false;
                playerAttacked.skPlayer.play(1, true);
                info.removeChildByName('shildIcon');
                info.removeChildByName('waterbombIcon');
                Sound.onPlayReviveMusic();
            }
            playerAttack.skPlayer.play(1, true);
        })
    }

    // 加速
    runFast() {
        this.speedUpIcon = new Laya.Image('wxlocal/Game/skills_speedup.png');
        this.speedUpIcon.name = "speedUpIcon";

        var player, removeY;
        if (this.fasting == 1) {
            this.a.oppoSpeed = 4;
            player = this.playerDs;
            removeY = -this.distance;
            this.addOtherIcon(this.speedUpIcon, "speedUpIcon");
        } else {
            Sound.onPlayAddScore()
            this.a.ownSpeed = 4;
            player = this.playerSelf;
            removeY = this.distance;
            this.addMyIcon(this.speedUpIcon, "speedUpIcon");
        }
        player.skPlayer.play(2, true);
        player.skate.play(1, true);

        this.tweenPlayerDs(removeY);
    }

    //保护盾
    protectShield(isSelf) {
        var shildIcon = new Laya.Image('wxlocal/Game/skills_shild.png');
        shildIcon.name = "shildIcon";
        var target = isSelf ? this.playerSelf : this.playerDs,
            info = isSelf ? this.myInfo : this.otherInfo;

        if (!target.shield.visible) {
            if (isSelf) {
                Sound.onPlayDrop();
            }
            info.addChild(shildIcon)
            shildIcon.x = 240;
        } else {
            isSelf && this.propertyBar.refresh("shielding")
        }

        target.shield.visible = true;
        target.shield.play(0, true);
    }

    //添加我icon
    addMyIcon(x, name) {
        this.myInfo.addChild(x)
        if (this.myInfo.getChildByName("shildIcon")) {
            x.pos(358, 0);
        } else {
            x.pos(240, 0);
        }
        Laya.timer.once(1500, this, function () {
            if (this.myInfo.getChildByName(name)) {
                this.myInfo.removeChildByName(name);
            }
        })
    }


    //添加对手的icon
    addOtherIcon(x, name) {
        this.otherInfo.addChild(x)
        if (this.otherInfo.getChildByName("shildIcon")) {
            x.pos(358, 0);

        } else {
            x.pos(240, 0);
        }
        Laya.timer.once(1500, this, function () {
            if (this.otherInfo.removeChildByName(name)) {
                this.otherInfo.removeChildByName(name)
            }
        })
    }

    /*
    * watering:1, 表示是对手投掷水弹
    * 若为对手投掷，则对手位置向上移动，反之向下
    */
    dropBehind(watering) {
        let removeY = watering ? -this.distance : this.distance;
        this.tweenPlayerDs(removeY);
    }

    tweenPlayerDs(removeY) {
        // if (removeY == 200) {
        //     this.removeLength += 1.33
        //     Laya.timer.once(1500, this, function () {
        //         this.removeLength -= 1.33
        //         this.playerSelf.skPlayer.play(1, true);
        //         this.playerDs.skPlayer.play(1, true);
        //         this.playerSelf.skate.play(0, true);
        //         this.playerDs.skate.play(0, true);
        //     })
        // }
        // if (removeY == -200) {
        //     this.removeLength -= 1.33
            Laya.timer.once(1500, this, function () {
                // this.removeLength += 1.33
                this.playerSelf.skPlayer.play(1, true);
                this.playerDs.skPlayer.play(1, true);
                this.playerSelf.skate.play(0, true);
                this.playerDs.skate.play(0, true);
            })
        // }
        // if (this.tweenDs) {
        //     this.tweenDs.complete();
        // }
        // this.tweenDs = Laya.Tween.to(this.playerDs, { y: this.playerDs.y + removeY }, 1500, null, Laya.Handler.create(this, function () {
        //     this.playerSelf.skPlayer.play(1, true);
        //     this.playerDs.skPlayer.play(1, true);
        //     this.playerSelf.skate.play(0, true);
        //     this.playerDs.skate.play(0, true);

        // }));
    }
    dsMove() {
        Laya.timer.loop(10, this, function () {
        console.log( this.removeLength)
            // this.playerDs.y += this.removeLength
            this.playerDs.y =  (this.a.ownPercent-this.a.oppoPercent)*8000+600
        })
    }


    //清除动画
    clearAnimation() {
        Laya.timer.clearAll(this);
        this.propertyBar.visible = false;
        this.controlPanel.visible = false;
        this.playerSelf && this.playerSelf.destroy();
        this.playerDs && this.playerDs.destroy();
        this.boxSelf && this.boxSelf.destroy();
        this.boxOther && this.boxOther.destroy();

        Laya.Tween.clearAll(this.boxOther);
        Laya.Tween.clearAll(this.playerSelf)
        Laya.Tween.clearAll(this.playerDs)

        this.propertyBar.selectBox && this.propertyBar.selectBox._tweenDataList && this.propertyBar.selectBox.destroy();
    }

    //游戏页面用户性别信息
    getGenderUrl(params) {
        if (params == "男") {
            return "wxlocal/match/boy.png";
        } else if (params == "女") {
            return "wxlocal/match/girl.png";
        } else {
            return "wxlocal/match/gay.png";
        }
    }


}
GameView.RESULT = "result";
GameView.SendMyInfo = "SendMyInfo";