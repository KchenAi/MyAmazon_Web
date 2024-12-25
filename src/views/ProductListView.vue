<template>
  <div class="container">
    <div class="tools">
      <div class="tools_select"></div>
      <div class="tools_button">
        <el-button @click="changeLang">中/英</el-button>
      </div>
    </div>
    <recyclerView :items="productStore.productsInfos"></recyclerView>
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

function changeLang() {
  productStore.changeLanguage()
}
</script>

<style>
/* @media (min-width: 1024px) {

} */

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.tools {
  width: 100%;
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
}

.tools_select {
  width: 230px;
}

.tools_button {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
