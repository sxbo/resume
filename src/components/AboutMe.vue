<template>
  <div class="page-resume">
    <div class="left-nav">
<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    </div>
    <div class="right-cont">
      
    </div>
  </div>
</template>

<script>
import {Menu,MenuItem,Submenu,MenuItemGroup} from 'element-ui';
import Vue from 'vue';
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
export default {

  name: "AboutMe",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
};
</script>

<style scoped>
.page-resume {
  flex-grow: 1;
  margin-top: 2px;
  min-height: 37.5rem;
  min-width: 37.5rem;
  display: flex;
}
.left-nav{
  width: 12.5rem;
  background: #fff;
  text-align: center;
}
.right-cont{
  flex-grow: 1;
  background: #fff;
  margin-left: 2px;
  
}
</style>


