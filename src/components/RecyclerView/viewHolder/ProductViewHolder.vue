<template>
  <el-card class="card-container" shadow="hover"> {{ data }} </el-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: String,
})
</script>

<style lang="scss" scoped>
$card-margin: 20px;

.card-container {
  width: calc(100% - 2 * $card-margin);
  margin: $card-margin;
}
</style>
