import GameConfig from "./GameConfig";
import HomeScene from "./Home/HomeScene";
import LoadScene from "./LoadScene";
class Main extends PaoYa.Main{
	constructor() {
		let params={
			/**游戏 ID */
            gameId: 1004,
            /**API 接口地址 */
            baseURL: 'http://47.96.1.255:8080/ServiceCore/',
            /**socket 游戏 zone */
            zone: 'river',
            /**米大师支付 */
            offerId: '1450017004',
            /**是否自动登录，如果为 false 则需要手动调用login方法，默认为true */
            autoLogin: false,
            /**是否使用socket，便于支持单机游戏，默认为true*/
			useSocket: true,
			/**debug */
			debug:true,
            /**版本号 */
            version: '1.0',
            /**发行号 */
			release: 1,
			/**是否显示性能面板 */
			showStat:false,
            /**用于浏览器登录 */
            userId: 190300
		}
		super(params);
		
		this.resInclude=['wxgame/ladder/win_lose'];
	}

	/**初始化首屏界面 */
    initRootScene(launchOption){
		PaoYa.Loader.load(["res/atlas/wxlocal/loading.atlas"], this, function () {
			if(Laya.Render.isConchApp){
				Laya.timer.once(500, this, function(){
					typeof wx!='undefined' && wx.hideSplash && wx.hideSplash();
				})
			}
            var loadingScene = new LoadScene(this.loadComplete.bind(this));
			this.loadingScene=loadingScene;
			this.navigator.show(loadingScene)
        })
	};
	
	loadComplete(){
		var homeScene=new HomeScene();
		this.navigator.push(homeScene);
	}

	onVersionLoaded() {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded() {
		//加载IDE指定的场景
		// GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
	}
}
//激活启动类
new Main();
