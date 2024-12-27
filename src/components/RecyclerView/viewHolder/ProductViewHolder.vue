<template>
  <el-card class="card-container" shadow="hover">
    <div class="card-body">
      <div class="card-content">
        <el-image
          class="product-image"
          :alt="title"
          :title="title"
          :lazy="true"
          :src="data?.image"
          fit="cover"
        />
        <div class="product-info">
          <h3 class="product-title">{{ title }}</h3>
          <p v-for="(about, index) in data?.abouts" :key="index">{{ getAboutItem(about) }}</p>
        </div>
        <div class="product-info-o">
          <h2 class="product-price">{{ data?.price1 }}</h2>
        </div>
      </div>
      <div class="operation">
        <el-button @click="toggleExtra(1)" type="primary">Button 1</el-button>
        <el-button @click="toggleExtra(2)" type="primary">Button 2</el-button>
        <el-button @click="toggleExtra(3)" type="primary">Button 3</el-button>
      </div>
      <transition name="slide">
        <div v-if="activeExtra" class="extra">
          <component :is="extraComponent" :data="data" ref="extraContent" />
          <el-icon class="close-icon" @click="closeExtra">
            <Close />
          </el-icon>
        </div>
      </transition>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Close } from '@element-plus/icons-vue'
import ExtraContent1 from './extra/ExtraContent1.vue'
import ExtraContent2 from './extra/ExtraContent2.vue'
import ExtraContent3 from './extra/ExtraContent3.vue'
import useProductStore from '@/stores/modules/product'
import { isNullOrUndefined } from '@/utils/tools'
import { ProductInfo } from '@/entry/ProductInfo'
import { ProductAbout } from '@/entry/ProductAbout'

const props = defineProps<{
  data?: ProductInfo
  index?: number
}>()

const productStore = useProductStore()
const activeExtra = ref(0)
const extraContent = ref<InstanceType<typeof ExtraContent1>>()

const extraComponents: Record<number, typeof ExtraContent1> = {
  1: ExtraContent1,
  2: ExtraContent2,
  3: ExtraContent3,
}

const extraComponent = computed(() => extraComponents[activeExtra.value])

const title = computed(() => {
  if (isNullOrUndefined(props.data)) return ''
  return productStore.isChinese ? props.data.titleZh || '' : props.data.title || ''
})

const toggleExtra = (index: number) => {
  activeExtra.value = activeExtra.value === index ? 0 : index
}

const closeExtra = () => {
  activeExtra.value = 0
}

const getAboutItem = (about?: ProductAbout): string => {
  if (isNullOrUndefined(about)) return ''
  return productStore.isChinese ? about.contentZh || '' : about.content || ''
}

defineExpose({
  title,
  toggleExtra,
  closeExtra,
  getAboutItem,
})
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
  width: 60vw;
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
  gap: 8px;
}

.extra {
  width: 100%;
  position: relative;
  background: #f5f5f5;
  border-radius: 4px;
}

.close-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  font-size: 16px;
  color: #666;
}

close-icon:hover {
  color: #333;
}

.extra {
  overflow: hidden;
  transition: max-height 0.5s ease-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 500px; /* 设置一个足够大的值 */
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
}
</style>
