<template>
  <div class="recyclerview">
    <div v-for="(item, index) in items" :key="index">
      <component :is="getItemComponent()" :data="item"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductViewHolder from './viewHolder/ProductViewHolder.vue'

const props = defineProps({
  items: Array<string>,
})

function getItemComponent() {
  return ProductViewHolder
}
</script>

<style>
.recyclerview {
  /* 样式根据需要自定义 */
  width: 100%;
}
</style>
