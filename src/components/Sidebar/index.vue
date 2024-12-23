<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    router="true"
    :collapse="isCollapse"
  >
    <el-menu-item index="1" route="/">
      <el-icon><list /></el-icon>
      <template #title> 产品列表 </template>
    </el-menu-item>
    <el-menu-item index="2" route="/about">
      <el-icon><search /></el-icon>
      <template #title> 产品查询 </template>
    </el-menu-item>
    <el-menu-item index="3" route="/tools">
      <el-icon><hot-water /></el-icon>
      <template #title>工具栏</template>
    </el-menu-item>
    <el-menu-item index="4" route="/setting">
      <el-icon><setting /></el-icon>
      <template #title>设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { HotWater, Search, Setting, List } from '@element-plus/icons-vue'

const route = useRoute()

const isCollapse = ref(false)

const activeIndex = computed(() => {
  if (route.path === '/') {
    return '1'
  } else if (route.path === '/about') {
    return '2'
  } else if (route.path === '/tools') {
    return '3'
  } else if (route.path === '/setting') {
    return '4'
  } else {
    return '1'
  }
})
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 400px;
}
</style>
