<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class V extends Vue {
  @Prop({ required: true }) mapping!: string
  @Prop({ required: false }) page!: string

  get state() {
    return this.$state
  }

  get $state() {
    return {}
  }

  public getChildrenMapping(mapping: string | number) {
    let m = this.mapping
    if (typeof m === 'number') {
      m = `${m}[${mapping}]`
    } else if (m[0] === '[') {
      m = `${m}${mapping}`
    } else if (mapping !== '') {
      m = `${m}.${mapping}`
    }
    return m
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
</script>