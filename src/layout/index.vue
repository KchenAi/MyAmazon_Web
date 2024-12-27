<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <logo class="sidebar-logo" />
      <sidebar class="sidebar-menu" />
      <div class="sidebar-footer">
        <el-icon class="fold-icon" @click="changeCollapse">
          <component :is="getCollapseButton()"></component>
        </el-icon>
      </div>
    </div>
    <div class="main-container">
      <div class="app-main-top"></div>
      <section class="app-main">
        <router-view v-slot="{ Component, route }">
          <transition name="fade-transform" mode="out-in">
            <keep-alive>
              <component v-if="!route.meta.link" :is="Component" :key="route.path" />
            </keep-alive>
          </transition>
        </router-view>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import Sidebar from '../components/Sidebar/index.vue'
import Logo from '../components/Logo/index.vue'
import { RouterView } from 'vue-router'
import { Fold, Expand } from '@element-plus/icons-vue'
import useUserSettingStore from '@/stores/modules/userSetting'

const userSettingStore = useUserSettingStore()

function getCollapseButton() {
  if (userSettingStore.isCollapse) {
    return Expand
  } else {
    return Fold
  }
}

function changeCollapse() {
  userSettingStore.toggleCollapse()
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/mixin.scss' as *;
@use '../assets/styles/variables.module.scss' as *;
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
}

.sidebar-container {
  height: 100%;
  border-right: 1px solid #dcdfe6 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-menu {
  flex-grow: 1;
}

.main-container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.app-main-top {
  height: 0px;
  width: 100%;
  flex-shrink: 0;
}
.app-main {
  flex-grow: 1;
  overflow-y: auto;
}
.sidebar-footer {
  height: 50px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
}
.sidebar-logo {
  margin-top: 15px;
}
.fold-icon {
  font-size: 24px;
}
</style>
