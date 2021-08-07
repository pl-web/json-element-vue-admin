<template>
  <div class="admin">
    <side-bar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SideBar from './sidebar/index.vue' 

@Component({
  name: 'Layout',
  components: {
    SideBar
  }
})
export default class Layout extends Vue {
  
  

}
</script>
