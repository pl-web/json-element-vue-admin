<template>
  <component :is="c">
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import AdminState from './state'
import BaseC from '@/components/base/index.vue'

@Component({})
export default class Admin extends Mixins(BaseC) {
  get state(): AdminState {
    return this.$state as AdminState
  }

  get c() {
    return {
      render: (h: Function) => {
        return h(this.state.type, {
          props: {
            mapping: this.getChildrenMapping('state')
          }
        })
      }
    }
  }
}
</script>
