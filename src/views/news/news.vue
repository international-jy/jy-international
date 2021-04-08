<template>
  <div class="xw-box">
    <div class="box">
      <!-- 顶部导航栏 -->
      <div class="top">
        <div class="top-lt" @click="go(-1)">
          <img src="@/assets/img/return.png" alt="" />
        </div>
        <div class="top-rt">
          <div class="user"><img src="@/assets/img/user.png" alt="" /></div>
          <div class="nav-btn" @click="onClickNav">
            <img src="@/assets/img/nav-right.png" alt="" />
          </div>
        </div>
      </div>
      <div class="title" v-show="flag" @click="hide">成都夜场</div>
      <!-- 新闻列表 -->
      <div class="list-box">
        <ul class="list">
          <li v-for="val in newsList" :key="val.id" @click="goList(val.id)">
            <div class="content">
              <!-- 跳转新闻详情页链接 -->
              <div class="caption">{{ val.title }}</div>
              <div class="time">
                <img src="@/assets/img/time.png" alt="" />
                <p>{{ val.time }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
  </div>
</template>
<style lang="less">
@import "../../assets/less/base.less";
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
    max-width: 768px;
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
      max-width: 768px;
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
    margin: (10 / @vw);
    text-align: center;
    line-height: (60 / @vw);
    font-size: (30 / @vw);
    background-color: #fff;
    color: #525252;
  }
  .list {
    margin: (10 / @vw);
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
          a {
            display: block;
            line-height: (48 / @vw);
            max-height: (96 / @vw);
            font-size: (26 / @vw);
            font-family: "Arial";
            overflow: hidden;
          }
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
}
</style>
<script>
export default {
  data() {
    return {
      flag: true,
      navFlag: true,
      newsList: [
        {
          id: 1,
          title: "夜总会招聘模特条件改掉这些习惯",
          time: "2021-04-06",
        },
        {
          id: 2,
          title: "夜场模特说话技巧如何打动面试官",
          time: "2021-04-05",
        },
        {
          id: 3,
          title: "夜场招聘找不到工作原因不同类型面试",
          time: "2021-04-02",
        },
        {
          id: 4,
          title: "夜场招聘选择工作注意着重考察求职者",
          time: "2021-04-01",
        },
      ],
    };
  },
  methods: {
    go(step) {
      this.$router.go(step);
    },
    hide() {
      this.flag = false;
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
  },
};
</script>
