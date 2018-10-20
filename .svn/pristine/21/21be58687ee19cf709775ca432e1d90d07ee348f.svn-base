declare const DEBUG: boolean
declare const onWX: boolean
declare const onMiniGame: boolean

declare interface Array<T> {
    lastObject: T
    randomItem: T
}
declare interface Date {
    /**
    * @param {时间格式，如“yyyy-mm-dd hh:mm:ss”} format 
    */
    formatWithStyle(format: string): string;
}
     interface Number {
    /** * 格式化秒数，如 1000s = 00:16:40 */
    formatTime(): string;
}
declare interface Window {
    PaoYa
}

declare interface GameConfig {
    /**游戏 ID */
    gameId: number
    /**API 接口地址 */
    baseURL: string
    /**socket 游戏 zone */
    zone: string
    /**米大师支付 */
    offerId?: string
    /**是否自动登录，如果为 false 则需要手动调用login方法，默认为true */
    autoLogin?: boolean
    /**是否使用socket，便于支持单机游戏，默认为true*/
    useSocket?: boolean
    /**版本号 */
    version?: string
    /**发行号 */
    release?: number
    /**用于浏览器登录 */
    userId?: number
    /**mta统计初始化ID */
    mtaID?: string
    /**mta统计事件ID */
    mtaEventID?: string
    /**游戏的设计宽度，默认为750 */
    width?: number
    /**游戏的设计高度，默认为1334 */
    height?: number
    /**是否启用webGL，默认为true */
    webGL?: boolean
    /**是否显示 */
    showDebugTool?: boolean
    showStat?: boolean
    scaleMode?: string
    alignH?: string
    alignV?: string
}

declare module PaoYa {
    /**用于wx的API判断，在使用微信API之前，必须调用该方法 */
    function APIEnable(method?: string): boolean
    /**通知的名字，都是常量，可以自行扩展，只要是string类型即可 */
    class NotificationName {
        static ApplicationShow: string;
        static ApplicationHide: string;
        static GameShow: string;
        static NetworkChanged: string;
        static LoginSuccess: string;
    }
    /**通知中心，用于全局触发 */
    class NotificationCenter {
        static defaultCenter: Laya.EventDispatcher;
    }

    class Scene extends Laya.EventDispatcher {
        /** */
        static VIEW_DID_LOAD: string;
        static VIEW_WILL_APPEAR: string;
        static VIEW_DID_APPEAR: string;
        static VIEW_WILL_DISAPPEAR: string;
        static VIEW_DID_DISAPPEAR: string;
        static WILL_DESTROY: string;
        static destroyHandler: Function;
        /**当前scene所在的navigator */
        navigator: Navigator;
        /**当前scene所拥有的view */
        view: any;
        /**当前是否活跃，直接标识了当前scene是否显示在屏幕上 */
        isActive: boolean;
        /**当前游戏实例 */
        app: Main

        constructor();
        /**view加载完成时调用，虚方法 */
        viewDidLoad(): void;
        /**view将要显示时调用 虚方法 */
        viewWillAppear(): void;
        /**view显示完成时调用 虚方法 */
        viewDidAppear(): void;
        /**view将要消失时调用 虚方法 */
        viewWillDisappear(): void;
        /**view完全消失时调用 虚方法 */
        viewDidDisappear(): void;

        /**GET请求 */
        GET(path: string, params: Object, suc: Function, fail?: Function): void;
        /**POST请求 */
        POST(path: string, params: Object, suc: Function, fail?: Function): void;
        /**向 websocket 发送信息 */
        sendMessage(cmd: any, params: any): void;
        /**
         * Socket监听服务器推送消息
         * @warn 这里是可以省略掉caller的，因为caller一般都是指代this
        */
        onMessage(cmd: any, caller: any, listener: any): void;

        /**分享主要方法，需要传入所有参数 */
        static share(title: string, image: string, query: any, success: any, fail?: any): void;
        /**分享方法，可以不用传入图片，图片将从 ShareManager.imageURL 获取 */
        static shareTitle(title: any, query: any, success: any, fail?: any): void;

        /**当前 scene 收到服务器 socket 命令时触发，这是一个空方法，子类可以直接覆盖 */
        onSocketMessage(cmd: string, value: any, code?: number, message?: string)

        /**当 scene 中的 view 点击时触发，该方法为虚方法 */
        onViewClick(event: Laya.Event)
        /**进入前台时执行，由游戏事件分发主动调用 */
        onShow(res: any): void;
        /**进入后台时执行，由游戏事件分发主动调用 */
        onHide(res: any): void;
        /**点击右上角转发时触发 */
        onShareAppMessage(): any;
        /**当网络变化时调用 */
        onNetworkChange(): void;
        /**销毁时调用 */
        onDestroy(): void;
    }

    class Navigator {
        scenes: Array<Scene>;
        visibleScene: Scene;

        constructor();
        /**将scene临时显示到屏幕上，不会加入到之前的栈中 */
        show(scene: Scene, animated?: boolean): void;
        dismiss(scene: Scene, animated?: boolean): void;
        
        /**将全新的scene显示在屏幕上 */
        push(scene: Scene, animated?: boolean): void;
        /**将视图推出栈*/
        pop(): void;
        /** 跳到栈底的scene*/
        popToRootScene(): void;
        /**跳到指定的scene*/
        popToScene(toScene: Scene): void;

        /**找到指定SceneClass的scene */
        findSceneWithClass(SceneClass: ClassDecorator): Scene;
        replace(SceneClass: ClassDecorator, newScene: Scene): void;
        /**在视图栈中动态替换指定的scene，实现逻辑为
         * 1、找到指定的oldScene所在的位置，并pop到她所在的位置
         * 2、用newScene替换掉它
         */
        replaceSceneWith(newScene: Scene): void;
    }

    class View extends Laya.View {
        constructor();
        /**通过返回的 string 来讲 UI 编辑器中的 scene 和当前的 view 结合起来 */
        getSceneUrl(): string
        /**当 view destroy 时调用，该方法为虚方法 */
        onDestroy(): void
        /**当该 view 被点击时触发，可以根据 e.target.name 来区分当前点击实例 */
        onClick(event: Laya.Event): void
    }

    class LifeCircleMonitor extends Laya.EventDispatcher {
        /**是否在前台 */
        inForeground: boolean;
        constructor();
        static SHOW: string;
        static HIDE: string;
        static OFF_SHOW: string;
        static OFF_HIDE: string;
    }

    class NetworkMonitor extends Laya.EventDispatcher {
        /**当前网络是否连接 */
        isConnected: boolean;
        /**是否WIFI环境 */
        isWIFI: boolean;
        /**当前网络类型 */
        type: string;
        constructor();
        /**获取当前网络状态 */
        getCurrentType(cb: any): void;
        static NETWORK_CHANGE: string;
    }

    class SocketConfig {
        static zone: string;
    }
    class Socket extends Laya.Socket {
        url: any;
        /**重连配置 */
        static reconnectConfig: {
            total: number;
            interval: number;
            duration: number;
        };
        /**当前是否在重连 */
        isReconnecting: boolean;
        /**当前重连次数 */
        reconnectTimes: number;
        readonly canReconnect: boolean;
        constructor(url: any);
        /**切换服务器 */
        changeUrl(url: any): void;
        static RECONNECT_START: string;
        static RECONNECT_END: string;
        static RECONNECT_FAIL: string;
        static RECONNECT_PROGRESS: string;
    }

    class ClientConfig {
        static watchDogTime: number;
        static maxRetryTime: number;
    }
    class Client extends Socket {
        /**用于配置需要忽略的命令 */
        static ignoreCmds: string[];

        constructor(url: any);
        /**发送socket消息 */
        sendMessage(cmd: string, params: any): void;
        /**处理socket消息 */
        handleMessage(msg: any): void;

        static HEART_BEAT: string;
        static DISCONNECT: string;
        static LEAVE_ROOM: string;
        static LOGIN: string;
        static MATCH_SUCCESS: string;
        static MATCH_FAIL: string;
        static MATCH_JOIN: string;
        static MATCH_CANCEL: string;
        static LADDER_MATCH_JOIN: string;
        static LADDER_MATCH_CANCEL: string;
        static GAME_START_MATCH: string;
        static GAME_START_GAME: string;
        static GAME_START_PK: string;
        static GAME_BET: string;
        static GAME_END_PK: string;
        static GAME_END_PKGAME: string;
        static AGIAN_SEND: string;
        static AGAIN_REJECT: string;
        static AGAIN_CANCAL: string;
        static CHAMPIONSHIP_JION: string;
        static CHAMPIONSHIP_CANCEL: string;
        static CHAMPIONSHIP_UPDATE_ROOM_COUNT: string;
        static CHAMPIONSHIP_UPDATE_TOTAL_COUNT: string;
        static SHARE_START_GAME: string;
        static SHARE_INVITE_FRIEND: string;
        static SHARE_RECEIVE_INVITE: string;
        static GROUP_JOIN_ROOM: string;
        static GROUP_ROOM_STATUS: string;
    }

    interface RequestAble {
        GET(path: string, params: Object, suc: Function, fail: Function): void;
        POST(path: string, params: Object, suc: Function, fail: Function): void;
    }
    class RequestConfig {
        static baseURL: string;
        static token: string;
        static headers: string[];
        static makeParamsHandler: Function;
        static maxRetryTimes: number;
    }
    class Request extends Laya.HttpRequest implements RequestAble {

        constructor();
        /**发送GET请求 */
        GET(path: any, params: any): void;
        /**发送POST请求 */
        POST(path: any, params: any): void;

        /**类方法进行GET请求 */
        static GET(path: any, params: any, suc: any, fail?: any): Request;
        /**类方法进行POST请求 */
        static POST(path: any, params: any, suc: any, fail?: any): Request;

    }

    class DataTrack {
        static setup(appID: string, eventID: string, options: any): void;
        static track(type: DataTrackType, params: any): void;
        static trackType(type: DataTrackType): void;
        static startTrackTime(id: string): void;
        static stopTrackTime(id: string): void;
        static startSocketTime(): void;
        static stopSocketTime(): void;
        static startSocketLogin(): void;
        static stopSocketLogin(): void;
        static uploadLoginCostTime(): void;
    }
    enum DataTrackType {
        LoginTimeCost = 3001,
        SocketTimeCost = 3002,
        SocketLoginTimeCost = 3003,
        SocketRetry = 3004,
        HTTPRetry = 3005,
        Ladder = 1001,
        FriendBattle = 1002,
        RedPacket = 1003,
        PlayOffline = 1004,
        Rank = 1004,
        HallBack = 1006,
        WithDraw = 1007,
        Jump = 1008,
        Change = 1009
    }

    class ShareManager {
        /**分享的图片地址，可以是本地图片，也可以是网络图片 */
        static imageURL: string;
        /**自定义方法处理分享的query，比如添加全局统一参数,返回的是个对象 */
        static makeQueryHandler: Function;
        /**组织分享 */
        static makeShareInfo(title: any, image: string, query: any, success: any, fail?: any): {
            title: any;
            imageUrl: string;
            query: string;
            success: any;
            fail(): void;
        };
        /**分享主要方法，需要传入所有参数 */
        static share(title: string, image: string, query: any, success: any, fail?: any): void;
        /**分享方法，可以不用传入图片，图片将从 ShareManager.imageURL 获取 */
        static shareTitle(title: any, query: any, success: any, fail?: any): void;
        /**获取分享内容 */
        static getShareInfo(shareTicket: any, suc: any, fail: any): void;
        /**显示当前页面的转发按钮 */
        static showShareMenu(withShareTicket?: boolean): void;
        /**隐藏转发按钮 */
        static hideShareMenu(): void;
        /**更新转发属性 */
        static updateShareMenu(withShareTicket?: boolean): void;
    }

    class Application extends Laya.EventDispatcher {
        launchOption: LaunchOption;
        constructor();
        /**返回用户【转发】消息 */
        onShareAppMessage(): any;
        onShow(res: any): void;
        onHide(res: any): void;
        /**退出当前小游戏 */
        exit(): void;
    }

    class SoundManager extends Laya.SoundManager {
        static onShowHandler: Function;
        static onHideHandler: Function;
        static onAudioInterruptionBeginHandler: Function;
        static onAudioInterruptionEndHandler: Function;
    }

    class Game extends Application {
        params: GameConfig;
        constructor(params: GameConfig);
    }

    class Toast {
        /**
        * 1. icon默认是"success"
        * 2. icon 和 image 同时存在只会有一个生效，image的优先级高于icon，不管什么情况下都会有图片的，这个是取消不了的
        * 3. icon为null、undefined、""或者任何字符串，结果都为"success"
        * 4. duration是毫秒级
        * 5. 多次重复调用，只有最新调用的生效
        */
        static show(title: string, icon: string, image?: string, duration?: number): void;
        static hide(): void;
        static showSuccess(title: string, duration?: number): void;
        static showError(title: string, duration?: number): void;
        static showWarn(title: string, duration?: number): void;
        static showImage(image: string, duration?: number): void;
        /**
         * 显示loading提示层
         * @param  title
         * @param  mask 是否显示透明蒙层，也就是避免用户点击
         */
        static showLoading(title?: string, mask?: boolean): void;
        static hideLoading(): void;
        static showModal(title?: string, content?: string, confirmText?: string, confirmCallback?: any, cancelText?: string, cancelCallback?: any): void;
    }

    class PayManager {
        static offerId: string;
        static env: number;
        static platform: string;
        static pay(buyQuantity: number, success: Function, fail: Function): void;
    }

    interface AuthParams {
        scope: string;
        success: Function;
        fail: Function;
        alert: Function;
    }
    class AuthManager {
        static scope: {
            userInfo: string;
            userLocation: string;
            address: string;
            invoiceTitle: string;
            werun: string;
            record: string;
            writePhotosAlbum: string;
            camera: string;
        };
        /**
         *
         * @param scope 想要获取授权的标识，可以使用上面已经列举出来的权限
         * @param suc   授权成功回调
         * @param fail  授权失败回调
         * @param alert 当需要打开用户设置界面时，用于可以修改弹窗内容，方便用户确认操作
         */
        static auth(params: AuthParams): void;
    }

    interface LadderItem {
        id: number;
        name: string;
        icon: string;
        /**礼包配置  1-200,2-1  泡豆-泡豆数量，rmb-rmb金额 */
        gift_box: string;
        /**该等级的 满星数  */
        star: number;
        /**奖池 1-200000,2-1000  泡豆-泡豆数量，rmb-rmb金额 */
        reward: string;
        /**消耗  */
        match_cost: number;
        desc: string;
        show_reward: string;
        /**新增字段，用于表示该段位有多少人数 */
        peopleCount: number;
    }
    interface ConfigGame {
        ladder_config: Array<LadderItem>;
    }
    class ConfigList {
        /**通用配置 */
        common_config: Object;
        /**游戏配置 */
        game_list: Array<any>;
        /**赛事配置 */
        race_list: Array<any>;
        /**奖励配置 */
        promotion_reward: Array<any>;
        /**登录奖励 */
        login_reward: Array<any>;
        /**分享标题配置 */
        share_list: Array<any>;
        /**充值配置 */
        item_list: Array<any>;
        game: ConfigGame;
        ladder_config: Array<LadderItem>;
        tiny_login_reward: Array<any>;
        constructor();
    }

    class User extends Laya.EventDispatcher {
        /**性别，值为 (男、女、"") */
        gender: string;
        /**红包 */
        member_rmb: number;
        /**泡豆 */
        member_gold: number;
        /**昵称 */
        nickname: string;
        id: number;
        /**头像 */
        avstar: string;
        member_country: string;
        member_province: string;
        city: string;
        constructor(obj: any);
        gold: number;
        rmb: number;
        static CHANGE_GOLD: string;
        static CHANGE_RMB: string;
    }

    class LoginData {
        /**是否正式环境，用于控制支付显示 */
        isProduction: boolean;
        /**连续登录天数 */
        login_bonus_day: number;
        /**是否已经登录过 */
        login_bonus: number;
        game_url: string;
        /**用户登录凭证 */
        token: string;
        user: User;
        constructor(obj: any);
    }

    enum PrizeType {
        Gold = 1,
        Money = 2
    }
    interface PrizeInfo {
        type: PrizeType;
        value: string;
    }
    class DataCenter {
        /**配置列表 */
        static config: ConfigList;
        /**登录信息 */
        static login: LoginData;
        /**当前用户信息 */
        static user: User;
        /**原始数据 */
        static rawData: Object;
        static CDNURL: string;
        static videoAd: any;
        static isShare: boolean;
        /**用于全局记录登录流程耗时 */
        static loginTimeCost: Object;
        /**通过天梯ID获取天梯 */
        static findLadderById(id: any): LadderItem;
        static makeLadderIconById(id: any): string;
        static formatPrize(prize: string): Array<PrizeInfo>;
    }

    enum ShareType {
        InviteFriend = 1,
        GroupPK = 2,
        GroupRank = 3
    }
    class Main extends Game {
        params: GameConfig;
        /**是否已登录 */
        isLogined: boolean;
        /**已经授权访问用户信息，只在登录之前有用，登录之后该值不再起作用 */
        isAuthed: boolean;
        /**当前游戏的ID */
        gameId: number;

        /**
         * 1、两个都为 null ，则使用本地图片
         * 2、resInclude 为空，则全部使用网络图片
         * 3、resInclude 有值，则包含在其中的素材上传到网络，其他采用本地数据
         * 4、resExclude 为空，则全部使用本地图片
         * 5、resExclude 有值，则包含在其中的素材采用本地数据，其他上传至网络
         */
        /**已经上传到网上的资源 */
        resInclude: Array<string>
        /**没有上传到网上的资源 */
        resExclude: Array<string>

        constructor(params: GameConfig);

        login(): void;

        /**以下方法为子类重写 */
        loginSuccess(): void;
        /**初始化首屏界面 */
        initRootScene(launchOption: LaunchOption): void;
        /**初始化业务逻辑 */
        initService(): void;
        /**监听网络状态变化 */
        handleNetworkChange(isConnected: any, isWIFI: any): void;
        /**子类重写该方法，用于onShow之后 */
        handleOnShow(res: any): void;
    }

    class Loader {
        constructor();
        static load(url: any, caller: any, completion: any, p?: any): void;
    }

    class TimerService extends Laya.EventDispatcher {
        duration: any;
        interval: number;
        up: boolean;
        curTime: number;
        constructor(duration: any, interval?: number, up?: boolean);
        start(): void;
        stop(): void;
        update(): void;
        static START: string;
        static STOP: string;
        static TIMEOUT: string;
        static PROGRESS: string;
    }

    class LaunchScreenView extends Laya.View {
        static show(name: string, icon: string): void;
        static hide(): void;
    }

    class LoginMaskView extends Laya.View {
        static showInView(view: Laya.View): void;
        static hide(): void;
    }

    class RoundImageView extends Laya.Image {
    }

    enum RectCorner {
        RectCornerTopLeft = 1 << 0,
        RectCornerTopRight = 1 << 1,
        RectCornerBottomLeft = 1 << 2,
        RectCornerBottomRight = 1 << 3,
        RectCornerAllCorners = 15
    }
    class Utils {
        /**
        * 便捷生成图片数组，主要用于名称连续的图片
        * @param {用来组织图片的格式,用%i占位} format
        * @param {开始索引} start
        * @param {结束索引} end
        */
        static makeImagesWithFormat(format: any, start: any, end: any): Array<string>;
        static toQueryString(params: any): string;
        static makeGenderIcon(gender: any): string;
        static findUserByID(users: Array<any>, id: any): any;

        static makeRoundRectPath(width: number, height: number, r: number, corner: RectCorner): Array<any>
        static makeAllCornerRoundRectPath(w, h, r): Array<any>
        /**用于保留指定长度的字符串，其余用...表示,length=10 */
        static formatName(name: string, length?: number): string
        /**只用于显示用户头像 width=96*/
        static makeIcon(icon: string, width?: number): string
        /**用于完全拼接用户的头像地址 */
        static makeResourceURL(url: string): string
        /** 计算文字宽度 */
        static measureWidth(text: string): number
    }
}
