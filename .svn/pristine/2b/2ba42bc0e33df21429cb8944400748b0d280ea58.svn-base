export default class LoadView extends PaoYa.View{
    constructor(){
        super();
    }

    getSceneUrl(){
        return 'scene/loading.json';
    }

    onEnable(){
        var loadSkeleton = new Laya.Skeleton();
        loadSkeleton.load("spine/loading.sk", Laya.Handler.create(this, function () {
            // loadSkeleton.play("loading");
            var view = this.loadbar
            loadSkeleton.pos(view.x,Math.floor(view.y+view.height+10));
            this.event(Laya.Event.COMPLETE)
        }))
        this.loadSkeleton = loadSkeleton;
        this.addChild(loadSkeleton);
        this.lblProgress.text = ""
        this.sMask=new Laya.Sprite();
        this.loadbar.mask=this.sMask;
    }

    update(progress){
        this.lblProgress.text = Math.floor(progress*100) + "%"
        var width = Math.floor(this.loadbar.width *progress)
        this.sMask.graphics.clear()
        this.sMask.graphics.drawRect(0,0,width,this.loadbar.height,"#ff0000")
       // this.loadbar.mask=null;
       this.loadbar.repaint();
       // this.loadbar.mask=this.sMask;
        var posX = this.loadbar.x + width;
        this.loadSkeleton.pos(posX, this.loadSkeleton.y);
    }

    destroy(){
        this.loadSkeleton.destroy()
        loadingUI.prototype.destroy.call(this)
    }
}
