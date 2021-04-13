<template>
  <div>
    <!-- 关于我们  content -->
    <div class="cc-regard">
      <div class="icon">
        <div class="regard-return" @click="onClickGo()">
          <img src="@/assets/img/jiantou.png" alt="" />
        </div>
        <div class="regard-dl">
          <img src="@/assets/img/tx.png" alt="" />
        </div>
        <div class="regard-link" @click="addClass">
          <img src="@/assets/img/lianjie.png" alt="" />
        </div>
      </div>
      <pre class="regard-pre" v-for="(value, index) in gycontent" :key="index">
        {{ value.content }}
      </pre>

      <div class="thickness" :class="dnClass ? 'dn' : ''" @click="addClass">
        <div class="thickness-logo">
          <a href="https://qzone.qq.com/">
            <span class="space"></span>
          </a>
          <a href="https://weibo.com/">
            <span class="microblog"></span>
          </a>
          <a href="https://douban.com">
            <span class="bean"></span>
          </a>
        </div>
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
// 关于我们
.regard-pre {
  padding-top: (150 / @vw);
  width: 100%;
  height: auto;
  white-space: pre-wrap;
  box-sizing: border-box;
}

.dn {
  display: none;
}
.cc-regard {
  width: 100%;
  box-sizing: border-box;
  padding: 0 (44 / @vw) (100 / @vw);
  line-height: (45 / @vw);
  .icon {
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

  .thickness {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    .thickness-logo {
      width: (350 / @vw);
      height: (150 / @vw);
      margin-left: (-175 / @vw);
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 5px;
      padding-top: (25 / @vw);
      box-sizing: border-box;
      position: fixed;
      left: 50%;
      top: 20%;
      span {
        display: inline-block;
        width: (75 / @vw);
        height: (75 / @vw);
        background-size: (75 / @vw) (444 / @vw);
        margin: (17 / @vw);
      }
      .space {
        background-image: url("../../assets/img/icon.png");
        background-position: 0 (-73 / @vw);
      }
      .microblog {
        background-image: url("../../assets/img/icon.png");
        background-position: 0 0;
      }
      .bean {
        background-image: url("../../assets/img/icon.png");
        background-position: 0 (-222 / @vw);
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
  data: function () {
    return {
      dnClass: true,
      flag: true,
      dataId: null,
      gycontent: [],
      footerTel: "",
      footerImage: "",
    };
  },
  created() {
    this.dataId = Number(this.$route.query.id);
    // console.log(this.dataId);
    let that = this;
    this.$axios.get("/index.php/api/about_us/list").then((val) => {
      let arr = val.data.find((val) => val.id == 1);
      that.gycontent.push(arr);
    });
    this.$axios.get("index.php/api/footer/get").then((val) => {
      this.footerTel = val.data.phone;
      this.footerImage = this.$store.state.domainName + val.data.image;
    });
  },

  methods: {
    go(step) {
      this.$router.go(step);
    },
    addClass: function () {
      this.dnClass = !this.dnClass;
    },
    onClickcode: function () {
      this.flag = !this.flag;
    },
    onClickOr: function () {
      this.flag = !this.flag;
    },
    onClickGo: function () {
      this.$router.push({
        path: "/contact",
      });
    },
  },
};
</script>
