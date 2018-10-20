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
        this.skSelf = new Laya.Skeleton(SpineConfig.lan_pao_pao.templet);
        this.skateboardBoy = new Laya.Image("wxlocal/Game/icon_skateboard_boy.png")

        this.skSelf.play(1, true);
        this.boxSelf.pos(200, 600)


        this.boxSelf.addChild(this.skateboardBoy);
        this.boxSelf.addChild(this.skSelf);
        this.skateboardBoy.pos(-70, -100)
        this.addChild(this.boxSelf);

        this.otherSelf = new Laya.Box();
        this.skDs = new Laya.Skeleton(SpineConfig.lan_pao_pao.templet);
        this.skDs.play(1, true);
        this.addChild(this.skDs);
        this.otherSelf.pos(500, 600);
        this.otherSelf.addChild(this.skDs);
        this.addChild(this.otherSelf)


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
        this.shield = new Laya.Skeleton(SpineConfig.win_lose.templet);
        this.shield.pos(0, 350)
        this.shield.play(e, false);
        this.addChild(this.shield);
        this.shield.on(Laya.Event.STOPPED, this, function () {
            this.owner.gameOver(e)
            // this._clearAnimation()
        })
    }

    onClick(event) {
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
    throwWater(x) {
        console.log("扔水弹", x)
        this.waterBullet = new Laya.Skeleton(SpineConfig.shui_dan_shou_ji.templet);
        if (x == "otherWater") {
            this.skDs.play(0, false);
            this.skDs.addChild(this.waterBullet);
            this.waterBullet.play(0, false);
            Laya.timer.once(1500, this, function () {
                this.skSelf.addChild(this.waterBullet);
                this.skSelf.play(3, false);
                this.waterBullet.play(1, false);
                this._dropBehind(this.waterbombIcon)
                this.a.ownSpeed = 0;
            })
        } else {
            this.skSelf.play(0, false);
            this.skSelf.addChild(this.waterBullet);
            this.waterBullet.play(0, false);
            Laya.timer.once(1500, this, function () {
                this.waterBullet.play(1, false);
                this.skDs.addChild(this.waterBullet);
                this.skDs.play(3, false);
                this._dropBehind(this.waterbombIcon, "other")
                this.a.oppoSpeed = 0;
            })

        }

        this.waterbombIcon = new Laya.Image('wxlocal/Game/skills_waterbomb.png');
        this.addChild(this.waterbombIcon)
        this.waterbombIcon.name = "waterbombIcon"

        this._addIcon(this.waterbombIcon, "waterbombIcon")

    }
    runFast() {
        console.log("快速前进")
        this.a.ownSpeed = 4;
        this.runQuick = new Laya.Skeleton(SpineConfig.lan_ship.templet);
        this.boxSelf.addChildAt(this.runQuick, 0)

        this.runQuick.play(1, false);
        this.skSelf.play(2, false)

        this.speedUpIcon = new Laya.Image('wxlocal/Game/skills_speedup.png');
        this.addChild(this.speedUpIcon)
        this.speedUpIcon.name = "speedUpIcon"

        this._addIcon(this.speedUpIcon, "speedUpIcon")
    }
    hasShield() {
        console.log("护盾")
        if (this.boxSelf.getChildByName("shield") == undefined) {
            console.log(this.boxSelf.getChildByName("shield"))
            this.shield = new Laya.Skeleton(SpineConfig.hu_dun.templet);
            this.shield.name = "shield";
            this.boxSelf.addChildAt(this.shield, 0)
            this.shield.play(0, true);
            //添加icon图标
            this.shildIcon = new Laya.Image('wxlocal/Game/skills_shild.png');
            this.shildIcon.name = "shildIcon"
            this.addChild(this.shildIcon)
            this.shildIcon.pos(238, 120)
        }
    }

    _clearAnimation() {
        this.propertyBar.visible = false;
        this.controlPanel.visible = false;
        this.skDs && this.skDs.destroy();
        this.skSelf && this.skSelf.destroy();
        this.boxSelf && this.boxSelf.destroy();
    }

    _addIcon(x, y) {
        if (this.getChildByName("shildIcon")) {
            x.pos(358, 120);
            Laya.timer.once(1500, this, function () {
                this.removeChildByName(y);
            })
        } else {
            x.pos(238, 120);
            Laya.timer.once(1500, this, function () {
                this.removeChildByName(y);
            })
        }

    }

    _dropBehind(x, person) {
        let removeY;
        if (person == "other") {
            removeY = this.otherSelf._y + 200;
        } else {
            removeY = this.otherSelf._y - 200;
        }
        console.log(removeY)
        Laya.Tween.to(this.otherSelf, { y: removeY }, 1500, null, Laya.Handler.create(this, function () {
            this.skSelf.removeChild(x);
            this.skSelf.play(1, false);
        }));
    }

    // _dropMyBehind(x) {
    //     let removeY = this.otherSelf._y - 200;
    //     Laya.Tween.to(this.otherSelf, { y: removeY }, 1500, null, Laya.Handler.create(this, function () {
    //         this.skSelf.removeChild(x);
    //         this.skSelf.play(1, false);
    //     }));
    // }
}