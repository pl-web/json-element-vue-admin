<template>
  <el-button
    :size="state.size"
    :type="state.type"
    :plain="state.plain"
    :round="state.round"
    :circle="state.circle"
    :loading="state.loading"
    :disabled="state.disabled"
    :icon="state.icon"
    :autofocus="state.autofocus"
    :native-type="state.nativeType"
    @click.stop="clickHandler"
  >
    {{ state.label }}
  </el-button>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import ButtonState from './state'
import BaseC from '@/components/base/index.vue'

@Component({})
export default class Button extends Mixins(BaseC) {
  get state(): ButtonState {
    return this.$state as ButtonState
  }

  get action(): string | undefined {
    return this.state.action
  }

  private async handleClick() {
    // runAction
  }
}
</script>