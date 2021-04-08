<template>
  <div>
    <div class="thn box">
      <!-- 顶部 开始 -->
      <div class="top">
        <div class="top-t">
          <a href="javaScript:;">＜</a>
          <div class="top-btn">
            <div class="inputm">
              <img src="@/assets/img/seek.png" />
              <input type="text" placeholder="请输入您要搜索的内容" />
            </div>
          </div>
          <div class="top-icon">
            <a href="javaScript:;" class="top_share1">
              <img src="@/assets/img/share.png" />
            </a>
            <a href="javaScript:;" class="top_user1">
              <img src="@/assets/img/pro_user.png" />
            </a>
            <a href="javaScript:;" class="top_home1">
              <img src="@/assets/img/pro_home.png" />
            </a>
          </div>
        </div>
        <!-- 搜索弹窗 开始 -->
        <div class="pop-up">
          <div class="pop-up-l">
            <div class="pop-up-t">
              <img src="@/assets/img/seek.png" />
              <input type="text" placeholder="请输入您要搜索的内容" />
            </div>
          </div>
        </div>
        <!-- 搜索弹窗 结束 -->

        <!-- 分享弹窗 开始 -->
        <div class="thickness">
          <div class="thickness-logo">
            <span class="space"></span>
            <span class="microblog"></span>
            <span class="bean"></span>
          </div>
        </div>
        <!-- 分享弹窗 开始 -->
      </div>
      <!-- 顶部 结束 -->

      <!-- 高端模特 开始 -->
      <div class="high-end">
        <a href="javaScript:;">高端模特</a>
      </div>
      <!-- 高端模特 结束 -->

      <!-- 内容 开始 -->
      <div class="details">
        <ul class="details-top">
          <li
            v-for="(value, index) in modelList"
            :key="index"
            @click="onClickModel"
          >
            <div class="details-con">
              <a href="javaScript:;" style="margin-bottom: 5px">{{
                value.title
              }}</a>
              <span>￥{{ value.money }}元</span>
            </div>
          </li>
          <!-- <li>
                    <div class="details-con">
                        <a href="javaScript:;" style="margin-bottom: 5px;">成都夜场模特</a>
                        <span>￥1500元</span>
                    </div>
                </li>
                <li>
                    <div class="details-con">
                        <a href="javaScript:;" style="margin-bottom: 5px;">成都酒吧模特</a>
                        <span>￥1500元</span>
                    </div>
                </li>
                <li>
                    <div class="details-con">
                        <a href="javaScript:;" style="margin-bottom: 5px;">成都夜总会模特</a>
                        <span>￥1500元</span>
                    </div>
                </li>
                <li>
                    <div class="details-con">
                        <a href="javaScript:;" style="margin-bottom: 5px;">成都夜场模特</a>
                        <span>￥1500元</span>
                    </div>
                </li>
                <li>
                    <div class="details-con">
                        <a href="javaScript:;" style="margin-bottom: 5px;">成都酒吧模特</a>
                        <span>￥1500元</span>
                    </div>
                </li> -->
        </ul>
        <div class="details-btn">
          <a href="javaScript:;">
            <img src="@/assets/img/return_top1.png" class="return_top1" />
          </a>
        </div>
      </div>
      <!-- 内容 结束 -->
    </div>
  </div>
</template>

<style lang="less">
@import "../../assets/less/base.less";
.box {
  width: 100%;
  overflow: hidden;
  margin: auto;
  top: 0;
  left: 0;
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
    .top-t {
      width: 100%;
      height: (60 / @vw);
      display: flex;
      align-items: center;
      a {
        font-size: (50 / @vw);
        padding-left: (5 / @vw);
      }
      .top-btn {
        height: 100%;
        margin: (12 / @vw) (25 / @vw) 0;
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
        a {
          background-size: (22 / @vw);
          width: (22 / @vw);
          height: (22 / @vw);
          display: block;
          margin-right: (12 / @vw);
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
    }
    .pop-up {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: none;
      .pop-up-l {
        max-width: (768 / @vw);
        background: #fff;
        height: (60 / @vw);
        padding: (12 / @vw) (10 / @vw);
        display: flex;
        transition: all 0.5s;
        transform: translateX(0);
        opacity: 1;
        .pop-up-t {
          height: 100%;
          flex: 1;
          border-radius: 5em;
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
      }
    }
    .thickness {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: none;
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
          background-image: url(/img/share_but.png);
          background-position: 0 (-73 / @vw);
        }
        .microblog {
          background-image: url(/img/share_but.png);
          background-position: 0 0;
        }
        .bean {
          background-image: url(/img/share_but.png);
          background-position: 0 (-222 / @vw);
        }
      }
    }
  }

  // 高端模特
  .high-end {
    padding-top: (100 / @vw);
    height: (80 / @vw);
    background-color: #fff;
    margin-bottom: (10 / @vw);
    a {
      color: #525252;
      padding-left: (90 / @vw);
      font-size: (13 / @vw);
    }
  }

  // 内容
  .details {
    width: 100%;
    .details-top {
      background-color: #fff;
      width: 100%;
      overflow: hidden;
      margin: auto;
      li {
        overflow: hidden;
        border-bottom: (4 / @vw) solid #eee;
        list-style: none;
        margin-left: (10 / @vw);
        padding-right: (10 / @vw);
        .details-con {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-left: (10 / @vw);
          a {
            height: (80 / @vw);
            overflow: hidden;
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
      // display: none;
      a {
        position: fixed;
        right: 3%;
        bottom: 8%;
        .return_top1 {
          width: (100 / @vw);
          height: (100 / @vw);
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
      modelList: [
        {
          title: "成都夜总会模特",
          money: 1500,
        },
        {
          title: "成都夜场模特",
          money: 1500,
        },
        {
          title: "成都酒吧模特",
          money: 1500,
        },
        {
          title: "成都夜总会模特",
          money: 1500,
        },
        {
          title: "成都夜场模特",
          money: 1500,
        },
        {
          title: "成都酒吧模特",
          money: 1500,
        },
      ],
    };
  },
  methods: {
    onClickModel: function () {
      this.$router.push({ path: "/show/model" });
    },
  },
};
</script>
