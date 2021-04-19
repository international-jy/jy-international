<template>
  <div class="thn box">
    <!-- 顶部 开始 -->
    <div class="top">
      <div class="top-t">
        <div @click="go"><img src="@/assets/img/fh.png" class="fh" /></div>
        <div class="top-btn" @click="pop">
          <div class="inputm">
            <img src="@/assets/img/seek.png" />
            <input type="text" placeholder="请输入您要搜索的内容" />
          </div>
        </div>
        <div class="top-icon">
          <a href="javaScript:;" class="top_share1" @click="share">
            <img src="@/assets/img/share.png" />
          </a>
          <a href="javaScript:;" class="top_user1">
            <img src="@/assets/img/pro_user.png" />
          </a>
          <a href="/home" class="top_home1" @click="go">
            <img src="@/assets/img/pro_home.png" />
          </a>
        </div>
        <div class="nav-btn" @click="onClickNav">
          <img src="@/assets/img/nav-right.png" alt="" />
        </div>
      </div>
      <!-- 搜索弹窗 开始 -->
      <div class="pop-up" :class="popClass ? 'dn' : ''">
        <div class="pop" @click="pop"></div>
        <div class="bgff">
          <div class="pop-up-l">
            <div class="pop-up-t animate__animated animate__backInLeft">
              <img src="@/assets/img/seek.png" />
              <input
                name="searchStr"
                type="text"
                placeholder="请输入您要搜索的内容"
                @keydown.enter="getName"
                v-model="seachName"
              />
            </div>
            <p class="hunt" @click="onClickSetName">搜索</p>
          </div>
        </div>
      </div>
      <!-- 搜索弹窗 结束 -->

      <!-- 分享弹窗 开始 -->
      <div class="thickness" :class="shareClass ? 'dn' : ''" @click="share">
        <div class="thickness-logo">
          <a href="https://www.qq.com/">
            <span class="space"></span>
          </a>
          <a href="https://weibo.com/">
            <span class="microblog"></span>
          </a>
          <a href="https://www.douban.com/">
            <span class="bean"></span>
          </a>
        </div>
      </div>
      <!-- 分享弹窗 开始 -->
    </div>
    <!-- 顶部 结束 -->

    <!-- 底部 开始 -->
    <div class="pql-btm-fixed">
      <ul>
        <li>
          <router-link to="/home">
            <i>
              <img src="@/assets/img/btm-fiexd3.png" alt="" />
            </i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <a :href="'tel:' + footerTel">
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
    <!-- 底部 结束 -->

    <!-- 微信二维码 -->
    <div class="or-code" :class="flag ? 'dn' : ''" @click="onClickOr">
      <div class="white">
        <img :src="footerImage" alt="" />
        <p>长按识别二维码</p>
      </div>
    </div>

    <!-- 侧边栏 开始 -->
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
              <router-link to="/show">模特展示</router-link>
            </li>
            <li>
              <router-link to="/environment">环境展示</router-link>
            </li>
            <li>
              <router-link to="/contact/2">联系我们</router-link>
            </li>
            <li>
              <router-link to="/contact/1">关于我们</router-link>
            </li>
            <li>
              <router-link to="/contact/3">招聘要求</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 侧边栏 结束 -->

    <div ref="backTopBox" class="backbox">
      <!-- 高端模特 开始 -->
      <div class="high-end">
        <a href="javaScript:;" @click="high" :class="blueClass ? '' : 'hight'"
          >高端模特</a
        >
      </div>
      <!-- 高端模特 结束 -->

      <!-- 内容 开始 -->
      <div
        class="details infinite-list"
        v-infinite-scroll="load"
        style="overflow: auto"
      >
        <ul class="details-top">
          <li
            v-for="(value, index) in modelList"
            :key="index"
            @click="onClickModel(value.id)"
            class="infinite-list-item"
          >
            <div class="details-con">
              <a href="javaScript:;" style="margin-bottom: 5px">{{
                value.title
              }}</a>
              <span>￥{{ value.price }}元</span>
            </div>
          </li>
        </ul>
        <div
          class="details-btn"
          :class="classFlag5 ? 'dn' : ''"
          @click="onClickBackTop"
        >
          <a href="javaScript:;">
            <img src="@/assets/img/return_top1.png" class="return_top1" />
          </a>
        </div>
      </div>
      <!-- 内容 结束 -->
    </div>
  </div>
</template>

<style lang="less" scope>
@import "../../assets/less/base.less";
// @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
body {
  height: 100%;
}
.box {
  width: 100%;
  // overflow: hidden;
  margin: auto;
  top: 0;
  left: 0;
  height: 100%;
  // 顶部
  .top {
    position: fixed;
    width: 100%;
    overflow: hidden;
    margin: auto;
    background-color: #fff;
    top: 0;
    left: 0;
    padding: (10 / @vw) 0;
    z-index: 10;
    .top-t {
      width: 100%;
      height: (60 / @vw);
      display: flex;
      align-items: center;
      // a {
      //   font-size: (50 / @vw);
      //   padding-left: (5 / @vw);
      // }
      .fh {
        .setwh(40,40);
        padding: (10 / @vw) 0 0 (5 / @vw);
      }
      .top-btn {
        height: 100%;
        margin: (14 / @vw) (10 / @vw) 0;
        background-color: #f2f2f2;
        border-radius: (100 / @vw);
        position: relative;
        flex: auto;
        .inputm {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: (10 / @vw);
          height: 100%;
          img {
            width: (40 / @vw);
            height: (40 / @vw);
            padding-right: (30 / @vw);
            padding-left: (10 / @vw);
          }
          input {
            border: none !important;
            outline: none;
          }
        }
      }
      .top-icon {
        display: flex;
        flex: none;
        margin-right: (80 / @vw);
        a {
          background-size: (22 / @vw);
          width: (22 / @vw);
          height: (22 / @vw);
          display: block;
          margin-right: (12 / @vw);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .top_share1 {
          width: (44 / @vw);
          height: (44 / @vw);
        }
        .top_user1 {
          width: (44 / @vw);
          height: (44 / @vw);
        }
        .top_home1 {
          width: (44 / @vw);
          height: (44 / @vw);
        }
      }
      .nav-btn {
        position: fixed;
        top: (15 / @vw);
        right: (10 / @vw);
        .setwh(60,60);
        border-radius: 50%;
        border: 1px solid #1296db;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        img {
          .setwh(32,32);
        }
      }
    }
    .pop-up {
      position: absolute;
      top: (5 / @vw);
      left: 0;
      width: 100%;
      height: (100 / @vw);
      z-index: 99;
      .pop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
      }
      .bgff {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: (80 / @vw);
        background-color: #fff;
        z-index: 100;
        .pop-up-l {
          width: 90%;
          height: (80 / @vw);
          padding: (9 / @vw) (10 / @vw);
          display: flex;
          box-sizing: border-box;
          .pop-up-t {
            height: 100%;
            flex: 1;
            border-radius: (30 / @vw);
            background: #f2f2f2;
            display: flex;
            align-items: center;
            img {
              width: (40 / @vw);
              height: (40 / @vw);
              padding: 0 (30 / @vw);
            }
            input {
              border: none !important;
              outline: none;
            }
          }
          .hunt {
            line-height: (60 / @vw);
            margin-left: (40 / @vw);
            font-size: (30 / @vw);
            color: #999;
          }
        }
      }
    }
    .thickness {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      .thickness-logo {
        width: (400 / @vw);
        background-color: rgba(0, 0, 0, 0.8);
        padding: (50 / @vw) 0;
        border-radius: (20 / @vw);
        position: fixed;
        left: 40%;
        top: 20%;
        margin: 0 0 0 (-116 / @vw);
        text-align: center;
        span {
          width: (75 / @vw);
          height: (75 / @vw);
          display: inline-block;
          background-size: (75 / @vw) (444 / @vw);
          margin: (10 / @vw);
        }
        .space {
          background-image: url(../../assets/img/share_but.png);
          background-position: 0 (-73 / @vw);
        }
        .microblog {
          background-image: url(../../assets/img/share_but.png);
          background-position: 0 0;
        }
        .bean {
          background-image: url(../../assets/img/share_but.png);
          background-position: 0 (-222 / @vw);
        }
      }
    }
  }

  // .backbox {
  //   height: 110%;
  // }

  //底部
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

  // 侧边栏
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

  // 高端模特
  .high-end {
    padding-top: (100 / @vw);
    height: (80 / @vw);
    background-color: #fff;
    margin-bottom: (10 / @vw);
    .hight {
      color: #1e91ff;
    }
    a {
      display: block;
      width: 100%;
      line-height: (80 / @vw) !important;
      padding-top: 0 !important;
      color: #525252;
      //  padding-left: (90 / @vw);
      font-size: (13 / @vw);
      text-align: center;
      opacity: 1 !important;
    }
  }

  // 内容
  .details {
    width: 100%;
    .details-top {
      background-color: #fff;
      width: 100%;
      // overflow: hidden;
      margin: auto;
      li {
        // overflow: hidden;
        border-bottom: (4 / @vw) solid #eee;
        list-style: none;
        margin-left: (10 / @vw);
        padding-right: (10 / @vw);
        .details-con {
          // overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: (10 / @vw);
          a {
            height: (80 / @vw);
            // overflow: hidden;
            font-size: (18 / @vw);
            line-height: (80 / @vw);
            flex: none;
          }
          span {
            color: red;
            font-size: (30 / @vw);
            font-weight: 600;
            padding: (15 / @vw) 0;
          }
        }
      }
    }
    .details-btn {
      width: 100%;
      a {
        position: fixed;
        right: 3%;
        bottom: 16%;
        .return_top1 {
          width: (80 / @vw);
          height: (80 / @vw);
        }
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      modelList: [],
      blueClass: true,
      shareClass: true,
      popClass: true,
      navFlag: true,
      classFlag5: true,
      dataId: null,
      flag: true,
      seachName: "",
      seachList: [],
      title: "",
      num: 1,
      footerTel: "",
      footerImage: "",
    };
  },
  created() {
    let that = this;
    this.$axios
      .get(
        "/index.php/api/models/list?pageNumber=" +
          that.num +
          "&pageSize=10&typeid=1,2"
      )
      .then((val) => {
        that.modelList = val.data;
      });

    this.$axios.get("index.php/api/footer/get").then((val) => {
      this.footerTel = val.data.phone;
      this.footerImage = this.$store.state.domainName + val.data.image;
    });
  },
  methods: {
    onClickSetName: function () {
      this.getName();
    },
    getName: function () {
      // console.log(1111);
      // var title = '';
      if (this.seachName) {
        if (!this.title) {
          this.modelList.forEach((val) => {
            // console.log();
            if (val.title.indexOf(this.seachName) != -1) {
              this.title = this.seachName;
            }
          });
          // console.log(111);
        }
        if (this.title) {
          //  console.log(111);
          this.$router.push({
            path: "/show/search",
            query: {
              titleName: this.title,
            },
          });
        } else {
          this.$router.push({ path: "/show/search2" });
        }
      }
    },
    onClickModel: function (id) {
      this.$router.push({
        path: "/show/model",
        query: {
          id: id,
        },
      });

      //  console.log(this.dataId);
    },
    go() {
      this.$router.push({
        path: "/home",
      });
    },
    high() {
      this.blueClass = !this.blueClass;
    },
    share() {
      this.shareClass = !this.shareClass;
    },
    pop() {
      this.popClass = !this.popClass;
    },
    onClickNav: function () {
      this.navFlag = !this.navFlag;
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
    load() {
      let that = this;
      this.num++;
      this.$axios
        .get(
          "/index.php/api/models/list?pageNumber=" +
            that.num +
            "&pageSize=10&typeid=1,2"
        )
        .then((val) => {
          that.modelList.push(...val.data);
        });
    },

    // 点击回到顶部事件
    onClickBackTop() {
      let scrollTop = window.pageYOffset;
      // 每0.01秒向上移动100像素，直到小于或等于0结束
      let timer = setInterval(() => {
        scrollTop -= 10;
        // 为负数，浏览器会不处理得
        window.scrollTo(0, scrollTop);
        if (scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 15);
    },
    //滚动监听
    scrollHandle(e) {
      // console.log(this);
      // console.log(this.$refs);
      // console.log(111);
      let top = e.srcElement.scrollingElement.scrollTop; // 获取页面滚动高度
      // var backTop = this.$refs.backTop.offsetHeight;
      // console.log(top,backTop);
      if (top > 10) {
        this.classFlag5 = false;
      } else {
        // console.log(111);
        this.classFlag5 = true;
      }
    },
  },
  mounted() {
    // console.log(this.$refs.backTopBox);
    // this.$refs.backTopBox.addEventListener("scroll", this.scrollHandle); //绑定页面滚动事件
    window.addEventListener("scroll", this.scrollHandle); //绑定页面滚动事件
  },
  activated() {
    this.seachName = "";
  },
};
</script>
