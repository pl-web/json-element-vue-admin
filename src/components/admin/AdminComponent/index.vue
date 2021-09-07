<template>
  <component :is="to"></component>
</template>

<script lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import BaseC from '../../base/index.vue';
import AdminComponentState from './AdminComponentState';

@Component({
  name: 'AdminComponent'
})
export default class AdminCompoent extends Mixins(BaseC) {

  get to() {
    return {
      render: (h) => {
        return h(this.state.type, {
          props: {
            map: this.getChildMap('state') 
          }
        })
      }
    }
  }

}
</script>