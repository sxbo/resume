<template>
  <div id="app">
    <div class="hello-resume">
    
      <div class="menu">
        <div class="logo">
          <span class="logo-icon"></span>
          <span>C · M · D</span>
        </div>
        <div class="search">
          <input placeholder="搜搜看" />
        </div>
        <div class="link">
          <el-button type="primary" @click="toLookClick"  size="small" >去看看</el-button>
          <span class="cut"></span>
          <el-button size="small" @click="aboutSiteClick" class="link-site" >关于本站</el-button>      
          <span class="cut"></span>
          <el-button size="small" @click="aboutMeClick" class="link-me" >关于我</el-button>    
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import {Button} from 'element-ui'
import Vue from 'vue';
Vue.use(Button);

export default {
  name: "App",
  methods:{
    jump(path){
      this.$router.push({path:path});
    },
    toLookClick(){

    },
    aboutSiteClick(){
      this.jump("/aboutSite");
    },
    aboutMeClick(){
      this.jump("/aboutMe");
    }
  }
  
};
</script>


<style>
#app {
  width: 100%;
  height: 100%;
  background-color: rgb(241, 235, 235);
}
html,
body {
  width: 100%;
  height: 100%;
}

.hello-resume {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px 1px #929292;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.menu {
  width:100%;
  height: 70px;
  min-height: 60px;
  display: flex;
  flex-direction: row;
  min-width: 600/16rem;
  align-items: center;
  overflow: hidden;
}
.logo {
  height: 100%;
  width: 12.5rem;
  background: #fff;
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
.logo-icon {
  display: inline-block;
  /* background:#929292; */
  width: 50px;
  height: 50px;
  margin-right: 5px;
  background-image: url("../static/img/logo.png");
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.search {
  flex-grow: 2;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #fff;
  min-width: 80px;
}

.search input {
  outline: none;
  width: 30%;
  border: 1px solid initial;
  border-radius: 25px;
  outline-offset: 0;
  border-image: none;
  border-width: 1px;
  border-color: #dcdfe6;
  height: 20px;
  border-style: solid;
  transition: all .5s ease-in-out;
}

.search input:focus {
  outline: none;
  width: 50%;
  border: 1px solid initial;
  border-radius: 25px;
  outline-offset: 0;
  border-image: none;
  border-width: 1px;
  border-color: #dcdfe6;
  transition: all .5s ease-in-out;
}

.link {
  background: #fff;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.cut{
  height: 20px;
  border-left: 1px solid #d3cbcb;
}

</style>
