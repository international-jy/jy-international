<template>
  <div class="xjg box">
    <!-- 模特展示2 -->
    <div class="model" v-for="value in modelList" :key="value.id">
      <!-- 头部 开始 -->
      <div class="model-top" ref="modelTop">
        <div class="back" @click="onClickBackGo">&lt;</div>
        <div class="dot" @click="onClickRemoveClass2">▪ ▪ ▪</div>
      </div>
      <!-- 滚动后的顶部 -->
      <div class="model-top2" :class="classFlag5 ? 'dn' : ''">
        <div class="back2" @click="go(-1)">&lt;</div>
        <ul>
          <li :class="classFlag6 ? 'line' : ''" @click="onClickBackTop">
            商品
          </li>
          <li :class="classFlag6 ? '' : 'line'" @click="onClickTiaoTop">
            详情
          </li>
        </ul>
        <div class="dot2" @click="onClickRemoveClass2">▪ ▪ ▪</div>
      </div>

      <!-- 右边按钮点击后 导航显示 -->
      <div class="mone-nav" :class="classFlag2 ? 'dn' : ''">
        <div class="trian">◆</div>
        <ul>
          <li>
            <a href="/home"> <img src="@/assets/img/home.png" alt="" />首页</a>
          </li>
          <li><img src="@/assets/img/dot1.png" alt="" class="myimg" />我的</li>
          <li @click="onClickRemoveClass">
            <img src="@/assets/img/dot.png" alt="" />推荐
          </li>
          <li><img src="@/assets/img/collection.png" alt="" />收藏</li>
        </ul>
      </div>
      <!-- 头部 结束 -->

      <!-- 内容详情 开始 -->
      <div class="cont-mid" @click="onClickRemoveClass3" ref="mid">
        <div class="mid-num">
          <div class="num-img" @click="onClickBigImg">
            <img :src="value.image" alt="" />
          </div>
          <div class="num-money">
            <p>
              ¥ <span>{{ value.price }}</span>
            </p>
            <div class="recom" @click="onClickRemoveClass">
              <img src="@/assets/img/share.png" alt="" /><br />
              <span>推荐</span>
            </div>
          </div>
          <h2>{{ value.title }}</h2>
        </div>
        <!-- 点击图片 放大图片 -->
        <div
          class="bigimg"
          :class="classFlag3 ? 'dn' : ''"
          @click="onClickBigImg"
        >
          <img :src="value.image" alt="" />
        </div>
        <!-- 点击分享的弹层 开始 -->
        <div class="share-mono" :class="classFlag ? 'dn' : ''">
          <div class="mono-cont">
            <div class="mono-top">
              <div class="mono-img">
                <img :src="value.image" alt="" />
              </div>
              <div class="mono-text">
                <p>
                  ¥ <span>{{ value.price }}</span>
                </p>
                <h3>{{ value.title }}</h3>
                <b @click="onClickSaveImg">点击预览分享图</b>
              </div>
            </div>
            <div class="mono-bot">
              <p>保存图片到手机分享给您的好友</p>
              <ul>
                <li @click="onClickSaveImg">
                  <img src="@/assets/img/save.png" alt="" />
                  <p>保存图片</p>
                </li>
                <li>
                  <img src="@/assets/img/link.png" alt="" />
                  <p>复制链接</p>
                </li>
              </ul>
              <button @click="onClickRemoveClass">取消</button>
            </div>
          </div>
        </div>
        <!-- 点击分享的弹层 结束 -->

        <!-- 点击保存图片 弹出图片 开始 -->
        <div
          class="saveimg"
          :class="classFlag4 ? 'dn' : ''"
          @click="onClickSaveImg"
        >
          <p>长按将图片保存至手机</p>
          <img src="@/assets/img/sharePro_1913406_0.png" alt="" />
        </div>
        <!-- 点击保存图片 弹出图片 结束 -->
      </div>
      <!-- 内容详情 结束 -->

      <!-- 产品说明 开始 -->
      <div class="product" ref="productTop">
        <div class="product-text">
          <span>产品说明</span>
        </div>
        <div class="product-img">
          <img :src="value.image" alt="" />
        </div>
      </div>
      <!-- 产品说明 结束 -->

      <!-- 相关产品 开始 -->
      <div class="correlation">
        <div class="corre-tit">
          <h3>相关产品</h3>
        </div>
        <ul>
          <li
            v-for="item in modelListAll"
            :key="item.id"
            @click="getData(item.id)"
          >
            <div class="li-img">
              <img :src="item.image" alt="" />
            </div>
            <div class="li-text">
              <h3>{{ item.title }}</h3>
              <p>¥{{ item.price }}</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 相关产品 结束 -->

      <!-- 点击回到顶部 开始 -->
      <div
        class="backtop"
        @click="onClickBackTop"
        :class="classFlag5 ? 'dn' : ''"
      >
        <img src="@/assets/img/gotop.png" alt="" />
      </div>
      <!-- 点击回到顶部 结束 -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classFlag: true,
      classFlag2: true,
      classFlag3: true,
      classFlag4: true,
      classFlag5: true,
      classFlag6: true,
      dataId: null,
      modelListAll: [],
      modelList: [],
    };
  },

  created() {
    this.dataId = Number(this.$route.query.id);
    console.log(this.dataId);
    let that = this;
    this.$axios
      .get("/index.php/api/models/list?id=" + that.dataId)
      .then((val) => {
        // console.log(val.data);
        that.modelList.push(val.data.find((value) => value.id == that.dataId));
        val.data.forEach((e) => {
          if (e.id != that.dataId) {
            that.modelListAll.push(e);
          }
        });
      });
    console.log(this.modelListAll);
  },

  methods: {
    // 点击返回上一个页面
    onClickBackGo() {
      this.$router.push("/show");
    },
    getData(num) {
      this.modelListAll.splice(0, this.modelListAll.length);
      this.$router.push({
        path: "/show/model",
        replace: true,
        query: {
          id: num,
        },
      });
      this.$router.go(0);
      this.dataId = Number(this.$route.query.id);
      console.log(this.dataId);
      let that = this;
      this.$axios.get("/index.php/api/models/list?id=" + num).then((val) => {
        // console.log(val.data);
        that.modelList.push(val.data.find((value) => value.id == that.dataId));
        val.data.forEach((e) => {
          if (e.id != that.dataId) {
            that.modelListAll.push(e);
          }
        });
      });
      console.log(this.modelListAll);
    },
    go(step) {
      console.log(step);
      this.$router.go(step);
    },
    onClickRemoveClass: function () {
      this.classFlag = !this.classFlag;
      console.log(111);
    },
    onClickRemoveClass2: function () {
      this.classFlag2 = !this.classFlag2;
      // console.log(111);
    },
    onClickRemoveClass3: function () {
      this.classFlag2 = true;
      // console.log(111);
    },
    onClickBigImg: function () {
      this.classFlag3 = !this.classFlag3;
    },
    onClickSaveImg: function () {
      console.log(111);
      this.classFlag4 = !this.classFlag4;
    },

    // 回到顶部
    onClickBackTop: function () {
      let scrollTop = window.pageYOffset;
      // 每0.01秒向上移动100像素，直到小于或等于0结束
      let timer = setInterval(() => {
        scrollTop -= 20;
        // 为负数，浏览器会不处理得
        window.scrollTo(0, scrollTop);
        if (scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 8);
      // window.scrollTo(0, 0);
    },

    onClickTiaoTop: function () {
      var midHeight = this.$refs.mid.offsetHeight;
      var modelHeight = this.$refs.modelTop.offsetHeight;

      window.scrollTo(midHeight - modelHeight, midHeight - modelHeight);
    },
    //滚动监听
    scrollHandle(e) {
      // console.log(this);
      // console.log(this.$refs);

      let top = e.srcElement.scrollingElement.scrollTop; // 获取页面滚动高度
      var modelHeight = this.$refs.modelTop.offsetHeight;
      var midHeight = this.$refs.mid.offsetHeight;
      if (top > modelHeight) {
        this.classFlag5 = false;
      } else {
        this.classFlag5 = true;
      }
      if (top > midHeight) {
        this.classFlag6 = false;
      } else {
        this.classFlag6 = true;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle); //绑定页面滚动事件
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollHandle); //移除页面滚动事件
  },
};
</script>

<style lang="less" scope>
@import "../../assets/less/base.less";

@keyframes opcityTop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
// 模特展示2
.model {
  position: relative;
  background-color: rgb(242, 242, 242) !important;
  .model-top {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: (20 / @vw) (30 / @vw);
    // border: 1px solid red;
    box-sizing: border-box;
    animation: opcityTop 0.5s linear;
    transition: 1s all;
    div {
      width: (70 / @vw);
      height: (70 / @vw);
      line-height: (70 / @vw);
      border-radius: (35 / @vw);
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      font-weight: 700;
      font-size: (25 / @vw);
      color: #fff;
    }
    .back {
      font-size: (40 / @vw);
      font-weight: 400;
    }
  }

  .model-top2 {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: (20 / @vw) (30 / @vw);
    box-sizing: border-box;
    background-color: #fff;
    animation: opcityTop 0.5s linear;
    transition: 1s all;
    ul {
      display: flex;
      justify-content: center;
      li {
        line-height: (70 / @vw);
        margin-right: (40 / @vw);
        font-size: (28 / @vw);
      }
      .line {
        border-bottom: 2px solid rgb(0, 125, 255);
        font-weight: 700;
      }
    }
    div {
      width: (70 / @vw);
      height: (70 / @vw);
      line-height: (70 / @vw);
      text-align: center;
      font-weight: 700;
      font-size: (25 / @vw);
      color: #000;
    }
    .back2 {
      font-size: (50 / @vw);
      font-weight: 400;
    }
  }

  .mone-nav {
    position: fixed;
    width: 35%;
    background-color: rgba(255, 255, 255, 0.9);
    right: (30 / @vw);
    top: (140 / @vw);
    text-align: right;
    border-radius: (10 / @vw);
    .trian {
      color: rgba(255, 255, 255, 0.9);
      margin-top: (-34 / @vw);
      font-size: (50 / @vw);
      margin-right: (5 / @vw);
    }
    ul {
      padding: 0 (15 / @vw) (10 / @vw);
      text-align: left;
      margin-top: (-20 / @vw);
      li {
        line-height: (70 / @vw);
        border-bottom: 1px solid #ccc;
        font-size: (28 / @vw);
        color: #666;
        a {
          width: 100%;
        }
        img {
          width: 18%;
          vertical-align: middle;
          margin-right: (20 / @vw);
        }
        .myimg {
          width: 14%;
          margin-left: (5 / @vw);
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

// 内容详情 开始
.cont-mid {
  background-color: #fff;
  padding-bottom: (50 / @vw);
  // border: 1px solid red;
  margin-bottom: (30 / @vw);
  box-sizing: border-box;
  .mid-num {
    .num-img {
      img {
        width: 100%;
        height: auto;
      }
    }
    .num-money {
      display: flex;
      justify-content: space-between;
      padding: (20 / @vw) (30 / @vw);
      align-items: center;
      margin-bottom: (20 / @vw);
      p {
        color: rgb(250, 35, 10);
        font-size: (30 / @vw);
        span {
          font-size: (50 / @vw);
        }
      }
      .recom {
        border-left: 1px solid #ccc;
        padding-left: (30 / @vw);
        img {
          width: (40 / @vw);
        }
        span {
          color: #999;
          font-size: (20 / @vw);
        }
      }
    }

    h2 {
      font-size: (35 / @vw);
      padding-left: (20 / @vw);
      color: #000;
    }
  }
}
// 点击图片 放大图片
.bigimg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  text-align: center;
  z-index: 99;
  img {
    width: 100%;
    // height:80%;
    margin-top: 30%;
  }
}
// 点击分享弹层
.share-mono {
  position: relative;
  position: fixed;
  left: 0;
  top: 0;
  // z-index: 99;
  width: 100%;
  height: 100%;
  padding-top: (80 / @vw);
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  .mono-cont {
    width: 100%;
    height: 100%;
    text-align: center;
    .mono-top {
      position: absolute;
      left: 12%;
      bottom: 30%;
      width: 72%;
      padding: (30 / @vw) (20 / @vw) (50 / @vw) (20 / @vw);
      text-align: center;
      background-color: #fff;
      border-radius: (20 / @vw);
      margin: 0 auto;
      z-index: 99;
      .mono-text {
        text-align: center;
        p {
          text-align: left;
          font-size: (25 / @vw);
          color: rgb(250, 35, 10);
          margin: (30 / @vw) 0;
          span {
            font-size: (30 / @vw);
          }
        }
        h3 {
          text-align: left;
          font-size: (28 / @vw);
          color: #111;
          font-weight: 400;
          margin: (15 / @vw) 0;
        }
        b {
          font-weight: 400;
          color: #777;
          text-align: center;
          font-size: (22 / @vw);
        }
      }
      img {
        width: 80%;
      }
    }

    .mono-bot {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 88;
      width: 100%;
      background-color: rgb(246, 246, 246);
      padding-top: (80 / @vw);
      text-align: center;
      p {
        color: #777;
        text-align: center;
        font-size: (24 / @vw);
        margin: (40 / @vw) 0;
      }
      ul {
        display: flex;
        justify-content: center;
        margin-bottom: (30 / @vw);
        li {
          margin-right: (20 / @vw);
          img {
            width: (110 / @vw);
            margin-bottom: (5 / @vw);
          }
          p {
            margin: 0;
            font-size: (28 / @vw);
            color: #111;
          }
        }
      }
      button {
        width: 100%;
        outline: none;
        border: none;
        line-height: (90 / @vw);
        background-color: #fff;
        font-size: (28 / @vw);
      }
    }
  }
}

// 点击保存图片 弹出图片
.saveimg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99;
  text-align: center;
  padding-top: 20%;
  p {
    font-size: (25 / @vw);
    text-align: center;
    margin: (20 / @vw) 0;
    color: #666;
  }
  img {
    width: 80%;
  }
}

// 内容详情 结束

// 产品说明 开始

.product {
  background-color: #fff;
  padding: (30 / @vw) (30 / @vw);
  margin-bottom: (30 / @vw);
  .product-text {
    text-align: center;
    margin-bottom: (30 / @vw);
    span {
      font-size: (30 / @vw);
      color: #111;
      font-weight: 700;
      padding-bottom: (10 / @vw);
      border-bottom: 2px solid rgb(0, 125, 255);
    }
  }
  .product-img {
    img {
      width: 100%;
    }
  }
}

// 产品说明 结束

// 相关产品 开始

.correlation {
  background-color: #fff;
  padding: (30 / @vw) (20 / @vw);
  .corre-tit {
    margin-bottom: (20 / @vw);
    h3 {
      font-size: (30 / @vw);
      color: #111;
      // font-weight: 500;
      // text-indent: ;
    }
  }
  ul {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 33.3%;
      text-align: center;
      margin-bottom: (30 / @vw);
      .li-img {
        margin-bottom: (15 / @vw);
        img {
          width: 60%;
        }
      }
      .li-text {
        h3 {
          // text-align: left;
          font-weight: 400;
          font-size: (25 / @vw);
          margin-bottom: (20 / @vw);
        }
        p {
          // text-align: left;
          font-weight: 700;
          color: rgb(250, 35, 10);
        }
      }
    }
  }
}
// 相关产品 结束

//  点击回到顶部 开始

.backtop {
  position: fixed;
  right: (30 / @vw);
  top: 85%;
  width: (80 / @vw);
  height: (80 / @vw);
}
//  点击回到顶部 结束
</style>
