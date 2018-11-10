/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import ReadyGoDialog from "./dialog/ReadyGoDialog"
import ShareDialog from "./dialog/ShareDialog"
import GameBg from "./common/GameBg"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("dialog/ReadyGoDialog.js",ReadyGoDialog);
		reg("dialog/ShareDialog.js",ShareDialog);
		reg("common/GameBg.js",GameBg);
    }
}
GameConfig.width = 750;
GameConfig.height = 1334;
GameConfig.scaleMode ="fixedwidth";
GameConfig.screenMode = "none";
GameConfig.alignV = "top";
GameConfig.alignH = "left";
GameConfig.startScene = "scene/GameView.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();
