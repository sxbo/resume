<template>
  <div class="page-resume">
    <div class="page-resume-cont">
      <div class="resume-medium">
        <div class="cont-imgbox">
          <div class="image convenient">
            <div class="conv-float">
              <div class="conv conv-color">简约</div>
              <div class="conv-desc">始于简约</div>
            </div>
          </div>
        </div>
        <div class="cont-imgbox">
          <div class="image minimalism">
            <div class="conv-float">
              <div class="conv mini-color">夺目</div>
              <div class="mini-desc">陷于夺目</div>
            </div>
          </div>
        </div>
        <div class="cont-imgbox">
          <div class="image dazzle">
            <div class="conv-float">
              <div class="conv dazz-color">便捷</div>
              <div class="dazz-desc">忠于便捷</div>
            </div>
          </div>
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
  //始于颜值,敬于才华,合于性格,久于品行 始于颜值 陷于才华 忠于人品
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
  flex-direction: row;
  align-items: center;
  padding:0 5px;
}
.resume-medium{
  width: 100%;
  height: 70%;
  border: 1px solid #cec8c8;
  box-shadow: 0px 0px 5px #b1acac;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

}
.cont-imgbox {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center; 
}

.image {
  position: relative;
  margin-top: 2.8%;
  width: 50%;
  height: 50%;
  background: #fff;
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
