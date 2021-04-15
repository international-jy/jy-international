<template>
  <div
    class="xw-box"
    ref="box"
    v-loading.fullscreen.lock="!hide"
    element-loading-text="拼命加载中"
    element-loading-background="rgba(255, 255, 255, 0.4)"
  >
    <div class="box">
      <!-- 顶部导航栏 -->
      <div class="top" v-if="hide">
        <div class="top-lt" @click="go()">
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
      <h3 class="title" v-if="hide">成都夜场</h3>
      <!-- 新闻列表 -->
      <div
        class="list-box infinite-list"
        ref="scroll"
        :style="scrollH"
        v-infinite-scroll="load"
        style="overflow: auto"
      >
        <ul class="list">
          <li
            v-for="(val, index) in newsList"
            :key="index"
            class="infinite-list-item"
            @click="goList(val.id)"
          >
            <div class="content">
              <!-- 跳转新闻详情页链接 -->
              <div class="caption">{{ val.title }}</div>
              <div class="time">
                <img src="@/assets/img/time.png" />
                <p>{{ val.time }}</p>
              </div>
            </div>
          </li>
        </ul>
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
              <!-- <a href="">联系我们</a> -->
              <router-link to="/contact">联系我们</router-link>
            </li>
            <li>
              <!-- <a href="">模特展示</a> -->
              <router-link to="/show">模特展示</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pql-btm-fixed" ref="footer">
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
    <div class="or-code" :class="flag ? 'dn' : ''" @click="onClickOr">
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
.xw-box {
  height: 100%;
  background-repeat: repeat-y;
  background-position: left top;
  background-size: 100% auto;
  background-color: #f5f5f5;
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
    .top-rt {
      display: flex;
      align-items: center;
      .user {
        width: (56 / @vw);
        margin-right: (40 / @vw);
        img {
          width: 100%;
        }
      }
      .nav-btn {
        .setwh(60,60);
        margin-right: (40 / @vw);
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
  }
  .title {
    padding: (12 / @vw) 0;
    margin: (5 / @vw) 0 (10 / @vw);
    text-align: center;
    line-height: (60 / @vw);
    font-size: (30 / @vw);
    background-color: #fff;
    color: #525252;
  }
  .list-box {
    margin-bottom: (100 / @vw);
  }
  .list {
    height: 100%;
    margin: (10 / @vw) 0;
    overflow-y: auto;
    li {
      overflow: hidden;
      position: relative;
      margin: 0 (4 / @vw) (8 / @vw);
      background-color: #fff;
      border-radius: 0;
      .content {
        overflow: hidden;
        padding: (20 / @vw);
        .caption {
          line-height: (48 / @vw);
          max-height: (48 / @vw);
          font-size: (26 / @vw);
          font-family: "Arial";
          overflow: hidden;
        }
        .time {
          display: flex;
          align-items: center;
          line-height: 1.5;
          img {
            width: (16 / @vw);
            height: (16 / @vw);
            min-width: 16px;
            min-height: 16px;
          }
          p {
            color: #999999;
            font-size: (24 / @vw);
            padding-left: (10 / @vw);
          }
        }
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
</style>
<script>
export default {
  data() {
    return {
      navFlag: true,
      newsList: [],
      flag: true,
      scrollH: { height: null },
      num: 1,
      hide: false,
      footerTel: "",
      footerImage: "",
    };
  },
  mounted() {
    let that = this;
    this.$axios
      .get(
        "/index.php/api/journalism/list?pageNumber=" +
          that.num +
          "&pageSize=10&journalismtypeid"
      )
      .then((res) => {
        this.newsList = res.data;
        this.hide = true;
      });
    let footer = this.$refs.footer.offsetHeight;
    let boxH = this.$refs.box.offsetHeight;
    this.scrollH.height = boxH - footer - this.$refs.scroll.offsetTop + "px";
    this.$axios.get("index.php/api/footer/get").then((val) => {
      this.footerTel = val.data.phone;
      this.footerImage = this.$store.state.domainName + val.data.image;
    });
  },
  methods: {
    go() {
      this.$router.push({ path: "/home" });
    },
    goList(id) {
      this.$router.push({
        path: "/news/list",
        query: { id: id },
      });
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
          "/index.php/api/journalism/list?pageNumber=" +
            that.num +
            "&pageSize=10&journalismtypeid"
        )
        .then((res) => {
          this.newsList.push(...res.data);
        });
    },
  },
};
</script>
