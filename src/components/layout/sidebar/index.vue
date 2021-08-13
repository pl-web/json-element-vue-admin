<template>
  <div>
    <side-top />
    <el-menu :collapse="true">
      <side-item v-for="(route, index) in routes" :key="index" :item="route"></side-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SideTop from './SideTop.vue'
import SideItem from './SideItem.vue'
import { mainRoutes } from '@/router/index'

@Component({
  name: 'SideBar',
  components: {
    SideTop,
    SideItem,
  }
})
export default class SideBar extends Vue {
  
  get routes() {
    return mainRoutes
  }

}
</script>
