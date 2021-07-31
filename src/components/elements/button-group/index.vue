<template>
  <div>
    <template  v-for="(button, index) in state">
      <Button
        :key="index"
        :map="getChildMap(index)"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import BaseC from '@/components/base/index.vue'
import Button from '../button/index.vue'
import ButtonState from '../button/state'

@Component({
  components: {
    Button
  }
})
export default class ButtonGroup extends Mixins(BaseC) {
  get state(): ButtonState[] {
    return this.$state as ButtonState[]
  }
}