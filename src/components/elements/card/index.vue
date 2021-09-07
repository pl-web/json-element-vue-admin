<template>
  <el-card>

  </el-card>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import BaseC from '@/components/base/index.vue'
import CardState from './state'

@Component({
})
export default class ButtonGroup extends Mixins(BaseC) {
  get state(): CardState {
    return this.$state as CardState
  }
}
