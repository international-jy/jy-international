<template>
  <div
    class="xw-boxs"
    v-loading.fullscreen.lock="!hide"
    element-loading-text="拼命加载中"
    element-loading-background="rgba(255, 255, 255, 0.4)"
  >
    <div class="box" v-if="hide">
      <div class="top">
        <div class="regard-return" @click="goNews">
          <img src="@/assets/img/jiantou.png" alt="" />
        </div>
        <div class="regard-dl" @click="collect">
          <img src="@/assets/img/tit_icon1.png" alt="" />
        </div>
        <div class="regard-link" @click="share">
          <img src="@/assets/img/lianjie.png" alt="" />
        </div>
      </div>
      <div
        :class="{ mask: flag, dn: !flag }"
        @touchmove.prevent
        @mousewheel.prevent
        @click="closeMask(num)"
      >
        <div :class="{ icon1: num == 1, dn: num != 1 }">
          <p>收藏失败,您还没有登录,登录后请您重新收藏</p>
          <div class="btn">
            <span>登录</span>
            <span>注册</span>
            <span class="close" @click="closeMask(num + 1)">关闭</span>
          </div>
        </div>
        <div :class="{ icon2: num == 2, dn: num != 2 }">
          <a href="https://qzone.qq.com/"></a>
          <a href="https://weibo.com/"></a>
          <a href="https://www.douban.com/"></a>
        </div>
      </div>
      <div class="newsList">
        <h2>{{ activeDate.title }}</h2>
        <div class="text markdown-body">
          <VueMarkdown :source="value"></VueMarkdown>
        </div>
      </div>
      <div class="text-line"></div>
      <div class="newsShare newsList" v-if="hide">
        <h2>
          <span>推荐</span>
          <hr />
        </h2>
        <ul class="recommend">
          <li>
            <a href="https://qzone.qq.com/">
              <div class="pic"><img src="@/assets/img/qq_icon.jpg" /></div>
              <p>QQ空间</p>
            </a>
          </li>
          <li>
            <a href="https://weibo.com/">
              <div class="pic"><img src="@/assets/img/weibo_icon.png" /></div>
              <p>新浪微博</p>
            </a>
          </li>
          <li>
            <a href="http://www.renren.com/">
              <div class="pic"><img src="@/assets/img/renren_icon.png" /></div>
              <p>人人网</p>
            </a>
          </li>
          <li>
            <a href="https://www.douban.com/">
              <div class="pic"><img src="@/assets/img/dou_icon.png" /></div>
              <p>豆瓣</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="pageBtn" v-if="hide">
        <button @click="goList('prev', id)">上一篇</button>
        <button @click="goList('next', id)">下一篇</button>
      </div>
    </div>
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
    <!-- 微信二维码 -->
    <div class="or-code" :class="flag2 ? 'dn' : ''" @click="onClickOr">
      <div class="white">
        <img :src="footerImage" alt="" />
        <p>长按识别二维码</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scope>
@import "../../assets/less/base.less";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

img {
  width: auto;
}
.xw-boxs {
  height: auto;
  background-repeat: repeat-y;
  background-position: left top;
  background-size: 100% auto;
  background-color: #f5f5f5;
  overflow: auto;
  .box {
    min-width: 320px;
    padding: (100 / @vw) 0;
    margin: 0 auto;
    // overflow: hidden;
    z-index: 2;
    .top {
      width: 100%;
      height: (100 / @vw);
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      background: #fafafa;
      box-sizing: border-box;
      border-top: 1px solid #fafafa;
      border-bottom: 1px solid #fafafa;
      padding: (28 / @vw) (30 / @vw) (10 / @vw);
      .regard-return {
        img {
          .setwh(40,40);
        }
      }
      .regard-dl {
        position: absolute;
        right: (100 / @vw);
        top: (28 / @vw);
        img {
          .setwh(45,45);
        }
      }
      .regard-link {
        img {
          .setwh(50,50);
        }
      }
    }
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 20;
      .icon1 {
        .cl(430);
        top: 50%;
        width: (430 / @vw);
        padding: (10 / @vw) 0;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        text-align: center;
        font-size: (20 / @vw);
        border-radius: (20 / @vw);
        p {
          line-height: (60 / @vw);
          padding-bottom: (10 / @vw);
          border-bottom: 1px solid #ccc;
          font-size: (20 / @vw);
        }
        .btn {
          display: flex;
          justify-content: space-evenly;
          line-height: (60 / @vw);
          span {
            color: #ccc;
          }
        }
      }
      .icon2 {
        display: flex;
        justify-content: space-evenly;
        position: absolute;
        top: 20%;
        .cl(300);
        width: (300 / @vw);
        padding: (10 / @vw);
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: (10 / @vw);
        a {
          .setwh(80,74);
          margin: (10 / @vw);
          background: url(../../assets/img/share_but.png) no-repeat 0
            (-74 / @vw);
          background-size: (76 / @vw) (444 / @vw);
        }
        a:nth-child(2) {
          background-position: 0 0;
        }
        a:nth-child(3) {
          background-position: 0 (-222 / @vw);
        }
      }
    }
    .newsList {
      background: #fff;
      overflow: hidden;
      padding: (20 / @vw);
      margin-bottom: (20 / @vw);
      h2 {
        padding: (20 / @vw) 0;
        line-height: (60 / @vw);
        text-align: center;
        font-size: (40 / @vw);
        font-weight: bold;
      }
      .text {
        margin-bottom: (20 / @vw);
        text-align: center;
      }
      pre {
        color: rgb(34, 34, 34);
        font-family: Arial, Verdana, sans-serif;
        font-size: (24 / @vw);
        white-space: pre-wrap;
        line-height: (50 / @vw);
        text-align: left;
      }
      img {
        max-width: 100% !important;
        height: auto;
      }
    }
    .text-line {
      border-top: 1px solid #ededed;
      padding: 0;
      line-height: (70 / @vw);
      text-align: left;
    }
    .newsShare {
      h2 {
        height: (60 / @vw);
        line-height: (72 / @vw);
        margin-bottom: (20 / @vw);
        position: relative;
        text-align: center;
        font-weight: 400;
        span {
          display: inline-block;
          font-size: (32 / @vw);
          background: #fff;
          padding: (4 / @vw) (20 / @vw);
        }
        hr {
          margin-top: (-40 / @vw);
          border: 1px solid #dbdbdb;
        }
      }
      .recommend {
        display: flex;
        justify-content: center;
        li {
          width: 20%;
          margin: 0 (20 / @vw);
          a {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
          }
          .pic {
            margin-bottom: (10 / @vw);
            padding: 0 (20 / @vw);
            text-align: center;
            img {
              max-width: 100%;
              height: auto;
            }
          }
          p {
            padding-bottom: (40 / @vw);
            text-align: center;
            font-size: (24 / @vw);
            height: (40 / @vw);
            overflow: hidden;
            text-indent: 0;
          }
        }
      }
    }
    .pageBtn {
      display: flex;
      justify-content: space-between;
      padding: (20 / @vw) (40 / @vw);
      overflow: hidden;
      button {
        line-height: (80 / @vw);
        text-align: center;
        width: (240 / @vw);
        border-radius: (10 / @vw);
        border: 1px solid #ccc;
        color: #000;
        font-size: (32 / @vw);
        background-color: #fff;
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
}
[v-cloak] {
  display: none;
}
</style>
<script>
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown, // 注入组件
  },
  data() {
    return {
      value: "",
      flag: false,
      num: 0,
      activeDate: {},
      id: null,
      hide: false,
      flag2: true,
      footerTel: "",
      footerImage: "",
      page: null,
    };
  },
  mounted: function () {
    let that = this;
    this.id = Number(this.$route.query.id);
    this.$axios
      .get("/index.php/api/journalism/list?journalismtypeid=" + that.id)
      .then((res) => {
        this.activeDate = res.data[0];
        this.hide = true;
        this.value = this.activeDate.content;
      });
    this.$axios.get("index.php/api/footer/get").then((val) => {
      this.footerTel = val.data.phone;
      this.footerImage = this.$store.state.domainName + val.data.image;
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.hide = false;
    to, from;
    let that = this;
    this.page = to.query.msg;
    this.id = Number(to.query.id);
    this.$axios
      .get(
        "/index.php/api/journalism/get?id=" + that.id + "&operate=" + that.page
      )
      .then((res) => {
        if (res.data == null) {
          if (that.page == "next") {
            this.$message({
              message: "这是最后一篇内容",
              center: true,
              duration: 2000,
            });
            this.$router.go(-1);
          } else {
            this.$message({
              message: "这是第一篇内容",
              center: true,
              duration: 2000,
            });
            this.$router.go(-1);
          }
          return;
        }
        this.activeDate = res.data;
        this.hide = true;
        this.value = this.activeDate.content;
        this.id = this.activeDate.id;
      });
    window.scroll(0, 0);
    next();
  },
  methods: {
    go(step) {
      this.$router.go(step);
    },
    collect: function () {
      this.flag = true;
      this.num = 1;
    },
    share: function () {
      this.flag = true;
      this.num = 2;
    },
    closeMask: function (num) {
      if (num == 2) {
        this.flag = false;
        this.num = 0;
      }
    },
    goList(msg, id) {
      this.$router.push({
        path: "/news/list",
        query: { id: id, msg: msg },
      });
    },
    onClickcode: function () {
      this.flag2 = !this.flag2;
    },
    onClickOr: function () {
      this.flag2 = !this.flag2;
    },
    goNews: function () {
      this.$router.push({
        path: "/news",
      });
    },
  },
};
</script>
