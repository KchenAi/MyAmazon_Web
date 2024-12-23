<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
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
</script>

<style lang="scss" scoped>
@use '../assets/styles/mixin.scss' as *;
@use '../assets/styles/variables.module.scss' as *;
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
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
</style>
