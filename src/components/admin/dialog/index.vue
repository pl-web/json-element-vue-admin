<template>
  <el-dialog>

  </el-dialog>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import BaseC from '@/components/base/index.vue'
import DialogState from './state'

@Component({
})
export default class Dialog extends Mixins(BaseC) {
  get state(): DialogState {
    return this.$state as DialogState
  }
}
