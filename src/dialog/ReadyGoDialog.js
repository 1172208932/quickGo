export default class ReadyGoDialog extends Laya.Dialog {
    constructor() { super() }
    onEnable() {
        Laya.UIConfig.closeDialogOnSide = false;
        let numn = 3
        Laya.timer.loop(1000, this, () => {
            numn--
            switch (true) {
                case numn > 0:
                    this.number1.texture = `wxlocal/Game/iconlbl_${numn}.png`;
                    break;
                case numn == 0:
                    this.number1.pos(80, 561)
                    this.number1.texture = `wxlocal/Game/iconlbl_ready.png`;
                    break
                case numn == -1:
                    this.number1.pos(200, 560)
                    this.number1.texture = `wxlocal/Game/iconlbl_go.png`;
                    break
                default:
                    Laya.timer.clearAll(this)
                    Laya.Scene.close('scene/dialog/ReadyGo.json');
                    break
            }
        })
    }
}