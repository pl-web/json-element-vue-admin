<template>
  <el-backtop :target="`.${name}`"></el-backtop>
</template>

<script lang="ts">
import Vue from 'vue'
import PageModule from '@/store/modules/page'

export default class BackTop extends Vue {
  
  get name(): string {
    return PageModule.name
  }

}
</script>