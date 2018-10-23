import SpineConfig from "../SpineConfig";
import PropertyBar from "./PropertyBar";
import GameBg from "../common/GameBg";


export default class GameView extends PaoYa.View {
    constructor() {
        super()
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


        this.boxSelf = new Laya.Box();
        this.boxSelf.name = "boxSelf"
        this.skSelf = new Laya.Skeleton(SpineConfig.lan_pao_pao.templet);
        this.boxSelf.addChild(this.skSelf);
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
        this.boxOther.pos(500, 600);
        this.boxOther.addChild(this.skDs);
        this.addChild(this.boxOther)



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
                this.toReslut(2)
                Laya.timer.clearAll(this)
            }
            if (this.a.resOut == 1) {
                this.toReslut(4)
                Laya.timer.clearAll(this)
            }
            if (this.a.resOut == -1) {
                this.toReslut(1)
                Laya.timer.clearAll(this)
            }

        })
    }

    toReslut(e) {
        Laya.Tween.clearAll(this.boxOther);
        this._clearAnimation();
        this.shield = new Laya.Skeleton(SpineConfig.win_lose.templet);
        this.shield.pos(0, 350)
        this.shield.play(e, false);
        this.addChild(this.shield);
        this.shield.on(Laya.Event.STOPPED, this, function () {
            this.shield && this.shield.destroy();
            this.owner.gameOver(e)
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
        if (value == "wxlocal/Game/icon_waterbomb.png") {
            console.log('击中水弹')
            this.throwWater();
        } else if (value == "wxlocal/Game/icon_speedup.png") {
            console.log('击中加速')
            this.runFast();
        } else if (value == "wxlocal/Game/icon_shild.png") {
            console.log('击中护盾')
            this.hasShield();
        }
    }
    //扔水弹
    throwWater(x) {
        this.waterBullet = new Laya.Skeleton(SpineConfig.shui_dan_shou_ji.templet, );
        this.waterBomb = new Laya.Skeleton(SpineConfig.shui_dan_shou_ji.templet, 1);
        this.waterbombIcon = new Laya.Image('wxlocal/Game/skills_waterbomb.png');
        this.waterbombIcon.name = "waterbombIcon";
        if (x == "otherWater") {
            this._throwOut(this.skDs)
            if (this._hasShieldOrNot()) {
                this._attacked(this.skSelf, 1)
            } else {
                this.a.ownSpeed = 0;
                this._attacked(this.skSelf, 3)
                this._dropBehind(this.waterbombIcon)
            }
        } else {
            this._throwOut(this.skSelf)
            //如果有护盾的情况下，被攻击的人 前进动画 效果不变
            if (this._hasShieldOrNot()) {
                this._attacked(this.skDs, 1)
            } else {
                //如果没有护盾的情况下，被攻击的人 向后退
                this.a.oppoSpeed = 0
                this._attacked(this.skDs, 3)
                this._dropBehind(this.waterbombIcon, "other")
            }
        }

    }
    //扔水弹的人
    _throwOut(throwTo) {
        throwTo.play(0, false);
        throwTo.addChild(this.waterBullet);
        this.waterBullet.play(0, false);
    }
    //受到攻击的人
    _attacked(attacked, playStatus) {
        this.skDs.play(3, true);
        attacked.addChild(this.waterBomb);
        this.waterBomb.play(1, false);
        this.waterBomb.on(Laya.Event.STOPPED, this, function () {
            this._shot(attacked)
            this.skDs.play(1, true)
            this.skSelf.play(1, true)
        })
        this.addChild(this.waterbombIcon)
    }

    runFast(x) {
        let removeY = "";
        this.speedUpIcon = new Laya.Image('wxlocal/Game/skills_speedup.png');
        this.speedUpIcon.name = "speedUpIcon";

        //对方的数据
        if (x == "otherRunFast") {
            this.a.oppoSpeed = 4;
            removeY = this.runFastProject(this.skDs, this.boxOther, removeY)
        } else {
            this.a.ownSpeed = 4;
            removeY = this.runFastProject(this.skSelf, this.boxSelf, removeY)
        }
        Laya.Tween.to(this.boxOther, { y: removeY }, 1500, null, Laya.Handler.create(this, function () {
            if (x == "otherRunFast") {
                this.boxOther.removeChild(this.runQuick);
            } else {
                this.boxSelf.removeChild(this.runQuick);
            }
            this.skSelf.play(1, false);
            this.skDs.play(1, false);
            this.runQuick.play(0, true)
        }));

    }

    runFastProject(x, boxName, removeY) {
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

    hasShield(x) {
        console.log("护盾")
        this.shield = new Laya.Skeleton(SpineConfig.hu_dun.templet, 2);
        this.shield.name = "shield";
        this.shield.alpha = 0.9;
        this.shield.scale(1.5, 1.5)

        this.shildIcon = new Laya.Image('wxlocal/Game/skills_shild.png');
        this.shildIcon.name = "shildIcon";

        if (x == "otherShield") {
            this._shildProjcet(this.boxOther, 238, 235)
        } else {
            this._shildProjcet(this.boxSelf, 238, 120)
        }

    }

    _shildProjcet(x, posX, posY) {
        console.log(x)
        if (x.getChildByName("shield") == undefined) {
            x.addChild(this.shield)
            this.shield.play(0, true);
            //添加icon图标
            this.addChild(this.shildIcon)
            this.shildIcon.pos(posX, posY)
        }
    }
    //是否有护盾
    _hasShieldOrNot() {
        let shieldBox;
        if (this.boxOther.getChildByName("shield") == undefined) {
            console.log("我没有护盾")
            shieldBox = false;
        } else {
            console.log("我有护盾")
            shieldBox = true;
        }
        return shieldBox
    }

    _shot(x) {
        this.removeChildByName("shildIcon");
        if (x == this.skDs) {
            this.boxOther.removeChild(this.shield);
        } else {
            this.boxSelf.removeChild(this.shield);
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

}