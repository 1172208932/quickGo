export default class Infon extends Laya.Script{
    constructor(){super()}
    onEnable(){
        this.userData = PaoYa.DataCenter.user
        console.log(this.owner)
        this._imgIcon = this.owner.getChildByName('imgIcon')
        // this._imgIcon.skin = this.userData.avstar
    }
}