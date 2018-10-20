import SpineConfig from "./SpineConfig";
import LoadView from "./LoadView";

export default class LoadScene extends PaoYa.Scene{
    constructor(cb){
        super();
        this.loadSkeleton = null
        this.view = new LoadView();
        this.cb = cb
        this.loadIndex=0;
        this.init();
    }

    init(){
        this.view.on(Laya.Event.COMPLETE, this, function () {
            this.startLoading();
        })
    }

    startLoading(){
        var _this=this;
        var res = Object.values(SpineConfig);
        var urls = [
            "res/atlas/wxlocal/Home.atlas", 
            'res/atlas/wxlocal/Common.atlas',
        ]
        for (var i = 0; i < res.length; i++) {
            var item = res[i]
            urls.push({
                url: item.path,
                type: Laya.Loader.BUFFER
            })
        }
        PaoYa.Loader.load(urls, this, function () {
          _this.preload(res, _this.cb)
        }, function (progress) {
            this.view.update(progress)
        })
    }

    preload(spines, cb){
        var _this = this
        var spine = spines[this.loadIndex]
        this.loadSpine(spine.path,function(templet){
            spine.templet = templet
            if (_this.loadIndex == spines.length-1){
                cb && cb()
            } else{
                _this.loadIndex ++
                _this.preload(spines,cb)
            }
        })
    }

    loadSpine(url, completion){
        var templet = new Laya.Templet
        templet.on(Laya.Event.COMPLETE, this, function () {
            completion && completion(templet)
        })
        templet.on(Laya.Event.ERROR, this, function(){
            console.error("E: Load spine, skin:"+url)
            error && error()
        })
        templet.loadAni(url)
    }

    destroy(){
        PaoYa.Scene.prototype.destroy.call(this)
        this.cb = null
    }
}