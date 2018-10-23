
export default class PropertyBar extends Laya.View {
    constructor() {
        super()
        this.indector = null
        this._addChilds();
        this._startPlay();
        this.selectBox;
    }

    _addChilds() {
        let imgBg = new Laya.Image('wxlocal/Game/selectBox.png')
        this.addChild(imgBg)
        this.imgBg = imgBg;
        imgBg.scaleX = 1.1;
        imgBg.scaleY = 1.2;
        let indector = new Laya.Image('wxlocal/Game/icon_choose.png')
        this.indector = indector;
        this.indector.name = "indector";
        this.indector.pos(0,4)
        this.addChild(indector);

        this.shieldBlock = new Laya.Image('wxlocal/Game/text_shild.png')
        this.addChild(this.shieldBlock);
        this.shieldBlock.visible = false;

        this.speedUp = new Laya.Image('wxlocal/Game/text_speedup.png')
        this.addChild(this.speedUp);
        this.speedUp.visible = false;


        this.waterBomb = new Laya.Image('wxlocal/Game/text_waterbomb.png')
        this.addChild(this.waterBomb);
        this.waterBomb.visible = false;

    }
    _startPlay() {
        this._skillIcon();
        if(this.selectBox == undefined){
            this.selectBox = Laya.TimeLine.to(this.indector, { x: 580 }, 3000).to(this.indector, { x: 0 }, 3000);
        }
        this.selectBox.play(0, true);
    }
    //两个同时随机，定位置
    _randomPosition() {
        let posArr = [0,100,200,300,400,500];
        let arr = this._randomFun(posArr)
        return arr
    }

    _skillIcon() {
        let posArr = this._randomPosition();
        let skillArr = ["wxlocal/Game/icon_waterbomb.png", "wxlocal/Game/icon_speedup.png", "wxlocal/Game/icon_shild.png"]
        
        let skill1 = new Laya.Image(skillArr[Math.floor(Math.random()*3)]);
        let skill2 = new Laya.Image(skillArr[Math.floor(Math.random()*3)]);
        skill1.name = 'skill1';
        skill2.name = 'skill2';

        skill1.pos(posArr[0], 9.1);
        skill2.pos(posArr[1], 9.5);
        let array = [];
        array.push(skill1, skill2)
        this.array = array;
        this.addChild(skill1)
        this.addChild(skill2)
    }

    handleClick() {
        let x = this.indector._x;
        this.selectBox.pause();
        let min = this.array[0]._x;
        let max = this.array[0]._x + 87;
        let min2 = this.array[1]._x;
        let max2 = this.array[1]._x + 87;
        let skin = "";
        var _this = this

        switch (true) {
            case x >= min && x <= max:
                _this.skin = this.array[0]._skin;
                this._showDiaglog()
                break;
            case x >= min2 && x <= max2:
                _this.skin = this.array[1]._skin;
                this._showDiaglog()
                break;
            default:
                this._selectEmpty()
                _this.skin = null;
                break;
        }
        return _this.skin
    }

    _randomFun(arr) {
        var posArr = [];
        for (var i = 0; i < 2; i++) {
            var ran = Math.floor(Math.random() * (arr.length - i));
            posArr.push(arr[ran]);
            arr[ran] = arr[arr.length - i - 1];
        };
        return posArr
    }

    _selectEmpty() {
        console.log("我是空")
        Laya.timer.once(500, this, function () {
            this.selectBox.resume()
        });
    }

    _showDiaglog() {
        let _this = this;
        this.removeChildByName("skill1");
        this.removeChildByName("skill2");
        this.indector.visible = false;
        this.imgBg.visible = false;
        var value = _this.skin;
        if (value == "wxlocal/Game/icon_waterbomb.png") {
            this.waterBomb.visible = true;
            this.waterBomb.pos(0, 0)
        } else if (value == "wxlocal/Game/icon_speedup.png") {
            this.speedUp.visible = true;
            this.speedUp.pos(0, 0)
        } else if (value == "wxlocal/Game/icon_shild.png") {
            this.shieldBlock.visible = true;
            this.shieldBlock.pos(0, 0)
        }
        Laya.timer.once(1500, _this, function () {
            this.shieldBlock.visible = false;
            this.waterBomb.visible = false;
            this.speedUp.visible = false;
            this._hideBox();
        })
    }
    
    _hideBox() {
        this.selectBox.pause()
        this.indector.visible = true;
        this.imgBg.visible = true;
        this._startPlay();
    }


}