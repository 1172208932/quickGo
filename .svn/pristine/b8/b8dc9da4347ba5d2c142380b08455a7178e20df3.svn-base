import RankingListView from "./RankingListView";

export default class RankingListScene extends PaoYa.Scene{
    constructor(){super()
        let rankView = new RankingListView()
        this.view = rankView
    }
    onViewClick(){
        
    }
    viewDidLoad(){
        var _this = this
        this.GET("/ranking_list", { type: 8 }, function (data) {
            _this.view.setList(data)
        })
    }

}