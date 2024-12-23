<template>
  <div class="logo-container">
    <svg :src="logo" />
  </div>
</template>
<script lang="ts" setup>
import logo from '../../assets/logo.svg'
</script>

<style lang="scss" scoped>
.logo-container {
  width: 100%;
}
</style>
