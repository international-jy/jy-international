<template>
  <div class="home">
    <div class="pql-box">
      <!-- 头部导航 -->
      <div class="nav-box">
        <img src="@/assets/img/nav.png" alt="" class="nav-title" />
        <div class="nav-btn" @click="onClickNav">
          <img src="@/assets/img/nav-right.png" alt="" />
        </div>
      </div>
      <!-- 活动部分 -->
      <div class="activity">
        <a href="javascript:;">
          <img src="@/assets/img/activity.jpg" alt="" />
        </a>
      </div>
      <!-- 环境部分 -->
      <div class="environment-box">
        <div class="nightclub-title nightclub-title-t">
          <p>ENVIRONMENTAL<span>DISPLAY</span></p>
          <p>环境/AMBIENT</p>
          <p></p>
        </div>
        <div class="environment">
          <div
            class="cd-environment"
            :class="environmentMove ? 'cd-environment-m' : ''"
          >
            <div class="cd-title">
              <img src="@/assets/img/environment1.jpeg" alt="" />
            </div>
            <div class="environment-bd">
              <h3>成都夜总会</h3>
              <p>联系人:周经理(夜场资深领队)</p>
              <p>电话:13688143752(微信同号)</p>
              <p>地址:成都</p>
            </div>
          </div>
        </div>
        <div class="phone">
          <div><img src="@/assets/img/phone.png" alt="" /> 联系电话</div>
        </div>
      </div>
      <!-- 招聘部分 -->
      <div class="bring">
        <img src="@/assets/img/bring.jpg" alt="" class="bring-img" />
        <p>
          小包低消1080元中包低消1280大包低消1380豪包低消2680全场所有啤酒均可享受1380豪包低消2680全场所有啤酒均可享受1380豪包低消2680全场所有啤酒均可享受宿酒店一套，限当天使用。
        </p>
      </div>
      <!-- 模特 -->
      <div class="high-end">
        <a>高端KTV</a>
        <p>High-end KTV News</p>
        <span></span>
      </div>
      <div class="fameal">
        <ul>
          <li>
            <img src="@/assets/img/img1.jpg" alt="" />
            <p>成都夜总会模特</p>
          </li>
          <li>
            <img src="@/assets/img/img2.jpg" alt="" />
            <p>成都夜场模特</p>
          </li>
          <li>
            <img src="@/assets/img/img3.jpg" alt="" />
            <p>成都酒吧模特</p>
          </li>
          <li>
            <img src="@/assets/img/img4.jpg" alt="" />
            <p>成都夜总会模特</p>
          </li>
          <li>
            <img src="@/assets/img/img5.jpg" alt="" />
            <p>成都夜场模特</p>
          </li>
          <li>
            <img src="@/assets/img/img6.jpg" alt="" />
            <p>成都酒吧模特</p>
          </li>
        </ul>
      </div>
      <!-- ktv新闻 -->
      <div class="news">
        <a>高端KTV新闻</a>
        <p>High-end KTV News</p>
        <span></span>
      </div>
      <!-- 新闻列表 -->
      <div class="tjb-box">
        <div class="tjb-content">
          <ul>
            <li v-for="(value, index) in newsList" :key="index">
              <a>
                <img src="@/assets/img/text_list_code_bg.jpg" />{{
                  value.text
                }}</a
              >
            </li>
          </ul>
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
    <div class="mip-lightbox" :class="navFlag ? 'dn' : ''" @click="onClickTier">
      <div class="lightbox-r">
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
    <!-- 微信二维码 -->
    <div class="or-code" :class="flag ? 'dn' : ''" @click="onClickOr">
      <div class="white">
        <img src="@/assets/img/code.png" alt="" />
        <p>长按识别二维码</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navFlag: true,
      environmentMove: false,
      flag: true,
      newsList: [
        {
          text: "111",
        },
        {
          text: "222",
        },
        {
          text: "3333",
        },
        {
          text: "44444444",
        },
        {
          text: "5555555",
        },
        {
          text: "66666",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "111",
        },
        {
          text: "222",
        },
        {
          text: "3333",
        },
        {
          text: "44444444",
        },
        {
          text: "5555555",
        },
        {
          text: "66666",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
        {
          text: "夜总会招聘模特条件改掉这些习惯",
        },
      ],
    };
  },
  methods: {
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
    scrollHandle(e) {
      let top = e.srcElement.scrollingElement.scrollTop; // 获取页面滚动高度
      // var flag = true
      if (top > 200) {
        if (this.flag) {
          this.environmentMove = !this.environmentMove;
          this.flag = false;
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle); //绑定页面滚动事件
  },
};
</script>

<style lang="less" scope>
@import "../assets/less/base.less";
@keyframes opcityMove {
  0% {
    opacity: 0;
    transform: translateY(500px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-986 / @vw);
  }
}
.nav-box {
  // position: relative;
  width: 100%;
  height: (100 / @vw);
  .nav-title {
    width: 100%;
  }
  .nav-btn {
    position: fixed;
    top: (20 / @vw);
    right: (20 / @vw);
    .setwh(60,60);
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

// 活动部分
.activity {
  width: 100%;
  overflow: hidden;
  a {
    display: block;
    img {
      display: block;
      width: 100%;
    }
  }
}
// 环境部分
.environment-box {
  width: 100%;
  background-color: #ccc;
  .nightclub-title {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    p {
      text-align: center;
      width: 100%;
      &:nth-of-type(1) {
        color: #333;
        font-size: (36 / @vw);
        line-height: (100 / @vw);
        span {
          margin-left: (10 / @vw);
        }
      }
      &:nth-of-type(2) {
        color: #989898;
        font-size: (32 / @vw);
      }
      &:nth-of-type(3) {
        width: (70 / @vw);
        height: 2px;
        background-color: #1296db;
        // border: 1px solid #1296db;
        border-radius: (2 / @vw);
        margin: (20 / @vw) 0;
      }
    }
  }
  .nightclub-title-t {
    p {
      animation: opcityMove 1.2s forwards;
    }
  }
  .environment {
    padding: 0 (20 / @vw);
    .cd-title,
    .cd-title-hd {
      overflow: hidden;
      img {
        display: block;
        animation: opcityMove 1.4s forwards;
      }
    }
    .environment-bd {
      width: 100%;
      padding: (15 / @vw) (10 / @vw);
      box-sizing: border-box;
      // height: 100%;
      background-color: #fff;
      h3 {
        text-align: center;
        font-size: (36 / @vw);
        line-height: (80 / @vw);
        color: #333;
      }
      p {
        line-height: (50 / @vw);
        text-align: center;
        font-size: (26 / @vw);
        color: #585858;
      }
    }
    .cd-environment-m {
      .environment-bd {
        animation: opcityMove 1.6s forwards;
      }
    }
  }
  .phone {
    width: 100%;
    padding: (10 / @vw);
    box-sizing: border-box;
    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #c00;
      color: #fff;
      font-size: (32 / @vw);
      border-radius: (5 / @vw);
      img {
        .setwh(32,32);
        margin-right: (10 / @vw);
      }
    }
  }
}
// 招聘部分
.bring {
  position: relative;
  padding: (10 / @vw);
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  .bring-img {
    // .cl(750);
    // top: 0;
    width: 100%;
  }
  p {
    .cl(420);
    top: (220 / @vw);
    width: (440 / @vw);
    font-size: (25 / @vw);
    text-indent: 1rem;
    color: #fff;
    line-height: (46 / @vw);
  }
}

// 高端KTV
.high-end {
  position: relative;
  width: 100%;
  text-align: center;
  background-color: #fff;
  height: (140 / @vw);
  a {
    display: block;
    padding-top: (30 / @vw);
    font-size: (36 / @vw);
  }
  p {
    width: 100%;
    height: (52 / @vw);
    line-height: (52 / @vw);
    color: #989898;
    font-size: (26 / @vw);
  }
  span {
    position: absolute;
    left: 45%;
    bottom: 0;
    display: block;
    // margin: 0 auto;
    width: (94 / @vw);
    height: 2px;
    background-color: rgb(53, 185, 238);
    text-align: center;
  }
}

//模特

.fameal {
  width: 100%;
  background-color: #fff;
  margin-bottom: (10 / @vw);
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 (20 / @vw) 0 (20 / @vw);
    box-sizing: border-box;
    li {
      padding: (40 / @vw) 0 0 0;
      img {
        .setwh(348,300);
        padding-bottom: (40 / @vw);
        box-sizing: border-box;
      }
      p {
        width: 100%;
        height: (100 / @vw);
        text-align: center;
        line-height: (100 / @vw);
        color: #555;
        font-size: (28 / @vw);
      }
    }
  }
}
// ktv新闻

.news {
  position: relative;
  width: 100%;
  text-align: center;
  background-color: #fff;
  height: (140 / @vw);
  a {
    display: block;
    padding-top: (30 / @vw);
    font-size: (36 / @vw);
  }
  p {
    width: 100%;
    height: (52 / @vw);
    line-height: (52 / @vw);
    color: #989898;
    font-size: (26 / @vw);
  }
  span {
    position: absolute;
    left: 45%;
    bottom: 0;
    display: block;
    // margin: 0 auto;
    width: (94 / @vw);
    height: 2px;
    background-color: rgb(53, 185, 238);
    text-align: center;
  }
}

// 新闻列表
.tjb-box {
  width: 100%;
  margin-bottom: (106 / @vw);

  box-sizing: border-box;
  // overflow: hidden;
  .tjb-content {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    height: (986 / @vw);
    margin-top: (20 / @vw);
    // box-sizing: border-box;
    ul {
      animation: move 30s linear infinite;
      transition: all 0.5s;
      li {
        border-bottom: 1px solid #ededed;
        a {
          display: block;
          width: 100%;
          padding-left: 6px;
          text-align-last: left;
          font-size: (22 / @vw);
          color: #7c7b7c;
          img {
            width: 4px;
            height: 4px;
            vertical-align: middle;
            padding-right: (10 / @vw);
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
  background-color: rgba(0, 0, 0, 0.1);
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
        img {
          .setwh(40,40);
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
