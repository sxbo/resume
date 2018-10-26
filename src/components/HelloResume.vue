<template>
  <div class="page-resume">
    <div class="page-resume-cont">
        <div class="cont-imgbox">
          <div class="image convenient">
            <div class="conv-float">
              <div class="conv conv-color">简约</div>
              <div class="conv-desc">一种简单的美</div>
            </div>
          </div>
          <div class="image minimalism">
            <div class="conv-float">
              <div class="conv mini-color">便捷</div>
              <div class="mini-desc">即拿即用</div>
            </div>
          </div>
          <div class="image dazzle">
            <div class="conv-float">
              <div class="conv dazz-color">夺目</div>
              <div class="dazz-desc">第一眼发现你</div>
            </div>
          </div>
        </div>
        <div class="cont-stepbox">
          <div class="step">
            <div>
              <span>开始</span>
            </div>
              麦子收罢新粮归仓以后，原上各个村庄的“忙罢会”便接踵而来，每个村子都有自己过会的日子。太阳冒红时，白鹿原的官道小路上，庄稼汉男女穿着浆捶得平展硬峥的家织布白衫青裤，臂弯里挎着装有用新麦子面蒸成的各色花馍的竹提盒笼儿，乐颠颠地去走亲访友，吃了喝了谝了，于日落时散散悠悠回家去
          </div>
          <!-- <div class="step-line"></div> -->
          <div class="step">
            <div>
              <span>开始</span>
            </div>
            麦子收罢新粮归仓以后，原上各个村庄的“忙罢会”便接踵而来，每个村子都有自己过会的日子。太阳冒红时，白鹿原的官道小路上，庄稼汉男女穿着浆捶得平展硬峥的家织布白衫青裤，臂弯里挎着装有用新麦子面蒸成的各色花馍的竹提盒笼儿，乐颠颠地去走亲访友，吃了喝了谝了，于日落时散散悠悠回家去
          </div>
          <!-- <div class="step-line"></div> -->
          <div class="step">
            <div>
              <span>开始</span>
            </div>
              麦子收罢新粮归仓以后，原上各个村庄的“忙罢会”便接踵而来，每个村子都有自己过会的日子。太阳冒红时，白鹿原的官道小路上，庄稼汉男女穿着浆捶得平展硬峥的家织布白衫青裤，臂弯里挎着装有用新麦子面蒸成的各色花馍的竹提盒笼儿，乐颠颠地去走亲访友，吃了喝了谝了，于日落时散散悠悠回家去
          </div>
          <!-- <div class="step-line"></div> -->
          <div class="step">
            <div>
              <span>开始</span>
            </div>
              麦子收罢新粮归仓以后，原上各个村庄的“忙罢会”便接踵而来，每个村子都有自己过会的日子。太阳冒红时，白鹿原的官道小路上，庄稼汉男女穿着浆捶得平展硬峥的家织布白衫青裤，臂弯里挎着装有用新麦子面蒸成的各色花馍的竹提盒笼儿，乐颠颠地去走亲访友，吃了喝了谝了，于日落时散散悠悠回家去
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloResume",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-resume {
  flex-grow: 1;
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  min-height:  37.5rem;
  min-width: 37.5rem;
}

.page-resume-cont {
  flex-grow: 1;
  background: #fff;
  margin: 2px 0px;
  display: flex;
}
.cont-stepbox {
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
.cont-imgbox {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  padding: 10px 0;
  overflow: hidden;  
  
}

.step {
  width: 50%;
  height: 20%;
  line-height: 1.8rem;
  overflow: hidden;  
  letter-spacing:.2rem;
  font-size: .8rem;
}
.step span {
  display: inline-block;
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
}

.step-text {
  margin: 5px 0;
  line-height: 1.8rem;
  min-height: 48px;
  height: 150px;
  overflow: hidden;  
  text-overflow: ellipsis;
  letter-spacing:.2rem;
  font-size: .8rem;
}
.image {
  position: relative;
  margin-top: 2.8%;
  width: 21.03%;
  min-width: 100px;
  height: 30%;
  min-height: 150px;
  background: #fff;
  margin-right: 20%;
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.convenient {
  background-image: url("../../static/img/newjl22.jpg");
}
.minimalism {
  background-image: url("../../static/img/newjl21.jpg");
}
.dazzle {
  background-image: url("../../static/img/newjl24.jpg");
}
.conv-float{
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:#fff;
  opacity: .5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.conv-float:hover{
  opacity: .8;
}
.conv{
  width: 70px;
  height: 70px;
  text-align: center;
  line-height: 70px;
  border-radius: 50%;
  margin-bottom: 8px;
}
.conv:hover{
  width: 80px;
  height: 80px;
  line-height: 80px;
  /* transition: all .5s ease-out; */
}
.conv-color{
  background: rgb(221, 135, 243);
  color: #fff;
}
.mini-color{
  background: rgb(105, 230, 192);
  color: #fff;
}
.dazz-color{
  background: rgb(43, 137, 243);
  color: #fff;
}
.conv-desc{
  color:rgb(221, 135, 243)
}

.mini-desc{
  color: rgb(105, 230, 192);
}
.dazz-desc{
  color: rgb(43, 137, 243);
}

</style>
