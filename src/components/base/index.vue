<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
})
export default class BaseC extends Vue {
  @Prop({ required: true }) private mapping!: string
  @Prop({ required: false }) private page!: string

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
    // ...
  }

  public getParentStateByMapping(mapping: string) {
    // ...
  }

  public runAction(action: string) {
    // ...
  }

  private created() {
    // ...
  }

  private beforeMount() {
    // ...
  }

  private mounted() {
    // ...
  }

  private beforeUpdate() {
    // ...
  }

  private updated() {
    // ...
  }

  private beforeDestroy() {
    // ...
  }

  private destroyed() {
    // ...
  }
}
</script>
