<template>
  <layout>
    <div>
      <div class="labels">
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </div>
     <ul>
       <li>支出</li>
       <li>收入</li>
     </ul>
      <div>100</div>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  </layout>
</template>

<script lang='ts'>
import Layout from "@/components/Layout.vue";
export default {
  name: "Home",
  components: {Layout}
}
</script>

<style lang='scss' scoped>

</style>