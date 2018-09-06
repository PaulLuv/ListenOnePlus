<template>
<div class='container'>
    <text class='emptyText'>今天的计划是什么呢？</text>
    <button></button>
    <text class='emptyText'>赶紧列出你的任务清单吧!</text>
    <button bindtap='createTodo' class='createButton'>创建任务</button>
</div>
</template>

<script lang="ts" src="./index.ts">
</script>

<style lang="less">
@import "~@/styles.less";

.container {
  margin: auto;
}

.emptyText {
  margin-top: 20px;
  color: #333;
}

.date {
  width: 94%;
  text-align: left;
  margin-left: 10px;
  padding-left: 10px;
  color: #222;
  size: 20px;
}

.todoItem {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 95%;
  margin-top: 10rpx;
  border-color: #333;
  border-radius: 4px;
  border-width: 1px;
}

.operationItem {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 95%;
  margin-top: 1px;
  background: #eee;
  border-color: #333;
  border-radius: 4px;
  border-width: 1px;
}

.todoTitle {
  width: 80%;
  margin-left: 10px;
  size: 16px;
  font-style: blod;
}

.itemDate {
  width: 90px;
  margin-left: 10px;
  margin-right: 0px;
}

.todoContent {
  width: 100%;
  color: #333;
  height: 100%;
  margin-top: 5px;
  margin-left: 20px;
  margin-bottom: 5px;
  text-align: left;
}

.level1 {
  width: 5%;
  color: #f00;
  height: 100%;
  background: #f00;
  margin-left: 0px;
}

.level2 {
  width: 5%;
  height: 100%;
  background: #a65;
  color: #a65;
  margin-left: 0px;
}

.level3 {
  width: 5%;
  height: 100%;
  background: #aa5;
  color: #aa5;
  margin-left: 0px;
}

.level4 {
  margin-left: 0px;
  width: 5%;
  height: 100%;
  background: #5a6;
  color: #5a6;
}
.deleteButton {
  margin-left: 10px;
  margin: 5px;
  color: red;
  align-items: center;
}
.editButton {
  margin-left: 20px;
  margin: 5px;
  color: green;
  align-items: center;
}
.handleButton {
  margin-left: 20px;
  margin: 5px;
  color: #ae5;
  align-items: center;
}
.finishButton {
  margin-left: 20px;
  margin: 5px;
  color: yellowgreen;
  align-items: center;
}
</style>
