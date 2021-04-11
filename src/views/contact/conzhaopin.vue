<template>
  <div>
    <!-- 招聘信息 -->
    <div class="cc-invite">
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
      <div class="invite-content">
        <h3>招聘要求</h3>
        <p>欢迎来电咨询 13688143752 (微信同号)</p>
        <p>生活不同情弱者,</p>
        <p>当所有道路都走不通时,</p>
        <p>加入我们的团队为你打开一扇机会之窗</p>
        <p>请仔细浏览下面的招聘信息</p>
        <p>
          欢迎自信的你加入本团队,这是属于你们的团队,我们将带领你成为有钱的女人.
        </p>
        <br />
        <p>微信号码:13688143752 欢迎加微信咨询</p>
        <br />
        <p>招聘职位:夜场模特佳丽一招聘范围:成都模特招聘</p>
        <p>招聘年龄:18-26周岁之间</p>
        <br />
        <p>招聘形象:女,净身高163cm即可，形象好,气质佳，会打扮自己。</p>
        <br />
        <p>工资待遇:小费1000-1200-1500起，日薪高台5000起步</p>
        <p>商务伴游8000起步</p>
        <p>
          工作经验:工作经验不限，只要你形象优秀，上进心强，我们的团队就会欢迎你!对于没有夜场工作经验的我们进行详细耐心的培训，一直到你完全掌握!
        </p>
        <br />
        <p>模特公关部《应聘须知》</p>
        <br />
        <p>1.无任何费用，无押金，无工服，当天安排上班。</p>
        <br />
        <p>2.公司提供员工宿舍，两人间，如需安排提前预约。</p>
        <br />
        <p>
          3.面试只需携带一张两寸相片 夏天的裙子 高跟鞋,好好化妆 精心打扮即可。
        </p>
        <br />
        <p>4.欢迎各位应聘者来公司考察面试</p>
        <br />
        <p>
          5.给自己一次机会了解公司 也给我们一次机会了解你 凡应聘者只要会化妆
          都能安排上班 兼职全职均可 十二点之前下房可以拿双份小费。
        </p>
        <p>免费安排宿舍 来公司一月给报销机票。</p>
        <p>你不用再为租房 吃饭 打车烦恼 ，每天赚的钱都可以存到银行 。</p>
        <p>
          生活待遇:住宿条件为市区快捷酒店，2人一间，人均面积宽裕，配备宽带，无线网络WIFI，每晚上班有专车送达。
        </p>
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
  </div>
</template>
<style lang="less" scope>
@import "../../assets/less/base.less";
// 招聘信息
.cc-invite {
  width: 100%;
  box-sizing: border-box;
  padding: 0 (44 / @vw) (100 / @vw);
  text-align: center;
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
  .invite-content {
    padding-top: (100 / @vw);
    margin-bottom: (100 / @vw);
    h3 {
      color: #333;
      font-size: (37 / @vw);
      margin-bottom: (10 / @vw);
      padding-top: (30 / @vw);
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
}

.dn {
  display: none;
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
