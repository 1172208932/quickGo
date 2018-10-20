import GameView from './GameView'
import clearTime from '../dialog/ReadyGoDialog'
import SpineConfig from "../SpineConfig";
import GameResultScene from '../result/GameResultScene';
export default class GameScene extends PaoYa.Scene {
    constructor() {
        super();
        let gameview = new GameView()
        this.view = gameview
    }

    viewDidLoad() {
        Laya.Scene.open('scene/dialog/ReadyGo.json');
        //完成以后再调用
        this.otherInfo()
    }
    gameOver(e) {
        // 2平局 4 胜利 1失败        
        console.log(e)
        let gameResultScene = new GameResultScene(e)
        this.navigator.push(gameResultScene)
    }
    otherInfo() {
        this.OtherplaySkill = "otherWater"
        if (this.OtherplaySkill == "otherWater") {
            this.view.throwWater(this.OtherplaySkill)
        } else if (this.OtherplaySkill == "otherRunFast") {
            this.view.runFast(this.OtherplaySkill)
        }
    }
}