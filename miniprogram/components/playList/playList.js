// components/playList/playList.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list:{
            type: Object,
            value:{}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        count : 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        _tranNum(count,point){
            let str = 0
            if(count.toString().length>4){
                let numStr = count.toString().split('.')[0]
                str = (Number(numStr)/10000).toFixed(point) + ' 万'
            }else{
                str = count
            }
            return str
        }
    },

    /*
    * 
    */
   observers:{
       list(list){
           const count = this._tranNum(list.playCount,2)
           this.setData({
               count
           })
       }
   } 
})
