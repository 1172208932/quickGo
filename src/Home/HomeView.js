import Sound from "../common/Sound";

export default class HomeView extends PaoYa.View {
    constructor(){super()}
    getSceneUrl() {
        return 'scene/HomeView.json'
    }
    onEnable(){
       Sound.onPlayHomeMusic()        
    }
}