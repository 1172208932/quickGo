import SelectGameView from './SelectGameView'
import GetPropDialog from '../dialog/GetPropDialog'
import GameScene from '../game/GameScene';
import GameResultScene from '../result/GameResultScene';
import HomeScene from './HomeScene';

export default class SelectGameScene extends PaoYa.Scene {
    constructor() {
        super()
        let HomeThen = new SelectGameView()
        this.view = HomeThen

    }
    onViewClick(e) {
        switch (e.target.name) {
            // case 'btnToprop':
            // console.log(33333333333333333333)
            // break
            case 'btnQuick':
                let gameScene = new GameScene()
                this.navigator.push(gameScene)
                break
            case 'btnBack':
                let HomeView = new HomeScene()
                this.navigator.push(HomeView)
                break
        }
    }
    toGetProp(){
        Laya.Scene.open('scene/dialog/GetPropDialog.json')
    }

}