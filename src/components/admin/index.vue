<template>
  <component :is="c">
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import AdminState from './state'
import V from '@/mixins/v'

@Component({})
export default class Admin extends Mixins(V) {
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
