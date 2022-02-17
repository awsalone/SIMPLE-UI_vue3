<template>
  <header class="el-header" :style="{ height }">
    <slot />
  </header>
</template>

<script setup lang='ts'>

interface Props {
  height?:string
}

withDefaults(defineProps<Props>(),{
  height: "60px"
})

</script>


<script lang="ts">
export default{
  name:'ElHeader'
}
</script>

<style scoped lang='scss'>
@import "../styles/mixin.scss";

@include b(header){
  padding: $--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>