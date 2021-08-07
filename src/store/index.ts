import Vue from 'vue'
import Vuex from 'vuex'
import { PageModuleStore } from './modules/page'

interface AdminStore {
  page: PageModuleStore
}

Vue.use(Vuex)

const store = new Vuex.Store<AdminStore>({
  // empty, register modules
})

export default store
