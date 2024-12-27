<template>
  <div class="sidebar-logo-container">
    <transition :css="false" @before-enter="beforeEnter" @enter="enter">
      <div v-if="userSettingStore.isCollapse">
        <img :src="logo" class="logo-svg" />
      </div>
      <div v-else class="logo-container">
        <img :src="logo" class="logo-svg" />
        <div class="logo-text">我的世界</div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import logo from '@/assets/imgs/logo.png'
import useUserSettingStore from '@/stores/modules/userSetting'

const userSettingStore = useUserSettingStore()

function beforeEnter(el: HTMLElement) {
  el.style.display = 'none'
}

function enter(el: HTMLElement, done: () => void) {
  setTimeout(() => {
    el.style.display = 'flex'
    el.style.transition = 'opacity 0.5s'
    done()
  }, 200)
}
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  height: 50px;
  text-align: center;
  overflow: hidden;
}

.logo-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.logo-text {
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  align-self: center;
}

.logo-svg {
  width: 48px;
  height: 48px;
}
</style>
