import SpineConfig from "../SpineConfig";
import PropertyBar from "./PropertyBar";
import GameBg from "../common/GameBg";


export default class GameView extends PaoYa.View {
    constructor(params) {
        super();
        this.params = params;
        this.watering = 0 ; 
        this.shielding = 0
    }
    getSceneUrl() {
        return 'scene/GameView.json'
    }

    onEnable() {
        this.monitor()
        let propertyBar = new PropertyBar()
        this.propertyBar = propertyBar;
        this.controlPanel.visible = false;

        propertyBar.pos(82, 815)
        Laya.timer.once(5000, this, function () {
            this.addChild(propertyBar);
            this.controlPanel.visible = true;
        })

        this.waterBullet = this.waterBulletDS = new Laya.Skeleton(SpineConfig.shui_dan_shou_ji.templet, );
        // this.waterBomb = new Laya.Skeleton(SpineConfig.shui_dan_shou_ji.templet, 1);


        this.boxSelf = new Laya.Box();
        this.boxSelf.name = "boxSelf"
        this.skSelf = new Laya.Skeleton(SpineConfig.lan_pao_pao.templet);
        this.boxSelf.addChild(this.skSelf);
        this.skSelf.addChild(this.waterBullet);
        this.skSelf.play(1, true);

        this.runQuick = new Laya.Skeleton(SpineConfig.lan_ship.templet);
        this.boxSelf.addChildAt(this.runQuick, 0)
        // this.boxOther.addChildAt(this.runQuick, 0)
        this.runQuick.play(0, true)

        this.boxSelf.pos(200, 600)
        this.addChild(this.boxSelf);

        this.boxOther = new Laya.Box();
        this.boxOther.name = "boxOther"
        this.skDs = new Laya.Skeleton(SpineConfig.lan_pao_pao.templet);
        this.skDs.play(1, true);
        this.addChild(this.skDs);
        this.skDs.addChild(this.waterBulletDS)
        this.boxOther.pos(500, 600);
        this.boxOther.addChild(this.skDs);
        this.addChild(this.boxOther)

        this.userInfo()

    }
    userInfo() {
        console.log("this.params", this.params)
        this.txtNameSelf.text = PaoYa.Utils.formatName(this.params.self.user_name, 5)
        this.txtNameOther.text = PaoYa.Utils.formatName(this.params.other.user_name, 5)
        this.myUserId = this.params.user_id;

        this.imgHeadSelf.skin = this.params.self.user_icon;
        this.imgHeadOther.skin = this.params.other.user_icon;
        this.MyGender.skin = this.getGenderUrl(this.params.self.gender);
        this.otherGender.skin = this.getGenderUrl(this.params.other.gender);

    }

    monitor() {
        this.a = this.panel.getComponent(GameBg);
        Laya.timer.once(1000, this, function () {
            this.a.startMove()
        })
        Laya.timer.loop(100, this, function () {
            this.owne.y = 691 - 490 * this.a.ownPercent
            this.oppo.y = 691 - 490 * this.a.oppoPercent
            if (this.a.resOut == 0) {
                // 2平局 4 胜利 1失败
                // this.toReslut(2)
                this.event(GameView.RESULT)
                Laya.timer.clearAll(this)
            }
            if (this.a.resOut == 1) {
                //this.toReslut(4)
                this.event(GameView.RESULT)
                Laya.timer.clearAll(this)
            }
            if (this.a.resOut == -1) {
                // this.toReslut(1)
                this.event(GameView.RESULT)
                Laya.timer.clearAll(this)
            }

        })
    }



    onClick(event) {
        console.log(event.type)
        let type = event.type;
        if (type == "click") {
            this.controlPanel.visible = false;
            Laya.timer.loop(5000, this, function () {
                this.controlPanel.visible = true;
            });
        } else {
            this.controlPanel.visible = true;

        }

        let value = this.propertyBar.handleClick()
        console.log(value)
        this.event(GameView.robotSendBet, { user_bets: { is_finish: 0, distance: this.a.length, user_id: this.myUserId } });
        if (value == "wxlocal/Game/icon_waterbomb.png") {
            console.log('击中水弹')
            this.watering = 0;//0代表自己扔水单
            this.throwWater();
        } else if (value == "wxlocal/Game/icon_speedup.png") {
            console.log('击中加速')
            this.runFast();
        } else if (value == "wxlocal/Game/icon_shild.png") {
            console.log('击中护盾')
            this.shielding = 0;
            this.protectShield();
        }
    }


    //扔水弹
    throwWater() {
        this.waterbombIcon = new Laya.Image('wxlocal/Game/skills_waterbomb.png');
        this.waterbombIcon.name = "waterbombIcon";
        // this._throwOut();
        this._throwWaterHandle(this.watering);
    }

    _throwWaterHandle(watering) {
        this.addChild(this.waterbombIcon);
        var target, boxTarget, dropBehindName, hasShield;
        if (watering == 1) {//对手扔了水弹出来
            this.skDs.play(0, false)//人物变成 扔水弹状态
            this.waterBulletDS.play(0, false);//水弹变成扔出去的状态
            target = this.skSelf;//被攻击的人是我
            boxTarget = this.boxSelf;//攻击人的box
            this._addMyIcon(this.waterbombIcon, "waterbombIcon")//给我加icon
        } else {
            this.skSelf.play(0, false)
            this.waterBullet.play(0, false);
            target = this.skDs;
            boxTarget = this.boxOther;
            dropBehindName = 'other';
            this._addOtherIcon(this.waterbombIcon, "waterbombIcon")
        }

        hasShield = this._hasShieldOrNot(boxTarget);
        var playStatus = 1;
        if (!hasShield) {
            playStatus = 3;
            this._dropBehind(this.waterbombIcon, dropBehindName)
            if (watering == 1) {
                this.a.ownSpeed = 0
            } else {
                this.a.oppoSpeed = 0
            }
        }

        Laya.timer.once(750, this, function () {
            target.play(playStatus, true);
            this.waterBullet.play(1, false);
        })

        this.waterBullet.on(Laya.Event.STOPPED, this, function () {
            this._shot(target)
            this.skDs.play(1, true)
            this.skSelf.play(1, true)
        })
    }

    //扔水弹的人
    // _throwOut() {
    //     if (this.watering == 1) {
    //         this.skDs.play(0, false)
    //         this.waterBullet.play(0, false);

    //     } else {
    //         this.skSelf.play(0, false)
    //         this.waterBulletDS.play(0, false);
    //     }

    //     // throwTo.addChild(this.waterBullet);
    // }

    runFast(x) {
        let removeY = 0;
        this.speedUpIcon = new Laya.Image('wxlocal/Game/skills_speedup.png');
        this.speedUpIcon.name = "speedUpIcon";

        //对方的数据
        if (x == "otherRunFast") {
            this.a.oppoSpeed = 4;
            removeY = this.runFastProject(this.skDs, this.boxOther)
        } else {
            this.a.ownSpeed = 4;
            removeY = this.runFastProject(this.skSelf, this.boxSelf)
        }
        Laya.Tween.to(this.boxOther, { y: removeY }, 1500, null, Laya.Handler.create(this, function () {
            this.skSelf.play(1, false);
            this.skDs.play(1, false);
            this.runQuick.play(0, true)
        }));

    }

    runFastProject(x, boxName) {
        let removeY = 0;
        x.play(2, true);
        this.runQuick.play(1, false);
        this.addChild(this.speedUpIcon);
        if (boxName.name == "boxSelf") {
            removeY = this.boxOther._y + 200;
            this._addMyIcon(this.speedUpIcon, "speedUpIcon");
        } else {
            removeY = this.boxOther._y - 200;
            this._addOtherIcon(this.speedUpIcon, "speedUpIcon");
        }
        return removeY
    }

    protectShield() {
        this.shield = new Laya.Skeleton(SpineConfig.hu_dun.templet, 2);
        this.shield.name = "shield";
        this.shield.alpha = 0.9;
        this.shield.scale(1.5, 1.5)

        this.shildIcon = new Laya.Image('wxlocal/Game/skills_shild.png');
        this.shildIcon.name = "shildIcon";
console.log(this.shielding)
        if (this.shielding == 1) {
            this._shildProjcet(this.boxOther, this.otherInfo, 0, 0)
        } else {
            this._shildProjcet(this.boxSelf, this.myInfo, 240,0)
        }

    }

    _shildProjcet(target, boxTarget, posX, posY) {
        if (target.getChildByName("shield") == undefined) {
            target.addChild(this.shield)
            this.shield.play(0, true);
            //添加icon图标
            boxTarget.addChild(this.shildIcon)
            this.shildIcon.pos(posX, posY)
        }
    }
    //是否有护盾
    _hasShieldOrNot(target) {
        if (target.getChildByName("shield") == undefined) {
            return false;
        }
        return true
    }
    //检测是否有加速
    _hasRunOrNot() {
        let runBox;
        if (this.boxOther.getChildByName("runQuick") == undefined) {
            console.log("对手没有护盾")
            runBox = false;
        } else if (this.boxSelf.getChildByName("shield") == undefined) {
            console.log("我没有护盾")
            runBox = false;
        } else {
            console.log("我有护盾")
            runBox = true;
        }
        return runBox
    }
    _shot(x) {
        console.log(x)

        if (x == this.skDs) {
            console.log("我是对手")
            this.boxOther.removeChild(this.shield);
            this.removeChildByName("shildIcon");
        } else {
            this.boxSelf.removeChild(this.shield);
            this.removeChildByName("shildIcon");
        }
    }

    _addMyIcon(x, name) {
        if (this.getChildByName("shildIcon")) {
            x.pos(358, 120);
            Laya.timer.once(1500, this, function () {
                this.removeChildByName(name);
            })
        } else {
            x.pos(238, 120);
            Laya.timer.once(1500, this, function () {
                this.removeChildByName(name);
            })
        }

    }

    _addOtherIcon(x, name) {
        if (this.getChildByName("shild")) {
            x.pos(358, 235);
            Laya.timer.once(1500, this, function () {
                this.removeChildByName(name);
            })
        } else {
            x.pos(238, 235);
            Laya.timer.once(1500, this, function () {
                this.removeChildByName(name);
            })
        }
    }

    _dropBehind(x, person) {
        let removeY;
        let name = x.name;
        if (person == "other") {
            removeY = this.boxOther._y + 200;
        } else {
            removeY = this.boxOther._y - 200;
        }
        Laya.Tween.to(this.boxOther, { y: removeY }, 1500, null, Laya.Handler.create(this, function (name) {
            this.skSelf.removeChild(name);
            this.skSelf.play(1, true);
            this.skDs.play(1, true);
        }));
    }

    _clearAnimation() {
        console.log('清除')
        this.propertyBar.visible = false;
        this.controlPanel.visible = false;
        this.skDs && this.skDs.destroy();
        this.skSelf && this.skSelf.destroy();
        this.boxSelf && this.boxSelf.destroy();
        this.boxOther && this.boxOther.destroy();

        Laya.Tween.clearAll(this.boxOther);
        Laya.Tween.clearAll(this.skDs)
        Laya.Tween.clearAll(this.skSelf)

    }

    getGenderUrl(params) {
        if (!params) {
            return "wxlocal/match/gay.png";
        } else if (params == "男") {
            return "wxlocal/match/boy.png";
        } else {
            return "wxlocal/match/girl.png";
        }
    }

}
GameView.RESULT = "result";