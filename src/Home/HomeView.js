import SpineConfig from "../SpineConfig";
export default class HomeView extends PaoYa.View {
    constructor(){super()}
    getSceneUrl() {
        return 'scene/HomeView.json'
    }
    onEnable(){
        console.log(PaoYa.ShareManager.imageURL)
        this.shield = new Laya.Skeleton(SpineConfig.win_lose.templet);
        this.shield.pos(0, 0)
        this.shield.play(0, true);
        this.addChild(this.shield);
    }
}