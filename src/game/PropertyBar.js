
export default class PropertyBar extends Laya.View {
    constructor(params) {
        super()
        this.params = params;
        this.indector = null
        this._addChilds();
        // this._startPlay();
        this.selectBox;
        this.waterBombSkin = ""
    }

    _addChilds() {
        //添加选择框
        let imgBg = new Laya.Image('wxlocal/Game/selectBox.png')
        this.addChild(imgBg)
        this.imgBg = imgBg;
        imgBg.scaleX = 1.1;
        imgBg.scaleY = 1.2;
        //添加选择条
        let indector = new Laya.Image('wxlocal/Game/icon_choose.png')
        this.indector = indector;
        this.indector.name = "indector";
        this.indector.pos(0, 4)
        this.addChild(indector);
        //使用保护盾的提示信息添加到选择框位置
        this.shieldBlockText = new Laya.Image('wxlocal/Game/text_shild.png')
        this.addChild(this.shieldBlockText);
        this.shieldBlockText.visible = false;
        //使用加速的提示信息添加到选择框位置
        this.speedUpText = new Laya.Image('wxlocal/Game/text_speedup.png')
        this.addChild(this.speedUpText);
        this.speedUpText.visible = false;

        //使用水弹的提示信息添加到选择框位置
        this.waterBombText = new Laya.Image('wxlocal/Game/text_waterbomb.png')
        this.addChild(this.waterBombText);
        this.waterBombText.visible = false;

        //被对手水弹攻击晕眩的的提示信息添加到选择框位置
        this.attractText = new Laya.Image('wxlocal/Game/text_dizzy.png')
        this.addChild(this.attractText);
        this.attractText.visible = false;

        //设置两个空图片的位置
        let skill1 = new Laya.Image();
        let skill2 = new Laya.Image();
        this.skill1 = skill1;
        this.skill2 = skill2;
        skill1.name = 'skill1';
        skill2.name = 'skill2';
        this.addChild(this.skill1)
        this.addChild(this.skill2)
        this.skill1.pos(0, 9.5)
        this.skill1.pos(404, 9.5)



        let shild = new Laya.Image();
        this.shild = shild;
        this.shild.skin = "wxlocal/Game/icon_shild.png";
        this.shild.num = 1;

        let speedUp = new Laya.Image();
        this.speedUp = speedUp;
        this.speedUp.skin = "wxlocal/Game/icon_speedup.png";
        this.speedUp.num = 2;

        let water = new Laya.Image();
        this.water = water;
        this.water.skin = "wxlocal/Game/icon_waterbomb.png";
        this.water.num = 3;

    }

    _startPlay(x) {
        this._skillIcon();
        let speed = this.params.speed;
        console.log(speed)
        if (this.selectBox == undefined) {
            this.selectBox = Laya.TimeLine.to(this.indector, { x: 580 }, speed).to(this.indector, { x: 0 }, speed);
        }
        this.selectBox.play(0, true);
        this.event(PropertyBar.NOCLICK)
    }
    //两个同时随机，定位置
    _randomPosition() {
        let posArr = [34, 139, 244, 349, 454];
        let arr = this._randomFun(posArr)
        return arr
    }

    //随机道具后，更换位置
    _skillIcon() {
        //1-护盾，2-加速，3-水弹
        let posArr = this._randomPosition();
        let randomArr = this.handleData();
        let skillArr = [this.shild, this.water, this.speedUp];
        this.randombox(skillArr, randomArr)
        let skillBox1 = this.randombox(skillArr, randomArr);
        let skillBox2 = this.randombox(skillArr, randomArr);

        this.skill1.skin = skillBox1.skin;
        this.skill2.skin = skillBox2.skin;

        this.skill1.num = skillBox1.num;
        this.skill2.num = skillBox2.num;

        this.skill1.pos(posArr[0], 9.5);
        this.skill2.pos(posArr[1], 9.5);

        this.skill1.visible = true;
        this.skill2.visible = true;

        let array = [];
        array.push(this.skill1, this.skill2)
        this.array = array;
    }
    //点击选择 道具
    handleClick() {
        let x = this.indector._x;
        if( this.selectBox){
            this.selectBox.pause();
        }
        let min = this.array[0]._x;
        let max = this.array[0]._x + 87;
        let min2 = this.array[1]._x;
        let max2 = this.array[1]._x + 87;
        let num = 0;
        switch (true) {
            case x >= min && x <= max:
                this.num = this.array[0].num;
                this._showDiaglog()
                break;
            case x >= min2 && x <= max2:
                this.num = this.array[1].num;
                this._showDiaglog()
                break;
            default:
                this._selectEmpty()
                this.num = null;
                break;
        }
        return this.num
    }

    //未点击到任何道具
    _selectEmpty() {
        console.log("我是空")
        Laya.timer.clear(this, this.clickNone);
        Laya.timer.once(500, this, this.clickNone);
    }

    clickNone() {
        this.selectBox.resume();
        this.event(PropertyBar.NOCLICK)
    }
    //选中道具后，展示对应道具的提示框
    _showDiaglog(x) {
        this.skill1.visible = false;
        this.skill2.visible = false;

        this.indector.visible = false;
        this.imgBg.visible = false;
        var value = this.num;
        if (value == 1 || x == 1) {
            this.shieldBlockText.visible = true;
            this.shieldBlockText.pos(0, 0)
        } else if (value == 2 || x == 2) {
            this.speedUpText.visible = true;
            this.speedUpText.pos(0, 0)
        } else if (value == 3 || x == 3) {
            this.waterBombText.visible = true;
            this.waterBombText.pos(0, 0)
        }
        Laya.timer.clear(this, this.refresh)
        Laya.timer.once(1500, this, this.refresh);
    }
    //如果受到水弹的攻击并产生晕眩效果
    stun() {
        console.log("收到攻击")
        this.attractText.visible = true;
        this.attractText.pos(-4, 0)
        this._allVisible();
        this.selectBox.pause()
        
        Laya.timer.once(1500, this, this.hideBox)
        Laya.timer.clear(this, this.refresh)
        this.event(PropertyBar.NOCLICK)
    }

    refresh(x) {
        if (x == "shielding") {
            Laya.timer.clear(this, this.refresh)
        }
        this.shieldBlockText.visible = false;
        this.waterBombText.visible = false;
        this.speedUpText.visible = false;
        this.hideBox();
    }

    hideBox() {
        // this.selectBox.pause()
        this.indector.visible = true;
        this.imgBg.visible = true;
        this.attractText.visible = false;
        this._startPlay();
    }

    _allVisible() {
        this.shieldBlockText.visible = false;
        this.skill1.visible = false;
        this.skill2.visible = false;
        this.waterBombText.visible = false;
        this.speedUpText.visible = false;
        this.indector.visible = false;
        this.imgBg.visible = false;
    }
    //处理后台数据
    handleData() {
        let gameConfig = this.params.gameConfig;
        var str = [];
        let sum = 0;
        let randomArr = [];
        for (var i = 0; i < gameConfig.length; i++) {
            str.push(gameConfig[i].substring(2, 4))
        }
        for (var k = 0; k < str.length; k++) {
            sum = sum + parseInt(str[k]);
        }
        for (var j = 0; j < str.length; j++) {
            randomArr.push(str[j] / sum)
        }
        return randomArr;
    }
    //按概率 随机
    randombox(arr1, arr2) {
        var sum = 0,
            factor = 0,
            random = Math.random();

        for (var i = arr2.length - 1; i >= 0; i--) {
            sum += arr2[i]; // 统计概率总和
        };
        random *= sum; // 生成概率随机数
        for (var i = arr2.length - 1; i >= 0; i--) {
            factor += arr2[i];
            if (random <= factor)
                return arr1[i];
        };
        return null;
    }
    //随机位置
    _randomFun(arr) {
        var posArr = [];
        for (var i = 0; i < 2; i++) {
            var ran = Math.floor(Math.random() * (arr.length - i));
            posArr.push(arr[ran]);
            arr[ran] = arr[arr.length - i - 1];
        };
        return posArr
    }

}

PropertyBar.NOCLICK = "NoClick";