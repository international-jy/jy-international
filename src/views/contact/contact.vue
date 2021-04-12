<template>
  <div>
    <!-- 联系我们 -->
    <div class="cc-box">
      <!-- 顶部导航栏 -->
      <div class="top">
        <div class="top-lt" @click="onClickGo">
          <img src="@/assets/img/jiantou.png" alt="" />
        </div>
        <div class="top-rt">
          <div class="user">
            <img src="@/assets/img/tx.png" alt="" />
          </div>
          <div class="nav-btn" @click="onClickNav">
            <img src="@/assets/img/nav-right.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 列表页 -->
      <ul class="contact-list">
        <li v-for="value in lineArr" :key="value.id">
          <div @click="gos(value.id)">{{ value.title }}</div>
        </li>
        <!-- <li>
          <router-link to="/contact/contactlx">联系我们</router-link>
        </li>
        <li>
          <router-link to="/contact/contactzp">招聘要求</router-link>
        </li> -->
      </ul>
    </div>
    <div class="pql-btm-fixed">
      <ul>
        <li>
          <router-link to="/news">
            <i>
              <img src="@/assets/img/btm-fiexd3.png" alt="" />
            </i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <a href="tel:120">
            <i>
              <img src="@/assets/img/btm-fiexd2.png" alt="" />
            </i>
            <p>电话</p>
          </a>
        </li>
        <li @click="onClickcode">
          <a href="javascript:;">
            <i>
              <img src="@/assets/img/btm-fiexd1.png" alt="" />
            </i>
            <p>微信资讯</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 微信二维码 -->
    <div class="or-code" :class="flag ? 'dn' : ''" @click="onClickOr">
      <div class="white">
        <img src="@/assets/img/code.png" alt="" />
        <p>长按识别二维码</p>
      </div>
    </div>
    <div class="mip-lightbox" :class="navFlag ? 'dn' : ''" @click="onClickTier">
      <div class="lightbox-r animate__animated animate__fadeInRight">
        <div class="moresetup">
          <ul>
            <li>
              <router-link to="/home">首页</router-link>
            </li>
            <li>
              <router-link to="/news">夜场新闻</router-link>
            </li>
            <li>
              <router-link to="/contact">联系我们</router-link>
            </li>
            <li>
              <router-link to="/show">模特展示</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../../assets/less/base.less";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
/* 联系我们 */
.dn {
  display: none;
}
.cc-box {
  // .setwh(@w,@h);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0 0 (100 / @vw) 0;
  background-color: rgb(245, 245, 245);
  .contact-list {
    margin-top: (120 / @vw);
    li {
      background-color: #fff;
      margin-bottom: (8 / @vw);
      padding: (28 / @vw);
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
  //   导航栏
  .top {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    height: (100 / @vw);
    background: #fafafa;
    border-bottom: 1px solid #ededed;
    z-index: 10;
    .top-lt {
      position: relative;
      .setwh(40,40);
      margin-left: (30 / @vw);
      img {
        position: absolute;
        height: 100%;
      }
    }
  }
  .top-rt {
    display: flex;
    align-items: center;
    .user {
      margin: (8 / @vw) (30 / @vw) 0 0;
      img {
        .setwh(45,45);
      }
    }
    .nav-btn {
      .setwh(60,60);
      margin-right: (30 / @vw);
      border-radius: 50%;
      border: 1px solid #1296db;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        .setwh(32,32);
      }
    }
  }

  .mip-lightbox {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 90;
    .lightbox-r {
      position: fixed;
      right: 0;
      top: 0;
      width: 60%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 99;
      box-shadow: -2px 0 5px #000;
      .moresetup {
        width: 100%;
        ul {
          width: 100%;
          li {
            position: relative;
            border-bottom: 2px solid #45494c;
            margin: (28 / @vw);
            &:last-child {
              border: none;
            }
            a {
              display: block;
              color: #fff;
              font-size: (31 / @vw);
              padding: (10 / @vw) 0 (10 / @vw) (46 / @vw);
              box-sizing: border-box;
              &::before {
                content: "";
                position: absolute;
                left: (-6 / @vw);
                top: 50%;
                background-color: #5b5d5e;
                height: 1px;
                width: 4px;
                margin-left: (26 / @vw);
                box-shadow: -1px 1px 0 #5b5d5e, -2px 2px 0 #5b5d5e,
                  -3px 3px 0 #5b5d5e, -4px 4px 0 #5b5d5e, -5px 5px 0 #5b5d5e,
                  -1px -1px 0 #5b5d5e, -2px -2px 0 #5b5d5e, -3px -3px 0 #5b5d5e,
                  -4px -4px 0 #5b5d5e, -5px -5px 0 #5b5d5e;
              }
            }
          }
        }
      }
    }
  }
}
// 底部公共样式
.pql-btm-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: (100 / @vw);
  background-color: rgba(0, 0, 0, 0.75);

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: (10 / @vw) 0;
      a {
        font-size: 12px;
        text-align: center;
        color: #fff;
        img {
          .setwh(40,40);
        }
      }
    }
  }
}

//微信二维码弹出层

.or-code {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 101;
  .white {
    position: absolute;
    top: 50%;
    left: 50%;
    // .setwh(400,455);
    padding: (37 / @vw);
    background-color: #fff;
    margin: (-230 / @vw) 0 0 (-200 / @vw);
    border-radius: (10 / @vw);
    img {
      .setwh(327,327);
      vertical-align: middle;
      margin-bottom: (30 / @vw);
    }
    p {
      text-align: center;
      font-size: (22 / @vw);
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      navFlag: true,
      flag: true,
      lineArr: {},
    };
  },
  created() {
    var that = this;
    this.$axios.get("/index.php/api/about_us/list").then((val) => {
      that.lineArr = val.data;
      // console.log(val.data);
    });
    // console.log(this.lineArr);
  },
  methods: {
    onClickNav: function () {
      this.navFlag = !this.navFlag;
    },
    go(step) {
      this.$router.go(step);
    },
    onClickTier: function () {
      this.navFlag = !this.navFlag;
    },
    onClickcode: function () {
      this.flag = !this.flag;
    },
    onClickOr: function () {
      this.flag = !this.flag;
    },
    gos: function (id) {
      this.$router.push({
        path: "contact/" + id,
      });
      // console.log('contact/'+id);
    },
    onClickGo: function () {
      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>
