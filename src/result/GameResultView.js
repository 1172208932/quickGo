import Sound from "../common/Sound";
import SpineConfig from "../SpineConfig";
export default class GameResultView extends PaoYa.View {
    //e 结算结果  data endpk数据   
    constructor(e, data, a) {
        super()
        this.resultData = data
        this.po = e
        this.matchData = a
    }
    getSceneUrl() { return 'scene/GameResultView.json' }
    onEnable() {
        console.log( PaoYa.DataCenter.matchSUccessData)
        let [ownGend, oppoGend, winNum] = [PaoYa.DataCenter.user.gender, this.matchData.match_list[1].gender, PaoYa.DataCenter.config.game.jsonconfig.day_wins_reward]
        switch (ownGend) {
            case '男':
                this.ownGendar.skin = 'wxlocal/Game/icon_boy.png'
                break
            case '女':
                this.ownGendar.skin = 'wxlocal/Game/icon_girl.png'
                break
            default:
                this.ownGendar.skin = 'wxlocal/match/icon_girl.png'
                break
        }
        switch (oppoGend) {
            case '男':
                this.oppoGendar.skin = 'wxlocal/Game/icon_boy.png'
                break
            case '女':
                this.oppoGendar.skin = 'wxlocal/Game/icon_girl.png'
                break
            default:
                this.oppoGendar.skin = 'wxlocal/Game/icon_girl.png'
                break
        }
console.log(this.resultData,PaoYa.DataCenter.user)
var ownid =  PaoYa.DataCenter.user.id
// var upid = this.resultData

        switch (this.po) {
            case 1://失败
                Sound.onPlayLose()
                this.timer.once(100, this, function () {
                    if (PaoYa.DataCenter.gameType == "friend") {
                        this.btnChangeLuck.visible = true
                    }else{
                        PaoYa.DataCenter.isGet ? this.btnCheat.visible = true : this.btnChangeLuck.visible = true
                    }
                })
                this.shield = new Laya.Skeleton(SpineConfig.win_lose.templet);
                this.shield.pos(0, 100)
                this.shield.play(1, true);
                this.addChild(this.shield);
                this.ownDofinish.visible = false
                this.ownUndo.visible = true
                this.oppoUnfinish.visible = false
                this.oppoDofinish.visible = true
                this.ownBean.text = this.resultData.lose_user.pao_gold
                this.oppoMoreNum.text = this.resultData.win_user.win_chang + '%'
                this.ownName.text = this.resultData.lose_user.user_name
                this.ownImage.skin = this.resultData.lose_user.user_icon
                this.oppoName.text = this.resultData.win_user.user_name
                this.oppoIcon.skin = PaoYa.Utils.makeIcon(this.resultData.win_user.user_icon)
                // this.oppoBean.text = '+' + this.resultData.win_user.pao_gold
                this.lalScore.text = '+'+this.resultData.lose_user.integral
                break
            case 2://平局
                Sound.onPlayWin()
                this.shield = new Laya.Skeleton(SpineConfig.win_lose.templet);
                this.shield.pos(0, 100)
                this.shield.play(3, true);
                this.addChild(this.shield);
                if(this.resultData.lose_user.user_id == ownid){
                this.ownMoreNum.text = this.resultData.lose_user.win_chang + '%'
                this.ownImage.skin = PaoYa.Utils.makeIcon(this.resultData.lose_user.user_icon)                
                this.ownName.text = this.resultData.lose_user.user_name
                this.oppoName.text = this.resultData.win_user.user_name
                this.oppoIcon.skin = PaoYa.Utils.makeIcon(this.resultData.win_user.user_icon)  
                this.oppoMoreNum.text = this.resultData.win_user.win_chang + '%'
                              
                }else{
                this.ownMoreNum.text = this.resultData.win_user.win_chang + '%'
                this.ownImage.skin = PaoYa.Utils.makeIcon(this.resultData.win_user.user_icon)         
                this.ownName.text = this.resultData.win_user.user_name
                this.oppoMoreNum.text = this.resultData.lose_user.win_chang + '%'                
                this.oppoName.text = this.resultData.lose_user.user_name
                this.oppoIcon.skin = PaoYa.Utils.makeIcon(this.resultData.lose_user.user_icon) 
                }
                this.btnShowy.visible = true
                this.oppoUnfinish.visible = false
                this.oppoDofinish.visible = true
             

                // this.ownEquality.visible = false
                this.ownBeanBox.visible = false
                this.lalScore.text = '+'+this.resultData.win_user.integral
                
                // this.oppoBeanBox.visible = false
                // this.oppoTitle.visible = false 
                break
            case 4://胜利
                Sound.onPlayWin()
                this.shield = new Laya.Skeleton(SpineConfig.win_lose.templet);
                this.shield.pos(0, 100)
                this.shield.play(5, true);
                this.addChild(this.shield);
                let winUserNumber = this.resultData.win_user.day_wins
                console.log(winUserNumber, winNum)
                winUserNumber == winNum ? this.btnShowGigt.visible = true : this.btnShowy.visible = true
                this.ownBean.text = '+' + this.resultData.win_user.pao_gold
                this.ownMoreNum.text = this.resultData.win_user.win_chang + '%'
                this.ownName.text = this.resultData.win_user.user_name
                this.ownImage.skin = this.resultData.win_user.user_icon
                this.oppoName.text = this.resultData.lose_user.user_name
                this.oppoIcon.skin = PaoYa.Utils.makeIcon(this.resultData.lose_user.user_icon)
                this.lalScore.text = '+'+this.resultData.win_user.integral                
                // this.oppoBean.text = this.resultData.lose_user.pao_gold
                break
        }
        if (PaoYa.DataCenter.gameType == "friend") {
            this.ownBeanBox.visible = false
            this.boxOwnIntarget.visible = false
            // this.oppoBeanBox.visible = false
            // this.boxOppoIntarget.visible = false
        }
    }
    onDestroy() {
        if (this.shield) {
            this.shield.destroy()
        }
    }
    setBtn() {
        console.log("setBtn", PaoYa.DataCenter.gameType)
        if (PaoYa.DataCenter.gameType == "friend") {
            this.btnAgain.disabled = true;
        }
    }
}