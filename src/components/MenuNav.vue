<template>
<div>
  <router-link to="/home">
    <svg class="icon"><use xlink:href="#icon-label"></use></svg>
    账本</router-link>|
  <router-link to="/labels">标签</router-link>|
  <router-link to="/statistics">统计</router-link>
</div>
</template>

<script lang='ts'>
import label from '@/assets/icons/label.svg'

console.log(label);
export default {
  name: "Menunav"
}
</script>

<style lang='scss' scoped>
.icon{
  width: 1em;
  height: 1em;
}
</style>