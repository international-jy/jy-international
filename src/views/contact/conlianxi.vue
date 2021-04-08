<template>
  <div>
    <div class="cc-lianxi">
      <div class="icon">
        <div class="regard-return" @click="$router.go(-1)">
          <img src="@/assets/img/jiantou.png" alt="" />
        </div>
        <div class="regard-dl">
          <img src="@/assets/img/tx.png" alt="" />
        </div>
        <div class="regard-link" @click="addClass">
          <img src="@/assets/img/lianjie.png" alt="" />
        </div>
      </div>
      <div class="articleArea">
        <h3>联系我们</h3>
        <p>成都夜总会，成都夜场，成都酒吧各种模特佳丽【13688143752】，</p>
        <p>设备齐全，装修高端，资源丰富，</p>
        <p>生意每天开到爆，欢迎随时预定包厢</p>
        <div class="lianxi-img">
          <img src="@/assets/img/code.png" alt="" />
        </div>
      </div>
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
  </div>
</template>
<style lang="less">
@import "../../assets/less/base.less";
//联系我们
.dn {
  display: none;
}
.cc-lianxi {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 0 (100 / @vw) 0;
  text-align: center;
  background-color: #f8f8f8;
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
  .articleArea {
    width: 100%;
    // height: 100%;
    background-color: #fff;
    padding-top: (100 / @vw);
    h3 {
      color: #333;
      font-size: (37 / @vw);
      margin-bottom: (10 / @vw);
      padding-top: (18 / @vw);
    }
    .lianxi-img {
      padding: (50 / @vw) 0;
      img {
        .setwh(600, 590);
        margin-bottom: (30 / @vw);
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
</style>

<script>
export default {
  data: function () {
    return {
      dnClass: true,
    };
  },
  methods: {
    addClass: function () {
      this.dnClass = !this.dnClass;
    },
  },
};
</script>
