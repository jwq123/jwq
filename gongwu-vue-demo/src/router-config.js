/**
 * Created by dell on 2017/6/29.
 */
import brand from  '../components/brand.vue'
import left  from '../components/Left.vue'
export default {
    routes:[{path:'/brand',component:brand} ,
             {path:'/left',component:left},
              { path:'*',redirect:'/left'},
    ]

}