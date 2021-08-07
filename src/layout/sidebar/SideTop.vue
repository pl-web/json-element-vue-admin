<template>
  <div>
    <router-link :to="to">
      <el-avatar src="/assets/admin-logo.png"></el-avatar>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'SideTop'
})
export default class SideTop extends Vue {
  
  get to() {
    return {
      path: '/profile'
    }
  }

}
</script>
