<template>
  <div class="nav-warp">
    <div class="content">
      <slot/>
    </div>
    <menu-nav/>
  </div>
</template>

<script lang='ts'>
import MenuNav from "@/components/MenuNav.vue";
export default {
name: "Layout",
  components: {MenuNav}
}
</script>

<style lang='scss' scoped>
.nav-warp{
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content{
    flex-grow: 1;
    overflow:auto;
  }
}
</style>