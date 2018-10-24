import GameResultView from "./GameResultView";
import GameScene from "../game/GameScene";
import MatchGradeScene from '../MatchGrade/MatchGradeScene'
// import SelectGameScene from "../Home/SelectGameScene";

export default class GameResultScene extends PaoYa.Scene {
    constructor(e, data) {
        super()
        console.log('re scene', data)
        this.resultData = data
        this.po = e
        this.view = new GameResultView()
    }
    viewDidLoad() {
        switch (this.po) {
            case 1://失败
                this.view.result.skin = 'wxlocal/Result/text_failure.png'
                this.view.btnChangeLuck.visible = true
                this.view.ownDofinish.visible = false
                this.view.ownUndo.visible = true
                this.view.oppoUnfinish.visible = false
                this.view.oppoDofinish.visible = true
                this.view.ownBean.text = this.resultData.lose_user.pao_gold
                this.view.oppoMoreNum.text = this.resultData.win_user.win_chang+'%' 
                this.view.ownName.text = this.resultData.lose_user.user_name
                this.view.ownImage.skin = this.resultData.lose_user.user_icon
                this.view.oppoName.text = this.resultData.win_user.user_name
                this.view.oppoIcon.skin = this.resultData.win_user.user_icon
                this.view.oppoBean.text = 'x' + this.resultData.win_user.pao_gold
                break
            case 2://平局
                this.view.result.skin = 'wxlocal/Result/text_draw.png'
                this.view.btnAgain.visible = true
                this.view.oppoUnfinish.visible = false
                this.view.oppoDofinish.visible = true
                this.view.oppoMoreNum.text = this.resultData.win_user.win_chang+'%' 
                this.view.ownMoreNum.text = this.resultData.lose_user.win_chang + '%'
                this.view.ownName.text = this.resultData.win_user.user_name
                this.view.ownImage.skin = this.resultData.win_user.user_icon
                this.view.oppoName.text = this.resultData.lose_user.user_name
                this.view.oppoIcon.skin = this.resultData.lose_user.user_icon
                this.view.ownEquality.visible = false
                this.view.ownBeanBox.visible = false
                this.view.oppoBeanBox.visible = false
                this.view.oppoTitle.visible = false
                break
            case 4://胜利
                this.view.result.skin = 'wxlocal/Result/text_victory.png'
                this.view.btnAgain.visible = true
                this.view.ownBean.text = 'x' + this.resultData.win_user.pao_gold
                this.view.ownMoreNum.text = this.resultData.win_user.win_chang + '%'
                this.view.ownName.text = this.resultData.win_user.user_name
                this.view.ownImage.skin = this.resultData.win_user.user_icon
                this.view.oppoName.text = this.resultData.lose_user.user_name
                this.view.oppoIcon.text = this.resultData.lose_user.user_icon
                this.view.oppoBean.text = this.resultData.lose_user.pao_gold
                break
        }
    }
    onViewClick(e) {
        switch (e.target.name) {
            case 'btnAgain':
                console.log(1234321)
                this.goMatchScene()
                break
            case 'btnBack':
                let scene = this.navigator.findSceneWithClass(MatchGradeScene)
                this.navigator.popToScene(scene)
                break
            case 'btnShowy':
                console.log('炫耀')
                break
            case 'btnChangeLuck':
                console.log('更改')
        }
    }
    goMatchScene() {
        var type = PaoYa.DataCenter.config.game.match_type;
        switch (MatchGradeScene.matchTypeId) {
            case type[0].id:
                // this.event(MatchGradeScene.goNovice)
                MatchGradeScene.goNovice();
                break;
            case type[1].id:
                MatchGradeScene.goPrimary();
                break;
            case type[2].id:
                // this.event(MatchGradeScene.MIDDLE,{})
                MatchGradeScene.goMiddle();
                break;
        }
    }
}