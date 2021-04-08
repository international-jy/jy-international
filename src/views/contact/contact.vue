<template>
  <div>
    <!-- 联系我们 -->
    <div class="cc-box">
      <!-- 列表页 -->
      <ul class="contact-list">
        <li>
          <router-link to="/contact/contactgy">关于我们</router-link>
        </li>
        <li>
          <router-link to="/contact/contactlx">联系我们</router-link>
        </li>
        <li>
          <router-link to="/contact/contactzp">招聘要求</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import "../../assets/less/base.less";
/* 联系我们 */
.cc-box {
  // .setwh(@w,@h);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: (100 / @vw) 0;
  background-color: rgb(245, 245, 245);
  .contact-list {
    li {
      background-color: #fff;
      margin-bottom: (8 / @vw);
      padding: (20 / @vw);
      box-sizing: border-box;
      a {
        display: block;
        width: 100%;
        height: 100%;
        font-family: "Arial";
        font-size: (26 / @vw);
      }
    }
  }
}
</style>
