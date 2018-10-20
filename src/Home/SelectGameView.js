import SpineConfig from '../SpineConfig'
    export default class SelectGameView extends PaoYa.View {
    constructor() { super() }
    getSceneUrl() {
        return 'scene/SelectGameView.json'
    }
    onEnable(){
            this.shield = new Laya.Skeleton(SpineConfig.fen_xiang.templet);
            this.shield.pivot(0.5,0.5)            
            this.shield.pos(626, 332)
            this.shield.play(0 , true);
            this.shield.size(200,200)
            this.shield.on(Laya.Event.CLICK,this,function(){
                console.log(123)
                this.owner.toGetProp()
            })
            this.addChild(this.shield);       
    }
    onDestroy(){
        this.shield && this.shield.destroy();
    }
}