import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);
const store=new Vuex.Store({
  state:{
    userInfo:{
      avatar:'',
      desc:''    ,
      email:''   ,
      nickname:'',
      username:'',
    }

  },
  mutations:{
      CHANGE_USERINFO(state,info){
        state.userInfo=info;
      }
  },
  actions:{

  },
  plugins:[createPersistedState({
    storage: {
     getItem: key => sessionStorage.getItem(key),
    // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.setItem: (key, value) =>
     setItem:(key,value)=>sessionStorage.setItem(key, value),
    removeItem:key=>sessionStorage.removeItem(key)
}
}
)]
})
export default store;

