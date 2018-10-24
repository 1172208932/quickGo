import GameView from './GameView'
import clearTime from '../dialog/ReadyGoDialog'
import SpineConfig from "../SpineConfig";
import GameResultScene from '../result/GameResultScene';
export default class GameScene extends PaoYa.Scene {
    constructor(params) {
        super();
        this.params = params;
        let gameview = new GameView(params)
        this.view = gameview;
        this.isGameOver = false;
        // this.view.on(GameOnlineView.SendBet, this, this.onSendBet);
    }

    viewDidLoad() {
        Laya.Scene.open('scene/dialog/ReadyGo.json');
        //完成以后再调用
        this.view.on(GameView.SendBet, this, this.onSendBet);
        this.onMessage(PaoYa.Client.GAME_START_PK, this, this.onStartPK);
        this.onMessage(PaoYa.Client.GAME_BET, this, this.onBet);
        this.onMessage(PaoYa.Client.GAME_END_PK, this, this.onEndPK)
        this.onMessage(PaoYa.Client.GAME_END_PKGAME, this, this.onEndPkGame)

        this.view.on(GameView.RESULT, this, this.toReslutMessage)
    }
    toReslutMessage() {
        this.sendMessage(PaoYa.Client.GAME_BET, { user_bets: { is_finish: 1, distance: 8000, user_id: this.myUserId } });
    }
    toReslut(e,data) {//
        Laya.Tween.clearAll(this.boxOther);
        this.view._clearAnimation();
        this.shield = new Laya.Skeleton(SpineConfig.win_lose.templet);
        this.shield.pos(0, 350)
        this.shield.play(e, false);
        this.view.addChild(this.shield);
        this.shield.on(Laya.Event.STOPPED, this, function () {
             this.shield.destroy();
            this.gameOver(e,data)
        })
    }
    gameOver(e,data) {
        // 2平局 4 胜利 1失败        
        console.log(e)
        this.isGameOver = true;
        let gameResultScene = new GameResultScene(e,data)
        this.navigator.push(gameResultScene)
    }
    onBet(e) {
        // return;
        console.log('isRobot');
        if (this.isGameOver) { return; }
        var message;
        console.log("收到消息时的数据", e)
        let props_id = e.props_id;
        switch (true) {
            case props_id == 1:
            // this.view.runFast("otherRunFast")
            //break;
            case props_id == 2:
                this.view.shielding = 1;//1代表对手
                this.view.protectShield()
                break;
            case props_id == 3:
                //this.view.throwWater("otherWater")
                this.view.watering = 1;//1代表对手
                this.view.throwWater()
                break;
        }

    }

    onStartPK() {
        console.log(11111)

    }


    /**发送消息 */
    onSendBet(e) {
        this.sendMessage(PaoYa.Client.GAME_BET, e);
    }

    /**收到游戏结束消息 */
    onEndPK(data) {
        let res
        let ownUserId = PaoYa.DataCenter.user.id
        let winId = data.win_userid
        switch(winId){
            case '0':
            res = 2            
            break
            case ownUserId:
            res = 4            
            break
            default:
            res = 1
            break
        }
        this.toReslut(res,data)
    }

    onEndPkGame(data) {
        console.log('晋级赛结束：', data)
        //切换服务器
    }

}