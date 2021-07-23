<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class V extends Vue {
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
</script>