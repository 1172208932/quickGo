import RoleChangeView from './RoleChangeView'
 export default class RoleChangeScene extends Scene {
     constructor(){
         super()
         let roleChangeView = new RoleChangeView()
         this.view = roleChangeView
     }
     onViewClick(e){
         switch(e.target.name){
             case 'btnUseRole':
                console.log('3333333333')
         }
     }
    //  viewDidLoad(){
       
    //  }
 }