<template>
  <el-card style="width: 90vw" shadow="hover"> {{ data }} </el-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: String,
})
</script>
