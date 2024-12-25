<template>
  <el-card class="card-container" shadow="hover">
    <div class="card-body">
      <div class="card-content">
        <el-image
          class="product-image"
          :alt="title()"
          :title="title()"
          :lazy="true"
          :src="props.data?.image"
          fit="cover"
        />
        <div class="product-info">
          <h3 class="product-title">{{ title() }}</h3>
          <p v-for="about in props.data?.abouts">{{ getAboutItem(about) }}</p>
        </div>
        <div class="product-info-o">
          <h2 class="product-price">{{ props.data?.price1 }}</h2>
        </div>
      </div>
      <div class="operation">
        <el-button @click="text" type="primary"></el-button>
      </div>
      <div v-if="testV" class="extra">
        <component :is="" :data="props.data" />
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ProductInfo } from '@/entry/ProductInfo'
import { ProductAbout } from '@/entry/ProductAbout'
import useProductStore from '@/stores/modules/product'
import { isNullOrUndefined } from '@/utils/tools'
import { ref } from 'vue'

const productStore = useProductStore()

const props = defineProps({
  data: ProductInfo,
  index: Number,
})

const testV = ref(false)

function text() {
  testV.value = !testV.value
}

function getAboutItem(about: ProductAbout): string {
  if (isNullOrUndefined(about)) {
    return ''
  }
  if (productStore.isChinese) {
    return about.contentZh
  } else {
    return about.content
  }
}

function title(): string {
  if (isNullOrUndefined(props.data)) {
    return ''
  }
  if (productStore.isChinese) {
    return props.data.titleZh
  } else {
    return props.data.title
  }
}
</script>

<style lang="scss" scoped>
$card-margin: 20px;

.card-container {
  width: calc(100% - 2 * $card-margin);
  margin: $card-margin;
  border-radius: 10px;
}

.card-body {
  display: flex;
  flex-direction: column;
}

.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.product-info {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  margin-left: 20px;
  max-width: 60vw;
}

.product-image {
  width: 200px;
  height: 200px;
}

.product-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.product-price {
  font-weight: bold;
  color: rgb(28, 121, 105);
}

.product-info-o {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
.operation {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.extra {
  width: 100%;
  height: 100px;
}
</style>
