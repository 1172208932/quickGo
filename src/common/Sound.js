export default class Sound {

    static playMusic(url, loops) {
        // if (url == 'homeBg' && suffix == '.mp3') {
        //     url = 'https://res.xingqiu123.com/wxgame/petgo/sound/homeBg.mp3'
        // } else {
        url = this.path + url + this.suffix;
        // }
        var sound = Laya.Loader.getRes(url);
        Laya.SoundManager.playMusic(url, loops);
    }
    static playSound(url, loops) {
        url = this.path + url + this.suffix;
        var sound = Laya.Loader.getRes(url);
        if (!sound) {
            Laya.SoundManager.playSound(url, loops);
        } else {
            if (!Laya.SoundManager.soundMuted) {
                sound.play(0, loops);
            }
        }
    }
    static onPlayHomeMusic() {
        this.playMusic("homeBg", 0);
    }
    static onPlayBatBg() {//战斗背景
        this.playMusic('conbatBg', 0)
    }

    // static onPlayReadyGo() {
    //     playSound("gameStart", 1);
    // }
    static onPlayDown() {
        this.playSound("countdown", 1);
    }
    static onPlayGo() {
        this.playSound("readyGo", 1);
    }


    static onPlayWin() {
        this.playSound("win", 1);
    }

    static onPlayLose() {
        this.playSound("lose", 1);
    }

    static onPlayReviveMusic() {//护盾抵挡音效
        this.playSound("shieldOut", 1);
    }

    static onPlayDrop() {//护盾使用音效
        this.playSound("shieldUse", 1);
    }

    static onPlayAddScore() {//加速音效
        this.playSound("speed", 1);
    }

    static onPlayBridgeDown() {//扔水弹
        this.playSound("throwO", 1);
    }

    static onPlayBridgeDrop() {//中弹音效
        this.playSound("getShot", 1);
    }

    // static onPlayBridgeToLong() {
    //     playSound("bridge_to_long", 1);
    // }


    // static onPlayCountDown() {
    //     playSound("count_down", 1);
    // }


    static stopAll() {
        Laya.SoundManager.stopAll();
        this.stopALLSound();
    }
    static stopALLSound() {
        Laya.SoundManager.stopAllSound();
    }
    static onComplete() {
        console.log("扣分音效播放完成");
    }
    static vibrateShort() {
        wx.vibrateShort({
            success: function () {
                console.log("震动成功")
            },
            fail: function () {
                console.log("震动失败")
            },
            complete: function () {
                console.log("震动完成")
            }
        })
    }
}

Sound.path = PaoYa.DataCenter.CDNURL + 'wxgame/surfing/sound/'
Sound.suffix = '.mp3';
Sound.SoundManager = Laya.SoundManager;