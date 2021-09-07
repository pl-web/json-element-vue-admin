<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AdminComponentState from '../admin/AdminComponent/AdminComponentState';

@Component({
})
export default class BaseC extends Vue {
  @Prop({ required: true }) private map!: string
  @Prop({ required: false }) private page!: string

  get state(): AdminComponentState {
    return this.$state
  }

  get $state(): AdminComponentState {
    return {
      type: '',
      state: ''
    }
  }

  public getChildMap(map: string | number) {
    let m = this.map
    if (typeof m === 'number') {
      m = `${m}[${map}]`
    } else if (m[0] === '[') {
      m = `${m}${map}`
    } else if (map !== '') {
      m = `${m}.${map}`
    }
    return m
  }

  public getAnyStateByMap(map: string) {
    // ...
  }

  public getParentStateByMap(map: string) {
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
