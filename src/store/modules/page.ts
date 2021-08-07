import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface PageModuleStore {
  name?: string
}

@Module({dynamic: true, store, name: 'page'})
class Page extends VuexModule implements PageModuleStore {
  public name?: string = ''

  @Mutation
  public changeCurrentPageName(name?: string) {
    this.name = name
  }

}

const PageModule = getModule(Page)

export default PageModule
