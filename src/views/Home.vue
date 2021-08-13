<template>
  <div class="admin-home">
    <side-bar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SideBar from '@/components/layout/sidebar/index.vue' 

@Component({
  name: 'Home',
  components: {
    SideBar
  }
})
export default class Home extends Vue {
  
}
</script>
