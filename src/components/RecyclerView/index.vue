<template>
  <div class="recyclerview">
    <div v-for="(item, index) in items" :key="index">
      <component :is="getItemComponent()" :data="item" :index="index"></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductViewHolder from './viewHolder/ProductViewHolder.vue'
import { ProductInfo } from '@/entry/ProductInfo'
const props = defineProps({
  items: Array<ProductInfo>,
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
