<template>
  <div>
    <!-- 关于我们  content -->
    <div class="cc-regard">
      <div class="icon">
        <div class="regard-return" @click="go(-1)">
          <img src="@/assets/img/jiantou.png" alt="" />
        </div>
        <div class="regard-dl">
          <img src="@/assets/img/tx.png" alt="" />
        </div>
        <div class="regard-link" @click="addClass">
          <img src="@/assets/img/lianjie.png" alt="" />
        </div>
      </div>
      <h1 class="regard-title">关于我们</h1>
      <div class="regard-content">
        <div class="regard-duce">
          成都夜总会，成都夜场，成都酒吧各种模特佳丽【13688143752】，设备齐全，装修高端，资源丰富，生意每天开到爆，欢迎随时预定包厢～地处市中心繁华地段，重金打造，属成都最大最奢华的娱乐俱乐部。高端的客户、奢华的硬件、优质的服务造就了高端商务KTV，目前为止成都夜场生意最火爆，最稳定的商务会所。包房天天爆满！最具实力营销团队！高端人群聚集地！
        </div>
        <div class="regard-model">
          【模特S级】:净身高172cm以上，年龄28岁以下，形象好，气质特佳
          1500起步<br />
          【模特*】:净身高167cm以上，年龄28岁以下，形象好，气质特佳 1200起步<br />【模特B级】:净身高163cm以上，年龄28岁以下，形象好，气质特佳
          1000起步
        </div>
        <br />
        <div class="regard-live">
          <p>生活待遇:</p>
          <p>
            住宿条件为快捷酒店，2人一间，人均面积宽裕，员工床位均为单人席梦思，配备宽带，每日有阿姨烧菜，保姆清洁，每晚上班有专车送达，宿舍中我们的住宿条件1%是NO.1，真正实现了“以人为本”的经营理念。
          </p>
        </div>
        <br />
        <div class="regard-promise">
          <p>郑重承诺:</p>
          <br />
          <p>1、无押金，无任何费用，不抽水，无台费，公司直聘，绝非中介。</p>
          <br />
          <p>2、无需办理IC卡，无需身份证。</p>
          <br />
          <p>3、不需要穿工服，怎么怎么穿，展现自己最美丽时尚的一面。</p>
          <br />
          <p>4、保证这份工作绝对是健康、安全、正规、合法的。</p>
          <br />
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
  </div>
</template>
<style lang="less">
@import "../../assets/less/base.less";
// 关于我们
.dn {
  display: none;
}
.cc-regard {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 (100 / @vw) 0;
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
  .regard-title {
    text-align: center;
    color: #333;
    font-size: (37 / @vw);
    margin: (130 / @vw) 0 (10 / @vw) 0;
  }
  .regard-content {
    padding: 0 (40 / @vw);
    text-align: center;
    color: rgb(33, 33, 33);
    .regard-model {
      font-family: tt, Arial, 微软雅黑;
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
    };
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
  },
};
</script>
