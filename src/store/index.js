import  Vue from "vue"

import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        fromData:{
            username: "",     
            header:"" , 
            // token: "" 
            idCard:""         
        },
        
    },
    mutations:{  
        CHANGE_FORM(state, userinfo) {
            state.fromData = userinfo
        },
        // CHANGE_TOKEN(state,token){
        //     state.token = token
        // }
     
    },
    actions:{},
    plugins:[
        createPersistedState({
            storage:{
                getItem:key=>localStorage.getItem(key),
                setItem:(key,value)=>
                    localStorage.setItem(key, value),
                removeItem:key=>localStorage.removeItem(key)

            }
        })
    ]
})

export default store