export default class ShareDialog extends Laya.Dialog{
    onEnable(){
    this.btnGetBean.on(Laya.Event.CLICK,this,function(){
       this.close()
    })
    }
    // getSceneUrl(){
    //     return 'scene/dialog/ShareDialog';
    // }


}