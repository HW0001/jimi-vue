<template>
  <layout>
    <div>
      <div class="tags">
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </div>
      <div class="notes">
        <label>
          <span>备注:</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </div>
     <ul class="type">
       <li class="selected">支出</li>
       <li>收入</li>
     </ul>
      <div class="content">100</div>
      <div class="inoutMenu">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button class="ok">ok</button>
        <button class="zero">0</button>
        <button>.</button>
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
@import "~@/assets/style/helper.scss";
.tags{
  font-size: 14px;
  padding: 20px;
  ul{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
    li{
      $h:22px;
      padding: 0 16px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      background-color: rgb(217, 217, 217);
      margin-right: 24px;
    }
  }
  button{
    background-color: transparent;
    border: none;
    color: #999999;
    line-height: 22px;
    border-bottom: 1px solid;
    padding:0 3px;
  }
}
.notes{
  padding: 0 16px ;
  label{
    font-size: 14px;
    span{
      font-size: inherit;
      font-family: $font-hei;
    }
    input{
      font-size: inherit;
      border: none;
      padding: 16px 8px;
    }
  }
}
.type{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 16px;
  li{
    width: 50%;
    height: 64px;
    line-height: 64px;
    background-color: rgb(196, 196, 196);
    color: #000000;
    font-size: 24px;
    font-family: $font-hei;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      top: 60px;
      left: 0;
      height: 4px;
      width: 100%;
      background-color: #000;
    }
  }
}
.content{
  height: 72px;
  line-height: 72px;
  font-size: 36px;
  text-align: right;
  font-family: Consolas , monospace;
  box-shadow: inset 0 -4px 4px -4px rgba(0,0,0,.6);
}
.inoutMenu{
@extend %clearFix;
  button{
    float: left;
    $h:64px;
    width: 25%;
    font-size: 18px;
    height: $h;
    line-height: $h;
    border: none;
    &.ok{
      height: $h * 2;
      float: right;
    }
    &.zero{
      width: 25% * 2;
    }
  }
  $bg: #f2f2f2;
  :nth-child(1){
    background-color: $bg;
  }
  :nth-child(2),:nth-child(5){
    background-color: darken($bg,4%);
  }
  :nth-child(3),:nth-child(6),:nth-child(9){
    background-color: darken($bg,4%*2);
  }
  :nth-child(4),:nth-child(7),:nth-child(10){
     background-color: darken($bg,4%*3);
   }
  :nth-child(8),:nth-child(11),:nth-child(13){
    background-color: darken($bg,4%*4);
  }
  :nth-child(14){
    background-color: darken($bg,4%*5);
  }
  :nth-child(12){
    background-color: darken($bg,4%*6);
  }
}
</style>