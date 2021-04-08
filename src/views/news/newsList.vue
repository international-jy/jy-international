<template>
  <div class="xw-box" v-loading.fullscreen.lock="!hide">
    <div class="box">
      <div class="top">
        <div class="top-lt" @click="go(-1)">
          <img src="@/assets/img/return.png" />
        </div>
        <div class="top-rt">
          <div class="tit-icon1" @click="collect">
            <img src="@/assets/img/tit_icon1.png" />
          </div>
          <div class="tit-icon2" @click="share">
            <img src="@/assets/img/tit_icon2.png" />
          </div>
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
            <a href="#">登录</a>
            <a href="#">注册</a>
            <a href="###" class="close" @click="closeMask(num + 1)">关闭</a>
          </div>
        </div>
        <div :class="{ icon2: num == 2, dn: num != 2 }">
          <a href="https://qzone.qq.com/"></a>
          <a href="https://weibo.com/"></a>
          <a href="https://www.douban.com/"></a>
        </div>
      </div>
      <div class="newsList" v-for="(item, k) in activeDate" :key="k">
        <h2>{{ item.title }}</h2>
        <div class="text">
          <pre>{{ item.content | upper }}</pre>
          <img :src="$store.state.domainName + item.image" alt="" />
          <pre>{{ item.content | lower }}</pre>
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
        <button @click="goList(id - 1)">上一篇</button>
        <button @click="goList(id + 1)">下一篇</button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../../assets/less/base.less";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

img {
  width: auto;
}
.xw-box {
  background-repeat: repeat-y;
  background-position: left top;
  background-size: 100% auto;
  background-color: #f5f5f5;
  overflow: hidden;
  .box {
    min-width: 320px;
    padding: (100 / @vw) 0;
    margin: 0 auto;
    overflow: hidden;
    z-index: 2;
    .top {
      position: fixed;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 0 auto;
      height: (100 / @vw);
      background: #fafafa;
      border-bottom: 1px solid #ededed;
      z-index: 10;
      .top-lt {
        position: relative;
        .setwh(40,44);
        margin-left: (40 / @vw);
        img {
          position: absolute;
          height: 100%;
        }
      }
      .top-rt {
        display: flex;
        align-items: center;
        .tit-icon1,
        .tit-icon2 {
          width: (56 / @vw);
          margin-right: (40 / @vw);
          img {
            width: 100%;
          }
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
          a {
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
}
[v-cloak] {
  display: none;
}
</style>
<script>
export default {
  data() {
    return {
      flag: false,
      num: 0,
      activeDate: [],
      id: null,
      hide: false,
    };
  },
  mounted: function () {
    let that = this;
    this.id = Number(this.$route.query.id);
    this.$axios
      .get(
        "/index.php/api/journalism/list?pageNumber&pageSize&journalismtypeid=" +
          that.id
      )
      .then((res) => {
        this.activeDate = res.data;
        this.hide = true;
      })
      .catch(function (res) {
        console.log(res);
      });
  },
  beforeRouteUpdate(to, from, next) {
    this.hide = false;
    to, from;
    var that = this;
    console.log(to);
    this.id = Number(to.query.id);
    this.$axios
      .get(
        "/index.php/api/journalism/list?pageNumber&pageSize&journalismtypeid=" +
          that.id
      )
      .then((res) => {
        this.activeDate = res.data;
        this.hide = true;
      })
      .catch(function (res) {
        console.log(res);
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
    goList(id) {
      console.log(id);
      if (id == 0) {
        this.$router.push({
          path: "/news/list",
          query: { id: 1 },
        });
      } else {
        this.$router.push({
          path: "/news/list",
          query: { id: id },
        });
      }
    },
  },
  filters: {
    upper: function (val) {
      let arr = [...val];
      let start = val.indexOf("![输入图片说明]");
      let str = arr.splice(start);
      console.log(str);
      return arr.join("");
    },
    lower: function (val) {
      let arr = [...val];
      let end = val.lastIndexOf(")");
      let str = arr.splice(end + 1);
      return str.join("");
    },
  },
};
</script>
