import HomeView from "./HomeView";
import RoleChangeScene from "../role/RoleChangeScene";
import HomeThenScene from "./HomeThenScene";

export default class HomeScene extends PaoYa.Scene {
    constructor() {
        super();
        let homeView = new HomeView();
        this.view = homeView
    }
    viewDidLoad(){
        var a=70;
        console.log('4444444', new Number(90).formatTime())
    }
    onViewClick(e) {
        switch (e.target.name) {
            // case '':
            // console.log('kongkong')
            // break
            case 'friendhoho':
                this.tofriend()
                break
            case 'morepeople':
                let rolechange = new RoleChangeScene()
                this.navigator.push(rolechange)
                break
            case 'btnToThen':
                let homethen = new HomeThenScene()
                this.navigator.push(homethen)
                break
        }
    }
    tofriend() {
        console.log(33333333)
    }
}