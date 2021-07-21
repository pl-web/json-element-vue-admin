import { Component, Prop, Vue } from 'vue-property-decorator';

interface VInterface {
  beforeCreate?: string
  created?: string
  beforeMount?: string
  mounted?: string
  beforeUpdate?: string
  updated?: string
  beforeDestroy?: string
  destroyed?: string
}

@Component({
  name: 'V'
})
export default class extends Vue {
  @Prop({ required: true }) mapping!: string
  @Prop({ required: false }) parent!: string
  @Prop({ required: false }) page!: string

  get state() {
    return {}
  }

  public getAnyStateByMapping(mapping: string) {

  }

  public getParentStateByMapping(mapping: string) {

  }

  private created() {
    
  }

  private beforeMount() {
    
  }

  private mounted() {

  }

  private beforeUpdate() {

  }

  private updated() {
    
  }

  private beforeDestroy() {
    
  }

  private destroyed() {
    
  }

  public run(action: string) {
    
  }
}
