<template>
  <div class="about">
    <recyclerView :items="getData()"></recyclerView>
  </div>
</template>

<script lang="ts" setup>
import RecyclerView from '../components/RecyclerView/index.vue'
import useProductStore from '@/stores/modules/product'
import { onMounted } from 'vue'

const productStore = useProductStore()

onMounted(() => {
  productStore.getProductListData()
})

function getData() {
  return ['asdadda', '啊实打实的']
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }
}
</style>
