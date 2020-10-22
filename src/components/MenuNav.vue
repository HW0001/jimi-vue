<template>
  <nav>
      <router-link to="/labels">
      <icon name="icon-label" />
      <span>标签</span></router-link>
      <router-link to="/home">
      <icon name="icon-home" />
      <span>账本</span></router-link>
      <router-link to="/statistics">
      <icon name="icon-statistics" />
        <span>统计</span></router-link>
  </nav>
</template>

<script lang='ts'>
import Icon from "@/components/Icon.vue";
export default {
  name: "MenuNav",
  components: {Icon}
}
</script>

<style lang='scss' scoped>
nav{
  display: flex;
  box-shadow: 0  0 3px rgb(0,0,0,.3);
  >a{
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3px 0;
    .icon{
      width: 32px;
      height: 32px;
    }
    span{
      font-size: 12px;
    }
  }
}
</style>